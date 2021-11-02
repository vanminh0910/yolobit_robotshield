Blockly.Blocks['robotshield_move'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_move",
        "message0": "%1 di chuyển %2 với tốc độ %3 (0-100)",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/move_block.svg",
            "width": 20,
            "height": 20,
            "alt": "",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/forward.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "forward"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/backward.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "backward"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/turn_left.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_left"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/turn_right.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_right"
              ]
            ]
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_move"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var dir = block.getFieldValue("direction");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "motor." + dir + "(" + speed + ")\n";
  return code;
};

Blockly.Blocks['robotshield_move_delay'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_move_delay",
        "message0": "%1 di chuyển %2 với tốc độ %3 (0-100) trong %4 giây",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/move_block.svg",
            "width": 20,
            "height": 20,
            "alt": "",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/forward.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "forward"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/backward.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "backward"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/turn_left.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_left"
              ],
              [
                {
                  "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/turn_right.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "turn_right"
              ]
            ]
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            value: 50,
            name: "speed",
          },
          {
            min: 0,
            type: "input_value",
            check: "Number",
            name: "time",
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_move_delay"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var dir = block.getFieldValue("direction");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "motor." + dir + "(" + speed + "," + time + ")\n";
  return code;
};

Blockly.Blocks['robotshield_motor_speed'] = {
  init: function() {
    this.jsonInit(
    {
        "type": "robotshield_motor_speed",
        "message0": "%3 quay động cơ trái tốc độ %1 động cơ phải %2 (-100 đến 100)",
        "args0": [
          {
            "type": "input_value",
            "name": "left_wheel_speed",
            "check": "Number",
        },
        {
            "type": "input_value",
            "name": "right_wheel_speed",
            "check": "Number",
        },
        {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/motor_block.svg",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
        }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
    }
    );
  }
};

Blockly.Python["robotshield_motor_speed"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var left_wheel_speed = Blockly.Python.valueToCode(block, 'left_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  var right_wheel_speed = Blockly.Python.valueToCode(block, 'right_wheel_speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "motor.set_wheel_speed(" + left_wheel_speed + ", " + right_wheel_speed + ")\n";
  return code;
};

Blockly.Blocks['robotshield_stop'] = {
  init: function() {
    this.jsonInit(
    {
        "type": "robotshield_stop",
        "message0": "%1 dừng di chuyển",
        "args0": [
            {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/stop.svg",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
            }],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
        
    }
    );
  }
};

Blockly.Python["robotshield_stop"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  // TODO: Assemble Python into code variable.
  var code = "motor.stop()\n";
  return code;
};

Blockly.Blocks['robotshield_servo_position'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_servo_position",
        "message0": "%3 servo %1 xoay góc %2 (0-180)",
        "args0": [
          
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/servo_block.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_servo_position"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ", " + angle + ")\n";
  return code;
};

Blockly.Blocks['robotshield_servo270_position'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_servo270_position",
        "message0": "%3 servo (270°) %1 xoay góc %2 (0-270)",
        "args0": [
          
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "angle",
            "check": "Number"
          },
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/servo_block.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_servo270_position"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ", " + angle + ", max_degrees=270)\n";
  return code;
};

Blockly.Blocks['robotshield_servo360_spin'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_servo360_spin",
        "message0": "%1 servo (360°) %2 xoay với tốc độ %3(-100 đến 100)",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/servo_block.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_servo360_spin"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.spin(" + servo + ", " + speed + ")\n";
  return code;
};

Blockly.Blocks['robotshield_servo_rotate'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_servo_rotate",
        "message0": "%1 servo %2 xoay %3 độ tốc độ %4 (ms) giới hạn góc %5 độ",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/servo_block.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "change",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "limit",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_servo_rotate"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var change = Blockly.Python.valueToCode(block, 'change', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var limit = Blockly.Python.valueToCode(block, 'limit', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.rotate(" + servo + ", " + change + ", " + speed + ", " + limit + ")\n";
  return code;
};

Blockly.Blocks['robotshield_servo270_rotate'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "robotshield_servo270_rotate",
        "message0": "%1 servo (270°) %2 xoay %3 độ tốc độ %4 (ms) giới hạn góc %5 độ",
        "args0": [
          {
            "type": "field_image",
            "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/servo_block.webp",
            "width": 20,
            "height": 20,
            "alt": "*",
            "flipRtl": false
          },
          {
            "type": "field_dropdown",
            "name": "servo",
            "options": [
              [
                "S1",
                "0"
              ],
              [
                "S2",
                "1"
              ],
              [
                "S3",
                "2"
              ],
              [
                "S4",
                "3"
              ],
              [
                "S5",
                "4"
              ],
              [
                "S6",
                "5"
              ],
              [
                "S7",
                "6"
              ],
              [
                "S8",
                "7"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "change",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "limit",
            "check": "Number"
          }
        ],
        "inputsInline": true,
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#00CEB9",
        "tooltip": "",
        "helpUrl": ""
      }
    );
  }
};

Blockly.Python["robotshield_servo270_rotate"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var change = Blockly.Python.valueToCode(block, 'change', Blockly.Python.ORDER_ATOMIC);
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var limit = Blockly.Python.valueToCode(block, 'limit', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.rotate(" + servo + ", " + change + ", " + speed + ", " + limit + ", max_degrees=270)\n";
  return code;
};

Blockly.Blocks["robotshield_servo_read_position"] = {
  init: function () {
    this.jsonInit({
      type: "robotshield_servo_read_position",
      colour: "#00CEB9",
      tooltip: "",
      message0: "%1 servo %2 lấy vị trí hiện tại",
      args0: [
        {
          "type": "field_image",
          "src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_robotshield/images/servo_block.webp",
          "width": 20,
          "height": 20,
          "alt": "*",
          "flipRtl": false
        },
        {
          "type": "field_dropdown",
          "name": "servo",
          "options": [
            [
              "S1",
              "0"
            ],
            [
              "S2",
              "1"
            ],
            [
              "S3",
              "2"
            ],
            [
              "S4",
              "3"
            ],
            [
              "S5",
              "4"
            ],
            [
              "S6",
              "5"
            ],
            [
              "S7",
              "6"
            ],
            [
              "S8",
              "7"
            ]
          ]
        }
      ],
      output: "Number",
      helpUrl: ""
    });
  },
};

Blockly.Python["robotshield_servo_read_position"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ")";
  return [code, Blockly.Python.ORDER_NONE];
};

