"use strict";(self.webpackChunkWeb3UP_=self.webpackChunkWeb3UP_||[]).push([[919],{1919:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});var a=n(6540);const l={};var r=n(7761),u=n.n(r),o=n(5534),i=n(3747),s=n(7101),c=n(9630),d=n(2896),v=function(e){var t;return null===(t=null==e?void 0:e.Login)||void 0===t?void 0:t.data},m=function(e){var t;return null===(t=null==e?void 0:e.Login)||void 0===t?void 0:t.error},f=function(e){var t;return null===(t=null==e?void 0:e.Login)||void 0===t?void 0:t.isLoading},p=n(9095),g=n(13);const b=function(e){e.className;var t=(0,c.j)(),n=(0,a.useState)(""),r=n[0],b=n[1],E=(0,a.useState)(""),w=E[0],h=E[1],k=(0,d.d4)(v),C=((0,d.d4)(m),(0,d.d4)(f),(0,a.useCallback)((function(e){t(p.pc.setEmail(e))}),[t])),L=(0,a.useCallback)((function(e){t(p.pc.setPassword(e))}),[t]);return a.createElement("form",{className:(0,s.x)(l.LoginForm,{},[]),onSubmit:function(e){return function(e){e.preventDefault();var n=u().isEmail(k.email),a=k.password.length>=8;n&&a?(b(""),h(""),t((0,g.T)({email:k.email,password:k.password}))):(a?a&&h(""):h("Пароль должен содержать не меньше 8 символов!"),n?n&&b(""):b("Некорректная почта!"))}(e)}},a.createElement("p",null,r),a.createElement(i.A,{type:"text",value:k.email,onChange:function(e){return C(e.target.value)}}),a.createElement("p",null,w),a.createElement(i.A,{type:"text",value:k.password,onChange:function(e){return L(e.target.value)}}),a.createElement(o.A,{type:"submit",text:"Войти"}))}}}]);