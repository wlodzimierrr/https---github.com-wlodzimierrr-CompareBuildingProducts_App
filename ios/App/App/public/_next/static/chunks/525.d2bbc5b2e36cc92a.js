(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[525],{6031:function(e){function s(e){return Promise.resolve().then(function(){var s=Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s})}s.keys=function(){return[]},s.resolve=s,s.id=6031,e.exports=s},6647:function(){},2659:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return z}});var t=r(3827),l=r(987),a=r(82),n=r(6622),i=r(4275),c=r(4090),o=r(2020),d=r(4518);d.We.person.fullName(),d.We.image.avatar(),d.We.person.fullName(),d.We.image.avatar(),d.We.person.fullName(),d.We.image.avatar(),d.We.person.fullName(),d.We.image.avatar(),d.We.image.urlPicsumPhotos({blur:4,grayscale:!0});let h=[{title:"New friend request",when:"6 hr"},{title:"Please change your password",when:"1 day"},{title:"You have a new message",when:"2 weeks"},{title:"Welcome to the app!",when:"1 month"}],x=[{name:"Groceries",id:"groceries",items:[{name:"Apples",done:!0},{name:"Bananas"},{name:"Milk"},{name:"Ice Cream"}]},{name:"Hardware Store",id:"hardware",items:[{name:"Circular Saw"},{name:"Tack Cloth"},{name:"Drywall"},{name:"Router"}]},{name:"Work",id:"work",items:[{name:"TPS Report"},{name:"Set up email"}]},{name:"Reminders",id:"reminders"}];var m=r(9303),j=r.n(m),u=r(6348);r.n(u)().config();let p="6VBZUV8IHL",f="71df4df2cdf50640883a0148f064aec8",g=j()(p,f).initIndex("main_index"),b=j()(p,f);var _=r(8422),w=r(9088);let v=async e=>{try{let{hits:s}=await g.search(e,{hitsPerPage:10});return s}catch(e){return console.error("Search failed:",e),[]}},N=async e=>{if(!e)return;let{setSimilarProducts:s}=y.getState();try{let r=(await b.search([{indexName:"main_index",query:"",params:{filters:"objectID:".concat(e)}}])).results[0].hits[0];if(!r){console.error("Product not found");return}let t=(0,_.default)({indexName:"main_index",searchClient:b}),l=document.createElement("div");return t.addWidgets([(0,w.Z)({container:l,objectIDs:[r.objectID],transformItems(e){let t=e.filter(e=>e.objectID!==r.objectID),l=[r,...t];return s(l),l}})]),t.start(),()=>{t.dispose()}}catch(e){console.log("Error fetching item:",e)}};var y=(0,o.Ue)((e,s)=>({searchQuery:"",safeAreaTop:0,safeAreaBottom:0,menuOpen:!1,notificationsOpen:!1,currentPage:null,homeItems:[],lists:x,notifications:h,settings:{enableNotifications:!0},similarProducts:[],setSimilarProducts:s=>{e({similarProducts:s})},setMenuOpen:s=>e({menuOpen:s}),setNotificationsOpen:s=>e({notificationsOpen:s}),setSettings:s=>e(e=>({settings:{...e.settings,...s}})),setDone:(r,t,l)=>{var a;let n=s().lists.find(e=>e.id===r);n&&(n.items=null!==(a=n.items)&&void 0!==a?a:[],n.items=n.items.map(e=>(e.name===t.name&&(e.done=l),e)),e({lists:s().lists.map(e=>e.id===r?n:e)}))},setSearchQuery:s=>{e({searchQuery:s})},fetchAndSetHomeItems:async()=>{let{searchQuery:r}=s();if(r)try{let s=await v(r);e({homeItems:s.map(e=>({product_id:e.product_id,image_url:e.image_url,product_name:e.product_name,product_description:e.product_description,price:e.price,page_url:e.page_url,shop_id:e.shop_id,category_name:e.category_name,subcategory_name:e.subcategory_name,rating_count:e.rating_count,rating:e.rating,category_id:e.category_id,subcategory_id:e.subcategory_id,objectID:e.objectID,features:e.features}))})}catch(e){console.error("Failed to fetch items:",e)}},setHomeItems:s=>e({homeItems:s})}));let I={Hammer:e=>(0,t.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:"lucide lucide-hammer",...e,children:[(0,t.jsx)("path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9"}),(0,t.jsx)("path",{d:"m18 15 4-4"}),(0,t.jsx)("path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"})]})},k=()=>(0,t.jsxs)("svg",{className:"absolute inset-0 -z-10 h-full w-full stroke-amber-600 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]","aria-hidden":"true",children:[(0,t.jsx)("defs",{children:(0,t.jsx)("pattern",{id:"0787a7c5-978c-4f66-83c7-11c213f99cb7",width:200,height:200,x:"50%",y:-1,patternUnits:"userSpaceOnUse",children:(0,t.jsx)("path",{d:"M.5 200V.5H200",fill:"none"})})}),(0,t.jsx)("rect",{width:"100%",height:"100%",strokeWidth:0,fill:"url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)"})]});var W=()=>{let e=(0,n.k6)(),{homeItems:s}=y(),{searchQuery:r,setSearchQuery:a,fetchAndSetHomeItems:i}=y(),[o,d]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{r&&i()},[r,i]),(0,t.jsxs)(l._i,{children:[(0,t.jsxs)(l.Gu,{children:[o&&(0,t.jsx)(l.sr,{children:(0,t.jsx)("h1",{className:"text-center text-amber-500",children:(0,t.jsxs)("div",{className:"flex flex-col items-center justify-center font-bold",children:[(0,t.jsx)(I.Hammer,{className:"inline-block"}),(0,t.jsx)("span",{children:"Compare Building Products"})]})})}),(0,t.jsx)(l.sr,{children:(0,t.jsxs)("div",{className:"flex mt-2",children:[(0,t.jsx)(l.Sm,{slot:"start",children:(0,t.jsx)(l.fG,{})}),(0,t.jsx)(l.VI,{className:"text-white",placeholder:"What are you looking for?",onIonChange:s=>{a(s.detail.value),e.push("/tabs/search")},onIonClear:()=>a("")})]})})]}),(0,t.jsx)(l.W2,{scrollEvents:!0,onIonScroll:e=>{d(e.detail.scrollTop<90)},fullscreen:!0,children:(0,t.jsx)(k,{})})]})};let C=e=>{let{list:s}=e;return(0,t.jsx)(l.Ie,{routerLink:"/tabs/lists/".concat(s.id),className:"list-entry",children:(0,t.jsx)(l.Q$,{children:s.name})})},S=()=>{let{lists:e}=y();return(0,t.jsx)(t.Fragment,{children:e.map((e,s)=>(0,t.jsx)(C,{list:e},s))})};var D=()=>(0,t.jsxs)(l._i,{children:[(0,t.jsx)(l.Gu,{translucent:!0,children:(0,t.jsx)(l.sr,{children:(0,t.jsx)(l.wd,{children:"Lists"})})}),(0,t.jsxs)(l.W2,{fullscreen:!0,children:[(0,t.jsx)(l.Gu,{collapse:"condense",children:(0,t.jsx)(l.sr,{children:(0,t.jsx)(l.wd,{size:"large",children:"Lists"})})}),(0,t.jsx)(l.q_,{children:(0,t.jsx)(S,{})})]})]});let A=e=>{let{list:s}=e;return(0,t.jsx)(l.q_,{children:((null==s?void 0:s.items)||[]).map((e,s)=>{var r;return(0,t.jsx)(Q,{item:{name:e.name,done:null!==(r=e.done)&&void 0!==r&&r}},s)})})},Q=e=>{let{item:s}=e,{setDone:r}=y();return(0,t.jsxs)(l.Ie,{onClick:()=>r(s.name,s,!s.done),children:[(0,t.jsx)(l.Q$,{children:s.name}),(0,t.jsx)(l.nz,{checked:s.done||!1,slot:"end"})]})};var P=()=>{let{lists:e}=y(),{listId:s}=(0,n.UO)(),r=e.find(e=>e.id===s);return(0,t.jsxs)(l._i,{children:[(0,t.jsx)(l.Gu,{children:(0,t.jsxs)(l.sr,{children:[(0,t.jsx)(l.Sm,{slot:"start",children:(0,t.jsx)(l.oU,{defaultHref:"/tabs/lists"})}),(0,t.jsx)(l.wd,{children:null==r?void 0:r.name})]})}),(0,t.jsx)(l.W2,{children:r&&(0,t.jsx)(A,{list:r})})]})},L=()=>{let{settings:e,setSettings:s}=y();return(0,t.jsxs)(l._i,{children:[(0,t.jsx)(l.Gu,{children:(0,t.jsx)(l.sr,{children:(0,t.jsx)(l.wd,{children:"Settings"})})}),(0,t.jsx)(l.W2,{children:(0,t.jsx)(l.q_,{children:(0,t.jsxs)(l.Ie,{children:[(0,t.jsx)(l.Q$,{children:"Enable Notifications"}),(0,t.jsx)(l.ho,{checked:e.enableNotifications,onIonChange:r=>{s({...e,enableNotifications:r.target.checked})}})]})})})]})},U=r(3167),E=r(1367),G=e=>{let{children:s,...r}=e;return(0,t.jsx)("div",{...r,className:function(){for(var e=arguments.length,s=Array(e),r=0;r<e;r++)s[r]=arguments[r];return(0,E.m6)((0,U.W)(s))}("max-w-xl",r.className),children:(0,t.jsx)("div",{className:"flex rounded dark:bg-black",children:s})})},$=e=>{let{rating:s,ratingCount:r}=e,l=Math.floor(s),a=s%1!=0;return(0,t.jsxs)("div",{className:"flex items-center",children:[Array(l).fill(0).map((e,s)=>(0,t.jsx)("svg",{className:"w-4 h-4 text-yellow-500",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M9.049 2.927C9.27 2.362 9.73 2 10.302 2c.572 0 1.032.362 1.253.927l1.908 4.79 5.193.8c.598.092 1.109.51 1.257 1.092.149.583-.062 1.194-.547 1.56l-3.825 3.07 1.084 5.14c.112.53-.105 1.079-.574 1.403-.47.324-1.1.356-1.609.086L10 17.347l-4.442 2.435c-.51.27-1.139.238-1.609-.086-.469-.324-.686-.873-.574-1.403l1.084-5.14-3.825-3.07c-.484-.366-.696-.977-.547-1.56.148-.582.659-1 .257-1.092l5.193-.8 1.908-4.79z"})},"filled-".concat(s))),a&&(0,t.jsxs)("div",{className:"relative",children:[(0,t.jsxs)("svg",{className:"w-4 h-4 text-yellow-500 absolute",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("defs",{children:(0,t.jsxs)("linearGradient",{id:"half-gradient",children:[(0,t.jsx)("stop",{offset:"50%",stopColor:"currentColor"}),(0,t.jsx)("stop",{offset:"50%",stopColor:"transparent"})]})}),(0,t.jsx)("path",{fill:"url(#half-gradient)",d:"M9.049 2.927C9.27 2.362 9.73 2 10.302 2c.572 0 1.032.362 1.253.927l1.908 4.79 5.193.8c.598.092 1.109.51 1.257 1.092.149.583-.062 1.194-.547 1.56l-3.825 3.07 1.084 5.14c.112.53-.105 1.079-.574 1.403-.47.324-1.1.356-1.609.086L10 17.347l-4.442 2.435c-.51.27-1.139.238-1.609-.086-.469-.324-.686-.873-.574-1.403l1.084-5.14-3.825-3.07c-.484-.366-.696-.977-.547-1.56.148-.582.659-1 .257-1.092l5.193-.8 1.908-4.79z"})]}),(0,t.jsx)("svg",{className:"w-4 h-4 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M9.049 2.927C9.27 2.362 9.73 2 10.302 2c.572 0 1.032.362 1.253.927l1.908 4.79 5.193.8c.598.092 1.109.51 1.257 1.092.149.583-.062 1.194-.547 1.56l-3.825 3.07 1.084 5.14c.112.53-.105 1.079-.574 1.403-.47.324-1.1.356-1.609.086L10 17.347l-4.442 2.435c-.51.27-1.139.238-1.609-.086-.469-.324-.686-.873-.574-1.403l1.084-5.14-3.825-3.07c-.484-.366-.696-.977-.547-1.56.148-.582.659-1 .257-1.092l5.193-.8 1.908-4.79z"})})]}),Array(5-l-(a?1:0)).fill(0).map((e,s)=>(0,t.jsx)("svg",{className:"w-4 h-4 text-gray-300",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M9.049 2.927C9.27 2.362 9.73 2 10.302 2c.572 0 1.032.362 1.253.927l1.908 4.79 5.193.8c.598.092 1.109.51 1.257 1.092.149.583-.062 1.194-.547 1.56l-3.825 3.07 1.084 5.14c.112.53-.105 1.079-.574 1.403-.47.324-1.1.356-1.609.086L10 17.347l-4.442 2.435c-.51.27-1.139.238-1.609-.086-.469-.324-.686-.873-.574-1.403l1.084-5.14-3.825-3.07c-.484-.366-.696-.977-.547-1.56.148-.582.659-1 .257-1.092l5.193-.8 1.908-4.79z"})},"empty-".concat(s))),(0,t.jsxs)("p",{className:"prose prose-sm text-gray-500 mx-2",children:[s," ",(0,t.jsxs)("span",{className:"mx-1",children:["(",r,")"]})]})]})};let B={1:"B&Q",2:"Tradepoint",3:"Screwfix",4:"Wickes"};var M=e=>{let{open:s,onDidDismiss:r,product:a}=e,{similarProducts:n}=y();return(0,c.useEffect)(()=>{s&&a.objectID&&N(a.objectID)},[s,a.objectID,N]),(0,t.jsxs)(l.ki,{isOpen:s,onDidDismiss:r,children:[(0,t.jsx)(l.Gu,{children:(0,t.jsxs)(l.sr,{children:[(0,t.jsx)(l.wd,{className:"text-sm",children:a.product_name}),(0,t.jsx)(l.YG,{slot:"end",fill:"clear",color:"danger",onClick:r,children:(0,t.jsx)(l.gu,{icon:i.xvD})})]})}),(0,t.jsxs)(l.W2,{fullscreen:!0,children:[(0,t.jsx)(l.Ie,{lines:"none",children:(0,t.jsx)(l.Q$,{children:(0,t.jsx)("img",{className:"rounded-xl",src:a.image_url,alt:a.product_name})})}),(0,t.jsxs)(l.q_,{children:[(0,t.jsx)(l.Ie,{lines:"none",children:(0,t.jsxs)(l.Q$,{children:[(0,t.jsx)("h1",{className:"border-b border-gray-800 pb-1",children:"Features:"}),(0,t.jsx)("ul",{className:"list-disc pl-5 text-sm  ",children:a.features.map((e,s)=>(0,t.jsx)("li",{children:e},s))})]})}),(0,t.jsx)(l.Ie,{lines:"none",children:(0,t.jsxs)(l.Q$,{children:[(0,t.jsx)("h1",{className:"border-b border-gray-800 pb-1",children:"Description:"}),(0,t.jsx)("div",{className:"mt-1 text-sm  ",children:a.product_description})]})}),(0,t.jsx)(l.Ie,{children:(0,t.jsx)(l.Q$,{children:(0,t.jsxs)(l.q_,{children:[(0,t.jsx)("h1",{className:"border-b border-gray-800 pb-1",children:"Products:"}),n.map(e=>(0,t.jsx)(l.Ie,{button:!0,onClick:()=>window.open(e.page_url,"_blank"),lines:"none",children:(0,t.jsx)(l.Q$,{className:"text-white",children:(0,t.jsxs)("div",{className:"flex items-stretch",children:[(0,t.jsx)("div",{className:"w-1/3 relative overflow-hidden ",children:(0,t.jsx)("img",{className:"object-cover w-full h-full rounded-md ",src:e.image_url,alt:e.product_name})}),(0,t.jsxs)("div",{className:"w-3/4 pl-4 space-y-1 flex flex-col justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"font-bold text-xs  uppercase",children:e.category_name}),(0,t.jsx)("h2",{className:"font-bold text-xs ",children:e.product_name}),(0,t.jsx)($,{rating:e.rating,ratingCount:e.rating_count})]}),(0,t.jsxs)("div",{className:"flex items-center justify-between mt-auto",children:[(0,t.jsxs)("span",{className:"font-bold text-lg ",children:["\xa3",Number(e.price).toFixed(2)]}),(0,t.jsx)("h2",{className:"font-bold text-xs ",children:B[e.shop_id]})]})]})]})})},e.objectID))]})})})]})]})]})};let O={1:"B&Q",2:"Tradepoint",3:"Screwfix",4:"Wickes"},q=e=>{let{product_id:s,image_url:r,product_name:a,price:n,page_url:i,shop_id:o,category_name:d,subcategory_name:h,rating_count:x,rating:m,category_id:j,subcategory_id:u,objectID:p,product_description:f,features:g}=e,[b,_]=(0,c.useState)(!1);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(l.q_,{children:[(0,t.jsx)(G,{className:"my-2",onClick:()=>_(!0),children:(0,t.jsxs)("div",{className:"flex items-stretch ",children:[(0,t.jsx)("div",{className:"w-1/3 h-40 relative overflow-hidden ",children:(0,t.jsx)("img",{className:"object-cover w-full h-full rounded-md ",src:r,alt:a})}),(0,t.jsxs)("div",{className:"w-3/4 pl-4 py-2 flex flex-col justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h4",{className:"font-bold text-xs uppercase",children:d}),(0,t.jsx)("h2",{className:"font-bold text-xs ",children:a}),(0,t.jsx)("h2",{className:"font-bold text-xs ",children:O[o]})]}),(0,t.jsx)("div",{className:"flex items-center mt-1",children:(0,t.jsx)($,{rating:m,ratingCount:x})}),(0,t.jsx)("div",{className:"flex items-center justify-between mt-auto",children:(0,t.jsxs)("span",{className:"font-bold text-lg ",children:["\xa3",Number(n).toFixed(2)]})})]})]})}),(0,t.jsx)("hr",{className:"border-t border-gray-300 dark:border-gray-700"})]}),(0,t.jsx)(M,{open:b,onDidDismiss:()=>_(!1),product:{product_id:s,image_url:r,product_name:a,price:n,page_url:i,shop_id:o,category_name:d,subcategory_name:h,rating_count:x,rating:m,category_id:j,subcategory_id:u,objectID:p,product_description:f,features:g}})]})};var H=()=>{let{homeItems:e}=y(),{searchQuery:s,setSearchQuery:r,fetchAndSetHomeItems:a}=y(),[n,i]=(0,c.useState)(!0);return(0,c.useEffect)(()=>{s&&a()},[s,a]),(0,t.jsxs)(l._i,{children:[(0,t.jsx)(l.Gu,{children:(0,t.jsx)(l.sr,{children:(0,t.jsxs)("div",{className:"flex mt-2",children:[(0,t.jsx)(l.Sm,{slot:"start",children:(0,t.jsx)(l.fG,{})}),(0,t.jsx)(l.VI,{className:"text-white",placeholder:"What are you looking for?",value:s,onIonChange:e=>r(e.detail.value),onIonClear:()=>r("")})]})})}),(0,t.jsxs)(l.W2,{scrollEvents:!0,onIonScroll:e=>{i(e.detail.scrollTop<90)},fullscreen:!0,children:[(0,t.jsx)(k,{}),e.map((e,s)=>(0,t.jsx)(q,{product_id:e.product_id,image_url:e.image_url,product_name:e.product_name,price:e.price,page_url:e.page_url,shop_id:e.shop_id,category_name:e.category_name,subcategory_name:e.subcategory_name,rating_count:e.rating_count,rating:e.rating,category_id:e.category_id,subcategory_id:e.subcategory_id,objectID:e.objectID,product_description:e.product_description,features:e.features},s))]})]})},T=()=>(0,t.jsxs)(l.UN,{children:[(0,t.jsxs)(l.jP,{children:[(0,t.jsx)(n.AW,{path:"/tabs/home",render:()=>(0,t.jsx)(W,{}),exact:!0}),(0,t.jsx)(n.AW,{path:"/tabs/search",render:()=>(0,t.jsx)(H,{}),exact:!0}),(0,t.jsx)(n.AW,{path:"/tabs/lists",render:()=>(0,t.jsx)(D,{}),exact:!0}),(0,t.jsx)(n.AW,{path:"/tabs/lists/:listId",render:()=>(0,t.jsx)(P,{}),exact:!0}),(0,t.jsx)(n.AW,{path:"/tabs/settings",render:()=>(0,t.jsx)(L,{}),exact:!0}),(0,t.jsx)(n.AW,{path:"/tabs",render:()=>(0,t.jsx)(n.l_,{to:"/tabs/home"}),exact:!0})]}),(0,t.jsxs)(l.yq,{slot:"bottom",children:[(0,t.jsxs)(l.ZU,{tab:"tab1",href:"/tabs/home",children:[(0,t.jsx)(l.gu,{icon:i.Kee}),(0,t.jsx)(l.Q$,{children:"Home"})]}),(0,t.jsxs)(l.ZU,{tab:"tab2",href:"/tabs/search",children:[(0,t.jsx)(l.gu,{icon:i.yC4}),(0,t.jsx)(l.Q$,{children:"Search"})]}),(0,t.jsxs)(l.ZU,{tab:"tab3",href:"/tabs/lists",children:[(0,t.jsx)(l.gu,{icon:i.pb}),(0,t.jsx)(l.Q$,{children:"Lists"})]}),(0,t.jsxs)(l.ZU,{tab:"tab4",href:"/tabs/settings",children:[(0,t.jsx)(l.gu,{icon:i.Mjo}),(0,t.jsx)(l.Q$,{children:"Settings"})]})]})]});(0,l.bg)({});var z=()=>(0,t.jsx)(l.dr,{children:(0,t.jsx)(a.tr,{children:(0,t.jsxs)(l.jP,{id:"main",children:[(0,t.jsx)(n.AW,{path:"/tabs",render:()=>(0,t.jsx)(T,{})}),(0,t.jsx)(n.AW,{path:"/",render:()=>(0,t.jsx)(n.l_,{to:"/tabs/home"}),exact:!0})]})})})}}]);