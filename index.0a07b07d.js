!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},t.parcelRequired7c6=a),a.register("kMC0W",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return n.default(e)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8NIkP",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}})),a.register("7AJDX",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}})),a.register("8CtQK",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("auk6i",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(!e)return;if("string"==typeof e)return n.default(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n.default(e,t)};var r,n=(r=a("8NIkP"))&&r.__esModule?r:{default:r}})),a.register("8slrw",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){if(Array.isArray(e))return e}})),a.register("ifqQW",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}})),a.register("ge8co",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,r){return o.apply(null,arguments)};var r,n=(r=a("gD1JV"))&&r.__esModule?r:{default:r};function i(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function o(e,t,r){return(o=i()?Reflect.construct:function(e,t,r){var a=[null];a.push.apply(a,t);var i=new(Function.bind.apply(e,a));return r&&n.default(i,r.prototype),i}).apply(null,arguments)}})),a.register("cZGw3",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e){return-1!==Function.toString.call(e).indexOf("[native code]")}})),a.register("2mz0K",(function(e,t){"use strict";Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=n.default(e)););return e};var r,n=(r=a("fVNic"))&&r.__esModule?r:{default:r}}));var i=a("8MBJY"),o=a("a2hTj"),s=function(){"use strict";function t(){e(i)(this,t),this.refs=this.getRefs()}return e(o)(t,[{key:"getRefs",value:function(){var e={};return e.preloader=document.querySelector(".overlay"),e.loader=document.querySelectorAll(".loader"),e}},{key:"enable",value:function(){this.refs.loader.forEach((function(e){e.classList.add("is-off")}))}},{key:"disable",value:function(){this.refs.loader.forEach((function(e){e.classList.remove("is-off")}))}}]),t}(),u=a("4cG42"),c=a("bpxeT"),l=a("2TvXO");a("4cG42");u=a("4cG42"),c=a("bpxeT"),l=a("2TvXO"),u=a("4cG42");var d=a("Jmfug");function f(e){return h.apply(this,arguments)}function h(){return(h=e(c)(e(l).mark((function t(r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem(d.keyLS.LS_GENRE_KEY_EN)||(r.langCurrent=d.keyLS.LS_GENRE_KEY_EN,r.fetchGenre().then((function(e){localStorage.setItem(d.keyLS.LS_GENRE_KEY_EN,JSON.stringify(e.genres))})).catch((function(e){return console.log(e)})),r.langCurrent=d.keyLS.LS_GENRE_KEY_UA,r.fetchGenre().then((function(e){localStorage.setItem(d.keyLS.LS_GENRE_KEY_UA,JSON.stringify(e.genres))})).catch((function(e){return console.log(e)}))),r.langCurrent=(0,d.getLanguageFromLS)();case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=localStorage.getItem(d.keyLS.LS_GENRE_KEY_EN),r="No genres",n="Other",a=(0,d.getLanguageFromLS)();switch(a){case u.Movie.language.ENGLISH:t=localStorage.getItem(d.keyLS.LS_GENRE_KEY_EN),r="No genres",n="Other";break;case u.Movie.language.UKRAINIAN:t=localStorage.getItem(d.keyLS.LS_GENRE_KEY_UA),r="Жанри відсутні",n="Інші"}if(!t||0===e.length)return r;var i=JSON.parse(t),o=i.reduce((function(t,r){return e.includes(r.id)&&t.push(r.name),t}),[]);return 0===o.length?r:o.length>3?"".concat(o[0],", ").concat(o[1],", ").concat(n):o.join(", ")}d=a("Jmfug");var v=new s;function m(e){var t=document.querySelector(".gallery"),r=e.results.map((function(e){return'<li class="card">\n          <a class="card__link" href=""  >\n            <img data-id="'.concat(e.id,'" class="card__img" src="').concat(e.poster_path?u.Movie.IMG_PATH+e.poster_path:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",'" alt="').concat(e.title,'" loading="lazy"/>\n      <div class="card__wrapper">\n            <p class="card__name">').concat(e.title.toUpperCase(),'</p>\n            <p class="card__description">').concat(p(e.genre_ids)," | ").concat((0,d.noYearVariableLang)(e.release_date),'\n            <span class="card__vote">').concat(Math.round(10*e.vote_average)/10,"</span>\n            </p>\n            </div>\n          </a>\n        </li>")})).join("");t.innerHTML=r,v.refs.preloader.classList.add("is-off"),v.enable()}var g="themoviedb-current-data";function y(e){localStorage.setItem(g,JSON.stringify(e))}function k(e){return _.apply(this,arguments)}function _(){return(_=e(c)(e(l).mark((function t(r){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(r);case 3:return e.next=5,r.fetchTrend();case 5:n=e.sent,console.log(n),y(n.results),m(n),r.lastPage=n.total_pages,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function b(e){return I.apply(this,arguments)}function I(){return(I=e(c)(e(l).mark((function t(r){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f(r);case 3:return e.next=5,r.fetchSearch();case 5:n=e.sent,console.log(n),y(n.results),m(n,r.langCurrent),r.lastPage=n.total_pages,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}d=a("Jmfug"),c=a("bpxeT"),l=a("2TvXO"),u=a("4cG42"),d=a("Jmfug"),u=a("4cG42");var w=a("6JEwH"),E={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function S(e){switch(e){case u.Movie.trendTime.DAY:(0,w.disabledEl)(E.btnSwitchDay),(0,w.unlockEl)(E.btnSwitchWeek);break;case u.Movie.trendTime.WEEK:(0,w.disabledEl)(E.btnSwitchWeek),(0,w.unlockEl)(E.btnSwitchDay)}}function x(){(0,w.unlockEl)(E.btnSwitchDay),(0,w.unlockEl)(E.btnSwitchWeek)}E.btnSwitchDay.addEventListener("click",(function(){D.page=1,D.currentTrendTime=u.Movie.trendTime.DAY,k(D),S(u.Movie.trendTime.DAY),L()})),E.btnSwitchWeek.addEventListener("click",(function(){D.page=1,D.currentTrendTime=u.Movie.trendTime.WEEK,k(D),S(u.Movie.trendTime.WEEK),L()}));var T,O=new s,N={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},A=null;function R(){return(R=e(c)(e(l).mark((function t(r){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.disable(),e.prev=1,r.preventDefault(),""!==(A=r.target.query.value.trim())){e.next=8;break}return N.paragraphEl.innerHTML="Enter the name in the search field",O.enable(),e.abrupt("return");case 8:return(T=new(0,u.Movie)(A)).langCurrent=(0,d.getLanguageFromLS)(),e.next=12,T.fetchSearch();case 12:if(0!==(n=e.sent).total_results){e.next=18;break}return r.target.reset(),N.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",O.enable(),e.abrupt("return");case 18:m(n),r.target.reset(),N.paragraphEl.innerHTML="",console.log(n),T.lastPage=n.total_pages,y(n.results),x(),e.next=30;break;case 27:e.prev=27,e.t0=e.catch(1),console.log(e.t0.message);case 30:case"end":return e.stop()}}),t,null,[[1,27]])})))).apply(this,arguments)}function L(){A=null}N.formEl.addEventListener("submit",(function(e){return R.apply(this,arguments)}));var D,C=new s;console.log(C.refs.preloader),null===A&&function(){C.refs.preloader.classList.remove("is-off"),D=new(0,u.Movie);var e=(0,d.getLanguageFromLS)();e?(D.langCurrent=e,(0,d.switchBtnLang)(D.langCurrent)):D.langCurrent=(0,d.setLanguageToLS)(u.Movie.language.ENGLISH);k(D),S(u.Movie.trendTime.DAY)}();u=a("4cG42");(d=a("Jmfug")).refs.btnSwitchEN.addEventListener("click",(function(){null===A?(D.langCurrent=(0,d.setLanguageToLS)(u.Movie.language.ENGLISH),k(D)):(T.langCurrent=(0,d.setLanguageToLS)(u.Movie.language.ENGLISH),b(T))})),d.refs.btnSwitchUA.addEventListener("click",(function(){null===A?(D.langCurrent=(0,d.setLanguageToLS)(u.Movie.language.UKRAINIAN),k(D)):(T.langCurrent=(0,d.setLanguageToLS)(u.Movie.language.UKRAINIAN),b(T))})),a("4cG42");var P=document.querySelector(".scroll-area"),M=document.querySelector(".up-btn"),U=document.querySelector(".icon__button");function F(){P.scrollIntoView({block:"center",behavior:"smooth"})}M.addEventListener("click",F),window.addEventListener("scroll",(function(){scrollY>230&&(U.classList.add("icon__button--opacity"),U.style.position="fixed"),scrollY<230&&(U.classList.remove("icon__button--opacity"),U.style.position="absolute"),scrollY>300?M.classList.remove("is-hidden"):scrollY<300&&M.classList.add("is-hidden")}));var j=new s,V={btnLoadPrevious:document.querySelector(".pagination-page__btn-previous"),btnLoadNext:document.querySelector(".pagination-page__btn-next")};V.btnLoadPrevious.addEventListener("click",(function(){if(j.disable(),null===A?1===D.page:1===T.page)return void j.enable();null===A?D.page-=1:T.page-=1,q(),F()})),V.btnLoadNext.addEventListener("click",(function(){if(j.disable(),null===A?D.page===D.lastPage:T.page===T.lastPage)return;null===A?D.page+=1:T.page+=1,q(),F()}));var H=document.querySelector(".pagination ul");function q(){null===A?k(D):b(T)}!function e(t){!function(e,t){var r="",n=t-1,a=t+1;t>1&&(r+='<li class="btn prev"><span><<</span></li>');t>2&&(e>3&&(r+='<li class="first numb"><span>1</span></li>'),t>3&&(r+='<li class="dots"><span>...</span></li>'));e>2&&(a+=1);t==e?n-=2:t==e-1?n-=1:1==e&&(n=1);for(var i=n;i<=a;i++)i>e||(i<1&&(i=1),r+='<li class="numb '.concat(t==i?"active":"",'"><span>').concat(i,"</span></li>"));t<e-1&&(t<e-2&&(r+='<li class="dots"><span>...</span></li>'),e>3&&(r+='<li class="last numb"><span>'.concat(e,"</span></li>")));t<e&&(r+='<li class="btn next"><span>>></span></li>');H.innerHTML="",H.insertAdjacentHTML("beforeend",r)}(20,t.page);var r={prev:document.querySelector(".prev"),numb:document.querySelectorAll(".numb"),next:document.querySelector(".next")},n=r.prev,a=r.next;r.numb.forEach((function(r){r.addEventListener("click",(function(r){var n=r.target.textContent;t.page=n,q(),e(t)}))})),n&&n.addEventListener("click",(function(){t.page-=1,q(),e(t)})),a&&a.addEventListener("click",(function(){t.page+=1,q(),e(t)}))}(D),a("3nfD2");c=a("bpxeT"),l=a("2TvXO"),u=a("4cG42"),c=a("bpxeT"),l=a("2TvXO"),c=a("bpxeT"),i=a("8MBJY"),o=a("a2hTj");var B=a("hKHmD"),W={};Object.defineProperty(W,"__esModule",{value:!0}),W.default=function(e){return G.default(e)||z.default(e)||J.default(e)||K.default()};var G=Y(a("kMC0W")),z=Y(a("7AJDX")),K=Y(a("8CtQK")),J=Y(a("auk6i"));function Y(e){return e&&e.__esModule?e:{default:e}}l=a("2TvXO"),c=a("bpxeT"),i=a("8MBJY"),o=a("a2hTj");var X={};Object.defineProperty(X,"__esModule",{value:!0}),X.default=function(e,t){return Q.default(e)||$.default(e,t)||ee.default(e,t)||Z.default()};var Q=te(a("8slrw")),$=te(a("7AJDX")),Z=te(a("ifqQW")),ee=te(a("auk6i"));function te(e){return e&&e.__esModule?e:{default:e}}l=a("2TvXO");var re=a("ds8z5"),ne=(i=a("8MBJY"),o=a("a2hTj"),a("eYQtU")),ae={};Object.defineProperty(ae,"__esModule",{value:!0}),ae.default=function(e){return le(e)};var ie=ce(a("ge8co")),oe=ce(a("cZGw3")),se=ce(a("fVNic")),ue=ce(a("gD1JV"));function ce(e){return e&&e.__esModule?e:{default:e}}function le(e){var t="function"==typeof Map?new Map:void 0;return le=function(e){if(null===e||!oe.default(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,r)}function r(){return ie.default(e,arguments,se.default(this).constructor)}return r.prototype=Object.create(e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),ue.default(r,e)},le(e)}var de=a("2MbLg"),fe=function(e){for(var t=[],r=0,n=0;n<e.length;n++){var a=e.charCodeAt(n);a<128?t[r++]=a:a<2048?(t[r++]=a>>6|192,t[r++]=63&a|128):55296==(64512&a)&&n+1<e.length&&56320==(64512&e.charCodeAt(n+1))?(a=65536+((1023&a)<<10)+(1023&e.charCodeAt(++n)),t[r++]=a>>18|240,t[r++]=a>>12&63|128,t[r++]=a>>6&63|128,t[r++]=63&a|128):(t[r++]=a>>12|224,t[r++]=a>>6&63|128,t[r++]=63&a|128)}return t},he={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var r=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[],a=0;a<e.length;a+=3){var i=e[a],o=a+1<e.length,s=o?e[a+1]:0,u=a+2<e.length,c=u?e[a+2]:0,l=i>>2,d=(3&i)<<4|s>>4,f=(15&s)<<2|c>>6,h=63&c;u||(h=64,o||(f=64)),n.push(r[l],r[d],r[f],r[h])}return n.join("")},encodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(fe(e),t)},decodeString:function(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(e){for(var t=[],r=0,n=0;r<e.length;){var a=e[r++];if(a<128)t[n++]=String.fromCharCode(a);else if(a>191&&a<224){var i=e[r++];t[n++]=String.fromCharCode((31&a)<<6|63&i)}else if(a>239&&a<365){var o=((7&a)<<18|(63&e[r++])<<12|(63&e[r++])<<6|63&e[r++])-65536;t[n++]=String.fromCharCode(55296+(o>>10)),t[n++]=String.fromCharCode(56320+(1023&o))}else{var s=e[r++],u=e[r++];t[n++]=String.fromCharCode((15&a)<<12|(63&s)<<6|63&u)}}return t.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray:function(e,t){this.init_();for(var r=t?this.charToByteMapWebSafe_:this.charToByteMap_,n=[],a=0;a<e.length;){var i=r[e.charAt(a++)],o=a<e.length?r[e.charAt(a)]:0,s=++a<e.length?r[e.charAt(a)]:64,u=++a<e.length?r[e.charAt(a)]:64;if(++a,null==i||null==o||null==s||null==u)throw Error();var c=i<<2|o>>4;if(n.push(c),64!==s){var l=o<<4&240|s>>2;if(n.push(l),64!==u){var d=s<<6&192|u;n.push(d)}}}return n},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},pe=function(e){return function(e){var t=fe(e);return he.encodeByteArray(t,!0)}(e).replace(/\./g,"")},ve=function(e){try{return he.decodeString(e,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};
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
var me=function(){"use strict";function t(){var r=this;e(i)(this,t),this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,t){r.resolve=e,r.reject=t}))}return e(o)(t,[{key:"wrapCallback",value:function(e){var t=this;return function(r,n){r?t.reject(r):t.resolve(n),"function"==typeof e&&(t.promise.catch((function(){})),1===e.length?e(r):e(r,n))}}}]),t}();
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
function ge(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}
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
var ye=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t,a,o){var s;return e(i)(this,n),(s=r.call(this,a)).code=t,s.customData=o,s.name="FirebaseError",Object.setPrototypeOf(e(re)(s),n.prototype),Error.captureStackTrace&&Error.captureStackTrace(e(re)(s),ke.prototype.create),s}return n}(e(ae)(Error)),ke=function(){"use strict";function t(r,n,a){e(i)(this,t),this.service=r,this.serviceName=n,this.errors=a}return e(o)(t,[{key:"create",value:function(e){for(var t=arguments.length,r=new Array(t>1?t-1:0),n=1;n<t;n++)r[n-1]=arguments[n];var a=r[0]||{},i="".concat(this.service,"/").concat(e),o=this.errors[e],s=o?_e(o,a):"Error",u="".concat(this.serviceName,": ").concat(s," (").concat(i,")."),c=new ye(i,u,a);return c}}]),t}();function _e(e,t){return e.replace(be,(function(e,r){var n=t[r];return null!=n?String(n):"<".concat(r,"?>")}))}var be=/\{\$([^}]+)}/g;
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
 */function Ie(e){for(var t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function we(e,t){if(e===t)return!0;var r=Object.keys(e),n=Object.keys(t),a=!0,i=!1,o=void 0;try{for(var s,u=r[Symbol.iterator]();!(a=(s=u.next()).done);a=!0){var c=s.value;if(!n.includes(c))return!1;var l=e[c],d=t[c];if(Ee(l)&&Ee(d)){if(!we(l,d))return!1}else if(l!==d)return!1}}catch(e){i=!0,o=e}finally{try{a||null==u.return||u.return()}finally{if(i)throw o}}var f=!0,h=!1,p=void 0;try{for(var v,m=n[Symbol.iterator]();!(f=(v=m.next()).done);f=!0){var g=v.value;if(!r.includes(g))return!1}}catch(e){h=!0,p=e}finally{try{f||null==m.return||m.return()}finally{if(h)throw p}}return!0}function Ee(e){return null!==e&&"object"==typeof e}
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
function Se(t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=function(t,n){var a=e(X)(n.value,2),i=a[0],o=a[1];Array.isArray(o)?o.forEach((function(e){r.push(encodeURIComponent(i)+"="+encodeURIComponent(e))})):r.push(encodeURIComponent(i)+"="+encodeURIComponent(o))},u=Object.entries(t)[Symbol.iterator]();!(n=(o=u.next()).done);n=!0)s(0,o)}catch(e){a=!0,i=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw i}}return r.length?"&"+r.join("&"):""}function xe(t){var r={};return t.replace(/^\?/,"").split("&").forEach((function(t){if(t){var n=e(X)(t.split("="),2),a=n[0],i=n[1];r[decodeURIComponent(a)]=decodeURIComponent(i)}})),r}function Te(e){var t=e.indexOf("?");if(!t)return"";var r=e.indexOf("#",t);return e.substring(t,r>0?r:void 0)}
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
 */var Oe=function(){"use strict";function t(r,n){var a=this;e(i)(this,t),this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then((function(){r(a)})).catch((function(e){a.error(e)}))}return e(o)(t,[{key:"next",value:function(e){this.forEachObserver((function(t){t.next(e)}))}},{key:"error",value:function(e){this.forEachObserver((function(t){t.error(e)})),this.close(e)}},{key:"complete",value:function(){this.forEachObserver((function(e){e.complete()})),this.close()}},{key:"subscribe",value:function(e,t,r){var n,a=this;if(void 0===e&&void 0===t&&void 0===r)throw new Error("Missing Observer.");void 0===(n=function(e,t){if("object"!=typeof e||null===e)return!1;var r=!0,n=!1,a=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value;if(s in e&&"function"==typeof e[s])return!0}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!1}(e,["next","error","complete"])?e:{next:e,error:t,complete:r}).next&&(n.next=Ne),void 0===n.error&&(n.error=Ne),void 0===n.complete&&(n.complete=Ne);var i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{a.finalError?n.error(a.finalError):n.complete()}catch(e){}})),this.observers.push(n),i}},{key:"unsubscribeOne",value:function(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}},{key:"forEachObserver",value:function(e){if(!this.finalized)for(var t=0;t<this.observers.length;t++)this.sendOne(t,e)}},{key:"sendOne",value:function(e,t){var r=this;this.task.then((function(){if(void 0!==r.observers&&void 0!==r.observers[e])try{t(r.observers[e])}catch(e){"undefined"!=typeof console&&console.error&&console.error(e)}}))}},{key:"close",value:function(e){var t=this;this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((function(){t.observers=void 0,t.onNoObservers=void 0})))}}]),t}();function Ne(){}
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
function Ae(e){return e&&e._delegate?e._delegate:e}var Re=function(){"use strict";function t(r,n,a){e(i)(this,t),this.name=r,this.instanceFactory=n,this.type=a,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return e(o)(t,[{key:"setInstantiationMode",value:function(e){return this.instantiationMode=e,this}},{key:"setMultipleInstances",value:function(e){return this.multipleInstances=e,this}},{key:"setServiceProps",value:function(e){return this.serviceProps=e,this}},{key:"setInstanceCreatedCallback",value:function(e){return this.onInstanceCreated=e,this}}]),t}(),Le="[DEFAULT]",De=function(){"use strict";function t(r,n){e(i)(this,t),this.name=r,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return e(o)(t,[{key:"get",value:function(e){var t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){var r=new me;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{var n=this.getOrInitializeService({instanceIdentifier:t});n&&r.resolve(n)}catch(e){}}return this.instancesDeferred.get(t).promise}},{key:"getImmediate",value:function(e){var t,r=this.normalizeInstanceIdentifier(null==e?void 0:e.identifier),n=null!==(t=null==e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(r)&&!this.shouldAutoInitialize()){if(n)return null;throw Error("Service ".concat(this.name," is not available"))}try{return this.getOrInitializeService({instanceIdentifier:r})}catch(e){if(n)return null;throw e}}},{key:"getComponent",value:function(){return this.component}},{key:"setComponent",value:function(t){if(t.name!==this.name)throw Error("Mismatching Component ".concat(t.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=t,this.shouldAutoInitialize()){if(function(e){return"EAGER"===e.instantiationMode}
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
 */(t))try{this.getOrInitializeService({instanceIdentifier:Le})}catch(e){}var r=!0,n=!1,a=void 0;try{for(var i,o=this.instancesDeferred.entries()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=e(X)(i.value,2),u=s[0],c=s[1],l=this.normalizeInstanceIdentifier(u);try{var d=this.getOrInitializeService({instanceIdentifier:l});c.resolve(d)}catch(e){}}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}}}},{key:"clearInstance",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}},{key:"delete",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=Array.from(t.instances.values()),r.next=3,Promise.all(e(W)(n.filter((function(e){return"INTERNAL"in e})).map((function(e){return e.INTERNAL.delete()}))).concat(e(W)(n.filter((function(e){return"_delete"in e})).map((function(e){return e._delete()})))));case 3:case"end":return r.stop()}}),r)})))()}},{key:"isComponentSet",value:function(){return null!=this.component}},{key:"isInitialized",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return this.instances.has(e)}},{key:"getOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return this.instancesOptions.get(e)||{}}},{key:"initialize",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.options,n=void 0===r?{}:r,a=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(a))throw Error("".concat(this.name,"(").concat(a,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var i=this.getOrInitializeService({instanceIdentifier:a,options:n}),o=!0,s=!1,u=void 0;try{for(var c,l=this.instancesDeferred.entries()[Symbol.iterator]();!(o=(c=l.next()).done);o=!0){var d=e(X)(c.value,2),f=d[0],h=d[1],p=this.normalizeInstanceIdentifier(f);a===p&&h.resolve(i)}}catch(e){s=!0,u=e}finally{try{o||null==l.return||l.return()}finally{if(s)throw u}}return i}},{key:"onInit",value:function(e,t){var r,n=this.normalizeInstanceIdentifier(t),a=null!==(r=this.onInitCallbacks.get(n))&&void 0!==r?r:new Set;a.add(e),this.onInitCallbacks.set(n,a);var i=this.instances.get(n);return i&&e(i,n),function(){a.delete(e)}}},{key:"invokeOnInitCallbacks",value:function(e,t){var r=this.onInitCallbacks.get(t);if(r){var n=!0,a=!1,i=void 0;try{for(var o,s=r[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){var u=o.value;try{u(e,t)}catch(e){}}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}}},{key:"getOrInitializeService",value:function(e){var t,r=e.instanceIdentifier,n=e.options,a=void 0===n?{}:n,i=this.instances.get(r);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:(t=r,t===Le?void 0:t),options:a}),this.instances.set(r,i),this.instancesOptions.set(r,a),this.invokeOnInitCallbacks(i,r),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,r,i)}catch(e){}return i||null}},{key:"normalizeInstanceIdentifier",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le;return this.component?this.component.multipleInstances?e:Le:e}},{key:"shouldAutoInitialize",value:function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}]),t}();
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
 */var Ce,Pe,Me=function(){"use strict";function t(r){e(i)(this,t),this.name=r,this.providers=new Map}return e(o)(t,[{key:"addComponent",value:function(e){var t=this.getProvider(e.name);if(t.isComponentSet())throw new Error("Component ".concat(e.name," has already been registered with ").concat(this.name));t.setComponent(e)}},{key:"addOrOverwriteComponent",value:function(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}},{key:"getProvider",value:function(e){if(this.providers.has(e))return this.providers.get(e);var t=new De(e,this);return this.providers.set(e,t),t}},{key:"getProviders",value:function(){return Array.from(this.providers.values())}}]),t}(),Ue=(i=a("8MBJY"),o=a("a2hTj"),B=a("hKHmD"),[]);(Pe=Ce||(Ce={}))[Pe.DEBUG=0]="DEBUG",Pe[Pe.VERBOSE=1]="VERBOSE",Pe[Pe.INFO=2]="INFO",Pe[Pe.WARN=3]="WARN",Pe[Pe.ERROR=4]="ERROR",Pe[Pe.SILENT=5]="SILENT";var Fe,je={debug:Ce.DEBUG,verbose:Ce.VERBOSE,info:Ce.INFO,warn:Ce.WARN,error:Ce.ERROR,silent:Ce.SILENT},Ve=Ce.INFO,He=(Fe={},e(B)(Fe,Ce.DEBUG,"log"),e(B)(Fe,Ce.VERBOSE,"log"),e(B)(Fe,Ce.INFO,"info"),e(B)(Fe,Ce.WARN,"warn"),e(B)(Fe,Ce.ERROR,"error"),Fe),qe=function(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];var o;if(!(r<t.logLevel)){var s=(new Date).toISOString(),u=He[r];if(!u)throw new Error("Attempted to log a message with an invalid logType (value: ".concat(r,")"));(o=console)[u].apply(o,["[".concat(s,"]  ").concat(t.name,":")].concat(e(W)(a)))}},Be=function(){"use strict";function t(r){e(i)(this,t),this.name=r,this._logLevel=Ve,this._logHandler=qe,this._userLogHandler=null,Ue.push(this)}return e(o)(t,[{key:"logLevel",get:function(){return this._logLevel},set:function(e){if(!(e in Ce))throw new TypeError('Invalid value "'.concat(e,'" assigned to `logLevel`'));this._logLevel=e}},{key:"setLogLevel",value:function(e){this._logLevel="string"==typeof e?je[e]:e}},{key:"logHandler",get:function(){return this._logHandler},set:function(e){if("function"!=typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}},{key:"userLogHandler",get:function(){return this._userLogHandler},set:function(e){this._userLogHandler=e}},{key:"debug",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ce.DEBUG].concat(e(W)(r))),this._logHandler.apply(this,[this,Ce.DEBUG].concat(e(W)(r)))}},{key:"log",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ce.VERBOSE].concat(e(W)(r))),this._logHandler.apply(this,[this,Ce.VERBOSE].concat(e(W)(r)))}},{key:"info",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ce.INFO].concat(e(W)(r))),this._logHandler.apply(this,[this,Ce.INFO].concat(e(W)(r)))}},{key:"warn",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ce.WARN].concat(e(W)(r))),this._logHandler.apply(this,[this,Ce.WARN].concat(e(W)(r)))}},{key:"error",value:function(){for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];this._userLogHandler&&this._userLogHandler.apply(this,[this,Ce.ERROR].concat(e(W)(r))),this._logHandler.apply(this,[this,Ce.ERROR].concat(e(W)(r)))}}]),t}();c=a("bpxeT");var We={};Object.defineProperty(We,"__esModule",{value:!0}),We.default=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){ze.default(e,t,r[t])}))}return e};var Ge,ze=(Ge=a("hKHmD"))&&Ge.__esModule?Ge:{default:Ge};var Ke,Je;l=a("2TvXO");var Ye=new WeakMap,Xe=new WeakMap,Qe=new WeakMap,$e=new WeakMap,Ze=new WeakMap;var et={get:function(e,t,r){if(e instanceof IDBTransaction){if("done"===t)return Xe.get(e);if("objectStoreNames"===t)return e.objectStoreNames||Qe.get(e);if("store"===t)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return nt(e[t])},set:function(e,t,r){return e[t]=r,!0},has:function(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function tt(t){return t!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(Je||(Je=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(t)?function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return t.apply(at(this),r),nt(Ye.get(this))}:function(){for(var e=arguments.length,r=new Array(e),n=0;n<e;n++)r[n]=arguments[n];return nt(t.apply(at(this),r))}:function(r){for(var n=arguments.length,a=new Array(n>1?n-1:0),i=1;i<n;i++)a[i-1]=arguments[i];var o,s=(o=t).call.apply(o,[at(this),r].concat(e(W)(a)));return Qe.set(s,r.sort?r.sort():[r]),nt(s)}}function rt(e){return"function"==typeof e?tt(e):(e instanceof IDBTransaction&&function(e){if(!Xe.has(e)){var t=new Promise((function(t,r){var n=function(){e.removeEventListener("complete",a),e.removeEventListener("error",i),e.removeEventListener("abort",i)},a=function(){t(),n()},i=function(){r(e.error||new DOMException("AbortError","AbortError")),n()};e.addEventListener("complete",a),e.addEventListener("error",i),e.addEventListener("abort",i)}));Xe.set(e,t)}}(e),t=e,(Ke||(Ke=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(e){return t instanceof e}))?new Proxy(e,et):e);var t}function nt(e){if(e instanceof IDBRequest)return t=e,(r=new Promise((function(e,r){var n=function(){t.removeEventListener("success",a),t.removeEventListener("error",i)},a=function(){e(nt(t.result)),n()},i=function(){r(t.error),n()};t.addEventListener("success",a),t.addEventListener("error",i)}))).then((function(e){e instanceof IDBCursor&&Ye.set(e,t)})).catch((function(){})),Ze.set(r,t),r;var t,r;if($e.has(e))return $e.get(e);var n=rt(e);return n!==e&&($e.set(e,n),Ze.set(n,e)),n}var at=function(e){return Ze.get(e)};function it(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=r.blocked,a=r.upgrade,i=r.blocking,o=r.terminated,s=indexedDB.open(e,t),u=nt(s);return a&&s.addEventListener("upgradeneeded",(function(e){a(nt(s.result),e.oldVersion,e.newVersion,nt(s.transaction))})),n&&s.addEventListener("blocked",(function(){return n()})),u.then((function(e){o&&e.addEventListener("close",(function(){return o()})),i&&e.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}var ot=["get","getKey","getAll","getAllKeys","count"],st=["put","add","delete","clear"],ut=new Map;function ct(t,r){if(t instanceof IDBDatabase&&!(r in t)&&"string"==typeof r){if(ut.get(r))return ut.get(r);var n=r.replace(/FromIndex$/,""),a=r!==n,i=st.includes(n);if(n in(a?IDBIndex:IDBObjectStore).prototype&&(i||ot.includes(n))){var o,s=(o=e(c)(e(l).mark((function t(r){var o,s,u,c,d,f,h=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(o=h.length,s=new Array(o>1?o-1:0),u=1;u<o;u++)s[u-1]=h[u];return d=this.transaction(r,i?"readwrite":"readonly"),f=d.store,a&&(f=f.index(s.shift())),t.next=7,Promise.all([(c=f)[n].apply(c,e(W)(s)),i&&d.done]);case 7:return t.abrupt("return",t.sent[0]);case 8:case"end":return t.stop()}}),t,this)}))),function(e){return o.apply(this,arguments)});return ut.set(r,s),s}}}et=function(t){return e(We)({},t,{get:function(e,r,n){return ct(e,r)||t.get(e,r,n)},has:function(e,r){return!!ct(e,r)||t.has(e,r)}})}(et);
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
var lt=function(){"use strict";function t(r){e(i)(this,t),this.container=r}return e(o)(t,[{key:"getPlatformInfoString",value:function(){return this.container.getProviders().map((function(e){if(function(e){var t=e.getComponent();return"VERSION"===(null==t?void 0:t.type)}(e)){var t=e.getImmediate();return"".concat(t.library,"/").concat(t.version)}return null})).filter((function(e){return e})).join(" ")}}]),t}();var dt,ft,ht="@firebase/app",pt="0.7.28",vt=new Be("@firebase/app"),mt="[DEFAULT]",gt=(dt={},e(B)(dt,ht,"fire-core"),e(B)(dt,"@firebase/app-compat","fire-core-compat"),e(B)(dt,"@firebase/analytics","fire-analytics"),e(B)(dt,"@firebase/analytics-compat","fire-analytics-compat"),e(B)(dt,"@firebase/app-check","fire-app-check"),e(B)(dt,"@firebase/app-check-compat","fire-app-check-compat"),e(B)(dt,"@firebase/auth","fire-auth"),e(B)(dt,"@firebase/auth-compat","fire-auth-compat"),e(B)(dt,"@firebase/database","fire-rtdb"),e(B)(dt,"@firebase/database-compat","fire-rtdb-compat"),e(B)(dt,"@firebase/functions","fire-fn"),e(B)(dt,"@firebase/functions-compat","fire-fn-compat"),e(B)(dt,"@firebase/installations","fire-iid"),e(B)(dt,"@firebase/installations-compat","fire-iid-compat"),e(B)(dt,"@firebase/messaging","fire-fcm"),e(B)(dt,"@firebase/messaging-compat","fire-fcm-compat"),e(B)(dt,"@firebase/performance","fire-perf"),e(B)(dt,"@firebase/performance-compat","fire-perf-compat"),e(B)(dt,"@firebase/remote-config","fire-rc"),e(B)(dt,"@firebase/remote-config-compat","fire-rc-compat"),e(B)(dt,"@firebase/storage","fire-gcs"),e(B)(dt,"@firebase/storage-compat","fire-gcs-compat"),e(B)(dt,"@firebase/firestore","fire-fst"),e(B)(dt,"@firebase/firestore-compat","fire-fst-compat"),e(B)(dt,"fire-js","fire-js"),e(B)(dt,"firebase","fire-js-all"),dt),yt=new Map,kt=new Map;function _t(e,t){try{e.container.addComponent(t)}catch(r){vt.debug("Component ".concat(t.name," failed to register with FirebaseApp ").concat(e.name),r)}}function bt(e){var t=e.name;if(kt.has(t))return vt.debug("There were multiple attempts to register component ".concat(t,".")),!1;kt.set(t,e);var r=!0,n=!1,a=void 0;try{for(var i,o=yt.values()[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){_t(i.value,e)}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}return!0}function It(e,t){var r=e.container.getProvider("heartbeat").getImmediate({optional:!0});return r&&r.triggerHeartbeat(),e.container.getProvider(t)}
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
var wt=(ft={},e(B)(ft,"no-app","No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()"),e(B)(ft,"bad-app-name","Illegal App name: '{$appName}"),e(B)(ft,"duplicate-app","Firebase App named '{$appName}' already exists with different options or config"),e(B)(ft,"app-deleted","Firebase App named '{$appName}' already deleted"),e(B)(ft,"invalid-app-argument","firebase.{$appName}() takes either no argument or a Firebase App instance."),e(B)(ft,"invalid-log-argument","First argument to `onLog` must be null or a function."),e(B)(ft,"storage-open","Error thrown when opening storage. Original error: {$originalErrorMessage}."),e(B)(ft,"storage-get","Error thrown when reading from storage. Original error: {$originalErrorMessage}."),e(B)(ft,"storage-set","Error thrown when writing to storage. Original error: {$originalErrorMessage}."),e(B)(ft,"storage-delete","Error thrown when deleting from storage. Original error: {$originalErrorMessage}."),ft),Et=new ke("app","Firebase",wt),St=function(){"use strict";function t(r,n,a){var o=this;e(i)(this,t),this._isDeleted=!1,this._options=Object.assign({},r),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=a,this.container.addComponent(new Re("app",(function(){return o}),"PUBLIC"))}return e(o)(t,[{key:"automaticDataCollectionEnabled",get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}},{key:"name",get:function(){return this.checkDestroyed(),this._name}},{key:"options",get:function(){return this.checkDestroyed(),this._options}},{key:"config",get:function(){return this.checkDestroyed(),this._config}},{key:"container",get:function(){return this._container}},{key:"isDeleted",get:function(){return this._isDeleted},set:function(e){this._isDeleted=e}},{key:"checkDestroyed",value:function(){if(this.isDeleted)throw Et.create("app-deleted",{appName:this._name})}}]),t}(),xt="9.9.0";function Tt(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=yt.get(e);if(!t)throw Et.create("no-app",{appName:e});return t}function Ot(e,t,r){var n,a=null!==(n=gt[e])&&void 0!==n?n:e;r&&(a+="-".concat(r));var i=a.match(/\s|\//),o=t.match(/\s|\//);if(i||o){var s=['Unable to register library "'.concat(a,'" with version "').concat(t,'":')];return i&&s.push('library name "'.concat(a,'" contains illegal characters (whitespace or "/")')),i&&o&&s.push("and"),o&&s.push('version name "'.concat(t,'" contains illegal characters (whitespace or "/")')),void vt.warn(s.join(" "))}bt(new Re("".concat(a,"-version"),(function(){return{library:a,version:t}}),"VERSION"))}
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
var Nt="firebase-heartbeat-store",At=null;function Rt(){return At||(At=it("firebase-heartbeat-database",1,{upgrade:function(e,t){if(0===t)e.createObjectStore(Nt)}}).catch((function(e){throw Et.create("storage-open",{originalErrorMessage:e.message})}))),At}function Lt(e){return Dt.apply(this,arguments)}function Dt(){return(Dt=e(c)(e(l).mark((function t(r){var n,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Rt();case 4:return a=e.sent,e.abrupt("return",a.transaction(Nt).objectStore(Nt).get(Mt(r)));case 8:throw e.prev=8,e.t0=e.catch(1),Et.create("storage-get",{originalErrorMessage:null===(n=e.t0)||void 0===n?void 0:n.message});case 11:case"end":return e.stop()}}),t,null,[[1,8]])})))).apply(this,arguments)}function Ct(e,t){return Pt.apply(this,arguments)}function Pt(){return(Pt=e(c)(e(l).mark((function t(r,n){var a,i,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Rt();case 4:return i=e.sent,o=i.transaction(Nt,"readwrite"),s=o.objectStore(Nt),e.next=9,s.put(n,Mt(r));case 9:return e.abrupt("return",o.done);case 12:throw e.prev=12,e.t0=e.catch(1),Et.create("storage-set",{originalErrorMessage:null===(a=e.t0)||void 0===a?void 0:a.message});case 15:case"end":return e.stop()}}),t,null,[[1,12]])})))).apply(this,arguments)}function Mt(e){return"".concat(e.name,"!").concat(e.options.appId)}
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
 */var Ut=function(){"use strict";function t(r){var n=this;e(i)(this,t),this.container=r,this._heartbeatsCache=null;var a=this.container.getProvider("app").getImmediate();this._storage=new Ht(a),this._heartbeatsCachePromise=this._storage.read().then((function(e){return n._heartbeatsCache=e,e}))}return e(o)(t,[{key:"triggerHeartbeat",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.container.getProvider("platform-logger").getImmediate(),a=n.getPlatformInfoString(),i=Ft(),null!==t._heartbeatsCache){e.next=7;break}return e.next=6,t._heartbeatsCachePromise;case 6:t._heartbeatsCache=e.sent;case 7:if(t._heartbeatsCache.lastSentHeartbeatDate!==i&&!t._heartbeatsCache.heartbeats.some((function(e){return e.date===i}))){e.next=11;break}return e.abrupt("return");case 11:t._heartbeatsCache.heartbeats.push({date:i,agent:a});case 12:return t._heartbeatsCache.heartbeats=t._heartbeatsCache.heartbeats.filter((function(e){var t=new Date(e.date).valueOf();return Date.now()-t<=2592e6})),e.abrupt("return",t._storage.overwrite(t._heartbeatsCache));case 14:case"end":return e.stop()}}),r)})))()}},{key:"getHeartbeatsHeader",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n,a,i,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==t._heartbeatsCache){e.next=3;break}return e.next=3,t._heartbeatsCachePromise;case 3:if(null!==t._heartbeatsCache&&0!==t._heartbeatsCache.heartbeats.length){e.next=5;break}return e.abrupt("return","");case 5:if(n=Ft(),a=jt(t._heartbeatsCache.heartbeats),i=a.heartbeatsToSend,o=a.unsentEntries,s=pe(JSON.stringify({version:2,heartbeats:i})),t._heartbeatsCache.lastSentHeartbeatDate=n,!(o.length>0)){e.next=15;break}return t._heartbeatsCache.heartbeats=o,e.next=13,t._storage.overwrite(t._heartbeatsCache);case 13:e.next=16;break;case 15:t._heartbeatsCache.heartbeats=[],t._storage.overwrite(t._heartbeatsCache);case 16:return e.abrupt("return",s);case 17:case"end":return e.stop()}}),r)})))()}}]),t}();function Ft(){return(new Date).toISOString().substring(0,10)}function jt(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1024,r=[],n=e.slice(),a=!0,i=!1,o=void 0;try{for(var s,u=function(e,a){var i=a.value,o=r.find((function(e){return e.agent===i.agent}));if(o){if(o.dates.push(i.date),qt(r)>t)return o.dates.pop(),"break"}else if(r.push({agent:i.agent,dates:[i.date]}),qt(r)>t)return r.pop(),"break";n=n.slice(1)},c=e[Symbol.iterator]();!(a=(s=c.next()).done);a=!0){var l=u(c,s);if("break"===l)break}}catch(e){i=!0,o=e}finally{try{a||null==c.return||c.return()}finally{if(i)throw o}}return{heartbeatsToSend:r,unsentEntries:n}}var Vt,Ht=function(){"use strict";function t(r){e(i)(this,t),this.app=r,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return e(o)(t,[{key:"runIndexedDBEnvironmentCheck",value:function(){return e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"==typeof indexedDB){e.next=4;break}return e.abrupt("return",!1);case 4:return e.abrupt("return",new Promise((function(e,t){try{var r=!0,n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=function(){a.result.close(),r||self.indexedDB.deleteDatabase(n),e(!0)},a.onupgradeneeded=function(){r=!1},a.onerror=function(){var e;t((null===(e=a.error)||void 0===e?void 0:e.message)||"")}}catch(e){t(e)}})).then((function(){return!0})).catch((function(){return!1})));case 5:case"end":return e.stop()}}),t)})))()}},{key:"read",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._canUseIndexedDBPromise;case 2:if(e.sent){e.next=7;break}return e.abrupt("return",{heartbeats:[]});case 7:return e.next=9,Lt(t.app);case 9:return n=e.sent,e.abrupt("return",n||{heartbeats:[]});case 11:case"end":return e.stop()}}),r)})))()}},{key:"overwrite",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r._canUseIndexedDBPromise;case 3:if(e.sent){e.next=8;break}return e.abrupt("return");case 8:return e.next=10,r.read();case 10:return i=e.sent,e.abrupt("return",Ct(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:t.heartbeats}));case 12:case"end":return e.stop()}}),n)})))()}},{key:"add",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,r._canUseIndexedDBPromise;case 3:if(n.sent){n.next=8;break}return n.abrupt("return");case 8:return n.next=10,r.read();case 10:return i=n.sent,n.abrupt("return",Ct(r.app,{lastSentHeartbeatDate:null!==(a=t.lastSentHeartbeatDate)&&void 0!==a?a:i.lastSentHeartbeatDate,heartbeats:e(W)(i.heartbeats).concat(e(W)(t.heartbeats))}));case 12:case"end":return n.stop()}}),n)})))()}}]),t}();function qt(e){return pe(JSON.stringify({version:2,heartbeats:e})).length}
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
 */Vt="",bt(new Re("platform-logger",(function(e){return new lt(e)}),"PRIVATE")),bt(new Re("heartbeat",(function(e){return new Ut(e)}),"PRIVATE")),Ot(ht,pt,Vt),Ot(ht,pt,"esm2017"),Ot("fire-js","");
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
Ot("firebase","9.9.0","app");re=a("ds8z5"),c=a("bpxeT"),i=a("8MBJY"),o=a("a2hTj"),B=a("hKHmD");var Bt={};Object.defineProperty(Bt,"__esModule",{value:!0}),Bt.default=function(e,t,r){return Gt(e,t,r)};var Wt=function(e){return e&&e.__esModule?e:{default:e}}(a("2mz0K"));function Gt(e,t,r){return(Gt="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=Wt.default(e,t);if(n){var a=Object.getOwnPropertyDescriptor(n,t);return a.get?a.get.call(r||e):a.value}})(e,t,r)}var zt=a("fVNic");ne=a("eYQtU"),de=a("2MbLg"),l=a("2TvXO");function Kt(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}Object.create;Object.create;function Jt(){return e(B)({},"dependent-sdk-initialized-before-auth","Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.")}var Yt=Jt,Xt=new ke("auth","Firebase",Jt()),Qt={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized"},$t=new Be("@firebase/auth");function Zt(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];var i;$t.logLevel<=Ce.ERROR&&(i=$t).error.apply(i,["Auth (".concat(xt,"): ").concat(t)].concat(e(W)(n)))}
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
 */function er(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];throw nr.apply(void 0,[t].concat(e(W)(n)))}function tr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return nr.apply(void 0,[t].concat(e(W)(n)))}function rr(t,r,n){var a=Object.assign(Object.assign({},Yt()),e(B)({},r,n));return new ke("auth","Firebase",a).create(r,{appName:t.name})}function nr(t){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];var i;if("string"!=typeof t){var o,s=n[0],u=e(W)(n.slice(1));return u[0]&&(u[0].appName=t.name),(o=t._errorFactory).create.apply(o,[s].concat(e(W)(u)))}return(i=Xt).create.apply(i,[t].concat(e(W)(n)))}function ar(t,r){for(var n=arguments.length,a=new Array(n>2?n-2:0),i=2;i<n;i++)a[i-2]=arguments[i];if(!t)throw nr.apply(void 0,[r].concat(e(W)(a)))}function ir(e){var t="INTERNAL ASSERTION FAILED: "+e;throw Zt(t),new Error(t)}function or(e,t){e||ir(t)}
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
 */var sr=new Map;function ur(e){or(e instanceof Function,"Expected a class definition");var t=sr.get(e);return t?(or(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,sr.set(e,t),t)}
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
 */function cr(e,t){var r=It(e,"auth");if(r.isInitialized()){var n=r.getImmediate();if(we(r.getOptions(),null!=t?t:{}))return n;er(n,"already-initialized")}return r.initialize({options:t})}
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
function lr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function dr(){return"http:"===fr()||"https:"===fr()}function fr(){var e;return"undefined"!=typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function hr(){return"undefined"==typeof navigator||!navigator||!("onLine"in navigator)||"boolean"!=typeof navigator.onLine||!dr()&&("object"!=typeof(e="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0)||void 0===e.id)&&!("connection"in navigator)||navigator.onLine;var e}
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
var pr=function(){"use strict";function t(r,n){e(i)(this,t),this.shortDelay=r,this.longDelay=n,or(n>r,"Short delay should be less than long delay!"),this.isMobile="undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ge())||"object"==typeof navigator&&"ReactNative"===navigator.product}return e(o)(t,[{key:"get",value:function(){return hr()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}]),t}();
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
 */function vr(e,t){or(e.emulator,"Emulator should always be set here");var r=e.emulator.url;return t?"".concat(r).concat(t.startsWith("/")?t.slice(1):t):r}
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
 */var mr,gr=function(){"use strict";function t(){e(i)(this,t)}return e(o)(t,null,[{key:"initialize",value:function(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}},{key:"fetch",value:function(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void ir("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"headers",value:function(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void ir("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}},{key:"response",value:function(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void ir("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}]),t}(),yr=(mr={},e(B)(mr,"CREDENTIAL_MISMATCH","custom-token-mismatch"),e(B)(mr,"MISSING_CUSTOM_TOKEN","internal-error"),e(B)(mr,"INVALID_IDENTIFIER","invalid-email"),e(B)(mr,"MISSING_CONTINUE_URI","internal-error"),e(B)(mr,"INVALID_PASSWORD","wrong-password"),e(B)(mr,"MISSING_PASSWORD","internal-error"),e(B)(mr,"EMAIL_EXISTS","email-already-in-use"),e(B)(mr,"PASSWORD_LOGIN_DISABLED","operation-not-allowed"),e(B)(mr,"INVALID_IDP_RESPONSE","invalid-credential"),e(B)(mr,"INVALID_PENDING_TOKEN","invalid-credential"),e(B)(mr,"FEDERATED_USER_ID_ALREADY_LINKED","credential-already-in-use"),e(B)(mr,"MISSING_REQ_TYPE","internal-error"),e(B)(mr,"EMAIL_NOT_FOUND","user-not-found"),e(B)(mr,"RESET_PASSWORD_EXCEED_LIMIT","too-many-requests"),e(B)(mr,"EXPIRED_OOB_CODE","expired-action-code"),e(B)(mr,"INVALID_OOB_CODE","invalid-action-code"),e(B)(mr,"MISSING_OOB_CODE","internal-error"),e(B)(mr,"CREDENTIAL_TOO_OLD_LOGIN_AGAIN","requires-recent-login"),e(B)(mr,"INVALID_ID_TOKEN","invalid-user-token"),e(B)(mr,"TOKEN_EXPIRED","user-token-expired"),e(B)(mr,"USER_NOT_FOUND","user-token-expired"),e(B)(mr,"TOO_MANY_ATTEMPTS_TRY_LATER","too-many-requests"),e(B)(mr,"INVALID_CODE","invalid-verification-code"),e(B)(mr,"INVALID_SESSION_INFO","invalid-verification-id"),e(B)(mr,"INVALID_TEMPORARY_PROOF","invalid-credential"),e(B)(mr,"MISSING_SESSION_INFO","missing-verification-id"),e(B)(mr,"SESSION_EXPIRED","code-expired"),e(B)(mr,"MISSING_ANDROID_PACKAGE_NAME","missing-android-pkg-name"),e(B)(mr,"UNAUTHORIZED_DOMAIN","unauthorized-continue-uri"),e(B)(mr,"INVALID_OAUTH_CLIENT_ID","invalid-oauth-client-id"),e(B)(mr,"ADMIN_ONLY_OPERATION","admin-restricted-operation"),e(B)(mr,"INVALID_MFA_PENDING_CREDENTIAL","invalid-multi-factor-session"),e(B)(mr,"MFA_ENROLLMENT_NOT_FOUND","multi-factor-info-not-found"),e(B)(mr,"MISSING_MFA_ENROLLMENT_ID","missing-multi-factor-info"),e(B)(mr,"MISSING_MFA_PENDING_CREDENTIAL","missing-multi-factor-session"),e(B)(mr,"SECOND_FACTOR_EXISTS","second-factor-already-in-use"),e(B)(mr,"SECOND_FACTOR_LIMIT_EXCEEDED","maximum-second-factor-count-exceeded"),e(B)(mr,"BLOCKING_FUNCTION_ERROR_RESPONSE","internal-error"),mr),kr=new pr(3e4,6e4);function _r(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}function br(e,t,r,n){return Ir.apply(this,arguments)}function Ir(){return Ir=e(c)(e(l).mark((function t(r,n,a,i){var o,s=arguments;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>4&&void 0!==s[4]?s[4]:{},t.abrupt("return",wr(r,o,e(c)(e(l).mark((function t(){var o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={},s={},i&&("GET"===n?s=i:o={body:JSON.stringify(i)}),u=Se(Object.assign({key:r.config.apiKey},s)).slice(1),e.next=6,r._getAdditionalHeaders();case 6:return(c=e.sent)["Content-Type"]="application/json",r.languageCode&&(c["X-Firebase-Locale"]=r.languageCode),e.abrupt("return",gr.fetch()(Tr(r,r.config.apiHost,a,u),Object.assign({method:n,headers:c,referrerPolicy:"no-referrer"},o)));case 10:case"end":return e.stop()}}),t)})))));case 2:case"end":return t.stop()}}),t)}))),Ir.apply(this,arguments)}function wr(e,t,r){return Er.apply(this,arguments)}function Er(){return(Er=e(c)(e(l).mark((function t(r,n,a){var i,o,s,u,c,d,f,h,p;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r._canInitEmulator=!1,i=Object.assign(Object.assign({},yr),n),t.prev=2,o=new Or(r),t.next=6,Promise.race([a(),o.promise]);case 6:return s=t.sent,o.clearNetworkTimeout(),t.next=10,s.json();case 10:if(!("needConfirmation"in(u=t.sent))){t.next=13;break}throw Nr(r,"account-exists-with-different-credential",u);case 13:if(!s.ok||"errorMessage"in u){t.next=17;break}return t.abrupt("return",u);case 17:if(c=s.ok?u.errorMessage:u.error.message,d=e(X)(c.split(" : "),2),f=d[0],h=d[1],"FEDERATED_USER_ID_ALREADY_LINKED"!==f){t.next=23;break}throw Nr(r,"credential-already-in-use",u);case 23:if("EMAIL_EXISTS"!==f){t.next=27;break}throw Nr(r,"email-already-in-use",u);case 27:if("USER_DISABLED"!==f){t.next=29;break}throw Nr(r,"user-disabled",u);case 29:if(p=i[f]||f.toLowerCase().replace(/[_\s]+/g,"-"),!h){t.next=34;break}throw rr(r,p,h);case 34:er(r,p);case 35:t.next=42;break;case 37:if(t.prev=37,t.t0=t.catch(2),!(t.t0 instanceof ye)){t.next=41;break}throw t.t0;case 41:er(r,"network-request-failed");case 42:case"end":return t.stop()}}),t,null,[[2,37]])})))).apply(this,arguments)}function Sr(e,t,r,n){return xr.apply(this,arguments)}function xr(){return xr=e(c)(e(l).mark((function t(r,n,a,i){var o,s,u=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=u.length>4&&void 0!==u[4]?u[4]:{},e.next=3,br(r,n,a,i,o);case 3:return"mfaPendingCredential"in(s=e.sent)&&er(r,"multi-factor-auth-required",{_serverResponse:s}),e.abrupt("return",s);case 6:case"end":return e.stop()}}),t)}))),xr.apply(this,arguments)}function Tr(e,t,r,n){var a="".concat(t).concat(r,"?").concat(n);return e.config.emulator?vr(e.config,a):"".concat(e.config.apiScheme,"://").concat(a)}var Or=function(){"use strict";function t(r){var n=this;e(i)(this,t),this.auth=r,this.timer=null,this.promise=new Promise((function(e,t){var r=n;n.timer=setTimeout((function(){return t(tr(r.auth,"network-request-failed"))}),kr.get())}))}return e(o)(t,[{key:"clearNetworkTimeout",value:function(){clearTimeout(this.timer)}}]),t}();function Nr(e,t,r){var n={appName:e.name};r.email&&(n.email=r.email),r.phoneNumber&&(n.phoneNumber=r.phoneNumber);var a=tr(e,t,n);return a.customData._tokenResponse=r,a}function Ar(e,t){return Rr.apply(this,arguments)}function Rr(){return(Rr=
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
e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",br(r,"POST","/v1/accounts:delete",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Lr(e,t){return Dr.apply(this,arguments)}function Dr(){return(Dr=e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",br(r,"POST","/v1/accounts:lookup",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */function Cr(e){if(e)try{var t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(e){}}
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
 */function Pr(){return Pr=e(c)(e(l).mark((function t(r){var n,a,i,o,s,u,c=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>1&&void 0!==c[1]&&c[1],a=Ae(r),e.next=4,a.getIdToken(n);case 4:return i=e.sent,ar((o=Ur(i))&&o.exp&&o.auth_time&&o.iat,a.auth,"internal-error"),s="object"==typeof o.firebase?o.firebase:void 0,u=null==s?void 0:s.sign_in_provider,e.abrupt("return",{claims:o,token:i,authTime:Cr(Mr(o.auth_time)),issuedAtTime:Cr(Mr(o.iat)),expirationTime:Cr(Mr(o.exp)),signInProvider:u||null,signInSecondFactor:(null==s?void 0:s.sign_in_second_factor)||null});case 10:case"end":return e.stop()}}),t)}))),Pr.apply(this,arguments)}function Mr(e){return 1e3*Number(e)}function Ur(t){var r,n=e(X)(t.split("."),3),a=n[0],i=n[1],o=n[2];if(void 0===a||void 0===i||void 0===o)return Zt("JWT malformed, contained fewer than 3 sections"),null;try{var s=ve(i);return s?JSON.parse(s):(Zt("Failed to decode base64 JWT payload"),null)}catch(e){return Zt("Caught error parsing JWT payload as JSON",null===(r=e)||void 0===r?void 0:r.toString()),null}}function Fr(e,t){return jr.apply(this,arguments)}function jr(){return jr=
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
e(c)(e(l).mark((function t(r,n){var a=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(a.length>2&&void 0!==a[2]&&a[2])){e.next=3;break}return e.abrupt("return",n);case 3:return e.prev=3,e.next=6,n;case 6:return e.abrupt("return",e.sent);case 9:if(e.prev=9,e.t0=e.catch(3),!(e.t0 instanceof ye&&Vr(e.t0))){e.next=15;break}if(r.auth.currentUser!==r){e.next=15;break}return e.next=15,r.auth.signOut();case 15:throw e.t0;case 16:case"end":return e.stop()}}),t,null,[[3,9]])}))),jr.apply(this,arguments)}function Vr(e){var t=e.code;return"auth/user-disabled"===t||"auth/user-token-expired"===t}
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
 */var Hr=function(){"use strict";function t(r){e(i)(this,t),this.user=r,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}return e(o)(t,[{key:"_start",value:function(){this.isRunning||(this.isRunning=!0,this.schedule())}},{key:"_stop",value:function(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}},{key:"getInterval",value:function(e){var t;if(e){var r=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),r}this.errorBackoff=3e4;var n=(null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0)-Date.now()-3e5;return Math.max(0,n)}},{key:"schedule",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(this.isRunning){var r=this.getInterval(t),n=this;this.timerId=setTimeout(e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.iteration();case 2:case"end":return e.stop()}}),t)}))),r)}}},{key:"iteration",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,t.user.getIdToken(!0);case 4:e.next=10;break;case 6:return e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(n=e.t0)||void 0===n?void 0:n.code)&&t.schedule(!0),e.abrupt("return");case 10:t.schedule();case 11:case"end":return e.stop()}}),r,null,[[1,6]])})))()}}]),t}(),qr=function(){"use strict";function t(r,n){e(i)(this,t),this.createdAt=r,this.lastLoginAt=n,this._initializeTime()}return e(o)(t,[{key:"_initializeTime",value:function(){this.lastSignInTime=Cr(this.lastLoginAt),this.creationTime=Cr(this.createdAt)}},{key:"_copy",value:function(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}},{key:"toJSON",value:function(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}]),t}();
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
 */function Br(e){return Wr.apply(this,arguments)}function Wr(){return(Wr=
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
e(c)(e(l).mark((function t(r){var n,a,i,o,s,u,c,d,f,h,p;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.auth,e.next=4,r.getIdToken();case 4:return i=e.sent,e.next=7,Fr(r,Lr(a,{idToken:i}));case 7:ar(null==(o=e.sent)?void 0:o.users.length,a,"internal-error"),s=o.users[0],r._notifyReloadListener(s),u=(null===(n=s.providerUserInfo)||void 0===n?void 0:n.length)?Kr(s.providerUserInfo):[],c=zr(r.providerData,u),d=r.isAnonymous,f=!(r.email&&s.passwordHash||(null==c?void 0:c.length)),h=!!d&&f,p={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:c,metadata:new qr(s.createdAt,s.lastLoginAt),isAnonymous:h},Object.assign(r,p);case 18:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Gr(){return(Gr=e(c)(e(l).mark((function t(r){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Ae(r),e.next=3,Br(n);case 3:return e.next=5,n.auth._persistUserIfCurrent(n);case 5:n.auth._notifyListenersIfCurrent(n);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function zr(t,r){var n=t.filter((function(e){return!r.some((function(t){return t.providerId===e.providerId}))}));return e(W)(n).concat(e(W)(r))}function Kr(e){return e.map((function(e){var t=e.providerId,r=Kt(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}}))}function Jr(e,t){return Yr.apply(this,arguments)}function Yr(){return(Yr=
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
e(c)(e(l).mark((function t(r,n){var a;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,wr(r,{},e(c)(e(l).mark((function t(){var a,i,o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Se({grant_type:"refresh_token",refresh_token:n}).slice(1),i=r.config,o=i.tokenApiHost,s=i.apiKey,u=Tr(r,o,"/v1/token","key=".concat(s)),e.next=5,r._getAdditionalHeaders();case 5:return(c=e.sent)["Content-Type"]="application/x-www-form-urlencoded",e.abrupt("return",gr.fetch()(u,{method:"POST",headers:c,body:a}));case 8:case"end":return e.stop()}}),t)}))));case 2:return a=t.sent,t.abrupt("return",{accessToken:a.access_token,expiresIn:a.expires_in,refreshToken:a.refresh_token});case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}
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
 */var Xr=function(){"use strict";function t(){e(i)(this,t),this.refreshToken=null,this.accessToken=null,this.expirationTime=null}return e(o)(t,[{key:"isExpired",get:function(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}},{key:"updateFromServerResponse",value:function(e){ar(e.idToken,"internal-error"),ar(void 0!==e.idToken,"internal-error"),ar(void 0!==e.refreshToken,"internal-error");var t,r,n="expiresIn"in e&&void 0!==e.expiresIn?Number(e.expiresIn):(t=e.idToken,ar(r=Ur(t),"internal-error"),ar(void 0!==r.exp,"internal-error"),ar(void 0!==r.iat,"internal-error"),Number(r.exp)-Number(r.iat));this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}},{key:"getToken",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(ar(!n.accessToken||n.refreshToken,t,"user-token-expired"),r||!n.accessToken||n.isExpired){e.next=3;break}return e.abrupt("return",n.accessToken);case 3:if(!n.refreshToken){e.next=7;break}return e.next=6,n.refresh(t,n.refreshToken);case 6:return e.abrupt("return",n.accessToken);case 7:return e.abrupt("return",null);case 8:case"end":return e.stop()}}),a)})))()}},{key:"clearRefreshToken",value:function(){this.refreshToken=null}},{key:"refresh",value:function(t,r){var n=this;return e(c)(e(l).mark((function a(){var i,o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Jr(t,r);case 2:i=e.sent,o=i.accessToken,s=i.refreshToken,u=i.expiresIn,n.updateTokensAndExpiration(o,s,Number(u));case 7:case"end":return e.stop()}}),a)})))()}},{key:"updateTokensAndExpiration",value:function(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*r}},{key:"toJSON",value:function(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}},{key:"_assign",value:function(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}},{key:"_clone",value:function(){return Object.assign(new t,this.toJSON())}},{key:"_performRefresh",value:function(){return ir("not implemented")}}],[{key:"fromJSON",value:function(e,r){var n=r.refreshToken,a=r.accessToken,i=r.expirationTime,o=new t;return n&&(ar("string"==typeof n,"internal-error",{appName:e}),o.refreshToken=n),a&&(ar("string"==typeof a,"internal-error",{appName:e}),o.accessToken=a),i&&(ar("number"==typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}}]),t}();
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
 */function Qr(e,t){ar("string"==typeof e||void 0===e,"internal-error",{appName:t})}var $r=function(){"use strict";function t(r){e(i)(this,t);var n=r.uid,a=r.auth,o=r.stsTokenManager,s=Kt(r,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hr(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=a,this.stsTokenManager=o,this.accessToken=o.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?e(W)(s.providerData):[],this.metadata=new qr(s.createdAt||void 0,s.lastLoginAt||void 0)}return e(o)(t,[{key:"getIdToken",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Fr(r,r.stsTokenManager.getToken(r.auth,t));case 2:if(ar(a=e.sent,r.auth,"internal-error"),r.accessToken===a){e.next=9;break}return r.accessToken=a,e.next=8,r.auth._persistUserIfCurrent(r);case 8:r.auth._notifyListenersIfCurrent(r);case 9:return e.abrupt("return",a);case 10:case"end":return e.stop()}}),n)})))()}},{key:"getIdTokenResult",value:function(e){return function(e){return Pr.apply(this,arguments)}(this,e)}},{key:"reload",value:function(){return function(e){return Gr.apply(this,arguments)}(this)}},{key:"_assign",value:function(e){this!==e&&(ar(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((function(e){return Object.assign({},e)})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}},{key:"_clone",value:function(e){return new t(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}},{key:"_onReload",value:function(e){ar(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}},{key:"_notifyReloadListener",value:function(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}},{key:"_startProactiveRefresh",value:function(){this.proactiveRefresh._start()}},{key:"_stopProactiveRefresh",value:function(){this.proactiveRefresh._stop()}},{key:"_updateTokensIfNecessary",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(c)(e(l).mark((function a(){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i=!1,t.idToken&&t.idToken!==n.stsTokenManager.accessToken&&(n.stsTokenManager.updateFromServerResponse(t),i=!0),!r){e.next=5;break}return e.next=5,Br(n);case 5:return e.next=7,n.auth._persistUserIfCurrent(n);case 7:i&&n.auth._notifyListenersIfCurrent(n);case 8:case"end":return e.stop()}}),a)})))()}},{key:"delete",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getIdToken();case 2:return n=e.sent,e.next=5,Fr(t,Ar(t.auth,{idToken:n}));case 5:return t.stsTokenManager.clearRefreshToken(),e.abrupt("return",t.auth.signOut());case 7:case"end":return e.stop()}}),r)})))()}},{key:"toJSON",value:function(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((function(e){return Object.assign({},e)})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}},{key:"refreshToken",get:function(){return this.stsTokenManager.refreshToken||""}}],[{key:"_fromJSON",value:function(e,r){var n,a,i,o,s,u,c,l,d=null!==(n=r.displayName)&&void 0!==n?n:void 0,f=null!==(a=r.email)&&void 0!==a?a:void 0,h=null!==(i=r.phoneNumber)&&void 0!==i?i:void 0,p=null!==(o=r.photoURL)&&void 0!==o?o:void 0,v=null!==(s=r.tenantId)&&void 0!==s?s:void 0,m=null!==(u=r._redirectEventId)&&void 0!==u?u:void 0,g=null!==(c=r.createdAt)&&void 0!==c?c:void 0,y=null!==(l=r.lastLoginAt)&&void 0!==l?l:void 0,k=r.uid,_=r.emailVerified,b=r.isAnonymous,I=r.providerData,w=r.stsTokenManager;ar(k&&w,e,"internal-error");var E=Xr.fromJSON(this.name,w);ar("string"==typeof k,e,"internal-error"),Qr(d,e.name),Qr(f,e.name),ar("boolean"==typeof _,e,"internal-error"),ar("boolean"==typeof b,e,"internal-error"),Qr(h,e.name),Qr(p,e.name),Qr(v,e.name),Qr(m,e.name),Qr(g,e.name),Qr(y,e.name);var S=new t({uid:k,auth:e,email:f,emailVerified:_,displayName:d,isAnonymous:b,photoURL:p,phoneNumber:h,tenantId:v,stsTokenManager:E,createdAt:g,lastLoginAt:y});return I&&Array.isArray(I)&&(S.providerData=I.map((function(e){return Object.assign({},e)}))),m&&(S._redirectEventId=m),S}},{key:"_fromIdTokenResponse",value:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(c)(e(l).mark((function i(){var o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(o=new Xr).updateFromServerResponse(n),s=new t({uid:n.localId,auth:r,stsTokenManager:o,isAnonymous:a}),e.next=5,Br(s);case 5:return e.abrupt("return",s);case 6:case"end":return e.stop()}}),i)})))()}}]),t}(),Zr=function(){"use strict";function t(){e(i)(this,t),this.type="NONE",this.storage={}}return e(o)(t,[{key:"_isAvailable",value:function(){return e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",!0);case 1:case"end":return e.stop()}}),t)})))()}},{key:"_set",value:function(t,r){var n=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n.storage[t]=r;case 1:case"end":return e.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=r.storage[t],e.abrupt("return",void 0===a?null:a);case 2:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:delete r.storage[t];case 1:case"end":return e.stop()}}),n)})))()}},{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),t}();
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
 */Zr.type="NONE";var en=Zr;
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
 */function tn(e,t,r){return"firebase:".concat(e,":").concat(t,":").concat(r)}var rn=function(){"use strict";function t(r,n,a){e(i)(this,t),this.persistence=r,this.auth=n,this.userKey=a;var o=this.auth,s=o.config,u=o.name;this.fullUserKey=tn(this.userKey,s.apiKey,u),this.fullPersistenceKey=tn("persistence",s.apiKey,u),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}return e(o)(t,[{key:"setCurrentUser",value:function(e){return this.persistence._set(this.fullUserKey,e.toJSON())}},{key:"getCurrentUser",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.persistence._get(t.fullUserKey);case 2:return n=e.sent,e.abrupt("return",n?$r._fromJSON(t.auth,n):null);case 4:case"end":return e.stop()}}),r)})))()}},{key:"removeCurrentUser",value:function(){return this.persistence._remove(this.fullUserKey)}},{key:"savePersistenceForRedirect",value:function(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}},{key:"setPersistence",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.persistence!==t){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,r.getCurrentUser();case 4:return a=e.sent,e.next=7,r.removeCurrentUser();case 7:if(r.persistence=t,!a){e.next=10;break}return e.abrupt("return",r.setCurrentUser(a));case 10:case"end":return e.stop()}}),n)})))()}},{key:"delete",value:function(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}}],[{key:"create",value:function(r,n){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"authUser";return e(c)(e(l).mark((function i(){var o,s,u,d,f,h,p,v,m,g,y,k,_;return e(l).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:if(n.length){i.next=2;break}return i.abrupt("return",new t(ur(en),r,a));case 2:return i.next=4,Promise.all(n.map(function(){var t=e(c)(e(l).mark((function t(r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._isAvailable();case 2:if(!e.sent){e.next=4;break}return e.abrupt("return",r);case 4:return e.abrupt("return",void 0);case 5:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 4:o=i.sent.filter((function(e){return e})),s=o[0]||ur(en),u=tn(a,r.config.apiKey,r.name),d=null,f=!0,h=!1,p=void 0,i.prev=9,v=n[Symbol.iterator]();case 11:if(f=(m=v.next()).done){i.next=29;break}return g=m.value,i.prev=13,i.next=16,g._get(u);case 16:if(!(y=i.sent)){i.next=22;break}return k=$r._fromJSON(r,y),g!==s&&(d=k),s=g,i.abrupt("break",29);case 22:i.next=26;break;case 24:i.prev=24,i.t0=i.catch(13);case 26:f=!0,i.next=11;break;case 29:i.next=35;break;case 31:i.prev=31,i.t1=i.catch(9),h=!0,p=i.t1;case 35:i.prev=35,i.prev=36,f||null==v.return||v.return();case 38:if(i.prev=38,!h){i.next=41;break}throw p;case 41:return i.finish(38);case 42:return i.finish(35);case 43:if(_=o.filter((function(e){return e._shouldAllowMigration})),s._shouldAllowMigration&&_.length){i.next=46;break}return i.abrupt("return",new t(s,r,a));case 46:if(s=_[0],!d){i.next=50;break}return i.next=50,s._set(u,d.toJSON());case 50:return i.next=52,Promise.all(n.map(function(){var t=e(c)(e(l).mark((function t(r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r===s){e.next=8;break}return e.prev=1,e.next=4,r._remove(u);case 4:e.next=8;break;case 6:e.prev=6,e.t0=e.catch(1);case 8:case"end":return e.stop()}}),t,null,[[1,6]])})));return function(e){return t.apply(this,arguments)}}()));case 52:return i.abrupt("return",new t(s,r,a));case 53:case"end":return i.stop()}}),i,null,[[9,31,35,43],[13,24],[36,,38,42]])})))()}}]),t}();
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
 */function nn(e){var t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(un(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(an(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ln(t))return"Blackberry";if(dn(t))return"Webos";if(on(t))return"Safari";if((t.includes("chrome/")||sn(t))&&!t.includes("edge/"))return"Chrome";if(cn(t))return"Android";var r=e.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);return 2===(null==r?void 0:r.length)?r[1]:"Other"}function an(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/firefox\//i.test(e)}function on(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge(),t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function sn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/crios\//i.test(e)}function un(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/iemobile/i.test(e)}function cn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/android/i.test(e)}function ln(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/blackberry/i.test(e)}function dn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/webos/i.test(e)}function fn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function hn(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return fn(t)&&!!(null===(e=window.navigator)||void 0===e?void 0:e.standalone)}function pn(){return((e=ge()).indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0)&&10===document.documentMode;var e}function vn(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge();return fn(e)||cn(e)||dn(e)||ln(e)||/windows phone/i.test(e)||un(e)}
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
function mn(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];switch(e){case"Browser":t=nn(ge());break;case"Worker":t="".concat(nn(ge()),"-").concat(e);break;default:t=e}var n=r.length?r.join(","):"FirebaseCore-web";return"".concat(t,"/","JsCore","/").concat(xt,"/").concat(n)}
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
 */var gn=function(){"use strict";function t(r){e(i)(this,t),this.auth=r,this.queue=[]}return e(o)(t,[{key:"pushCallback",value:function(e,t){var r=this,n=function(t){return new Promise((function(r,n){try{r(e(t))}catch(e){n(e)}}))};n.onAbort=t,this.queue.push(n);var a=this.queue.length-1;return function(){r.queue[a]=function(){return Promise.resolve()}}}},{key:"runMiddleware",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i,o,s,u,c,d,f,h,p,v,m,g,y;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.auth.currentUser!==t){e.next=3;break}return e.abrupt("return");case 3:i=[],e.prev=4,o=!0,s=!1,u=void 0,e.prev=6,c=r.queue[Symbol.iterator]();case 8:if(o=(d=c.next()).done){e.next=16;break}return f=d.value,e.next=12,f(t);case 12:f.onAbort&&i.push(f.onAbort);case 13:o=!0,e.next=8;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(6),s=!0,u=e.t0;case 22:e.prev=22,e.prev=23,o||null==c.return||c.return();case 25:if(e.prev=25,!s){e.next=28;break}throw u;case 28:return e.finish(25);case 29:return e.finish(22);case 30:e.next=53;break;case 32:for(e.prev=32,e.t1=e.catch(4),i.reverse(),h=!0,p=!1,v=void 0,e.prev=36,m=i[Symbol.iterator]();!(h=(g=m.next()).done);h=!0){y=g.value;try{y()}catch(e){}}e.next=44;break;case 40:e.prev=40,e.t2=e.catch(36),p=!0,v=e.t2;case 44:e.prev=44,e.prev=45,h||null==m.return||m.return();case 47:if(e.prev=47,!p){e.next=50;break}throw v;case 50:return e.finish(47);case 51:return e.finish(44);case 52:throw r.auth._errorFactory.create("login-blocked",{originalMessage:null===(a=e.t1)||void 0===a?void 0:a.message});case 53:case"end":return e.stop()}}),n,null,[[4,32],[6,18,22,30],[23,,25,29],[36,40,44,52],[45,,47,51]])})))()}}]),t}(),yn=function(){"use strict";function t(r,n,a){e(i)(this,t),this.app=r,this.heartbeatServiceProvider=n,this.config=a,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new _n(this),this.idTokenSubscription=new _n(this),this.beforeStateQueue=new gn(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Xt,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=r.name,this.clientVersion=a.sdkClientVersion}return e(o)(t,[{key:"_initializeWithPersistence",value:function(t,r){r&&(this._popupRedirectResolver=ur(r));var n=this;return this._initializationPromise=this.queue(e(c)(e(l).mark((function a(){var i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n._deleted){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,rn.create(n,t);case 5:if(n.persistenceManager=e.sent,!n._deleted){e.next=8;break}return e.abrupt("return");case 8:if(!(null===(i=n._popupRedirectResolver)||void 0===i?void 0:i._shouldInitProactively)){e.next=16;break}return e.prev=9,e.next=12,n._popupRedirectResolver._initialize(n);case 12:e.next=16;break;case 14:e.prev=14,e.t0=e.catch(9);case 16:return e.next=18,n.initializeCurrentUser(r);case 18:if(n.lastNotifiedUid=(null===(o=n.currentUser)||void 0===o?void 0:o.uid)||null,!n._deleted){e.next=21;break}return e.abrupt("return");case 21:n._isInitialized=!0;case 22:case"end":return e.stop()}}),a,null,[[9,14]])})))),this._initializationPromise}},{key:"_onStorageEvent",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t._deleted){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,t.assertedPersistence.getCurrentUser();case 4:if(n=e.sent,t.currentUser||n){e.next=7;break}return e.abrupt("return");case 7:if(!t.currentUser||!n||t.currentUser.uid!==n.uid){e.next=12;break}return t._currentUser._assign(n),e.next=11,t.currentUser.getIdToken();case 11:return e.abrupt("return");case 12:return e.next=14,t._updateCurrentUser(n,!0);case 14:case"end":return e.stop()}}),r)})))()}},{key:"initializeCurrentUser",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i,o,s,u,c,d;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,r.assertedPersistence.getCurrentUser();case 3:if(i=e.sent,o=i,s=!1,!t||!r.config.authDomain){e.next=15;break}return e.next=9,r.getOrInitRedirectPersistenceManager();case 9:return u=null===(a=r.redirectUser)||void 0===a?void 0:a._redirectEventId,c=null==o?void 0:o._redirectEventId,e.next=13,r.tryRedirectSignIn(t);case 13:d=e.sent,u&&u!==c||!(null==d?void 0:d.user)||(o=d.user,s=!0);case 15:if(o){e.next=17;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 17:if(o._redirectEventId){e.next=33;break}if(!s){e.next=28;break}return e.prev=19,e.next=22,r.beforeStateQueue.runMiddleware(o);case 22:e.next=28;break;case 24:e.prev=24,e.t0=e.catch(19),o=i,r._popupRedirectResolver._overrideRedirectResult(r,(function(){return Promise.reject(e.t0)}));case 28:if(!o){e.next=32;break}return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 32:return e.abrupt("return",r.directlySetCurrentUser(null));case 33:return ar(r._popupRedirectResolver,r,"argument-error"),e.next=36,r.getOrInitRedirectPersistenceManager();case 36:if(!r.redirectUser||r.redirectUser._redirectEventId!==o._redirectEventId){e.next=38;break}return e.abrupt("return",r.directlySetCurrentUser(o));case 38:return e.abrupt("return",r.reloadAndSetCurrentUserOrClear(o));case 39:case"end":return e.stop()}}),n,null,[[19,24]])})))()}},{key:"tryRedirectSignIn",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=null,e.prev=1,e.next=4,r._popupRedirectResolver._completeRedirectFn(r,t,!0);case 4:a=e.sent,e.next=11;break;case 7:return e.prev=7,e.t0=e.catch(1),e.next=11,r._setRedirectUser(null);case 11:return e.abrupt("return",a);case 12:case"end":return e.stop()}}),n,null,[[1,7]])})))()}},{key:"reloadAndSetCurrentUserOrClear",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=1,e.next=4,Br(t);case 4:e.next=10;break;case 6:if(e.prev=6,e.t0=e.catch(1),"auth/network-request-failed"===(null===(a=e.t0)||void 0===a?void 0:a.code)){e.next=10;break}return e.abrupt("return",r.directlySetCurrentUser(null));case 10:return e.abrupt("return",r.directlySetCurrentUser(t));case 11:case"end":return e.stop()}}),n,null,[[1,6]])})))()}},{key:"useDeviceLanguage",value:function(){this.languageCode=function(){if("undefined"==typeof navigator)return null;var e=navigator;return e.languages&&e.languages[0]||e.language||null}()}},{key:"_delete",value:function(){var t=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t._deleted=!0;case 1:case"end":return e.stop()}}),r)})))()}},{key:"updateCurrentUser",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=t?Ae(t):null)&&ar(a.auth.config.apiKey===r.config.apiKey,r,"invalid-user-token"),e.abrupt("return",r._updateCurrentUser(a&&a._clone(r)));case 3:case"end":return e.stop()}}),n)})))()}},{key:"_updateCurrentUser",value:function(t){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(!n._deleted){a.next=2;break}return a.abrupt("return");case 2:if(t&&ar(n.tenantId===t.tenantId,n,"tenant-id-mismatch"),r){a.next=6;break}return a.next=6,n.beforeStateQueue.runMiddleware(t);case 6:return a.abrupt("return",n.queue(e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.directlySetCurrentUser(t);case 2:n.notifyAuthListeners();case 3:case"end":return e.stop()}}),r)})))));case 7:case"end":return a.stop()}}),a)})))()}},{key:"signOut",value:function(){var t=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.beforeStateQueue.runMiddleware(null);case 2:if(!t.redirectPersistenceManager&&!t._popupRedirectResolver){e.next=5;break}return e.next=5,t._setRedirectUser(null);case 5:return e.abrupt("return",t._updateCurrentUser(null,!0));case 6:case"end":return e.stop()}}),r)})))()}},{key:"setPersistence",value:function(t){var r=this;return this.queue(e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.assertedPersistence.setPersistence(ur(t));case 2:case"end":return e.stop()}}),n)}))))}},{key:"_getPersistence",value:function(){return this.assertedPersistence.persistence.type}},{key:"_updateErrorMap",value:function(e){this._errorFactory=new ke("auth","Firebase",e())}},{key:"onAuthStateChanged",value:function(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}},{key:"beforeAuthStateChanged",value:function(e,t){return this.beforeStateQueue.pushCallback(e,t)}},{key:"onIdTokenChanged",value:function(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}},{key:"toJSON",value:function(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}},{key:"_setRedirectUser",value:function(t,r){var n=this;return e(c)(e(l).mark((function a(){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n.getOrInitRedirectPersistenceManager(r);case 2:return i=e.sent,e.abrupt("return",null===t?i.removeCurrentUser():i.setCurrentUser(t));case 4:case"end":return e.stop()}}),a)})))()}},{key:"getOrInitRedirectPersistenceManager",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.redirectPersistenceManager){e.next=9;break}return ar(a=t&&ur(t)||r._popupRedirectResolver,r,"argument-error"),e.next=5,rn.create(r,[ur(a._redirectPersistence)],"redirectUser");case 5:return r.redirectPersistenceManager=e.sent,e.next=8,r.redirectPersistenceManager.getCurrentUser();case 8:r.redirectUser=e.sent;case 9:return e.abrupt("return",r.redirectPersistenceManager);case 10:case"end":return e.stop()}}),n)})))()}},{key:"_redirectUserForId",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!r._isInitialized){n.next=4;break}return n.next=4,r.queue(e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)}))));case 4:if((null===(a=r._currentUser)||void 0===a?void 0:a._redirectEventId)!==t){n.next=6;break}return n.abrupt("return",r._currentUser);case 6:if((null===(i=r.redirectUser)||void 0===i?void 0:i._redirectEventId)!==t){n.next=8;break}return n.abrupt("return",r.redirectUser);case 8:return n.abrupt("return",null);case 9:case"end":return n.stop()}}),n)})))()}},{key:"_persistUserIfCurrent",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(t!==r.currentUser){n.next=2;break}return n.abrupt("return",r.queue(e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r.directlySetCurrentUser(t));case 1:case"end":return e.stop()}}),n)})))));case 2:case"end":return n.stop()}}),n)})))()}},{key:"_notifyListenersIfCurrent",value:function(e){e===this.currentUser&&this.notifyAuthListeners()}},{key:"_key",value:function(){return"".concat(this.config.authDomain,":").concat(this.config.apiKey,":").concat(this.name)}},{key:"_startProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}},{key:"_stopProactiveRefresh",value:function(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}},{key:"_currentUser",get:function(){return this.currentUser}},{key:"notifyAuthListeners",value:function(){var e,t;if(this._isInitialized){this.idTokenSubscription.next(this.currentUser);var r=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}}},{key:"registerStateListener",value:function(e,t,r,n){var a=this;if(this._deleted)return function(){};var i="function"==typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return ar(o,this,"internal-error"),o.then((function(){return i(a.currentUser)})),"function"==typeof t?e.addObserver(t,r,n):e.addObserver(t)}},{key:"directlySetCurrentUser",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.currentUser&&r.currentUser!==t&&(r._currentUser._stopProactiveRefresh(),t&&r.isProactiveRefreshEnabled&&t._startProactiveRefresh()),r.currentUser=t,!t){e.next=7;break}return e.next=5,r.assertedPersistence.setCurrentUser(t);case 5:e.next=9;break;case 7:return e.next=9,r.assertedPersistence.removeCurrentUser();case 9:case"end":return e.stop()}}),n)})))()}},{key:"queue",value:function(e){return this.operations=this.operations.then(e,e),this.operations}},{key:"assertedPersistence",get:function(){return ar(this.persistenceManager,this,"internal-error"),this.persistenceManager}},{key:"_logFramework",value:function(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=mn(this.config.clientPlatform,this._getFrameworks()))}},{key:"_getFrameworks",value:function(){return this.frameworks}},{key:"_getAdditionalHeaders",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n,a,i;return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e(B)({},"X-Client-Version",t.clientVersion),t.app.options.appId&&(a["X-Firebase-gmpid"]=t.app.options.appId),r.next=5,null===(n=t.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===n?void 0:n.getHeartbeatsHeader();case 5:return(i=r.sent)&&(a["X-Firebase-Client"]=i),r.abrupt("return",a);case 8:case"end":return r.stop()}}),r)})))()}}]),t}();
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
 */function kn(e){return Ae(e)}var _n=function(){"use strict";function t(r){var n,a,o=this;e(i)(this,t),this.auth=r,this.observer=null,this.addObserver=(a=new Oe((function(e){return o.observer=e}),n)).subscribe.bind(a)}return e(o)(t,[{key:"next",get:function(){return ar(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}]),t}();
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
var bn=function(){"use strict";function t(r,n){e(i)(this,t),this.providerId=r,this.signInMethod=n}return e(o)(t,[{key:"toJSON",value:function(){return ir("not implemented")}},{key:"_getIdTokenResponse",value:function(e){return ir("not implemented")}},{key:"_linkToIdToken",value:function(e,t){return ir("not implemented")}},{key:"_getReauthenticationResolver",value:function(e){return ir("not implemented")}}]),t}();function In(e,t){return wn.apply(this,arguments)}function wn(){return(wn=e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",br(r,"POST","/v1/accounts:update",n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function En(e,t){return Sn.apply(this,arguments)}function Sn(){return(Sn=
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
e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithPassword",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function xn(e,t){return Tn.apply(this,arguments)}function Tn(){return(Tn=
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
e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithEmailLink",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function On(e,t){return Nn.apply(this,arguments)}function Nn(){return(Nn=e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithEmailLink",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var An=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t,a,o){var s,u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return e(i)(this,n),(s=r.call(this,"password",o))._email=t,s._password=a,s._tenantId=u,s}return e(o)(n,[{key:"toJSON",value:function(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}},{key:"_getIdTokenResponse",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=r.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",En(t,{returnSecureToken:!0,email:r._email,password:r._password}));case 4:return e.abrupt("return",xn(t,{email:r._email,oobCode:r._password}));case 5:er(t,"internal-error");case 6:case"end":return e.stop()}}),n)})))()}},{key:"_linkToIdToken",value:function(t,r){var n=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.t0=n.signInMethod,e.next="password"===e.t0?3:"emailLink"===e.t0?4:5;break;case 3:return e.abrupt("return",In(t,{idToken:r,returnSecureToken:!0,email:n._email,password:n._password}));case 4:return e.abrupt("return",On(t,{idToken:r,email:n._email,oobCode:n._password}));case 5:er(t,"internal-error");case 6:case"end":return e.stop()}}),a)})))()}},{key:"_getReauthenticationResolver",value:function(e){return this._getIdTokenResponse(e)}}],[{key:"_fromEmailAndPassword",value:function(e,t){return new n(e,t,"password")}},{key:"_fromEmailAndCode",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return new n(e,t,"emailLink",r)}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e;if((null==t?void 0:t.email)&&(null==t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}}]),n}(bn);function Rn(e,t){return Ln.apply(this,arguments)}function Ln(){return(Ln=
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
e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithIdp",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Dn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){var t;return e(i)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).pendingToken=null,t}return e(o)(n,[{key:"toJSON",value:function(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}},{key:"_getIdTokenResponse",value:function(e){return Rn(e,this.buildRequest())}},{key:"_linkToIdToken",value:function(e,t){var r=this.buildRequest();return r.idToken=t,Rn(e,r)}},{key:"_getReauthenticationResolver",value:function(e){var t=this.buildRequest();return t.autoCreate=!1,Rn(e,t)}},{key:"buildRequest",value:function(){var e={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{var t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Se(t)}return e}}],[{key:"_fromParams",value:function(e){var t=new n(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):er("argument-error"),t}},{key:"fromJSON",value:function(e){var t="string"==typeof e?JSON.parse(e):e,r=t.providerId,a=t.signInMethod,i=Kt(t,["providerId","signInMethod"]);if(!r||!a)return null;var o=new n(r,a);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}}]),n}(bn);function Cn(e,t){return Pn.apply(this,arguments)}function Pn(){return(Pn=
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
e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",br(r,"POST","/v1/accounts:sendVerificationCode",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Mn(){return(Mn=e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Un(){return(Un=e(c)(e(l).mark((function t(r,n){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",_r(r,n));case 2:if(!(a=e.sent).temporaryProof){e.next=5;break}throw Nr(r,"account-exists-with-different-credential",a);case 5:return e.abrupt("return",a);case 6:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var Fn=e(B)({},"USER_NOT_FOUND","user-not-found");function jn(){return(jn=e(c)(e(l).mark((function t(r,n){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Object.assign(Object.assign({},n),{operation:"REAUTH"}),e.abrupt("return",Sr(r,"POST","/v1/accounts:signInWithPhoneNumber",_r(r,a),Fn));case 2:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var Vn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t){var a;return e(i)(this,n),(a=r.call(this,"phone","phone")).params=t,a}return e(o)(n,[{key:"_getIdTokenResponse",value:function(e){return function(e,t){return Mn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_linkToIdToken",value:function(e,t){return function(e,t){return Un.apply(this,arguments)}(e,Object.assign({idToken:t},this._makeVerificationRequest()))}},{key:"_getReauthenticationResolver",value:function(e){return function(e,t){return jn.apply(this,arguments)}(e,this._makeVerificationRequest())}},{key:"_makeVerificationRequest",value:function(){var e=this.params,t=e.temporaryProof,r=e.phoneNumber,n=e.verificationId,a=e.verificationCode;return t&&r?{temporaryProof:t,phoneNumber:r}:{sessionInfo:n,code:a}}},{key:"toJSON",value:function(){var e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}}],[{key:"_fromVerification",value:function(e,t){return new n({verificationId:e,verificationCode:t})}},{key:"_fromTokenResponse",value:function(e,t){return new n({phoneNumber:e,temporaryProof:t})}},{key:"fromJSON",value:function(e){"string"==typeof e&&(e=JSON.parse(e));var t=e.verificationId,r=e.verificationCode,a=e.phoneNumber,i=e.temporaryProof;return r||t||a||i?new n({verificationId:t,verificationCode:r,phoneNumber:a,temporaryProof:i}):null}}]),n}(bn);
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
 */var Hn=function(){"use strict";function t(r){var n,a,o,s,u,c;e(i)(this,t);var l=xe(Te(r)),d=null!==(n=l.apiKey)&&void 0!==n?n:null,f=null!==(a=l.oobCode)&&void 0!==a?a:null,h=function(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(o=l.mode)&&void 0!==o?o:null);ar(d&&f&&h,"argument-error"),this.apiKey=d,this.operation=h,this.code=f,this.continueUrl=null!==(s=l.continueUrl)&&void 0!==s?s:null,this.languageCode=null!==(u=l.languageCode)&&void 0!==u?u:null,this.tenantId=null!==(c=l.tenantId)&&void 0!==c?c:null}return e(o)(t,null,[{key:"parseLink",value:function(e){var r=function(e){var t=xe(Te(e)).link,r=t?xe(Te(t)).deep_link_id:null,n=xe(Te(e)).deep_link_id;return(n?xe(Te(n)).link:null)||n||r||t||e}(e);try{return new t(r)}catch(e){return null}}}]),t}();
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
var qn=function(){"use strict";function t(){e(i)(this,t),this.providerId=t.PROVIDER_ID}return e(o)(t,null,[{key:"credential",value:function(e,t){return An._fromEmailAndPassword(e,t)}},{key:"credentialWithLink",value:function(e,t){var r=Hn.parseLink(t);return ar(r,"argument-error"),An._fromEmailAndCode(e,r.code,r.tenantId)}}]),t}();qn.PROVIDER_ID="password",qn.EMAIL_PASSWORD_SIGN_IN_METHOD="password",qn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
var Bn=function(){"use strict";function t(r){e(i)(this,t),this.providerId=r,this.defaultLanguageCode=null,this.customParameters={}}return e(o)(t,[{key:"setDefaultLanguage",value:function(e){this.defaultLanguageCode=e}},{key:"setCustomParameters",value:function(e){return this.customParameters=e,this}},{key:"getCustomParameters",value:function(){return this.customParameters}}]),t}(),Wn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){var t;return e(i)(this,n),(t=r.call.apply(r,[this].concat(Array.prototype.slice.call(arguments)))).scopes=[],t}return e(o)(n,[{key:"addScope",value:function(e){return this.scopes.includes(e)||this.scopes.push(e),this}},{key:"getScopes",value:function(){return e(W)(this.scopes)}}]),n}(Bn),Gn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){return e(i)(this,n),r.call(this,"facebook.com")}return e(o)(n,null,[{key:"credential",value:function(e){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Wn);
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
 */Gn.FACEBOOK_SIGN_IN_METHOD="facebook.com",Gn.PROVIDER_ID="facebook.com";
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
var zn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){var t;return e(i)(this,n),(t=r.call(this,"google.com")).addScope("profile"),t}return e(o)(n,null,[{key:"credential",value:function(e,t){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthIdToken,a=t.oauthAccessToken;if(!r&&!a)return null;try{return n.credential(r,a)}catch(e){return null}}}]),n}(Wn);zn.GOOGLE_SIGN_IN_METHOD="google.com",zn.PROVIDER_ID="google.com";
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
var Kn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){return e(i)(this,n),r.call(this,"github.com")}return e(o)(n,null,[{key:"credential",value:function(e){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.GITHUB_SIGN_IN_METHOD,accessToken:e})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t||!("oauthAccessToken"in t))return null;if(!t.oauthAccessToken)return null;try{return n.credential(t.oauthAccessToken)}catch(e){return null}}}]),n}(Wn);Kn.GITHUB_SIGN_IN_METHOD="github.com",Kn.PROVIDER_ID="github.com";
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
var Jn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){return e(i)(this,n),r.call(this,"twitter.com")}return e(o)(n,null,[{key:"credential",value:function(e,t){return Dn._fromParams({providerId:n.PROVIDER_ID,signInMethod:n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}},{key:"credentialFromResult",value:function(e){return n.credentialFromTaggedObject(e)}},{key:"credentialFromError",value:function(e){return n.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.oauthAccessToken,a=t.oauthTokenSecret;if(!r||!a)return null;try{return n.credential(r,a)}catch(e){return null}}}]),n}(Wn);function Yn(e,t){return Xn.apply(this,arguments)}function Xn(){return(Xn=
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
e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Sr(r,"POST","/v1/accounts:signUp",_r(r,n)));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */Jn.TWITTER_SIGN_IN_METHOD="twitter.com",Jn.PROVIDER_ID="twitter.com";var Qn=function(){"use strict";function t(r){e(i)(this,t),this.user=r.user,this.providerId=r.providerId,this._tokenResponse=r._tokenResponse,this.operationType=r.operationType}return e(o)(t,null,[{key:"_fromIdTokenResponse",value:function(r,n,a){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return e(c)(e(l).mark((function o(){var s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,$r._fromIdTokenResponse(r,a,i);case 2:return s=e.sent,u=$n(a),c=new t({user:s,providerId:u,_tokenResponse:a,operationType:n}),e.abrupt("return",c);case 6:case"end":return e.stop()}}),o)})))()}},{key:"_forOperation",value:function(r,n,a){return e(c)(e(l).mark((function i(){var o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._updateTokensIfNecessary(a,!0);case 2:return o=$n(a),e.abrupt("return",new t({user:r,providerId:o,_tokenResponse:a,operationType:n}));case 4:case"end":return e.stop()}}),i)})))()}}]),t}();function $n(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
var Zn=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t,a,o,s){var u,c;return e(i)(this,n),(u=r.call(this,a.code,a.message)).operationType=o,u.user=s,Object.setPrototypeOf(e(re)(u),n.prototype),u.customData={appName:t.name,tenantId:null!==(c=t.tenantId)&&void 0!==c?c:void 0,_serverResponse:a.customData._serverResponse,operationType:o},u}return e(o)(n,null,[{key:"_fromErrorAndOperation",value:function(e,t,r,a){return new n(e,t,r,a)}}]),n}(ye);function ea(e,t,r,n){return("reauthenticate"===t?r._getReauthenticationResolver(e):r._getIdTokenResponse(e)).catch((function(r){if("auth/multi-factor-auth-required"===r.code)throw Zn._fromErrorAndOperation(e,r,t,n);throw r}))}
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
 */function ta(e,t){return ra.apply(this,arguments)}function ra(){return ra=e(c)(e(l).mark((function t(r,n){var a,i,o=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=o.length>2&&void 0!==o[2]&&o[2],e.t0=Fr,e.t1=r,e.t2=n,e.t3=r.auth,e.next=7,r.getIdToken();case 7:return e.t4=e.sent,e.t5=e.t2._linkToIdToken.call(e.t2,e.t3,e.t4),e.t6=a,e.next=12,(0,e.t0)(e.t1,e.t5,e.t6);case 12:return i=e.sent,e.abrupt("return",Qn._forOperation(r,"link",i));case 14:case"end":return e.stop()}}),t)}))),ra.apply(this,arguments)}function na(e,t){return aa.apply(this,arguments)}function aa(){return aa=
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
e(c)(e(l).mark((function t(r,n){var a,i,o,s,u,c,d,f=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=f.length>2&&void 0!==f[2]&&f[2],o=r.auth,s="reauthenticate",e.prev=4,e.next=7,Fr(r,ea(o,s,n,r),a);case 7:return ar((u=e.sent).idToken,o,"internal-error"),ar(c=Ur(u.idToken),o,"internal-error"),d=c.sub,ar(r.uid===d,o,"user-mismatch"),e.abrupt("return",Qn._forOperation(r,s,u));case 16:throw e.prev=16,e.t0=e.catch(4),"auth/user-not-found"===(null===(i=e.t0)||void 0===i?void 0:i.code)&&er(o,"user-mismatch"),e.t0;case 20:case"end":return e.stop()}}),t,null,[[4,16]])}))),aa.apply(this,arguments)}function ia(e,t){return oa.apply(this,arguments)}function oa(){return oa=
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
e(c)(e(l).mark((function t(r,n){var a,i,o,s,u=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=u.length>2&&void 0!==u[2]&&u[2],i="signIn",e.next=4,ea(r,i,n);case 4:return o=e.sent,e.next=7,Qn._fromIdTokenResponse(r,i,o);case 7:if(s=e.sent,a){e.next=11;break}return e.next=11,r._updateCurrentUser(s.user);case 11:return e.abrupt("return",s);case 12:case"end":return e.stop()}}),t)}))),oa.apply(this,arguments)}function sa(e,t){return ua.apply(this,arguments)}function ua(){return(ua=e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",ia(kn(r),n));case 1:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function ca(e,t,r){return la.apply(this,arguments)}function la(){return(la=e(c)(e(l).mark((function t(r,n,a){var i,o,s;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=kn(r),e.next=3,Yn(i,{returnSecureToken:!0,email:n,password:a});case 3:return o=e.sent,e.next=6,Qn._fromIdTokenResponse(i,"signIn",o);case 6:return s=e.sent,e.next=9,i._updateCurrentUser(s.user);case 9:return e.abrupt("return",s);case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function da(e,t,r,n){return Ae(e).onAuthStateChanged(t,r,n)}
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
function fa(e,t){return br(e,"POST","/v2/accounts/mfaEnrollment:start",_r(e,t))}new WeakMap;var ha="__sak",pa=function(){"use strict";function t(r,n){e(i)(this,t),this.storageRetriever=r,this.type=n}return e(o)(t,[{key:"_isAvailable",value:function(){try{return this.storage?(this.storage.setItem(ha,"1"),this.storage.removeItem(ha),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}},{key:"_set",value:function(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}},{key:"_get",value:function(e){var t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}},{key:"_remove",value:function(e){return this.storage.removeItem(e),Promise.resolve()}},{key:"storage",get:function(){return this.storageRetriever()}}]),t}();
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
 */var va=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){var t,a;return e(i)(this,n),(t=r.call(this,(function(){return window.localStorage}),"LOCAL")).boundEventHandler=function(e,r){return t.onStorageEvent(e,r)},t.listeners={},t.localCache={},t.pollTimer=null,t.safariLocalStorageNotSynced=(on(a=ge())||fn(a))&&function(){try{return!(!window||window===window.top)}catch(e){return!1}}(),t.fallbackToPolling=vn(),t._shouldAllowMigration=!0,t}return e(o)(n,[{key:"forAllChangedKeys",value:function(e){var t=!0,r=!1,n=void 0;try{for(var a,i=Object.keys(this.listeners)[Symbol.iterator]();!(t=(a=i.next()).done);t=!0){var o=a.value,s=this.storage.getItem(o),u=this.localCache[o];s!==u&&e(o,u,s)}}catch(e){r=!0,n=e}finally{try{t||null==i.return||i.return()}finally{if(r)throw n}}}},{key:"onStorageEvent",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=this;if(e.key){var n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){var a=this.storage.getItem(n);if(e.newValue!==a)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}var i=function(){var e=r.storage.getItem(n);(t||r.localCache[n]!==e)&&r.notifyListeners(n,e)},o=this.storage.getItem(n);pn()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,10):i()}else{var s=this;this.forAllChangedKeys((function(e,t,r){s.notifyListeners(e,r)}))}}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,a=!1,i=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t?JSON.parse(t):t)}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){var e=this;this.stopPolling(),this.pollTimer=setInterval((function(){var t=e;e.forAllChangedKeys((function(e,r,n){t.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:r,newValue:n}),!0)}))}),1e3)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"attachListener",value:function(){window.addEventListener("storage",this.boundEventHandler)}},{key:"detachListener",value:function(){window.removeEventListener("storage",this.boundEventHandler)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}},{key:"_set",value:function(t,r){var a=this,i=this;return e(c)(e(l).mark((function o(){return e(l).wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,e(Bt)(e(zt)(n.prototype),"_set",a).call(i,t,r);case 2:i.localCache[t]=JSON.stringify(r);case 3:case"end":return o.stop()}}),o)})))()}},{key:"_get",value:function(t){var r=this,a=this;return e(c)(e(l).mark((function i(){var o;return e(l).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(Bt)(e(zt)(n.prototype),"_get",r).call(a,t);case 2:return o=i.sent,a.localCache[t]=JSON.stringify(o),i.abrupt("return",o);case 5:case"end":return i.stop()}}),i)})))()}},{key:"_remove",value:function(t){var r=this,a=this;return e(c)(e(l).mark((function i(){return e(l).wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.next=2,e(Bt)(e(zt)(n.prototype),"_remove",r).call(a,t);case 2:delete a.localCache[t];case 3:case"end":return i.stop()}}),i)})))()}}]),n}(pa);va.type="LOCAL";var ma=va,ga=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(){return e(i)(this,n),r.call(this,(function(){return window.sessionStorage}),"SESSION")}return e(o)(n,[{key:"_addListener",value:function(e,t){}},{key:"_removeListener",value:function(e,t){}}]),n}(pa);
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
 */ga.type="SESSION";var ya=ga;
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
 */function ka(t){return Promise.all(t.map((r=e(c)(e(l).mark((function t(r){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,r;case 3:return n=e.sent,e.abrupt("return",{fulfilled:!0,value:n});case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",{fulfilled:!1,reason:e.t0});case 10:case"end":return e.stop()}}),t,null,[[0,7]])}))),function(e){return r.apply(this,arguments)})));var r}
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
 */var _a=function(){"use strict";function t(r){e(i)(this,t),this.eventTarget=r,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}return e(o)(t,[{key:"isListeningto",value:function(e){return this.eventTarget===e}},{key:"handleEvent",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i,o,s,u,d,f,h;return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(i=(a=t).data,o=i.eventId,s=i.eventType,u=i.data,null==(d=r.handlersMap[s])?void 0:d.size){n.next=5;break}return n.abrupt("return");case 5:return a.ports[0].postMessage({status:"ack",eventId:o,eventType:s}),f=Array.from(d).map(function(){var t=e(c)(e(l).mark((function t(r){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",r(a.origin,u));case 1:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n.next=9,ka(f);case 9:h=n.sent,a.ports[0].postMessage({status:"done",eventId:o,eventType:s,response:h});case 11:case"end":return n.stop()}}),n)})))()}},{key:"_subscribe",value:function(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}},{key:"_unsubscribe",value:function(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}],[{key:"_getInstance",value:function(e){var r=this.receivers.find((function(t){return t.isListeningto(e)}));if(r)return r;var n=new t(e);return this.receivers.push(n),n}}]),t}();
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
function ba(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,r="",n=0;n<t;n++)r+=Math.floor(10*Math.random());return e+r}
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
 */_a.receivers=[];var Ia=function(){"use strict";function t(r){e(i)(this,t),this.target=r,this.handlers=new Set}return e(o)(t,[{key:"removeMessageHandler",value:function(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}},{key:"_send",value:function(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:50,a=this;return e(c)(e(l).mark((function i(){var o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o="undefined"!=typeof MessageChannel?new MessageChannel:null){e.next=3;break}throw new Error("connection_unavailable");case 3:return e.abrupt("return",new Promise((function(e,i){var c=ba("",20);o.port1.start();var l=setTimeout((function(){i(new Error("unsupported_event"))}),n);u={messageChannel:o,onMessage:function(t){var r=t;if(r.data.eventId===c)switch(r.data.status){case"ack":clearTimeout(l),s=setTimeout((function(){i(new Error("timeout"))}),3e3);break;case"done":clearTimeout(s),e(r.data.response);break;default:clearTimeout(l),clearTimeout(s),i(new Error("invalid_response"))}}},a.handlers.add(u),o.port1.addEventListener("message",u.onMessage),a.target.postMessage({eventType:t,eventId:c,data:r},[o.port2])})).finally((function(){u&&a.removeMessageHandler(u)})));case 6:case"end":return e.stop()}}),i)})))()}}]),t}();
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
 */function wa(){return window}
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
function Ea(){return void 0!==wa().WorkerGlobalScope&&"function"==typeof wa().importScripts}function Sa(){return xa.apply(this,arguments)}function xa(){return(xa=e(c)(e(l).mark((function t(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null===navigator||void 0===navigator?void 0:navigator.serviceWorker){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,navigator.serviceWorker.ready;case 5:return r=e.sent,e.abrupt("return",r.active);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",null);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}
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
var Ta="firebaseLocalStorageDb",Oa="firebaseLocalStorage",Na="fbase_key",Aa=function(){"use strict";function t(r){e(i)(this,t),this.request=r}return e(o)(t,[{key:"toPromise",value:function(){var e=this;return new Promise((function(t,r){var n=e;e.request.addEventListener("success",(function(){t(n.request.result)})),e.request.addEventListener("error",(function(){r(n.request.error)}))}))}}]),t}();function Ra(e,t){return e.transaction([Oa],t?"readwrite":"readonly").objectStore(Oa)}function La(){var e=indexedDB.deleteDatabase(Ta);return new Aa(e).toPromise()}function Da(){var t=indexedDB.open(Ta,1);return new Promise((function(r,n){t.addEventListener("error",(function(){n(t.error)})),t.addEventListener("upgradeneeded",(function(){var e=t.result;try{e.createObjectStore(Oa,{keyPath:Na})}catch(e){n(e)}})),t.addEventListener("success",e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if((a=t.result).objectStoreNames.contains(Oa)){e.next=12;break}return a.close(),e.next=5,La();case 5:return e.t0=r,e.next=8,Da();case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=13;break;case 12:r(a);case 13:case"end":return e.stop()}}),n)}))))}))}function Ca(e,t,r){return Pa.apply(this,arguments)}function Pa(){return(Pa=e(c)(e(l).mark((function t(r,n,a){var i,o;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=Ra(r,!0).put((i={},e(B)(i,Na,n),e(B)(i,"value",a),i)),t.abrupt("return",new Aa(o).toPromise());case 3:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function Ma(e,t){return Ua.apply(this,arguments)}function Ua(){return(Ua=e(c)(e(l).mark((function t(r,n){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=Ra(r,!1).get(n),e.next=3,new Aa(a).toPromise();case 3:return i=e.sent,e.abrupt("return",void 0===i?null:i.value);case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function Fa(e,t){var r=Ra(e,!0).delete(t);return new Aa(r).toPromise()}var ja=function(){"use strict";function t(){e(i)(this,t),this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((function(){}),(function(){}))}return e(o)(t,[{key:"_openDb",value:function(){var t=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t.db){e.next=2;break}return e.abrupt("return",t.db);case 2:return e.next=4,Da();case 4:return t.db=e.sent,e.abrupt("return",t.db);case 6:case"end":return e.stop()}}),r)})))()}},{key:"_withRetries",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:return e.prev=2,e.next=5,r._openDb();case 5:return i=e.sent,e.next=8,t(i);case 8:return e.abrupt("return",e.sent);case 11:if(e.prev=11,e.t0=e.catch(2),!(a++>3)){e.next=15;break}throw e.t0;case 15:r.db&&(r.db.close(),r.db=void 0);case 16:e.next=1;break;case 18:case"end":return e.stop()}}),n,null,[[2,11]])})))()}},{key:"initializeServiceWorkerMessaging",value:function(){var t=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Ea()?t.initializeReceiver():t.initializeSender());case 1:case"end":return e.stop()}}),r)})))()}},{key:"initializeReceiver",value:function(){var t=this;return e(c)(e(l).mark((function r(){return e(l).wrap((function(r){for(;;)switch(r.prev=r.next){case 0:t.receiver=_a._getInstance(Ea()?self:null),t.receiver._subscribe("keyChanged",function(){var r=e(c)(e(l).mark((function r(n,a){var i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._poll();case 2:return i=e.sent,e.abrupt("return",{keyProcessed:i.includes(a.key)});case 4:case"end":return e.stop()}}),r)})));return function(e,t){return r.apply(this,arguments)}}()),t.receiver._subscribe("ping",function(){var t=e(c)(e(l).mark((function t(r,n){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",["keyChanged"]);case 1:case"end":return e.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}());case 3:case"end":return r.stop()}}),r)})))()}},{key:"initializeSender",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,Sa();case 3:if(t.activeServiceWorker=e.sent,t.activeServiceWorker){e.next=6;break}return e.abrupt("return");case 6:return t.sender=new Ia(t.activeServiceWorker),e.next=9,t.sender._send("ping",{},800);case 9:if(i=e.sent){e.next=12;break}return e.abrupt("return");case 12:(null===(n=i[0])||void 0===n?void 0:n.fulfilled)&&(null===(a=i[0])||void 0===a?void 0:a.value.includes("keyChanged"))&&(t.serviceWorkerReceiverAvailable=!0);case 13:case"end":return e.stop()}}),r)})))()}},{key:"notifyServiceWorker",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.sender&&r.activeServiceWorker&&(n=void 0,((null===(n=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===n?void 0:n.controller)||null)===r.activeServiceWorker)){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,r.sender._send("keyChanged",{key:t},r.serviceWorkerReceiverAvailable?800:50);case 5:e.next=9;break;case 7:e.prev=7,e.t0=e.catch(2);case 9:case"end":return e.stop()}var n}),n,null,[[2,7]])})))()}},{key:"_isAvailable",value:function(){return e(c)(e(l).mark((function t(){var r;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,indexedDB){e.next=3;break}return e.abrupt("return",!1);case 3:return e.next=5,Da();case 5:return r=e.sent,e.next=8,Ca(r,ha,"1");case 8:return e.next=10,Fa(r,ha);case 10:return e.abrupt("return",!0);case 13:e.prev=13,e.t0=e.catch(0);case 15:return e.abrupt("return",!1);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))()}},{key:"_withPendingWrite",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingWrites++,e.prev=1,e.next=4,t();case 4:return e.prev=4,r.pendingWrites--,e.finish(4);case 7:case"end":return e.stop()}}),n,null,[[1,,4,7]])})))()}},{key:"_set",value:function(t,r){var n=this;return e(c)(e(l).mark((function a(){return e(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",n._withPendingWrite(e(c)(e(l).mark((function a(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,n._withRetries((function(e){return Ca(e,t,r)}));case 2:return n.localCache[t]=r,e.abrupt("return",n.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),a)})))));case 1:case"end":return a.stop()}}),a)})))()}},{key:"_get",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Ma(e,t)}));case 2:return a=e.sent,r.localCache[t]=a,e.abrupt("return",a);case 5:case"end":return e.stop()}}),n)})))()}},{key:"_remove",value:function(t){var r=this;return e(c)(e(l).mark((function n(){return e(l).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",r._withPendingWrite(e(c)(e(l).mark((function n(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r._withRetries((function(e){return Fa(e,t)}));case 2:return delete r.localCache[t],e.abrupt("return",r.notifyServiceWorker(t));case 4:case"end":return e.stop()}}),n)})))));case 1:case"end":return n.stop()}}),n)})))()}},{key:"_poll",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n,a,i,o,s,u,c,d,f,h,p,v,m,g,y,k,_;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t._withRetries((function(e){var t=Ra(e,!1).getAll();return new Aa(t).toPromise()}));case 2:if(n=e.sent){e.next=5;break}return e.abrupt("return",[]);case 5:if(0===t.pendingWrites){e.next=7;break}return e.abrupt("return",[]);case 7:for(a=[],i=new Set,o=!0,s=!1,u=void 0,e.prev=10,c=n[Symbol.iterator]();!(o=(d=c.next()).done);o=!0)f=d.value,h=f.fbase_key,p=f.value,i.add(h),JSON.stringify(t.localCache[h])!==JSON.stringify(p)&&(t.notifyListeners(h,p),a.push(h));e.next=18;break;case 14:e.prev=14,e.t0=e.catch(10),s=!0,u=e.t0;case 18:e.prev=18,e.prev=19,o||null==c.return||c.return();case 21:if(e.prev=21,!s){e.next=24;break}throw u;case 24:return e.finish(21);case 25:return e.finish(18);case 26:for(v=!0,m=!1,g=void 0,e.prev=27,y=Object.keys(t.localCache)[Symbol.iterator]();!(v=(k=y.next()).done);v=!0)_=k.value,t.localCache[_]&&!i.has(_)&&(t.notifyListeners(_,null),a.push(_));e.next=35;break;case 31:e.prev=31,e.t1=e.catch(27),m=!0,g=e.t1;case 35:e.prev=35,e.prev=36,v||null==y.return||y.return();case 38:if(e.prev=38,!m){e.next=41;break}throw g;case 41:return e.finish(38);case 42:return e.finish(35);case 43:return e.abrupt("return",a);case 44:case"end":return e.stop()}}),r,null,[[10,14,18,26],[19,,21,25],[27,31,35,43],[36,,38,42]])})))()}},{key:"notifyListeners",value:function(e,t){this.localCache[e]=t;var r=this.listeners[e],n=!0,a=!1,i=void 0;if(r)try{for(var o,s=Array.from(r)[Symbol.iterator]();!(n=(o=s.next()).done);n=!0){(0,o.value)(t)}}catch(e){a=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}}},{key:"startPolling",value:function(){this.stopPolling();var t=this;this.pollTimer=setInterval(e(c)(e(l).mark((function r(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t._poll());case 1:case"end":return e.stop()}}),r)}))),800)}},{key:"stopPolling",value:function(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}},{key:"_addListener",value:function(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}},{key:"_removeListener",value:function(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}]),t}();ja.type="LOCAL";var Va=ja;
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
 */function Ha(e,t){return br(e,"POST","/v2/accounts/mfaSignIn:start",_r(e,t))}function qa(e){return new Promise((function(t,r){var n,a,i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=function(e){var t=tr("internal-error");t.customData=e,r(t)},i.type="text/javascript",i.charset="UTF-8",(null!==(a=null===(n=document.getElementsByTagName("head"))||void 0===n?void 0:n[0])&&void 0!==a?a:document).appendChild(i)}))}function Ba(e){return"__".concat(e).concat(Math.floor(1e6*Math.random()))}
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
Ba("rcb"),new pr(3e4,6e4);var Wa="recaptcha";
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
 */function Ga(e,t,r){return za.apply(this,arguments)}function za(){return(za=e(c)(e(l).mark((function t(r,n,a){var i,o,s,u,c,d,f,h;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,a.verify();case 3:if(o=e.sent,e.prev=4,ar("string"==typeof o,r,"argument-error"),ar(a.type===Wa,r,"argument-error"),!("session"in(s="string"==typeof n?{phoneNumber:n}:n))){e.next=28;break}if(u=s.session,!("phoneNumber"in s)){e.next=19;break}return ar("enroll"===u.type,r,"internal-error"),e.next=15,fa(r,{idToken:u.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:o}});case 15:return c=e.sent,e.abrupt("return",c.phoneSessionInfo.sessionInfo);case 19:return ar("signin"===u.type,r,"internal-error"),ar(d=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid,r,"missing-multi-factor-info"),e.next=24,Ha(r,{mfaPendingCredential:u.credential,mfaEnrollmentId:d,phoneSignInInfo:{recaptchaToken:o}});case 24:return f=e.sent,e.abrupt("return",f.phoneResponseInfo.sessionInfo);case 26:e.next=32;break;case 28:return e.next=30,Cn(r,{phoneNumber:s.phoneNumber,recaptchaToken:o});case 30:return h=e.sent.sessionInfo,e.abrupt("return",h);case 32:return e.prev=32,a._reset(),e.finish(32);case 35:case"end":return e.stop()}}),t,null,[[4,,32,35]])})))).apply(this,arguments)}
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
var Ka=function(){"use strict";function t(r){e(i)(this,t),this.providerId=t.PROVIDER_ID,this.auth=kn(r)}return e(o)(t,[{key:"verifyPhoneNumber",value:function(e,t){return Ga(this.auth,e,Ae(t))}}],[{key:"credential",value:function(e,t){return Vn._fromVerification(e,t)}},{key:"credentialFromResult",value:function(e){var r=e;return t.credentialFromTaggedObject(r)}},{key:"credentialFromError",value:function(e){return t.credentialFromTaggedObject(e.customData||{})}},{key:"credentialFromTaggedObject",value:function(e){var t=e._tokenResponse;if(!t)return null;var r=t.phoneNumber,n=t.temporaryProof;return r&&n?Vn._fromTokenResponse(r,n):null}}]),t}();
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
function Ja(e,t){return t?ur(t):(ar(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Ka.PROVIDER_ID="phone",Ka.PHONE_SIGN_IN_METHOD="phone";var Ya=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t){var a;return e(i)(this,n),(a=r.call(this,"custom","custom")).params=t,a}return e(o)(n,[{key:"_getIdTokenResponse",value:function(e){return Rn(e,this._buildIdpRequest())}},{key:"_linkToIdToken",value:function(e,t){return Rn(e,this._buildIdpRequest(t))}},{key:"_getReauthenticationResolver",value:function(e){return Rn(e,this._buildIdpRequest())}},{key:"_buildIdpRequest",value:function(e){var t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}]),n}(bn);function Xa(e){return ia(e.auth,new Ya(e),e.bypassAuthState)}function Qa(e){var t=e.auth,r=e.user;return ar(r,t,"internal-error"),na(r,new Ya(e),e.bypassAuthState)}function $a(e){return Za.apply(this,arguments)}function Za(){return(Za=e(c)(e(l).mark((function t(r){var n,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.auth,ar(a=r.user,n,"internal-error"),e.abrupt("return",ta(a,new Ya(r),r.bypassAuthState));case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}
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
 */var ei=function(){"use strict";function t(r,n,a,o){var s=arguments.length>4&&void 0!==arguments[4]&&arguments[4];e(i)(this,t),this.auth=r,this.resolver=a,this.user=o,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}return e(o)(t,[{key:"execute",value:function(){var t,r=this;return new Promise((t=e(c)(e(l).mark((function t(n,a){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.pendingPromise={resolve:n,reject:a},e.prev=1,e.next=4,r.resolver._initialize(r.auth);case 4:return r.eventManager=e.sent,e.next=7,r.onExecution();case 7:r.eventManager.registerConsumer(r),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),r.reject(e.t0);case 13:case"end":return e.stop()}}),t,null,[[1,10]])}))),function(e,r){return t.apply(this,arguments)}))}},{key:"onAuthEvent",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i,o,s,u,c,d;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.urlResponse,i=t.sessionId,o=t.postBody,s=t.tenantId,u=t.error,c=t.type,!u){e.next=4;break}return r.reject(u),e.abrupt("return");case 4:return d={auth:r.auth,requestUri:a,sessionId:i,tenantId:s||void 0,postBody:o||void 0,user:r.user,bypassAuthState:r.bypassAuthState},e.prev=5,e.t0=r,e.next=9,r.getIdpTask(c)(d);case 9:e.t1=e.sent,e.t0.resolve.call(e.t0,e.t1),e.next=16;break;case 13:e.prev=13,e.t2=e.catch(5),r.reject(e.t2);case 16:case"end":return e.stop()}}),n,null,[[5,13]])})))()}},{key:"onError",value:function(e){this.reject(e)}},{key:"getIdpTask",value:function(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Xa;case"linkViaPopup":case"linkViaRedirect":return $a;case"reauthViaPopup":case"reauthViaRedirect":return Qa;default:er(this.auth,"internal-error")}}},{key:"resolve",value:function(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}},{key:"reject",value:function(e){or(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}},{key:"unregisterAndCleanUp",value:function(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}]),t}(),ti=new pr(2e3,1e4);
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
 */var ri=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t,a,o,s,u){var c;return e(i)(this,n),(c=r.call(this,t,a,s,u)).provider=o,c.authWindow=null,c.pollId=null,n.currentPopupAction&&n.currentPopupAction.cancel(),n.currentPopupAction=e(re)(c),c}return e(o)(n,[{key:"executeNotNull",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.execute();case 2:return ar(n=e.sent,t.auth,"internal-error"),e.abrupt("return",n);case 5:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){var t=this;return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return or(1===t.filter.length,"Popup operations only handle one event"),n=ba(),e.next=4,t.resolver._openPopup(t.auth,t.provider,t.filter[0],n);case 4:t.authWindow=e.sent,t.authWindow.associatedEvent=n,t.resolver._originValidation(t.auth).catch((function(e){t.reject(e)})),t.resolver._isIframeWebStorageSupported(t.auth,(function(e){e||t.reject(tr(t.auth,"web-storage-unsupported"))})),t.pollUserCancellation();case 9:case"end":return e.stop()}}),r)})))()}},{key:"eventId",get:function(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}},{key:"cancel",value:function(){this.reject(tr(this.auth,"cancelled-popup-request"))}},{key:"cleanUp",value:function(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,n.currentPopupAction=null}},{key:"pollUserCancellation",value:function(){var e=this,t=function(){var r,n;if(null===(n=null===(r=e.authWindow)||void 0===r?void 0:r.window)||void 0===n?void 0:n.closed){var a=e;e.pollId=window.setTimeout((function(){a.pollId=null,a.reject(tr(a.auth,"popup-closed-by-user"))}),2e3)}else e.pollId=window.setTimeout(t,ti.get())};t()}}]),n}(ei);ri.currentPopupAction=null;
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
var ni=new Map,ai=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t,a){var o,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e(i)(this,n),(o=r.call(this,t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],a,void 0,s)).eventId=null,o}return e(o)(n,[{key:"execute",value:function(){var t=this,r=this;return e(c)(e(l).mark((function a(){var i,o;return e(l).wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(i=ni.get(r.auth._key())){a.next=21;break}return a.prev=2,a.next=5,ii(r.resolver,r.auth);case 5:if(!a.sent){a.next=12;break}return a.next=9,e(Bt)(e(zt)(n.prototype),"execute",t).call(r);case 9:a.t0=a.sent,a.next=13;break;case 12:a.t0=null;case 13:o=a.t0,i=function(){return Promise.resolve(o)},a.next=20;break;case 17:a.prev=17,a.t1=a.catch(2),i=function(){return Promise.reject(a.t1)};case 20:ni.set(r.auth._key(),i);case 21:return r.bypassAuthState||ni.set(r.auth._key(),(function(){return Promise.resolve(null)})),a.abrupt("return",i());case 23:case"end":return a.stop()}}),a,null,[[2,17]])})))()}},{key:"onAuthEvent",value:function(t){var r=this,a=this,i=function(){return e(Bt)(e(zt)(n.prototype),"onAuthEvent",r)};return e(c)(e(l).mark((function r(){var n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("signInViaRedirect"!==t.type){e.next=4;break}return e.abrupt("return",i().call(a,t));case 4:if("unknown"!==t.type){e.next=7;break}return a.resolve(null),e.abrupt("return");case 7:if(!t.eventId){e.next=17;break}return e.next=10,a.auth._redirectUserForId(t.eventId);case 10:if(!(n=e.sent)){e.next=16;break}return a.user=n,e.abrupt("return",i().call(a,t));case 16:a.resolve(null);case 17:case"end":return e.stop()}}),r)})))()}},{key:"onExecution",value:function(){return e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),t)})))()}},{key:"cleanUp",value:function(){}}]),n}(ei);function ii(e,t){return oi.apply(this,arguments)}function oi(){return(oi=e(c)(e(l).mark((function t(r,n){var a,i,o;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ci(n),i=ui(r),e.next=4,i._isAvailable();case 4:if(e.sent){e.next=6;break}return e.abrupt("return",!1);case 6:return e.next=8,i._get(a);case 8:return e.t0=e.sent,o="true"===e.t0,e.next=12,i._remove(a);case 12:return e.abrupt("return",o);case 13:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function si(e,t){ni.set(e._key(),t)}function ui(e){return ur(e._redirectPersistence)}function ci(e){return tn("pendingRedirect",e.config.apiKey,e.name)}
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
 */function li(e,t){return di.apply(this,arguments)}function di(){return di=e(c)(e(l).mark((function t(r,n){var a,i,o,s,u,c=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=c.length>2&&void 0!==c[2]&&c[2],i=kn(r),o=Ja(i,n),s=new ai(i,o,a),e.next=6,s.execute();case 6:if(!(u=e.sent)||a){e.next=13;break}return delete u.user._redirectEventId,e.next=11,i._persistUserIfCurrent(u.user);case 11:return e.next=13,i._setRedirectUser(null,n);case 13:return e.abrupt("return",u);case 14:case"end":return e.stop()}}),t)}))),di.apply(this,arguments)}
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
var fi=function(){"use strict";function t(r){e(i)(this,t),this.auth=r,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}return e(o)(t,[{key:"registerConsumer",value:function(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}},{key:"unregisterConsumer",value:function(e){this.consumers.delete(e)}},{key:"onEvent",value:function(e){var t=this;if(this.hasEventBeenHandled(e))return!1;var r=!1;return this.consumers.forEach((function(n){t.isEventForConsumer(e,n)&&(r=!0,t.sendToConsumer(e,n),t.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!function(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return pi(e);default:return!1}}(e)||(this.hasHandledPotentialRedirect=!0,r||(this.queuedRedirectEvent=e,r=!0)),r}},{key:"sendToConsumer",value:function(e,t){var r;if(e.error&&!pi(e)){var n=(null===(r=e.error.code)||void 0===r?void 0:r.split("auth/")[1])||"internal-error";t.onError(tr(this.auth,n))}else t.onAuthEvent(e)}},{key:"isEventForConsumer",value:function(e,t){var r=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}},{key:"hasEventBeenHandled",value:function(e){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(hi(e))}},{key:"saveEventToCache",value:function(e){this.cachedEventUids.add(hi(e)),this.lastProcessedEventTime=Date.now()}}]),t}();function hi(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((function(e){return e})).join("-")}function pi(e){var t=e.type,r=e.error;return"unknown"===t&&"auth/no-auth-event"===(null==r?void 0:r.code)}function vi(e){return mi.apply(this,arguments)}function mi(){return mi=
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
e(c)(e(l).mark((function t(r){var n,a=arguments;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:{},e.abrupt("return",br(r,"GET","/v1/projects",n));case 2:case"end":return e.stop()}}),t)}))),mi.apply(this,arguments)}
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
 */var gi=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yi=/^https?/;function ki(){return(ki=e(c)(e(l).mark((function t(r){var n,a,i,o,s,u,c;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!r.config.emulator){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,vi(r);case 4:n=e.sent.authorizedDomains,a=!0,i=!1,o=void 0,e.prev=6,s=n[Symbol.iterator]();case 8:if(a=(u=s.next()).done){e.next=20;break}if(c=u.value,e.prev=10,!_i(c)){e.next=13;break}return e.abrupt("return");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(10);case 17:a=!0,e.next=8;break;case 20:e.next=26;break;case 22:e.prev=22,e.t1=e.catch(6),i=!0,o=e.t1;case 26:e.prev=26,e.prev=27,a||null==s.return||s.return();case 29:if(e.prev=29,!i){e.next=32;break}throw o;case 32:return e.finish(29);case 33:return e.finish(26);case 34:er(r,"unauthorized-domain");case 35:case"end":return e.stop()}}),t,null,[[6,22,26,34],[10,15],[27,,29,33]])})))).apply(this,arguments)}function _i(e){var t=lr(),r=new URL(t),n=r.protocol,a=r.hostname;if(e.startsWith("chrome-extension://")){var i=new URL(e);return""===i.hostname&&""===a?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===a}if(!yi.test(n))return!1;if(gi.test(e))return a===e;var o=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)}
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
 */var bi=new pr(3e4,6e4);function Ii(){var t=wa().___jsl,r=!0,n=!1,a=void 0;if(null==t?void 0:t.H)try{for(var i,o=Object.keys(t.H)[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var s=i.value;if(t.H[s].r=t.H[s].r||[],t.H[s].L=t.H[s].L||[],t.H[s].r=e(W)(t.H[s].L),t.CP)for(var u=0;u<t.CP.length;u++)t.CP[u]=null}}catch(e){n=!0,a=e}finally{try{r||null==o.return||o.return()}finally{if(n)throw a}}}var wi=null;function Ei(e){return wi=wi||function(e){return new Promise((function(t,r){var n,a,i;function o(){Ii(),gapi.load("gapi.iframes",{callback:function(){t(gapi.iframes.getContext())},ontimeout:function(){Ii(),r(tr(e,"network-request-failed"))},timeout:bi.get()})}if(null===(a=null===(n=wa().gapi)||void 0===n?void 0:n.iframes)||void 0===a?void 0:a.Iframe)t(gapi.iframes.getContext());else{if(!(null===(i=wa().gapi)||void 0===i?void 0:i.load)){var s=Ba("iframefcb");return wa()[s]=function(){gapi.load?o():r(tr(e,"network-request-failed"))},qa("https://apis.google.com/js/api.js?onload=".concat(s)).catch((function(e){return r(e)}))}o()}})).catch((function(e){throw wi=null,e}))}(e),wi}
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
 */var Si=new pr(5e3,15e3),xi={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Ti=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Oi(e){var t=e.config;ar(t.authDomain,e,"auth-domain-config-required");var r=t.emulator?vr(t,"emulator/auth/iframe"):"https://".concat(e.config.authDomain,"/").concat("__/auth/iframe"),n={apiKey:t.apiKey,appName:e.name,v:xt},a=Ti.get(e.config.apiHost);a&&(n.eid=a);var i=e._getFrameworks();return i.length&&(n.fw=i.join(",")),"".concat(r,"?").concat(Se(n).slice(1))}function Ni(e){return Ai.apply(this,arguments)}function Ai(){return Ai=e(c)(e(l).mark((function t(r){var n,a;return e(l).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Ei(r);case 2:return n=t.sent,ar(a=wa().gapi,r,"internal-error"),t.abrupt("return",n.open({where:document.body,url:Oi(r),messageHandlersFilter:a.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:xi,dontclear:!0},(function(t){return new Promise((n=e(c)(e(l).mark((function n(a,i){var o,s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u=function(){wa().clearTimeout(s),a(t)},e.next=3,t.restyle({setHideOnLeave:!1});case 3:o=tr(r,"network-request-failed"),s=wa().setTimeout((function(){i(o)}),Si.get()),t.ping(u).then(u,(function(){i(o)}));case 7:case"end":return e.stop()}}),n)}))),function(e,t){return n.apply(this,arguments)}));var n})));case 6:case"end":return t.stop()}}),t)}))),Ai.apply(this,arguments)}
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
 */var Ri={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Li="_blank",Di="http://localhost",Ci=function(){"use strict";function t(r){e(i)(this,t),this.window=r,this.associatedEvent=null}return e(o)(t,[{key:"close",value:function(){if(this.window)try{this.window.close()}catch(e){}}}]),t}();function Pi(t,r,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:500,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:600,o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-a)/2,0).toString(),u="",c=Object.assign(Object.assign({},Ri),{width:a.toString(),height:i.toString(),top:o,left:s}),l=ge().toLowerCase();n&&(u=sn(l)?Li:n),an(l)&&(r=r||Di,c.scrollbars="yes");var d=Object.entries(c).reduce((function(t,r){var n=e(X)(r,2),a=n[0],i=n[1];return"".concat(t).concat(a,"=").concat(i,",")}),"");if(hn(l)&&"_self"!==u)return Mi(r||"",u),new Ci(null);var f=window.open(r||"",u,d);ar(f,t,"popup-blocked");try{f.focus()}catch(e){}return new Ci(f)}function Mi(e,t){var r=document.createElement("a");r.href=e,r.target=t;var n=document.createEvent("MouseEvent");n.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),r.dispatchEvent(n)}
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
 */var Ui="__/auth/handler",Fi="emulator/auth/handler";function ji(t,r,n,a,i,o){ar(t.config.authDomain,t,"auth-domain-config-required"),ar(t.config.apiKey,t,"invalid-api-key");var s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:a,v:xt,eventId:i};if(r instanceof Bn){r.setDefaultLanguage(t.languageCode),s.providerId=r.providerId||"",Ie(r.getCustomParameters())||(s.customParameters=JSON.stringify(r.getCustomParameters()));var u=!0,c=!1,l=void 0;try{for(var d,f=Object.entries(o||{})[Symbol.iterator]();!(u=(d=f.next()).done);u=!0){var h=e(X)(d.value,2),p=h[0],v=h[1];s[p]=v}}catch(e){c=!0,l=e}finally{try{u||null==f.return||f.return()}finally{if(c)throw l}}}if(r instanceof Wn){var m=r.getScopes().filter((function(e){return""!==e}));m.length>0&&(s.scopes=m.join(","))}t.tenantId&&(s.tid=t.tenantId);var g,y,k=s,_=!0,b=!1,I=void 0;try{for(var w,E=Object.keys(k)[Symbol.iterator]();!(_=(w=E.next()).done);_=!0){var S=w.value;void 0===k[S]&&delete k[S]}}catch(e){b=!0,I=e}finally{try{_||null==E.return||E.return()}finally{if(b)throw I}}return"".concat((g=t,y=g.config,y.emulator?vr(y,Fi):"https://".concat(y.authDomain,"/").concat(Ui)),"?").concat(Se(k).slice(1))}
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
var Vi="webStorageSupport",Hi=function(){"use strict";function t(){e(i)(this,t),this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ya,this._completeRedirectFn=li,this._overrideRedirectResult=si}return e(o)(t,[{key:"_openPopup",value:function(t,r,n,a){var i=this;return e(c)(e(l).mark((function o(){var s,u;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return or(null===(s=i.eventManagers[t._key()])||void 0===s?void 0:s.manager,"_initialize() not called before _openPopup()"),u=ji(t,r,n,lr(),a),e.abrupt("return",Pi(t,u,ba()));case 4:case"end":return e.stop()}}),o)})))()}},{key:"_openRedirect",value:function(t,r,n,a){var i=this;return e(c)(e(l).mark((function o(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i._originValidation(t);case 2:return o=ji(t,r,n,lr(),a),wa().location.href=o,e.abrupt("return",new Promise((function(){})));case 4:case"end":return e.stop()}var o}),o)})))()}},{key:"_initialize",value:function(e){var t=this,r=e._key();if(this.eventManagers[r]){var n=this.eventManagers[r],a=n.manager,i=n.promise;return a?Promise.resolve(a):(or(i,"If manager is not set, promise should be"),i)}var o=this.initAndGetManager(e);return this.eventManagers[r]={promise:o},o.catch((function(){delete t.eventManagers[r]})),o}},{key:"initAndGetManager",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ni(t);case 2:return a=e.sent,i=new fi(t),a.register("authEvent",(function(e){return ar(null==e?void 0:e.authEvent,t,"invalid-auth-event"),{status:i.onEvent(e.authEvent)?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),r.eventManagers[t._key()]={manager:i},r.iframes[t._key()]=a,e.abrupt("return",i);case 8:case"end":return e.stop()}}),n)})))()}},{key:"_isIframeWebStorageSupported",value:function(e,t){this.iframes[e._key()].send(Vi,{type:Vi},(function(r){var n,a=null===(n=null==r?void 0:r[0])||void 0===n?void 0:n.webStorageSupport;void 0!==a&&t(!!a),er(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}},{key:"_originValidation",value:function(e){var t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=function(e){return ki.apply(this,arguments)}(e)),this.originValidationPromises[t]}},{key:"_shouldInitProactively",get:function(){return vn()||on()||fn()}}]),t}(),qi=Hi,Bi=function(t){"use strict";e(ne)(n,t);var r=e(de)(n);function n(t){var a;return e(i)(this,n),(a=r.call(this,"phone")).credential=t,a}return e(o)(n,[{key:"_finalizeEnroll",value:function(e,t,r){return function(e,t){return br(e,"POST","/v2/accounts/mfaEnrollment:finalize",_r(e,t))}(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}},{key:"_finalizeSignIn",value:function(e,t){return function(e,t){return br(e,"POST","/v2/accounts/mfaSignIn:finalize",_r(e,t))}(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}],[{key:"_fromCredential",value:function(e){return new n(e)}}]),n}(function(){"use strict";function t(r){e(i)(this,t),this.factorId=r}return e(o)(t,[{key:"_process",value:function(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return ir("unexpected MultiFactorSessionType")}}}]),t}());(function(){"use strict";function t(){e(i)(this,t)}return e(o)(t,null,[{key:"assertion",value:function(e){return Bi._fromCredential(e)}}]),t}()).FACTOR_ID="phone";var Wi,Gi="@firebase/auth",zi="0.20.5",Ki=function(){"use strict";function t(r){e(i)(this,t),this.auth=r,this.internalListeners=new Map}return e(o)(t,[{key:"getUid",value:function(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}},{key:"getToken",value:function(t){var r=this;return e(c)(e(l).mark((function n(){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r.assertAuthConfigured(),e.next=3,r.auth._initializationPromise;case 3:if(r.auth.currentUser){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,r.auth.currentUser.getIdToken(t);case 7:return a=e.sent,e.abrupt("return",{accessToken:a});case 9:case"end":return e.stop()}}),n)})))()}},{key:"addAuthTokenListener",value:function(e){if(this.assertAuthConfigured(),!this.internalListeners.has(e)){var t=this.auth.onIdTokenChanged((function(t){var r;e((null===(r=t)||void 0===r?void 0:r.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}}},{key:"removeAuthTokenListener",value:function(e){this.assertAuthConfigured();var t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}},{key:"assertAuthConfigured",value:function(){ar(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}},{key:"updateProactiveRefresh",value:function(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}]),t}();Wi="Browser",bt(new Re("auth",(function(e,t){var r=t.options,n=e.getProvider("app").getImmediate(),a=e.getProvider("heartbeat"),i=n.options,o=i.apiKey,s=i.authDomain;return function(e,t){ar(o&&!o.includes(":"),"invalid-api-key",{appName:e.name}),ar(!(null==s?void 0:s.includes(":")),"argument-error",{appName:e.name});var n={apiKey:o,authDomain:s,clientPlatform:Wi,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:mn(Wi)},a=new yn(e,t,n);return function(e,t){var r=(null==t?void 0:t.persistence)||[],n=(Array.isArray(r)?r:[r]).map(ur);(null==t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(n,null==t?void 0:t.popupRedirectResolver)}(a,r),a}(n,a)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((function(e,t,r){e.getProvider("auth-internal").initialize()}))),bt(new Re("auth-internal",(function(e){var t=kn(e.getProvider("auth").getImmediate());return new Ki(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(Gi,zi,
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
function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(Wi)),Ot(Gi,zi,"esm2017");var Ji,Yi,Xi={loginForm:document.querySelector(".login__form"),loginUsername:document.querySelector("#login-username"),loginEmail:document.querySelector("#login-email"),signupEmail:document.querySelector("#signup-email"),loginPassword:document.querySelector("#login-password"),signupPassword:document.querySelector("#signup-password"),loginBtn:document.querySelector("#login__button"),signupBtn:document.querySelector("#signup__button"),logoutBtn:document.querySelector("#logout__button"),logoutText:document.querySelector(".logout-modal__text"),logoutModal:document.querySelector(".logout-modal"),checkbox:document.querySelector(".form-check-input")},Qi="keep_logged_as";sessionStorage.removeItem(Qi),Ji=localStorage.getItem(Qi),Yi=sessionStorage.getItem(Qi),Ji||Yi?(Xi.loginForm.classList.add("logout-modal--hidden"),Xi.logoutModal.classList.remove("logout-modal--hidden"),Xi.logoutText.innerHTML="You are logged in as ".concat(Ji)):(Xi.loginForm.classList.remove("logout-modal--hidden"),Xi.logoutModal.classList.add("logout-modal--hidden"));var $i,Zi=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("object"!=typeof t){var r=t;t={name:r}}var n=Object.assign({name:mt,automaticDataCollectionEnabled:!1},t),a=n.name;if("string"!=typeof a||!a)throw Et.create("bad-app-name",{appName:String(a)});var i=yt.get(a);if(i){if(we(e,i.options)&&we(n,i.config))return i;throw Et.create("duplicate-app",{appName:a})}var o=new Me(a),s=!0,u=!1,c=void 0;try{for(var l,d=kt.values()[Symbol.iterator]();!(s=(l=d.next()).done);s=!0){var f=l.value;o.addComponent(f)}}catch(e){u=!0,c=e}finally{try{s||null==d.return||d.return()}finally{if(u)throw c}}var h=new St(e,n,o);return yt.set(a,h),h}({apiKey:"AIzaSyDI06G7ldPdrMhSq-FyX2L15PRQF0jVleY",authDomain:"filmoteka-project-f50cc.firebaseapp.com",databaseURL:"https://filmoteka-project-f50cc-default-rtdb.firebaseio.com",projectId:"filmoteka-project-f50cc",storageBucket:"filmoteka-project-f50cc.appspot.com",messagingSenderId:"744226297338",appId:"1:744226297338:web:8ad6c2023b760eb61bc043"}),eo=
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
function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Tt(),t=It(e,"auth");return t.isInitialized()?t.getImmediate():cr(e,{popupRedirectResolver:qi,persistence:[Va,ma,ya]})}(Zi),to=($i=e(c)(e(l).mark((function t(){var r,n,a,i;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Xi.loginEmail.value,n=Xi.loginPassword.value,e.prev=2,e.next=5,t=r,o=n,sa(Ae(eo),qn.credential(t,o));case 5:(a=e.sent).user.displayName=Xi.loginUsername.value,i=a.user.displayName,Xi.checkbox.checked?localStorage.setItem(Qi,"".concat(i)):Xi.checkbox.checked||sessionStorage.setItem(Qi,"".concat(i)),console.log(i),ao(),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),ro(e.t0);case 16:case"end":return e.stop()}var t,o}),t,null,[[2,13]])}))),function(){return $i.apply(this,arguments)});function ro(e){e.code==Qt.INVALID_PASSWORD?alert("Wrong password. Try again."):alert("Error: ".concat(e.message))}Xi.loginBtn.addEventListener("click",to);var no=function(){var t=e(c)(e(l).mark((function t(){var r,n;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=Xi.signupEmail.value,n=Xi.signupPassword.value,e.prev=2,e.next=5,ca(eo,r,n);case 5:e.sent,alert("You are signed up now"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),ro(e.t0);case 12:case"end":return e.stop()}}),t,null,[[2,9]])})));return function(){return t.apply(this,arguments)}}();function ao(){return io.apply(this,arguments)}function io(){return io=e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:da(eo,(function(e){var t=localStorage.getItem(Qi),r=sessionStorage.getItem(Qi);t&&(Xi.loginForm.classList.add("logout-modal--hidden"),Xi.logoutModal.classList.remove("logout-modal--hidden"),Xi.logoutText.innerHTML="You are logged in as ".concat(t)),r&&(Xi.loginForm.classList.add("logout-modal--hidden"),Xi.logoutModal.classList.remove("logout-modal--hidden"),Xi.logoutText.innerHTML="You are logged in as ".concat(r))}));case 1:case"end":return e.stop()}}),t)}))),io.apply(this,arguments)}Xi.signupBtn.addEventListener("click",no);var oo=function(){var t=e(c)(e(l).mark((function t(){return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Ae(eo).signOut();case 2:localStorage.removeItem(Qi),Xi.loginForm.classList.remove("logout-modal--hidden"),Xi.logoutModal.classList.add("logout-modal--hidden"),alert("You're not logged in anymore");case 6:case"end":return e.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Xi.logoutBtn.addEventListener("click",oo);var so=document.querySelector("body"),uo=document.querySelector(".gallery"),co=document.querySelector(".backdrop"),lo=document.querySelector(".modal__button"),fo=document.querySelector(".modal-info__container"),ho=document.querySelector(".modal"),po=0,vo={};function mo(e){ho.contains(e.target)&&!lo.contains(e.target)||(so.classList.remove("modal-open"),co.classList.add("is-hidden"))}uo.addEventListener("click",(function(e){var t=JSON.parse(localStorage.getItem(g));e.preventDefault(),po=Number(e.target.dataset.id),t.map((function(e){var t,r,n,a,i,o,s,c,l,d;e.id===po&&(r=(t=e).poster_path,n=t.title,a=t.original_title,i=t.genre_ids,o=t.overview,s=t.vote_count,c=t.vote_average,l=t.popularity,d='\n      <img src="'.concat(r?u.Movie.IMG_PATH+r:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",'" alt="').concat(n,'" class="modal-info__img">\n      <div class="modal-info">\n          <h2 class="modal-info__movie-name">').concat(n.toUpperCase(),'</h2>\n          <table class="modal-info__list" >\n              <tr class="modal-info__item">\n                <th class="modal-info__title">Vote / Votes</th>\n                <th class="modal-info__content"><span class="modal-info__content-color"> ').concat(Math.round(10*c)/10,' </span> / <span class="modal-info__content-color modal-info__content-color--votes">').concat(s,'</span></th>\n              </tr>\n              <tr class="modal-info__item">\n                <td class="modal-info__title">Popularity</td>\n                <td class="modal-info__content">').concat(l.toFixed(1),'\n                </td>\n              </tr>\n              <tr class="modal-info__item">\n                <td class="modal-info__title">Original Title</td>\n                <td class="modal-info__content modal-info__content--text">').concat(a.toUpperCase(),'</td>\n              </tr>\n              <tr class="modal-info__item">\n                <td class="modal-info__title">Genre</td>\n                <td class="modal-info__content">').concat(p(i),'</td>\n              </tr>\n              </table>            \n                  <p class="modal-info__article-title">About</p>\n                  <p class="modal-info__article">').concat(o,'</p>\n                  <div class="container-btn">\n            <button type="button" class="btn" name="watched">add to watched</button>\n            <button type="button" class="btn" name="queue">add to queue</button>\n        </div>'),fo.innerHTML=d,vo=e)})),e.target!==e.currentTarget&&(so.classList.add("modal-open"),co.classList.remove("is-hidden"))})),lo.addEventListener("click",mo),fo.addEventListener("click",(function(e){return bo.apply(this,arguments)})),co.addEventListener("click",mo);var go=[],yo=[],ko="themovie-watched-lib",_o="themovie-queue-lib";function bo(){return bo=e(c)(e(l).mark((function t(r){var n,a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem(Qi);case 2:return n=e.sent,e.next=5,sessionStorage.getItem(Qi);case 5:a=e.sent,"watched"===r.target.name&&(""!==n&&n||""!==a&&a?Io():alert('If you want to add movie to "Watched" then you have to log in first.')),"queue"===r.target.name&&(""!==n&&n||""!==a&&a?wo():alert('If you want to add movie to "Queue" then you have to log in first.'));case 8:case"end":return e.stop()}}),t)}))),bo.apply(this,arguments)}var Io=function(){go=JSON.parse(localStorage.getItem(ko))||[];var e=[];go.map((function(t){return e.push(t.id)})),e.includes(po)||(go.push(vo),localStorage.setItem(ko,JSON.stringify(go)),console.log("watched:  "+e))},wo=function(){yo=JSON.parse(localStorage.getItem(_o))||[];var e=[];yo.map((function(t){return e.push(t.id)})),e.includes(po)?console.log("есть уже"):(yo.push(vo),localStorage.setItem(_o,JSON.stringify(yo)),console.log("queue:  "+e))},Eo=document.querySelector(".footer-text__link"),So=document.querySelector(".backdrop-team"),xo=document.querySelector(".modal-team__button"),To=document.querySelector("body");Eo.addEventListener("click",(function(e){e.preventDefault(),So.classList.remove("is-hidden"),To.classList.add("modal-team-open")})),xo.addEventListener("click",(function(e){So.classList.add("is-hidden"),To.classList.remove("modal-team-open")}));var Oo=document.querySelector("#switch-form__link-login"),No=document.querySelector("#switch-form__link-sign-up"),Ao=document.querySelector(".close__button"),Ro=document.querySelector(".close-login__button"),Lo=document.querySelector(".sign-up__overlay"),Do=document.querySelector(".log-in__overlay"),Co=document.querySelector(".login__button"),Po=document.querySelector(".signup__button"),Mo=document.querySelector("body");function Uo(e){e.preventDefault(),Do.classList.toggle("log-in__overlay--hidden"),Lo.classList.toggle("sign-up__overlay--hidden")}function Fo(e){Mo.classList.remove("modal-open"),Do.classList.add("log-in__overlay--hidden"),Lo.classList.add("sign-up__overlay--hidden")}Oo.addEventListener("click",Uo),No.addEventListener("click",Uo),Ao.addEventListener("click",Fo),Ro.addEventListener("click",Fo),Co.addEventListener("click",(function(e){Do.classList.remove("log-in__overlay--hidden"),Mo.classList.add("modal-open")})),Po.addEventListener("click",(function(e){Lo.classList.remove("sign-up__overlay--hidden"),Mo.classList.add("modal-open")}))}();
//# sourceMappingURL=index.0a07b07d.js.map
