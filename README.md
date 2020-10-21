# yolobit_robotshield
Yolo:Bit extension for Robot shield

# Example code
```sh
import robotshield, time

robotshield.motors.move(90, 100)
while True:
    robotshield.servos.position(0, 0)
    time.sleep(0.5)
    robotshield.servos.position(0, 180)
    time.sleep(0.5)
```