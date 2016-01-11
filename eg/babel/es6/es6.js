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
// var map = new Map();
// map.set('first', 'hello');
// map.set('second', 'world');

// for (let [key, value] of map) {
//   console.log(key + " is " + value);
// }
// // first is hello
// // second is world
// // 获取键名
// for (let [key] of map) {
//   console.log(key);
// }

// // 获取键值
// for (let [,value] of map) {
//   console.log(value);
// }


/**
 * 正则的扩展
 *
 * u修饰符
 * 
 */
// function codePointLength(text) {
//   var result = text.match(/[\s\S]/gu);
//   return result ? result.length : 0;
// }

// var s = "𠮷𠮷";

// console.log(s.length); // 4
// console.log(codePointLength(s)); // 2



/**
 * 数值的扩展
 * 安全整数和Number.isSafeInterger()
 */
// function trusty (left, right, result) {
//   if (
//     Number.isSafeInteger(left) &&
//     Number.isSafeInteger(right) &&
//     Number.isSafeInteger(result)
//   ) {
//     return result
//   }
//   throw new RangeError('Operation cannot be trusted!')
// }

// trusty(9007199254740993, 990, 9007199254740993 - 990)
// // RangeError: Operation cannot be trusted!

// trusty(1, 2, 3)
// // 3



/**
 * 数组的扩展
 * Array.from() 将类数组结构转为数组 并有map功能
 * 
 */
// Array.from([1, , 2, , 3], (n) => n || 0);
// // [1, 0, 2, 0, 3]
// // 
// Array.from({ length: 2 }, () => 'jack');
// // ['jack', 'jack']
// 将字符串转为数组，然后返回字符串的长度。因为它能正确处理各种Unicode字符，可以避免JavaScript将大于\uFFFF的Unicode字符，算作两个字符的bug。
// function countSymbols(string) {
//   	return Array.from(string).length;
// }


/**
 * 函数的扩展
 * 函数参数的默认值
 */
// function throwIfMissing() {
//   throw new Error('Missing parameter');
// }

// function foo(mustBeProvided = throwIfMissing()) {
//   return mustBeProvided;
// }

// foo()	// Error: Missing parameter
// // 上面代码的foo函数，如果调用的时候没有参数，就会调用默认值throwIfMissing函数，从而抛出一个错误。

// // 从上面代码还可以看到，参数mustBeProvided的默认值等于throwIfMissing函数的运行结果（即函数名之后有一对圆括号），这表明参数的默认值不是在定义时执行，而是在运行时执行（即如果参数已经赋值，默认值中的函数就不会运行），这与python语言不一样。

// // 可以将参数默认值设为undefined，表明这个参数是可以省略的。
// function foo(optional = undefined) { ··· }

//
/**
 * 箭头函数
 * （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
 * （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
	（3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
	（4）不可以使用yield命令，因此箭头函数不能用作Generator函数。
 */


// function foo() {
//    return () => {
//       return () => {
//          return () => {
//             console.log("id:", this.id);
//          };
//       };
//    };
// }

// foo.call( { id: 42 } )()()();
// id: 42
// 上面代码之中，只有一个this，就是函数foo的this。因为所有的内层函数都是箭头函数，都没有自己的this，所以它们的this其实都是最外层foo函数的this。

// 尾递归
// function factorial(n) {
//   if (n === 1) return 1;
//   return n * factorial(n - 1);
// }

// factorial(5) // 120  可能栈溢出

// function factorial(n, total) {
//   if (n === 1) return total;
//   return factorial(n - 1, n * total);
// }

// factorial(5, 1) // 120    尾递归只保存最后一个调用帧，不会栈溢出


/**
 * Set 数据结构
 */
// function dedupe(array) {	// 去除重复数组
//   return Array.from(new Set(array));
// }

// dedupe([1,1,2,3]) // [1, 2, 3]


/**
 * Map 数据结构
 */
// let myElement = document.getElementById('logo');
// let myWeakmap = new WeakMap();

// myWeakmap.set(myElement, {timesClicked: 0});

// myElement.addEventListener('click', function() {
//   let logoData = myWeakmap.get(myElement);
//   logoData.timesClicked++;
//   myWeakmap.set(myElement, logoData);
// }, false);

// // 上面代码中，myElement是一个DOM节点，每当发生click事件，就更新一下状态。我们将这个状态作为键值放在WeakMap里，对应的键名就是myElement。一旦这个DOM节点删除，该状态就会自动消失，不存在内存泄漏风险。

// // WeakMap的另一个用处是部署私有属性。

