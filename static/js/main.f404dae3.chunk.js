(this["webpackJsonpmy-react"]=this["webpackJsonpmy-react"]||[]).push([[0],{261:function(e,t,c){},264:function(e,t,c){},270:function(e,t,c){},272:function(e,t,c){},273:function(e,t,c){},276:function(e,t,c){},278:function(e,t,c){},292:function(e,t){},294:function(e,t){},298:function(e,t){},299:function(e,t){},326:function(e,t){},328:function(e,t){},339:function(e,t){},341:function(e,t){},351:function(e,t){},353:function(e,t){},368:function(e,t){},402:function(e,t){},403:function(e,t){},473:function(e,t){},475:function(e,t){},480:function(e,t){},482:function(e,t){},489:function(e,t){},501:function(e,t){},504:function(e,t){},509:function(e,t){},583:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),a=c(47),i=c.n(a),l=c(107),r=c(14),j=c(587),o=c(588),b=c(244),d=(c(261),c.p,c(1));var h=c(38),x=c.n(h),O=c(146),u=c(20),m=c(591),p=c(592),f=c.p+"static/media/logo.d36c137e.png",v=(c(264),c(110)),w=new(c(253).a)({supportedChainIds:[1,3,4,5,42]});var g=function(){var e=Object(v.b)(),t=(e.active,e.account),c=(e.library,e.connector,e.activate),s=e.deactivate,a=Object(n.useState)(""),i=Object(u.a)(a,2),l=i[0],r=i[1];function o(){return(o=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,c(w);case 3:r(t),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))).apply(this,arguments)}function b(){return(b=Object(O.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{s(),r("")}catch(t){console.log(t)}case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(m.a,{className:"navbar-box",expand:"lg",children:Object(d.jsxs)(j.a,{fluid:!0,children:[Object(d.jsx)(m.a.Brand,{href:"#home",children:Object(d.jsx)("img",{className:"logo",src:f,alt:""})}),Object(d.jsx)(m.a.Toggle,{"aria-controls":"basic-navbar-nav",children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"30",height:"30",fill:"#fff",class:"bi bi-list",viewBox:"0 0 16 16",children:Object(d.jsx)("path",{"fill-rule":"evenodd",d:"M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"})})}),Object(d.jsxs)(m.a.Collapse,{id:"basic-navbar-nav",children:[Object(d.jsxs)(p.a,{className:"me-auto pt-4 pt-lg-0",children:[Object(d.jsx)(p.a.Link,{href:"/",style:{fontSize:"15px"},children:"Home"}),Object(d.jsx)(p.a.Link,{href:"/stack",style:{fontSize:"15px"},children:"Stake"}),Object(d.jsx)(p.a.Link,{href:"/sazero",style:{fontSize:"15px"},children:"Alpha"})]}),Object(d.jsx)(p.a,{className:"mt-1 mt-lg-0",children:l?Object(d.jsx)(p.a.Link,{className:"navbar-wallet-btn",onClick:function(){return b.apply(this,arguments)},style:{fontSize:"15px"},children:function(e){var t=e.length;return e.slice(0,5)+"...."+l.slice(t-4)}(t)}):Object(d.jsx)(p.a.Link,{className:"navbar-wallet-btn",onClick:function(){return o.apply(this,arguments)},style:{fontSize:"15px"},children:"Connect to a wallet"})})]})]})})})},k=c(2),y=c(593),N=(c(270),c(145));var A=function(){var e,t=Object(n.useState)(!0),c=Object(u.a)(t,2),s=c[0],a=c[1],i=Object(n.useState)(0),l=Object(u.a)(i,2),r=l[0],h=l[1],x=Object(n.useState)(0),O=Object(u.a)(x,2),m=O[0],p=O[1],f=Object(n.useState)({x:0,xmax:52}),v=Object(u.a)(f,2),w=v[0],g=v[1],A=1+1/52*w.x;return e=w.x<=2?80:80+110*(w.x-2)/50,Object(d.jsx)("div",{className:"wallet-box",children:Object(d.jsx)(j.a,{children:Object(d.jsx)(o.a,{className:"justify-content-center",children:Object(d.jsx)(b.a,{lg:"10",children:Object(d.jsx)(o.a,{className:"align-items-center",children:Object(d.jsxs)(b.a,{lg:12,className:"order-2 order-lg-1 mt-5 mt-lg-0",children:[Object(d.jsxs)("div",{className:"wallet-content",children:[Object(d.jsx)("div",{className:"wallet-tab",children:Object(d.jsxs)("ul",{className:"d-flex",children:[Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){a(!1)},className:s?"btn w-100 active":"btn w-100",children:"Flexible"})}),Object(d.jsx)("li",{children:Object(d.jsx)("button",{onClick:function(){a(!0)},className:"btn w-100",children:"Locked"})})]})}),s?Object(d.jsxs)("div",{className:"locked-content pt-4",children:[Object(d.jsxs)("ul",{className:"d-flex align-align-items-center justify-content-between",children:[Object(d.jsxs)("li",{children:["Lock for: ",Object(d.jsxs)("b",{id:"lock",children:[w.x," weeks"]})]}),Object(d.jsxs)("li",{children:["Weight: ",Object(d.jsx)("b",{children:A.toFixed(2)})]})]}),Object(d.jsx)("div",{children:Object(d.jsx)(N.a,{className:"my-4",id:"sliders",axis:"x",x:w.x,onChange:function(e){var t=e.x;return g((function(e){return Object(k.a)(Object(k.a)({},e),{},{x:t})}))},step:"1",xmax:52,styles:{track:{backgroundColor:"#696969"},active:{backgroundColor:"#28272D"},thumb:{width:20,height:20},disabled:{opacity:.5}}})}),Object(d.jsxs)("ul",{className:"d-flex align-align-items-center justify-content-between",children:[Object(d.jsx)("li",{children:"Amount"}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{onClick:window.bal,children:"Balance:"})," ",Object(d.jsx)("span",{id:"flexiblebal",children:"0.0"})]})]}),Object(d.jsx)(y.a,{className:"my-4",children:Object(d.jsx)(y.a.Control,{onChange:function(e){h(e.target.value)},id:"flex_amount",type:"number",min:"0",value:r,placeholder:"Enter amount to stake",required:!0})}),Object(d.jsxs)("p",{children:["Est. APR: ",Object(d.jsxs)("span",{children:[e,"%"]})]}),Object(d.jsx)("div",{className:"flexible-bottom-content text-center mt-4",children:Object(d.jsx)("p",{children:"Be aware that there are always risks associated with staking contracts.You assume all responsibility."})}),Object(d.jsx)("button",{className:"btn w-100 mt-5",id:"approve",onClick:window.approve,children:"Approve"}),Object(d.jsx)("button",{className:"btn w-100 mt-5",onClick:window.claim,id:"rewrds",style:{display:"none"},children:"Claim Rewards"})]}):Object(d.jsxs)("div",{className:"flexible-content pt-4",children:[Object(d.jsxs)("ul",{className:"d-flex align-align-items-center justify-content-between",children:[Object(d.jsxs)("li",{style:{display:"none"},children:["Lock for: ",Object(d.jsx)("b",{id:"lock",children:" 0 weeks "})]}),Object(d.jsx)("li",{children:"Amount"}),Object(d.jsxs)("li",{children:[Object(d.jsx)("span",{onClick:window.bal,children:"Balance:"})," ",Object(d.jsx)("span",{id:"flexiblebal",children:"0.0"})]})]}),Object(d.jsx)(y.a,{className:"my-4",children:Object(d.jsx)(y.a.Control,{onChange:function(e){p(e.target.value)},min:"0",id:"flex_amount",type:"number",value:m,placeholder:"Enter amount to stake",required:!0})}),Object(d.jsxs)("p",{children:["Est. APR: ",Object(d.jsxs)("span",{children:[e," %"]})]}),Object(d.jsx)("div",{className:"flexible-bottom-content text-center mt-4",children:Object(d.jsx)("p",{children:"Be aware that there are always risks associated with staking contracts.You assume all responsibility."})}),Object(d.jsx)("button",{className:"btn w-100 mt-5",onClick:window.approve,id:"approve",children:"Approve"}),Object(d.jsx)("button",{className:"btn w-100 mt-5",onClick:window.claim,id:"rewrds",style:{display:"none"},children:"Claim Rewards"})]})]}),Object(d.jsx)("button",{className:"btn w-100 mt-5",id:"unstaketable",onClick:window.unstake,style:{color:"#000000",backgroundColor:"#696969",display:"none"},children:"View Stats"}),Object(d.jsx)(b.a,{className:"order-2 order-lg-1 mt-5",children:Object(d.jsxs)("div",{className:"wallet-content1",children:[Object(d.jsx)("h4",{style:{color:"white",fontSize:"23px"},children:"Your Stats"}),Object(d.jsx)("div",{id:"showtable",style:{overflow:"auto",height:"400px"},children:Object(d.jsxs)("table",{class:"table table-sm table-bordered mb-0 mt-4",id:"tabs",children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{style:{color:"white",textAlign:"center",fontSize:"15px"},children:"StakeTime"}),Object(d.jsx)("th",{style:{color:"white",textAlign:"center",fontSize:"15px"},children:"StakeAmt"}),Object(d.jsx)("th",{style:{color:"white",textAlign:"center",fontSize:"15px"},children:"UnLockTime"}),Object(d.jsx)("th",{style:{color:"white",textAlign:"center",fontSize:"15px"},children:"Action"})]})}),Object(d.jsx)("tbody",{id:"recived",style:{color:"white",textAlign:"center",fontSize:"14px"},children:Object(d.jsx)("tr",{children:Object(d.jsx)("td",{colspan:"4",align:"center",children:"No stake yet"})})})]})})]})})]})})})})})})},C=c(589),S=(c(272),c.p+"static/media/thicker-neon.31b0067d.png");var z=function(){return Object(d.jsx)("div",{className:"cover-box",children:Object(d.jsxs)(j.a,{children:[Object(d.jsxs)("div",{className:"cover-background",children:[Object(d.jsx)("img",{src:S,className:"round-neon"}),Object(d.jsx)("div",{className:"cover-header",children:"Be a DeFi Chef with Alpha."}),Object(d.jsx)("p",{className:"cover-description",children:"Swap, earn, stack yields, lend, borrow, leverage all on one decentralized, community driven platform. Welcome home to DeFi."}),Object(d.jsxs)("div",{className:"cover-button",children:[Object(d.jsx)(C.a,{href:"/stack",className:"colored-button",children:"Enter App"}),Object(d.jsx)(C.a,{className:"learn-button",children:"Learn More"})]})]}),Object(d.jsx)("div",{className:"cover-information-boxes",children:Object(d.jsxs)(o.a,{children:[Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{className:"round-box",children:[Object(d.jsx)("h2",{children:"$6.70"}),Object(d.jsx)("p",{children:"$Alpha Price"})]})}),Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{className:"round-box",children:[Object(d.jsx)("h2",{children:"$6.70"}),Object(d.jsx)("p",{children:"$Alpha Price"})]})}),Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{className:"round-box",children:[Object(d.jsx)("h2",{children:"$6.70"}),Object(d.jsx)("p",{children:"$Alpha Price"})]})}),Object(d.jsx)(b.a,{children:Object(d.jsxs)("div",{className:"round-box",children:[Object(d.jsx)("h2",{children:"$6.70"}),Object(d.jsx)("p",{children:"$Alpha Price"})]})})]})})]})})},L=(c(273),c(252));var F=function(){var e=s.a.createRef();return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"background-box",children:[Object(d.jsx)(g,{}),Object(d.jsx)(j.a,{children:Object(d.jsxs)("div",{className:"contact-main",children:[Object(d.jsxs)("div",{className:"contact-header",children:[Object(d.jsx)("h2",{children:"ALPHA"}),Object(d.jsx)("p",{children:"public sale"})]}),Object(d.jsxs)("div",{className:"contact-wrap",children:[Object(d.jsx)("h2",{children:"The public sale is now closed"}),Object(d.jsxs)("p",{children:["The public sale is now closed. Any outstanding support tickets are being handled by the team. If you're looking for swift resolution, please reach out to us at ",Object(d.jsx)("a",{href:"#",className:"link-button",children:"Alpha Telegram."})]})]}),Object(d.jsx)("div",{className:"input-main-box",children:Object(d.jsx)(y.a.Control,{type:"email",placeholder:"Your email"})}),Object(d.jsx)("div",{className:"checkbox-wrap",children:Object(d.jsxs)(y.a.Group,{className:"mb-3",controlId:"formBasicCheckbox",children:[Object(d.jsx)(y.a.Check,{type:"checkbox",label:"I certify that I am 18 years old or older, and I agree to the"}),Object(d.jsxs)(y.a.Text,{className:"text-muted",children:[Object(d.jsx)("a",{href:"#",children:"User Agreement"})," and ",Object(d.jsx)("a",{href:"#",children:"Privacy Policy"})]})]})}),Object(d.jsx)("div",{className:"recaptcha-box",children:Object(d.jsx)(L.a,{ref:e,sitekey:"6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"})}),Object(d.jsx)("div",{className:"button-wrap",children:Object(d.jsx)(C.a,{children:"Log in"})})]})})]})})};function I(){return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"background-box",children:Object(d.jsx)(g,{})}),Object(d.jsx)(A,{})]})}c(276),c.p;var P=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"background-box",children:[Object(d.jsx)(g,{}),Object(d.jsx)(z,{})]})})};function B(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.a,{children:Object(d.jsxs)(r.c,{children:[Object(d.jsx)(r.a,{path:"/",element:Object(d.jsx)(P,{})}),Object(d.jsx)(r.a,{path:"/stack",element:Object(d.jsx)(I,{})}),Object(d.jsx)(r.a,{path:"/sazero",element:Object(d.jsx)(F,{})})]})})})}c(277),c(278);var T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,594)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))},$=c(249),E=c.n($);i.a.render(Object(d.jsxs)(s.a.StrictMode,{children:[Object(d.jsx)(v.a,{getLibrary:function(e){return new E.a(e)},children:Object(d.jsx)(B,{})}),","]}),document.getElementById("root")),T()}},[[583,1,2]]]);
//# sourceMappingURL=main.f404dae3.chunk.js.map