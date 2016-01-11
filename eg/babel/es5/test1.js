'use strict';

var _es = require('./es6');

var constants = _interopRequireWildcard(_es);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log('test1', constants.A);
console.log('test1', constants.B);
