/**
 * 
 * @desc 是否是数组
 * @param  {Array} arr 要处理的数组
 * @return {Boolean}
 */

function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

module.exports = isArray;