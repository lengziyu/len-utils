/**
 * 
 * @desc 是否是微信浏览器
 * @return {Boolean}
 */

function isWechat() {
    var ua = navigator.userAgent.toLowerCase();  
	if(ua.match(/MicroMessenger/i) == "micromessenger") {  
		return true;  
	} else {  
		return false;  
	} 
};

module.exports = isWechat;