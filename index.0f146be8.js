var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},e={},n={},o=t.parcelRequired7c6;null==o&&((o=function(t){if(t in e)return e[t].exports;if(t in n){var o=n[t];delete n[t];var a={id:t,exports:{}};return e[t]=a,o.call(a.exports,a,a.exports),a.exports}var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(t,e){n[t]=e},t.parcelRequired7c6=o),o("gjiCh");var a=o("dNTj1");o("dNTj1");var r=o("eVqJU"),i=o("k48Mq"),l=o("bAs1G");const c="active",s="btn-pagination",u="numb",d="prev-page",g="next-page",b="first-page",p="last-page",h="dots",f="disabled";function S(t){const e=t.page,n=t.total_pages;document.querySelector(".pagination-container").innerHTML=function(t,e){if(t<2)return"";let n,o,a=`<ul class="pagination-list" data-last="${t}" data-current="${e}">`,r=e-1,i=e+1;if(e>1&&(a+=`<li class="${s} ${d}" ><button data-page="${e-1}">&#129144;</button></li>`),t<6)for(let r=1;r<=t;r++)n=e===r?c:"",o=e===r?f:"",a+=`<li class="${u} ${n}" ><button ${o} data-page="${r}">${r}</button></li>`;else{e>2&&(a+=`<li class="${u} ${b}" ><button data-page="1">1</button></li>`,e>3&&window.innerWidth>768&&(a+=`<li class="${h}"><button ${f}>...</button></li>`)),1===e?i+=2:2===e&&(i+=1),e===t?r-=2:e===t-1&&(r-=1);for(let l=r;l<=i;l++)0===l&&(l+=1),l>t||(n=e===l?c:"",o=e===l?f:"",a+=`<li class="${u} ${n}" ><button ${o} data-page="${l}">${l}</button></li>`);e<t-1&&window.innerWidth>768&&(e<t-2&&(a+=`<li class="${h}"><button ${f}>...</button></li>`),a+=`<li class="${u} ${p}" ><button data-page="${t}">${t}</button></li>`)}return e<t&&(a+=`<li class="${s} ${g}" ><button data-page="${e+1}">&#129146;</button></li>`),a+="</ul>",a}(n,e)}async function L(t){try{await(0,i.genreLoad)(t);const e=await t.fetchTrend();console.log(e),(0,l.setCurrenDataToLS)(e.results),(0,r.makeMarkupCard)(e),S(e),t.lastPage=e.total_pages}catch(t){console.log(t)}}async function m(t){try{await(0,i.genreLoad)(t);const e=await t.fetchSearch();console.log(e),(0,l.setCurrenDataToLS)(e.results),(0,r.makeMarkupCard)(e),S(e),t.lastPage=e.total_pages}catch(t){console.log(t)}}var y=o("dvsic"),w=(a=o("dNTj1"),r=o("eVqJU"),y=o("dvsic"),a=o("dNTj1"),o("dzEJp"));const x=new(0,(_=o("gjiCh")).default),C={btnSwitchDay:document.querySelector(".time-switch-day"),btnSwitchWeek:document.querySelector(".time-switch-week")};function v(t){switch(t){case a.Movie.trendTime.DAY:(0,w.disabledEl)(C.btnSwitchDay),(0,w.unlockEl)(C.btnSwitchWeek);break;case a.Movie.trendTime.WEEK:(0,w.disabledEl)(C.btnSwitchWeek),(0,w.unlockEl)(C.btnSwitchDay)}}C.btnSwitchDay.addEventListener("click",(function(){x.enable("loader"),q.page=1,q.currentTrendTime=a.Movie.trendTime.DAY,L(q),v(a.Movie.trendTime.DAY),$()})),C.btnSwitchWeek.addEventListener("click",(function(){x.enable("loader"),q.page=1,q.currentTrendTime=a.Movie.trendTime.WEEK,L(q),v(a.Movie.trendTime.WEEK),$()}));l=o("bAs1G");const T=new(0,(_=o("gjiCh")).default),E={formEl:document.querySelector(".search-form"),paragraphEl:document.querySelector(".warning-notification")};let k,M=null;function $(){M=null}E.formEl.addEventListener("submit",(async function(t){try{if(T.enable("loader"),t.preventDefault(),M=t.target.query.value.trim(),""===M)return E.paragraphEl.innerHTML="Enter the name in the search field",void T.disable("loader");k=new(0,a.Movie)(M),k.langCurrent=(0,y.getLanguageFromLS)();const e=await k.fetchSearch();if(0===e.total_results)return t.target.reset(),E.paragraphEl.innerHTML="Search result not successful. Enter the correct movie name and try again.",void T.disable("loader");(0,r.makeMarkupCard)(e),S(e),t.target.reset(),E.paragraphEl.innerHTML="",console.log(e),k.lastPage=e.total_pages,(0,l.setCurrenDataToLS)(e.results),(0,w.unlockEl)(C.btnSwitchDay),(0,w.unlockEl)(C.btnSwitchWeek)}catch(t){console.log(t.message)}}));let q;(new(0,(_=o("gjiCh")).default)).enable("preloader"),null===M&&function(){q=new(0,a.Movie);const t=(0,y.getLanguageFromLS)();t?(q.langCurrent=t,(0,y.switchBtnLang)(q.langCurrent)):q.langCurrent=(0,y.setLanguageToLS)(a.Movie.language.ENGLISH);L(q),v(a.Movie.trendTime.DAY),(0,y.setCurrentPageToLS)(y.keyLS.VALUE_PAGE_INDEX)}();a=o("dNTj1"),y=o("dvsic");var _=o("gjiCh"),U=o("fPbO4");y=o("dvsic"),y=o("dvsic");const N={linkHome:document.querySelector(".js-homeLink-text"),linkMyLibrary:document.querySelector(".js-myLibrary-text"),btnSignUp:document.querySelector(".js-signUp-text"),btnLogIn:document.querySelector(".js-logIn-text"),searchPlaceholder:document.querySelector(".search-form__input"),textUpFirst:document.querySelector(".js-footer-text__up--first"),textUpSecond:document.querySelector(".js-footer-text__up--second"),textUpThird:document.querySelector(".js-footer-text__up--third"),textLink:document.querySelector(".js-footer-text__link")},{linkHome:j,linkMyLibrary:D,btnSignUp:A,btnLogIn:I,searchPlaceholder:W,textUpFirst:P,textUpSecond:H,textUpThird:Y,textLink:F}=N;async function G(){const t=await(0,y.getLanguageFromLS)();"en-US"===t&&(j.textContent="Home",D.textContent="My library",A.textContent="Sign Up","Вхід"===I.textContent?I.textContent="Log In":"Вихід"===I.textContent&&(I.textContent="Log Out"),W.placeholder="Movie search",y.refs.btnSwitchEN.textContent="en",y.refs.btnSwitchUA.textContent="ua",C.btnSwitchDay.textContent="day",C.btnSwitchWeek.textContent="week",P.textContent="All Rights Reserved",H.textContent="Developed with",Y.textContent="by",F.textContent="GoIT Students"),"uk-UA"===t&&(j.textContent="Головна",D.textContent="Бібліотека",A.textContent="Реєстрація","Log In"===I.textContent?I.textContent="Вхід":"Log Out"===I.textContent&&(I.textContent="Вихід"),W.placeholder="Пошук фільму",y.refs.btnSwitchEN.textContent="англ",y.refs.btnSwitchUA.textContent="укр",C.btnSwitchDay.textContent="день",C.btnSwitchWeek.textContent="тиждень",P.textContent="Всі права захищені",H.textContent="Зроблено з",Y.textContent="",F.textContent="Студентами GoIT")}G();const O=new(0,_.default);y.refs.btnSwitchEN.addEventListener("click",(function(){O.enable("loader"),null===M?(q.langCurrent=(0,y.setLanguageToLS)(a.Movie.language.ENGLISH),L(q)):(k.langCurrent=(0,y.setLanguageToLS)(a.Movie.language.ENGLISH),m(k));G(),(0,U.renderFooter)()})),y.refs.btnSwitchUA.addEventListener("click",(function(){O.enable("loader"),null===M?(q.langCurrent=(0,y.setLanguageToLS)(a.Movie.language.UKRAINIAN),L(q)):(k.langCurrent=(0,y.setLanguageToLS)(a.Movie.language.UKRAINIAN),m(k));G(),(0,U.renderFooter)()})),o("dNTj1");const R=document.querySelector(".scroll-area"),K=document.querySelector(".up-btn"),V=document.querySelector(".icon__button");function B(){R.scrollIntoView({block:"center",behavior:"smooth"})}K.addEventListener("click",B),window.addEventListener("scroll",(()=>{scrollY>230&&(V.classList.add("icon__button--opacity"),V.style.position="fixed"),scrollY<230&&(V.classList.remove("icon__button--opacity"),V.style.position="absolute"),scrollY>300?K.classList.remove("is-hidden"):scrollY<300&&K.classList.add("is-hidden")}));new(0,(_=o("gjiCh")).default);const J=document.querySelector(".pagination-container");J.addEventListener("click",(function(t){const e={elPaginationList:document.querySelector(".pagination-list")},n=e.elPaginationList.dataset.current;e.elPaginationList.dataset.last;if("BUTTON"!==t.target.nodeName)return;const o=t.target.dataset.page;if(o===n)return;a=o,null===M?q.page=a:k.page=a,null===M?L(q):m(k),B();var a})),console.log(J),o("lMgIy"),o("bTcpz"),o("fPbO4"),o("7bYU0"),o("8cBDi"),o("f0W3V");
//# sourceMappingURL=index.0f146be8.js.map
