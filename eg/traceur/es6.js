var a = [];
for(let i=0; i<10; i++){
	a[i] = function() {
		console.log(i);
	};
}
console.log(a[6]());


// 跨模块常量
export const A = 1;
export const B = 3;
export const C = 4;