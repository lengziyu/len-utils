/**
 * 
 * @desc 获取url的参数
 * @param  {String} url [可选值] 默认获取当前url
 * @return {Object}
 */

function getUrlQuery(url) {
    url = !url ? window.location.href : url;
    if(url.indexOf('?') === -1) {
        return {};
    }
    var search = url[0] === '?' ? url.substr(1) : url.substring(url.lastIndexOf('?') + 1);
    if (search === '') {
        return {};
    }
    search = search.split('&');
    var query = {};
    for (var i = 0; i < search.length; i++) {
        var pair = search[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
};

module.exports = getUrlQuery;