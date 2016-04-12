console.log('string-cut: test');

// modules
const cut = require('../').default;
const isRegister = require('../register');

// Cases
const caseArray = [];

// normal
caseArray.push( (arg)=>{
	return cut('foobar', 'oo')==='fbar';
});

// regexp
caseArray.push( (arg)=>{
	return cut('hogehoge', /g/g)==='hoehoe';
});

// prototype
caseArray.push( (arg)=>{
	return 'hogefugapiyo'.cut('fuga')==='hogepiyo';
});

// Error index.js
caseArray.push( (arg)=>{
	try{
		cut(12345);
		return false;
	}catch(e){
		return true;
	}
});

// Error cut.js
caseArray.push( (arg)=>{
	try{
		"hoge".cut(12345);
		return false;
	}catch(e){
		return true;
	}
});

caseArray.forEach( (func, index, array)=>{
	if( func() ){
		console.log(`${index+1}/${array.length}: success`)
	}else{
		throw new Error(`${index}/${array.length}: failed`)
	}
});
