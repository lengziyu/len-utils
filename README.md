# len-utils
前端工具类

### cookie/sessionStorage/localStorage设置、获取、清除
- setStorage(key, data);
- getStorage(key);
- rmStorage(key);
- setStorage(key, data, 'localStorage');
- getStorage(key, 'localStorage');
- rmStorage(key, 'localStorage');
- setCookie(key, data, days);
- getCookie(key);
- rmCookie(key);

例子：
```
import lenUtils from 'len-utils';
lenUtils.getStorage('userInfo');

```
### 获取url参数
例子：
```
# http://www.lengziyu.cn?id=1

let id = lenUtils.getUrlQuery('id');
console.log(id); // 1
```
### 判断是移动端/PC端，移动端区分ios、安卓
例子：
```
let get = lenUtils.getOS();
console.log(isIos);
```
### 数组常见处理

### 常见的正则验证

### 日期处理

### 获取浏览器相关

### []数组的打印

### 字符串常见处理

### 搜索结果标红

### 防抖和节流