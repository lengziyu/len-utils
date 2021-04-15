const fmtArrConnect = require('./src/array/fmtArrConnect.js')
const isArray = require('./src/array/isArray.js')
const formatPassTime = require('./src/date/formatPassTime.js')
const getOS = require('./src/device/getOS.js')
const isWechat = require('./src/device/isWechat.js')
const log = require('./src/log/index.js')
const isEmail = require('./src/regular/isEamil.js')
const isIdCard = require('./src/regular/isIdCard.js')
const isPhone = require('./src/regular/isPhone.js')
const searchTags = require('./src/searchTags/index.js')
const getCookie = require('./src/storage/getCookie.js')
const setCookie = require('./src/storage/setCookie.js')
const rmCookie = require('./src/storage/rmCookie.js')
const getStorage = require('./src/storage/getStorage.js')
const setStorage = require('./src/storage/setStorage.js')
const rmStorage = require('./src/storage/rmStorage.js')
const aToChinese = require('./src/string/aToChinese.js')
const rmStrLast = require('./src/string/rmStrLast.js')
const getUrlQuery = require('./src/url/getUrlQuery.js')

module.exports = {
	fmtArrConnect,
	isArray,
	formatPassTime,
	getOS,
	isWechat,
	log,
	isEmail,
	isIdCard,
	isPhone,
	searchTags,
	getCookie,
	setCookie,
	rmCookie,
	getStorage,
	setStorage,
	rmStorage,
	aToChinese,
	rmStrLast,
	getUrlQuery,
}