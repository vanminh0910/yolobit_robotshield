Blockly.Blocks['lcd1602_create'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "lcd1602_create",
        "message0": Blockly.Msg.LCD1602_CREATE_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "lcd",
            "variable": "lcd"
          },
          {
            "type": "field_number",
            "name": "WIDTH",
            "value": 16,
            "min": 0
          },
          {
            "type": "field_number",
            "name": "HEIGHT",
            "value": 2,
            "min": 0
          },
          {
            "type": "field_input",
            "name": "ADDR",
            "text": "0x27"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.LCD1602_CREATE_TOOLTIP,
        "helpUrl": Blockly.Msg.LCD1602_CREATE_HELPURL
      }
    );
  }
};

Blockly.Python['lcd1602_create'] = function(block) {
  var variable_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('lcd'), Blockly.Variables.NAME_TYPE);
  var number_width = block.getFieldValue('WIDTH');
  var number_height = block.getFieldValue('HEIGHT');
  var text_addr = block.getFieldValue('ADDR');

  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_yolobit'] = 'from yolobit import *';
  Blockly.Python.definitions_['import_i2c'] = 'from machine import Pin, I2C';
  Blockly.Python.definitions_['import_lcd1602'] = 'from rgb1602 import *';
  //lcd = LCD1602(I2C(scl=Pin(22), sda=Pin(21)), 0x27)
  var code = variable_lcd + ' = LCD1602(I2C(scl=Pin(22), sda=Pin(21)), ' + text_addr + ')\n';
  return code;
};

Blockly.Blocks['lcd1602_text'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "lcd1602_text",
        "message0": Blockly.Msg.LCD1602_TEXT_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "lcd",
            "variable": "lcd"
          },
          {
            "type": "input_dummy"
          },
          {
            "type": "input_value",
            "name": "TEXT"
          },
          {
            "type": "input_value",
            "name": "COL",
            "check": "Number"
          },
          {
            "type": "input_value",
            "name": "ROW",
            "check": "Number"
          },
          {
            "type": "input_dummy"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.LCD1602_TEXT_TOOLTIP,
        "helpUrl": Blockly.Msg.LCD1602_TEXT_HELPURL
      }
    );
  }
};

Blockly.Python['lcd1602_text'] = function(block) {
  var variable_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('lcd'), Blockly.Variables.NAME_TYPE);
  var value_text = Blockly.Python.valueToCode(block, 'TEXT', Blockly.Python.ORDER_ATOMIC);
  var value_col = Blockly.Python.valueToCode(block, 'COL', Blockly.Python.ORDER_ATOMIC);
  var value_row = Blockly.Python.valueToCode(block, 'ROW', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  //lcd.text('Hello, World 1!', 0, 0)
  var code = variable_lcd + '.text(str(' + value_text + '), ' + value_col + ', ' + value_row + ')\n';
  return code;
};

Blockly.Blocks['lcd1602_onoff'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "lcd1602_onoff",
        "message0": Blockly.Msg.LCD1602_ONOFF_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "lcd",
            "variable": "lcd"
          },
          {
            "type": "field_dropdown",
            "name": "ONOFF",
            "options": [
              [
                Blockly.Msg.LCD1602_ONOFF_MESSAGE1,
                "ON"
              ],
              [
                Blockly.Msg.LCD1602_ONOFF_MESSAGE2,
                "OFF"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.LCD1602_ONOFF_TOOLTIP,
        "helpUrl": Blockly.Msg.LCD1602_ONOFF_HELPURL
      }
    );
  }
};

Blockly.Python['lcd1602_onoff'] = function(block) {
  var variable_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('lcd'), Blockly.Variables.NAME_TYPE);
  var dropdown_onoff = block.getFieldValue('ONOFF');
  // TODO: Assemble Python into code variable.
  //lcd.on()
  //lcd.off()
  var code = '';
  if (dropdown_onoff == 'ON') {
    code = variable_lcd + '.on()\n';
  } else {
    code = variable_lcd + '.off()\n';
  }
  return code;
};

Blockly.Blocks['lcd1602_clear'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "lcd1602_clear",
        "message0": Blockly.Msg.LCD1602_CLEAR_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "lcd",
            "variable": "lcd"
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.LCD1602_CLEAR_TOOLTIP,
        "helpUrl": Blockly.Msg.LCD1602_CLEAR_HELPURL
      }
    );
  }
};

Blockly.Python['lcd1602_clear'] = function(block) {
  var variable_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('lcd'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble Python into code variable.
  //lcd.clear()
  var code = variable_lcd + '.clear()\n';
  return code;
};

Blockly.Blocks['lcd1602_backlight'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "lcd1602_backlight",
        "message0": Blockly.Msg.LCD1602_BACKLIGHT_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "lcd",
            "variable": "lcd"
          },
          {
            "type": "field_dropdown",
            "name": "ONOFF",
            "options": [
              [
                Blockly.Msg.LCD1602_BACKLIGHT_MESSAGE1,
                "1"
              ],
              [
                Blockly.Msg.LCD1602_BACKLIGHT_MESSAGE2,
                "0"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.LCD1602_BACKLIGHT_TOOLTIP,
        "helpUrl": Blockly.Msg.LCD1602_BACKLIGHT_HELPURL
      }
    );
  }
};

Blockly.Python['lcd1602_backlight'] = function(block) {
  var variable_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('lcd'), Blockly.Variables.NAME_TYPE);
  var dropdown_onoff = block.getFieldValue('ONOFF');
  // TODO: Assemble Python into code variable.
  //lcd.backlight(1)
  //lcd.backlight(0)
  var code = variable_lcd + '.backlight(' + dropdown_onoff + ')\n';
  return code;
};

Blockly.Blocks['lcd1602_set_scroll'] = {
  init: function() {
    this.jsonInit(
      {
        "type": "lcd1602_set_scroll",
        "message0": Blockly.Msg.LCD1602_SCROLL_MESSAGE0,
        "args0": [
          {
            "type": "field_variable",
            "name": "lcd",
            "variable": "lcd"
          },
          {
            "type": "field_dropdown",
            "name": "SCROLL",
            "options": [
              [
                Blockly.Msg.LCD1602_SCROLL_MESSAGE1,
                "LEFT"
              ],
              [
                Blockly.Msg.LCD1602_SCROLL_MESSAGE2,
                "RIGHT"
              ]
            ]
          }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": "#0fbc11",
        "tooltip": Blockly.Msg.LCD1602_SCROLL_TOOLTIP,
        "helpUrl": Blockly.Msg.LCD1602_SCROLL_HELPURL
      }
    );
  }
};

Blockly.Python['lcd1602_set_scroll'] = function(block) {
  var variable_lcd = Blockly.Python.variableDB_.getName(block.getFieldValue('lcd'), Blockly.Variables.NAME_TYPE);
  var dropdown_scroll = block.getFieldValue('SCROLL');
  // TODO: Assemble Python into code variable.
  //lcd.shift_left()
  //lcd.shift_right()
  var code = '';
  if (dropdown_scroll == 'LEFT') {
    code = variable_lcd + '.shift_left()\n';
  } else {
    code = variable_lcd + '.shift_right()\n';
  }
  return code;
};
