/**
 * 
 * @desc 设置storage
 * @param  {String} name
 * @param  {String} data
 * @param  {String} type [可选值] 默认是sessionStorage，可以传localStorage
 */
function setStorage(name, data, type = 'sessionStorage') {
    let storeStr = JSON.stringify(data);
    return window[type].setItem(key, storeStr);
}

module.exports = setStorage;
