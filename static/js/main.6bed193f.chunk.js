(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{10:function(t,e,n){"use strict";n.d(e,"a",(function(){return g})),n.d(e,"c",(function(){return p})),n.d(e,"b",(function(){return y}));var r=n(16),c=n.n(r),a=n(23),u=n(18),o=n.n(u),s=n(3),i={registerRequest:Object(s.b)("auth/registerRequest"),registerSuccess:Object(s.b)("auth/registerSuccess"),registerError:Object(s.b)("auth/registerError"),loginRequest:Object(s.b)("auth/loginRequest"),loginSuccess:Object(s.b)("auth/loginSuccess"),loginError:Object(s.b)("auth/loginError"),logoutRequest:Object(s.b)("auth/logoutRequest"),logoutSuccess:Object(s.b)("auth/logoutSuccess"),logoutError:Object(s.b)("auth/logoutError"),getCurrentUserRequest:Object(s.b)("auth/getCurrentUserRequest"),getCurrentUserSuccess:Object(s.b)("auth/getCurrentUserSuccess"),getCurrentUserError:Object(s.b)("auth/getCurrentUserError")};o.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var b,j,l,O,d=function(t){o.a.defaults.headers.common.Authorization="Bearer ".concat(t)},f=function(){o.a.defaults.headers.common.Authorization=""},g={register:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.registerRequest()),e.prev=1,e.next=4,o.a.post("/users/signup",t);case 4:r=e.sent,d(r.data.token),n(i.registerSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(i.registerError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},logOut:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(i.logoutRequest()),t.prev=1,t.next=4,o.a.post("/users/logout");case 4:f(),e(i.logoutSuccess()),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),e(i.logoutError(t.t0.message));case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e){return t.apply(this,arguments)}}()},logIn:function(t){return function(){var e=Object(a.a)(c.a.mark((function e(n){var r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(i.loginRequest()),e.prev=1,e.next=4,o.a.post("/users/login",t);case 4:r=e.sent,d(r.data.token),n(i.loginSuccess(r.data)),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),n(i.loginError(e.t0.message));case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}()},getCurrentUser:function(){return function(){var t=Object(a.a)(c.a.mark((function t(e,n){var r,a,u;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=n(),a=r.auth.token){t.next=3;break}return t.abrupt("return");case 3:return d(a),e(i.getCurrentUserRequest()),t.prev=5,t.next=8,o.a.get("/users/current");case 8:u=t.sent,e(i.getCurrentUserSuccess(u.data)),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(5),e(i.getCurrentUserError(t.t0.message));case 15:case"end":return t.stop()}}),t,null,[[5,12]])})));return function(e,n){return t.apply(this,arguments)}}()}},p={getIsAuthenticated:function(t){return t.auth.isAuthenticated},getUserName:function(t){return t.auth.user.name}},h=n(2),m=n(6),v={name:null,email:null},x=Object(s.c)(v,(b={},Object(h.a)(b,i.registerSuccess,(function(t,e){return e.payload.user})),Object(h.a)(b,i.loginSuccess,(function(t,e){return e.payload.user})),Object(h.a)(b,i.logoutSuccess,(function(){return v})),Object(h.a)(b,i.getCurrentUserSuccess,(function(t,e){return e.payload})),b)),k=Object(s.c)(null,(j={},Object(h.a)(j,i.registerSuccess,(function(t,e){return e.payload.token})),Object(h.a)(j,i.loginSuccess,(function(t,e){return e.payload.token})),Object(h.a)(j,i.logoutSuccess,(function(){return null})),j)),C=Object(s.c)(null,(l={},Object(h.a)(l,i.registerError,(function(t,e){return e.payload})),Object(h.a)(l,i.loginError,(function(t,e){return e.payload})),Object(h.a)(l,i.logoutError,(function(t,e){return e.payload})),Object(h.a)(l,i.getCurrentUserError,(function(t,e){return e.payload})),l)),S=Object(s.c)(!1,(O={},Object(h.a)(O,i.registerSuccess,(function(){return!0})),Object(h.a)(O,i.loginSuccess,(function(){return!0})),Object(h.a)(O,i.getCurrentUserSuccess,(function(){return!0})),Object(h.a)(O,i.registerError,(function(){return!1})),Object(h.a)(O,i.loginError,(function(){return!1})),Object(h.a)(O,i.getCurrentUserError,(function(){return!1})),Object(h.a)(O,i.logoutSuccess,(function(){return!1})),O)),y=Object(m.c)({user:x,isAuthenticated:S,token:k,error:C})},21:function(t,e,n){t.exports={link:"Auth_link__fEQik",activeStyle:"Auth_activeStyle__FM48W",App:"Auth_App__265Lk"}},24:function(t,e,n){t.exports={AppBar:"AppBar_AppBar__1PKTC",link:"AppBar_link__3JvvS"}},30:function(t,e,n){t.exports={icon:"UserMenu_icon__qJ2jO",btn:"UserMenu_btn__3Fb2a"}},62:function(t,e,n){},8:function(t,e,n){"use strict";n.d(e,"i",(function(){return c})),n.d(e,"j",(function(){return a})),n.d(e,"h",(function(){return u})),n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"a",(function(){return i})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return j})),n.d(e,"e",(function(){return l})),n.d(e,"d",(function(){return O}));var r=n(3),c=Object(r.b)("contacts/fetchContactRequest"),a=Object(r.b)("contacts/fetchContactSuccess"),u=Object(r.b)("contacts/fetchContactError"),o=Object(r.b)("contacts/addContactRequest"),s=Object(r.b)("contacts/addContactSuccess"),i=Object(r.b)("contacts/addContactError"),b=Object(r.b)("contacts/deleteContactRequest"),j=Object(r.b)("contacts/deleteContactSuccess"),l=Object(r.b)("contacts/deleteContactError"),O=Object(r.b)("contacts/filter")},85:function(t,e,n){"use strict";n.r(e);var r,c,a=n(1),u=n(0),o=n.n(u),s=n(25),i=n.n(s),b=n(13),j=n(15),l=n(50),O=(n(62),n(37)),d=n(38),f=n(40),g=n(39),p=n(5),h=n(2),m=n(21),v=n.n(m),x=function(){return Object(a.jsxs)("div",{className:v.a.App,children:[Object(a.jsx)(j.b,{to:"/register",exat:!0,className:v.a.link,activeClassName:v.a.activeStyle,children:"Register"}),Object(a.jsx)(j.b,{to:"/login",exat:!0,className:v.a.link,activeClassName:v.a.activeStyle,children:"LogIn"})]})},k=n(10),C=n.p+"static/media/icon-login.a7f69bf7.png",S=n(30),y=n.n(S),A={onLogout:k.a.logOut},E=Object(b.b)((function(t){return{name:k.c.getUserName(t),avatar:C}}),A)((function(t){var e=t.avatar,n=t.name,r=t.onLogout;return Object(a.jsxs)("div",{className:y.a.user,children:[Object(a.jsx)("img",{className:y.a.icon,src:e,alt:"",width:"24"}),Object(a.jsxs)("span",{children:[" Welcome, ",n," "]}),Object(a.jsx)("button",{className:y.a.btn,type:"button",onClick:r,children:"Logout"})]})})),U=n(24),_=n.n(U),R=Object(b.b)((function(t){return{isAuthenticated:k.c.getIsAuthenticated(t)}}))((function(t){var e,n=t.isAuthenticated;return Object(a.jsxs)("div",{className:_.a.AppBar,children:[n&&Object(a.jsx)(j.b,(e={className:_.a.link,to:"/contacts",exat:!0},Object(h.a)(e,"className",_.a.link),Object(h.a)(e,"activeClassName",_.a.activeStyle),Object(h.a)(e,"children","Contacts"),e)),n?Object(a.jsx)(E,{}):Object(a.jsx)(x,{})]})})),q=n(19),w=n(29),N=Object(b.b)((function(t){return{isAuthenticated:k.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(w.a)(t,["component","isAuthenticated","redirectTo"]);return Object(a.jsx)(p.b,Object(q.a)(Object(q.a)({},c),{},{render:function(t){return n?Object(a.jsx)(e,Object(q.a)({},t)):Object(a.jsx)(p.a,{to:r})}}))})),T=Object(b.b)((function(t){return{isAuthenticated:k.c.getIsAuthenticated(t)}}))((function(t){var e=t.component,n=t.isAuthenticated,r=t.redirectTo,c=Object(w.a)(t,["component","isAuthenticated","redirectTo"]);return Object(a.jsx)(p.b,Object(q.a)(Object(q.a)({},c),{},{render:function(t){return n&&c.restricted?Object(a.jsx)(p.a,{to:r}):Object(a.jsx)(e,Object(q.a)({},t))}}))})),B=Object(u.lazy)((function(){return n.e(5).then(n.bind(null,96))})),I=Object(u.lazy)((function(){return n.e(4).then(n.bind(null,97))})),L=Object(u.lazy)((function(){return Promise.all([n.e(6),n.e(3)]).then(n.bind(null,99))})),F=function(t){Object(f.a)(n,t);var e=Object(g.a)(n);function n(){return Object(O.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.props.onGetCurrentUser()}},{key:"render",value:function(){return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(R,{}),Object(a.jsx)(u.Suspense,{fallback:Object(a.jsx)("p",{children:"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u0435\u043c..."}),children:Object(a.jsxs)(p.d,{children:[Object(a.jsx)(T,{path:"/register",restricted:!0,redirectTo:"/contacts",component:B}),Object(a.jsx)(T,{path:"/login",restricted:!0,redirectTo:"/contacts",component:I}),Object(a.jsx)(N,{path:"/contacts",component:L,redirectTo:"/login"})]})})]})}}]),n}(u.Component),z={onGetCurrentUser:k.a.getCurrentUser},M=Object(b.b)(null,z)(F),J=function(t){t&&t instanceof Function&&n.e(7).then(n.bind(null,98)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,a=e.getLCP,u=e.getTTFB;n(t),r(t),c(t),a(t),u(t)}))},P=n(28),D=n(3),G=n(51),W=n.n(G),K=n(6),Q=n(8),H=Object(D.c)([],(r={},Object(h.a)(r,Q.j,(function(t,e){return e.payload})),Object(h.a)(r,Q.c,(function(t,e){var n=e.payload;return[].concat(Object(P.a)(t),[n])})),Object(h.a)(r,Q.g,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),r)),V=Object(D.c)("",Object(h.a)({},Q.d,(function(t,e){return e.payload}))),X=Object(D.c)(!1,(c={},Object(h.a)(c,Q.b,(function(){return!0})),Object(h.a)(c,Q.c,(function(){return!1})),Object(h.a)(c,Q.a,(function(){return!1})),Object(h.a)(c,Q.f,(function(){return!0})),Object(h.a)(c,Q.g,(function(){return!1})),Object(h.a)(c,Q.e,(function(){return!1})),Object(h.a)(c,Q.i,(function(){return!0})),Object(h.a)(c,Q.j,(function(){return!1})),Object(h.a)(c,Q.h,(function(){return!1})),c)),Y=Object(K.c)({items:H,filter:V,loading:X}),Z=n(17),$=n(52),tt=n.n($),et=[].concat(Object(P.a)(Object(D.d)({serializableCheck:{ignoredActions:[Z.a,Z.f,Z.b,Z.c,Z.d,Z.e]}})),[W.a]),nt={key:"auth",storage:tt.a,whitelist:["token"]},rt=Object(D.a)({reducer:{auth:Object(Z.g)(nt,k.b),contacts:Y},middleware:et,devTools:!1}),ct={store:rt,persistor:Object(Z.h)(rt)};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(b.a,{store:ct.store,children:Object(a.jsx)(l.a,{loading:null,persistor:ct.persistor,children:Object(a.jsx)(j.a,{children:Object(a.jsx)(M,{})})})})}),document.getElementById("root")),J()}},[[85,1,2]]]);
//# sourceMappingURL=main.6bed193f.chunk.js.map