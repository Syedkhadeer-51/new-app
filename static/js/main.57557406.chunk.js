(this["webpackJsonpnew-app"]=this["webpackJsonpnew-app"]||[]).push([[0],{10:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),s=a(4),r=a.n(s),l=(a(9),a(2)),o=(a(10),a(0));function i(e){return Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("a",{className:"navbar-brand",href:"#",children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(o.jsx)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)("a",{className:"nav-link active","aria-current":"page",href:"#",children:"Home"})})}),Object(o.jsxs)("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light"),children:[Object(o.jsx)("input",{className:"form-check-input",type:"checkbox",onClick:e.toggleMode,role:"switch",id:"flexSwitchCheckDefault"}),Object(o.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark mode"})]})]})]})})}function b(e){var t=Object(c.useState)(""),a=Object(l.a)(t,2),n=a[0],s=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:e.heading}),Object(o.jsx)("div",{className:"mb-3",children:Object(o.jsx)("textarea",{className:"form-control",id:"myBox",rows:"8",value:n,onChange:function(e){s(e.target.value)},style:{backgroundColor:"dark"===e.mode?"grey":"light",color:"dark"===e.mode?"white":"black"}})}),Object(o.jsx)("button",{className:"btn btn-primary mx-2",onClick:function(){var e=n.toUpperCase();s(e)},children:"convert to Uppercase"}),Object(o.jsx)("button",{className:"btn btn-success mx-2",onClick:function(){var e=n.toLowerCase();s(e)},children:"convert to Lowercasecase"}),Object(o.jsx)("button",{className:"btn btn-secondary mx-2",onClick:function(){s(" ")},children:"Clear text"})]}),Object(o.jsxs)("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"},children:[Object(o.jsx)("h1",{children:"Your text summary has"}),Object(o.jsxs)("p",{children:[n.split(" ").length," words and ",n.length," characters"]}),Object(o.jsxs)("p",{children:[.008*n.split(" ").length,"Minutes are taken to read"]}),Object(o.jsx)("h2",{children:"preview"}),Object(o.jsx)("p",{children:n.length>0?n:"Enter text to preview"})]})]})}function d(e){return Object(o.jsxs)("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert",children:[Object(o.jsx)("strong",{children:e.alert.type})," ",e.alert.message]})}var j=function(){var e=Object(c.useState)("light"),t=Object(l.a)(e,2),a=t[0],n=t[1],s=Object(c.useState)("null"),r=Object(l.a)(s,2),j=r[0],h=r[1],m=function(e,t){h({message:e,type:t}),setTimeout((function(){h("null")}),1500)};return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(i,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(n("dark"),document.body.style.backgroundColor="grey",m("Dark mode has been enabled","success")):(n("light"),document.body.style.backgroundColor="white",m("light mode has been enabled","success"))}}),Object(o.jsx)(d,{alert:j}),Object(o.jsx)("div",{className:"container my-3",children:Object(o.jsx)(b,{heading:"Enter the text to analyze below",mode:a})})]})},h=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;a(e),c(e),n(e),s(e),r(e)}))};r.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),h()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.57557406.chunk.js.map