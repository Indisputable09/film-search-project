!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var r=o("4cG42"),c=o("bpxeT"),i=o("2TvXO");o("4cG42");r=o("4cG42"),c=o("bpxeT"),i=o("2TvXO"),r=o("4cG42");var l=o("Jmfug");l=o("Jmfug");function s(e){return u.apply(this,arguments)}function u(){return(u=e(c)(e(i).mark((function t(n){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:localStorage.getItem(l.keyLS.LS_GENRE_KEY_EN)||(n.langCurrent=l.keyLS.LS_GENRE_KEY_EN,n.fetchGenre().then((function(e){localStorage.setItem(l.keyLS.LS_GENRE_KEY_EN,JSON.stringify(e.genres))})).catch((function(e){return console.log(e)})),n.langCurrent=l.keyLS.LS_GENRE_KEY_UA,n.fetchGenre().then((function(e){localStorage.setItem(l.keyLS.LS_GENRE_KEY_UA,JSON.stringify(e.genres))})).catch((function(e){return console.log(e)}))),n.langCurrent=(0,l.getLanguageFromLS)();case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=localStorage.getItem(l.keyLS.LS_GENRE_KEY_EN),n="No genres",a="Other",o=(0,l.getLanguageFromLS)();switch(o){case r.Movie.language.ENGLISH:t=localStorage.getItem(l.keyLS.LS_GENRE_KEY_EN),n="No genres",a="Other";break;case r.Movie.language.UKRAINIAN:t=localStorage.getItem(l.keyLS.LS_GENRE_KEY_UA),n="Жанри відсутні",a="Інші"}if(!t||0===e.length)return n;var c=JSON.parse(t),i=c.reduce((function(t,n){return e.includes(n.id)&&t.push(n.name),t}),[]);return 0===i.length?n:i.length>3?"".concat(i[0],", ").concat(i[1],", ").concat(a):i.join(", ")}l=o("Jmfug");function p(e){var t=document.querySelector(".gallery"),n=e.results.map((function(e){return'<li class="card">\n          <a class="card__link" href=""  >\n            <img data-id="'.concat(e.id,'" class="card__img" src="').concat(e.poster_path?r.Movie.IMG_PATH+e.poster_path:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",'" alt="').concat(e.title,'" loading="lazy"/>\n      <div class="card__wrapper">\n            <p class="card__name">').concat(e.title.toUpperCase(),'</p>\n            <p class="card__description">').concat(d(e.genre_ids)," | ").concat((0,l.noYearVariableLang)(e.release_date),'\n            <span class="card__vote">').concat(Math.round(10*e.vote_average)/10,"</span>\n            </p>\n            </div>\n          </a>\n        </li>")})).join("");t.innerHTML=n}var g="themoviedb-current-data";function f(e){localStorage.setItem(g,JSON.stringify(e))}function m(e){return v.apply(this,arguments)}function v(){return(v=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(n);case 3:return e.next=5,n.fetchTrend();case 5:a=e.sent,console.log(a),f(a.results),p(a),n.lastPage=a.total_pages,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}function _(e){return h.apply(this,arguments)}function h(){return(h=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(n);case 3:return e.next=5,n.fetchSearch();case 5:a=e.sent,console.log(a),f(a.results),p(a,n.langCurrent),n.lastPage=a.total_pages,e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),t,null,[[0,12]])})))).apply(this,arguments)}l=o("Jmfug"),c=o("bpxeT"),i=o("2TvXO"),r=o("4cG42"),l=o("Jmfug"),r=o("4cG42");var S=o("6JEwH"),L={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function E(e){switch(e){case r.Movie.trendTime.DAY:(0,S.disabledEl)(L.btnSwitchDay),(0,S.unlockEl)(L.btnSwitchWeek);break;case r.Movie.trendTime.WEEK:(0,S.disabledEl)(L.btnSwitchWeek),(0,S.unlockEl)(L.btnSwitchDay)}}function b(){(0,S.unlockEl)(L.btnSwitchDay),(0,S.unlockEl)(L.btnSwitchWeek)}L.btnSwitchDay.addEventListener("click",(function(){k.page=1,k.currentTrendTime=r.Movie.trendTime.DAY,m(k),E(r.Movie.trendTime.DAY),T()})),L.btnSwitchWeek.addEventListener("click",(function(){k.page=1,k.currentTrendTime=r.Movie.trendTime.WEEK,m(k),E(r.Movie.trendTime.WEEK),T()}));var y,k,w={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")},N=null;function x(){return(x=e(c)(e(i).mark((function t(n){var a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,n.preventDefault(),""!==(N=n.target.query.value.trim())){e.next=6;break}return w.paragraphEl.innerHTML="Enter the name in the search field",e.abrupt("return");case 6:return(y=new(0,r.Movie)(N)).langCurrent=(0,l.getLanguageFromLS)(),e.next=10,y.fetchSearch();case 10:if(0!==(a=e.sent).total_results){e.next=15;break}return n.target.reset(),w.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",e.abrupt("return");case 15:p(a),n.target.reset(),w.paragraphEl.innerHTML="",console.log(a),y.lastPage=a.total_pages,f(a.results),b(),e.next=27;break;case 24:e.prev=24,e.t0=e.catch(0),console.log(e.t0.message);case 27:case"end":return e.stop()}}),t,null,[[0,24]])})))).apply(this,arguments)}function T(){N=null}w.formEl.addEventListener("submit",(function(e){return x.apply(this,arguments)})),null===N&&function(){k=new(0,r.Movie);var e=(0,l.getLanguageFromLS)();e?(k.langCurrent=e,(0,l.switchBtnLang)(k.langCurrent)):k.langCurrent=(0,l.setLanguageToLS)(r.Movie.language.ENGLISH);m(k),E(r.Movie.trendTime.DAY)}();r=o("4cG42");(l=o("Jmfug")).refs.btnSwitchEN.addEventListener("click",(function(){null===N?(k.langCurrent=(0,l.setLanguageToLS)(r.Movie.language.ENGLISH),m(k)):(y.langCurrent=(0,l.setLanguageToLS)(r.Movie.language.ENGLISH),_(y))})),l.refs.btnSwitchUA.addEventListener("click",(function(){null===N?(k.langCurrent=(0,l.setLanguageToLS)(r.Movie.language.UKRAINIAN),m(k)):(y.langCurrent=(0,l.setLanguageToLS)(r.Movie.language.UKRAINIAN),_(y))})),o("4cG42");var M=document.querySelector(".scroll-area"),q=document.querySelector(".up-btn"),I=document.querySelector(".icon__button");function G(){M.scrollIntoView({block:"center",behavior:"smooth"})}q.addEventListener("click",G),window.addEventListener("scroll",(function(){scrollY>230&&(I.classList.add("icon__button--opacity"),I.style.position="fixed"),scrollY<230&&(I.classList.remove("icon__button--opacity"),I.style.position="absolute"),scrollY>300?q.classList.remove("is-hidden"):scrollY<300&&q.classList.add("is-hidden")}));var A={btnLoadPrevious:document.querySelector(".pagination-page__btn-previous"),btnLoadNext:document.querySelector(".pagination-page__btn-next")};A.btnLoadPrevious.addEventListener("click",(function(){if(null===N?1===k.page:1===y.page)return;null===N?k.page-=1:y.page-=1,R(),G()})),A.btnLoadNext.addEventListener("click",(function(){if(null===N?k.page===k.lastPage:y.page===y.lastPage)return;null===N?k.page+=1:y.page+=1,R(),G()}));var D=document.querySelector(".pagination ul");function R(){null===N?m(k):_(y)}!function e(t){!function(e,t){var n="",a=t-1,o=t+1;t>1&&(n+='<li class="btn prev"><span><<</span></li>');t>2&&(e>3&&(n+='<li class="first numb"><span>1</span></li>'),t>3&&(n+='<li class="dots"><span>...</span></li>'));e>2&&(o+=1);t==e?a-=2:t==e-1?a-=1:1==e&&(a=1);for(var r=a;r<=o;r++)r>e||(r<1&&(r=1),n+='<li class="numb '.concat(t==r?"active":"",'"><span>').concat(r,"</span></li>"));t<e-1&&(t<e-2&&(n+='<li class="dots"><span>...</span></li>'),e>3&&(n+='<li class="last numb"><span>'.concat(e,"</span></li>")));t<e&&(n+='<li class="btn next"><span>>></span></li>');D.innerHTML="",D.insertAdjacentHTML("beforeend",n)}(20,t.page);var n={prev:document.querySelector(".prev"),numb:document.querySelectorAll(".numb"),next:document.querySelector(".next")},a=n.prev,o=n.next;n.numb.forEach((function(n){n.addEventListener("click",(function(n){var a=n.target.textContent;t.page=a,R(),e(t)}))})),a&&a.addEventListener("click",(function(){t.page-=1,R(),e(t)})),o&&o.addEventListener("click",(function(){t.page+=1,R(),e(t)}))}(k),o("3nfD2");r=o("4cG42");var Y=document.querySelector("body"),J=document.querySelector(".gallery"),O=document.querySelector(".backdrop"),C=document.querySelector(".modal__button"),F=document.querySelector(".modal-info__container"),K=0,P={};J.addEventListener("click",(function(e){var t=JSON.parse(localStorage.getItem(g));e.preventDefault(),K=Number(e.target.dataset.id),t.map((function(e){var t,n,a,o,c,i,l,s,u,p;e.id===K&&(n=(t=e).poster_path,a=t.title,o=t.original_title,c=t.genre_ids,i=t.overview,l=t.vote_count,s=t.vote_average,u=t.popularity,p='\n      <img src="'.concat(n?r.Movie.IMG_PATH+n:"https://yt3.ggpht.com/AAKF_677TIvjFz_9xFF0R6PgiVd0kRpEtY6APSxSDRP65nXg8hkn9NFsz2bRd9_Z37DJ9D_b=s900-c-k-c0x00ffffff-no-rj",'" alt="').concat(a,'" class="modal-info__img">\n      <div class="modal-info">\n          <h2 class="modal-info__movie-name">').concat(a.toUpperCase(),'</h2>\n              <ul class="modal-info__list">\n              <li class="modal-info__item">\n                    <p class="modal-info__title">Vote / Votes<p>\n                    <div class="modal-info__content">\n                        <span class="modal-info__content-color"> ').concat(Math.round(10*s)/10,' </span> / <span class="modal-info__content-color modal-info__content-color--votes">').concat(l,'</span>\n                    </div>\n                </li>\n                <li class="modal-info__item">\n                    <p class="modal-info__title">Popularity</p>\n                    <div class="modal-info__content">').concat(u.toFixed(1),'</div>\n                </li>\n                  <li class="modal-info__item">\n                      <p class="modal-info__title">Original Title</p>\n                      <div class="modal-info__content modal-info__content--text ">').concat(o.toUpperCase(),'</div>\n                  </li>\n                  <li class="modal-info__item">\n                      <p class="modal-info__title">Genre</p>\n                      <div class="modal-info__content modal-info__content--text">').concat(d(c),'</div>\n                  </li>\n              </ul>\n                  <p class="modal-info__article-title">About</p>\n                  <p class="modal-info__article">').concat(i,'</p>\n                  <div class="container-btn">\n            <button type="button" class="btn" name="watched">add to watched</button>\n            <button type="button" class="btn" name="queue">add to queue</button>\n        </div>'),F.innerHTML=p,P=e)})),e.target!==e.currentTarget&&(Y.classList.add("modal-open"),O.classList.remove("is-hidden"))})),C.addEventListener("click",(function(e){Y.classList.remove("modal-open"),O.classList.add("is-hidden")})),F.addEventListener("click",(function(e){"watched"===e.target.name?V():"queue"===e.target.name&&z()})),O.addEventListener("click",(function(e){e.target===e.currentTarget&&(Y.classList.remove("modal-open"),O.classList.add("is-hidden"))}));var H=[],U=[],W="themovie-watched-lib",j="themovie-queue-lib";var V=function(){H=JSON.parse(localStorage.getItem(W))||[];var e=[];H.map((function(t){return e.push(t.id)})),e.includes(K)||(H.push(P),localStorage.setItem(W,JSON.stringify(H)),console.log("watched:  "+e))},z=function(){U=JSON.parse(localStorage.getItem(j))||[];var e=[];U.map((function(t){return e.push(t.id)})),e.includes(K)?console.log("есть уже"):(U.push(P),localStorage.setItem(j,JSON.stringify(U)),console.log("queue:  "+e))},X=document.querySelector(".footer-text__link"),Z=document.querySelector(".backdrop-team"),B=document.querySelector(".modal-team__button");X.addEventListener("click",(function(e){e.preventDefault(),Z.classList.remove("is-hidden")})),B.addEventListener("click",(function(e){e.preventDefault(),Z.classList.add("is-hidden")}))}();
//# sourceMappingURL=index.3087bd92.js.map