// let _counter = new WeakMap();
// let _action = new WeakMap();

// class Countdown {
//   constructor(counter, action) {
//     _counter.set(this, counter);
//     _action.set(this, action);
//   }
//   dec() {
//     let counter = _counter.get(this);
//     if (counter < 1) return;
//     counter--;
//     _counter.set(this, counter);
//     if (counter === 0) {
//       _action.get(this)();
//     }
//   }
// }

// let c = new Countdown(2, () => console.log('DONE'));

// c.dec()
// c.dec()
// // DONE
// // 上面代码中，Countdown类的两个内部属性_counter和_action，是实例的弱引用，所以如果删除实例，它们也就随之消失，不会造成内存泄漏。


/**
 * Iterator 遍历器
 */
// 遍历器生成方法
// class RangeIterator {
//   constructor(start, stop) {
//     this.value = start;
//     this.stop = stop;
//   }

//   [Symbol.iterator]() { return this; }

//   next() {
//     var value = this.value;
//     if (value < this.stop) {
//       this.value++;
//       return {done: false, value: value};
//     } else {
//       return {done: true, value: undefined};
//     }
//   }
// }

// function range(start, stop) {
//   return new RangeIterator(start, stop);
// }

// for (var value of range(0, 3)) {
//   console.log(value);
// }



// 下面是通过遍历器实现指针结构的例子。
// function Obj(value){
//   this.value = value;
//   this.next = null;
// }

// Obj.prototype[Symbol.iterator] = function(){

//   var iterator = {
//     next: next
//   };

//   var current = this;

//   function next(){
//     if (current){
//       var value = current.value;
//       var done = current == null;
//       current = current.next;
//       return {
//         done: done,
//         value: value
//       }
//     } else {
//       return {
//         done: true
//       }
//     }
//   }
//   return iterator;
// }

// var one = new Obj(1);
// var two = new Obj(2);
// var three = new Obj(3);

// one.next = two;
// two.next = three;

// for (var i of one){
//   console.log(i)
// }
// 1
// 2
// 3



// 下面是另一个为对象添加Iterator接口的例子。

// let obj = {
//   data: [ 'hello', 'world' ],
//   [Symbol.iterator]() {
//     const self = this;
//     let index = 0;
//     return {
//       next() {
//         if (index < self.data.length) {
//           return {
//             value: self.data[index++],
//             done: false
//           };
//         } else {
//           return { value: undefined, done: true };
//         }
//       }
//     };
//   }
// };



// 类数组对象
// NodeList.prototype[Symbol.iterator] = Array.prototype[Symbol.iterator];

// NodeList.prototype[Symbol.iterator] = [][Symbol.iterator];

// [...document.querySelectorAll('div')] // 可以执行了

// let iterable = {
//   a: 'a',
//   b: 'b',
//   c: 'c',
//   length: 3,
//   [Symbol.iterator]: Array.prototype[Symbol.iterator]
// };
// for (let item of iterable) {
//   console.log(item); // undefined, undefined, undefined
// }

/**
 * Generator 函数
 */
// // yield*命令可以很方便地取出嵌套数组的所有成员。
// function* iterTree(tree) {
//   if (Array.isArray(tree)) {
//     for(let i=0; i < tree.length; i++) {
//       yield* iterTree(tree[i]);
//     }
//   } else {
//     yield tree;
//   }
// }

// const tree = [ 'a', ['b', 'c'], ['d', 'e'] ];

// for(let x of iterTree(tree)) {
//   console.log(x);
// }
// // a
// // b
// // c
// // d
// // e


// Ajax是典型的异步操作，通过Generator函数部署Ajax操作，可以用同步的方式表达。

// function* main() {
//   var result = yield request("http://some.url");
//   var resp = JSON.parse(result);
//     console.log(resp.value);
// }

// function request(url) {
//   makeAjaxCall(url, function(response){
//     it.next(response);
//   });
// }

// var it = main();
// it.next();


// 改变回调函数的执行形式
// function* longRunningTask() {
//   try {
//     var value1 = yield step1();
//     var value2 = yield step2(value1);
//     var value3 = yield step3(value2);
//     var value4 = yield step4(value3);
//     // Do something with value4
//   } catch (e) {
//     // Handle any error from step1 through step4
//   }
// }

// 使用一个函数，按次序自动执行所有步骤。

// scheduler(longRunningTask());

// function scheduler(task) {
//   setTimeout(function() {
//     var taskObj = task.next(task.value);
//     // 如果Generator函数未结束，就继续调用
//     if (!taskObj.done) {
//       task.value = taskObj.value
//       scheduler(task);
//     }
//   }, 0);
// }

