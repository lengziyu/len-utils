/**
 * 
 * @desc 阿拉伯数字转中文汉字，目前只支持到0~999
 * @param  {String/Number} str
 * @return {String}
 */

function aToChinese(str) {
	let chin_list = ['一','二','三','四','五','六','七','八','九','十'];
	let sn = parseInt(str);
	let one = Number(sn.toString().substr(0, 1));
	let two = Number(sn.toString().substr(1, 1));
	let three = Number(sn.toString().substr(2, 1));
	if(sn == 0){
		return '零'
	}else if(sn > 10 && sn < 20){
		return '十'+(chin_list[sn - 10 - 1])
	}else if(sn >= 20 && sn < 100){
		return chin_list[one - 1] + '十' + (two?(chin_list[two - 1]):'');
	}else if(sn%100 == 0 && sn < 1000){
		return chin_list[one - 1] + '百';
	}else if(sn > 100){
		return chin_list[one - 1] + '百' + (two?(chin_list[two - 1]):'') + (sn < 110?'零':'十') + (three?(chin_list[three - 1]):'');
	}else{
		return chin_list[sn - 1];
	}
}

module.exports = aToChinese;

		