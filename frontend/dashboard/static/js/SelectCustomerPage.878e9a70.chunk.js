(this["webpackJsonpantd-demo"]=this["webpackJsonpantd-demo"]||[]).push([[12],{305:function(e,t,n){"use strict";n.d(t,"a",(function(){return S})),n.d(t,"b",(function(){return B}));var a=n(5),r=n(0),c=n(1),o="OPEN_MODAL",i="CLOSE_MODAL",s="OPEN_ADVANCED_BOX",u="CLOSE_ADVANCED_BOX",l="OPEN_EDIT_BOX",d="CLOSE_EDIT_BOX",p="OPEN_PANEL",j="CLOSE_PANEL",b="COLLAPSE_PANEL",O="OPEN_BOX",f="CLOSE_BOX",x="COLLAPSE_BOX",h="OPEN_READ_BOX",y="CLOSE_READ_BOX",m="COLLAPSE_READ_BOX",v={isModalOpen:!1,isPanelCollapsed:!1,isBoxCollapsed:!1,isReadBoxOpen:!0,isAdvancedBoxOpen:!1,isEditBoxOpen:!1};function g(e,t){switch(t.type){case o:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!0});case i:return Object(c.a)(Object(c.a)({},e),{},{isModalOpen:!1});case p:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!1});case j:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!0});case b:return Object(c.a)(Object(c.a)({},e),{},{isPanelCollapsed:!e.isPanelCollapsed});case O:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!0});case f:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!1});case x:return Object(c.a)(Object(c.a)({},e),{},{isBoxCollapsed:!e.isBoxCollapsed});case h:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1,isEditBoxOpen:!1,isReadBoxOpen:!0});case y:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1});case s:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isEditBoxOpen:!1,isAdvancedBoxOpen:!0});case u:return Object(c.a)(Object(c.a)({},e),{},{isAdvancedBoxOpen:!1});case l:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!1,isAdvancedBoxOpen:!1,isEditBoxOpen:!0});case d:return Object(c.a)(Object(c.a)({},e),{},{isEditBoxOpen:!1});case m:return Object(c.a)(Object(c.a)({},e),{},{isReadBoxOpen:!e.isReadBoxOpen});default:throw new Error("Unhandled action type: ".concat(t.type))}}var C=function(e){return{modal:{open:function(){e({type:o})},close:function(){e({type:i})}},advancedBox:{open:function(){e({type:s})},close:function(){e({type:u})}},editBox:{open:function(){e({type:l})},close:function(){e({type:d})}},panel:{open:function(){e({type:p})},close:function(){e({type:j})},collapse:function(){e({type:b})}},collapsedBox:{open:function(){e({type:O})},close:function(){e({type:f})},collapse:function(){e({type:x})}},readBox:{open:function(){e({type:h}),console.log("readBox open")},close:function(){e({type:y}),console.log("readBox close")},collapse:function(){e({type:m})}}}},w=function(e){return{isModalOpen:function(){return e.isModalOpen},isPanelOpen:function(){return e.isPanelOpen},isBoxOpen:function(){return e.isBoxOpen}}},k=n(6),E=Object(r.createContext)();function S(e){var t=e.children,n=Object(r.useReducer)(g,v),c=Object(a.a)(n,2),o=c[0],i=c[1],s=Object(r.useMemo)((function(){return[o,i]}),[o]);return Object(k.jsx)(E.Provider,{value:s,children:t})}function B(){var e=Object(r.useContext)(E);if(void 0===e)throw new Error("useCrudContext must be used within a CrudContextProvider");var t=Object(a.a)(e,2),n=t[0],c=t[1];return{state:n,crudContextAction:C(c),crudContextSelector:w(n)}}},306:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var a=n(1),r=n(24),c=n(38),o=n(53),i=n(315),s={resetState:function(){return function(){var e=Object(c.a)(Object(r.a)().mark((function e(t){return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:o.g});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},resetAction:function(e){return function(){var t=Object(c.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:o.f,keyState:e,payload:null});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},currentItem:function(e){return function(){var t=Object(c.a)(Object(r.a)().mark((function t(n){return Object(r.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n({type:o.b,payload:Object(a.a)({},e)});case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},currentAction:function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(c){return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:c({type:o.a,keyState:e,payload:Object(a.a)({},t)});case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},list:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return function(){var n=Object(c.a)(Object(r.a)().mark((function n(a){var c,s;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:o.d,keyState:"list",payload:null}),n.next=3,i.a.list(e,{page:t});case 3:!0===(c=n.sent).success?(s={items:c.result,pagination:{current:parseInt(c.pagination.page,10),pageSize:10,total:parseInt(c.pagination.count,10)}},a({type:o.e,keyState:"list",payload:s})):a({type:o.c,keyState:"list",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},create:function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(a){var c;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:o.d,keyState:"create",payload:null}),console.log("jsonData action redux",t),n.next=4,i.a.create(e,t);case 4:!0===(c=n.sent).success?(a({type:o.e,keyState:"create",payload:c.result}),a({type:o.b,payload:c.result})):a({type:o.c,keyState:"create",payload:null});case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},read:function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(a){var c;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:o.d,keyState:"read",payload:null}),n.next=3,i.a.read(e,t);case 3:!0===(c=n.sent).success?(a({type:o.b,payload:c.result}),a({type:o.e,keyState:"read",payload:c.result})):a({type:o.c,keyState:"read",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},update:function(e,t,n){return function(){var a=Object(c.a)(Object(r.a)().mark((function a(c){var s;return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:o.d,keyState:"update",payload:null}),a.next=3,i.a.update(e,t,n);case 3:!0===(s=a.sent).success?(c({type:o.e,keyState:"update",payload:s.result}),c({type:o.b,payload:s.result})):c({type:o.c,keyState:"update",payload:null});case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},delete:function(e,t){return function(){var n=Object(c.a)(Object(r.a)().mark((function n(a){var c;return Object(r.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a({type:o.d,keyState:"delete",payload:null}),n.next=3,i.a.delete(e,t);case 3:!0===(c=n.sent).success?a({type:o.e,keyState:"delete",payload:c.result}):a({type:o.c,keyState:"delete",payload:null});case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},search:function(e,t,n){return function(){var a=Object(c.a)(Object(r.a)().mark((function a(c){var s;return Object(r.a)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c({type:o.d,keyState:"search",payload:null}),t.cancel(),t=i.a.source(),a.next=5,i.a.search(e,t,n);case 5:!0===(s=a.sent).success?c({type:o.e,keyState:"search",payload:s.result}):c({type:o.c,keyState:"search",payload:null});case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}}},307:function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"e",(function(){return o})),n.d(t,"d",(function(){return i})),n.d(t,"a",(function(){return s})),n.d(t,"g",(function(){return u})),n.d(t,"c",(function(){return l})),n.d(t,"f",(function(){return d}));var a=n(101),r=function(e){return e.crud},c=Object(a.a)([r],(function(e){return e.current})),o=Object(a.a)([r],(function(e){return e.list})),i=function(e){return Object(a.a)(o,(function(t){return t.result.items.find((function(t){return t._id===e}))}))},s=Object(a.a)([r],(function(e){return e.create})),u=Object(a.a)([r],(function(e){return e.update})),l=(Object(a.a)([r],(function(e){return e.read})),Object(a.a)([r],(function(e){return e.delete}))),d=Object(a.a)([r],(function(e){return e.search}))},310:function(e,t,n){"use strict";function a(){var e=String.fromCharCode(Math.floor(25*Math.random()+65));do{var t=Math.floor(25*Math.random()+65);e+=String.fromCharCode(t),e+=Math.floor(99*Math.random())}while(e.length<8);return e}n.d(t,"a",(function(){return a}))},315:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(24),r=n(38),c=n(1),o=n(4),i=n(134),s=n.n(i),u=n(82),l=n(94),d=n(135),p=n(136),j=Object(o.a)({},u.a,l.c.get()),b=s.a.create({baseURL:u.b,timeout:3e4,headers:Object(c.a)({},j)}),O={create:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(c.a)({},j),console.log("jsonData",n),e.prev=2,e.next=5,b.post(t+"/create",n);case 5:return r=e.sent,e.abrupt("return",Object(p.a)(r));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),read:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(c.a)({},j),e.prev=1,e.next=4,b.get(t+"/read/"+n);case 4:return r=e.sent,e.abrupt("return",Object(p.a)(r));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),update:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n,r){var o;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(c.a)({},j),e.prev=1,e.next=4,b.patch(t+"/update/"+n,r);case 4:return o=e.sent,e.abrupt("return",Object(p.a)(o));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n,a){return e.apply(this,arguments)}}(),delete:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var r,o=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.length>2&&void 0!==o[2]?o[2]:{},b.defaults.headers=Object(c.a)({},j),e.prev=2,e.next=5,b.delete(t+"/delete/"+n);case 5:return r=e.sent,e.abrupt("return",Object(p.a)(r));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),filter:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r,o,i,s,u=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=u.length>1&&void 0!==u[1]?u[1]:{},b.defaults.headers=Object(c.a)({},j),e.prev=2,r=n.filter?"filter="+n.filter:"",o=n.equal?"&equal="+n.equal:"",i="?".concat(r).concat(o),e.next=8,b.get(t+"/filter"+i);case 8:return s=e.sent,e.abrupt("return",Object(p.a)(s));case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(t){return e.apply(this,arguments)}}(),search:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var r,c,i,s,j,O=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=O.length>2&&void 0!==O[2]?O[2]:{},b.defaults.headers=Object(o.a)({},u.a,l.c.get()),e.prev=2,c="",r!=={}&&(i=r.fields?"fields="+r.fields:"",s=r.question?"&q="+r.question:"",c="?".concat(i).concat(s)),e.next=7,b.get(t+"/search"+c,{cancelToken:n.token});case 7:return j=e.sent,e.abrupt("return",Object(p.a)(j));case 11:return e.prev=11,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(t,n){return e.apply(this,arguments)}}(),list:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n,r,c,i,s,j=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=j.length>1&&void 0!==j[1]?j[1]:{},b.defaults.headers=Object(o.a)({},u.a,l.c.get()),console.log(l.c.get()),e.prev=3,r="",n!=={}&&(c=n.page?"page="+n.page:"",i=n.items?"&items="+n.items:"",r="?".concat(c).concat(i)),e.next=8,b.get(t+"/list"+r);case 8:return s=e.sent,e.abrupt("return",Object(p.a)(s));case 12:return e.prev=12,e.t0=e.catch(3),e.abrupt("return",Object(d.a)(e.t0));case 15:case"end":return e.stop()}}),e,null,[[3,12]])})));return function(t){return e.apply(this,arguments)}}(),post:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var r,o=arguments;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o.length>2&&void 0!==o[2]?o[2]:{},b.defaults.headers=Object(c.a)({},j),e.prev=2,e.next=5,b.post(t,n);case 5:return r=e.sent,e.abrupt("return",Object(p.a)(r));case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",Object(d.a)(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t,n){return e.apply(this,arguments)}}(),get:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){var n;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(c.a)({},j),e.prev=1,e.next=4,b.get(t);case 4:return n=e.sent,e.abrupt("return",Object(p.a)(n));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t){return e.apply(this,arguments)}}(),patch:function(){var e=Object(r.a)(Object(a.a)().mark((function e(t,n){var r;return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b.defaults.headers=Object(c.a)({},j),e.prev=1,e.next=4,b.patch(t,n);case 4:return r=e.sent,e.abrupt("return",Object(p.a)(r));case 8:return e.prev=8,e.t0=e.catch(1),e.abrupt("return",Object(d.a)(e.t0));case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(t,n){return e.apply(this,arguments)}}(),source:function(){var e=s.a.CancelToken.source();return e}},f=O},316:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return l}));var a=n(24),r=n(38),c=n(57),o=n(94),i=n(80),s=n(95),u=function(e){return function(){var t=Object(r.a)(Object(a.a)().mark((function t(n){var r,u;return Object(a.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:c.b,payload:{loading:!0}}),t.next=3,o.a(e);case 3:!0===(r=t.sent).success?(u={current:r.result.admin,loading:!1,isLoggedIn:!0},i.a.set("auth",u),n({type:c.c,payload:r.result.admin}),s.a.push("/")):n({type:c.a,payload:r});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},l=function(){return function(){var e=Object(r.a)(Object(a.a)().mark((function e(t){return Object(a.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o.b(),t({type:c.d}),s.a.push("/login");case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}},318:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var a=n(292),r=n(86),c=n(6);function o(e){var t=e.isLoading,n=e.children,o=Object(c.jsx)(r.a,{style:{fontSize:24},spin:!0});return Object(c.jsx)(a.a,{indicator:o,spinning:t,children:n})}},319:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(338);function a(e,t,n){return void 0===n&&(n="|"),t.split(n).map((function(t){return function(e,t){return t.split(".").reduce((function(e,t){return void 0===e||null===e?e:e[t]}),e)}(e,t)})).join(" ")}Object.byString=function(e,t){for(var n=(t=(t=t.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),a=0,r=n.length;a<r;++a){var c=n[a];if(null===e)return;if(!(c in e))return;e=e[c]}return e}},321:function(e,t,n){"use strict";n.d(t,"a",(function(){return B})),n.d(t,"b",(function(){return A}));var a=n(0),r=n(305),c=n(6);var o=function(e){var t=e.children;return Object(c.jsx)(r.a,{children:t})},i=n(93),s=n(293),u=n(291),l=n(394),d=n(551),p=n(299),j=n(316),b=n(310),O=s.a.Header;function f(){var e=Object(i.b)(),t=Object(c.jsxs)(u.a,{children:[Object(c.jsx)(u.a.Item,{onClick:function(){return e(Object(j.b)())},children:"logout"},"".concat(Object(b.a)())),Object(c.jsx)(u.a.Item,{children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.taobao.com/",children:"2nd menu item"})},"".concat(Object(b.a)())),Object(c.jsx)(u.a.Item,{children:Object(c.jsx)("a",{target:"_blank",rel:"noopener noreferrer",href:"http://www.tmall.com/",children:"3rd menu item"})},"".concat(Object(b.a)()))]});return Object(c.jsx)(O,{className:"site-layout-background",style:{padding:0,background:"none"},children:Object(c.jsx)(l.a,{overlay:t,placement:"bottomRight",arrow:!0,children:Object(c.jsx)(d.a,{icon:Object(c.jsx)(p.a,{})})})})}var x=n(5),h=n(578),y=n(559),m=n(560),v=function(e){var t=e.onChange,n=e.title;return Object(c.jsx)("div",{className:"collapseBoxHeader",onClick:t,children:n})},g=function(e){var t=e.isOpen,n=e.children,a=t?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(c.jsx)("div",{className:"TopCollapseBox",children:Object(c.jsx)("div",{style:a,children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(m.a,{span:24,children:[" ",n]})})})})},C=function(e){var t=e.isOpen,n=e.children,a=t?{display:"none",opacity:0}:{display:"block",opacity:1};return Object(c.jsx)("div",{className:"BottomCollapseBox",children:Object(c.jsx)("div",{style:a,children:Object(c.jsx)(y.a,{children:Object(c.jsxs)(m.a,{span:24,children:[" ",n]})})})})};function w(e){var t=e.topContent,n=e.bottomContent,a=e.buttonTitle,r=e.isCollapsed,o=e.onCollapse,i=r?"collapsed":"",s=e.isPanelCollapsed?"-400px":"0px";return Object(c.jsxs)("div",{className:"panelBox",style:{width:"400px",marginLeft:s},children:[Object(c.jsx)(g,{isOpen:r,children:t}),Object(c.jsxs)("div",{className:"collapseBox "+i,children:[Object(c.jsx)(v,{title:a,onChange:o}),Object(c.jsx)("div",{className:"whiteBg"}),Object(c.jsx)(C,{isOpen:r,children:n})]})]})}var k=s.a.Sider;function E(e){var t=e.config,n=e.topContent,o=e.bottomContent,i=e.fixHeaderPanel,s=t.ADD_NEW_ENTITY,u=Object(r.b)(),l=u.state,d=u.crudContextAction,p=l.isPanelCollapsed,j=l.isBoxCollapsed,b=d.panel,O=d.collapsedBox,f=Object(a.useState)("0px"),y=Object(x.a)(f,2),m=y[0],v=y[1],g=Object(a.useState)("1"),C=Object(x.a)(g,2),E=C[0],S=C[1];Object(a.useEffect)((function(){p?(v("-400px"),S(0)):(v("0px"),S(1)),setTimeout((function(){v("0px"),S(1)}),300)}),[p]);return Object(c.jsxs)(k,{trigger:Object(c.jsx)(h.a,{className:"trigger"}),width:400,collapsible:!0,collapsed:p,collapsedWidth:"0px",onCollapse:function(){b.collapse()},zeroWidthTriggerStyle:{right:"-50px",top:"15px"},style:{background:"#FFF",left:m,opacity:E},children:[i,Object(c.jsx)(w,{buttonTitle:s,isPanelCollapsed:p,isCollapsed:j,onCollapse:function(){O.collapse()},topContent:n,bottomContent:o})]})}var S=s.a.Content;function B(e){var t=e.children,n=e.config,a=e.sidePanelTopContent,r=e.sidePanelBottomContent,i=e.fixHeaderPanel;return Object(c.jsx)(o,{children:Object(c.jsxs)(s.a,{style:{minHeight:"100vh"},children:[Object(c.jsx)(E,{config:n,topContent:a,bottomContent:r,fixHeaderPanel:i}),Object(c.jsxs)(s.a,{className:"site-layout",children:[Object(c.jsx)(f,{}),Object(c.jsx)(S,{className:"site-layout-background",style:{padding:"50px 40px",margin:"50px auto",width:"100%",maxWidth:"1000px"},children:t})]})]})})}var _=s.a.Content;function A(e){var t=e.children;return Object(c.jsxs)(s.a,{className:"site-layout",children:[Object(c.jsx)(f,{}),Object(c.jsx)(_,{style:{padding:"30px 40px",margin:"20px auto",width:"100%",maxWidth:"1100px"},children:t})]})}},322:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var a=n(1),r=n(5),c=n(0),o=n(93),i=n(306),s=n(305),u=n(307),l=n(566),d=n(290),p=n(318),j=n(6);function b(e){var t=e.config,n=e.formElements,b=t.entity,O=Object(o.b)(),f=Object(o.c)(u.a),x=f.isLoading,h=f.isSuccess,y=Object(s.b)().crudContextAction,m=y.panel,v=y.collapsedBox,g=y.readBox,C=l.a.useForm(),w=Object(r.a)(C,1)[0];return Object(c.useEffect)((function(){h&&(g.open(),v.open(),m.open(),w.resetFields(),O(i.a.resetAction("create")),O(i.a.list(b)))}),[h]),Object(j.jsx)(p.a,{isLoading:x,children:Object(j.jsxs)(l.a,{form:w,layout:"vertical",onFinish:function(e){e&&(e.birthday&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:e.birthday.format("DD/MM/YYYY")})),e.date&&(e=Object(a.a)(Object(a.a)({},e),{},{date:e.date.format("DD/MM/YYYY")}))),O(i.a.create(b,e))},children:[n,Object(j.jsx)(l.a.Item,{children:Object(j.jsx)(d.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})}},323:function(e,t,n){"use strict";n.d(t,"a",(function(){return f}));var a=n(1),r=n(5),c=n(0),o=n(332),i=n.n(o),s=n(93),u=n(306),l=n(305),d=n(307),p=n(566),j=n(290),b=n(318),O=n(6);function f(e){var t=e.config,n=e.formElements,o=t.entity,f=Object(s.b)(),x=Object(s.c)(d.g),h=x.current,y=x.isLoading,m=x.isSuccess,v=Object(l.b)(),g=v.state,C=v.crudContextAction,w=C.panel,k=C.collapsedBox,E=C.readBox,S=p.a.useForm(),B=Object(r.a)(S,1)[0];Object(c.useEffect)((function(){h&&(h.birthday&&(h.birthday=i()(h.birthday)),h.date&&(h.date=i()(h.date)),B.setFieldsValue(h))}),[h]),Object(c.useEffect)((function(){m&&(E.open(),k.open(),w.open(),B.resetFields(),f(u.a.resetAction("update")),f(u.a.list(o)))}),[m]);var _=g.isEditBoxOpen?{display:"block",opacity:1}:{display:"none",opacity:0};return Object(O.jsx)("div",{style:_,children:Object(O.jsx)(b.a,{isLoading:y,children:Object(O.jsxs)(p.a,{form:B,layout:"vertical",onFinish:function(e){e&&(e.birthday&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:e.birthday.format("DD/MM/YYYY")})),e.date&&(e=Object(a.a)(Object(a.a)({},e),{},{birthday:e.date.format("DD/MM/YYYY")})));var t=h._id;f(u.a.update(o,t,e))},children:[n,Object(O.jsx)(p.a.Item,{children:Object(O.jsx)(j.a,{type:"primary",htmlType:"submit",children:"Submit"})})]})})})}},324:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(5),r=n(0),c=n(570),o=n(93),i=n(306),s=n(305),u=n(307),l=n(319),d=n(6);function p(e){var t=e.config,n=t.entity,p=t.entityDisplayLabels,j=t.deleteMessage,b=void 0===j?"Do you want delete : ":j,O=t.modalTitle,f=void 0===O?"Remove Item":O,x=Object(o.b)(),h=Object(o.c)(u.c),y=h.current,m=h.isLoading,v=h.isSuccess,g=Object(s.b)(),C=g.state,w=g.crudContextAction,k=C.isModalOpen,E=w.modal,S=Object(r.useState)(""),B=Object(a.a)(S,2),_=B[0],A=B[1];Object(r.useEffect)((function(){if(v&&(E.close(),x(i.a.list(n)),x(i.a.resetAction(n))),y){var e=p.map((function(e){return Object(l.a)(y,e)})).join(" ");A(e)}}),[v,y]);return Object(d.jsx)(c.a,{title:f,visible:k,onOk:function(){var e=y._id;x(i.a.delete(n,e))},onCancel:function(){m||E.close()},confirmLoading:m,children:Object(d.jsxs)("p",{children:[b,_]})})}},325:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n(5),r=n(0),c=n(559),o=n(560),i=n(93),s=n(305),u=n(307),l=n(319),d=n(6);function p(e){var t=e.config.readColumns,n=Object(i.c)(u.b).result,p=Object(s.b)().state.isReadBoxOpen,j=Object(r.useState)([]),b=Object(a.a)(j,2),O=b[0],f=b[1],x=Object(r.useRef)(!0);Object(r.useEffect)((function(){if(console.log("currentResult :",n),console.log("readColumns :",t),x.current)x.current=!1;else{var e=[];t.map((function(t){var a=t.dataIndex,r=t.title,c=Object(l.a)(n,a);e.push({propsKey:a,label:r,value:c})})),f(e)}}),[n]);var h=p?{display:"block",opacity:1}:{display:"none",opacity:0},y=O.map((function(e){return Object(d.jsxs)(c.a,{gutter:12,children:[Object(d.jsx)(o.a,{className:"gutter-row",span:8,children:Object(d.jsx)("p",{children:e.label})}),Object(d.jsx)(o.a,{className:"gutter-row",span:2,children:Object(d.jsx)("p",{children:" : "})}),Object(d.jsx)(o.a,{className:"gutter-row",span:14,children:Object(d.jsx)("p",{children:e.value})})]},e.propsKey)}));return console.log("itemsList :",y),Object(d.jsx)("div",{style:h,children:y})}},326:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var a=n(5),r=n(0),c=n(562),o=n(549),i=n(389),s=n(93),u=n(306),l=n(315),d=n(305),p=n(307),j=n(421),b=n(6);function O(e){var t=e.config,n=t.entity,O=t.searchConfig,f=O.displayLabels,x=O.searchFields,h=O.outputValue,y=void 0===h?"_id":h,m=Object(s.b)(),v=Object(r.useState)(""),g=Object(a.a)(v,2),C=g[0],w=g[1],k=Object(r.useState)([]),E=Object(a.a)(k,2),S=E[0],B=E[1],_=Object(d.b)().crudContextAction,A=_.panel,I=_.collapsedBox,N=_.readBox,T=l.a.source(),P=Object(s.c)(p.f),L=P.result,D=P.isLoading,M=P.isSuccess,F=Object(r.useRef)(!1),R=null;Object(r.useEffect)((function(){D&&B([{label:"... Searching"}])}),[D]);return Object(r.useEffect)((function(){var e=[];L.map((function(t){var n=f.map((function(e){return t[e]})).join(" ");e.push({label:n,value:t[y]})})),B(e)}),[L]),Object(b.jsx)(c.a,{value:C,options:S,style:{width:"100%"},onSelect:function(e){var t=L.find((function(t){return t[y]===e}));m(u.a.currentItem(t)),A.open(),I.open(),N.open()},onSearch:function(e){F.current=!0,clearTimeout(R),R=setTimeout((function(){F.current&&""!==e&&m(u.a.search(n,T,{question:e,fields:x})),F.current=!1}),500)},onChange:function(e){var t=S.find((function(t){return t.value===e})),n=t?t.label:e;w(n)},notFoundContent:M?"":Object(b.jsx)(j.a,{}),allowClear:!0,placeholder:"Your Search here",children:Object(b.jsx)(o.a,{suffix:Object(b.jsx)(i.a,{})})})}},374:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(0);var a=n(566),r=n(549),c=n(6);function o(e){e.isUpdateForm;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(a.a.Item,{label:"company Name",name:"company",rules:[{required:!0,message:"Please input your company name!"}],children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{label:"Surname",name:"surname",rules:[{required:!0,message:"Please input your surname!"}],style:{display:"inline-block",width:"calc(50%)",paddingRight:"5px"},children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your manager name!"}],style:{display:"inline-block",width:"calc(50%)",paddingLeft:"5px"},children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{name:"phone",label:"Phone",rules:[{required:!0,message:"Please input your phone!"}],children:Object(c.jsx)(r.a,{})}),Object(c.jsx)(a.a.Item,{name:"email",label:"E-mail",rules:[{type:"email",message:"The input is not valid E-mail!"},{required:!0,message:"Please input your E-mail!"}],children:Object(c.jsx)(r.a,{})})]})}},573:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n(559),c=n(560),o=n(290),i=n(576),s=n(322),u=n(323),l=n(324),d=n(325),p=n(326),j=n(93),b=n(306),O=n(305),f=n(321),x=n(291),h=n(556),y=n(579),m=n(580),v=n(307),g=n(310),C=n(4),w=n(8),k=n(1),E=n(5),S=n(394),B=n(568),_=n(565),A=n(174);function I(e){if(0===e.indexOf("#")&&(e=e.slice(1)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),6!==e.length)throw new Error("Invalid HEX color.");return.299*parseInt(e.slice(0,2),16)+.587*parseInt(e.slice(2,4),16)+.114*parseInt(e.slice(4,6),16)>186?"#000000":"#FFFFFF"}var N=n(6);function T(e){var t=e.config,n=e.DropDownRowMenu,r=e.AddNewItem,c=Object(a.useRef)(null),i=Object(a.useState)([]),s=Object(E.a)(i,2),u=s[0],l=s[1],d=Object(a.useState)([]),p=Object(E.a)(d,2),O=p[0],f=p[1],x=Object(a.useState)({}),h=Object(E.a)(x,2),y=h[0],m=h[1],T=function(){c.current.click()},P=function(e){var t={};u.map((function(n){t[n]=e.target.value}));m(Object(k.a)(Object(k.a)({},y),t)),l([])};function L(){return Object(N.jsxs)("div",{style:{position:"relative",display:"inline-block"},children:[Object(N.jsx)(o.a,{onClick:T,children:"Make new Color"}),Object(N.jsx)("input",{type:"color",ref:c,onChange:P,style:{opacity:0,position:"absolute",left:0,top:"10px",width:"100%"}})]})}var D=t.entity,M=t.dataTableColumns,F=t.dataTableTitle,R=M.map((function(e){return Object(k.a)(Object(k.a)({},e),{},{render:function(e,t){return{props:{style:{background:y[t._id]?y[t._id]:"",color:y[t._id]?I(y[t._id]):""}},children:e}}})}));M=[].concat(Object(w.a)(R),[{title:"",render:function(e){return{props:{style:{background:y[e._id]?y[e._id]:"",color:y[e._id]?I(y[e._id]):""}},children:Object(N.jsx)(S.a,{overlay:n({row:e}),trigger:["click"],children:Object(N.jsx)(A.a,{style:{cursor:"pointer",fontSize:"24px"}})})}}}]);var Y=Object(j.c)(v.e),q=Y.result,X=Y.isLoading,H=q.pagination,W=q.items,U=Object(j.b)(),z=Object(a.useCallback)((function(e){U(b.a.list(D,e.current))}),[]);Object(a.useEffect)((function(){U(b.a.list(D))}),[]),Object(a.useEffect)((function(){var e=W.map((function(e){return e._id}));f(e)}),[W]);var K=Object(a.useState)(),V=Object(E.a)(K,2),J=V[0],$=V[1],G=Object(a.useState)(!1),Q=Object(E.a)(G,2),Z=Q[0],ee=Q[1],te=Object(C.a)({selectedRowKeys:u,onChange:function(e,t){l(e),console.log("selectedRowKeys changed: ",u)},hideSelectAll:!0,columnWidth:0,renderCell:function(e,t,n,a){return{props:{style:{background:y[t._id]?y[t._id]:""}}}}},"selectedRowKeys",u);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(B.a,{onBack:function(){return window.history.back()},title:F,ghost:!1,extra:[Object(N.jsx)(L,{config:t},"".concat(Object(g.a)())),Object(N.jsx)(o.a,{onClick:z,children:"Refresh"},"".concat(Object(g.a)())),Object(N.jsx)(r,{config:t},"".concat(Object(g.a)()))],style:{padding:"20px 0px"}}),Object(N.jsx)(_.a,{columns:M,rowKey:function(e){return e._id},rowSelection:te,onRow:function(e,t){return{onClick:function(){},onMouseDown:function(){$(t),l([e._id]),ee(!0)},onMouseEnter:function(){if(Z){var e=O.slice(J,t+1);l(e)}},onMouseUp:function(){ee(!1)}}},ellipsis:!0,size:"small",dataSource:W,pagination:H,loading:X,onChange:z})]})}function P(e){var t=e.config,n=Object(O.b)().crudContextAction,a=n.collapsedBox,r=n.panel,c=t.ADD_NEW_ENTITY;return Object(N.jsx)(o.a,{onClick:function(){r.open(),a.close()},type:"primary",children:c})}function L(e){var t=e.row,n=Object(j.b)(),a=Object(O.b)().crudContextAction,r=a.panel,c=a.collapsedBox,o=a.modal,i=a.readBox,s=a.editBox,u=Object(j.c)(Object(v.d)(t._id));return Object(N.jsxs)(x.a,{style:{width:130},children:[Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(h.a,{}),onClick:function(){n(b.a.currentItem(u)),r.open(),c.open(),i.open()},children:"Show"},"".concat(Object(g.a)())),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(y.a,{}),onClick:function(){n(b.a.currentAction("update",u)),s.open(),r.open(),c.open()},children:"Edit"},"".concat(Object(g.a)())),Object(N.jsx)(x.a.Item,{icon:Object(N.jsx)(m.a,{}),onClick:function(){n(b.a.currentAction("delete",u)),o.open()},children:"Delete"},"".concat(Object(g.a)()))]})}function D(e){var t=e.config;return Object(N.jsx)(T,{config:t,DropDownRowMenu:L,AddNewItem:P})}function M(e){var t=e.config,n=e.formElements;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(d.a,{config:t}),Object(N.jsx)(u.a,{config:t,formElements:n})]})}function F(e){var t=e.config,n=Object(O.b)().crudContextAction.collapsedBox;return Object(N.jsxs)("div",{className:"box",children:[Object(N.jsx)(r.a,{gutter:12,children:Object(N.jsx)(c.a,{className:"gutter-row",span:21,children:Object(N.jsx)("h1",{style:{fontSize:20,marginBottom:20},children:t.panelTitle})})}),Object(N.jsxs)(r.a,{gutter:8,children:[Object(N.jsx)(c.a,{className:"gutter-row",span:21,children:Object(N.jsx)(p.a,{config:t})}),Object(N.jsx)(c.a,{className:"gutter-row",span:3,children:Object(N.jsx)(o.a,{onClick:function(){n.close()},block:!0,icon:Object(N.jsx)(i.a,{})})})]})]})}function R(e){var t=e.config,n=e.createForm,r=e.updateForm,c=Object(j.b)();return Object(a.useLayoutEffect)((function(){c(b.a.resetState())}),[]),Object(N.jsxs)(f.a,{config:t,fixHeaderPanel:Object(N.jsx)(F,{config:t}),sidePanelBottomContent:Object(N.jsx)(s.a,{config:t,formElements:n}),sidePanelTopContent:Object(N.jsx)(M,{config:t,formElements:r}),children:[Object(N.jsx)(D,{config:t}),Object(N.jsx)(l.a,{config:t})]})}var Y=n(374);t.default=function(){var e={entity:"client",panelTitle:"SelectCustomer Panel",dataTableTitle:"Customers Lists",ENTITY_NAME:"customer",CREATE_ENTITY:"Create customer",ADD_NEW_ENTITY:"Add new customer",UPDATE_ENTITY:"Update customer",DATATABLE_TITLE:"customers List",readColumns:[{title:"Company",dataIndex:"company"},{title:"Manager Surname",dataIndex:"surname"},{title:"Manager Name",dataIndex:"name"},{title:"Email",dataIndex:"email"},{title:"Phone",dataIndex:"phone"}],dataTableColumns:[{title:"Company",dataIndex:"company"},{title:"Manager Surname",dataIndex:"surname"},{title:"Manager Name",dataIndex:"name"},{title:"Email",dataIndex:"email"}],searchConfig:{displayLabels:["company","surname","name"],searchFields:"company,surname,name",outputValue:"_id"},entityDisplayLabels:["company"]};return Object(N.jsx)(R,{createForm:Object(N.jsx)(Y.a,{}),updateForm:Object(N.jsx)(Y.a,{isUpdateForm:!0}),config:e})}}}]);
//# sourceMappingURL=SelectCustomerPage.878e9a70.chunk.js.map