!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){a[e]=t},t.parcelRequired7c6=r),r("kvC6y");var c=r("4cG42"),o=r("bpxeT"),l=r("2TvXO");r("4cG42");var i=r("7iFtI"),s=r("5pO50"),u=r("3lV3Z"),d="active",p="btn",g="numb",f="prev-page",v="next-page",h="first-page",b="last-page",m="dots";function L(e){var t=e.page,n=e.total_pages;document.querySelector(".pagination-container").innerHTML=function(e,t){if(e<2)return"";var n,a='<ul class="pagination-list" data-last="'.concat(e,'" data-current="').concat(t,'">'),r=t-1,c=t+1;if(t>1&&(a+='<li class="'.concat(p," ").concat(f,'" data-page="').concat(t-1,'"><span><<</span></li>')),e<6)for(var o=1;o<=e;o++)n=t===o?d:"",a+='<li class="'.concat(g," ").concat(n,'" data-page="').concat(o,'"><span>').concat(o,"</span></li>");else{t>2&&(a+='<li class="'.concat(g," ").concat(h,'" data-page="1"><span>1</span></li>'),t>3&&(a+='<li class="'.concat(m,'"><span>...</span></li>'))),1===t?c+=2:2===t&&(c+=1),t===e?r-=2:t===e-1&&(r-=1);for(var l=r;l<=c;l++)0===l&&(l+=1),l>e||(n=t===l?d:"",a+='<li class="'.concat(g," ").concat(n,'" data-page="').concat(l,'"><span>').concat(l,"</span></li>"));t<e-1&&(t<e-2&&(a+='<li class="'.concat(m,'"><spank">...</span></li>')),a+='<li class="'.concat(g," ").concat(b,'" data-page="').concat(e,'"><span>').concat(e,"</span></li>"))}return t<e&&(a+='<li class="'.concat(p," ").concat(v,'" data-page="').concat(t+1,'">>></span></li>')),a+"</ul>"}(n,t)}function w(e){return k.apply(this,arguments)}function k(){return(k=e(o)(e(l).mark((function t(n){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.genreLoad)(n);case 3:return e.next=5,n.fetchTrend();case 5:a=e.sent,console.log(a),(0,u.setCurrenDataToLS)(a.results),(0,i.makeMarkupCard)(a),L(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}function E(e){return S.apply(this,arguments)}function S(){return(S=e(o)(e(l).mark((function t(n){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,s.genreLoad)(n);case 3:return e.next=5,n.fetchSearch();case 5:a=e.sent,console.log(a),(0,u.setCurrenDataToLS)(a.results),(0,i.makeMarkupCard)(a),L(a),n.lastPage=a.total_pages,e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.log(e.t0);case 16:case"end":return e.stop()}}),t,null,[[0,13]])})))).apply(this,arguments)}var y=r("Jmfug"),T=(o=r("bpxeT"),l=r("2TvXO"),c=r("4cG42"),i=r("7iFtI"),y=r("Jmfug"),c=r("4cG42"),r("6JEwH")),M=new(0,(P=r("kvC6y")).default),x={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function C(e){switch(e){case c.Movie.trendTime.DAY:(0,T.disabledEl)(x.btnSwitchDay),(0,T.unlockEl)(x.btnSwitchWeek);break;case c.Movie.trendTime.WEEK:(0,T.disabledEl)(x.btnSwitchWeek),(0,T.unlockEl)(x.btnSwitchDay)}}function D(){(0,T.unlockEl)(x.btnSwitchDay),(0,T.unlockEl)(x.btnSwitchWeek)}x.btnSwitchDay.addEventListener("click",(function(){M.enable("loader"),q.page=1,q.currentTrendTime=c.Movie.trendTime.DAY,w(q),C(c.Movie.trendTime.DAY),H()})),x.btnSwitchWeek.addEventListener("click",(function(){M.enable("loader"),q.page=1,q.currentTrendTime=c.Movie.trendTime.WEEK,w(q),C(c.Movie.trendTime.WEEK),H()}));u=r("3lV3Z");var _,q,N=new(0,(P=r("kvC6y")).default),I={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},A=null;function G(){return(G=e(o)(e(l).mark((function t(n){var a;return e(l).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,N.enable("loader"),n.preventDefault(),""!==(A=n.target.query.value.trim())){e.next=8;break}return I.paragraphEl.innerHTML="Enter the name in the search field",N.disable("loader"),e.abrupt("return");case 8:return(_=new(0,c.Movie)(A)).langCurrent=(0,y.getLanguageFromLS)(),e.next=12,_.fetchSearch();case 12:if(0!==(a=e.sent).total_results){e.next=18;break}return n.target.reset(),I.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",N.disable("loader"),e.abrupt("return");case 18:(0,i.makeMarkupCard)(a),L(a),n.target.reset(),I.paragraphEl.innerHTML="",console.log(a),_.lastPage=a.total_pages,(0,u.setCurrenDataToLS)(a.results),D(),e.next=31;break;case 28:e.prev=28,e.t0=e.catch(0),console.log(e.t0.message);case 31:case"end":return e.stop()}}),t,null,[[0,28]])})))).apply(this,arguments)}function H(){A=null}I.formEl.addEventListener("submit",(function(e){return G.apply(this,arguments)})),(new(0,(P=r("kvC6y")).default)).enable("preloader"),null===A&&function(){q=new(0,c.Movie);var e=(0,y.getLanguageFromLS)();e?(q.langCurrent=e,(0,y.switchBtnLang)(q.langCurrent)):q.langCurrent=(0,y.setLanguageToLS)(c.Movie.language.ENGLISH);w(q),C(c.Movie.trendTime.DAY),(0,y.setCurrentPageToLS)(y.keyLS.VALUE_PAGE_INDEX)}();c=r("4cG42"),y=r("Jmfug");var P=r("kvC6y"),W=r("bEuMR"),Y=new(0,P.default);y.refs.btnSwitchEN.addEventListener("click",(function(){Y.enable("loader"),null===A?(q.langCurrent=(0,y.setLanguageToLS)(c.Movie.language.ENGLISH),w(q)):(_.langCurrent=(0,y.setLanguageToLS)(c.Movie.language.ENGLISH),E(_));(0,W.renderFooter)()})),y.refs.btnSwitchUA.addEventListener("click",(function(){Y.enable("loader"),null===A?(q.langCurrent=(0,y.setLanguageToLS)(c.Movie.language.UKRAINIAN),w(q)):(_.langCurrent=(0,y.setLanguageToLS)(c.Movie.language.UKRAINIAN),E(_));(0,W.renderFooter)()})),r("4cG42");var F=document.querySelector(".scroll-area"),O=document.querySelector(".up-btn"),R=document.querySelector(".icon__button");function U(){F.scrollIntoView({block:"center",behavior:"smooth"})}O.addEventListener("click",U),window.addEventListener("scroll",(function(){scrollY>230&&(R.classList.add("icon__button--opacity"),R.style.position="fixed"),scrollY<230&&(R.classList.remove("icon__button--opacity"),R.style.position="absolute"),scrollY>300?O.classList.remove("is-hidden"):scrollY<300&&O.classList.add("is-hidden")}));new(0,(P=r("kvC6y")).default);var J=document.querySelector(".pagination-container");J.addEventListener("click",(function(e){var t={elPaginationList:document.querySelector(".pagination-list")},n=t.elPaginationList.dataset.current;t.elPaginationList.dataset.last;if("LI"!==e.target.nodeName)return;var a=e.target.dataset.page;if(a===n)return;r=a,null===A?q.page=r:_.page=r,null===A?w(q):E(_),U();var r})),console.log(J),r("3nfD2"),r("5xtVg"),r("bEuMR"),r("aZhHc"),r("sPj1j"),r("bmNaJ")}();
//# sourceMappingURL=index.e0332b1f.js.map
