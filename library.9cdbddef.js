function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},s=n.parcelRequired7c6;null==s&&((s=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){i[t]=e},n.parcelRequired7c6=s),s.register("gjiCh",(function(e,n){t(e.exports,"default",(function(){return r}));class r{getRefs(){const t={};return t.preloader=document.querySelector(".overlay"),t.loader=document.querySelector(".loader"),t}enable(t){"loader"===t?this.refs.loader.classList.remove("is-off"):"preloader"===t&&this.refs.preloader.classList.remove("is-off")}disable(t){"loader"===t?this.refs.loader.classList.add("is-off"):"preloader"===t&&this.refs.preloader.classList.add("is-off")}constructor(){this.refs=this.getRefs()}}})),s.register("dNTj1",(function(n,r){t(n.exports,"Movie",(function(){return g}));var i=s("jkMrE"),o=s("g6yUq"),a=s("gMe87"),c=s("iJYdK"),u=s("2shzp"),l=new WeakMap,h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap;class g{get page(){return e(i)(this,l)}set page(t){e(a)(this,l,t)}get lastPage(){return e(i)(this,h)}set lastPage(t){e(a)(this,h,t)}resetPage(){e(a)(this,l,1)}get query(){return e(i)(this,d)}get langCurrent(){return e(i)(this,f)}set langCurrent(t){e(a)(this,f,t)}get currentTrendTime(){return e(i)(this,p)}set currentTrendTime(t){e(a)(this,p,t)}async fetchTrend(){const t=new URLSearchParams({api_key:g.API_KEY,page:e(i)(this,l),language:e(i)(this,f)});return(await e(u).get(`trending/${g.mediaType.MOVIE}/${e(i)(this,p)}?${t}`)).data}async fetchSearch(){const t=new URLSearchParams({api_key:g.API_KEY,page:e(i)(this,l),query:e(i)(this,d),language:e(i)(this,f)});return(await e(u).get(`search/${g.mediaType.MOVIE}?${t}`)).data}async fetchGenre(){const t=new URLSearchParams({api_key:g.API_KEY,language:e(i)(this,f)});return(await e(u).get(`genre/${g.mediaType.MOVIE}/list?${t}`)).data}async fetchById(t){const n=new URLSearchParams({api_key:g.API_KEY,language:e(i)(this,f)});return(await e(u).get(`${g.mediaType.MOVIE}/${t}?${n}`)).data}constructor(t){e(o)(this,l,{writable:!0,value:void 0}),e(o)(this,h,{writable:!0,value:void 0}),e(o)(this,d,{writable:!0,value:void 0}),e(o)(this,f,{writable:!0,value:void 0}),e(o)(this,p,{writable:!0,value:void 0}),e(a)(this,d,t),e(a)(this,l,1),e(a)(this,h,null),e(a)(this,f,g.language.ENGLISH),e(a)(this,p,g.trendTime.DAY),e(u).defaults.baseURL="https://api.themoviedb.org/3/"}}e(c)(g,"API_KEY","6d25a4756e0ff1ccca3eba13a74efa5c"),e(c)(g,"IMG_PATH","https://image.tmdb.org/t/p/w500"),e(c)(g,"mediaType",{ALL:"all",MOVIE:"movie",TV:"tv",PERSON:"person"}),e(c)(g,"trendTime",{DAY:"day",WEEK:"week"}),e(c)(g,"language",{ENGLISH:"en-US",UKRAINIAN:"uk-UA"})})),s.register("jkMrE",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){var i=n.default(t,e,"get");return r.default(t,i)};var n=i(s("fExtF")),r=i(s("iaRLo"));function i(t){return t&&t.__esModule?t:{default:t}}})),s.register("fExtF",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){if(!e.has(t))throw new TypeError("attempted to "+n+" private field on non-instance");return e.get(t)}})),s.register("iaRLo",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){return e.get?e.get.call(t):e.value}})),s.register("g6yUq",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){r.default(t,e),e.set(t,n)};var n,r=(n=s("7K24o"))&&n.__esModule?n:{default:n}})),s.register("7K24o",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s.register("gMe87",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,i){var s=n.default(t,e,"set");return r.default(t,s,i),i};var n=i(s("fExtF")),r=i(s("3LGG3"));function i(t){return t&&t.__esModule?t:{default:t}}})),s.register("3LGG3",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){if(e.set)e.set.call(t,n);else{if(!e.writable)throw new TypeError("attempted to set read only private field");e.value=n}}})),s.register("iJYdK",(function(t,e){Object.defineProperty(t.exports,"__esModule",{value:!0}),t.exports.default=function(t,e,n){e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n;return t}})),s.register("2shzp",(function(t,e){t.exports=s("bRlFp")})),s.register("bRlFp",(function(t,e){var n=s("2bBga"),r=s("djt5d"),i=s("6zSb1"),o=s("d0EKm");var a=function t(e){var s=new i(e),a=r(i.prototype.request,s);return n.extend(a,i.prototype,s),n.extend(a,s),a.create=function(n){return t(o(e,n))},a}(s("hqlPG"));a.Axios=i,a.CanceledError=s("83xK9"),a.CancelToken=s("2sjhC"),a.isCancel=s("ksuZT"),a.VERSION=s("50GW0").version,a.toFormData=s("aewVa"),a.AxiosError=s("121rJ"),a.Cancel=a.CanceledError,a.all=function(t){return Promise.all(t)},a.spread=s("av9gA"),a.isAxiosError=s("gNhGc"),t.exports=a,t.exports.default=a})),s.register("2bBga",(function(t,e){var n,r=s("djt5d"),i=Object.prototype.toString,o=(n=Object.create(null),function(t){var e=i.call(t);return n[e]||(n[e]=e.slice(8,-1).toLowerCase())});function a(t){return t=t.toLowerCase(),function(e){return o(e)===t}}function c(t){return Array.isArray(t)}function u(t){return void 0===t}var l=a("ArrayBuffer");function h(t){return null!==t&&"object"==typeof t}function d(t){if("object"!==o(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}var f=a("Date"),p=a("File"),g=a("Blob"),m=a("FileList");function y(t){return"[object Function]"===i.call(t)}var v=a("URLSearchParams");function _(t,e){if(null!=t)if("object"!=typeof t&&(t=[t]),c(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}var E,w=(E="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(t){return E&&t instanceof E});t.exports={isArray:c,isArrayBuffer:l,isBuffer:function(t){return null!==t&&!u(t)&&null!==t.constructor&&!u(t.constructor)&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)},isFormData:function(t){var e="[object FormData]";return t&&("function"==typeof FormData&&t instanceof FormData||i.call(t)===e||y(t.toString)&&t.toString()===e)},isArrayBufferView:function(t){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&l(t.buffer)},isString:function(t){return"string"==typeof t},isNumber:function(t){return"number"==typeof t},isObject:h,isPlainObject:d,isUndefined:u,isDate:f,isFile:p,isBlob:g,isFunction:y,isStream:function(t){return h(t)&&y(t.pipe)},isURLSearchParams:v,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)},forEach:_,merge:function t(){var e={};function n(n,r){d(e[r])&&d(n)?e[r]=t(e[r],n):d(n)?e[r]=t({},n):c(n)?e[r]=n.slice():e[r]=n}for(var r=0,i=arguments.length;r<i;r++)_(arguments[r],n);return e},extend:function(t,e,n){return _(e,(function(e,i){t[i]=n&&"function"==typeof e?r(e,n):e})),t},trim:function(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")},stripBOM:function(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t},inherits:function(t,e,n,r){t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,n&&Object.assign(t.prototype,n)},toFlatObject:function(t,e,n){var r,i,s,o={};e=e||{};do{for(i=(r=Object.getOwnPropertyNames(t)).length;i-- >0;)o[s=r[i]]||(e[s]=t[s],o[s]=!0);t=Object.getPrototypeOf(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},kindOf:o,kindOfTest:a,endsWith:function(t,e,n){t=String(t),(void 0===n||n>t.length)&&(n=t.length),n-=e.length;var r=t.indexOf(e,n);return-1!==r&&r===n},toArray:function(t){if(!t)return null;var e=t.length;if(u(e))return null;for(var n=new Array(e);e-- >0;)n[e]=t[e];return n},isTypedArray:w,isFileList:m}})),s.register("djt5d",(function(t,e){t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}})),s.register("6zSb1",(function(t,e){var n=s("2bBga"),r=s("2RNjJ"),i=s("5Dm7L"),o=s("eQ5d8"),a=s("d0EKm"),c=s("1ZTQa"),u=s("6zj0X"),l=u.validators;function h(t){this.defaults=t,this.interceptors={request:new i,response:new i}}h.prototype.request=function(t,e){"string"==typeof t?(e=e||{}).url=t:e=t||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var n=e.transitional;void 0!==n&&u.assertOptions(n,{silentJSONParsing:l.transitional(l.boolean),forcedJSONParsing:l.transitional(l.boolean),clarifyTimeoutError:l.transitional(l.boolean)},!1);var r=[],i=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(i=i&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var s,c=[];if(this.interceptors.response.forEach((function(t){c.push(t.fulfilled,t.rejected)})),!i){var h=[o,void 0];for(Array.prototype.unshift.apply(h,r),h=h.concat(c),s=Promise.resolve(e);h.length;)s=s.then(h.shift(),h.shift());return s}for(var d=e;r.length;){var f=r.shift(),p=r.shift();try{d=f(d)}catch(t){p(t);break}}try{s=o(d)}catch(t){return Promise.reject(t)}for(;c.length;)s=s.then(c.shift(),c.shift());return s},h.prototype.getUri=function(t){t=a(this.defaults,t);var e=c(t.baseURL,t.url);return r(e,t.params,t.paramsSerializer)},n.forEach(["delete","get","head","options"],(function(t){h.prototype[t]=function(e,n){return this.request(a(n||{},{method:t,url:e,data:(n||{}).data}))}})),n.forEach(["post","put","patch"],(function(t){function e(e){return function(n,r,i){return this.request(a(i||{},{method:t,headers:e?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}h.prototype[t]=e(),h.prototype[t+"Form"]=e(!0)})),t.exports=h})),s.register("2RNjJ",(function(t,e){var n=s("2bBga");function r(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,i){if(!e)return t;var s;if(i)s=i(e);else if(n.isURLSearchParams(e))s=e.toString();else{var o=[];n.forEach(e,(function(t,e){null!=t&&(n.isArray(t)?e+="[]":t=[t],n.forEach(t,(function(t){n.isDate(t)?t=t.toISOString():n.isObject(t)&&(t=JSON.stringify(t)),o.push(r(e)+"="+r(t))})))})),s=o.join("&")}if(s){var a=t.indexOf("#");-1!==a&&(t=t.slice(0,a)),t+=(-1===t.indexOf("?")?"?":"&")+s}return t}})),s.register("5Dm7L",(function(t,e){var n=s("2bBga");function r(){this.handlers=[]}r.prototype.use=function(t,e,n){return this.handlers.push({fulfilled:t,rejected:e,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},r.prototype.forEach=function(t){n.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=r})),s.register("eQ5d8",(function(t,e){var n=s("2bBga"),r=s("bhEpd"),i=s("ksuZT"),o=s("hqlPG"),a=s("83xK9");function c(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new a}t.exports=function(t){return c(t),t.headers=t.headers||{},t.data=r.call(t,t.data,t.headers,t.transformRequest),t.headers=n.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]})),(t.adapter||o.adapter)(t).then((function(e){return c(t),e.data=r.call(t,e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(c(t),e&&e.response&&(e.response.data=r.call(t,e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}})),s.register("bhEpd",(function(t,e){var n=s("2bBga"),r=s("hqlPG");t.exports=function(t,e,i){var s=this||r;return n.forEach(i,(function(n){t=n.call(s,t,e)})),t}})),s.register("hqlPG",(function(t,e){var n=s("4TNnu"),r=s("2bBga"),i=s("i16eu"),o=s("121rJ"),a=s("2wfLM"),c=s("aewVa"),u={"Content-Type":"application/x-www-form-urlencoded"};function l(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}var h,d={transitional:a,adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==n&&"[object process]"===Object.prototype.toString.call(n))&&(h=s("9VVcb")),h),transformRequest:[function(t,e){if(i(e,"Accept"),i(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t))return t;if(r.isArrayBufferView(t))return t.buffer;if(r.isURLSearchParams(t))return l(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString();var n,s=r.isObject(t),o=e&&e["Content-Type"];if((n=r.isFileList(t))||s&&"multipart/form-data"===o){var a=this.env&&this.env.FormData;return c(n?{"files[]":t}:t,a&&new a)}return s||"application/json"===o?(l(e,"application/json"),function(t,e,n){if(r.isString(t))try{return(e||JSON.parse)(t),r.trim(t)}catch(t){if("SyntaxError"!==t.name)throw t}return(n||JSON.stringify)(t)}(t)):t}],transformResponse:[function(t){var e=this.transitional||d.transitional,n=e&&e.silentJSONParsing,i=e&&e.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||i&&r.isString(t)&&t.length)try{return JSON.parse(t)}catch(t){if(s){if("SyntaxError"===t.name)throw o.from(t,o.ERR_BAD_RESPONSE,this,null,this.response);throw t}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:s("1gvAv")},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){d.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){d.headers[t]=r.merge(u)})),t.exports=d})),s.register("4TNnu",(function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var c,u=[],l=!1,h=-1;function d(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&f())}function f(){if(!l){var t=a(d);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function g(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(f)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=g,i.addListener=g,i.once=g,i.off=g,i.removeListener=g,i.removeAllListeners=g,i.emit=g,i.prependListener=g,i.prependOnceListener=g,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}})),s.register("i16eu",(function(t,e){var n=s("2bBga");t.exports=function(t,e){n.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}})),s.register("121rJ",(function(t,e){var n=s("2bBga");function r(t,e,n,r,i){Error.call(this),this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}n.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var i=r.prototype,o={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(t){o[t]={value:t}})),Object.defineProperties(r,o),Object.defineProperty(i,"isAxiosError",{value:!0}),r.from=function(t,e,s,o,a,c){var u=Object.create(i);return n.toFlatObject(t,u,(function(t){return t!==Error.prototype})),r.call(u,t.message,e,s,o,a),u.name=t.name,c&&Object.assign(u,c),u},t.exports=r})),s.register("2wfLM",(function(t,e){t.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}})),s.register("aewVa",(function(t,e){var n=s("ihoyg").Buffer,r=s("2bBga");t.exports=function(t,e){e=e||new FormData;var i=[];function s(t){return null===t?"":r.isDate(t)?t.toISOString():r.isArrayBuffer(t)||r.isTypedArray(t)?"function"==typeof Blob?new Blob([t]):n.from(t):t}return function t(n,o){if(r.isPlainObject(n)||r.isArray(n)){if(-1!==i.indexOf(n))throw Error("Circular reference detected in "+o);i.push(n),r.forEach(n,(function(n,i){if(!r.isUndefined(n)){var a,c=o?o+"."+i:i;if(n&&!o&&"object"==typeof n)if(r.endsWith(i,"{}"))n=JSON.stringify(n);else if(r.endsWith(i,"[]")&&(a=r.toArray(n)))return void a.forEach((function(t){!r.isUndefined(t)&&e.append(c,s(t))}));t(n,c)}})),i.pop()}else e.append(o,s(n))}(t),e}})),s.register("ihoyg",(function(e,n){var r,i;t(e.exports,"Buffer",(function(){return r}),(function(t){return r=t})),t(e.exports,"INSPECT_MAX_BYTES",(function(){return i}),(function(t){return i=t}));var o=s("hqZtu"),a=s("5WQj6");const c="function"==typeof Symbol&&"function"==typeof Symbol.for?Symbol.for("nodejs.util.inspect.custom"):null;r=h,i=50;const u=2147483647;function l(t){if(t>u)throw new RangeError('The value "'+t+'" is invalid for option "size"');const e=new Uint8Array(t);return Object.setPrototypeOf(e,h.prototype),e}function h(t,e,n){if("number"==typeof t){if("string"==typeof e)throw new TypeError('The "string" argument must be of type string. Received type number');return p(t)}return d(t,e,n)}function d(t,e,n){if("string"==typeof t)return function(t,e){"string"==typeof e&&""!==e||(e="utf8");if(!h.isEncoding(e))throw new TypeError("Unknown encoding: "+e);const n=0|v(t,e);let r=l(n);const i=r.write(t,e);i!==n&&(r=r.slice(0,i));return r}(t,e);if(ArrayBuffer.isView(t))return function(t){if(X(t,Uint8Array)){const e=new Uint8Array(t);return m(e.buffer,e.byteOffset,e.byteLength)}return g(t)}(t);if(null==t)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t);if(X(t,ArrayBuffer)||t&&X(t.buffer,ArrayBuffer))return m(t,e,n);if("undefined"!=typeof SharedArrayBuffer&&(X(t,SharedArrayBuffer)||t&&X(t.buffer,SharedArrayBuffer)))return m(t,e,n);if("number"==typeof t)throw new TypeError('The "value" argument must not be of type number. Received type number');const r=t.valueOf&&t.valueOf();if(null!=r&&r!==t)return h.from(r,e,n);const i=function(t){if(h.isBuffer(t)){const e=0|y(t.length),n=l(e);return 0===n.length||t.copy(n,0,0,e),n}if(void 0!==t.length)return"number"!=typeof t.length||Z(t.length)?l(0):g(t);if("Buffer"===t.type&&Array.isArray(t.data))return g(t.data)}(t);if(i)return i;if("undefined"!=typeof Symbol&&null!=Symbol.toPrimitive&&"function"==typeof t[Symbol.toPrimitive])return h.from(t[Symbol.toPrimitive]("string"),e,n);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof t)}function f(t){if("number"!=typeof t)throw new TypeError('"size" argument must be of type number');if(t<0)throw new RangeError('The value "'+t+'" is invalid for option "size"')}function p(t){return f(t),l(t<0?0:0|y(t))}function g(t){const e=t.length<0?0:0|y(t.length),n=l(e);for(let r=0;r<e;r+=1)n[r]=255&t[r];return n}function m(t,e,n){if(e<0||t.byteLength<e)throw new RangeError('"offset" is outside of buffer bounds');if(t.byteLength<e+(n||0))throw new RangeError('"length" is outside of buffer bounds');let r;return r=void 0===e&&void 0===n?new Uint8Array(t):void 0===n?new Uint8Array(t,e):new Uint8Array(t,e,n),Object.setPrototypeOf(r,h.prototype),r}function y(t){if(t>=u)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+u.toString(16)+" bytes");return 0|t}function v(t,e){if(h.isBuffer(t))return t.length;if(ArrayBuffer.isView(t)||X(t,ArrayBuffer))return t.byteLength;if("string"!=typeof t)throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof t);const n=t.length,r=arguments.length>2&&!0===arguments[2];if(!r&&0===n)return 0;let i=!1;for(;;)switch(e){case"ascii":case"latin1":case"binary":return n;case"utf8":case"utf-8":return Q(t).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return 2*n;case"hex":return n>>>1;case"base64":return Y(t).length;default:if(i)return r?-1:Q(t).length;e=(""+e).toLowerCase(),i=!0}}function _(t,e,n){let r=!1;if((void 0===e||e<0)&&(e=0),e>this.length)return"";if((void 0===n||n>this.length)&&(n=this.length),n<=0)return"";if((n>>>=0)<=(e>>>=0))return"";for(t||(t="utf8");;)switch(t){case"hex":return L(this,e,n);case"utf8":case"utf-8":return C(this,e,n);case"ascii":return D(this,e,n);case"latin1":case"binary":return O(this,e,n);case"base64":return k(this,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return x(this,e,n);default:if(r)throw new TypeError("Unknown encoding: "+t);t=(t+"").toLowerCase(),r=!0}}function E(t,e,n){const r=t[e];t[e]=t[n],t[n]=r}function w(t,e,n,r,i){if(0===t.length)return-1;if("string"==typeof n?(r=n,n=0):n>2147483647?n=2147483647:n<-2147483648&&(n=-2147483648),Z(n=+n)&&(n=i?0:t.length-1),n<0&&(n=t.length+n),n>=t.length){if(i)return-1;n=t.length-1}else if(n<0){if(!i)return-1;n=0}if("string"==typeof e&&(e=h.from(e,r)),h.isBuffer(e))return 0===e.length?-1:b(t,e,n,r,i);if("number"==typeof e)return e&=255,"function"==typeof Uint8Array.prototype.indexOf?i?Uint8Array.prototype.indexOf.call(t,e,n):Uint8Array.prototype.lastIndexOf.call(t,e,n):b(t,[e],n,r,i);throw new TypeError("val must be string, number or Buffer")}function b(t,e,n,r,i){let s,o=1,a=t.length,c=e.length;if(void 0!==r&&("ucs2"===(r=String(r).toLowerCase())||"ucs-2"===r||"utf16le"===r||"utf-16le"===r)){if(t.length<2||e.length<2)return-1;o=2,a/=2,c/=2,n/=2}function u(t,e){return 1===o?t[e]:t.readUInt16BE(e*o)}if(i){let r=-1;for(s=n;s<a;s++)if(u(t,s)===u(e,-1===r?0:s-r)){if(-1===r&&(r=s),s-r+1===c)return r*o}else-1!==r&&(s-=s-r),r=-1}else for(n+c>a&&(n=a-c),s=n;s>=0;s--){let n=!0;for(let r=0;r<c;r++)if(u(t,s+r)!==u(e,r)){n=!1;break}if(n)return s}return-1}function I(t,e,n,r){n=Number(n)||0;const i=t.length-n;r?(r=Number(r))>i&&(r=i):r=i;const s=e.length;let o;for(r>s/2&&(r=s/2),o=0;o<r;++o){const r=parseInt(e.substr(2*o,2),16);if(Z(r))return o;t[n+o]=r}return o}function T(t,e,n,r){return J(Q(e,t.length-n),t,n,r)}function S(t,e,n,r){return J(function(t){const e=[];for(let n=0;n<t.length;++n)e.push(255&t.charCodeAt(n));return e}(e),t,n,r)}function A(t,e,n,r){return J(Y(e),t,n,r)}function N(t,e,n,r){return J(function(t,e){let n,r,i;const s=[];for(let o=0;o<t.length&&!((e-=2)<0);++o)n=t.charCodeAt(o),r=n>>8,i=n%256,s.push(i),s.push(r);return s}(e,t.length-n),t,n,r)}function k(t,e,n){return 0===e&&n===t.length?o.fromByteArray(t):o.fromByteArray(t.slice(e,n))}function C(t,e,n){n=Math.min(t.length,n);const r=[];let i=e;for(;i<n;){const e=t[i];let s=null,o=e>239?4:e>223?3:e>191?2:1;if(i+o<=n){let n,r,a,c;switch(o){case 1:e<128&&(s=e);break;case 2:n=t[i+1],128==(192&n)&&(c=(31&e)<<6|63&n,c>127&&(s=c));break;case 3:n=t[i+1],r=t[i+2],128==(192&n)&&128==(192&r)&&(c=(15&e)<<12|(63&n)<<6|63&r,c>2047&&(c<55296||c>57343)&&(s=c));break;case 4:n=t[i+1],r=t[i+2],a=t[i+3],128==(192&n)&&128==(192&r)&&128==(192&a)&&(c=(15&e)<<18|(63&n)<<12|(63&r)<<6|63&a,c>65535&&c<1114112&&(s=c))}}null===s?(s=65533,o=1):s>65535&&(s-=65536,r.push(s>>>10&1023|55296),s=56320|1023&s),r.push(s),i+=o}return function(t){const e=t.length;if(e<=R)return String.fromCharCode.apply(String,t);let n="",r=0;for(;r<e;)n+=String.fromCharCode.apply(String,t.slice(r,r+=R));return n}(r)}h.TYPED_ARRAY_SUPPORT=function(){try{const t=new Uint8Array(1),e={foo:function(){return 42}};return Object.setPrototypeOf(e,Uint8Array.prototype),Object.setPrototypeOf(t,e),42===t.foo()}catch(t){return!1}}(),h.TYPED_ARRAY_SUPPORT||"undefined"==typeof console||"function"!=typeof console.error||console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."),Object.defineProperty(h.prototype,"parent",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.buffer}}),Object.defineProperty(h.prototype,"offset",{enumerable:!0,get:function(){if(h.isBuffer(this))return this.byteOffset}}),h.poolSize=8192,h.from=function(t,e,n){return d(t,e,n)},Object.setPrototypeOf(h.prototype,Uint8Array.prototype),Object.setPrototypeOf(h,Uint8Array),h.alloc=function(t,e,n){return function(t,e,n){return f(t),t<=0?l(t):void 0!==e?"string"==typeof n?l(t).fill(e,n):l(t).fill(e):l(t)}(t,e,n)},h.allocUnsafe=function(t){return p(t)},h.allocUnsafeSlow=function(t){return p(t)},h.isBuffer=function(t){return null!=t&&!0===t._isBuffer&&t!==h.prototype},h.compare=function(t,e){if(X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),X(e,Uint8Array)&&(e=h.from(e,e.offset,e.byteLength)),!h.isBuffer(t)||!h.isBuffer(e))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(t===e)return 0;let n=t.length,r=e.length;for(let i=0,s=Math.min(n,r);i<s;++i)if(t[i]!==e[i]){n=t[i],r=e[i];break}return n<r?-1:r<n?1:0},h.isEncoding=function(t){switch(String(t).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},h.concat=function(t,e){if(!Array.isArray(t))throw new TypeError('"list" argument must be an Array of Buffers');if(0===t.length)return h.alloc(0);let n;if(void 0===e)for(e=0,n=0;n<t.length;++n)e+=t[n].length;const r=h.allocUnsafe(e);let i=0;for(n=0;n<t.length;++n){let e=t[n];if(X(e,Uint8Array))i+e.length>r.length?(h.isBuffer(e)||(e=h.from(e)),e.copy(r,i)):Uint8Array.prototype.set.call(r,e,i);else{if(!h.isBuffer(e))throw new TypeError('"list" argument must be an Array of Buffers');e.copy(r,i)}i+=e.length}return r},h.byteLength=v,h.prototype._isBuffer=!0,h.prototype.swap16=function(){const t=this.length;if(t%2!=0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let e=0;e<t;e+=2)E(this,e,e+1);return this},h.prototype.swap32=function(){const t=this.length;if(t%4!=0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let e=0;e<t;e+=4)E(this,e,e+3),E(this,e+1,e+2);return this},h.prototype.swap64=function(){const t=this.length;if(t%8!=0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let e=0;e<t;e+=8)E(this,e,e+7),E(this,e+1,e+6),E(this,e+2,e+5),E(this,e+3,e+4);return this},h.prototype.toString=function(){const t=this.length;return 0===t?"":0===arguments.length?C(this,0,t):_.apply(this,arguments)},h.prototype.toLocaleString=h.prototype.toString,h.prototype.equals=function(t){if(!h.isBuffer(t))throw new TypeError("Argument must be a Buffer");return this===t||0===h.compare(this,t)},h.prototype.inspect=function(){let t="";const e=i;return t=this.toString("hex",0,e).replace(/(.{2})/g,"$1 ").trim(),this.length>e&&(t+=" ... "),"<Buffer "+t+">"},c&&(h.prototype[c]=h.prototype.inspect),h.prototype.compare=function(t,e,n,r,i){if(X(t,Uint8Array)&&(t=h.from(t,t.offset,t.byteLength)),!h.isBuffer(t))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof t);if(void 0===e&&(e=0),void 0===n&&(n=t?t.length:0),void 0===r&&(r=0),void 0===i&&(i=this.length),e<0||n>t.length||r<0||i>this.length)throw new RangeError("out of range index");if(r>=i&&e>=n)return 0;if(r>=i)return-1;if(e>=n)return 1;if(this===t)return 0;let s=(i>>>=0)-(r>>>=0),o=(n>>>=0)-(e>>>=0);const a=Math.min(s,o),c=this.slice(r,i),u=t.slice(e,n);for(let t=0;t<a;++t)if(c[t]!==u[t]){s=c[t],o=u[t];break}return s<o?-1:o<s?1:0},h.prototype.includes=function(t,e,n){return-1!==this.indexOf(t,e,n)},h.prototype.indexOf=function(t,e,n){return w(this,t,e,n,!0)},h.prototype.lastIndexOf=function(t,e,n){return w(this,t,e,n,!1)},h.prototype.write=function(t,e,n,r){if(void 0===e)r="utf8",n=this.length,e=0;else if(void 0===n&&"string"==typeof e)r=e,n=this.length,e=0;else{if(!isFinite(e))throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");e>>>=0,isFinite(n)?(n>>>=0,void 0===r&&(r="utf8")):(r=n,n=void 0)}const i=this.length-e;if((void 0===n||n>i)&&(n=i),t.length>0&&(n<0||e<0)||e>this.length)throw new RangeError("Attempt to write outside buffer bounds");r||(r="utf8");let s=!1;for(;;)switch(r){case"hex":return I(this,t,e,n);case"utf8":case"utf-8":return T(this,t,e,n);case"ascii":case"latin1":case"binary":return S(this,t,e,n);case"base64":return A(this,t,e,n);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return N(this,t,e,n);default:if(s)throw new TypeError("Unknown encoding: "+r);r=(""+r).toLowerCase(),s=!0}},h.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};const R=4096;function D(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(127&t[i]);return r}function O(t,e,n){let r="";n=Math.min(t.length,n);for(let i=e;i<n;++i)r+=String.fromCharCode(t[i]);return r}function L(t,e,n){const r=t.length;(!e||e<0)&&(e=0),(!n||n<0||n>r)&&(n=r);let i="";for(let r=e;r<n;++r)i+=tt[t[r]];return i}function x(t,e,n){const r=t.slice(e,n);let i="";for(let t=0;t<r.length-1;t+=2)i+=String.fromCharCode(r[t]+256*r[t+1]);return i}function P(t,e,n){if(t%1!=0||t<0)throw new RangeError("offset is not uint");if(t+e>n)throw new RangeError("Trying to access beyond buffer length")}function U(t,e,n,r,i,s){if(!h.isBuffer(t))throw new TypeError('"buffer" argument must be a Buffer instance');if(e>i||e<s)throw new RangeError('"value" argument is out of bounds');if(n+r>t.length)throw new RangeError("Index out of range")}function M(t,e,n,r,i){G(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s,s>>=8,t[n++]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,o>>=8,t[n++]=o,n}function F(t,e,n,r,i){G(e,r,i,t,n,7);let s=Number(e&BigInt(4294967295));t[n+7]=s,s>>=8,t[n+6]=s,s>>=8,t[n+5]=s,s>>=8,t[n+4]=s;let o=Number(e>>BigInt(32)&BigInt(4294967295));return t[n+3]=o,o>>=8,t[n+2]=o,o>>=8,t[n+1]=o,o>>=8,t[n]=o,n+8}function V(t,e,n,r,i,s){if(n+r>t.length)throw new RangeError("Index out of range");if(n<0)throw new RangeError("Index out of range")}function B(t,e,n,r,i){return e=+e,n>>>=0,i||V(t,0,n,4),a.write(t,e,n,r,23,4),n+4}function j(t,e,n,r,i){return e=+e,n>>>=0,i||V(t,0,n,8),a.write(t,e,n,r,52,8),n+8}h.prototype.slice=function(t,e){const n=this.length;(t=~~t)<0?(t+=n)<0&&(t=0):t>n&&(t=n),(e=void 0===e?n:~~e)<0?(e+=n)<0&&(e=0):e>n&&(e=n),e<t&&(e=t);const r=this.subarray(t,e);return Object.setPrototypeOf(r,h.prototype),r},h.prototype.readUintLE=h.prototype.readUIntLE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return r},h.prototype.readUintBE=h.prototype.readUIntBE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=this[t+--e],i=1;for(;e>0&&(i*=256);)r+=this[t+--e]*i;return r},h.prototype.readUint8=h.prototype.readUInt8=function(t,e){return t>>>=0,e||P(t,1,this.length),this[t]},h.prototype.readUint16LE=h.prototype.readUInt16LE=function(t,e){return t>>>=0,e||P(t,2,this.length),this[t]|this[t+1]<<8},h.prototype.readUint16BE=h.prototype.readUInt16BE=function(t,e){return t>>>=0,e||P(t,2,this.length),this[t]<<8|this[t+1]},h.prototype.readUint32LE=h.prototype.readUInt32LE=function(t,e){return t>>>=0,e||P(t,4,this.length),(this[t]|this[t+1]<<8|this[t+2]<<16)+16777216*this[t+3]},h.prototype.readUint32BE=h.prototype.readUInt32BE=function(t,e){return t>>>=0,e||P(t,4,this.length),16777216*this[t]+(this[t+1]<<16|this[t+2]<<8|this[t+3])},h.prototype.readBigUInt64LE=et((function(t){H(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||z(t,this.length-8);const r=e+256*this[++t]+65536*this[++t]+this[++t]*2**24,i=this[++t]+256*this[++t]+65536*this[++t]+n*2**24;return BigInt(r)+(BigInt(i)<<BigInt(32))})),h.prototype.readBigUInt64BE=et((function(t){H(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||z(t,this.length-8);const r=e*2**24+65536*this[++t]+256*this[++t]+this[++t],i=this[++t]*2**24+65536*this[++t]+256*this[++t]+n;return(BigInt(r)<<BigInt(32))+BigInt(i)})),h.prototype.readIntLE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=this[t],i=1,s=0;for(;++s<e&&(i*=256);)r+=this[t+s]*i;return i*=128,r>=i&&(r-=Math.pow(2,8*e)),r},h.prototype.readIntBE=function(t,e,n){t>>>=0,e>>>=0,n||P(t,e,this.length);let r=e,i=1,s=this[t+--r];for(;r>0&&(i*=256);)s+=this[t+--r]*i;return i*=128,s>=i&&(s-=Math.pow(2,8*e)),s},h.prototype.readInt8=function(t,e){return t>>>=0,e||P(t,1,this.length),128&this[t]?-1*(255-this[t]+1):this[t]},h.prototype.readInt16LE=function(t,e){t>>>=0,e||P(t,2,this.length);const n=this[t]|this[t+1]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt16BE=function(t,e){t>>>=0,e||P(t,2,this.length);const n=this[t+1]|this[t]<<8;return 32768&n?4294901760|n:n},h.prototype.readInt32LE=function(t,e){return t>>>=0,e||P(t,4,this.length),this[t]|this[t+1]<<8|this[t+2]<<16|this[t+3]<<24},h.prototype.readInt32BE=function(t,e){return t>>>=0,e||P(t,4,this.length),this[t]<<24|this[t+1]<<16|this[t+2]<<8|this[t+3]},h.prototype.readBigInt64LE=et((function(t){H(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||z(t,this.length-8);const r=this[t+4]+256*this[t+5]+65536*this[t+6]+(n<<24);return(BigInt(r)<<BigInt(32))+BigInt(e+256*this[++t]+65536*this[++t]+this[++t]*2**24)})),h.prototype.readBigInt64BE=et((function(t){H(t>>>=0,"offset");const e=this[t],n=this[t+7];void 0!==e&&void 0!==n||z(t,this.length-8);const r=(e<<24)+65536*this[++t]+256*this[++t]+this[++t];return(BigInt(r)<<BigInt(32))+BigInt(this[++t]*2**24+65536*this[++t]+256*this[++t]+n)})),h.prototype.readFloatLE=function(t,e){return t>>>=0,e||P(t,4,this.length),a.read(this,t,!0,23,4)},h.prototype.readFloatBE=function(t,e){return t>>>=0,e||P(t,4,this.length),a.read(this,t,!1,23,4)},h.prototype.readDoubleLE=function(t,e){return t>>>=0,e||P(t,8,this.length),a.read(this,t,!0,52,8)},h.prototype.readDoubleBE=function(t,e){return t>>>=0,e||P(t,8,this.length),a.read(this,t,!1,52,8)},h.prototype.writeUintLE=h.prototype.writeUIntLE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){U(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=1,s=0;for(this[e]=255&t;++s<n&&(i*=256);)this[e+s]=t/i&255;return e+n},h.prototype.writeUintBE=h.prototype.writeUIntBE=function(t,e,n,r){if(t=+t,e>>>=0,n>>>=0,!r){U(this,t,e,n,Math.pow(2,8*n)-1,0)}let i=n-1,s=1;for(this[e+i]=255&t;--i>=0&&(s*=256);)this[e+i]=t/s&255;return e+n},h.prototype.writeUint8=h.prototype.writeUInt8=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,1,255,0),this[e]=255&t,e+1},h.prototype.writeUint16LE=h.prototype.writeUInt16LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,65535,0),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeUint16BE=h.prototype.writeUInt16BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,65535,0),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeUint32LE=h.prototype.writeUInt32LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,4294967295,0),this[e+3]=t>>>24,this[e+2]=t>>>16,this[e+1]=t>>>8,this[e]=255&t,e+4},h.prototype.writeUint32BE=h.prototype.writeUInt32BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,4294967295,0),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigUInt64LE=et((function(t,e=0){return M(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeBigUInt64BE=et((function(t,e=0){return F(this,t,e,BigInt(0),BigInt("0xffffffffffffffff"))})),h.prototype.writeIntLE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);U(this,t,e,n,r-1,-r)}let i=0,s=1,o=0;for(this[e]=255&t;++i<n&&(s*=256);)t<0&&0===o&&0!==this[e+i-1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeIntBE=function(t,e,n,r){if(t=+t,e>>>=0,!r){const r=Math.pow(2,8*n-1);U(this,t,e,n,r-1,-r)}let i=n-1,s=1,o=0;for(this[e+i]=255&t;--i>=0&&(s*=256);)t<0&&0===o&&0!==this[e+i+1]&&(o=1),this[e+i]=(t/s>>0)-o&255;return e+n},h.prototype.writeInt8=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,1,127,-128),t<0&&(t=255+t+1),this[e]=255&t,e+1},h.prototype.writeInt16LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,32767,-32768),this[e]=255&t,this[e+1]=t>>>8,e+2},h.prototype.writeInt16BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,2,32767,-32768),this[e]=t>>>8,this[e+1]=255&t,e+2},h.prototype.writeInt32LE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,2147483647,-2147483648),this[e]=255&t,this[e+1]=t>>>8,this[e+2]=t>>>16,this[e+3]=t>>>24,e+4},h.prototype.writeInt32BE=function(t,e,n){return t=+t,e>>>=0,n||U(this,t,e,4,2147483647,-2147483648),t<0&&(t=4294967295+t+1),this[e]=t>>>24,this[e+1]=t>>>16,this[e+2]=t>>>8,this[e+3]=255&t,e+4},h.prototype.writeBigInt64LE=et((function(t,e=0){return M(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeBigInt64BE=et((function(t,e=0){return F(this,t,e,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))})),h.prototype.writeFloatLE=function(t,e,n){return B(this,t,e,!0,n)},h.prototype.writeFloatBE=function(t,e,n){return B(this,t,e,!1,n)},h.prototype.writeDoubleLE=function(t,e,n){return j(this,t,e,!0,n)},h.prototype.writeDoubleBE=function(t,e,n){return j(this,t,e,!1,n)},h.prototype.copy=function(t,e,n,r){if(!h.isBuffer(t))throw new TypeError("argument should be a Buffer");if(n||(n=0),r||0===r||(r=this.length),e>=t.length&&(e=t.length),e||(e=0),r>0&&r<n&&(r=n),r===n)return 0;if(0===t.length||0===this.length)return 0;if(e<0)throw new RangeError("targetStart out of bounds");if(n<0||n>=this.length)throw new RangeError("Index out of range");if(r<0)throw new RangeError("sourceEnd out of bounds");r>this.length&&(r=this.length),t.length-e<r-n&&(r=t.length-e+n);const i=r-n;return this===t&&"function"==typeof Uint8Array.prototype.copyWithin?this.copyWithin(e,n,r):Uint8Array.prototype.set.call(t,this.subarray(n,r),e),i},h.prototype.fill=function(t,e,n,r){if("string"==typeof t){if("string"==typeof e?(r=e,e=0,n=this.length):"string"==typeof n&&(r=n,n=this.length),void 0!==r&&"string"!=typeof r)throw new TypeError("encoding must be a string");if("string"==typeof r&&!h.isEncoding(r))throw new TypeError("Unknown encoding: "+r);if(1===t.length){const e=t.charCodeAt(0);("utf8"===r&&e<128||"latin1"===r)&&(t=e)}}else"number"==typeof t?t&=255:"boolean"==typeof t&&(t=Number(t));if(e<0||this.length<e||this.length<n)throw new RangeError("Out of range index");if(n<=e)return this;let i;if(e>>>=0,n=void 0===n?this.length:n>>>0,t||(t=0),"number"==typeof t)for(i=e;i<n;++i)this[i]=t;else{const s=h.isBuffer(t)?t:h.from(t,r),o=s.length;if(0===o)throw new TypeError('The value "'+t+'" is invalid for argument "value"');for(i=0;i<n-e;++i)this[i+e]=s[i%o]}return this};const q={};function $(t,e,n){q[t]=class extends n{get code(){return t}set code(t){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:t,writable:!0})}toString(){return`${this.name} [${t}]: ${this.message}`}constructor(){super(),Object.defineProperty(this,"message",{value:e.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${t}]`,this.stack,delete this.name}}}function K(t){let e="",n=t.length;const r="-"===t[0]?1:0;for(;n>=r+4;n-=3)e=`_${t.slice(n-3,n)}${e}`;return`${t.slice(0,n)}${e}`}function G(t,e,n,r,i,s){if(t>n||t<e){const r="bigint"==typeof e?"n":"";let i;throw i=s>3?0===e||e===BigInt(0)?`>= 0${r} and < 2${r} ** ${8*(s+1)}${r}`:`>= -(2${r} ** ${8*(s+1)-1}${r}) and < 2 ** ${8*(s+1)-1}${r}`:`>= ${e}${r} and <= ${n}${r}`,new q.ERR_OUT_OF_RANGE("value",i,t)}!function(t,e,n){H(e,"offset"),void 0!==t[e]&&void 0!==t[e+n]||z(e,t.length-(n+1))}(r,i,s)}function H(t,e){if("number"!=typeof t)throw new q.ERR_INVALID_ARG_TYPE(e,"number",t)}function z(t,e,n){if(Math.floor(t)!==t)throw H(t,n),new q.ERR_OUT_OF_RANGE(n||"offset","an integer",t);if(e<0)throw new q.ERR_BUFFER_OUT_OF_BOUNDS;throw new q.ERR_OUT_OF_RANGE(n||"offset",`>= ${n?1:0} and <= ${e}`,t)}$("ERR_BUFFER_OUT_OF_BOUNDS",(function(t){return t?`${t} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"}),RangeError),$("ERR_INVALID_ARG_TYPE",(function(t,e){return`The "${t}" argument must be of type number. Received type ${typeof e}`}),TypeError),$("ERR_OUT_OF_RANGE",(function(t,e,n){let r=`The value of "${t}" is out of range.`,i=n;return Number.isInteger(n)&&Math.abs(n)>2**32?i=K(String(n)):"bigint"==typeof n&&(i=String(n),(n>BigInt(2)**BigInt(32)||n<-(BigInt(2)**BigInt(32)))&&(i=K(i)),i+="n"),r+=` It must be ${e}. Received ${i}`,r}),RangeError);const W=/[^+/0-9A-Za-z-_]/g;function Q(t,e){let n;e=e||1/0;const r=t.length;let i=null;const s=[];for(let o=0;o<r;++o){if(n=t.charCodeAt(o),n>55295&&n<57344){if(!i){if(n>56319){(e-=3)>-1&&s.push(239,191,189);continue}if(o+1===r){(e-=3)>-1&&s.push(239,191,189);continue}i=n;continue}if(n<56320){(e-=3)>-1&&s.push(239,191,189),i=n;continue}n=65536+(i-55296<<10|n-56320)}else i&&(e-=3)>-1&&s.push(239,191,189);if(i=null,n<128){if((e-=1)<0)break;s.push(n)}else if(n<2048){if((e-=2)<0)break;s.push(n>>6|192,63&n|128)}else if(n<65536){if((e-=3)<0)break;s.push(n>>12|224,n>>6&63|128,63&n|128)}else{if(!(n<1114112))throw new Error("Invalid code point");if((e-=4)<0)break;s.push(n>>18|240,n>>12&63|128,n>>6&63|128,63&n|128)}}return s}function Y(t){return o.toByteArray(function(t){if((t=(t=t.split("=")[0]).trim().replace(W,"")).length<2)return"";for(;t.length%4!=0;)t+="=";return t}(t))}function J(t,e,n,r){let i;for(i=0;i<r&&!(i+n>=e.length||i>=t.length);++i)e[i+n]=t[i];return i}function X(t,e){return t instanceof e||null!=t&&null!=t.constructor&&null!=t.constructor.name&&t.constructor.name===e.name}function Z(t){return t!=t}const tt=function(){const t="0123456789abcdef",e=new Array(256);for(let n=0;n<16;++n){const r=16*n;for(let i=0;i<16;++i)e[r+i]=t[n]+t[i]}return e}();function et(t){return"undefined"==typeof BigInt?nt:t}function nt(){throw new Error("BigInt not supported")}})),s.register("hqZtu",(function(e,n){var r,i;t(e.exports,"toByteArray",(function(){return r}),(function(t){return r=t})),t(e.exports,"fromByteArray",(function(){return i}),(function(t){return i=t})),r=function(t){var e,n,r=h(t),i=r[0],s=r[1],c=new a(function(t,e,n){return 3*(e+n)/4-n}(0,i,s)),u=0,l=s>0?i-4:i;for(n=0;n<l;n+=4)e=o[t.charCodeAt(n)]<<18|o[t.charCodeAt(n+1)]<<12|o[t.charCodeAt(n+2)]<<6|o[t.charCodeAt(n+3)],c[u++]=e>>16&255,c[u++]=e>>8&255,c[u++]=255&e;2===s&&(e=o[t.charCodeAt(n)]<<2|o[t.charCodeAt(n+1)]>>4,c[u++]=255&e);1===s&&(e=o[t.charCodeAt(n)]<<10|o[t.charCodeAt(n+1)]<<4|o[t.charCodeAt(n+2)]>>2,c[u++]=e>>8&255,c[u++]=255&e);return c},i=function(t){for(var e,n=t.length,r=n%3,i=[],o=16383,a=0,c=n-r;a<c;a+=o)i.push(d(t,a,a+o>c?c:a+o));1===r?(e=t[n-1],i.push(s[e>>2]+s[e<<4&63]+"==")):2===r&&(e=(t[n-2]<<8)+t[n-1],i.push(s[e>>10]+s[e>>4&63]+s[e<<2&63]+"="));return i.join("")};for(var s=[],o=[],a="undefined"!=typeof Uint8Array?Uint8Array:Array,c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",u=0,l=c.length;u<l;++u)s[u]=c[u],o[c.charCodeAt(u)]=u;function h(t){var e=t.length;if(e%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var n=t.indexOf("=");return-1===n&&(n=e),[n,n===e?0:4-n%4]}function d(t,e,n){for(var r,i,o=[],a=e;a<n;a+=3)r=(t[a]<<16&16711680)+(t[a+1]<<8&65280)+(255&t[a+2]),o.push(s[(i=r)>>18&63]+s[i>>12&63]+s[i>>6&63]+s[63&i]);return o.join("")}o["-".charCodeAt(0)]=62,o["_".charCodeAt(0)]=63})),s.register("5WQj6",(function(e,n){
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var r,i;t(e.exports,"read",(function(){return r}),(function(t){return r=t})),t(e.exports,"write",(function(){return i}),(function(t){return i=t})),r=function(t,e,n,r,i){var s,o,a=8*i-r-1,c=(1<<a)-1,u=c>>1,l=-7,h=n?i-1:0,d=n?-1:1,f=t[e+h];for(h+=d,s=f&(1<<-l)-1,f>>=-l,l+=a;l>0;s=256*s+t[e+h],h+=d,l-=8);for(o=s&(1<<-l)-1,s>>=-l,l+=r;l>0;o=256*o+t[e+h],h+=d,l-=8);if(0===s)s=1-u;else{if(s===c)return o?NaN:1/0*(f?-1:1);o+=Math.pow(2,r),s-=u}return(f?-1:1)*o*Math.pow(2,s-r)},i=function(t,e,n,r,i,s){var o,a,c,u=8*s-i-1,l=(1<<u)-1,h=l>>1,d=23===i?Math.pow(2,-24)-Math.pow(2,-77):0,f=r?0:s-1,p=r?1:-1,g=e<0||0===e&&1/e<0?1:0;for(e=Math.abs(e),isNaN(e)||e===1/0?(a=isNaN(e)?1:0,o=l):(o=Math.floor(Math.log(e)/Math.LN2),e*(c=Math.pow(2,-o))<1&&(o--,c*=2),(e+=o+h>=1?d/c:d*Math.pow(2,1-h))*c>=2&&(o++,c/=2),o+h>=l?(a=0,o=l):o+h>=1?(a=(e*c-1)*Math.pow(2,i),o+=h):(a=e*Math.pow(2,h-1)*Math.pow(2,i),o=0));i>=8;t[n+f]=255&a,f+=p,a/=256,i-=8);for(o=o<<i|a,u+=i;u>0;t[n+f]=255&o,f+=p,o/=256,u-=8);t[n+f-p]|=128*g}})),s.register("9VVcb",(function(t,e){var n=s("2bBga"),r=s("1TQad"),i=s("kTwUV"),o=s("2RNjJ"),a=s("1ZTQa"),c=s("9cPEm"),u=s("g3yOT"),l=s("2wfLM"),h=s("121rJ"),d=s("83xK9"),f=s("8wMQb");t.exports=function(t){return new Promise((function(e,s){var p,g=t.data,m=t.headers,y=t.responseType;function v(){t.cancelToken&&t.cancelToken.unsubscribe(p),t.signal&&t.signal.removeEventListener("abort",p)}n.isFormData(g)&&n.isStandardBrowserEnv()&&delete m["Content-Type"];var _=new XMLHttpRequest;if(t.auth){var E=t.auth.username||"",w=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";m.Authorization="Basic "+btoa(E+":"+w)}var b=a(t.baseURL,t.url);function I(){if(_){var n="getAllResponseHeaders"in _?c(_.getAllResponseHeaders()):null,i={data:y&&"text"!==y&&"json"!==y?_.response:_.responseText,status:_.status,statusText:_.statusText,headers:n,config:t,request:_};r((function(t){e(t),v()}),(function(t){s(t),v()}),i),_=null}}if(_.open(t.method.toUpperCase(),o(b,t.params,t.paramsSerializer),!0),_.timeout=t.timeout,"onloadend"in _?_.onloadend=I:_.onreadystatechange=function(){_&&4===_.readyState&&(0!==_.status||_.responseURL&&0===_.responseURL.indexOf("file:"))&&setTimeout(I)},_.onabort=function(){_&&(s(new h("Request aborted",h.ECONNABORTED,t,_)),_=null)},_.onerror=function(){s(new h("Network Error",h.ERR_NETWORK,t,_,_)),_=null},_.ontimeout=function(){var e=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded",n=t.transitional||l;t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),s(new h(e,n.clarifyTimeoutError?h.ETIMEDOUT:h.ECONNABORTED,t,_)),_=null},n.isStandardBrowserEnv()){var T=(t.withCredentials||u(b))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;T&&(m[t.xsrfHeaderName]=T)}"setRequestHeader"in _&&n.forEach(m,(function(t,e){void 0===g&&"content-type"===e.toLowerCase()?delete m[e]:_.setRequestHeader(e,t)})),n.isUndefined(t.withCredentials)||(_.withCredentials=!!t.withCredentials),y&&"json"!==y&&(_.responseType=t.responseType),"function"==typeof t.onDownloadProgress&&_.addEventListener("progress",t.onDownloadProgress),"function"==typeof t.onUploadProgress&&_.upload&&_.upload.addEventListener("progress",t.onUploadProgress),(t.cancelToken||t.signal)&&(p=function(t){_&&(s(!t||t&&t.type?new d:t),_.abort(),_=null)},t.cancelToken&&t.cancelToken.subscribe(p),t.signal&&(t.signal.aborted?p():t.signal.addEventListener("abort",p))),g||(g=null);var S=f(b);S&&-1===["http","https","file"].indexOf(S)?s(new h("Unsupported protocol "+S+":",h.ERR_BAD_REQUEST,t)):_.send(g)}))}})),s.register("1TQad",(function(t,e){var n=s("121rJ");t.exports=function(t,e,r){var i=r.config.validateStatus;r.status&&i&&!i(r.status)?e(new n("Request failed with status code "+r.status,[n.ERR_BAD_REQUEST,n.ERR_BAD_RESPONSE][Math.floor(r.status/100)-4],r.config,r.request,r)):t(r)}})),s.register("kTwUV",(function(t,e){var n=s("2bBga");t.exports=n.isStandardBrowserEnv()?{write:function(t,e,r,i,s,o){var a=[];a.push(t+"="+encodeURIComponent(e)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(i)&&a.push("path="+i),n.isString(s)&&a.push("domain="+s),!0===o&&a.push("secure"),document.cookie=a.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}})),s.register("1ZTQa",(function(t,e){var n=s("iUwU6"),r=s("91vFE");t.exports=function(t,e){return t&&!n(e)?r(t,e):e}})),s.register("iUwU6",(function(t,e){t.exports=function(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}})),s.register("91vFE",(function(t,e){t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}})),s.register("9cPEm",(function(t,e){var n=s("2bBga"),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,i,s,o={};return t?(n.forEach(t.split("\n"),(function(t){if(s=t.indexOf(":"),e=n.trim(t.substr(0,s)).toLowerCase(),i=n.trim(t.substr(s+1)),e){if(o[e]&&r.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([i]):o[e]?o[e]+", "+i:i}})),o):o}})),s.register("g3yOT",(function(t,e){var n=s("2bBga");t.exports=n.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function i(t){var n=t;return e&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return t=i(window.location.href),function(e){var r=n.isString(e)?i(e):e;return r.protocol===t.protocol&&r.host===t.host}}():function(){return!0}})),s.register("83xK9",(function(t,e){var n=s("121rJ");function r(t){n.call(this,null==t?"canceled":t,n.ERR_CANCELED),this.name="CanceledError"}s("2bBga").inherits(r,n,{__CANCEL__:!0}),t.exports=r})),s.register("8wMQb",(function(t,e){t.exports=function(t){var e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}})),s.register("1gvAv",(function(t,e){t.exports=null})),s.register("ksuZT",(function(t,e){t.exports=function(t){return!(!t||!t.__CANCEL__)}})),s.register("d0EKm",(function(t,e){var n=s("2bBga");t.exports=function(t,e){e=e||{};var r={};function i(t,e){return n.isPlainObject(t)&&n.isPlainObject(e)?n.merge(t,e):n.isPlainObject(e)?n.merge({},e):n.isArray(e)?e.slice():e}function s(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:i(void 0,t[r]):i(t[r],e[r])}function o(t){if(!n.isUndefined(e[t]))return i(void 0,e[t])}function a(r){return n.isUndefined(e[r])?n.isUndefined(t[r])?void 0:i(void 0,t[r]):i(void 0,e[r])}function c(n){return n in e?i(t[n],e[n]):n in t?i(void 0,t[n]):void 0}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return n.forEach(Object.keys(t).concat(Object.keys(e)),(function(t){var e=u[t]||s,i=e(t);n.isUndefined(i)&&e!==c||(r[t]=i)})),r}})),s.register("6zj0X",(function(t,e){var n=s("50GW0").version,r=s("121rJ"),i={};["object","boolean","number","function","string","symbol"].forEach((function(t,e){i[t]=function(n){return typeof n===t||"a"+(e<1?"n ":" ")+t}}));var o={};i.transitional=function(t,e,i){function s(t,e){return"[Axios v"+n+"] Transitional option '"+t+"'"+e+(i?". "+i:"")}return function(n,i,a){if(!1===t)throw new r(s(i," has been removed"+(e?" in "+e:"")),r.ERR_DEPRECATED);return e&&!o[i]&&(o[i]=!0,console.warn(s(i," has been deprecated since v"+e+" and will be removed in the near future"))),!t||t(n,i,a)}},t.exports={assertOptions:function(t,e,n){if("object"!=typeof t)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(t),s=i.length;s-- >0;){var o=i[s],a=e[o];if(a){var c=t[o],u=void 0===c||a(c,o,t);if(!0!==u)throw new r("option "+o+" must be "+u,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+o,r.ERR_BAD_OPTION)}},validators:i}})),s.register("50GW0",(function(t,e){t.exports={version:"0.27.2"}})),s.register("2sjhC",(function(t,e){var n=s("83xK9");function r(t){if("function"!=typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var r=this;this.promise.then((function(t){if(r._listeners){var e,n=r._listeners.length;for(e=0;e<n;e++)r._listeners[e](t);r._listeners=null}})),this.promise.then=function(t){var e,n=new Promise((function(t){r.subscribe(t),e=t})).then(t);return n.cancel=function(){r.unsubscribe(e)},n},t((function(t){r.reason||(r.reason=new n(t),e(r.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(t){this.reason?t(this.reason):this._listeners?this._listeners.push(t):this._listeners=[t]},r.prototype.unsubscribe=function(t){if(this._listeners){var e=this._listeners.indexOf(t);-1!==e&&this._listeners.splice(e,1)}},r.source=function(){var t;return{token:new r((function(e){t=e})),cancel:t}},t.exports=r})),s.register("av9gA",(function(t,e){t.exports=function(t){return function(e){return t.apply(null,e)}}})),s.register("gNhGc",(function(t,e){var n=s("2bBga");t.exports=function(t){return n.isObject(t)&&!0===t.isAxiosError}})),s.register("dvsic",(function(e,n){t(e.exports,"keyLS",(function(){return o})),t(e.exports,"refs",(function(){return a})),t(e.exports,"setLanguageToLS",(function(){return c})),t(e.exports,"switchBtnLang",(function(){return d})),t(e.exports,"getLanguageFromLS",(function(){return u})),t(e.exports,"setCurrentPageToLS",(function(){return l})),t(e.exports,"getCurrentPageFromLS",(function(){return h})),t(e.exports,"noYearVariableLang",(function(){return f}));var r=s("dNTj1"),i=s("dzEJp");const o={LS_LANGUAGE_KEY:"themoviedb-current-language",LS_GENRE_KEY_EN:"themoviedb-genre-EN",LS_GENRE_KEY_UA:"themoviedb-genre-UA",LS_WATHED_EN_DATA_KEY:"themovie-watched-EN-lib",LS_WATHED_UA_DATA_KEY:"themovie-watched-UA-lib",LS_QUEUE_EN_DATA_KEY:"themovie-queue-EN-lib",LS_QUEUE_UA_DATA_KEY:"themovie-queue-UA-lib",LS_CURRENT_PAGE:"themovie-current-page",VALUE_PAGE_INDEX:"index",VALUE_PAGE_LIBRARY_W:"library-watched",VALUE_PAGE_LIBRARY_Q:"library-queue"},a={btnSwitchEN:document.querySelector(".switch-EN"),btnSwitchUA:document.querySelector(".switch-UA")};function c(t){return localStorage.setItem(o.LS_LANGUAGE_KEY,JSON.stringify(t)),d(t),t}function u(){return JSON.parse(localStorage.getItem(o.LS_LANGUAGE_KEY))}function l(t){localStorage.setItem(o.LS_CURRENT_PAGE,JSON.stringify(t))}function h(){return JSON.parse(localStorage.getItem(o.LS_CURRENT_PAGE))}function d(t){switch(t){case r.Movie.language.ENGLISH:(0,i.disabledEl)(a.btnSwitchEN),(0,i.unlockEl)(a.btnSwitchUA);break;case r.Movie.language.UKRAINIAN:(0,i.disabledEl)(a.btnSwitchUA),(0,i.unlockEl)(a.btnSwitchEN)}}function f(t){switch(u()){case r.Movie.language.ENGLISH:return t?parseInt(t,10):"No year";case r.Movie.language.UKRAINIAN:return t?parseInt(t,10):"Немає року"}return parseInt(t,10)}})),s.register("dzEJp",(function(e,n){function r(t){t.hasAttribute("disabled")||t.setAttribute("disabled","")}function i(t){t.hasAttribute("disabled")&&t.removeAttribute("disabled")}t(e.exports,"disabledEl",(function(){return r})),t(e.exports,"unlockEl",(function(){return i}))})),s.register("eVqJU",(function(e,n){t(e.exports,"makeMarkupCard",(function(){return c}));var r=s("dNTj1"),i=s("k48Mq"),o=s("dvsic");const a=new(0,s("gjiCh").default);function c(t){const e=document.querySelector(".gallery"),n=t.results.map((t=>`<li class="card">\n          <a class="card__link" href=""  >\n            <img data-id="${t.id}" class="card__img" src="${t.poster_path?r.Movie.IMG_PATH+t.poster_path:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"}" alt="${t.title}" loading="lazy"/>\n      <div class="card__wrapper">\n            <p class="card__name">${t.title.toUpperCase()}</p>\n            <p class="card__description">${(0,i.genreFind)(t.genre_ids)} | ${(0,o.noYearVariableLang)(t.release_date)}\n            <span class="card__vote">${Math.round(10*t.vote_average)/10}</span>\n            </p>\n            </div>\n          </a>\n        </li>`)).join("");e.innerHTML=n,setTimeout((()=>{a.disable("preloader")}),1e3),a.disable("loader")}})),s.register("k48Mq",(function(e,n){t(e.exports,"genreLoad",(function(){return o})),t(e.exports,"genreFind",(function(){return a}));var r=s("dNTj1"),i=s("dvsic");async function o(t){try{if(!localStorage.getItem(i.keyLS.LS_GENRE_KEY_EN)){t.langCurrent=r.Movie.language.ENGLISH;const e=await t.fetchGenre();localStorage.setItem(i.keyLS.LS_GENRE_KEY_EN,JSON.stringify(e.genres)),t.langCurrent=r.Movie.language.UKRAINIAN;const n=await t.fetchGenre();localStorage.setItem(i.keyLS.LS_GENRE_KEY_UA,JSON.stringify(n.genres))}t.langCurrent=(0,i.getLanguageFromLS)()}catch(t){console.log(t)}}function a(t=[]){let e=localStorage.getItem(i.keyLS.LS_GENRE_KEY_EN),n="No genres",s="Other";switch((0,i.getLanguageFromLS)()){case r.Movie.language.ENGLISH:e=localStorage.getItem(i.keyLS.LS_GENRE_KEY_EN),n="No genres",s="Other";break;case r.Movie.language.UKRAINIAN:e=localStorage.getItem(i.keyLS.LS_GENRE_KEY_UA),n="Жанри відсутні",s="Інші"}if(!e||0===t.length)return n;const o=JSON.parse(e).reduce(((e,n)=>(t.includes(n.id)&&e.push(n.name),e)),[]);return 0===o.length?n:o.length>3?`${o[0]}, ${o[1]}, ${s}`:o.join(", ")}})),s.register("bTcpz",(function(e,n){t(e.exports,"btnNameKey",(function(){return E}));var r=s("dNTj1"),i=s("k48Mq"),o=s("bAs1G"),a=s("f0W3V"),c=s("c4uPe"),u=s("dvsic");const l="remove from watched",h="add to watched",d="remove from queue",f="add to queue",p="видалити з переглянутого",g="додати до переглянутого",m="видалити з черги",y="додати до черги",v="del",_="add",E={WATCHED:"watched",QUEUE:"queue"},w=document.querySelector("body"),b=document.querySelector(".gallery"),I=document.querySelector(".backdrop"),T=document.querySelector(".modal__button"),S=document.querySelector(".modal-info__container");let A=0,N={},k="",C="",R="",D=_,O=_;function L(t){window.removeEventListener("keydown",x),w.classList.remove("modal-open"),I.classList.add("is-hidden")}function x(t){"Escape"===t.code&&L()}b.addEventListener("click",(function(t){t.preventDefault();if((0,u.getCurrentPageFromLS)()===u.keyLS.VALUE_PAGE_INDEX)k=(0,o.getCurrenDataFromLS)();else{const t=(0,u.getLanguageFromLS)();k=(0,o.getDataFromLibraryLS)(t)}A=Number(t.target.dataset.id),k.map((t=>{t.id===A&&(!function(t){const e=(0,u.getLanguageFromLS)(),n=JSON.parse(localStorage.getItem(u.keyLS.LS_WATHED_EN_DATA_KEY))||[],i=JSON.parse(localStorage.getItem(u.keyLS.LS_QUEUE_EN_DATA_KEY))||[];n.some((e=>e.id===t))?(D=v,C=e===r.Movie.language.UKRAINIAN?p:l):(D=_,C=e===r.Movie.language.UKRAINIAN?g:h);i.some((e=>e.id===t))?(O=v,R=e===r.Movie.language.UKRAINIAN?m:d):(O=_,R=e===r.Movie.language.UKRAINIAN?y:f)}(A),function({poster_path:t,title:e,original_title:n,genre_ids:s,overview:o,vote_count:a,vote_average:c,popularity:u}){I.style.background=`linear-gradient(#0000004d, #000000b3), url(${t?r.Movie.IMG_PATH+t:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"})`,I.style.backgroundRepeat="no-repeat",I.style.backgroundSize="cover";const l=`\n      <img src="${t?r.Movie.IMG_PATH+t:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj"}" alt="${e}" class="modal-info__img">\n      <div class="modal-info">\n          <h2 class="modal-info__movie-name">${e.toUpperCase()}</h2>\n          <table class="modal-info__list" >\n              <tr class="modal-info__item">\n                <th class="modal-info__title">Vote / Votes</th>\n                <th class="modal-info__content"><span class="modal-info__content-color"> ${Math.round(10*c)/10} </span> / <span class="modal-info__content-color modal-info__content-color--votes">${a}</span></th>\n              </tr>\n              <tr class="modal-info__item">\n                <td class="modal-info__title">Popularity</td>\n                <td class="modal-info__content">${u.toFixed(1)}\n                </td>\n              </tr>\n              <tr class="modal-info__item">\n                <td class="modal-info__title">Original Title</td>\n                <td class="modal-info__content modal-info__content--text">${n.toUpperCase()}</td>\n              </tr>\n              <tr class="modal-info__item">\n                <td class="modal-info__title">Genre</td>\n                <td class="modal-info__content">${(0,i.genreFind)(s)}</td>\n              </tr>\n              </table>            \n                  <p class="modal-info__article-title">About</p>\n                  <p class="modal-info__article">${o}</p>\n                  <div class="container-btn">\n            <button type="button" class="btn" name="${E.WATCHED}" data-action="${D}">${C}</button>\n            <button type="button" class="btn" name="${E.QUEUE}" data-action="${O}">${R}</button>\n        </div>`;S.innerHTML=l}(t),N=t)})),t.target!==t.currentTarget&&(window.addEventListener("keydown",x),w.classList.add("modal-open"),I.classList.remove("is-hidden"))})),T.addEventListener("click",L),S.addEventListener("click",(async function(t){const e=await localStorage.getItem(a.LS_LOGIN_KEY),n=await sessionStorage.getItem(a.LS_LOGIN_KEY);t.target.name===E.WATCHED&&(""!==e&&e||""!==n&&n?(!async function(t){const e=(0,u.getLanguageFromLS)();let n=u.keyLS.LS_WATHED_EN_DATA_KEY,i=u.keyLS.LS_WATHED_UA_DATA_KEY,s=r.Movie.language.UKRAINIAN;e===r.Movie.language.UKRAINIAN?(n=u.keyLS.LS_WATHED_UA_DATA_KEY,i=u.keyLS.LS_WATHED_EN_DATA_KEY,s=r.Movie.language.ENGLISH):(n=u.keyLS.LS_WATHED_EN_DATA_KEY,i=u.keyLS.LS_WATHED_UA_DATA_KEY,s=r.Movie.language.UKRAINIAN);if(P=JSON.parse(localStorage.getItem(n))||[],U=JSON.parse(localStorage.getItem(i))||[],P.some((t=>t.id===A))){t.target.textContent=e===r.Movie.language.UKRAINIAN?g:h,t.target.dataset.action=_;const s=P.filter((t=>t.id!==A));localStorage.setItem(n,JSON.stringify(s));const o=U.filter((t=>t.id!==A));return void localStorage.setItem(i,JSON.stringify(o))}P.push(B(N)),localStorage.setItem(n,JSON.stringify(P));const o=await V(A,s);U.push(o),localStorage.setItem(i,JSON.stringify(U)),t.target.textContent=e===r.Movie.language.UKRAINIAN?p:l,t.target.dataset.action=v}(t),t.target.setAttribute("data-action","del"),(0,c.writeTestCollectionFunction)()):alert('If you want to add movie to "Watched" then you have to log in first.'));t.target.name===E.QUEUE&&(""!==e&&e||""!==n&&n?(!async function(t){const e=(0,u.getLanguageFromLS)();let n=u.keyLS.LS_QUEUE_EN_DATA_KEY,i=u.keyLS.LS_QUEUE_UA_DATA_KEY,s=r.Movie.language.UKRAINIAN;e===r.Movie.language.UKRAINIAN?(n=u.keyLS.LS_QUEUE_UA_DATA_KEY,i=u.keyLS.LS_QUEUE_EN_DATA_KEY,s=r.Movie.language.ENGLISH):(n=u.keyLS.LS_QUEUE_EN_DATA_KEY,i=u.keyLS.LS_QUEUE_UA_DATA_KEY,s=r.Movie.language.UKRAINIAN);if(M=JSON.parse(localStorage.getItem(n))||[],F=JSON.parse(localStorage.getItem(i))||[],M.some((t=>t.id===A))){t.target.textContent=e===r.Movie.language.UKRAINIAN?y:f,t.target.dataset.action=_;const s=M.filter((t=>t.id!==A));localStorage.setItem(n,JSON.stringify(s));const o=F.filter((t=>t.id!==A));return void localStorage.setItem(i,JSON.stringify(o))}M.push(B(N)),localStorage.setItem(n,JSON.stringify(M));const o=await V(A,s);F.push(o),localStorage.setItem(i,JSON.stringify(F)),t.target.textContent=e===r.Movie.language.UKRAINIAN?m:d,t.target.dataset.action=v}(t),t.target.setAttribute("data-action","del"),(0,c.writeTestCollectionFunction)()):alert('If you want to add movie to "Queue" then you have to log in first.'))})),I.addEventListener("click",(function(t){t.target==t.currentTarget&&(w.classList.remove("modal-open"),I.classList.add("is-hidden"))}));let P=[],U=[],M=[],F=[];async function V(t,e){try{const n=new(0,r.Movie);n.langCurrent=e;return function({id:t,poster_path:e,title:n,original_title:r,genres:i,overview:s,vote_count:o,vote_average:a,popularity:c,release_date:u}){const l=[];return i.map((t=>{l.push(t.id)})),{id:t,poster_path:e,title:n,original_title:r,genre_ids:l,overview:s,vote_count:o,vote_average:a,popularity:c,release_date:u}}(await n.fetchById(t))}catch(t){console.log(t)}}function B({id:t,poster_path:e,title:n,original_title:r,genre_ids:i,overview:s,vote_count:o,vote_average:a,popularity:c,release_date:u}){return{id:t,poster_path:e,title:n,original_title:r,genre_ids:i,overview:s,vote_count:o,vote_average:a,popularity:c,release_date:u}}})),s.register("bAs1G",(function(e,n){t(e.exports,"setCurrenDataToLS",(function(){return a})),t(e.exports,"getCurrenDataFromLS",(function(){return c})),t(e.exports,"getDataFromLibraryLS",(function(){return u}));var r=s("dNTj1"),i=s("dvsic");const o="themoviedb-current-data";function a(t){localStorage.setItem(o,JSON.stringify(t))}function c(t){return JSON.parse(localStorage.getItem(o))}function u(t){const e=(0,i.getCurrentPageFromLS)();switch(t){case r.Movie.language.ENGLISH:return e===i.keyLS.VALUE_PAGE_LIBRARY_Q?JSON.parse(localStorage.getItem(i.keyLS.LS_QUEUE_EN_DATA_KEY)):JSON.parse(localStorage.getItem(i.keyLS.LS_WATHED_EN_DATA_KEY));case r.Movie.language.UKRAINIAN:return e===i.keyLS.VALUE_PAGE_LIBRARY_Q?JSON.parse(localStorage.getItem(i.keyLS.LS_QUEUE_UA_DATA_KEY)):JSON.parse(localStorage.getItem(i.keyLS.LS_WATHED_UA_DATA_KEY))}}})),s.register("f0W3V",(function(e,n){t(e.exports,"LS_LOGIN_KEY",(function(){return a})),t(e.exports,"firebaseApp",(function(){return c})),s("25RCP");var r=s("ix4Jr");s("amyG6");var i=s("kbFea");const o={emptyLibText:document.querySelector(".not-logged-gallery"),libContainer:document.querySelector(".container-library"),libGallery:document.querySelector(".gallery-library"),loginForm:document.querySelector(".login__form"),loginUsername:document.querySelector("#login-username"),loginEmail:document.querySelector("#login-email"),loginPassword:document.querySelector("#login-password"),signupEmail:document.querySelector("#signup-email"),signupPassword:document.querySelector("#signup-password"),loginBtn:document.querySelector("#login__button"),loginHeaderBtn:document.querySelector(".login__button"),signupBtn:document.querySelector("#signup__button"),logoutBtn:document.querySelector("#logout__button"),logoutText:document.querySelector(".logout-modal__text"),logoutModal:document.querySelector(".logout-modal"),checkbox:document.querySelector(".form-check-input"),usernick:document.querySelector(".user-nick")},a="keep_logged_as";sessionStorage.removeItem(a),function(){const t=localStorage.getItem(a),e=sessionStorage.getItem(a);t||e?(o.libGallery&&(o.emptyLibText.style.display="none",o.libGallery.style.display="flex"),o.loginForm.classList.add("logout-modal--hidden"),o.logoutModal.classList.remove("logout-modal--hidden"),o.loginHeaderBtn.textContent="Log Out",o.usernick.textContent=`${t}`,o.logoutText.innerHTML=`You are logged in as ${t}`):(o.libGallery&&(o.emptyLibText.style.display="flex",o.libGallery.style.display="none"),o.loginForm.classList.remove("logout-modal--hidden"),o.logoutModal.classList.add("logout-modal--hidden"),o.loginHeaderBtn.textContent="Log In",o.usernick.textContent="")}();const c=(0,r.initializeApp)({apiKey:"AIzaSyDI06G7ldPdrMhSq-FyX2L15PRQF0jVleY",authDomain:"filmoteka-project-f50cc.firebaseapp.com",databaseURL:"https://filmoteka-project-f50cc-default-rtdb.firebaseio.com",projectId:"filmoteka-project-f50cc",storageBucket:"filmoteka-project-f50cc.appspot.com",messagingSenderId:"744226297338",appId:"1:744226297338:web:8ad6c2023b760eb61bc043"}),u=(0,i.n)(c);function l(t){t.code==i.D.INVALID_PASSWORD?alert("Wrong password. Try again."):alert(`Error: ${t.message}`)}o.loginBtn.addEventListener("click",(async()=>{const t=o.loginEmail.value,e=o.loginPassword.value;try{const n=await(0,i.a6)(u,t,e);if(o.loginUsername.value.length>9)alert("Your nickname is too long. Make it 9 characters maximum.");else{n.user.displayName=o.loginUsername.value;const t=n.user.displayName;o.checkbox.checked?localStorage.setItem(a,`${t}`):o.checkbox.checked||sessionStorage.setItem(a,`${t}`),o.loginHeaderBtn.textContent="Log Out",o.usernick.textContent=`${t}`,console.log(t),async function(){(0,i.v)(u,(t=>{const e=localStorage.getItem(a),n=sessionStorage.getItem(a);o.libGallery&&(o.emptyLibText.style.display="none",o.libGallery.style.display="flex"),e&&(o.loginForm.classList.add("logout-modal--hidden"),o.logoutModal.classList.remove("logout-modal--hidden"),o.logoutText.innerHTML=`You are logged in as ${e}`),n&&(o.loginForm.classList.add("logout-modal--hidden"),o.logoutModal.classList.remove("logout-modal--hidden"),o.logoutText.innerHTML=`You are logged in as ${n}`)}))}(),o.loginUsername.value="",o.loginEmail.value="",o.loginPassword.value="",o.checkbox.checked=!1}}catch(t){l(t)}}));o.signupBtn.addEventListener("click",(async t=>{const e=o.signupEmail.value,n=o.signupPassword.value;try{await(0,i.a5)(u,e,n);alert("You are signed up now"),o.signupPassword.value="",o.signupEmail.value=""}catch(t){l(t)}}));o.logoutBtn.addEventListener("click",(async()=>{await(0,i.y)(u),o.libGallery&&(o.emptyLibText.style.display="flex",o.libGallery.style.display="none"),localStorage.removeItem(a),o.loginHeaderBtn.textContent="Log In",o.usernick.textContent="",o.loginForm.classList.remove("logout-modal--hidden"),o.logoutModal.classList.add("logout-modal--hidden"),alert("You're not logged in anymore")}))})),s.register("25RCP",(function(e,n){t(e.exports,"initializeApp",(function(){return s("ix4Jr").initializeApp})),t(e.exports,"registerVersion",(function(){return s("ix4Jr").registerVersion}));s("ix4Jr");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,s("ix4Jr").registerVersion)("firebase","9.9.0","app")})),s.register("ix4Jr",(function(e,n){t(e.exports,"_registerComponent",(function(){return y})),t(e.exports,"_getProvider",(function(){return v})),t(e.exports,"_removeServiceInstance",(function(){return _})),t(e.exports,"SDK_VERSION",(function(){return I})),t(e.exports,"initializeApp",(function(){return T})),t(e.exports,"getApp",(function(){return S})),t(e.exports,"registerVersion",(function(){return A}));var r=s("4a6xH"),i=s("7vF8m"),o=s("ffjl9"),a=s("cCiiD");o=s("ffjl9");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{getPlatformInfoString(){return this.container.getProviders().map((t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null})).filter((t=>t)).join(" ")}constructor(t){this.container=t}}const u="@firebase/app",l="0.7.28",h=new(0,i.Logger)("@firebase/app"),d="[DEFAULT]",f={[u]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},p=new Map,g=new Map;function m(t,e){try{t.container.addComponent(e)}catch(n){h.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function y(t){const e=t.name;if(g.has(e))return h.debug(`There were multiple attempts to register component ${e}.`),!1;g.set(e,t);for(const e of p.values())m(e,t);return!0}function v(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function _(t,e,n="[DEFAULT]"){v(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const E={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},w=new(0,o.ErrorFactory)("app","Firebase",E);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw w.create("app-deleted",{appName:this._name})}constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new(0,r.Component)("app",(()=>this),"PUBLIC"))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const I="9.9.0";function T(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:d,automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw w.create("bad-app-name",{appName:String(i)});const s=p.get(i);if(s){if((0,o.deepEqual)(t,s.options)&&(0,o.deepEqual)(n,s.config))return s;throw w.create("duplicate-app",{appName:i})}const a=new(0,r.ComponentContainer)(i);for(const t of g.values())a.addComponent(t);const c=new b(t,n,a);return p.set(i,c),c}function S(t="[DEFAULT]"){const e=p.get(t);if(!e)throw w.create("no-app",{appName:t});return e}function A(t,e,n){var i;let s=null!==(i=f[t])&&void 0!==i?i:t;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=e.match(/\s|\//);if(o||a){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&t.push("and"),a&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void h.warn(t.join(" "))}y(new(0,r.Component)(`${s}-version`,(()=>({library:s,version:e})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N="firebase-heartbeat-store";let k=null;function C(){return k||(k=(0,a.openDB)("firebase-heartbeat-database",1,{upgrade:(t,e)=>{if(0===e)t.createObjectStore(N)}}).catch((t=>{throw w.create("storage-open",{originalErrorMessage:t.message})}))),k}async function R(t,e){var n;try{const n=(await C()).transaction(N,"readwrite"),r=n.objectStore(N);return await r.put(e,D(t)),n.done}catch(t){throw w.create("storage-set",{originalErrorMessage:null===(n=t)||void 0===n?void 0:n.message})}}function D(t){return`${t.name}!${t.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),e=L();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==e&&!this._heartbeatsCache.heartbeats.some((t=>t.date===e)))return this._heartbeatsCache.heartbeats.push({date:e,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((t=>{const e=new Date(t.date).valueOf();return Date.now()-e<=2592e6})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const t=L(),{heartbeatsToSend:e,unsentEntries:n}=function(t,e=1024){const n=[];let r=t.slice();for(const i of t){const t=n.find((t=>t.agent===i.agent));if(t){if(t.dates.push(i.date),P(n)>e){t.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),P(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}(this._heartbeatsCache.heartbeats),r=(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:e}));return this._heartbeatsCache.lastSentHeartbeatDate=t,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}constructor(t){this.container=t,this._heartbeatsCache=null;const e=this.container.getProvider("app").getImmediate();this._storage=new x(e),this._heartbeatsCachePromise=this._storage.read().then((t=>(this._heartbeatsCache=t,t)))}}function L(){return(new Date).toISOString().substring(0,10)}class x{async runIndexedDBEnvironmentCheck(){return!!(0,o.isIndexedDBAvailable)()&&(0,o.validateIndexedDBOpenable)().then((()=>!0)).catch((()=>!1))}async read(){if(await this._canUseIndexedDBPromise){return await async function(t){var e;try{return(await C()).transaction(N).objectStore(N).get(D(t))}catch(t){throw w.create("storage-get",{originalErrorMessage:null===(e=t)||void 0===e?void 0:e.message})}}(this.app)||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var e;if(await this._canUseIndexedDBPromise){const n=await this.read();return R(this.app,{lastSentHeartbeatDate:null!==(e=t.lastSentHeartbeatDate)&&void 0!==e?e:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...t.heartbeats]})}}constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}}function P(t){return(0,o.base64urlEncodeWithoutPadding)(JSON.stringify({version:2,heartbeats:t})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;U="",y(new(0,r.Component)("platform-logger",(t=>new c(t)),"PRIVATE")),y(new(0,r.Component)("heartbeat",(t=>new O(t)),"PRIVATE")),A(u,l,U),A(u,l,"esm2017"),A("fire-js","")})),s.register("4a6xH",(function(e,n){t(e.exports,"Component",(function(){return i})),t(e.exports,"ComponentContainer",(function(){return c}));var r=s("ffjl9");class i{setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}constructor(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const o="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a{get(t){const e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){const t=new(0,r.Deferred);if(this.instancesDeferred.set(e,t),this.isInitialized(e)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:e});n&&t.resolve(n)}catch(t){}}return this.instancesDeferred.get(e).promise}getImmediate(t){var e;const n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[t,e]of this.instancesDeferred.entries()){const n=this.normalizeInstanceIdentifier(t);try{const t=this.getOrInitializeService({instanceIdentifier:n});e.resolve(t)}catch(t){}}}}clearInstance(t="[DEFAULT]"){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter((t=>"INTERNAL"in t)).map((t=>t.INTERNAL.delete())),...t.filter((t=>"_delete"in t)).map((t=>t._delete()))])}isComponentSet(){return null!=this.component}isInitialized(t="[DEFAULT]"){return this.instances.has(t)}getOptions(t="[DEFAULT]"){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:e={}}=t,n=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:e});for(const[t,e]of this.instancesDeferred.entries()){n===this.normalizeInstanceIdentifier(t)&&e.resolve(r)}return r}onInit(t,e){var n;const r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&t(s,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,e){const n=this.onInitCallbacks.get(e);if(n)for(const r of n)try{r(t,e)}catch(t){}}getOrInitializeService({instanceIdentifier:t,options:e={}}){let n=this.instances.get(t);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===o?void 0:r),options:e}),this.instances.set(t,n),this.instancesOptions.set(t,e),this.invokeOnInitCallbacks(n,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,n)}catch(t){}var r;return n||null}normalizeInstanceIdentifier(t="[DEFAULT]"){return this.component?this.component.multipleInstances?t:o:t}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}constructor(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}}class c{addComponent(t){const e=this.getProvider(t.name);if(e.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);e.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const e=new a(t,this);return this.providers.set(t,e),e}getProviders(){return Array.from(this.providers.values())}constructor(t){this.name=t,this.providers=new Map}}})),s.register("ffjl9",(function(e,r){t(e.exports,"base64urlEncodeWithoutPadding",(function(){return o})),t(e.exports,"base64Decode",(function(){return a})),t(e.exports,"Deferred",(function(){return c})),t(e.exports,"createMockUserToken",(function(){return u})),t(e.exports,"getUA",(function(){return l})),t(e.exports,"isMobileCordova",(function(){return h})),t(e.exports,"isBrowserExtension",(function(){return d})),t(e.exports,"isReactNative",(function(){return f})),t(e.exports,"isElectron",(function(){return p})),t(e.exports,"isIE",(function(){return g})),t(e.exports,"isUWP",(function(){return m})),t(e.exports,"isSafari",(function(){return y})),t(e.exports,"isIndexedDBAvailable",(function(){return v})),t(e.exports,"validateIndexedDBOpenable",(function(){return _})),t(e.exports,"FirebaseError",(function(){return E})),t(e.exports,"ErrorFactory",(function(){return w})),t(e.exports,"isEmpty",(function(){return I})),t(e.exports,"deepEqual",(function(){return T})),t(e.exports,"querystring",(function(){return A})),t(e.exports,"querystringDecode",(function(){return N})),t(e.exports,"extractQuerystring",(function(){return k})),t(e.exports,"createSubscribe",(function(){return C})),t(e.exports,"getModularInstance",(function(){return O}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let e=0;e<t.length;e+=3){const i=t[e],s=e+1<t.length,o=s?t[e+1]:0,a=e+2<t.length,c=a?t[e+2]:0,u=i>>2,l=(3&i)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),r.push(n[u],n[l],n[h],n[d])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=((7&i)<<18|(63&t[n++])<<12|(63&t[n++])<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(s>>10)),e[r++]=String.fromCharCode(56320+(1023&s))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let e=0;e<t.length;){const i=n[t.charAt(e++)],s=e<t.length?n[t.charAt(e)]:0;++e;const o=e<t.length?n[t.charAt(e)]:64;++e;const a=e<t.length?n[t.charAt(e)]:64;if(++e,null==i||null==s||null==o||null==a)throw Error();const c=i<<2|s>>4;if(r.push(c),64!==o){const t=s<<4&240|o>>2;if(r.push(t),64!==a){const t=o<<6&192|a;r.push(t)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){const e=i(t);return s.encodeByteArray(e,!0)}(t).replace(/\./g,"")},a=function(t){try{return s.decodeString(t,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{wrapCallback(t){return(e,n)=>{e?this.reject(e):this.resolve(n),"function"==typeof t&&(this.promise.catch((()=>{})),1===t.length?t(e):t(e,n))}}constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n=e||"demo-project",r=t.iat||0,i=t.sub||t.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:`https://securetoken.google.com/${n}`,aud:n,iat:r,exp:r+3600,auth_time:r,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(s)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function h(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function d(){const t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function p(){return l().indexOf("Electron/")>=0}function g(){const t=l();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return l().indexOf("MSAppHost/")>=0}function y(){return!function(){try{return"[object process]"===Object.prototype.toString.call(n.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function v(){return"object"==typeof indexedDB}function _(){return new Promise(((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var t;e((null===(t=i.error)||void 0===t?void 0:t.message)||"")}}catch(t){e(t)}}))}class E extends Error{constructor(t,e,n){super(e),this.code=t,this.customData=n,this.name="FirebaseError",Object.setPrototypeOf(this,E.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,w.prototype.create)}}class w{create(t,...e){const n=e[0]||{},r=`${this.service}/${t}`,i=this.errors[t],s=i?function(t,e){return t.replace(b,((t,n)=>{const r=e[n];return null!=r?String(r):`<${n}?>`}))}(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`;return new E(r,o,n)}constructor(t,e,n){this.service=t,this.serviceName=e,this.errors=n}}const b=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function T(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const n=t[i],s=e[i];if(S(n)&&S(s)){if(!T(n,s))return!1}else if(n!==s)return!1}for(const t of r)if(!n.includes(t))return!1;return!0}function S(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function A(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach((t=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(t))})):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function N(t){const e={};return t.replace(/^\?/,"").split("&").forEach((t=>{if(t){const[n,r]=t.split("=");e[decodeURIComponent(n)]=decodeURIComponent(r)}})),e}function k(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t,e){const n=new R(t,e);return n.subscribe.bind(n)}class R{next(t){this.forEachObserver((e=>{e.next(t)}))}error(t){this.forEachObserver((e=>{e.error(t)})),this.close(t)}complete(){this.forEachObserver((t=>{t.complete()})),this.close()}subscribe(t,e,n){let r;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");r=function(t,e){if("object"!=typeof t||null===t)return!1;for(const n of e)if(n in t&&"function"==typeof t[n])return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n},void 0===r.next&&(r.next=D),void 0===r.error&&(r.error=D),void 0===r.complete&&(r.complete=D);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(t){}})),this.observers.push(r),i}unsubscribeOne(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let e=0;e<this.observers.length;e++)this.sendOne(e,t)}sendOne(t,e){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[t])try{e(this.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))}close(t){this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}constructor(t,e){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((()=>{t(this)})).catch((t=>{this.error(t)}))}}function D(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function O(t){return t&&t._delegate?t._delegate:t}})),s.register("7vF8m",(function(e,n){t(e.exports,"LogLevel",(function(){return i})),t(e.exports,"Logger",(function(){return l})),t(e.exports,"setLogLevel",(function(){return h})),t(e.exports,"setUserLogHandler",(function(){return d}));
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i,s;(s=i||(i={}))[s.DEBUG=0]="DEBUG",s[s.VERBOSE=1]="VERBOSE",s[s.INFO=2]="INFO",s[s.WARN=3]="WARN",s[s.ERROR=4]="ERROR",s[s.SILENT=5]="SILENT";const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},a=i.INFO,c={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},u=(t,e,...n)=>{if(e<t.logLevel)return;const r=(new Date).toISOString(),i=c[e];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`);console[i](`[${r}]  ${t.name}:`,...n)};class l{get logLevel(){return this._logLevel}set logLevel(t){if(!(t in i))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel="string"==typeof t?o[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...t),this._logHandler(this,i.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...t),this._logHandler(this,i.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,i.INFO,...t),this._logHandler(this,i.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,i.WARN,...t),this._logHandler(this,i.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...t),this._logHandler(this,i.ERROR,...t)}constructor(t){this.name=t,this._logLevel=a,this._logHandler=u,this._userLogHandler=null,r.push(this)}}function h(t){r.forEach((e=>{e.setLogLevel(t)}))}function d(t,e){for(const n of r){let r=null;e&&e.level&&(r=o[e.level]),n.userLogHandler=null===t?null:(e,n,...s)=>{const o=s.map((t=>{if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((t=>t)).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:i[n].toLowerCase(),message:o,args:s,type:e.name})}}}})),s.register("cCiiD",(function(e,n){t(e.exports,"openDB",(function(){return i}));var r=s("ekHjI");r=s("ekHjI");function i(t,e,{blocked:n,upgrade:i,blocking:s,terminated:o}={}){const a=indexedDB.open(t,e),c=(0,r.w)(a);return i&&a.addEventListener("upgradeneeded",(t=>{i((0,r.w)(a.result),t.oldVersion,t.newVersion,(0,r.w)(a.transaction))})),n&&a.addEventListener("blocked",(()=>n())),c.then((t=>{o&&t.addEventListener("close",(()=>o())),s&&t.addEventListener("versionchange",(()=>s()))})).catch((()=>{})),c}const o=["get","getKey","getAll","getAllKeys","count"],a=["put","add","delete","clear"],c=new Map;function u(t,e){if(!(t instanceof IDBDatabase)||e in t||"string"!=typeof e)return;if(c.get(e))return c.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=a.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!o.includes(n))return;const s=async function(t,...e){const s=this.transaction(t,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(e.shift())),(await Promise.all([o[n](...e),i&&s.done]))[0]};return c.set(e,s),s}(0,r.r)((t=>({...t,get:(e,n,r)=>u(e,n)||t.get(e,n,r),has:(e,n)=>!!u(e,n)||t.has(e,n)})))})),s.register("ekHjI",(function(e,n){t(e.exports,"w",(function(){return p})),t(e.exports,"r",(function(){return h}));let r,i;const s=new WeakMap,o=new WeakMap,a=new WeakMap,c=new WeakMap,u=new WeakMap;let l={get(t,e,n){if(t instanceof IDBTransaction){if("done"===e)return o.get(t);if("objectStoreNames"===e)return t.objectStoreNames||a.get(t);if("store"===e)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return p(t[e])},set:(t,e,n)=>(t[e]=n,!0),has:(t,e)=>t instanceof IDBTransaction&&("done"===e||"store"===e)||e in t};function h(t){l=t(l)}function d(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(i||(i=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(...e){return t.apply(g(this),e),p(s.get(this))}:function(...e){return p(t.apply(g(this),e))}:function(e,...n){const r=t.call(g(this),e,...n);return a.set(r,e.sort?e.sort():[e]),p(r)}}function f(t){return"function"==typeof t?d(t):(t instanceof IDBTransaction&&function(t){if(o.has(t))return;const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("complete",i),t.removeEventListener("error",s),t.removeEventListener("abort",s)},i=()=>{e(),r()},s=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",i),t.addEventListener("error",s),t.addEventListener("abort",s)}));o.set(t,e)}(t),e=t,(r||(r=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((t=>e instanceof t))?new Proxy(t,l):t);var e}function p(t){if(t instanceof IDBRequest)return function(t){const e=new Promise(((e,n)=>{const r=()=>{t.removeEventListener("success",i),t.removeEventListener("error",s)},i=()=>{e(p(t.result)),r()},s=()=>{n(t.error),r()};t.addEventListener("success",i),t.addEventListener("error",s)}));return e.then((e=>{e instanceof IDBCursor&&s.set(e,t)})).catch((()=>{})),u.set(e,t),e}(t);if(c.has(t))return c.get(t);const e=f(t);return e!==t&&(c.set(t,e),u.set(e,t)),e}const g=t=>u.get(t)})),s.register("amyG6",(function(e,n){t(e.exports,"getAuth",(function(){return s("kbFea").n})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("kbFea").a6})),t(e.exports,"AuthErrorCodes",(function(){return s("kbFea").D})),t(e.exports,"createUserWithEmailAndPassword",(function(){return s("kbFea").a5})),t(e.exports,"onAuthStateChanged",(function(){return s("kbFea").v})),t(e.exports,"signOut",(function(){return s("kbFea").y})),s("1iO0g")})),s.register("1iO0g",(function(e,n){t(e.exports,"AuthErrorCodes",(function(){return s("kbFea").D})),t(e.exports,"createUserWithEmailAndPassword",(function(){return s("kbFea").a5})),t(e.exports,"getAuth",(function(){return s("kbFea").n})),t(e.exports,"onAuthStateChanged",(function(){return s("kbFea").v})),t(e.exports,"signInWithEmailAndPassword",(function(){return s("kbFea").a6})),t(e.exports,"signOut",(function(){return s("kbFea").y})),s("ffjl9"),s("ix4Jr"),s("7vF8m"),s("4a6xH");s("kbFea")})),s.register("kbFea",(function(e,n){t(e.exports,"D",(function(){return d})),t(e.exports,"a5",(function(){return Ft})),t(e.exports,"a6",(function(){return Vt})),t(e.exports,"v",(function(){return Bt})),t(e.exports,"y",(function(){return jt})),t(e.exports,"n",(function(){return tn}));var r=s("ffjl9"),i=s("ix4Jr"),o=s("l73V3"),a=s("7vF8m"),c=s("4a6xH");function u(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const l=u,h=new(0,r.ErrorFactory)("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),d={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},f=new(0,a.Logger)("@firebase/auth");function p(t,...e){f.logLevel<=a.LogLevel.ERROR&&f.error(`Auth (${i.SDK_VERSION}): ${t}`,...e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t,...e){throw v(t,...e)}function m(t,...e){return v(t,...e)}function y(t,e,n){const i=Object.assign(Object.assign({},l()),{[e]:n});return new(0,r.ErrorFactory)("auth","Firebase",i).create(e,{appName:t.name})}function v(t,...e){if("string"!=typeof t){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return h.create(t,...e)}function _(t,e,...n){if(!t)throw v(e,...n)}function E(t){const e="INTERNAL ASSERTION FAILED: "+t;throw p(e),new Error(e)}function w(t,e){t||E(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function I(t){w(t instanceof Function,"Expected a class definition");let e=b.get(t);return e?(w(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,b.set(t,e),e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function T(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.href)||""}function S(){return"http:"===A()||"https:"===A()}function A(){var t;return"undefined"!=typeof self&&(null===(t=self.location)||void 0===t?void 0:t.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class N{get(){return"undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&(S()||(0,r.isBrowserExtension)()||"connection"in navigator)&&!navigator.onLine?Math.min(5e3,this.shortDelay):this.isMobile?this.longDelay:this.shortDelay}constructor(t,e){this.shortDelay=t,this.longDelay=e,w(e>t,"Short delay should be less than long delay!"),this.isMobile=(0,r.isMobileCordova)()||(0,r.isReactNative)()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(t,e){w(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{static initialize(t,e,n){this.fetchImpl=t,e&&(this.headersImpl=e),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void E("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void E("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void E("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"},D=new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function L(t,e,n,i,s={}){return x(t,s,(async()=>{let s={},o={};i&&("GET"===e?o=i:s={body:JSON.stringify(i)});const a=(0,r.querystring)(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),C.fetch()(U(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))}))}async function x(t,e,n){t._canInitEmulator=!1;const i=Object.assign(Object.assign({},R),e);try{const e=new M(t),r=await Promise.race([n(),e.promise]);e.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw F(t,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const e=r.ok?s.errorMessage:s.error.message,[n,o]=e.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw F(t,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw F(t,"email-already-in-use",s);if("USER_DISABLED"===n)throw F(t,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw y(t,a,o);g(t,a)}}catch(e){if(e instanceof r.FirebaseError)throw e;g(t,"network-request-failed")}}async function P(t,e,n,r,i={}){const s=await L(t,e,n,r,i);return"mfaPendingCredential"in s&&g(t,"multi-factor-auth-required",{_serverResponse:s}),s}function U(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?k(t.config,i):`${t.config.apiScheme}://${i}`}class M{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(t){this.auth=t,this.timer=null,this.promise=new Promise(((t,e)=>{this.timer=setTimeout((()=>e(m(this.auth,"network-request-failed"))),D.get())}))}}function F(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=m(t,e,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t){return 1e3*Number(t)}function j(t){var e;const[n,i,s]=t.split(".");if(void 0===n||void 0===i||void 0===s)return p("JWT malformed, contained fewer than 3 sections"),null;try{const t=(0,r.base64Decode)(i);return t?JSON.parse(t):(p("Failed to decode base64 JWT payload"),null)}catch(t){return p("Caught error parsing JWT payload as JSON",null===(e=t)||void 0===e?void 0:e.toString()),null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function q(t,e,n=!1){if(n)return e;try{return await e}catch(e){throw e instanceof r.FirebaseError&&function({code:t}){return"auth/user-disabled"===t||"auth/user-token-expired"===t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e)&&t.auth.currentUser===t&&await t.auth.signOut(),e}}class ${_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const t=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),t}{this.errorBackoff=3e4;const t=(null!==(e=this.user.stsTokenManager.expirationTime)&&void 0!==e?e:0)-Date.now()-3e5;return Math.max(0,t)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout((async()=>{await this.iteration()}),e)}async iteration(){var t;try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===(t=e)||void 0===t?void 0:t.code)&&this.schedule(!0))}this.schedule()}constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{_initializeTime(){this.lastSignInTime=V(this.lastLoginAt),this.creationTime=V(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(t){var e;const n=t.auth,r=await t.getIdToken(),i=await q(t,async function(t,e){return L(t,"POST","/v1/accounts:lookup",e)}(n,{idToken:r}));_(null==i?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const a=(null===(e=s.providerUserInfo)||void 0===e?void 0:e.length)?s.providerUserInfo.map((t=>{var{providerId:e}=t,n=(0,o.__rest)(t,["providerId"]);return{providerId:e,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})):[];const c=(u=t.providerData,l=a,[...u.filter((t=>!l.some((e=>e.providerId===t.providerId)))),...l]);var u,l;const h=t.isAnonymous,d=!(t.email&&s.passwordHash||(null==c?void 0:c.length)),f=!!h&&d,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new K(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,p)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class H{get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){_(t.idToken,"internal-error"),_(void 0!==t.idToken,"internal-error"),_(void 0!==t.refreshToken,"internal-error");const e="expiresIn"in t&&void 0!==t.expiresIn?Number(t.expiresIn):function(t){const e=j(t);return _(e,"internal-error"),_(void 0!==e.exp,"internal-error"),_(void 0!==e.iat,"internal-error"),Number(e.exp)-Number(e.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return _(!this.accessToken||this.refreshToken,t,"user-token-expired"),e||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:n,refreshToken:i,expiresIn:s}=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function(t,e){const n=await x(t,{},(async()=>{const n=(0,r.querystring)({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=U(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}(t,e);this.updateTokensAndExpiration(n,i,Number(s))}updateTokensAndExpiration(t,e,n){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(t,e){const{refreshToken:n,accessToken:r,expirationTime:i}=e,s=new H;return n&&(_("string"==typeof n,"internal-error",{appName:t}),s.refreshToken=n),r&&(_("string"==typeof r,"internal-error",{appName:t}),s.accessToken=r),i&&(_("number"==typeof i,"internal-error",{appName:t}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new H,this.toJSON())}_performRefresh(){return E("not implemented")}constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(t,e){_("string"==typeof t||void 0===t,"internal-error",{appName:e})}class W{async getIdToken(t){const e=await q(this,this.stsTokenManager.getToken(this.auth,t));return _(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return async function(t,e=!1){const n=(0,r.getModularInstance)(t),i=await n.getIdToken(e),s=j(i);_(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"==typeof s.firebase?s.firebase:void 0,a=null==o?void 0:o.sign_in_provider;return{claims:s,token:i,authTime:V(B(s.auth_time)),issuedAtTime:V(B(s.iat)),expirationTime:V(B(s.exp)),signInProvider:a||null,signInSecondFactor:(null==o?void 0:o.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const e=(0,r.getModularInstance)(t);await G(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}(this)}_assign(t){this!==t&&(_(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map((t=>Object.assign({},t))),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){return new W(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(t){_(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let n=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),n=!0),e&&await G(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await q(this,async function(t,e){return L(t,"POST","/v1/accounts:delete",e)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((t=>Object.assign({},t))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var n,r,i,s,o,a,c,u;const l=null!==(n=e.displayName)&&void 0!==n?n:void 0,h=null!==(r=e.email)&&void 0!==r?r:void 0,d=null!==(i=e.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=e.photoURL)&&void 0!==s?s:void 0,p=null!==(o=e.tenantId)&&void 0!==o?o:void 0,g=null!==(a=e._redirectEventId)&&void 0!==a?a:void 0,m=null!==(c=e.createdAt)&&void 0!==c?c:void 0,y=null!==(u=e.lastLoginAt)&&void 0!==u?u:void 0,{uid:v,emailVerified:E,isAnonymous:w,providerData:b,stsTokenManager:I}=e;_(v&&I,t,"internal-error");const T=H.fromJSON(this.name,I);_("string"==typeof v,t,"internal-error"),z(l,t.name),z(h,t.name),_("boolean"==typeof E,t,"internal-error"),_("boolean"==typeof w,t,"internal-error"),z(d,t.name),z(f,t.name),z(p,t.name),z(g,t.name),z(m,t.name),z(y,t.name);const S=new W({uid:v,auth:t,email:h,emailVerified:E,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return b&&Array.isArray(b)&&(S.providerData=b.map((t=>Object.assign({},t)))),g&&(S._redirectEventId=g),S}static async _fromIdTokenResponse(t,e,n=!1){const r=new H;r.updateFromServerResponse(e);const i=new W({uid:e.localId,auth:t,stsTokenManager:r,isAnonymous:n});return await G(i),i}constructor(t){var{uid:e,auth:n,stsTokenManager:r}=t,i=(0,o.__rest)(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new K(i.createdAt||void 0,i.lastLoginAt||void 0)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return void 0===e?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}constructor(){this.type="NONE",this.storage={}}}Q.type="NONE";const Y=Q;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){return`firebase:${t}:${e}:${n}`}class X{setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?W._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,e?this.setCurrentUser(e):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,n="authUser"){if(!e.length)return new X(I(Y),t,n);const r=(await Promise.all(e.map((async t=>{if(await t._isAvailable())return t})))).filter((t=>t));let i=r[0]||I(Y);const s=J(n,t.config.apiKey,t.name);let o=null;for(const n of e)try{const e=await n._get(s);if(e){const r=W._fromJSON(t,e);n!==i&&(o=r),i=n;break}}catch(t){}const a=r.filter((t=>t._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(e.map((async t=>{if(t!==i)try{await t._remove(s)}catch(t){}}))),new X(i,t,n)):new X(i,t,n)}constructor(t,e,n){this.persistence=t,this.auth=e,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=J(this.userKey,r.apiKey,i),this.fullPersistenceKey=J("persistence",r.apiKey,i),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rt(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tt(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(st(e))return"Blackberry";if(ot(e))return"Webos";if(et(e))return"Safari";if((e.includes("chrome/")||nt(e))&&!e.includes("edge/"))return"Chrome";if(it(e))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=t.match(e);if(2===(null==n?void 0:n.length))return n[1]}return"Other"}function tt(t=(0,r.getUA)()){return/firefox\//i.test(t)}function et(t=(0,r.getUA)()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nt(t=(0,r.getUA)()){return/crios\//i.test(t)}function rt(t=(0,r.getUA)()){return/iemobile/i.test(t)}function it(t=(0,r.getUA)()){return/android/i.test(t)}function st(t=(0,r.getUA)()){return/blackberry/i.test(t)}function ot(t=(0,r.getUA)()){return/webos/i.test(t)}function at(t=(0,r.getUA)()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function ct(t=(0,r.getUA)()){return at(t)||it(t)||ot(t)||st(t)||/windows phone/i.test(t)||rt(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ut(t,e=[]){let n;switch(t){case"Browser":n=Z((0,r.getUA)());break;case"Worker":n=`${Z((0,r.getUA)())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.SDK_VERSION}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{pushCallback(t,e){const n=e=>new Promise(((n,r)=>{try{n(t(e))}catch(t){r(t)}}));n.onAbort=e,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){var e;if(this.auth.currentUser===t)return;const n=[];try{for(const e of this.queue)await e(t),e.onAbort&&n.push(e.onAbort)}catch(t){n.reverse();for(const t of n)try{t()}catch(t){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(e=t)||void 0===e?void 0:e.message})}}constructor(t){this.auth=t,this.queue=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=I(e)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await X.create(this,t),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(t){}await this.initializeCurrentUser(e),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var e;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(e=this.redirectUser)||void 0===e?void 0:e._redirectEventId,s=null==r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(t);n&&n!==s||!(null==o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(t){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(t)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return _(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch(t){await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){var e;try{await G(t)}catch(t){if("auth/network-request-failed"!==(null===(e=t)||void 0===e?void 0:e.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?(0,r.getModularInstance)(t):null;return e&&_(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&_(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue((async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue((async()=>{await this.assertedPersistence.setPersistence(I(t))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new(0,r.ErrorFactory)("auth","Firebase",t())}onAuthStateChanged(t,e,n){return this.registerStateListener(this.authStateSubscription,t,e,n)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,n){return this.registerStateListener(this.idTokenSubscription,t,e,n)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(t=this._currentUser)||void 0===t?void 0:t.toJSON()}}async _setRedirectUser(t,e){const n=await this.getOrInitRedirectPersistenceManager(e);return null===t?n.removeCurrentUser():n.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&I(t)||this._popupRedirectResolver;_(e,this,"argument-error"),this.redirectPersistenceManager=await X.create(this,[I(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(e=this._currentUser)||void 0===e?void 0:e._redirectEventId)===t?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(t)))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(e=null===(t=this.currentUser)||void 0===t?void 0:t.uid)&&void 0!==e?e:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,n,r){if(this._deleted)return()=>{};const i="function"==typeof e?e:e.next.bind(e),s=this._isInitialized?Promise.resolve():this._initializationPromise;return _(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"==typeof e?t.addObserver(e,n,r):t.addObserver(e)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&(this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh()),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return _(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=ut(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(t=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===t?void 0:t.getHeartbeatsHeader());return n&&(e["X-Firebase-Client"]=n),e}constructor(t,e,n){this.app=t,this.heartbeatServiceProvider=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ft(this),this.idTokenSubscription=new ft(this),this.beforeStateQueue=new lt(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=h,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=n.sdkClientVersion}}function dt(t){return(0,r.getModularInstance)(t)}class ft{get next(){return _(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}constructor(t){this.auth=t,this.observer=null,this.addObserver=(0,r.createSubscribe)((t=>this.observer=t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pt{toJSON(){return E("not implemented")}_getIdTokenResponse(t){return E("not implemented")}_linkToIdToken(t,e){return E("not implemented")}_getReauthenticationResolver(t){return E("not implemented")}constructor(t,e){this.providerId=t,this.signInMethod=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gt(t,e){return L(t,"POST","/v1/accounts:update",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class mt extends pt{static _fromEmailAndPassword(t,e){return new mt(t,e,"password")}static _fromEmailAndCode(t,e,n=null){return new mt(t,e,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t;if((null==e?void 0:e.email)&&(null==e?void 0:e.password)){if("password"===e.signInMethod)return this._fromEmailAndPassword(e.email,e.password);if("emailLink"===e.signInMethod)return this._fromEmailAndCode(e.email,e.password,e.tenantId)}return null}async _getIdTokenResponse(t){switch(this.signInMethod){case"password":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPassword",O(t,e))}(t,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
return async function(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}(t,{email:this._email,oobCode:this._password});default:g(t,"internal-error")}}async _linkToIdToken(t,e){switch(this.signInMethod){case"password":return gt(t,{idToken:e,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return async function(t,e){return P(t,"POST","/v1/accounts:signInWithEmailLink",O(t,e))}(t,{idToken:e,email:this._email,oobCode:this._password});default:g(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}constructor(t,e,n,r=null){super("password",n),this._email=t,this._password=e,this._tenantId=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yt(t,e){return P(t,"POST","/v1/accounts:signInWithIdp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends pt{static _fromParams(t){const e=new vt(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):g("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e="string"==typeof t?JSON.parse(t):t,{providerId:n,signInMethod:r}=e,i=(0,o.__rest)(e,["providerId","signInMethod"]);if(!n||!r)return null;const s=new vt(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(t){return yt(t,this.buildRequest())}_linkToIdToken(t,e){const n=this.buildRequest();return n.idToken=e,yt(t,n)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,yt(t,e)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=(0,r.querystring)(e)}return t}constructor(){super(...arguments),this.pendingToken=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _t={USER_NOT_FOUND:"user-not-found"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Et extends pt{static _fromVerification(t,e){return new Et({verificationId:t,verificationCode:e})}static _fromTokenResponse(t,e){return new Et({phoneNumber:t,temporaryProof:e})}_getIdTokenResponse(t){return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e))}(t,this._makeVerificationRequest())}_linkToIdToken(t,e){return async function(t,e){const n=await P(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,e));if(n.temporaryProof)throw F(t,"account-exists-with-different-credential",n);return n}(t,Object.assign({idToken:e},this._makeVerificationRequest()))}_getReauthenticationResolver(t){return async function(t,e){return P(t,"POST","/v1/accounts:signInWithPhoneNumber",O(t,Object.assign(Object.assign({},e),{operation:"REAUTH"})),_t)}(t,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:t,phoneNumber:e,verificationId:n,verificationCode:r}=this.params;return t&&e?{temporaryProof:t,phoneNumber:e}:{sessionInfo:n,code:r}}toJSON(){const t={providerId:this.providerId};return this.params.phoneNumber&&(t.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(t.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(t.verificationCode=this.params.verificationCode),this.params.verificationId&&(t.verificationId=this.params.verificationId),t}static fromJSON(t){"string"==typeof t&&(t=JSON.parse(t));const{verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}=t;return n||e||r||i?new Et({verificationId:e,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}constructor(t){super("phone","phone"),this.params=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{static parseLink(t){const e=function(t){const e=(0,r.querystringDecode)((0,r.extractQuerystring)(t)).link,n=e?(0,r.querystringDecode)((0,r.extractQuerystring)(e)).deep_link_id:null,i=(0,r.querystringDecode)((0,r.extractQuerystring)(t)).deep_link_id;return(i?(0,r.querystringDecode)((0,r.extractQuerystring)(i)).link:null)||i||n||e||t}(t);try{return new wt(e)}catch(t){return null}}constructor(t){var e,n,i,s,o,a;const c=(0,r.querystringDecode)((0,r.extractQuerystring)(t)),u=null!==(e=c.apiKey)&&void 0!==e?e:null,l=null!==(n=c.oobCode)&&void 0!==n?n:null,h=function(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(i=c.mode)&&void 0!==i?i:null);_(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(o=c.languageCode)&&void 0!==o?o:null,this.tenantId=null!==(a=c.tenantId)&&void 0!==a?a:null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bt{static credential(t,e){return mt._fromEmailAndPassword(t,e)}static credentialWithLink(t,e){const n=wt.parseLink(e);return _(n,"argument-error"),mt._fromEmailAndCode(t,n.code,n.tenantId)}constructor(){this.providerId=bt.PROVIDER_ID}}bt.PROVIDER_ID="password",bt.EMAIL_PASSWORD_SIGN_IN_METHOD="password",bt.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class It{setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt extends It{addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}constructor(){super(...arguments),this.scopes=[]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class St extends Tt{static credential(t){return vt._fromParams({providerId:St.PROVIDER_ID,signInMethod:St.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return St.credentialFromTaggedObject(t)}static credentialFromError(t){return St.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return St.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("facebook.com")}}St.FACEBOOK_SIGN_IN_METHOD="facebook.com",St.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class At extends Tt{static credential(t,e){return vt._fromParams({providerId:At.PROVIDER_ID,signInMethod:At.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return At.credentialFromTaggedObject(t)}static credentialFromError(t){return At.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:n}=t;if(!e&&!n)return null;try{return At.credential(e,n)}catch(t){return null}}constructor(){super("google.com"),this.addScope("profile")}}At.GOOGLE_SIGN_IN_METHOD="google.com",At.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nt extends Tt{static credential(t){return vt._fromParams({providerId:Nt.PROVIDER_ID,signInMethod:Nt.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Nt.credentialFromTaggedObject(t)}static credentialFromError(t){return Nt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return Nt.credential(t.oauthAccessToken)}catch(t){return null}}constructor(){super("github.com")}}Nt.GITHUB_SIGN_IN_METHOD="github.com",Nt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kt extends Tt{static credential(t,e){return vt._fromParams({providerId:kt.PROVIDER_ID,signInMethod:kt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return kt.credentialFromTaggedObject(t)}static credentialFromError(t){return kt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:n}=t;if(!e||!n)return null;try{return kt.credential(e,n)}catch(t){return null}}constructor(){super("twitter.com")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Ct(t,e){return P(t,"POST","/v1/accounts:signUp",O(t,e))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */kt.TWITTER_SIGN_IN_METHOD="twitter.com",kt.PROVIDER_ID="twitter.com";class Rt{static async _fromIdTokenResponse(t,e,n,r=!1){const i=await W._fromIdTokenResponse(t,n,r),s=Dt(n);return new Rt({user:i,providerId:s,_tokenResponse:n,operationType:e})}static async _forOperation(t,e,n){await t._updateTokensIfNecessary(n,!0);const r=Dt(n);return new Rt({user:t,providerId:r,_tokenResponse:n,operationType:e})}constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}}function Dt(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ot extends r.FirebaseError{static _fromErrorAndOperation(t,e,n,r){return new Ot(t,e,n,r)}constructor(t,e,n,r){var i;super(e.code,e.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,Ot.prototype),this.customData={appName:t.name,tenantId:null!==(i=t.tenantId)&&void 0!==i?i:void 0,_serverResponse:e.customData._serverResponse,operationType:n}}}function Lt(t,e,n,r){return("reauthenticate"===e?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ot._fromErrorAndOperation(t,n,e,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xt(t,e,n=!1){const r=await q(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Rt._forOperation(t,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Pt(t,e,n=!1){var r;const{auth:i}=t,s="reauthenticate";try{const r=await q(t,Lt(i,s,e,t),n);_(r.idToken,i,"internal-error");const o=j(r.idToken);_(o,i,"internal-error");const{sub:a}=o;return _(t.uid===a,i,"user-mismatch"),Rt._forOperation(t,s,r)}catch(t){throw"auth/user-not-found"===(null===(r=t)||void 0===r?void 0:r.code)&&g(i,"user-mismatch"),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ut(t,e,n=!1){const r="signIn",i=await Lt(t,r,e),s=await Rt._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Mt(t,e){return Ut(dt(t),e)}async function Ft(t,e,n){const r=dt(t),i=await Ct(r,{returnSecureToken:!0,email:e,password:n}),s=await Rt._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function Vt(t,e,n){return Mt((0,r.getModularInstance)(t),bt.credential(e,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(t,e,n,i){return(0,r.getModularInstance)(t).onAuthStateChanged(e,n,i)}function jt(t){return(0,r.getModularInstance)(t).signOut()}new WeakMap;const qt="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{_isAvailable(){try{return this.storage?(this.storage.setItem(qt,"1"),this.storage.removeItem(qt),Promise.resolve(!0)):Promise.resolve(!1)}catch(t){return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}constructor(t,e){this.storageRetriever=t,this.type=e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt extends $t{forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const n=this.storage.getItem(e),r=this.localCache[e];n!==r&&t(e,r,n)}}onStorageEvent(t,e=!1){if(!t.key)return void this.forAllChangedKeys(((t,e,n)=>{this.notifyListeners(t,n)}));const n=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(t.newValue!==r)null!==t.newValue?this.storage.setItem(n,t.newValue):this.storage.removeItem(n);else if(this.localCache[n]===t.newValue&&!e)return}const i=()=>{const t=this.storage.getItem(n);(e||this.localCache[n]!==t)&&this.notifyListeners(n,t)},s=this.storage.getItem(n);(0,r.isIE)()&&10===document.documentMode&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,10):i()}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e?JSON.parse(e):e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((t,e,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:n}),!0)}))}),1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=(0,r.getUA)();return et(t)||at(t)}()&&function(){try{return!(!window||window===window.top)}catch(t){return!1}}(),this.fallbackToPolling=ct(),this._shouldAllowMigration=!0}}Kt.type="LOCAL";const Gt=Kt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht extends $t{_addListener(t,e){}_removeListener(t,e){}constructor(){super((()=>window.sessionStorage),"SESSION")}}Ht.type="SESSION";const zt=Ht;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wt{static _getInstance(t){const e=this.receivers.find((e=>e.isListeningto(t)));if(e)return e;const n=new Wt(t);return this.receivers.push(n),n}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:n,eventType:r,data:i}=e.data,s=this.handlersMap[r];if(!(null==s?void 0:s.size))return;e.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async t=>t(e.origin,i))),a=await function(t){return Promise.all(t.map((async t=>{try{return{fulfilled:!0,value:await t}}catch(t){return{fulfilled:!1,reason:t}}})))}(o);e.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(t,e){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),e&&0!==this.handlersMap[t].size||delete this.handlersMap[t],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Qt(t="",e=10){let n="";for(let t=0;t<e;t++)n+=Math.floor(10*Math.random());return t+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Wt.receivers=[];class Yt{removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,n=50){const r="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const c=Qt("",20);r.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(t){const e=t;if(e.data.eventId===c)switch(e.data.status){case"ack":clearTimeout(u),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(e.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"))}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:t,eventId:c,data:e},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}constructor(t){this.target=t,this.handlers=new Set}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Xt(){return void 0!==Jt().WorkerGlobalScope&&"function"==typeof Jt().importScripts}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="firebaseLocalStorageDb",te="firebaseLocalStorage",ee="fbase_key";class ne{toPromise(){return new Promise(((t,e)=>{this.request.addEventListener("success",(()=>{t(this.request.result)})),this.request.addEventListener("error",(()=>{e(this.request.error)}))}))}constructor(t){this.request=t}}function re(t,e){return t.transaction([te],e?"readwrite":"readonly").objectStore(te)}function ie(){const t=indexedDB.open(Zt,1);return new Promise(((e,n)=>{t.addEventListener("error",(()=>{n(t.error)})),t.addEventListener("upgradeneeded",(()=>{const e=t.result;try{e.createObjectStore(te,{keyPath:ee})}catch(t){n(t)}})),t.addEventListener("success",(async()=>{const n=t.result;n.objectStoreNames.contains(te)?e(n):(n.close(),await function(){const t=indexedDB.deleteDatabase(Zt);return new ne(t).toPromise()}(),e(await ie()))}))}))}async function se(t,e,n){const r=re(t,!0).put({[ee]:e,value:n});return new ne(r).toPromise()}function oe(t,e){const n=re(t,!0).delete(e);return new ne(n).toPromise()}class ae{async _openDb(){return this.db||(this.db=await ie()),this.db}async _withRetries(t){let e=0;for(;;)try{const e=await this._openDb();return await t(e)}catch(t){if(e++>3)throw t;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Xt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Wt._getInstance(Xt()?self:null),this.receiver._subscribe("keyChanged",(async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)}))),this.receiver._subscribe("ping",(async(t,e)=>["keyChanged"]))}async initializeSender(){var t,e;if(this.activeServiceWorker=await async function(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch(t){return null}}(),!this.activeServiceWorker)return;this.sender=new Yt(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(t=n[0])||void 0===t?void 0:t.fulfilled)&&(null===(e=n[0])||void 0===e?void 0:e.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){var e;if(this.sender&&this.activeServiceWorker&&((null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch(e){}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ie();return await se(t,qt,"1"),await oe(t,qt),!0}catch(t){}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite((async()=>(await this._withRetries((n=>se(n,t,e))),this.localCache[t]=e,this.notifyServiceWorker(t))))}async _get(t){const e=await this._withRetries((e=>async function(t,e){const n=re(t,!1).get(e),r=await new ne(n).toPromise();return void 0===r?null:r.value}(e,t)));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite((async()=>(await this._withRetries((e=>oe(e,t))),delete this.localCache[t],this.notifyServiceWorker(t))))}async _poll(){const t=await this._withRetries((t=>{const e=re(t,!1).getAll();return new ne(e).toPromise()}));if(!t)return[];if(0!==this.pendingWrites)return[];const e=[],n=new Set;for(const{fbase_key:r,value:i}of t)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),e.push(r));for(const t of Object.keys(this.localCache))this.localCache[t]&&!n.has(t)&&(this.notifyListeners(t,null),e.push(t));return e}notifyListeners(t,e){this.localCache[t]=e;const n=this.listeners[t];if(n)for(const t of Array.from(n))t(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),0===this.listeners[t].size&&delete this.listeners[t]),0===Object.keys(this.listeners).length&&this.stopPolling()}constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}}ae.type="LOCAL";const ce=ae;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(t){return new Promise(((e,n)=>{const r=document.createElement("script");
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var i,s;r.setAttribute("src",t),r.onload=e,r.onerror=t=>{const e=m("internal-error");e.customData=t,n(e)},r.type="text/javascript",r.charset="UTF-8",(null!==(s=null===(i=document.getElementsByTagName("head"))||void 0===i?void 0:i[0])&&void 0!==s?s:document).appendChild(r)}))}function le(t){return`__${t}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
le("rcb"),new N(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const he="recaptcha";async function de(t,e,n){var r;const i=await n.verify();try{let s;if(_("string"==typeof i,t,"argument-error"),_(n.type===he,t,"argument-error"),s="string"==typeof e?{phoneNumber:e}:e,"session"in s){const e=s.session;if("phoneNumber"in s){_("enroll"===e.type,t,"internal-error");const n=await
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function(t,e){return L(t,"POST","/v2/accounts/mfaEnrollment:start",O(t,e))}(t,{idToken:e.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{_("signin"===e.type,t,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;_(n,t,"missing-multi-factor-info");const o=await function(t,e){return L(t,"POST","/v2/accounts/mfaSignIn:start",O(t,e))}(t,{mfaPendingCredential:e.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:e}=await async function(t,e){return L(t,"POST","/v1/accounts:sendVerificationCode",O(t,e))}(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return e}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fe{verifyPhoneNumber(t,e){return de(this.auth,t,(0,r.getModularInstance)(e))}static credential(t,e){return Et._fromVerification(t,e)}static credentialFromResult(t){const e=t;return fe.credentialFromTaggedObject(e)}static credentialFromError(t){return fe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{phoneNumber:e,temporaryProof:n}=t;return e&&n?Et._fromTokenResponse(e,n):null}constructor(t){this.providerId=fe.PROVIDER_ID,this.auth=dt(t)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function pe(t,e){return e?I(e):(_(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe.PROVIDER_ID="phone",fe.PHONE_SIGN_IN_METHOD="phone";class ge extends pt{_getIdTokenResponse(t){return yt(t,this._buildIdpRequest())}_linkToIdToken(t,e){return yt(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return yt(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}constructor(t){super("custom","custom"),this.params=t}}function me(t){return Ut(t.auth,new ge(t),t.bypassAuthState)}function ye(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),Pt(n,new ge(t),t.bypassAuthState)}async function ve(t){const{auth:e,user:n}=t;return _(n,e,"internal-error"),xt(n,new ge(t),t.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{execute(){return new Promise((async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(t){this.reject(t)}}))}async onAuthEvent(t){const{urlResponse:e,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=t;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:e,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(t){this.reject(t)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return me;case"linkViaPopup":case"linkViaRedirect":return ve;case"reauthViaPopup":case"reauthViaRedirect":return ye;default:g(this.auth,"internal-error")}}resolve(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}constructor(t,e,n,r,i=!1){this.auth=t,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee=new N(2e3,1e4);class we extends _e{async executeNotNull(){const t=await this.execute();return _(t,this.auth,"internal-error"),t}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const t=Qt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch((t=>{this.reject(t)})),this.resolver._isIframeWebStorageSupported(this.auth,(t=>{t||this.reject(m(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var t;return(null===(t=this.authWindow)||void 0===t?void 0:t.associatedEvent)||null}cancel(){this.reject(m(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,we.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,n;(null===(n=null===(e=this.authWindow)||void 0===e?void 0:e.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(m(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(t,Ee.get())};t()}constructor(t,e,n,r,i){super(t,e,r,i),this.provider=n,this.authWindow=null,this.pollId=null,we.currentPopupAction&&we.currentPopupAction.cancel(),we.currentPopupAction=this}}we.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const be=new Map;class Ie extends _e{async execute(){let t=be.get(this.auth._key());if(!t){try{const e=await async function(t,e){const n=Ae(e),r=Se(t);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(e)}catch(e){t=()=>Promise.reject(e)}be.set(this.auth._key(),t)}return this.bypassAuthState||be.set(this.auth._key(),(()=>Promise.resolve(null))),t()}async onAuthEvent(t){if("signInViaRedirect"===t.type)return super.onAuthEvent(t);if("unknown"!==t.type){if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}constructor(t,e,n=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,n),this.eventId=null}}function Te(t,e){be.set(t._key(),e)}function Se(t){return I(t._redirectPersistence)}function Ae(t){return J("pendingRedirect",t.config.apiKey,t.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ne(t,e,n=!1){const r=dt(t),i=pe(r,e),s=new Ie(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}class ke{registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(t,n)&&(e=!0,this.sendToConsumer(t,n),this.saveEventToCache(t))})),this.hasHandledPotentialRedirect||!function(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Re(t);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var n;if(t.error&&!Re(t)){const r=(null===(n=t.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";e.onError(m(this.auth,r))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const n=null===e.eventId||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&n}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ce(t))}saveEventToCache(t){this.cachedEventUids.add(Ce(t)),this.lastProcessedEventTime=Date.now()}constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}}function Ce(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter((t=>t)).join("-")}function Re({type:t,error:e}){return"unknown"===t&&"auth/no-auth-event"===(null==e?void 0:e.code)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const De=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Oe=/^https?/;async function Le(t){if(t.config.emulator)return;const{authorizedDomains:e}=await async function(t,e={}){return L(t,"GET","/v1/projects",e)}(t);for(const t of e)try{if(xe(t))return}catch(t){}g(t,"unauthorized-domain")}function xe(t){const e=T(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const i=new URL(t);return""===i.hostname&&""===r?"chrome-extension:"===n&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Oe.test(n))return!1;if(De.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pe=new N(3e4,6e4);function Ue(){const t=Jt().___jsl;if(null==t?void 0:t.H)for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let e=0;e<t.CP.length;e++)t.CP[e]=null}let Me=null;function Fe(t){return Me=Me||function(t){return new Promise(((e,n)=>{var r,i,s;function o(){Ue(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Ue(),n(m(t,"network-request-failed"))},timeout:Pe.get()})}if(null===(i=null===(r=Jt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)e(gapi.iframes.getContext());else{if(!(null===(s=Jt().gapi)||void 0===s?void 0:s.load)){const e=le("iframefcb");return Jt()[e]=()=>{gapi.load?o():n(m(t,"network-request-failed"))},ue(`https://apis.google.com/js/api.js?onload=${e}`).catch((t=>n(t)))}o()}})).catch((t=>{throw Me=null,t}))}(t),Me}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ve=new N(5e3,15e3),Be={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},je=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qe(t){const e=t.config;_(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?k(e,"emulator/auth/iframe"):`https://${t.config.authDomain}/__/auth/iframe`,s={apiKey:e.apiKey,appName:t.name,v:i.SDK_VERSION},o=je.get(t.config.apiHost);o&&(s.eid=o);const a=t._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.querystring)(s).slice(1)}`}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const $e={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class Ke{close(){if(this.window)try{this.window.close()}catch(t){}}constructor(t){this.window=t,this.associatedEvent=null}}function Ge(t,e,n,i=500,s=600){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$e),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.getUA)().toLowerCase();n&&(c=nt(l)?"_blank":n),tt(l)&&(e=e||"http://localhost",u.scrollbars="yes");const h=Object.entries(u).reduce(((t,[e,n])=>`${t}${e}=${n},`),"");if(function(t=(0,r.getUA)()){var e;return at(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}(l)&&"_self"!==c)return function(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e||"",c),new Ke(null);const d=window.open(e||"",c,h);_(d,t,"popup-blocked");try{d.focus()}catch(t){}return new Ke(d)}const He="emulator/auth/handler";function ze(t,e,n,s,o,a){_(t.config.authDomain,t,"auth-domain-config-required"),_(t.config.apiKey,t,"invalid-api-key");const c={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:i.SDK_VERSION,eventId:o};if(e instanceof It){e.setDefaultLanguage(t.languageCode),c.providerId=e.providerId||"",(0,r.isEmpty)(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[t,e]of Object.entries(a||{}))c[t]=e}if(e instanceof Tt){const t=e.getScopes().filter((t=>""!==t));t.length>0&&(c.scopes=t.join(","))}t.tenantId&&(c.tid=t.tenantId);const u=c;for(const t of Object.keys(u))void 0===u[t]&&delete u[t];return`${function({config:t}){return t.emulator?k(t,He):`https://${t.authDomain}/__/auth/handler`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}?${(0,r.querystring)(u).slice(1)}`}const We="webStorageSupport";const Qe=class{async _openPopup(t,e,n,r){var i;w(null===(i=this.eventManagers[t._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");return Ge(t,ze(t,e,n,T(),r),Qt())}async _openRedirect(t,e,n,r){var i;return await this._originValidation(t),i=ze(t,e,n,T(),r),Jt().location.href=i,new Promise((()=>{}))}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:t,promise:n}=this.eventManagers[e];return t?Promise.resolve(t):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(t);return this.eventManagers[e]={promise:n},n.catch((()=>{delete this.eventManagers[e]})),n}async initAndGetManager(t){const e=await async function(t){const e=await Fe(t),n=Jt().gapi;return _(n,t,"internal-error"),e.open({where:document.body,url:qe(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Be,dontclear:!0},(e=>new Promise((async(n,r)=>{await e.restyle({setHideOnLeave:!1});const i=m(t,"network-request-failed"),s=Jt().setTimeout((()=>{r(i)}),Ve.get());function o(){Jt().clearTimeout(s),n(e)}e.ping(o).then(o,(()=>{r(i)}))}))))}(t),n=new ke(t);return e.register("authEvent",(e=>{_(null==e?void 0:e.authEvent,t,"invalid-auth-event");return{status:n.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:n},this.iframes[t._key()]=e,n}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(We,{type:We},(n=>{var r;const i=null===(r=null==n?void 0:n[0])||void 0===r?void 0:r.webStorageSupport;void 0!==i&&e(!!i),g(t,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Le(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return ct()||et()||at()}constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=zt,this._completeRedirectFn=Ne,this._overrideRedirectResult=Te}};var Ye,Je="@firebase/auth",Xe="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze{getUid(){var t;return this.assertAuthConfigured(),(null===(t=this.auth.currentUser)||void 0===t?void 0:t.uid)||null}async getToken(t){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;return{accessToken:await this.auth.currentUser.getIdToken(t)}}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged((e=>{var n;t((null===(n=e)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){_(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}constructor(t){this.auth=t,this.internalListeners=new Map}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function tn(t=(0,i.getApp)()){const e=(0,i._getProvider)(t,"auth");return e.isInitialized()?e.getImmediate():function(t,e){const n=(0,i._getProvider)(t,"auth");if(n.isInitialized()){const t=n.getImmediate(),i=n.getOptions();if((0,r.deepEqual)(i,null!=e?e:{}))return t;g(t,"already-initialized")}return n.initialize({options:e})}(t,{popupRedirectResolver:Qe,persistence:[ce,Gt,zt]})}Ye="Browser",(0,i._registerComponent)(new(0,c.Component)("auth",((t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:i,authDomain:s}=n.options;return((t,n)=>{_(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),_(!(null==s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:Ye,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:ut(Ye)},o=new ht(t,n,r);return function(t,e){const n=(null==e?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(I);(null==e?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,null==e?void 0:e.popupRedirectResolver)}(o,e),o})(n,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((t,e,n)=>{t.getProvider("auth-internal").initialize()}))),(0,i._registerComponent)(new(0,c.Component)("auth-internal",(t=>{const e=dt(t.getProvider("auth").getImmediate());return new Ze(e)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.registerVersion)(Je,Xe,function(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Ye)),(0,i.registerVersion)(Je,Xe,"esm2017")})),s.register("l73V3",(function(e,n){t(e.exports,"__rest",(function(){return r}));function r(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]])}return n}Object.create;Object.create})),s.register("c4uPe",(function(e,n){t(e.exports,"writeTestCollectionFunction",(function(){return c})),s("83ZX7");var r=s("3PjDZ"),i=s("f0W3V");const o=(0,r.getFirestore)(i.firebaseApp),a=(0,r.doc)(o,"watched/watched");async function c(){try{const t=JSON.parse(localStorage.getItem("themovie-watched-EN-lib")),e=JSON.parse(localStorage.getItem("themovie-watched-UA-lib")),n=JSON.parse(localStorage.getItem("themovie-queue-EN-lib")),i={watchedEN:t,watchedUA:e,queueEN:n,queueUA:JSON.parse(localStorage.getItem("themovie-queue-UA-lib"))};(0,r.setDoc)(a,i)}catch(t){console.error("Error adding document: ",t)}}!async function(){(0,r.onSnapshot)(a,(t=>{if(t.exists()){return t.data().watchedEN}}))}(),async function(){(0,r.onSnapshot)(a,(t=>{if(t.exists()){return t.data().watchedUA}}))}(),async function(){(0,r.onSnapshot)(a,(t=>{if(t.exists()){return t.data().queueEN}}))}(),async function(){(0,r.onSnapshot)(a,(t=>{if(t.exists()){return t.data().queueUA}}))}()})),s.register("83ZX7",(function(e,n){t(e.exports,"getFirestore",(function(){return s("3PjDZ").getFirestore})),t(e.exports,"doc",(function(){return s("3PjDZ").doc})),t(e.exports,"setDoc",(function(){return s("3PjDZ").setDoc})),t(e.exports,"onSnapshot",(function(){return s("3PjDZ").onSnapshot})),s("3PjDZ")})),s.register("3PjDZ",(function(e,n){t(e.exports,"doc",(function(){return Ps})),t(e.exports,"getFirestore",(function(){return Vs})),t(e.exports,"setDoc",(function(){return wo})),t(e.exports,"onSnapshot",(function(){return bo}));var r=s("ix4Jr"),i=s("4a6xH"),o=s("7vF8m"),a=s("ffjl9"),c=s("lW9Fu");s("4TNnu");const u="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class l{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}constructor(t){this.uid=t}}l.UNAUTHENTICATED=new l(null),l.GOOGLE_CREDENTIALS=new l("google-credentials-uid"),l.FIRST_PARTY=new l("first-party-uid"),l.MOCK_USER=new l("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let h="9.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d=new(0,o.Logger)("@firebase/firestore");function f(){return d.logLevel}function p(t,...e){if(d.logLevel<=o.LogLevel.DEBUG){const n=e.map(y);d.debug(`Firestore (${h}): ${t}`,...n)}}function g(t,...e){if(d.logLevel<=o.LogLevel.ERROR){const n=e.map(y);d.error(`Firestore (${h}): ${t}`,...n)}}function m(t,...e){if(d.logLevel<=o.LogLevel.WARN){const n=e.map(y);d.warn(`Firestore (${h}): ${t}`,...n)}}function y(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(t="Unexpected state"){const e=`FIRESTORE (${h}) INTERNAL ASSERTION FAILED: `+t;throw g(e),new Error(e)}function _(t,e){t||v()}function E(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class b extends a.FirebaseError{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class S{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(l.UNAUTHENTICATED)))}shutdown(){}}class A{start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new I;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new I,t.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const e=i;t.enqueueRetryable((async()=>{await e.promise,await r(this.currentUser)}))},o=t=>{p("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((t=>o(t))),setTimeout((()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(p("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new I)}}),0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((e=>this.i!==t?(p("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(_("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return _(null===t||"string"==typeof t),new l(t)}constructor(t){this.t=t,this.currentUser=l.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class N{constructor(t,e,n){this.type="FirstParty",this.user=l.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",e);const r=t.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class k{getToken(){return Promise.resolve(new N(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable((()=>e(l.FIRST_PARTY)))}shutdown(){}invalidateToken(){}constructor(t,e,n){this.h=t,this.l=e,this.m=n}}class C{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class R{start(t,e){const n=t=>{null!=t.error&&p("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${t.error.message}`);const n=t.token!==this.p;return this.p=t.token,p("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?e(t.token):Promise.resolve()};this.o=e=>{t.enqueueRetryable((()=>n(e)))};const r=t=>{p("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=t,this.appCheck.addTokenListener(this.o)};this.g.onInit((t=>r(t))),setTimeout((()=>{if(!this.appCheck){const t=this.g.getImmediate({optional:!0});t?r(t):p("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((t=>t?(_("string"==typeof t.token),this.p=t.token,new C(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(t){this.g=t,this.forceRefresh=!1,this.appCheck=null,this.p=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function D(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=D(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function L(t,e){return t<e?-1:t>e?1:0}function x(t,e,n){return t.length===e.length&&t.every(((t,r)=>n(t,e[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class P{static now(){return P.fromMillis(Date.now())}static fromDate(t){return P.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new P(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?L(this.nanoseconds,t.nanoseconds):L(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new b(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new b(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new b(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new b(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{static fromTimestamp(t){return new U(t)}static min(){return new U(new P(0,0))}static max(){return new U(new P(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(t){this.timestamp=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach((t=>{e.push(t)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}constructor(t,e,n){void 0===e?e=0:e>t.length&&v(),void 0===n?n=t.length-e:n>t.length-e&&v(),this.segments=t,this.offset=e,this.len=n}}class F extends M{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new b(w.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((t=>t.length>0)))}return new F(e)}static emptyPath(){return new F([])}}const V=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class B extends M{construct(t,e,n){return new B(t,e,n)}static isValidIdentifier(t){return V.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),B.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new B(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new b(w.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new b(w.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new b(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new b(w.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new B(e)}static emptyPath(){return new B([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{static fromPath(t){return new j(F.fromString(t))}static fromName(t){return new j(F.fromString(t).popFirst(5))}static empty(){return new j(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new j(new F(t.slice()))}constructor(t){this.path=t}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e,n,r){this.indexId=t,this.collectionGroup=e,this.fields=n,this.indexState=r}}q.UNKNOWN_ID=-1;function $(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=U.fromTimestamp(1e9===r?new P(n+1,0):new P(n,r));return new G(i,j.empty(),e)}function K(t){return new G(t.readTime,t.key,-1)}class G{static min(){return new G(U.min(),j.empty(),-1)}static max(){return new G(U.max(),j.empty(),-1)}constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}}function H(t,e){let n=t.readTime.compareTo(e.readTime);return 0!==n?n:(n=j.comparator(t.documentKey,e.documentKey),0!==n?n:L(t.largestBatchId,e.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class W{addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}constructor(){this.onCommittedListeners=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(t){if(t.code!==w.FAILED_PRECONDITION||t.message!==z)throw t;p("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y{catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&v(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Y(((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof Y?e:Y.resolve(e)}catch(t){return Y.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):Y.reject(e)}static resolve(t){return new Y(((e,n)=>{e(t)}))}static reject(t){return new Y(((e,n)=>{n(t)}))}static waitFor(t){return new Y(((e,n)=>{let r=0,i=0,s=!1;t.forEach((t=>{++r,t.next((()=>{++i,s&&i===r&&e()}),(t=>n(t)))})),s=!0,i===r&&e()}))}static or(t){let e=Y.resolve(!1);for(const n of t)e=e.next((t=>t?Y.resolve(t):n()));return e}static forEach(t,e){const n=[];return t.forEach(((t,r)=>{n.push(e.call(this,t,r))})),this.waitFor(n)}static mapArray(t,e){return new Y(((n,r)=>{const i=t.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const c=a;e(t[c]).next((t=>{s[c]=t,++o,o===i&&n(s)}),(t=>r(t)))}}))}static doWhile(t,e){return new Y(((n,r)=>{const i=()=>{!0===t()?e().next((()=>{i()}),r):n()};i()}))}constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{it(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.rt&&this.rt(t),t}constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.it(t),this.rt=t=>e.writeSequenceNumber(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function tt(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function et(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */X.ot=-1;class nt{insert(t,e){return new nt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,it.BLACK,null,null))}remove(t){return new nt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,it.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new rt(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new rt(this.root,t,this.comparator,!1)}getReverseIterator(){return new rt(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new rt(this.root,t,this.comparator,!0)}constructor(t,e){this.comparator=t,this.root=e||it.EMPTY}}class rt{getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,e&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}}class it{copy(t,e,n,r,i){return new it(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return it.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return it.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,it.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,it.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw v();if(this.right.isRed())throw v();const t=this.left.check();if(t!==this.right.check())throw v();return t+(this.isRed()?0:1)}constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:it.RED,this.left=null!=r?r:it.EMPTY,this.right=null!=i?i:it.EMPTY,this.size=this.left.size+1+this.right.size}}it.EMPTY=null,it.RED=!0,it.BLACK=!1,it.EMPTY=new class{get key(){throw v()}get value(){throw v()}get color(){throw v()}get left(){throw v()}get right(){throw v()}copy(t,e,n,r,i){return this}insert(t,e,n){return new it(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class st{has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new ot(this.data.getIterator())}getIteratorFrom(t){return new ot(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((t=>{e=e.add(t)})),e}isEqual(t){if(!(t instanceof st))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}constructor(t){this.comparator=t,this.data=new nt(this.comparator)}}class ot{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(t){this.iter=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class at{static empty(){return new at([])}unionWith(t){let e=new st(B.comparator);for(const t of this.fields)e=e.add(t);for(const n of t)e=e.add(n);return new at(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return x(this.fields,t.fields,((t,e)=>t.isEqual(e)))}constructor(t){this.fields=t,t.sort(B.comparator)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=Symbol.iterator;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{static fromBase64String(t){const e=atob(t);return new ut(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new ut(e)}[ct](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){var t;return t=this.binaryString,btoa(t)}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return L(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}constructor(t){this.binaryString=t}}ut.EMPTY_BYTE_STRING=new ut("");const lt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ht(t){if(_(!!t),"string"==typeof t){let e=0;const n=lt.exec(t);if(_(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:dt(t.seconds),nanos:dt(t.nanos)}}function dt(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ft(t){return"string"==typeof t?ut.fromBase64String(t):ut.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pt(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function gt(t){const e=t.mapValue.fields.__previous_value__;return pt(e)?gt(e):e}function mt(t){const e=ht(t.mapValue.fields.__local_write_time__.timestampValue);return new P(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class vt{static empty(){return new vt("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof vt&&t.projectId===this.projectId&&t.database===this.database}constructor(t,e){this.projectId=t,this.database=e||"(default)"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(t){return null==t}function Et(t){return 0===t&&1/t==-1/0}function wt(t){return"number"==typeof t&&Number.isInteger(t)&&!Et(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bt={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function It(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?pt(t)?4:Ut(t)?9007199254740991:10:v()}function Tt(t,e){if(t===e)return!0;const n=It(t);if(n!==It(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return mt(t).isEqual(mt(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=ht(t.timestampValue),r=ht(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return r=e,ft(t.bytesValue).isEqual(ft(r.bytesValue));case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return dt(t.geoPointValue.latitude)===dt(e.geoPointValue.latitude)&&dt(t.geoPointValue.longitude)===dt(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return dt(t.integerValue)===dt(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=dt(t.doubleValue),r=dt(e.doubleValue);return n===r?Et(n)===Et(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return x(t.arrayValue.values||[],e.arrayValue.values||[],Tt);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(Z(n)!==Z(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Tt(n[t],r[t])))return!1;return!0}(t,e);default:return v()}var r}function St(t,e){return void 0!==(t.values||[]).find((t=>Tt(t,e)))}function At(t,e){if(t===e)return 0;const n=It(t),r=It(e);if(n!==r)return L(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return L(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=dt(t.integerValue||t.doubleValue),r=dt(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return Nt(t.timestampValue,e.timestampValue);case 4:return Nt(mt(t),mt(e));case 5:return L(t.stringValue,e.stringValue);case 6:return function(t,e){const n=ft(t),r=ft(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=L(n[t],r[t]);if(0!==e)return e}return L(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=L(dt(t.latitude),dt(e.latitude));return 0!==n?n:L(dt(t.longitude),dt(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=At(n[t],r[t]);if(e)return e}return L(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){if(t===bt.mapValue&&e===bt.mapValue)return 0;if(t===bt.mapValue)return 1;if(e===bt.mapValue)return-1;const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=L(r[t],s[t]);if(0!==e)return e;const o=At(n[r[t]],i[s[t]]);if(0!==o)return o}return L(r.length,s.length)}(t.mapValue,e.mapValue);default:throw v()}}function Nt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return L(t,e);const n=ht(t),r=ht(e),i=L(n.seconds,r.seconds);return 0!==i?i:L(n.nanos,r.nanos)}function kt(t){return Ct(t)}function Ct(t){var e,n;return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(t){const e=ht(t);return`time(${e.seconds},${e.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ft(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(t){let e="[",n=!0;for(const r of t.values||[])n?n=!1:e+=",",e+=Ct(r);return e+"]"}(t.arrayValue):"mapValue"in t?function(t){const e=Object.keys(t.fields||{}).sort();let n="{",r=!0;for(const i of e)r?r=!1:n+=",",n+=`${i}:${Ct(t.fields[i])}`;return n+"}"}(t.mapValue):v()}function Rt(t){return!!t&&"integerValue"in t}function Dt(t){return!!t&&"arrayValue"in t}function Ot(t){return!!t&&"nullValue"in t}function Lt(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function xt(t){return!!t&&"mapValue"in t}function Pt(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return tt(t.mapValue.fields,((t,n)=>e.mapValue.fields[t]=Pt(n))),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Pt(t.arrayValue.values[n]);return e}return Object.assign({},t)}function Ut(t){return"__max__"===(((t.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mt{static empty(){return new Mt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!xt(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=Pt(e)}setAll(t){let e=B.emptyPath(),n={},r=[];t.forEach(((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=Pt(t):r.push(i.lastSegment())}));const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());xt(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Tt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];xt(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){tt(e,((e,n)=>t[e]=n));for(const e of n)delete t[e]}clone(){return new Mt(Pt(this.value))}constructor(t){this.value=t}}function Ft(t){const e=[];return tt(t.fields,((t,n)=>{const r=new B([t]);if(xt(n)){const t=Ft(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)})),new at(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vt{static newInvalidDocument(t){return new Vt(t,0,U.min(),U.min(),Mt.empty(),0)}static newFoundDocument(t,e,n){return new Vt(t,1,e,U.min(),n,0)}static newNoDocument(t,e){return new Vt(t,2,e,U.min(),Mt.empty(),0)}static newUnknownDocument(t,e){return new Vt(t,3,e,U.min(),Mt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Mt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=U.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof Vt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Vt(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}constructor(t,e,n,r,i,s){this.key=t,this.documentType=e,this.version=n,this.readTime=r,this.data=i,this.documentState=s}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function jt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new Bt(t,e,n,r,i,s,o)}function qt(t){const e=E(t);if(null===e.ut){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((t=>{var e;return(e=t).field.canonicalString()+e.op.toString()+kt(e.value)})).join(","),t+="|ob:",t+=e.orderBy.map((t=>{return(e=t).field.canonicalString()+e.dir;var e})).join(","),_t(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((t=>kt(t))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((t=>kt(t))).join(",")),e.ut=t}return e.ut}function $t(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!ne(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Tt(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!ie(t.startAt,e.startAt)&&ie(t.endAt,e.endAt)}function Kt(t){return j.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class Gt extends class{}{static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.ct(t,e,n):new Ht(t,e,n):"array-contains"===e?new Yt(t,n):"in"===e?new Jt(t,n):"not-in"===e?new Xt(t,n):"array-contains-any"===e?new Zt(t,n):new Gt(t,e,n)}static ct(t,e,n){return"in"===e?new zt(t,n):new Wt(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.at(At(e,this.value)):null!==e&&It(this.value)===It(e)&&this.at(At(e,this.value))}at(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return v()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}}class Ht extends Gt{matches(t){const e=j.comparator(t.key,this.key);return this.at(e)}constructor(t,e,n){super(t,e,n),this.key=j.fromName(n.referenceValue)}}class zt extends Gt{matches(t){return this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"in",e),this.keys=Qt("in",e)}}class Wt extends Gt{matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}constructor(t,e){super(t,"not-in",e),this.keys=Qt("not-in",e)}}function Qt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((t=>j.fromName(t.referenceValue)))}class Yt extends Gt{matches(t){const e=t.data.field(this.field);return Dt(e)&&St(e.arrayValue,this.value)}constructor(t,e){super(t,"array-contains",e)}}class Jt extends Gt{matches(t){const e=t.data.field(this.field);return null!==e&&St(this.value.arrayValue,e)}constructor(t,e){super(t,"in",e)}}class Xt extends Gt{matches(t){if(St(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!St(this.value.arrayValue,e)}constructor(t,e){super(t,"not-in",e)}}class Zt extends Gt{matches(t){const e=t.data.field(this.field);return!(!Dt(e)||!e.arrayValue.values)&&e.arrayValue.values.some((t=>St(this.value.arrayValue,t)))}constructor(t,e){super(t,"array-contains-any",e)}}class te{constructor(t,e){this.position=t,this.inclusive=e}}class ee{constructor(t,e="asc"){this.field=t,this.dir=e}}function ne(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function re(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?j.comparator(j.fromName(o.referenceValue),n.key):At(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function ie(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Tt(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class se{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function oe(t,e,n,r,i,s,o,a){return new se(t,e,n,r,i,s,o,a)}function ae(t){return new se(t)}function ce(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ue(t){for(const e of t.filters)if(e.ht())return e.field;return null}function le(t){return null!==t.collectionGroup}function he(t){const e=E(t);if(null===e.lt){e.lt=[];const t=ue(e),n=ce(e);if(null!==t&&null===n)t.isKeyField()||e.lt.push(new ee(t)),e.lt.push(new ee(B.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.lt.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.lt.push(new ee(B.keyField(),t))}}}return e.lt}function de(t){const e=E(t);if(!e.ft)if("F"===e.limitType)e.ft=jt(e.path,e.collectionGroup,he(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of he(e)){const e="desc"===n.dir?"asc":"desc";t.push(new ee(n.field,e))}const n=e.endAt?new te(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new te(e.startAt.position,e.startAt.inclusive):null;e.ft=jt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.ft}function fe(t,e,n){return new se(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function pe(t,e){return $t(de(t),de(e))&&t.limitType===e.limitType}function ge(t){return`${qt(de(t))}|lt:${t.limitType}`}function me(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map((t=>{var e;return`${(e=t).field.canonicalString()} ${e.op} ${kt(e.value)}`})).join(", ")}]`),_t(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map((t=>{return`${(e=t).field.canonicalString()} (${e.dir})`;var e})).join(", ")}]`),t.startAt&&(e+=", startAt: ",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((t=>kt(t))).join(",")),t.endAt&&(e+=", endAt: ",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((t=>kt(t))).join(",")),`Target(${e})`}(de(t))}; limitType=${t.limitType})`}function ye(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):j.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&(r=e,!((n=t).startAt&&!function(t,e,n){const r=re(t,e,n);return t.inclusive?r<=0:r<0}(n.startAt,he(n),r)||n.endAt&&!function(t,e,n){const r=re(t,e,n);return t.inclusive?r>=0:r>0}(n.endAt,he(n),r)));var n,r}function ve(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function _e(t){return(e,n)=>{let r=!1;for(const i of he(t)){const t=Ee(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Ee(t,e,n){const r=t.field.isKeyField()?j.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?At(r,i):v()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function we(t,e){if(t.dt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Et(e)?"-0":e}}function be(t){return{integerValue:""+t}}function Ie(t,e){return wt(e)?be(e):we(t,e)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(){this._=void 0}}function Se(t,e,n){return t instanceof ke?Ce(t,e):t instanceof Re?De(t,e):n}function Ae(t,e){var n,r;return t instanceof Oe?Rt(n=e)||(r=n)&&"doubleValue"in r?e:{integerValue:0}:null}class Ne extends Te{}class ke extends Te{constructor(t){super(),this.elements=t}}function Ce(t,e){const n=xe(e);for(const e of t.elements)n.some((t=>Tt(t,e)))||n.push(e);return{arrayValue:{values:n}}}class Re extends Te{constructor(t){super(),this.elements=t}}function De(t,e){let n=xe(e);for(const e of t.elements)n=n.filter((t=>!Tt(t,e)));return{arrayValue:{values:n}}}class Oe extends Te{constructor(t,e){super(),this.wt=t,this._t=e}}function Le(t){return dt(t.integerValue||t.doubleValue)}function xe(t){return Dt(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t,e){this.version=t,this.transformResults=e}}class Ue{static none(){return new Ue}static exists(t){return new Ue(void 0,t)}static updateTime(t){return new Ue(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}constructor(t,e){this.updateTime=t,this.exists=e}}function Me(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class Fe{}function Ve(t,e){if(!t.hasLocalMutations||e&&0===e.fields.length)return null;if(null===e)return t.isNoDocument()?new Qe(t.key,Ue.none()):new Ke(t.key,t.data,Ue.none());{const n=t.data,r=Mt.empty();let i=new st(B.comparator);for(let t of e.fields)if(!i.has(t)){let e=n.field(t);null===e&&t.length>1&&(t=t.popLast(),e=n.field(t)),null===e?r.delete(t):r.set(t,e),i=i.add(t)}return new Ge(t.key,r,new at(i.toArray()),Ue.none())}}function Be(t,e,n){var r;t instanceof Ke?function(t,e,n){const r=t.value.clone(),i=ze(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof Ge?function(t,e,n){if(!Me(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=ze(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(He(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):(r=n,e.convertToNoDocument(r.version).setHasCommittedMutations())}function je(t,e,n,r){return t instanceof Ke?function(t,e,n,r){if(!Me(t.precondition,e))return n;const i=t.value.clone(),s=We(t.fieldTransforms,r,e);return i.setAll(s),e.convertToFoundDocument(e.version,i).setHasLocalMutations(),null}(t,e,n,r):t instanceof Ge?function(t,e,n,r){if(!Me(t.precondition,e))return n;const i=We(t.fieldTransforms,r,e),s=e.data;return s.setAll(He(t)),s.setAll(i),e.convertToFoundDocument(e.version,s).setHasLocalMutations(),null===n?null:n.unionWith(t.fieldMask.fields).unionWith(t.fieldTransforms.map((t=>t.field)))}(t,e,n,r):(i=e,s=n,Me(t.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):s);var i,s}function qe(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=Ae(r.transform,t||null);null!=i&&(null===n&&(n=Mt.empty()),n.set(r.field,i))}return n||null}function $e(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&(n=t.fieldTransforms,r=e.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&x(n,r,((t,e)=>function(t,e){return t.field.isEqual(e.field)&&(n=t.transform,r=e.transform,n instanceof ke&&r instanceof ke||n instanceof Re&&r instanceof Re?x(n.elements,r.elements,Tt):n instanceof Oe&&r instanceof Oe?Tt(n._t,r._t):n instanceof Ne&&r instanceof Ne);var n,r}(t,e)))))&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask));var n,r}class Ke extends Fe{getFieldMask(){return null}constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Ge extends Fe{getFieldMask(){return this.fieldMask}constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function He(t){const e=new Map;return t.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}})),e}function ze(t,e,n){const r=new Map;_(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,Se(o,a,n[i]))}return r}function We(t,e,n){const r=new Map;for(const a of t){const t=a.transform,c=n.data.field(a.field);r.set(a.field,(s=c,o=e,(i=t)instanceof Ne?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(o,s):i instanceof ke?Ce(i,s):i instanceof Re?De(i,s):function(t,e){const n=Ae(t,e),r=Le(n)+Le(t._t);return Rt(n)&&Rt(t._t)?be(r):we(t.wt,r)}(i,s)))}var i,s,o;return r}class Qe extends Fe{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ye extends Fe{getFieldMask(){return null}constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe,Ze;function tn(t){switch(t){default:return v();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function en(t){if(void 0===t)return g("GRPC error has no .code"),w.UNKNOWN;switch(t){case Xe.OK:return w.OK;case Xe.CANCELLED:return w.CANCELLED;case Xe.UNKNOWN:return w.UNKNOWN;case Xe.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case Xe.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case Xe.INTERNAL:return w.INTERNAL;case Xe.UNAVAILABLE:return w.UNAVAILABLE;case Xe.UNAUTHENTICATED:return w.UNAUTHENTICATED;case Xe.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case Xe.NOT_FOUND:return w.NOT_FOUND;case Xe.ALREADY_EXISTS:return w.ALREADY_EXISTS;case Xe.PERMISSION_DENIED:return w.PERMISSION_DENIED;case Xe.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case Xe.ABORTED:return w.ABORTED;case Xe.OUT_OF_RANGE:return w.OUT_OF_RANGE;case Xe.UNIMPLEMENTED:return w.UNIMPLEMENTED;case Xe.DATA_LOSS:return w.DATA_LOSS;default:return v()}}(Ze=Xe||(Xe={}))[Ze.OK=0]="OK",Ze[Ze.CANCELLED=1]="CANCELLED",Ze[Ze.UNKNOWN=2]="UNKNOWN",Ze[Ze.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ze[Ze.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ze[Ze.NOT_FOUND=5]="NOT_FOUND",Ze[Ze.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ze[Ze.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ze[Ze.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ze[Ze.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ze[Ze.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ze[Ze.ABORTED=10]="ABORTED",Ze[Ze.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ze[Ze.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ze[Ze.INTERNAL=13]="INTERNAL",Ze[Ze.UNAVAILABLE=14]="UNAVAILABLE",Ze[Ze.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class nn{get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0===r)return this.inner[n]=[[t,e]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(t){tt(this.inner,((e,n)=>{for(const[e,r]of n)t(e,r)}))}isEmpty(){return et(this.inner)}size(){return this.innerSize}constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new nt(j.comparator);function sn(){return rn}const on=new nt(j.comparator);function an(...t){let e=on;for(const n of t)e=e.insert(n.key,n);return e}function cn(t){let e=on;return t.forEach(((t,n)=>e=e.insert(t,n.overlayedDocument))),e}function un(){return hn()}function ln(){return hn()}function hn(){return new nn((t=>t.toString()),((t,e)=>t.isEqual(e)))}const dn=new nt(j.comparator),fn=new st(j.comparator);function pn(...t){let e=fn;for(const n of t)e=e.add(n);return e}const gn=new st(L);function mn(){return gn}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,vn.createSynthesizedTargetChangeForCurrentChange(t,e)),new yn(U.min(),n,mn(),sn(),pn())}constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class vn{static createSynthesizedTargetChangeForCurrentChange(t,e){return new vn(ut.EMPTY_BYTE_STRING,e,pn(),pn(),pn())}constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(t,e,n,r){this.gt=t,this.removedTargetIds=e,this.key=n,this.yt=r}}class En{constructor(t,e){this.targetId=t,this.It=e}}class wn{constructor(t,e,n=ut.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class bn{get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(t){t.approximateByteSize()>0&&(this.bt=!0,this.At=t)}St(){let t=pn(),e=pn(),n=pn();return this.Et.forEach(((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:v()}})),new vn(this.At,this.Rt,t,e,n)}Dt(){this.bt=!1,this.Et=Sn()}Ct(t,e){this.bt=!0,this.Et=this.Et.insert(t,e)}xt(t){this.bt=!0,this.Et=this.Et.remove(t)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}constructor(){this.Tt=0,this.Et=Sn(),this.At=ut.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}}class In{Ut(t){for(const e of t.gt)t.yt&&t.yt.isFoundDocument()?this.qt(e,t.yt):this.Kt(e,t.key,t.yt);for(const e of t.removedTargetIds)this.Kt(e,t.key,t.yt)}Gt(t){this.forEachTarget(t,(e=>{const n=this.Qt(e);switch(t.state){case 0:this.jt(e)&&n.Vt(t.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(t.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(e);break;case 3:this.jt(e)&&(n.Ot(),n.Vt(t.resumeToken));break;case 4:this.jt(e)&&(this.Wt(e),n.Vt(t.resumeToken));break;default:v()}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ft.forEach(((t,n)=>{this.jt(n)&&e(n)}))}zt(t){const e=t.targetId,n=t.It.count,r=this.Ht(e);if(r){const t=r.target;if(Kt(t))if(0===n){const n=new j(t.path);this.Kt(e,n,Vt.newNoDocument(n,U.min()))}else _(1===n);else this.Jt(e)!==n&&(this.Wt(e),this.Lt=this.Lt.add(e))}}Yt(t){const e=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&Kt(i.target)){const e=new j(i.target.path);null!==this.$t.get(e)||this.Xt(r,e)||this.Kt(r,e,Vt.newNoDocument(e,t))}n.vt&&(e.set(r,n.St()),n.Dt())}}));let n=pn();this.Bt.forEach(((t,e)=>{let r=!0;e.forEachWhile((t=>{const e=this.Ht(t);return!e||2===e.purpose||(r=!1,!1)})),r&&(n=n.add(t))})),this.$t.forEach(((e,n)=>n.setReadTime(t)));const r=new yn(t,e,this.Lt,this.$t,n);return this.$t=sn(),this.Bt=Tn(),this.Lt=new st(L),r}qt(t,e){if(!this.jt(t))return;const n=this.Xt(t,e.key)?2:0;this.Qt(t).Ct(e.key,n),this.$t=this.$t.insert(e.key,e),this.Bt=this.Bt.insert(e.key,this.Zt(e.key).add(t))}Kt(t,e,n){if(!this.jt(t))return;const r=this.Qt(t);this.Xt(t,e)?r.Ct(e,1):r.xt(e),this.Bt=this.Bt.insert(e,this.Zt(e).delete(t)),n&&(this.$t=this.$t.insert(e,n))}removeTarget(t){this.Ft.delete(t)}Jt(t){const e=this.Qt(t).St();return this.Mt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Nt(t){this.Qt(t).Nt()}Qt(t){let e=this.Ft.get(t);return e||(e=new bn,this.Ft.set(t,e)),e}Zt(t){let e=this.Bt.get(t);return e||(e=new st(L),this.Bt=this.Bt.insert(t,e)),e}jt(t){const e=null!==this.Ht(t);return e||p("WatchChangeAggregator","Detected inactive target",t),e}Ht(t){const e=this.Ft.get(t);return e&&e.Pt?null:this.Mt.te(t)}Wt(t){this.Ft.set(t,new bn),this.Mt.getRemoteKeysForTarget(t).forEach((e=>{this.Kt(t,e,null)}))}Xt(t,e){return this.Mt.getRemoteKeysForTarget(t).has(e)}constructor(t){this.Mt=t,this.Ft=new Map,this.$t=sn(),this.Bt=Tn(),this.Lt=new st(L)}}function Tn(){return new nt(j.comparator)}function Sn(){return new nt(j.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An={asc:"ASCENDING",desc:"DESCENDING"},Nn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class kn{constructor(t,e){this.databaseId=t,this.dt=e}}function Cn(t,e){return t.dt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Rn(t,e){return t.dt?e.toBase64():e.toUint8Array()}function Dn(t,e){return Cn(t,e.toTimestamp())}function On(t){return _(!!t),U.fromTimestamp(function(t){const e=ht(t);return new P(e.seconds,e.nanos)}(t))}function Ln(t,e){return(n=t,new F(["projects",n.projectId,"databases",n.database])).child("documents").child(e).canonicalString();var n}function xn(t){const e=F.fromString(t);return _(Zn(e)),e}function Pn(t,e){return Ln(t.databaseId,e.path)}function Un(t,e){const n=xn(e);if(n.get(1)!==t.databaseId.projectId)throw new b(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new b(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(Bn(n))}function Mn(t,e){return Ln(t.databaseId,e)}function Fn(t){const e=xn(t);return 4===e.length?F.emptyPath():Bn(e)}function Vn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Bn(t){return _(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function jn(t,e,n){return{name:Pn(t,e),fields:n.value.mapValue.fields}}function qn(t,e){let n;if(e instanceof Ke)n={update:jn(t,e.key,e.value)};else if(e instanceof Qe)n={delete:Pn(t,e.key)};else if(e instanceof Ge)n={update:jn(t,e.key,e.data),updateMask:Xn(e.fieldMask)};else{if(!(e instanceof Ye))return v();n={verify:Pn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map((t=>function(t,e){const n=e.transform;if(n instanceof Ne)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ke)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Re)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Oe)return{fieldPath:e.field.canonicalString(),increment:n._t};throw v()}(0,t)))),e.precondition.isNone||(n.currentDocument=(r=t,void 0!==(i=e.precondition).updateTime?{updateTime:Dn(r,i.updateTime)}:void 0!==i.exists?{exists:i.exists}:v())),n;var r,i}function $n(t,e){return{documents:[Mn(t,e.path)]}}function Kn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=Mn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Mn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map((t=>function(t){if("=="===t.op){if(Lt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(Lt(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NAN"}};if(Ot(t.value))return{unaryFilter:{field:Qn(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Qn(t.field),op:Wn(t.op),value:t.value}}}(t)));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map((t=>{return{field:Qn((e=t).field),direction:zn(e.dir)};var e}))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=(a=t,c=e.limit,a.dt||_t(c)?c:{value:c});var a,c,u;return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(u=e.startAt).inclusive,values:u.position}),e.endAt&&(n.structuredQuery.endAt=function(t){return{before:!t.inclusive,values:t.position}}(e.endAt)),n}function Gn(t){let e=Fn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){_(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=Hn(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((t=>{return new ee(Yn((e=t).field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction));var e})));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,_t(e)?null:e}(n.limit));let c=null;n.startAt&&(c=function(t){const e=!!t.before,n=t.values||[];return new te(n,e)}(n.startAt));let u=null;return n.endAt&&(u=function(t){const e=!t.before,n=t.values||[];return new te(n,e)}(n.endAt)),oe(e,i,o,s,a,"F",c,u)}function Hn(t){return t?void 0!==t.unaryFilter?[Jn(t)]:void 0!==t.fieldFilter?[(e=t,Gt.create(Yn(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return v()}}(e.fieldFilter.op),e.fieldFilter.value))]:void 0!==t.compositeFilter?t.compositeFilter.filters.map((t=>Hn(t))).reduce(((t,e)=>t.concat(e))):v():[];var e}function zn(t){return An[t]}function Wn(t){return Nn[t]}function Qn(t){return{fieldPath:t.canonicalString()}}function Yn(t){return B.fromServerFormat(t.fieldPath)}function Jn(t){switch(t.unaryFilter.op){case"IS_NAN":const e=Yn(t.unaryFilter.field);return Gt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=Yn(t.unaryFilter.field);return Gt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Yn(t.unaryFilter.field);return Gt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Yn(t.unaryFilter.field);return Gt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return v()}}function Xn(t){const e=[];return t.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Zn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tr=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],er=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],nr=er;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&Be(r,t,n[e])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=je(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=je(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ln();return this.mutations.forEach((r=>{const i=t.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=e.has(r.key)?null:o;const a=Ve(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(U.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),pn())}isEqual(t){return this.batchId===t.batchId&&x(this.mutations,t.mutations,((t,e)=>$e(t,e)))&&x(this.baseMutations,t.baseMutations,((t,e)=>$e(t,e)))}constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}}class ir{static from(t,e,n){_(t.mutations.length===n.length);let r=dn;const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new ir(t,e,n,r)}constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{getKey(){return this.mutation.key}isEqual(t){return null!==t&&this.mutation===t.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}constructor(t,e){this.largestBatchId=t,this.mutation=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{withSequenceNumber(t){return new or(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new or(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}constructor(t,e,n,r,i=U.min(),s=U.min(),o=ut.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(t){this.ne=t}}function cr(t){const e=Gn({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?fe(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{re(t,e){this.oe(t,e),e.ue()}oe(t,e){if("nullValue"in t)this.ce(e,5);else if("booleanValue"in t)this.ce(e,10),e.ae(t.booleanValue?1:0);else if("integerValue"in t)this.ce(e,15),e.ae(dt(t.integerValue));else if("doubleValue"in t){const n=dt(t.doubleValue);isNaN(n)?this.ce(e,13):(this.ce(e,15),Et(n)?e.ae(0):e.ae(n))}else if("timestampValue"in t){const n=t.timestampValue;this.ce(e,20),"string"==typeof n?e.he(n):(e.he(`${n.seconds||""}`),e.ae(n.nanos||0))}else if("stringValue"in t)this.le(t.stringValue,e),this.fe(e);else if("bytesValue"in t)this.ce(e,30),e.de(ft(t.bytesValue)),this.fe(e);else if("referenceValue"in t)this._e(t.referenceValue,e);else if("geoPointValue"in t){const n=t.geoPointValue;this.ce(e,45),e.ae(n.latitude||0),e.ae(n.longitude||0)}else"mapValue"in t?Ut(t)?this.ce(e,Number.MAX_SAFE_INTEGER):(this.we(t.mapValue,e),this.fe(e)):"arrayValue"in t?(this.me(t.arrayValue,e),this.fe(e)):v()}le(t,e){this.ce(e,25),this.ge(t,e)}ge(t,e){e.he(t)}we(t,e){const n=t.fields||{};this.ce(e,55);for(const t of Object.keys(n))this.le(t,e),this.oe(n[t],e)}me(t,e){const n=t.values||[];this.ce(e,50);for(const t of n)this.oe(t,e)}_e(t,e){this.ce(e,37),j.fromName(t).path.forEach((t=>{this.ce(e,60),this.ge(t,e)}))}ce(t,e){t.ae(e)}fe(t){t.ae(2)}constructor(){}}ur.ye=new ur;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{addToCollectionParentIndex(t,e){return this.ze.add(e),Y.resolve()}getCollectionParents(t,e){return Y.resolve(this.ze.getEntries(e))}addFieldIndex(t,e){return Y.resolve()}deleteFieldIndex(t,e){return Y.resolve()}getDocumentsMatchingTarget(t,e){return Y.resolve(null)}getIndexType(t,e){return Y.resolve(0)}getFieldIndexes(t,e){return Y.resolve([])}getNextCollectionGroupToUpdate(t){return Y.resolve(null)}getMinOffset(t,e){return Y.resolve(G.min())}getMinOffsetFromCollectionGroup(t,e){return Y.resolve(G.min())}updateCollectionGroup(t,e,n){return Y.resolve()}updateIndexEntries(t,e){return Y.resolve()}constructor(){this.ze=new hr}}class hr{add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new st(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new st(F.comparator)).toArray()}constructor(){this.index={}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class dr{static withCacheSize(t){return new dr(t,dr.DEFAULT_COLLECTION_PERCENTILE,dr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */dr.DEFAULT_COLLECTION_PERCENTILE=10,dr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,dr.DEFAULT=new dr(41943040,dr.DEFAULT_COLLECTION_PERCENTILE,dr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),dr.DISABLED=new dr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class fr{next(){return this.En+=2,this.En}static An(){return new fr(0)}static Rn(){return new fr(-1)}constructor(t){this.En=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class pr{addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Vt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Y.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}constructor(){this.changes=new nn((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gr{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((r=>(n=r,this.getBaseDocument(t,e,n)))).next((t=>(null!==n&&je(n.mutation,t,at.empty(),P.now()),t)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.getLocalViewOfDocuments(t,e,pn()).next((()=>e))))}getLocalViewOfDocuments(t,e,n=pn()){const r=un();return this.populateOverlays(t,r,e).next((()=>this.computeViews(t,e,r,n).next((t=>{let e=an();return t.forEach(((t,n)=>{e=e.insert(t,n.overlayedDocument)})),e}))))}getOverlayedDocuments(t,e){const n=un();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,pn())))}populateOverlays(t,e,n){const r=[];return n.forEach((t=>{e.has(t)||r.push(t)})),this.documentOverlayCache.getOverlays(t,r).next((t=>{t.forEach(((t,n)=>{e.set(t,n)}))}))}computeViews(t,e,n,r){let i=sn();const s=hn(),o=hn();return e.forEach(((t,e)=>{const o=n.get(e.key);r.has(e.key)&&(void 0===o||o.mutation instanceof Ge)?i=i.insert(e.key,e):void 0!==o&&(s.set(e.key,o.mutation.getFieldMask()),je(o.mutation,e,o.mutation.getFieldMask(),P.now()))})),this.recalculateAndSaveOverlays(t,i).next((t=>(t.forEach(((t,e)=>s.set(t,e))),e.forEach(((t,e)=>{var n;return o.set(t,new gr(e,null!==(n=s.get(t))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(t,e){const n=hn();let r=new nt(((t,e)=>t-e)),i=pn();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((t=>{for(const i of t)i.keys().forEach((t=>{const s=e.get(t);if(null===s)return;let o=n.get(t)||at.empty();o=i.applyToLocalView(s,o),n.set(t,o);const a=(r.get(i.batchId)||pn()).add(t);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,c=r.value,u=ln();c.forEach((t=>{if(!i.has(t)){const r=Ve(e.get(t),n.get(t));null!==r&&u.set(t,r),i=i.add(t)}})),s.push(this.documentOverlayCache.saveOverlays(t,a,u))}return Y.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((e=>this.recalculateAndSaveOverlays(t,e)))}getDocumentsMatchingQuery(t,e,n){return r=e,j.isDocumentKey(r.path)&&null===r.collectionGroup&&0===r.filters.length?this.getDocumentsMatchingDocumentQuery(t,e.path):le(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n):this.getDocumentsMatchingCollectionQuery(t,e,n);var r}getNextDocuments(t,e,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,r-i.size):Y.resolve(un());let o=-1,a=i;return s.next((e=>Y.forEach(e,((e,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(e)?Y.resolve():this.getBaseDocument(t,e,n).next((t=>{a=a.insert(e,t)}))))).next((()=>this.populateOverlays(t,e,i))).next((()=>this.computeViews(t,a,e,pn()))).next((t=>({batchId:o,changes:cn(t)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new j(e)).next((t=>{let e=an();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e}))}getDocumentsMatchingCollectionGroupQuery(t,e,n){const r=e.collectionGroup;let i=an();return this.indexManager.getCollectionParents(t,r).next((s=>Y.forEach(s,(s=>{const o=(a=e,c=s.child(r),new se(c,null,a.explicitOrderBy.slice(),a.filters.slice(),a.limit,a.limitType,a.startAt,a.endAt));var a,c;return this.getDocumentsMatchingCollectionQuery(t,o,n).next((t=>{t.forEach(((t,e)=>{i=i.insert(t,e)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(t,e,n){let r;return this.remoteDocumentCache.getAllFromCollection(t,e.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId)))).next((t=>{t.forEach(((t,e)=>{const n=e.getKey();null===r.get(n)&&(r=r.insert(n,Vt.newInvalidDocument(n)))}));let n=an();return r.forEach(((r,i)=>{const s=t.get(r);void 0!==s&&je(s.mutation,i,at.empty(),P.now()),ye(e,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(t,e,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(t,e):Y.resolve(Vt.newInvalidDocument(e))}constructor(t,e,n,r){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{getBundleMetadata(t,e){return Y.resolve(this.Jn.get(e))}saveBundleMetadata(t,e){var n;return this.Jn.set(e.id,{id:(n=e).id,version:n.version,createTime:On(n.createTime)}),Y.resolve()}getNamedQuery(t,e){return Y.resolve(this.Yn.get(e))}saveNamedQuery(t,e){return this.Yn.set(e.name,{name:(n=e).name,query:cr(n.bundledQuery),readTime:On(n.readTime)}),Y.resolve();var n}constructor(t){this.wt=t,this.Jn=new Map,this.Yn=new Map}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{getOverlay(t,e){return Y.resolve(this.overlays.get(e))}getOverlays(t,e){const n=un();return Y.forEach(e,(e=>this.getOverlay(t,e).next((t=>{null!==t&&n.set(e,t)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((n,r)=>{this.ie(t,e,r)})),Y.resolve()}removeOverlaysForBatchId(t,e,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((t=>this.overlays=this.overlays.remove(t))),this.Xn.delete(n)),Y.resolve()}getOverlaysForCollection(t,e,n){const r=un(),i=e.length+1,s=new j(e.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const t=o.getNext().value,s=t.getKey();if(!e.isPrefixOf(s.path))break;s.path.length===i&&t.largestBatchId>n&&r.set(t.getKey(),t)}return Y.resolve(r)}getOverlaysForCollectionGroup(t,e,n,r){let i=new nt(((t,e)=>t-e));const s=this.overlays.getIterator();for(;s.hasNext();){const t=s.getNext().value;if(t.getKey().getCollectionGroup()===e&&t.largestBatchId>n){let e=i.get(t.largestBatchId);null===e&&(e=un(),i=i.insert(t.largestBatchId,e)),e.set(t.getKey(),t)}}const o=un(),a=i.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach(((t,e)=>o.set(t,e))),!(o.size()>=r)););return Y.resolve(o)}ie(t,e,n){const r=this.overlays.get(n.key);if(null!==r){const t=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,t)}this.overlays=this.overlays.insert(n.key,new sr(e,n));let i=this.Xn.get(e);void 0===i&&(i=pn(),this.Xn.set(e,i)),this.Xn.set(e,i.add(n.key))}constructor(){this.overlays=new nt(j.comparator),this.Xn=new Map}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Er(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach((t=>this.addReference(t,e)))}removeReference(t,e){this.rs(new Er(t,e))}os(t,e){t.forEach((t=>this.removeReference(t,e)))}us(t){const e=new j(new F([])),n=new Er(e,t),r=new Er(e,t+1),i=[];return this.es.forEachInRange([n,r],(t=>{this.rs(t),i.push(t.key)})),i}cs(){this.Zn.forEach((t=>this.rs(t)))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new j(new F([])),n=new Er(e,t),r=new Er(e,t+1);let i=pn();return this.es.forEachInRange([n,r],(t=>{i=i.add(t.key)})),i}containsKey(t){const e=new Er(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}constructor(){this.Zn=new st(Er.ts),this.es=new st(Er.ns)}}class Er{static ts(t,e){return j.comparator(t.key,e.key)||L(t.ls,e.ls)}static ns(t,e){return L(t.ls,e.ls)||j.comparator(t.key,e.key)}constructor(t,e){this.key=t,this.ls=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{checkEmpty(t){return Y.resolve(0===this.mutationQueue.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new rr(i,e,n,r);this.mutationQueue.push(s);for(const e of r)this.ds=this.ds.add(new Er(e.key,i)),this.indexManager.addToCollectionParentIndex(t,e.key.path.popLast());return Y.resolve(s)}lookupMutationBatch(t,e){return Y.resolve(this._s(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this.ws(n),i=r<0?0:r;return Y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Y.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(t){return Y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Er(e,0),r=new Er(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(t=>{const e=this._s(t.ls);i.push(e)})),Y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(L);return e.forEach((t=>{const e=new Er(t,0),r=new Er(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],(t=>{n=n.add(t.ls)}))})),Y.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;j.isDocumentKey(i)||(i=i.child(""));const s=new Er(new j(i),0);let o=new st(L);return this.ds.forEachWhile((t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)}),s),Y.resolve(this.gs(o))}gs(t){const e=[];return t.forEach((t=>{const n=this._s(t);null!==n&&e.push(n)})),e}removeMutationBatch(t,e){_(0===this.ys(e.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Y.forEach(e.mutations,(r=>{const i=new Er(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)})).next((()=>{this.ds=n}))}In(t){}containsKey(t,e){const n=new Er(e,0),r=this.ds.firstAfterOrEqual(n);return Y.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,Y.resolve()}ys(t,e){return this.ws(t)}ws(t){return 0===this.mutationQueue.length?0:t-this.mutationQueue[0].batchId}_s(t){const e=this.ws(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.fs=1,this.ds=new st(Er.ts)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class br{setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Y.resolve(n?n.document.mutableCopy():Vt.newInvalidDocument(e))}getEntries(t,e){let n=sn();return e.forEach((t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.mutableCopy():Vt.newInvalidDocument(t))})),Y.resolve(n)}getAllFromCollection(t,e,n){let r=sn();const i=new j(e.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i}}=s.getNext();if(!e.isPrefixOf(t.path))break;t.path.length>e.length+1||H(K(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Y.resolve(r)}getAllFromCollectionGroup(t,e,n,r){v()}Is(t,e){return Y.forEach(this.docs,(t=>e(t)))}newChangeBuffer(t){return new Ir(this)}getSize(t){return Y.resolve(this.size)}constructor(t){this.ps=t,this.docs=new nt(j.comparator),this.size=0}}class Ir extends pr{applyChanges(t){const e=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?e.push(this.zn.addEntry(t,r)):this.zn.removeEntry(n)})),Y.waitFor(e)}getFromCache(t,e){return this.zn.getEntry(t,e)}getAllFromCache(t,e){return this.zn.getEntries(t,e)}constructor(t){super(),this.zn=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{forEachTarget(t,e){return this.Ts.forEach(((t,n)=>e(n))),Y.resolve()}getLastRemoteSnapshotVersion(t){return Y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Y.resolve(this.Es)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Y.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Es&&(this.Es=e),Y.resolve()}vn(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new fr(e),this.highestTargetId=e),t.sequenceNumber>this.Es&&(this.Es=t.sequenceNumber)}addTargetData(t,e){return this.vn(e),this.targetCount+=1,Y.resolve()}updateTargetData(t,e){return this.vn(e),Y.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.us(e.targetId),this.targetCount-=1,Y.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)})),Y.waitFor(i).next((()=>r))}getTargetCount(t){return Y.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Y.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Y.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach((e=>{i.push(r.markPotentiallyOrphaned(t,e))})),Y.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.us(e),Y.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Y.resolve(n)}containsKey(t,e){return Y.resolve(this.As.containsKey(e))}constructor(t){this.persistence=t,this.Ts=new nn((t=>qt(t)),$t),this.lastRemoteSnapshotVersion=U.min(),this.highestTargetId=0,this.Es=0,this.As=new _r,this.targetCount=0,this.Rs=fr.An()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new vr,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.bs[t.toKey()];return n||(n=new wr(e,this.referenceDelegate),this.bs[t.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(t,e,n){p("MemoryPersistence","Starting transaction:",t);const r=new Ar(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((t=>this.referenceDelegate.xs(r).next((()=>t)))).toPromise().then((t=>(r.raiseOnCommittedEvent(),t)))}Ns(t,e){return Y.or(Object.values(this.bs).map((n=>()=>n.containsKey(t,e))))}constructor(t,e){this.bs={},this.overlays={},this.Ps=new X(0),this.vs=!1,this.vs=!0,this.referenceDelegate=t(this),this.Vs=new Tr(this),this.indexManager=new lr,this.remoteDocumentCache=new br((t=>this.referenceDelegate.Ss(t))),this.wt=new ar(e),this.Ds=new yr(this.wt)}}class Ar extends W{constructor(t){super(),this.currentSequenceNumber=t}}class Nr{static Ms(t){return new Nr(t)}get Fs(){if(this.Os)return this.Os;throw v()}addReference(t,e,n){return this.ks.addReference(n,e),this.Fs.delete(n.toString()),Y.resolve()}removeReference(t,e,n){return this.ks.removeReference(n,e),this.Fs.add(n.toString()),Y.resolve()}markPotentiallyOrphaned(t,e){return this.Fs.add(e.toString()),Y.resolve()}removeTarget(t,e){this.ks.us(e.targetId).forEach((t=>this.Fs.add(t.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((t=>{t.forEach((t=>this.Fs.add(t.toString())))})).next((()=>n.removeTargetData(t,e)))}Cs(){this.Os=new Set}xs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Y.forEach(this.Fs,(n=>{const r=j.fromPath(n);return this.$s(t,r).next((t=>{t||e.removeEntry(r,U.min())}))})).next((()=>(this.Os=null,e.apply(t))))}updateLimboDocument(t,e){return this.$s(t,e).next((t=>{t?this.Fs.delete(e.toString()):this.Fs.add(e.toString())}))}Ss(t){return 0}$s(t,e){return Y.or([()=>Y.resolve(this.ks.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ns(t,e)])}constructor(t){this.persistence=t,this.ks=new _r,this.Os=null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kr{static Vi(t,e){let n=pn(),r=pn();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new kr(t,e.fromCache,n,r)}constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Pi=n,this.vi=r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{initialize(t,e){this.Di=t,this.indexManager=e,this.Si=!0}getDocumentsMatchingQuery(t,e,n,r){return this.Ci(t,e).next((i=>i||this.xi(t,e,r,n))).next((n=>n||this.Ni(t,e)))}Ci(t,e){return Y.resolve(null)}xi(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||r.isEqual(U.min())?this.Ni(t,e):this.Di.getDocuments(t,n).next((i=>{const s=this.ki(e,i);return this.Oi(e,s,n,r)?this.Ni(t,e):(f()<=o.LogLevel.DEBUG&&p("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),me(e)),this.Mi(t,s,e,$(r,-1)))}))}ki(t,e){let n=new st(_e(t));return e.forEach(((e,r)=>{ye(t,r)&&(n=n.add(r))})),n}Oi(t,e,n,r){if(null===t.limit)return!1;if(n.size!==e.size)return!0;const i="F"===t.limitType?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(t,e){return f()<=o.LogLevel.DEBUG&&p("QueryEngine","Using full collection scan to execute query:",me(e)),this.Di.getDocumentsMatchingQuery(t,e,G.min())}Mi(t,e,n,r){return this.Di.getDocumentsMatchingQuery(t,n,r).next((t=>(e.forEach((e=>{t=t.insert(e.key,e)})),t)))}constructor(){this.Si=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rr{qi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new mr(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.$i)))}constructor(t,e,n,r){this.persistence=t,this.Fi=e,this.wt=r,this.$i=new nt(L),this.Bi=new nn((t=>qt(t)),$t),this.Li=new Map,this.Ui=t.getRemoteDocumentCache(),this.Vs=t.getTargetCache(),this.Ds=t.getBundleCache(),this.qi(n)}}function Dr(t,e,n,r){return new Rr(t,e,n,r)}async function Or(t,e){const n=E(t);return await n.persistence.runTransaction("Handle user change","readonly",(t=>{let r;return n.mutationQueue.getAllMutationBatches(t).next((i=>(r=i,n.qi(e),n.mutationQueue.getAllMutationBatches(t)))).next((e=>{const i=[],s=[];let o=pn();for(const t of r){i.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){s.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return n.localDocuments.getDocuments(t,o).next((t=>({Ki:t,removedBatchIds:i,addedBatchIds:s})))}))}))}function Lr(t){const e=E(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Vs.getLastRemoteSnapshotVersion(t)))}function xr(t,e,n){let r=pn(),i=pn();return n.forEach((t=>r=r.add(t))),e.getEntries(t,r).next((t=>{let r=sn();return n.forEach(((n,s)=>{const o=t.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(U.min())?(e.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(e.addEntry(s),r=r.insert(n,s)):p("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function Pr(t,e){const n=E(t);return n.persistence.runTransaction("Get next mutation batch","readonly",(t=>(void 0===e&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(t,e))))}function Ur(t,e){const n=E(t);return n.persistence.runTransaction("Allocate target","readwrite",(t=>{let r;return n.Vs.getTargetData(t,e).next((i=>i?(r=i,Y.resolve(r)):n.Vs.allocateTargetId(t).next((i=>(r=new or(e,i,0,t.currentSequenceNumber),n.Vs.addTargetData(t,r).next((()=>r)))))))})).then((t=>{const r=n.$i.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(t.targetId,t),n.Bi.set(e,t.targetId)),t}))}async function Mr(t,e,n){const r=E(t),i=r.$i.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(t=>r.persistence.referenceDelegate.removeTarget(t,i)))}catch(t){if(!J(t))throw t;p("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.$i=r.$i.remove(e),r.Bi.delete(i.target)}function Fr(t,e,n){const r=E(t);let i=U.min(),s=pn();return r.persistence.runTransaction("Execute query","readonly",(t=>function(t,e,n){const r=E(t),i=r.Bi.get(n);return void 0!==i?Y.resolve(r.$i.get(i)):r.Vs.getTargetData(e,n)}(r,t,de(e)).next((e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(t,e.targetId).next((t=>{s=t}))})).next((()=>r.Fi.getDocumentsMatchingQuery(t,e,n?i:U.min(),n?s:pn()))).next((t=>(Vr(r,ve(e),t),{documents:t,ji:s})))))}function Vr(t,e,n){let r=U.min();n.forEach(((t,e)=>{e.readTime.compareTo(r)>0&&(r=e.readTime)})),t.Li.set(e,r)}class Br{Xi(t){this.activeTargetIds=this.activeTargetIds.add(t)}Zi(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Yi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}constructor(){this.activeTargetIds=mn()}}class jr{addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.Fr.Xi(t),this.$r[t]||"not-current"}updateQueryState(t,e,n){this.$r[t]=e}removeLocalQueryTarget(t){this.Fr.Zi(t)}isLocalQueryTarget(t){return this.Fr.activeTargetIds.has(t)}clearQueryState(t){delete this.$r[t]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(t){return this.Fr.activeTargetIds.has(t)}start(){return this.Fr=new Br,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}constructor(){this.Fr=new Br,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{Br(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{Br(t){this.Gr.push(t)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){p("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.Gr)t(0)}Kr(){p("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.Gr)t(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{zr(t){this.Hr=t}Jr(t){this.Yr=t}onMessage(t){this.Xr=t}close(){this.Wr()}send(t){this.jr(t)}Zr(){this.Hr()}eo(t){this.Yr(t)}no(t){this.Xr(t)}constructor(t){this.jr=t.jr,this.Wr=t.Wr}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends class{ro(t,e,n,r,i){const s=this.oo(t,e);p("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(t,s,o,n).then((t=>(p("RestConnection","Received: ",t),t)),(e=>{throw m("RestConnection",`${t} failed with error: `,e,"url: ",s,"request:",n),e}))}ao(t,e,n,r,i,s){return this.ro(t,e,n,r,i)}uo(t,e,n){t["X-Goog-Api-Client"]="gl-js/ fire/"+h,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((e,n)=>t[n]=e)),n&&n.headers.forEach(((e,n)=>t[n]=e))}oo(t,e){const n=Kr[t];return`${this.so}/v1/${e}:${n}`}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.so=e+"://"+t.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}}{co(t,e,n,r){return new Promise(((i,s)=>{const o=new(0,c.XhrIo);o.listenOnce(c.EventType.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case c.ErrorCode.NO_ERROR:const e=o.getResponseJson();p("Connection","XHR received:",JSON.stringify(e)),i(e);break;case c.ErrorCode.TIMEOUT:p("Connection",'RPC "'+t+'" timed out'),s(new b(w.DEADLINE_EXCEEDED,"Request time out"));break;case c.ErrorCode.HTTP_ERROR:const n=o.getStatus();if(p("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(e)>=0?e:w.UNKNOWN}(t.status);s(new b(e,t.message))}else s(new b(w.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new b(w.UNAVAILABLE,"Connection failed."));break;default:v()}}finally{p("Connection",'RPC "'+t+'" completed.')}}));const a=JSON.stringify(r);o.send(e,"POST",a,n,15)}))}ho(t,e,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",t,"/channel"],i=(0,c.createWebChannelTransport)(),s=(0,c.getStatEventTarget)(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new(0,c.FetchXmlHttpFactory)({})),this.uo(o.initMessageHeaders,e,n),(0,a.isMobileCordova)()||(0,a.isReactNative)()||(0,a.isElectron)()||(0,a.isIE)()||(0,a.isUWP)()||(0,a.isBrowserExtension)()||(o.httpHeadersOverwriteParam="$httpHeaders");const u=r.join("");p("Connection","Creating WebChannel: "+u,o);const l=i.createWebChannel(u,o);let h=!1,d=!1;const f=new Gr({jr:t=>{d?p("Connection","Not sending because WebChannel is closed:",t):(h||(p("Connection","Opening WebChannel transport."),l.open(),h=!0),p("Connection","WebChannel sending:",t),l.send(t))},Wr:()=>l.close()}),g=(t,e,n)=>{t.listen(e,(t=>{try{n(t)}catch(t){setTimeout((()=>{throw t}),0)}}))};return g(l,c.WebChannel.EventType.OPEN,(()=>{d||p("Connection","WebChannel transport opened.")})),g(l,c.WebChannel.EventType.CLOSE,(()=>{d||(d=!0,p("Connection","WebChannel transport closed"),f.eo())})),g(l,c.WebChannel.EventType.ERROR,(t=>{d||(d=!0,m("Connection","WebChannel transport errored:",t),f.eo(new b(w.UNAVAILABLE,"The operation could not be completed")))})),g(l,c.WebChannel.EventType.MESSAGE,(t=>{var e;if(!d){const n=t.data[0];_(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){p("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Xe[t];if(void 0!==e)return en(e)}(t),n=i.message;void 0===e&&(e=w.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),d=!0,f.eo(new b(e,n)),l.close()}else p("Connection","WebChannel received:",n),f.no(n)}})),g(s,c.Event.STAT_EVENT,(t=>{t.stat===c.Stat.PROXY?p("Connection","Detected buffering proxy"):t.stat===c.Stat.NOPROXY&&p("Connection","Detected no buffering proxy")})),setTimeout((()=>{f.Zr()}),0),f}constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wr(t){return new kn(t,!0)}class Qr{reset(){this.wo=0}po(){this.wo=this._o}Io(t){this.cancel();const e=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,e-n);r>0&&p("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),t()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}constructor(t,e,n=1e3,r=1.5,i=6e4){this.js=t,this.timerId=e,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(t){this.Fo(),this.stream.send(t)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(t,e){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==t?this.So.reset():e&&e.code===w.RESOURCE_EXHAUSTED?(g(e.toString()),g("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):e&&e.code===w.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Jr(e)}Bo(){}auth(){this.state=1;const t=this.Lo(this.Po),e=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([t,n])=>{this.Po===e&&this.Uo(t,n)}),(e=>{t((()=>{const t=new b(w.UNKNOWN,"Fetching auth token failed: "+e.message);return this.qo(t)}))}))}Uo(t,e){const n=this.Lo(this.Po);this.stream=this.Ko(t,e),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((t=>{n((()=>this.qo(t)))})),this.stream.onMessage((t=>{n((()=>this.onMessage(t)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(t){return p("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Lo(t){return e=>{this.js.enqueueAndForget((()=>this.Po===t?e():(p("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}constructor(t,e,n,r,i,s,o,a){this.js=t,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Qr(t,e)}}class Jr extends Yr{Ko(t,e){return this.bo.ho("Listen",t,e)}onMessage(t){this.So.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const i="NO_CHANGE"===(r=e.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:v(),s=e.targetChange.targetIds||[],o=function(t,e){return t.dt?(_(void 0===e||"string"==typeof e),ut.fromBase64String(e||"")):(_(void 0===e||e instanceof Uint8Array),ut.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),a=e.targetChange.cause,c=a&&function(t){const e=void 0===t.code?w.UNKNOWN:en(t.code);return new b(e,t.message||"")}(a);n=new wn(i,s,o,c||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Un(t,r.document.name),s=On(r.document.updateTime),o=new Mt({mapValue:{fields:r.document.fields}}),a=Vt.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new _n(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Un(t,r.document),s=r.readTime?On(r.readTime):U.min(),o=Vt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new _n([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Un(t,r.document),s=r.removedTargetIds||[];n=new _n([],s,i,null)}else{if(!("filter"in e))return v();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Je(r),s=t.targetId;n=new En(s,i)}}var r;return n}(this.wt,t),n=function(t){if(!("targetChange"in t))return U.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?U.min():e.readTime?On(e.readTime):U.min()}(t);return this.listener.Go(e,n)}Qo(t){const e={};e.database=Vn(this.wt),e.addTarget=function(t,e){let n;const r=e.target;return n=Kt(r)?{documents:$n(t,r)}:{query:Kn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=Rn(t,e.resumeToken):e.snapshotVersion.compareTo(U.min())>0&&(n.readTime=Cn(t,e.snapshotVersion.toTimestamp())),n}(this.wt,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return v()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.wt,t);n&&(e.labels=n),this.Mo(e)}jo(t){const e={};e.database=Vn(this.wt),e.removeTarget=t,this.Mo(e)}constructor(t,e,n,r,i,s){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,r,s),this.wt=i}}class Xr extends Yr{get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(t,e){return this.bo.ho("Write",t,e)}onMessage(t){if(_(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Wo){this.So.reset();const r=(e=t.writeResults,n=t.commitTime,e&&e.length>0?(_(void 0!==n),e.map((t=>function(t,e){let n=t.updateTime?On(t.updateTime):On(e);return n.isEqual(U.min())&&(n=On(e)),new Pe(n,t.transformResults||[])}(t,n)))):[]),i=On(t.commitTime);return this.listener.Jo(i,r)}var e,n;return _(!t.writeResults||0===t.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const t={};t.database=Vn(this.wt),this.Mo(t)}Ho(t){const e={streamToken:this.lastStreamToken,writes:t.map((t=>qn(this.wt,t)))};this.Mo(e)}constructor(t,e,n,r,i,s){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,r,s),this.wt=i,this.Wo=!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends class{}{tu(){if(this.Zo)throw new b(w.FAILED_PRECONDITION,"The client has already been terminated.")}ro(t,e,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(t,e,n,r,i))).catch((t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new b(w.UNKNOWN,t.toString())}))}ao(t,e,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(t,e,n,i,s,r))).catch((t=>{throw"FirebaseError"===t.name?(t.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),t):new b(w.UNKNOWN,t.toString())}))}terminate(){this.Zo=!0}constructor(t,e,n,r){super(),this.authCredentials=t,this.appCheckCredentials=e,this.bo=n,this.wt=r,this.Zo=!1}}class ti{iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(t){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ru("Offline")))}set(t){this.cu(),this.eu=0,"Online"===t&&(this.su=!1),this.ru(t)}ru(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ou(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(g(e),this.su=!1):p("OnlineStateTracker",e)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((t=>{n.enqueueAndForget((async()=>{li(this)&&(p("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=E(t);e.lu.add(4),await ri(e),e._u.set("Unknown"),e.lu.delete(4),await ni(e)}(this))}))})),this._u=new ti(n,r)}}async function ni(t){if(li(t))for(const e of t.fu)await e(!0)}async function ri(t){for(const e of t.fu)await e(!1)}function ii(t,e){const n=E(t);n.hu.has(e.targetId)||(n.hu.set(e.targetId,e),ui(n)?ci(n):ki(n).Co()&&oi(n,e))}function si(t,e){const n=E(t),r=ki(n);n.hu.delete(e),r.Co()&&ai(n,e),0===n.hu.size&&(r.Co()?r.ko():li(n)&&n._u.set("Unknown"))}function oi(t,e){t.wu.Nt(e.targetId),ki(t).Qo(e)}function ai(t,e){t.wu.Nt(e),ki(t).jo(e)}function ci(t){t.wu=new In({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),te:e=>t.hu.get(e)||null}),ki(t).start(),t._u.iu()}function ui(t){return li(t)&&!ki(t).Do()&&t.hu.size>0}function li(t){return 0===E(t).lu.size}function hi(t){t.wu=void 0}async function di(t){t.hu.forEach(((e,n)=>{oi(t,e)}))}async function fi(t,e){hi(t),ui(t)?(t._u.uu(e),ci(t)):t._u.set("Unknown")}async function pi(t,e,n){if(t._u.set("Online"),e instanceof wn&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.hu.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.hu.delete(r),t.wu.removeTarget(r))}(t,e)}catch(n){p("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await gi(t,n)}else if(e instanceof _n?t.wu.Ut(e):e instanceof En?t.wu.zt(e):t.wu.Gt(e),!n.isEqual(U.min()))try{const e=await Lr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.wu.Yt(e);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.hu.get(r);i&&t.hu.set(r,i.withResumeToken(n.resumeToken,e))}})),n.targetMismatches.forEach((e=>{const n=t.hu.get(e);if(!n)return;t.hu.set(e,n.withResumeToken(ut.EMPTY_BYTE_STRING,n.snapshotVersion)),ai(t,e);const r=new or(n.target,e,1,n.sequenceNumber);oi(t,r)})),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){p("RemoteStore","Failed to raise snapshot:",e),await gi(t,e)}}async function gi(t,e,n){if(!J(e))throw e;t.lu.add(1),await ri(t),t._u.set("Offline"),n||(n=()=>Lr(t.localStore)),t.asyncQueue.enqueueRetryable((async()=>{p("RemoteStore","Retrying IndexedDB access"),await n(),t.lu.delete(1),await ni(t)}))}function mi(t,e){return e().catch((n=>gi(t,n,e)))}async function yi(t){const e=E(t),n=Ci(e);let r=e.au.length>0?e.au[e.au.length-1].batchId:-1;for(;vi(e);)try{const t=await Pr(e.localStore,r);if(null===t){0===e.au.length&&n.ko();break}r=t.batchId,_i(e,t)}catch(t){await gi(e,t)}Ei(e)&&wi(e)}function vi(t){return li(t)&&t.au.length<10}function _i(t,e){t.au.push(e);const n=Ci(t);n.Co()&&n.zo&&n.Ho(e.mutations)}function Ei(t){return li(t)&&!Ci(t).Do()&&t.au.length>0}function wi(t){Ci(t).start()}async function bi(t){Ci(t).Xo()}async function Ii(t){const e=Ci(t);for(const n of t.au)e.Ho(n.mutations)}async function Ti(t,e,n){const r=t.au.shift(),i=ir.from(r,e,n);await mi(t,(()=>t.remoteSyncer.applySuccessfulWrite(i))),await yi(t)}async function Si(t,e){e&&Ci(t).zo&&await async function(t,e){if(tn(n=e.code)&&n!==w.ABORTED){const n=t.au.shift();Ci(t).No(),await mi(t,(()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e))),await yi(t)}var n}(t,e),Ei(t)&&wi(t)}async function Ai(t,e){const n=E(t);n.asyncQueue.verifyOperationInProgress(),p("RemoteStore","RemoteStore received new credentials");const r=li(n);n.lu.add(3),await ri(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.lu.delete(3),await ni(n)}async function Ni(t,e){const n=E(t);e?(n.lu.delete(2),await ni(n)):e||(n.lu.add(2),await ri(n),n._u.set("Unknown"))}function ki(t){return t.mu||(t.mu=function(t,e,n){const r=E(t);return r.tu(),new Jr(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:di.bind(null,t),Jr:fi.bind(null,t),Go:pi.bind(null,t)}),t.fu.push((async e=>{e?(t.mu.No(),ui(t)?ci(t):t._u.set("Unknown")):(await t.mu.stop(),hi(t))}))),t.mu}function Ci(t){return t.gu||(t.gu=function(t,e,n){const r=E(t);return r.tu(),new Xr(e,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(t.datastore,t.asyncQueue,{zr:bi.bind(null,t),Jr:Si.bind(null,t),Yo:Ii.bind(null,t),Jo:Ti.bind(null,t)}),t.fu.push((async e=>{e?(t.gu.No(),await yi(t)):(await t.gu.stop(),t.au.length>0&&(p("RemoteStore",`Stopping write stream with ${t.au.length} pending writes`),t.au=[]))}))),t.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ri{static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ri(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new b(w.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new I,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((t=>{}))}}function Di(t,e){if(g("AsyncQueue",`${e}: ${t}`),J(t))return new b(w.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oi{static emptySet(t){return new Oi(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Oi))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new Oi;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}constructor(t){this.comparator=t?(e,n)=>t(e,n)||j.comparator(e.key,n.key):(t,e)=>j.comparator(t.key,e.key),this.keyedMap=an(),this.sortedSet=new nt(this.comparator)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{track(t){const e=t.doc.key,n=this.yu.get(e);n?0!==t.type&&3===n.type?this.yu=this.yu.insert(e,t):3===t.type&&1!==n.type?this.yu=this.yu.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.yu=this.yu.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.yu=this.yu.remove(e):1===t.type&&2===n.type?this.yu=this.yu.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.yu=this.yu.insert(e,{type:2,doc:t.doc}):v():this.yu=this.yu.insert(e,t)}pu(){const t=[];return this.yu.inorderTraversal(((e,n)=>{t.push(n)})),t}constructor(){this.yu=new nt(j.comparator)}}class xi{static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach((t=>{i.push({type:0,doc:t})})),new xi(t,e,Oi.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&pe(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi{constructor(){this.Iu=void 0,this.listeners=[]}}class Ui{constructor(){this.queries=new nn((t=>ge(t)),pe),this.onlineState="Unknown",this.Tu=new Set}}async function Mi(t,e){const n=E(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Pi),i)try{s.Iu=await n.onListen(r)}catch(t){const n=Di(t,`Initialization of query '${me(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.Eu(n.onlineState),s.Iu&&e.Au(s.Iu)&&ji(n)}async function Fi(t,e){const n=E(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Vi(t,e){const n=E(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.Au(t)&&(r=!0);i.Iu=t}}r&&ji(n)}function Bi(t,e,n){const r=E(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function ji(t){t.Tu.forEach((t=>{t.next()}))}class qi{Au(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new xi(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.bu?this.vu(t)&&(this.Ru.next(t),e=!0):this.Vu(t,this.onlineState)&&(this.Su(t),e=!0),this.Pu=t,e}onError(t){this.Ru.error(t)}Eu(t){this.onlineState=t;let e=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,t)&&(this.Su(this.Pu),e=!0),e}Vu(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.Du&&n||t.docs.isEmpty()&&"Offline"!==e)}vu(t){if(t.docChanges.length>0)return!0;const e=this.Pu&&this.Pu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}Su(t){t=xi.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.bu=!0,this.Ru.next(t)}constructor(t,e,n){this.query=t,this.Ru=e,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $i{constructor(t){this.key=t}}class Ki{constructor(t){this.key=t}}class Gi{get qu(){return this.Fu}Ku(t,e){const n=e?e.Gu:new Li,r=e?e.Uu:this.Uu;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,c="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal(((t,e)=>{const u=r.get(t),l=ye(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Qu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Lu(l,a)>0||c&&this.Lu(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),i=d?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const t="F"===this.query.limitType?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:i}}Qu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Uu;this.Uu=t.Uu,this.mutatedKeys=t.mutatedKeys;const i=t.Gu.pu();i.sort(((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return v()}};return n(t)-n(e)}(t.type,e.type)||this.Lu(t.doc,e.doc))),this.ju(n);const s=e?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new xi(this.query,t.Uu,r,i,t.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new Li,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(t){return!this.Fu.has(t)&&!!this.Uu.has(t)&&!this.Uu.get(t).hasLocalMutations}ju(t){t&&(t.addedDocuments.forEach((t=>this.Fu=this.Fu.add(t))),t.modifiedDocuments.forEach((t=>{})),t.removedDocuments.forEach((t=>this.Fu=this.Fu.delete(t))),this.current=t.current)}Wu(){if(!this.current)return[];const t=this.Bu;this.Bu=pn(),this.Uu.forEach((t=>{this.Hu(t.key)&&(this.Bu=this.Bu.add(t.key))}));const e=[];return t.forEach((t=>{this.Bu.has(t)||e.push(new Ki(t))})),this.Bu.forEach((n=>{t.has(n)||e.push(new $i(n))})),e}Ju(t){this.Fu=t.ji,this.Bu=pn();const e=this.Ku(t.documents);return this.applyChanges(e,!0)}Yu(){return xi.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}constructor(t,e){this.query=t,this.Fu=e,this.$u=null,this.current=!1,this.Bu=pn(),this.mutatedKeys=pn(),this.Lu=_e(t),this.Uu=new Oi(this.Lu)}}class Hi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class zi{constructor(t){this.key=t,this.Xu=!1}}class Wi{get isPrimaryClient(){return!0===this.ac}constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new nn((t=>ge(t)),pe),this.ec=new Map,this.nc=new Set,this.sc=new nt(j.comparator),this.ic=new Map,this.rc=new _r,this.oc={},this.uc=new Map,this.cc=fr.Rn(),this.onlineState="Unknown",this.ac=void 0}}async function Qi(t,e){const n=fs(t);let r,i;const s=n.tc.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const t=await Ur(n.localStore,de(e));n.isPrimaryClient&&ii(n.remoteStore,t);const s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Yi(n,e,r,"current"===s)}return i}async function Yi(t,e,n,r){t.hc=(e,n,r)=>async function(t,e,n,r){let i=e.view.Ku(n);i.Oi&&(i=await Fr(t.localStore,e.query,!1).then((({documents:t})=>e.view.Ku(t,i))));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return as(t,e.targetId,o.zu),o.snapshot}(t,e,n,r);const i=await Fr(t.localStore,e,!0),s=new Gi(e,i.ji),o=s.Ku(i.documents),a=vn.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);as(t,n,c.zu);const u=new Hi(e,n,s);return t.tc.set(e,u),t.ec.has(n)?t.ec.get(n).push(e):t.ec.set(n,[e]),c.snapshot}async function Ji(t,e){const n=E(t),r=n.tc.get(e),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((t=>!pe(t,e)))),void n.tc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await Mr(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),si(n.remoteStore,r.targetId),ss(n,r.targetId)})).catch(Q)):(ss(n,r.targetId),await Mr(n.localStore,r.targetId,!0))}async function Xi(t,e){const n=E(t);try{const t=await function(t,e){const n=E(t),r=e.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(t=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];e.targetChanges.forEach(((s,a)=>{const c=i.get(a);if(!c)return;o.push(n.Vs.removeMatchingKeys(t,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(t,s.addedDocuments,a))));let u=c.withSequenceNumber(t.currentSequenceNumber);var l,h,d;e.targetMismatches.has(a)?u=u.withResumeToken(ut.EMPTY_BYTE_STRING,U.min()).withLastLimboFreeSnapshotVersion(U.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,r)),i=i.insert(a,u),h=u,d=s,(0===(l=c).resumeToken.approximateByteSize()||h.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.Vs.updateTargetData(t,u))}));let a=sn(),c=pn();if(e.documentUpdates.forEach((r=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))})),o.push(xr(t,s,e.documentUpdates).next((t=>{a=t.Gi,c=t.Qi}))),!r.isEqual(U.min())){const e=n.Vs.getLastRemoteSnapshotVersion(t).next((e=>n.Vs.setTargetsMetadata(t,t.currentSequenceNumber,r)));o.push(e)}return Y.waitFor(o).next((()=>s.apply(t))).next((()=>n.localDocuments.getLocalViewOfDocuments(t,a,c))).next((()=>a))})).then((t=>(n.$i=i,t)))}(n.localStore,e);e.targetChanges.forEach(((t,e)=>{const r=n.ic.get(e);r&&(_(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Xu=!0:t.modifiedDocuments.size>0?_(r.Xu):t.removedDocuments.size>0&&(_(r.Xu),r.Xu=!1))})),await ls(n,t,e)}catch(t){await Q(t)}}function Zi(t,e,n){const r=E(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(e);i.snapshot&&t.push(i.snapshot)})),function(t,e){const n=E(t);n.onlineState=e;let r=!1;n.queries.forEach(((t,n)=>{for(const t of n.listeners)t.Eu(e)&&(r=!0)})),r&&ji(n)}(r.eventManager,e),t.length&&r.Zu.Go(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function ts(t,e,n){const r=E(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.ic.get(e),s=i&&i.key;if(s){let t=new nt(j.comparator);t=t.insert(s,Vt.newNoDocument(s,U.min()));const n=pn().add(s),i=new yn(U.min(),new Map,new st(L),t,n);await Xi(r,i),r.sc=r.sc.remove(s),r.ic.delete(e),us(r)}else await Mr(r.localStore,e,!1).then((()=>ss(r,e,n))).catch(Q)}async function es(t,e){const n=E(t),r=e.batch.batchId;try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(t=>{const r=e.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Y.resolve();return s.forEach((t=>{o=o.next((()=>r.getEntry(e,t))).next((e=>{const s=n.docVersions.get(t);_(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&(e.setReadTime(n.commitVersion),r.addEntry(e)))}))})),o.next((()=>t.mutationQueue.removeMutationBatch(e,i)))}(n,t,e,i).next((()=>i.apply(t))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,function(t){let e=pn();for(let n=0;n<t.mutationResults.length;++n)t.mutationResults[n].transformResults.length>0&&(e=e.add(t.batch.mutations[n].key));return e}(e)))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(n.localStore,e);is(n,r,null),rs(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await ls(n,t)}catch(t){await Q(t)}}async function ns(t,e,n){const r=E(t);try{const t=await function(t,e){const n=E(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",(t=>{let r;return n.mutationQueue.lookupMutationBatch(t,e).next((e=>(_(null!==e),r=e.keys(),n.mutationQueue.removeMutationBatch(t,e)))).next((()=>n.mutationQueue.performConsistencyCheck(t))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(t,r,e))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(t,r))).next((()=>n.localDocuments.getDocuments(t,r)))}))}(r.localStore,e);is(r,e,n),rs(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await ls(r,t)}catch(t){await Q(t)}}function rs(t,e){(t.uc.get(e)||[]).forEach((t=>{t.resolve()})),t.uc.delete(e)}function is(t,e,n){const r=E(t);let i=r.oc[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.oc[r.currentUser.toKey()]=i}}function ss(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ec.get(e))t.tc.delete(r),n&&t.Zu.lc(r,n);t.ec.delete(e),t.isPrimaryClient&&t.rc.us(e).forEach((e=>{t.rc.containsKey(e)||os(t,e)}))}function os(t,e){t.nc.delete(e.path.canonicalString());const n=t.sc.get(e);null!==n&&(si(t.remoteStore,n),t.sc=t.sc.remove(e),t.ic.delete(n),us(t))}function as(t,e,n){for(const r of n)r instanceof $i?(t.rc.addReference(r.key,e),cs(t,r)):r instanceof Ki?(p("SyncEngine","Document no longer in limbo: "+r.key),t.rc.removeReference(r.key,e),t.rc.containsKey(r.key)||os(t,r.key)):v()}function cs(t,e){const n=e.key,r=n.path.canonicalString();t.sc.get(n)||t.nc.has(r)||(p("SyncEngine","New document in limbo: "+n),t.nc.add(r),us(t))}function us(t){for(;t.nc.size>0&&t.sc.size<t.maxConcurrentLimboResolutions;){const e=t.nc.values().next().value;t.nc.delete(e);const n=new j(F.fromString(e)),r=t.cc.next();t.ic.set(r,new zi(n)),t.sc=t.sc.insert(n,r),ii(t.remoteStore,new or(de(ae(n.path)),r,2,X.ot))}}async function ls(t,e,n){const r=E(t),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((t,a)=>{o.push(r.hc(a,e,n).then((t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=kr.Vi(a.targetId,t);s.push(e)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(t,e){const n=E(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(t=>Y.forEach(e,(e=>Y.forEach(e.Pi,(r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r))).next((()=>Y.forEach(e.vi,(r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))))))}catch(t){if(!J(t))throw t;p("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,i)}}}(r.localStore,s))}async function hs(t,e){const n=E(t);if(!n.currentUser.isEqual(e)){p("SyncEngine","User change. New user:",e.toKey());const t=await Or(n.localStore,e);n.currentUser=e,(r=n).uc.forEach((t=>{t.forEach((t=>{t.reject(new b(w.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),r.uc.clear(),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await ls(n,t.Ki)}var r}function ds(t,e){const n=E(t),r=n.ic.get(e);if(r&&r.Xu)return pn().add(r.key);{let t=pn();const r=n.ec.get(e);if(!r)return t;for(const e of r){const r=n.tc.get(e);t=t.unionWith(r.view.qu)}return t}}function fs(t){const e=E(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=Xi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=ds.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ts.bind(null,e),e.Zu.Go=Vi.bind(null,e.eventManager),e.Zu.lc=Bi.bind(null,e.eventManager),e}function ps(t){const e=E(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=es.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ns.bind(null,e),e}class gs{async initialize(t){this.wt=Wr(t.databaseInfo.databaseId),this.sharedClientState=this.dc(t),this.persistence=this._c(t),await this.persistence.start(),this.localStore=this.wc(t),this.gcScheduler=this.mc(t,this.localStore),this.indexBackfillerScheduler=this.gc(t,this.localStore)}mc(t,e){return null}gc(t,e){return null}wc(t){return Dr(this.persistence,new Cr,t.initialUser,this.wt)}_c(t){return new Sr(Nr.Ms,this.wt)}dc(t){return new jr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class ms{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>Zi(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=hs.bind(null,this.syncEngine),await Ni(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Ui}createDatastore(t){const e=Wr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Hr(r));var r,i,s;return i=t.authCredentials,s=t.appCheckCredentials,new Zr(i,s,n,e)}createRemoteStore(t){var e,n,r,i,s;return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>Zi(this.syncEngine,t,0),s=$r.V()?new $r:new qr,new ei(e,n,r,i,s)}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Wi(t,e,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=E(t);p("RemoteStore","RemoteStore shutting down."),e.lu.add(5),await ri(e),e.du.shutdown(),e._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ys{next(t){this.observer.next&&this.Ic(this.observer.next,t)}error(t){this.observer.error?this.Ic(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Tc(){this.muted=!0}Ic(t,e){this.muted||setTimeout((()=>{this.muted||t(e)}),0)}constructor(t){this.observer=t,this.muted=!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vs{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new b(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new I;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=Di(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}constructor(t,e,n,r){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=r,this.user=l.UNAUTHENTICATED,this.clientId=O.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async t=>{p("FirestoreClient","Received user=",t.uid),await this.authCredentialListener(t),this.user=t})),this.appCheckCredentials.start(n,(t=>(p("FirestoreClient","Received new app check token=",t),this.appCheckCredentialListener(t,this.user))))}}async function _s(t,e){t.asyncQueue.verifyOperationInProgress(),p("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener((async t=>{r.isEqual(t)||(await Or(e.localStore,t),r=t)})),e.persistence.setDatabaseDeletedListener((()=>t.terminate())),t.offlineComponents=e}async function Es(t,e){t.asyncQueue.verifyOperationInProgress();const n=await ws(t);p("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener((t=>Ai(e.remoteStore,t))),t.setAppCheckTokenChangeListener(((t,n)=>Ai(e.remoteStore,n))),t.onlineComponents=e}async function ws(t){return t.offlineComponents||(p("FirestoreClient","Using default OfflineComponentProvider"),await _s(t,new gs)),t.offlineComponents}async function bs(t){return t.onlineComponents||(p("FirestoreClient","Using default OnlineComponentProvider"),await Es(t,new ms)),t.onlineComponents}function Is(t){return bs(t).then((t=>t.syncEngine))}async function Ts(t){const e=await bs(t),n=e.eventManager;return n.onListen=Qi.bind(null,e.syncEngine),n.onUnlisten=Ji.bind(null,e.syncEngine),n}const Ss=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t,e,n){if(!n)throw new b(w.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Ns(t){if(!j.isDocumentKey(t))throw new b(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function ks(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const n=(e=t).constructor?e.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var e;return"function"==typeof t?"a function":v()}function Cs(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new b(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=ks(t);throw new b(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Rs{isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new b(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new b(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new b(w.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{get app(){if(!this._app)throw new b(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new b(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Rs(t),void 0!==t.credentials&&(this._authCredentials=function(t){if(!t)return new S;switch(t.type){case"gapi":const e=t.client;return _(!("object"!=typeof e||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new k(e,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new b(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=Ss.get(t);e&&(p("ComponentProvider","Removing Datastore"),Ss.delete(t),e.terminate())}(this),Promise.resolve()}constructor(t,e,n){this._authCredentials=e,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Rs({}),this._settingsFrozen=!1,t instanceof vt?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new b(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vt(t.options.projectId)}(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xs(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Os(this.firestore,t,this._key)}constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}}class Ls{withConverter(t){return new Ls(this.firestore,t,this._query)}constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}}class xs extends Ls{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Os(this.firestore,null,new j(t))}withConverter(t){return new xs(this.firestore,t,this._path)}constructor(t,e,n){super(t,e,ae(n)),this._path=n,this.type="collection"}}function Ps(t,e,...n){if(t=(0,a.getModularInstance)(t),1===arguments.length&&(e=O.I()),As("doc","path",e),t instanceof Ds){const r=F.fromString(e,...n);return Ns(r),new Os(t,null,new j(r))}{if(!(t instanceof Os||t instanceof xs))throw new b(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Ns(r),new Os(t.firestore,t instanceof xs?t.converter:null,new j(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{get isShuttingDown(){return this.Fc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Gc(),this.Qc(t)}enterRestrictedMode(t){if(!this.Fc){this.Fc=!0,this.Uc=t||!1;const e=zr();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Kc)}}enqueue(t){if(this.Gc(),this.Fc)return new Promise((()=>{}));const e=new I;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Mc.push(t),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(t){if(!J(t))throw t;p("AsyncQueue","Operation failed with retryable error: "+t)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(t){const e=this.Oc.then((()=>(this.Lc=!0,t().catch((t=>{this.Bc=t,this.Lc=!1;throw g("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((t=>(this.Lc=!1,t))))));return this.Oc=e,e}enqueueAfterDelay(t,e,n){this.Gc(),this.qc.indexOf(t)>-1&&(e=0);const r=Ri.createAndSchedule(this,t,e,n,(t=>this.Wc(t)));return this.$c.push(r),r}Gc(){this.Bc&&v()}verifyOperationInProgress(){}async zc(){let t;do{t=this.Oc,await t}while(t!==this.Oc)}Hc(t){for(const e of this.$c)if(e.timerId===t)return!0;return!1}Jc(t){return this.zc().then((()=>{this.$c.sort(((t,e)=>t.targetTimeMs-e.targetTimeMs));for(const e of this.$c)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.zc()}))}Yc(t){this.qc.push(t)}Wc(t){const e=this.$c.indexOf(t);this.$c.splice(e,1)}constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Qr(this,"async_queue_retry"),this.Kc=()=>{const t=zr();t&&p("AsyncQueue","Visibility state changed to "+t.visibilityState),this.So.Eo()};const t=zr();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Kc)}}function Ms(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}(t)}class Fs extends Ds{_terminate(){return this._firestoreClient||js(this),this._firestoreClient.terminate()}constructor(t,e,n){super(t,e,n),this.type="firestore",this._queue=new Us,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}}function Vs(t=(0,r.getApp)()){return(0,r._getProvider)(t,"firestore").getImmediate()}function Bs(t){return t._firestoreClient||js(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function js(t){var e;const n=t._freezeSettings(),r=(i=t._databaseId,s=(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",o=t._persistenceKey,new yt(i,s,o,(a=n).host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams));var i,s,o,a;t._firestoreClient=new vs(t._authCredentials,t._appCheckCredentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qs{isEqual(t){return this._internalPath.isEqual(t._internalPath)}constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new b(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new B(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{static fromBase64String(t){try{return new $s(ut.fromBase64String(t))}catch(t){throw new b(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new $s(ut.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}constructor(t){this._byteString=t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t){this._methodName=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gs{get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return L(this._lat,t._lat)||L(this._long,t._long)}constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new b(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new b(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hs=/^__.*__$/;class zs{toMutation(t,e){return null!==this.fieldMask?new Ge(t,this.data,this.fieldMask,e,this.fieldTransforms):new Ke(t,this.data,e,this.fieldTransforms)}constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}}function Ws(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw v()}}class Qs{get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(t){return new Qs(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.sa(t),r}ia(t){var e;const n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(t){return this.ta({path:void 0,na:!0})}oa(t){return oo(t,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(t){return void 0!==this.fieldMask.find((e=>t.isPrefixOf(e)))||void 0!==this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))}Xc(){if(this.path)for(let t=0;t<this.path.length;t++)this.sa(this.path.get(t))}sa(t){if(0===t.length)throw this.oa("Document fields must not be empty");if(Ws(this.Zc)&&Hs.test(t))throw this.oa('Document fields cannot begin and end with "__"')}constructor(t,e,n,r,i,s){this.settings=t,this.databaseId=e,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class Ys{aa(t,e,n,r=!1){return new Qs({Zc:t,methodName:e,ca:n,path:B.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.wt=n||Wr(t)}}function Js(t){const e=t._freezeSettings(),n=Wr(t._databaseId);return new Ys(t._databaseId,!!e.ignoreUndefinedProperties,n)}function Xs(t,e,n,r,i,s={}){const o=t.aa(s.merge||s.mergeFields?2:0,e,n,i);no("Data must be an object, but it was:",o,r);const a=to(r,o);let c,u;if(s.merge)c=new at(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const t=[];for(const r of s.mergeFields){const i=ro(e,r,n);if(!o.contains(i))throw new b(w.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);ao(t,i)||t.push(i)}c=new at(t),u=o.fieldTransforms.filter((t=>c.covers(t.field)))}else c=null,u=o.fieldTransforms;return new zs(new Mt(a),c,u)}function Zs(t,e){if(eo(t=(0,a.getModularInstance)(t)))return no("Unsupported field value:",e,t),to(t,e);if(t instanceof Ks)return function(t,e){if(!Ws(e.Zc))throw e.oa(`${t._methodName}() can only be used with update() and set()`);if(!e.path)throw e.oa(`${t._methodName}() is not currently supported inside arrays`);const n=t._toFieldTransform(e);n&&e.fieldTransforms.push(n)}(t,e),null;if(void 0===t&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.na&&4!==e.Zc)throw e.oa("Nested arrays are not supported");return function(t,e){const n=[];let r=0;for(const i of t){let t=Zs(i,e.ra(r));null==t&&(t={nullValue:"NULL_VALUE"}),n.push(t),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===(t=(0,a.getModularInstance)(t)))return{nullValue:"NULL_VALUE"};if("number"==typeof t)return Ie(e.wt,t);if("boolean"==typeof t)return{booleanValue:t};if("string"==typeof t)return{stringValue:t};if(t instanceof Date){const n=P.fromDate(t);return{timestampValue:Cn(e.wt,n)}}if(t instanceof P){const n=new P(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Cn(e.wt,n)}}if(t instanceof Gs)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof $s)return{bytesValue:Rn(e.wt,t._byteString)};if(t instanceof Os){const n=e.databaseId,r=t.firestore._databaseId;if(!r.isEqual(n))throw e.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Ln(t.firestore._databaseId||e.databaseId,t._key.path)}}throw e.oa(`Unsupported field value: ${ks(t)}`)}(t,e)}function to(t,e){const n={};return et(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):tt(t,((t,r)=>{const i=Zs(r,e.ea(t));null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function eo(t){return!("object"!=typeof t||null===t||t instanceof Array||t instanceof Date||t instanceof P||t instanceof Gs||t instanceof $s||t instanceof Os||t instanceof Ks)}function no(t,e,n){if(!eo(n)||("object"!=typeof(r=n)||null===r||Object.getPrototypeOf(r)!==Object.prototype&&null!==Object.getPrototypeOf(r))){const r=ks(n);throw"an object"===r?e.oa(t+" a custom object"):e.oa(t+" "+r)}var r}function ro(t,e,n){if((e=(0,a.getModularInstance)(e))instanceof qs)return e._internalPath;if("string"==typeof e)return so(t,e);throw oo("Field path arguments must be of type string or ",t,!1,void 0,n)}const io=new RegExp("[~\\*/\\[\\]]");function so(t,e,n){if(e.search(io)>=0)throw oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new qs(...e.split("."))._internalPath}catch(r){throw oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function oo(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${r}`),o&&(c+=` in document ${i}`),c+=")"),new b(w.INVALID_ARGUMENT,a+t+c)}function ao(t,e){return t.some((t=>t.isEqual(e)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class co{get id(){return this._key.path.lastSegment()}get ref(){return new Os(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new uo(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(lo("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}}class uo extends co{data(){return super.data()}}function lo(t,e){return"string"==typeof e?so(t,e):e instanceof qs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}}class fo extends co{exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new po(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(lo("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}}class po extends fo{data(t={}){return super.data(t)}}class go{get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new po(this._firestore,this._userDataWriter,n.key,n,new ho(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new b(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map((n=>({type:"added",doc:new po(t._firestore,t._userDataWriter,n.doc.key,n.doc,new ho(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++})))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter((t=>e||3!==t.type)).map((e=>{const r=new po(t._firestore,t._userDataWriter,e.doc.key,e.doc,new ho(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:mo(e.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new ho(r.hasPendingWrites,r.fromCache),this.query=n}}function mo(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return v()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function yo(t){if("L"===t.limitType&&0===t.explicitOrderBy.length)throw new b(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vo{convertValue(t,e="none"){switch(It(t)){case 0:return null;case 1:return t.booleanValue;case 2:return dt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(ft(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw v()}}convertObject(t,e){const n={};return tt(t.fields,((t,r)=>{n[t]=this.convertValue(r,e)})),n}convertGeoPoint(t){return new Gs(dt(t.latitude),dt(t.longitude))}convertArray(t,e){return(t.values||[]).map((t=>this.convertValue(t,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=gt(t);return null==n?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(mt(t));default:return null}}convertTimestamp(t){const e=ht(t);return new P(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);_(Zn(n));const r=new vt(n.get(1),n.get(3)),i=new j(n.popFirst(5));return r.isEqual(e)||g(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _o(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class Eo extends vo{convertBytes(t){return new $s(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Os(this.firestore,null,e)}constructor(t){super(),this.firestore=t}}function wo(t,e,n){t=Cs(t,Os);const r=Cs(t.firestore,Fs),i=_o(t.converter,e,n);return Io(r,[Xs(Js(r),"setDoc",t._key,i,null!==t.converter,n).toMutation(t._key,Ue.none())])}function bo(t,...e){var n,r,i;t=(0,a.getModularInstance)(t);let s={includeMetadataChanges:!1},o=0;"object"!=typeof e[o]||Ms(e[o])||(s=e[o],o++);const c={includeMetadataChanges:s.includeMetadataChanges};if(Ms(e[o])){const t=e[o];e[o]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[o+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[o+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof Os)l=Cs(t.firestore,Fs),h=ae(t._key.path),u={next:n=>{e[o]&&e[o](To(l,t,n))},error:e[o+1],complete:e[o+2]};else{const n=Cs(t,Ls);l=Cs(n.firestore,Fs),h=n._query;const r=new Eo(l);u={next:t=>{e[o]&&e[o](new go(l,r,n,t))},error:e[o+1],complete:e[o+2]},yo(t._query)}return function(t,e,n,r){const i=new ys(r),s=new qi(e,i,n);return t.asyncQueue.enqueueAndForget((async()=>Mi(await Ts(t),s))),()=>{i.Tc(),t.asyncQueue.enqueueAndForget((async()=>Fi(await Ts(t),s)))}}(Bs(l),h,c,u)}function Io(t,e){return function(t,e){const n=new I;return t.asyncQueue.enqueueAndForget((async()=>async function(t,e,n){const r=ps(t);try{const t=await function(t,e){const n=E(t),r=P.now(),i=e.reduce(((t,e)=>t.add(e.key)),pn());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(t=>{let a=sn(),c=pn();return n.Ui.getEntries(t,i).next((t=>{a=t,a.forEach(((t,e)=>{e.isValidDocument()||(c=c.add(t))}))})).next((()=>n.localDocuments.getOverlayedDocuments(t,a))).next((i=>{s=i;const o=[];for(const t of e){const e=qe(t,s.get(t.key).overlayedDocument);null!=e&&o.push(new Ge(t.key,e,Ft(e.value.mapValue),Ue.exists(!0)))}return n.mutationQueue.addMutationBatch(t,r,o,e)})).next((e=>{o=e;const r=e.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(t,e.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:cn(s)})))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.oc[t.currentUser.toKey()];r||(r=new nt(L)),r=r.insert(e,n),t.oc[t.currentUser.toKey()]=r}(r,t.batchId,n),await ls(r,t.changes),await yi(r.remoteStore)}catch(t){const e=Di(t,"Failed to persist write");n.reject(e)}}(await Is(t),e,n))),n.promise}(Bs(t),e)}function To(t,e,n){const r=n.docs.get(e._key),i=new Eo(t);return new fo(t,i,e._key,r,new ho(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(t,e=!0){var n;n=r.SDK_VERSION,h=n,(0,r._registerComponent)(new(0,i.Component)("firestore",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=new Fs(r,new A(t.getProvider("auth-internal")),new R(t.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:e},n),i._setSettings(n),i}),"PUBLIC")),(0,r.registerVersion)(u,"3.4.12",t),(0,r.registerVersion)(u,"3.4.12","esm2017")}()})),s.register("lW9Fu",(function(e,r){t(e.exports,"createWebChannelTransport",(function(){return ar})),t(e.exports,"getStatEventTarget",(function(){return cr})),t(e.exports,"ErrorCode",(function(){return ur})),t(e.exports,"EventType",(function(){return lr})),t(e.exports,"Event",(function(){return hr})),t(e.exports,"Stat",(function(){return dr})),t(e.exports,"FetchXmlHttpFactory",(function(){return fr})),t(e.exports,"WebChannel",(function(){return pr})),t(e.exports,"XhrIo",(function(){return gr}));var i,s="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==n?n:"undefined"!=typeof self?self:{},o={},a=a||{},c=s||self;function u(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),f=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:g).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function _(){this.s=this.s,this.o=this.o}var E={};_.prototype.s=!1,_.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++f)}(this);delete E[t]}},_.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const w=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},b=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i="string"==typeof t?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function I(t){return Array.prototype.concat.apply([],arguments)}function T(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function S(t){return/^[\s\xa0]*$/.test(t)}var A,N=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function k(t,e){return-1!=t.indexOf(e)}function C(t,e){return t<e?-1:t>e?1:0}t:{var R=c.navigator;if(R){var D=R.userAgent;if(D){A=D;break t}}A=""}function O(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function L(t){const e={};for(const n in t)e[n]=t[n];return e}var x="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(t,e){let n,r;for(let e=1;e<arguments.length;e++){for(n in r=arguments[e],r)t[n]=r[n];for(let e=0;e<x.length;e++)n=x[e],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function U(t){return U[" "](t),t}U[" "]=u;var M,F,V=k(A,"Opera"),B=k(A,"Trident")||k(A,"MSIE"),j=k(A,"Edge"),q=j||B,$=k(A,"Gecko")&&!(k(A.toLowerCase(),"webkit")&&!k(A,"Edge"))&&!(k(A,"Trident")||k(A,"MSIE"))&&!k(A,"Edge"),K=k(A.toLowerCase(),"webkit")&&!k(A,"Edge");function G(){var t=c.document;return t?t.documentMode:void 0}t:{var H="",z=(F=A,$?/rv:([^\);]+)(\)|;)/.exec(F):j?/Edge\/([\d\.]+)/.exec(F):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):K?/WebKit\/(\S+)/.exec(F):V?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(z&&(H=z?z[1]:""),B){var W=G();if(null!=W&&W>parseFloat(H)){M=String(W);break t}}M=H}var Q,Y={};function J(){return function(t){var e=Y;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){let t=0;const e=N(String(M)).split("."),n=N("9").split("."),r=Math.max(e.length,n.length);for(let o=0;0==t&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;t=C(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||C(0==i[2].length,0==s[2].length)||C(i[2],s[2]),i=i[3],s=s[3]}while(0==t)}return 0<=t}))}if(c.document&&B){var X=G();Q=X||(parseInt(M,10)||void 0)}else Q=void 0;var Z=Q,tt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{c.addEventListener("test",u,e),c.removeEventListener("test",u,e)}catch(t){}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function nt(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if($){t:{try{U(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nt.Z.h.call(this)}}et.prototype.h=function(){this.defaultPrevented=!0},v(nt,et);var rt={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),st=0;function ot(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++st,this.ca=this.fa=!1}function at(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ct(t){this.src=t,this.g={},this.h=0}function ut(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=w(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(at(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ct.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=lt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ot(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var ht="closure_lm_"+(1e6*Math.random()|0),dt={};function ft(t,e,n,r,i){if(r&&r.once)return gt(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)ft(t,e[s],n,r,i);return null}return n=bt(n),t&&t[it]?t.N(e,n,h(r)?!!r.capture:!!r,i):pt(t,e,n,!1,r,i)}function pt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=Et(t);if(a||(t[ht]=a=new ct(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){function t(n){return e.call(t.src,t.listener,n)}var e=_t;return t}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(vt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function gt(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)gt(t,e[s],n,r,i);return null}return n=bt(n),t&&t[it]?t.O(e,n,h(r)?!!r.capture:!!r,i):pt(t,e,n,!0,r,i)}function mt(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)mt(t,e[s],n,r,i);else r=h(r)?!!r.capture:!!r,n=bt(n),t&&t[it]?(t=t.i,(e=String(e).toString())in t.g&&(-1<(n=lt(s=t.g[e],n,r,i))&&(at(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete t.g[e],t.h--)))):t&&(t=Et(t))&&(e=t.g[e.toString()],t=-1,e&&(t=lt(e,n,r,i)),(n=-1<t?e[t]:null)&&yt(n))}function yt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[it])ut(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(vt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Et(e))?(ut(n,t),0==n.h&&(n.src=null,e[ht]=null)):at(t)}}}function vt(t){return t in dt?dt[t]:dt[t]="on"+t}function _t(t,e){if(t.ca)t=!0;else{e=new nt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&yt(t),t=n.call(r,e)}return t}function Et(t){return(t=t[ht])instanceof ct?t:null}var wt="__closure_events_fn_"+(1e9*Math.random()>>>0);function bt(t){return"function"==typeof t?t:(t[wt]||(t[wt]=function(e){return t.handleEvent(e)}),t[wt])}function It(){_.call(this),this.i=new ct(this),this.P=this,this.I=null}function Tt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;P(e=new et(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=St(o,r,!0,e)&&i}if(i=St(o=e.g=t,r,!0,e)&&i,i=St(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=St(o=e.g=n[s],r,!1,e)&&i}function St(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ut(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(It,_),It.prototype[it]=!0,It.prototype.removeEventListener=function(t,e,n,r){mt(this,t,e,n,r)},It.prototype.M=function(){if(It.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)at(n[r]);delete e.g[t],e.h--}}this.I=null},It.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},It.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var At=c.JSON.stringify;function Nt(){var t=xt;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var kt,Ct=new class{get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}}((()=>new Rt),(t=>t.reset()));class Rt{set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}constructor(){this.next=this.g=this.h=null}}function Dt(t){c.setTimeout((()=>{throw t}),0)}function Ot(t,e){kt||function(){var t=c.Promise.resolve(void 0);kt=function(){t.then(Pt)}}(),Lt||(kt(),Lt=!0),xt.add(t,e)}var Lt=!1,xt=new class{add(t,e){const n=Ct.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n}constructor(){this.h=this.g=null}};function Pt(){for(var t;t=Nt();){try{t.h.call(t.g)}catch(t){Dt(t)}var e=Ct;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Lt=!1}function Ut(t,e){It.call(this),this.h=t||1,this.g=e||c,this.j=m(this.kb,this),this.l=Date.now()}function Mt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Ft(t,e,n){if("function"==typeof t)n&&(t=m(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function Vt(t){t.g=Ft((()=>{t.g=null,t.i&&(t.i=!1,Vt(t))}),t.j);const e=t.h;t.h=null,t.m.apply(null,e)}v(Ut,It),(i=Ut.prototype).da=!1,i.S=null,i.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Tt(this,"tick"),this.da&&(Mt(this),this.start()))}},i.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ut.Z.M.call(this),Mt(this),delete this.g};class Bt extends _{l(t){this.h=arguments,this.g?this.i=!0:Vt(this)}M(){super.M(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}}function jt(t){_.call(this),this.h=t,this.g={}}v(jt,_);var qt=[];function $t(t,e,n,r){Array.isArray(n)||(n&&(qt[0]=n.toString()),n=qt);for(var i=0;i<n.length;i++){var s=ft(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function Kt(t){O(t.g,(function(t,e){this.g.hasOwnProperty(e)&&yt(t)}),t),t.g={}}function Gt(){this.g=!0}function Ht(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return At(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}jt.prototype.M=function(){jt.Z.M.call(this),Kt(this)},jt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gt.prototype.Aa=function(){this.g=!1},Gt.prototype.info=function(){};var zt={},Wt=null;function Qt(){return Wt=Wt||new It}function Yt(t){et.call(this,zt.Ma,t)}function Jt(t){const e=Qt();Tt(e,new Yt(e,t))}function Xt(t,e){et.call(this,zt.STAT_EVENT,t),this.stat=e}function Zt(t){const e=Qt();Tt(e,new Xt(e,t))}function te(t,e){et.call(this,zt.Na,t),this.size=e}function ee(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}zt.Ma="serverreachability",v(Yt,et),zt.STAT_EVENT="statevent",v(Xt,et),zt.Na="timingevent",v(te,et);var ne={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},re={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function ie(){}function se(t){return t.h||(t.h=t.i())}function oe(){}ie.prototype.h=null;var ae,ce={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ue(){et.call(this,"d")}function le(){et.call(this,"c")}function he(){}function de(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new jt(this),this.P=pe,t=q?125:void 0,this.W=new Ut(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}v(ue,et),v(le,et),v(he,ie),he.prototype.g=function(){return new XMLHttpRequest},he.prototype.i=function(){return{}},ae=new he;var pe=45e3,ge={},me={};function ye(t,e,n){t.K=1,t.v=Be(xe(e)),t.s=n,t.U=!0,ve(t,null)}function ve(t,e){t.F=Date.now(),be(t),t.A=xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Ze(n.h,"t",r),t.C=0,n=t.l.H,t.h=new fe,t.g=tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Bt(m(t.Ia,t,t.g),t.O)),$t(t.V,t.g,"readystatechange",t.gb),e=t.H?L(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Jt(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function _e(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function Ee(t,e,n){let r,i=!0;for(;!t.I&&t.C<n.length;){if(r=we(t,n),r==me){4==e&&(t.o=4,Zt(14),i=!1),Ht(t.j,t.m,null,"[Incomplete Response]");break}if(r==ge){t.o=4,Zt(15),Ht(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ht(t.j,t.m,r,null),Ne(t,r)}_e(t)&&r!=me&&r!=ge&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Zt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Hn(e),e.L=!0,Zt(11))):(Ht(t.j,t.m,n,"[Invalid Chunked Response]"),Ae(t),Se(t))}function we(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?me:(n=Number(e.substring(n,r)),isNaN(n)?ge:(r+=1)+n>e.length?me:(e=e.substr(r,n),t.C=r+n,e))}function be(t){t.Y=Date.now()+t.P,Ie(t,t.P)}function Ie(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=ee(m(t.eb,t),e)}function Te(t){t.B&&(c.clearTimeout(t.B),t.B=null)}function Se(t){0==t.l.G||t.I||Qn(t.l,t)}function Ae(t){Te(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,Mt(t.W),Kt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ne(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||on(n.i,t)))if(n.I=t.N,!t.J&&on(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Wn(n),Mn(n)}Gn(n),Zt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=ee(m(n.ab,n),6e3));if(1>=sn(n.i)&&n.ka){try{n.ka()}catch(t){}n.ka=void 0}}else Jn(n,11)}else if((t.J||n.g==t)&&Wn(n),!S(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.U=u[0],u=u[1],2==n.G)if("c"==u[0]){n.J=u[1],n.la=u[2];const e=u[3];null!=e&&(n.ma=e,n.h.info("VER="+n.ma));const i=u[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const l=u[5];null!=l&&"number"==typeof l&&0<l&&(r=1.5*l,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=t.g;if(h){const t=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(t){var s=r.i;!s.g&&(k(t,"spdy")||k(t,"quic")||k(t,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(an(s,s.h),s.h=null))}if(r.D){const t=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;t&&(r.sa=t,Ve(r.F,r.D,t))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var o=t;if((r=n).oa=Zn(r,r.H?r.la:null,r.W),o.J){cn(r.i,o);var a=o,c=r.K;c&&a.setTimeout(c),a.B&&(Te(a),be(a)),r.g=o}else Kn(r);0<n.l.length&&Bn(n)}else"stop"!=u[0]&&"close"!=u[0]||Jn(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?Jn(n,7):Un(n):"noop"!=u[0]&&n.j&&n.j.wa(u),n.A=0)}Jt(4)}catch(t){}}function ke(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)b(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ce(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ce)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function Re(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];De(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)De(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function De(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(i=de.prototype).setTimeout=function(t){this.P=t},i.gb=function(t){t=t.target;const e=this.L;e&&3==Dn(t)?e.l():this.Ia(t)},i.Ia=function(t){try{if(t==this.g)t:{const h=Dn(this.g);var e=this.g.Da();const d=this.g.ba();if(!(3>h)&&(3!=h||q||this.g&&(this.h.h||this.g.ga()||On(this.g)))){this.I||4!=h||7==e||Jt(8==e||0>=d?3:2),Te(this);var n=this.g.ba();this.N=n;e:if(_e(this)){var r=On(this.g);t="";var i=r.length,s=4==Dn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ae(this),Se(this);var o="";break e}this.h.i=new c.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,h,n),this.i){if(this.$&&!this.J){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(a)){var l=a;break e}}l=null}if(!(n=l)){this.i=!1,this.o=3,Zt(12),Ae(this),Se(this);break t}Ht(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ne(this,n)}this.U?(Ee(this,h,o),q&&this.i&&3==h&&($t(this.V,this.W,"tick",this.fb),this.W.start())):(Ht(this.j,this.m,o,null),Ne(this,o)),4==h&&Ae(this),this.i&&!this.I&&(4==h?Qn(this.l,this):(this.i=!1,be(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,Zt(12)):(this.o=0,Zt(13)),Ae(this),Se(this)}}}catch(t){}},i.fb=function(){if(this.g){var t=Dn(this.g),e=this.g.ga();this.C<e.length&&(Te(this),Ee(this,t,e),this.i&&4!=t&&be(this))}},i.cancel=function(){this.I=!0,Ae(this)},i.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Jt(3),Zt(17)),Ae(this),this.o=2,Se(this)):Ie(this,this.Y-t)},(i=Ce.prototype).R=function(){Re(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},i.T=function(){return Re(this),this.g.concat()},i.get=function(t,e){return De(this.h,t)?this.h[t]:e},i.set=function(t,e){De(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},i.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Oe=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Le(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Le){this.g=void 0!==e?e:t.g,Pe(this,t.j),this.s=t.s,Ue(this,t.i),Me(this,t.m),this.l=t.l,e=t.h;var n=new Qe;n.i=e.i,e.g&&(n.g=new Ce(e.g),n.h=e.h),Fe(this,n),this.o=t.o}else t&&(n=String(t).match(Oe))?(this.g=!!e,Pe(this,n[1]||"",!0),this.s=je(n[2]||""),Ue(this,n[3]||"",!0),Me(this,n[4]),this.l=je(n[5]||"",!0),Fe(this,n[6]||"",!0),this.o=je(n[7]||"")):(this.g=!!e,this.h=new Qe(null,this.g))}function xe(t){return new Le(t)}function Pe(t,e,n){t.j=n?je(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ue(t,e,n){t.i=n?je(e,!0):e}function Me(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Fe(t,e,n){e instanceof Qe?(t.h=e,function(t,e){e&&!t.j&&(Ye(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Je(this,e),Ze(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=qe(e,ze)),t.h=new Qe(e,t.g))}function Ve(t,e,n){t.h.set(e,n)}function Be(t){return Ve(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,$e),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function $e(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Le.prototype.toString=function(){var t=[],e=this.j;e&&t.push(qe(e,Ke,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(qe(e,Ke,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(qe(n,"/"==n.charAt(0)?He:Ge,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",qe(n,We)),t.join("")};var Ke=/[#\/\?@]/g,Ge=/[#\?:]/g,He=/[#\?]/g,ze=/[#\?@]/g,We=/#/g;function Qe(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ye(t){t.g||(t.g=new Ce,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Je(t,e){Ye(t),e=tn(t,e),De(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,De((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&Re(t)))}function Xe(t,e){return Ye(t),e=tn(t,e),De(t.g.h,e)}function Ze(t,e,n){Je(t,e),0<n.length&&(t.i=null,t.g.set(tn(t,e),T(n)),t.h+=n.length)}function tn(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(i=Qe.prototype).add=function(t,e){Ye(this),this.i=null,t=tn(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},i.forEach=function(t,e){Ye(this),this.g.forEach((function(n,r){b(n,(function(n){t.call(e,n,r,this)}),this)}),this)},i.T=function(){Ye(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},i.R=function(t){Ye(this);var e=[];if("string"==typeof t)Xe(this,t)&&(e=I(e,this.g.get(tn(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=I(e,t[n])}return e},i.set=function(t,e){return Ye(this),this.i=null,Xe(this,t=tn(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},i.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function en(t){this.l=t||nn,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function sn(t){return t.h?1:t.g?t.g.size:0}function on(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function an(t,e){t.g?t.g.add(e):t.h=e}function cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function un(t){if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return T(t.i)}function ln(){}function hn(){this.g=new ln}function dn(t,e,n){const r=n||"";try{ke(t,(function(t,n){let i=t;h(t)&&(i=At(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function fn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}function gn(t,e){It.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=mn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en.prototype.cancel=function(){if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const t of this.g.values())t.cancel();this.g.clear()}},ln.prototype.stringify=function(t){return c.JSON.stringify(t,void 0)},ln.prototype.parse=function(t){return c.JSON.parse(t,void 0)},v(pn,ie),pn.prototype.g=function(){return new gn(this.l,this.j)},pn.prototype.i=function(t){return function(){return t}}({}),v(gn,It);var mn=0;function yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,_n(t)}function _n(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(i=gn.prototype).open=function(t,e){if(this.readyState!=mn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,_n(this)},i.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||c).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=mn},i.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,_n(this)),this.g&&(this.readyState=3,_n(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},i.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vn(this):_n(this),3==this.readyState&&yn(this)}},i.Ua=function(t){this.g&&(this.response=this.responseText=t,vn(this))},i.Ta=function(t){this.g&&(this.response=t,vn(this))},i.ha=function(){this.g&&vn(this)},i.setRequestHeader=function(t,e){this.v.append(t,e)},i.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(gn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var En=c.JSON.parse;function wn(t){It.call(this),this.headers=new Ce,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=bn,this.K=this.L=!1}v(wn,It);var bn="",In=/^https?$/i,Tn=["POST","PUT"];function Sn(t){return"content-type"==t.toLowerCase()}function An(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,Nn(t),Cn(t)}function Nn(t){t.D||(t.D=!0,Tt(t,"complete"),Tt(t,"error"))}function kn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Dn(t)||2!=t.ba()))if(t.v&&4==Dn(t))Ft(t.Fa,0,t);else if(Tt(t,"readystatechange"),4==Dn(t)){t.h=!1;try{const a=t.ba();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break t;default:e=!1}var n;if(!(n=e)){var r;if(r=0===a){var i=String(t.H).match(Oe)[1]||null;if(!i&&c.self&&c.self.location){var s=c.self.location.protocol;i=s.substr(0,s.length-1)}r=!In.test(i?i.toLowerCase():"")}n=r}if(n)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var o=2<Dn(t)?t.g.statusText:""}catch(t){o=""}t.j=o+" ["+t.ba()+"]",Nn(t)}}finally{Cn(t)}}}function Cn(t,e){if(t.g){Rn(t);const n=t.g,r=t.C[0]?u:null;t.g=null,t.C=null,e||Tt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Rn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function Dn(t){return t.g?t.g.readyState:0}function On(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case bn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Ln(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){let e="";return O(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Ve(t,e,n))}function xn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Pn(t){this.za=0,this.l=[],this.h=new Gt,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=xn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=xn("baseRetryDelayMs",5e3,t),this.$a=xn("retryDelaySeedMs",1e4,t),this.Ya=xn("forwardChannelMaxRetries",2,t),this.ra=xn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new en(t&&t.concurrentRequestLimit),this.Ca=new hn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function Un(t){if(Fn(t),3==t.G){var e=t.V++,n=xe(t.F);Ve(n,"SID",t.J),Ve(n,"RID",e),Ve(n,"TYPE","terminate"),qn(t,n),(e=new de(t,t.h,e,void 0)).K=2,e.v=Be(xe(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(e.v.toString(),"")),!n&&c.Image&&((new Image).src=e.v,n=!0),n||(e.g=tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),be(e)}Xn(t)}function Mn(t){t.g&&(Hn(t),t.g.cancel(),t.g=null)}function Fn(t){Mn(t),t.u&&(c.clearTimeout(t.u),t.u=null),Wn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function Vn(t,e){t.l.push(new class{constructor(t,e){this.h=t,this.g=e}}(t.Za++,e)),3==t.G&&Bn(t)}function Bn(t){rn(t.i)||t.m||(t.m=!0,Ot(t.Ha,t),t.C=0)}function jn(t,e){var n;n=e?e.m:t.V++;const r=xe(t.F);Ve(r,"SID",t.J),Ve(r,"RID",n),Ve(r,"AID",t.U),qn(t,r),t.o&&t.s&&Ln(r,t.o,t.s),n=new de(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=$n(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),an(t.i,n),ye(n,r,e)}function qn(t,e){t.j&&ke({},(function(t,n){Ve(e,n,t)}))}function $n(t,e,n){n=Math.min(t.l.length,n);var r=t.j?m(t.j.Oa,t.j,t):null;t:{var i=t.l;let e=-1;for(;;){const t=["count="+n];-1==e?0<n?(e=i[0].h,t.push("ofs="+e)):e=0:t.push("ofs="+e);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=e,0>n)e=Math.max(0,i[o].h-100),s=!1;else try{dn(a,t,"req"+n+"_")}catch(t){r&&r(a)}}if(s){r=t.join("&");break t}}}return t=t.l.splice(0,n),e.D=t,r}function Kn(t){t.g||t.u||(t.Y=1,Ot(t.Ga,t),t.A=0)}function Gn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=ee(m(t.Ga,t),Yn(t,t.A)),t.A++,!0)}function Hn(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function zn(t){t.g=new de(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=xe(t.oa);Ve(e,"RID","rpc"),Ve(e,"SID",t.J),Ve(e,"CI",t.N?"0":"1"),Ve(e,"AID",t.U),qn(t,e),Ve(e,"TYPE","xmlhttp"),t.o&&t.s&&Ln(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Be(xe(e)),n.s=null,n.U=!0,ve(n,t)}function Wn(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Qn(t,e){var n=null;if(t.g==e){Wn(t),Hn(t),t.g=null;var r=2}else{if(!on(t.i,e))return;n=e.D,cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Tt(r=Qt(),new te(r,n,e,i)),Bn(t)}else Kn(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(sn(t.i)>=t.i.j-(t.m?1:0)||(t.m?(t.l=e.D.concat(t.l),0):1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya)||(t.m=ee(m(t.Ha,t,e),Yn(t,t.C)),t.C++,0)))}(t,e)||2==r&&Gn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Jn(t,5);break;case 4:Jn(t,10);break;case 3:Jn(t,6);break;default:Jn(t,2)}}function Yn(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Jn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=m(t.jb,t);n||(n=new Le("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Pe(n,"https"),Be(n)),function(t,e){const n=new Gt;if(c.Image){const r=new Image;r.onload=y(fn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(fn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(fn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(fn,n,r,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Zt(2);t.G=0,t.j&&t.j.va(e),Xn(t),Fn(t)}function Xn(t){t.G=0,t.I=-1,t.j&&(0==un(t.i).length&&0==t.l.length||(t.i.i.length=0,T(t.l),t.l.length=0),t.j.ua())}function Zn(t,e,n){let r=function(t){return t instanceof Le?xe(t):new Le(t,void 0)}(n);if(""!=r.i)e&&Ue(r,e+"."+r.i),Me(r,r.m);else{const t=c.location;r=function(t,e,n,r){var i=new Le(null,void 0);return t&&Pe(i,t),e&&Ue(i,e),n&&Me(i,n),r&&(i.l=r),i}(t.protocol,e?e+"."+t.hostname:t.hostname,+t.port,n)}return t.aa&&O(t.aa,(function(t,e){Ve(r,e,t)})),e=t.D,n=t.sa,e&&n&&Ve(r,e,n),Ve(r,"VER",t.ma),qn(t,r),r}function tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new wn(new pn({ib:!0})):new wn(t.qa)).L=t.H,e}function er(){}function nr(){if(B&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(t,e){It.call(this),this.g=new Pn(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!S(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new or(this)}function ir(t){ue.call(this);var e=t.__sm__;if(e){t:{for(const n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sr(){le.call(this),this.status=1}function or(t){this.g=t}(i=wn.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():ae.g(),this.C=this.u?se(this.u):se(ae),this.g.onreadystatechange=m(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void An(this,t)}t=n||"";const i=new Ce(this.headers);r&&ke(r,(function(t,e){i.set(e,t)})),r=function(t){t:{var e=Sn;const n=t.length,r="string"==typeof t?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=c.FormData&&t instanceof c.FormData,!(0<=w(Tn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(t){return B&&J()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=m(this.pa,this)):this.A=Ft(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){An(this,t)}},i.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))},i.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),Cn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Cn(this,!0)),wn.Z.M.call(this)},i.Fa=function(){this.s||(this.F||this.v||this.l?kn(this):this.cb())},i.cb=function(){kn(this)},i.ba=function(){try{return 2<Dn(this)?this.g.status:-1}catch(t){return-1}},i.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},i.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),En(e)}},i.Da=function(){return this.m},i.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(i=Pn.prototype).ma=8,i.G=1,i.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},i.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new de(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=L(s),P(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)t:{for(var e=0,n=0;n<this.l.length;n++){var r=this.l[n];if(void 0===(r="__data__"in r.g&&"string"==typeof(r=r.g.__data__)?r.length:void 0))break;if(4096<(e+=r)){e=n;break t}if(4096===e||n===this.l.length-1){e=n+1;break t}}e=1e3}else e=1e3;e=$n(this,i,e),Ve(n=xe(this.F),"RID",t),Ve(n,"CVER",22),this.D&&Ve(n,"X-HTTP-Session-Id",this.D),qn(this,n),this.o&&s&&Ln(n,this.o,s),an(this.i,i),this.Ra&&Ve(n,"TYPE","init"),this.ja?(Ve(n,"$req",e),Ve(n,"SID","null"),i.$=!0,ye(i,n,null)):ye(i,n,e),this.G=2}}else 3==this.G&&(t?jn(this,t):0==this.l.length||rn(this.i)||jn(this))},i.Ga=function(){if(this.u=null,zn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ee(m(this.bb,this),t)}},i.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Zt(10),Mn(this),zn(this))},i.ab=function(){null!=this.v&&(this.v=null,Mn(this),Gn(this),Zt(19))},i.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Zt(2)):(this.h.info("Failed to ping google.com"),Zt(1))},(i=er.prototype).xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Oa=function(){},nr.prototype.g=function(t,e){return new rr(t,e)},v(rr,It),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Ot(m(t.hb,t,e))),Zt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zn(t,null,t.W),Bn(t)},rr.prototype.close=function(){Un(this.g)},rr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Vn(this.g,e)}else this.v?((e={}).__data__=At(t),Vn(this.g,e)):Vn(this.g,t)},rr.prototype.M=function(){this.g.j=null,delete this.j,Un(this.g),delete this.g,rr.Z.M.call(this)},v(ir,ue),v(sr,le),v(or,er),or.prototype.xa=function(){Tt(this.g,"a")},or.prototype.wa=function(t){Tt(this.g,new ir(t))},or.prototype.va=function(t){Tt(this.g,new sr(t))},or.prototype.ua=function(){Tt(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,ne.NO_ERROR=0,ne.TIMEOUT=8,ne.HTTP_ERROR=6,re.COMPLETE="complete",oe.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",It.prototype.listen=It.prototype.N,wn.prototype.listenOnce=wn.prototype.O,wn.prototype.getLastError=wn.prototype.La,wn.prototype.getLastErrorCode=wn.prototype.Da,wn.prototype.getStatus=wn.prototype.ba,wn.prototype.getResponseJson=wn.prototype.Qa,wn.prototype.getResponseText=wn.prototype.ga,wn.prototype.send=wn.prototype.ea;var ar=o.createWebChannelTransport=function(){return new nr},cr=o.getStatEventTarget=function(){return Qt()},ur=o.ErrorCode=ne,lr=o.EventType=re,hr=o.Event=zt,dr=o.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},fr=o.FetchXmlHttpFactory=pn,pr=o.WebChannel=oe,gr=o.XhrIo=wn})),s.register("lMgIy",(function(t,e){const n=document.querySelector("body"),r=document.querySelector(".icon__button"),i=document.querySelector(".icon__sun"),s=document.querySelector(".icon__moon"),o="theme-mode",a="light",c="dark";r.addEventListener("click",(function(t){localStorage.getItem(o)===a?(u(),localStorage.setItem(o,c)):(l(),localStorage.setItem(o,a))}));const u=()=>{n.classList.add("dark__theme"),s.classList.remove("icon__item--hidden"),i.classList.add("icon__item--hidden")},l=()=>{n.classList.remove("dark__theme"),s.classList.add("icon__item--hidden"),i.classList.remove("icon__item--hidden")};!function(){const t=localStorage.getItem(o);if(!t)return l(),void localStorage.setItem(o,a);switch(t){case a:l();break;case c:u()}}()})),s.register("7bYU0",(function(t,e){var n=s("dvsic"),r=s("dNTj1");const i=document.querySelector(".footer-text__link"),o=document.querySelector(".backdrop-team"),a=document.querySelector(".modal-team__button"),c=document.querySelector("body"),u=document.querySelector(".modal-team__container"),l=document.querySelector(".footer-text__icon");i.addEventListener("click",(function(t){t.preventDefault(),o.classList.remove("is-hidden"),c.classList.add("modal-team-open"),function(){let t=(0,n.getLanguageFromLS)()===r.Movie.language.ENGLISH,e=t?"Developer":"Розробник",i=t?"Oleksandr Sainchuk":"Олександр Саінчук",s=t?"Andrii Kurka":"Андрій Курка",o=t?"Oleksandr Tikka":"Олександр Тікка",a=t?"Svitlana Velychko":"Світлана Величко",c=t?"Roman Tsiukh":"Роман Цюх",l=t?"Serhii Boiko":"Сергій Бойко",h=t?"Kateryna Konovalova":"Катерина Коновалова",d=t?"Vladyslav Lata":"Владислав Лата",f=t?"Evgeniy Muzalevskiy":"Євгеній Музалєвський",p=t?"Olena Diachenko":"Олена Дяченко",g=t?"Natalia Malynovska":"Наталя Малиновська",m=t?"Alyona Garnyk":"Альона Гарнюк";const y=`<ul class="team__list">\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="https://ca.slack-edge.com/T03ANNS1UBS-U03KXCM677Z-46aad6e7193c-512"\n              alt=${i}\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/Indisputable09" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/Indisputable09">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${i}</p>\n          <p class="team__role">${t?"Team Lead":"Лідер команди"}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="./images/andrii.jpg"\n              alt=${s}\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/Andrey1914" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/Andrey1914">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${s}</p>\n          <p class="team__role">${t?"Scrum master":"Скрам-майстер"}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="./images/oleksandr.jpg"\n              alt=${o}\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/AleksandrTikka" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/AleksandrTikka">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${o}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img${e}\n              class="team__img"\n              src="https://ca.slack-edge.com/T03ANNS1UBS-U03AHHL83HV-c974944bd586-512"\n              alt=${a}\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/SvitlanaVelychko" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/SvitlanaVelychko">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${a}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="./images/roman.jpg"\n              alt=${c}\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/RomanTsiukh" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/RomanTsiukh">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${c}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="https://focus-online.ru/sites/default/files/photo_doc2.jpg"\n              alt=${l}\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/1-Serg-1" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/1-Serg-1">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${l}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="https://static.tildacdn.com/tild3432-3639-4338-b034-666366373331/W-81.jpg"\n              alt="${h}"\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/Konovalova-Kateryna" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/Konovalova-Kateryna">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${h}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="https://focus-online.ru/sites/default/files/photo_doc2.jpg"\n              alt="${d}"\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/VladyslavLata" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/VladyslavLata">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${d}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="./images/team/evgeniy.jpg"\n              alt="${f}"\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/MEvgeniy21" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/MEvgeniy21">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${f}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="https://static.tildacdn.com/tild3432-3639-4338-b034-666366373331/W-81.jpg"\n              alt="${p}"\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/ElenaDiachenko" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/ElenaDiachenko">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${p}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="./images/team/Natat.jpg"\n              alt="${g}"\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://github.com/NataliaMalynovska" target="_blank">\n                    <img class="overlay__img" src="./images/gh_logo.png" alt="https://github.com/NataliaMalynovska">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${g}</p>\n          <p class="team__role">${e}</p>\n        </li>\n        <li class="team__item">\n          <div class="team__wrapper">\n            <img\n              class="team__img"\n              src="./images/mentor.jpg"\n              alt="${m}"\n            />\n            <div class="team__overlay">\n                <a class="team__link" href="https://indisputable09.github.io/filmoteka-project/" target="_blank">\n                    <img class="overlay__img" src="./images/favicon-32x32.png" alt="https://indisputable09.github.io/filmoteka-project/">\n                </a>\n            </div>\n          </div>\n          <p class="team__name">${m}</p>\n          <p class="team__role">${t?"Mentor":"Ментор"}</p>\n        </li>\n      </ul > `;u.innerHTML=y}(),l.classList.remove("animate__heartBeat")})),a.addEventListener("click",(function(t){o.classList.add("is-hidden"),c.classList.remove("modal-team-open"),l.classList.add("animate__heartBeat")}))})),s.register("8cBDi",(function(t,e){const n=document.querySelector("#switch-form__link-login"),r=document.querySelector("#switch-form__link-sign-up"),i=document.querySelector(".close__button"),s=document.querySelector(".close-login__button"),o=document.querySelector(".sign-up__overlay"),a=document.querySelector(".log-in__overlay"),c=document.querySelector(".login__button"),u=document.querySelector(".signup__button"),l=document.querySelector("body"),h=document.querySelector(".registration__button");function d(t){t.preventDefault(),a.classList.toggle("log-in__overlay--hidden"),o.classList.toggle("sign-up__overlay--hidden")}function f(t){l.classList.remove("modal-open"),a.classList.add("log-in__overlay--hidden"),o.classList.add("sign-up__overlay--hidden")}function p(t){a.classList.remove("log-in__overlay--hidden"),l.classList.add("modal-open")}n.addEventListener("click",d),r.addEventListener("click",d),i.addEventListener("click",f),s.addEventListener("click",f),c.addEventListener("click",p),u.addEventListener("click",(function(t){o.classList.remove("sign-up__overlay--hidden"),l.classList.add("modal-open")})),h.addEventListener("click",p)}));
//# sourceMappingURL=library.9cdbddef.js.map
