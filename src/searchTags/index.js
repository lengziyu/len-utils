/**
 * 
 * @desc 是否是微信浏览器
 * @param {String} str 搜索的文字
 * @param {String} key 搜索的关键词
 * @param {String} color [可选值] 关键词文字颜色，默认红色
 */

function searchTags(str, key, color) {
   if(!str) return
	let strArr = str.split(key), newStr = '';
	for (var i = 0; i < strArr.length; i++) {
		newStr += strArr[i]+'<span style="color: '+ color?color:'red' +'">'+key+'</span>'
	}
	newStr = newStr.substring(0, newStr.lastIndexOf(key));
	return newStr
};

module.exports = searchTags;
