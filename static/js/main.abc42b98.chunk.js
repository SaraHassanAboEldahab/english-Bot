(this["webpackJsonpenglish-bot"]=this["webpackJsonpenglish-bot"]||[]).push([[0],{80:function(n,e,t){},81:function(n,e,t){"use strict";t.r(e);var i,r,c,a,o,s,p,x,l,d,b,j,h,u,g,O,m=t(1),f=t.n(m),v=t(40),w=t.n(v),y=t(4),k=t(17),E=t(5),S=t.p+"static/media/english.9c170a25.png",T=t.p+"static/media/left-arrow.903af5d7.png",B=t(25),C=t(28),G=t.n(C),N=t(41),F=t(42),L=t.n(F),Y=t(0),z=f.a.createContext(),I=function(n){var e=n.children,t=Object(m.useState)({}),i=Object(k.a)(t,2),r=i[0],c=i[1],a=function(){var n=Object(N.a)(G.a.mark((function n(){var e,t;return G.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,L.a.get("https://english-bot-test.herokuapp.com/api/bot-flow");case 2:e=n.sent,t=e.data,c(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return Object(m.useEffect)((function(){a()}),[]),Object(Y.jsx)(z.Provider,{value:r,children:e})},J=z,M=t.p+"static/media/send.01c24b89.png",D=t(49),P=t.p+"static/media/bot-icon.cfbb308b.png",R=function(){return Object(Y.jsx)(U,{children:Object(Y.jsxs)(q,{children:[Object(Y.jsx)(H,{}),Object(Y.jsx)(H,{}),Object(Y.jsx)(H,{})]})})},U=E.a.div(i||(i=Object(y.a)(["\n  background-color: #717171;\n  padding: 15px 20px;\n  border-radius: 20px;\n  border-bottom-left-radius: 2px;\n  width: fit-content;\n  margin: 0px 0px 20px 20px;\n"]))),q=E.a.ul(r||(r=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  list-style: none;\n  height: 17px;\n  padding: 0px;\n  margin: 0px;\n"]))),A=Object(E.b)(c||(c=Object(y.a)(["\n 0% {\n    transform: translateY(0px);\n    background-color:white;\n  }\n  28% {\n    transform: translateY(-7px);\n    background-color:#d9d8d8;\n  }\n  44% {\n    transform: translateY(0px);\n    background-color:#bbbaba;\n  }\n"]))),H=E.a.li(a||(a=Object(y.a)(["\n  background-color: white;\n  border-radius: 50%;\n  height: 7px;\n  margin-right: 4px;\n  vertical-align: middle;\n  width: 7px;\n  &:nth-child(1) {\n    animation-delay: 200ms;\n  }\n  &:nth-child(2) {\n    animation-delay: 300ms;\n  }\n  &:nth-child(3) {\n    animation-delay: 400ms;\n  }\n  animation: "," 1.8s infinite ease-in-out;\n"])),A),K=Object(D.a)("wss://english-bot-test.herokuapp.com/"),Q=function(){var n=Object(m.useContext)(J).message,e=Object(m.useState)([]),t=Object(k.a)(e,2),i=t[0],r=t[1],c=Object(m.useState)({text:""}),a=Object(k.a)(c,2),o=a[0],s=a[1],p=Object(m.useState)(!0),x=Object(k.a)(p,2),l=x[0],d=x[1];Object(m.useEffect)((function(){0===i.length&&setTimeout((function(){r([{from:"English BOT",text:"\ud83d\udc4b\ud83c\udffb\ud83d\udc4b\ud83c\udffb"},{from:"English BOT",text:null===n||void 0===n?void 0:n.text}]),d(!1)}),2e3),K.on("checkGrammerResult",(function(n){var e=n.message,t=n.result,c=t.result,a=t.corrections;if(console.log("<<<<",e),console.log("//////",t),0===(null===a||void 0===a?void 0:a.length)||e.toLowerCase().replace(/\ /g,"")===(null===c||void 0===c?void 0:c.toLocaleLowerCase().replace(/\ /g,"")))return d(!1),void r([].concat(Object(B.a)(i),[{from:"English BOT",text:"u r right \u2705 "}]));d(!1),r([].concat(Object(B.a)(i),[{from:"English BOT",text:Object(Y.jsx)($,{children:Object(Y.jsxs)("div",{children:["you are too close , the correct answer is",Object(Y.jsx)("h4",{children:c})]})})}]))}))}),[i]);return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(W,{children:i.map((function(n,e){var t=n.from,i=n.text;return Object(Y.jsx)(Y.Fragment,{children:"English BOT"===t?Object(Y.jsxs)(X,{children:[Object(Y.jsx)("img",{src:P,alt:" "}),Object(Y.jsx)("span",{children:i})]},e):Object(Y.jsx)(Z,{children:Object(Y.jsx)("span",{children:i})},e)})}))}),l&&Object(Y.jsx)(R,{}),Object(Y.jsxs)(V,{onSubmit:function(n){return function(n){n.preventDefault(),r([].concat(Object(B.a)(i),[{from:"Me",text:o.text}])),d(!0),K.emit("checkGrammer",o),s({text:""})}(n)},children:[Object(Y.jsx)("input",{value:o.text,onChange:function(n){return s({text:n.target.value})},type:"text",placeholder:"send a message..."}),Object(Y.jsx)("button",{type:"submit",children:Object(Y.jsx)("img",{src:M,alt:""})})]})]})},V=E.a.form(o||(o=Object(y.a)(["\n  display: flex;\n  width: 100%;\n  border-top: 1px solid rgb(230, 230, 230);\n  input {\n    border: none;\n    height: 40px;\n    width: 80%;\n    padding: 10px 20px;\n    outline: 0;\n  }\n  button {\n    border: none;\n    background-color: white;\n    width: 18%;\n    display: flex;\n    justify-content: end;\n    align-items: center;\n    img {\n      width: 32px;\n      height: 32px;\n    }\n  }\n"]))),W=E.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  max-height: 400px;\n  min-height: 400px;\n  background: white;\n  overflow-y: auto;\n  padding: 15px 20px;\n  span {\n    width: fit-content;\n    height: fit-content;\n    border-top-left-radius: 10px;\n    border-top-right-radius: 10px;\n    border-bottom-right-radius: 10px;\n    margin-bottom: 10px;\n  }\n"]))),X=E.a.div(p||(p=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  span {\n    background-color: #717171;\n    color: white;\n    padding: 10px;\n  }\n  img {\n    width: 40px;\n    height: 40px;\n    margin-right: 10px;\n  }\n"]))),Z=E.a.div(x||(x=Object(y.a)(["\n  margin-left: auto;\n  span {\n    display: block;\n    background-color: #0073a5;\n    color: white;\n    margin-left: 10px;\n    padding: 10px;\n  }\n"]))),$=E.a.div(l||(l=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  h4 {\n    display: inline-block;\n    color: #74eaf4;\n    margin: 0px 0px 0px 10px;\n  }\n"]))),_=function(){var n=Object(m.useState)(!1),e=Object(k.a)(n,2),t=e[0],i=e[1];return Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(rn,{children:Object(Y.jsxs)(nn,{children:[t&&Object(Y.jsx)(en,{onClick:function(){return i(!1)},src:T,alt:""}),Object(Y.jsxs)(cn,{children:[Object(Y.jsx)(tn,{src:S,alt:""}),Object(Y.jsx)("span",{children:" English Bot "})]}),Object(Y.jsx)("p",{children:"I can help you to improve your english."})]})}),Object(Y.jsx)(nn,{children:Object(Y.jsxs)(an,{children:[!t&&Object(Y.jsxs)(on,{children:[Object(Y.jsx)("h3",{children:"Get Started"}),Object(Y.jsxs)("div",{children:[Object(Y.jsx)("span",{className:"replyNote",children:"My usual reply time"}),Object(Y.jsx)("br",{}),Object(Y.jsx)("span",{className:"replyTome",children:"\ud83d\udd53 Under 1 min"})]}),Object(Y.jsx)("button",{onClick:function(){return i(!0)},children:"Get Started"})]}),t&&Object(Y.jsx)(Q,{})]})})]})},nn=E.a.div(d||(d=Object(y.a)(["\n  padding: 0px 25px;\n"]))),en=E.a.img(b||(b=Object(y.a)(["\n  width: 20px;\n  height: 20px;\n  margin: 0px 10px 20px 0px;\n  cursor: pointer;\n"]))),tn=E.a.img(j||(j=Object(y.a)(["\n  width: 50px;\n  height: 50px;\n  margin-right: 10px;\n"]))),rn=E.a.div(h||(h=Object(y.a)(["\n  color: white;\n  background-color: #14243d;\n  padding: 40px 20px 100px 20px;\n  p {\n    font-size: 20px;\n  }\n"]))),cn=E.a.h1(u||(u=Object(y.a)(["\n  margin: 10px 0px 0px 0px;\n  font-weight: 500;\n  display: flex;\n  align-items: center;\n"]))),an=E.a.div(g||(g=Object(y.a)(["\n  margin: -70px 0px 0px 0px;\n  background-color: white;\n  border-radius: 5px;\n  box-shadow: rgb(0 0 0 / 10%) 0px 4px 15px 0px,\n    rgb(0 0 0 / 10%) 0px 1px 2px 0px, rgb(32 43 57 / 50%) 0px -2px 0px 0px;\n  display: flex;\n  flex-direction: column;\n"]))),on=E.a.div(O||(O=Object(y.a)(["\n  padding: 15px 20px;\n  .replyNote {\n    color: gray;\n    margin: 0px 0px 5px 0px;\n  }\n  .replyTome {\n    font-weight: bold;\n  }\n  button {\n    border: none;\n    background-color: #763c1a;\n    color: white;\n    padding: 15px 20px;\n    border-radius: 30px;\n    font-weight: 600;\n    font-size: 16px;\n    cursor: pointer;\n    width: 200px;\n    margin: 30px 0px 40px 0px;\n    transition: background-color 0.1s ease-in;\n    &:hover {\n      background-color: #bc6a39;\n    }\n  }\n"]))),sn=function(){return Object(Y.jsx)(I,{children:Object(Y.jsx)(_,{})})};t(80);w.a.render(Object(Y.jsx)(sn,{}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.abc42b98.chunk.js.map