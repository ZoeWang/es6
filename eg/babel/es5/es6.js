'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; })();

// var a = [];
// for(let i=0; i<10; i++){
// 	a[i] = function() {
// 		console.log(i);
// 	};
// }
// a[6]()

// console.log([1,2,3].map(x => x * x))

/**
 * 跨模块常量  报错
 */
// export const A = 1;
// export const B = 3;
// export const C = 4;

/**
 * 对象的解构赋值，可以很方便地将现有对象的方法，赋值到某个变量。
 */
// let { log, sin, cos } = Math;
// console.log(log(2));
// console.log(Math.log(2));

/**
 * 字符串的解构赋值
 */
// let {length : len} = 'hello';
// alert(len) // 5

/**
 * 函数参数的解构赋值
 */
// function move1({x = 0, y = 0} = {}) {
//   return [x, y];
// }

// console.log('变量',move1({x: 3, y: 8})); // [3, 8]
// console.log('变量',move1({x: 3})); // [3, 0]
// console.log('变量',move1({})); // [0, 0]
// console.log('变量',move1()); // [0, 0]
// // 上面代码中，函数move的参数是一个对象，通过对这个对象进行解构，得到变量x和y的值。如果解构失败，x和y等于默认值。

// function move({x, y} = { x: 0, y: 0 }) {
//   return [x, y];
// }

// console.log(move({x: 3, y: 8})); // [3, 8]
// console.log(move({x: 3})); // [3, undefined]
// console.log(move({})); // [undefined, undefined]
// console.log(move()); // [0, 0]
// // 上面代码是为函数move的参数指定默认值，而不是为变量x和y指定默认值，所以会得到与前一种写法不同的结果。

// // undefined就会触发函数参数的默认值。
// let unde = [1, undefined, 3].map((x = 'yes') => x)  // [ 1, 'yes', 3 ]
// console.log(unde);

/**
 * 解构赋值用途
 * @type {Object}
 */
// 提取JSON数据
// var jsonData = {
//   id: 42,
//   status: "OK",
//   data: [867, 5309]
// }

// let { id, status, data: number } = jsonData;

// console.log(id, status, number)

// 遍历Map结构
var map = new Map();
map.set('first', 'hello');
map.set('second', 'world');

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = map[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var _step$value = _slicedToArray(_step.value, 2);

    var key = _step$value[0];
    var value = _step$value[1];

    console.log(key + " is " + value);
  }
  // first is hello
  // second is world
  // 获取键名
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = map[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _step2$value = _slicedToArray(_step2.value, 1);

    var key = _step2$value[0];

    console.log(key);
  }

  // 获取键值
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  for (var _iterator3 = map[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    var _step3$value = _slicedToArray(_step3.value, 2);

    var value = _step3$value[1];

    console.log(value);
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}
