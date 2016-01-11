import * as constants from './let_const';
console.log('test1',constants.A); 
console.log('test1',constants.B); 

class wa {
	constructor(x,y){
		this.x = x;
		this.y = y;
	}

	tos(){
		console.log(x,y);
	}
}

class wb extends wa{
	constructor(x,y,c){
		super(x,y);
		this.c = c;
	}

	tov(){
		console.log(x,y,c);
	}
}

var wbb = new wb();
var waa = new wa();

window.wb = wb;
window.wa = wa;
window.wbb = wbb;