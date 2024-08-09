"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[968],{1994:function(e,t,n){let o,l,s,a;n.d(t,{AA:function(){return D},GH:function(){return e3},Iu:function(){return tD},K3:function(){return g},PM:function(){return B},TX:function(){return tp},Z5:function(){return p},h:function(){return T},iJ:function(){return F},mv:function(){return tf},wj:function(){return tk},xE:function(){return ek},yM:function(){return W}});var r,i=n(7284);let $=0,d=!1,m=!1,c=!1,h=!1,f=0,u=!1,p={isDev:!!i.m5.isDev,isBrowser:!0,isServer:!1,isTesting:!!i.m5.isTesting},g=e=>{let t=new URL(e,tu.$resourcesUrl$);return t.origin!==tc.location.origin?t.href:t.pathname},y=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!i.m5.profile||!performance.mark)return()=>{};{let n="st:".concat(e,":").concat(t,":").concat($++);return performance.mark(n),()=>performance.measure("[Stencil] ".concat(e,"() <").concat(t,">"),n)}},v=(e,t)=>i.m5.profile&&performance.mark?(0===performance.getEntriesByName(e,"mark").length&&performance.mark(e),()=>{0===performance.getEntriesByName(t,"measure").length&&performance.measure(t,e)}):()=>{},b="s-id",N="sty-id",w="c-id",S="http://www.w3.org/1999/xlink",x=["formAssociatedCallback","formResetCallback","formDisabledCallback","formStateRestoreCallback"],C={},R=e=>null!=e,L=e=>"object"==(e=typeof e)||"function"===e,T=function(e,t){for(var n=arguments.length,o=Array(n>2?n-2:0),l=2;l<n;l++)o[l-2]=arguments[l];let s=null,a=null,r=null,$=!1,d=!1,m=[],c=t=>{for(let n=0;n<t.length;n++)Array.isArray(s=t[n])?c(s):null!=s&&"boolean"!=typeof s&&(($="function"!=typeof e&&!L(s))?s=String(s):i.m5.isDev&&"function"!=typeof e&&void 0===s.$flags$&&ta("vNode passed as children has unexpected type.\nMake sure it's using the correct h() function.\nEmpty objects can also be the cause, look for JSX comments that became objects."),$&&d?m[m.length-1].$text$+=s:m.push($?k(null,s):s),d=$)};if(c(o),t&&(i.m5.isDev&&"input"===e&&z(t),i.m5.vdomKey&&t.key&&(a=t.key),i.m5.slotRelocation&&t.name&&(r=t.name),i.m5.vdomClass)){let e=t.className||t.class;e&&(t.class="object"!=typeof e?e:Object.keys(e).filter(t=>e[t]).join(" "))}if(i.m5.isDev&&m.some(A)&&ta("The <Host> must be the single root component. Make sure:\n- You are NOT using hostData() and <Host> in the same component.\n- <Host> is used once, and it's the single root component of the render() function."),i.m5.vdomFunctional&&"function"==typeof e)return e(null===t?{}:t,m,E);let h=k(e,null);return h.$attrs$=t,m.length>0&&(h.$children$=m),i.m5.vdomKey&&(h.$key$=a),i.m5.slotRelocation&&(h.$name$=r),h},k=(e,t)=>{let n={$flags$:0,$tag$:e,$text$:t,$elm$:null,$children$:null};return i.m5.vdomAttribute&&(n.$attrs$=null),i.m5.vdomKey&&(n.$key$=null),i.m5.slotRelocation&&(n.$name$=null),n},D={},A=e=>e&&e.$tag$===D,E={forEach:(e,t)=>e.map(_).forEach(t),map:(e,t)=>e.map(_).map(t).map(j)},_=e=>({vattrs:e.$attrs$,vchildren:e.$children$,vkey:e.$key$,vname:e.$name$,vtag:e.$tag$,vtext:e.$text$}),j=e=>{if("function"==typeof e.vtag){let t=Object.assign({},e.vattrs);return e.vkey&&(t.key=e.vkey),e.vname&&(t.name=e.vname),T(e.vtag,t,...e.vchildren||[])}let t=k(e.vtag,e.vtext);return t.$attrs$=e.vattrs,t.$children$=e.vchildren,t.$key$=e.vkey,t.$name$=e.vname,t},z=e=>{let t=Object.keys(e),n=t.indexOf("value");if(-1===n)return;let o=t.indexOf("type"),l=t.indexOf("min"),s=t.indexOf("max"),a=t.indexOf("step");(n<o||n<l||n<s||n<a)&&tr('The "value" prop of <input> should be set after "min", "max", "type" and "step"')},O=(e,t,n,o)=>{let l=y("hydrateClient",t),s=e.shadowRoot,a=[],r=i.m5.shadowDom&&s?[]:null,$=o.$vnode$=k(t,null);tu.$orgLocNodes$||P(th.body,tu.$orgLocNodes$=new Map),e[b]=n,e.removeAttribute(b),M($,a,[],r,e,e,n),a.map(e=>{let n=e.$hostId$+"."+e.$nodeId$,o=tu.$orgLocNodes$.get(n),l=e.$elm$;o&&tg&&""===o["s-en"]&&o.parentNode.insertBefore(l,o.nextSibling),!s&&(l["s-hn"]=t,o&&(l["s-ol"]=o,l["s-ol"]["s-nr"]=l)),tu.$orgLocNodes$.delete(n)}),i.m5.shadowDom&&s&&r.map(e=>{e&&s.appendChild(e)}),l()},M=(e,t,n,o,l,s,a)=>{let r,$,d,m;if(1===s.nodeType){for((r=s.getAttribute(w))&&(($=r.split("."))[0]===a||"0"===$[0])&&(d={$flags$:0,$hostId$:$[0],$nodeId$:$[1],$depth$:$[2],$index$:$[3],$tag$:s.tagName.toLowerCase(),$elm$:s,$attrs$:null,$children$:null,$key$:null,$name$:null,$text$:null},t.push(d),s.removeAttribute(w),e.$children$||(e.$children$=[]),e.$children$[d.$index$]=d,e=d,o&&"0"===d.$depth$&&(o[d.$index$]=d.$elm$)),m=s.childNodes.length-1;m>=0;m--)M(e,t,n,o,l,s.childNodes[m],a);if(s.shadowRoot)for(m=s.shadowRoot.childNodes.length-1;m>=0;m--)M(e,t,n,o,l,s.shadowRoot.childNodes[m],a)}else if(8===s.nodeType)(($=s.nodeValue.split("."))[1]===a||"0"===$[1])&&(r=$[0],d={$flags$:0,$hostId$:$[1],$nodeId$:$[2],$depth$:$[3],$index$:$[4],$elm$:s,$attrs$:null,$children$:null,$key$:null,$name$:null,$tag$:null,$text$:null},"t"===r?(d.$elm$=s.nextSibling,d.$elm$&&3===d.$elm$.nodeType&&(d.$text$=d.$elm$.textContent,t.push(d),s.remove(),e.$children$||(e.$children$=[]),e.$children$[d.$index$]=d,o&&"0"===d.$depth$&&(o[d.$index$]=d.$elm$))):d.$hostId$===a&&("s"===r?(d.$tag$="slot",$[5]?s["s-sn"]=d.$name$=$[5]:s["s-sn"]="",s["s-sr"]=!0,i.m5.shadowDom&&o&&(d.$elm$=th.createElement(d.$tag$),d.$name$&&d.$elm$.setAttribute("name",d.$name$),s.parentNode.insertBefore(d.$elm$,s),s.remove(),"0"===d.$depth$&&(o[d.$index$]=d.$elm$)),n.push(d),e.$children$||(e.$children$=[]),e.$children$[d.$index$]=d):"r"===r&&(i.m5.shadowDom&&o?s.remove():i.m5.slotRelocation&&(l["s-cr"]=s,s["s-cn"]=!0))));else if(e&&"style"===e.$tag$){let t=k(null,s.textContent);t.$elm$=s,t.$index$="0",e.$children$=[t]}},P=(e,t)=>{if(1===e.nodeType){let n=0;for(;n<e.childNodes.length;n++)P(e.childNodes[n],t);if(e.shadowRoot)for(n=0;n<e.shadowRoot.childNodes.length;n++)P(e.shadowRoot.childNodes[n],t)}else if(8===e.nodeType){let n=e.nodeValue.split(".");"o"===n[0]&&(t.set(n[1]+"."+n[2],e),e.nodeValue="",e["s-en"]=n[3])}},I=e=>tm.map(t=>t(e)).find(e=>!!e),B=e=>tm.push(e),F=e=>tt(e).$modeName$,H=(e,t)=>{if(null!=e&&!L(e)){if(i.m5.propBoolean&&4&t)return"false"!==e&&(""===e||!!e);if(i.m5.propNumber&&2&t)return parseFloat(e);if(i.m5.propString&&1&t)return String(e)}return e},U=e=>i.m5.lazyLoad?tt(e).$hostElement$:e,W=(e,t,n)=>{let o=U(e);return{emit:e=>(i.m5.isDev&&!o.isConnected&&tr('The "'.concat(t,'" event was emitted, but the dispatcher node is no longer connected to the dom.')),q(o,t,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:e}))}},q=(e,t,n)=>{let o=tu.ce(t,n);return e.dispatchEvent(o),o},K=new WeakMap,V=(e,t,n)=>{let o=td.get(e);tb&&n?"string"==typeof(o=o||new CSSStyleSheet)?o=t:o.replaceSync(t):o=t,td.set(e,o)},X=(e,t,n)=>{var o,l,s,a;let r=J(t,n),$=td.get(r);if(!i.m5.attachStyles)return r;if(e=11===e.nodeType?e:th,$){if("string"==typeof $){let n;e=e.head||e;let d=K.get(e);if(d||K.set(e,d=new Set),!d.has(r)){if(i.m5.hydrateClientSide&&e.host&&(n=e.querySelector("[".concat(N,'="').concat(r,'"]'))))n.innerHTML=$;else{(n=th.createElement("style")).innerHTML=$;let t=null!==(o=tu.$nonce$)&&void 0!==o?o:null!==(a=null===(s=null===(l=th.head)||void 0===l?void 0:l.querySelector('meta[name="csp-nonce"]'))||void 0===s?void 0:s.getAttribute("content"))&&void 0!==a?a:void 0;null!=t&&n.setAttribute("nonce",t),(i.m5.hydrateServerSide||i.m5.hotModuleReplacement)&&n.setAttribute(N,r),e.insertBefore(n,e.querySelector("link"))}4&t.$flags$&&(n.innerHTML+="slot-fb{display:contents}slot-fb[hidden]{display:none}"),d&&d.add(r)}}else i.m5.constructableCSS&&!e.adoptedStyleSheets.includes($)&&(e.adoptedStyleSheets=[...e.adoptedStyleSheets,$])}return r},Q=e=>{let t=e.$cmpMeta$,n=e.$hostElement$,o=t.$flags$,l=y("attachStyles",t.$tagName$),s=X(i.m5.shadowDom&&tg&&n.shadowRoot?n.shadowRoot:n.getRootNode(),t,e.$modeName$);(i.m5.shadowDom||i.m5.scoped)&&i.m5.cssAnnotations&&10&o&&(n["s-sc"]=s,n.classList.add(s+"-h"),i.m5.scoped&&2&o&&n.classList.add(s+"-s")),l()},J=(e,t)=>"sc-"+(i.m5.mode&&t&&32&e.$flags$?e.$tagName$+"-"+t:e.$tagName$),G=(e,t,n,o,l,s)=>{if(n!==o){let a=to(e,t),r=t.toLowerCase();if(i.m5.vdomClass&&"class"===t){let t=e.classList,l=Z(n),s=Z(o);t.remove(...l.filter(e=>e&&!s.includes(e))),t.add(...s.filter(e=>e&&!l.includes(e)))}else if(i.m5.vdomStyle&&"style"===t){if(i.m5.updatable)for(let t in n)o&&null!=o[t]||(!i.m5.hydrateServerSide&&t.includes("-")?e.style.removeProperty(t):e.style[t]="");for(let t in o)n&&o[t]===n[t]||(!i.m5.hydrateServerSide&&t.includes("-")?e.style.setProperty(t,o[t]):e.style[t]=o[t])}else if(i.m5.vdomKey&&"key"===t);else if(i.m5.vdomRef&&"ref"===t)o&&o(e);else if(!i.m5.vdomListener||(i.m5.lazyLoad?a:e.__lookupSetter__(t))||"o"!==t[0]||"n"!==t[1]){if(i.m5.vdomPropOrAttr){let $=L(o);if((a||$&&null!==o)&&!l)try{if(e.tagName.includes("-"))e[t]=o;else{let l=null==o?"":o;"list"===t?a=!1:(null==n||e[t]!=l)&&(e[t]=l)}}catch(e){}let d=!1;i.m5.vdomXlink&&r!==(r=r.replace(/^xlink\:?/,""))&&(t=r,d=!0),null==o||!1===o?(!1!==o||""===e.getAttribute(t))&&(i.m5.vdomXlink&&d?e.removeAttributeNS(S,t):e.removeAttribute(t)):(!a||4&s||l)&&!$&&(o=!0===o?"":o,i.m5.vdomXlink&&d?e.setAttributeNS(S,t,o):e.setAttribute(t,o))}}else if(t="-"===t[2]?t.slice(3):to(tc,r)?r.slice(2):r[2]+t.slice(3),n||o){let l=t.endsWith(ee);t=t.replace(et,""),n&&tu.rel(e,t,n,l),o&&tu.ael(e,t,o,l)}}},Y=/\s/,Z=e=>e?e.split(Y):[],ee="Capture",et=RegExp(ee+"$"),en=(e,t,n,o)=>{let l=11===t.$elm$.nodeType&&t.$elm$.host?t.$elm$.host:t.$elm$,s=e&&e.$attrs$||C,a=t.$attrs$||C;if(i.m5.updatable)for(o in s)o in a||G(l,o,s[o],void 0,n,t.$flags$);for(o in a)G(l,o,s[o],a[o],n,t.$flags$)},eo=(e,t,n,a)=>{let r,$,m;let f=t.$children$[n],u=0;if(i.m5.slotRelocation&&!d&&(c=!0,"slot"===f.$tag$&&(o&&a.classList.add(o+"-s"),f.$flags$|=f.$children$?2:1)),i.m5.isDev&&f.$elm$&&ta("The JSX ".concat(null!==f.$text$?'"'.concat(f.$text$,'" text'):'"'.concat(f.$tag$,'" element')," node should not be shared within the same renderer. The renderer caches element lookups in order to improve performance. However, a side effect from this is that the exact same JSX node should not be reused. For more information please see https://stenciljs.com/docs/templating-jsx#avoid-shared-jsx-nodes")),i.m5.vdomText&&null!==f.$text$)r=f.$elm$=th.createTextNode(f.$text$);else if(i.m5.slotRelocation&&1&f.$flags$)r=f.$elm$=i.m5.isDebug||i.m5.hydrateServerSide?ev(f):th.createTextNode("");else{if(i.m5.svg&&!h&&(h="svg"===f.$tag$),r=f.$elm$=i.m5.svg?th.createElementNS(h?"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",i.m5.slotRelocation&&2&f.$flags$?"slot-fb":f.$tag$):th.createElement(i.m5.slotRelocation&&2&f.$flags$?"slot-fb":f.$tag$),i.m5.svg&&h&&"foreignObject"===f.$tag$&&(h=!1),i.m5.vdomAttribute&&en(null,f,h),(i.m5.shadowDom||i.m5.scoped)&&R(o)&&r["s-si"]!==o&&r.classList.add(r["s-si"]=o),f.$children$)for(u=0;u<f.$children$.length;++u)($=eo(e,f,u,r))&&r.appendChild($);i.m5.svg&&("svg"===f.$tag$?h=!1:"foreignObject"===r.tagName&&(h=!0))}return r["s-hn"]=s,i.m5.slotRelocation&&3&f.$flags$&&(r["s-sr"]=!0,r["s-cr"]=l,r["s-sn"]=f.$name$||"",(m=e&&e.$children$&&e.$children$[n])&&m.$tag$===f.$tag$&&e.$elm$&&(i.m5.experimentalSlotFixes?el(e.$elm$):es(e.$elm$,!1))),r},el=e=>{tu.$flags$|=1;let t=e.closest(s.toLowerCase());if(null!=t){let n=Array.from(t.childNodes).find(e=>e["s-cr"]),o=Array.from(e.childNodes);for(let e of n?o.reverse():o)null!=e["s-sh"]&&(t.insertBefore(e,null!=n?n:null),e["s-sh"]=void 0,c=!0)}tu.$flags$&=-2},es=(e,t)=>{tu.$flags$|=1;let n=e.childNodes;for(let e=n.length-1;e>=0;e--){let o=n[e];o["s-hn"]!==s&&o["s-ol"]&&(em(o).insertBefore(o,ed(o)),o["s-ol"].remove(),o["s-ol"]=void 0,o["s-sh"]=void 0,c=!0),t&&es(o,t)}tu.$flags$&=-2},ea=(e,t,n,o,l,a)=>{let r,$=i.m5.slotRelocation&&e["s-cr"]&&e["s-cr"].parentNode||e;for(i.m5.shadowDom&&$.shadowRoot&&$.tagName===s&&($=$.shadowRoot);l<=a;++l)o[l]&&(r=eo(null,n,l,e))&&(o[l].$elm$=r,$.insertBefore(r,i.m5.slotRelocation?ed(t):t))},er=(e,t,n)=>{for(let o=t;o<=n;++o){let t=e[o];if(t){let e=t.$elm$;eg(t),e&&(i.m5.slotRelocation&&(m=!0,e["s-ol"]?e["s-ol"].remove():es(e,!0)),e.remove())}}},ei=function(e,t,n,o){let l,s,a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r=0,$=0,d=0,m=0,c=t.length-1,h=t[0],f=t[c],u=o.length-1,p=o[0],g=o[u];for(;r<=c&&$<=u;)if(null==h)h=t[++r];else if(null==f)f=t[--c];else if(null==p)p=o[++$];else if(null==g)g=o[--u];else if(e$(h,p,a))ec(h,p,a),h=t[++r],p=o[++$];else if(e$(f,g,a))ec(f,g,a),f=t[--c],g=o[--u];else if(e$(h,g,a))i.m5.slotRelocation&&("slot"===h.$tag$||"slot"===g.$tag$)&&es(h.$elm$.parentNode,!1),ec(h,g,a),e.insertBefore(h.$elm$,f.$elm$.nextSibling),h=t[++r],g=o[--u];else if(e$(f,p,a))i.m5.slotRelocation&&("slot"===h.$tag$||"slot"===g.$tag$)&&es(f.$elm$.parentNode,!1),ec(f,p,a),e.insertBefore(f.$elm$,h.$elm$),f=t[--c],p=o[++$];else{if(d=-1,i.m5.vdomKey){for(m=r;m<=c;++m)if(t[m]&&null!==t[m].$key$&&t[m].$key$===p.$key$){d=m;break}}i.m5.vdomKey&&d>=0?(s=t[d]).$tag$!==p.$tag$?l=eo(t&&t[$],n,d,e):(ec(s,p,a),t[d]=void 0,l=s.$elm$):l=eo(t&&t[$],n,$,e),p=o[++$],l&&(i.m5.slotRelocation?em(h.$elm$).insertBefore(l,ed(h.$elm$)):h.$elm$.parentNode.insertBefore(l,h.$elm$))}r>c?ea(e,null==o[u+1]?null:o[u+1].$elm$,n,o,$,u):i.m5.updatable&&$>u&&er(t,r,c)},e$=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e.$tag$===t.$tag$&&(i.m5.slotRelocation&&"slot"===e.$tag$?e.$name$===t.$name$:!i.m5.vdomKey||!!n||e.$key$===t.$key$)},ed=e=>e&&e["s-ol"]||e,em=e=>(e["s-ol"]?e["s-ol"]:e).parentNode,ec=function(e,t){let n,o=arguments.length>2&&void 0!==arguments[2]&&arguments[2],l=t.$elm$=e.$elm$,s=e.$children$,a=t.$children$,r=t.$tag$,$=t.$text$;i.m5.vdomText&&null!==$?i.m5.vdomText&&i.m5.slotRelocation&&(n=l["s-cr"])?n.parentNode.textContent=$:i.m5.vdomText&&e.$text$!==$&&(l.data=$):(i.m5.svg&&(h="svg"===r||"foreignObject"!==r&&h),(i.m5.vdomAttribute||i.m5.reflect)&&(i.m5.slot&&"slot"===r&&!d?i.m5.experimentalSlotFixes&&e.$name$!==t.$name$&&(t.$elm$["s-sn"]=t.$name$||"",el(t.$elm$.parentElement)):en(e,t,h)),i.m5.updatable&&null!==s&&null!==a?ei(l,s,t,a,o):null!==a?(i.m5.updatable&&i.m5.vdomText&&null!==e.$text$&&(l.textContent=""),ea(l,null,t,a,0,a.length-1)):i.m5.updatable&&null!==s&&er(s,0,s.length-1),i.m5.svg&&h&&"svg"===r&&(h=!1))},eh=e=>{let t=e.childNodes;for(let e of t)if(1===e.nodeType){if(e["s-sr"]){let n=e["s-sn"];for(let o of(e.hidden=!1,t))if(o!==e){if(o["s-hn"]!==e["s-hn"]||""!==n){if(1===o.nodeType&&(n===o.getAttribute("slot")||n===o["s-sn"])){e.hidden=!0;break}}else if(1===o.nodeType||3===o.nodeType&&""!==o.textContent.trim()){e.hidden=!0;break}}}eh(e)}},ef=[],eu=e=>{let t,n,o;for(let l of e.childNodes){if(l["s-sr"]&&(t=l["s-cr"])&&t.parentNode){n=t.parentNode.childNodes;let e=l["s-sn"];for(o=n.length-1;o>=0;o--)if(!(t=n[o])["s-cn"]&&!t["s-nr"]&&t["s-hn"]!==l["s-hn"]&&(!i.m5.experimentalSlotFixes||!t["s-sh"]||t["s-sh"]!==l["s-hn"])){if(ep(t,e)){let n=ef.find(e=>e.$nodeToRelocate$===t);m=!0,t["s-sn"]=t["s-sn"]||e,n?(n.$nodeToRelocate$["s-sh"]=l["s-hn"],n.$slotRefNode$=l):(t["s-sh"]=l["s-hn"],ef.push({$slotRefNode$:l,$nodeToRelocate$:t})),t["s-sr"]&&ef.map(e=>{ep(e.$nodeToRelocate$,t["s-sn"])&&(n=ef.find(e=>e.$nodeToRelocate$===t))&&!e.$slotRefNode$&&(e.$slotRefNode$=n.$slotRefNode$)})}else ef.some(e=>e.$nodeToRelocate$===t)||ef.push({$nodeToRelocate$:t})}}1===l.nodeType&&eu(l)}},ep=(e,t)=>1===e.nodeType?null===e.getAttribute("slot")&&""===t||e.getAttribute("slot")===t:e["s-sn"]===t||""===t,eg=e=>{i.m5.vdomRef&&(e.$attrs$&&e.$attrs$.ref&&e.$attrs$.ref(null),e.$children$&&e.$children$.map(eg))},ey=function(e,t){var n,a,r,$,h;let f=arguments.length>2&&void 0!==arguments[2]&&arguments[2],u=e.$hostElement$,p=e.$cmpMeta$,g=e.$vnode$||k(null,null),y=A(t)?t:T(null,null,t);if(s=u.tagName,i.m5.isDev&&Array.isArray(t)&&t.some(A))throw Error('The <Host> must be the single root component.\nLooks like the render() function of "'.concat(s.toLowerCase(),'" is returning an array that contains the <Host>.\n\nThe render() function should look like this instead:\n\nrender() {\n  // Do not return an array\n  return (\n    <Host>{content}</Host>\n  );\n}\n  '));if(i.m5.reflect&&p.$attrsToReflect$&&(y.$attrs$=y.$attrs$||{},p.$attrsToReflect$.map(e=>{let[t,n]=e;return y.$attrs$[n]=u[t]})),f&&y.$attrs$)for(let e of Object.keys(y.$attrs$))u.hasAttribute(e)&&!["key","ref","style","class"].includes(e)&&(y.$attrs$[e]=u[e]);if(y.$tag$=null,y.$flags$|=4,e.$vnode$=y,y.$elm$=g.$elm$=i.m5.shadowDom&&u.shadowRoot||u,(i.m5.scoped||i.m5.shadowDom)&&(o=u["s-sc"]),d=tg&&(1&p.$flags$)!=0,i.m5.slotRelocation&&(l=u["s-cr"],m=!1),ec(g,y,f),i.m5.slotRelocation){if(tu.$flags$|=1,c){for(let e of(eu(y.$elm$),ef)){let t=e.$nodeToRelocate$;if(!t["s-ol"]){let e=i.m5.isDebug||i.m5.hydrateServerSide?eb(t):th.createTextNode("");e["s-nr"]=t,t.parentNode.insertBefore(t["s-ol"]=e,t)}}for(let e of ef){let t=e.$nodeToRelocate$,o=e.$slotRefNode$;if(o){let e=o.parentNode,l=o.nextSibling;if(!i.m5.experimentalSlotFixes||l&&1===l.nodeType){let o=null===(n=t["s-ol"])||void 0===n?void 0:n.previousSibling;for(;o;){let n=null!==(a=o["s-nr"])&&void 0!==a?a:null;if(n&&n["s-sn"]===t["s-sn"]&&e===n.parentNode&&(!(n=n.nextSibling)||!n["s-nr"])){l=n;break}o=o.previousSibling}}(l||e===t.parentNode)&&t.nextSibling===l||t===l||(i.m5.experimentalSlotFixes||t["s-hn"]||!t["s-ol"]||(t["s-hn"]=t["s-ol"].parentNode.nodeName),e.insertBefore(t,l),1!==t.nodeType||(t.hidden=null!==(r=t["s-ih"])&&void 0!==r&&r))}else 1===t.nodeType&&(f&&(t["s-ih"]=null!==($=t.hidden)&&void 0!==$&&$),t.hidden=!0)}}m&&eh(y.$elm$),tu.$flags$&=-2,ef.length=0}if(i.m5.experimentalScopedSlotChanges&&2&p.$flags$)for(let e of y.$elm$.childNodes)e["s-hn"]===s||e["s-sh"]||(f&&null==e["s-ih"]&&(e["s-ih"]=null!==(h=e.hidden)&&void 0!==h&&h),e.hidden=!0);l=void 0},ev=e=>th.createComment("<slot".concat(e.$name$?' name="'+e.$name$+'"':"","> (host=").concat(s.toLowerCase(),")")),eb=e=>th.createComment("org-location for "+(e.localName?"<".concat(e.localName,"> (host=").concat(e["s-hn"],")"):"[".concat(e.textContent,"]"))),eN=(e,t)=>{i.m5.asyncLoading&&t&&!e.$onRenderResolve$&&t["s-p"]&&t["s-p"].push(new Promise(t=>e.$onRenderResolve$=t))},ew=(e,t)=>{if(i.m5.taskQueue&&i.m5.updatable&&(e.$flags$|=16),i.m5.asyncLoading&&4&e.$flags$){e.$flags$|=512;return}eN(e,e.$ancestorComponent$);let n=()=>eS(e,t);return i.m5.taskQueue?tD(n):n()},eS=(e,t)=>{let n;let o=e.$hostElement$,l=y("scheduleUpdate",e.$cmpMeta$.$tagName$),s=i.m5.lazyLoad?e.$lazyInstance$:o;return t?(i.m5.lazyLoad&&i.m5.hostListener&&(e.$flags$|=256,e.$queuedListeners$&&(e.$queuedListeners$.map(e=>{let[t,n]=e;return eA(s,t,n)}),e.$queuedListeners$=void 0)),eE(o,"componentWillLoad"),i.m5.cmpWillLoad&&(n=eA(s,"componentWillLoad"))):(eE(o,"componentWillUpdate"),i.m5.cmpWillUpdate&&(n=eA(s,"componentWillUpdate"))),eE(o,"componentWillRender"),i.m5.cmpWillRender&&(n=ex(n,()=>eA(s,"componentWillRender"))),l(),ex(n,()=>eR(e,s,t))},ex=(e,t)=>eC(e)?e.then(t):t(),eC=e=>e instanceof Promise||e&&e.then&&"function"==typeof e.then,eR=async(e,t,n)=>{var o;let l=e.$hostElement$,s=y("update",e.$cmpMeta$.$tagName$),a=l["s-rc"];i.m5.style&&n&&Q(e);let r=y("render",e.$cmpMeta$.$tagName$);if(i.m5.isDev&&(e.$flags$|=1024),i.m5.hydrateServerSide?await eL(e,t,l,n):eL(e,t,l,n),i.m5.isDev&&(e.$renderCount$=void 0===e.$renderCount$?1:e.$renderCount$+1,e.$flags$&=-1025),i.m5.hydrateServerSide)try{ej(l),n&&(1&e.$cmpMeta$.$flags$?l["s-en"]="":2&e.$cmpMeta$.$flags$&&(l["s-en"]="c"))}catch(e){tl(e,l)}if(i.m5.asyncLoading&&a&&(a.map(e=>e()),l["s-rc"]=void 0),r(),s(),i.m5.asyncLoading){let t=null!==(o=l["s-p"])&&void 0!==o?o:[],n=()=>eT(e);0===t.length?n():(Promise.all(t).then(n),e.$flags$|=4,t.length=0)}else eT(e)},eL=(e,t,n,o)=>{let l=!!i.m5.allRenderFn,s=!!i.m5.lazyLoad,a=!!i.m5.taskQueue,r=!!i.m5.updatable;try{if(t=l?t.render():t.render&&t.render(),r&&a&&(e.$flags$&=-17),(r||s)&&(e.$flags$|=2),i.m5.hasRenderFn||i.m5.reflect){if(i.m5.vdomRender||i.m5.reflect){if(i.m5.hydrateServerSide)return Promise.resolve(t).then(t=>ey(e,t,o));ey(e,t,o)}else{let o=n.shadowRoot;1&e.$cmpMeta$.$flags$?o.textContent=t:n.textContent=t}}}catch(t){tl(t,e.$hostElement$)}return null},eT=e=>{let t=e.$cmpMeta$.$tagName$,n=e.$hostElement$,o=y("postUpdate",t),l=i.m5.lazyLoad?e.$lazyInstance$:n,s=e.$ancestorComponent$;i.m5.cmpDidRender&&(i.m5.isDev&&(e.$flags$|=1024),eA(l,"componentDidRender"),i.m5.isDev&&(e.$flags$&=-1025)),eE(n,"componentDidRender"),64&e.$flags$?(i.m5.cmpDidUpdate&&(i.m5.isDev&&(e.$flags$|=1024),eA(l,"componentDidUpdate"),i.m5.isDev&&(e.$flags$&=-1025)),eE(n,"componentDidUpdate"),o()):(e.$flags$|=64,i.m5.asyncLoading&&i.m5.cssAnnotations&&e_(n),i.m5.cmpDidLoad&&(i.m5.isDev&&(e.$flags$|=2048),eA(l,"componentDidLoad"),i.m5.isDev&&(e.$flags$&=-2049)),eE(n,"componentDidLoad"),o(),i.m5.asyncLoading&&(e.$onReadyResolve$(n),s||eD(t))),i.m5.method&&i.m5.lazyLoad&&e.$onInstanceResolve$(n),i.m5.asyncLoading&&(e.$onRenderResolve$&&(e.$onRenderResolve$(),e.$onRenderResolve$=void 0),512&e.$flags$&&tT(()=>ew(e,!1)),e.$flags$&=-517)},ek=e=>{if(i.m5.updatable&&(p.isBrowser||p.isTesting)){let t=tt(e),n=t.$hostElement$.isConnected;return n&&(18&t.$flags$)==2&&ew(t,!1),n}return!1},eD=e=>{i.m5.cssAnnotations&&e_(th.documentElement),i.m5.asyncQueue&&(tu.$flags$|=2),tT(()=>q(tc,"appload",{detail:{namespace:i.A7}})),i.m5.profile&&performance.measure&&performance.measure("[Stencil] ".concat(i.A7," initial load (by ").concat(e,")"),"st:app:start")},eA=(e,t,n)=>{if(e&&e[t])try{return e[t](n)}catch(e){tl(e)}},eE=(e,t)=>{i.m5.lifecycleDOMEvents&&q(e,"stencil_"+t,{bubbles:!0,composed:!0,detail:{namespace:i.A7}})},e_=e=>i.m5.hydratedClass?e.classList.add("hydrated"):i.m5.hydratedAttribute?e.setAttribute("hydrated",""):void 0,ej=e=>{let t=e.children;if(null!=t)for(let e=0,n=t.length;e<n;e++){let n=t[e];"function"==typeof n.connectedCallback&&n.connectedCallback(),ej(n)}},ez=(e,t)=>tt(e).$instanceValues$.get(t),eO=(e,t,n,o)=>{let l=tt(e),s=i.m5.lazyLoad?l.$hostElement$:e,a=l.$instanceValues$.get(t),r=l.$flags$,$=i.m5.lazyLoad?l.$lazyInstance$:s;n=H(n,o.$members$[t][0]);let d=Number.isNaN(a)&&Number.isNaN(n),m=n!==a&&!d;if((!i.m5.lazyLoad||!(8&r)||void 0===a)&&m&&(l.$instanceValues$.set(t,n),i.m5.isDev&&(1024&l.$flags$?tr('The state/prop "'.concat(t,'" changed during rendering. This can potentially lead to infinite-loops and other bugs.'),"\nElement",s,"\nNew value",n,"\nOld value",a):2048&l.$flags$&&tr('The state/prop "'.concat(t,'" changed during "componentDidLoad()", this triggers extra re-renders, try to setup on "componentWillLoad()"'),"\nElement",s,"\nNew value",n,"\nOld value",a)),!i.m5.lazyLoad||$)){if(i.m5.watchCallback&&o.$watchers$&&128&r){let e=o.$watchers$[t];e&&e.map(e=>{try{$[e](n,a,t)}catch(e){tl(e,s)}})}if(i.m5.updatable&&(18&r)==2){if(i.m5.cmpShouldUpdate&&$.componentShouldUpdate&&!1===$.componentShouldUpdate(n,a,t))return;ew(l,!1)}}},eM=(e,t,n)=>{var o;let l=e.prototype;if(i.m5.formAssociated&&64&t.$flags$&&1&n&&x.forEach(e=>Object.defineProperty(l,e,{value(){for(var t=arguments.length,n=Array(t),o=0;o<t;o++)n[o]=arguments[o];let l=tt(this),s=i.m5.lazyLoad?l.$hostElement$:this,a=i.m5.lazyLoad?l.$lazyInstance$:s;if(a){let t=a[e];"function"==typeof t&&t.call(a,...n)}else l.$onReadyPromise$.then(t=>{let o=t[e];"function"==typeof o&&o.call(t,...n)})}})),i.m5.member&&t.$members$){i.m5.watchCallback&&e.watchers&&(t.$watchers$=e.watchers);let s=Object.entries(t.$members$);if(s.map(e=>{let[o,[s]]=e;(i.m5.prop||i.m5.state)&&(31&s||(!i.m5.lazyLoad||2&n)&&32&s)?Object.defineProperty(l,o,{get(){return ez(this,o)},set(e){if(i.m5.isDev){let e=tt(this);(1&n)==0&&0===(e&&8&e.$flags$)&&(31&s)!=0&&(1024&s)==0&&tr('@Prop() "'.concat(o,'" on <').concat(t.$tagName$,"> is immutable but was modified from within the component.\nMore information: https://stenciljs.com/docs/properties#prop-mutability"))}eO(this,o,e,t)},configurable:!0,enumerable:!0}):i.m5.lazyLoad&&i.m5.method&&1&n&&64&s&&Object.defineProperty(l,o,{value(){for(var e,t=arguments.length,n=Array(t),l=0;l<t;l++)n[l]=arguments[l];let s=tt(this);return null===(e=null==s?void 0:s.$onInstancePromise$)||void 0===e?void 0:e.then(()=>{var e;return null===(e=s.$lazyInstance$)||void 0===e?void 0:e[o](...n)})}})}),i.m5.observeAttribute&&(!i.m5.lazyLoad||1&n)){let n=new Map;l.attributeChangedCallback=function(e,o,s){tu.jmp(()=>{var a;let r=n.get(e);if(this.hasOwnProperty(r))s=this[r],delete this[r];else if(l.hasOwnProperty(r)&&"number"==typeof this[r]&&this[r]==s)return;else if(null==r){let n=tt(this),l=null==n?void 0:n.$flags$;if(l&&!(8&l)&&128&l&&s!==o){let l=i.m5.lazyLoad?n.$hostElement$:this,r=i.m5.lazyLoad?n.$lazyInstance$:l,$=null===(a=t.$watchers$)||void 0===a?void 0:a[e];null==$||$.forEach(t=>{null!=r[t]&&r[t].call(r,s,o,e)})}return}this[r]=(null!==s||"boolean"!=typeof this[r])&&s})},e.observedAttributes=Array.from(new Set([...Object.keys(null!==(o=t.$watchers$)&&void 0!==o?o:{}),...s.filter(e=>{let[t,n]=e;return 15&n[0]}).map(e=>{var o;let[l,s]=e,a=s[1]||l;return n.set(a,l),i.m5.reflect&&512&s[0]&&(null===(o=t.$attrsToReflect$)||void 0===o||o.push([l,a])),a})]))}}return e},eP=async(e,t,o,l)=>{let s;if((32&t.$flags$)==0){if(t.$flags$|=32,i.m5.lazyLoad||i.m5.hydrateClientSide){if((s=t$(o,t,l)).then){let e=v("st:load:".concat(o.$tagName$,":").concat(t.$modeName$),"[Stencil] Load module for <".concat(o.$tagName$,">"));s=await s,e()}if((i.m5.isDev||i.m5.isDebug)&&!s)throw Error('Constructor for "'.concat(o.$tagName$,"#").concat(t.$modeName$,'" was not found'));i.m5.member&&!s.isProxied&&(i.m5.watchCallback&&(o.$watchers$=s.watchers),eM(s,o,2),s.isProxied=!0);let e=y("createInstance",o.$tagName$);i.m5.member&&(t.$flags$|=8);try{new s(t)}catch(e){tl(e)}i.m5.member&&(t.$flags$&=-9),i.m5.watchCallback&&(t.$flags$|=128),e(),eI(t.$lazyInstance$)}else s=e.constructor,customElements.whenDefined(o.$tagName$).then(()=>t.$flags$|=128);if(i.m5.style&&s.style){let l=s.style;i.m5.mode&&"string"!=typeof l&&(l=l[t.$modeName$=I(e)],i.m5.hydrateServerSide&&t.$modeName$&&e.setAttribute("s-mode",t.$modeName$));let a=J(o,t.$modeName$);if(!td.has(a)){let e=y("registerStyles",o.$tagName$);!i.m5.hydrateServerSide&&i.m5.shadowDom&&i.m5.shadowDomShim&&8&o.$flags$&&(l=await n.e(423).then(n.bind(n,5423)).then(e=>e.scopeCss(l,a,!1))),V(a,l,!!(1&o.$flags$)),e()}}}let a=t.$ancestorComponent$,r=()=>ew(t,!0);i.m5.asyncLoading&&a&&a["s-rc"]?a["s-rc"].push(r):r()},eI=e=>{i.m5.lazyLoad&&i.m5.connectedCallback&&eA(e,"connectedCallback")},eB=e=>{if((1&tu.$flags$)==0){let t=tt(e),n=t.$cmpMeta$,o=y("connectedCallback",n.$tagName$);if(i.m5.hostListenerTargetParent&&e8(e,t,n.$listeners$,!0),1&t.$flags$)e8(e,t,n.$listeners$,!1),(null==t?void 0:t.$lazyInstance$)?eI(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then(()=>eI(t.$lazyInstance$));else{let o;if(t.$flags$|=1,i.m5.hydrateClientSide&&(o=e.getAttribute(b))){if(i.m5.shadowDom&&tg&&1&n.$flags$){let t=i.m5.mode?X(e.shadowRoot,n,e.getAttribute("s-mode")):X(e.shadowRoot,n);e.classList.remove(t+"-h",t+"-s")}O(e,n.$tagName$,o,t)}if(i.m5.slotRelocation&&!o&&(i.m5.hydrateServerSide||(i.m5.slot||i.m5.shadowDom)&&12&n.$flags$)&&eF(e),i.m5.asyncLoading){let n=e;for(;n=n.parentNode||n.host;)if(i.m5.hydrateClientSide&&1===n.nodeType&&n.hasAttribute("s-id")&&n["s-p"]||n["s-p"]){eN(t,t.$ancestorComponent$=n);break}}i.m5.prop&&!i.m5.hydrateServerSide&&n.$members$&&Object.entries(n.$members$).map(t=>{let[n,[o]]=t;if(31&o&&e.hasOwnProperty(n)){let t=e[n];delete e[n],e[n]=t}}),i.m5.initializeNextTick?tT(()=>eP(e,t,n)):eP(e,t,n)}o()}},eF=e=>{let t=e["s-cr"]=th.createComment(i.m5.isDebug?"content-ref (host=".concat(e.localName,")"):"");t["s-cn"]=!0,e.insertBefore(t,e.firstChild)},eH=e=>{i.m5.lazyLoad&&i.m5.disconnectedCallback&&eA(e,"disconnectedCallback"),i.m5.cmpDidUnload&&eA(e,"componentDidUnload")},eU=async e=>{if((1&tu.$flags$)==0){let t=tt(e);i.m5.hostListener&&t.$rmListeners$&&(t.$rmListeners$.map(e=>e()),t.$rmListeners$=void 0),i.m5.lazyLoad?(null==t?void 0:t.$lazyInstance$)?eH(t.$lazyInstance$):(null==t?void 0:t.$onReadyPromise$)&&t.$onReadyPromise$.then(()=>eH(t.$lazyInstance$)):eH(e)}},eW=(e,t)=>{eq(e),eK(e),eQ(e),eX(e),eY(e),eJ(e),eG(e),eZ(e),e5(e,t),eV(e)},eq=e=>{let t=e.cloneNode;e.cloneNode=function(e){let n=this,o=!!i.m5.shadowDom&&n.shadowRoot&&tg,l=t.call(n,!!o&&e);if(i.m5.slot&&!o&&e){let e,t,o=0,s=["s-id","s-cr","s-lr","s-rc","s-sc","s-p","s-cn","s-sr","s-sn","s-hn","s-ol","s-nr","s-si"];for(;o<n.childNodes.length;o++)e=n.childNodes[o]["s-nr"],t=s.every(e=>!n.childNodes[o][e]),e&&(i.m5.appendChildSlotFix&&l.__appendChild?l.__appendChild(e.cloneNode(!0)):l.appendChild(e.cloneNode(!0))),t&&l.appendChild(n.childNodes[o].cloneNode(!0))}return l}},eK=e=>{e.__appendChild=e.appendChild,e.appendChild=function(e){let t=e["s-sn"]=e1(e),n=e2(this.childNodes,t);if(n){let o=e4(n,t),l=o[o.length-1],s=l.parentNode.insertBefore(e,l.nextSibling);return eh(this),ek(this),s}return this.__appendChild(e)}},eV=e=>{e.__removeChild=e.removeChild,e.removeChild=function(e){if(e&&void 0!==e["s-sn"]){let t=e2(this.childNodes,e["s-sn"]);if(t){let n=e4(t,e["s-sn"]).find(t=>t===e);if(n){n.remove(),eh(this);return}}}return this.__removeChild(e)}},eX=e=>{let t=e.prepend;e.prepend=function(){for(var e=arguments.length,n=Array(e),o=0;o<e;o++)n[o]=arguments[o];n.forEach(e=>{"string"==typeof e&&(e=this.ownerDocument.createTextNode(e));let n=e["s-sn"]=e1(e),o=e2(this.childNodes,n);if(o){let t=document.createTextNode("");t["s-nr"]=e,o["s-cr"].parentNode.__appendChild(t),e["s-ol"]=t;let l=e4(o,n)[0];return l.parentNode.insertBefore(e,l.nextSibling)}return 1===e.nodeType&&e.getAttribute("slot")&&(e.hidden=!0),t.call(this,e)})}},eQ=e=>{e.append=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(e=>{"string"==typeof e&&(e=this.ownerDocument.createTextNode(e)),this.appendChild(e)})}},eJ=e=>{let t=e.insertAdjacentHTML;e.insertAdjacentHTML=function(e,n){let o;if("afterbegin"!==e&&"beforeend"!==e)return t.call(this,e,n);let l=this.ownerDocument.createElement("_");if(l.innerHTML=n,"afterbegin"===e)for(;o=l.firstChild;)this.prepend(o);else if("beforeend"===e)for(;o=l.firstChild;)this.append(o)}},eG=e=>{e.insertAdjacentText=function(e,t){this.insertAdjacentHTML(e,t)}},eY=e=>{let t=e.insertAdjacentElement;e.insertAdjacentElement=function(e,n){return"afterbegin"!==e&&"beforeend"!==e?t.call(this,e,n):("afterbegin"===e?this.prepend(n):"beforeend"===e&&this.append(n),n)}},eZ=e=>{Object.defineProperty(e,"__textContent",Object.getOwnPropertyDescriptor(Node.prototype,"textContent")),i.m5.experimentalScopedSlotChanges?Object.defineProperty(e,"textContent",{get(){return" "+e0(this.childNodes).map(e=>{var t,n;let o=[],l=e.nextSibling;for(;l&&l["s-sn"]===e["s-sn"];)(3===l.nodeType||1===l.nodeType)&&o.push(null!==(n=null===(t=l.textContent)||void 0===t?void 0:t.trim())&&void 0!==n?n:""),l=l.nextSibling;return o.filter(e=>""!==e).join(" ")}).filter(e=>""!==e).join(" ")+" "},set(e){e0(this.childNodes).forEach(t=>{let n=t.nextSibling;for(;n&&n["s-sn"]===t["s-sn"];){let e=n;n=n.nextSibling,e.remove()}if(""===t["s-sn"]){let n=this.ownerDocument.createTextNode(e);n["s-sn"]="",t.parentElement.insertBefore(n,t.nextSibling)}else t.remove()})}}):Object.defineProperty(e,"textContent",{get(){var e;let t=e2(this.childNodes,"");return(null===(e=null==t?void 0:t.nextSibling)||void 0===e?void 0:e.nodeType)===3?t.nextSibling.textContent:t?t.textContent:this.__textContent},set(e){var t;let n=e2(this.childNodes,"");if((null===(t=null==n?void 0:n.nextSibling)||void 0===t?void 0:t.nodeType)===3)n.nextSibling.textContent=e;else if(n)n.textContent=e;else{this.__textContent=e;let t=this["s-cr"];t&&this.insertBefore(t,this.firstChild)}}})},e5=(e,t)=>{class n extends Array{item(e){return this[e]}}if(8&t.$flags$){let t=e.__lookupGetter__("childNodes");Object.defineProperty(e,"children",{get(){return this.childNodes.map(e=>1===e.nodeType)}}),Object.defineProperty(e,"childElementCount",{get:()=>e.children.length}),Object.defineProperty(e,"childNodes",{get(){let e=t.call(this);if((1&tu.$flags$)==0&&2&tt(this).$flags$){let t=new n;for(let n=0;n<e.length;n++){let o=e[n]["s-nr"];o&&t.push(o)}return t}return n.from(e)}})}},e0=e=>{let t=[];for(let n of Array.from(e))n["s-sr"]&&t.push(n),t.push(...e0(n.childNodes));return t},e1=e=>e["s-sn"]||1===e.nodeType&&e.getAttribute("slot")||"",e2=(e,t)=>{let n,o=0;for(;o<e.length;o++)if((n=e[o])["s-sr"]&&n["s-sn"]===t||(n=e2(n.childNodes,t)))return n;return null},e4=(e,t)=>{let n=[e];for(;(e=e.nextSibling)&&e["s-sn"]===t;)n.push(e);return n},e3=(e,t)=>{let n={$flags$:t[0],$tagName$:t[1]};i.m5.member&&(n.$members$=t[2]),i.m5.hostListener&&(n.$listeners$=t[3]),i.m5.watchCallback&&(n.$watchers$=e.$watchers$),i.m5.reflect&&(n.$attrsToReflect$=[]),i.m5.shadowDom&&!tg&&1&n.$flags$&&(n.$flags$|=8),i.m5.experimentalSlotFixes?i.m5.scoped&&2&n.$flags$&&eW(e.prototype,n):(i.m5.slotChildNodesFix&&e5(e.prototype,n),i.m5.cloneNodeFix&&eq(e.prototype),i.m5.appendChildSlotFix&&eK(e.prototype),i.m5.scopedSlotTextContentFix&&2&n.$flags$&&eZ(e.prototype));let o=e.prototype.connectedCallback,l=e.prototype.disconnectedCallback;return Object.assign(e.prototype,{__registerHost(){tn(this,n)},connectedCallback(){eB(this),i.m5.connectedCallback&&o&&o.call(this)},disconnectedCallback(){eU(this),i.m5.disconnectedCallback&&l&&l.call(this)},__attachShadow(){tg?i.m5.shadowDelegatesFocus?this.attachShadow({mode:"open",delegatesFocus:!!(16&n.$flags$)}):this.attachShadow({mode:"open"}):this.shadowRoot=this}}),e.is=n.$tagName$,eM(e,n,3)},e8=(e,t,n,o)=>{i.m5.hostListener&&n&&(i.m5.hostListenerTargetParent&&(n=o?n.filter(e=>{let[t]=e;return 32&t}):n.filter(e=>{let[t]=e;return!(32&t)})),n.map(n=>{let[o,l,s]=n,a=i.m5.hostListenerTarget?e9(e,o):e,r=e6(t,s),$=e7(o);tu.ael(a,l,r,$),(t.$rmListeners$=t.$rmListeners$||[]).push(()=>tu.rel(a,l,r,$))}))},e6=(e,t)=>n=>{try{i.m5.lazyLoad?256&e.$flags$?e.$lazyInstance$[t](n):(e.$queuedListeners$=e.$queuedListeners$||[]).push([t,n]):e.$hostElement$[t](n)}catch(e){tl(e)}},e9=(e,t)=>i.m5.hostListenerTargetDocument&&4&t?th:i.m5.hostListenerTargetWindow&&8&t?tc:i.m5.hostListenerTargetBody&&16&t?th.body:i.m5.hostListenerTargetParent&&32&t?e.parentElement:e,e7=e=>ty?{passive:(1&e)!=0,capture:(2&e)!=0}:(2&e)!=0,te=i.m5.hotModuleReplacement?(r=window).__STENCIL_HOSTREFS__||(r.__STENCIL_HOSTREFS__=new WeakMap):new WeakMap,tt=e=>te.get(e),tn=(e,t)=>{let n={$flags$:0,$hostElement$:e,$cmpMeta$:t,$instanceValues$:new Map};return i.m5.isDev&&(n.$renderCount$=0),i.m5.method&&i.m5.lazyLoad&&(n.$onInstancePromise$=new Promise(e=>n.$onInstanceResolve$=e)),i.m5.asyncLoading&&(n.$onReadyPromise$=new Promise(e=>n.$onReadyResolve$=e),e["s-p"]=[],e["s-rc"]=[]),e8(e,n,t.$listeners$,!1),te.set(e,n)},to=(e,t)=>t in e,tl=(e,t)=>(a||console.error)(e,t),ts=i.m5.isTesting?["STENCIL:"]:["%cstencil","color: white;background:#4c47ff;font-weight: bold; font-size:10px; padding:2px 6px; border-radius: 5px"],ta=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return console.error(...ts,...t)},tr=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return console.warn(...ts,...t)},ti=new Map,t$=(e,t,o)=>{let l=e.$tagName$.replace(/-/g,"_"),s=e.$lazyBundleId$;if(i.m5.isDev&&"string"!=typeof s){ta("Trying to lazily load component <".concat(e.$tagName$,'> with style mode "').concat(t.$modeName$,'", but it does not exist.'));return}let a=!i.m5.hotModuleReplacement&&ti.get(s);return a?a[l]:n(6031)("./".concat(s,".entry.js").concat(i.m5.hotModuleReplacement&&o?"?s-hmr="+o:"")).then(e=>(i.m5.hotModuleReplacement||ti.set(s,e),e[l]),tl)},td=new Map,tm=[],tc=window,th=tc.document||{head:{}},tf=tc.HTMLElement||class{},tu={$flags$:0,$resourcesUrl$:"",jmp:e=>e(),raf:e=>requestAnimationFrame(e),ael:(e,t,n,o)=>e.addEventListener(t,n,o),rel:(e,t,n,o)=>e.removeEventListener(t,n,o),ce:(e,t)=>new CustomEvent(e,t)},tp=e=>{Object.assign(tu,e)},tg=!i.m5.shadowDomShim||!i.m5.shadowDom||(th.head.attachShadow+"").indexOf("[native")>-1,ty=(()=>{let e=!1;try{th.addEventListener("e",null,Object.defineProperty({},"passive",{get(){e=!0}}))}catch(e){}return e})(),tv=e=>Promise.resolve(e),tb=!!i.m5.constructableCSS&&(()=>{try{return new CSSStyleSheet,"function"==typeof new CSSStyleSheet().replaceSync}catch(e){}return!1})(),tN=[],tw=[],tS=[],tx=(e,t)=>n=>{e.push(n),u||(u=!0,t&&4&tu.$flags$?tT(tL):tu.raf(tL))},tC=e=>{for(let t=0;t<e.length;t++)try{e[t](performance.now())}catch(e){tl(e)}e.length=0},tR=(e,t)=>{let n=0,o=0;for(;n<e.length&&(o=performance.now())<t;)try{e[n++](o)}catch(e){tl(e)}n===e.length?e.length=0:0!==n&&e.splice(0,n)},tL=()=>{if(i.m5.asyncQueue&&f++,tC(tN),i.m5.asyncQueue){let e=(6&tu.$flags$)==2?performance.now()+14*Math.ceil(.1*f):1/0;tR(tw,e),tR(tS,e),tw.length>0&&(tS.push(...tw),tw.length=0),(u=tN.length+tw.length+tS.length>0)?tu.raf(tL):f=0}else tC(tw),(u=tN.length>0)&&tu.raf(tL)},tT=e=>tv().then(e),tk=tx(tN,!1),tD=tx(tw,!0)}}]);