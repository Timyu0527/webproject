(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-vendors"],{"00ee":function(e,t,n){var r=n("b622"),i=r("toStringTag"),o={};o[i]="z",e.exports="[object z]"===String(o)},"01b4":function(e,t){var n=function(){this.head=null,this.tail=null};n.prototype={add:function(e){var t={item:e,next:null};this.head?this.tail.next=t:this.head=t,this.tail=t},get:function(){var e=this.head;if(e)return this.head=e.next,this.tail===e&&(this.tail=null),e.item}},e.exports=n},"0366":function(e,t,n){var r=n("e330"),i=n("59ed"),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:o?o(e,t):function(){return e.apply(t,arguments)}}},"06cf":function(e,t,n){var r=n("83ab"),i=n("c65b"),o=n("d1e7"),s=n("5c6c"),a=n("fc6a"),c=n("a04b"),u=n("1a2d"),l=n("0cfb"),d=Object.getOwnPropertyDescriptor;t.f=r?d:function(e,t){if(e=a(e),t=c(t),l)try{return d(e,t)}catch(n){}if(u(e,t))return s(!i(o.f,e,t),e[t])}},"07fa":function(e,t,n){var r=n("50c4");e.exports=function(e){return r(e.length)}},"0cb2":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=Math.floor,s=r("".charAt),a=r("".replace),c=r("".slice),u=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,l=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,h){var f=n+e.length,p=r.length,m=l;return void 0!==d&&(d=i(d),m=u),a(h,m,(function(i,a){var u;switch(s(a,0)){case"$":return"$";case"&":return e;case"`":return c(t,0,n);case"'":return c(t,f);case"<":u=d[c(a,1,-1)];break;default:var l=+a;if(0===l)return i;if(l>p){var h=o(l/10);return 0===h?i:h<=p?void 0===r[h-1]?s(a,1):r[h-1]+s(a,1):i}u=r[l-1]}return void 0===u?"":u}))}},"0cfb":function(e,t,n){var r=n("83ab"),i=n("d039"),o=n("cc12");e.exports=!r&&!i((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},"0d51":function(e,t,n){var r=n("da84"),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},"107c":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1209:function(e,t,n){"use strict";var r={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},i={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},o=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective","matrix","matrix3d"],s={CSS:{},springs:{}};function a(e,t,n){return Math.min(Math.max(e,t),n)}function c(e,t){return e.indexOf(t)>-1}function u(e,t){return e.apply(null,t)}var l={arr:function(e){return Array.isArray(e)},obj:function(e){return c(Object.prototype.toString.call(e),"Object")},pth:function(e){return l.obj(e)&&e.hasOwnProperty("totalLength")},svg:function(e){return e instanceof SVGElement},inp:function(e){return e instanceof HTMLInputElement},dom:function(e){return e.nodeType||l.svg(e)},str:function(e){return"string"===typeof e},fnc:function(e){return"function"===typeof e},und:function(e){return"undefined"===typeof e},nil:function(e){return l.und(e)||null===e},hex:function(e){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(e)},rgb:function(e){return/^rgb/.test(e)},hsl:function(e){return/^hsl/.test(e)},col:function(e){return l.hex(e)||l.rgb(e)||l.hsl(e)},key:function(e){return!r.hasOwnProperty(e)&&!i.hasOwnProperty(e)&&"targets"!==e&&"keyframes"!==e}};function d(e){var t=/\(([^)]+)\)/.exec(e);return t?t[1].split(",").map((function(e){return parseFloat(e)})):[]}function h(e,t){var n=d(e),r=a(l.und(n[0])?1:n[0],.1,100),i=a(l.und(n[1])?100:n[1],.1,100),o=a(l.und(n[2])?10:n[2],.1,100),c=a(l.und(n[3])?0:n[3],.1,100),u=Math.sqrt(i/r),h=o/(2*Math.sqrt(i*r)),f=h<1?u*Math.sqrt(1-h*h):0,p=1,m=h<1?(h*u-c)/f:-c+u;function g(e){var n=t?t*e/1e3:e;return n=h<1?Math.exp(-n*h*u)*(p*Math.cos(f*n)+m*Math.sin(f*n)):(p+m*n)*Math.exp(-n*u),0===e||1===e?e:1-n}function v(){var t=s.springs[e];if(t)return t;var n=1/6,r=0,i=0;while(1)if(r+=n,1===g(r)){if(i++,i>=16)break}else i=0;var o=r*n*1e3;return s.springs[e]=o,o}return t?g:v}function f(e){return void 0===e&&(e=10),function(t){return Math.ceil(a(t,1e-6,1)*e)*(1/e)}}var p=function(){var e=11,t=1/(e-1);function n(e,t){return 1-3*t+3*e}function r(e,t){return 3*t-6*e}function i(e){return 3*e}function o(e,t,o){return((n(t,o)*e+r(t,o))*e+i(t))*e}function s(e,t,o){return 3*n(t,o)*e*e+2*r(t,o)*e+i(t)}function a(e,t,n,r,i){var s,a,c=0;do{a=t+(n-t)/2,s=o(a,r,i)-e,s>0?n=a:t=a}while(Math.abs(s)>1e-7&&++c<10);return a}function c(e,t,n,r){for(var i=0;i<4;++i){var a=s(t,n,r);if(0===a)return t;var c=o(t,n,r)-e;t-=c/a}return t}function u(n,r,i,u){if(0<=n&&n<=1&&0<=i&&i<=1){var l=new Float32Array(e);if(n!==r||i!==u)for(var d=0;d<e;++d)l[d]=o(d*t,n,i);return function(e){return n===r&&i===u||0===e||1===e?e:o(h(e),r,u)}}function h(r){for(var o=0,u=1,d=e-1;u!==d&&l[u]<=r;++u)o+=t;--u;var h=(r-l[u])/(l[u+1]-l[u]),f=o+h*t,p=s(f,n,i);return p>=.001?c(r,f,n,i):0===p?f:a(r,o,o+t,n,i)}}return u}(),m=function(){var e={linear:function(){return function(e){return e}}},t={Sine:function(){return function(e){return 1-Math.cos(e*Math.PI/2)}},Circ:function(){return function(e){return 1-Math.sqrt(1-e*e)}},Back:function(){return function(e){return e*e*(3*e-2)}},Bounce:function(){return function(e){var t,n=4;while(e<((t=Math.pow(2,--n))-1)/11);return 1/Math.pow(4,3-n)-7.5625*Math.pow((3*t-2)/22-e,2)}},Elastic:function(e,t){void 0===e&&(e=1),void 0===t&&(t=.5);var n=a(e,1,10),r=a(t,.1,2);return function(e){return 0===e||1===e?e:-n*Math.pow(2,10*(e-1))*Math.sin((e-1-r/(2*Math.PI)*Math.asin(1/n))*(2*Math.PI)/r)}}},n=["Quad","Cubic","Quart","Quint","Expo"];return n.forEach((function(e,n){t[e]=function(){return function(e){return Math.pow(e,n+2)}}})),Object.keys(t).forEach((function(n){var r=t[n];e["easeIn"+n]=r,e["easeOut"+n]=function(e,t){return function(n){return 1-r(e,t)(1-n)}},e["easeInOut"+n]=function(e,t){return function(n){return n<.5?r(e,t)(2*n)/2:1-r(e,t)(-2*n+2)/2}},e["easeOutIn"+n]=function(e,t){return function(n){return n<.5?(1-r(e,t)(1-2*n))/2:(r(e,t)(2*n-1)+1)/2}}})),e}();function g(e,t){if(l.fnc(e))return e;var n=e.split("(")[0],r=m[n],i=d(e);switch(n){case"spring":return h(e,t);case"cubicBezier":return u(p,i);case"steps":return u(f,i);default:return u(r,i)}}function v(e){try{var t=document.querySelectorAll(e);return t}catch(n){return}}function b(e,t){for(var n=e.length,r=arguments.length>=2?arguments[1]:void 0,i=[],o=0;o<n;o++)if(o in e){var s=e[o];t.call(r,s,o,e)&&i.push(s)}return i}function y(e){return e.reduce((function(e,t){return e.concat(l.arr(t)?y(t):t)}),[])}function _(e){return l.arr(e)?e:(l.str(e)&&(e=v(e)||e),e instanceof NodeList||e instanceof HTMLCollection?[].slice.call(e):[e])}function w(e,t){return e.some((function(e){return e===t}))}function O(e){var t={};for(var n in e)t[n]=e[n];return t}function E(e,t){var n=O(e);for(var r in e)n[r]=t.hasOwnProperty(r)?t[r]:e[r];return n}function T(e,t){var n=O(e);for(var r in t)n[r]=l.und(e[r])?t[r]:e[r];return n}function I(e){var t=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(e);return t?"rgba("+t[1]+",1)":e}function k(e){var t=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,n=e.replace(t,(function(e,t,n,r){return t+t+n+n+r+r})),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(n),i=parseInt(r[1],16),o=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+i+","+o+","+s+",1)"}function S(e){var t,n,r,i=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(e)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(e),o=parseInt(i[1],10)/360,s=parseInt(i[2],10)/100,a=parseInt(i[3],10)/100,c=i[4]||1;function u(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}if(0==s)t=n=r=a;else{var l=a<.5?a*(1+s):a+s-a*s,d=2*a-l;t=u(d,l,o+1/3),n=u(d,l,o),r=u(d,l,o-1/3)}return"rgba("+255*t+","+255*n+","+255*r+","+c+")"}function A(e){return l.rgb(e)?I(e):l.hex(e)?k(e):l.hsl(e)?S(e):void 0}function x(e){var t=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(e);if(t)return t[1]}function j(e){return c(e,"translate")||"perspective"===e?"px":c(e,"rotate")||c(e,"skew")?"deg":void 0}function C(e,t){return l.fnc(e)?e(t.target,t.id,t.total):e}function P(e,t){return e.getAttribute(t)}function N(e,t,n){var r=x(t);if(w([n,"deg","rad","turn"],r))return t;var i=s.CSS[t+n];if(!l.und(i))return i;var o=100,a=document.createElement(e.tagName),c=e.parentNode&&e.parentNode!==document?e.parentNode:document.body;c.appendChild(a),a.style.position="absolute",a.style.width=o+n;var u=o/a.offsetWidth;c.removeChild(a);var d=u*parseFloat(t);return s.CSS[t+n]=d,d}function L(e,t,n){if(t in e.style){var r=t.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),i=e.style[t]||getComputedStyle(e).getPropertyValue(r)||"0";return n?N(e,i,n):i}}function R(e,t){return l.dom(e)&&!l.inp(e)&&(!l.nil(P(e,t))||l.svg(e)&&e[t])?"attribute":l.dom(e)&&w(o,t)?"transform":l.dom(e)&&"transform"!==t&&L(e,t)?"css":null!=e[t]?"object":void 0}function D(e){if(l.dom(e)){var t,n=e.style.transform||"",r=/(\w+)\(([^)]*)\)/g,i=new Map;while(t=r.exec(n))i.set(t[1],t[2]);return i}}function M(e,t,n,r){var i=c(t,"scale")?1:0+j(t),o=D(e).get(t)||i;return n&&(n.transforms.list.set(t,o),n.transforms["last"]=t),r?N(e,o,r):o}function F(e,t,n,r){switch(R(e,t)){case"transform":return M(e,t,r,n);case"css":return L(e,t,n);case"attribute":return P(e,t);default:return e[t]||0}}function U(e,t){var n=/^(\*=|\+=|-=)/.exec(e);if(!n)return e;var r=x(e)||0,i=parseFloat(t),o=parseFloat(e.replace(n[0],""));switch(n[0][0]){case"+":return i+o+r;case"-":return i-o+r;case"*":return i*o+r}}function V(e,t){if(l.col(e))return A(e);if(/\s/g.test(e))return e;var n=x(e),r=n?e.substr(0,e.length-n.length):e;return t?r+t:r}function $(e,t){return Math.sqrt(Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2))}function B(e){return 2*Math.PI*P(e,"r")}function H(e){return 2*P(e,"width")+2*P(e,"height")}function q(e){return $({x:P(e,"x1"),y:P(e,"y1")},{x:P(e,"x2"),y:P(e,"y2")})}function z(e){for(var t,n=e.points,r=0,i=0;i<n.numberOfItems;i++){var o=n.getItem(i);i>0&&(r+=$(t,o)),t=o}return r}function W(e){var t=e.points;return z(e)+$(t.getItem(t.numberOfItems-1),t.getItem(0))}function G(e){if(e.getTotalLength)return e.getTotalLength();switch(e.tagName.toLowerCase()){case"circle":return B(e);case"rect":return H(e);case"line":return q(e);case"polyline":return z(e);case"polygon":return W(e)}}function K(e){var t=G(e);return e.setAttribute("stroke-dasharray",t),t}function J(e){var t=e.parentNode;while(l.svg(t)){if(!l.svg(t.parentNode))break;t=t.parentNode}return t}function X(e,t){var n=t||{},r=n.el||J(e),i=r.getBoundingClientRect(),o=P(r,"viewBox"),s=i.width,a=i.height,c=n.viewBox||(o?o.split(" "):[0,0,s,a]);return{el:r,viewBox:c,x:c[0]/1,y:c[1]/1,w:s,h:a,vW:c[2],vH:c[3]}}function Y(e,t){var n=l.str(e)?v(e)[0]:e,r=t||100;return function(e){return{property:e,el:n,svg:X(n),totalLength:G(n)*(r/100)}}}function Q(e,t,n){function r(n){void 0===n&&(n=0);var r=t+n>=1?t+n:0;return e.el.getPointAtLength(r)}var i=X(e.el,e.svg),o=r(),s=r(-1),a=r(1),c=n?1:i.w/i.vW,u=n?1:i.h/i.vH;switch(e.property){case"x":return(o.x-i.x)*c;case"y":return(o.y-i.y)*u;case"angle":return 180*Math.atan2(a.y-s.y,a.x-s.x)/Math.PI}}function Z(e,t){var n=/[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g,r=V(l.pth(e)?e.totalLength:e,t)+"";return{original:r,numbers:r.match(n)?r.match(n).map(Number):[0],strings:l.str(e)||t?r.split(n):[]}}function ee(e){var t=e?y(l.arr(e)?e.map(_):_(e)):[];return b(t,(function(e,t,n){return n.indexOf(e)===t}))}function te(e){var t=ee(e);return t.map((function(e,n){return{target:e,id:n,total:t.length,transforms:{list:D(e)}}}))}function ne(e,t){var n=O(t);if(/^spring/.test(n.easing)&&(n.duration=h(n.easing)),l.arr(e)){var r=e.length,i=2===r&&!l.obj(e[0]);i?e={value:e}:l.fnc(t.duration)||(n.duration=t.duration/r)}var o=l.arr(e)?e:[e];return o.map((function(e,n){var r=l.obj(e)&&!l.pth(e)?e:{value:e};return l.und(r.delay)&&(r.delay=n?0:t.delay),l.und(r.endDelay)&&(r.endDelay=n===o.length-1?t.endDelay:0),r})).map((function(e){return T(e,n)}))}function re(e){for(var t=b(y(e.map((function(e){return Object.keys(e)}))),(function(e){return l.key(e)})).reduce((function(e,t){return e.indexOf(t)<0&&e.push(t),e}),[]),n={},r=function(r){var i=t[r];n[i]=e.map((function(e){var t={};for(var n in e)l.key(n)?n==i&&(t.value=e[n]):t[n]=e[n];return t}))},i=0;i<t.length;i++)r(i);return n}function ie(e,t){var n=[],r=t.keyframes;for(var i in r&&(t=T(re(r),t)),t)l.key(i)&&n.push({name:i,tweens:ne(t[i],e)});return n}function oe(e,t){var n={};for(var r in e){var i=C(e[r],t);l.arr(i)&&(i=i.map((function(e){return C(e,t)})),1===i.length&&(i=i[0])),n[r]=i}return n.duration=parseFloat(n.duration),n.delay=parseFloat(n.delay),n}function se(e,t){var n;return e.tweens.map((function(r){var i=oe(r,t),o=i.value,s=l.arr(o)?o[1]:o,a=x(s),c=F(t.target,e.name,a,t),u=n?n.to.original:c,d=l.arr(o)?o[0]:u,h=x(d)||x(c),f=a||h;return l.und(s)&&(s=u),i.from=Z(d,f),i.to=Z(U(s,d),f),i.start=n?n.end:0,i.end=i.start+i.delay+i.duration+i.endDelay,i.easing=g(i.easing,i.duration),i.isPath=l.pth(o),i.isPathTargetInsideSVG=i.isPath&&l.svg(t.target),i.isColor=l.col(i.from.original),i.isColor&&(i.round=1),n=i,i}))}var ae={css:function(e,t,n){return e.style[t]=n},attribute:function(e,t,n){return e.setAttribute(t,n)},object:function(e,t,n){return e[t]=n},transform:function(e,t,n,r,i){if(r.list.set(t,n),t===r.last||i){var o="";r.list.forEach((function(e,t){o+=t+"("+e+") "})),e.style.transform=o}}};function ce(e,t){var n=te(e);n.forEach((function(e){for(var n in t){var r=C(t[n],e),i=e.target,o=x(r),s=F(i,n,o,e),a=o||x(s),c=U(V(r,a),s),u=R(i,n);ae[u](i,n,c,e.transforms,!0)}}))}function ue(e,t){var n=R(e.target,t.name);if(n){var r=se(t,e),i=r[r.length-1];return{type:n,property:t.name,animatable:e,tweens:r,duration:i.end,delay:r[0].delay,endDelay:i.endDelay}}}function le(e,t){return b(y(e.map((function(e){return t.map((function(t){return ue(e,t)}))}))),(function(e){return!l.und(e)}))}function de(e,t){var n=e.length,r=function(e){return e.timelineOffset?e.timelineOffset:0},i={};return i.duration=n?Math.max.apply(Math,e.map((function(e){return r(e)+e.duration}))):t.duration,i.delay=n?Math.min.apply(Math,e.map((function(e){return r(e)+e.delay}))):t.delay,i.endDelay=n?i.duration-Math.max.apply(Math,e.map((function(e){return r(e)+e.duration-e.endDelay}))):t.endDelay,i}var he=0;function fe(e){var t=E(r,e),n=E(i,e),o=ie(n,e),s=te(e.targets),a=le(s,o),c=de(a,n),u=he;return he++,T(t,{id:u,children:[],animatables:s,animations:a,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var pe=[],me=function(){var e;function t(){e||ge()&&ve.suspendWhenDocumentHidden||!(pe.length>0)||(e=requestAnimationFrame(n))}function n(t){var r=pe.length,i=0;while(i<r){var o=pe[i];o.paused?(pe.splice(i,1),r--):(o.tick(t),i++)}e=i>0?requestAnimationFrame(n):void 0}function r(){ve.suspendWhenDocumentHidden&&(ge()?e=cancelAnimationFrame(e):(pe.forEach((function(e){return e._onDocumentVisibility()})),me()))}return"undefined"!==typeof document&&document.addEventListener("visibilitychange",r),t}();function ge(){return!!document&&document.hidden}function ve(e){void 0===e&&(e={});var t,n=0,r=0,i=0,o=0,s=null;function c(e){var t=window.Promise&&new Promise((function(e){return s=e}));return e.finished=t,t}var u=fe(e);c(u);function l(){var e=u.direction;"alternate"!==e&&(u.direction="normal"!==e?"normal":"reverse"),u.reversed=!u.reversed,t.forEach((function(e){return e.reversed=u.reversed}))}function d(e){return u.reversed?u.duration-e:e}function h(){n=0,r=d(u.currentTime)*(1/ve.speed)}function f(e,t){t&&t.seek(e-t.timelineOffset)}function p(e){if(u.reversePlayback)for(var n=o;n--;)f(e,t[n]);else for(var r=0;r<o;r++)f(e,t[r])}function m(e){var t=0,n=u.animations,r=n.length;while(t<r){var i=n[t],o=i.animatable,s=i.tweens,c=s.length-1,l=s[c];c&&(l=b(s,(function(t){return e<t.end}))[0]||l);for(var d=a(e-l.start-l.delay,0,l.duration)/l.duration,h=isNaN(d)?1:l.easing(d),f=l.to.strings,p=l.round,m=[],g=l.to.numbers.length,v=void 0,y=0;y<g;y++){var _=void 0,w=l.to.numbers[y],O=l.from.numbers[y]||0;_=l.isPath?Q(l.value,h*w,l.isPathTargetInsideSVG):O+h*(w-O),p&&(l.isColor&&y>2||(_=Math.round(_*p)/p)),m.push(_)}var E=f.length;if(E){v=f[0];for(var T=0;T<E;T++){f[T];var I=f[T+1],k=m[T];isNaN(k)||(v+=I?k+I:k+" ")}}else v=m[0];ae[i.type](o.target,i.property,v,o.transforms),i.currentValue=v,t++}}function g(e){u[e]&&!u.passThrough&&u[e](u)}function v(){u.remaining&&!0!==u.remaining&&u.remaining--}function y(e){var o=u.duration,h=u.delay,f=o-u.endDelay,b=d(e);u.progress=a(b/o*100,0,100),u.reversePlayback=b<u.currentTime,t&&p(b),!u.began&&u.currentTime>0&&(u.began=!0,g("begin")),!u.loopBegan&&u.currentTime>0&&(u.loopBegan=!0,g("loopBegin")),b<=h&&0!==u.currentTime&&m(0),(b>=f&&u.currentTime!==o||!o)&&m(o),b>h&&b<f?(u.changeBegan||(u.changeBegan=!0,u.changeCompleted=!1,g("changeBegin")),g("change"),m(b)):u.changeBegan&&(u.changeCompleted=!0,u.changeBegan=!1,g("changeComplete")),u.currentTime=a(b,0,o),u.began&&g("update"),e>=o&&(r=0,v(),u.remaining?(n=i,g("loopComplete"),u.loopBegan=!1,"alternate"===u.direction&&l()):(u.paused=!0,u.completed||(u.completed=!0,g("loopComplete"),g("complete"),!u.passThrough&&"Promise"in window&&(s(),c(u)))))}return u.reset=function(){var e=u.direction;u.passThrough=!1,u.currentTime=0,u.progress=0,u.paused=!0,u.began=!1,u.loopBegan=!1,u.changeBegan=!1,u.completed=!1,u.changeCompleted=!1,u.reversePlayback=!1,u.reversed="reverse"===e,u.remaining=u.loop,t=u.children,o=t.length;for(var n=o;n--;)u.children[n].reset();(u.reversed&&!0!==u.loop||"alternate"===e&&1===u.loop)&&u.remaining++,m(u.reversed?u.duration:0)},u._onDocumentVisibility=h,u.set=function(e,t){return ce(e,t),u},u.tick=function(e){i=e,n||(n=i),y((i+(r-n))*ve.speed)},u.seek=function(e){y(d(e))},u.pause=function(){u.paused=!0,h()},u.play=function(){u.paused&&(u.completed&&u.reset(),u.paused=!1,pe.push(u),h(),me())},u.reverse=function(){l(),u.completed=!u.reversed,h()},u.restart=function(){u.reset(),u.play()},u.remove=function(e){var t=ee(e);ye(t,u)},u.reset(),u.autoplay&&u.play(),u}function be(e,t){for(var n=t.length;n--;)w(e,t[n].animatable.target)&&t.splice(n,1)}function ye(e,t){var n=t.animations,r=t.children;be(e,n);for(var i=r.length;i--;){var o=r[i],s=o.animations;be(e,s),s.length||o.children.length||r.splice(i,1)}n.length||r.length||t.pause()}function _e(e){for(var t=ee(e),n=pe.length;n--;){var r=pe[n];ye(t,r)}}function we(e,t){void 0===t&&(t={});var n=t.direction||"normal",r=t.easing?g(t.easing):null,i=t.grid,o=t.axis,s=t.from||0,a="first"===s,c="center"===s,u="last"===s,d=l.arr(e),h=d?parseFloat(e[0]):parseFloat(e),f=d?parseFloat(e[1]):0,p=x(d?e[1]:e)||0,m=t.start||0+(d?h:0),v=[],b=0;return function(e,t,l){if(a&&(s=0),c&&(s=(l-1)/2),u&&(s=l-1),!v.length){for(var g=0;g<l;g++){if(i){var y=c?(i[0]-1)/2:s%i[0],_=c?(i[1]-1)/2:Math.floor(s/i[0]),w=g%i[0],O=Math.floor(g/i[0]),E=y-w,T=_-O,I=Math.sqrt(E*E+T*T);"x"===o&&(I=-E),"y"===o&&(I=-T),v.push(I)}else v.push(Math.abs(s-g));b=Math.max.apply(Math,v)}r&&(v=v.map((function(e){return r(e/b)*b}))),"reverse"===n&&(v=v.map((function(e){return o?e<0?-1*e:-e:Math.abs(b-e)})))}var k=d?(f-h)/b:h;return m+k*(Math.round(100*v[t])/100)+p}}function Oe(e){void 0===e&&(e={});var t=ve(e);return t.duration=0,t.add=function(n,r){var o=pe.indexOf(t),s=t.children;function a(e){e.passThrough=!0}o>-1&&pe.splice(o,1);for(var c=0;c<s.length;c++)a(s[c]);var u=T(n,E(i,e));u.targets=u.targets||e.targets;var d=t.duration;u.autoplay=!1,u.direction=t.direction,u.timelineOffset=l.und(r)?d:U(r,d),a(t),t.seek(u.timelineOffset);var h=ve(u);a(h),s.push(h);var f=de(s,e);return t.delay=f.delay,t.endDelay=f.endDelay,t.duration=f.duration,t.seek(0),t.reset(),t.autoplay&&t.play(),t},t}ve.version="3.2.1",ve.speed=1,ve.suspendWhenDocumentHidden=!0,ve.running=pe,ve.remove=_e,ve.get=F,ve.set=ce,ve.convertPx=N,ve.path=Y,ve.setDashoffset=K,ve.stagger=we,ve.timeline=Oe,ve.easing=g,ve.penner=m,ve.random=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},t["a"]=ve},"14c3":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("825a"),s=n("1626"),a=n("c6b6"),c=n("9263"),u=r.TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var r=i(n,e,t);return null!==r&&o(r),r}if("RegExp"===a(e))return i(c,e,t);throw u("RegExp#exec called on incompatible receiver")}},1626:function(e,t){e.exports=function(e){return"function"==typeof e}},"19aa":function(e,t,n){var r=n("da84"),i=n("3a9b"),o=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw o("Incorrect invocation")}},"1a2d":function(e,t,n){var r=n("e330"),i=n("7b0b"),o=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return o(i(e),t)}},"1be4":function(e,t,n){var r=n("d066");e.exports=r("document","documentElement")},"1c7e":function(e,t,n){var r=n("b622"),i=r("iterator"),o=!1;try{var s=0,a={next:function(){return{done:!!s++}},return:function(){o=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(c){}e.exports=function(e,t){if(!t&&!o)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(c){}return n}},"1cdc":function(e,t,n){var r=n("342f");e.exports=/(?:ipad|iphone|ipod).*applewebkit/i.test(r)},"1d80":function(e,t,n){var r=n("da84"),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},"1da1":function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));n("d3b7");function r(e,t,n,r,i,o,s){try{var a=e[o](s),c=a.value}catch(u){return void n(u)}a.done?t(c):Promise.resolve(c).then(r,i)}function i(e){return function(){var t=this,n=arguments;return new Promise((function(i,o){var s=e.apply(t,n);function a(e){r(s,i,o,a,c,"next",e)}function c(e){r(s,i,o,a,c,"throw",e)}a(void 0)}))}}},"1fd5":function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b})),n.d(t,"c",(function(){return v})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return l})),n.d(t,"f",(function(){return S})),n.d(t,"g",(function(){return O})),n.d(t,"h",(function(){return k})),n.d(t,"i",(function(){return C})),n.d(t,"j",(function(){return d})),n.d(t,"k",(function(){return f})),n.d(t,"l",(function(){return w})),n.d(t,"m",(function(){return m})),n.d(t,"n",(function(){return h})),n.d(t,"o",(function(){return p})),n.d(t,"p",(function(){return T})),n.d(t,"q",(function(){return I}));
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&o)}else if(i>239&&i<365){const o=e[n++],s=e[n++],a=e[n++],c=((7&i)<<18|(63&o)<<12|(63&s)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(1023&c))}else{const o=e[n++],s=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&o)<<6|63&s)}}return t.join("")},o={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],o=i+1<e.length,s=o?e[i+1]:0,a=i+2<e.length,c=a?e[i+2]:0,u=t>>2,l=(3&t)<<4|s>>4;let d=(15&s)<<2|c>>6,h=63&c;a||(h=64,o||(d=64)),r.push(n[u],n[l],n[d],n[h])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],o=i<e.length,s=o?n[e.charAt(i)]:0;++i;const a=i<e.length,c=a?n[e.charAt(i)]:64;++i;const u=i<e.length,l=u?n[e.charAt(i)]:64;if(++i,null==t||null==s||null==c||null==l)throw Error();const d=t<<2|s>>4;if(r.push(d),64!==c){const e=s<<4&240|c>>2;if(r.push(e),64!==l){const e=c<<6&192|l;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},s=function(e){const t=r(e);return o.encodeByteArray(t,!0)},a=function(e){return s(e).replace(/\./g,"")},c=function(e){try{return o.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
class u{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch(()=>{}),1===e.length?e(t):e(t,n))}}}
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
 */function l(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=t||"demo-project",i=e.iat||0,o=e.sub||e.user_id;if(!o)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const s=Object.assign({iss:"https://securetoken.google.com/"+r,aud:r,iat:i,exp:i+3600,auth_time:i,sub:o,user_id:o,firebase:{sign_in_provider:"custom",identities:{}}},e),c="";return[a(JSON.stringify(n)),a(JSON.stringify(s)),c].join(".")}
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
 */function d(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(d())}function f(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function p(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function m(){const e=d();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}
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
const g="FirebaseError";class v extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=g,Object.setPrototypeOf(this,v.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],o=i?y(i,n):"Error",s=`${this.serviceName}: ${o} (${r}).`,a=new v(r,s,n);return a}}function y(e,t){return e.replace(_,(e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`})}const _=/\{\$([^}]+)}/g;
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
 */function w(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function O(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],o=t[i];if(E(n)&&E(o)){if(!O(n,o))return!1}else if(n!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function E(e){return null!==e&&"object"===typeof e}
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
 */function T(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function I(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach(e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}}),t}function k(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function S(e,t){const n=new A(e,t);return n.subscribe.bind(n)}class A{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(e=>{this.error(e)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=x(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=j),void 0===r.error&&(r.error=j),void 0===r.complete&&(r.complete=j);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}}),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}})}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function x(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function j(){}
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
function C(e){return e&&e._delegate?e._delegate:e}}).call(this,n("c8ba"))},2266:function(e,t,n){var r=n("da84"),i=n("0366"),o=n("c65b"),s=n("825a"),a=n("0d51"),c=n("e95a"),u=n("07fa"),l=n("3a9b"),d=n("9a1f"),h=n("35a1"),f=n("2a62"),p=r.TypeError,m=function(e,t){this.stopped=e,this.result=t},g=m.prototype;e.exports=function(e,t,n){var r,v,b,y,_,w,O,E=n&&n.that,T=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_ITERATOR),k=!(!n||!n.INTERRUPTED),S=i(t,E),A=function(e){return r&&f(r,"normal",e),new m(!0,e)},x=function(e){return T?(s(e),k?S(e[0],e[1],A):S(e[0],e[1])):k?S(e,A):S(e)};if(I)r=e;else{if(v=h(e),!v)throw p(a(e)+" is not iterable");if(c(v)){for(b=0,y=u(e);y>b;b++)if(_=x(e[b]),_&&l(g,_))return _;return new m(!1)}r=d(e,v)}w=r.next;while(!(O=o(w,r)).done){try{_=x(O.value)}catch(j){f(r,"throw",j)}if("object"==typeof _&&_&&l(g,_))return _}return new m(!1)}},"22e5":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u}));var r=n("1fd5");class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class s{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r["a"];if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:o})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=o){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(e=>"INTERNAL"in e).map(e=>e.INTERNAL.delete()),...e.filter(e=>"_delete"in e).map(e=>e._delete())])}isComponentSet(){return null!=this.component}isInitialized(e=o){return this.instances.has(e)}getOptions(e=o){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,o]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&o.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&e(o,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=o){return this.component?this.component.multipleInstances?e:o:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===o?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
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
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new s(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},"23cb":function(e,t,n){var r=n("5926"),i=Math.max,o=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):o(n,t)}},"23e7":function(e,t,n){var r=n("da84"),i=n("06cf").f,o=n("9112"),s=n("6eeb"),a=n("ce4e"),c=n("e893"),u=n("94ca");e.exports=function(e,t){var n,l,d,h,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?r:v?r[m]||a(m,{}):(r[m]||{}).prototype,l)for(d in t){if(f=t[d],e.noTargetGet?(p=i(l,d),h=p&&p.value):h=l[d],n=u(g?d:m+(v?".":"#")+d,e.forced),!n&&void 0!==h){if(typeof f==typeof h)continue;c(f,h)}(e.sham||h&&h.sham)&&o(f,"sham",!0),s(l,d,f,e)}}},"241c":function(e,t,n){var r=n("ca84"),i=n("7839"),o=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},"260b":function(e,t,n){"use strict";var r=n("589b");n.d(t,"a",(function(){return r["f"]}));var i="firebase",o="9.6.2";
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
Object(r["g"])(i,o,"app")},2626:function(e,t,n){"use strict";var r=n("d066"),i=n("9bf2"),o=n("b622"),s=n("83ab"),a=o("species");e.exports=function(e){var t=r(e),n=i.f;s&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},"2a62":function(e,t,n){var r=n("c65b"),i=n("825a"),o=n("dc4a");e.exports=function(e,t,n){var s,a;i(e);try{if(s=o(e,"return"),!s){if("throw"===t)throw n;return n}s=r(s,e)}catch(c){a=!0,s=c}if("throw"===t)throw n;if(a)throw s;return i(s),n}},"2ba4":function(e,t){var n=Function.prototype,r=n.apply,i=n.bind,o=n.call;e.exports="object"==typeof Reflect&&Reflect.apply||(i?o.bind(r):function(){return o.apply(r,arguments)})},"2cf4":function(e,t,n){var r,i,o,s,a=n("da84"),c=n("2ba4"),u=n("0366"),l=n("1626"),d=n("1a2d"),h=n("d039"),f=n("1be4"),p=n("f36a"),m=n("cc12"),g=n("1cdc"),v=n("605d"),b=a.setImmediate,y=a.clearImmediate,_=a.process,w=a.Dispatch,O=a.Function,E=a.MessageChannel,T=a.String,I=0,k={},S="onreadystatechange";try{r=a.location}catch(P){}var A=function(e){if(d(k,e)){var t=k[e];delete k[e],t()}},x=function(e){return function(){A(e)}},j=function(e){A(e.data)},C=function(e){a.postMessage(T(e),r.protocol+"//"+r.host)};b&&y||(b=function(e){var t=p(arguments,1);return k[++I]=function(){c(l(e)?e:O(e),void 0,t)},i(I),I},y=function(e){delete k[e]},v?i=function(e){_.nextTick(x(e))}:w&&w.now?i=function(e){w.now(x(e))}:E&&!g?(o=new E,s=o.port2,o.port1.onmessage=j,i=u(s.postMessage,s)):a.addEventListener&&l(a.postMessage)&&!a.importScripts&&r&&"file:"!==r.protocol&&!h(C)?(i=C,a.addEventListener("message",j,!1)):i=S in m("script")?function(e){f.appendChild(m("script"))[S]=function(){f.removeChild(this),A(e)}}:function(e){setTimeout(x(e),0)}),e.exports={set:b,clear:y}},"2d00":function(e,t,n){var r,i,o=n("da84"),s=n("342f"),a=o.process,c=o.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(r=l.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&s&&(r=s.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=s.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},"342f":function(e,t,n){var r=n("d066");e.exports=r("navigator","userAgent")||""},"35a1":function(e,t,n){var r=n("f5df"),i=n("dc4a"),o=n("3f8c"),s=n("b622"),a=s("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||o[r(e)]}},"37e8":function(e,t,n){var r=n("83ab"),i=n("aed9"),o=n("9bf2"),s=n("825a"),a=n("fc6a"),c=n("df75");t.f=r&&!i?Object.defineProperties:function(e,t){s(e);var n,r=a(t),i=c(t),u=i.length,l=0;while(u>l)o.f(e,n=i[l++],r[n]);return e}},"3a9b":function(e,t,n){var r=n("e330");e.exports=r({}.isPrototypeOf)},"3bbe":function(e,t,n){var r=n("da84"),i=n("1626"),o=r.String,s=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw s("Can't set "+o(e)+" as a prototype")}},"3ca3":function(e,t,n){"use strict";var r=n("6547").charAt,i=n("577e"),o=n("69f3"),s=n("7dd0"),a="String Iterator",c=o.set,u=o.getterFor(a);s(String,"String",(function(e){c(this,{type:a,string:i(e),index:0})}),(function(){var e,t=u(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},"3f8c":function(e,t){e.exports={}},"44ad":function(e,t,n){var r=n("da84"),i=n("e330"),o=n("d039"),s=n("c6b6"),a=r.Object,c=i("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?c(e,""):a(e)}:a},"44d2":function(e,t,n){var r=n("b622"),i=n("7c73"),o=n("9bf2"),s=r("unscopables"),a=Array.prototype;void 0==a[s]&&o.f(a,s,{configurable:!0,value:i(null)}),e.exports=function(e){a[s][e]=!0}},"44de":function(e,t,n){var r=n("da84");e.exports=function(e,t){var n=r.console;n&&n.error&&(1==arguments.length?n.error(e):n.error(e,t))}},4840:function(e,t,n){var r=n("825a"),i=n("5087"),o=n("b622"),s=o("species");e.exports=function(e,t){var n,o=r(e).constructor;return void 0===o||void 0==(n=r(o)[s])?t:i(n)}},"485a":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("1626"),s=n("861d"),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&o(n=e.toString)&&!s(r=i(n,e)))return r;if(o(n=e.valueOf)&&!s(r=i(n,e)))return r;if("string"!==t&&o(n=e.toString)&&!s(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},4930:function(e,t,n){var r=n("2d00"),i=n("d039");e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},"4d64":function(e,t,n){var r=n("fc6a"),i=n("23cb"),o=n("07fa"),s=function(e){return function(t,n,s){var a,c=r(t),u=o(c),l=i(s,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:s(!0),indexOf:s(!1)}},5087:function(e,t,n){var r=n("da84"),i=n("68ee"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a constructor")}},"50c4":function(e,t,n){var r=n("5926"),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},5319:function(e,t,n){"use strict";var r=n("2ba4"),i=n("c65b"),o=n("e330"),s=n("d784"),a=n("d039"),c=n("825a"),u=n("1626"),l=n("5926"),d=n("50c4"),h=n("577e"),f=n("1d80"),p=n("8aa5"),m=n("dc4a"),g=n("0cb2"),v=n("14c3"),b=n("b622"),y=b("replace"),_=Math.max,w=Math.min,O=o([].concat),E=o([].push),T=o("".indexOf),I=o("".slice),k=function(e){return void 0===e?e:String(e)},S=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[y]&&""===/./[y]("a","$0")}(),x=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));s("replace",(function(e,t,n){var o=A?"$":"$0";return[function(e,n){var r=f(this),o=void 0==e?void 0:m(e,y);return o?i(o,e,r,n):i(t,h(r),e,n)},function(e,i){var s=c(this),a=h(e);if("string"==typeof i&&-1===T(i,o)&&-1===T(i,"$<")){var f=n(t,s,a,i);if(f.done)return f.value}var m=u(i);m||(i=h(i));var b=s.global;if(b){var y=s.unicode;s.lastIndex=0}var S=[];while(1){var A=v(s,a);if(null===A)break;if(E(S,A),!b)break;var x=h(A[0]);""===x&&(s.lastIndex=p(a,d(s.lastIndex),y))}for(var j="",C=0,P=0;P<S.length;P++){A=S[P];for(var N=h(A[0]),L=_(w(l(A.index),a.length),0),R=[],D=1;D<A.length;D++)E(R,k(A[D]));var M=A.groups;if(m){var F=O([N],R,L,a);void 0!==M&&E(F,M);var U=h(r(i,void 0,F))}else U=g(N,a,L,R,M,i);L>=C&&(j+=I(a,C,L)+U,C=L+N.length)}return j+I(a,C)}]}),!x||!S||A)},5692:function(e,t,n){var r=n("c430"),i=n("c6cd");(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.2",mode:r?"pure":"global",copyright:"© 2022 Denis Pushkarev (zloirock.ru)"})},"56ef":function(e,t,n){var r=n("d066"),i=n("e330"),o=n("241c"),s=n("7418"),a=n("825a"),c=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=o.f(a(e)),n=s.f;return n?c(t,n(e)):t}},"577e":function(e,t,n){var r=n("da84"),i=n("f5df"),o=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return o(e)}},"589b":function(e,t,n){"use strict";n.d(t,"a",(function(){return G})),n.d(t,"b",(function(){return B})),n.d(t,"c",(function(){return $})),n.d(t,"d",(function(){return H})),n.d(t,"e",(function(){return J})),n.d(t,"f",(function(){return K})),n.d(t,"g",(function(){return X}));var r=n("22e5"),i=n("e691"),o=n("1fd5");
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
class s{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map(e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null}).filter(e=>e).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.12",l=new i["b"]("@firebase/app"),d="@firebase/app-compat",h="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",m="@firebase/app-check",g="@firebase/auth",v="@firebase/auth-compat",b="@firebase/database",y="@firebase/database-compat",_="@firebase/functions",w="@firebase/functions-compat",O="@firebase/installations",E="@firebase/installations-compat",T="@firebase/messaging",I="@firebase/messaging-compat",k="@firebase/performance",S="@firebase/performance-compat",A="@firebase/remote-config",x="@firebase/remote-config-compat",j="@firebase/storage",C="@firebase/storage-compat",P="@firebase/firestore",N="@firebase/firestore-compat",L="firebase",R="9.6.2",D="[DEFAULT]",M={[c]:"fire-core",[d]:"fire-core-compat",[f]:"fire-analytics",[h]:"fire-analytics-compat",[m]:"fire-app-check",[p]:"fire-app-check-compat",[g]:"fire-auth",[v]:"fire-auth-compat",[b]:"fire-rtdb",[y]:"fire-rtdb-compat",[_]:"fire-fn",[w]:"fire-fn-compat",[O]:"fire-iid",[E]:"fire-iid-compat",[T]:"fire-fcm",[I]:"fire-fcm-compat",[k]:"fire-perf",[S]:"fire-perf-compat",[A]:"fire-rc",[x]:"fire-rc-compat",[j]:"fire-gcs",[C]:"fire-gcs-compat",[P]:"fire-fst",[N]:"fire-fst-compat","fire-js":"fire-js",[L]:"fire-js-all"},F=new Map,U=new Map;function V(e,t){try{e.container.addComponent(t)}catch(n){l.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function $(e){const t=e.name;if(U.has(t))return l.debug(`There were multiple attempts to register component ${t}.`),!1;U.set(t,e);for(const n of F.values())V(n,e);return!0}function B(e,t){return e.container.getProvider(t)}function H(e,t,n=D){B(e,t).clearInstance(n)}
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
const q={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},z=new o["b"]("app","Firebase",q);
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
class W{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r["a"]("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
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
 */const G=R;function K(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:D,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const s=F.get(i);if(s){if(Object(o["g"])(e,s.options)&&Object(o["g"])(n,s.config))return s;throw z.create("duplicate-app",{appName:i})}const a=new r["b"](i);for(const r of U.values())a.addComponent(r);const c=new W(e,n,a);return F.set(i,c),c}function J(e=D){const t=F.get(e);if(!t)throw z.create("no-app",{appName:e});return t}function X(e,t,n){var i;let o=null!==(i=M[e])&&void 0!==i?i:e;n&&(o+="-"+n);const s=o.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const e=[`Unable to register library "${o}" with version "${t}":`];return s&&e.push(`library name "${o}" contains illegal characters (whitespace or "/")`),s&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void l.warn(e.join(" "))}$(new r["a"](o+"-version",()=>({library:o,version:t}),"VERSION"))}
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
function Y(e){$(new r["a"]("platform-logger",e=>new s(e),"PRIVATE")),X(c,u,e),X(c,u,"esm2017"),X("fire-js","")}Y("")},5926:function(e,t){var n=Math.ceil,r=Math.floor;e.exports=function(e){var t=+e;return t!==t||0===t?0:(t>0?r:n)(t)}},"59ed":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("0d51"),s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not a function")}},"5c6c":function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},"5e77":function(e,t,n){var r=n("83ab"),i=n("1a2d"),o=Function.prototype,s=r&&Object.getOwnPropertyDescriptor,a=i(o,"name"),c=a&&"something"===function(){}.name,u=a&&(!r||r&&s(o,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},"605d":function(e,t,n){var r=n("c6b6"),i=n("da84");e.exports="process"==r(i.process)},6069:function(e,t){e.exports="object"==typeof window},"60da":function(e,t,n){"use strict";var r=n("83ab"),i=n("e330"),o=n("c65b"),s=n("d039"),a=n("df75"),c=n("7418"),u=n("d1e7"),l=n("7b0b"),d=n("44ad"),h=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!h||s((function(){if(r&&1!==h({b:1},h(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=h({},e)[n]||a(h({},t)).join("")!=i}))?function(e,t){var n=l(e),i=arguments.length,s=1,h=c.f,f=u.f;while(i>s){var m,g=d(arguments[s++]),v=h?p(a(g),h(g)):a(g),b=v.length,y=0;while(b>y)m=v[y++],r&&!o(f,g,m)||(n[m]=g[m])}return n}:h},6547:function(e,t,n){var r=n("e330"),i=n("5926"),o=n("577e"),s=n("1d80"),a=r("".charAt),c=r("".charCodeAt),u=r("".slice),l=function(e){return function(t,n){var r,l,d=o(s(t)),h=i(n),f=d.length;return h<0||h>=f?e?"":void 0:(r=c(d,h),r<55296||r>56319||h+1===f||(l=c(d,h+1))<56320||l>57343?e?a(d,h):r:e?u(d,h,h+2):l-56320+(r-55296<<10)+65536)}};e.exports={codeAt:l(!1),charAt:l(!0)}},"68ee":function(e,t,n){var r=n("e330"),i=n("d039"),o=n("1626"),s=n("f5df"),a=n("d066"),c=n("8925"),u=function(){},l=[],d=a("Reflect","construct"),h=/^\s*(?:class|function)\b/,f=r(h.exec),p=!h.exec(u),m=function(e){if(!o(e))return!1;try{return d(u,l,e),!0}catch(t){return!1}},g=function(e){if(!o(e))return!1;switch(s(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(h,c(e))}catch(t){return!0}};g.sham=!0,e.exports=!d||i((function(){var e;return m(m.call)||!m(Object)||!m((function(){e=!0}))||e}))?g:m},"69f3":function(e,t,n){var r,i,o,s=n("7f9a"),a=n("da84"),c=n("e330"),u=n("861d"),l=n("9112"),d=n("1a2d"),h=n("c6cd"),f=n("f772"),p=n("d012"),m="Object already initialized",g=a.TypeError,v=a.WeakMap,b=function(e){return o(e)?i(e):r(e,{})},y=function(e){return function(t){var n;if(!u(t)||(n=i(t)).type!==e)throw g("Incompatible receiver, "+e+" required");return n}};if(s||h.state){var _=h.state||(h.state=new v),w=c(_.get),O=c(_.has),E=c(_.set);r=function(e,t){if(O(_,e))throw new g(m);return t.facade=e,E(_,e,t),t},i=function(e){return w(_,e)||{}},o=function(e){return O(_,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(d(e,T))throw new g(m);return t.facade=e,l(e,T,t),t},i=function(e){return d(e,T)?e[T]:{}},o=function(e){return d(e,T)}}e.exports={set:r,get:i,has:o,enforce:b,getterFor:y}},"6a7c":function(e,t,n){"use strict";n.d(t,"a",(function(){return at})),n.d(t,"b",(function(){return cr})),n.d(t,"c",(function(){return ut})),n.d(t,"d",(function(){return ct})),n.d(t,"e",(function(){return lt}));var r=n("1fd5"),i=n("589b");function o(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var s=n("e691"),a=n("22e5");function c(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const u=c,l=new r["b"]("auth","Firebase",c()),d=new s["b"]("@firebase/auth");function h(e,...t){d.logLevel<=s["a"].ERROR&&d.error(`Auth (${i["a"]}): ${e}`,...t)}
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
 */function f(e,...t){throw g(e,...t)}function p(e,...t){return g(e,...t)}function m(e,t,n){const i=Object.assign(Object.assign({},u()),{[t]:n}),o=new r["b"]("auth","Firebase",i);return o.create(t,{appName:e.name})}function g(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return l.create(e,...t)}function v(e,t,...n){if(!e)throw g(t,...n)}function b(e){const t="INTERNAL ASSERTION FAILED: "+e;throw h(t),new Error(t)}function y(e,t){e||b(t)}
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
 */const _=new Map;function w(e){y(e instanceof Function,"Expected a class definition");let t=_.get(e);return t?(y(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_.set(e,t),t)}
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
 */function O(e,t){const n=Object(i["b"])(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if(Object(r["g"])(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const o=n.initialize({options:t});return o}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(w);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===k()||"https:"===k()}function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function S(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||Object(r["k"])()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,y(t>e,"Short delay should be less than long delay!"),this.isMobile=Object(r["n"])()||Object(r["o"])()}get(){return S()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */function j(e,t){y(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
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
 */class C{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void b("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void b("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void b("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
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
 */const P={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},N=new x(3e4,6e4);
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
 */function L(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function R(e,t,n,i,o={}){return D(e,o,async()=>{let o={},s={};i&&("GET"===t?s=i:o={body:JSON.stringify(i)});const a=Object(r["p"])(Object.assign({key:e.config.apiKey},s)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),C.fetch()(F(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},o))})}async function D(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},P),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw V(e,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const t=r.ok?o.errorMessage:o.error.message,[n,s]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",o);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",o);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(s)throw m(e,a,s);f(e,a)}}catch(o){if(o instanceof r["c"])throw o;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const o=await R(e,t,n,r,i);return"mfaPendingCredential"in o&&f(e,"multi-factor-auth-required",{_serverResponse:o}),o}function F(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?j(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((e,t)=>{this.timer=setTimeout(()=>t(p(this.auth,"timeout")),N.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function $(e,t){return R(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return R(e,"POST","/v1/accounts:lookup",t)}
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
 */function H(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
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
 */async function q(e,t=!1){const n=Object(r["i"])(e),i=await n.getIdToken(t),o=W(i);v(o&&o.exp&&o.auth_time&&o.iat,n.auth,"internal-error");const s="object"===typeof o.firebase?o.firebase:void 0,a=null===s||void 0===s?void 0:s["sign_in_provider"];return{claims:o,token:i,authTime:H(z(o.auth_time)),issuedAtTime:H(z(o.iat)),expirationTime:H(z(o.exp)),signInProvider:a||null,signInSecondFactor:(null===s||void 0===s?void 0:s["sign_in_second_factor"])||null}}function z(e){return 1e3*Number(e)}function W(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return h("JWT malformed, contained fewer than 3 sections"),null;try{const e=Object(r["d"])(n);return e?JSON.parse(e):(h("Failed to decode base64 JWT payload"),null)}catch(o){return h("Caught error parsing JWT payload as JSON",o),null}}function G(e){const t=W(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function K(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r["c"]&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class Y{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=H(this.lastLoginAt),this.creationTime=H(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Q(e){var t;const n=e.auth,r=await e.getIdToken(),i=await K(e,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const o=i.users[0];e._notifyReloadListener(o);const s=(null===(t=o.providerUserInfo)||void 0===t?void 0:t.length)?te(o.providerUserInfo):[],a=ee(e.providerData,s),c=e.isAnonymous,u=!(e.email&&o.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,d={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Y(o.createdAt,o.lastLoginAt),isAnonymous:l};Object.assign(e,d)}async function Z(e){const t=Object(r["i"])(e);await Q(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter(e=>!t.some(t=>t.providerId===e.providerId));return[...n,...t]}function te(e){return e.map(e=>{var{providerId:t}=e,n=o(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}})}
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
 */async function ne(e,t){const n=await D(e,{},async()=>{const n=Object(r["p"])({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:o}=e.config,s=F(e,i,"/v1/token","key="+o),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",C.fetch()(s,{method:"POST",headers:a,body:n})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
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
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):G(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,o=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),o.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),o.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return b("not implemented")}}
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
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class oe{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=o(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new Y(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await K(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return q(this,e)}reload(){return Z(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(e=>Object.assign({},e)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Q(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await K(this,$(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,o,s,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,d=null!==(r=t.email)&&void 0!==r?r:void 0,h=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(o=t.photoURL)&&void 0!==o?o:void 0,p=null!==(s=t.tenantId)&&void 0!==s?s:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,b=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:_,isAnonymous:w,providerData:O,stsTokenManager:E}=t;v(y&&E,e,"internal-error");const T=re.fromJSON(this.name,E);v("string"===typeof y,e,"internal-error"),ie(l,e.name),ie(d,e.name),v("boolean"===typeof _,e,"internal-error"),v("boolean"===typeof w,e,"internal-error"),ie(h,e.name),ie(f,e.name),ie(p,e.name),ie(m,e.name),ie(g,e.name),ie(b,e.name);const I=new oe({uid:y,auth:e,email:d,emailVerified:_,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:h,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:b});return O&&Array.isArray(O)&&(I.providerData=O.map(e=>Object.assign({},e))),m&&(I._redirectEventId=m),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new oe({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Q(i),i}}
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
 */class se{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}se.type="NONE";const ae=se;
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
 */function ce(e,t,n){return`firebase:${e}:${t}:${n}`}class ue{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=ce(this.userKey,r.apiKey,i),this.fullPersistenceKey=ce("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ue(w(ae),e,n);const r=(await Promise.all(t.map(async e=>{if(await e._isAvailable())return e}))).filter(e=>e);let i=r[0]||w(ae);const o=ce(n,e.config.apiKey,e.name);let s=null;for(const u of t)try{const t=await u._get(o);if(t){const n=oe._fromJSON(e,t);u!==i&&(s=n),i=u;break}}catch(c){}const a=r.filter(e=>e._shouldAllowMigration);return i._shouldAllowMigration&&a.length?(i=a[0],s&&await i._set(o,s.toJSON()),await Promise.all(t.map(async e=>{if(e!==i)try{await e._remove(o)}catch(c){}})),new ue(i,e,n)):new ue(i,e,n)}}
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
 */function le(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(de(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ge(t))return"Blackberry";if(ve(t))return"Webos";if(he(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(me(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function de(e=Object(r["j"])()){return/firefox\//i.test(e)}function he(e=Object(r["j"])()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=Object(r["j"])()){return/crios\//i.test(e)}function pe(e=Object(r["j"])()){return/iemobile/i.test(e)}function me(e=Object(r["j"])()){return/android/i.test(e)}function ge(e=Object(r["j"])()){return/blackberry/i.test(e)}function ve(e=Object(r["j"])()){return/webos/i.test(e)}function be(e=Object(r["j"])()){return/iphone|ipad|ipod/i.test(e)}function ye(e=Object(r["j"])()){var t;return be(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function _e(){return Object(r["m"])()&&10===document.documentMode}function we(e=Object(r["j"])()){return be(e)||me(e)||ve(e)||ge(e)||/windows phone/i.test(e)||pe(e)}function Oe(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=le(Object(r["j"])());break;case"Worker":n=`${le(Object(r["j"])())}-${e}`;break;default:n=e}const o=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i["a"]}/${o}`}
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
 */class Te{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new ke(this),this.idTokenSubscription=new ke(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=l,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=w(t)),this._initializationPromise=this.queue(async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ue.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,o=await this.tryRedirectSignIn(e);r&&r!==i||!(null===o||void 0===o?void 0:o.user)||(n=o.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Q(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?Object(r["i"])(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(w(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r["b"]("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&w(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ue.create(this,[w(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue(async()=>{}),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return v(o,this,"internal-error"),o.then(()=>i(this.currentUser)),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ie(e){return Object(r["i"])(e)}class ke{constructor(e){this.auth=e,this.observer=null,this.addObserver=Object(r["f"])(e=>this.observer=e)}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Se{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return b("not implemented")}_getIdTokenResponse(e){return b("not implemented")}_linkToIdToken(e,t){return b("not implemented")}_getReauthenticationResolver(e){return b("not implemented")}}
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
 */async function Ae(e,t){return R(e,"POST","/v1/accounts:update",t)}
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
async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",L(e,t))}
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
async function je(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}async function Ce(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",L(e,t))}
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
 */class Pe extends Se{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Pe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Pe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return je(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ce(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Ne(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",L(e,t))}
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
 */const Le="http://localhost";class Re extends Se{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Re(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=o(t,["providerId","signInMethod"]);if(!n||!r)return null;const s=new Re(n,r);return s.idToken=i.idToken||void 0,s.accessToken=i.accessToken||void 0,s.secret=i.secret,s.nonce=i.nonce,s.pendingToken=i.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Ne(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Ne(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ne(e,t)}buildRequest(){const e={requestUri:Le,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=Object(r["p"])(t)}return e}}
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
 */async function De(e,t){return R(e,"POST","/v1/accounts:sendVerificationCode",L(e,t))}async function Me(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t))}async function Fe(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ue={["USER_NOT_FOUND"]:"user-not-found"};async function Ve(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",L(e,n),Ue)}
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
 */class $e extends Se{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new $e({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new $e({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Me(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Fe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ve(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new $e({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function Be(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function He(e){const t=Object(r["q"])(Object(r["h"])(e))["link"],n=t?Object(r["q"])(Object(r["h"])(t))["deep_link_id"]:null,i=Object(r["q"])(Object(r["h"])(e))["deep_link_id"],o=i?Object(r["q"])(Object(r["h"])(i))["link"]:null;return o||i||n||t||e}class qe{constructor(e){var t,n,i,o,s,a;const c=Object(r["q"])(Object(r["h"])(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,d=Be(null!==(i=c["mode"])&&void 0!==i?i:null);v(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=null!==(o=c["continueUrl"])&&void 0!==o?o:null,this.languageCode=null!==(s=c["languageCode"])&&void 0!==s?s:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=He(e);try{return new qe(t)}catch(n){return null}}}
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
class ze{constructor(){this.providerId=ze.PROVIDER_ID}static credential(e,t){return Pe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=qe.parseLink(t);return v(n,"argument-error"),Pe._fromEmailAndCode(e,n.code,n.tenantId)}}ze.PROVIDER_ID="password",ze.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ze.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class Ge extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Ke extends Ge{constructor(){super("facebook.com")}static credential(e){return Re._fromParams({providerId:Ke.PROVIDER_ID,signInMethod:Ke.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ke.credentialFromTaggedObject(e)}static credentialFromError(e){return Ke.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ke.credential(e.oauthAccessToken)}catch(t){return null}}}Ke.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ke.PROVIDER_ID="facebook.com";
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
class Je extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Re._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
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
class Xe extends Ge{constructor(){super("github.com")}static credential(e){return Re._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Xe.credential(e.oauthAccessToken)}catch(t){return null}}}Xe.GITHUB_SIGN_IN_METHOD="github.com",Xe.PROVIDER_ID="github.com";
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
class Ye extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Re._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}
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
async function Qe(e,t){return M(e,"POST","/v1/accounts:signUp",L(e,t))}
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
 */Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await oe._fromIdTokenResponse(e,n,r),o=et(n),s=new Ze({user:i,providerId:o,_tokenResponse:n,operationType:t});return s}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class tt extends r["c"]{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch(n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n})}
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
 */async function rt(e,t,n=!1){const r=await K(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
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
async function it(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const o=await K(e,nt(r,i,t,e),n);v(o.idToken,r,"internal-error");const s=W(o.idToken);v(s,r,"internal-error");const{sub:a}=s;return v(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,o)}catch(o){throw"auth/user-not-found"===(null===o||void 0===o?void 0:o.code)&&f(r,"user-mismatch"),o}}
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
 */async function ot(e,t,n=!1){const r="signIn",i=await nt(e,r,t),o=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(o.user),o}async function st(e,t){return ot(Ie(e),t)}async function at(e,t,n){const r=Ie(e),i=await Qe(r,{returnSecureToken:!0,email:t,password:n}),o=await Ze._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(o.user),o}function ct(e,t,n){return st(Object(r["i"])(e),ze.credential(t,n))}
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
 */function ut(e,t,n,i){return Object(r["i"])(e).onAuthStateChanged(t,n,i)}function lt(e){return Object(r["i"])(e).signOut()}
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
function dt(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:start",L(e,t))}function ht(e,t){return R(e,"POST","/v2/accounts/mfaEnrollment:finalize",L(e,t))}new WeakMap;const ft="__sak";
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
 */class pt{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ft,"1"),this.storage.removeItem(ft),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function mt(){const e=Object(r["j"])();return he(e)||be(e)}const gt=1e3,vt=10;class bt extends pt{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=mt()&&Oe(),this.fallbackToPolling=we(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys((e,t,n)=>{this.notifyListeners(e,n)});const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);_e()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,vt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)})},gt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}bt.type="LOCAL";const yt=bt;
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
 */class _t extends pt{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}_t.type="SESSION";const wt=_t;
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
 */function Ot(e){return Promise.all(e.map(async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}}))}
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
 */class Et{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(t=>t.isListeningto(e));if(t)return t;const n=new Et(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,o=this.handlersMap[r];if(!(null===o||void 0===o?void 0:o.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const s=Array.from(o).map(async e=>e(t.origin,i)),a=await Ot(s);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function Tt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */Et.receivers=[];class It{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((s,a)=>{const c=Tt("",20);r.port1.start();const u=setTimeout(()=>{a(new Error("unsupported_event"))},n);o={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),i=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),s(t.data.response);break;default:clearTimeout(u),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}
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
 */function kt(){return window}function St(e){kt().location.href=e}
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
 */function At(){return"undefined"!==typeof kt()["WorkerGlobalScope"]&&"function"===typeof kt()["importScripts"]}async function xt(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function jt(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ct(){return At()?self:null}
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
 */const Pt="firebaseLocalStorageDb",Nt=1,Lt="firebaseLocalStorage",Rt="fbase_key";class Dt{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Mt(e,t){return e.transaction([Lt],t?"readwrite":"readonly").objectStore(Lt)}function Ft(){const e=indexedDB.deleteDatabase(Pt);return new Dt(e).toPromise()}function Ut(){const e=indexedDB.open(Pt,Nt);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const t=e.result;try{t.createObjectStore(Lt,{keyPath:Rt})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const n=e.result;n.objectStoreNames.contains(Lt)?t(n):(n.close(),await Ft(),t(await Ut()))})})}async function Vt(e,t,n){const r=Mt(e,!0).put({[Rt]:t,value:n});return new Dt(r).toPromise()}async function $t(e,t){const n=Mt(e,!1).get(t),r=await new Dt(n).toPromise();return void 0===r?null:r.value}function Bt(e,t){const n=Mt(e,!0).delete(t);return new Dt(n).toPromise()}const Ht=800,qt=3;class zt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await Ut()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>qt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return At()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Et._getInstance(Ct()),this.receiver._subscribe("keyChanged",async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}}),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await xt(),!this.activeServiceWorker)return;this.sender=new It(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&jt()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ut();return await Vt(e,ft,"1"),await Bt(e,ft),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Vt(n,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(t=>$t(t,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Bt(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(e=>{const t=Mt(e,!1).getAll();return new Dt(t).toPromise()});if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ht)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}zt.type="LOCAL";const Wt=zt;
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
 */function Gt(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:start",L(e,t))}function Kt(e,t){return R(e,"POST","/v2/accounts/mfaSignIn:finalize",L(e,t))}
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
function Jt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Xt(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Jt().appendChild(r)})}function Yt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Yt("rcb"),new x(3e4,6e4);
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
const Qt="recaptcha";async function Zt(e,t,n){var r;const i=await n.verify();try{let o;if(v("string"===typeof i,e,"argument-error"),v(n.type===Qt,e,"argument-error"),o="string"===typeof t?{phoneNumber:t}:t,"session"in o){const t=o.session;if("phoneNumber"in o){v("enroll"===t.type,e,"internal-error");const n=await dt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=o.multiFactorHint)||void 0===r?void 0:r.uid)||o.multiFactorUid;v(n,e,"missing-multi-factor-info");const s=await Gt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return s.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await De(e,{phoneNumber:o.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class en{constructor(e){this.providerId=en.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return Zt(this.auth,e,Object(r["i"])(t))}static credential(e,t){return $e._fromVerification(e,t)}static credentialFromResult(e){const t=e;return en.credentialFromTaggedObject(t)}static credentialFromError(e){return en.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?$e._fromTokenResponse(t,n):null}}
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
function tn(e,t){return t?w(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */en.PROVIDER_ID="phone",en.PHONE_SIGN_IN_METHOD="phone";class nn extends Se{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ne(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ne(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ne(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rn(e){return ot(e.auth,new nn(e),e.bypassAuthState)}function on(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new nn(e),e.bypassAuthState)}async function sn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new nn(e),e.bypassAuthState)}
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
 */class an{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:o,type:s}=e;if(o)return void this.reject(o);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(s)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rn;case"linkViaPopup":case"linkViaRedirect":return sn;case"reauthViaPopup":case"reauthViaRedirect":return on;default:f(this.auth,"internal-error")}}resolve(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const cn=new x(2e3,1e4);class un extends an{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,un.currentPopupAction&&un.currentPopupAction.cancel(),un.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){y(1===this.filter.length,"Popup operations only handle one event");const e=Tt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,un.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(e,cn.get())};e()}}un.currentPopupAction=null;
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
const ln="pendingRedirect",dn=new Map;class hn extends an{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=dn.get(this.auth._key());if(!e){try{const t=await fn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}dn.set(this.auth._key(),e)}return this.bypassAuthState||dn.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function fn(e,t){const n=mn(t),r=pn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function pn(e){return w(e._redirectPersistence)}function mn(e){return ce(ln,e.config.apiKey,e.name)}
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
 */async function gn(e,t,n=!1){const r=Ie(e),i=tn(r,t),o=new hn(r,i,n),s=await o.execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,t)),s}
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
const vn=6e5;class bn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!_n(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=vn&&this.cachedEventUids.clear(),this.cachedEventUids.has(yn(e))}saveEventToCache(e){this.cachedEventUids.add(yn(e)),this.lastProcessedEventTime=Date.now()}}function yn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(e=>e).join("-")}function _n({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return _n(e);default:return!1}}
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
 */async function On(e,t={}){return R(e,"GET","/v1/projects",t)}
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
 */const En=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Tn=/^https?/;async function In(e){if(e.config.emulator)return;const{authorizedDomains:t}=await On(e);for(const r of t)try{if(kn(r))return}catch(n){}f(e,"unauthorized-domain")}function kn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!Tn.test(n))return!1;if(En.test(e))return r===e;const i=e.replace(/\./g,"\\."),o=new RegExp("^(.+\\."+i+"|"+i+")$","i");return o.test(r)}
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
 */const Sn=new x(3e4,6e4);function An(){const e=kt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function xn(e){return new Promise((t,n)=>{var r,i,o;function s(){An(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{An(),n(p(e,"network-request-failed"))},timeout:Sn.get()})}if(null===(i=null===(r=kt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(o=kt().gapi)||void 0===o?void 0:o.load)){const t=Yt("iframefcb");return kt()[t]=()=>{gapi.load?s():n(p(e,"network-request-failed"))},Xt("https://apis.google.com/js/api.js?onload="+t).catch(e=>n(e))}s()}}).catch(e=>{throw jn=null,e})}let jn=null;function Cn(e){return jn=jn||xn(e),jn}
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
 */const Pn=new x(5e3,15e3),Nn="__/auth/iframe",Ln="emulator/auth/iframe",Rn={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Dn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?j(t,Ln):`https://${e.config.authDomain}/${Nn}`,o={apiKey:t.apiKey,appName:e.name,v:i["a"]},s=Dn.get(e.config.apiHost);s&&(o.eid=s);const a=e._getFrameworks();return a.length&&(o.fw=a.join(",")),`${n}?${Object(r["p"])(o).slice(1)}`}async function Fn(e){const t=await Cn(e),n=kt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Mn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Rn,dontclear:!0},t=>new Promise(async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),o=kt().setTimeout(()=>{r(i)},Pn.get());function s(){kt().clearTimeout(o),n(t)}t.ping(s).then(s,()=>{r(i)})}))}
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
 */const Un={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Vn=500,$n=600,Bn="_blank",Hn="http://localhost";class qn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function zn(e,t,n,i=Vn,o=$n){const s=Math.max((window.screen.availHeight-o)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},Un),{width:i.toString(),height:o.toString(),top:s,left:a}),l=Object(r["j"])().toLowerCase();n&&(c=fe(l)?Bn:n),de(l)&&(t=t||Hn,u.scrollbars="yes");const d=Object.entries(u).reduce((e,[t,n])=>`${e}${t}=${n},`,"");if(ye(l)&&"_self"!==c)return Wn(t||"",c),new qn(null);const h=window.open(t||"",c,d);v(h,e,"popup-blocked");try{h.focus()}catch(f){}return new qn(h)}function Wn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const Gn="__/auth/handler",Kn="emulator/auth/handler";function Jn(e,t,n,o,s,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:o,v:i["a"],eventId:s};if(t instanceof We){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",Object(r["l"])(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof Ge){const e=t.getScopes().filter(e=>""!==e);e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Xn(e)}?${Object(r["p"])(u).slice(1)}`}function Xn({config:e}){return e.emulator?j(e,Kn):`https://${e.authDomain}/${Gn}`}
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
 */const Yn="webStorageSupport";class Qn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=wt,this._completeRedirectFn=gn}async _openPopup(e,t,n,r){var i;y(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Jn(e,t,n,T(),r);return zn(e,o,Tt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),St(Jn(e,t,n,T(),r)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(y(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await Fn(e),n=new bn(e);return t.register("authEvent",t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Yn,{type:Yn},n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Yn];void 0!==i&&t(!!i),f(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=In(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return we()||he()||be()}}const Zn=Qn;class er{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return b("unexpected MultiFactorSessionType")}}}class tr extends er{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new tr(e)}_finalizeEnroll(e,t,n){return ht(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Kt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nr{constructor(){}static assertion(e){return tr._fromCredential(e)}}nr.FACTOR_ID="phone";var rr="@firebase/auth",ir="0.19.5";
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
class or{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function sr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ar(e){Object(i["c"])(new a["a"]("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:o}=r.options;return(t=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},s=new Te(t,r);return E(s,n),s})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()})),Object(i["c"])(new a["a"]("auth-internal",e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new or(e))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Object(i["g"])(rr,ir,sr(e)),Object(i["g"])(rr,ir,"esm2017")}
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
 */function cr(e=Object(i["e"])()){const t=Object(i["b"])(e,"auth");return t.isInitialized()?t.getImmediate():O(e,{popupRedirectResolver:Zn,persistence:[Wt,yt,wt]})}ar("Browser")},"6b0d":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},"6c02":function(e,t,n){"use strict";n.d(t,"a",(function(){return Ze})),n.d(t,"b",(function(){return q}));var r=n("7a23");n("abc5");
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const i="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>i?Symbol(e):"_vr_"+e,s=o("rvlm"),a=o("rvd"),c=o("r"),u=o("rl"),l=o("rvl"),d="undefined"!==typeof window;function h(e){return e.__esModule||i&&"Module"===e[Symbol.toStringTag]}const f=Object.assign;function p(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const g=/\/$/,v=e=>e.replace(g,"");function b(e,t,n="/"){let r,i={},o="",s="";const a=t.indexOf("?"),c=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),o=t.slice(a+1,c>-1?c:t.length),i=e(o)),c>-1&&(r=r||t.slice(0,c),s=t.slice(c,t.length)),r=k(null!=r?r:t,n),{fullPath:r+(o&&"?")+o+s,path:r,query:i,hash:s}}function y(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function w(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&O(t.matched[r],n.matched[i])&&E(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function O(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function E(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!T(e[n],t[n]))return!1;return!0}function T(e,t){return Array.isArray(e)?I(e,t):Array.isArray(t)?I(t,e):e===t}function I(e,t){return Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}function k(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,o,s=n.length-1;for(i=0;i<r.length;i++)if(o=r[i],1!==s&&"."!==o){if(".."!==o)break;s--}return n.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var S,A;(function(e){e["pop"]="pop",e["push"]="push"})(S||(S={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(A||(A={}));function x(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),v(e)}const j=/^[^#]+#/;function C(e,t){return e.replace(j,"#")+t}function P(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const N=()=>({left:window.pageXOffset,top:window.pageYOffset});function L(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=P(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const D=new Map;function M(e,t){D.set(e,t)}function F(e){const t=D.get(e);return D.delete(e),t}let U=()=>location.protocol+"//"+location.host;function V(e,t){const{pathname:n,search:r,hash:i}=t,o=e.indexOf("#");if(o>-1){let t=i.includes(e.slice(o))?e.slice(o).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const s=_(n,e);return s+r+i}function $(e,t,n,r){let i=[],o=[],s=null;const a=({state:o})=>{const a=V(e,location),c=n.value,u=t.value;let l=0;if(o){if(n.value=a,t.value=o,s&&s===c)return void(s=null);l=u?o.position-u.position:0}else r(a);i.forEach(e=>{e(n.value,c,{delta:l,type:S.pop,direction:l?l>0?A.forward:A.back:A.unknown})})};function c(){s=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return o.push(t),t}function l(){const{history:e}=window;e.state&&e.replaceState(f({},e.state,{scroll:N()}),"")}function d(){for(const e of o)e();o=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:d}}function B(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?N():null}}function H(e){const{history:t,location:n}=window,r={value:V(e,n)},i={value:t.state};function o(r,o,s){const a=e.indexOf("#"),c=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[s?"replaceState":"pushState"](o,"",c),i.value=o}catch(u){console.error(u),n[s?"replace":"assign"](c)}}function s(e,n){const s=f({},t.state,B(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});o(e,s,!0),r.value=e}function a(e,n){const s=f({},i.value,t.state,{forward:e,scroll:N()});o(s.current,s,!0);const a=f({},B(r.value,e,null),{position:s.position+1},n);o(e,a,!1),r.value=e}return i.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:s}}function q(e){e=x(e);const t=H(e),n=$(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=f({location:"",base:e,go:r,createHref:C.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function z(e){return"string"===typeof e||e&&"object"===typeof e}function W(e){return"string"===typeof e||"symbol"===typeof e}const G={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},K=o("nf");var J;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(J||(J={}));function X(e,t){return f(new Error,{type:e,[K]:!0},t)}function Y(e,t){return e instanceof Error&&K in e&&(null==t||!!(e.type&t))}const Q="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},ee=/[.+*?^${}()[\]/\\]/g;function te(e,t){const n=f({},Z,t),r=[];let i=n.start?"^":"";const o=[];for(const l of e){const e=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let t=0;t<l.length;t++){const r=l[t];let s=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ee,"\\$&"),s+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:c}=r;o.push({name:e,repeatable:n,optional:a});const d=c||Q;if(d!==Q){s+=10;try{new RegExp(`(${d})`)}catch(u){throw new Error(`Invalid custom RegExp for param "${e}" (${d}): `+u.message)}}let h=n?`((?:${d})(?:/(?:${d}))*)`:`(${d})`;t||(h=a&&l.length<2?`(?:/${h})`:"/"+h),a&&(h+="?"),i+=h,s+=20,a&&(s+=-8),n&&(s+=-20),".*"===d&&(s+=-50)}e.push(s)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const s=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(s),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=o[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:o,repeatable:s,optional:a}=e,c=o in t?t[o]:"";if(Array.isArray(c)&&!s)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const u=Array.isArray(c)?c.join("/"):c;if(!u){if(!a)throw new Error(`Missing required param "${o}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=u}}return n}return{re:s,score:r,keys:o,parse:a,stringify:c}}function ne(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function re(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ne(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const ie={type:0,value:""},oe=/[a-zA-Z0-9_]/;function se(e){if(!e)return[[]];if("/"===e)return[[ie]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${u}": ${e}`)}let n=0,r=n;const i=[];let o;function s(){o&&i.push(o),o=[]}let a,c=0,u="",l="";function d(){u&&(0===n?o.push({type:0,value:u}):1===n||2===n||3===n?(o.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),o.push({type:1,value:u,regexp:l,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),u="")}function h(){u+=a}while(c<e.length)if(a=e[c++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(u&&d(),s()):":"===a?(d(),n=1):h();break;case 4:h(),n=r;break;case 1:"("===a?n=2:oe.test(a)?h():(d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--);break;case 2:")"===a?"\\"==l[l.length-1]?l=l.slice(0,-1)+a:n=3:l+=a;break;case 3:d(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&c--,l="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${u}"`),d(),s(),i}function ae(e,t,n){const r=te(se(e.path),n);const i=f(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ce(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function o(e,n,r){const i=!r,a=le(e);a.aliasOf=r&&r.record;const u=pe(t,e),l=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)l.push(f({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let d,h;for(const t of l){const{path:l}=t;if(n&&"/"!==l[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(l&&r+l)}if(d=ae(t,n,u),r?r.alias.push(d):(h=h||d,h!==d&&h.alias.push(d),i&&e.name&&!he(d)&&s(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)o(e[t],d,r&&r.children[t])}r=r||d,c(d)}return h?()=>{s(h)}:m}function s(e){if(W(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(s),t.alias.forEach(s))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(s),e.alias.forEach(s))}}function a(){return n}function c(e){let t=0;while(t<n.length&&re(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!he(e)&&r.set(e.record.name,e)}function u(e,t){let i,o,s,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw X(1,{location:e});s=i.record.name,a=f(ue(t.params,i.keys.filter(e=>!e.optional).map(e=>e.name)),e.params),o=i.stringify(a)}else if("path"in e)o=e.path,i=n.find(e=>e.re.test(o)),i&&(a=i.parse(o),s=i.record.name);else{if(i=t.name?r.get(t.name):n.find(e=>e.re.test(t.path)),!i)throw X(1,{location:e,currentLocation:t});s=i.record.name,a=f({},t.params,e.params),o=i.stringify(a)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:s,path:o,params:a,matched:c,meta:fe(c)}}return t=pe({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>o(e)),{addRoute:o,resolve:u,removeRoute:s,getRoutes:a,getRecordMatcher:i}}function ue(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function le(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:de(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function de(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function he(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function fe(e){return e.reduce((e,t)=>f(e,t.meta),{})}function pe(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const me=/#/g,ge=/&/g,ve=/\//g,be=/=/g,ye=/\?/g,_e=/\+/g,we=/%5B/g,Oe=/%5D/g,Ee=/%5E/g,Te=/%60/g,Ie=/%7B/g,ke=/%7C/g,Se=/%7D/g,Ae=/%20/g;function xe(e){return encodeURI(""+e).replace(ke,"|").replace(we,"[").replace(Oe,"]")}function je(e){return xe(e).replace(Ie,"{").replace(Se,"}").replace(Ee,"^")}function Ce(e){return xe(e).replace(_e,"%2B").replace(Ae,"+").replace(me,"%23").replace(ge,"%26").replace(Te,"`").replace(Ie,"{").replace(Se,"}").replace(Ee,"^")}function Pe(e){return Ce(e).replace(be,"%3D")}function Ne(e){return xe(e).replace(me,"%23").replace(ye,"%3F")}function Le(e){return null==e?"":Ne(e).replace(ve,"%2F")}function Re(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function De(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(_e," "),n=e.indexOf("="),o=Re(n<0?e:e.slice(0,n)),s=n<0?null:Re(e.slice(n+1));if(o in t){let e=t[o];Array.isArray(e)||(e=t[o]=[e]),e.push(s)}else t[o]=s}return t}function Me(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map(e=>e&&Ce(e)):[r&&Ce(r)];i.forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}function Ue(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Ve(e,t,n,r,i){const o=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((s,a)=>{const c=e=>{!1===e?a(X(4,{from:n,to:t})):e instanceof Error?a(e):z(e)?a(X(2,{from:t,to:e})):(o&&r.enterCallbacks[i]===o&&"function"===typeof e&&o.push(e),s())},u=e.call(r&&r.instances[i],t,n,c);let l=Promise.resolve(u);e.length<3&&(l=l.then(c)),l.catch(e=>a(e))})}function $e(e,t,n,r){const i=[];for(const o of e)for(const e in o.components){let s=o.components[e];if("beforeRouteEnter"===t||o.instances[e])if(Be(s)){const a=s.__vccOpts||s,c=a[t];c&&i.push(Ve(c,n,r,o,e))}else{let a=s();0,i.push(()=>a.then(i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${o.path}"`));const s=h(i)?i.default:i;o.components[e]=s;const a=s.__vccOpts||s,c=a[t];return c&&Ve(c,n,r,o,e)()}))}}return i}function Be(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=Object(r["n"])(c),n=Object(r["n"])(u),i=Object(r["d"])(()=>t.resolve(Object(r["E"])(e.to))),o=Object(r["d"])(()=>{const{matched:e}=i.value,{length:t}=e,r=e[t-1],o=n.matched;if(!r||!o.length)return-1;const s=o.findIndex(O.bind(null,r));if(s>-1)return s;const a=Ke(e[t-2]);return t>1&&Ke(r)===a&&o[o.length-1].path!==a?o.findIndex(O.bind(null,e[t-2])):s}),s=Object(r["d"])(()=>o.value>-1&&Ge(n.params,i.value.params)),a=Object(r["d"])(()=>o.value>-1&&o.value===n.matched.length-1&&E(n.params,i.value.params));function l(n={}){return We(n)?t[Object(r["E"])(e.replace)?"replace":"push"](Object(r["E"])(e.to)).catch(m):Promise.resolve()}return{route:i,href:Object(r["d"])(()=>i.value.href),isActive:s,isExactActive:a,navigate:l}}const qe=Object(r["k"])({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=Object(r["x"])(He(e)),{options:i}=Object(r["n"])(c),o=Object(r["d"])(()=>({[Je(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[Je(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const i=t.default&&t.default(n);return e.custom?i:Object(r["m"])("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),ze=qe;function We(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Ge(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some((e,t)=>e!==i[t]))return!1}return!0}function Ke(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Je=(e,t,n)=>null!=e?e:null!=t?t:n,Xe=Object(r["k"])({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const i=Object(r["n"])(l),o=Object(r["d"])(()=>e.route||i.value),c=Object(r["n"])(a,0),u=Object(r["d"])(()=>o.value.matched[c]);Object(r["v"])(a,c+1),Object(r["v"])(s,u),Object(r["v"])(l,o);const d=Object(r["y"])();return Object(r["H"])(()=>[d.value,u.value,e.name],([e,t,n],[r,i,o])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&O(t,i)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],c=e.name;if(!a)return Ye(n.default,{Component:a,route:i});const l=s.props[e.name],h=l?!0===l?i.params:"function"===typeof l?l(i):l:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},m=Object(r["m"])(a,f({},h,t,{onVnodeUnmounted:p,ref:d}));return Ye(n.default,{Component:m,route:i})||m}}});function Ye(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const Qe=Xe;function Ze(e){const t=ce(e.routes,e),n=e.parseQuery||De,i=e.stringifyQuery||Me,o=e.history;const s=Ue(),a=Ue(),h=Ue(),g=Object(r["C"])(G);let v=G;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=p.bind(null,e=>""+e),O=p.bind(null,Le),E=p.bind(null,Re);function T(e,n){let r,i;return W(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function I(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function k(){return t.getRoutes().map(e=>e.record)}function A(e){return!!t.getRecordMatcher(e)}function x(e,r){if(r=f({},r||g.value),"string"===typeof e){const i=b(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return f(i,s,{params:E(s.params),hash:Re(i.hash),redirectedFrom:void 0,href:a})}let s;if("path"in e)s=f({},e,{path:b(n,e.path,r.path).path});else{const t=f({},e.params);for(const e in t)null==t[e]&&delete t[e];s=f({},e,{params:O(e.params)}),r.params=O(r.params)}const a=t.resolve(s,r),c=e.hash||"";a.params=_(E(a.params));const u=y(i,f({},e,{hash:je(c),path:a.path})),l=o.createHref(u);return f({fullPath:u,hash:c,query:i===Me?Fe(e.query):e.query||{}},a,{redirectedFrom:void 0,href:l})}function j(e){return"string"===typeof e?b(n,e,g.value.path):f({},e)}function C(e,t){if(v!==e)return X(8,{from:t,to:e})}function P(e){return V(e)}function D(e){return P(f(j(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=j(r):{path:r},r.params={}),f({query:e.query,hash:e.hash,params:e.params},r)}}function V(e,t){const n=v=x(e),r=g.value,o=e.state,s=e.force,a=!0===e.replace,c=U(n);if(c)return V(f(j(c),{state:o,force:s,replace:a}),t||n);const u=n;let l;return u.redirectedFrom=t,!s&&w(i,r,n)&&(l=X(16,{to:u,from:r}),re(r,r,!0,!1)),(l?Promise.resolve(l):B(u,r)).catch(e=>Y(e)?e:ee(e,u,r)).then(e=>{if(e){if(Y(e,2))return V(f(j(e.to),{state:o,force:s,replace:a}),t||u)}else e=q(u,r,!0,a,o);return H(u,r,e),e})}function $(e,t){const n=C(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,o]=tt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const s of r)s.leaveGuards.forEach(r=>{n.push(Ve(r,e,t))});const c=$.bind(null,e,t);return n.push(c),et(n).then(()=>{n=[];for(const r of s.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).then(()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach(r=>{n.push(Ve(r,e,t))});return n.push(c),et(n)}).then(()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Ve(i,e,t));else n.push(Ve(r.beforeEnter,e,t));return n.push(c),et(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),n=$e(o,"beforeRouteEnter",e,t),n.push(c),et(n))).then(()=>{n=[];for(const r of a.list())n.push(Ve(r,e,t));return n.push(c),et(n)}).catch(e=>Y(e,8)?e:Promise.reject(e))}function H(e,t,n){for(const r of h.list())r(e,t,n)}function q(e,t,n,r,i){const s=C(e,t);if(s)return s;const a=t===G,c=d?history.state:{};n&&(r||a?o.replace(e.fullPath,f({scroll:a&&c&&c.scroll},i)):o.push(e.fullPath,i)),g.value=e,re(e,t,n,a),ne()}let z;function K(){z=o.listen((e,t,n)=>{const r=x(e),i=U(r);if(i)return void V(f(i,{replace:!0}),r).catch(m);v=r;const s=g.value;d&&M(R(s.fullPath,n.delta),N()),B(r,s).catch(e=>Y(e,12)?e:Y(e,2)?(V(e.to,r).then(e=>{Y(e,20)&&!n.delta&&n.type===S.pop&&o.go(-1,!1)}).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),ee(e,r,s))).then(e=>{e=e||q(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===S.pop&&Y(e,20)&&o.go(-1,!1)),H(r,s,e)}).catch(m)})}let J,Q=Ue(),Z=Ue();function ee(e,t,n){ne(e);const r=Z.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function te(){return J&&g.value!==G?Promise.resolve():new Promise((e,t)=>{Q.add([e,t])})}function ne(e){J||(J=!0,K(),Q.list().forEach(([t,n])=>e?n(e):t()),Q.reset())}function re(t,n,i,o){const{scrollBehavior:s}=e;if(!d||!s)return Promise.resolve();const a=!i&&F(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return Object(r["o"])().then(()=>s(t,n,a)).then(e=>e&&L(e)).catch(e=>ee(e,t,n))}const ie=e=>o.go(e);let oe;const se=new Set,ae={currentRoute:g,addRoute:T,removeRoute:I,hasRoute:A,getRoutes:k,resolve:x,options:e,push:P,replace:D,go:ie,back:()=>ie(-1),forward:()=>ie(1),beforeEach:s.add,beforeResolve:a.add,afterEach:h.add,onError:Z.add,isReady:te,install(e){const t=this;e.component("RouterLink",ze),e.component("RouterView",Qe),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>Object(r["E"])(g)}),d&&!oe&&g.value===G&&(oe=!0,P(o.location).catch(e=>{0}));const n={};for(const o in G)n[o]=Object(r["d"])(()=>g.value[o]);e.provide(c,t),e.provide(u,Object(r["x"])(n)),e.provide(l,g);const i=e.unmount;se.add(e),e.unmount=function(){se.delete(e),se.size<1&&(v=G,z&&z(),g.value=G,oe=!1,J=!1),i()}}};return ae}function et(e){return e.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function tt(e,t){const n=[],r=[],i=[],o=Math.max(t.matched.length,e.matched.length);for(let s=0;s<o;s++){const o=t.matched[s];o&&(e.matched.find(e=>O(e,o))?r.push(o):n.push(o));const a=e.matched[s];a&&(t.matched.find(e=>O(e,a))||i.push(a))}return[n,r,i]}},"6eeb":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("1a2d"),s=n("9112"),a=n("ce4e"),c=n("8925"),u=n("69f3"),l=n("5e77").CONFIGURABLE,d=u.get,h=u.enforce,f=String(String).split("String");(e.exports=function(e,t,n,c){var u,d=!!c&&!!c.unsafe,p=!!c&&!!c.enumerable,m=!!c&&!!c.noTargetGet,g=c&&void 0!==c.name?c.name:t;i(n)&&("Symbol("===String(g).slice(0,7)&&(g="["+String(g).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!o(n,"name")||l&&n.name!==g)&&s(n,"name",g),u=h(n),u.source||(u.source=f.join("string"==typeof g?g:""))),e!==r?(d?!m&&e[t]&&(p=!0):delete e[t],p?e[t]=n:s(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&d(this).source||c(this)}))},7418:function(e,t){t.f=Object.getOwnPropertySymbols},7839:function(e,t){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},"785a":function(e,t,n){var r=n("cc12"),i=r("span").classList,o=i&&i.constructor&&i.constructor.prototype;e.exports=o===Object.prototype?void 0:o},"7a23":function(e,t,n){"use strict";n.d(t,"d",(function(){return ze})),n.d(t,"x",(function(){return Ee})),n.d(t,"y",(function(){return Me})),n.d(t,"C",(function(){return Fe})),n.d(t,"E",(function(){return $e})),n.d(t,"p",(function(){return r["I"]})),n.d(t,"D",(function(){return r["L"]})),n.d(t,"a",(function(){return Bn})),n.d(t,"b",(function(){return It})),n.d(t,"f",(function(){return er})),n.d(t,"g",(function(){return hr})),n.d(t,"h",(function(){return Zn})),n.d(t,"i",(function(){return sr})),n.d(t,"j",(function(){return ar})),n.d(t,"k",(function(){return wt})),n.d(t,"l",(function(){return kr})),n.d(t,"m",(function(){return Ei})),n.d(t,"n",(function(){return lt})),n.d(t,"o",(function(){return oi})),n.d(t,"q",(function(){return St})),n.d(t,"r",(function(){return At})),n.d(t,"s",(function(){return Vt})),n.d(t,"t",(function(){return Kn})),n.d(t,"u",(function(){return Ze})),n.d(t,"v",(function(){return ut})),n.d(t,"w",(function(){return Qe})),n.d(t,"z",(function(){return br})),n.d(t,"A",(function(){return Mn})),n.d(t,"B",(function(){return Un})),n.d(t,"H",(function(){return bi})),n.d(t,"I",(function(){return et})),n.d(t,"J",(function(){return On})),n.d(t,"c",(function(){return ro})),n.d(t,"e",(function(){return Ro})),n.d(t,"F",(function(){return Io})),n.d(t,"G",(function(){return To})),n.d(t,"K",(function(){return Co}));var r=n("9ff4");let i;const o=[];class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(o.push(this),i=this)}off(){this.active&&(o.pop(),i=o[o.length-1])}stop(e){if(this.active){if(this.effects.forEach(e=>e.stop()),this.cleanups.forEach(e=>e()),this.scopes&&this.scopes.forEach(e=>e.stop(!0)),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const c=e=>{const t=new Set(e);return t.w=0,t.n=0,t},u=e=>(e.w&m)>0,l=e=>(e.n&m)>0,d=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=m},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];u(i)&&!l(i)?i.delete(e):t[n++]=i,i.w&=~m,i.n&=~m}t.length=n}},f=new WeakMap;let p=0,m=1;const g=30,v=[];let b;const y=Symbol(""),_=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(b=this),k(),m=1<<++p,p<=g?d(this):O(this),this.fn()}finally{p<=g&&h(this),m=1<<--p,S(),v.pop();const e=v.length;b=e>0?v[e-1]:void 0}}stop(){this.active&&(O(this),this.onStop&&this.onStop(),this.active=!1)}}function O(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const T=[];function I(){T.push(E),E=!1}function k(){T.push(E),E=!0}function S(){const e=T.pop();E=void 0===e||e}function A(e,t,n){if(!x())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=c());const o=void 0;j(i,o)}function x(){return E&&void 0!==b}function j(e,t){let n=!1;p<=g?l(e)||(e.n|=m,n=!u(e)):n=!e.has(b),n&&(e.add(b),b.deps.push(e))}function C(e,t,n,i,o,s){const a=f.get(e);if(!a)return;let u=[];if("clear"===t)u=[...a.values()];else if("length"===n&&Object(r["o"])(e))a.forEach((e,t)=>{("length"===t||t>=i)&&u.push(e)});else switch(void 0!==n&&u.push(a.get(n)),t){case"add":Object(r["o"])(e)?Object(r["s"])(n)&&u.push(a.get("length")):(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"delete":Object(r["o"])(e)||(u.push(a.get(y)),Object(r["t"])(e)&&u.push(a.get(_)));break;case"set":Object(r["t"])(e)&&u.push(a.get(y));break}if(1===u.length)u[0]&&P(u[0]);else{const e=[];for(const t of u)t&&e.push(...t);P(c(e))}}function P(e,t){for(const n of Object(r["o"])(e)?e:[...e])(n!==b||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const N=Object(r["H"])("__proto__,__v_isRef,__isVue"),L=new Set(Object.getOwnPropertyNames(Symbol).map(e=>Symbol[e]).filter(r["E"])),R=V(),D=V(!1,!0),M=V(!0),F=U();function U(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...e){const n=je(this);for(let t=0,i=this.length;t<i;t++)A(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...e){I();const n=je(this)[t].apply(this,e);return S(),n}}),e}function V(e=!1,t=!1){return function(n,i,o){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&o===(e?t?_e:ye:t?be:ve).get(n))return n;const s=Object(r["o"])(n);if(!e&&s&&Object(r["k"])(F,i))return Reflect.get(F,i,o);const a=Reflect.get(n,i,o);if(Object(r["E"])(i)?L.has(i):N(i))return a;if(e||A(n,"get",i),t)return a;if(De(a)){const e=!s||!Object(r["s"])(i);return e?a.value:a}return Object(r["v"])(a)?e?Ie(a):Ee(a):a}}const $=H(),B=H(!0);function H(e=!1){return function(t,n,i,o){let s=t[n];if(!e&&!Ae(i)&&(i=je(i),s=je(s),!Object(r["o"])(t)&&De(s)&&!De(i)))return s.value=i,!0;const a=Object(r["o"])(t)&&Object(r["s"])(n)?Number(n)<t.length:Object(r["k"])(t,n),c=Reflect.set(t,n,i,o);return t===je(o)&&(a?Object(r["j"])(i,s)&&C(t,"set",n,i,s):C(t,"add",n,i)),c}}function q(e,t){const n=Object(r["k"])(e,t),i=e[t],o=Reflect.deleteProperty(e,t);return o&&n&&C(e,"delete",t,void 0,i),o}function z(e,t){const n=Reflect.has(e,t);return Object(r["E"])(t)&&L.has(t)||A(e,"has",t),n}function W(e){return A(e,"iterate",Object(r["o"])(e)?"length":y),Reflect.ownKeys(e)}const G={get:R,set:$,deleteProperty:q,has:z,ownKeys:W},K={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},J=Object(r["h"])({},G,{get:D,set:B}),X=e=>e,Y=e=>Reflect.getPrototypeOf(e);function Q(e,t,n=!1,r=!1){e=e["__v_raw"];const i=je(e),o=je(t);t!==o&&!n&&A(i,"get",t),!n&&A(i,"get",o);const{has:s}=Y(i),a=r?X:n?Ne:Pe;return s.call(i,t)?a(e.get(t)):s.call(i,o)?a(e.get(o)):void(e!==i&&e.get(t))}function Z(e,t=!1){const n=this["__v_raw"],r=je(n),i=je(e);return e!==i&&!t&&A(r,"has",e),!t&&A(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&A(je(e),"iterate",y),Reflect.get(e,"size",e)}function te(e){e=je(e);const t=je(this),n=Y(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function ne(e,t){t=je(t);const n=je(this),{has:i,get:o}=Y(n);let s=i.call(n,e);s||(e=je(e),s=i.call(n,e));const a=o.call(n,e);return n.set(e,t),s?Object(r["j"])(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function re(e){const t=je(this),{has:n,get:r}=Y(t);let i=n.call(t,e);i||(e=je(e),i=n.call(t,e));const o=r?r.call(t,e):void 0,s=t.delete(e);return i&&C(t,"delete",e,void 0,o),s}function ie(){const e=je(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function oe(e,t){return function(n,r){const i=this,o=i["__v_raw"],s=je(o),a=t?X:e?Ne:Pe;return!e&&A(s,"iterate",y),o.forEach((e,t)=>n.call(r,a(e),a(t),i))}}function se(e,t,n){return function(...i){const o=this["__v_raw"],s=je(o),a=Object(r["t"])(s),c="entries"===e||e===Symbol.iterator&&a,u="keys"===e&&a,l=o[e](...i),d=n?X:t?Ne:Pe;return!t&&A(s,"iterate",u?_:y),{next(){const{value:e,done:t}=l.next();return t?{value:e,done:t}:{value:c?[d(e[0]),d(e[1])]:d(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function ce(){const e={get(e){return Q(this,e)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!1)},t={get(e){return Q(this,e,!1,!0)},get size(){return ee(this)},has:Z,add:te,set:ne,delete:re,clear:ie,forEach:oe(!1,!0)},n={get(e){return Q(this,e,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!1)},r={get(e){return Q(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Z.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:oe(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach(i=>{e[i]=se(i,!1,!1),n[i]=se(i,!0,!1),t[i]=se(i,!1,!0),r[i]=se(i,!0,!0)}),[e,n,t,r]}const[ue,le,de,he]=ce();function fe(e,t){const n=t?e?he:de:e?le:ue;return(t,i,o)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get(Object(r["k"])(n,i)&&i in t?n:t,i,o)}const pe={get:fe(!1,!1)},me={get:fe(!1,!0)},ge={get:fe(!0,!1)};const ve=new WeakMap,be=new WeakMap,ye=new WeakMap,_e=new WeakMap;function we(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Oe(e){return e["__v_skip"]||!Object.isExtensible(e)?0:we(Object(r["O"])(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:ke(e,!1,G,pe,ve)}function Te(e){return ke(e,!1,J,me,be)}function Ie(e){return ke(e,!0,K,ge,ye)}function ke(e,t,n,i,o){if(!Object(r["v"])(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const s=o.get(e);if(s)return s;const a=Oe(e);if(0===a)return e;const c=new Proxy(e,2===a?i:n);return o.set(e,c),c}function Se(e){return Ae(e)?Se(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return Se(e)||Ae(e)}function je(e){const t=e&&e["__v_raw"];return t?je(t):e}function Ce(e){return Object(r["g"])(e,"__v_skip",!0),e}const Pe=e=>Object(r["v"])(e)?Ee(e):e,Ne=e=>Object(r["v"])(e)?Ie(e):e;function Le(e){x()&&(e=je(e),e.dep||(e.dep=c()),j(e.dep))}function Re(e,t){e=je(e),e.dep&&P(e.dep)}function De(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Ue(e,!1)}function Fe(e){return Ue(e,!0)}function Ue(e,t){return De(e)?e:new Ve(e,t)}class Ve{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Pe(e)}get value(){return Le(this),this._value}set value(e){e=this._shallow?e:je(e),Object(r["j"])(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Pe(e),Re(this,e))}}function $e(e){return De(e)?e.value:e}const Be={get:(e,t,n)=>$e(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return De(i)&&!De(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function He(e){return Se(e)?e:new Proxy(e,Be)}class qe{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new w(e,()=>{this._dirty||(this._dirty=!0,Re(this))}),this["__v_isReadonly"]=n}get value(){const e=je(this);return Le(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function ze(e,t){let n,i;const o=Object(r["p"])(e);o?(n=e,i=r["d"]):(n=e.get,i=e.set);const s=new qe(n,i,o||!i);return s}Promise.resolve();new Set;new Map;function We(e,t,...n){const i=e.vnode.props||r["b"];let o=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in i){const e=("modelValue"===a?"model":a)+"Modifiers",{number:t,trim:s}=i[e]||r["b"];s?o=n.map(e=>e.trim()):t&&(o=n.map(r["N"]))}let c;let u=i[c=Object(r["M"])(t)]||i[c=Object(r["M"])(Object(r["e"])(t))];!u&&s&&(u=i[c=Object(r["M"])(Object(r["l"])(t))]),u&&Hr(u,e,6,o);const l=i[c+"Once"];if(l){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,Hr(l,e,6,o)}}function Ge(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(void 0!==o)return o;const s=e.emits;let a={},c=!1;if(!Object(r["p"])(e)){const i=e=>{const n=Ge(e,t,!0);n&&(c=!0,Object(r["h"])(a,n))};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}return s||c?(Object(r["o"])(s)?s.forEach(e=>a[e]=null):Object(r["h"])(a,s),i.set(e,a),a):(i.set(e,null),null)}function Ke(e,t){return!(!e||!Object(r["w"])(t))&&(t=t.slice(2).replace(/Once$/,""),Object(r["k"])(e,t[0].toLowerCase()+t.slice(1))||Object(r["k"])(e,Object(r["l"])(t))||Object(r["k"])(e,t))}let Je=null,Xe=null;function Ye(e){const t=Je;return Je=e,Xe=e&&e.type.__scopeId||null,t}function Qe(e){Xe=e}function Ze(){Xe=null}function et(e,t=Je,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Yn(-1);const i=Ye(t),o=e(...n);return Ye(i),r._d&&Yn(1),o};return r._n=!0,r._c=!0,r._d=!0,r}function tt(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:s,propsOptions:[a],slots:c,attrs:u,emit:l,render:d,renderCache:h,data:f,setupState:p,ctx:m,inheritAttrs:g}=e;let v,b;const y=Ye(e);try{if(4&n.shapeFlag){const e=o||i;v=fr(d.call(e,e,h,s,p,f,m)),b=u}else{const e=t;0,v=fr(e.length>1?e(s,{attrs:u,slots:c,emit:l}):e(s,null)),b=t.props?u:nt(u)}}catch(w){Wn.length=0,qr(w,e,1),v=ar(qn)}let _=v;if(b&&!1!==g){const e=Object.keys(b),{shapeFlag:t}=_;e.length&&7&t&&(a&&e.some(r["u"])&&(b=rt(b,a)),_=lr(_,b))}return n.dirs&&(_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),v=_,Ye(y),v}const nt=e=>{let t;for(const n in e)("class"===n||"style"===n||Object(r["w"])(n))&&((t||(t={}))[n]=e[n]);return t},rt=(e,t)=>{const n={};for(const i in e)Object(r["u"])(i)&&i.slice(9)in t||(n[i]=e[i]);return n};function it(e,t,n){const{props:r,children:i,component:o}=e,{props:s,children:a,patchFlag:c}=t,u=o.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!a||a&&a.$stable)||r!==s&&(r?!s||ot(r,s,u):!!s);if(1024&c)return!0;if(16&c)return r?ot(r,s,u):!!s;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(s[n]!==r[n]&&!Ke(u,n))return!0}}return!1}function ot(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const o=r[i];if(t[o]!==e[o]&&!Ke(n,o))return!0}return!1}function st({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const at=e=>e.__isSuspense;function ct(e,t){t&&t.pendingBranch?Object(r["o"])(e)?t.effects.push(...e):t.effects.push(e):hi(e)}function ut(e,t){if(Ir){let n=Ir.provides;const r=Ir.parent&&Ir.parent.provides;r===n&&(n=Ir.provides=Object.create(r)),n[e]=t}else 0}function lt(e,t,n=!1){const i=Ir||Je;if(i){const o=null==i.parent?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&Object(r["p"])(t)?t.call(i.proxy):t}else 0}function dt(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Dt(()=>{e.isMounted=!0}),Ut(()=>{e.isUnmounting=!0}),e}const ht=[Function,Array],ft={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ht,onEnter:ht,onAfterEnter:ht,onEnterCancelled:ht,onBeforeLeave:ht,onLeave:ht,onAfterLeave:ht,onLeaveCancelled:ht,onBeforeAppear:ht,onAppear:ht,onAfterAppear:ht,onAppearCancelled:ht},setup(e,{slots:t}){const n=kr(),r=dt();let i;return()=>{const o=t.default&&_t(t.default(),!0);if(!o||!o.length)return;const s=je(e),{mode:a}=s;const c=o[0];if(r.isLeaving)return vt(c);const u=bt(c);if(!u)return vt(c);const l=gt(u,s,r,n);yt(u,l);const d=n.subTree,h=d&&bt(d);let f=!1;const{getTransitionKey:p}=u.type;if(p){const e=p();void 0===i?i=e:e!==i&&(i=e,f=!0)}if(h&&h.type!==qn&&(!nr(u,h)||f)){const e=gt(h,s,r,n);if(yt(h,e),"out-in"===a)return r.isLeaving=!0,e.afterLeave=()=>{r.isLeaving=!1,n.update()},vt(c);"in-out"===a&&u.type!==qn&&(e.delayLeave=(e,t,n)=>{const i=mt(r,h);i[String(h.key)]=h,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=n})}return c}}},pt=ft;function mt(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function gt(e,t,n,r){const{appear:i,mode:o,persisted:s=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:d,onLeave:h,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:m,onAppear:g,onAfterAppear:v,onAppearCancelled:b}=t,y=String(e.key),_=mt(n,e),w=(e,t)=>{e&&Hr(e,r,9,t)},O={mode:o,persisted:s,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=m||a}t._leaveCb&&t._leaveCb(!0);const o=_[y];o&&nr(e,o)&&o.el._leaveCb&&o.el._leaveCb(),w(r,[t])},enter(e){let t=c,r=u,o=l;if(!n.isMounted){if(!i)return;t=g||c,r=v||u,o=b||l}let s=!1;const a=e._enterCb=t=>{s||(s=!0,w(t?o:r,[e]),O.delayedLeave&&O.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();w(d,[t]);let o=!1;const s=t._leaveCb=n=>{o||(o=!0,r(),w(n?p:f,[t]),t._leaveCb=void 0,_[i]===e&&delete _[i])};_[i]=e,h?(h(t,s),h.length<=1&&s()):s()},clone(e){return gt(e,t,n,r)}};return O}function vt(e){if(Et(e))return e=lr(e),e.children=null,e}function bt(e){return Et(e)?e.children?e.children[0]:void 0:e}function yt(e,t){6&e.shapeFlag&&e.component?yt(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function _t(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const o=e[i];o.type===Bn?(128&o.patchFlag&&r++,n=n.concat(_t(o.children,t))):(t||o.type!==qn)&&n.push(o)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function wt(e){return Object(r["p"])(e)?{setup:e,name:e.name}:e}const Ot=e=>!!e.type.__asyncLoader;const Et=e=>e.type.__isKeepAlive,Tt={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(e,{slots:t}){const n=kr(),i=n.ctx;if(!i.renderer)return t.default;const o=new Map,s=new Set;let a=null;const c=n.suspense,{renderer:{p:u,m:l,um:d,o:{createElement:h}}}=i,f=h("div");function p(e){Ct(e),d(e,n,c)}function m(e){o.forEach((t,n)=>{const r=Vr(t.type);!r||e&&e(r)||g(n)})}function g(e){const t=o.get(e);a&&t.type===a.type?a&&Ct(a):p(t),o.delete(e),s.delete(e)}i.activate=(e,t,n,i,o)=>{const s=e.component;l(e,t,n,0,c),u(s.vnode,e,t,n,s,c,i,e.slotScopeIds,o),xn(()=>{s.isDeactivated=!1,s.a&&Object(r["n"])(s.a);const t=e.props&&e.props.onVnodeMounted;t&&vr(t,s.parent,e)},c)},i.deactivate=e=>{const t=e.component;l(e,f,null,1,c),xn(()=>{t.da&&Object(r["n"])(t.da);const n=e.props&&e.props.onVnodeUnmounted;n&&vr(n,t.parent,e),t.isDeactivated=!0},c)},bi(()=>[e.include,e.exclude],([e,t])=>{e&&m(t=>kt(e,t)),t&&m(e=>!kt(t,e))},{flush:"post",deep:!0});let v=null;const b=()=>{null!=v&&o.set(v,Pt(n.subTree))};return Dt(b),Ft(b),Ut(()=>{o.forEach(e=>{const{subTree:t,suspense:r}=n,i=Pt(t);if(e.type!==i.type)p(e);else{Ct(i);const e=i.component.da;e&&xn(e,r)}})}),()=>{if(v=null,!t.default)return null;const n=t.default(),r=n[0];if(n.length>1)return a=null,n;if(!tr(r)||!(4&r.shapeFlag)&&!(128&r.shapeFlag))return a=null,r;let i=Pt(r);const c=i.type,u=Vr(Ot(i)?i.type.__asyncResolved||{}:c),{include:l,exclude:d,max:h}=e;if(l&&(!u||!kt(l,u))||d&&u&&kt(d,u))return a=i,r;const f=null==i.key?c:i.key,p=o.get(f);return i.el&&(i=lr(i),128&r.shapeFlag&&(r.ssContent=i)),v=f,p?(i.el=p.el,i.component=p.component,i.transition&&yt(i,i.transition),i.shapeFlag|=512,s.delete(f),s.add(f)):(s.add(f),h&&s.size>parseInt(h,10)&&g(s.values().next().value)),i.shapeFlag|=256,a=i,r}}},It=Tt;function kt(e,t){return Object(r["o"])(e)?e.some(e=>kt(e,t)):Object(r["D"])(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function St(e,t){xt(e,"a",t)}function At(e,t){xt(e,"da",t)}function xt(e,t,n=Ir){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(Nt(t,r,n),n){let e=n.parent;while(e&&e.parent)Et(e.parent.vnode)&&jt(r,t,n,e),e=e.parent}}function jt(e,t,n,i){const o=Nt(t,e,i,!0);Vt(()=>{Object(r["K"])(i[t],o)},n)}function Ct(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Pt(e){return 128&e.shapeFlag?e.ssContent:e}function Nt(e,t,n=Ir,r=!1){if(n){const i=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...r)=>{if(n.isUnmounted)return;I(),Sr(n);const i=Hr(t,n,e,r);return Ar(),S(),i});return r?i.unshift(o):i.push(o),o}}const Lt=e=>(t,n=Ir)=>(!Pr||"sp"===e)&&Nt(e,t,n),Rt=Lt("bm"),Dt=Lt("m"),Mt=Lt("bu"),Ft=Lt("u"),Ut=Lt("bum"),Vt=Lt("um"),$t=Lt("sp"),Bt=Lt("rtg"),Ht=Lt("rtc");function qt(e,t=Ir){Nt("ec",e,t)}let zt=!0;function Wt(e){const t=Xt(e),n=e.proxy,i=e.ctx;zt=!1,t.beforeCreate&&Kt(t.beforeCreate,e,"bc");const{data:o,computed:s,methods:a,watch:c,provide:u,inject:l,created:d,beforeMount:h,mounted:f,beforeUpdate:p,updated:m,activated:g,deactivated:v,beforeDestroy:b,beforeUnmount:y,destroyed:_,unmounted:w,render:O,renderTracked:E,renderTriggered:T,errorCaptured:I,serverPrefetch:k,expose:S,inheritAttrs:A,components:x,directives:j,filters:C}=t,P=null;if(l&&Gt(l,i,P,e.appContext.config.unwrapInjectedRef),a)for(const L in a){const e=a[L];Object(r["p"])(e)&&(i[L]=e.bind(n))}if(o){0;const t=o.call(n,n);0,Object(r["v"])(t)&&(e.data=Ee(t))}if(zt=!0,s)for(const L in s){const e=s[L],t=Object(r["p"])(e)?e.bind(n,n):Object(r["p"])(e.get)?e.get.bind(n,n):r["d"];0;const o=!Object(r["p"])(e)&&Object(r["p"])(e.set)?e.set.bind(n):r["d"],a=ze({get:t,set:o});Object.defineProperty(i,L,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e})}if(c)for(const r in c)Jt(c[r],i,n,r);if(u){const e=Object(r["p"])(u)?u.call(n):u;Reflect.ownKeys(e).forEach(t=>{ut(t,e[t])})}function N(e,t){Object(r["o"])(t)?t.forEach(t=>e(t.bind(n))):t&&e(t.bind(n))}if(d&&Kt(d,e,"c"),N(Rt,h),N(Dt,f),N(Mt,p),N(Ft,m),N(St,g),N(At,v),N(qt,I),N(Ht,E),N(Bt,T),N(Ut,y),N(Vt,w),N($t,k),Object(r["o"])(S))if(S.length){const t=e.exposed||(e.exposed={});S.forEach(e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})})}else e.exposed||(e.exposed={});O&&e.render===r["d"]&&(e.render=O),null!=A&&(e.inheritAttrs=A),x&&(e.components=x),j&&(e.directives=j)}function Gt(e,t,n=r["d"],i=!1){Object(r["o"])(e)&&(e=tn(e));for(const o in e){const n=e[o];let s;s=Object(r["v"])(n)?"default"in n?lt(n.from||o,n.default,!0):lt(n.from||o):lt(n),De(s)&&i?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>s.value,set:e=>s.value=e}):t[o]=s}}function Kt(e,t,n){Hr(Object(r["o"])(e)?e.map(e=>e.bind(t.proxy)):e.bind(t.proxy),t,n)}function Jt(e,t,n,i){const o=i.includes(".")?wi(n,i):()=>n[i];if(Object(r["D"])(e)){const n=t[e];Object(r["p"])(n)&&bi(o,n)}else if(Object(r["p"])(e))bi(o,e.bind(n));else if(Object(r["v"])(e))if(Object(r["o"])(e))e.forEach(e=>Jt(e,t,n,i));else{const i=Object(r["p"])(e.handler)?e.handler.bind(n):t[e.handler];Object(r["p"])(i)&&bi(o,i,e)}else 0}function Xt(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:o,config:{optionMergeStrategies:s}}=e.appContext,a=o.get(t);let c;return a?c=a:i.length||n||r?(c={},i.length&&i.forEach(e=>Yt(c,e,s,!0)),Yt(c,t,s)):c=t,o.set(t,c),c}function Yt(e,t,n,r=!1){const{mixins:i,extends:o}=t;o&&Yt(e,o,n,!0),i&&i.forEach(t=>Yt(e,t,n,!0));for(const s in t)if(r&&"expose"===s);else{const r=Qt[s]||n&&n[s];e[s]=r?r(e[s],t[s]):t[s]}return e}const Qt={data:Zt,props:rn,emits:rn,methods:rn,computed:rn,beforeCreate:nn,created:nn,beforeMount:nn,mounted:nn,beforeUpdate:nn,updated:nn,beforeDestroy:nn,beforeUnmount:nn,destroyed:nn,unmounted:nn,activated:nn,deactivated:nn,errorCaptured:nn,serverPrefetch:nn,components:rn,directives:rn,watch:on,provide:Zt,inject:en};function Zt(e,t){return t?e?function(){return Object(r["h"])(Object(r["p"])(e)?e.call(this,this):e,Object(r["p"])(t)?t.call(this,this):t)}:t:e}function en(e,t){return rn(tn(e),tn(t))}function tn(e){if(Object(r["o"])(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function nn(e,t){return e?[...new Set([].concat(e,t))]:t}function rn(e,t){return e?Object(r["h"])(Object(r["h"])(Object.create(null),e),t):t}function on(e,t){if(!e)return t;if(!t)return e;const n=Object(r["h"])(Object.create(null),e);for(const r in t)n[r]=nn(e[r],t[r]);return n}function sn(e,t,n,i=!1){const o={},s={};Object(r["g"])(s,rr,1),e.propsDefaults=Object.create(null),cn(e,t,o,s);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=i?o:Te(o):e.type.props?e.props=o:e.props=s,e.attrs=s}function an(e,t,n,i){const{props:o,attrs:s,vnode:{patchFlag:a}}=e,c=je(o),[u]=e.propsOptions;let l=!1;if(!(i||a>0)||16&a){let i;cn(e,t,o,s)&&(l=!0);for(const s in c)t&&(Object(r["k"])(t,s)||(i=Object(r["l"])(s))!==s&&Object(r["k"])(t,i))||(u?!n||void 0===n[s]&&void 0===n[i]||(o[s]=un(u,c,s,void 0,e,!0)):delete o[s]);if(s!==c)for(const e in s)t&&Object(r["k"])(t,e)||(delete s[e],l=!0)}else if(8&a){const n=e.vnode.dynamicProps;for(let i=0;i<n.length;i++){let a=n[i];const d=t[a];if(u)if(Object(r["k"])(s,a))d!==s[a]&&(s[a]=d,l=!0);else{const t=Object(r["e"])(a);o[t]=un(u,c,t,d,e,!1)}else d!==s[a]&&(s[a]=d,l=!0)}}l&&C(e,"set","$attrs")}function cn(e,t,n,i){const[o,s]=e.propsOptions;let a,c=!1;if(t)for(let u in t){if(Object(r["z"])(u))continue;const l=t[u];let d;o&&Object(r["k"])(o,d=Object(r["e"])(u))?s&&s.includes(d)?(a||(a={}))[d]=l:n[d]=l:Ke(e.emitsOptions,u)||u in i&&l===i[u]||(i[u]=l,c=!0)}if(s){const t=je(n),i=a||r["b"];for(let a=0;a<s.length;a++){const c=s[a];n[c]=un(o,t,c,i[c],e,!Object(r["k"])(i,c))}}return c}function un(e,t,n,i,o,s){const a=e[n];if(null!=a){const e=Object(r["k"])(a,"default");if(e&&void 0===i){const e=a.default;if(a.type!==Function&&Object(r["p"])(e)){const{propsDefaults:r}=o;n in r?i=r[n]:(Sr(o),i=r[n]=e.call(null,t),Ar())}else i=e}a[0]&&(s&&!e?i=!1:!a[1]||""!==i&&i!==Object(r["l"])(n)||(i=!0))}return i}function ln(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const s=e.props,a={},c=[];let u=!1;if(!Object(r["p"])(e)){const i=e=>{u=!0;const[n,i]=ln(e,t,!0);Object(r["h"])(a,n),i&&c.push(...i)};!n&&t.mixins.length&&t.mixins.forEach(i),e.extends&&i(e.extends),e.mixins&&e.mixins.forEach(i)}if(!s&&!u)return i.set(e,r["a"]),r["a"];if(Object(r["o"])(s))for(let d=0;d<s.length;d++){0;const e=Object(r["e"])(s[d]);dn(e)&&(a[e]=r["b"])}else if(s){0;for(const e in s){const t=Object(r["e"])(e);if(dn(t)){const n=s[e],i=a[t]=Object(r["o"])(n)||Object(r["p"])(n)?{type:n}:n;if(i){const e=pn(Boolean,i.type),n=pn(String,i.type);i[0]=e>-1,i[1]=n<0||e<n,(e>-1||Object(r["k"])(i,"default"))&&c.push(t)}}}}const l=[a,c];return i.set(e,l),l}function dn(e){return"$"!==e[0]}function hn(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function fn(e,t){return hn(e)===hn(t)}function pn(e,t){return Object(r["o"])(t)?t.findIndex(t=>fn(t,e)):Object(r["p"])(t)&&fn(t,e)?0:-1}const mn=e=>"_"===e[0]||"$stable"===e,gn=e=>Object(r["o"])(e)?e.map(fr):[fr(e)],vn=(e,t,n)=>{const r=et((...e)=>gn(t(...e)),n);return r._c=!1,r},bn=(e,t,n)=>{const i=e._ctx;for(const o in e){if(mn(o))continue;const n=e[o];if(Object(r["p"])(n))t[o]=vn(o,n,i);else if(null!=n){0;const e=gn(n);t[o]=()=>e}}},yn=(e,t)=>{const n=gn(t);e.slots.default=()=>n},_n=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=je(t),Object(r["g"])(t,"_",n)):bn(t,e.slots={})}else e.slots={},t&&yn(e,t);Object(r["g"])(e.slots,rr,1)},wn=(e,t,n)=>{const{vnode:i,slots:o}=e;let s=!0,a=r["b"];if(32&i.shapeFlag){const e=t._;e?n&&1===e?s=!1:(Object(r["h"])(o,t),n||1!==e||delete o._):(s=!t.$stable,bn(t,o)),a=t}else t&&(yn(e,t),a={default:1});if(s)for(const r in o)mn(r)||r in a||delete o[r]};function On(e,t){const n=Je;if(null===n)return e;const i=n.proxy,o=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[e,n,a,c=r["b"]]=t[s];Object(r["p"])(e)&&(e={mounted:e,updated:e}),e.deep&&Oi(n),o.push({dir:e,instance:i,value:n,oldValue:void 0,arg:a,modifiers:c})}return e}function En(e,t,n,r){const i=e.dirs,o=t&&t.dirs;for(let s=0;s<i.length;s++){const a=i[s];o&&(a.oldValue=o[s].value);let c=a.dir[r];c&&(I(),Hr(c,n,8,[e.el,a,e,t]),S())}}function Tn(){return{app:null,config:{isNativeTag:r["c"],performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let In=0;function kn(e,t){return function(n,i=null){null==i||Object(r["v"])(i)||(i=null);const o=Tn(),s=new Set;let a=!1;const c=o.app={_uid:In++,_component:n,_props:i,_container:null,_context:o,_instance:null,version:Ti,get config(){return o.config},set config(e){0},use(e,...t){return s.has(e)||(e&&Object(r["p"])(e.install)?(s.add(e),e.install(c,...t)):Object(r["p"])(e)&&(s.add(e),e(c,...t))),c},mixin(e){return o.mixins.includes(e)||o.mixins.push(e),c},component(e,t){return t?(o.components[e]=t,c):o.components[e]},directive(e,t){return t?(o.directives[e]=t,c):o.directives[e]},mount(r,s,u){if(!a){const l=ar(n,i);return l.appContext=o,s&&t?t(l,r):e(l,r,u),a=!0,c._container=r,r.__vue_app__=c,Ur(l.component)||l.component.proxy}},unmount(){a&&(e(null,c._container),delete c._container.__vue_app__)},provide(e,t){return o.provides[e]=t,c}};return c}}function Sn(e,t,n,i,o=!1){if(Object(r["o"])(e))return void e.forEach((e,s)=>Sn(e,t&&(Object(r["o"])(t)?t[s]:t),n,i,o));if(Ot(i)&&!o)return;const s=4&i.shapeFlag?Ur(i.component)||i.component.proxy:i.el,a=o?null:s,{i:c,r:u}=e;const l=t&&t.r,d=c.refs===r["b"]?c.refs={}:c.refs,h=c.setupState;if(null!=l&&l!==u&&(Object(r["D"])(l)?(d[l]=null,Object(r["k"])(h,l)&&(h[l]=null)):De(l)&&(l.value=null)),Object(r["p"])(u))Br(u,c,12,[a,d]);else{const t=Object(r["D"])(u),i=De(u);if(t||i){const i=()=>{if(e.f){const n=t?d[u]:u.value;o?Object(r["o"])(n)&&Object(r["K"])(n,s):Object(r["o"])(n)?n.includes(s)||n.push(s):t?d[u]=[s]:(u.value=[s],e.k&&(d[e.k]=u.value))}else t?(d[u]=a,Object(r["k"])(h,u)&&(h[u]=a)):De(u)&&(u.value=a,e.k&&(d[e.k]=a))};a?(i.id=-1,xn(i,n)):i()}else 0}}function An(){}const xn=ct;function jn(e){return Cn(e)}function Cn(e,t){An();const n=Object(r["i"])();n.__VUE__=!0;const{insert:i,remove:o,patchProp:s,createElement:a,createText:c,createComment:u,setText:l,setElementText:d,parentNode:h,nextSibling:f,setScopeId:p=r["d"],cloneNode:m,insertStaticContent:g}=e,v=(e,t,n,r=null,i=null,o=null,s=!1,a=null,c=!!t.dynamicChildren)=>{if(e===t)return;e&&!nr(e,t)&&(r=K(e),H(e,i,o,!0),e=null),-2===t.patchFlag&&(c=!1,t.dynamicChildren=null);const{type:u,ref:l,shapeFlag:d}=t;switch(u){case Hn:b(e,t,n,r);break;case qn:y(e,t,n,r);break;case zn:null==e&&_(t,n,r,s);break;case Bn:N(e,t,n,r,i,o,s,a,c);break;default:1&d?T(e,t,n,r,i,o,s,a,c):6&d?L(e,t,n,r,i,o,s,a,c):(64&d||128&d)&&u.process(e,t,n,r,i,o,s,a,c,X)}null!=l&&i&&Sn(l,e&&e.ref,o,t||e,!t)},b=(e,t,n,r)=>{if(null==e)i(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&l(n,t.children)}},y=(e,t,n,r)=>{null==e?i(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=g(e.children,t,n,r)},O=({el:e,anchor:t},n,r)=>{let o;while(e&&e!==t)o=f(e),i(e,n,r),e=o;i(t,n,r)},E=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=f(e),o(e),e=n;o(t)},T=(e,t,n,r,i,o,s,a,c)=>{s=s||"svg"===t.type,null==e?k(t,n,r,i,o,s,a,c):j(e,t,i,o,s,a,c)},k=(e,t,n,o,c,u,l,h)=>{let f,p;const{type:g,props:v,shapeFlag:b,transition:y,patchFlag:_,dirs:w}=e;if(e.el&&void 0!==m&&-1===_)f=e.el=m(e.el);else{if(f=e.el=a(e.type,u,v&&v.is,v),8&b?d(f,e.children):16&b&&x(e.children,f,null,o,c,u&&"foreignObject"!==g,l,h),w&&En(e,null,o,"created"),v){for(const t in v)"value"===t||Object(r["z"])(t)||s(f,t,null,v[t],u,e.children,o,c,G);"value"in v&&s(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&vr(p,o,e)}A(f,e,e.scopeId,l,o)}w&&En(e,null,o,"beforeMount");const O=(!c||c&&!c.pendingBranch)&&y&&!y.persisted;O&&y.beforeEnter(f),i(f,t,n),((p=v&&v.onVnodeMounted)||O||w)&&xn(()=>{p&&vr(p,o,e),O&&y.enter(f),w&&En(e,null,o,"mounted")},c)},A=(e,t,n,r,i)=>{if(n&&p(e,n),r)for(let o=0;o<r.length;o++)p(e,r[o]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;A(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},x=(e,t,n,r,i,o,s,a,c=0)=>{for(let u=c;u<e.length;u++){const c=e[u]=a?pr(e[u]):fr(e[u]);v(null,c,t,n,r,i,o,s,a)}},j=(e,t,n,i,o,a,c)=>{const u=t.el=e.el;let{patchFlag:l,dynamicChildren:h,dirs:f}=t;l|=16&e.patchFlag;const p=e.props||r["b"],m=t.props||r["b"];let g;n&&Pn(n,!1),(g=m.onVnodeBeforeUpdate)&&vr(g,n,t,e),f&&En(t,e,n,"beforeUpdate"),n&&Pn(n,!0);const v=o&&"foreignObject"!==t.type;if(h?C(e.dynamicChildren,h,u,n,i,v,a):c||U(e,t,u,null,n,i,v,a,!1),l>0){if(16&l)P(u,t,p,m,n,i,o);else if(2&l&&p.class!==m.class&&s(u,"class",null,m.class,o),4&l&&s(u,"style",p.style,m.style,o),8&l){const r=t.dynamicProps;for(let t=0;t<r.length;t++){const a=r[t],c=p[a],l=m[a];l===c&&"value"!==a||s(u,a,c,l,o,e.children,n,i,G)}}1&l&&e.children!==t.children&&d(u,t.children)}else c||null!=h||P(u,t,p,m,n,i,o);((g=m.onVnodeUpdated)||f)&&xn(()=>{g&&vr(g,n,t,e),f&&En(t,e,n,"updated")},i)},C=(e,t,n,r,i,o,s)=>{for(let a=0;a<t.length;a++){const c=e[a],u=t[a],l=c.el&&(c.type===Bn||!nr(c,u)||70&c.shapeFlag)?h(c.el):n;v(c,u,l,null,r,i,o,s,!0)}},P=(e,t,n,i,o,a,c)=>{if(n!==i){for(const u in i){if(Object(r["z"])(u))continue;const l=i[u],d=n[u];l!==d&&"value"!==u&&s(e,u,d,l,c,t.children,o,a,G)}if(n!==r["b"])for(const u in n)Object(r["z"])(u)||u in i||s(e,u,n[u],null,c,t.children,o,a,G);"value"in i&&s(e,"value",n.value,i.value)}},N=(e,t,n,r,o,s,a,u,l)=>{const d=t.el=e?e.el:c(""),h=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:m}=t;m&&(u=u?u.concat(m):m),null==e?(i(d,n,r),i(h,n,r),x(t.children,n,h,o,s,a,u,l)):f>0&&64&f&&p&&e.dynamicChildren?(C(e.dynamicChildren,p,n,o,s,a,u),(null!=t.key||o&&t===o.subTree)&&Nn(e,t,!0)):U(e,t,n,h,o,s,a,u,l)},L=(e,t,n,r,i,o,s,a,c)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,s,c):R(t,n,r,i,o,s,c):D(e,t,c)},R=(e,t,n,r,i,o,s)=>{const a=e.component=Tr(e,r,i);if(Et(e)&&(a.ctx.renderer=X),Nr(a),a.asyncDep){if(i&&i.registerDep(a,M),!e.el){const e=a.subTree=ar(qn);y(null,e,t,n)}}else M(a,e,t,n,i,o,s)},D=(e,t,n)=>{const r=t.component=e.component;if(it(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void F(r,t,n);r.next=t,ui(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},M=(e,t,n,i,o,s,a)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:i,u:c,parent:u,vnode:l}=e,d=n;0,Pn(e,!1),n?(n.el=l.el,F(e,n,a)):n=l,i&&Object(r["n"])(i),(t=n.props&&n.props.onVnodeBeforeUpdate)&&vr(t,u,n,l),Pn(e,!0);const f=tt(e);0;const p=e.subTree;e.subTree=f,v(p,f,h(p.el),K(p),e,o,s),n.el=f.el,null===d&&st(e,f.el),c&&xn(c,o),(t=n.props&&n.props.onVnodeUpdated)&&xn(()=>vr(t,u,n,l),o)}else{let a;const{el:c,props:u}=t,{bm:l,m:d,parent:h}=e,f=Ot(t);if(Pn(e,!1),l&&Object(r["n"])(l),!f&&(a=u&&u.onVnodeBeforeMount)&&vr(a,h,t),Pn(e,!0),c&&Q){const n=()=>{e.subTree=tt(e),Q(c,e.subTree,e,o,null)};f?t.type.__asyncLoader().then(()=>!e.isUnmounted&&n()):n()}else{0;const r=e.subTree=tt(e);0,v(null,r,n,i,e,o,s),t.el=r.el}if(d&&xn(d,o),!f&&(a=u&&u.onVnodeMounted)){const e=t;xn(()=>vr(a,h,e),o)}256&t.shapeFlag&&e.a&&xn(e.a,o),e.isMounted=!0,t=n=i=null}},u=e.effect=new w(c,()=>ai(e.update),e.scope),l=e.update=u.run.bind(u);l.id=e.uid,Pn(e,!0),l()},F=(e,t,n)=>{t.component=e;const r=e.vnode.props;e.vnode=t,e.next=null,an(e,t.props,r,n),wn(e,t.children,n),I(),fi(void 0,e.update),S()},U=(e,t,n,r,i,o,s,a,c=!1)=>{const u=e&&e.children,l=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void $(u,h,n,r,i,o,s,a,c);if(256&f)return void V(u,h,n,r,i,o,s,a,c)}8&p?(16&l&&G(u,i,o),h!==u&&d(n,h)):16&l?16&p?$(u,h,n,r,i,o,s,a,c):G(u,i,o,!0):(8&l&&d(n,""),16&p&&x(h,n,r,i,o,s,a,c))},V=(e,t,n,i,o,s,a,c,u)=>{e=e||r["a"],t=t||r["a"];const l=e.length,d=t.length,h=Math.min(l,d);let f;for(f=0;f<h;f++){const r=t[f]=u?pr(t[f]):fr(t[f]);v(e[f],r,n,null,o,s,a,c,u)}l>d?G(e,o,s,!0,!1,h):x(t,n,i,o,s,a,c,u,h)},$=(e,t,n,i,o,s,a,c,u)=>{let l=0;const d=t.length;let h=e.length-1,f=d-1;while(l<=h&&l<=f){const r=e[l],i=t[l]=u?pr(t[l]):fr(t[l]);if(!nr(r,i))break;v(r,i,n,null,o,s,a,c,u),l++}while(l<=h&&l<=f){const r=e[h],i=t[f]=u?pr(t[f]):fr(t[f]);if(!nr(r,i))break;v(r,i,n,null,o,s,a,c,u),h--,f--}if(l>h){if(l<=f){const e=f+1,r=e<d?t[e].el:i;while(l<=f)v(null,t[l]=u?pr(t[l]):fr(t[l]),n,r,o,s,a,c,u),l++}}else if(l>f)while(l<=h)H(e[l],o,s,!0),l++;else{const p=l,m=l,g=new Map;for(l=m;l<=f;l++){const e=t[l]=u?pr(t[l]):fr(t[l]);null!=e.key&&g.set(e.key,l)}let b,y=0;const _=f-m+1;let w=!1,O=0;const E=new Array(_);for(l=0;l<_;l++)E[l]=0;for(l=p;l<=h;l++){const r=e[l];if(y>=_){H(r,o,s,!0);continue}let i;if(null!=r.key)i=g.get(r.key);else for(b=m;b<=f;b++)if(0===E[b-m]&&nr(r,t[b])){i=b;break}void 0===i?H(r,o,s,!0):(E[i-m]=l+1,i>=O?O=i:w=!0,v(r,t[i],n,null,o,s,a,c,u),y++)}const T=w?Ln(E):r["a"];for(b=T.length-1,l=_-1;l>=0;l--){const e=m+l,r=t[e],h=e+1<d?t[e+1].el:i;0===E[l]?v(null,r,n,h,o,s,a,c,u):w&&(b<0||l!==T[b]?B(r,n,h,2):b--)}}},B=(e,t,n,r,o=null)=>{const{el:s,type:a,transition:c,children:u,shapeFlag:l}=e;if(6&l)return void B(e.component.subTree,t,n,r);if(128&l)return void e.suspense.move(t,n,r);if(64&l)return void a.move(e,t,n,X);if(a===Bn){i(s,t,n);for(let e=0;e<u.length;e++)B(u[e],t,n,r);return void i(e.anchor,t,n)}if(a===zn)return void O(e,t,n);const d=2!==r&&1&l&&c;if(d)if(0===r)c.beforeEnter(s),i(s,t,n),xn(()=>c.enter(s),o);else{const{leave:e,delayLeave:r,afterLeave:o}=c,a=()=>i(s,t,n),u=()=>{e(s,()=>{a(),o&&o()})};r?r(s,a,u):u()}else i(s,t,n)},H=(e,t,n,r=!1,i=!1)=>{const{type:o,props:s,ref:a,children:c,dynamicChildren:u,shapeFlag:l,patchFlag:d,dirs:h}=e;if(null!=a&&Sn(a,null,n,e,!0),256&l)return void t.ctx.deactivate(e);const f=1&l&&h,p=!Ot(e);let m;if(p&&(m=s&&s.onVnodeBeforeUnmount)&&vr(m,t,e),6&l)W(e.component,n,r);else{if(128&l)return void e.suspense.unmount(n,r);f&&En(e,null,t,"beforeUnmount"),64&l?e.type.remove(e,t,n,i,X,r):u&&(o!==Bn||d>0&&64&d)?G(u,t,n,!1,!0):(o===Bn&&384&d||!i&&16&l)&&G(c,t,n),r&&q(e)}(p&&(m=s&&s.onVnodeUnmounted)||f)&&xn(()=>{m&&vr(m,t,e),f&&En(e,null,t,"unmounted")},n)},q=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Bn)return void z(n,r);if(t===zn)return void E(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},z=(e,t)=>{let n;while(e!==t)n=f(e),o(e),e=n;o(t)},W=(e,t,n)=>{const{bum:i,scope:o,update:s,subTree:a,um:c}=e;i&&Object(r["n"])(i),o.stop(),s&&(s.active=!1,H(a,e,t,n)),c&&xn(c,t),xn(()=>{e.isUnmounted=!0},t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},G=(e,t,n,r=!1,i=!1,o=0)=>{for(let s=o;s<e.length;s++)H(e[s],t,n,r,i)},K=e=>6&e.shapeFlag?K(e.component.subTree):128&e.shapeFlag?e.suspense.next():f(e.anchor||e.el),J=(e,t,n)=>{null==e?t._vnode&&H(t._vnode,null,null,!0):v(t._vnode||null,e,t,null,null,null,n),pi(),t._vnode=e},X={p:v,um:H,m:B,r:q,mt:R,mc:x,pc:U,pbc:C,n:K,o:e};let Y,Q;return t&&([Y,Q]=t(X)),{render:J,hydrate:Y,createApp:kn(J,Y)}}function Pn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Nn(e,t,n=!1){const i=e.children,o=t.children;if(Object(r["o"])(i)&&Object(r["o"])(o))for(let r=0;r<i.length;r++){const e=i[r];let t=o[r];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=o[r]=pr(o[r]),t.el=e.el),n||Nn(e,t))}}function Ln(e){const t=e.slice(),n=[0];let r,i,o,s,a;const c=e.length;for(r=0;r<c;r++){const c=e[r];if(0!==c){if(i=n[n.length-1],e[i]<c){t[r]=i,n.push(r);continue}o=0,s=n.length-1;while(o<s)a=o+s>>1,e[n[a]]<c?o=a+1:s=a;c<e[n[o]]&&(o>0&&(t[r]=n[o-1]),n[o]=r)}}o=n.length,s=n[o-1];while(o-- >0)n[o]=s,s=t[s];return n}const Rn=e=>e.__isTeleport;const Dn="components";function Mn(e,t){return Vn(Dn,e,!0,t)||e}const Fn=Symbol();function Un(e){return Object(r["D"])(e)?Vn(Dn,e,!1)||e:e||Fn}function Vn(e,t,n=!0,i=!1){const o=Je||Ir;if(o){const n=o.type;if(e===Dn){const e=Vr(n);if(e&&(e===t||e===Object(r["e"])(t)||e===Object(r["f"])(Object(r["e"])(t))))return n}const s=$n(o[e]||n[e],t)||$n(o.appContext[e],t);return!s&&i?n:s}}function $n(e,t){return e&&(e[t]||e[Object(r["e"])(t)]||e[Object(r["f"])(Object(r["e"])(t))])}const Bn=Symbol(void 0),Hn=Symbol(void 0),qn=Symbol(void 0),zn=Symbol(void 0),Wn=[];let Gn=null;function Kn(e=!1){Wn.push(Gn=e?null:[])}function Jn(){Wn.pop(),Gn=Wn[Wn.length-1]||null}let Xn=1;function Yn(e){Xn+=e}function Qn(e){return e.dynamicChildren=Xn>0?Gn||r["a"]:null,Jn(),Xn>0&&Gn&&Gn.push(e),e}function Zn(e,t,n,r,i,o){return Qn(sr(e,t,n,r,i,o,!0))}function er(e,t,n,r,i){return Qn(ar(e,t,n,r,i,!0))}function tr(e){return!!e&&!0===e.__v_isVNode}function nr(e,t){return e.type===t.type&&e.key===t.key}const rr="__vInternal",ir=({key:e})=>null!=e?e:null,or=({ref:e,ref_key:t,ref_for:n})=>null!=e?Object(r["D"])(e)||De(e)||Object(r["p"])(e)?{i:Je,r:e,k:t,f:!!n}:e:null;function sr(e,t=null,n=null,i=0,o=null,s=(e===Bn?0:1),a=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ir(t),ref:t&&or(t),scopeId:Xe,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null};return c?(mr(u,n),128&s&&e.normalize(u)):n&&(u.shapeFlag|=Object(r["D"])(n)?8:16),Xn>0&&!a&&Gn&&(u.patchFlag>0||6&s)&&32!==u.patchFlag&&Gn.push(u),u}const ar=cr;function cr(e,t=null,n=null,i=0,o=null,s=!1){if(e&&e!==Fn||(e=qn),tr(e)){const r=lr(e,t,!0);return n&&mr(r,n),r}if($r(e)&&(e=e.__vccOpts),t){t=ur(t);let{class:e,style:n}=t;e&&!Object(r["D"])(e)&&(t.class=Object(r["I"])(e)),Object(r["v"])(n)&&(xe(n)&&!Object(r["o"])(n)&&(n=Object(r["h"])({},n)),t.style=Object(r["J"])(n))}const a=Object(r["D"])(e)?1:at(e)?128:Rn(e)?64:Object(r["v"])(e)?4:Object(r["p"])(e)?2:0;return sr(e,t,n,i,o,a,s,!0)}function ur(e){return e?xe(e)||rr in e?Object(r["h"])({},e):e:null}function lr(e,t,n=!1){const{props:i,ref:o,patchFlag:s,children:a}=e,c=t?gr(i||{},t):i,u={__v_isVNode:!0,__v_skip:!0,type:e.type,props:c,key:c&&ir(c),ref:t&&t.ref?n&&o?Object(r["o"])(o)?o.concat(or(t)):[o,or(t)]:or(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Bn?-1===s?16:16|s:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&lr(e.ssContent),ssFallback:e.ssFallback&&lr(e.ssFallback),el:e.el,anchor:e.anchor};return u}function dr(e=" ",t=0){return ar(Hn,null,e,t)}function hr(e="",t=!1){return t?(Kn(),er(qn,null,e)):ar(qn,null,e)}function fr(e){return null==e||"boolean"===typeof e?ar(qn):Object(r["o"])(e)?ar(Bn,null,e.slice()):"object"===typeof e?pr(e):ar(Hn,null,String(e))}function pr(e){return null===e.el||e.memo?e:lr(e)}function mr(e,t){let n=0;const{shapeFlag:i}=e;if(null==t)t=null;else if(Object(r["o"])(t))n=16;else if("object"===typeof t){if(65&i){const n=t.default;return void(n&&(n._c&&(n._d=!1),mr(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||rr in t?3===r&&Je&&(1===Je.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Je}}else Object(r["p"])(t)?(t={default:t,_ctx:Je},n=32):(t=String(t),64&i?(n=16,t=[dr(t)]):n=8);e.children=t,e.shapeFlag|=n}function gr(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const e in i)if("class"===e)t.class!==i.class&&(t.class=Object(r["I"])([t.class,i.class]));else if("style"===e)t.style=Object(r["J"])([t.style,i.style]);else if(Object(r["w"])(e)){const n=t[e],o=i[e];n===o||Object(r["o"])(n)&&n.includes(o)||(t[e]=n?[].concat(n,o):o)}else""!==e&&(t[e]=i[e])}return t}function vr(e,t,n,r=null){Hr(e,t,7,[n,r])}function br(e,t,n,i){let o;const s=n&&n[i];if(Object(r["o"])(e)||Object(r["D"])(e)){o=new Array(e.length);for(let n=0,r=e.length;n<r;n++)o[n]=t(e[n],n,void 0,s&&s[n])}else if("number"===typeof e){0,o=new Array(e);for(let n=0;n<e;n++)o[n]=t(n+1,n,void 0,s&&s[n])}else if(Object(r["v"])(e))if(e[Symbol.iterator])o=Array.from(e,(e,n)=>t(e,n,void 0,s&&s[n]));else{const n=Object.keys(e);o=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];o[r]=t(e[i],i,r,s&&s[r])}}else o=[];return n&&(n[i]=o),o}const yr=e=>e?xr(e)?Ur(e)||e.proxy:yr(e.parent):null,_r=Object(r["h"])(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>yr(e.parent),$root:e=>yr(e.root),$emit:e=>e.emit,$options:e=>Xt(e),$forceUpdate:e=>()=>ai(e.update),$nextTick:e=>oi.bind(e.proxy),$watch:e=>_i.bind(e)}),wr={get({_:e},t){const{ctx:n,setupState:i,data:o,props:s,accessCache:a,type:c,appContext:u}=e;let l;if("$"!==t[0]){const c=a[t];if(void 0!==c)switch(c){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return s[t]}else{if(i!==r["b"]&&Object(r["k"])(i,t))return a[t]=1,i[t];if(o!==r["b"]&&Object(r["k"])(o,t))return a[t]=2,o[t];if((l=e.propsOptions[0])&&Object(r["k"])(l,t))return a[t]=3,s[t];if(n!==r["b"]&&Object(r["k"])(n,t))return a[t]=4,n[t];zt&&(a[t]=0)}}const d=_r[t];let h,f;return d?("$attrs"===t&&A(e,"get",t),d(e)):(h=c.__cssModules)&&(h=h[t])?h:n!==r["b"]&&Object(r["k"])(n,t)?(a[t]=4,n[t]):(f=u.config.globalProperties,Object(r["k"])(f,t)?f[t]:void 0)},set({_:e},t,n){const{data:i,setupState:o,ctx:s}=e;if(o!==r["b"]&&Object(r["k"])(o,t))o[t]=n;else if(i!==r["b"]&&Object(r["k"])(i,t))i[t]=n;else if(Object(r["k"])(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:s}},a){let c;return!!n[a]||e!==r["b"]&&Object(r["k"])(e,a)||t!==r["b"]&&Object(r["k"])(t,a)||(c=s[0])&&Object(r["k"])(c,a)||Object(r["k"])(i,a)||Object(r["k"])(_r,a)||Object(r["k"])(o.config.globalProperties,a)}};const Or=Tn();let Er=0;function Tr(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||Or,a={uid:Er++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new s(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:ln(i,o),emitsOptions:Ge(i,o),emit:null,emitted:null,propsDefaults:r["b"],inheritAttrs:i.inheritAttrs,ctx:r["b"],data:r["b"],props:r["b"],attrs:r["b"],slots:r["b"],refs:r["b"],setupState:r["b"],setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=We.bind(null,a),e.ce&&e.ce(a),a}let Ir=null;const kr=()=>Ir||Je,Sr=e=>{Ir=e,e.scope.on()},Ar=()=>{Ir&&Ir.scope.off(),Ir=null};function xr(e){return 4&e.vnode.shapeFlag}let jr,Cr,Pr=!1;function Nr(e,t=!1){Pr=t;const{props:n,children:r}=e.vnode,i=xr(e);sn(e,n,i,t),_n(e,r);const o=i?Lr(e,t):void 0;return Pr=!1,o}function Lr(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ce(new Proxy(e.ctx,wr));const{setup:i}=n;if(i){const n=e.setupContext=i.length>1?Fr(e):null;Sr(e),I();const o=Br(i,e,0,[e.props,n]);if(S(),Ar(),Object(r["y"])(o)){if(o.then(Ar,Ar),t)return o.then(n=>{Rr(e,n,t)}).catch(t=>{qr(t,e,0)});e.asyncDep=o}else Rr(e,o,t)}else Dr(e,t)}function Rr(e,t,n){Object(r["p"])(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:Object(r["v"])(t)&&(e.setupState=He(t)),Dr(e,n)}function Dr(e,t,n){const i=e.type;if(!e.render){if(!t&&jr&&!i.render){const t=i.template;if(t){0;const{isCustomElement:n,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,c=Object(r["h"])(Object(r["h"])({isCustomElement:n,delimiters:s},o),a);i.render=jr(t,c)}}e.render=i.render||r["d"],Cr&&Cr(e)}Sr(e),I(),Wt(e),S(),Ar()}function Mr(e){return new Proxy(e.attrs,{get(t,n){return A(e,"get","$attrs"),t[n]}})}function Fr(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Mr(e))},slots:e.slots,emit:e.emit,expose:t}}function Ur(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(He(Ce(e.exposed)),{get(t,n){return n in t?t[n]:n in _r?_r[n](e):void 0}}))}function Vr(e){return Object(r["p"])(e)&&e.displayName||e.name}function $r(e){return Object(r["p"])(e)&&"__vccOpts"in e}function Br(e,t,n,r){let i;try{i=r?e(...r):e()}catch(o){qr(o,t,n)}return i}function Hr(e,t,n,i){if(Object(r["p"])(e)){const o=Br(e,t,n,i);return o&&Object(r["y"])(o)&&o.catch(e=>{qr(e,t,n)}),o}const o=[];for(let r=0;r<e.length;r++)o.push(Hr(e[r],t,n,i));return o}function qr(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const s=t.appContext.config.errorHandler;if(s)return void Br(s,null,10,[e,i,o])}zr(e,n,i,r)}function zr(e,t,n,r=!0){console.error(e)}let Wr=!1,Gr=!1;const Kr=[];let Jr=0;const Xr=[];let Yr=null,Qr=0;const Zr=[];let ei=null,ti=0;const ni=Promise.resolve();let ri=null,ii=null;function oi(e){const t=ri||ni;return e?t.then(this?e.bind(this):e):t}function si(e){let t=Jr+1,n=Kr.length;while(t<n){const r=t+n>>>1,i=mi(Kr[r]);i<e?t=r+1:n=r}return t}function ai(e){Kr.length&&Kr.includes(e,Wr&&e.allowRecurse?Jr+1:Jr)||e===ii||(null==e.id?Kr.push(e):Kr.splice(si(e.id),0,e),ci())}function ci(){Wr||Gr||(Gr=!0,ri=ni.then(gi))}function ui(e){const t=Kr.indexOf(e);t>Jr&&Kr.splice(t,1)}function li(e,t,n,i){Object(r["o"])(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?i+1:i)||n.push(e),ci()}function di(e){li(e,Yr,Xr,Qr)}function hi(e){li(e,ei,Zr,ti)}function fi(e,t=null){if(Xr.length){for(ii=t,Yr=[...new Set(Xr)],Xr.length=0,Qr=0;Qr<Yr.length;Qr++)Yr[Qr]();Yr=null,Qr=0,ii=null,fi(e,t)}}function pi(e){if(Zr.length){const e=[...new Set(Zr)];if(Zr.length=0,ei)return void ei.push(...e);for(ei=e,ei.sort((e,t)=>mi(e)-mi(t)),ti=0;ti<ei.length;ti++)ei[ti]();ei=null,ti=0}}const mi=e=>null==e.id?1/0:e.id;function gi(e){Gr=!1,Wr=!0,fi(e),Kr.sort((e,t)=>mi(e)-mi(t));r["d"];try{for(Jr=0;Jr<Kr.length;Jr++){const e=Kr[Jr];e&&!1!==e.active&&Br(e,null,14)}}finally{Jr=0,Kr.length=0,pi(e),Wr=!1,ri=null,(Kr.length||Xr.length||Zr.length)&&gi(e)}}const vi={};function bi(e,t,n){return yi(e,t,n)}function yi(e,t,{immediate:n,deep:i,flush:o,onTrack:s,onTrigger:a}=r["b"]){const c=Ir;let u,l,d=!1,h=!1;if(De(e)?(u=()=>e.value,d=!!e._shallow):Se(e)?(u=()=>e,i=!0):Object(r["o"])(e)?(h=!0,d=e.some(Se),u=()=>e.map(e=>De(e)?e.value:Se(e)?Oi(e):Object(r["p"])(e)?Br(e,c,2):void 0)):u=Object(r["p"])(e)?t?()=>Br(e,c,2):()=>{if(!c||!c.isUnmounted)return l&&l(),Hr(e,c,3,[f])}:r["d"],t&&i){const e=u;u=()=>Oi(e())}let f=e=>{l=v.onStop=()=>{Br(e,c,4)}};if(Pr)return f=r["d"],t?n&&Hr(t,c,3,[u(),h?[]:void 0,f]):u(),r["d"];let p=h?[]:vi;const m=()=>{if(v.active)if(t){const e=v.run();(i||d||(h?e.some((e,t)=>Object(r["j"])(e,p[t])):Object(r["j"])(e,p)))&&(l&&l(),Hr(t,c,3,[e,p===vi?void 0:p,f]),p=e)}else v.run()};let g;m.allowRecurse=!!t,g="sync"===o?m:"post"===o?()=>xn(m,c&&c.suspense):()=>{!c||c.isMounted?di(m):m()};const v=new w(u,g);return t?n?m():p=v.run():"post"===o?xn(v.run.bind(v),c&&c.suspense):v.run(),()=>{v.stop(),c&&c.scope&&Object(r["K"])(c.scope.effects,v)}}function _i(e,t,n){const i=this.proxy,o=Object(r["D"])(e)?e.includes(".")?wi(i,e):()=>i[e]:e.bind(i,i);let s;Object(r["p"])(t)?s=t:(s=t.handler,n=t);const a=Ir;Sr(this);const c=yi(o,s.bind(i),n);return a?Sr(a):Ar(),c}function wi(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Oi(e,t){if(!Object(r["v"])(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),De(e))Oi(e.value,t);else if(Object(r["o"])(e))for(let n=0;n<e.length;n++)Oi(e[n],t);else if(Object(r["B"])(e)||Object(r["t"])(e))e.forEach(e=>{Oi(e,t)});else if(Object(r["x"])(e))for(const n in e)Oi(e[n],t);return e}function Ei(e,t,n){const i=arguments.length;return 2===i?Object(r["v"])(t)&&!Object(r["o"])(t)?tr(t)?ar(e,null,[t]):ar(e,t):ar(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):3===i&&tr(n)&&(n=[n]),ar(e,t,n))}Symbol("");const Ti="3.2.26",Ii="http://www.w3.org/2000/svg",ki="undefined"!==typeof document?document:null,Si=new Map,Ai={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?ki.createElementNS(Ii,e):ki.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>ki.createTextNode(e),createComment:e=>ki.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ki.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let o=Si.get(e);if(!o){const t=ki.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,o=t.content,r){const e=o.firstChild;while(e.firstChild)o.appendChild(e.firstChild);o.removeChild(e)}Si.set(e,o)}return t.insertBefore(o.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function xi(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function ji(e,t,n){const i=e.style,o=Object(r["D"])(n);if(n&&!o){for(const e in n)Pi(i,e,n[e]);if(t&&!Object(r["D"])(t))for(const e in t)null==n[e]&&Pi(i,e,"")}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const Ci=/\s*!important$/;function Pi(e,t,n){if(Object(r["o"])(n))n.forEach(n=>Pi(e,t,n));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=Ri(e,t);Ci.test(n)?e.setProperty(Object(r["l"])(i),n.replace(Ci,""),"important"):e[i]=n}}const Ni=["Webkit","Moz","ms"],Li={};function Ri(e,t){const n=Li[t];if(n)return n;let i=Object(r["e"])(t);if("filter"!==i&&i in e)return Li[t]=i;i=Object(r["f"])(i);for(let r=0;r<Ni.length;r++){const n=Ni[r]+i;if(n in e)return Li[t]=n}return t}const Di="http://www.w3.org/1999/xlink";function Mi(e,t,n,i,o){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(Di,t.slice(6,t.length)):e.setAttributeNS(Di,t,n);else{const i=Object(r["C"])(t);null==n||i&&!Object(r["m"])(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function Fi(e,t,n,i,o,s,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,o,s),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=Object(r["m"])(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(c){}return void e.removeAttribute(t)}}try{e[t]=n}catch(u){0}}let Ui=Date.now,Vi=!1;if("undefined"!==typeof window){Ui()>document.createEvent("Event").timeStamp&&(Ui=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);Vi=!!(e&&Number(e[1])<=53)}let $i=0;const Bi=Promise.resolve(),Hi=()=>{$i=0},qi=()=>$i||(Bi.then(Hi),$i=Ui());function zi(e,t,n,r){e.addEventListener(t,n,r)}function Wi(e,t,n,r){e.removeEventListener(t,n,r)}function Gi(e,t,n,r,i=null){const o=e._vei||(e._vei={}),s=o[t];if(r&&s)s.value=r;else{const[n,a]=Ji(t);if(r){const s=o[t]=Xi(r,i);zi(e,n,s,a)}else s&&(Wi(e,n,s,a),o[t]=void 0)}}const Ki=/(?:Once|Passive|Capture)$/;function Ji(e){let t;if(Ki.test(e)){let n;t={};while(n=e.match(Ki))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[Object(r["l"])(e.slice(2)),t]}function Xi(e,t){const n=e=>{const r=e.timeStamp||Ui();(Vi||r>=n.attached-1)&&Hr(Yi(e,n.value),t,5,[e])};return n.value=e,n.attached=qi(),n}function Yi(e,t){if(Object(r["o"])(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(e=>t=>!t._stopped&&e(t))}return t}const Qi=/^on[a-z]/,Zi=(e,t,n,i,o=!1,s,a,c,u)=>{"class"===t?xi(e,i,o):"style"===t?ji(e,n,i):Object(r["w"])(t)?Object(r["u"])(t)||Gi(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):eo(e,t,i,o))?Fi(e,t,i,s,a,c,u):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),Mi(e,t,i,o))};function eo(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&Qi.test(t)&&Object(r["p"])(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!Qi.test(t)||!Object(r["D"])(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const to="transition",no="animation",ro=(e,{slots:t})=>Ei(pt,ao(e),t);ro.displayName="Transition";const io={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},oo=(ro.props=Object(r["h"])({},pt.props,io),(e,t=[])=>{Object(r["o"])(e)?e.forEach(e=>e(...t)):e&&e(...t)}),so=e=>!!e&&(Object(r["o"])(e)?e.some(e=>e.length>1):e.length>1);function ao(e){const t={};for(const r in e)r in io||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:o,enterFromClass:s=n+"-enter-from",enterActiveClass:a=n+"-enter-active",enterToClass:c=n+"-enter-to",appearFromClass:u=s,appearActiveClass:l=a,appearToClass:d=c,leaveFromClass:h=n+"-leave-from",leaveActiveClass:f=n+"-leave-active",leaveToClass:p=n+"-leave-to"}=e,m=co(o),g=m&&m[0],v=m&&m[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:_,onLeave:w,onLeaveCancelled:O,onBeforeAppear:E=b,onAppear:T=y,onAppearCancelled:I=_}=t,k=(e,t,n)=>{ho(e,t?d:c),ho(e,t?l:a),n&&n()},S=(e,t)=>{ho(e,p),ho(e,f),t&&t()},A=e=>(t,n)=>{const r=e?T:y,o=()=>k(t,e,n);oo(r,[t,o]),fo(()=>{ho(t,e?u:s),lo(t,e?d:c),so(r)||mo(t,i,g,o)})};return Object(r["h"])(t,{onBeforeEnter(e){oo(b,[e]),lo(e,s),lo(e,a)},onBeforeAppear(e){oo(E,[e]),lo(e,u),lo(e,l)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>S(e,t);lo(e,h),yo(),lo(e,f),fo(()=>{ho(e,h),lo(e,p),so(w)||mo(e,i,v,n)}),oo(w,[e,n])},onEnterCancelled(e){k(e,!1),oo(_,[e])},onAppearCancelled(e){k(e,!0),oo(I,[e])},onLeaveCancelled(e){S(e),oo(O,[e])}})}function co(e){if(null==e)return null;if(Object(r["v"])(e))return[uo(e.enter),uo(e.leave)];{const t=uo(e);return[t,t]}}function uo(e){const t=Object(r["N"])(e);return t}function lo(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.add(t)),(e._vtc||(e._vtc=new Set)).add(t)}function ho(e,t){t.split(/\s+/).forEach(t=>t&&e.classList.remove(t));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function fo(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let po=0;function mo(e,t,n,r){const i=e._endId=++po,o=()=>{i===e._endId&&r()};if(n)return setTimeout(o,n);const{type:s,timeout:a,propCount:c}=go(e,t);if(!s)return r();const u=s+"end";let l=0;const d=()=>{e.removeEventListener(u,h),o()},h=t=>{t.target===e&&++l>=c&&d()};setTimeout(()=>{l<c&&d()},a+1),e.addEventListener(u,h)}function go(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(to+"Delay"),o=r(to+"Duration"),s=vo(i,o),a=r(no+"Delay"),c=r(no+"Duration"),u=vo(a,c);let l=null,d=0,h=0;t===to?s>0&&(l=to,d=s,h=o.length):t===no?u>0&&(l=no,d=u,h=c.length):(d=Math.max(s,u),l=d>0?s>u?to:no:null,h=l?l===to?o.length:c.length:0);const f=l===to&&/\b(transform|all)(,|$)/.test(n[to+"Property"]);return{type:l,timeout:d,propCount:h,hasTransform:f}}function vo(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map((t,n)=>bo(t)+bo(e[n])))}function bo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function yo(){return document.body.offsetHeight}new WeakMap,new WeakMap;const _o=e=>{const t=e.props["onUpdate:modelValue"];return Object(r["o"])(t)?e=>Object(r["n"])(t,e):t};function wo(e){e.target.composing=!0}function Oo(e){const t=e.target;t.composing&&(t.composing=!1,Eo(t,"input"))}function Eo(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}const To={created(e,{modifiers:{lazy:t,trim:n,number:i}},o){e._assign=_o(o);const s=i||o.props&&"number"===o.props.type;zi(e,t?"change":"input",t=>{if(t.target.composing)return;let i=e.value;n?i=i.trim():s&&(i=Object(r["N"])(i)),e._assign(i)}),n&&zi(e,"change",()=>{e.value=e.value.trim()}),t||(zi(e,"compositionstart",wo),zi(e,"compositionend",Oo),zi(e,"change",Oo))},mounted(e,{value:t}){e.value=null==t?"":t},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:i,number:o}},s){if(e._assign=_o(s),e.composing)return;if(document.activeElement===e){if(n)return;if(i&&e.value.trim()===t)return;if((o||"number"===e.type)&&Object(r["N"])(e.value)===t)return}const a=null==t?"":t;e.value!==a&&(e.value=a)}},Io={deep:!0,created(e,t,n){e._assign=_o(n),zi(e,"change",()=>{const t=e._modelValue,n=So(e),i=e.checked,o=e._assign;if(Object(r["o"])(t)){const e=Object(r["G"])(t,n),s=-1!==e;if(i&&!s)o(t.concat(n));else if(!i&&s){const n=[...t];n.splice(e,1),o(n)}}else if(Object(r["B"])(t)){const e=new Set(t);i?e.add(n):e.delete(n),o(e)}else o(Ao(e,i))})},mounted:ko,beforeUpdate(e,t,n){e._assign=_o(n),ko(e,t,n)}};function ko(e,{value:t,oldValue:n},i){e._modelValue=t,Object(r["o"])(t)?e.checked=Object(r["G"])(t,i.props.value)>-1:Object(r["B"])(t)?e.checked=t.has(i.props.value):t!==n&&(e.checked=Object(r["F"])(t,Ao(e,!0)))}function So(e){return"_value"in e?e._value:e.value}function Ao(e,t){const n=t?"_trueValue":"_falseValue";return n in e?e[n]:t}const xo=["ctrl","shift","alt","meta"],jo={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&0!==e.button,middle:e=>"button"in e&&1!==e.button,right:e=>"button"in e&&2!==e.button,exact:(e,t)=>xo.some(n=>e[n+"Key"]&&!t.includes(n))},Co=(e,t)=>(n,...r)=>{for(let e=0;e<t.length;e++){const r=jo[t[e]];if(r&&r(n,t))return}return e(n,...r)};const Po=Object(r["h"])({patchProp:Zi},Ai);let No;function Lo(){return No||(No=jn(Po))}const Ro=(...e)=>{const t=Lo().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=Do(e);if(!i)return;const o=t._component;Object(r["p"])(o)||o.render||o.template||(o.template=i.innerHTML),i.innerHTML="";const s=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),s},t};function Do(e){if(Object(r["D"])(e)){const t=document.querySelector(e);return t}return e}},"7b0b":function(e,t,n){var r=n("da84"),i=n("1d80"),o=r.Object;e.exports=function(e){return o(i(e))}},"7b17":function(e,t,n){"use strict";var r={};n.r(r),n.d(r,"top",(function(){return i})),n.d(r,"bottom",(function(){return o})),n.d(r,"right",(function(){return s})),n.d(r,"left",(function(){return a})),n.d(r,"auto",(function(){return c})),n.d(r,"basePlacements",(function(){return u})),n.d(r,"start",(function(){return l})),n.d(r,"end",(function(){return d})),n.d(r,"clippingParents",(function(){return h})),n.d(r,"viewport",(function(){return f})),n.d(r,"popper",(function(){return p})),n.d(r,"reference",(function(){return m})),n.d(r,"variationPlacements",(function(){return g})),n.d(r,"placements",(function(){return v})),n.d(r,"beforeRead",(function(){return b})),n.d(r,"read",(function(){return y})),n.d(r,"afterRead",(function(){return _})),n.d(r,"beforeMain",(function(){return w})),n.d(r,"main",(function(){return O})),n.d(r,"afterMain",(function(){return E})),n.d(r,"beforeWrite",(function(){return T})),n.d(r,"write",(function(){return I})),n.d(r,"afterWrite",(function(){return k})),n.d(r,"modifierPhases",(function(){return S})),n.d(r,"applyStyles",(function(){return R})),n.d(r,"arrow",(function(){return oe})),n.d(r,"computeStyles",(function(){return de})),n.d(r,"eventListeners",(function(){return pe})),n.d(r,"flip",(function(){return De})),n.d(r,"hide",(function(){return Ve})),n.d(r,"offset",(function(){return He})),n.d(r,"popperOffsets",(function(){return ze})),n.d(r,"preventOverflow",(function(){return Ke})),n.d(r,"popperGenerator",(function(){return ot})),n.d(r,"detectOverflow",(function(){return Pe})),n.d(r,"createPopperBase",(function(){return st})),n.d(r,"createPopper",(function(){return ct})),n.d(r,"createPopperLite",(function(){return lt}));var i="top",o="bottom",s="right",a="left",c="auto",u=[i,o,s,a],l="start",d="end",h="clippingParents",f="viewport",p="popper",m="reference",g=u.reduce((function(e,t){return e.concat([t+"-"+l,t+"-"+d])}),[]),v=[].concat(u,[c]).reduce((function(e,t){return e.concat([t,t+"-"+l,t+"-"+d])}),[]),b="beforeRead",y="read",_="afterRead",w="beforeMain",O="main",E="afterMain",T="beforeWrite",I="write",k="afterWrite",S=[b,y,_,w,O,E,T,I,k];function A(e){return e?(e.nodeName||"").toLowerCase():null}function x(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function j(e){var t=x(e).Element;return e instanceof t||e instanceof Element}function C(e){var t=x(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function P(e){if("undefined"===typeof ShadowRoot)return!1;var t=x(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function N(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var n=t.styles[e]||{},r=t.attributes[e]||{},i=t.elements[e];C(i)&&A(i)&&(Object.assign(i.style,n),Object.keys(r).forEach((function(e){var t=r[e];!1===t?i.removeAttribute(e):i.setAttribute(e,!0===t?"":t)})))}))}function L(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach((function(e){var r=t.elements[e],i=t.attributes[e]||{},o=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:n[e]),s=o.reduce((function(e,t){return e[t]="",e}),{});C(r)&&A(r)&&(Object.assign(r.style,s),Object.keys(i).forEach((function(e){r.removeAttribute(e)})))}))}}var R={name:"applyStyles",enabled:!0,phase:"write",fn:N,effect:L,requires:["computeStyles"]};function D(e){return e.split("-")[0]}var M=Math.max,F=Math.min,U=Math.round;function V(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,i=1;if(C(e)&&t){var o=e.offsetHeight,s=e.offsetWidth;s>0&&(r=U(n.width)/s||1),o>0&&(i=U(n.height)/o||1)}return{width:n.width/r,height:n.height/i,top:n.top/i,right:n.right/r,bottom:n.bottom/i,left:n.left/r,x:n.left/r,y:n.top/i}}function $(e){var t=V(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function B(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&P(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function H(e){return x(e).getComputedStyle(e)}function q(e){return["table","td","th"].indexOf(A(e))>=0}function z(e){return((j(e)?e.ownerDocument:e.document)||window.document).documentElement}function W(e){return"html"===A(e)?e:e.assignedSlot||e.parentNode||(P(e)?e.host:null)||z(e)}function G(e){return C(e)&&"fixed"!==H(e).position?e.offsetParent:null}function K(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox"),n=-1!==navigator.userAgent.indexOf("Trident");if(n&&C(e)){var r=H(e);if("fixed"===r.position)return null}var i=W(e);while(C(i)&&["html","body"].indexOf(A(i))<0){var o=H(i);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||t&&"filter"===o.willChange||t&&o.filter&&"none"!==o.filter)return i;i=i.parentNode}return null}function J(e){var t=x(e),n=G(e);while(n&&q(n)&&"static"===H(n).position)n=G(n);return n&&("html"===A(n)||"body"===A(n)&&"static"===H(n).position)?t:n||K(e)||t}function X(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Y(e,t,n){return M(e,F(t,n))}function Q(e,t,n){var r=Y(e,t,n);return r>n?n:r}function Z(){return{top:0,right:0,bottom:0,left:0}}function ee(e){return Object.assign({},Z(),e)}function te(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var ne=function(e,t){return e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e,ee("number"!==typeof e?e:te(e,u))};function re(e){var t,n=e.state,r=e.name,c=e.options,u=n.elements.arrow,l=n.modifiersData.popperOffsets,d=D(n.placement),h=X(d),f=[a,s].indexOf(d)>=0,p=f?"height":"width";if(u&&l){var m=ne(c.padding,n),g=$(u),v="y"===h?i:a,b="y"===h?o:s,y=n.rects.reference[p]+n.rects.reference[h]-l[h]-n.rects.popper[p],_=l[h]-n.rects.reference[h],w=J(u),O=w?"y"===h?w.clientHeight||0:w.clientWidth||0:0,E=y/2-_/2,T=m[v],I=O-g[p]-m[b],k=O/2-g[p]/2+E,S=Y(T,k,I),A=h;n.modifiersData[r]=(t={},t[A]=S,t.centerOffset=S-k,t)}}function ie(e){var t=e.state,n=e.options,r=n.element,i=void 0===r?"[data-popper-arrow]":r;null!=i&&("string"!==typeof i||(i=t.elements.popper.querySelector(i),i))&&B(t.elements.popper,i)&&(t.elements.arrow=i)}var oe={name:"arrow",enabled:!0,phase:"main",fn:re,effect:ie,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function se(e){return e.split("-")[1]}var ae={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ce(e){var t=e.x,n=e.y,r=window,i=r.devicePixelRatio||1;return{x:U(t*i)/i||0,y:U(n*i)/i||0}}function ue(e){var t,n=e.popper,r=e.popperRect,c=e.placement,u=e.variation,l=e.offsets,h=e.position,f=e.gpuAcceleration,p=e.adaptive,m=e.roundOffsets,g=e.isFixed,v=l.x,b=void 0===v?0:v,y=l.y,_=void 0===y?0:y,w="function"===typeof m?m({x:b,y:_}):{x:b,y:_};b=w.x,_=w.y;var O=l.hasOwnProperty("x"),E=l.hasOwnProperty("y"),T=a,I=i,k=window;if(p){var S=J(n),A="clientHeight",j="clientWidth";if(S===x(n)&&(S=z(n),"static"!==H(S).position&&"absolute"===h&&(A="scrollHeight",j="scrollWidth")),S=S,c===i||(c===a||c===s)&&u===d){I=o;var C=g&&k.visualViewport?k.visualViewport.height:S[A];_-=C-r.height,_*=f?1:-1}if(c===a||(c===i||c===o)&&u===d){T=s;var P=g&&k.visualViewport?k.visualViewport.width:S[j];b-=P-r.width,b*=f?1:-1}}var N,L=Object.assign({position:h},p&&ae),R=!0===m?ce({x:b,y:_}):{x:b,y:_};return b=R.x,_=R.y,f?Object.assign({},L,(N={},N[I]=E?"0":"",N[T]=O?"0":"",N.transform=(k.devicePixelRatio||1)<=1?"translate("+b+"px, "+_+"px)":"translate3d("+b+"px, "+_+"px, 0)",N)):Object.assign({},L,(t={},t[I]=E?_+"px":"",t[T]=O?b+"px":"",t.transform="",t))}function le(e){var t=e.state,n=e.options,r=n.gpuAcceleration,i=void 0===r||r,o=n.adaptive,s=void 0===o||o,a=n.roundOffsets,c=void 0===a||a,u={placement:D(t.placement),variation:se(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:i,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ue(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:s,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ue(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var de={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:le,data:{}},he={passive:!0};function fe(e){var t=e.state,n=e.instance,r=e.options,i=r.scroll,o=void 0===i||i,s=r.resize,a=void 0===s||s,c=x(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return o&&u.forEach((function(e){e.addEventListener("scroll",n.update,he)})),a&&c.addEventListener("resize",n.update,he),function(){o&&u.forEach((function(e){e.removeEventListener("scroll",n.update,he)})),a&&c.removeEventListener("resize",n.update,he)}}var pe={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:fe,data:{}},me={left:"right",right:"left",bottom:"top",top:"bottom"};function ge(e){return e.replace(/left|right|bottom|top/g,(function(e){return me[e]}))}var ve={start:"end",end:"start"};function be(e){return e.replace(/start|end/g,(function(e){return ve[e]}))}function ye(e){var t=x(e),n=t.pageXOffset,r=t.pageYOffset;return{scrollLeft:n,scrollTop:r}}function _e(e){return V(z(e)).left+ye(e).scrollLeft}function we(e){var t=x(e),n=z(e),r=t.visualViewport,i=n.clientWidth,o=n.clientHeight,s=0,a=0;return r&&(i=r.width,o=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=r.offsetLeft,a=r.offsetTop)),{width:i,height:o,x:s+_e(e),y:a}}function Oe(e){var t,n=z(e),r=ye(e),i=null==(t=e.ownerDocument)?void 0:t.body,o=M(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=M(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-r.scrollLeft+_e(e),c=-r.scrollTop;return"rtl"===H(i||n).direction&&(a+=M(n.clientWidth,i?i.clientWidth:0)-o),{width:o,height:s,x:a,y:c}}function Ee(e){var t=H(e),n=t.overflow,r=t.overflowX,i=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+r)}function Te(e){return["html","body","#document"].indexOf(A(e))>=0?e.ownerDocument.body:C(e)&&Ee(e)?e:Te(W(e))}function Ie(e,t){var n;void 0===t&&(t=[]);var r=Te(e),i=r===(null==(n=e.ownerDocument)?void 0:n.body),o=x(r),s=i?[o].concat(o.visualViewport||[],Ee(r)?r:[]):r,a=t.concat(s);return i?a:a.concat(Ie(W(s)))}function ke(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Se(e){var t=V(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}function Ae(e,t){return t===f?ke(we(e)):j(t)?Se(t):ke(Oe(z(e)))}function xe(e){var t=Ie(W(e)),n=["absolute","fixed"].indexOf(H(e).position)>=0,r=n&&C(e)?J(e):e;return j(r)?t.filter((function(e){return j(e)&&B(e,r)&&"body"!==A(e)})):[]}function je(e,t,n){var r="clippingParents"===t?xe(e):[].concat(t),i=[].concat(r,[n]),o=i[0],s=i.reduce((function(t,n){var r=Ae(e,n);return t.top=M(r.top,t.top),t.right=F(r.right,t.right),t.bottom=F(r.bottom,t.bottom),t.left=M(r.left,t.left),t}),Ae(e,o));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Ce(e){var t,n=e.reference,r=e.element,c=e.placement,u=c?D(c):null,h=c?se(c):null,f=n.x+n.width/2-r.width/2,p=n.y+n.height/2-r.height/2;switch(u){case i:t={x:f,y:n.y-r.height};break;case o:t={x:f,y:n.y+n.height};break;case s:t={x:n.x+n.width,y:p};break;case a:t={x:n.x-r.width,y:p};break;default:t={x:n.x,y:n.y}}var m=u?X(u):null;if(null!=m){var g="y"===m?"height":"width";switch(h){case l:t[m]=t[m]-(n[g]/2-r[g]/2);break;case d:t[m]=t[m]+(n[g]/2-r[g]/2);break;default:}}return t}function Pe(e,t){void 0===t&&(t={});var n=t,r=n.placement,a=void 0===r?e.placement:r,c=n.boundary,l=void 0===c?h:c,d=n.rootBoundary,g=void 0===d?f:d,v=n.elementContext,b=void 0===v?p:v,y=n.altBoundary,_=void 0!==y&&y,w=n.padding,O=void 0===w?0:w,E=ee("number"!==typeof O?O:te(O,u)),T=b===p?m:p,I=e.rects.popper,k=e.elements[_?T:b],S=je(j(k)?k:k.contextElement||z(e.elements.popper),l,g),A=V(e.elements.reference),x=Ce({reference:A,element:I,strategy:"absolute",placement:a}),C=ke(Object.assign({},I,x)),P=b===p?C:A,N={top:S.top-P.top+E.top,bottom:P.bottom-S.bottom+E.bottom,left:S.left-P.left+E.left,right:P.right-S.right+E.right},L=e.modifiersData.offset;if(b===p&&L){var R=L[a];Object.keys(N).forEach((function(e){var t=[s,o].indexOf(e)>=0?1:-1,n=[i,o].indexOf(e)>=0?"y":"x";N[e]+=R[n]*t}))}return N}function Ne(e,t){void 0===t&&(t={});var n=t,r=n.placement,i=n.boundary,o=n.rootBoundary,s=n.padding,a=n.flipVariations,c=n.allowedAutoPlacements,l=void 0===c?v:c,d=se(r),h=d?a?g:g.filter((function(e){return se(e)===d})):u,f=h.filter((function(e){return l.indexOf(e)>=0}));0===f.length&&(f=h);var p=f.reduce((function(t,n){return t[n]=Pe(e,{placement:n,boundary:i,rootBoundary:o,padding:s})[D(n)],t}),{});return Object.keys(p).sort((function(e,t){return p[e]-p[t]}))}function Le(e){if(D(e)===c)return[];var t=ge(e);return[be(e),t,be(t)]}function Re(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var u=n.mainAxis,d=void 0===u||u,h=n.altAxis,f=void 0===h||h,p=n.fallbackPlacements,m=n.padding,g=n.boundary,v=n.rootBoundary,b=n.altBoundary,y=n.flipVariations,_=void 0===y||y,w=n.allowedAutoPlacements,O=t.options.placement,E=D(O),T=E===O,I=p||(T||!_?[ge(O)]:Le(O)),k=[O].concat(I).reduce((function(e,n){return e.concat(D(n)===c?Ne(t,{placement:n,boundary:g,rootBoundary:v,padding:m,flipVariations:_,allowedAutoPlacements:w}):n)}),[]),S=t.rects.reference,A=t.rects.popper,x=new Map,j=!0,C=k[0],P=0;P<k.length;P++){var N=k[P],L=D(N),R=se(N)===l,M=[i,o].indexOf(L)>=0,F=M?"width":"height",U=Pe(t,{placement:N,boundary:g,rootBoundary:v,altBoundary:b,padding:m}),V=M?R?s:a:R?o:i;S[F]>A[F]&&(V=ge(V));var $=ge(V),B=[];if(d&&B.push(U[L]<=0),f&&B.push(U[V]<=0,U[$]<=0),B.every((function(e){return e}))){C=N,j=!1;break}x.set(N,B)}if(j)for(var H=_?3:1,q=function(e){var t=k.find((function(t){var n=x.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return C=t,"break"},z=H;z>0;z--){var W=q(z);if("break"===W)break}t.placement!==C&&(t.modifiersData[r]._skip=!0,t.placement=C,t.reset=!0)}}var De={name:"flip",enabled:!0,phase:"main",fn:Re,requiresIfExists:["offset"],data:{_skip:!1}};function Me(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function Fe(e){return[i,s,o,a].some((function(t){return e[t]>=0}))}function Ue(e){var t=e.state,n=e.name,r=t.rects.reference,i=t.rects.popper,o=t.modifiersData.preventOverflow,s=Pe(t,{elementContext:"reference"}),a=Pe(t,{altBoundary:!0}),c=Me(s,r),u=Me(a,i,o),l=Fe(c),d=Fe(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:l,hasPopperEscaped:d},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":d})}var Ve={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:Ue};function $e(e,t,n){var r=D(e),o=[a,i].indexOf(r)>=0?-1:1,c="function"===typeof n?n(Object.assign({},t,{placement:e})):n,u=c[0],l=c[1];return u=u||0,l=(l||0)*o,[a,s].indexOf(r)>=0?{x:l,y:u}:{x:u,y:l}}function Be(e){var t=e.state,n=e.options,r=e.name,i=n.offset,o=void 0===i?[0,0]:i,s=v.reduce((function(e,n){return e[n]=$e(n,t.rects,o),e}),{}),a=s[t.placement],c=a.x,u=a.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=s}var He={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:Be};function qe(e){var t=e.state,n=e.name;t.modifiersData[n]=Ce({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var ze={name:"popperOffsets",enabled:!0,phase:"read",fn:qe,data:{}};function We(e){return"x"===e?"y":"x"}function Ge(e){var t=e.state,n=e.options,r=e.name,c=n.mainAxis,u=void 0===c||c,d=n.altAxis,h=void 0!==d&&d,f=n.boundary,p=n.rootBoundary,m=n.altBoundary,g=n.padding,v=n.tether,b=void 0===v||v,y=n.tetherOffset,_=void 0===y?0:y,w=Pe(t,{boundary:f,rootBoundary:p,padding:g,altBoundary:m}),O=D(t.placement),E=se(t.placement),T=!E,I=X(O),k=We(I),S=t.modifiersData.popperOffsets,A=t.rects.reference,x=t.rects.popper,j="function"===typeof _?_(Object.assign({},t.rects,{placement:t.placement})):_,C="number"===typeof j?{mainAxis:j,altAxis:j}:Object.assign({mainAxis:0,altAxis:0},j),P=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,N={x:0,y:0};if(S){if(u){var L,R="y"===I?i:a,U="y"===I?o:s,V="y"===I?"height":"width",B=S[I],H=B+w[R],q=B-w[U],z=b?-x[V]/2:0,W=E===l?A[V]:x[V],G=E===l?-x[V]:-A[V],K=t.elements.arrow,ee=b&&K?$(K):{width:0,height:0},te=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:Z(),ne=te[R],re=te[U],ie=Y(0,A[V],ee[V]),oe=T?A[V]/2-z-ie-ne-C.mainAxis:W-ie-ne-C.mainAxis,ae=T?-A[V]/2+z+ie+re+C.mainAxis:G+ie+re+C.mainAxis,ce=t.elements.arrow&&J(t.elements.arrow),ue=ce?"y"===I?ce.clientTop||0:ce.clientLeft||0:0,le=null!=(L=null==P?void 0:P[I])?L:0,de=B+oe-le-ue,he=B+ae-le,fe=Y(b?F(H,de):H,B,b?M(q,he):q);S[I]=fe,N[I]=fe-B}if(h){var pe,me="x"===I?i:a,ge="x"===I?o:s,ve=S[k],be="y"===k?"height":"width",ye=ve+w[me],_e=ve-w[ge],we=-1!==[i,a].indexOf(O),Oe=null!=(pe=null==P?void 0:P[k])?pe:0,Ee=we?ye:ve-A[be]-x[be]-Oe+C.altAxis,Te=we?ve+A[be]+x[be]-Oe-C.altAxis:_e,Ie=b&&we?Q(Ee,ve,Te):Y(b?Ee:ye,ve,b?Te:_e);S[k]=Ie,N[k]=Ie-ve}t.modifiersData[r]=N}}var Ke={name:"preventOverflow",enabled:!0,phase:"main",fn:Ge,requiresIfExists:["offset"]};function Je(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function Xe(e){return e!==x(e)&&C(e)?Je(e):ye(e)}function Ye(e){var t=e.getBoundingClientRect(),n=U(t.width)/e.offsetWidth||1,r=U(t.height)/e.offsetHeight||1;return 1!==n||1!==r}function Qe(e,t,n){void 0===n&&(n=!1);var r=C(t),i=C(t)&&Ye(t),o=z(t),s=V(e,i),a={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==A(t)||Ee(o))&&(a=Xe(t)),C(t)?(c=V(t,!0),c.x+=t.clientLeft,c.y+=t.clientTop):o&&(c.x=_e(o))),{x:s.left+a.scrollLeft-c.x,y:s.top+a.scrollTop-c.y,width:s.width,height:s.height}}function Ze(e){var t=new Map,n=new Set,r=[];function i(e){n.add(e.name);var o=[].concat(e.requires||[],e.requiresIfExists||[]);o.forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&i(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||i(e)})),r}function et(e){var t=Ze(e);return S.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}function tt(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}function nt(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}var rt={placement:"bottom",modifiers:[],strategy:"absolute"};function it(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ot(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,i=t.defaultOptions,o=void 0===i?rt:i;return function(e,t,n){void 0===n&&(n=o);var i={placement:"bottom",orderedModifiers:[],options:Object.assign({},rt,o),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},s=[],a=!1,c={state:i,setOptions:function(n){var s="function"===typeof n?n(i.options):n;l(),i.options=Object.assign({},o,i.options,s),i.scrollParents={reference:j(e)?Ie(e):e.contextElement?Ie(e.contextElement):[],popper:Ie(t)};var a=et(nt([].concat(r,i.options.modifiers)));return i.orderedModifiers=a.filter((function(e){return e.enabled})),u(),c.update()},forceUpdate:function(){if(!a){var e=i.elements,t=e.reference,n=e.popper;if(it(t,n)){i.rects={reference:Qe(t,J(n),"fixed"===i.options.strategy),popper:$(n)},i.reset=!1,i.placement=i.options.placement,i.orderedModifiers.forEach((function(e){return i.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<i.orderedModifiers.length;r++)if(!0!==i.reset){var o=i.orderedModifiers[r],s=o.fn,u=o.options,l=void 0===u?{}:u,d=o.name;"function"===typeof s&&(i=s({state:i,options:l,name:d,instance:c})||i)}else i.reset=!1,r=-1}}},update:tt((function(){return new Promise((function(e){c.forceUpdate(),e(i)}))})),destroy:function(){l(),a=!0}};if(!it(e,t))return c;function u(){i.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,o=e.effect;if("function"===typeof o){var a=o({state:i,name:t,instance:c,options:r}),u=function(){};s.push(a||u)}}))}function l(){s.forEach((function(e){return e()})),s=[]}return c.setOptions(n).then((function(e){!a&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var st=ot(),at=[pe,ze,de,R,He,De,Ke,oe,Ve],ct=ot({defaultModifiers:at}),ut=[pe,ze,de,R],lt=ot({defaultModifiers:ut});
/*!
  * Bootstrap v5.1.3 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
const dt=1e6,ht=1e3,ft="transitionend",pt=e=>null===e||void 0===e?""+e:{}.toString.call(e).match(/\s([a-z]+)/i)[1].toLowerCase(),mt=e=>{do{e+=Math.floor(Math.random()*dt)}while(document.getElementById(e));return e},gt=e=>{let t=e.getAttribute("data-bs-target");if(!t||"#"===t){let n=e.getAttribute("href");if(!n||!n.includes("#")&&!n.startsWith("."))return null;n.includes("#")&&!n.startsWith("#")&&(n="#"+n.split("#")[1]),t=n&&"#"!==n?n.trim():null}return t},vt=e=>{const t=gt(e);return t&&document.querySelector(t)?t:null},bt=e=>{const t=gt(e);return t?document.querySelector(t):null},yt=e=>{if(!e)return 0;let{transitionDuration:t,transitionDelay:n}=window.getComputedStyle(e);const r=Number.parseFloat(t),i=Number.parseFloat(n);return r||i?(t=t.split(",")[0],n=n.split(",")[0],(Number.parseFloat(t)+Number.parseFloat(n))*ht):0},_t=e=>{e.dispatchEvent(new Event(ft))},wt=e=>!(!e||"object"!==typeof e)&&("undefined"!==typeof e.jquery&&(e=e[0]),"undefined"!==typeof e.nodeType),Ot=e=>wt(e)?e.jquery?e[0]:e:"string"===typeof e&&e.length>0?document.querySelector(e):null,Et=(e,t,n)=>{Object.keys(n).forEach(r=>{const i=n[r],o=t[r],s=o&&wt(o)?"element":pt(o);if(!new RegExp(i).test(s))throw new TypeError(`${e.toUpperCase()}: Option "${r}" provided type "${s}" but expected type "${i}".`)})},Tt=e=>!(!wt(e)||0===e.getClientRects().length)&&"visible"===getComputedStyle(e).getPropertyValue("visibility"),It=e=>!e||e.nodeType!==Node.ELEMENT_NODE||(!!e.classList.contains("disabled")||("undefined"!==typeof e.disabled?e.disabled:e.hasAttribute("disabled")&&"false"!==e.getAttribute("disabled"))),kt=e=>{if(!document.documentElement.attachShadow)return null;if("function"===typeof e.getRootNode){const t=e.getRootNode();return t instanceof ShadowRoot?t:null}return e instanceof ShadowRoot?e:e.parentNode?kt(e.parentNode):null},St=()=>{},At=e=>{e.offsetHeight},xt=()=>{const{jQuery:e}=window;return e&&!document.body.hasAttribute("data-bs-no-jquery")?e:null},jt=[],Ct=e=>{"loading"===document.readyState?(jt.length||document.addEventListener("DOMContentLoaded",()=>{jt.forEach(e=>e())}),jt.push(e)):e()},Pt=()=>"rtl"===document.documentElement.dir,Nt=e=>{Ct(()=>{const t=xt();if(t){const n=e.NAME,r=t.fn[n];t.fn[n]=e.jQueryInterface,t.fn[n].Constructor=e,t.fn[n].noConflict=()=>(t.fn[n]=r,e.jQueryInterface)}})},Lt=e=>{"function"===typeof e&&e()},Rt=(e,t,n=!0)=>{if(!n)return void Lt(e);const r=5,i=yt(t)+r;let o=!1;const s=({target:n})=>{n===t&&(o=!0,t.removeEventListener(ft,s),Lt(e))};t.addEventListener(ft,s),setTimeout(()=>{o||_t(t)},i)},Dt=(e,t,n,r)=>{let i=e.indexOf(t);if(-1===i)return e[!n&&r?e.length-1:0];const o=e.length;return i+=n?1:-1,r&&(i=(i+o)%o),e[Math.max(0,Math.min(i,o-1))]},Mt=/[^.]*(?=\..*)\.|.*/,Ft=/\..*/,Ut=/::\d+$/,Vt={};let $t=1;const Bt={mouseenter:"mouseover",mouseleave:"mouseout"},Ht=/^(mouseenter|mouseleave)/i,qt=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function zt(e,t){return t&&`${t}::${$t++}`||e.uidEvent||$t++}function Wt(e){const t=zt(e);return e.uidEvent=t,Vt[t]=Vt[t]||{},Vt[t]}function Gt(e,t){return function n(r){return r.delegateTarget=e,n.oneOff&&tn.off(e,r.type,t),t.apply(e,[r])}}function Kt(e,t,n){return function r(i){const o=e.querySelectorAll(t);for(let{target:s}=i;s&&s!==this;s=s.parentNode)for(let a=o.length;a--;)if(o[a]===s)return i.delegateTarget=s,r.oneOff&&tn.off(e,i.type,t,n),n.apply(s,[i]);return null}}function Jt(e,t,n=null){const r=Object.keys(e);for(let i=0,o=r.length;i<o;i++){const o=e[r[i]];if(o.originalHandler===t&&o.delegationSelector===n)return o}return null}function Xt(e,t,n){const r="string"===typeof t,i=r?n:t;let o=en(e);const s=qt.has(o);return s||(o=e),[r,i,o]}function Yt(e,t,n,r,i){if("string"!==typeof t||!e)return;if(n||(n=r,r=null),Ht.test(t)){const e=e=>function(t){if(!t.relatedTarget||t.relatedTarget!==t.delegateTarget&&!t.delegateTarget.contains(t.relatedTarget))return e.call(this,t)};r?r=e(r):n=e(n)}const[o,s,a]=Xt(t,n,r),c=Wt(e),u=c[a]||(c[a]={}),l=Jt(u,s,o?n:null);if(l)return void(l.oneOff=l.oneOff&&i);const d=zt(s,t.replace(Mt,"")),h=o?Kt(e,n,r):Gt(e,n);h.delegationSelector=o?n:null,h.originalHandler=s,h.oneOff=i,h.uidEvent=d,u[d]=h,e.addEventListener(a,h,o)}function Qt(e,t,n,r,i){const o=Jt(t[n],r,i);o&&(e.removeEventListener(n,o,Boolean(i)),delete t[n][o.uidEvent])}function Zt(e,t,n,r){const i=t[n]||{};Object.keys(i).forEach(o=>{if(o.includes(r)){const r=i[o];Qt(e,t,n,r.originalHandler,r.delegationSelector)}})}function en(e){return e=e.replace(Ft,""),Bt[e]||e}const tn={on(e,t,n,r){Yt(e,t,n,r,!1)},one(e,t,n,r){Yt(e,t,n,r,!0)},off(e,t,n,r){if("string"!==typeof t||!e)return;const[i,o,s]=Xt(t,n,r),a=s!==t,c=Wt(e),u=t.startsWith(".");if("undefined"!==typeof o){if(!c||!c[s])return;return void Qt(e,c,s,o,i?n:null)}u&&Object.keys(c).forEach(n=>{Zt(e,c,n,t.slice(1))});const l=c[s]||{};Object.keys(l).forEach(n=>{const r=n.replace(Ut,"");if(!a||t.includes(r)){const t=l[n];Qt(e,c,s,t.originalHandler,t.delegationSelector)}})},trigger(e,t,n){if("string"!==typeof t||!e)return null;const r=xt(),i=en(t),o=t!==i,s=qt.has(i);let a,c=!0,u=!0,l=!1,d=null;return o&&r&&(a=r.Event(t,n),r(e).trigger(a),c=!a.isPropagationStopped(),u=!a.isImmediatePropagationStopped(),l=a.isDefaultPrevented()),s?(d=document.createEvent("HTMLEvents"),d.initEvent(i,c,!0)):d=new CustomEvent(t,{bubbles:c,cancelable:!0}),"undefined"!==typeof n&&Object.keys(n).forEach(e=>{Object.defineProperty(d,e,{get(){return n[e]}})}),l&&d.preventDefault(),u&&e.dispatchEvent(d),d.defaultPrevented&&"undefined"!==typeof a&&a.preventDefault(),d}},nn=new Map,rn={set(e,t,n){nn.has(e)||nn.set(e,new Map);const r=nn.get(e);r.has(t)||0===r.size?r.set(t,n):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(r.keys())[0]}.`)},get(e,t){return nn.has(e)&&nn.get(e).get(t)||null},remove(e,t){if(!nn.has(e))return;const n=nn.get(e);n.delete(t),0===n.size&&nn.delete(e)}},on="5.1.3";class sn{constructor(e){e=Ot(e),e&&(this._element=e,rn.set(this._element,this.constructor.DATA_KEY,this))}dispose(){rn.remove(this._element,this.constructor.DATA_KEY),tn.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(e=>{this[e]=null})}_queueCallback(e,t,n=!0){Rt(e,t,n)}static getInstance(e){return rn.get(Ot(e),this.DATA_KEY)}static getOrCreateInstance(e,t={}){return this.getInstance(e)||new this(e,"object"===typeof t?t:null)}static get VERSION(){return on}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}const an=(e,t="hide")=>{const n="click.dismiss"+e.EVENT_KEY,r=e.NAME;tn.on(document,n,`[data-bs-dismiss="${r}"]`,(function(n){if(["A","AREA"].includes(this.tagName)&&n.preventDefault(),It(this))return;const i=bt(this)||this.closest("."+r),o=e.getOrCreateInstance(i);o[t]()}))},cn="alert",un="bs.alert",ln="."+un,dn="close"+ln,hn="closed"+ln,fn="fade",pn="show";class mn extends sn{static get NAME(){return cn}close(){const e=tn.trigger(this._element,dn);if(e.defaultPrevented)return;this._element.classList.remove(pn);const t=this._element.classList.contains(fn);this._queueCallback(()=>this._destroyElement(),this._element,t)}_destroyElement(){this._element.remove(),tn.trigger(this._element,hn),this.dispose()}static jQueryInterface(e){return this.each((function(){const t=mn.getOrCreateInstance(this);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}an(mn,"close"),Nt(mn);const gn="button",vn="bs.button",bn="."+vn,yn=".data-api",_n="active",wn='[data-bs-toggle="button"]',On=`click${bn}${yn}`;class En extends sn{static get NAME(){return gn}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(_n))}static jQueryInterface(e){return this.each((function(){const t=En.getOrCreateInstance(this);"toggle"===e&&t[e]()}))}}function Tn(e){return"true"===e||"false"!==e&&(e===Number(e).toString()?Number(e):""===e||"null"===e?null:e)}function In(e){return e.replace(/[A-Z]/g,e=>"-"+e.toLowerCase())}tn.on(document,On,wn,e=>{e.preventDefault();const t=e.target.closest(wn),n=En.getOrCreateInstance(t);n.toggle()}),Nt(En);const kn={setDataAttribute(e,t,n){e.setAttribute("data-bs-"+In(t),n)},removeDataAttribute(e,t){e.removeAttribute("data-bs-"+In(t))},getDataAttributes(e){if(!e)return{};const t={};return Object.keys(e.dataset).filter(e=>e.startsWith("bs")).forEach(n=>{let r=n.replace(/^bs/,"");r=r.charAt(0).toLowerCase()+r.slice(1,r.length),t[r]=Tn(e.dataset[n])}),t},getDataAttribute(e,t){return Tn(e.getAttribute("data-bs-"+In(t)))},offset(e){const t=e.getBoundingClientRect();return{top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},position(e){return{top:e.offsetTop,left:e.offsetLeft}}},Sn=3,An={find(e,t=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(t,e))},findOne(e,t=document.documentElement){return Element.prototype.querySelector.call(t,e)},children(e,t){return[].concat(...e.children).filter(e=>e.matches(t))},parents(e,t){const n=[];let r=e.parentNode;while(r&&r.nodeType===Node.ELEMENT_NODE&&r.nodeType!==Sn)r.matches(t)&&n.push(r),r=r.parentNode;return n},prev(e,t){let n=e.previousElementSibling;while(n){if(n.matches(t))return[n];n=n.previousElementSibling}return[]},next(e,t){let n=e.nextElementSibling;while(n){if(n.matches(t))return[n];n=n.nextElementSibling}return[]},focusableChildren(e){const t=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(e=>e+':not([tabindex^="-"])').join(", ");return this.find(t,e).filter(e=>!It(e)&&Tt(e))}},xn="carousel",jn="bs.carousel",Cn="."+jn,Pn=".data-api",Nn="ArrowLeft",Ln="ArrowRight",Rn=500,Dn=40,Mn={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Fn={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},Un="next",Vn="prev",$n="left",Bn="right",Hn={[Nn]:Bn,[Ln]:$n},qn="slide"+Cn,zn="slid"+Cn,Wn="keydown"+Cn,Gn="mouseenter"+Cn,Kn="mouseleave"+Cn,Jn="touchstart"+Cn,Xn="touchmove"+Cn,Yn="touchend"+Cn,Qn="pointerdown"+Cn,Zn="pointerup"+Cn,er="dragstart"+Cn,tr=`load${Cn}${Pn}`,nr=`click${Cn}${Pn}`,rr="carousel",ir="active",or="slide",sr="carousel-item-end",ar="carousel-item-start",cr="carousel-item-next",ur="carousel-item-prev",lr="pointer-event",dr=".active",hr=".active.carousel-item",fr=".carousel-item",pr=".carousel-item img",mr=".carousel-item-next, .carousel-item-prev",gr=".carousel-indicators",vr="[data-bs-target]",br="[data-bs-slide], [data-bs-slide-to]",yr='[data-bs-ride="carousel"]',_r="touch",wr="pen";class Or extends sn{constructor(e,t){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(t),this._indicatorsElement=An.findOne(gr,this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return Mn}static get NAME(){return xn}next(){this._slide(Un)}nextWhenVisible(){!document.hidden&&Tt(this._element)&&this.next()}prev(){this._slide(Vn)}pause(e){e||(this._isPaused=!0),An.findOne(mr,this._element)&&(_t(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(e){e||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=An.findOne(hr,this._element);const t=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void tn.one(this._element,zn,()=>this.to(e));if(t===e)return this.pause(),void this.cycle();const n=e>t?Un:Vn;this._slide(n,this._items[e])}_getConfig(e){return e={...Mn,...kn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(xn,e,Fn),e}_handleSwipe(){const e=Math.abs(this.touchDeltaX);if(e<=Dn)return;const t=e/this.touchDeltaX;this.touchDeltaX=0,t&&this._slide(t>0?Bn:$n)}_addEventListeners(){this._config.keyboard&&tn.on(this._element,Wn,e=>this._keydown(e)),"hover"===this._config.pause&&(tn.on(this._element,Gn,e=>this.pause(e)),tn.on(this._element,Kn,e=>this.cycle(e))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=e=>this._pointerEvent&&(e.pointerType===wr||e.pointerType===_r),t=t=>{e(t)?this.touchStartX=t.clientX:this._pointerEvent||(this.touchStartX=t.touches[0].clientX)},n=e=>{this.touchDeltaX=e.touches&&e.touches.length>1?0:e.touches[0].clientX-this.touchStartX},r=t=>{e(t)&&(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(e=>this.cycle(e),Rn+this._config.interval))};An.find(pr,this._element).forEach(e=>{tn.on(e,er,e=>e.preventDefault())}),this._pointerEvent?(tn.on(this._element,Qn,e=>t(e)),tn.on(this._element,Zn,e=>r(e)),this._element.classList.add(lr)):(tn.on(this._element,Jn,e=>t(e)),tn.on(this._element,Xn,e=>n(e)),tn.on(this._element,Yn,e=>r(e)))}_keydown(e){if(/input|textarea/i.test(e.target.tagName))return;const t=Hn[e.key];t&&(e.preventDefault(),this._slide(t))}_getItemIndex(e){return this._items=e&&e.parentNode?An.find(fr,e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(e,t){const n=e===Un;return Dt(this._items,t,n,this._config.wrap)}_triggerSlideEvent(e,t){const n=this._getItemIndex(e),r=this._getItemIndex(An.findOne(hr,this._element));return tn.trigger(this._element,qn,{relatedTarget:e,direction:t,from:r,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const t=An.findOne(dr,this._indicatorsElement);t.classList.remove(ir),t.removeAttribute("aria-current");const n=An.find(vr,this._indicatorsElement);for(let r=0;r<n.length;r++)if(Number.parseInt(n[r].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[r].classList.add(ir),n[r].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||An.findOne(hr,this._element);if(!e)return;const t=Number.parseInt(e.getAttribute("data-bs-interval"),10);t?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=t):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,t){const n=this._directionToOrder(e),r=An.findOne(hr,this._element),i=this._getItemIndex(r),o=t||this._getItemByOrder(n,r),s=this._getItemIndex(o),a=Boolean(this._interval),c=n===Un,u=c?ar:sr,l=c?cr:ur,d=this._orderToDirection(n);if(o&&o.classList.contains(ir))return void(this._isSliding=!1);if(this._isSliding)return;const h=this._triggerSlideEvent(o,d);if(h.defaultPrevented)return;if(!r||!o)return;this._isSliding=!0,a&&this.pause(),this._setActiveIndicatorElement(o),this._activeElement=o;const f=()=>{tn.trigger(this._element,zn,{relatedTarget:o,direction:d,from:i,to:s})};if(this._element.classList.contains(or)){o.classList.add(l),At(o),r.classList.add(u),o.classList.add(u);const e=()=>{o.classList.remove(u,l),o.classList.add(ir),r.classList.remove(ir,l,u),this._isSliding=!1,setTimeout(f,0)};this._queueCallback(e,r,!0)}else r.classList.remove(ir),o.classList.add(ir),this._isSliding=!1,f();a&&this.cycle()}_directionToOrder(e){return[Bn,$n].includes(e)?Pt()?e===$n?Vn:Un:e===$n?Un:Vn:e}_orderToDirection(e){return[Un,Vn].includes(e)?Pt()?e===Vn?$n:Bn:e===Vn?Bn:$n:e}static carouselInterface(e,t){const n=Or.getOrCreateInstance(e,t);let{_config:r}=n;"object"===typeof t&&(r={...r,...t});const i="string"===typeof t?t:r.slide;if("number"===typeof t)n.to(t);else if("string"===typeof i){if("undefined"===typeof n[i])throw new TypeError(`No method named "${i}"`);n[i]()}else r.interval&&r.ride&&(n.pause(),n.cycle())}static jQueryInterface(e){return this.each((function(){Or.carouselInterface(this,e)}))}static dataApiClickHandler(e){const t=bt(this);if(!t||!t.classList.contains(rr))return;const n={...kn.getDataAttributes(t),...kn.getDataAttributes(this)},r=this.getAttribute("data-bs-slide-to");r&&(n.interval=!1),Or.carouselInterface(t,n),r&&Or.getInstance(t).to(r),e.preventDefault()}}tn.on(document,nr,br,Or.dataApiClickHandler),tn.on(window,tr,()=>{const e=An.find(yr);for(let t=0,n=e.length;t<n;t++)Or.carouselInterface(e[t],Or.getInstance(e[t]))}),Nt(Or);const Er="collapse",Tr="bs.collapse",Ir="."+Tr,kr=".data-api",Sr={toggle:!0,parent:null},Ar={toggle:"boolean",parent:"(null|element)"},xr="show"+Ir,jr="shown"+Ir,Cr="hide"+Ir,Pr="hidden"+Ir,Nr=`click${Ir}${kr}`,Lr="show",Rr="collapse",Dr="collapsing",Mr="collapsed",Fr=`:scope .${Rr} .${Rr}`,Ur="collapse-horizontal",Vr="width",$r="height",Br=".collapse.show, .collapse.collapsing",Hr='[data-bs-toggle="collapse"]';class qr extends sn{constructor(e,t){super(e),this._isTransitioning=!1,this._config=this._getConfig(t),this._triggerArray=[];const n=An.find(Hr);for(let r=0,i=n.length;r<i;r++){const e=n[r],t=vt(e),i=An.find(t).filter(e=>e===this._element);null!==t&&i.length&&(this._selector=t,this._triggerArray.push(e))}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return Sr}static get NAME(){return Er}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let e,t=[];if(this._config.parent){const e=An.find(Fr,this._config.parent);t=An.find(Br,this._config.parent).filter(t=>!e.includes(t))}const n=An.findOne(this._selector);if(t.length){const r=t.find(e=>n!==e);if(e=r?qr.getInstance(r):null,e&&e._isTransitioning)return}const r=tn.trigger(this._element,xr);if(r.defaultPrevented)return;t.forEach(t=>{n!==t&&qr.getOrCreateInstance(t,{toggle:!1}).hide(),e||rn.set(t,Tr,null)});const i=this._getDimension();this._element.classList.remove(Rr),this._element.classList.add(Dr),this._element.style[i]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const o=()=>{this._isTransitioning=!1,this._element.classList.remove(Dr),this._element.classList.add(Rr,Lr),this._element.style[i]="",tn.trigger(this._element,jr)},s=i[0].toUpperCase()+i.slice(1),a="scroll"+s;this._queueCallback(o,this._element,!0),this._element.style[i]=this._element[a]+"px"}hide(){if(this._isTransitioning||!this._isShown())return;const e=tn.trigger(this._element,Cr);if(e.defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",At(this._element),this._element.classList.add(Dr),this._element.classList.remove(Rr,Lr);const n=this._triggerArray.length;for(let i=0;i<n;i++){const e=this._triggerArray[i],t=bt(e);t&&!this._isShown(t)&&this._addAriaAndCollapsedClass([e],!1)}this._isTransitioning=!0;const r=()=>{this._isTransitioning=!1,this._element.classList.remove(Dr),this._element.classList.add(Rr),tn.trigger(this._element,Pr)};this._element.style[t]="",this._queueCallback(r,this._element,!0)}_isShown(e=this._element){return e.classList.contains(Lr)}_getConfig(e){return e={...Sr,...kn.getDataAttributes(this._element),...e},e.toggle=Boolean(e.toggle),e.parent=Ot(e.parent),Et(Er,e,Ar),e}_getDimension(){return this._element.classList.contains(Ur)?Vr:$r}_initializeChildren(){if(!this._config.parent)return;const e=An.find(Fr,this._config.parent);An.find(Hr,this._config.parent).filter(t=>!e.includes(t)).forEach(e=>{const t=bt(e);t&&this._addAriaAndCollapsedClass([e],this._isShown(t))})}_addAriaAndCollapsedClass(e,t){e.length&&e.forEach(e=>{t?e.classList.remove(Mr):e.classList.add(Mr),e.setAttribute("aria-expanded",t)})}static jQueryInterface(e){return this.each((function(){const t={};"string"===typeof e&&/show|hide/.test(e)&&(t.toggle=!1);const n=qr.getOrCreateInstance(this,t);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e]()}}))}}tn.on(document,Nr,Hr,(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const t=vt(this),n=An.find(t);n.forEach(e=>{qr.getOrCreateInstance(e,{toggle:!1}).toggle()})})),Nt(qr);const zr="dropdown",Wr="bs.dropdown",Gr="."+Wr,Kr=".data-api",Jr="Escape",Xr="Space",Yr="Tab",Qr="ArrowUp",Zr="ArrowDown",ei=2,ti=new RegExp(`${Qr}|${Zr}|${Jr}`),ni="hide"+Gr,ri="hidden"+Gr,ii="show"+Gr,oi="shown"+Gr,si=`click${Gr}${Kr}`,ai=`keydown${Gr}${Kr}`,ci=`keyup${Gr}${Kr}`,ui="show",li="dropup",di="dropend",hi="dropstart",fi="navbar",pi='[data-bs-toggle="dropdown"]',mi=".dropdown-menu",gi=".navbar-nav",vi=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",bi=Pt()?"top-end":"top-start",yi=Pt()?"top-start":"top-end",_i=Pt()?"bottom-end":"bottom-start",wi=Pt()?"bottom-start":"bottom-end",Oi=Pt()?"left-start":"right-start",Ei=Pt()?"right-start":"left-start",Ti={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ii={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class ki extends sn{constructor(e,t){super(e),this._popper=null,this._config=this._getConfig(t),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar()}static get Default(){return Ti}static get DefaultType(){return Ii}static get NAME(){return zr}toggle(){return this._isShown()?this.hide():this.show()}show(){if(It(this._element)||this._isShown(this._menu))return;const e={relatedTarget:this._element},t=tn.trigger(this._element,ii,e);if(t.defaultPrevented)return;const n=ki.getParentFromElement(this._element);this._inNavbar?kn.setDataAttribute(this._menu,"popper","none"):this._createPopper(n),"ontouchstart"in document.documentElement&&!n.closest(gi)&&[].concat(...document.body.children).forEach(e=>tn.on(e,"mouseover",St)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(ui),this._element.classList.add(ui),tn.trigger(this._element,oi,e)}hide(){if(It(this._element)||!this._isShown(this._menu))return;const e={relatedTarget:this._element};this._completeHide(e)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(e){const t=tn.trigger(this._element,ni,e);t.defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>tn.off(e,"mouseover",St)),this._popper&&this._popper.destroy(),this._menu.classList.remove(ui),this._element.classList.remove(ui),this._element.setAttribute("aria-expanded","false"),kn.removeDataAttribute(this._menu,"popper"),tn.trigger(this._element,ri,e))}_getConfig(e){if(e={...this.constructor.Default,...kn.getDataAttributes(this._element),...e},Et(zr,e,this.constructor.DefaultType),"object"===typeof e.reference&&!wt(e.reference)&&"function"!==typeof e.reference.getBoundingClientRect)throw new TypeError(zr.toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return e}_createPopper(e){if("undefined"===typeof r)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let t=this._element;"parent"===this._config.reference?t=e:wt(this._config.reference)?t=Ot(this._config.reference):"object"===typeof this._config.reference&&(t=this._config.reference);const n=this._getPopperConfig(),i=n.modifiers.find(e=>"applyStyles"===e.name&&!1===e.enabled);this._popper=ct(t,this._menu,n),i&&kn.setDataAttribute(this._menu,"popper","static")}_isShown(e=this._element){return e.classList.contains(ui)}_getMenuElement(){return An.next(this._element,mi)[0]}_getPlacement(){const e=this._element.parentNode;if(e.classList.contains(di))return Oi;if(e.classList.contains(hi))return Ei;const t="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return e.classList.contains(li)?t?yi:bi:t?wi:_i}_detectNavbar(){return null!==this._element.closest("."+fi)}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_getPopperConfig(){const e={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(e.modifiers=[{name:"applyStyles",enabled:!1}]),{...e,..."function"===typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_selectMenuItem({key:e,target:t}){const n=An.find(vi,this._menu).filter(Tt);n.length&&Dt(n,t,e===Zr,!n.includes(t)).focus()}static jQueryInterface(e){return this.each((function(){const t=ki.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}static clearMenus(e){if(e&&(e.button===ei||"keyup"===e.type&&e.key!==Yr))return;const t=An.find(pi);for(let n=0,r=t.length;n<r;n++){const r=ki.getInstance(t[n]);if(!r||!1===r._config.autoClose)continue;if(!r._isShown())continue;const i={relatedTarget:r._element};if(e){const t=e.composedPath(),n=t.includes(r._menu);if(t.includes(r._element)||"inside"===r._config.autoClose&&!n||"outside"===r._config.autoClose&&n)continue;if(r._menu.contains(e.target)&&("keyup"===e.type&&e.key===Yr||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(i.clickEvent=e)}r._completeHide(i)}}static getParentFromElement(e){return bt(e)||e.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?e.key===Xr||e.key!==Jr&&(e.key!==Zr&&e.key!==Qr||e.target.closest(mi)):!ti.test(e.key))return;const t=this.classList.contains(ui);if(!t&&e.key===Jr)return;if(e.preventDefault(),e.stopPropagation(),It(this))return;const n=this.matches(pi)?this:An.prev(this,pi)[0],r=ki.getOrCreateInstance(n);if(e.key!==Jr)return e.key===Qr||e.key===Zr?(t||r.show(),void r._selectMenuItem(e)):void(t&&e.key!==Xr||ki.clearMenus());r.hide()}}tn.on(document,ai,pi,ki.dataApiKeydownHandler),tn.on(document,ai,mi,ki.dataApiKeydownHandler),tn.on(document,si,ki.clearMenus),tn.on(document,ci,ki.clearMenus),tn.on(document,si,pi,(function(e){e.preventDefault(),ki.getOrCreateInstance(this).toggle()})),Nt(ki);const Si=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Ai=".sticky-top";class xi{constructor(){this._element=document.body}getWidth(){const e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}hide(){const e=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",t=>t+e),this._setElementAttributes(Si,"paddingRight",t=>t+e),this._setElementAttributes(Ai,"marginRight",t=>t-e)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(e,t,n){const r=this.getWidth(),i=e=>{if(e!==this._element&&window.innerWidth>e.clientWidth+r)return;this._saveInitialAttribute(e,t);const i=window.getComputedStyle(e)[t];e.style[t]=n(Number.parseFloat(i))+"px"};this._applyManipulationCallback(e,i)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(Si,"paddingRight"),this._resetElementAttributes(Ai,"marginRight")}_saveInitialAttribute(e,t){const n=e.style[t];n&&kn.setDataAttribute(e,t,n)}_resetElementAttributes(e,t){const n=e=>{const n=kn.getDataAttribute(e,t);"undefined"===typeof n?e.style.removeProperty(t):(kn.removeDataAttribute(e,t),e.style[t]=n)};this._applyManipulationCallback(e,n)}_applyManipulationCallback(e,t){wt(e)?t(e):An.find(e,this._element).forEach(t)}isOverflowing(){return this.getWidth()>0}}const ji={className:"modal-backdrop",isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ci={className:"string",isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"},Pi="backdrop",Ni="fade",Li="show",Ri="mousedown.bs."+Pi;class Di{constructor(e){this._config=this._getConfig(e),this._isAppended=!1,this._element=null}show(e){this._config.isVisible?(this._append(),this._config.isAnimated&&At(this._getElement()),this._getElement().classList.add(Li),this._emulateAnimation(()=>{Lt(e)})):Lt(e)}hide(e){this._config.isVisible?(this._getElement().classList.remove(Li),this._emulateAnimation(()=>{this.dispose(),Lt(e)})):Lt(e)}_getElement(){if(!this._element){const e=document.createElement("div");e.className=this._config.className,this._config.isAnimated&&e.classList.add(Ni),this._element=e}return this._element}_getConfig(e){return e={...ji,..."object"===typeof e?e:{}},e.rootElement=Ot(e.rootElement),Et(Pi,e,Ci),e}_append(){this._isAppended||(this._config.rootElement.append(this._getElement()),tn.on(this._getElement(),Ri,()=>{Lt(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(tn.off(this._element,Ri),this._element.remove(),this._isAppended=!1)}_emulateAnimation(e){Rt(e,this._getElement(),this._config.isAnimated)}}const Mi={trapElement:null,autofocus:!0},Fi={trapElement:"element",autofocus:"boolean"},Ui="focustrap",Vi="bs.focustrap",$i="."+Vi,Bi="focusin"+$i,Hi="keydown.tab"+$i,qi="Tab",zi="forward",Wi="backward";class Gi{constructor(e){this._config=this._getConfig(e),this._isActive=!1,this._lastTabNavDirection=null}activate(){const{trapElement:e,autofocus:t}=this._config;this._isActive||(t&&e.focus(),tn.off(document,$i),tn.on(document,Bi,e=>this._handleFocusin(e)),tn.on(document,Hi,e=>this._handleKeydown(e)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,tn.off(document,$i))}_handleFocusin(e){const{target:t}=e,{trapElement:n}=this._config;if(t===document||t===n||n.contains(t))return;const r=An.focusableChildren(n);0===r.length?n.focus():this._lastTabNavDirection===Wi?r[r.length-1].focus():r[0].focus()}_handleKeydown(e){e.key===qi&&(this._lastTabNavDirection=e.shiftKey?Wi:zi)}_getConfig(e){return e={...Mi,..."object"===typeof e?e:{}},Et(Ui,e,Fi),e}}const Ki="modal",Ji="bs.modal",Xi="."+Ji,Yi=".data-api",Qi="Escape",Zi={backdrop:!0,keyboard:!0,focus:!0},eo={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"},to="hide"+Xi,no="hidePrevented"+Xi,ro="hidden"+Xi,io="show"+Xi,oo="shown"+Xi,so="resize"+Xi,ao="click.dismiss"+Xi,co="keydown.dismiss"+Xi,uo="mouseup.dismiss"+Xi,lo="mousedown.dismiss"+Xi,ho=`click${Xi}${Yi}`,fo="modal-open",po="fade",mo="show",go="modal-static",vo=".modal.show",bo=".modal-dialog",yo=".modal-body",_o='[data-bs-toggle="modal"]';class wo extends sn{constructor(e,t){super(e),this._config=this._getConfig(t),this._dialog=An.findOne(bo,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new xi}static get Default(){return Zi}static get NAME(){return Ki}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown||this._isTransitioning)return;const t=tn.trigger(this._element,io,{relatedTarget:e});t.defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add(fo),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),tn.on(this._dialog,lo,()=>{tn.one(this._element,uo,e=>{e.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(e)))}hide(){if(!this._isShown||this._isTransitioning)return;const e=tn.trigger(this._element,to);if(e.defaultPrevented)return;this._isShown=!1;const t=this._isAnimated();t&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),this._focustrap.deactivate(),this._element.classList.remove(mo),tn.off(this._element,ao),tn.off(this._dialog,lo),this._queueCallback(()=>this._hideModal(),this._element,t)}dispose(){[window,this._dialog].forEach(e=>tn.off(e,Xi)),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new Di({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new Gi({trapElement:this._element})}_getConfig(e){return e={...Zi,...kn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(Ki,e,eo),e}_showElement(e){const t=this._isAnimated(),n=An.findOne(yo,this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),t&&At(this._element),this._element.classList.add(mo);const r=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,tn.trigger(this._element,oo,{relatedTarget:e})};this._queueCallback(r,this._dialog,t)}_setEscapeEvent(){this._isShown?tn.on(this._element,co,e=>{this._config.keyboard&&e.key===Qi?(e.preventDefault(),this.hide()):this._config.keyboard||e.key!==Qi||this._triggerBackdropTransition()}):tn.off(this._element,co)}_setResizeEvent(){this._isShown?tn.on(window,so,()=>this._adjustDialog()):tn.off(window,so)}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(fo),this._resetAdjustments(),this._scrollBar.reset(),tn.trigger(this._element,ro)})}_showBackdrop(e){tn.on(this._element,ao,e=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:e.target===e.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(e)}_isAnimated(){return this._element.classList.contains(po)}_triggerBackdropTransition(){const e=tn.trigger(this._element,no);if(e.defaultPrevented)return;const{classList:t,scrollHeight:n,style:r}=this._element,i=n>document.documentElement.clientHeight;!i&&"hidden"===r.overflowY||t.contains(go)||(i||(r.overflowY="hidden"),t.add(go),this._queueCallback(()=>{t.remove(go),i||this._queueCallback(()=>{r.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const e=this._element.scrollHeight>document.documentElement.clientHeight,t=this._scrollBar.getWidth(),n=t>0;(!n&&e&&!Pt()||n&&!e&&Pt())&&(this._element.style.paddingLeft=t+"px"),(n&&!e&&!Pt()||!n&&e&&Pt())&&(this._element.style.paddingRight=t+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(e,t){return this.each((function(){const n=wo.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof n[e])throw new TypeError(`No method named "${e}"`);n[e](t)}}))}}tn.on(document,ho,_o,(function(e){const t=bt(this);["A","AREA"].includes(this.tagName)&&e.preventDefault(),tn.one(t,io,e=>{e.defaultPrevented||tn.one(t,ro,()=>{Tt(this)&&this.focus()})});const n=An.findOne(vo);n&&wo.getInstance(n).hide();const r=wo.getOrCreateInstance(t);r.toggle(this)})),an(wo),Nt(wo);const Oo="offcanvas",Eo="bs.offcanvas",To="."+Eo,Io=".data-api",ko=`load${To}${Io}`,So="Escape",Ao={backdrop:!0,keyboard:!0,scroll:!1},xo={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"},jo="show",Co="offcanvas-backdrop",Po=".offcanvas.show",No="show"+To,Lo="shown"+To,Ro="hide"+To,Do="hidden"+To,Mo=`click${To}${Io}`,Fo="keydown.dismiss"+To,Uo='[data-bs-toggle="offcanvas"]';class Vo extends sn{constructor(e,t){super(e),this._config=this._getConfig(t),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get NAME(){return Oo}static get Default(){return Ao}toggle(e){return this._isShown?this.hide():this.show(e)}show(e){if(this._isShown)return;const t=tn.trigger(this._element,No,{relatedTarget:e});if(t.defaultPrevented)return;this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||(new xi).hide(),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(jo);const n=()=>{this._config.scroll||this._focustrap.activate(),tn.trigger(this._element,Lo,{relatedTarget:e})};this._queueCallback(n,this._element,!0)}hide(){if(!this._isShown)return;const e=tn.trigger(this._element,Ro);if(e.defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.remove(jo),this._backdrop.hide();const t=()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new xi).reset(),tn.trigger(this._element,Do)};this._queueCallback(t,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_getConfig(e){return e={...Ao,...kn.getDataAttributes(this._element),..."object"===typeof e?e:{}},Et(Oo,e,xo),e}_initializeBackDrop(){return new Di({className:Co,isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_initializeFocusTrap(){return new Gi({trapElement:this._element})}_addEventListeners(){tn.on(this._element,Fo,e=>{this._config.keyboard&&e.key===So&&this.hide()})}static jQueryInterface(e){return this.each((function(){const t=Vo.getOrCreateInstance(this,e);if("string"===typeof e){if(void 0===t[e]||e.startsWith("_")||"constructor"===e)throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}tn.on(document,Mo,Uo,(function(e){const t=bt(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),It(this))return;tn.one(t,Do,()=>{Tt(this)&&this.focus()});const n=An.findOne(Po);n&&n!==t&&Vo.getInstance(n).hide();const r=Vo.getOrCreateInstance(t);r.toggle(this)})),tn.on(window,ko,()=>An.find(Po).forEach(e=>Vo.getOrCreateInstance(e).show())),an(Vo),Nt(Vo);const $o=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Bo=/^aria-[\w-]*$/i,Ho=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,qo=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,zo=(e,t)=>{const n=e.nodeName.toLowerCase();if(t.includes(n))return!$o.has(n)||Boolean(Ho.test(e.nodeValue)||qo.test(e.nodeValue));const r=t.filter(e=>e instanceof RegExp);for(let i=0,o=r.length;i<o;i++)if(r[i].test(n))return!0;return!1},Wo={"*":["class","dir","id","lang","role",Bo],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]};function Go(e,t,n){if(!e.length)return e;if(n&&"function"===typeof n)return n(e);const r=new window.DOMParser,i=r.parseFromString(e,"text/html"),o=[].concat(...i.body.querySelectorAll("*"));for(let s=0,a=o.length;s<a;s++){const e=o[s],n=e.nodeName.toLowerCase();if(!Object.keys(t).includes(n)){e.remove();continue}const r=[].concat(...e.attributes),i=[].concat(t["*"]||[],t[n]||[]);r.forEach(t=>{zo(t,i)||e.removeAttribute(t.nodeName)})}return i.body.innerHTML}const Ko="tooltip",Jo="bs.tooltip",Xo="."+Jo,Yo="bs-tooltip",Qo=new Set(["sanitize","allowList","sanitizeFn"]),Zo={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},es={AUTO:"auto",TOP:"top",RIGHT:Pt()?"left":"right",BOTTOM:"bottom",LEFT:Pt()?"right":"left"},ts={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:Wo,popperConfig:null},ns={HIDE:"hide"+Xo,HIDDEN:"hidden"+Xo,SHOW:"show"+Xo,SHOWN:"shown"+Xo,INSERTED:"inserted"+Xo,CLICK:"click"+Xo,FOCUSIN:"focusin"+Xo,FOCUSOUT:"focusout"+Xo,MOUSEENTER:"mouseenter"+Xo,MOUSELEAVE:"mouseleave"+Xo},rs="fade",is="modal",os="show",ss="show",as="out",cs=".tooltip-inner",us="."+is,ls="hide.bs.modal",ds="hover",hs="focus",fs="click",ps="manual";class ms extends sn{constructor(e,t){if("undefined"===typeof r)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(e),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(t),this.tip=null,this._setListeners()}static get Default(){return ts}static get NAME(){return Ko}static get Event(){return ns}static get DefaultType(){return Zo}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(e){if(this._isEnabled)if(e){const t=this._initializeOnDelegatedTarget(e);t._activeTrigger.click=!t._activeTrigger.click,t._isWithActiveTrigger()?t._enter(null,t):t._leave(null,t)}else{if(this.getTipElement().classList.contains(os))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),tn.off(this._element.closest(us),ls,this._hideModalHandler),this.tip&&this.tip.remove(),this._disposePopper(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const e=tn.trigger(this._element,this.constructor.Event.SHOW),t=kt(this._element),n=null===t?this._element.ownerDocument.documentElement.contains(this._element):t.contains(this._element);if(e.defaultPrevented||!n)return;"tooltip"===this.constructor.NAME&&this.tip&&this.getTitle()!==this.tip.querySelector(cs).innerHTML&&(this._disposePopper(),this.tip.remove(),this.tip=null);const r=this.getTipElement(),i=mt(this.constructor.NAME);r.setAttribute("id",i),this._element.setAttribute("aria-describedby",i),this._config.animation&&r.classList.add(rs);const o="function"===typeof this._config.placement?this._config.placement.call(this,r,this._element):this._config.placement,s=this._getAttachment(o);this._addAttachmentClass(s);const{container:a}=this._config;rn.set(r,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(a.append(r),tn.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ct(this._element,r,this._getPopperConfig(s)),r.classList.add(os);const c=this._resolvePossibleFunction(this._config.customClass);c&&r.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>{tn.on(e,"mouseover",St)});const u=()=>{const e=this._hoverState;this._hoverState=null,tn.trigger(this._element,this.constructor.Event.SHOWN),e===as&&this._leave(null,this)},l=this.tip.classList.contains(rs);this._queueCallback(u,this.tip,l)}hide(){if(!this._popper)return;const e=this.getTipElement(),t=()=>{this._isWithActiveTrigger()||(this._hoverState!==ss&&e.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),tn.trigger(this._element,this.constructor.Event.HIDDEN),this._disposePopper())},n=tn.trigger(this._element,this.constructor.Event.HIDE);if(n.defaultPrevented)return;e.classList.remove(os),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(e=>tn.off(e,"mouseover",St)),this._activeTrigger[fs]=!1,this._activeTrigger[hs]=!1,this._activeTrigger[ds]=!1;const r=this.tip.classList.contains(rs);this._queueCallback(t,this.tip,r),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const e=document.createElement("div");e.innerHTML=this._config.template;const t=e.children[0];return this.setContent(t),t.classList.remove(rs,os),this.tip=t,this.tip}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),cs)}_sanitizeAndSetContent(e,t,n){const r=An.findOne(n,e);t||!r?this.setElementContent(r,t):r.remove()}setElementContent(e,t){if(null!==e)return wt(t)?(t=Ot(t),void(this._config.html?t.parentNode!==e&&(e.innerHTML="",e.append(t)):e.textContent=t.textContent)):void(this._config.html?(this._config.sanitize&&(t=Go(t,this._config.allowList,this._config.sanitizeFn)),e.innerHTML=t):e.textContent=t)}getTitle(){const e=this._element.getAttribute("data-bs-original-title")||this._config.title;return this._resolvePossibleFunction(e)}updateAttachment(e){return"right"===e?"end":"left"===e?"start":e}_initializeOnDelegatedTarget(e,t){return t||this.constructor.getOrCreateInstance(e.delegateTarget,this._getDelegateConfig())}_getOffset(){const{offset:e}=this._config;return"string"===typeof e?e.split(",").map(e=>Number.parseInt(e,10)):"function"===typeof e?t=>e(t,this._element):e}_resolvePossibleFunction(e){return"function"===typeof e?e.call(this._element):e}_getPopperConfig(e){const t={placement:e,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:e=>this._handlePopperPlacementChange(e)}],onFirstUpdate:e=>{e.options.placement!==e.placement&&this._handlePopperPlacementChange(e)}};return{...t,..."function"===typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_addAttachmentClass(e){this.getTipElement().classList.add(`${this._getBasicClassPrefix()}-${this.updateAttachment(e)}`)}_getAttachment(e){return es[e.toUpperCase()]}_setListeners(){const e=this._config.trigger.split(" ");e.forEach(e=>{if("click"===e)tn.on(this._element,this.constructor.Event.CLICK,this._config.selector,e=>this.toggle(e));else if(e!==ps){const t=e===ds?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,n=e===ds?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;tn.on(this._element,t,this._config.selector,e=>this._enter(e)),tn.on(this._element,n,this._config.selector,e=>this._leave(e))}}),this._hideModalHandler=()=>{this._element&&this.hide()},tn.on(this._element.closest(us),ls,this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const e=this._element.getAttribute("title"),t=typeof this._element.getAttribute("data-bs-original-title");(e||"string"!==t)&&(this._element.setAttribute("data-bs-original-title",e||""),!e||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",e),this._element.setAttribute("title",""))}_enter(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusin"===e.type?hs:ds]=!0),t.getTipElement().classList.contains(os)||t._hoverState===ss?t._hoverState=ss:(clearTimeout(t._timeout),t._hoverState=ss,t._config.delay&&t._config.delay.show?t._timeout=setTimeout(()=>{t._hoverState===ss&&t.show()},t._config.delay.show):t.show())}_leave(e,t){t=this._initializeOnDelegatedTarget(e,t),e&&(t._activeTrigger["focusout"===e.type?hs:ds]=t._element.contains(e.relatedTarget)),t._isWithActiveTrigger()||(clearTimeout(t._timeout),t._hoverState=as,t._config.delay&&t._config.delay.hide?t._timeout=setTimeout(()=>{t._hoverState===as&&t.hide()},t._config.delay.hide):t.hide())}_isWithActiveTrigger(){for(const e in this._activeTrigger)if(this._activeTrigger[e])return!0;return!1}_getConfig(e){const t=kn.getDataAttributes(this._element);return Object.keys(t).forEach(e=>{Qo.has(e)&&delete t[e]}),e={...this.constructor.Default,...t,..."object"===typeof e&&e?e:{}},e.container=!1===e.container?document.body:Ot(e.container),"number"===typeof e.delay&&(e.delay={show:e.delay,hide:e.delay}),"number"===typeof e.title&&(e.title=e.title.toString()),"number"===typeof e.content&&(e.content=e.content.toString()),Et(Ko,e,this.constructor.DefaultType),e.sanitize&&(e.template=Go(e.template,e.allowList,e.sanitizeFn)),e}_getDelegateConfig(){const e={};for(const t in this._config)this.constructor.Default[t]!==this._config[t]&&(e[t]=this._config[t]);return e}_cleanTipClass(){const e=this.getTipElement(),t=new RegExp(`(^|\\s)${this._getBasicClassPrefix()}\\S+`,"g"),n=e.getAttribute("class").match(t);null!==n&&n.length>0&&n.map(e=>e.trim()).forEach(t=>e.classList.remove(t))}_getBasicClassPrefix(){return Yo}_handlePopperPlacementChange(e){const{state:t}=e;t&&(this.tip=t.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(t.placement)))}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null)}static jQueryInterface(e){return this.each((function(){const t=ms.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Nt(ms);const gs="popover",vs="bs.popover",bs="."+vs,ys="bs-popover",_s={...ms.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},ws={...ms.DefaultType,content:"(string|element|function)"},Os={HIDE:"hide"+bs,HIDDEN:"hidden"+bs,SHOW:"show"+bs,SHOWN:"shown"+bs,INSERTED:"inserted"+bs,CLICK:"click"+bs,FOCUSIN:"focusin"+bs,FOCUSOUT:"focusout"+bs,MOUSEENTER:"mouseenter"+bs,MOUSELEAVE:"mouseleave"+bs},Es=".popover-header",Ts=".popover-body";class Is extends ms{static get Default(){return _s}static get NAME(){return gs}static get Event(){return Os}static get DefaultType(){return ws}isWithContent(){return this.getTitle()||this._getContent()}setContent(e){this._sanitizeAndSetContent(e,this.getTitle(),Es),this._sanitizeAndSetContent(e,this._getContent(),Ts)}_getContent(){return this._resolvePossibleFunction(this._config.content)}_getBasicClassPrefix(){return ys}static jQueryInterface(e){return this.each((function(){const t=Is.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}Nt(Is);const ks="scrollspy",Ss="bs.scrollspy",As="."+Ss,xs=".data-api",js={offset:10,method:"auto",target:""},Cs={offset:"number",method:"string",target:"(string|element)"},Ps="activate"+As,Ns="scroll"+As,Ls=`load${As}${xs}`,Rs="dropdown-item",Ds="active",Ms='[data-bs-spy="scroll"]',Fs=".nav, .list-group",Us=".nav-link",Vs=".nav-item",$s=".list-group-item",Bs=`${Us}, ${$s}, .${Rs}`,Hs=".dropdown",qs=".dropdown-toggle",zs="offset",Ws="position";class Gs extends sn{constructor(e,t){super(e),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(t),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,tn.on(this._scrollElement,Ns,()=>this._process()),this.refresh(),this._process()}static get Default(){return js}static get NAME(){return ks}refresh(){const e=this._scrollElement===this._scrollElement.window?zs:Ws,t="auto"===this._config.method?e:this._config.method,n=t===Ws?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();const r=An.find(Bs,this._config.target);r.map(e=>{const r=vt(e),i=r?An.findOne(r):null;if(i){const e=i.getBoundingClientRect();if(e.width||e.height)return[kn[t](i).top+n,r]}return null}).filter(e=>e).sort((e,t)=>e[0]-t[0]).forEach(e=>{this._offsets.push(e[0]),this._targets.push(e[1])})}dispose(){tn.off(this._scrollElement,As),super.dispose()}_getConfig(e){return e={...js,...kn.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},e.target=Ot(e.target)||document.documentElement,Et(ks,e,Cs),e}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const e=this._getScrollTop()+this._config.offset,t=this._getScrollHeight(),n=this._config.offset+t-this._getOffsetHeight();if(this._scrollHeight!==t&&this.refresh(),e>=n){const e=this._targets[this._targets.length-1];this._activeTarget!==e&&this._activate(e)}else{if(this._activeTarget&&e<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let t=this._offsets.length;t--;){const n=this._activeTarget!==this._targets[t]&&e>=this._offsets[t]&&("undefined"===typeof this._offsets[t+1]||e<this._offsets[t+1]);n&&this._activate(this._targets[t])}}}_activate(e){this._activeTarget=e,this._clear();const t=Bs.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=An.findOne(t.join(","),this._config.target);n.classList.add(Ds),n.classList.contains(Rs)?An.findOne(qs,n.closest(Hs)).classList.add(Ds):An.parents(n,Fs).forEach(e=>{An.prev(e,`${Us}, ${$s}`).forEach(e=>e.classList.add(Ds)),An.prev(e,Vs).forEach(e=>{An.children(e,Us).forEach(e=>e.classList.add(Ds))})}),tn.trigger(this._scrollElement,Ps,{relatedTarget:e})}_clear(){An.find(Bs,this._config.target).filter(e=>e.classList.contains(Ds)).forEach(e=>e.classList.remove(Ds))}static jQueryInterface(e){return this.each((function(){const t=Gs.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(window,Ls,()=>{An.find(Ms).forEach(e=>new Gs(e))}),Nt(Gs);const Ks="tab",Js="bs.tab",Xs="."+Js,Ys=".data-api",Qs="hide"+Xs,Zs="hidden"+Xs,ea="show"+Xs,ta="shown"+Xs,na=`click${Xs}${Ys}`,ra="dropdown-menu",ia="active",oa="fade",sa="show",aa=".dropdown",ca=".nav, .list-group",ua=".active",la=":scope > li > .active",da='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',ha=".dropdown-toggle",fa=":scope > .dropdown-menu .active";class pa extends sn{static get NAME(){return Ks}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains(ia))return;let e;const t=bt(this._element),n=this._element.closest(ca);if(n){const t="UL"===n.nodeName||"OL"===n.nodeName?la:ua;e=An.find(t,n),e=e[e.length-1]}const r=e?tn.trigger(e,Qs,{relatedTarget:this._element}):null,i=tn.trigger(this._element,ea,{relatedTarget:e});if(i.defaultPrevented||null!==r&&r.defaultPrevented)return;this._activate(this._element,n);const o=()=>{tn.trigger(e,Zs,{relatedTarget:this._element}),tn.trigger(this._element,ta,{relatedTarget:e})};t?this._activate(t,t.parentNode,o):o()}_activate(e,t,n){const r=!t||"UL"!==t.nodeName&&"OL"!==t.nodeName?An.children(t,ua):An.find(la,t),i=r[0],o=n&&i&&i.classList.contains(oa),s=()=>this._transitionComplete(e,i,n);i&&o?(i.classList.remove(sa),this._queueCallback(s,e,!0)):s()}_transitionComplete(e,t,n){if(t){t.classList.remove(ia);const e=An.findOne(fa,t.parentNode);e&&e.classList.remove(ia),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!1)}e.classList.add(ia),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),At(e),e.classList.contains(oa)&&e.classList.add(sa);let r=e.parentNode;if(r&&"LI"===r.nodeName&&(r=r.parentNode),r&&r.classList.contains(ra)){const t=e.closest(aa);t&&An.find(ha,t).forEach(e=>e.classList.add(ia)),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(e){return this.each((function(){const t=pa.getOrCreateInstance(this);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e]()}}))}}tn.on(document,na,da,(function(e){if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),It(this))return;const t=pa.getOrCreateInstance(this);t.show()})),Nt(pa);const ma="toast",ga="bs.toast",va="."+ga,ba="mouseover"+va,ya="mouseout"+va,_a="focusin"+va,wa="focusout"+va,Oa="hide"+va,Ea="hidden"+va,Ta="show"+va,Ia="shown"+va,ka="fade",Sa="hide",Aa="show",xa="showing",ja={animation:"boolean",autohide:"boolean",delay:"number"},Ca={animation:!0,autohide:!0,delay:5e3};class Pa extends sn{constructor(e,t){super(e),this._config=this._getConfig(t),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ja}static get Default(){return Ca}static get NAME(){return ma}show(){const e=tn.trigger(this._element,Ta);if(e.defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(ka);const t=()=>{this._element.classList.remove(xa),tn.trigger(this._element,Ia),this._maybeScheduleHide()};this._element.classList.remove(Sa),At(this._element),this._element.classList.add(Aa),this._element.classList.add(xa),this._queueCallback(t,this._element,this._config.animation)}hide(){if(!this._element.classList.contains(Aa))return;const e=tn.trigger(this._element,Oa);if(e.defaultPrevented)return;const t=()=>{this._element.classList.add(Sa),this._element.classList.remove(xa),this._element.classList.remove(Aa),tn.trigger(this._element,Ea)};this._element.classList.add(xa),this._queueCallback(t,this._element,this._config.animation)}dispose(){this._clearTimeout(),this._element.classList.contains(Aa)&&this._element.classList.remove(Aa),super.dispose()}_getConfig(e){return e={...Ca,...kn.getDataAttributes(this._element),..."object"===typeof e&&e?e:{}},Et(ma,e,this.constructor.DefaultType),e}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(e,t){switch(e.type){case"mouseover":case"mouseout":this._hasMouseInteraction=t;break;case"focusin":case"focusout":this._hasKeyboardInteraction=t;break}if(t)return void this._clearTimeout();const n=e.relatedTarget;this._element===n||this._element.contains(n)||this._maybeScheduleHide()}_setListeners(){tn.on(this._element,ba,e=>this._onInteraction(e,!0)),tn.on(this._element,ya,e=>this._onInteraction(e,!1)),tn.on(this._element,_a,e=>this._onInteraction(e,!0)),tn.on(this._element,wa,e=>this._onInteraction(e,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(e){return this.each((function(){const t=Pa.getOrCreateInstance(this,e);if("string"===typeof e){if("undefined"===typeof t[e])throw new TypeError(`No method named "${e}"`);t[e](this)}}))}}an(Pa),Nt(Pa)},"7c73":function(e,t,n){var r,i=n("825a"),o=n("37e8"),s=n("7839"),a=n("d012"),c=n("1be4"),u=n("cc12"),l=n("f772"),d=">",h="<",f="prototype",p="script",m=l("IE_PROTO"),g=function(){},v=function(e){return h+p+d+e+h+"/"+p+d},b=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},y=function(){var e,t=u("iframe"),n="java"+p+":";return t.style.display="none",c.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},_=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}_="undefined"!=typeof document?document.domain&&r?b(r):y():b(r);var e=s.length;while(e--)delete _[f][s[e]];return _()};a[m]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(g[f]=i(e),n=new g,g[f]=null,n[m]=e):n=_(),void 0===t?n:o.f(n,t)}},"7dd0":function(e,t,n){"use strict";var r=n("23e7"),i=n("c65b"),o=n("c430"),s=n("5e77"),a=n("1626"),c=n("9ed3"),u=n("e163"),l=n("d2bb"),d=n("d44e"),h=n("9112"),f=n("6eeb"),p=n("b622"),m=n("3f8c"),g=n("ae93"),v=s.PROPER,b=s.CONFIGURABLE,y=g.IteratorPrototype,_=g.BUGGY_SAFARI_ITERATORS,w=p("iterator"),O="keys",E="values",T="entries",I=function(){return this};e.exports=function(e,t,n,s,p,g,k){c(n,t,s);var S,A,x,j=function(e){if(e===p&&R)return R;if(!_&&e in N)return N[e];switch(e){case O:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},C=t+" Iterator",P=!1,N=e.prototype,L=N[w]||N["@@iterator"]||p&&N[p],R=!_&&L||j(p),D="Array"==t&&N.entries||L;if(D&&(S=u(D.call(new e)),S!==Object.prototype&&S.next&&(o||u(S)===y||(l?l(S,y):a(S[w])||f(S,w,I)),d(S,C,!0,!0),o&&(m[C]=I))),v&&p==E&&L&&L.name!==E&&(!o&&b?h(N,"name",E):(P=!0,R=function(){return i(L,this)})),p)if(A={values:j(E),keys:g?R:j(O),entries:j(T)},k)for(x in A)(_||P||!(x in N))&&f(N,x,A[x]);else r({target:t,proto:!0,forced:_||P},A);return o&&!k||N[w]===R||f(N,w,R,{name:p}),m[t]=R,A}},"7f9a":function(e,t,n){var r=n("da84"),i=n("1626"),o=n("8925"),s=r.WeakMap;e.exports=i(s)&&/native code/.test(o(s))},"825a":function(e,t,n){var r=n("da84"),i=n("861d"),o=r.String,s=r.TypeError;e.exports=function(e){if(i(e))return e;throw s(o(e)+" is not an object")}},"83ab":function(e,t,n){var r=n("d039");e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},"861d":function(e,t,n){var r=n("1626");e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},8925:function(e,t,n){var r=n("e330"),i=n("1626"),o=n("c6cd"),s=r(Function.toString);i(o.inspectSource)||(o.inspectSource=function(e){return s(e)}),e.exports=o.inspectSource},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"90e3":function(e,t,n){var r=n("e330"),i=0,o=Math.random(),s=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+s(++i+o,36)}},9112:function(e,t,n){var r=n("83ab"),i=n("9bf2"),o=n("5c6c");e.exports=r?function(e,t,n){return i.f(e,t,o(1,n))}:function(e,t,n){return e[t]=n,e}},9263:function(e,t,n){"use strict";var r=n("c65b"),i=n("e330"),o=n("577e"),s=n("ad6d"),a=n("9f7f"),c=n("5692"),u=n("7c73"),l=n("69f3").get,d=n("fce3"),h=n("107c"),f=c("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,m=p,g=i("".charAt),v=i("".indexOf),b=i("".replace),y=i("".slice),_=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),w=a.BROKEN_CARET,O=void 0!==/()??/.exec("")[1],E=_||O||w||d||h;E&&(m=function(e){var t,n,i,a,c,d,h,E=this,T=l(E),I=o(e),k=T.raw;if(k)return k.lastIndex=E.lastIndex,t=r(m,k,I),E.lastIndex=k.lastIndex,t;var S=T.groups,A=w&&E.sticky,x=r(s,E),j=E.source,C=0,P=I;if(A&&(x=b(x,"y",""),-1===v(x,"g")&&(x+="g"),P=y(I,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==g(I,E.lastIndex-1))&&(j="(?: "+j+")",P=" "+P,C++),n=new RegExp("^(?:"+j+")",x)),O&&(n=new RegExp("^"+j+"$(?!\\s)",x)),_&&(i=E.lastIndex),a=r(p,A?n:E,P),A?a?(a.input=y(a.input,C),a[0]=y(a[0],C),a.index=E.lastIndex,E.lastIndex+=a[0].length):E.lastIndex=0:_&&a&&(E.lastIndex=E.global?a.index+a[0].length:i),O&&a&&a.length>1&&r(f,a[0],n,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(a[c]=void 0)})),a&&S)for(a.groups=d=u(null),c=0;c<S.length;c++)h=S[c],d[h[0]]=a[h[1]];return a}),e.exports=m},"94ca":function(e,t,n){var r=n("d039"),i=n("1626"),o=/#|\.prototype\./,s=function(e,t){var n=c[a(e)];return n==l||n!=u&&(i(t)?r(t):!!t)},a=s.normalize=function(e){return String(e).replace(o,".").toLowerCase()},c=s.data={},u=s.NATIVE="N",l=s.POLYFILL="P";e.exports=s},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,i="function"===typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",a=i.toStringTag||"@@toStringTag";function c(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{c({},"")}catch(P){c=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var i=t&&t.prototype instanceof g?t:g,o=Object.create(i.prototype),s=new x(r||[]);return o._invoke=I(e,n,s),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(P){return{type:"throw",arg:P}}}e.wrap=u;var d="suspendedStart",h="suspendedYield",f="executing",p="completed",m={};function g(){}function v(){}function b(){}var y={};c(y,o,(function(){return this}));var _=Object.getPrototypeOf,w=_&&_(_(j([])));w&&w!==n&&r.call(w,o)&&(y=w);var O=b.prototype=g.prototype=Object.create(y);function E(e){["next","throw","return"].forEach((function(t){c(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(i,o,s,a){var c=l(e[i],e,o);if("throw"!==c.type){var u=c.arg,d=u.value;return d&&"object"===typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,s,a)}),(function(e){n("throw",e,s,a)})):t.resolve(d).then((function(e){u.value=e,s(u)}),(function(e){return n("throw",e,s,a)}))}a(c.arg)}var i;function o(e,r){function o(){return new t((function(t,i){n(e,r,t,i)}))}return i=i?i.then(o,o):o()}this._invoke=o}function I(e,t,n){var r=d;return function(i,o){if(r===f)throw new Error("Generator is already running");if(r===p){if("throw"===i)throw o;return C()}n.method=i,n.arg=o;while(1){var s=n.delegate;if(s){var a=k(s,n);if(a){if(a===m)continue;return a}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===d)throw r=p,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=f;var c=l(e,t,n);if("normal"===c.type){if(r=n.done?p:h,c.arg===m)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r=p,n.method="throw",n.arg=c.arg)}}}function k(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,k(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var i=l(r,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,m;var o=i.arg;return o?o.done?(n[e.resultName]=o.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):o:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function A(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function j(e){if(e){var n=e[o];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var i=-1,s=function n(){while(++i<e.length)if(r.call(e,i))return n.value=e[i],n.done=!1,n;return n.value=t,n.done=!0,n};return s.next=s}}return{next:C}}function C(){return{value:t,done:!0}}return v.prototype=b,c(O,"constructor",b),c(b,"constructor",v),v.displayName=c(b,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,c(e,a,"GeneratorFunction")),e.prototype=Object.create(O),e},e.awrap=function(e){return{__await:e}},E(T.prototype),c(T.prototype,s,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var s=new T(u(t,n,r,i),o);return e.isGeneratorFunction(n)?s:s.next().then((function(e){return e.done?e.value:s.next()}))},E(O),c(O,a,"Generator"),c(O,o,(function(){return this})),c(O,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=j,x.prototype={constructor:x,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function i(r,i){return a.type="throw",a.arg=e,n.next=r,i&&(n.method="next",n.arg=t),!!i}for(var o=this.tryEntries.length-1;o>=0;--o){var s=this.tryEntries[o],a=s.completion;if("root"===s.tryLoc)return i("end");if(s.tryLoc<=this.prev){var c=r.call(s,"catchLoc"),u=r.call(s,"finallyLoc");if(c&&u){if(this.prev<s.catchLoc)return i(s.catchLoc,!0);if(this.prev<s.finallyLoc)return i(s.finallyLoc)}else if(c){if(this.prev<s.catchLoc)return i(s.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<s.finallyLoc)return i(s.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&r.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var s=o?o.completion:{};return s.type=e,s.arg=t,o?(this.method="next",this.next=o.finallyLoc,m):this.complete(s)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),A(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;A(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:j(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(i){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9a1f":function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("59ed"),s=n("825a"),a=n("0d51"),c=n("35a1"),u=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?c(e):t;if(o(n))return s(i(n,e));throw u(a(e)+" is not iterable")}},"9bf2":function(e,t,n){var r=n("da84"),i=n("83ab"),o=n("0cfb"),s=n("aed9"),a=n("825a"),c=n("a04b"),u=r.TypeError,l=Object.defineProperty,d=Object.getOwnPropertyDescriptor,h="enumerable",f="configurable",p="writable";t.f=i?s?function(e,t,n){if(a(e),t=c(t),a(n),"function"===typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=d(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:f in n?n[f]:r[f],enumerable:h in n?n[h]:r[h],writable:!1})}return l(e,t,n)}:l:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return l(e,t,n)}catch(r){}if("get"in n||"set"in n)throw u("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},"9ed3":function(e,t,n){"use strict";var r=n("ae93").IteratorPrototype,i=n("7c73"),o=n("5c6c"),s=n("d44e"),a=n("3f8c"),c=function(){return this};e.exports=function(e,t,n,u){var l=t+" Iterator";return e.prototype=i(r,{next:o(+!u,n)}),s(e,l,!1,!0),a[l]=c,e}},"9f7f":function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp,s=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=s||r((function(){return!o("a","y").sticky})),c=s||r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:c,MISSED_STICKY:a,UNSUPPORTED_Y:s}},"9ff4":function(e,t,n){"use strict";(function(e){function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,"a",(function(){return T})),n.d(t,"b",(function(){return E})),n.d(t,"c",(function(){return k})),n.d(t,"d",(function(){return I})),n.d(t,"e",(function(){return Y})),n.d(t,"f",(function(){return ee})),n.d(t,"g",(function(){return ie})),n.d(t,"h",(function(){return j})),n.d(t,"i",(function(){return ae})),n.d(t,"j",(function(){return ne})),n.d(t,"k",(function(){return N})),n.d(t,"l",(function(){return Z})),n.d(t,"m",(function(){return c})),n.d(t,"n",(function(){return re})),n.d(t,"o",(function(){return L})),n.d(t,"p",(function(){return F})),n.d(t,"q",(function(){return o})),n.d(t,"r",(function(){return g})),n.d(t,"s",(function(){return G})),n.d(t,"t",(function(){return R})),n.d(t,"u",(function(){return x})),n.d(t,"v",(function(){return $})),n.d(t,"w",(function(){return A})),n.d(t,"x",(function(){return W})),n.d(t,"y",(function(){return B})),n.d(t,"z",(function(){return K})),n.d(t,"A",(function(){return v})),n.d(t,"B",(function(){return D})),n.d(t,"C",(function(){return a})),n.d(t,"D",(function(){return U})),n.d(t,"E",(function(){return V})),n.d(t,"F",(function(){return y})),n.d(t,"G",(function(){return _})),n.d(t,"H",(function(){return r})),n.d(t,"I",(function(){return f})),n.d(t,"J",(function(){return u})),n.d(t,"K",(function(){return C})),n.d(t,"L",(function(){return w})),n.d(t,"M",(function(){return te})),n.d(t,"N",(function(){return oe})),n.d(t,"O",(function(){return z}));const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",o=r(i);const s="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(s);function c(e){return!!e||""===e}function u(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=U(r)?h(r):u(r);if(i)for(const e in i)t[e]=i[e]}return t}return U(e)||$(e)?e:void 0}const l=/;(?![^(]*\))/g,d=/:(.+)/;function h(e){const t={};return e.split(l).forEach(e=>{if(e){const n=e.split(d);n.length>1&&(t[n[0].trim()]=n[1].trim())}}),t}function f(e){let t="";if(U(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if($(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const p="html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot",m="svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistanceLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view",g=r(p),v=r(m);function b(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=y(e[r],t[r]);return n}function y(e,t){if(e===t)return!0;let n=M(e),r=M(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=L(e),r=L(t),n||r)return!(!n||!r)&&b(e,t);if(n=$(e),r=$(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,o=Object.keys(t).length;if(i!==o)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!y(e[n],t[n]))return!1}}return String(e)===String(t)}function _(e,t){return e.findIndex(e=>y(e,t))}const w=e=>null==e?"":L(e)||$(e)&&(e.toString===H||!F(e.toString))?JSON.stringify(e,O,2):String(e),O=(e,t)=>t&&t.__v_isRef?O(e,t.value):R(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[t,n])=>(e[t+" =>"]=n,e),{})}:D(t)?{[`Set(${t.size})`]:[...t.values()]}:!$(t)||L(t)||W(t)?t:String(t),E={},T=[],I=()=>{},k=()=>!1,S=/^on[^a-z]/,A=e=>S.test(e),x=e=>e.startsWith("onUpdate:"),j=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},P=Object.prototype.hasOwnProperty,N=(e,t)=>P.call(e,t),L=Array.isArray,R=e=>"[object Map]"===q(e),D=e=>"[object Set]"===q(e),M=e=>e instanceof Date,F=e=>"function"===typeof e,U=e=>"string"===typeof e,V=e=>"symbol"===typeof e,$=e=>null!==e&&"object"===typeof e,B=e=>$(e)&&F(e.then)&&F(e.catch),H=Object.prototype.toString,q=e=>H.call(e),z=e=>q(e).slice(8,-1),W=e=>"[object Object]"===q(e),G=e=>U(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,K=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),J=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},X=/-(\w)/g,Y=J(e=>e.replace(X,(e,t)=>t?t.toUpperCase():"")),Q=/\B([A-Z])/g,Z=J(e=>e.replace(Q,"-$1").toLowerCase()),ee=J(e=>e.charAt(0).toUpperCase()+e.slice(1)),te=J(e=>e?"on"+ee(e):""),ne=(e,t)=>!Object.is(e,t),re=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ie=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},oe=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let se;const ae=()=>se||(se="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof e?e:{})}).call(this,n("c8ba"))},a04b:function(e,t,n){var r=n("c04e"),i=n("d9b5");e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},a4b4:function(e,t,n){var r=n("342f");e.exports=/web0s(?!.*chrome)/i.test(r)},a680:function(e,t,n){"use strict";n.d(t,"a",(function(){return zt})),n.d(t,"b",(function(){return qt})),n.d(t,"c",(function(){return ht})),n.d(t,"d",(function(){return Bt})),n.d(t,"e",(function(){return ct})),n.d(t,"f",(function(){return Ht}));var r=n("589b"),i=n("22e5"),o=n("e691"),s=n("1fd5");
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
class a{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}a.UNAUTHENTICATED=new a(null),a.GOOGLE_CREDENTIALS=new a("google-credentials-uid"),a.FIRST_PARTY=new a("first-party-uid"),a.MOCK_USER=new a("mock-user");
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
let c="9.6.2";
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
 */const u=new o["b"]("@firebase/firestore");function l(e,...t){if(u.logLevel<=o["a"].DEBUG){const n=t.map(f);u.debug(`Firestore (${c}): ${e}`,...n)}}function d(e,...t){if(u.logLevel<=o["a"].ERROR){const n=t.map(f);u.error(`Firestore (${c}): ${e}`,...n)}}function h(e,...t){if(u.logLevel<=o["a"].WARN){const n=t.map(f);u.warn(`Firestore (${c}): ${e}`,...n)}}function f(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */var t}
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
 */function p(e="Unexpected state"){const t=`FIRESTORE (${c}) INTERNAL ASSERTION FAILED: `+e;throw d(t),new Error(t)}function m(e,t){e||p()}function g(e,t){return e}
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
 */const v="ok",b="cancelled",y="unknown",_="invalid-argument",w="deadline-exceeded",O="not-found",E="permission-denied",T="unauthenticated",I="resource-exhausted",k="failed-precondition",S="aborted",A="out-of-range",x="unimplemented",j="internal",C="unavailable";class P extends s["c"]{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
class N{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer "+e)}}class L{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(a.UNAUTHENTICATED))}shutdown(){}}class R{constructor(e){this.auth=null,e.onInit(e=>{this.auth=e})}getToken(){return this.auth?this.auth.getToken().then(e=>e?(m("string"==typeof e.accessToken),new N(e.accessToken,new a(this.auth.getUid()))):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}class D{constructor(e,t,n){this.type="FirstParty",this.user=a.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class M{constructor(e,t,n){this.t=e,this.i=t,this.o=n}getToken(){return Promise.resolve(new D(this.t,this.i,this.o))}start(e,t){e.enqueueRetryable(()=>t(a.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class F{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class U{constructor(e){this.u=e,this.appCheck=null,e.onInit(e=>{this.appCheck=e})}getToken(){return this.appCheck?this.appCheck.getToken().then(e=>e?(m("string"==typeof e.token),new F(e.token)):null):Promise.resolve(null)}invalidateToken(){}start(e,t){}shutdown(){}}
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
 */class V{constructor(e,t,n,r,i,o,s,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=s,this.useFetchStreams=a}}class ${constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof $&&e.projectId===this.projectId&&e.database===this.database}}
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
 */class B{constructor(e,t,n){void 0===t?t=0:t>e.length&&p(),void 0===n?n=e.length-t:n>e.length-t&&p(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===B.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof B?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class H extends B{construct(e,t,n){return new H(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new P(_,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new H(t)}static emptyPath(){return new H([])}}const q=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class z extends B{construct(e,t,n){return new z(e,t,n)}static isValidIdentifier(e){return q.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),z.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new z(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new P(_,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let o=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new P(_,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new P(_,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(o=!o,r++):"."!==t||o?(n+=t,r++):(i(),r++)}if(i(),o)throw new P(_,"Unterminated ` in path: "+e);return new z(t)}static emptyPath(){return new z([])}}
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
 */class W{constructor(e){this.path=e}static fromPath(e){return new W(H.fromString(e))}static fromName(e){return new W(H.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===H.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return H.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new W(new H(e.slice()))}}
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
 */function G(e,t,n){if(!n)throw new P(_,`Function ${e}() cannot be called with an empty ${t}.`)}function K(e){if(!W.isDocumentKey(e))throw new P(_,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function J(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=e.substring(0,20)+"..."),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":p()}function X(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new P(_,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=J(e);throw new P(_,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Y(e){return 0===e&&1/e==-1/0}
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
 */const Q={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */var Z,ee;function te(e){if(void 0===e)return d("RPC_ERROR","HTTP error has no status"),y;switch(e){case 200:return v;case 400:return k;case 401:return T;case 403:return E;case 404:return O;case 409:return S;case 416:return A;case 429:return I;case 499:return b;case 500:return y;case 501:return x;case 503:return C;case 504:return w;default:return e>=200&&e<300?v:e>=400&&e<500?k:e>=500&&e<600?j:y}}
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
 */(ee=Z||(Z={}))[ee.OK=0]="OK",ee[ee.CANCELLED=1]="CANCELLED",ee[ee.UNKNOWN=2]="UNKNOWN",ee[ee.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ee[ee.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ee[ee.NOT_FOUND=5]="NOT_FOUND",ee[ee.ALREADY_EXISTS=6]="ALREADY_EXISTS",ee[ee.PERMISSION_DENIED=7]="PERMISSION_DENIED",ee[ee.UNAUTHENTICATED=16]="UNAUTHENTICATED",ee[ee.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ee[ee.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ee[ee.ABORTED=10]="ABORTED",ee[ee.OUT_OF_RANGE=11]="OUT_OF_RANGE",ee[ee.UNIMPLEMENTED=12]="UNIMPLEMENTED",ee[ee.INTERNAL=13]="INTERNAL",ee[ee.UNAVAILABLE=14]="UNAVAILABLE",ee[ee.DATA_LOSS=15]="DATA_LOSS";class ne extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.h=t+"://"+e.host,this.l="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}m(e,t,n,r,i){const o=this.p(e,t);l("RestConnection","Sending: ",o,n);const s={};return this.g(s,r,i),this.v(e,o,s,n).then(e=>(l("RestConnection","Received: ",e),e),t=>{throw h("RestConnection",e+" failed with error: ",t,"url: ",o,"request:",n),t})}T(e,t,n,r,i){return this.m(e,t,n,r,i)}g(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+c,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}p(e,t){const n=Q[e];return`${this.h}/v1/${t}:${n}`}}{constructor(e,t){super(e),this.I=t}A(e,t){throw new Error("Not supported by FetchConnection")}async v(e,t,n,r){const i=JSON.stringify(r);let o;try{o=await this.I(t,{method:"POST",headers:n,body:i})}catch(e){throw new P(te(e.status),"Request failed with error: "+e.statusText)}if(!o.ok)throw new P(te(o.status),"Request failed with error: "+o.statusText);return o.json()}}
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
 */function re(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */class ie{static P(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=re(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function oe(e,t){return e<t?-1:e>t?1:0}function se(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}
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
 */class ae{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new P(_,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new P(_,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new P(_,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(_,"Timestamp seconds out of range: "+e)}static now(){return ae.fromMillis(Date.now())}static fromDate(e){return ae.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new ae(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?oe(this.nanoseconds,e.nanoseconds):oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class ce{constructor(e){this.timestamp=e}static fromTimestamp(e){return new ce(e)}static min(){return new ce(new ae(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function ue(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function le(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}
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
 */class de{constructor(e){this.fields=e,e.sort(z.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return se(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
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
 */class he{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new he(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new he(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}he.EMPTY_BYTE_STRING=new he("");const fe=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function pe(e){if(m(!!e),"string"==typeof e){let t=0;const n=fe.exec(e);if(m(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:me(e.seconds),nanos:me(e.nanos)}}function me(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ge(e){return"string"==typeof e?he.fromBase64String(e):he.fromUint8Array(e)}
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
 */function ve(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function be(e){const t=e.mapValue.fields.__previous_value__;return ve(t)?be(t):t}function ye(e){const t=pe(e.mapValue.fields.__local_write_time__.timestampValue);return new ae(t.seconds,t.nanos)}
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
 */function _e(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ve(e)?4:10:p()}function we(e,t){if(e===t)return!0;const n=_e(e);if(n!==_e(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ye(e).isEqual(ye(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=pe(e.timestampValue),r=pe(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ge(e.bytesValue).isEqual(ge(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return me(e.geoPointValue.latitude)===me(t.geoPointValue.latitude)&&me(e.geoPointValue.longitude)===me(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return me(e.integerValue)===me(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=me(e.doubleValue),r=me(t.doubleValue);return n===r?Y(n)===Y(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return se(e.arrayValue.values||[],t.arrayValue.values||[],we);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(ue(n)!==ue(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!we(n[i],r[i])))return!1;return!0}(e,t);default:return p()}}function Oe(e){return!!e&&"mapValue"in e}function Ee(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return le(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ee(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ee(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Te{constructor(e){this.value=e}static empty(){return new Te({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Oe(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ee(t)}setAll(e){let t=z.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ee(e):r.push(i.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Oe(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return we(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Oe(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){le(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Te(Ee(this.value))}}
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
 */class Ie{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ie(e,0,ce.min(),Te.empty(),0)}static newFoundDocument(e,t,n){return new Ie(e,1,t,n,0)}static newNoDocument(e,t){return new Ie(e,2,t,Te.empty(),0)}static newUnknownDocument(e,t){return new Ie(e,3,t,Te.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Te.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Te.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ie&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Ie(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
class ke{constructor(e,t=null,n=[],r=[],i=null,o="F",s=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=o,this.startAt=s,this.endAt=a,this.$=null,this.F=null,this.startAt,this.endAt}}
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
function Se(e,t){return function(e){return"number"==typeof e&&Number.isInteger(e)&&!Y(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}(t)?function(e){return{integerValue:""+e}}(t):function(e,t){if(e.S){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Y(t)?"-0":t}}(e,t)}
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
 */class Ae{constructor(){this._=void 0}}class xe extends Ae{}class je extends Ae{constructor(e){super(),this.elements=e}}class Ce extends Ae{constructor(e){super(),this.elements=e}}class Pe extends Ae{constructor(e,t){super(),this.q=e,this.O=t}}
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
 */class Ne{constructor(e,t){this.field=e,this.transform=t}}class Le{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Le}static exists(e){return new Le(void 0,e)}static updateTime(e){return new Le(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}class Re{}class De extends Re{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class Me extends Re{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}class Fe extends Re{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class Ue extends Re{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"}})(),(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}})();class Ve{constructor(e,t){this.databaseId=e,this.S=t}}function $e(e,t){return e.S?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Be(e,t){return e.S?t.toBase64():t.toUint8Array()}function He(e,t){return $e(e,t.toTimestamp())}function qe(e){return m(!!e),ce.fromTimestamp(function(e){const t=pe(e);return new ae(t.seconds,t.nanos)}(e))}function ze(e,t){return function(e){return new H(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function We(e,t){return ze(e.databaseId,t.path)}function Ge(e,t){const n=function(e){const t=H.fromString(e);return m(Ze(t)),t}(t);if(n.get(1)!==e.databaseId.projectId)throw new P(_,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new P(_,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new W((m((r=n).length>4&&"documents"===r.get(4)),r.popFirst(5)));var r}function Ke(e){return new H(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Je(e,t,n){return{name:We(e,t),fields:n.value.mapValue.fields}}function Xe(e,t){return"found"in t?function(e,t){m(!!t.found),t.found.name,t.found.updateTime;const n=Ge(e,t.found.name),r=qe(t.found.updateTime),i=new Te({mapValue:{fields:t.found.fields}});return Ie.newFoundDocument(n,r,i)}(e,t):"missing"in t?function(e,t){m(!!t.missing),m(!!t.readTime);const n=Ge(e,t.missing),r=qe(t.readTime);return Ie.newNoDocument(n,r)}(e,t):p()}function Ye(e,t){let n;if(t instanceof De)n={update:Je(e,t.key,t.value)};else if(t instanceof Fe)n={delete:We(e,t.key)};else if(t instanceof Me)n={update:Je(e,t.key,t.data),updateMask:Qe(t.fieldMask)};else{if(!(t instanceof Ue))return p();n={verify:We(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof xe)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof je)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ce)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Pe)return{fieldPath:t.field.canonicalString(),increment:n.O};throw p()}(0,e))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:He(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:p()}(e,t.precondition)),n}function Qe(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Ze(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function et(e){return new Ve(e,!0)}
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
class tt extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.K=n,this.q=r,this.J=!1}X(){if(this.J)throw new P(k,"The client has already been terminated.")}m(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.K.m(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(y,e.toString())})}T(e,t,n){return this.X(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.K.T(e,t,n,r,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===T&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new P(y,e.toString())})}terminate(){this.J=!0}}async function nt(e,t){const n=g(e),r=Ke(n.q)+"/documents",i={writes:t.map(e=>Ye(n.q,e))};await n.m("Commit",r,i)}async function rt(e,t){const n=g(e),r=Ke(n.q)+"/documents",i={documents:t.map(e=>We(n.q,e))},o=await n.T("BatchGetDocuments",r,i),s=new Map;o.forEach(e=>{const t=Xe(n.q,e);s.set(t.key.toString(),t)});const a=[];return t.forEach(e=>{const t=s.get(e.toString());m(!!t),a.push(t)}),a}
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
const it=new Map;function ot(e){if(e._terminated)throw new P(k,"The client has already been terminated.");if(!it.has(e)){l("ComponentProvider","Initializing Datastore");const o=function(e){return new ne(e,fetch.bind(null))}((t=e._databaseId,n=e.app.options.appId||"",r=e._persistenceKey,i=e._freezeSettings(),new V(t,n,r,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams))),s=et(e._databaseId),a=function(e,t,n,r){return new tt(e,t,n,r)}(e._authCredentials,e._appCheckCredentials,o,s);it.set(e,a)}var t,n,r,i;
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
 */return it.get(e)}class st{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new P(_,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new P(_,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,function(e,t,n,r){if(!0===t&&!0===r)throw new P(_,`${e} and ${n} cannot be used together.`)}("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class at{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new st({}),this._settingsFrozen=!1,e instanceof $?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new P(_,'"projectId" not provided in firebase.initializeApp.');return new $(e.options.projectId)}(e))}get app(){if(!this._app)throw new P(k,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new P(k,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new st(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new L;switch(e.type){case"gapi":const t=e.client;return m(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new M(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new P(_,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=it.get(e);t&&(l("ComponentProvider","Removing Datastore"),it.delete(e),t.terminate())}(this),Promise.resolve()}}function ct(e=Object(r["e"])()){return Object(r["b"])(e,"firestore/lite").getImmediate()}
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
class ut{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new dt(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ut(this.firestore,e,this._key)}}class lt{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new lt(this.firestore,e,this._query)}}class dt extends lt{constructor(e,t,n){super(e,t,new ke(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ut(this.firestore,null,new W(e))}withConverter(e){return new dt(this.firestore,e,this._path)}}function ht(e,t,...n){if(e=Object(s["i"])(e),1===arguments.length&&(t=ie.P()),G("doc","path",t),e instanceof at){const r=H.fromString(t,...n);return K(r),new ut(e,null,new W(r))}{if(!(e instanceof ut||e instanceof dt))throw new P(_,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(H.fromString(t,...n));return K(r),new ut(e.firestore,e instanceof dt?e.converter:null,new W(r))}}
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
class ft{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new P(_,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new z(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new pt(he.fromBase64String(e))}catch(e){throw new P(_,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new pt(he.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class mt{constructor(e){this._methodName=e}}
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
 */class gt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new P(_,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new P(_,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return oe(this._lat,e._lat)||oe(this._long,e._long)}}
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
 */const vt=/^__.*__$/;class bt{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new Me(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function yt(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw p()}}class _t{constructor(e,t,n,r,i,o){this.settings=e,this.databaseId=t,this.q=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Z(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get tt(){return this.settings.tt}et(e){return new _t(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.q,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}nt(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.et({path:n,rt:!1});return r.st(e),r}it(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.et({path:n,rt:!1});return r.Z(),r}ot(e){return this.et({path:void 0,rt:!0})}ut(e){return Dt(e,this.settings.methodName,this.settings.ct||!1,this.path,this.settings.at)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Z(){if(this.path)for(let e=0;e<this.path.length;e++)this.st(this.path.get(e))}st(e){if(0===e.length)throw this.ut("Document fields must not be empty");if(yt(this.tt)&&vt.test(e))throw this.ut('Document fields cannot begin and end with "__"')}}class wt{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.q=n||et(e)}ht(e,t,n,r=!1){return new _t({tt:e,methodName:t,at:n,path:z.emptyPath(),rt:!1,ct:r},this.databaseId,this.q,this.ignoreUndefinedProperties)}}function Ot(e){const t=e._freezeSettings(),n=et(e._databaseId);return new wt(e._databaseId,!!t.ignoreUndefinedProperties,n)}class Et extends mt{_toFieldTransform(e){if(2!==e.tt)throw 1===e.tt?e.ut(this._methodName+"() can only appear at the top level of your update data"):e.ut(this._methodName+"() cannot be used with set() unless you pass {merge:true}");return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Et}}function Tt(e,t,n){return new _t({tt:3,at:t.settings.at,methodName:e._methodName,rt:n},t.databaseId,t.q,t.ignoreUndefinedProperties)}class It extends mt{constructor(e,t){super(e),this.lt=t}_toFieldTransform(e){const t=Tt(this,e,!0),n=this.lt.map(e=>xt(e,t)),r=new je(n);return new Ne(e.path,r)}isEqual(e){return this===e}}class kt extends mt{constructor(e,t){super(e),this.lt=t}_toFieldTransform(e){const t=Tt(this,e,!0),n=this.lt.map(e=>xt(e,t)),r=new Ce(n);return new Ne(e.path,r)}isEqual(e){return this===e}}function St(e,t,n,r){const i=e.ht(1,t,n);Pt("Data must be an object, but it was:",i,r);const o=[],a=Te.empty();le(r,(e,r)=>{const c=Rt(t,e,n);r=Object(s["i"])(r);const u=i.it(c);if(r instanceof Et)o.push(c);else{const e=xt(r,u);null!=e&&(o.push(c),a.set(c,e))}});const c=new de(o);return new bt(a,c,i.fieldTransforms)}function At(e,t,n,r,i,o){const a=e.ht(1,t,n),c=[Nt(t,r,n)],u=[i];if(o.length%2!=0)throw new P(_,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let s=0;s<o.length;s+=2)c.push(Nt(t,o[s])),u.push(o[s+1]);const l=[],d=Te.empty();for(let f=c.length-1;f>=0;--f)if(!Mt(l,c[f])){const e=c[f];let t=u[f];t=Object(s["i"])(t);const n=a.it(e);if(t instanceof Et)l.push(e);else{const r=xt(t,n);null!=r&&(l.push(e),d.set(e,r))}}const h=new de(l);return new bt(d,h,a.fieldTransforms)}function xt(e,t){if(Ct(e=Object(s["i"])(e)))return Pt("Unsupported field value:",t,e),jt(e,t);if(e instanceof mt)return function(e,t){if(!yt(t.tt))throw t.ut(e._methodName+"() can only be used with update() and set()");if(!t.path)throw t.ut(e._methodName+"() is not currently supported inside arrays");const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.rt&&4!==t.tt)throw t.ut("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=xt(i,t.ot(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=Object(s["i"])(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Se(t.q,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=ae.fromDate(e);return{timestampValue:$e(t.q,n)}}if(e instanceof ae){const n=new ae(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:$e(t.q,n)}}if(e instanceof gt)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof pt)return{bytesValue:Be(t.q,e._byteString)};if(e instanceof ut){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.ut(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:ze(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ut("Unsupported field value: "+J(e))}(e,t)}function jt(e,t){const n={};return function(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):le(e,(e,r)=>{const i=xt(r,t.nt(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function Ct(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof ae||e instanceof gt||e instanceof pt||e instanceof ut||e instanceof mt)}function Pt(e,t,n){if(!Ct(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=J(n);throw"an object"===r?t.ut(e+" a custom object"):t.ut(e+" "+r)}}function Nt(e,t,n){if((t=Object(s["i"])(t))instanceof ft)return t._internalPath;if("string"==typeof t)return Rt(e,t);throw Dt("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Lt=new RegExp("[~\\*/\\[\\]]");function Rt(e,t,n){if(t.search(Lt)>=0)throw Dt(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new ft(...t.split("."))._internalPath}catch(r){throw Dt(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Dt(e,t,n,r,i){const o=r&&!r.isEmpty(),s=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(o||s)&&(c+=" (found",o&&(c+=" in field "+r),s&&(c+=" in document "+i),c+=")"),new P(_,a+e+c)}function Mt(e,t){return e.some(e=>e.isEqual(t))}
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
 */class Ft{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new ut(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ut(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Vt("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ut extends Ft{data(){return super.data()}}function Vt(e,t){return"string"==typeof t?Rt(e,t):t instanceof ft?t._internalPath:t._delegate._internalPath}
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
 */class $t extends class{convertValue(e,t="none"){switch(_e(e)){case 0:return null;case 1:return e.booleanValue;case 2:return me(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ge(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw p()}}convertObject(e,t){const n={};return le(e.fields,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new gt(me(e.latitude),me(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=be(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ye(e));default:return null}}convertTimestamp(e){const t=pe(e);return new ae(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=H.fromString(e);m(Ze(n));const r=new $(n.get(1),n.get(3)),i=new W(n.popFirst(5));return r.isEqual(t)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}{constructor(e){super(),this.firestore=e}convertBytes(e){return new pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ut(this.firestore,null,t)}}function Bt(e){const t=ot((e=X(e,ut)).firestore),n=new $t(e.firestore);return rt(t,[e._key]).then(t=>{m(1===t.length);const r=t[0];return new Ft(e.firestore,n,e._key,r.isFoundDocument()?r:null,e.converter)})}function Ht(e,t,n,...r){const i=Ot((e=X(e,ut)).firestore);let o;return o="string"==typeof(t=Object(s["i"])(t))||t instanceof ft?At(i,"updateDoc",e._key,t,n,r):St(i,"updateDoc",e._key,t),nt(ot(e.firestore),[o.toMutation(e._key,Le.exists(!0))])}function qt(...e){return new It("arrayUnion",e)}function zt(...e){return new kt("arrayRemove",e)}!function(e){c=e}(r["a"]+"_lite"),Object(r["c"])(new i["a"]("firestore/lite",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=new at(n,new R(e.getProvider("auth-internal")),new U(e.getProvider("app-check-internal")));return t&&r._setSettings(t),r},"PUBLIC")),Object(r["g"])("firestore-lite","3.4.2",""),Object(r["g"])("firestore-lite","3.4.2","esm2017")},a79d:function(e,t,n){"use strict";var r=n("23e7"),i=n("c430"),o=n("fea9"),s=n("d039"),a=n("d066"),c=n("1626"),u=n("4840"),l=n("cdf9"),d=n("6eeb"),h=!!o&&s((function(){o.prototype["finally"].call({then:function(){}},(function(){}))}));if(r({target:"Promise",proto:!0,real:!0,forced:h},{finally:function(e){var t=u(this,a("Promise")),n=c(e);return this.then(n?function(n){return l(t,e()).then((function(){return n}))}:e,n?function(n){return l(t,e()).then((function(){throw n}))}:e)}}),!i&&c(o)){var f=a("Promise").prototype["finally"];o.prototype["finally"]!==f&&d(o.prototype,"finally",f,{unsafe:!0})}},abc5:function(e,t,n){"use strict";(function(e){function r(){return i().__VUE_DEVTOOLS_GLOBAL_HOOK__}function i(){return"undefined"!==typeof navigator&&"undefined"!==typeof window?window:"undefined"!==typeof e?e:{}}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o}));const o="function"===typeof Proxy}).call(this,n("c8ba"))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),i=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},ae93:function(e,t,n){"use strict";var r,i,o,s=n("d039"),a=n("1626"),c=n("7c73"),u=n("e163"),l=n("6eeb"),d=n("b622"),h=n("c430"),f=d("iterator"),p=!1;[].keys&&(o=[].keys(),"next"in o?(i=u(u(o)),i!==Object.prototype&&(r=i)):p=!0);var m=void 0==r||s((function(){var e={};return r[f].call(e)!==e}));m?r={}:h&&(r=c(r)),a(r[f])||l(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},aed9:function(e,t,n){var r=n("83ab"),i=n("d039");e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},b041:function(e,t,n){"use strict";var r=n("00ee"),i=n("f5df");e.exports=r?{}.toString:function(){return"[object "+i(this)+"]"}},b575:function(e,t,n){var r,i,o,s,a,c,u,l,d=n("da84"),h=n("0366"),f=n("06cf").f,p=n("2cf4").set,m=n("1cdc"),g=n("d4c3"),v=n("a4b4"),b=n("605d"),y=d.MutationObserver||d.WebKitMutationObserver,_=d.document,w=d.process,O=d.Promise,E=f(d,"queueMicrotask"),T=E&&E.value;T||(r=function(){var e,t;b&&(e=w.domain)&&e.exit();while(i){t=i.fn,i=i.next;try{t()}catch(n){throw i?s():o=void 0,n}}o=void 0,e&&e.enter()},m||b||v||!y||!_?!g&&O&&O.resolve?(u=O.resolve(void 0),u.constructor=O,l=h(u.then,u),s=function(){l(r)}):b?s=function(){w.nextTick(r)}:(p=h(p,d),s=function(){p(r)}):(a=!0,c=_.createTextNode(""),new y(r).observe(c,{characterData:!0}),s=function(){c.data=a=!a})),e.exports=T||function(e){var t={fn:e,next:void 0};o&&(o.next=t),i||(i=t,s()),o=t}},b622:function(e,t,n){var r=n("da84"),i=n("5692"),o=n("1a2d"),s=n("90e3"),a=n("4930"),c=n("fdbf"),u=i("wks"),l=r.Symbol,d=l&&l["for"],h=c?l:l&&l.withoutSetter||s;e.exports=function(e){if(!o(u,e)||!a&&"string"!=typeof u[e]){var t="Symbol."+e;a&&o(l,e)?u[e]=l[e]:u[e]=c&&d?d(t):h(t)}return u[e]}},c04e:function(e,t,n){var r=n("da84"),i=n("c65b"),o=n("861d"),s=n("d9b5"),a=n("dc4a"),c=n("485a"),u=n("b622"),l=r.TypeError,d=u("toPrimitive");e.exports=function(e,t){if(!o(e)||s(e))return e;var n,r=a(e,d);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!o(n)||s(n))return n;throw l("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},c430:function(e,t){e.exports=!1},c65b:function(e,t){var n=Function.prototype.call;e.exports=n.bind?n.bind(n):function(){return n.apply(n,arguments)}},c6b6:function(e,t,n){var r=n("e330"),i=r({}.toString),o=r("".slice);e.exports=function(e){return o(i(e),8,-1)}},c6cd:function(e,t,n){var r=n("da84"),i=n("ce4e"),o="__core-js_shared__",s=r[o]||i(o,{});e.exports=s},c8ba:function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(r){"object"===typeof window&&(n=window)}e.exports=n},ca84:function(e,t,n){var r=n("e330"),i=n("1a2d"),o=n("fc6a"),s=n("4d64").indexOf,a=n("d012"),c=r([].push);e.exports=function(e,t){var n,r=o(e),u=0,l=[];for(n in r)!i(a,n)&&i(r,n)&&c(l,n);while(t.length>u)i(r,n=t[u++])&&(~s(l,n)||c(l,n));return l}},cc12:function(e,t,n){var r=n("da84"),i=n("861d"),o=r.document,s=i(o)&&i(o.createElement);e.exports=function(e){return s?o.createElement(e):{}}},cca6:function(e,t,n){var r=n("23e7"),i=n("60da");r({target:"Object",stat:!0,forced:Object.assign!==i},{assign:i})},cdf9:function(e,t,n){var r=n("825a"),i=n("861d"),o=n("f069");e.exports=function(e,t){if(r(e),i(t)&&t.constructor===e)return t;var n=o.f(e),s=n.resolve;return s(t),n.promise}},ce4e:function(e,t,n){var r=n("da84"),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},d012:function(e,t){e.exports={}},d039:function(e,t){e.exports=function(e){try{return!!e()}catch(t){return!0}}},d066:function(e,t,n){var r=n("da84"),i=n("1626"),o=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?o(r[e]):r[e]&&r[e][t]}},d1e7:function(e,t,n){"use strict";var r={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,o=i&&!r.call({1:2},1);t.f=o?function(e){var t=i(this,e);return!!t&&t.enumerable}:r},d2bb:function(e,t,n){var r=n("e330"),i=n("825a"),o=n("3bbe");e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(s){}return function(n,r){return i(n),o(r),t?e(n,r):n.__proto__=r,n}}():void 0)},d3b7:function(e,t,n){var r=n("00ee"),i=n("6eeb"),o=n("b041");r||i(Object.prototype,"toString",o,{unsafe:!0})},d44e:function(e,t,n){var r=n("9bf2").f,i=n("1a2d"),o=n("b622"),s=o("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,s)&&r(e,s,{configurable:!0,value:t})}},d4c3:function(e,t,n){var r=n("342f"),i=n("da84");e.exports=/ipad|iphone|ipod/i.test(r)&&void 0!==i.Pebble},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),i=n("6eeb"),o=n("9263"),s=n("d039"),a=n("b622"),c=n("9112"),u=a("species"),l=RegExp.prototype;e.exports=function(e,t,n,d){var h=a(e),f=!s((function(){var t={};return t[h]=function(){return 7},7!=""[e](t)})),p=f&&!s((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[u]=function(){return n},n.flags="",n[h]=/./[h]),n.exec=function(){return t=!0,null},n[h](""),!t}));if(!f||!p||n){var m=r(/./[h]),g=t(h,""[e],(function(e,t,n,i,s){var a=r(e),c=t.exec;return c===o||c===l.exec?f&&!s?{done:!0,value:m(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,g[0]),i(l,h,g[1])}d&&c(l[h],"sham",!0)}},d9b5:function(e,t,n){var r=n("da84"),i=n("d066"),o=n("1626"),s=n("3a9b"),a=n("fdbf"),c=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return o(t)&&s(t.prototype,c(e))}},da84:function(e,t,n){(function(t){var n=function(e){return e&&e.Math==Math&&e};e.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof t&&t)||function(){return this}()||Function("return this")()}).call(this,n("c8ba"))},dc4a:function(e,t,n){var r=n("59ed");e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},ddb0:function(e,t,n){var r=n("da84"),i=n("fdbc"),o=n("785a"),s=n("e260"),a=n("9112"),c=n("b622"),u=c("iterator"),l=c("toStringTag"),d=s.values,h=function(e,t){if(e){if(e[u]!==d)try{a(e,u,d)}catch(r){e[u]=d}if(e[l]||a(e,l,t),i[t])for(var n in s)if(e[n]!==s[n])try{a(e,n,s[n])}catch(r){e[n]=s[n]}}};for(var f in i)h(r[f]&&r[f].prototype,f);h(o,"DOMTokenList")},df75:function(e,t,n){var r=n("ca84"),i=n("7839");e.exports=Object.keys||function(e){return r(e,i)}},e163:function(e,t,n){var r=n("da84"),i=n("1a2d"),o=n("1626"),s=n("7b0b"),a=n("f772"),c=n("e177"),u=a("IE_PROTO"),l=r.Object,d=l.prototype;e.exports=c?l.getPrototypeOf:function(e){var t=s(e);if(i(t,u))return t[u];var n=t.constructor;return o(n)&&t instanceof n?n.prototype:t instanceof l?d:null}},e177:function(e,t,n){var r=n("d039");e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},e260:function(e,t,n){"use strict";var r=n("fc6a"),i=n("44d2"),o=n("3f8c"),s=n("69f3"),a=n("9bf2").f,c=n("7dd0"),u=n("c430"),l=n("83ab"),d="Array Iterator",h=s.set,f=s.getterFor(d);e.exports=c(Array,"Array",(function(e,t){h(this,{type:d,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=o.Arguments=o.Array;if(i("keys"),i("values"),i("entries"),!u&&l&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(m){}},e2cc:function(e,t,n){var r=n("6eeb");e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},e330:function(e,t){var n=Function.prototype,r=n.bind,i=n.call,o=r&&r.bind(i,i);e.exports=r?function(e){return e&&o(e)}:function(e){return e&&function(){return i.apply(e,arguments)}}},e667:function(e,t){e.exports=function(e){try{return{error:!1,value:e()}}catch(t){return{error:!0,value:t}}}},e691:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"d",(function(){return d}));
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const o={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},s=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=s,this._logHandler=c,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?o[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}function l(e){r.forEach(t=>{t.setLogLevel(e)})}function d(e,t){for(const n of r){let r=null;t&&t.level&&(r=o[t.level]),n.userLogHandler=null===e?null:(t,n,...o)=>{const s=o.map(e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}}).filter(e=>e).join(" ");n>=(null!==r&&void 0!==r?r:t.logLevel)&&e({level:i[n].toLowerCase(),message:s,args:o,type:t.name})}}}},e6cf:function(e,t,n){"use strict";var r,i,o,s,a=n("23e7"),c=n("c430"),u=n("da84"),l=n("d066"),d=n("c65b"),h=n("fea9"),f=n("6eeb"),p=n("e2cc"),m=n("d2bb"),g=n("d44e"),v=n("2626"),b=n("59ed"),y=n("1626"),_=n("861d"),w=n("19aa"),O=n("8925"),E=n("2266"),T=n("1c7e"),I=n("4840"),k=n("2cf4").set,S=n("b575"),A=n("cdf9"),x=n("44de"),j=n("f069"),C=n("e667"),P=n("01b4"),N=n("69f3"),L=n("94ca"),R=n("b622"),D=n("6069"),M=n("605d"),F=n("2d00"),U=R("species"),V="Promise",$=N.getterFor(V),B=N.set,H=N.getterFor(V),q=h&&h.prototype,z=h,W=q,G=u.TypeError,K=u.document,J=u.process,X=j.f,Y=X,Q=!!(K&&K.createEvent&&u.dispatchEvent),Z=y(u.PromiseRejectionEvent),ee="unhandledrejection",te="rejectionhandled",ne=0,re=1,ie=2,oe=1,se=2,ae=!1,ce=L(V,(function(){var e=O(z),t=e!==String(z);if(!t&&66===F)return!0;if(c&&!W["finally"])return!0;if(F>=51&&/native code/.test(e))return!1;var n=new z((function(e){e(1)})),r=function(e){e((function(){}),(function(){}))},i=n.constructor={};return i[U]=r,ae=n.then((function(){}))instanceof r,!ae||!t&&D&&!Z})),ue=ce||!T((function(e){z.all(e)["catch"]((function(){}))})),le=function(e){var t;return!(!_(e)||!y(t=e.then))&&t},de=function(e,t){var n,r,i,o=t.value,s=t.state==re,a=s?e.ok:e.fail,c=e.resolve,u=e.reject,l=e.domain;try{a?(s||(t.rejection===se&&ge(t),t.rejection=oe),!0===a?n=o:(l&&l.enter(),n=a(o),l&&(l.exit(),i=!0)),n===e.promise?u(G("Promise-chain cycle")):(r=le(n))?d(r,n,c,u):c(n)):u(o)}catch(h){l&&!i&&l.exit(),u(h)}},he=function(e,t){e.notified||(e.notified=!0,S((function(){var n,r=e.reactions;while(n=r.get())de(n,e);e.notified=!1,t&&!e.rejection&&pe(e)})))},fe=function(e,t,n){var r,i;Q?(r=K.createEvent("Event"),r.promise=t,r.reason=n,r.initEvent(e,!1,!0),u.dispatchEvent(r)):r={promise:t,reason:n},!Z&&(i=u["on"+e])?i(r):e===ee&&x("Unhandled promise rejection",n)},pe=function(e){d(k,u,(function(){var t,n=e.facade,r=e.value,i=me(e);if(i&&(t=C((function(){M?J.emit("unhandledRejection",r,n):fe(ee,n,r)})),e.rejection=M||me(e)?se:oe,t.error))throw t.value}))},me=function(e){return e.rejection!==oe&&!e.parent},ge=function(e){d(k,u,(function(){var t=e.facade;M?J.emit("rejectionHandled",t):fe(te,t,e.value)}))},ve=function(e,t,n){return function(r){e(t,r,n)}},be=function(e,t,n){e.done||(e.done=!0,n&&(e=n),e.value=t,e.state=ie,he(e,!0))},ye=function(e,t,n){if(!e.done){e.done=!0,n&&(e=n);try{if(e.facade===t)throw G("Promise can't be resolved itself");var r=le(t);r?S((function(){var n={done:!1};try{d(r,t,ve(ye,n,e),ve(be,n,e))}catch(i){be(n,i,e)}})):(e.value=t,e.state=re,he(e,!1))}catch(i){be({done:!1},i,e)}}};if(ce&&(z=function(e){w(this,W),b(e),d(r,this);var t=$(this);try{e(ve(ye,t),ve(be,t))}catch(n){be(t,n)}},W=z.prototype,r=function(e){B(this,{type:V,done:!1,notified:!1,parent:!1,reactions:new P,rejection:!1,state:ne,value:void 0})},r.prototype=p(W,{then:function(e,t){var n=H(this),r=X(I(this,z));return n.parent=!0,r.ok=!y(e)||e,r.fail=y(t)&&t,r.domain=M?J.domain:void 0,n.state==ne?n.reactions.add(r):S((function(){de(r,n)})),r.promise},catch:function(e){return this.then(void 0,e)}}),i=function(){var e=new r,t=$(e);this.promise=e,this.resolve=ve(ye,t),this.reject=ve(be,t)},j.f=X=function(e){return e===z||e===o?new i(e):Y(e)},!c&&y(h)&&q!==Object.prototype)){s=q.then,ae||(f(q,"then",(function(e,t){var n=this;return new z((function(e,t){d(s,n,e,t)})).then(e,t)}),{unsafe:!0}),f(q,"catch",W["catch"],{unsafe:!0}));try{delete q.constructor}catch(_e){}m&&m(q,W)}a({global:!0,wrap:!0,forced:ce},{Promise:z}),g(z,V,!1,!0),v(V),o=l(V),a({target:V,stat:!0,forced:ce},{reject:function(e){var t=X(this);return d(t.reject,void 0,e),t.promise}}),a({target:V,stat:!0,forced:c||ce},{resolve:function(e){return A(c&&this===o?z:this,e)}}),a({target:V,stat:!0,forced:ue},{all:function(e){var t=this,n=X(t),r=n.resolve,i=n.reject,o=C((function(){var n=b(t.resolve),o=[],s=0,a=1;E(e,(function(e){var c=s++,u=!1;a++,d(n,t,e).then((function(e){u||(u=!0,o[c]=e,--a||r(o))}),i)})),--a||r(o)}));return o.error&&i(o.value),n.promise},race:function(e){var t=this,n=X(t),r=n.reject,i=C((function(){var i=b(t.resolve);E(e,(function(e){d(i,t,e).then(n.resolve,r)}))}));return i.error&&r(i.value),n.promise}})},e893:function(e,t,n){var r=n("1a2d"),i=n("56ef"),o=n("06cf"),s=n("9bf2");e.exports=function(e,t,n){for(var a=i(t),c=s.f,u=o.f,l=0;l<a.length;l++){var d=a[l];r(e,d)||n&&r(n,d)||c(e,d,u(t,d))}}},e95a:function(e,t,n){var r=n("b622"),i=n("3f8c"),o=r("iterator"),s=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||s[o]===e)}},ea7b:function(e,t,n){"use strict";var r=n("6a7c");n.d(t,"a",(function(){return r["a"]})),n.d(t,"b",(function(){return r["b"]})),n.d(t,"c",(function(){return r["c"]})),n.d(t,"d",(function(){return r["d"]})),n.d(t,"e",(function(){return r["e"]}))},f069:function(e,t,n){"use strict";var r=n("59ed"),i=function(e){var t,n;this.promise=new e((function(e,r){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=r})),this.resolve=r(t),this.reject=r(n)};e.exports.f=function(e){return new i(e)}},f36a:function(e,t,n){var r=n("e330");e.exports=r([].slice)},f5df:function(e,t,n){var r=n("da84"),i=n("00ee"),o=n("1626"),s=n("c6b6"),a=n("b622"),c=a("toStringTag"),u=r.Object,l="Arguments"==s(function(){return arguments}()),d=function(e,t){try{return e[t]}catch(n){}};e.exports=i?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=d(t=u(e),c))?n:l?s(t):"Object"==(r=s(t))&&o(t.callee)?"Arguments":r}},f772:function(e,t,n){var r=n("5692"),i=n("90e3"),o=r("keys");e.exports=function(e){return o[e]||(o[e]=i(e))}},f9e3:function(e,t,n){},fc6a:function(e,t,n){var r=n("44ad"),i=n("1d80");e.exports=function(e){return r(i(e))}},fce3:function(e,t,n){var r=n("d039"),i=n("da84"),o=i.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},fdbc:function(e,t){e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fdbf:function(e,t,n){var r=n("4930");e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},fea9:function(e,t,n){var r=n("da84");e.exports=r.Promise}}]);
//# sourceMappingURL=chunk-vendors.1129755a.js.map