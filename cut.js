/*
	本体
	引数の文字列or正規表現に一致するものを削除して返す
*/
function cut(target){
	if(typeof target==='string' || target instanceof RegExp){
		return this.replace(target, '');
	}else{
		throw new TypeError('invalid argument');
	}
}

export default cut;
