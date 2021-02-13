'use strict';

var _module = require('./module1');

var _module2 = _interopRequireDefault(_module);

var _module3 = require('./module2');

var _module4 = _interopRequireDefault(_module3);

var _module5 = require('./module3');

var _module6 = _interopRequireDefault(_module5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log(_module2.default, _module6.default, _module4.default); //引入其他的模块

//语法：import xxx from ‘路径’