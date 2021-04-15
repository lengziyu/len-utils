/**
 * 
 * @desc 将数组用符号分割（如：逗号","）
 * @param  {Array} arr 要处理的数组 
 * @param {String} key [可选值]
 * @param {String} symbol [可选值] 默认英文逗号","
 * @return {String}
 */

function fmtArrConnect(arr, key, symbol) {
	if(!arr || arr.length == 0) return;
	var strArr = [];
	for (var i = 0; i < arr.length; i++) {
		strArr.push(key?arr[i][key]:arr[i]);
	}
	return strArr.join(symbol?symbol:',');
};

module.exports = fmtArrConnect;