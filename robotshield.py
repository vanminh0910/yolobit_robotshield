import machine, math, pca9685

_DC_MOTORS = ((8, 9, 10), (13, 12, 11))

class DCMotors:
    def __init__(self, i2c, address=0x40, freq=1600):
        self.pca9685 = pca9685.PCA9685(i2c, address)
        self.pca9685.freq(freq)

    def _pin(self, pin, value=None):
        if value is None:
            return bool(self.pca9685.pwm(pin)[0])
        if value:
            self.pca9685.pwm(pin, 4096, 0)
        else:
            self.pca9685.pwm(pin, 0, 0)

    def move(self, dir, speed):
        if dir < 0 or dir > 360:
          return

        m1 = 0
        m2 = 0
        
        if dir >=0 and dir <=90:
          # first quarter
          m1 = speed
          m2 = speed*(dir/90)
        elif dir > 90 and dir <= 180:
          # second quarter
          m1 = (1-(dir-90)/90)*speed
          m2 = speed
        elif dir >180 and dir <=270:
          # 3rd quarter
          m1 = -speed*(dir-180)/90
          m2 = -speed
        elif dir > 270 and dir <= 360:
          # 4th quarter
          m1 = -speed
          m2 = -speed*(1-(dir-270)/90)
        else:
          m1 = 0
          m2 = 0

        self.speed(0, int(m1))
        self.speed(1, int(m2))

    def speed(self, index, value=None):
        pwm, in2, in1 = _DC_MOTORS[index]
        if value is None:
            value = self.pca9685.duty(pwm)
            if self._pin(in2) and not self._pin(in1):
                value = -value
            return value
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
        self.pca9685.duty(pwm, abs(value))

    def brake(self, index):
        pwm, in2, in1 = _DC_MOTORS[index]
        self._pin(in1, True)
        self._pin(in2, True)
        self.pca9685.duty(pwm, 0)


class Servos:
    def __init__(self, i2c, address=0x40, freq=50, min_us=600, max_us=2400,
                 degrees=180):
        self.period = 1000000 / freq
        self.min_duty = self._us2duty(min_us)
        self.max_duty = self._us2duty(max_us)
        self.degrees = degrees
        self.freq = freq
        self.pca9685 = pca9685.PCA9685(i2c, address)
        self.pca9685.freq(freq)

    def _us2duty(self, value):
        return int(4095 * value / self.period)

    def position(self, index, degrees=None, radians=None, us=None, duty=None):
        span = self.max_duty - self.min_duty
        if degrees is not None:
            duty = self.min_duty + span * degrees / self.degrees
        elif radians is not None:
            duty = self.min_duty + span * radians / math.radians(self.degrees)
        elif us is not None:
            duty = self._us2duty(us)
        elif duty is not None:
            pass
        else:
            return self.pca9685.duty(index)
        duty = min(self.max_duty, max(self.min_duty, int(duty)))
        self.pca9685.duty(index, duty)

    def spin(self, index, direction, speed):
        degree = 0
        
        if direction == 0: #forward
            degree = 100 - (speed/100)*100
        else: #reverse
            degree = 100 + (speed/100)*80

        self.position(index, degree)

    def release(self, index):
        self.pca9685.duty(index, 0)

i2c_pins = machine.I2C(scl=machine.Pin(22), sda=machine.Pin(21))
motor = DCMotors(i2c_pins)
servo = Servos(i2c_pins)