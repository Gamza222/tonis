"use strict";(self.webpackChunkTonito=self.webpackChunkTonito||[]).push([[919],{1919:(t,e,n)=>{n.r(e),n.d(e,{default:()=>h});var r=n(6540);const a={};var l=n(7761),o=n.n(l),u=n(5534),i=n(3747),c=n(7101),s=n(9630),f=n(2474);const d=t=>{var e;return null===(e=null==t?void 0:t.Login)||void 0===e?void 0:e.data},v=t=>{var e;return null===(e=null==t?void 0:t.Login)||void 0===e?void 0:e.error},m=t=>{var e;return null===(e=null==t?void 0:t.Login)||void 0===e?void 0:e.isLoading};var p=n(9095),y=n(13);function b(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,a,l,o,u=[],i=!0,c=!1;try{if(l=(n=n.call(t)).next,0===e){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=l.call(n)).done)&&(u.push(r.value),u.length!==e);i=!0);}catch(t){c=!0,a=t}finally{try{if(!i&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw a}}return u}}(t,e)||function(t,e){if(t){if("string"==typeof t)return g(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?g(t,e):void 0}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}const h=function(t){t.className;var e=(0,s.j)(),n=b((0,r.useState)(""),2),l=n[0],g=n[1],h=b((0,r.useState)(""),2),w=h[0],A=h[1],E=(0,f.d4)(d),S=((0,f.d4)(v),(0,f.d4)(m),(0,r.useCallback)((function(t){e(p.pc.setEmail(t))}),[e])),C=(0,r.useCallback)((function(t){e(p.pc.setPassword(t))}),[e]);return r.createElement("form",{className:(0,c.x)(a.LoginForm,{},[]),onSubmit:function(t){return function(t){t.preventDefault();var n=o().isEmail(E.email),r=E.password.length>=8;n&&r?(g(""),A(""),e((0,y.T)({email:E.email,password:E.password}))):(r?r&&A(""):A("Пароль должен содержать не меньше 8 символов!"),n?n&&g(""):g("Некорректная почта!"))}(t)}},r.createElement("p",null,l),r.createElement(i.A,{type:"text",value:E.email,onChange:function(t){return S(t.target.value)}}),r.createElement("p",null,w),r.createElement(i.A,{type:"text",value:E.password,onChange:function(t){return C(t.target.value)}}),r.createElement(u.A,{type:"submit",text:"Войти"}))}}}]);