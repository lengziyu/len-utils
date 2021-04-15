/**
 * 
 * @desc 移除字符串匹配的最后字符串
 * @param  {String} str 要处理的数组
 * @param {String} strLast [可选值] 默认英文逗号”,“ 
 * @return {String}
 */

function rmStrLast(str, strLast) {
	if(!str) return
    if(str.charAt(str.length - 1) == (strLast?strLast:',')){
    	return str.substring(0, str.length-1)
    }else{
    	return str
    }
}

module.exports = rmStrLast;

		