/*! For license information please see 33.67c281ef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[33],{33:function(t,e,r){r.r(e),r.d(e,{default:function(){return G}});var n,o,i,a,c,u,s,l,h=r(861),f=r(439),p=r(791),d=r(689),v=r(832),y=r(239),g=r(168),m=r(87),x=r(867),w=x.zo.div(n||(n=(0,g.Z)(["\n  display: flex;\n  gap: 15px;\n"]))),b=x.zo.img(o||(o=(0,g.Z)(["\n  width: 55%;\n  border-radius: ",";\n  overflow: hidden;\n"])),(function(t){return t.theme.$borderRadius})),j=x.zo.div(i||(i=(0,g.Z)(["\n  width: 45%;\n"]))),L=x.zo.h2(a||(a=(0,g.Z)(["\n  font-size: 20px;\n  margin-bottom: 5px;\n"]))),E=x.zo.p(c||(c=(0,g.Z)(["\n  margin-bottom: 7px;\n"]))),k=x.zo.ul(u||(u=(0,g.Z)(["\n  display: flex;\n\n  gap: 35px;\n  margin: 20px 0;\n"]))),_=x.zo.li(s||(s=(0,g.Z)(["\n  font-size: 17px;\n"]))),O=(0,x.zo)(m.OL)(l||(l=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  min-width: 80px;\n  padding: 8px 8px;\n  border-radius: ",";\n  text-decoration: none;\n  color: black;\n  background-color: lightblue;\n\n  &.active {\n    color: white;\n    background-color: ",";\n  }\n"])),(function(t){return t.theme.$borderRadius}),(function(t){return t.theme.colors.$accentColor})),P=r(184);function z(){z=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n=Object.defineProperty||function(t,e,r){t[e]=r.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function s(t,e,r,o){var i=e&&e.prototype instanceof f?e:f,a=Object.create(i.prototype),c=new k(o||[]);return n(a,"_invoke",{value:b(t,r,c)}),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var h={};function f(){}function p(){}function d(){}var v={};u(v,i,(function(){return this}));var y=Object.getPrototypeOf,g=y&&y(y(_([])));g&&g!==e&&r.call(g,i)&&(v=g);var m=d.prototype=f.prototype=Object.create(v);function x(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(n,i,a,c){var u=l(t[n],t,i);if("throw"!==u.type){var s=u.arg,h=s.value;return h&&"object"==typeof h&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(h).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;n(this,"_invoke",{value:function(t,r){function n(){return new e((function(e,n){o(t,r,e,n)}))}return i=i?i.then(n,n):n()}})}function b(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=j(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function j(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,j(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),h;var o=l(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function L(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(L,this),this.reset(!0)}function _(t){if(t||""===t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,o=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}throw new TypeError(typeof t+" is not iterable")}return p.prototype=d,n(m,"constructor",{value:d,configurable:!0}),n(d,"constructor",{value:p,configurable:!0}),p.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===p||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},x(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},t.values=_,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}var G=function(){var t,e,r=(0,p.useState)({}),n=(0,f.Z)(r,2),o=n[0],i=n[1],a=(0,d.s0)(),c=(0,d.TH)(),u=(0,d.UO)().movieId;(0,p.useEffect)((function(){function t(){return(t=(0,h.Z)(z().mark((function t(){var e;return z().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,(0,v.TP)(u);case 3:e=t.sent,i(e),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.warn(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[u]);var s="https://image.tmdb.org/t/p/w500".concat(o.poster_path),l=(0,p.useRef)(null!==(t=null===(e=c.state)||void 0===e?void 0:e.from)&&void 0!==t?t:"/");return(0,P.jsx)(y.PP,{children:(0,P.jsxs)(y.PQ,{children:[(0,P.jsx)(y.Sn,{$padding:"7px 10px",$margin:"0 0 15px 0",onClick:function(){return a(l.current)},children:"Go back"}),(0,P.jsx)(y.kI,{children:o.title}),(0,P.jsxs)(w,{children:[(0,P.jsx)(b,{src:s,alt:""}),(0,P.jsxs)(j,{children:[(0,P.jsx)(L,{children:"Overview"}),(0,P.jsx)(E,{children:o.overview}),(0,P.jsx)(L,{children:"Genres"}),(0,P.jsx)(E,{children:o.genres?o.genres.map((function(t){return t.name})).join(", "):""})]})]}),(0,P.jsx)("hr",{}),(0,P.jsx)(L,{children:"Additional information"}),(0,P.jsxs)(k,{children:[(0,P.jsx)(_,{children:(0,P.jsx)(O,{to:"cast",children:"Cast"})}),(0,P.jsx)(_,{children:(0,P.jsx)(O,{to:"reviews",children:"Reviews"})})]}),(0,P.jsx)(d.j3,{})]})})}}}]);
//# sourceMappingURL=33.67c281ef.chunk.js.map