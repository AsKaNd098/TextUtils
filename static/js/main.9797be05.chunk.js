(this.webpackJsonptextutils=this.webpackJsonptextutils||[]).push([[0],{22:function(e,t,a){},23:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),l=a(15),o=a.n(l),n=(a(22),a(10)),i=(a(23),a(8)),r=a(0);function d(e){return Object(r.jsx)("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode),children:Object(r.jsxs)("div",{className:"container-fluid",children:[Object(r.jsx)(i.b,{className:"navbar-brand",to:"/",children:e.title}),Object(r.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(r.jsx)("span",{className:"navbar-toggler-icon"})}),Object(r.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent",children:[Object(r.jsxs)("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/",children:"Home"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)(i.b,{className:"nav-link active","aria-current":"page",to:"/about",children:"About"})})]}),Object(r.jsxs)("form",{className:"d-flex",children:[Object(r.jsx)("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),Object(r.jsx)("button",{className:"btn btn-outline-success",type:"submit",children:"Search"})]}),Object(r.jsxs)("div",{className:"form-check form-switch mx-3 my-3 text-".concat("light"===e.mode?"dark":"light"),children:[Object(r.jsx)("input",{onClick:e.toggleMode,className:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault"}),Object(r.jsx)("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})]})})}function h(e){var t=Object(c.useState)(""),a=Object(n.a)(t,2),s=a[0],l=a[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h3",{className:"text-center",children:e.heading}),Object(r.jsx)("div",{className:"mb-3",children:Object(r.jsx)("textarea",{className:"form-control",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},id:"MyBox",onChange:function(e){l(e.target.value)},value:s,rows:"10",children:"setText"})}),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toUpperCase();l(t),e.showalert("Converted To UpperCase","SUCCESS")},children:"UpperCase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase();l(t),e.showalert("Converted To LowerCase","SUCCESS")},children:"LowerCase"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.toLowerCase().replace(/\b\w/g,(function(e){return e.toUpperCase()}));l(t),e.showalert("Converted To Capatalize","SUCCESS")},children:"Capatalize"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){l(""),e.showalert("Text Cleared","SUCCESS")},children:"Clear"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){navigator.clipboard.writeText(s),e.showalert("Text Copied","SUCCESS")},children:"Copy to Clipboard"}),Object(r.jsx)("button",{disabled:0===s.length,className:"btn btn-primary mx-1 my-1",onClick:function(){var t=s.split(/[ ]+/);l(t.join(" ")),e.showalert("Extra Space removed","SUCCESS")},children:"Remove Extra Space"})]})]}),Object(r.jsxs)("div",{className:"container my-3",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h3",{children:"Text Analysis"}),Object(r.jsxs)("h5",{children:["Words: ",s.split(/\s+/).filter((function(e){return 0!==e.length})).length]}),Object(r.jsxs)("h5",{children:["Characters: ",s.length]}),Object(r.jsxs)("h5",{children:["Reading Time (average speed): ",.008*s.split(" ").length," Minutes"]})]}),Object(r.jsxs)("div",{className:"container",style:{color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h3",{children:"Preview Your Text"}),Object(r.jsx)("p",{children:s.length>0?s:"Enter Something to preview it here on Text Utils"})]})]})}d.defaultProps={title:"Enter the title",AboutText:"Enter About Text"};var b=function(e){return e.alert&&Object(r.jsxs)("div",{className:"alert alert-success alert-dismissible fade show",role:"alert",children:[Object(r.jsx)("strong",{children:e.alert.type})," ",e.alert.msg]})};function m(e){return Object(r.jsxs)("div",{className:"container",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("h2",{className:"my-3",children:"About us"}),Object(r.jsxs)("div",{className:"accordion",id:"accordionExample",children:[Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingOne",children:Object(r.jsx)("button",{className:"accordion-button",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:"About Text Utils App"})}),Object(r.jsx)("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("strong",{children:"Text utils app is a Text Manipulating app"})," Text utils app is a app that can change your given text into upeercase, lowercase, capatalize, remove extra sapace and you can also copy your finaql text with just a click, it can also cound number of words and character used in your text and can also cound average time to read your text. This website has both the mode Dark mode and light mode you can easily switch as your requirement."]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingTwo",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:"About The developer"})}),Object(r.jsx)("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("strong",{children:"A.S. Developers | Askand Singh"})," Askand singh is the developer of this website, Askand Was a student of class 7 in City Montessori school Lucknow Mahanagar"]})})]}),Object(r.jsxs)("div",{className:"accordion-item",children:[Object(r.jsx)("h2",{className:"accordion-header",id:"headingThree",children:Object(r.jsx)("button",{className:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:"Lorem Ipsum"})}),Object(r.jsx)("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample",children:Object(r.jsxs)("div",{className:"accordion-body",style:{backgroundColor:"light"===e.mode?"white":"#042743",color:"light"===e.mode?"black":"white"},children:[Object(r.jsx)("strong",{children:"Loooorem Ipppppsum "})," Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."]})})]})]})]})}var j=a(2);var u=function(){var e=Object(c.useState)("light"),t=Object(n.a)(e,2),a=t[0],s=t[1],l=Object(c.useState)(null),o=Object(n.a)(l,2),u=o[0],p=o[1],x=function(e,t){p({msg:e,type:t}),setTimeout((function(){p(null)}),1500)};return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(i.a,{children:[Object(r.jsx)(d,{title:"Text Utils",AboutText:"About US!",mode:a,toggleMode:function(){"light"===a?(s("dark"),document.body.style.backgroundColor="#042743",x("Dark Mode is Enabled","SUCCESS")):(s("light"),document.body.style.backgroundColor="white",x("Light Mode is Enabled","SUCCESS"))}}),Object(r.jsx)(b,{alert:u}),Object(r.jsx)("div",{className:"container my-3  ",children:Object(r.jsxs)(j.c,{children:[Object(r.jsx)(j.a,{path:"/about",children:Object(r.jsx)(m,{mode:a})}),Object(r.jsx)(j.a,{path:"/",children:Object(r.jsx)(h,{showalert:x,heading:"Text Utils | Word Counter | Character counter | upercase | LowerCase | remove Extra space",mode:a})})]})})]})})},p=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,31)).then((function(t){var a=t.getCLS,c=t.getFID,s=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),c(e),s(e),l(e),o(e)}))};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(u,{})}),document.getElementById("root")),p()}},[[30,1,2]]]);
//# sourceMappingURL=main.9797be05.chunk.js.map