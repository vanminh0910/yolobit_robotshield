import machine, math, pca9685, time
from machine import Pin

_DC_MOTORS = ((8, 9, 10), (13, 12, 11))

class DCMotors:
    def __init__(self, pca9685_obj, freq=50):
        self.pca9685 = pca9685_obj
        self.pca9685.freq(freq)

        self.m1_speed = 0
        self.m2_speed = 0

    def translate(self, value, left_min, left_max, right_min, right_max):
        # Figure out how 'wide' each range is
        left_span = left_max - left_min
        right_span = right_max - right_min

        # Convert the left range into a 0-1 range (float)
        value_scaled = float(value - left_min) / float(left_span)

        # Convert the 0-1 range into a value in the right range.
        return right_min + (value_scaled * right_span)

    def _pin(self, pin, value=None):
        if value is None:
            return bool(self.pca9685.pwm(pin)[0])
        if value:
            self.pca9685.pwm(pin, 4096, 0)
        else:
            self.pca9685.pwm(pin, 0, 0)

    def speed(self, index, value=None):
        pwm, in2, in1 = _DC_MOTORS[index]

        if value is None:
            value = self.pca9685.duty(pwm)
            if self._pin(in2) and not self._pin(in1):
                value = -value
            return value
            
        value = max(min(100, value),-100)

        if index == 0 :
          self.m1_speed = value
        else:
          self.m2_speed = value

        if value > 0:
            # Forward
            self._pin(in2, False)
            self._pin(in1, True)
        elif value < 0:
            # Backward
            self._pin(in1, False)
            self._pin(in2, True)
        else:
            # Release
            self._pin(in1, False)
            self._pin(in2, False)
        self.pca9685.duty(pwm, int(self.translate(abs(value), 0, 100, 0, 4095)))

    def brake(self, index):
        pwm, in2, in1 = _DC_MOTORS[index]
        self._pin(in1, True)
        self._pin(in2, True)
        self.pca9685.duty(pwm, 0)
    
    def move(self, dir, speed=None):

        # calculate direction based on angle
        #         90(3)
        #   135(4) |  45(2)
        # 180(5)---+----Angle=0(dir=1)
        #   225(6) |  315(8)
        #         270(7)

        if speed == None:
            speed = self._speed

        if dir == 1:
            self.turn_right(speed/2)

        elif dir == 2:
            self.set_wheel_speed(speed, speed/2)

        elif dir == 3:
            self.forward(speed)

        elif dir == 4:
            self.set_wheel_speed(speed/2, speed)

        elif dir == 5:
            self.turn_left(speed/2)

        elif dir == 6:
            self.set_wheel_speed(-speed/2, -speed)
      
        elif dir == 7:
            self.backward(speed)

        elif dir == 8:
            self.set_wheel_speed(-speed, -speed/2)

        else:
            self.stop()

    def set_wheel_speed(self, left_wheel_speed, right_wheel_speed):
        self.speed(0, int(left_wheel_speed))
        self.speed(1, int(right_wheel_speed))
    
    def __go(self, forward=True, speed=None, t=None):

        if speed < 0 or speed > 100 or (t != None and t < 0):
            return

        if forward:
          # stop first if robot is moving forward
          if self.m1_speed < 0 and self.m2_speed < 0:
              self.stop()
              time.sleep_ms(300)

          self.set_wheel_speed(speed, speed)
        else:
          # stop first if robot is moving forward
          if self.m1_speed > 0 and self.m2_speed > 0:
              self.stop()
              time.sleep_ms(300)

          self.set_wheel_speed(-speed, -speed)

        if t != None :
            time.sleep(t)
            self.stop()
    
    def __turn_backward(self, right=True, speed=None, t=None):
        if speed < 0 or speed > 100 or (t != None and t < 0):
            return

        if right:
            self.set_wheel_speed(-speed, -speed/2)
        else:
            self.set_wheel_speed(-speed/2, -speed)            

        if t != None :
            time.sleep(t)
            self.stop()

    def __turn(self, right=True, speed=30, t=None):
        if speed == None:
            speed = self._speed
            
        if speed < 0 or speed > 100 or (t != None and t < 0):
            return

        if right:
            self.set_wheel_speed(speed, -speed)
        else:
            self.set_wheel_speed(-speed, speed)

        if t != None :
            time.sleep(t)
            self.stop()
    
    def forward(self, speed=None, t=None):
        self.__go(True, speed, t)

    def backward(self, speed=None, t=None):
        self.__go(False, speed, t)

    def turn_left(self, speed=None, t=None):
        self.__turn(False, speed, t)

    def turn_right(self, speed=None, t=None):
        self.__turn(True, speed, t)
    
    def turn_left_backward(self, speed=None, t=None):
        self.__turn_backward(False, speed, t)

    def turn_right_backward(self, speed=None, t=None):
        self.__turn_backward(True, speed, t)

    def stop(self):
        self.set_wheel_speed(0, 0)


class Servos:
  def __init__(self, pca9685_obj, freq=50, min_us=400, max_us=2400, default_degrees=180):
    self.period = 1000000 / freq
    self.min_duty = self._us2duty(min_us)
    self.max_duty = self._us2duty(max_us)
    self.default_degrees = default_degrees
    self.freq = freq
    self.pca9685 = pca9685_obj
    self.pca9685.freq(freq)

    self.pos = []
    for i in range(8):
      self.pos.append(90)

  def _us2duty(self, value):
    return int(4095 * value / self.period)

  def position(self, index, degrees=None, max_degrees=180):
    if index < 0 or index > 7:
      return
    
    if degrees == None:
      return self.pos[index]

    if degrees < 0 or degrees > max_degrees:
      return

    if max_degrees == 270 and degrees < 2:
      degrees = 2

    span = self.max_duty - self.min_duty
    duty = self.min_duty + span * degrees / max_degrees
    duty = min(self.max_duty, max(self.min_duty, int(duty)))
    self.pca9685.duty(index, duty)
    self.pos[index] = degrees

  def rotate(self, index, change=2, sleep=10, limit=None, max_degrees=180):
    if index < 0 or index > 7:
      return

    while True:
      new_pos = self.pos[index] + change

      if limit == None:
        if change <= 0:
          limit = 0
        else:
          limit = max_degrees

      if (change <= 0 and new_pos < limit) or (change > 0 and new_pos > limit):
        return

      span = self.max_duty - self.min_duty
      duty = self.min_duty + span * new_pos / max_degrees
      duty = min(self.max_duty, max(self.min_duty, int(duty)))
      self.pca9685.duty(index, duty)
      self.pos[index] = new_pos
      time.sleep_ms(sleep)

  def release(self, index):
    self.pca9685.duty(index, 0)

  def spin(self, index, speed):
    if index < 0 or index > 7 or speed < -100 or speed > 100:
      return
    
    if speed == 0:
      self.release(index)
      return

    degree = 90 - (speed/100)*90
    self.position(index, degree)

try:
    from machine import SoftI2C
    __i2c = SoftI2C(scl=Pin(22), sda=Pin(21), freq=200000)
except Exception as e:
    print("SoftI2C not exist. Using old I2C", e)
    from machine import I2C
    __i2c = I2C(scl=Pin(22), sda=Pin(21), freq=200000)

pca9685_obj = pca9685.PCA9685(__i2c, 0x40)
motor = DCMotors(pca9685_obj)
servo = Servos(pca9685_obj)