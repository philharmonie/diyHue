(this.webpackJsonpdiyhue=this.webpackJsonpdiyhue||[]).push([[2],{77:function(e,t,n){},78:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n.n(c),a=n(15),r=n.n(a),i=n(14),l=n(16),o=n.n(l),j=n(37),b=n(13),h=n(7),d=n(39),u=s.a.lazy((function(){return Promise.all([n.e(1),n.e(14),n.e(12)]).then(n.bind(null,101))})),x=s.a.lazy((function(){return Promise.all([n.e(1),n.e(0),n.e(5)]).then(n.bind(null,102))})),O=s.a.lazy((function(){return n.e(10).then(n.bind(null,95))})),m=s.a.lazy((function(){return n.e(11).then(n.bind(null,96))})),p=s.a.lazy((function(){return n.e(8).then(n.bind(null,97))})),f=s.a.lazy((function(){return n.e(7).then(n.bind(null,98))})),g=s.a.lazy((function(){return Promise.all([n.e(0),n.e(15),n.e(13)]).then(n.bind(null,103))})),y=[{path:"/",exact:!0,name:"Groups",component:u},{path:"/groups",exact:!0,name:"Groups",component:u},{path:"/lights",exact:!0,name:"Lights",component:x},{path:"/linkbutton",exact:!0,name:"LinkButton",component:O},{path:"/mqtt",exact:!0,name:"MQTT",component:m},{path:"/deconz",exact:!0,name:"Deconz",component:p},{path:"/alarm",exact:!0,name:"Alarm",component:f},{path:"/bridge",exact:!0,name:"Bridge",component:s.a.lazy((function(){return n.e(6).then(n.bind(null,99))}))},{path:"/devices",exact:!0,name:"Devices",component:g},{path:"/hue",exact:!0,name:"Hue Bridge",component:s.a.lazy((function(){return n.e(9).then(n.bind(null,100))}))}],v=n(6),k=Object(v.jsx)("div",{className:"pt-3 text-center",children:Object(v.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),F=function(e){var t=e.API_KEY;return Object(v.jsx)("main",{className:"container",children:Object(v.jsx)(c.Suspense,{fallback:k,children:Object(v.jsx)(b.a,{children:Object(v.jsxs)(h.d,{children:[y.map((function(e,n){return e.component&&Object(v.jsx)(h.b,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(v.jsx)(d.d,{children:Object(v.jsx)(e.component,{API_KEY:t})})}},n)})),Object(v.jsx)(h.a,{from:"/",to:"/groups"})]})})})})},N=s.a.memo(F),S=n(9),A=n.p+"static/media/logo.f4d77638.svg",E=function(e){var t=e.showSidebar,n=e.setShowSidebar,s=e.API_KEY,a=Object(c.useState)(!1),r=Object(i.a)(a,2),l=r[0],j=r[1];Object(c.useEffect)((function(){b();var e=setInterval((function(){b()}),5e3);return function(){return clearInterval(e)}}),[s]);var b=function(){void 0!==s&&o.a.get("/api/".concat(s,"/groups/0")).then((function(e){console.log(e.data),j(e.data.state.any_on)})).catch((function(e){console.error(e)}))};return Object(v.jsxs)("div",{className:"topbar",children:[Object(v.jsx)("img",{src:A,alt:"diyHue Logo"}),Object(v.jsxs)("button",{type:"button",id:"sidebarCollapse",className:"sidebarToggle",onClick:function(){return n(!t)},children:[Object(v.jsx)(S.a,{}),Object(v.jsx)("span",{})]}),Object(v.jsxs)("div",{className:"switchContainer",children:[Object(v.jsxs)("p",{children:["Turn all ",l?"off":"on"]}),Object(v.jsxs)("label",{className:"switch",children:[Object(v.jsx)("input",{type:"checkbox",value:l,checked:l,onChange:function(e){return function(e){var t={on:e};j(e),console.log("Apply state "+JSON.stringify(t)),o.a.put("/api/".concat(s,"/groups/0/action"),t)}(e.target.checked)}}),Object(v.jsx)("span",{className:"slider"})]})]}),Object(v.jsx)("div",{className:"groupToggle",children:Object(v.jsx)("i",{onClick:"toggleLights(this)",className:"fas fa-couch"})})]})},z=function(e){var t=e.showSidebar;return Object(v.jsx)("div",{className:"sidebar ".concat(t?"":"active"),children:Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{className:"iconBox"}),Object(v.jsx)("a",{href:"#home",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.i,{style:{color:"#0092FF"}})," Home"]})}),Object(v.jsx)("a",{href:"#lights",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.k,{style:{color:"#FF9E00"}})," Lights"]})}),Object(v.jsx)("a",{href:"#linkbutton",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.l,{style:{color:"#FF92FF"}})," Link Button"]})}),Object(v.jsx)("a",{href:"#bridge",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.g,{style:{color:"#92FFFF"}})," Bridge"]})}),Object(v.jsx)("a",{href:"#devices",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.b,{style:{color:"#764600"}})," Devices"]})}),Object(v.jsx)("a",{href:"#deconz",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.g,{style:{color:"#42A138"}})," Deconz"]})}),Object(v.jsx)("a",{href:"#hue",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.j,{style:{color:"#8400FF"}})," Hue Bridge"]})}),Object(v.jsx)("a",{href:"#MQTT",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.g,{style:{color:"#0084FF"}})," MQTT"]})}),Object(v.jsx)("a",{href:"#alarm",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.h,{style:{color:"#AE2D00"}})," Alarm"]})}),Object(v.jsx)("a",{href:"#settings",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.e,{style:{color:"#8B00FF"}})," Settings"]})}),Object(v.jsx)("a",{href:"/logout",children:Object(v.jsxs)("li",{children:[Object(v.jsx)(S.o,{style:{color:"#fff"}})," Logout"]})})]})})},I=s.a.memo(z),P=function(e){var t=e.API_KEY,n=Object(j.useMediaQuery)({query:"(max-width: 760px)"}),s=Object(c.useState)(!n),a=Object(i.a)(s,2),r=a[0],l=a[1];return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(E,{API_KEY:t,showSidebar:r,setShowSidebar:l}),Object(v.jsx)(I,{showSidebar:r}),Object(v.jsx)(N,{API_KEY:t})]})},w=(n(77),Object(v.jsx)("div",{className:"pt-3 text-center",children:Object(v.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})})),_=function(){var e=Object(c.useState)(),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){o.a.get("/get-key").then((function(e){"string"===typeof e.data&&32===e.data.length?(console.log("API_KEY from API: ".concat(e.data)),a(e.data)):console.log("Unable to fetch API_KEY!")})).catch((function(e){console.error(e)}))}),[]),Object(v.jsx)(s.a.Suspense,{fallback:w,children:Object(v.jsx)("div",{className:"flexContainer",children:Object(v.jsx)(P,{API_KEY:n})})})};r.a.render(Object(v.jsx)(s.a.StrictMode,{children:Object(v.jsx)(_,{})}),document.getElementById("root"))}},[[78,3,4]]]);
//# sourceMappingURL=main.c906f8d9.chunk.js.map