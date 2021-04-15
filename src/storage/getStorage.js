/**
 * 
 * @desc 根据name读取storage
 * @param  {String} name 
 * @param  {String} type [可选值] 默认是sessionStorage，可以传localStorage
 * @return {String}
 */
function getStorage(name, type = 'sessionStorage') {
    return JSON.parse(window[type].getItem(key));
}

module.exports = getStorage;