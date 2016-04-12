/*

*/
import cut from './cut.js';

function stringCut(str, rule){
	if(typeof str==='string'){
		return cut.call(str, rule);
	}else{
		throw new TypeError('invalid argument');
	}
}

export default stringCut;
