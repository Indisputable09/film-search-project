!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,a.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},e.parcelRequired7c6=a);var i=a("4cG42"),r=a("Jmfug"),L=a("7iFtI");a("5xtVg").modal.addEventListener("click",(function(e){var n=(0,r.getCurrentPageFromLS)();"watched"===e.target.name&&n===r.keyLS.VALUE_PAGE_LIBRARY_W&&S();"queue"===e.target.name&&n===r.keyLS.VALUE_PAGE_LIBRARY_Q&&f()}));var o=window.matchMedia("(max-width: 767px)"),_=window.matchMedia("(min-width: 768px) and (max-width: 1279px)"),c=window.matchMedia("(min-width: 1280px)"),A=9,s=(0,r.getLanguageFromLS)(),u=r.keyLS.LS_WATHED_EN_DATA_KEY,l=document.querySelector(".watched"),E=document.querySelector(".queue"),d=document.querySelector(".gallery"),g=null;function S(){s=(0,r.getLanguageFromLS)(),T(),v(),m(u),(0,r.setCurrentPageToLS)(r.keyLS.VALUE_PAGE_LIBRARY_W),l.classList.add("is-active"),E.classList.remove("is-active")}function f(){(s=(0,r.getLanguageFromLS)())===i.Movie.language.ENGLISH?u=r.keyLS.LS_QUEUE_EN_DATA_KEY:s===i.Movie.language.UKRAINIAN&&(u=r.keyLS.LS_QUEUE_UA_DATA_KEY),v(),m(u),(0,r.setCurrentPageToLS)(r.keyLS.VALUE_PAGE_LIBRARY_Q),E.classList.add("is-active"),l.classList.remove("is-active")}function T(){s===i.Movie.language.ENGLISH?u=r.keyLS.LS_WATHED_EN_DATA_KEY:s===i.Movie.language.UKRAINIAN&&(u=r.keyLS.LS_WATHED_UA_DATA_KEY)}function m(e){if(null!==(g=function(e){try{var n=localStorage.getItem(e);return null===n?null:JSON.parse(n)}catch(e){d.innerHTML='<p class="error">Unknown error. Watched movies cannot be displayed.</p>',console.error("Get state error: ",e.message)}}(e))){if(void 0!==g&&g){g.length;var n=g.slice(0*A,1*A);(0,L.makeMarkupCard)({results:n})}}else d.innerHTML='<p class="message">Your watch films list is empty.</p>'}function v(){d.innerHTML=""}function y(e){e.matches&&(A=4,v(),m(u))}function U(e){e.matches&&(A=8,v(),m(u))}function k(e){e.matches&&(A=9,v(),m(u))}o.addListener(y),_.addListener(U),c.addListener(k),l.addEventListener("click",S),E.addEventListener("click",f),function(){s||(s=(0,r.setLanguageToLS)(i.Movie.language.ENGLISH));s===i.Movie.language.UKRAINIAN&&(u=r.keyLS.LS_WATHED_UA_DATA_KEY);(0,r.switchBtnLang)(s),(0,r.setCurrentPageToLS)(r.keyLS.VALUE_PAGE_LIBRARY_W)}(),T(),y(o),U(_),k(c),a("3nfD2");i=a("4cG42");(r=a("Jmfug")).refs.btnSwitchEN.addEventListener("click",(function(){(0,r.setLanguageToLS)(i.Movie.language.ENGLISH),m(u=u===r.keyLS.LS_WATHED_EN_DATA_KEY||u===r.keyLS.LS_WATHED_UA_DATA_KEY?r.keyLS.LS_WATHED_EN_DATA_KEY:r.keyLS.LS_QUEUE_EN_DATA_KEY)})),r.refs.btnSwitchUA.addEventListener("click",(function(){(0,r.setLanguageToLS)(i.Movie.language.UKRAINIAN),m(u=u===r.keyLS.LS_WATHED_EN_DATA_KEY||u===r.keyLS.LS_WATHED_UA_DATA_KEY?r.keyLS.LS_WATHED_UA_DATA_KEY:r.keyLS.LS_QUEUE_UA_DATA_KEY)})),a("5xtVg"),a("aZhHc"),a("sPj1j"),a("bmNaJ")}();
//# sourceMappingURL=library.e827c011.js.map
