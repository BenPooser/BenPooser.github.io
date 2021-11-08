(this["webpackJsonpbenpooser.github.io"]=this["webpackJsonpbenpooser.github.io"]||[]).push([[0],{22:function(e,t,s){},29:function(e,t,s){},30:function(e,t,s){},31:function(e,t,s){},32:function(e,t,s){},33:function(e,t,s){},34:function(e,t,s){},35:function(e,t,s){},36:function(e,t,s){},37:function(e,t,s){},39:function(e,t,s){"use strict";s.r(t);var i=s(1),n=s.n(i),c=s(8),a=s.n(c),r=s(3),l=(s(22),s(12)),o=s.n(l),j=s(13),d=s.n(j),b=s(10),h=s.n(b),m=s(0);function u(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"topbar "+(t&&"active"),children:Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsxs)("div",{className:"left",children:[Object(m.jsx)("a",{href:"#intro",className:"logo",children:Object(m.jsx)(h.a,{className:"icon"})}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(o.a,{className:"icon"}),Object(m.jsx)("span",{children:"+1 706 247 2866"})]}),Object(m.jsxs)("div",{className:"itemContainer",children:[Object(m.jsx)(d.a,{className:"icon"}),Object(m.jsx)("span",{children:"pooserben@gmail.com"})]})]}),Object(m.jsx)("div",{className:"right",children:Object(m.jsxs)("div",{className:"hamburger",onClick:function(){return s(!t)},children:[Object(m.jsx)("span",{className:"line1"}),Object(m.jsx)("span",{className:"line2"}),Object(m.jsx)("span",{className:"line3"})]})})]})})}s(29);var g=s(14);function O(){var e=Object(i.useRef)();return Object(i.useEffect)((function(){Object(g.a)(e.current,{showCursor:!0,backDelay:1500,typeSpeed:50,backSpeed:30,strings:["Software Engineer","Georgia Tech Graduate","Coding Enthusiast"]})}),[]),Object(m.jsxs)("div",{className:"intro",id:"intro",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:"assets/me_graduation.png",alt:""})})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsxs)("div",{className:"wrapper",children:[Object(m.jsx)("h2",{children:"Hi There, I'm"}),Object(m.jsx)("h1",{children:"Ben Pooser"}),Object(m.jsx)("h3",{children:Object(m.jsx)("span",{ref:e})})]}),Object(m.jsx)("a",{href:"#portfolio",children:Object(m.jsx)("img",{src:"assets/down.png",alt:""})})]})]})}s(30);function p(e){var t=e.id,s=e.title,i=e.active,n=e.setSelected;return Object(m.jsx)("li",{className:i?"portfolioList active":"portfolioList",onClick:function(){return n(t)},children:s})}s(31);var x=[{id:1,title:"Java",img:"./assets/java.jpeg"},{id:2,title:"Python",img:"./assets/python.jpeg"},{id:3,title:"C++",img:"./assets/cpp.png"},{id:4,title:"SQL",img:"./assets/sql.png"},{id:5,title:"JavaScript",img:"./assets/js.png"},{id:6,title:"Spring Boot",img:"./assets/springboot.png"}],f=[{id:1,title:"AWS",img:"./assets/aws.png"},{id:2,title:"Linux",img:"./assets/linux.jpeg"},{id:3,title:"Docker",img:"./assets/docker.png"},{id:4,title:"React",img:"./assets/react.png"},{id:5,title:"Bitbucket",img:"./assets/bitbucket.png"},{id:6,title:"TensorFlow",img:"./assets/tensorflow.png"}],v=[{id:1,title:"Git",img:"./assets/git.png"},{id:2,title:"Jenkins",img:"./assets/jenkins.png"},{id:3,title:"Agile/Scrum",img:"./assets/agile.png"},{id:4,title:"Zenhub",img:"./assets/zenhub.png"},{id:5,title:"Jira",img:"./assets/jira.png"}],N=[{id:1,title:"Machine Learning",img:"./assets/ml.png"},{id:2,title:"Database Design",img:"./assets/database.png"},{id:3,title:"Computer Networks",img:"./assets/networks.png"},{id:4,title:"Object-Oriented",img:"./assets/oop.png"},{id:5,title:"Datastructures",img:"./assets/datastructures.jpeg"},{id:6,title:"Algorithms",img:"./assets/algorithms.png"}];function k(){var e=Object(i.useState)("featured"),t=Object(r.a)(e,2),s=t[0],n=t[1],c=Object(i.useState)([]),a=Object(r.a)(c,2),l=a[0],o=a[1];return Object(i.useEffect)((function(){switch(s){case"featured":o(x);break;case"web":o(f);break;case"mobile":o(v);break;case"design":o(N);break;default:o(x)}}),[s]),Object(m.jsxs)("div",{className:"portfolio",id:"portfolio",children:[Object(m.jsx)("h1",{children:"Skills"}),Object(m.jsx)("ul",{children:[{id:"featured",title:"Programming"},{id:"web",title:"Tools & Software"},{id:"mobile",title:"Project Management"},{id:"design",title:"Coursework"}].map((function(e){return Object(m.jsx)(p,{title:e.title,active:s===e.id,setSelected:n,id:e.id})}))}),Object(m.jsx)("div",{className:"container",children:l.map((function(e){return Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("img",{src:e.img,alt:""}),Object(m.jsx)("h3",{children:e.title})]})}))})]})}s(32);var w=s(15),C=s.n(w),S=s(16),y=s.n(S);function P(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),s=t[0],n=t[1],c=[{id:"1",icon:"./assets/mobile.png",title:"Mobile Application",desc:"Created a mobile application as a team using React Native to develop on both iOS and Android. \nDesigned to prevent food waste by letting users store items in a virtual fridge. \nWon Runner-Up in the Convergence Innovation Competition Fall 2020",img:"./assets/foodsaver.png",link:"https://github.com/jkim3389/FoodSaver"},{id:"2",icon:"./assets/ml-icon.png",title:"Machine Learning Project",desc:"Implemented machine learning techniques to classify breast cancer through scanned images. Used classification techniques such as K-Nearest Neighbors, Neural Networks, Support Vector Machines",img:"./assets/ml_project.png",link:"https://patelkb99.github.io/cs4641-team36.github.io/"},{id:"3",icon:"./assets/networking-icon.png",title:"Networking Project",desc:"Created Python Client and Server script using multi-threading/TCP coding techniques on either sides. Handles multiple clients at a time, receiving and sending information synchronously to other clients",img:"./assets/networking.png",link:"https://github.com/benpooser/networking"}],a=function(e){n("left"===e?s>0?s-1:2:s<c.length-1?s+1:0)};return Object(m.jsxs)("div",{className:"works",id:"works",children:[Object(m.jsx)("h1",{children:"Projects"}),Object(m.jsx)("div",{className:"slider",style:{transform:"translateX(-".concat(100*s,"vw)")},children:c.map((function(e){return Object(m.jsx)("div",{className:"container",children:Object(m.jsxs)("div",{className:"item",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsxs)("div",{className:"leftContainer",children:[Object(m.jsx)("div",{className:"imgContainer",children:Object(m.jsx)("img",{src:e.icon,alt:""})}),Object(m.jsx)("h2",{children:e.title}),Object(m.jsx)("p",{children:e.desc}),Object(m.jsx)("span",{children:Object(m.jsx)("a",{href:e.link,children:"Project Link"})})]})}),Object(m.jsx)("div",{className:"right",children:Object(m.jsx)("img",{src:e.img,alt:""})})]})})}))}),Object(m.jsx)(C.a,{className:"arrow left",alt:"",onClick:function(){return a("left")}}),Object(m.jsx)(y.a,{className:"arrow right",alt:"",onClick:function(){return a()}})]})}s(33),s(34);function M(){return Object(m.jsxs)("div",{className:"experience",id:"experience",children:[Object(m.jsx)("h1",{children:"Experience"}),Object(m.jsxs)("div",{className:"timeline",children:[Object(m.jsx)("div",{className:"left"}),Object(m.jsx)("div",{className:"divide",children:"In progress"}),Object(m.jsx)("div",{className:"right"})]})]})}s(35);function E(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(m.jsxs)("div",{className:"contact",id:"contact",children:[Object(m.jsx)("div",{className:"left",children:Object(m.jsx)("img",{src:"assets/shake.svg",alt:""})}),Object(m.jsxs)("div",{className:"right",children:[Object(m.jsx)("h2",{children:"Contact."}),Object(m.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n(!0)},children:[Object(m.jsx)("input",{type:"text",placeholder:"Email"}),Object(m.jsx)("textarea",{placeholder:"Message"}),Object(m.jsx)("button",{type:"submit",children:"Send"}),s&&Object(m.jsx)("span",{children:"Thanks, I'll reply ASAP :)"})]})]})]})}s(36),s(37);function A(e){var t=e.menuOpen,s=e.setMenuOpen;return Object(m.jsx)("div",{className:"menu "+(t&&"active"),children:Object(m.jsxs)("ul",{children:[Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#intro",children:"Home"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#portfolio",children:"Portfolio"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#works",children:"Works"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#experience",children:"Experience"})}),Object(m.jsx)("li",{onClick:function(){return s(!1)},children:Object(m.jsx)("a",{href:"#contact",children:"Contact"})})]})})}var D=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),s=t[0],n=t[1];return Object(m.jsxs)("div",{className:"app",children:[Object(m.jsx)(u,{menuOpen:s,setMenuOpen:n}),Object(m.jsx)(A,{menuOpen:s,setMenuOpen:n}),Object(m.jsxs)("div",{className:"sections",children:[Object(m.jsx)(O,{}),Object(m.jsx)(k,{}),Object(m.jsx)(P,{}),Object(m.jsx)(M,{}),Object(m.jsx)(E,{})]})]})};a.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(D,{})}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.b34c47d0.chunk.js.map