parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"clu1":[function(require,module,exports) {

},{"./../images/icon-close.svg":[["icon-close.01fad084.svg","cAq2"],"cAq2"]}],"d6sW":[function(require,module,exports) {
const t=[{preview:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg",description:"Hokkaido Flower"},{preview:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",description:"Container Haulage Freight"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",description:"Aerial Beach View"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",description:"Flower Blooms"},{preview:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",original:"https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",description:"Alpine Mountains"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",description:"Mountain Lake Sailing"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",description:"Alpine Spring Meadows"},{preview:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",description:"Nature Landscape"},{preview:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",original:"https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",description:"Lighthouse Coast Sea"},{preview:"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_640.jpg",original:"https://cdn.pixabay.com/photo/2016/11/14/04/45/elephant-1822636_1280.jpg",description:"Elephant Trunk Tusks"},{preview:"https://cdn.pixabay.com/photo/2018/08/19/12/23/photoshop-3616540_640.jpg",original:"https://cdn.pixabay.com/photo/2018/08/19/12/23/photoshop-3616540_1280.jpg",description:"Photoshop Bear Woman"},{preview:"https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_640.jpg",original:"https://cdn.pixabay.com/photo/2018/04/16/16/16/sunset-3325080_1280.jpg",description:"Sunset, Sunrise, Nature"},{preview:"https://cdn.pixabay.com/photo/2017/07/27/02/23/space-2543838_640.jpg",original:"https://cdn.pixabay.com/photo/2017/07/27/02/23/space-2543838_1280.jpg",description:"Space"},{preview:"https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_640.jpg",original:"https://cdn.pixabay.com/photo/2017/10/17/19/11/fantasy-2861815_1280.jpg",description:"UFO"},{preview:"https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_640.jpg",original:"https://cdn.pixabay.com/photo/2016/11/18/21/10/wolf-1836875_1280.jpg",description:"Wolf"}],o=document.querySelector(".js-gallery"),i=s(t),e=document.querySelector(".js-lightbox"),n=document.querySelector(".lightbox__button"),p=document.querySelector(".lightbox__image"),a=document.querySelector(".lightbox__overlay"),c=document.querySelector(".lightbox__content ");function s(t){return t.map(({preview:t,original:o,description:i})=>`<li class="gallery__item">\n\t<a\n\t\tclass="gallery__link"\n\t\thref="#"\n\t>\n\t\t<img\n\t\t\tclass="gallery__image lazyload"\n\t\t\tdata-src="${t}"\n      data-source="${o}"\n\t\t\talt="${i}"\n\t\t/>\n\t</a>\n</li>`).join("")}function r(t){const o=t.target.dataset.source,i=t.target.alt;t.target.classList.contains("gallery__image")&&(window.addEventListener("keydown",l),window.addEventListener("keydown",g),window.addEventListener("keydown",y),e.classList.add("is-open"),p.src=`${o}`,p.alt=`${i}`)}function d(t){window.removeEventListener("keydown",l),window.removeEventListener("keydown",g),window.removeEventListener("keydown",y),e.classList.remove("is-open"),p.src="",p.alt=""}function h(t){d()}function l(t){"Escape"===t.code&&d()}function g(o){if("ArrowRight"===o.code){const o=t.map(t=>t.original).indexOf(p.src);if(o!==t.length-1){const i=t[o+1].original,e=t[o+1].description;p.src=`${i}`,p.alt=`${e}`}}}function y(o){if("ArrowLeft"===o.code){const o=t.map(t=>t.original).indexOf(p.src);if(0!==o){const i=t[o-1].original,e=t[o-1].description;p.src=`${i}`,p.alt=`${e}`}}}o.insertAdjacentHTML("beforeend",i),o.addEventListener("click",r),n.addEventListener("click",d),a.addEventListener("click",h);
},{}],"c8dR":[function(require,module,exports) {
!function(e,t){var a=function(e,t,a){"use strict";var n,i;if(function(){var t,a={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",fastLoadedClass:"ls-is-cached",iframeLoadMode:0,srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:!0,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:!0,ricTimeout:0,throttleDelay:125};for(t in i=e.lazySizesConfig||e.lazysizesConfig||{},a)t in i||(i[t]=a[t])}(),!t||!t.getElementsByClassName)return{init:function(){},cfg:i,noSupport:!0};var r=t.documentElement,s=e.HTMLPictureElement,o=e.addEventListener.bind(e),l=e.setTimeout,d=e.requestAnimationFrame||l,c=e.requestIdleCallback,u=/^picture$/i,f=["load","error","lazyincluded","_lazyloaded"],m={},g=Array.prototype.forEach,v=function(e,t){return m[t]||(m[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")),m[t].test(e.getAttribute("class")||"")&&m[t]},y=function(e,t){v(e,t)||e.setAttribute("class",(e.getAttribute("class")||"").trim()+" "+t)},z=function(e,t){var a;(a=v(e,t))&&e.setAttribute("class",(e.getAttribute("class")||"").replace(a," "))},h=function(e,t,a){var n=a?"addEventListener":"removeEventListener";a&&h(e,t),f.forEach(function(a){e[n](a,t)})},p=function(e,a,i,r,s){var o=t.createEvent("Event");return i||(i={}),i.instance=n,o.initEvent(a,!r,!s),o.detail=i,e.dispatchEvent(o),o},b=function(t,a){var n;!s&&(n=e.picturefill||i.pf)?(a&&a.src&&!t.getAttribute("srcset")&&t.setAttribute("srcset",a.src),n({reevaluate:!0,elements:[t]})):a&&a.src&&(t.src=a.src)},A=function(e,t){return(getComputedStyle(e,null)||{})[t]},C=function(e,t,a){for(a=a||e.offsetWidth;a<i.minSize&&t&&!e._lazysizesWidth;)a=t.offsetWidth,t=t.parentNode;return a},E=(R=[],D=[],k=R,H=function(){var e=k;for(k=R.length?D:R,T=!0,F=!1;e.length;)e.shift()();T=!1},O=function(e,a){T&&!a?e.apply(this,arguments):(k.push(e),F||(F=!0,(t.hidden?l:d)(H)))},O._lsFlush=H,O),_=function(e,t){return t?function(){E(e)}:function(){var t=this,a=arguments;E(function(){e.apply(t,a)})}},L=function(e){var t,n,i=function(){t=null,e()},r=function(){var e=a.now()-n;e<99?l(r,99-e):(c||i)(i)};return function(){n=a.now(),t||(t=l(r,99))}},w=function(){var s,f,m,C,w,N,x,W,S,B,T,F,R,D,k,H,O,P,$,q=/^img$/i,I=/^iframe$/i,U="onscroll"in e&&!/(gle|ing)bot/.test(navigator.userAgent),j=0,G=0,J=-1,K=function(e){G--,(!e||G<0||!e.target)&&(G=0)},Q=function(e){return null==F&&(F="hidden"==A(t.body,"visibility")),F||!("hidden"==A(e.parentNode,"visibility")&&"hidden"==A(e,"visibility"))},V=function(e,a){var n,i=e,s=Q(e);for(W-=a,T+=a,S-=a,B+=a;s&&(i=i.offsetParent)&&i!=t.body&&i!=r;)(s=(A(i,"opacity")||1)>0)&&"visible"!=A(i,"overflow")&&(n=i.getBoundingClientRect(),s=B>n.left&&S<n.right&&T>n.top-1&&W<n.bottom+1);return s},X=function(){var e,a,o,l,d,c,u,m,g,v,y,z,h=n.elements;if((C=i.loadMode)&&G<8&&(e=h.length)){for(a=0,J++;a<e;a++)if(h[a]&&!h[a]._lazyRace)if(!U||n.prematureUnveil&&n.prematureUnveil(h[a]))ie(h[a]);else if((m=h[a].getAttribute("data-expand"))&&(c=1*m)||(c=j),v||(v=!i.expand||i.expand<1?r.clientHeight>500&&r.clientWidth>500?500:370:i.expand,n._defEx=v,y=v*i.expFactor,z=i.hFac,F=null,j<y&&G<1&&J>2&&C>2&&!t.hidden?(j=y,J=0):j=C>1&&J>1&&G<6?v:0),g!==c&&(N=innerWidth+c*z,x=innerHeight+c,u=-1*c,g=c),o=h[a].getBoundingClientRect(),(T=o.bottom)>=u&&(W=o.top)<=x&&(B=o.right)>=u*z&&(S=o.left)<=N&&(T||B||S||W)&&(i.loadHidden||Q(h[a]))&&(f&&G<3&&!m&&(C<3||J<4)||V(h[a],c))){if(ie(h[a]),d=!0,G>9)break}else!d&&f&&!l&&G<4&&J<4&&C>2&&(s[0]||i.preloadAfterLoad)&&(s[0]||!m&&(T||B||S||W||"auto"!=h[a].getAttribute(i.sizesAttr)))&&(l=s[0]||h[a]);l&&!d&&ie(l)}},Y=(R=X,k=0,H=i.throttleDelay,O=i.ricTimeout,P=function(){D=!1,k=a.now(),R()},$=c&&O>49?function(){c(P,{timeout:O}),O!==i.ricTimeout&&(O=i.ricTimeout)}:_(function(){l(P)},!0),function(e){var t;(e=!0===e)&&(O=33),D||(D=!0,(t=H-(a.now()-k))<0&&(t=0),e||t<9?$():l($,t))}),Z=function(e){var t=e.target;t._lazyCache?delete t._lazyCache:(K(e),y(t,i.loadedClass),z(t,i.loadingClass),h(t,te),p(t,"lazyloaded"))},ee=_(Z),te=function(e){ee({target:e.target})},ae=function(e){var t,a=e.getAttribute(i.srcsetAttr);(t=i.customMedia[e.getAttribute("data-media")||e.getAttribute("media")])&&e.setAttribute("media",t),a&&e.setAttribute("srcset",a)},ne=_(function(e,t,a,n,r){var s,o,d,c,f,v;(f=p(e,"lazybeforeunveil",t)).defaultPrevented||(n&&(a?y(e,i.autosizesClass):e.setAttribute("sizes",n)),o=e.getAttribute(i.srcsetAttr),s=e.getAttribute(i.srcAttr),r&&(d=e.parentNode,c=d&&u.test(d.nodeName||"")),v=t.firesLoad||"src"in e&&(o||s||c),f={target:e},y(e,i.loadingClass),v&&(clearTimeout(m),m=l(K,2500),h(e,te,!0)),c&&g.call(d.getElementsByTagName("source"),ae),o?e.setAttribute("srcset",o):s&&!c&&(I.test(e.nodeName)?function(e,t){var a=e.getAttribute("data-load-mode")||i.iframeLoadMode;0==a?e.contentWindow.location.replace(t):1==a&&(e.src=t)}(e,s):e.src=s),r&&(o||c)&&b(e,{src:s})),e._lazyRace&&delete e._lazyRace,z(e,i.lazyClass),E(function(){var t=e.complete&&e.naturalWidth>1;v&&!t||(t&&y(e,i.fastLoadedClass),Z(f),e._lazyCache=!0,l(function(){"_lazyCache"in e&&delete e._lazyCache},9)),"lazy"==e.loading&&G--},!0)}),ie=function(e){if(!e._lazyRace){var t,a=q.test(e.nodeName),n=a&&(e.getAttribute(i.sizesAttr)||e.getAttribute("sizes")),r="auto"==n;(!r&&f||!a||!e.getAttribute("src")&&!e.srcset||e.complete||v(e,i.errorClass)||!v(e,i.lazyClass))&&(t=p(e,"lazyunveilread").detail,r&&M.updateElem(e,!0,e.offsetWidth),e._lazyRace=!0,G++,ne(e,t,r,n,a))}},re=L(function(){i.loadMode=3,Y()}),se=function(){3==i.loadMode&&(i.loadMode=2),re()},oe=function(){f||(a.now()-w<999?l(oe,999):(f=!0,i.loadMode=3,Y(),o("scroll",se,!0)))};return{_:function(){w=a.now(),n.elements=t.getElementsByClassName(i.lazyClass),s=t.getElementsByClassName(i.lazyClass+" "+i.preloadClass),o("scroll",Y,!0),o("resize",Y,!0),o("pageshow",function(e){if(e.persisted){var a=t.querySelectorAll("."+i.loadingClass);a.length&&a.forEach&&d(function(){a.forEach(function(e){e.complete&&ie(e)})})}}),e.MutationObserver?new MutationObserver(Y).observe(r,{childList:!0,subtree:!0,attributes:!0}):(r.addEventListener("DOMNodeInserted",Y,!0),r.addEventListener("DOMAttrModified",Y,!0),setInterval(Y,999)),o("hashchange",Y,!0),["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){t.addEventListener(e,Y,!0)}),/d$|^c/.test(t.readyState)?oe():(o("load",oe),t.addEventListener("DOMContentLoaded",Y),l(oe,2e4)),n.elements.length?(X(),E._lsFlush()):Y()},checkElems:Y,unveil:ie,_aLSL:se}}(),M=(W=_(function(e,t,a,n){var i,r,s;if(e._lazysizesWidth=n,n+="px",e.setAttribute("sizes",n),u.test(t.nodeName||""))for(i=t.getElementsByTagName("source"),r=0,s=i.length;r<s;r++)i[r].setAttribute("sizes",n);a.detail.dataAttr||b(e,a.detail)}),S=function(e,t,a){var n,i=e.parentNode;i&&(a=C(e,i,a),(n=p(e,"lazybeforesizes",{width:a,dataAttr:!!t})).defaultPrevented||(a=n.detail.width)&&a!==e._lazysizesWidth&&W(e,i,n,a))},B=L(function(){var e,t=x.length;if(t)for(e=0;e<t;e++)S(x[e])}),{_:function(){x=t.getElementsByClassName(i.autosizesClass),o("resize",B)},checkElems:B,updateElem:S}),N=function(){!N.i&&t.getElementsByClassName&&(N.i=!0,M._(),w._())};var x,W,S,B;var T,F,R,D,k,H,O;return l(function(){i.init&&N()}),n={cfg:i,autoSizer:M,loader:w,init:N,uP:b,aC:y,rC:z,hC:v,fire:p,gW:C,rAF:E}}(e,e.document,Date);e.lazySizes=a,"object"==typeof module&&module.exports&&(module.exports=a)}("undefined"!=typeof window?window:{});
},{}],"Focm":[function(require,module,exports) {
"use strict";require("./sass/main.scss"),require("./js/main.js"),require("lazysizes");
},{"./sass/main.scss":"clu1","./js/main.js":"d6sW","lazysizes":"c8dR"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-09-gallery/src.00392d2b.js.map