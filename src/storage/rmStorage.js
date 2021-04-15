var setCookie = require('./setCookie');
/**
 * 
 * @desc 根据name删除storage
 * @param  {String} name 
 * @param  {String} type [可选值] 默认是sessionStorage，可以传localStorage
 */
function rmStorage(key, type = 'sessionStorage') {
    return window[type].removeItem(key);
}

module.exports = rmStorage;