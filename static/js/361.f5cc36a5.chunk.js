/*! For license information please see 361.f5cc36a5.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[361],{273:function(t,e,r){r.d(e,{Re:function(){return s},XQ:function(){return f},ck:function(){return u}});var n,o,i,a=r(168),c=r(867),u=c.ZP.li(n||(n=(0,a.Z)(["\n  border-radius: 5px;\n  transform: scale(1);\n  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1),\n              transform 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  @media screen and (min-width: 768px) {\n    flex-basis: calc((100% - 96px) / 3);\n  }\n\n  @media screen and (min-width: 1280px) {\n    flex-basis: calc((100% - 96px) / 3);\n  }\n\n  :hover {\n    box-shadow: 0px -1px 33px rgba(81, 170, 255, 0.5);\n    transform: scale(1.03);\n  }\n"]))),s=c.ZP.img(o||(o=(0,a.Z)(["\n  border-radius: 5px;\n\n  @media screen and (max-width: 767px) {\n    width: 280px;\n    height: 406px;\n  }\n\n  @media screen and (min-width: 768px) {\n    width: 224px;\n    height: 325px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 395px;\n    height: 574px;\n  }\n"]))),f=c.ZP.h2(i||(i=(0,a.Z)(["\n  margin: 12px 8px;\n  font-size: 1.25rem;\n  font-weight: 400;\n\n  @media screen and (max-width: 767px) {\n    width: 200px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    width: 310px;\n  }\n"])))},225:function(t,e,r){r.d(e,{U:function(){return c},a:function(){return u}});var n,o,i=r(168),a=r(867),c=a.ZP.h1(n||(n=(0,i.Z)(["\n  margin-bottom: 24px;\n  font-size: 2.25rem;\n  font-weight: 700;\n  text-align: center;\n  filter: drop-shadow(0 4px 4px #51AAFF);\n"]))),u=a.ZP.ul(o||(o=(0,i.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n\n  @media screen and (max-width: 767px) {\n    gap: 16px;\n  }\n\n  @media screen and (min-width: 768px) {\n    gap: 32px;\n  }\n"])))},361:function(t,e,r){r.r(e),r.d(e,{default:function(){return Z}});var n=r(861),o=r(439),i=r(742),a=r(14),c=r(791),u=r(87),s=r(689),f=r(243),h=r(393);function l(){l=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(Z){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:L(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=s;var h={};function p(){}function d(){}function v(){}var y={};u(y,i,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(O([])));m&&m!==e&&r.call(m,i)&&(y=m);var x=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=E(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function j(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function O(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:P}}function P(){return{value:void 0,done:!0}}return d.prototype=v,n(x,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:d,configurable:!0}),d.displayName=u(v,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,u(t,c,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new b(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),u(x,c,"Generator"),u(x,i,(function(){return this})),u(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=O,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),j(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;j(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:O(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var p,d,v,y=function(){var t=(0,n.Z)(l().mark((function t(e){var r,n;return l().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f.Z.get("".concat(h.J,"search/movie?api_key=").concat(h.$,"&query=").concat(e));case 2:return r=t.sent,n=r.data.results,t.abrupt("return",n);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=r(168),m=r(867),x=m.ZP.form(p||(p=(0,g.Z)(["\n  margin-left: auto;\n  margin-right: auto;\n  width: 100%;\n  max-width: 600px;\n  margin-bottom: 32px;\n  display: flex;\n  gap: 8px;\n  align-items: center;\n  overflow: hidden;\n"]))),w=m.ZP.input(d||(d=(0,g.Z)(["\n  display: inline-block;\n  width: 100%;\n  height: 38px;\n  padding-left: 4px;\n  padding-right: 4px;\n  font-family: inherit;\n  font-size: 20px;\n  color: #ffffff;\n  border: 1px solid #ffffff;\n  border-radius: 5px;\n  outline: none;\n  padding: 4px;\n\n  ::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n  background-color: transparent;\n"]))),b=m.ZP.button(v||(v=(0,g.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  outline: none;\n  border: none;\n  border-radius: 5px;\n  background: linear-gradient(90deg, hsl(277, 56%, 68%) 0%, hsl(203, 71%, 60%) 100%);\n  cursor: pointer;\n  svg {\n    width: 20px;\n    height: 20px;\n    color: #ffffff;\n  }\n"]))),L=r(135),E=r(184),_=function(t){var e=t.onSubmit;return(0,E.jsxs)(x,{onSubmit:e,autoComplete:"off",children:[(0,E.jsx)(w,{type:"text",name:"query",placeholder:"Search movies"}),(0,E.jsx)(b,{type:"submit","aria-label":"Search",children:(0,E.jsx)(L.U41,{})})]})},j=r(225),k=r(273),O=r(192);function P(){P=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(Z){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof l?e:l,a=Object.create(i.prototype),c=new j(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=s;var h={};function l(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(k([])));g&&g!==e&&r.call(g,i)&&(v=g);var m=d.prototype=l.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=f(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return O()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=f(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function L(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=f(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function _(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function k(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=k,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(_),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),_(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;_(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var Z=function(){var t=(0,c.useState)([]),e=(0,o.Z)(t,2),r=e[0],f=e[1],h=(0,u.lr)(),l=(0,o.Z)(h,2),p=l[0],d=l[1],v=p.get("query"),g=(0,s.TH)();(0,c.useEffect)((function(){if(null!==v&&""!==v){var t=function(){var t=(0,n.Z)(P().mark((function t(e){var r;return P().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,i.Loading.circle(),t.next=4,y(e);case 4:r=t.sent,f(r),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log(t.t0);case 11:return t.prev=11,i.Loading.remove(),t.finish(11);case 14:case"end":return t.stop()}}),t,null,[[0,8,11,14]])})));return function(e){return t.apply(this,arguments)}}();t(v)}}),[v]);return(0,E.jsxs)(E.Fragment,{children:[(0,E.jsx)(_,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget;if(""===e.elements.query.value)return(0,a.Am)("Please enter search word!",{icon:"\ud83e\udd84"}),d({});d({query:e.elements.query.value}),e.reset()}}),(0,E.jsx)(j.a,{children:r.map((function(t){return(0,E.jsx)(k.ck,{children:(0,E.jsxs)(u.rU,{to:"/movies/".concat(t.id),state:{from:g},children:[t.poster_path?(0,E.jsx)(k.Re,{src:"https://image.tmdb.org/t/p/w300".concat(t.poster_path),alt:t.title}):(0,E.jsx)(k.Re,{src:O,alt:t.title}),(0,E.jsx)(k.XQ,{children:t.title})]})},t.id)}))})]})}},393:function(t,e,r){r.d(e,{$:function(){return n},J:function(){return o}});var n="bbc3a59c80dd2fd9ef95f351464f76eb",o="https://api.themoviedb.org/3/"},192:function(t,e,r){t.exports=r.p+"static/media/no-poster.c04952434c9e0c162278.png"}}]);
//# sourceMappingURL=361.f5cc36a5.chunk.js.map