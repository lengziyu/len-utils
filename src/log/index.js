/**
 * 
 * @desc 控制台打印时显示[]，改为展开
 * @param  {Object} obj 打印的数据
 * @return {String} type [可选值] 默认log
 */

function log(obj, type) {
    type = type || "log";
    const log = JSON.parse(JSON.stringify(obj));
    console[type](log)
};

module.exports = log;