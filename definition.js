Blockly.Blocks['block_move_move'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_move_move",
        "message0": "%1 di chuyển %2 với tốc độ %3 (0-100)",
        "args0": [
          {
            "type": "field_image",
            "src": "https://s3-ap-southeast-1.amazonaws.com/codeblock.ohstem.vn/block_images/move.png",
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
                  "src": "https://image.flaticon.com/icons/svg/59/59043.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "90"
              ],
              [
                {
                  "src": "https://image.flaticon.com/icons/svg/959/959159.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "270"
              ],
              [
                {
                  "src": "https://image.flaticon.com/icons/svg/860/860774.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "180"
              ],
              [
                {
                  "src": "https://image.flaticon.com/icons/svg/74/74474.svg",
                  "width": 15,
                  "height": 15,
                  "alt": "*"
                },
                "0"
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

Blockly.Python["block_move_move"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var dir = block.getFieldValue("direction");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "motor.move(" + dir + ", " + speed + ")\n";
  return code;
};

Blockly.Blocks['block_move_motor'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_move_motor",
        "message0": "%3 động cơ %1 với tốc độ  %2 (-100 đến 100)",
        "args0": [
          {
            "type": "field_dropdown",
            "name": "motor",
            "options": [
              [
                "M1",
                "0"
              ],
              [
                "M2",
                "1"
              ]
            ]
          },
          {
            "type": "input_value",
            "name": "speed",
            "check": "Number",
          },
          {
            "type": "field_image",
            "src": "https://image.flaticon.com/icons/svg/2479/2479548.svg",
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

Blockly.Python["block_move_motor"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var motor = block.getFieldValue("motor");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "motor.speed(" + motor + ", " + speed + ")\n";
  return code;
};


Blockly.Blocks['block_move_stop'] = {
  init: function() {
    this.jsonInit(
      {
        
          "type": "block_move_stop",
          "message0": "%1 dừng di chuyển",
          "args0": [
            {
              "type": "field_image",
              "src": "https://www.flaticon.com/svg/static/icons/svg/827/827428.svg",
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

Blockly.Python["block_move_stop"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  // TODO: Assemble Python into code variable.
  var code = "motor.move(0, 0)\n";
  return code;
};


Blockly.Blocks['block_move_servo'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_move_servo",
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
            "src": "https://image.winudf.com/v2/image/YXBwaW52ZW50b3IuYWlfeXNyZ2dzLlNlcnZvbW90b3Jrb250cm9sX2ljb25fYTV2MXE0cHk/icon.png?w=170&fakeurl=1",
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

Blockly.Python["block_move_servo"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var angle = Blockly.Python.valueToCode(block, 'angle', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.position(" + servo + ", " + angle + ")\n";
  return code;
};

Blockly.Blocks['block_move_servo360'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "block_move_servo360",
        "message0": "%1 servo (360°) %2 xoay %3 tốc độ %4(0-100)",
        "args0": [
          {
            "type": "field_image",
            "src": "https://image.winudf.com/v2/image/YXBwaW52ZW50b3IuYWlfeXNyZ2dzLlNlcnZvbW90b3Jrb250cm9sX2ljb25fYTV2MXE0cHk/icon.png?w=170&fakeurl=1",
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
            "type": "field_dropdown",
            "name": "direction",
            "options": [
              [
                "tới",
                "0"
              ],
              [
                "lui",
                "1"
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

Blockly.Python["block_move_servo360"] = function (block) {
  Blockly.Python.definitions_['import_robotshield'] = 'from robotshield import *';
  var servo = block.getFieldValue("servo");
  var dir = block.getFieldValue("direction");
  var speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = "servo.spin(" + servo + ", " + dir + ", " + speed + ")\n";
  return code;
};


