(function(e){function t(t){for(var r,o,a=t[0],i=t[1],f=t[2],d=0,b=[];d<a.length;d++)o=a[d],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&b.push(c[o][0]),c[o]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);s&&s(t);while(b.length)b.shift()();return u.push.apply(u,f||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,o=1;o<n.length;o++){var a=n[o];0!==c[a]&&(r=!1)}r&&(u.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},o={app:0},c={app:0},u=[];function a(e){return i.p+"js/"+({about:"about"}[e]||e)+"."+{about:"da0000bc","chunk-464797e2":"2b42dcaf","chunk-88751d3c":"1c97858f"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,"chunk-464797e2":1,"chunk-88751d3c":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"1d5d7440","chunk-464797e2":"d3123081","chunk-88751d3c":"30f62585"}[e]+".css",c=i.p+r,u=document.getElementsByTagName("link"),a=0;a<u.length;a++){var f=u[a],d=f.getAttribute("data-href")||f.getAttribute("href");if("stylesheet"===f.rel&&(d===r||d===c))return t()}var b=document.getElementsByTagName("style");for(a=0;a<b.length;a++){f=b[a],d=f.getAttribute("data-href");if(d===r||d===c)return t()}var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onload=t,s.onerror=function(t){var r=t&&t.target&&t.target.src||c,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=r,delete o[e],s.parentNode.removeChild(s),n(u)},s.href=c;var l=document.getElementsByTagName("head")[0];l.appendChild(s)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var u=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=u);var f,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=a(e);var b=new Error;f=function(t){d.onerror=d.onload=null,clearTimeout(s);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",b.name="ChunkLoadError",b.type=r,b.request=o,n[1](b)}c[e]=void 0}};var s=setTimeout((function(){f({type:"timeout",target:d})}),12e4);d.onerror=d.onload=f,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/webproject/",i.oe=function(e){throw console.error(e),e};var f=window["webpackJsonp"]=window["webpackJsonp"]||[],d=f.push.bind(f);f.push=t,f=f.slice();for(var b=0;b<f.length;b++)t(f[b]);var s=d;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1728:function(e,t,n){"use strict";n("8c82")},"1f20":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t),n.d(t,"db",(function(){return M})),n.d(t,"auth",(function(){return N})),n.d(t,"login",(function(){return D})),n.d(t,"register",(function(){return H}));n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={id:"nav"},c=Object(r["f"])("首頁"),u=Object(r["f"])(" | "),a=Object(r["f"])("你的購物清單"),i=Object(r["f"])(" | "),f=Object(r["f"])("登入"),d=Object(r["f"])(" | "),b=Object(r["f"])("註冊");function s(e,t){var n=Object(r["w"])("router-link"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["e"])("div",o,[Object(r["g"])(n,{to:"/"},{default:Object(r["C"])((function(){return[c]})),_:1}),u,Object(r["g"])(n,{to:"/Body"},{default:Object(r["C"])((function(){return[a]})),_:1}),i,Object(r["g"])(n,{to:"/Login"},{default:Object(r["C"])((function(){return[f]})),_:1}),d,Object(r["g"])(n,{to:"/Register"},{default:Object(r["C"])((function(){return[b]})),_:1})]),Object(r["g"])(s)],64)}n("776f");var l=n("d959"),p=n.n(l);const h={},j=p()(h,[["render",s]]);var g=j,m=n("260b"),O=n("a680"),v={apiKey:"AIzaSyDtrtsJaFh8mQgvlyAxJVG2tm5ugbC0IsI",authDomain:"webproject-da7bc.firebaseapp.com",projectId:"webproject-da7bc",storageBucket:"webproject-da7bc.appspot.com",messagingSenderId:"600994560335",appId:"1:600994560335:web:917abf467eb64d9b3aed3a",measurementId:"G-HYRYSHE9M3"},y=n("ea7b"),w=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),k=function(e){return Object(r["s"])("data-v-6b43746f"),e=e(),Object(r["q"])(),e},_={class:"home"},C=k((function(){return Object(r["e"])("h1",null,"歡迎使用",-1)})),S=[C];function E(e,t){return Object(r["p"])(),Object(r["d"])("div",_,S)}n("1728");const P={},I=p()(P,[["render",E],["__scopeId","data-v-6b43746f"]]);var x=I,A=[{path:"/",name:"Home",component:x},{path:"/Body",name:"Body",component:function(){return n.e("about").then(n.bind(null,"0b49"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-88751d3c").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-464797e2").then(n.bind(null,"73cf"))}}],B=Object(w["a"])({history:Object(w["b"])("/webproject/"),routes:A}),T=B,L=Object(m["a"])(v),M=Object(O["c"])(L),N=Object(y["b"])();function D(e,t){return Object(y["c"])(N,e,t)}function H(e,t){return console.log(e,t),Object(y["a"])(N,e,t)}Object(r["c"])(g).use(T).mount("#app")},"776f":function(e,t,n){"use strict";n("1f20")},"8c82":function(e,t,n){}});
//# sourceMappingURL=app.0e02cdcc.js.map