/*! For license information please see 399.0c1050931bd70cee6c65.js.LICENSE.txt */
"use strict";(self.webpackChunkTonito=self.webpackChunkTonito||[]).push([[399],{2399:(t,e,r)=>{r.r(e),r.d(e,{default:()=>$});var n=r(6540);var o=r(2474);function a(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return i(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const c=function(t){var e=t.children,r=t.reducers,i=t.removeAfterUnmount,c=(0,o.Pj)(),l=(0,o.wA)();return(0,n.useEffect)((function(){return Object.entries(r).forEach((function(t){var e=a(t,2),r=e[0],n=e[1];c.reducerManager.add(r,n),l({type:"@INIT ".concat(r," Reducer")})})),function(){Object.entries(r).forEach((function(t){var e=a(t,2),r=e[0];e[1],i&&(c.reducerManager.remove(r),l({type:"@DESTROY ".concat(r," Reducer")}))}))}}),[]),n.createElement(n.Fragment,null,e)};var l=r(3649);const u="z7cwf01C";var s=r(7101);const f=t=>null==t?void 0:t.InitData;var m=r(5357);var d=r(1023),y=r(6763);function v(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const h=(0,n.memo)((function(t){var e,r,o=t.className,a=t.loading,i=function(t,e){var r={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(t);o<n.length;o++)e.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(t,n[o])&&(r[n[o]]=t[n[o]])}return r}(t,["className","loading"]),c=(e=(0,n.useState)(!1),r=2,function(t){if(Array.isArray(t))return t}(e)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(e,r)||function(t,e){if(t){if("string"==typeof t)return v(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?v(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),l=c[0],u=c[1];return(0,n.useEffect)((function(){y.log(!a),a||setTimeout((function(){u(!0)}),1e3)}),[l]),n.createElement(n.Fragment,null,l?t.children:n.createElement(d.A,Object.assign({className:(0,s.x)("JF8u9AI4",{},[o]),animation:"wave"},i),t.children))})),p=function(t){var e,r,a,i,c,l=t.className,d=(0,o.d4)(f),y=(0,o.d4)(m.gL);return n.createElement("div",{className:(0,s.x)("BZ81sk44",{},[l])},n.createElement("div",{className:"U_Q6eCDg"},n.createElement(h,{loading:d.isLoading,variant:"circular"},n.createElement("img",{src:(null===(e=y.authData)||void 0===e?void 0:e.photoLink)||"",className:"BDfy0SZ7"}))),n.createElement(h,{loading:d.isLoading},n.createElement("div",{className:"OAonG2kf"},n.createElement("p",{className:u},(null===(a=null===(r=null==d?void 0:d.data)||void 0===r?void 0:r.user)||void 0===a?void 0:a.first_name)||""),n.createElement("p",{className:u},(null===(c=null===(i=null==d?void 0:d.data)||void 0===i?void 0:i.user)||void 0===c?void 0:c.last_name)||""))))};var b=r(2389);var g=r(1351);const w=function(t){var e=t.className,r=t.backFunc,o=(0,b.Bd)().t;return n.createElement("button",{className:(0,s.x)("Wy0wGchw",{},[e]),onClick:function(){r()}},n.createElement(g.pRN,null),n.createElement("p",null,o("Back")))};var E=r(658),S=r(8601);function j(t){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},j(t)}function O(t,e,r){var n;return n=function(t,e){if("object"!=j(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=j(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(e),(e="symbol"==j(n)?n:n+"")in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}const x=function(t){var e=t.className,r=t.placeholder,o=t.value,a=t.active,i=t.autoFocus,c=t.maxLength,l=t.error,u=t.onClearInput,f=t.handleChange,m=t.onFocus,d=t.onBlur,y=t.formId,v=t.onSubmit,h=O(O({},"LHWBcyOZ",!a),"n9ScmVi4",l),p=(0,b.Bd)().t;return n.createElement("form",{className:(0,s.x)("royEZWnn",{},[e]),onSubmit:function(t){return y&&v?v(t):""},id:y},n.createElement("div",{className:"mvDfu5EO"},n.createElement(S.A,{error:Boolean(l),className:"mdlkLgdC",fullWidth:!0,label:r,variant:"outlined",type:"search",inputProps:{maxLength:c},onChange:function(t){return f(t)},onBlur:d,onFocus:m,value:o,autoFocus:i}),o&&n.createElement("div",{className:"MrKhMeAa"},n.createElement("button",{className:(0,s.x)("O7p6TeTM",Object.assign({},h),[]),onClick:u},n.createElement(E.jZb,{className:"b0OU4hMN"})))),l&&n.createElement("p",{className:"gCmEHHyA"},p(l)," !"))};var C=r(9630),L=r(4317),N=(r(998),function(t,e,r,n){return new(r||(r=Promise))((function(o,a){function i(t){try{l(n.next(t))}catch(t){a(t)}}function c(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}l((n=n.apply(t,e||[])).next())}))});const A=(0,L.zD)("inviteCode/send",((t,e)=>N(void 0,void 0,void 0,(function*(){const{extra:r,rejectWithValue:n}=e;try{if(yield(1e5,new Promise((t=>{setTimeout((()=>t()),1e5)}))),!t.code)throw new Error("Fullfill input");if("22222"!==t.code)throw new Error("Code is not valid");return t.code}catch(t){return n(t.message)}})))),k=(0,L.Z0)({name:"user",initialState:{data:void 0,error:"",isLoading:!1,code:void 0,success:!1},reducers:{setUserCode:(t,e)=>{t.code=e.payload},clearUserCode:t=>{t.code=void 0}},extraReducers:t=>{t.addCase(A.pending,(t=>{t.error=void 0,t.isLoading=!0})).addCase(A.fulfilled,((t,e)=>{t.isLoading=!1;const r=e.payload;t.data=r,t.success=!0,t.error=""})).addCase(A.rejected,((t,e)=>{t.isLoading=!1,t.error=e.payload}))}}),{actions:I}=k,{reducer:P}=k,T=t=>null==t?void 0:t.InviteCode;function F(t){return F="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},F(t)}function _(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return B(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?B(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function B(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}const M=function(t){var e=t.className,r=t.visible,a=t.onClose,i=t.onSliding,c=(0,b.Bd)("login").t,u=(0,C.j)(),f=(0,o.d4)(T),m=_((0,n.useState)(!1),2),d=m[0],y=m[1],v=_((0,n.useState)(!1),2),h=v[0],p=v[1],g=_((0,n.useState)(""),2),E=(g[0],g[1],(0,n.useCallback)((function(t){u(I.setUserCode(t.target.value))}),[u])),S=(0,n.useCallback)((function(){u(I.clearUserCode())}),[u]),j=function(){p(!0),i(!1),setTimeout((function(){a(),p(!1)}),200)},O=(0,n.useCallback)((function(t){t.preventDefault();var e=null==f?void 0:f.code;u(A({code:e}))}),[u,f]);(0,n.useEffect)((function(){null==f||f.success,j()}),[null==f?void 0:f.success]),(0,n.useEffect)((function(){r&&p(!1)}),[r]);var L,N,k,P,B=(L={},k=h,P=function(t,e){if("object"!=F(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=F(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(N="_M7ill3j"),(N="symbol"==F(P)?P:P+"")in L?Object.defineProperty(L,N,{value:k,enumerable:!0,configurable:!0,writable:!0}):L[N]=k,L);return n.createElement(n.Fragment,null,r&&n.createElement("div",{className:(0,s.x)("HecLABnp",Object.assign({},B),[e])},n.createElement("div",{className:"yfOU3BfA"},n.createElement(w,{backFunc:j}),n.createElement(x,{className:"Mr0VpXDj",active:d,value:(null==f?void 0:f.code)||"",placeholder:c("Input invite code"),maxLength:10,error:null==f?void 0:f.error,formId:"inviteCode",onClearInput:S,handleChange:E,onFocus:function(){y(!0)},onBlur:function(){y(!1)},onSubmit:O,autoFocus:!0}),n.createElement(l.A,{className:"NrODFTSK",text:c("Check code"),type:"submit",form:"inviteCode",isLoading:null==f?void 0:f.isLoading}))))};var U=r(4269),G=r(7123);function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function R(){R=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},i=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(t){u=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var a=e&&e.prototype instanceof p?e:p,i=Object.create(a.prototype),c=new k(n||[]);return o(i,"_invoke",{value:C(t,r,c)}),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var m="suspendedStart",d="suspendedYield",y="executing",v="completed",h={};function p(){}function b(){}function g(){}var w={};u(w,i,(function(){return this}));var E=Object.getPrototypeOf,S=E&&E(E(I([])));S&&S!==r&&n.call(S,i)&&(w=S);var j=g.prototype=p.prototype=Object.create(w);function O(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function r(o,a,i,c){var l=f(t[o],t,a);if("throw"!==l.type){var u=l.arg,s=u.value;return s&&"object"==D(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(s).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(l.arg)}var a;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return a=a?a.then(o,o):o()}})}function C(e,r,n){var o=m;return function(a,i){if(o===y)throw Error("Generator is already running");if(o===v){if("throw"===a)throw i;return{value:t,done:!0}}for(n.method=a,n.arg=i;;){var c=n.delegate;if(c){var l=L(c,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===m)throw o=v,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=y;var u=f(e,r,n);if("normal"===u.type){if(o=n.done?v:d,u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(o=v,n.method="throw",n.arg=u.arg)}}}function L(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,L(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var a=f(o,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,h;var i=a.arg;return i?i.done?(r[e.resultName]=i.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,h):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,h)}function N(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function A(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function I(e){if(e||""===e){var r=e[i];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return a.next=a}}throw new TypeError(D(e)+" is not iterable")}return b.prototype=g,o(j,"constructor",{value:g,configurable:!0}),o(g,"constructor",{value:b,configurable:!0}),b.displayName=u(g,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,u(t,l,"GeneratorFunction")),t.prototype=Object.create(j),t},e.awrap=function(t){return{__await:t}},O(x.prototype),u(x.prototype,c,(function(){return this})),e.AsyncIterator=x,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new x(s(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},O(j),u(j,l,"Generator"),u(j,i,(function(){return this})),u(j,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=I,k.prototype={constructor:k,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(A),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var l=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,h):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),A(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;A(r)}return o}}throw Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:I(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),h}},e}const V=function(t){var e=t.className,r=(0,b.Bd)().t,o=(0,n.useContext)(G.b).tonConnectUI;return(0,U.zI)(),(0,U.zI)(!1),(0,n.useRef)(),n.createElement(n.Fragment,null,n.createElement(l.A,{className:(0,s.x)("MwXpyObv",{},[e]),text:r("Connect wallet"),onClick:function(){return t=void 0,e=void 0,r=void 0,n=R().mark((function t(){return R().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.openModal();case 2:case"end":return t.stop()}}),t)})),new(r||(r=Promise))((function(o,a){function i(t){try{l(n.next(t))}catch(t){a(t)}}function c(t){try{l(n.throw(t))}catch(t){a(t)}}function l(t){var e;t.done?o(t.value):(e=t.value,e instanceof r?e:new r((function(t){t(e)}))).then(i,c)}l((n=n.apply(t,e||[])).next())}));var t,e,r,n}}))};function Z(t){return Z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Z(t)}function z(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,a,i,c=[],l=!0,u=!1;try{if(a=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=a.call(r)).done)&&(c.push(n.value),c.length!==e);l=!0);}catch(t){u=!0,o=t}finally{try{if(!l&&null!=r.return&&(i=r.return(),Object(i)!==i))return}finally{if(u)throw o}}return c}}(t,e)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var W={InviteCode:P};const $=function(t){t.className;var e,r,a,i,u=(0,b.Bd)("login").t,m=z((0,n.useState)(!1),2),d=m[0],y=m[1],v=z((0,n.useState)(!1),2),g=v[0],w=v[1],E=(0,o.d4)(f),S=(0,o.d4)(T),j=(0,n.useCallback)((function(){(null==S?void 0:S.success)||(y(!0),w(!0))}),[y,d,S]),O=(0,n.useCallback)((function(t){w(t)}),[y,d,w,g]),x=(0,n.useCallback)((function(){y(!1)}),[y,d]),C=(e={},a=g,i=function(t,e){if("object"!=Z(t)||!t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!=Z(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r="RPwlHm9F"),(r="symbol"==Z(i)?i:i+"")in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e);return n.createElement(c,{reducers:W,removeAfterUnmount:!0},n.createElement(M,{visible:d,onClose:x,onSliding:O}),n.createElement("div",{className:(0,s.x)("iotVkJQN",Object.assign({},C),[])},n.createElement("div",{className:"NTJVgCxV"},n.createElement(p,null),n.createElement("div",{className:"rz1A0dGk"},n.createElement(h,{loading:E.isLoading,width:"100%"},n.createElement(l.A,{className:"M0noyxw9",text:u("Input Invite Code"),onClick:j})),n.createElement(h,{loading:E.isLoading,width:"100%"},n.createElement(V,null))))))}}}]);