/**
 * 部署iterator接口
 * 给对象 数组部署
 */
// function* iterEntries(obj) {
//   let keys = Object.keys(obj);
//   for (let i=0; i < keys.length; i++) {
//     let key = keys[i];
//     yield [key, obj[key]];
//   }
// }

// let myObj = { foo: 3, bar: 7 };

// for (let [key, value] of iterEntries(myObj)) {
//   console.log(key, value);
// }

// // foo 3
// // bar 7
// // 
// // 
// function* makeSimpleGenerator(array){
//   var nextIndex = 0;

//   while(nextIndex < array.length){
//     yield array[nextIndex++];
//   }
// }

// var gen = makeSimpleGenerator(['yo', 'ya']);

// gen.next().value // 'yo'
// gen.next().value // 'ya'
// gen.next().done  // true


/**
 * promise
 * @param  {[type]} url [description]
 * @return {[type]}     [description]
 * Promise对象实现的Ajax操作的例子。 
 */
// var getJSON = function(url) {
//   var promise = new Promise(function(resolve, reject){
//     var client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = "json";
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if ( this.readyState !== 4 ) {
//         return;
//       }
//       if (this.status === 200) {
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     };
//   });

//   return promise;
// };

// getJSON("/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

// p1是一个Promise，3秒之后变为rejected。p2的状态由p1决定，1秒之后，p2调用resolve方法，但是此时p1的状态还没有改变，因此p2的状态也不会变。又过了2秒，p1变为rejected，p2也跟着变为rejected。
// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })
// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })
// p2.then(result => console.log(result))
// p2.catch(error => console.log(error))
// // Error: fail




// Promise.prototype.catch()
// var promise = new Promise(function(resolve, reject) {
//   throw new Error('test')
// });
// promise.catch(function(error) { console.log(error) });
// // Error: test


/**
 * Class
 */
// 立即执行Class 的实例
// let person = new class {
//   constructor(name) {
//     this.name = name;
//   }

//   sayName() {
//     console.log(this.name);
//   }
// }("张三");

// person.sayName(); // "张三"

// // extends 继承原生构造函数
// class VersionedArray extends Array {
//   constructor() {
//     super();
//     this.history = [[]];
//   }
//   commit() {
//     this.history.push(this.slice());
//   }
//   revert() {
//     this.splice(0, this.length, ...this.history[this.history.length - 1]);
//   }
// }

// var x = new VersionedArray();

// x.push(1);
// x.push(2);
// x // [1, 2]
// x.history // [[]]

// x.commit();
// x.history // [[], [1, 2]]
// x.push(3);
// x // [1, 2, 3]

// x.revert();
// x // [1, 2]

// // 上面代码中，VersionedArray结构会通过commit方法，将自己的当前状态存入history属性，然后通过revert方法，可以撤销当前版本，回到上一个版本。除此之外，VersionedArray依然是一个数组，所有原生的数组方法都可以在它上面调用。
// 自定义Error子类的例子。

// class ExtendableError extends Error {
//   constructor(message) {
//     super();
//     this.message = message;
//     this.stack = (new Error()).stack;
//     this.name = this.constructor.name;
//   }
// }

// class MyError extends ExtendableError {
//   constructor(m) {
//     super(m);
//   }
// }

// var myerror = new MyError('ll');
// myerror.message // "ll"
// myerror instanceof Error // true
// myerror.name // "MyError"
// myerror.stack
// // Error
// //     at MyError.ExtendableError
// //     ...


/**
 * Mixin模式的实现
 */
// Mixin模式指的是，将多个类的接口“混入”（mix in）另一个类。它在ES6的实现如下。

// function mix(...mixins) {
//   class Mix {}

//   for (let mixin of mixins) {
//     copyProperties(Mix, mixin);
//     copyProperties(Mix.prototype, mixin.prototype);
//   }

//   return Mix;
// }

// function copyProperties(target, source) {
//   for (let key of Reflect.ownKeys(source)) {
//     if ( key !== "constructor"
//       && key !== "prototype"
//       && key !== "name"
//     ) {
//       let desc = Object.getOwnPropertyDescriptor(source, key);
//       Object.defineProperty(target, key, desc);
//     }
//   }
// }
// // 上面代码的mix函数，可以将多个对象合成为一个类。使用的时候，只要继承这个类即可。

// class DistributedEdit extends mix(Loggable, Serializable) {
//   // ...
// }






