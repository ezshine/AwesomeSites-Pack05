var I2=Object.defineProperty;var N2=(r,e,t)=>e in r?I2(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var U=(r,e,t)=>(N2(r,typeof e!="symbol"?e+"":e,t),t);var ed=!1,td=!1,ks=[];function z2(r){F2(r)}function F2(r){ks.includes(r)||ks.push(r),k2()}function Sv(r){let e=ks.indexOf(r);e!==-1&&ks.splice(e,1)}function k2(){!td&&!ed&&(ed=!0,queueMicrotask(U2))}function U2(){ed=!1,td=!0;for(let r=0;r<ks.length;r++)ks[r]();ks.length=0,td=!1}var uo,Ml,gu,Mv,id=!0;function B2(r){id=!1,r(),id=!0}function V2(r){uo=r.reactive,gu=r.release,Ml=e=>r.effect(e,{scheduler:t=>{id?z2(t):t()}}),Mv=r.raw}function h_(r){Ml=r}function G2(r){let e=()=>{};return[i=>{let n=Ml(i);return r._x_effects||(r._x_effects=new Set,r._x_runEffects=()=>{r._x_effects.forEach(s=>s())}),r._x_effects.add(n),e=()=>{n!==void 0&&(r._x_effects.delete(n),gu(n))},n},()=>{e()}]}var Ev=[],Tv=[],Av=[];function W2(r){Av.push(r)}function Cv(r,e){typeof e=="function"?(r._x_cleanups||(r._x_cleanups=[]),r._x_cleanups.push(e)):(e=r,Tv.push(e))}function H2(r){Ev.push(r)}function $2(r,e,t){r._x_attributeCleanups||(r._x_attributeCleanups={}),r._x_attributeCleanups[e]||(r._x_attributeCleanups[e]=[]),r._x_attributeCleanups[e].push(t)}function Pv(r,e){!r._x_attributeCleanups||Object.entries(r._x_attributeCleanups).forEach(([t,i])=>{(e===void 0||e.includes(t))&&(i.forEach(n=>n()),delete r._x_attributeCleanups[t])})}var Xd=new MutationObserver(jd),qd=!1;function Lv(){Xd.observe(document,{subtree:!0,childList:!0,attributes:!0,attributeOldValue:!0}),qd=!0}function X2(){q2(),Xd.disconnect(),qd=!1}var il=[],Zh=!1;function q2(){il=il.concat(Xd.takeRecords()),il.length&&!Zh&&(Zh=!0,queueMicrotask(()=>{Y2(),Zh=!1}))}function Y2(){jd(il),il.length=0}function di(r){if(!qd)return r();X2();let e=r();return Lv(),e}var Yd=!1,tu=[];function j2(){Yd=!0}function Z2(){Yd=!1,jd(tu),tu=[]}function jd(r){if(Yd){tu=tu.concat(r);return}let e=[],t=[],i=new Map,n=new Map;for(let s=0;s<r.length;s++)if(!r[s].target._x_ignoreMutationObserver&&(r[s].type==="childList"&&(r[s].addedNodes.forEach(o=>o.nodeType===1&&e.push(o)),r[s].removedNodes.forEach(o=>o.nodeType===1&&t.push(o))),r[s].type==="attributes")){let o=r[s].target,l=r[s].attributeName,u=r[s].oldValue,h=()=>{i.has(o)||i.set(o,[]),i.get(o).push({name:l,value:o.getAttribute(l)})},f=()=>{n.has(o)||n.set(o,[]),n.get(o).push(l)};o.hasAttribute(l)&&u===null?h():o.hasAttribute(l)?(f(),h()):f()}n.forEach((s,o)=>{Pv(o,s)}),i.forEach((s,o)=>{Ev.forEach(l=>l(o,s))});for(let s of t)if(!e.includes(s)&&(Tv.forEach(o=>o(s)),s._x_cleanups))for(;s._x_cleanups.length;)s._x_cleanups.pop()();e.forEach(s=>{s._x_ignoreSelf=!0,s._x_ignore=!0});for(let s of e)t.includes(s)||!s.isConnected||(delete s._x_ignoreSelf,delete s._x_ignore,Av.forEach(o=>o(s)),s._x_ignore=!0,s._x_ignoreSelf=!0);e.forEach(s=>{delete s._x_ignoreSelf,delete s._x_ignore}),e=null,t=null,i=null,n=null}function Rv(r){return Tl(Za(r))}function El(r,e,t){return r._x_dataStack=[e,...Za(t||r)],()=>{r._x_dataStack=r._x_dataStack.filter(i=>i!==e)}}function f_(r,e){let t=r._x_dataStack[0];Object.entries(e).forEach(([i,n])=>{t[i]=n})}function Za(r){return r._x_dataStack?r._x_dataStack:typeof ShadowRoot=="function"&&r instanceof ShadowRoot?Za(r.host):r.parentNode?Za(r.parentNode):[]}function Tl(r){let e=new Proxy({},{ownKeys:()=>Array.from(new Set(r.flatMap(t=>Object.keys(t)))),has:(t,i)=>r.some(n=>n.hasOwnProperty(i)),get:(t,i)=>(r.find(n=>{if(n.hasOwnProperty(i)){let s=Object.getOwnPropertyDescriptor(n,i);if(s.get&&s.get._x_alreadyBound||s.set&&s.set._x_alreadyBound)return!0;if((s.get||s.set)&&s.enumerable){let o=s.get,l=s.set,u=s;o=o&&o.bind(e),l=l&&l.bind(e),o&&(o._x_alreadyBound=!0),l&&(l._x_alreadyBound=!0),Object.defineProperty(n,i,{...u,get:o,set:l})}return!0}return!1})||{})[i],set:(t,i,n)=>{let s=r.find(o=>o.hasOwnProperty(i));return s?s[i]=n:r[r.length-1][i]=n,!0}});return e}function Dv(r){let e=i=>typeof i=="object"&&!Array.isArray(i)&&i!==null,t=(i,n="")=>{Object.entries(Object.getOwnPropertyDescriptors(i)).forEach(([s,{value:o,enumerable:l}])=>{if(l===!1||o===void 0)return;let u=n===""?s:`${n}.${s}`;typeof o=="object"&&o!==null&&o._x_interceptor?i[s]=o.initialize(r,u,s):e(o)&&o!==i&&!(o instanceof Element)&&t(o,u)})};return t(r)}function Ov(r,e=()=>{}){let t={initialValue:void 0,_x_interceptor:!0,initialize(i,n,s){return r(this.initialValue,()=>K2(i,n),o=>nd(i,n,o),n,s)}};return e(t),i=>{if(typeof i=="object"&&i!==null&&i._x_interceptor){let n=t.initialize.bind(t);t.initialize=(s,o,l)=>{let u=i.initialize(s,o,l);return t.initialValue=u,n(s,o,l)}}else t.initialValue=i;return t}}function K2(r,e){return e.split(".").reduce((t,i)=>t[i],r)}function nd(r,e,t){if(typeof e=="string"&&(e=e.split(".")),e.length===1)r[e[0]]=t;else{if(e.length===0)throw error;return r[e[0]]||(r[e[0]]={}),nd(r[e[0]],e.slice(1),t)}}var Iv={};function jn(r,e){Iv[r]=e}function rd(r,e){return Object.entries(Iv).forEach(([t,i])=>{Object.defineProperty(r,`$${t}`,{get(){let[n,s]=Bv(e);return n={interceptor:Ov,...n},Cv(e,s),i(e,n)},enumerable:!1})}),r}function J2(r,e,t,...i){try{return t(...i)}catch(n){ul(n,r,e)}}function ul(r,e,t=void 0){Object.assign(r,{el:e,expression:t}),console.warn(`Alpine Expression Error: ${r.message}

${t?'Expression: "'+t+`"

`:""}`,e),setTimeout(()=>{throw r},0)}var Xc=!0;function Q2(r){let e=Xc;Xc=!1,r(),Xc=e}function Wa(r,e,t={}){let i;return ki(r,e)(n=>i=n,t),i}function ki(...r){return Nv(...r)}var Nv=zv;function eA(r){Nv=r}function zv(r,e){let t={};rd(t,r);let i=[t,...Za(r)];if(typeof e=="function")return tA(i,e);let n=nA(i,e,r);return J2.bind(null,r,e,n)}function tA(r,e){return(t=()=>{},{scope:i={},params:n=[]}={})=>{let s=e.apply(Tl([i,...r]),n);iu(t,s)}}var Kh={};function iA(r,e){if(Kh[r])return Kh[r];let t=Object.getPrototypeOf(async function(){}).constructor,i=/^[\n\s]*if.*\(.*\)/.test(r)||/^(let|const)\s/.test(r)?`(() => { ${r} })()`:r,s=(()=>{try{return new t(["__self","scope"],`with (scope) { __self.result = ${i} }; __self.finished = true; return __self.result;`)}catch(o){return ul(o,e,r),Promise.resolve()}})();return Kh[r]=s,s}function nA(r,e,t){let i=iA(e,t);return(n=()=>{},{scope:s={},params:o=[]}={})=>{i.result=void 0,i.finished=!1;let l=Tl([s,...r]);if(typeof i=="function"){let u=i(i,l).catch(h=>ul(h,t,e));i.finished?(iu(n,i.result,l,o,t),i.result=void 0):u.then(h=>{iu(n,h,l,o,t)}).catch(h=>ul(h,t,e)).finally(()=>i.result=void 0)}}}function iu(r,e,t,i,n){if(Xc&&typeof e=="function"){let s=e.apply(t,i);s instanceof Promise?s.then(o=>iu(r,o,t,i)).catch(o=>ul(o,n,e)):r(s)}else r(e)}var Zd="x-";function ho(r=""){return Zd+r}function rA(r){Zd=r}var Fv={};function ei(r,e){Fv[r]=e}function Kd(r,e,t){if(e=Array.from(e),r._x_virtualDirectives){let s=Object.entries(r._x_virtualDirectives).map(([l,u])=>({name:l,value:u})),o=kv(s);s=s.map(l=>o.find(u=>u.name===l.name)?{name:`x-bind:${l.name}`,value:`"${l.value}"`}:l),e=e.concat(s)}let i={};return e.map(Wv((s,o)=>i[s]=o)).filter($v).map(oA(i,t)).sort(lA).map(s=>aA(r,s))}function kv(r){return Array.from(r).map(Wv()).filter(e=>!$v(e))}var sd=!1,Ko=new Map,Uv=Symbol();function sA(r){sd=!0;let e=Symbol();Uv=e,Ko.set(e,[]);let t=()=>{for(;Ko.get(e).length;)Ko.get(e).shift()();Ko.delete(e)},i=()=>{sd=!1,t()};r(t),i()}function Bv(r){let e=[],t=l=>e.push(l),[i,n]=G2(r);return e.push(n),[{Alpine:Al,effect:i,cleanup:t,evaluateLater:ki.bind(ki,r),evaluate:Wa.bind(Wa,r)},()=>e.forEach(l=>l())]}function aA(r,e){let t=()=>{},i=Fv[e.type]||t,[n,s]=Bv(r);$2(r,e.original,s);let o=()=>{r._x_ignore||r._x_ignoreSelf||(i.inline&&i.inline(r,e,n),i=i.bind(i,r,e,n),sd?Ko.get(Uv).push(i):i())};return o.runCleanups=s,o}var Vv=(r,e)=>({name:t,value:i})=>(t.startsWith(r)&&(t=t.replace(r,e)),{name:t,value:i}),Gv=r=>r;function Wv(r=()=>{}){return({name:e,value:t})=>{let{name:i,value:n}=Hv.reduce((s,o)=>o(s),{name:e,value:t});return i!==e&&r(i,e),{name:i,value:n}}}var Hv=[];function Jd(r){Hv.push(r)}function $v({name:r}){return Xv().test(r)}var Xv=()=>new RegExp(`^${Zd}([^:^.]+)\\b`);function oA(r,e){return({name:t,value:i})=>{let n=t.match(Xv()),s=t.match(/:([a-zA-Z0-9\-:]+)/),o=t.match(/\.[^.\]]+(?=[^\]]*$)/g)||[],l=e||r[t]||t;return{type:n?n[1]:null,value:s?s[1]:null,modifiers:o.map(u=>u.replace(".","")),expression:i,original:l}}}var ad="DEFAULT",bc=["ignore","ref","data","id","tabs","radio","switch","disclosure","bind","init","for","mask","model","modelable","transition","show","if",ad,"teleport"];function lA(r,e){let t=bc.indexOf(r.type)===-1?ad:r.type,i=bc.indexOf(e.type)===-1?ad:e.type;return bc.indexOf(t)-bc.indexOf(i)}function nl(r,e,t={}){r.dispatchEvent(new CustomEvent(e,{detail:t,bubbles:!0,composed:!0,cancelable:!0}))}var od=[],Qd=!1;function qv(r=()=>{}){return queueMicrotask(()=>{Qd||setTimeout(()=>{ld()})}),new Promise(e=>{od.push(()=>{r(),e()})})}function ld(){for(Qd=!1;od.length;)od.shift()()}function cA(){Qd=!0}function qs(r,e){if(typeof ShadowRoot=="function"&&r instanceof ShadowRoot){Array.from(r.children).forEach(n=>qs(n,e));return}let t=!1;if(e(r,()=>t=!0),t)return;let i=r.firstElementChild;for(;i;)qs(i,e),i=i.nextElementSibling}function Ka(r,...e){console.warn(`Alpine Warning: ${r}`,...e)}function uA(){document.body||Ka("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?"),nl(document,"alpine:init"),nl(document,"alpine:initializing"),Lv(),W2(e=>us(e,qs)),Cv(e=>fA(e)),H2((e,t)=>{Kd(e,t).forEach(i=>i())});let r=e=>!_u(e.parentElement,!0);Array.from(document.querySelectorAll(Zv())).filter(r).forEach(e=>{us(e)}),nl(document,"alpine:initialized")}var ep=[],Yv=[];function jv(){return ep.map(r=>r())}function Zv(){return ep.concat(Yv).map(r=>r())}function Kv(r){ep.push(r)}function Jv(r){Yv.push(r)}function _u(r,e=!1){return vu(r,t=>{if((e?Zv():jv()).some(n=>t.matches(n)))return!0})}function vu(r,e){if(!!r){if(e(r))return r;if(r._x_teleportBack&&(r=r._x_teleportBack),!!r.parentElement)return vu(r.parentElement,e)}}function hA(r){return jv().some(e=>r.matches(e))}function us(r,e=qs){sA(()=>{e(r,(t,i)=>{Kd(t,t.attributes).forEach(n=>n()),t._x_ignore&&i()})})}function fA(r){qs(r,e=>Pv(e))}function tp(r,e){return Array.isArray(e)?d_(r,e.join(" ")):typeof e=="object"&&e!==null?dA(r,e):typeof e=="function"?tp(r,e()):d_(r,e)}function d_(r,e){let t=n=>n.split(" ").filter(s=>!r.classList.contains(s)).filter(Boolean),i=n=>(r.classList.add(...n),()=>{r.classList.remove(...n)});return e=e===!0?e="":e||"",i(t(e))}function dA(r,e){let t=l=>l.split(" ").filter(Boolean),i=Object.entries(e).flatMap(([l,u])=>u?t(l):!1).filter(Boolean),n=Object.entries(e).flatMap(([l,u])=>u?!1:t(l)).filter(Boolean),s=[],o=[];return n.forEach(l=>{r.classList.contains(l)&&(r.classList.remove(l),o.push(l))}),i.forEach(l=>{r.classList.contains(l)||(r.classList.add(l),s.push(l))}),()=>{o.forEach(l=>r.classList.add(l)),s.forEach(l=>r.classList.remove(l))}}function xu(r,e){return typeof e=="object"&&e!==null?pA(r,e):mA(r,e)}function pA(r,e){let t={};return Object.entries(e).forEach(([i,n])=>{t[i]=r.style[i],i.startsWith("--")||(i=gA(i)),r.style.setProperty(i,n)}),setTimeout(()=>{r.style.length===0&&r.removeAttribute("style")}),()=>{xu(r,t)}}function mA(r,e){let t=r.getAttribute("style",e);return r.setAttribute("style",e),()=>{r.setAttribute("style",t||"")}}function gA(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function cd(r,e=()=>{}){let t=!1;return function(){t?e.apply(this,arguments):(t=!0,r.apply(this,arguments))}}ei("transition",(r,{value:e,modifiers:t,expression:i},{evaluate:n})=>{typeof i=="function"&&(i=n(i)),i?_A(r,i,e):vA(r,t,e)});function _A(r,e,t){Qv(r,tp,""),{enter:n=>{r._x_transition.enter.during=n},"enter-start":n=>{r._x_transition.enter.start=n},"enter-end":n=>{r._x_transition.enter.end=n},leave:n=>{r._x_transition.leave.during=n},"leave-start":n=>{r._x_transition.leave.start=n},"leave-end":n=>{r._x_transition.leave.end=n}}[t](e)}function vA(r,e,t){Qv(r,xu);let i=!e.includes("in")&&!e.includes("out")&&!t,n=i||e.includes("in")||["enter"].includes(t),s=i||e.includes("out")||["leave"].includes(t);e.includes("in")&&!i&&(e=e.filter((b,A)=>A<e.indexOf("out"))),e.includes("out")&&!i&&(e=e.filter((b,A)=>A>e.indexOf("out")));let o=!e.includes("opacity")&&!e.includes("scale"),l=o||e.includes("opacity"),u=o||e.includes("scale"),h=l?0:1,f=u?Fo(e,"scale",95)/100:1,m=Fo(e,"delay",0),p=Fo(e,"origin","center"),v="opacity, transform",y=Fo(e,"duration",150)/1e3,g=Fo(e,"duration",75)/1e3,_="cubic-bezier(0.4, 0.0, 0.2, 1)";n&&(r._x_transition.enter.during={transformOrigin:p,transitionDelay:m,transitionProperty:v,transitionDuration:`${y}s`,transitionTimingFunction:_},r._x_transition.enter.start={opacity:h,transform:`scale(${f})`},r._x_transition.enter.end={opacity:1,transform:"scale(1)"}),s&&(r._x_transition.leave.during={transformOrigin:p,transitionDelay:m,transitionProperty:v,transitionDuration:`${g}s`,transitionTimingFunction:_},r._x_transition.leave.start={opacity:1,transform:"scale(1)"},r._x_transition.leave.end={opacity:h,transform:`scale(${f})`})}function Qv(r,e,t={}){r._x_transition||(r._x_transition={enter:{during:t,start:t,end:t},leave:{during:t,start:t,end:t},in(i=()=>{},n=()=>{}){ud(r,e,{during:this.enter.during,start:this.enter.start,end:this.enter.end},i,n)},out(i=()=>{},n=()=>{}){ud(r,e,{during:this.leave.during,start:this.leave.start,end:this.leave.end},i,n)}})}window.Element.prototype._x_toggleAndCascadeWithTransitions=function(r,e,t,i){const n=document.visibilityState==="visible"?requestAnimationFrame:setTimeout;let s=()=>n(t);if(e){r._x_transition&&(r._x_transition.enter||r._x_transition.leave)?r._x_transition.enter&&(Object.entries(r._x_transition.enter.during).length||Object.entries(r._x_transition.enter.start).length||Object.entries(r._x_transition.enter.end).length)?r._x_transition.in(t):s():r._x_transition?r._x_transition.in(t):s();return}r._x_hidePromise=r._x_transition?new Promise((o,l)=>{r._x_transition.out(()=>{},()=>o(i)),r._x_transitioning.beforeCancel(()=>l({isFromCancelledTransition:!0}))}):Promise.resolve(i),queueMicrotask(()=>{let o=ex(r);o?(o._x_hideChildren||(o._x_hideChildren=[]),o._x_hideChildren.push(r)):n(()=>{let l=u=>{let h=Promise.all([u._x_hidePromise,...(u._x_hideChildren||[]).map(l)]).then(([f])=>f());return delete u._x_hidePromise,delete u._x_hideChildren,h};l(r).catch(u=>{if(!u.isFromCancelledTransition)throw u})})})};function ex(r){let e=r.parentNode;if(!!e)return e._x_hidePromise?e:ex(e)}function ud(r,e,{during:t,start:i,end:n}={},s=()=>{},o=()=>{}){if(r._x_transitioning&&r._x_transitioning.cancel(),Object.keys(t).length===0&&Object.keys(i).length===0&&Object.keys(n).length===0){s(),o();return}let l,u,h;xA(r,{start(){l=e(r,i)},during(){u=e(r,t)},before:s,end(){l(),h=e(r,n)},after:o,cleanup(){u(),h()}})}function xA(r,e){let t,i,n,s=cd(()=>{di(()=>{t=!0,i||e.before(),n||(e.end(),ld()),e.after(),r.isConnected&&e.cleanup(),delete r._x_transitioning})});r._x_transitioning={beforeCancels:[],beforeCancel(o){this.beforeCancels.push(o)},cancel:cd(function(){for(;this.beforeCancels.length;)this.beforeCancels.shift()();s()}),finish:s},di(()=>{e.start(),e.during()}),cA(),requestAnimationFrame(()=>{if(t)return;let o=Number(getComputedStyle(r).transitionDuration.replace(/,.*/,"").replace("s",""))*1e3,l=Number(getComputedStyle(r).transitionDelay.replace(/,.*/,"").replace("s",""))*1e3;o===0&&(o=Number(getComputedStyle(r).animationDuration.replace("s",""))*1e3),di(()=>{e.before()}),i=!0,requestAnimationFrame(()=>{t||(di(()=>{e.end()}),ld(),setTimeout(r._x_transitioning.finish,o+l),n=!0)})})}function Fo(r,e,t){if(r.indexOf(e)===-1)return t;const i=r[r.indexOf(e)+1];if(!i||e==="scale"&&isNaN(i))return t;if(e==="duration"){let n=i.match(/([0-9]+)ms/);if(n)return n[1]}return e==="origin"&&["top","right","left","center","bottom"].includes(r[r.indexOf(e)+2])?[i,r[r.indexOf(e)+2]].join(" "):i}var hd=!1;function yu(r,e=()=>{}){return(...t)=>hd?e(...t):r(...t)}function yA(r,e){e._x_dataStack||(e._x_dataStack=r._x_dataStack),hd=!0,wA(()=>{bA(e)}),hd=!1}function bA(r){let e=!1;us(r,(i,n)=>{qs(i,(s,o)=>{if(e&&hA(s))return o();e=!0,n(s,o)})})}function wA(r){let e=Ml;h_((t,i)=>{let n=e(t);return gu(n),()=>{}}),r(),h_(e)}function tx(r,e,t,i=[]){switch(r._x_bindings||(r._x_bindings=uo({})),r._x_bindings[e]=t,e=i.includes("camel")?PA(e):e,e){case"value":SA(r,t);break;case"style":EA(r,t);break;case"class":MA(r,t);break;default:TA(r,e,t);break}}function SA(r,e){if(r.type==="radio")r.attributes.value===void 0&&(r.value=e),window.fromModel&&(r.checked=p_(r.value,e));else if(r.type==="checkbox")Number.isInteger(e)?r.value=e:!Number.isInteger(e)&&!Array.isArray(e)&&typeof e!="boolean"&&![null,void 0].includes(e)?r.value=String(e):Array.isArray(e)?r.checked=e.some(t=>p_(t,r.value)):r.checked=!!e;else if(r.tagName==="SELECT")CA(r,e);else{if(r.value===e)return;r.value=e}}function MA(r,e){r._x_undoAddedClasses&&r._x_undoAddedClasses(),r._x_undoAddedClasses=tp(r,e)}function EA(r,e){r._x_undoAddedStyles&&r._x_undoAddedStyles(),r._x_undoAddedStyles=xu(r,e)}function TA(r,e,t){[null,void 0,!1].includes(t)&&LA(e)?r.removeAttribute(e):(ix(e)&&(t=e),AA(r,e,t))}function AA(r,e,t){r.getAttribute(e)!=t&&r.setAttribute(e,t)}function CA(r,e){const t=[].concat(e).map(i=>i+"");Array.from(r.options).forEach(i=>{i.selected=t.includes(i.value)})}function PA(r){return r.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function p_(r,e){return r==e}function ix(r){return["disabled","checked","required","readonly","hidden","open","selected","autofocus","itemscope","multiple","novalidate","allowfullscreen","allowpaymentrequest","formnovalidate","autoplay","controls","loop","muted","playsinline","default","ismap","reversed","async","defer","nomodule"].includes(r)}function LA(r){return!["aria-pressed","aria-checked","aria-expanded","aria-selected"].includes(r)}function RA(r,e,t){if(r._x_bindings&&r._x_bindings[e]!==void 0)return r._x_bindings[e];let i=r.getAttribute(e);return i===null?typeof t=="function"?t():t:i===""?!0:ix(e)?!![e,"true"].includes(i):i}function nx(r,e){var t;return function(){var i=this,n=arguments,s=function(){t=null,r.apply(i,n)};clearTimeout(t),t=setTimeout(s,e)}}function rx(r,e){let t;return function(){let i=this,n=arguments;t||(r.apply(i,n),t=!0,setTimeout(()=>t=!1,e))}}function DA(r){r(Al)}var Ls={},m_=!1;function OA(r,e){if(m_||(Ls=uo(Ls),m_=!0),e===void 0)return Ls[r];Ls[r]=e,typeof e=="object"&&e!==null&&e.hasOwnProperty("init")&&typeof e.init=="function"&&Ls[r].init(),Dv(Ls[r])}function IA(){return Ls}var sx={};function NA(r,e){let t=typeof e!="function"?()=>e:e;r instanceof Element?ax(r,t()):sx[r]=t}function zA(r){return Object.entries(sx).forEach(([e,t])=>{Object.defineProperty(r,e,{get(){return(...i)=>t(...i)}})}),r}function ax(r,e,t){let i=[];for(;i.length;)i.pop()();let n=Object.entries(e).map(([o,l])=>({name:o,value:l})),s=kv(n);n=n.map(o=>s.find(l=>l.name===o.name)?{name:`x-bind:${o.name}`,value:`"${o.value}"`}:o),Kd(r,n,t).map(o=>{i.push(o.runCleanups),o()})}var ox={};function FA(r,e){ox[r]=e}function kA(r,e){return Object.entries(ox).forEach(([t,i])=>{Object.defineProperty(r,t,{get(){return(...n)=>i.bind(e)(...n)},enumerable:!1})}),r}var UA={get reactive(){return uo},get release(){return gu},get effect(){return Ml},get raw(){return Mv},version:"3.10.4",flushAndStopDeferringMutations:Z2,dontAutoEvaluateFunctions:Q2,disableEffectScheduling:B2,setReactivityEngine:V2,closestDataStack:Za,skipDuringClone:yu,addRootSelector:Kv,addInitSelector:Jv,addScopeToNode:El,deferMutations:j2,mapAttributes:Jd,evaluateLater:ki,setEvaluator:eA,mergeProxies:Tl,findClosest:vu,closestRoot:_u,interceptor:Ov,transition:ud,setStyles:xu,mutateDom:di,directive:ei,throttle:rx,debounce:nx,evaluate:Wa,initTree:us,nextTick:qv,prefixed:ho,prefix:rA,plugin:DA,magic:jn,store:OA,start:uA,clone:yA,bound:RA,$data:Rv,data:FA,bind:NA},Al=UA;function BA(r,e){const t=Object.create(null),i=r.split(",");for(let n=0;n<i.length;n++)t[i[n]]=!0;return e?n=>!!t[n.toLowerCase()]:n=>!!t[n]}var VA=Object.freeze({});Object.freeze([]);var lx=Object.assign,GA=Object.prototype.hasOwnProperty,bu=(r,e)=>GA.call(r,e),Us=Array.isArray,rl=r=>cx(r)==="[object Map]",WA=r=>typeof r=="string",ip=r=>typeof r=="symbol",wu=r=>r!==null&&typeof r=="object",HA=Object.prototype.toString,cx=r=>HA.call(r),ux=r=>cx(r).slice(8,-1),np=r=>WA(r)&&r!=="NaN"&&r[0]!=="-"&&""+parseInt(r,10)===r,$A=r=>{const e=Object.create(null);return t=>e[t]||(e[t]=r(t))},XA=$A(r=>r.charAt(0).toUpperCase()+r.slice(1)),hx=(r,e)=>r!==e&&(r===r||e===e),fd=new WeakMap,ko=[],ir,Bs=Symbol("iterate"),dd=Symbol("Map key iterate");function qA(r){return r&&r._isEffect===!0}function YA(r,e=VA){qA(r)&&(r=r.raw);const t=KA(r,e);return e.lazy||t(),t}function jA(r){r.active&&(fx(r),r.options.onStop&&r.options.onStop(),r.active=!1)}var ZA=0;function KA(r,e){const t=function(){if(!t.active)return r();if(!ko.includes(t)){fx(t);try{return QA(),ko.push(t),ir=t,r()}finally{ko.pop(),dx(),ir=ko[ko.length-1]}}};return t.id=ZA++,t.allowRecurse=!!e.allowRecurse,t._isEffect=!0,t.active=!0,t.raw=r,t.deps=[],t.options=e,t}function fx(r){const{deps:e}=r;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(r);e.length=0}}var Ja=!0,rp=[];function JA(){rp.push(Ja),Ja=!1}function QA(){rp.push(Ja),Ja=!0}function dx(){const r=rp.pop();Ja=r===void 0?!0:r}function qn(r,e,t){if(!Ja||ir===void 0)return;let i=fd.get(r);i||fd.set(r,i=new Map);let n=i.get(t);n||i.set(t,n=new Set),n.has(ir)||(n.add(ir),ir.deps.push(n),ir.options.onTrack&&ir.options.onTrack({effect:ir,target:r,type:e,key:t}))}function hs(r,e,t,i,n,s){const o=fd.get(r);if(!o)return;const l=new Set,u=f=>{f&&f.forEach(m=>{(m!==ir||m.allowRecurse)&&l.add(m)})};if(e==="clear")o.forEach(u);else if(t==="length"&&Us(r))o.forEach((f,m)=>{(m==="length"||m>=i)&&u(f)});else switch(t!==void 0&&u(o.get(t)),e){case"add":Us(r)?np(t)&&u(o.get("length")):(u(o.get(Bs)),rl(r)&&u(o.get(dd)));break;case"delete":Us(r)||(u(o.get(Bs)),rl(r)&&u(o.get(dd)));break;case"set":rl(r)&&u(o.get(Bs));break}const h=f=>{f.options.onTrigger&&f.options.onTrigger({effect:f,target:r,key:t,type:e,newValue:i,oldValue:n,oldTarget:s}),f.options.scheduler?f.options.scheduler(f):f()};l.forEach(h)}var eC=BA("__proto__,__v_isRef,__isVue"),px=new Set(Object.getOwnPropertyNames(Symbol).map(r=>Symbol[r]).filter(ip)),tC=Su(),iC=Su(!1,!0),nC=Su(!0),rC=Su(!0,!0),nu={};["includes","indexOf","lastIndexOf"].forEach(r=>{const e=Array.prototype[r];nu[r]=function(...t){const i=Ft(this);for(let s=0,o=this.length;s<o;s++)qn(i,"get",s+"");const n=e.apply(i,t);return n===-1||n===!1?e.apply(i,t.map(Ft)):n}});["push","pop","shift","unshift","splice"].forEach(r=>{const e=Array.prototype[r];nu[r]=function(...t){JA();const i=e.apply(this,t);return dx(),i}});function Su(r=!1,e=!1){return function(i,n,s){if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_raw"&&s===(r?e?pC:Px:e?dC:Cx).get(i))return i;const o=Us(i);if(!r&&o&&bu(nu,n))return Reflect.get(nu,n,s);const l=Reflect.get(i,n,s);return(ip(n)?px.has(n):eC(n))||(r||qn(i,"get",n),e)?l:pd(l)?!o||!np(n)?l.value:l:wu(l)?r?Lx(l):lp(l):l}}var sC=mx(),aC=mx(!0);function mx(r=!1){return function(t,i,n,s){let o=t[i];if(!r&&(n=Ft(n),o=Ft(o),!Us(t)&&pd(o)&&!pd(n)))return o.value=n,!0;const l=Us(t)&&np(i)?Number(i)<t.length:bu(t,i),u=Reflect.set(t,i,n,s);return t===Ft(s)&&(l?hx(n,o)&&hs(t,"set",i,n,o):hs(t,"add",i,n)),u}}function oC(r,e){const t=bu(r,e),i=r[e],n=Reflect.deleteProperty(r,e);return n&&t&&hs(r,"delete",e,void 0,i),n}function lC(r,e){const t=Reflect.has(r,e);return(!ip(e)||!px.has(e))&&qn(r,"has",e),t}function cC(r){return qn(r,"iterate",Us(r)?"length":Bs),Reflect.ownKeys(r)}var gx={get:tC,set:sC,deleteProperty:oC,has:lC,ownKeys:cC},_x={get:nC,set(r,e){return console.warn(`Set operation on key "${String(e)}" failed: target is readonly.`,r),!0},deleteProperty(r,e){return console.warn(`Delete operation on key "${String(e)}" failed: target is readonly.`,r),!0}};lx({},gx,{get:iC,set:aC});lx({},_x,{get:rC});var sp=r=>wu(r)?lp(r):r,ap=r=>wu(r)?Lx(r):r,op=r=>r,Mu=r=>Reflect.getPrototypeOf(r);function Eu(r,e,t=!1,i=!1){r=r.__v_raw;const n=Ft(r),s=Ft(e);e!==s&&!t&&qn(n,"get",e),!t&&qn(n,"get",s);const{has:o}=Mu(n),l=i?op:t?ap:sp;if(o.call(n,e))return l(r.get(e));if(o.call(n,s))return l(r.get(s));r!==n&&r.get(e)}function Tu(r,e=!1){const t=this.__v_raw,i=Ft(t),n=Ft(r);return r!==n&&!e&&qn(i,"has",r),!e&&qn(i,"has",n),r===n?t.has(r):t.has(r)||t.has(n)}function Au(r,e=!1){return r=r.__v_raw,!e&&qn(Ft(r),"iterate",Bs),Reflect.get(r,"size",r)}function vx(r){r=Ft(r);const e=Ft(this);return Mu(e).has.call(e,r)||(e.add(r),hs(e,"add",r,r)),this}function xx(r,e){e=Ft(e);const t=Ft(this),{has:i,get:n}=Mu(t);let s=i.call(t,r);s?Ax(t,i,r):(r=Ft(r),s=i.call(t,r));const o=n.call(t,r);return t.set(r,e),s?hx(e,o)&&hs(t,"set",r,e,o):hs(t,"add",r,e),this}function yx(r){const e=Ft(this),{has:t,get:i}=Mu(e);let n=t.call(e,r);n?Ax(e,t,r):(r=Ft(r),n=t.call(e,r));const s=i?i.call(e,r):void 0,o=e.delete(r);return n&&hs(e,"delete",r,void 0,s),o}function bx(){const r=Ft(this),e=r.size!==0,t=rl(r)?new Map(r):new Set(r),i=r.clear();return e&&hs(r,"clear",void 0,void 0,t),i}function Cu(r,e){return function(i,n){const s=this,o=s.__v_raw,l=Ft(o),u=e?op:r?ap:sp;return!r&&qn(l,"iterate",Bs),o.forEach((h,f)=>i.call(n,u(h),u(f),s))}}function wc(r,e,t){return function(...i){const n=this.__v_raw,s=Ft(n),o=rl(s),l=r==="entries"||r===Symbol.iterator&&o,u=r==="keys"&&o,h=n[r](...i),f=t?op:e?ap:sp;return!e&&qn(s,"iterate",u?dd:Bs),{next(){const{value:m,done:p}=h.next();return p?{value:m,done:p}:{value:l?[f(m[0]),f(m[1])]:f(m),done:p}},[Symbol.iterator](){return this}}}}function ts(r){return function(...e){{const t=e[0]?`on key "${e[0]}" `:"";console.warn(`${XA(r)} operation ${t}failed: target is readonly.`,Ft(this))}return r==="delete"?!1:this}}var wx={get(r){return Eu(this,r)},get size(){return Au(this)},has:Tu,add:vx,set:xx,delete:yx,clear:bx,forEach:Cu(!1,!1)},Sx={get(r){return Eu(this,r,!1,!0)},get size(){return Au(this)},has:Tu,add:vx,set:xx,delete:yx,clear:bx,forEach:Cu(!1,!0)},Mx={get(r){return Eu(this,r,!0)},get size(){return Au(this,!0)},has(r){return Tu.call(this,r,!0)},add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear"),forEach:Cu(!0,!1)},Ex={get(r){return Eu(this,r,!0,!0)},get size(){return Au(this,!0)},has(r){return Tu.call(this,r,!0)},add:ts("add"),set:ts("set"),delete:ts("delete"),clear:ts("clear"),forEach:Cu(!0,!0)},uC=["keys","values","entries",Symbol.iterator];uC.forEach(r=>{wx[r]=wc(r,!1,!1),Mx[r]=wc(r,!0,!1),Sx[r]=wc(r,!1,!0),Ex[r]=wc(r,!0,!0)});function Tx(r,e){const t=e?r?Ex:Sx:r?Mx:wx;return(i,n,s)=>n==="__v_isReactive"?!r:n==="__v_isReadonly"?r:n==="__v_raw"?i:Reflect.get(bu(t,n)&&n in i?t:i,n,s)}var hC={get:Tx(!1,!1)},fC={get:Tx(!0,!1)};function Ax(r,e,t){const i=Ft(t);if(i!==t&&e.call(r,i)){const n=ux(r);console.warn(`Reactive ${n} contains both the raw and reactive versions of the same object${n==="Map"?" as keys":""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`)}}var Cx=new WeakMap,dC=new WeakMap,Px=new WeakMap,pC=new WeakMap;function mC(r){switch(r){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gC(r){return r.__v_skip||!Object.isExtensible(r)?0:mC(ux(r))}function lp(r){return r&&r.__v_isReadonly?r:Rx(r,!1,gx,hC,Cx)}function Lx(r){return Rx(r,!0,_x,fC,Px)}function Rx(r,e,t,i,n){if(!wu(r))return console.warn(`value cannot be made reactive: ${String(r)}`),r;if(r.__v_raw&&!(e&&r.__v_isReactive))return r;const s=n.get(r);if(s)return s;const o=gC(r);if(o===0)return r;const l=new Proxy(r,o===2?i:t);return n.set(r,l),l}function Ft(r){return r&&Ft(r.__v_raw)||r}function pd(r){return Boolean(r&&r.__v_isRef===!0)}jn("nextTick",()=>qv);jn("dispatch",r=>nl.bind(nl,r));jn("watch",(r,{evaluateLater:e,effect:t})=>(i,n)=>{let s=e(i),o=!0,l,u=t(()=>s(h=>{JSON.stringify(h),o?l=h:queueMicrotask(()=>{n(h,l),l=h}),o=!1}));r._x_effects.delete(u)});jn("store",IA);jn("data",r=>Rv(r));jn("root",r=>_u(r));jn("refs",r=>(r._x_refs_proxy||(r._x_refs_proxy=Tl(_C(r))),r._x_refs_proxy));function _C(r){let e=[],t=r;for(;t;)t._x_refs&&e.push(t._x_refs),t=t.parentNode;return e}var Jh={};function Dx(r){return Jh[r]||(Jh[r]=0),++Jh[r]}function vC(r,e){return vu(r,t=>{if(t._x_ids&&t._x_ids[e])return!0})}function xC(r,e){r._x_ids||(r._x_ids={}),r._x_ids[e]||(r._x_ids[e]=Dx(e))}jn("id",r=>(e,t=null)=>{let i=vC(r,e),n=i?i._x_ids[e]:Dx(e);return t?`${e}-${n}-${t}`:`${e}-${n}`});jn("el",r=>r);Ox("Focus","focus","focus");Ox("Persist","persist","persist");function Ox(r,e,t){jn(e,i=>Ka(`You can't use [$${directiveName}] without first installing the "${r}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}ei("modelable",(r,{expression:e},{effect:t,evaluateLater:i})=>{let n=i(e),s=()=>{let h;return n(f=>h=f),h},o=i(`${e} = __placeholder`),l=h=>o(()=>{},{scope:{__placeholder:h}}),u=s();l(u),queueMicrotask(()=>{if(!r._x_model)return;r._x_removeModelListeners.default();let h=r._x_model.get,f=r._x_model.set;t(()=>l(h())),t(()=>f(s()))})});ei("teleport",(r,{expression:e},{cleanup:t})=>{r.tagName.toLowerCase()!=="template"&&Ka("x-teleport can only be used on a <template> tag",r);let i=document.querySelector(e);i||Ka(`Cannot find x-teleport element for selector: "${e}"`);let n=r.content.cloneNode(!0).firstElementChild;r._x_teleport=n,n._x_teleportBack=r,r._x_forwardEvents&&r._x_forwardEvents.forEach(s=>{n.addEventListener(s,o=>{o.stopPropagation(),r.dispatchEvent(new o.constructor(o.type,o))})}),El(n,{},r),di(()=>{i.appendChild(n),us(n),n._x_ignore=!0}),t(()=>n.remove())});var Ix=()=>{};Ix.inline=(r,{modifiers:e},{cleanup:t})=>{e.includes("self")?r._x_ignoreSelf=!0:r._x_ignore=!0,t(()=>{e.includes("self")?delete r._x_ignoreSelf:delete r._x_ignore})};ei("ignore",Ix);ei("effect",(r,{expression:e},{effect:t})=>t(ki(r,e)));function Nx(r,e,t,i){let n=r,s=u=>i(u),o={},l=(u,h)=>f=>h(u,f);if(t.includes("dot")&&(e=yC(e)),t.includes("camel")&&(e=bC(e)),t.includes("passive")&&(o.passive=!0),t.includes("capture")&&(o.capture=!0),t.includes("window")&&(n=window),t.includes("document")&&(n=document),t.includes("prevent")&&(s=l(s,(u,h)=>{h.preventDefault(),u(h)})),t.includes("stop")&&(s=l(s,(u,h)=>{h.stopPropagation(),u(h)})),t.includes("self")&&(s=l(s,(u,h)=>{h.target===r&&u(h)})),(t.includes("away")||t.includes("outside"))&&(n=document,s=l(s,(u,h)=>{r.contains(h.target)||h.target.isConnected!==!1&&(r.offsetWidth<1&&r.offsetHeight<1||r._x_isShown!==!1&&u(h))})),t.includes("once")&&(s=l(s,(u,h)=>{u(h),n.removeEventListener(e,s,o)})),s=l(s,(u,h)=>{SC(e)&&MC(h,t)||u(h)}),t.includes("debounce")){let u=t[t.indexOf("debounce")+1]||"invalid-wait",h=md(u.split("ms")[0])?Number(u.split("ms")[0]):250;s=nx(s,h)}if(t.includes("throttle")){let u=t[t.indexOf("throttle")+1]||"invalid-wait",h=md(u.split("ms")[0])?Number(u.split("ms")[0]):250;s=rx(s,h)}return n.addEventListener(e,s,o),()=>{n.removeEventListener(e,s,o)}}function yC(r){return r.replace(/-/g,".")}function bC(r){return r.toLowerCase().replace(/-(\w)/g,(e,t)=>t.toUpperCase())}function md(r){return!Array.isArray(r)&&!isNaN(r)}function wC(r){return r.replace(/([a-z])([A-Z])/g,"$1-$2").replace(/[_\s]/,"-").toLowerCase()}function SC(r){return["keydown","keyup"].includes(r)}function MC(r,e){let t=e.filter(s=>!["window","document","prevent","stop","once"].includes(s));if(t.includes("debounce")){let s=t.indexOf("debounce");t.splice(s,md((t[s+1]||"invalid-wait").split("ms")[0])?2:1)}if(t.length===0||t.length===1&&g_(r.key).includes(t[0]))return!1;const n=["ctrl","shift","alt","meta","cmd","super"].filter(s=>t.includes(s));return t=t.filter(s=>!n.includes(s)),!(n.length>0&&n.filter(o=>((o==="cmd"||o==="super")&&(o="meta"),r[`${o}Key`])).length===n.length&&g_(r.key).includes(t[0]))}function g_(r){if(!r)return[];r=wC(r);let e={ctrl:"control",slash:"/",space:"-",spacebar:"-",cmd:"meta",esc:"escape",up:"arrow-up",down:"arrow-down",left:"arrow-left",right:"arrow-right",period:".",equal:"="};return e[r]=r,Object.keys(e).map(t=>{if(e[t]===r)return t}).filter(t=>t)}ei("model",(r,{modifiers:e,expression:t},{effect:i,cleanup:n})=>{let s=ki(r,t),o=`${t} = rightSideOfExpression($event, ${t})`,l=ki(r,o);var u=r.tagName.toLowerCase()==="select"||["checkbox","radio"].includes(r.type)||e.includes("lazy")?"change":"input";let h=EC(r,e,t),f=Nx(r,u,e,p=>{l(()=>{},{scope:{$event:p,rightSideOfExpression:h}})});r._x_removeModelListeners||(r._x_removeModelListeners={}),r._x_removeModelListeners.default=f,n(()=>r._x_removeModelListeners.default());let m=ki(r,`${t} = __placeholder`);r._x_model={get(){let p;return s(v=>p=v),p},set(p){m(()=>{},{scope:{__placeholder:p}})}},r._x_forceModelUpdate=()=>{s(p=>{p===void 0&&t.match(/\./)&&(p=""),window.fromModel=!0,di(()=>tx(r,"value",p)),delete window.fromModel})},i(()=>{e.includes("unintrusive")&&document.activeElement.isSameNode(r)||r._x_forceModelUpdate()})});function EC(r,e,t){return r.type==="radio"&&di(()=>{r.hasAttribute("name")||r.setAttribute("name",t)}),(i,n)=>di(()=>{if(i instanceof CustomEvent&&i.detail!==void 0)return i.detail||i.target.value;if(r.type==="checkbox")if(Array.isArray(n)){let s=e.includes("number")?Qh(i.target.value):i.target.value;return i.target.checked?n.concat([s]):n.filter(o=>!TC(o,s))}else return i.target.checked;else{if(r.tagName.toLowerCase()==="select"&&r.multiple)return e.includes("number")?Array.from(i.target.selectedOptions).map(s=>{let o=s.value||s.text;return Qh(o)}):Array.from(i.target.selectedOptions).map(s=>s.value||s.text);{let s=i.target.value;return e.includes("number")?Qh(s):e.includes("trim")?s.trim():s}}})}function Qh(r){let e=r?parseFloat(r):null;return AC(e)?e:r}function TC(r,e){return r==e}function AC(r){return!Array.isArray(r)&&!isNaN(r)}ei("cloak",r=>queueMicrotask(()=>di(()=>r.removeAttribute(ho("cloak")))));Jv(()=>`[${ho("init")}]`);ei("init",yu((r,{expression:e},{evaluate:t})=>typeof e=="string"?!!e.trim()&&t(e,{},!1):t(e,{},!1)));ei("text",(r,{expression:e},{effect:t,evaluateLater:i})=>{let n=i(e);t(()=>{n(s=>{di(()=>{r.textContent=s})})})});ei("html",(r,{expression:e},{effect:t,evaluateLater:i})=>{let n=i(e);t(()=>{n(s=>{di(()=>{r.innerHTML=s,r._x_ignoreSelf=!0,us(r),delete r._x_ignoreSelf})})})});Jd(Vv(":",Gv(ho("bind:"))));ei("bind",(r,{value:e,modifiers:t,expression:i,original:n},{effect:s})=>{if(!e){let l={};zA(l),ki(r,i)(h=>{ax(r,h,n)},{scope:l});return}if(e==="key")return CC(r,i);let o=ki(r,i);s(()=>o(l=>{l===void 0&&typeof i=="string"&&i.match(/\./)&&(l=""),di(()=>tx(r,e,l,t))}))});function CC(r,e){r._x_keyExpression=e}Kv(()=>`[${ho("data")}]`);ei("data",yu((r,{expression:e},{cleanup:t})=>{e=e===""?"{}":e;let i={};rd(i,r);let n={};kA(n,i);let s=Wa(r,e,{scope:n});s===void 0&&(s={}),rd(s,r);let o=uo(s);Dv(o);let l=El(r,o);o.init&&Wa(r,o.init),t(()=>{o.destroy&&Wa(r,o.destroy),l()})}));ei("show",(r,{modifiers:e,expression:t},{effect:i})=>{let n=ki(r,t);r._x_doHide||(r._x_doHide=()=>{di(()=>{r.style.setProperty("display","none",e.includes("important")?"important":void 0)})}),r._x_doShow||(r._x_doShow=()=>{di(()=>{r.style.length===1&&r.style.display==="none"?r.removeAttribute("style"):r.style.removeProperty("display")})});let s=()=>{r._x_doHide(),r._x_isShown=!1},o=()=>{r._x_doShow(),r._x_isShown=!0},l=()=>setTimeout(o),u=cd(m=>m?o():s(),m=>{typeof r._x_toggleAndCascadeWithTransitions=="function"?r._x_toggleAndCascadeWithTransitions(r,m,o,s):m?l():s()}),h,f=!0;i(()=>n(m=>{!f&&m===h||(e.includes("immediate")&&(m?l():s()),u(m),h=m,f=!1)}))});ei("for",(r,{expression:e},{effect:t,cleanup:i})=>{let n=LC(e),s=ki(r,n.items),o=ki(r,r._x_keyExpression||"index");r._x_prevKeys=[],r._x_lookup={},t(()=>PC(r,n,s,o)),i(()=>{Object.values(r._x_lookup).forEach(l=>l.remove()),delete r._x_prevKeys,delete r._x_lookup})});function PC(r,e,t,i){let n=o=>typeof o=="object"&&!Array.isArray(o),s=r;t(o=>{RC(o)&&o>=0&&(o=Array.from(Array(o).keys(),_=>_+1)),o===void 0&&(o=[]);let l=r._x_lookup,u=r._x_prevKeys,h=[],f=[];if(n(o))o=Object.entries(o).map(([_,b])=>{let A=__(e,b,_,o);i(w=>f.push(w),{scope:{index:_,...A}}),h.push(A)});else for(let _=0;_<o.length;_++){let b=__(e,o[_],_,o);i(A=>f.push(A),{scope:{index:_,...b}}),h.push(b)}let m=[],p=[],v=[],y=[];for(let _=0;_<u.length;_++){let b=u[_];f.indexOf(b)===-1&&v.push(b)}u=u.filter(_=>!v.includes(_));let g="template";for(let _=0;_<f.length;_++){let b=f[_],A=u.indexOf(b);if(A===-1)u.splice(_,0,b),m.push([g,_]);else if(A!==_){let w=u.splice(_,1)[0],T=u.splice(A-1,1)[0];u.splice(_,0,T),u.splice(A,0,w),p.push([w,T])}else y.push(b);g=b}for(let _=0;_<v.length;_++){let b=v[_];l[b]._x_effects&&l[b]._x_effects.forEach(Sv),l[b].remove(),l[b]=null,delete l[b]}for(let _=0;_<p.length;_++){let[b,A]=p[_],w=l[b],T=l[A],M=document.createElement("div");di(()=>{T.after(M),w.after(T),T._x_currentIfEl&&T.after(T._x_currentIfEl),M.before(w),w._x_currentIfEl&&w.after(w._x_currentIfEl),M.remove()}),f_(T,h[f.indexOf(A)])}for(let _=0;_<m.length;_++){let[b,A]=m[_],w=b==="template"?s:l[b];w._x_currentIfEl&&(w=w._x_currentIfEl);let T=h[A],M=f[A],C=document.importNode(s.content,!0).firstElementChild;El(C,uo(T),s),di(()=>{w.after(C),us(C)}),typeof M=="object"&&Ka("x-for key cannot be an object, it must be a string or an integer",s),l[M]=C}for(let _=0;_<y.length;_++)f_(l[y[_]],h[f.indexOf(y[_])]);s._x_prevKeys=f})}function LC(r){let e=/,([^,\}\]]*)(?:,([^,\}\]]*))?$/,t=/^\s*\(|\)\s*$/g,i=/([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/,n=r.match(i);if(!n)return;let s={};s.items=n[2].trim();let o=n[1].replace(t,"").trim(),l=o.match(e);return l?(s.item=o.replace(e,"").trim(),s.index=l[1].trim(),l[2]&&(s.collection=l[2].trim())):s.item=o,s}function __(r,e,t,i){let n={};return/^\[.*\]$/.test(r.item)&&Array.isArray(e)?r.item.replace("[","").replace("]","").split(",").map(o=>o.trim()).forEach((o,l)=>{n[o]=e[l]}):/^\{.*\}$/.test(r.item)&&!Array.isArray(e)&&typeof e=="object"?r.item.replace("{","").replace("}","").split(",").map(o=>o.trim()).forEach(o=>{n[o]=e[o]}):n[r.item]=e,r.index&&(n[r.index]=t),r.collection&&(n[r.collection]=i),n}function RC(r){return!Array.isArray(r)&&!isNaN(r)}function zx(){}zx.inline=(r,{expression:e},{cleanup:t})=>{let i=_u(r);i._x_refs||(i._x_refs={}),i._x_refs[e]=r,t(()=>delete i._x_refs[e])};ei("ref",zx);ei("if",(r,{expression:e},{effect:t,cleanup:i})=>{let n=ki(r,e),s=()=>{if(r._x_currentIfEl)return r._x_currentIfEl;let l=r.content.cloneNode(!0).firstElementChild;return El(l,{},r),di(()=>{r.after(l),us(l)}),r._x_currentIfEl=l,r._x_undoIf=()=>{qs(l,u=>{u._x_effects&&u._x_effects.forEach(Sv)}),l.remove(),delete r._x_currentIfEl},l},o=()=>{!r._x_undoIf||(r._x_undoIf(),delete r._x_undoIf)};t(()=>n(l=>{l?s():o()})),i(()=>r._x_undoIf&&r._x_undoIf())});ei("id",(r,{expression:e},{evaluate:t})=>{t(e).forEach(n=>xC(r,n))});Jd(Vv("@",Gv(ho("on:"))));ei("on",yu((r,{value:e,modifiers:t,expression:i},{cleanup:n})=>{let s=i?ki(r,i):()=>{};r.tagName.toLowerCase()==="template"&&(r._x_forwardEvents||(r._x_forwardEvents=[]),r._x_forwardEvents.includes(e)||r._x_forwardEvents.push(e));let o=Nx(r,e,t,l=>{s(()=>{},{scope:{$event:l},params:[l]})});n(()=>o())}));Pu("Collapse","collapse","collapse");Pu("Intersect","intersect","intersect");Pu("Focus","trap","focus");Pu("Mask","mask","mask");function Pu(r,e,t){ei(e,i=>Ka(`You can't use [x-${e}] without first installing the "${r}" plugin here: https://alpinejs.dev/plugins/${t}`,i))}Al.setEvaluator(zv);Al.setReactivityEngine({reactive:lp,effect:YA,release:jA,raw:Ft});var DC=Al,fo=DC;/*!
* tabbable 5.2.1
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/var Fx=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])',"details>summary:first-of-type","details"],v_=Fx.join(","),ru=typeof Element>"u"?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,kx=function(e,t,i){var n=Array.prototype.slice.apply(e.querySelectorAll(v_));return t&&ru.call(e,v_)&&n.unshift(e),n=n.filter(i),n},OC=function(e){return e.contentEditable==="true"},Ux=function(e){var t=parseInt(e.getAttribute("tabindex"),10);return isNaN(t)?OC(e)||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t},IC=function(e,t){return e.tabIndex===t.tabIndex?e.documentOrder-t.documentOrder:e.tabIndex-t.tabIndex},cp=function(e){return e.tagName==="INPUT"},NC=function(e){return cp(e)&&e.type==="hidden"},zC=function(e){var t=e.tagName==="DETAILS"&&Array.prototype.slice.apply(e.children).some(function(i){return i.tagName==="SUMMARY"});return t},FC=function(e,t){for(var i=0;i<e.length;i++)if(e[i].checked&&e[i].form===t)return e[i]},kC=function(e){if(!e.name)return!0;var t=e.form||e.ownerDocument,i=function(l){return t.querySelectorAll('input[type="radio"][name="'+l+'"]')},n;if(typeof window<"u"&&typeof window.CSS<"u"&&typeof window.CSS.escape=="function")n=i(window.CSS.escape(e.name));else try{n=i(e.name)}catch(o){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",o.message),!1}var s=FC(n,e.form);return!s||s===e},UC=function(e){return cp(e)&&e.type==="radio"},BC=function(e){return UC(e)&&!kC(e)},VC=function(e,t){if(getComputedStyle(e).visibility==="hidden")return!0;var i=ru.call(e,"details>summary:first-of-type"),n=i?e.parentElement:e;if(ru.call(n,"details:not([open]) *"))return!0;if(!t||t==="full")for(;e;){if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}else if(t==="non-zero-area"){var s=e.getBoundingClientRect(),o=s.width,l=s.height;return o===0&&l===0}return!1},GC=function(e){if(cp(e)||e.tagName==="SELECT"||e.tagName==="TEXTAREA"||e.tagName==="BUTTON")for(var t=e.parentElement;t;){if(t.tagName==="FIELDSET"&&t.disabled){for(var i=0;i<t.children.length;i++){var n=t.children.item(i);if(n.tagName==="LEGEND")return!n.contains(e)}return!0}t=t.parentElement}return!1},up=function(e,t){return!(t.disabled||NC(t)||VC(t,e.displayCheck)||zC(t)||GC(t))},WC=function(e,t){return!(!up(e,t)||BC(t)||Ux(t)<0)},HC=function(e,t){t=t||{};var i=[],n=[],s=kx(e,t.includeContainer,WC.bind(null,t));s.forEach(function(l,u){var h=Ux(l);h===0?i.push(l):n.push({documentOrder:u,tabIndex:h,node:l})});var o=n.sort(IC).map(function(l){return l.node}).concat(i);return o},$C=function(e,t){t=t||{};var i=kx(e,t.includeContainer,up.bind(null,t));return i},XC=Fx.concat("iframe").join(","),Bx=function(e,t){if(t=t||{},!e)throw new Error("No node provided");return ru.call(e,XC)===!1?!1:up(t,e)};/*!
* focus-trap 6.6.1
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/function x_(r,e){var t=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),t.push.apply(t,i)}return t}function qC(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?x_(Object(t),!0).forEach(function(i){YC(r,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(t)):x_(Object(t)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(t,i))})}return r}function YC(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var y_=function(){var r=[];return{activateTrap:function(t){if(r.length>0){var i=r[r.length-1];i!==t&&i.pause()}var n=r.indexOf(t);n===-1||r.splice(n,1),r.push(t)},deactivateTrap:function(t){var i=r.indexOf(t);i!==-1&&r.splice(i,1),r.length>0&&r[r.length-1].unpause()}}}(),jC=function(e){return e.tagName&&e.tagName.toLowerCase()==="input"&&typeof e.select=="function"},ZC=function(e){return e.key==="Escape"||e.key==="Esc"||e.keyCode===27},KC=function(e){return e.key==="Tab"||e.keyCode===9},b_=function(e){return setTimeout(e,0)},ef=function(e,t){var i=-1;return e.every(function(n,s){return t(n)?(i=s,!1):!0}),i},Uo=function(e){for(var t=arguments.length,i=new Array(t>1?t-1:0),n=1;n<t;n++)i[n-1]=arguments[n];return typeof e=="function"?e.apply(void 0,i):e},JC=function(e,t){var i=document,n=qC({returnFocusOnDeactivate:!0,escapeDeactivates:!0,delayInitialFocus:!0},t),s={containers:[],tabbableGroups:[],nodeFocusedBeforeActivation:null,mostRecentlyFocusedNode:null,active:!1,paused:!1,delayInitialFocusTimer:void 0},o,l=function(C,O,S){return C&&C[O]!==void 0?C[O]:n[S||O]},u=function(C){return s.containers.some(function(O){return O.contains(C)})},h=function(C){var O=n[C];if(!O)return null;var S=O;if(typeof O=="string"&&(S=i.querySelector(O),!S))throw new Error("`".concat(C,"` refers to no known node"));if(typeof O=="function"&&(S=O(),!S))throw new Error("`".concat(C,"` did not return a node"));return S},f=function(){var C;if(l({},"initialFocus")===!1)return!1;if(h("initialFocus")!==null)C=h("initialFocus");else if(u(i.activeElement))C=i.activeElement;else{var O=s.tabbableGroups[0],S=O&&O.firstTabbableNode;C=S||h("fallbackFocus")}if(!C)throw new Error("Your focus-trap needs to have at least one focusable element");return C},m=function(){if(s.tabbableGroups=s.containers.map(function(C){var O=HC(C);if(O.length>0)return{container:C,firstTabbableNode:O[0],lastTabbableNode:O[O.length-1]}}).filter(function(C){return!!C}),s.tabbableGroups.length<=0&&!h("fallbackFocus"))throw new Error("Your focus-trap must have at least one container with at least one tabbable node in it at all times")},p=function M(C){if(C!==!1&&C!==i.activeElement){if(!C||!C.focus){M(f());return}C.focus({preventScroll:!!n.preventScroll}),s.mostRecentlyFocusedNode=C,jC(C)&&C.select()}},v=function(C){var O=h("setReturnFocus");return O||C},y=function(C){if(!u(C.target)){if(Uo(n.clickOutsideDeactivates,C)){o.deactivate({returnFocus:n.returnFocusOnDeactivate&&!Bx(C.target)});return}Uo(n.allowOutsideClick,C)||C.preventDefault()}},g=function(C){var O=u(C.target);O||C.target instanceof Document?O&&(s.mostRecentlyFocusedNode=C.target):(C.stopImmediatePropagation(),p(s.mostRecentlyFocusedNode||f()))},_=function(C){m();var O=null;if(s.tabbableGroups.length>0){var S=ef(s.tabbableGroups,function(K){var se=K.container;return se.contains(C.target)});if(S<0)C.shiftKey?O=s.tabbableGroups[s.tabbableGroups.length-1].lastTabbableNode:O=s.tabbableGroups[0].firstTabbableNode;else if(C.shiftKey){var L=ef(s.tabbableGroups,function(K){var se=K.firstTabbableNode;return C.target===se});if(L<0&&s.tabbableGroups[S].container===C.target&&(L=S),L>=0){var k=L===0?s.tabbableGroups.length-1:L-1,Y=s.tabbableGroups[k];O=Y.lastTabbableNode}}else{var re=ef(s.tabbableGroups,function(K){var se=K.lastTabbableNode;return C.target===se});if(re<0&&s.tabbableGroups[S].container===C.target&&(re=S),re>=0){var G=re===s.tabbableGroups.length-1?0:re+1,V=s.tabbableGroups[G];O=V.firstTabbableNode}}}else O=h("fallbackFocus");O&&(C.preventDefault(),p(O))},b=function(C){if(ZC(C)&&Uo(n.escapeDeactivates)!==!1){C.preventDefault(),o.deactivate();return}if(KC(C)){_(C);return}},A=function(C){Uo(n.clickOutsideDeactivates,C)||u(C.target)||Uo(n.allowOutsideClick,C)||(C.preventDefault(),C.stopImmediatePropagation())},w=function(){if(!!s.active)return y_.activateTrap(o),s.delayInitialFocusTimer=n.delayInitialFocus?b_(function(){p(f())}):p(f()),i.addEventListener("focusin",g,!0),i.addEventListener("mousedown",y,{capture:!0,passive:!1}),i.addEventListener("touchstart",y,{capture:!0,passive:!1}),i.addEventListener("click",A,{capture:!0,passive:!1}),i.addEventListener("keydown",b,{capture:!0,passive:!1}),o},T=function(){if(!!s.active)return i.removeEventListener("focusin",g,!0),i.removeEventListener("mousedown",y,!0),i.removeEventListener("touchstart",y,!0),i.removeEventListener("click",A,!0),i.removeEventListener("keydown",b,!0),o};return o={activate:function(C){if(s.active)return this;var O=l(C,"onActivate"),S=l(C,"onPostActivate"),L=l(C,"checkCanFocusTrap");L||m(),s.active=!0,s.paused=!1,s.nodeFocusedBeforeActivation=i.activeElement,O&&O();var k=function(){L&&m(),w(),S&&S()};return L?(L(s.containers.concat()).then(k,k),this):(k(),this)},deactivate:function(C){if(!s.active)return this;clearTimeout(s.delayInitialFocusTimer),s.delayInitialFocusTimer=void 0,T(),s.active=!1,s.paused=!1,y_.deactivateTrap(o);var O=l(C,"onDeactivate"),S=l(C,"onPostDeactivate"),L=l(C,"checkCanReturnFocus");O&&O();var k=l(C,"returnFocus","returnFocusOnDeactivate"),Y=function(){b_(function(){k&&p(v(s.nodeFocusedBeforeActivation)),S&&S()})};return k&&L?(L(v(s.nodeFocusedBeforeActivation)).then(Y,Y),this):(Y(),this)},pause:function(){return s.paused||!s.active?this:(s.paused=!0,T(),this)},unpause:function(){return!s.paused||!s.active?this:(s.paused=!1,m(),w(),this)},updateContainerElements:function(C){var O=[].concat(C).filter(Boolean);return s.containers=O.map(function(S){return typeof S=="string"?i.querySelector(S):S}),s.active&&m(),this}},o.updateContainerElements(e),o};function QC(r){let e,t;window.addEventListener("focusin",()=>{e=t,t=document.activeElement}),r.magic("focus",i=>{let n=i;return{__noscroll:!1,__wrapAround:!1,within(s){return n=s,this},withoutScrolling(){return this.__noscroll=!0,this},noscroll(){return this.__noscroll=!0,this},withWrapAround(){return this.__wrapAround=!0,this},wrap(){return this.withWrapAround()},focusable(s){return Bx(s)},previouslyFocused(){return e},lastFocused(){return e},focused(){return t},focusables(){return Array.isArray(n)?n:$C(n,{displayCheck:"none"})},all(){return this.focusables()},isFirst(s){let o=this.all();return o[0]&&o[0].isSameNode(s)},isLast(s){let o=this.all();return o.length&&o.slice(-1)[0].isSameNode(s)},getFirst(){return this.all()[0]},getLast(){return this.all().slice(-1)[0]},getNext(){let s=this.all(),o=document.activeElement;if(s.indexOf(o)!==-1)return this.__wrapAround&&s.indexOf(o)===s.length-1?s[0]:s[s.indexOf(o)+1]},getPrevious(){let s=this.all(),o=document.activeElement;if(s.indexOf(o)!==-1)return this.__wrapAround&&s.indexOf(o)===0?s.slice(-1)[0]:s[s.indexOf(o)-1]},first(){this.focus(this.getFirst())},last(){this.focus(this.getLast())},next(){this.focus(this.getNext())},previous(){this.focus(this.getPrevious())},prev(){return this.previous()},focus(s){!s||setTimeout(()=>{s.hasAttribute("tabindex")||s.setAttribute("tabindex","0"),s.focus({preventScroll:this._noscroll})})}}}),r.directive("trap",r.skipDuringClone((i,{expression:n,modifiers:s},{effect:o,evaluateLater:l,cleanup:u})=>{let h=l(n),f=!1,m=JC(i,{escapeDeactivates:!1,allowOutsideClick:!0,fallbackFocus:()=>i,initialFocus:i.querySelector("[autofocus]")}),p=()=>{},v=()=>{};const y=()=>{p(),p=()=>{},v(),v=()=>{},m.deactivate({returnFocus:!s.includes("noreturn")})};o(()=>h(g=>{f!==g&&(g&&!f&&setTimeout(()=>{s.includes("inert")&&(p=w_(i)),s.includes("noscroll")&&(v=e3()),m.activate()}),!g&&f&&y(),f=!!g)})),u(y)},(i,{expression:n,modifiers:s},{evaluate:o})=>{s.includes("inert")&&o(n)&&w_(i)}))}function w_(r){let e=[];return Vx(r,t=>{let i=t.hasAttribute("aria-hidden");t.setAttribute("aria-hidden","true"),e.push(()=>i||t.removeAttribute("aria-hidden"))}),()=>{for(;e.length;)e.pop()()}}function Vx(r,e){r.isSameNode(document.body)||!r.parentNode||Array.from(r.parentNode.children).forEach(t=>{t.isSameNode(r)||e(t),Vx(r.parentNode,e)})}function e3(){let r=document.documentElement.style.overflow,e=document.documentElement.style.paddingRight,t=window.innerWidth-document.documentElement.clientWidth;return document.documentElement.style.overflow="hidden",document.documentElement.style.paddingRight=`${t}px`,()=>{document.documentElement.style.overflow=r,document.documentElement.style.paddingRight=e}}var t3=QC;function i3(r){r.directive("dialog",(e,t)=>{t.value==="overlay"?r3(e,r):t.value==="panel"?s3(e,r):t.value==="title"?a3(e,r):t.value==="description"?o3(e,r):n3(e,r)}),r.magic("dialog",e=>{let t=r.$data(e);return{get open(){return t.__isOpen},get isOpen(){return t.__isOpen},close(){t.__close()}}})}function n3(r,e){e.bind(r,{"x-data"(){return{init(){e.bound(r,"open")!==void 0&&e.effect(()=>{this.__isOpenState=e.bound(r,"open")}),e.bound(r,"initial-focus")!==void 0&&this.$watch("__isOpenState",()=>{!this.__isOpenState||setTimeout(()=>{e.bound(r,"initial-focus").focus()},0)})},__isOpenState:!1,__close(){e.bound(r,"open")?this.$dispatch("close"):this.__isOpenState=!1},get __isOpen(){return e.bound(r,"static",this.__isOpenState)}}},"x-modelable":"__isOpenState","x-id"(){return["alpine-dialog-title","alpine-dialog-description"]},"x-show"(){return this.__isOpen},"x-trap.inert.noscroll"(){return this.__isOpen},"@keydown.escape"(){this.__close()},":aria-labelledby"(){return this.$id("alpine-dialog-title")},":aria-describedby"(){return this.$id("alpine-dialog-description")},role:"dialog","aria-modal":"true"})}function r3(r,e){e.bind(r,{"x-init"(){this.$data.__isOpen===void 0&&console.warn('"x-dialog:overlay" is missing a parent element with "x-dialog".')},"x-show"(){return this.__isOpen},"@click.prevent.stop"(){this.$data.__close()}})}function s3(r,e){e.bind(r,{"@click.outside"(){this.$data.__close()},"x-show"(){return this.$data.__isOpen}})}function a3(r,e){e.bind(r,{"x-init"(){this.$data.__isOpen===void 0&&console.warn('"x-dialog:title" is missing a parent element with "x-dialog".')},":id"(){return this.$id("alpine-dialog-title")}})}function o3(r,e){e.bind(r,{":id"(){return this.$id("alpine-dialog-description")}})}function l3(r){r.directive("disclosure",(e,t)=>{t.value?t.value==="panel"?h3(e,r):t.value==="button"&&u3(e,r):c3(e,r)}),r.magic("disclosure",e=>{let t=r.$data(e);return{get isOpen(){return t.__isOpen},close(){t.__close()}}})}function c3(r,e){e.bind(r,{"x-modelable":"__isOpen","x-data"(){return{init(){queueMicrotask(()=>{let t=Boolean(e.bound(this.$el,"default-open",!1));t&&(this.__isOpen=t)})},__isOpen:!1,__close(){this.__isOpen=!1},__toggle(){this.__isOpen=!this.__isOpen}}},"x-id"(){return["alpine-disclosure-panel"]}})}function u3(r,e){e.bind(r,{"x-init"(){this.$el.tagName.toLowerCase()==="button"&&!this.$el.hasAttribute("type")&&(this.$el.type="button")},"@click"(){this.$data.__isOpen=!this.$data.__isOpen},":aria-expanded"(){return this.$data.__isOpen},":aria-controls"(){return this.$data.$id("alpine-disclosure-panel")},"@keydown.space.prevent.stop"(){this.$data.__toggle()},"@keydown.enter.prevent.stop"(){this.$data.__toggle()},"@keyup.space.prevent"(){this.$data.__toggle()}})}function h3(r,e){e.bind(r,{"x-show"(){return this.$data.__isOpen},":id"(){return this.$data.$id("alpine-disclosure-panel")}})}function f3(r){r.directive("switch",(e,t)=>{t.value==="group"?d3(e,r):t.value==="label"?m3(e,r):t.value==="description"?g3(e,r):p3(e,r)}),r.magic("switch",e=>{let t=r.$data(e);return{get isChecked(){return t.__value===!0}}})}function d3(r,e){e.bind(r,{"x-id"(){return["alpine-switch-label","alpine-switch-description"]},"x-data"(){return{__hasLabel:!1,__hasDescription:!1,__switchEl:void 0}}})}function p3(r,e){e.bind(r,{"x-modelable":"__value","x-data"(){return{init(){queueMicrotask(()=>{this.__value=e.bound(this.$el,"default-checked",!1),this.__inputName=e.bound(this.$el,"name",!1),this.__inputValue=e.bound(this.$el,"value","on"),this.__inputId="alpine-switch-"+Date.now()})},__value:void 0,__inputName:void 0,__inputValue:void 0,__inputId:void 0,__toggle(){this.__value=!this.__value}}},"x-effect"(){let t=this.__value;if(!this.__inputName)return;let i=this.$el.nextElementSibling;if(i&&String(i.id)===String(this.__inputId)&&i.remove(),t){let n=document.createElement("input");n.type="hidden",n.value=this.__inputValue,n.name=this.__inputName,n.id=this.__inputId,this.$el.after(n)}},"x-init"(){this.$el.tagName.toLowerCase()==="button"&&!this.$el.hasAttribute("type")&&(this.$el.type="button"),this.$data.__switchEl=this.$el},role:"switch",tabindex:"0",":aria-checked"(){return!!this.__value},":aria-labelledby"(){return this.$data.__hasLabel&&this.$id("alpine-switch-label")},":aria-describedby"(){return this.$data.__hasDescription&&this.$id("alpine-switch-description")},"@click.prevent"(){this.__toggle()},"@keyup"(t){t.key!=="Tab"&&t.preventDefault(),t.key===" "&&this.__toggle()},"@keypress.prevent"(){}})}function m3(r,e){e.bind(r,{"x-init"(){this.$data.__hasLabel=!0},":id"(){return this.$id("alpine-switch-label")},"@click"(){this.$data.__switchEl.click(),this.$data.__switchEl.focus({preventScroll:!0})}})}function g3(r,e){e.bind(r,{"x-init"(){this.$data.__hasDescription=!0},":id"(){return this.$id("alpine-switch-description")}})}function _3(r){r.directive("popover",(e,t)=>{t.value?t.value==="overlay"?w3(e,r):t.value==="button"?x3(e,r):t.value==="panel"?y3(e,r):t.value==="group"&&b3(e,r):v3(e,r)}),r.magic("popover",e=>{let t=r.$data(e);return{get isOpen(){return t.__isOpenState},open(){t.__open()},close(){t.__close()}}})}function v3(r,e){e.bind(r,{"x-id"(){return["alpine-popover-button","alpine-popover-panel"]},"x-modelable":"__isOpenState","x-data"(){return{init(){this.$data.__groupEl&&this.$data.__groupEl.addEventListener("__close-others",({detail:t})=>{t.el.isSameNode(this.$el)||this.__close(!1)})},__buttonEl:void 0,__panelEl:void 0,__isStatic:!1,get __isOpen(){return this.__isStatic?!0:this.__isOpenState},__isOpenState:!1,__open(){this.__isOpenState=!0,this.$dispatch("__close-others",{el:this.$el})},__toggle(){this.__isOpenState?this.__close():this.__open()},__close(t){this.__isStatic||(this.__isOpenState=!1,t!==!1&&(t=t||this.$data.__buttonEl,!document.activeElement.isSameNode(t)&&setTimeout(()=>t.focus())))},__contains(t,i){return!!e.findClosest(i,n=>n.isSameNode(t))}}},"@keydown.escape.stop.prevent"(){this.__close()},"@focusin.window"(){if(this.$data.__groupEl){this.$data.__contains(this.$data.__groupEl,document.activeElement)||this.$data.__close(!1);return}this.$data.__contains(this.$el,document.activeElement)||this.$data.__close(!1)}})}function x3(r,e){e.bind(r,{"x-ref":"button",":id"(){return this.$id("alpine-popover-button")},":aria-expanded"(){return this.$data.__isOpen},":aria-controls"(){return this.$data.__isOpen&&this.$id("alpine-popover-panel")},"x-init"(){this.$el.tagName.toLowerCase()==="button"&&!this.$el.hasAttribute("type")&&(this.$el.type="button"),this.$data.__buttonEl=this.$el},"@click"(){this.$data.__toggle()},"@keydown.tab"(t){if(!t.shiftKey&&this.$data.__isOpen){let i=this.$focus.within(this.$data.__panelEl).getFirst();i&&(t.preventDefault(),t.stopPropagation(),this.$focus.focus(i))}},"@keyup.tab"(t){if(this.$data.__isOpen){let i=this.$focus.previouslyFocused();if(!i)return;!this.$data.__buttonEl.contains(i)&&!this.$data.__panelEl.contains(i)&&i&&this.$el.compareDocumentPosition(i)&Node.DOCUMENT_POSITION_FOLLOWING&&(t.preventDefault(),t.stopPropagation(),this.$focus.within(this.$data.__panelEl).last())}},"@keydown.space.stop.prevent"(){this.$data.__toggle()},"@keydown.enter.stop.prevent"(){this.$data.__toggle()},"@keyup.space.stop.prevent"(){}})}function y3(r,e){e.bind(r,{"x-init"(){this.$data.__isStatic=e.bound(this.$el,"static",!1),this.$data.__panelEl=this.$el},"x-effect"(){this.$data.__isOpen&&e.bound(r,"focus")&&this.$focus.first()},"x-ref":"panel",":id"(){return this.$id("alpine-popover-panel")},"x-show"(){return this.$data.__isOpen},"@mousedown.window"(t){!this.$data.__isOpen||this.$data.__contains(this.$data.__buttonEl,t.target)||this.$data.__contains(this.$el,t.target)||this.$focus.focusable(t.target)||this.$data.__close()},"@keydown.tab"(t){if(t.shiftKey&&this.$focus.isFirst(t.target))t.preventDefault(),t.stopPropagation(),e.bound(r,"focus")?this.$data.__close():this.$data.__buttonEl.focus();else if(!t.shiftKey&&this.$focus.isLast(t.target)){t.preventDefault(),t.stopPropagation();let i=this.$focus.within(document).all(),n=i.indexOf(this.$data.__buttonEl);i.splice(n+1).filter(o=>!this.$el.contains(o))[0].focus(),e.bound(r,"focus")&&this.$data.__close(!1)}}})}function b3(r,e){e.bind(r,{"x-ref":"container","x-data"(){return{__groupEl:this.$el}}})}function w3(r,e){e.bind(r,{"x-show"(){return this.$data.__isOpen}})}function S3(r){r.directive("radio",(e,t)=>{t.value?t.value==="option"?E3(e,r):t.value==="label"?T3(e,r):t.value==="description"&&A3(e,r):M3(e,r)}),r.magic("radioOption",e=>{let t=r.$data(e);return{get isActive(){return t.__option===t.__active},get isChecked(){return t.__option===t.__value},get isDisabled(){let i=t.__disabled;return t.__rootDisabled?!0:i}}})}function M3(r,e){e.bind(r,{"x-modelable":"__value","x-data"(){return{init(){queueMicrotask(()=>{this.__rootDisabled=e.bound(r,"disabled",!1),this.__value=e.bound(this.$el,"default-value",!1),this.__inputName=e.bound(this.$el,"name",!1),this.__inputId="alpine-radio-"+Date.now()}),this.$nextTick(()=>{let t=document.createTreeWalker(this.$el,NodeFilter.SHOW_ELEMENT,{acceptNode:i=>i.getAttribute("role")==="radio"?NodeFilter.FILTER_REJECT:i.hasAttribute("role")?NodeFilter.FILTER_SKIP:NodeFilter.FILTER_ACCEPT},!1);for(;t.nextNode();)t.currentNode.setAttribute("role","none")})},__value:void 0,__active:void 0,__rootEl:this.$el,__optionValues:[],__disabledOptions:new Set,__optionElsByValue:new Map,__hasLabel:!1,__hasDescription:!1,__rootDisabled:!1,__inputName:void 0,__inputId:void 0,__change(t){this.__rootDisabled||(this.__value=t)},__addOption(t,i,n){let s=e.raw(this.__optionValues),o=s.map(u=>this.__optionElsByValue.get(u)),l=!1;for(let u=0;u<o.length;u++)if(o[u].compareDocumentPosition(i)&Node.DOCUMENT_POSITION_PRECEDING){s.splice(u,0,t),this.__optionElsByValue.set(t,i),l=!0;break}l||(s.push(t),this.__optionElsByValue.set(t,i)),n&&this.__disabledOptions.add(t)},__isFirstOption(t){return this.__optionValues.indexOf(t)===0},__setActive(t){this.__active=t},__focusOptionNext(){let t=this.__active,i=this.__optionValues.filter(s=>!this.__disabledOptions.has(s)),n=i[this.__optionValues.indexOf(t)+1];n=n||i[0],this.__optionElsByValue.get(n).focus(),this.__change(n)},__focusOptionPrev(){let t=this.__active,i=this.__optionValues.filter(s=>!this.__disabledOptions.has(s)),n=i[i.indexOf(t)-1];n=n||i.slice(-1)[0],this.__optionElsByValue.get(n).focus(),this.__change(n)}}},"x-effect"(){let t=this.__value;if(!this.__inputName)return;let i=this.$el.nextElementSibling;if(i&&String(i.id)===String(this.__inputId)&&i.remove(),t){let n=document.createElement("input");n.type="hidden",n.value=t,n.name=this.__inputName,n.id=this.__inputId,this.$el.after(n)}},role:"radiogroup","x-id"(){return["alpine-radio-label","alpine-radio-description"]},":aria-labelledby"(){return this.__hasLabel&&this.$id("alpine-radio-label")},":aria-describedby"(){return this.__hasDescription&&this.$id("alpine-radio-description")},"@keydown.up.prevent.stop"(){this.__focusOptionPrev()},"@keydown.left.prevent.stop"(){this.__focusOptionPrev()},"@keydown.down.prevent.stop"(){this.__focusOptionNext()},"@keydown.right.prevent.stop"(){this.__focusOptionNext()}})}function E3(r,e){e.bind(r,{"x-data"(){return{init(){queueMicrotask(()=>{this.__disabled=e.bound(r,"disabled",!1),this.__option=e.bound(r,"value"),this.$data.__addOption(this.__option,this.$el,this.__disabled)})},__option:void 0,__disabled:!1,__hasLabel:!1,__hasDescription:!1}},"x-id"(){return["alpine-radio-label","alpine-radio-description"]},role:"radio",":aria-checked"(){return this.$radioOption.isChecked},":aria-disabled"(){return this.$radioOption.isDisabled},":aria-labelledby"(){return this.__hasLabel&&this.$id("alpine-radio-label")},":aria-describedby"(){return this.__hasDescription&&this.$id("alpine-radio-description")},":tabindex"(){return this.$radioOption.isDisabled?-1:this.$radioOption.isChecked||!this.$data.__value&&this.$data.__isFirstOption(this.$data.__option)?0:-1},"@click"(){this.$radioOption.isDisabled||(this.$data.__change(this.$data.__option),this.$el.focus())},"@focus"(){this.$radioOption.isDisabled||this.$data.__setActive(this.$data.__option)},"@blur"(){this.$data.__active===this.$data.__option&&this.$data.__setActive(void 0)},"@keydown.space.stop.prevent"(){this.$data.__change(this.$data.__option)}})}function T3(r,e){e.bind(r,{"x-init"(){this.$data.__hasLabel=!0},":id"(){return this.$id("alpine-radio-label")}})}function A3(r,e){e.bind(r,{"x-init"(){this.$data.__hasDescription=!0},":id"(){return this.$id("alpine-radio-description")}})}function C3(r){r.directive("tabs",(e,t)=>{t.value?t.value==="list"?L3(e,r):t.value==="tab"?R3(e,r):t.value==="panels"?D3(e,r):t.value==="panel"&&O3(e,r):P3(e,r)}),r.magic("tab",e=>{let t=r.$data(e);return{get isSelected(){return t.__selectedIndex===t.__tabs.indexOf(t.__tabEl)},get isDisabled(){return t.__isDisabled}}}),r.magic("panel",e=>{let t=r.$data(e);return{get isSelected(){return t.__selectedIndex===t.__panels.indexOf(t.__panelEl)}}})}function P3(r,e){e.bind(r,{"x-modelable":"__selectedIndex","x-data"(){return{init(){queueMicrotask(()=>{let t=this.__selectedIndex||Number(e.bound(this.$el,"default-index",0)),i=this.__activeTabs(),n=(s,o,l)=>Math.min(Math.max(s,o),l);this.__selectedIndex=n(t,0,i.length-1),e.effect(()=>{this.__manualActivation=e.bound(this.$el,"manual",!1)})})},__tabs:[],__panels:[],__selectedIndex:null,__tabGroupEl:void 0,__manualActivation:!1,__addTab(t){this.__tabs.push(t)},__addPanel(t){this.__panels.push(t)},__selectTab(t){this.__selectedIndex=this.__tabs.indexOf(t)},__activeTabs(){return this.__tabs.filter(t=>!t.__disabled)}}}})}function L3(r,e){e.bind(r,{"x-init"(){this.$data.__tabGroupEl=this.$el}})}function R3(r,e){e.bind(r,{"x-init"(){this.$el.tagName.toLowerCase()==="button"&&!this.$el.hasAttribute("type")&&(this.$el.type="button")},"x-data"(){return{init(){this.__tabEl=this.$el,this.$data.__addTab(this.$el),this.__tabEl.__disabled=e.bound(this.$el,"disabled",!1),this.__isDisabled=this.__tabEl.__disabled},__tabEl:void 0,__isDisabled:!1}},"@click"(){this.$el.__disabled||(this.$data.__selectTab(this.$el),this.$el.focus())},"@keydown.enter.prevent.stop"(){this.__selectTab(this.$el)},"@keydown.space.prevent.stop"(){this.__selectTab(this.$el)},"@keydown.home.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).first()},"@keydown.page-up.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).first()},"@keydown.end.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).last()},"@keydown.page-down.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).last()},"@keydown.down.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).withWrapAround().next()},"@keydown.right.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).withWrapAround().next()},"@keydown.up.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).withWrapAround().prev()},"@keydown.left.prevent.stop"(){this.$focus.within(this.$data.__activeTabs()).withWrapAround().prev()},":tabindex"(){return this.$tab.isSelected?0:-1},"@focus"(){if(this.$data.__manualActivation)this.$el.focus();else{if(this.$el.__disabled)return;this.$data.__selectTab(this.$el),this.$el.focus()}}})}function D3(r,e){e.bind(r,{})}function O3(r,e){e.bind(r,{":tabindex"(){return this.$panel.isSelected?0:-1},"x-data"(){return{init(){this.__panelEl=this.$el,this.$data.__addPanel(this.$el)},__panelEl:void 0}},"x-show"(){return this.$panel.isSelected}})}function I3(r){i3(r),l3(r),f3(r),_3(r),S3(r),C3(r)}var N3=I3;/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hp="148",va={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xa={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},z3=0,S_=1,F3=2,Gx=1,k3=2,Jo=3,Ys=0,dn=1,po=2,Sc=3,os=0,Ha=1,M_=2,E_=3,T_=4,U3=5,za=100,B3=101,V3=102,A_=103,C_=104,G3=200,W3=201,H3=202,$3=203,Wx=204,Hx=205,X3=206,q3=207,Y3=208,j3=209,Z3=210,K3=0,J3=1,Q3=2,gd=3,eP=4,tP=5,iP=6,nP=7,$x=0,rP=1,sP=2,Ir=0,aP=1,oP=2,lP=3,cP=4,uP=5,Xx=300,Qa=301,eo=302,_d=303,vd=304,Lu=306,hl=1e3,Wn=1001,xd=1002,zi=1003,P_=1004,tf=1005,Ei=1006,hP=1007,fl=1008,js=1009,fP=1010,dP=1011,qx=1012,pP=1013,Ns=1014,zs=1015,dl=1016,mP=1017,gP=1018,$a=1020,_P=1021,vP=1022,Hn=1023,xP=1024,yP=1025,Vs=1026,to=1027,bP=1028,wP=1029,SP=1030,MP=1031,EP=1033,nf=33776,rf=33777,sf=33778,af=33779,L_=35840,R_=35841,D_=35842,O_=35843,TP=36196,I_=37492,N_=37496,z_=37808,F_=37809,k_=37810,U_=37811,B_=37812,V_=37813,G_=37814,W_=37815,H_=37816,$_=37817,X_=37818,q_=37819,Y_=37820,j_=37821,Z_=36492,Zs=3e3,Nt=3001,AP=3200,CP=3201,PP=0,LP=1,nr="srgb",pl="srgb-linear",of=7680,RP=519,K_=35044,J_="300 es",yd=1035;class ps{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,o=n.length;s<o;s++)n[s].call(this,e);e.target=null}}}const Si=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],lf=Math.PI/180,Q_=180/Math.PI;function Cl(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Si[r&255]+Si[r>>8&255]+Si[r>>16&255]+Si[r>>24&255]+"-"+Si[e&255]+Si[e>>8&255]+"-"+Si[e>>16&15|64]+Si[e>>24&255]+"-"+Si[t&63|128]+Si[t>>8&255]+"-"+Si[t>>16&255]+Si[t>>24&255]+Si[i&255]+Si[i>>8&255]+Si[i>>16&255]+Si[i>>24&255]).toLowerCase()}function Ti(r,e,t){return Math.max(e,Math.min(t,r))}function DP(r,e){return(r%e+e)%e}function cf(r,e,t){return(1-t)*r+t*e}function e0(r){return(r&r-1)===0&&r!==0}function bd(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Mc(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function on(r,e){switch(e.constructor){case Float32Array:return r;case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class Re{constructor(e=0,t=0){Re.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*n+e.x,this.y=s*n+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class fn{constructor(){fn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,o,l,u,h){const f=this.elements;return f[0]=e,f[1]=n,f[2]=l,f[3]=t,f[4]=s,f[5]=u,f[6]=i,f[7]=o,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],l=i[3],u=i[6],h=i[1],f=i[4],m=i[7],p=i[2],v=i[5],y=i[8],g=n[0],_=n[3],b=n[6],A=n[1],w=n[4],T=n[7],M=n[2],C=n[5],O=n[8];return s[0]=o*g+l*A+u*M,s[3]=o*_+l*w+u*C,s[6]=o*b+l*T+u*O,s[1]=h*g+f*A+m*M,s[4]=h*_+f*w+m*C,s[7]=h*b+f*T+m*O,s[2]=p*g+v*A+y*M,s[5]=p*_+v*w+y*C,s[8]=p*b+v*T+y*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8];return t*o*f-t*l*h-i*s*f+i*l*u+n*s*h-n*o*u}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8],m=f*o-l*h,p=l*u-f*s,v=h*s-o*u,y=t*m+i*p+n*v;if(y===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/y;return e[0]=m*g,e[1]=(n*h-f*i)*g,e[2]=(l*i-n*o)*g,e[3]=p*g,e[4]=(f*t-n*u)*g,e[5]=(n*s-l*t)*g,e[6]=v*g,e[7]=(i*u-h*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,o,l){const u=Math.cos(s),h=Math.sin(s);return this.set(i*u,i*h,-i*(u*o+h*l)+o+e,-n*h,n*u,-n*(-h*o+u*l)+l+t,0,0,1),this}scale(e,t){return this.premultiply(uf.makeScale(e,t)),this}rotate(e){return this.premultiply(uf.makeRotation(-e)),this}translate(e,t){return this.premultiply(uf.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uf=new fn;function Yx(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gs(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function qc(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}const hf={[nr]:{[pl]:Gs},[pl]:{[nr]:qc}},Ii={legacyMode:!0,get workingColorSpace(){return pl},set workingColorSpace(r){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(r,e,t){if(this.legacyMode||e===t||!e||!t)return r;if(hf[e]&&hf[e][t]!==void 0){const i=hf[e][t];return r.r=i(r.r),r.g=i(r.g),r.b=i(r.b),r}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(r,e){return this.convert(r,this.workingColorSpace,e)},toWorkingColorSpace:function(r,e){return this.convert(r,e,this.workingColorSpace)}},jx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ni={r:0,g:0,b:0},Un={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function ff(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}function Tc(r,e){return e.r=r.r,e.g=r.g,e.b=r.b,e}class Lt{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=nr){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ii.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=Ii.workingColorSpace){return this.r=e,this.g=t,this.b=i,Ii.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=Ii.workingColorSpace){if(e=DP(e,1),t=Ti(t,0,1),i=Ti(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=ff(o,s,e+1/3),this.g=ff(o,s,e),this.b=ff(o,s,e-1/3)}return Ii.toWorkingColorSpace(this,n),this}setStyle(e,t=nr){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=n[1],l=n[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Ii.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Ii.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l)){const u=parseFloat(s[1])/360,h=parseFloat(s[2])/100,f=parseFloat(s[3])/100;return i(s[4]),this.setHSL(u,h,f,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Ii.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Ii.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=nr){const i=jx[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=qc(e.r),this.g=qc(e.g),this.b=qc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=nr){return Ii.fromWorkingColorSpace(Tc(this,ni),e),Ti(ni.r*255,0,255)<<16^Ti(ni.g*255,0,255)<<8^Ti(ni.b*255,0,255)<<0}getHexString(e=nr){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ii.workingColorSpace){Ii.fromWorkingColorSpace(Tc(this,ni),t);const i=ni.r,n=ni.g,s=ni.b,o=Math.max(i,n,s),l=Math.min(i,n,s);let u,h;const f=(l+o)/2;if(l===o)u=0,h=0;else{const m=o-l;switch(h=f<=.5?m/(o+l):m/(2-o-l),o){case i:u=(n-s)/m+(n<s?6:0);break;case n:u=(s-i)/m+2;break;case s:u=(i-n)/m+4;break}u/=6}return e.h=u,e.s=h,e.l=f,e}getRGB(e,t=Ii.workingColorSpace){return Ii.fromWorkingColorSpace(Tc(this,ni),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=nr){return Ii.fromWorkingColorSpace(Tc(this,ni),e),e!==nr?`color(${e} ${ni.r} ${ni.g} ${ni.b})`:`rgb(${ni.r*255|0},${ni.g*255|0},${ni.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Un),Un.h+=e,Un.s+=t,Un.l+=i,this.setHSL(Un.h,Un.s,Un.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Ec);const i=cf(Un.h,Ec.h,t),n=cf(Un.s,Ec.s,t),s=cf(Un.l,Ec.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Lt.NAMES=jx;let ya;class Zx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ya===void 0&&(ya=ml("canvas")),ya.width=e.width,ya.height=e.height;const i=ya.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=ya}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ml("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let o=0;o<s.length;o++)s[o]=Gs(s[o]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Gs(t[i]/255)*255):t[i]=Gs(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Kx{constructor(e=null){this.isSource=!0,this.uuid=Cl(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let o=0,l=n.length;o<l;o++)n[o].isDataTexture?s.push(df(n[o].image)):s.push(df(n[o]))}else s=df(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function df(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Zx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let OP=0;class Ui extends ps{constructor(e=Ui.DEFAULT_IMAGE,t=Ui.DEFAULT_MAPPING,i=Wn,n=Wn,s=Ei,o=fl,l=Hn,u=js,h=Ui.DEFAULT_ANISOTROPY,f=Zs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:OP++}),this.uuid=Cl(),this.name="",this.source=new Kx(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=u,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new fn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Xx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case hl:e.x=e.x-Math.floor(e.x);break;case Wn:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case hl:e.y=e.y-Math.floor(e.y);break;case Wn:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Ui.DEFAULT_IMAGE=null;Ui.DEFAULT_MAPPING=Xx;Ui.DEFAULT_ANISOTROPY=1;class si{constructor(e=0,t=0,i=0,n=1){si.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*n+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*n+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*n+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*n+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const u=e.elements,h=u[0],f=u[4],m=u[8],p=u[1],v=u[5],y=u[9],g=u[2],_=u[6],b=u[10];if(Math.abs(f-p)<.01&&Math.abs(m-g)<.01&&Math.abs(y-_)<.01){if(Math.abs(f+p)<.1&&Math.abs(m+g)<.1&&Math.abs(y+_)<.1&&Math.abs(h+v+b-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(h+1)/2,T=(v+1)/2,M=(b+1)/2,C=(f+p)/4,O=(m+g)/4,S=(y+_)/4;return w>T&&w>M?w<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(w),n=C/i,s=O/i):T>M?T<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(T),i=C/n,s=S/n):M<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(M),i=O/s,n=S/s),this.set(i,n,s,t),this}let A=Math.sqrt((_-y)*(_-y)+(m-g)*(m-g)+(p-f)*(p-f));return Math.abs(A)<.001&&(A=1),this.x=(_-y)/A,this.y=(m-g)/A,this.z=(p-f)/A,this.w=Math.acos((h+v+b-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yn extends ps{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new si(0,0,e,t),this.scissorTest=!1,this.viewport=new si(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new Ui(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Ei,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Kx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Jx extends Ui{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zi,this.minFilter=zi,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class IP extends Ui{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=zi,this.minFilter=zi,this.wrapR=Wn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ks{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,o,l){let u=i[n+0],h=i[n+1],f=i[n+2],m=i[n+3];const p=s[o+0],v=s[o+1],y=s[o+2],g=s[o+3];if(l===0){e[t+0]=u,e[t+1]=h,e[t+2]=f,e[t+3]=m;return}if(l===1){e[t+0]=p,e[t+1]=v,e[t+2]=y,e[t+3]=g;return}if(m!==g||u!==p||h!==v||f!==y){let _=1-l;const b=u*p+h*v+f*y+m*g,A=b>=0?1:-1,w=1-b*b;if(w>Number.EPSILON){const M=Math.sqrt(w),C=Math.atan2(M,b*A);_=Math.sin(_*C)/M,l=Math.sin(l*C)/M}const T=l*A;if(u=u*_+p*T,h=h*_+v*T,f=f*_+y*T,m=m*_+g*T,_===1-l){const M=1/Math.sqrt(u*u+h*h+f*f+m*m);u*=M,h*=M,f*=M,m*=M}}e[t]=u,e[t+1]=h,e[t+2]=f,e[t+3]=m}static multiplyQuaternionsFlat(e,t,i,n,s,o){const l=i[n],u=i[n+1],h=i[n+2],f=i[n+3],m=s[o],p=s[o+1],v=s[o+2],y=s[o+3];return e[t]=l*y+f*m+u*v-h*p,e[t+1]=u*y+f*p+h*m-l*v,e[t+2]=h*y+f*v+l*p-u*m,e[t+3]=f*y-l*m-u*p-h*v,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,o=e._order,l=Math.cos,u=Math.sin,h=l(i/2),f=l(n/2),m=l(s/2),p=u(i/2),v=u(n/2),y=u(s/2);switch(o){case"XYZ":this._x=p*f*m+h*v*y,this._y=h*v*m-p*f*y,this._z=h*f*y+p*v*m,this._w=h*f*m-p*v*y;break;case"YXZ":this._x=p*f*m+h*v*y,this._y=h*v*m-p*f*y,this._z=h*f*y-p*v*m,this._w=h*f*m+p*v*y;break;case"ZXY":this._x=p*f*m-h*v*y,this._y=h*v*m+p*f*y,this._z=h*f*y+p*v*m,this._w=h*f*m-p*v*y;break;case"ZYX":this._x=p*f*m-h*v*y,this._y=h*v*m+p*f*y,this._z=h*f*y-p*v*m,this._w=h*f*m+p*v*y;break;case"YZX":this._x=p*f*m+h*v*y,this._y=h*v*m+p*f*y,this._z=h*f*y-p*v*m,this._w=h*f*m-p*v*y;break;case"XZY":this._x=p*f*m-h*v*y,this._y=h*v*m-p*f*y,this._z=h*f*y+p*v*m,this._w=h*f*m+p*v*y;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],o=t[1],l=t[5],u=t[9],h=t[2],f=t[6],m=t[10],p=i+l+m;if(p>0){const v=.5/Math.sqrt(p+1);this._w=.25/v,this._x=(f-u)*v,this._y=(s-h)*v,this._z=(o-n)*v}else if(i>l&&i>m){const v=2*Math.sqrt(1+i-l-m);this._w=(f-u)/v,this._x=.25*v,this._y=(n+o)/v,this._z=(s+h)/v}else if(l>m){const v=2*Math.sqrt(1+l-i-m);this._w=(s-h)/v,this._x=(n+o)/v,this._y=.25*v,this._z=(u+f)/v}else{const v=2*Math.sqrt(1+m-i-l);this._w=(o-n)/v,this._x=(s+h)/v,this._y=(u+f)/v,this._z=.25*v}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ti(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,o=e._w,l=t._x,u=t._y,h=t._z,f=t._w;return this._x=i*f+o*l+n*h-s*u,this._y=n*f+o*u+s*l-i*h,this._z=s*f+o*h+i*u-n*l,this._w=o*f-i*l-n*u-s*h,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,o=this._w;let l=o*e._w+i*e._x+n*e._y+s*e._z;if(l<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,l=-l):this.copy(e),l>=1)return this._w=o,this._x=i,this._y=n,this._z=s,this;const u=1-l*l;if(u<=Number.EPSILON){const v=1-t;return this._w=v*o+t*this._w,this._x=v*i+t*this._x,this._y=v*n+t*this._y,this._z=v*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const h=Math.sqrt(u),f=Math.atan2(h,l),m=Math.sin((1-t)*f)/h,p=Math.sin(t*f)/h;return this._w=o*m+this._w*p,this._x=i*m+this._x*p,this._y=n*m+this._y*p,this._z=s*m+this._z*p,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class W{constructor(e=0,t=0,i=0){W.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(t0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(t0.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,o=e.y,l=e.z,u=e.w,h=u*t+o*n-l*i,f=u*i+l*t-s*n,m=u*n+s*i-o*t,p=-s*t-o*i-l*n;return this.x=h*u+p*-s+f*-l-m*-o,this.y=f*u+p*-o+m*-s-h*-l,this.z=m*u+p*-l+h*-o-f*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,o=t.x,l=t.y,u=t.z;return this.x=n*u-s*l,this.y=s*o-i*u,this.z=i*l-n*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return pf.copy(this).projectOnVector(e),this.sub(pf)}reflect(e){return this.sub(pf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ti(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const pf=new W,t0=new Ks;class Pl{constructor(e=new W(1/0,1/0,1/0),t=new W(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,o=-1/0,l=-1/0;for(let u=0,h=e.length;u<h;u+=3){const f=e[u],m=e[u+1],p=e[u+2];f<t&&(t=f),m<i&&(i=m),p<n&&(n=p),f>s&&(s=f),m>o&&(o=m),p>l&&(l=p)}return this.min.set(t,i,n),this.max.set(s,o,l),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,o=-1/0,l=-1/0;for(let u=0,h=e.count;u<h;u++){const f=e.getX(u),m=e.getY(u),p=e.getZ(u);f<t&&(t=f),m<i&&(i=m),p<n&&(n=p),f>s&&(s=f),m>o&&(o=m),p>l&&(l=p)}return this.min.set(t,i,n),this.max.set(s,o,l),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Es.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let o=0,l=s.count;o<l;o++)Es.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Es)}else i.boundingBox===null&&i.computeBoundingBox(),mf.copy(i.boundingBox),mf.applyMatrix4(e.matrixWorld),this.union(mf);const n=e.children;for(let s=0,o=n.length;s<o;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Es),Es.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bo),Ac.subVectors(this.max,Bo),ba.subVectors(e.a,Bo),wa.subVectors(e.b,Bo),Sa.subVectors(e.c,Bo),Yr.subVectors(wa,ba),jr.subVectors(Sa,wa),Ts.subVectors(ba,Sa);let t=[0,-Yr.z,Yr.y,0,-jr.z,jr.y,0,-Ts.z,Ts.y,Yr.z,0,-Yr.x,jr.z,0,-jr.x,Ts.z,0,-Ts.x,-Yr.y,Yr.x,0,-jr.y,jr.x,0,-Ts.y,Ts.x,0];return!gf(t,ba,wa,Sa,Ac)||(t=[1,0,0,0,1,0,0,0,1],!gf(t,ba,wa,Sa,Ac))?!1:(Cc.crossVectors(Yr,jr),t=[Cc.x,Cc.y,Cc.z],gf(t,ba,wa,Sa,Ac))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Es.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Es).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Er[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Er[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Er[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Er[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Er[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Er[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Er[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Er[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Er),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Er=[new W,new W,new W,new W,new W,new W,new W,new W],Es=new W,mf=new Pl,ba=new W,wa=new W,Sa=new W,Yr=new W,jr=new W,Ts=new W,Bo=new W,Ac=new W,Cc=new W,As=new W;function gf(r,e,t,i,n){for(let s=0,o=r.length-3;s<=o;s+=3){As.fromArray(r,s);const l=n.x*Math.abs(As.x)+n.y*Math.abs(As.y)+n.z*Math.abs(As.z),u=e.dot(As),h=t.dot(As),f=i.dot(As);if(Math.max(-Math.max(u,h,f),Math.min(u,h,f))>l)return!1}return!0}const NP=new Pl,Vo=new W,_f=new W;class fp{constructor(e=new W,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):NP.setFromPoints(e).getCenter(i);let n=0;for(let s=0,o=e.length;s<o;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Vo.subVectors(e,this.center);const t=Vo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Vo,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Vo.copy(e.center).add(_f)),this.expandByPoint(Vo.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tr=new W,vf=new W,Pc=new W,Zr=new W,xf=new W,Lc=new W,yf=new W;class Qx{constructor(e=new W,t=new W(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tr.copy(this.direction).multiplyScalar(t).add(this.origin),Tr.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){vf.copy(e).add(t).multiplyScalar(.5),Pc.copy(t).sub(e).normalize(),Zr.copy(this.origin).sub(vf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pc),l=Zr.dot(this.direction),u=-Zr.dot(Pc),h=Zr.lengthSq(),f=Math.abs(1-o*o);let m,p,v,y;if(f>0)if(m=o*u-l,p=o*l-u,y=s*f,m>=0)if(p>=-y)if(p<=y){const g=1/f;m*=g,p*=g,v=m*(m+o*p+2*l)+p*(o*m+p+2*u)+h}else p=s,m=Math.max(0,-(o*p+l)),v=-m*m+p*(p+2*u)+h;else p=-s,m=Math.max(0,-(o*p+l)),v=-m*m+p*(p+2*u)+h;else p<=-y?(m=Math.max(0,-(-o*s+l)),p=m>0?-s:Math.min(Math.max(-s,-u),s),v=-m*m+p*(p+2*u)+h):p<=y?(m=0,p=Math.min(Math.max(-s,-u),s),v=p*(p+2*u)+h):(m=Math.max(0,-(o*s+l)),p=m>0?s:Math.min(Math.max(-s,-u),s),v=-m*m+p*(p+2*u)+h);else p=o>0?-s:s,m=Math.max(0,-(o*p+l)),v=-m*m+p*(p+2*u)+h;return i&&i.copy(this.direction).multiplyScalar(m).add(this.origin),n&&n.copy(Pc).multiplyScalar(p).add(vf),v}intersectSphere(e,t){Tr.subVectors(e.center,this.origin);const i=Tr.dot(this.direction),n=Tr.dot(Tr)-i*i,s=e.radius*e.radius;if(n>s)return null;const o=Math.sqrt(s-n),l=i-o,u=i+o;return l<0&&u<0?null:l<0?this.at(u,t):this.at(l,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,o,l,u;const h=1/this.direction.x,f=1/this.direction.y,m=1/this.direction.z,p=this.origin;return h>=0?(i=(e.min.x-p.x)*h,n=(e.max.x-p.x)*h):(i=(e.max.x-p.x)*h,n=(e.min.x-p.x)*h),f>=0?(s=(e.min.y-p.y)*f,o=(e.max.y-p.y)*f):(s=(e.max.y-p.y)*f,o=(e.min.y-p.y)*f),i>o||s>n||((s>i||isNaN(i))&&(i=s),(o<n||isNaN(n))&&(n=o),m>=0?(l=(e.min.z-p.z)*m,u=(e.max.z-p.z)*m):(l=(e.max.z-p.z)*m,u=(e.min.z-p.z)*m),i>u||l>n)||((l>i||i!==i)&&(i=l),(u<n||n!==n)&&(n=u),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Tr)!==null}intersectTriangle(e,t,i,n,s){xf.subVectors(t,e),Lc.subVectors(i,e),yf.crossVectors(xf,Lc);let o=this.direction.dot(yf),l;if(o>0){if(n)return null;l=1}else if(o<0)l=-1,o=-o;else return null;Zr.subVectors(this.origin,e);const u=l*this.direction.dot(Lc.crossVectors(Zr,Lc));if(u<0)return null;const h=l*this.direction.dot(xf.cross(Zr));if(h<0||u+h>o)return null;const f=-l*Zr.dot(yf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ai{constructor(){ai.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,o,l,u,h,f,m,p,v,y,g,_){const b=this.elements;return b[0]=e,b[4]=t,b[8]=i,b[12]=n,b[1]=s,b[5]=o,b[9]=l,b[13]=u,b[2]=h,b[6]=f,b[10]=m,b[14]=p,b[3]=v,b[7]=y,b[11]=g,b[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ai().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/Ma.setFromMatrixColumn(e,0).length(),s=1/Ma.setFromMatrixColumn(e,1).length(),o=1/Ma.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,o=Math.cos(i),l=Math.sin(i),u=Math.cos(n),h=Math.sin(n),f=Math.cos(s),m=Math.sin(s);if(e.order==="XYZ"){const p=o*f,v=o*m,y=l*f,g=l*m;t[0]=u*f,t[4]=-u*m,t[8]=h,t[1]=v+y*h,t[5]=p-g*h,t[9]=-l*u,t[2]=g-p*h,t[6]=y+v*h,t[10]=o*u}else if(e.order==="YXZ"){const p=u*f,v=u*m,y=h*f,g=h*m;t[0]=p+g*l,t[4]=y*l-v,t[8]=o*h,t[1]=o*m,t[5]=o*f,t[9]=-l,t[2]=v*l-y,t[6]=g+p*l,t[10]=o*u}else if(e.order==="ZXY"){const p=u*f,v=u*m,y=h*f,g=h*m;t[0]=p-g*l,t[4]=-o*m,t[8]=y+v*l,t[1]=v+y*l,t[5]=o*f,t[9]=g-p*l,t[2]=-o*h,t[6]=l,t[10]=o*u}else if(e.order==="ZYX"){const p=o*f,v=o*m,y=l*f,g=l*m;t[0]=u*f,t[4]=y*h-v,t[8]=p*h+g,t[1]=u*m,t[5]=g*h+p,t[9]=v*h-y,t[2]=-h,t[6]=l*u,t[10]=o*u}else if(e.order==="YZX"){const p=o*u,v=o*h,y=l*u,g=l*h;t[0]=u*f,t[4]=g-p*m,t[8]=y*m+v,t[1]=m,t[5]=o*f,t[9]=-l*f,t[2]=-h*f,t[6]=v*m+y,t[10]=p-g*m}else if(e.order==="XZY"){const p=o*u,v=o*h,y=l*u,g=l*h;t[0]=u*f,t[4]=-m,t[8]=h*f,t[1]=p*m+g,t[5]=o*f,t[9]=v*m-y,t[2]=y*m-v,t[6]=l*f,t[10]=g*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zP,e,FP)}lookAt(e,t,i){const n=this.elements;return ln.subVectors(e,t),ln.lengthSq()===0&&(ln.z=1),ln.normalize(),Kr.crossVectors(i,ln),Kr.lengthSq()===0&&(Math.abs(i.z)===1?ln.x+=1e-4:ln.z+=1e-4,ln.normalize(),Kr.crossVectors(i,ln)),Kr.normalize(),Rc.crossVectors(ln,Kr),n[0]=Kr.x,n[4]=Rc.x,n[8]=ln.x,n[1]=Kr.y,n[5]=Rc.y,n[9]=ln.y,n[2]=Kr.z,n[6]=Rc.z,n[10]=ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,o=i[0],l=i[4],u=i[8],h=i[12],f=i[1],m=i[5],p=i[9],v=i[13],y=i[2],g=i[6],_=i[10],b=i[14],A=i[3],w=i[7],T=i[11],M=i[15],C=n[0],O=n[4],S=n[8],L=n[12],k=n[1],Y=n[5],re=n[9],G=n[13],V=n[2],K=n[6],se=n[10],ae=n[14],te=n[3],Se=n[7],xe=n[11],ee=n[15];return s[0]=o*C+l*k+u*V+h*te,s[4]=o*O+l*Y+u*K+h*Se,s[8]=o*S+l*re+u*se+h*xe,s[12]=o*L+l*G+u*ae+h*ee,s[1]=f*C+m*k+p*V+v*te,s[5]=f*O+m*Y+p*K+v*Se,s[9]=f*S+m*re+p*se+v*xe,s[13]=f*L+m*G+p*ae+v*ee,s[2]=y*C+g*k+_*V+b*te,s[6]=y*O+g*Y+_*K+b*Se,s[10]=y*S+g*re+_*se+b*xe,s[14]=y*L+g*G+_*ae+b*ee,s[3]=A*C+w*k+T*V+M*te,s[7]=A*O+w*Y+T*K+M*Se,s[11]=A*S+w*re+T*se+M*xe,s[15]=A*L+w*G+T*ae+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],o=e[1],l=e[5],u=e[9],h=e[13],f=e[2],m=e[6],p=e[10],v=e[14],y=e[3],g=e[7],_=e[11],b=e[15];return y*(+s*u*m-n*h*m-s*l*p+i*h*p+n*l*v-i*u*v)+g*(+t*u*v-t*h*p+s*o*p-n*o*v+n*h*f-s*u*f)+_*(+t*h*m-t*l*v-s*o*m+i*o*v+s*l*f-i*h*f)+b*(-n*l*f-t*u*m+t*l*p+n*o*m-i*o*p+i*u*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],o=e[4],l=e[5],u=e[6],h=e[7],f=e[8],m=e[9],p=e[10],v=e[11],y=e[12],g=e[13],_=e[14],b=e[15],A=m*_*h-g*p*h+g*u*v-l*_*v-m*u*b+l*p*b,w=y*p*h-f*_*h-y*u*v+o*_*v+f*u*b-o*p*b,T=f*g*h-y*m*h+y*l*v-o*g*v-f*l*b+o*m*b,M=y*m*u-f*g*u-y*l*p+o*g*p+f*l*_-o*m*_,C=t*A+i*w+n*T+s*M;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/C;return e[0]=A*O,e[1]=(g*p*s-m*_*s-g*n*v+i*_*v+m*n*b-i*p*b)*O,e[2]=(l*_*s-g*u*s+g*n*h-i*_*h-l*n*b+i*u*b)*O,e[3]=(m*u*s-l*p*s-m*n*h+i*p*h+l*n*v-i*u*v)*O,e[4]=w*O,e[5]=(f*_*s-y*p*s+y*n*v-t*_*v-f*n*b+t*p*b)*O,e[6]=(y*u*s-o*_*s-y*n*h+t*_*h+o*n*b-t*u*b)*O,e[7]=(o*p*s-f*u*s+f*n*h-t*p*h-o*n*v+t*u*v)*O,e[8]=T*O,e[9]=(y*m*s-f*g*s-y*i*v+t*g*v+f*i*b-t*m*b)*O,e[10]=(o*g*s-y*l*s+y*i*h-t*g*h-o*i*b+t*l*b)*O,e[11]=(f*l*s-o*m*s-f*i*h+t*m*h+o*i*v-t*l*v)*O,e[12]=M*O,e[13]=(f*g*n-y*m*n+y*i*p-t*g*p-f*i*_+t*m*_)*O,e[14]=(y*l*n-o*g*n-y*i*u+t*g*u+o*i*_-t*l*_)*O,e[15]=(o*m*n-f*l*n+f*i*u-t*m*u-o*i*p+t*l*p)*O,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,o=e.x,l=e.y,u=e.z,h=s*o,f=s*l;return this.set(h*o+i,h*l-n*u,h*u+n*l,0,h*l+n*u,f*l+i,f*u-n*o,0,h*u-n*l,f*u+n*o,s*u*u+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,o){return this.set(1,i,s,0,e,1,o,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,o=t._y,l=t._z,u=t._w,h=s+s,f=o+o,m=l+l,p=s*h,v=s*f,y=s*m,g=o*f,_=o*m,b=l*m,A=u*h,w=u*f,T=u*m,M=i.x,C=i.y,O=i.z;return n[0]=(1-(g+b))*M,n[1]=(v+T)*M,n[2]=(y-w)*M,n[3]=0,n[4]=(v-T)*C,n[5]=(1-(p+b))*C,n[6]=(_+A)*C,n[7]=0,n[8]=(y+w)*O,n[9]=(_-A)*O,n[10]=(1-(p+g))*O,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=Ma.set(n[0],n[1],n[2]).length();const o=Ma.set(n[4],n[5],n[6]).length(),l=Ma.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],Bn.copy(this);const h=1/s,f=1/o,m=1/l;return Bn.elements[0]*=h,Bn.elements[1]*=h,Bn.elements[2]*=h,Bn.elements[4]*=f,Bn.elements[5]*=f,Bn.elements[6]*=f,Bn.elements[8]*=m,Bn.elements[9]*=m,Bn.elements[10]*=m,t.setFromRotationMatrix(Bn),i.x=s,i.y=o,i.z=l,this}makePerspective(e,t,i,n,s,o){const l=this.elements,u=2*s/(t-e),h=2*s/(i-n),f=(t+e)/(t-e),m=(i+n)/(i-n),p=-(o+s)/(o-s),v=-2*o*s/(o-s);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=m,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,s,o){const l=this.elements,u=1/(t-e),h=1/(i-n),f=1/(o-s),m=(t+e)*u,p=(i+n)*h,v=(o+s)*f;return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-m,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=-2*f,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ma=new W,Bn=new ai,zP=new W(0,0,0),FP=new W(1,1,1),Kr=new W,Rc=new W,ln=new W,i0=new ai,n0=new Ks;class Ll{constructor(e=0,t=0,i=0,n=Ll.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],o=n[4],l=n[8],u=n[1],h=n[5],f=n[9],m=n[2],p=n[6],v=n[10];switch(t){case"XYZ":this._y=Math.asin(Ti(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,v),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ti(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,v),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-m,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ti(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,v),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Ti(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,v),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Ti(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-m,s)):(this._x=0,this._y=Math.atan2(l,v));break;case"XZY":this._z=Math.asin(-Ti(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(l,s)):(this._x=Math.atan2(-f,v),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return i0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(i0,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return n0.setFromEuler(this),this.setFromQuaternion(n0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Ll.DefaultOrder="XYZ";Ll.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class dp{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let kP=0;const r0=new W,Ea=new Ks,Ar=new ai,Dc=new W,Go=new W,UP=new W,BP=new Ks,s0=new W(1,0,0),a0=new W(0,1,0),o0=new W(0,0,1),VP={type:"added"},l0={type:"removed"};class oi extends ps{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:kP++}),this.uuid=Cl(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=oi.DefaultUp.clone();const e=new W,t=new Ll,i=new Ks,n=new W(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ai},normalMatrix:{value:new fn}}),this.matrix=new ai,this.matrixWorld=new ai,this.matrixAutoUpdate=oi.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=oi.DefaultMatrixWorldAutoUpdate,this.layers=new dp,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ea.setFromAxisAngle(e,t),this.quaternion.multiply(Ea),this}rotateOnWorldAxis(e,t){return Ea.setFromAxisAngle(e,t),this.quaternion.premultiply(Ea),this}rotateX(e){return this.rotateOnAxis(s0,e)}rotateY(e){return this.rotateOnAxis(a0,e)}rotateZ(e){return this.rotateOnAxis(o0,e)}translateOnAxis(e,t){return r0.copy(e).applyQuaternion(this.quaternion),this.position.add(r0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(s0,e)}translateY(e){return this.translateOnAxis(a0,e)}translateZ(e){return this.translateOnAxis(o0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ar.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Dc.copy(e):Dc.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Go.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ar.lookAt(Go,Dc,this.up):Ar.lookAt(Dc,Go,this.up),this.quaternion.setFromRotationMatrix(Ar),n&&(Ar.extractRotation(n.matrixWorld),Ea.setFromRotationMatrix(Ar),this.quaternion.premultiply(Ea.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(VP)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(l0)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(l0)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Ar.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ar.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ar),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,e,UP),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Go,BP,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,o=n.length;s<o;s++){const l=n[s];l.matrixWorldAutoUpdate===!0&&l.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(l,u){return l[u.uuid]===void 0&&(l[u.uuid]=u.toJSON(e)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const u=l.shapes;if(Array.isArray(u))for(let h=0,f=u.length;h<f;h++){const m=u[h];s(e.shapes,m)}else s(e.shapes,u)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let u=0,h=this.material.length;u<h;u++)l.push(s(e.materials,this.material[u]));n.material=l}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let l=0;l<this.children.length;l++)n.children.push(this.children[l].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let l=0;l<this.animations.length;l++){const u=this.animations[l];n.animations.push(s(e.animations,u))}}if(t){const l=o(e.geometries),u=o(e.materials),h=o(e.textures),f=o(e.images),m=o(e.shapes),p=o(e.skeletons),v=o(e.animations),y=o(e.nodes);l.length>0&&(i.geometries=l),u.length>0&&(i.materials=u),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),m.length>0&&(i.shapes=m),p.length>0&&(i.skeletons=p),v.length>0&&(i.animations=v),y.length>0&&(i.nodes=y)}return i.object=n,i;function o(l){const u=[];for(const h in l){const f=l[h];delete f.metadata,u.push(f)}return u}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}oi.DefaultUp=new W(0,1,0);oi.DefaultMatrixAutoUpdate=!0;oi.DefaultMatrixWorldAutoUpdate=!0;const Vn=new W,Cr=new W,bf=new W,Pr=new W,Ta=new W,Aa=new W,c0=new W,wf=new W,Sf=new W,Mf=new W;class Dr{constructor(e=new W,t=new W,i=new W){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Vn.subVectors(e,t),n.cross(Vn);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Vn.subVectors(n,t),Cr.subVectors(i,t),bf.subVectors(e,t);const o=Vn.dot(Vn),l=Vn.dot(Cr),u=Vn.dot(bf),h=Cr.dot(Cr),f=Cr.dot(bf),m=o*h-l*l;if(m===0)return s.set(-2,-1,-1);const p=1/m,v=(h*u-l*f)*p,y=(o*f-l*u)*p;return s.set(1-v-y,y,v)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,Pr),Pr.x>=0&&Pr.y>=0&&Pr.x+Pr.y<=1}static getUV(e,t,i,n,s,o,l,u){return this.getBarycoord(e,t,i,n,Pr),u.set(0,0),u.addScaledVector(s,Pr.x),u.addScaledVector(o,Pr.y),u.addScaledVector(l,Pr.z),u}static isFrontFacing(e,t,i,n){return Vn.subVectors(i,t),Cr.subVectors(e,t),Vn.cross(Cr).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),Cr.subVectors(this.a,this.b),Vn.cross(Cr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dr.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dr.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return Dr.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return Dr.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dr.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let o,l;Ta.subVectors(n,i),Aa.subVectors(s,i),wf.subVectors(e,i);const u=Ta.dot(wf),h=Aa.dot(wf);if(u<=0&&h<=0)return t.copy(i);Sf.subVectors(e,n);const f=Ta.dot(Sf),m=Aa.dot(Sf);if(f>=0&&m<=f)return t.copy(n);const p=u*m-f*h;if(p<=0&&u>=0&&f<=0)return o=u/(u-f),t.copy(i).addScaledVector(Ta,o);Mf.subVectors(e,s);const v=Ta.dot(Mf),y=Aa.dot(Mf);if(y>=0&&v<=y)return t.copy(s);const g=v*h-u*y;if(g<=0&&h>=0&&y<=0)return l=h/(h-y),t.copy(i).addScaledVector(Aa,l);const _=f*y-v*m;if(_<=0&&m-f>=0&&v-y>=0)return c0.subVectors(s,n),l=(m-f)/(m-f+(v-y)),t.copy(n).addScaledVector(c0,l);const b=1/(_+g+p);return o=g*b,l=p*b,t.copy(i).addScaledVector(Ta,o).addScaledVector(Aa,l)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let GP=0;class Ru extends ps{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GP++}),this.uuid=Cl(),this.name="",this.type="Material",this.blending=Ha,this.side=Ys,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Wx,this.blendDst=Hx,this.blendEquation=za,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=gd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=RP,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=of,this.stencilZFail=of,this.stencilZPass=of,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ha&&(i.blending=this.blending),this.side!==Ys&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const o=[];for(const l in s){const u=s[l];delete u.metadata,o.push(u)}return o}if(t){const s=n(e.textures),o=n(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Rl extends Ru{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Lt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=$x,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new W,Oc=new Re;class cr{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=K_,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Oc.fromBufferAttribute(this,t),Oc.applyMatrix3(e),this.setXY(t,Oc.x,Oc.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mc(t,this.array)),t}setX(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mc(t,this.array)),t}setY(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mc(t,this.array)),t}setZ(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mc(t,this.array)),t}setW(e,t){return this.normalized&&(t=on(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),n=on(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=on(t,this.array),i=on(i,this.array),n=on(n,this.array),s=on(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==K_&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class ey extends cr{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class ty extends cr{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Bi extends cr{constructor(e,t,i){super(new Float32Array(e),t,i)}}let WP=0;const Tn=new ai,Ef=new oi,Ca=new W,cn=new Pl,Wo=new Pl,fi=new W;class dr extends ps{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WP++}),this.uuid=Cl(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Yx(e)?ty:ey)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new fn().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Tn.makeRotationFromQuaternion(e),this.applyMatrix4(Tn),this}rotateX(e){return Tn.makeRotationX(e),this.applyMatrix4(Tn),this}rotateY(e){return Tn.makeRotationY(e),this.applyMatrix4(Tn),this}rotateZ(e){return Tn.makeRotationZ(e),this.applyMatrix4(Tn),this}translate(e,t,i){return Tn.makeTranslation(e,t,i),this.applyMatrix4(Tn),this}scale(e,t,i){return Tn.makeScale(e,t,i),this.applyMatrix4(Tn),this}lookAt(e){return Ef.lookAt(e),Ef.updateMatrix(),this.applyMatrix4(Ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ca).negate(),this.translate(Ca.x,Ca.y,Ca.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Bi(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new W(-1/0,-1/0,-1/0),new W(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(fi.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(fi),fi.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(fi)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new fp);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new W,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const l=t[s];Wo.setFromBufferAttribute(l),this.morphTargetsRelative?(fi.addVectors(cn.min,Wo.min),cn.expandByPoint(fi),fi.addVectors(cn.max,Wo.max),cn.expandByPoint(fi)):(cn.expandByPoint(Wo.min),cn.expandByPoint(Wo.max))}cn.getCenter(i);let n=0;for(let s=0,o=e.count;s<o;s++)fi.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(fi));if(t)for(let s=0,o=t.length;s<o;s++){const l=t[s],u=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)fi.fromBufferAttribute(l,h),u&&(Ca.fromBufferAttribute(e,h),fi.add(Ca)),n=Math.max(n,i.distanceToSquared(fi))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,o=t.uv.array,l=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new cr(new Float32Array(4*l),4));const u=this.getAttribute("tangent").array,h=[],f=[];for(let k=0;k<l;k++)h[k]=new W,f[k]=new W;const m=new W,p=new W,v=new W,y=new Re,g=new Re,_=new Re,b=new W,A=new W;function w(k,Y,re){m.fromArray(n,k*3),p.fromArray(n,Y*3),v.fromArray(n,re*3),y.fromArray(o,k*2),g.fromArray(o,Y*2),_.fromArray(o,re*2),p.sub(m),v.sub(m),g.sub(y),_.sub(y);const G=1/(g.x*_.y-_.x*g.y);!isFinite(G)||(b.copy(p).multiplyScalar(_.y).addScaledVector(v,-g.y).multiplyScalar(G),A.copy(v).multiplyScalar(g.x).addScaledVector(p,-_.x).multiplyScalar(G),h[k].add(b),h[Y].add(b),h[re].add(b),f[k].add(A),f[Y].add(A),f[re].add(A))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let k=0,Y=T.length;k<Y;++k){const re=T[k],G=re.start,V=re.count;for(let K=G,se=G+V;K<se;K+=3)w(i[K+0],i[K+1],i[K+2])}const M=new W,C=new W,O=new W,S=new W;function L(k){O.fromArray(s,k*3),S.copy(O);const Y=h[k];M.copy(Y),M.sub(O.multiplyScalar(O.dot(Y))).normalize(),C.crossVectors(S,Y);const G=C.dot(f[k])<0?-1:1;u[k*4]=M.x,u[k*4+1]=M.y,u[k*4+2]=M.z,u[k*4+3]=G}for(let k=0,Y=T.length;k<Y;++k){const re=T[k],G=re.start,V=re.count;for(let K=G,se=G+V;K<se;K+=3)L(i[K+0]),L(i[K+1]),L(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new cr(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let p=0,v=i.count;p<v;p++)i.setXYZ(p,0,0,0);const n=new W,s=new W,o=new W,l=new W,u=new W,h=new W,f=new W,m=new W;if(e)for(let p=0,v=e.count;p<v;p+=3){const y=e.getX(p+0),g=e.getX(p+1),_=e.getX(p+2);n.fromBufferAttribute(t,y),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,_),f.subVectors(o,s),m.subVectors(n,s),f.cross(m),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,g),h.fromBufferAttribute(i,_),l.add(f),u.add(f),h.add(f),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(g,u.x,u.y,u.z),i.setXYZ(_,h.x,h.y,h.z)}else for(let p=0,v=t.count;p<v;p+=3)n.fromBufferAttribute(t,p+0),s.fromBufferAttribute(t,p+1),o.fromBufferAttribute(t,p+2),f.subVectors(o,s),m.subVectors(n,s),f.cross(m),i.setXYZ(p+0,f.x,f.y,f.z),i.setXYZ(p+1,f.x,f.y,f.z),i.setXYZ(p+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)fi.fromBufferAttribute(e,t),fi.normalize(),e.setXYZ(t,fi.x,fi.y,fi.z)}toNonIndexed(){function e(l,u){const h=l.array,f=l.itemSize,m=l.normalized,p=new h.constructor(u.length*f);let v=0,y=0;for(let g=0,_=u.length;g<_;g++){l.isInterleavedBufferAttribute?v=u[g]*l.data.stride+l.offset:v=u[g]*f;for(let b=0;b<f;b++)p[y++]=h[v++]}return new cr(p,f,m)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new dr,i=this.index.array,n=this.attributes;for(const l in n){const u=n[l],h=e(u,i);t.setAttribute(l,h)}const s=this.morphAttributes;for(const l in s){const u=[],h=s[l];for(let f=0,m=h.length;f<m;f++){const p=h[f],v=e(p,i);u.push(v)}t.morphAttributes[l]=u}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(e[h]=u[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const u in i){const h=i[u];e.data.attributes[u]=h.toJSON(e.data)}const n={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],f=[];for(let m=0,p=h.length;m<p;m++){const v=h[m];f.push(v.toJSON(e.data))}f.length>0&&(n[u]=f,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const l=this.boundingSphere;return l!==null&&(e.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const h in n){const f=n[h];this.setAttribute(h,f.clone(t))}const s=e.morphAttributes;for(const h in s){const f=[],m=s[h];for(let p=0,v=m.length;p<v;p++)f.push(m[p].clone(t));this.morphAttributes[h]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let h=0,f=o.length;h<f;h++){const m=o[h];this.addGroup(m.start,m.count,m.materialIndex)}const l=e.boundingBox;l!==null&&(this.boundingBox=l.clone());const u=e.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const u0=new ai,Pa=new Qx,Tf=new fp,Ho=new W,$o=new W,Xo=new W,Af=new W,Ic=new W,Nc=new Re,zc=new Re,Fc=new Re,Cf=new W,kc=new W;class Fi extends oi{constructor(e=new dr,t=new Rl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=n.length;s<o;s++){const l=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const l=this.morphTargetInfluences;if(s&&l){Ic.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const f=l[u],m=s[u];f!==0&&(Af.fromBufferAttribute(m,e),o?Ic.addScaledVector(Af,f):Ic.addScaledVector(Af.sub(t),f))}t.add(Ic)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Tf.copy(i.boundingSphere),Tf.applyMatrix4(s),e.ray.intersectsSphere(Tf)===!1)||(u0.copy(s).invert(),Pa.copy(e.ray).applyMatrix4(u0),i.boundingBox!==null&&Pa.intersectsBox(i.boundingBox)===!1))return;let o;const l=i.index,u=i.attributes.position,h=i.attributes.uv,f=i.attributes.uv2,m=i.groups,p=i.drawRange;if(l!==null)if(Array.isArray(n))for(let v=0,y=m.length;v<y;v++){const g=m[v],_=n[g.materialIndex],b=Math.max(g.start,p.start),A=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let w=b,T=A;w<T;w+=3){const M=l.getX(w),C=l.getX(w+1),O=l.getX(w+2);o=Uc(this,_,e,Pa,h,f,M,C,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const v=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let g=v,_=y;g<_;g+=3){const b=l.getX(g),A=l.getX(g+1),w=l.getX(g+2);o=Uc(this,n,e,Pa,h,f,b,A,w),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}else if(u!==void 0)if(Array.isArray(n))for(let v=0,y=m.length;v<y;v++){const g=m[v],_=n[g.materialIndex],b=Math.max(g.start,p.start),A=Math.min(u.count,Math.min(g.start+g.count,p.start+p.count));for(let w=b,T=A;w<T;w+=3){const M=w,C=w+1,O=w+2;o=Uc(this,_,e,Pa,h,f,M,C,O),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=g.materialIndex,t.push(o))}}else{const v=Math.max(0,p.start),y=Math.min(u.count,p.start+p.count);for(let g=v,_=y;g<_;g+=3){const b=g,A=g+1,w=g+2;o=Uc(this,n,e,Pa,h,f,b,A,w),o&&(o.faceIndex=Math.floor(g/3),t.push(o))}}}}function HP(r,e,t,i,n,s,o,l){let u;if(e.side===dn?u=i.intersectTriangle(o,s,n,!0,l):u=i.intersectTriangle(n,s,o,e.side===Ys,l),u===null)return null;kc.copy(l),kc.applyMatrix4(r.matrixWorld);const h=t.ray.origin.distanceTo(kc);return h<t.near||h>t.far?null:{distance:h,point:kc.clone(),object:r}}function Uc(r,e,t,i,n,s,o,l,u){r.getVertexPosition(o,Ho),r.getVertexPosition(l,$o),r.getVertexPosition(u,Xo);const h=HP(r,e,t,i,Ho,$o,Xo,Cf);if(h){n&&(Nc.fromBufferAttribute(n,o),zc.fromBufferAttribute(n,l),Fc.fromBufferAttribute(n,u),h.uv=Dr.getUV(Cf,Ho,$o,Xo,Nc,zc,Fc,new Re)),s&&(Nc.fromBufferAttribute(s,o),zc.fromBufferAttribute(s,l),Fc.fromBufferAttribute(s,u),h.uv2=Dr.getUV(Cf,Ho,$o,Xo,Nc,zc,Fc,new Re));const f={a:o,b:l,c:u,normal:new W,materialIndex:0};Dr.getNormal(Ho,$o,Xo,f.normal),h.face=f}return h}class mo extends dr{constructor(e=1,t=1,i=1,n=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:o};const l=this;n=Math.floor(n),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],f=[],m=[];let p=0,v=0;y("z","y","x",-1,-1,i,t,e,o,s,0),y("z","y","x",1,-1,i,t,-e,o,s,1),y("x","z","y",1,1,e,i,t,n,o,2),y("x","z","y",1,-1,e,i,-t,n,o,3),y("x","y","z",1,-1,e,t,i,n,s,4),y("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(u),this.setAttribute("position",new Bi(h,3)),this.setAttribute("normal",new Bi(f,3)),this.setAttribute("uv",new Bi(m,2));function y(g,_,b,A,w,T,M,C,O,S,L){const k=T/O,Y=M/S,re=T/2,G=M/2,V=C/2,K=O+1,se=S+1;let ae=0,te=0;const Se=new W;for(let xe=0;xe<se;xe++){const ee=xe*Y-G;for(let ne=0;ne<K;ne++){const ye=ne*k-re;Se[g]=ye*A,Se[_]=ee*w,Se[b]=V,h.push(Se.x,Se.y,Se.z),Se[g]=0,Se[_]=0,Se[b]=C>0?1:-1,f.push(Se.x,Se.y,Se.z),m.push(ne/O),m.push(1-xe/S),ae+=1}}for(let xe=0;xe<S;xe++)for(let ee=0;ee<O;ee++){const ne=p+ee+K*xe,ye=p+ee+K*(xe+1),J=p+(ee+1)+K*(xe+1),de=p+(ee+1)+K*xe;u.push(ne,ye,de),u.push(ye,J,de),te+=6}l.addGroup(v,te,L),v+=te,p+=ae}}static fromJSON(e){return new mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function io(r){const e={};for(const t in r){e[t]={};for(const i in r[t]){const n=r[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function Ni(r){const e={};for(let t=0;t<r.length;t++){const i=io(r[t]);for(const n in i)e[n]=i[n]}return e}function $P(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function iy(r){return r.getRenderTarget()===null&&r.outputEncoding===Nt?nr:pl}const ny={clone:io,merge:Ni};var XP=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,qP=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gn extends Ru{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=XP,this.fragmentShader=qP,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=io(e.uniforms),this.uniformsGroups=$P(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const o=this.uniforms[n].value;o&&o.isTexture?t.uniforms[n]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[n]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[n]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[n]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[n]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[n]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[n]={type:"m4",value:o.toArray()}:t.uniforms[n]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class ry extends oi{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ai,this.projectionMatrix=new ai,this.projectionMatrixInverse=new ai}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class qi extends ry{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Q_*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(lf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Q_*2*Math.atan(Math.tan(lf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(lf*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*n/u,t-=o.offsetY*i/h,n*=o.width/u,i*=o.height/h}const l=this.filmOffset;l!==0&&(s+=e*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const La=-90,Ra=1;class YP extends oi{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new qi(La,Ra,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new qi(La,Ra,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const o=new qi(La,Ra,e,t);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const l=new qi(La,Ra,e,t);l.layers=this.layers,l.up.set(0,0,1),l.lookAt(0,-1,0),this.add(l);const u=new qi(La,Ra,e,t);u.layers=this.layers,u.up.set(0,1,0),u.lookAt(0,0,1),this.add(u);const h=new qi(La,Ra,e,t);h.layers=this.layers,h.up.set(0,1,0),h.lookAt(0,0,-1),this.add(h)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,o,l,u,h]=this.children,f=e.getRenderTarget(),m=e.toneMapping,p=e.xr.enabled;e.toneMapping=Ir,e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,l),e.setRenderTarget(i,4),e.render(t,u),i.texture.generateMipmaps=v,e.setRenderTarget(i,5),e.render(t,h),e.setRenderTarget(f),e.toneMapping=m,e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class sy extends Ui{constructor(e,t,i,n,s,o,l,u,h,f){e=e!==void 0?e:[],t=t!==void 0?t:Qa,super(e,t,i,n,s,o,l,u,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jP extends Yn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new sy(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new mo(5,5,5),s=new gn({name:"CubemapFromEquirect",uniforms:io(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:dn,blending:os});s.uniforms.tEquirect.value=t;const o=new Fi(n,s),l=t.minFilter;return t.minFilter===fl&&(t.minFilter=Ei),new YP(1,10,this).update(e,o),t.minFilter=l,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,n);e.setRenderTarget(s)}}const Pf=new W,ZP=new W,KP=new fn;class es{constructor(e=new W(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Pf.subVectors(i,t).cross(ZP.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Pf),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||KP.getNormalMatrix(e),n=this.coplanarPoint(Pf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Da=new fp,Bc=new W;class ay{constructor(e=new es,t=new es,i=new es,n=new es,s=new es,o=new es){this.planes=[e,t,i,n,s,o]}set(e,t,i,n,s,o){const l=this.planes;return l[0].copy(e),l[1].copy(t),l[2].copy(i),l[3].copy(n),l[4].copy(s),l[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],o=i[2],l=i[3],u=i[4],h=i[5],f=i[6],m=i[7],p=i[8],v=i[9],y=i[10],g=i[11],_=i[12],b=i[13],A=i[14],w=i[15];return t[0].setComponents(l-n,m-u,g-p,w-_).normalize(),t[1].setComponents(l+n,m+u,g+p,w+_).normalize(),t[2].setComponents(l+s,m+h,g+v,w+b).normalize(),t[3].setComponents(l-s,m-h,g-v,w-b).normalize(),t[4].setComponents(l-o,m-f,g-y,w-A).normalize(),t[5].setComponents(l+o,m+f,g+y,w+A).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Da.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Da)}intersectsSprite(e){return Da.center.set(0,0,0),Da.radius=.7071067811865476,Da.applyMatrix4(e.matrixWorld),this.intersectsSphere(Da)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Bc.x=n.normal.x>0?e.max.x:e.min.x,Bc.y=n.normal.y>0?e.max.y:e.min.y,Bc.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function oy(){let r=null,e=!1,t=null,i=null;function n(s,o){t(s,o),i=r.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=r.requestAnimationFrame(n),e=!0)},stop:function(){r.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function JP(r,e){const t=e.isWebGL2,i=new WeakMap;function n(h,f){const m=h.array,p=h.usage,v=r.createBuffer();r.bindBuffer(f,v),r.bufferData(f,m,p),h.onUploadCallback();let y;if(m instanceof Float32Array)y=5126;else if(m instanceof Uint16Array)if(h.isFloat16BufferAttribute)if(t)y=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else y=5123;else if(m instanceof Int16Array)y=5122;else if(m instanceof Uint32Array)y=5125;else if(m instanceof Int32Array)y=5124;else if(m instanceof Int8Array)y=5120;else if(m instanceof Uint8Array)y=5121;else if(m instanceof Uint8ClampedArray)y=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version}}function s(h,f,m){const p=f.array,v=f.updateRange;r.bindBuffer(m,h),v.count===-1?r.bufferSubData(m,0,p):(t?r.bufferSubData(m,v.offset*p.BYTES_PER_ELEMENT,p,v.offset,v.count):r.bufferSubData(m,v.offset*p.BYTES_PER_ELEMENT,p.subarray(v.offset,v.offset+v.count)),v.count=-1),f.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),i.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const f=i.get(h);f&&(r.deleteBuffer(f.buffer),i.delete(h))}function u(h,f){if(h.isGLBufferAttribute){const p=i.get(h);(!p||p.version<h.version)&&i.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}h.isInterleavedBufferAttribute&&(h=h.data);const m=i.get(h);m===void 0?i.set(h,n(h,f)):m.version<h.version&&(s(m.buffer,h,f),m.version=h.version)}return{get:o,remove:l,update:u}}class Qs extends dr{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,o=t/2,l=Math.floor(i),u=Math.floor(n),h=l+1,f=u+1,m=e/l,p=t/u,v=[],y=[],g=[],_=[];for(let b=0;b<f;b++){const A=b*p-o;for(let w=0;w<h;w++){const T=w*m-s;y.push(T,-A,0),g.push(0,0,1),_.push(w/l),_.push(1-b/u)}}for(let b=0;b<u;b++)for(let A=0;A<l;A++){const w=A+h*b,T=A+h*(b+1),M=A+1+h*(b+1),C=A+1+h*b;v.push(w,T,C),v.push(T,M,C)}this.setIndex(v),this.setAttribute("position",new Bi(y,3)),this.setAttribute("normal",new Bi(g,3)),this.setAttribute("uv",new Bi(_,2))}static fromJSON(e){return new Qs(e.width,e.height,e.widthSegments,e.heightSegments)}}var QP=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,eL=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tL=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,iL=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nL=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,rL=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sL="vec3 transformed = vec3( position );",aL=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oL=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,lL=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,cL=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,uL=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,hL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fL=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dL=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pL=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gL=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,_L=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,vL=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,xL=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,yL=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,bL=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wL=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,SL=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ML=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,EL="gl_FragColor = linearToOutputTexel( gl_FragColor );",TL=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,CL=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PL=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,LL=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,RL=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,DL=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OL=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IL=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,NL=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zL=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,FL=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,kL=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UL=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BL=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,VL=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,GL=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,WL=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,HL=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,$L=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XL=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qL=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,YL=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,jL=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ZL=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,KL=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,JL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,QL=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,tR=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,iR=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nR=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,sR=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,aR=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,oR=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lR=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cR=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,uR=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,hR=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,fR=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,dR=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,pR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mR=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gR=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_R=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,vR=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,xR=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,yR=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,bR=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wR=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,SR=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,MR=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ER=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TR=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,AR=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,CR=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PR=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LR=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,RR=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,DR=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,OR=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,IR=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NR=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,zR=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FR=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,kR=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,UR=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BR=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VR=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,GR=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,WR=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,HR=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,$R=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,XR=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,qR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,YR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,jR=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,ZR=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const KR=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,JR=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,QR=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,eD=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,tD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iD=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,nD=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,rD=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,sD=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,aD=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,oD=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,lD=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cD=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,uD=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hD=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,fD=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dD=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pD=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mD=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,gD=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_D=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,vD=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,xD=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yD=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bD=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wD=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SD=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,MD=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ED=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,TD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,AD=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CD=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,PD=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,LD=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,st={alphamap_fragment:QP,alphamap_pars_fragment:eL,alphatest_fragment:tL,alphatest_pars_fragment:iL,aomap_fragment:nL,aomap_pars_fragment:rL,begin_vertex:sL,beginnormal_vertex:aL,bsdfs:oL,iridescence_fragment:lL,bumpmap_pars_fragment:cL,clipping_planes_fragment:uL,clipping_planes_pars_fragment:hL,clipping_planes_pars_vertex:fL,clipping_planes_vertex:dL,color_fragment:pL,color_pars_fragment:mL,color_pars_vertex:gL,color_vertex:_L,common:vL,cube_uv_reflection_fragment:xL,defaultnormal_vertex:yL,displacementmap_pars_vertex:bL,displacementmap_vertex:wL,emissivemap_fragment:SL,emissivemap_pars_fragment:ML,encodings_fragment:EL,encodings_pars_fragment:TL,envmap_fragment:AL,envmap_common_pars_fragment:CL,envmap_pars_fragment:PL,envmap_pars_vertex:LL,envmap_physical_pars_fragment:GL,envmap_vertex:RL,fog_vertex:DL,fog_pars_vertex:OL,fog_fragment:IL,fog_pars_fragment:NL,gradientmap_pars_fragment:zL,lightmap_fragment:FL,lightmap_pars_fragment:kL,lights_lambert_fragment:UL,lights_lambert_pars_fragment:BL,lights_pars_begin:VL,lights_toon_fragment:WL,lights_toon_pars_fragment:HL,lights_phong_fragment:$L,lights_phong_pars_fragment:XL,lights_physical_fragment:qL,lights_physical_pars_fragment:YL,lights_fragment_begin:jL,lights_fragment_maps:ZL,lights_fragment_end:KL,logdepthbuf_fragment:JL,logdepthbuf_pars_fragment:QL,logdepthbuf_pars_vertex:eR,logdepthbuf_vertex:tR,map_fragment:iR,map_pars_fragment:nR,map_particle_fragment:rR,map_particle_pars_fragment:sR,metalnessmap_fragment:aR,metalnessmap_pars_fragment:oR,morphcolor_vertex:lR,morphnormal_vertex:cR,morphtarget_pars_vertex:uR,morphtarget_vertex:hR,normal_fragment_begin:fR,normal_fragment_maps:dR,normal_pars_fragment:pR,normal_pars_vertex:mR,normal_vertex:gR,normalmap_pars_fragment:_R,clearcoat_normal_fragment_begin:vR,clearcoat_normal_fragment_maps:xR,clearcoat_pars_fragment:yR,iridescence_pars_fragment:bR,output_fragment:wR,packing:SR,premultiplied_alpha_fragment:MR,project_vertex:ER,dithering_fragment:TR,dithering_pars_fragment:AR,roughnessmap_fragment:CR,roughnessmap_pars_fragment:PR,shadowmap_pars_fragment:LR,shadowmap_pars_vertex:RR,shadowmap_vertex:DR,shadowmask_pars_fragment:OR,skinbase_vertex:IR,skinning_pars_vertex:NR,skinning_vertex:zR,skinnormal_vertex:FR,specularmap_fragment:kR,specularmap_pars_fragment:UR,tonemapping_fragment:BR,tonemapping_pars_fragment:VR,transmission_fragment:GR,transmission_pars_fragment:WR,uv_pars_fragment:HR,uv_pars_vertex:$R,uv_vertex:XR,uv2_pars_fragment:qR,uv2_pars_vertex:YR,uv2_vertex:jR,worldpos_vertex:ZR,background_vert:KR,background_frag:JR,backgroundCube_vert:QR,backgroundCube_frag:eD,cube_vert:tD,cube_frag:iD,depth_vert:nD,depth_frag:rD,distanceRGBA_vert:sD,distanceRGBA_frag:aD,equirect_vert:oD,equirect_frag:lD,linedashed_vert:cD,linedashed_frag:uD,meshbasic_vert:hD,meshbasic_frag:fD,meshlambert_vert:dD,meshlambert_frag:pD,meshmatcap_vert:mD,meshmatcap_frag:gD,meshnormal_vert:_D,meshnormal_frag:vD,meshphong_vert:xD,meshphong_frag:yD,meshphysical_vert:bD,meshphysical_frag:wD,meshtoon_vert:SD,meshtoon_frag:MD,points_vert:ED,points_frag:TD,shadow_vert:AD,shadow_frag:CD,sprite_vert:PD,sprite_frag:LD},De={common:{diffuse:{value:new Lt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new fn},uv2Transform:{value:new fn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Lt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Lt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}},sprite:{diffuse:{value:new Lt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new fn}}},rr={basic:{uniforms:Ni([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.fog]),vertexShader:st.meshbasic_vert,fragmentShader:st.meshbasic_frag},lambert:{uniforms:Ni([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:st.meshlambert_vert,fragmentShader:st.meshlambert_frag},phong:{uniforms:Ni([De.common,De.specularmap,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.fog,De.lights,{emissive:{value:new Lt(0)},specular:{value:new Lt(1118481)},shininess:{value:30}}]),vertexShader:st.meshphong_vert,fragmentShader:st.meshphong_frag},standard:{uniforms:Ni([De.common,De.envmap,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.roughnessmap,De.metalnessmap,De.fog,De.lights,{emissive:{value:new Lt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag},toon:{uniforms:Ni([De.common,De.aomap,De.lightmap,De.emissivemap,De.bumpmap,De.normalmap,De.displacementmap,De.gradientmap,De.fog,De.lights,{emissive:{value:new Lt(0)}}]),vertexShader:st.meshtoon_vert,fragmentShader:st.meshtoon_frag},matcap:{uniforms:Ni([De.common,De.bumpmap,De.normalmap,De.displacementmap,De.fog,{matcap:{value:null}}]),vertexShader:st.meshmatcap_vert,fragmentShader:st.meshmatcap_frag},points:{uniforms:Ni([De.points,De.fog]),vertexShader:st.points_vert,fragmentShader:st.points_frag},dashed:{uniforms:Ni([De.common,De.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:st.linedashed_vert,fragmentShader:st.linedashed_frag},depth:{uniforms:Ni([De.common,De.displacementmap]),vertexShader:st.depth_vert,fragmentShader:st.depth_frag},normal:{uniforms:Ni([De.common,De.bumpmap,De.normalmap,De.displacementmap,{opacity:{value:1}}]),vertexShader:st.meshnormal_vert,fragmentShader:st.meshnormal_frag},sprite:{uniforms:Ni([De.sprite,De.fog]),vertexShader:st.sprite_vert,fragmentShader:st.sprite_frag},background:{uniforms:{uvTransform:{value:new fn},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:st.background_vert,fragmentShader:st.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:st.backgroundCube_vert,fragmentShader:st.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:st.cube_vert,fragmentShader:st.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:st.equirect_vert,fragmentShader:st.equirect_frag},distanceRGBA:{uniforms:Ni([De.common,De.displacementmap,{referencePosition:{value:new W},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:st.distanceRGBA_vert,fragmentShader:st.distanceRGBA_frag},shadow:{uniforms:Ni([De.lights,De.fog,{color:{value:new Lt(0)},opacity:{value:1}}]),vertexShader:st.shadow_vert,fragmentShader:st.shadow_frag}};rr.physical={uniforms:Ni([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Re(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Lt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Lt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Lt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:st.meshphysical_vert,fragmentShader:st.meshphysical_frag};const Vc={r:0,b:0,g:0};function RD(r,e,t,i,n,s,o){const l=new Lt(0);let u=s===!0?0:1,h,f,m=null,p=0,v=null;function y(_,b){let A=!1,w=b.isScene===!0?b.background:null;w&&w.isTexture&&(w=(b.backgroundBlurriness>0?t:e).get(w));const T=r.xr,M=T.getSession&&T.getSession();M&&M.environmentBlendMode==="additive"&&(w=null),w===null?g(l,u):w&&w.isColor&&(g(w,1),A=!0),(r.autoClear||A)&&r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Lu)?(f===void 0&&(f=new Fi(new mo(1,1,1),new gn({name:"BackgroundCubeMaterial",uniforms:io(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:dn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(C,O,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(f)),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.toneMapped=w.encoding!==Nt,(m!==w||p!==w.version||v!==r.toneMapping)&&(f.material.needsUpdate=!0,m=w,p=w.version,v=r.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(h===void 0&&(h=new Fi(new Qs(2,2),new gn({name:"BackgroundMaterial",uniforms:io(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:Ys,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(h)),h.material.uniforms.t2D.value=w,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=w.encoding!==Nt,w.matrixAutoUpdate===!0&&w.updateMatrix(),h.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||p!==w.version||v!==r.toneMapping)&&(h.material.needsUpdate=!0,m=w,p=w.version,v=r.toneMapping),h.layers.enableAll(),_.unshift(h,h.geometry,h.material,0,0,null))}function g(_,b){_.getRGB(Vc,iy(r)),i.buffers.color.setClear(Vc.r,Vc.g,Vc.b,b,o)}return{getClearColor:function(){return l},setClearColor:function(_,b=1){l.set(_),u=b,g(l,u)},getClearAlpha:function(){return u},setClearAlpha:function(_){u=_,g(l,u)},render:y}}function DD(r,e,t,i){const n=r.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,l={},u=_(null);let h=u,f=!1;function m(V,K,se,ae,te){let Se=!1;if(o){const xe=g(ae,se,K);h!==xe&&(h=xe,v(h.object)),Se=b(V,ae,se,te),Se&&A(V,ae,se,te)}else{const xe=K.wireframe===!0;(h.geometry!==ae.id||h.program!==se.id||h.wireframe!==xe)&&(h.geometry=ae.id,h.program=se.id,h.wireframe=xe,Se=!0)}te!==null&&t.update(te,34963),(Se||f)&&(f=!1,S(V,K,se,ae),te!==null&&r.bindBuffer(34963,t.get(te).buffer))}function p(){return i.isWebGL2?r.createVertexArray():s.createVertexArrayOES()}function v(V){return i.isWebGL2?r.bindVertexArray(V):s.bindVertexArrayOES(V)}function y(V){return i.isWebGL2?r.deleteVertexArray(V):s.deleteVertexArrayOES(V)}function g(V,K,se){const ae=se.wireframe===!0;let te=l[V.id];te===void 0&&(te={},l[V.id]=te);let Se=te[K.id];Se===void 0&&(Se={},te[K.id]=Se);let xe=Se[ae];return xe===void 0&&(xe=_(p()),Se[ae]=xe),xe}function _(V){const K=[],se=[],ae=[];for(let te=0;te<n;te++)K[te]=0,se[te]=0,ae[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:se,attributeDivisors:ae,object:V,attributes:{},index:null}}function b(V,K,se,ae){const te=h.attributes,Se=K.attributes;let xe=0;const ee=se.getAttributes();for(const ne in ee)if(ee[ne].location>=0){const J=te[ne];let de=Se[ne];if(de===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(de=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(de=V.instanceColor)),J===void 0||J.attribute!==de||de&&J.data!==de.data)return!0;xe++}return h.attributesNum!==xe||h.index!==ae}function A(V,K,se,ae){const te={},Se=K.attributes;let xe=0;const ee=se.getAttributes();for(const ne in ee)if(ee[ne].location>=0){let J=Se[ne];J===void 0&&(ne==="instanceMatrix"&&V.instanceMatrix&&(J=V.instanceMatrix),ne==="instanceColor"&&V.instanceColor&&(J=V.instanceColor));const de={};de.attribute=J,J&&J.data&&(de.data=J.data),te[ne]=de,xe++}h.attributes=te,h.attributesNum=xe,h.index=ae}function w(){const V=h.newAttributes;for(let K=0,se=V.length;K<se;K++)V[K]=0}function T(V){M(V,0)}function M(V,K){const se=h.newAttributes,ae=h.enabledAttributes,te=h.attributeDivisors;se[V]=1,ae[V]===0&&(r.enableVertexAttribArray(V),ae[V]=1),te[V]!==K&&((i.isWebGL2?r:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](V,K),te[V]=K)}function C(){const V=h.newAttributes,K=h.enabledAttributes;for(let se=0,ae=K.length;se<ae;se++)K[se]!==V[se]&&(r.disableVertexAttribArray(se),K[se]=0)}function O(V,K,se,ae,te,Se){i.isWebGL2===!0&&(se===5124||se===5125)?r.vertexAttribIPointer(V,K,se,te,Se):r.vertexAttribPointer(V,K,se,ae,te,Se)}function S(V,K,se,ae){if(i.isWebGL2===!1&&(V.isInstancedMesh||ae.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;w();const te=ae.attributes,Se=se.getAttributes(),xe=K.defaultAttributeValues;for(const ee in Se){const ne=Se[ee];if(ne.location>=0){let ye=te[ee];if(ye===void 0&&(ee==="instanceMatrix"&&V.instanceMatrix&&(ye=V.instanceMatrix),ee==="instanceColor"&&V.instanceColor&&(ye=V.instanceColor)),ye!==void 0){const J=ye.normalized,de=ye.itemSize,j=t.get(ye);if(j===void 0)continue;const Fe=j.buffer,Te=j.type,Ae=j.bytesPerElement;if(ye.isInterleavedBufferAttribute){const Ee=ye.data,We=Ee.stride,Pe=ye.offset;if(Ee.isInstancedInterleavedBuffer){for(let Ne=0;Ne<ne.locationSize;Ne++)M(ne.location+Ne,Ee.meshPerAttribute);V.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=Ee.meshPerAttribute*Ee.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)T(ne.location+Ne);r.bindBuffer(34962,Fe);for(let Ne=0;Ne<ne.locationSize;Ne++)O(ne.location+Ne,de/ne.locationSize,Te,J,We*Ae,(Pe+de/ne.locationSize*Ne)*Ae)}else{if(ye.isInstancedBufferAttribute){for(let Ee=0;Ee<ne.locationSize;Ee++)M(ne.location+Ee,ye.meshPerAttribute);V.isInstancedMesh!==!0&&ae._maxInstanceCount===void 0&&(ae._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ee=0;Ee<ne.locationSize;Ee++)T(ne.location+Ee);r.bindBuffer(34962,Fe);for(let Ee=0;Ee<ne.locationSize;Ee++)O(ne.location+Ee,de/ne.locationSize,Te,J,de*Ae,de/ne.locationSize*Ee*Ae)}}else if(xe!==void 0){const J=xe[ee];if(J!==void 0)switch(J.length){case 2:r.vertexAttrib2fv(ne.location,J);break;case 3:r.vertexAttrib3fv(ne.location,J);break;case 4:r.vertexAttrib4fv(ne.location,J);break;default:r.vertexAttrib1fv(ne.location,J)}}}}C()}function L(){re();for(const V in l){const K=l[V];for(const se in K){const ae=K[se];for(const te in ae)y(ae[te].object),delete ae[te];delete K[se]}delete l[V]}}function k(V){if(l[V.id]===void 0)return;const K=l[V.id];for(const se in K){const ae=K[se];for(const te in ae)y(ae[te].object),delete ae[te];delete K[se]}delete l[V.id]}function Y(V){for(const K in l){const se=l[K];if(se[V.id]===void 0)continue;const ae=se[V.id];for(const te in ae)y(ae[te].object),delete ae[te];delete se[V.id]}}function re(){G(),f=!0,h!==u&&(h=u,v(h.object))}function G(){u.geometry=null,u.program=null,u.wireframe=!1}return{setup:m,reset:re,resetDefaultState:G,dispose:L,releaseStatesOfGeometry:k,releaseStatesOfProgram:Y,initAttributes:w,enableAttribute:T,disableUnusedAttributes:C}}function OD(r,e,t,i){const n=i.isWebGL2;let s;function o(h){s=h}function l(h,f){r.drawArrays(s,h,f),t.update(f,s,1)}function u(h,f,m){if(m===0)return;let p,v;if(n)p=r,v="drawArraysInstanced";else if(p=e.get("ANGLE_instanced_arrays"),v="drawArraysInstancedANGLE",p===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[v](s,h,f,m),t.update(f,s,m)}this.setMode=o,this.render=l,this.renderInstances=u}function ID(r,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(O){if(O==="highp"){if(r.getShaderPrecisionFormat(35633,36338).precision>0&&r.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";O="mediump"}return O==="mediump"&&r.getShaderPrecisionFormat(35633,36337).precision>0&&r.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&r instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&r instanceof WebGL2ComputeRenderingContext;let l=t.precision!==void 0?t.precision:"highp";const u=s(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=o||e.has("WEBGL_draw_buffers"),f=t.logarithmicDepthBuffer===!0,m=r.getParameter(34930),p=r.getParameter(35660),v=r.getParameter(3379),y=r.getParameter(34076),g=r.getParameter(34921),_=r.getParameter(36347),b=r.getParameter(36348),A=r.getParameter(36349),w=p>0,T=o||e.has("OES_texture_float"),M=w&&T,C=o?r.getParameter(36183):0;return{isWebGL2:o,drawBuffers:h,getMaxAnisotropy:n,getMaxPrecision:s,precision:l,logarithmicDepthBuffer:f,maxTextures:m,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:y,maxAttributes:g,maxVertexUniforms:_,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:w,floatFragmentTextures:T,floatVertexTextures:M,maxSamples:C}}function ND(r){const e=this;let t=null,i=0,n=!1,s=!1;const o=new es,l=new fn,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p,v){const y=m.length!==0||p||i!==0||n;return n=p,t=f(m,v,0),i=m.length,y},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1,h()},this.setState=function(m,p,v){const y=m.clippingPlanes,g=m.clipIntersection,_=m.clipShadows,b=r.get(m);if(!n||y===null||y.length===0||s&&!_)s?f(null):h();else{const A=s?0:i,w=A*4;let T=b.clippingState||null;u.value=T,T=f(y,p,w,v);for(let M=0;M!==w;++M)T[M]=t[M];b.clippingState=T,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=A}};function h(){u.value!==t&&(u.value=t,u.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(m,p,v,y){const g=m!==null?m.length:0;let _=null;if(g!==0){if(_=u.value,y!==!0||_===null){const b=v+g*4,A=p.matrixWorldInverse;l.getNormalMatrix(A),(_===null||_.length<b)&&(_=new Float32Array(b));for(let w=0,T=v;w!==g;++w,T+=4)o.copy(m[w]).applyMatrix4(A,l),o.normal.toArray(_,T),_[T+3]=o.constant}u.value=_,u.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,_}}function zD(r){let e=new WeakMap;function t(o,l){return l===_d?o.mapping=Qa:l===vd&&(o.mapping=eo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const l=o.mapping;if(l===_d||l===vd)if(e.has(o)){const u=e.get(o).texture;return t(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new jP(u.height/2);return h.fromEquirectangularTexture(r,o),e.set(o,h),o.addEventListener("dispose",n),t(h.texture,o.mapping)}else return null}}return o}function n(o){const l=o.target;l.removeEventListener("dispose",n);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class pp extends ry{constructor(e=-1,t=1,i=1,n=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,o=i+e,l=n+t,u=n-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,l-=f*this.view.offsetY,u=l-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,l,u,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Fa=4,h0=[.125,.215,.35,.446,.526,.582],Os=20,Lf=new pp,f0=new Lt;let Rf=null;const Rs=(1+Math.sqrt(5))/2,Oa=1/Rs,d0=[new W(1,1,1),new W(-1,1,1),new W(1,1,-1),new W(-1,1,-1),new W(0,Rs,Oa),new W(0,Rs,-Oa),new W(Oa,0,Rs),new W(-Oa,0,Rs),new W(Rs,Oa,0),new W(-Rs,Oa,0)];class p0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Rf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=_0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=g0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Rf),e.scissorTest=!1,Gc(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qa||e.mapping===eo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:dl,format:Hn,encoding:Zs,depthBuffer:!1},n=m0(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=m0(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=FD(s)),this._blurMaterial=kD(s,e,t)}return n}_compileMaterial(e){const t=new Fi(this._lodPlanes[0],e);this._renderer.compile(t,Lf)}_sceneToCubeUV(e,t,i,n){const l=new qi(90,1,t,i),u=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,m=f.autoClear,p=f.toneMapping;f.getClearColor(f0),f.toneMapping=Ir,f.autoClear=!1;const v=new Rl({name:"PMREM.Background",side:dn,depthWrite:!1,depthTest:!1}),y=new Fi(new mo,v);let g=!1;const _=e.background;_?_.isColor&&(v.color.copy(_),e.background=null,g=!0):(v.color.copy(f0),g=!0);for(let b=0;b<6;b++){const A=b%3;A===0?(l.up.set(0,u[b],0),l.lookAt(h[b],0,0)):A===1?(l.up.set(0,0,u[b]),l.lookAt(0,h[b],0)):(l.up.set(0,u[b],0),l.lookAt(0,0,h[b]));const w=this._cubeSize;Gc(n,A*w,b>2?w:0,w,w),f.setRenderTarget(n),g&&f.render(y,l),f.render(e,l)}y.geometry.dispose(),y.material.dispose(),f.toneMapping=p,f.autoClear=m,e.background=_}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===Qa||e.mapping===eo;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=_0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=g0());const s=n?this._cubemapMaterial:this._equirectMaterial,o=new Fi(this._lodPlanes[0],s),l=s.uniforms;l.envMap.value=e;const u=this._cubeSize;Gc(t,0,0,3*u,2*u),i.setRenderTarget(t),i.render(o,Lf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),o=d0[(n-1)%d0.length];this._blur(e,n-1,n,s,o)}t.autoClear=i}_blur(e,t,i,n,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,n,"latitudinal",s),this._halfBlur(o,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,o,l){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,m=new Fi(this._lodPlanes[n],h),p=h.uniforms,v=this._sizeLods[i]-1,y=isFinite(s)?Math.PI/(2*v):2*Math.PI/(2*Os-1),g=s/y,_=isFinite(s)?1+Math.floor(f*g):Os;_>Os&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Os}`);const b=[];let A=0;for(let O=0;O<Os;++O){const S=O/g,L=Math.exp(-S*S/2);b.push(L),O===0?A+=L:O<_&&(A+=2*L)}for(let O=0;O<b.length;O++)b[O]=b[O]/A;p.envMap.value=e.texture,p.samples.value=_,p.weights.value=b,p.latitudinal.value=o==="latitudinal",l&&(p.poleAxis.value=l);const{_lodMax:w}=this;p.dTheta.value=y,p.mipInt.value=w-i;const T=this._sizeLods[n],M=3*T*(n>w-Fa?n-w+Fa:0),C=4*(this._cubeSize-T);Gc(t,M,C,3*T,2*T),u.setRenderTarget(t),u.render(m,Lf)}}function FD(r){const e=[],t=[],i=[];let n=r;const s=r-Fa+1+h0.length;for(let o=0;o<s;o++){const l=Math.pow(2,n);t.push(l);let u=1/l;o>r-Fa?u=h0[o-r+Fa-1]:o===0&&(u=0),i.push(u);const h=1/(l-2),f=-h,m=1+h,p=[f,f,m,f,m,m,f,f,m,m,f,m],v=6,y=6,g=3,_=2,b=1,A=new Float32Array(g*y*v),w=new Float32Array(_*y*v),T=new Float32Array(b*y*v);for(let C=0;C<v;C++){const O=C%3*2/3-1,S=C>2?0:-1,L=[O,S,0,O+2/3,S,0,O+2/3,S+1,0,O,S,0,O+2/3,S+1,0,O,S+1,0];A.set(L,g*y*C),w.set(p,_*y*C);const k=[C,C,C,C,C,C];T.set(k,b*y*C)}const M=new dr;M.setAttribute("position",new cr(A,g)),M.setAttribute("uv",new cr(w,_)),M.setAttribute("faceIndex",new cr(T,b)),e.push(M),n>Fa&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function m0(r,e,t){const i=new Yn(r,e,t);return i.texture.mapping=Lu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Gc(r,e,t,i,n){r.viewport.set(e,t,i,n),r.scissor.set(e,t,i,n)}function kD(r,e,t){const i=new Float32Array(Os),n=new W(0,1,0);return new gn({name:"SphericalGaussianBlur",defines:{n:Os,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function g0(){return new gn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function _0(){return new gn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:mp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:os,depthTest:!1,depthWrite:!1})}function mp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function UD(r){let e=new WeakMap,t=null;function i(l){if(l&&l.isTexture){const u=l.mapping,h=u===_d||u===vd,f=u===Qa||u===eo;if(h||f)if(l.isRenderTargetTexture&&l.needsPMREMUpdate===!0){l.needsPMREMUpdate=!1;let m=e.get(l);return t===null&&(t=new p0(r)),m=h?t.fromEquirectangular(l,m):t.fromCubemap(l,m),e.set(l,m),m.texture}else{if(e.has(l))return e.get(l).texture;{const m=l.image;if(h&&m&&m.height>0||f&&m&&n(m)){t===null&&(t=new p0(r));const p=h?t.fromEquirectangular(l):t.fromCubemap(l);return e.set(l,p),l.addEventListener("dispose",s),p.texture}else return null}}}return l}function n(l){let u=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&u++;return u===h}function s(l){const u=l.target;u.removeEventListener("dispose",s);const h=e.get(u);h!==void 0&&(e.delete(u),h.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function BD(r){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=r.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function VD(r,e,t,i){const n={},s=new WeakMap;function o(m){const p=m.target;p.index!==null&&e.remove(p.index);for(const y in p.attributes)e.remove(p.attributes[y]);p.removeEventListener("dispose",o),delete n[p.id];const v=s.get(p);v&&(e.remove(v),s.delete(p)),i.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function l(m,p){return n[p.id]===!0||(p.addEventListener("dispose",o),n[p.id]=!0,t.memory.geometries++),p}function u(m){const p=m.attributes;for(const y in p)e.update(p[y],34962);const v=m.morphAttributes;for(const y in v){const g=v[y];for(let _=0,b=g.length;_<b;_++)e.update(g[_],34962)}}function h(m){const p=[],v=m.index,y=m.attributes.position;let g=0;if(v!==null){const A=v.array;g=v.version;for(let w=0,T=A.length;w<T;w+=3){const M=A[w+0],C=A[w+1],O=A[w+2];p.push(M,C,C,O,O,M)}}else{const A=y.array;g=y.version;for(let w=0,T=A.length/3-1;w<T;w+=3){const M=w+0,C=w+1,O=w+2;p.push(M,C,C,O,O,M)}}const _=new(Yx(p)?ty:ey)(p,1);_.version=g;const b=s.get(m);b&&e.remove(b),s.set(m,_)}function f(m){const p=s.get(m);if(p){const v=m.index;v!==null&&p.version<v.version&&h(m)}else h(m);return s.get(m)}return{get:l,update:u,getWireframeAttribute:f}}function GD(r,e,t,i){const n=i.isWebGL2;let s;function o(p){s=p}let l,u;function h(p){l=p.type,u=p.bytesPerElement}function f(p,v){r.drawElements(s,v,l,p*u),t.update(v,s,1)}function m(p,v,y){if(y===0)return;let g,_;if(n)g=r,_="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),_="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[_](s,v,l,p*u,y),t.update(v,s,y)}this.setMode=o,this.setIndex=h,this.render=f,this.renderInstances=m}function WD(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,l){switch(t.calls++,o){case 4:t.triangles+=l*(s/3);break;case 1:t.lines+=l*(s/2);break;case 3:t.lines+=l*(s-1);break;case 2:t.lines+=l*s;break;case 0:t.points+=l*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function HD(r,e){return r[0]-e[0]}function $D(r,e){return Math.abs(e[1])-Math.abs(r[1])}function XD(r,e,t){const i={},n=new Float32Array(8),s=new WeakMap,o=new si,l=[];for(let h=0;h<8;h++)l[h]=[h,0];function u(h,f,m,p){const v=h.morphTargetInfluences;if(e.isWebGL2===!0){const g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,_=g!==void 0?g.length:0;let b=s.get(f);if(b===void 0||b.count!==_){let se=function(){V.dispose(),s.delete(f),f.removeEventListener("dispose",se)};var y=se;b!==void 0&&b.texture.dispose();const T=f.morphAttributes.position!==void 0,M=f.morphAttributes.normal!==void 0,C=f.morphAttributes.color!==void 0,O=f.morphAttributes.position||[],S=f.morphAttributes.normal||[],L=f.morphAttributes.color||[];let k=0;T===!0&&(k=1),M===!0&&(k=2),C===!0&&(k=3);let Y=f.attributes.position.count*k,re=1;Y>e.maxTextureSize&&(re=Math.ceil(Y/e.maxTextureSize),Y=e.maxTextureSize);const G=new Float32Array(Y*re*4*_),V=new Jx(G,Y,re,_);V.type=zs,V.needsUpdate=!0;const K=k*4;for(let ae=0;ae<_;ae++){const te=O[ae],Se=S[ae],xe=L[ae],ee=Y*re*4*ae;for(let ne=0;ne<te.count;ne++){const ye=ne*K;T===!0&&(o.fromBufferAttribute(te,ne),G[ee+ye+0]=o.x,G[ee+ye+1]=o.y,G[ee+ye+2]=o.z,G[ee+ye+3]=0),M===!0&&(o.fromBufferAttribute(Se,ne),G[ee+ye+4]=o.x,G[ee+ye+5]=o.y,G[ee+ye+6]=o.z,G[ee+ye+7]=0),C===!0&&(o.fromBufferAttribute(xe,ne),G[ee+ye+8]=o.x,G[ee+ye+9]=o.y,G[ee+ye+10]=o.z,G[ee+ye+11]=xe.itemSize===4?o.w:1)}}b={count:_,texture:V,size:new Re(Y,re)},s.set(f,b),f.addEventListener("dispose",se)}let A=0;for(let T=0;T<v.length;T++)A+=v[T];const w=f.morphTargetsRelative?1:1-A;p.getUniforms().setValue(r,"morphTargetBaseInfluence",w),p.getUniforms().setValue(r,"morphTargetInfluences",v),p.getUniforms().setValue(r,"morphTargetsTexture",b.texture,t),p.getUniforms().setValue(r,"morphTargetsTextureSize",b.size)}else{const g=v===void 0?0:v.length;let _=i[f.id];if(_===void 0||_.length!==g){_=[];for(let M=0;M<g;M++)_[M]=[M,0];i[f.id]=_}for(let M=0;M<g;M++){const C=_[M];C[0]=M,C[1]=v[M]}_.sort($D);for(let M=0;M<8;M++)M<g&&_[M][1]?(l[M][0]=_[M][0],l[M][1]=_[M][1]):(l[M][0]=Number.MAX_SAFE_INTEGER,l[M][1]=0);l.sort(HD);const b=f.morphAttributes.position,A=f.morphAttributes.normal;let w=0;for(let M=0;M<8;M++){const C=l[M],O=C[0],S=C[1];O!==Number.MAX_SAFE_INTEGER&&S?(b&&f.getAttribute("morphTarget"+M)!==b[O]&&f.setAttribute("morphTarget"+M,b[O]),A&&f.getAttribute("morphNormal"+M)!==A[O]&&f.setAttribute("morphNormal"+M,A[O]),n[M]=S,w+=S):(b&&f.hasAttribute("morphTarget"+M)===!0&&f.deleteAttribute("morphTarget"+M),A&&f.hasAttribute("morphNormal"+M)===!0&&f.deleteAttribute("morphNormal"+M),n[M]=0)}const T=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(r,"morphTargetBaseInfluence",T),p.getUniforms().setValue(r,"morphTargetInfluences",n)}}return{update:u}}function qD(r,e,t,i){let n=new WeakMap;function s(u){const h=i.render.frame,f=u.geometry,m=e.get(u,f);return n.get(m)!==h&&(e.update(m),n.set(m,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",l)===!1&&u.addEventListener("dispose",l),t.update(u.instanceMatrix,34962),u.instanceColor!==null&&t.update(u.instanceColor,34962)),m}function o(){n=new WeakMap}function l(u){const h=u.target;h.removeEventListener("dispose",l),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:s,dispose:o}}const ly=new Ui,cy=new Jx,uy=new IP,hy=new sy,v0=[],x0=[],y0=new Float32Array(16),b0=new Float32Array(9),w0=new Float32Array(4);function go(r,e,t){const i=r[0];if(i<=0||i>0)return r;const n=e*t;let s=v0[n];if(s===void 0&&(s=new Float32Array(n),v0[n]=s),e!==0){i.toArray(s,0);for(let o=1,l=0;o!==e;++o)l+=t,r[o].toArray(s,l)}return s}function li(r,e){if(r.length!==e.length)return!1;for(let t=0,i=r.length;t<i;t++)if(r[t]!==e[t])return!1;return!0}function ci(r,e){for(let t=0,i=e.length;t<i;t++)r[t]=e[t]}function Du(r,e){let t=x0[e];t===void 0&&(t=new Int32Array(e),x0[e]=t);for(let i=0;i!==e;++i)t[i]=r.allocateTextureUnit();return t}function YD(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function jD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(li(t,e))return;r.uniform2fv(this.addr,e),ci(t,e)}}function ZD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(li(t,e))return;r.uniform3fv(this.addr,e),ci(t,e)}}function KD(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(li(t,e))return;r.uniform4fv(this.addr,e),ci(t,e)}}function JD(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(li(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),ci(t,e)}else{if(li(t,i))return;w0.set(i),r.uniformMatrix2fv(this.addr,!1,w0),ci(t,i)}}function QD(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(li(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),ci(t,e)}else{if(li(t,i))return;b0.set(i),r.uniformMatrix3fv(this.addr,!1,b0),ci(t,i)}}function eO(r,e){const t=this.cache,i=e.elements;if(i===void 0){if(li(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),ci(t,e)}else{if(li(t,i))return;y0.set(i),r.uniformMatrix4fv(this.addr,!1,y0),ci(t,i)}}function tO(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function iO(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(li(t,e))return;r.uniform2iv(this.addr,e),ci(t,e)}}function nO(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(li(t,e))return;r.uniform3iv(this.addr,e),ci(t,e)}}function rO(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(li(t,e))return;r.uniform4iv(this.addr,e),ci(t,e)}}function sO(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function aO(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(li(t,e))return;r.uniform2uiv(this.addr,e),ci(t,e)}}function oO(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(li(t,e))return;r.uniform3uiv(this.addr,e),ci(t,e)}}function lO(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(li(t,e))return;r.uniform4uiv(this.addr,e),ci(t,e)}}function cO(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||ly,n)}function uO(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||uy,n)}function hO(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||hy,n)}function fO(r,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(r.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||cy,n)}function dO(r){switch(r){case 5126:return YD;case 35664:return jD;case 35665:return ZD;case 35666:return KD;case 35674:return JD;case 35675:return QD;case 35676:return eO;case 5124:case 35670:return tO;case 35667:case 35671:return iO;case 35668:case 35672:return nO;case 35669:case 35673:return rO;case 5125:return sO;case 36294:return aO;case 36295:return oO;case 36296:return lO;case 35678:case 36198:case 36298:case 36306:case 35682:return cO;case 35679:case 36299:case 36307:return uO;case 35680:case 36300:case 36308:case 36293:return hO;case 36289:case 36303:case 36311:case 36292:return fO}}function pO(r,e){r.uniform1fv(this.addr,e)}function mO(r,e){const t=go(e,this.size,2);r.uniform2fv(this.addr,t)}function gO(r,e){const t=go(e,this.size,3);r.uniform3fv(this.addr,t)}function _O(r,e){const t=go(e,this.size,4);r.uniform4fv(this.addr,t)}function vO(r,e){const t=go(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xO(r,e){const t=go(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yO(r,e){const t=go(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function bO(r,e){r.uniform1iv(this.addr,e)}function wO(r,e){r.uniform2iv(this.addr,e)}function SO(r,e){r.uniform3iv(this.addr,e)}function MO(r,e){r.uniform4iv(this.addr,e)}function EO(r,e){r.uniform1uiv(this.addr,e)}function TO(r,e){r.uniform2uiv(this.addr,e)}function AO(r,e){r.uniform3uiv(this.addr,e)}function CO(r,e){r.uniform4uiv(this.addr,e)}function PO(r,e,t){const i=this.cache,n=e.length,s=Du(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTexture2D(e[o]||ly,s[o])}function LO(r,e,t){const i=this.cache,n=e.length,s=Du(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTexture3D(e[o]||uy,s[o])}function RO(r,e,t){const i=this.cache,n=e.length,s=Du(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTextureCube(e[o]||hy,s[o])}function DO(r,e,t){const i=this.cache,n=e.length,s=Du(t,n);li(i,s)||(r.uniform1iv(this.addr,s),ci(i,s));for(let o=0;o!==n;++o)t.setTexture2DArray(e[o]||cy,s[o])}function OO(r){switch(r){case 5126:return pO;case 35664:return mO;case 35665:return gO;case 35666:return _O;case 35674:return vO;case 35675:return xO;case 35676:return yO;case 5124:case 35670:return bO;case 35667:case 35671:return wO;case 35668:case 35672:return SO;case 35669:case 35673:return MO;case 5125:return EO;case 36294:return TO;case 36295:return AO;case 36296:return CO;case 35678:case 36198:case 36298:case 36306:case 35682:return PO;case 35679:case 36299:case 36307:return LO;case 35680:case 36300:case 36308:case 36293:return RO;case 36289:case 36303:case 36311:case 36292:return DO}}class IO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=dO(t.type)}}class NO{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=OO(t.type)}}class zO{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,o=n.length;s!==o;++s){const l=n[s];l.setValue(e,t[l.id],i)}}}const Df=/(\w+)(\])?(\[|\.)?/g;function S0(r,e){r.seq.push(e),r.map[e.id]=e}function FO(r,e,t){const i=r.name,n=i.length;for(Df.lastIndex=0;;){const s=Df.exec(i),o=Df.lastIndex;let l=s[1];const u=s[2]==="]",h=s[3];if(u&&(l=l|0),h===void 0||h==="["&&o+2===n){S0(t,h===void 0?new IO(l,r,e):new NO(l,r,e));break}else{let m=t.map[l];m===void 0&&(m=new zO(l),S0(t,m)),t=m}}}class Yc{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),o=e.getUniformLocation(t,s.name);FO(s,o,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,o=t.length;s!==o;++s){const l=t[s],u=i[l.id];u.needsUpdate!==!1&&l.setValue(e,u.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const o=e[n];o.id in t&&i.push(o)}return i}}function M0(r,e,t){const i=r.createShader(e);return r.shaderSource(i,t),r.compileShader(i),i}let kO=0;function UO(r,e){const t=r.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=n;o<s;o++){const l=o+1;i.push(`${l===e?">":" "} ${l}: ${t[o]}`)}return i.join(`
`)}function BO(r){switch(r){case Zs:return["Linear","( value )"];case Nt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",r),["Linear","( value )"]}}function E0(r,e,t){const i=r.getShaderParameter(e,35713),n=r.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+UO(r.getShaderSource(e),o)}else return n}function VO(r,e){const t=BO(e);return"vec4 "+r+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function GO(r,e){let t;switch(e){case aP:t="Linear";break;case oP:t="Reinhard";break;case lP:t="OptimizedCineon";break;case cP:t="ACESFilmic";break;case uP:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function WO(r){return[r.extensionDerivatives||!!r.envMapCubeUVHeight||r.bumpMap||r.tangentSpaceNormalMap||r.clearcoatNormalMap||r.flatShading||r.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(r.extensionFragDepth||r.logarithmicDepthBuffer)&&r.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",r.extensionDrawBuffers&&r.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(r.extensionShaderTextureLOD||r.envMap||r.transmission)&&r.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Qo).join(`
`)}function HO(r){const e=[];for(const t in r){const i=r[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function $O(r,e){const t={},i=r.getProgramParameter(e,35721);for(let n=0;n<i;n++){const s=r.getActiveAttrib(e,n),o=s.name;let l=1;s.type===35674&&(l=2),s.type===35675&&(l=3),s.type===35676&&(l=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:l}}return t}function Qo(r){return r!==""}function T0(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A0(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const XO=/^[ \t]*#include +<([\w\d./]+)>/gm;function wd(r){return r.replace(XO,qO)}function qO(r,e){const t=st[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return wd(t)}const YO=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(r){return r.replace(YO,jO)}function jO(r,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function P0(r){let e="precision "+r.precision+` float;
precision `+r.precision+" int;";return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function ZO(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Gx?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===k3?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Jo&&(e="SHADOWMAP_TYPE_VSM"),e}function KO(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Qa:case eo:e="ENVMAP_TYPE_CUBE";break;case Lu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function JO(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case eo:e="ENVMAP_MODE_REFRACTION";break}return e}function QO(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case $x:e="ENVMAP_BLENDING_MULTIPLY";break;case rP:e="ENVMAP_BLENDING_MIX";break;case sP:e="ENVMAP_BLENDING_ADD";break}return e}function eI(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function tI(r,e,t,i){const n=r.getContext(),s=t.defines;let o=t.vertexShader,l=t.fragmentShader;const u=ZO(t),h=KO(t),f=JO(t),m=QO(t),p=eI(t),v=t.isWebGL2?"":WO(t),y=HO(s),g=n.createProgram();let _,b,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=[y].filter(Qo).join(`
`),_.length>0&&(_+=`
`),b=[v,y].filter(Qo).join(`
`),b.length>0&&(b+=`
`)):(_=[P0(t),"#define SHADER_NAME "+t.shaderName,y,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qo).join(`
`),b=[v,P0(t),"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+u:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?st.tonemapping_pars_fragment:"",t.toneMapping!==Ir?GO("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",st.encodings_pars_fragment,VO("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qo).join(`
`)),o=wd(o),o=T0(o,t),o=A0(o,t),l=wd(l),l=T0(l,t),l=A0(l,t),o=C0(o),l=C0(l),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,_=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,b=["#define varying in",t.glslVersion===J_?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===J_?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+b);const w=A+_+o,T=A+b+l,M=M0(n,35633,w),C=M0(n,35632,T);if(n.attachShader(g,M),n.attachShader(g,C),t.index0AttributeName!==void 0?n.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(g,0,"position"),n.linkProgram(g),r.debug.checkShaderErrors){const L=n.getProgramInfoLog(g).trim(),k=n.getShaderInfoLog(M).trim(),Y=n.getShaderInfoLog(C).trim();let re=!0,G=!0;if(n.getProgramParameter(g,35714)===!1){re=!1;const V=E0(n,M,"vertex"),K=E0(n,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(g,35715)+`

Program Info Log: `+L+`
`+V+`
`+K)}else L!==""?console.warn("THREE.WebGLProgram: Program Info Log:",L):(k===""||Y==="")&&(G=!1);G&&(this.diagnostics={runnable:re,programLog:L,vertexShader:{log:k,prefix:_},fragmentShader:{log:Y,prefix:b}})}n.deleteShader(M),n.deleteShader(C);let O;this.getUniforms=function(){return O===void 0&&(O=new Yc(n,g)),O};let S;return this.getAttributes=function(){return S===void 0&&(S=$O(n,g)),S},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=kO++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=M,this.fragmentShader=C,this}let iI=0;class nI{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(n)===!1&&(o.add(n),n.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new rI(e),t.set(e,i)),i}}class rI{constructor(e){this.id=iI++,this.code=e,this.usedTimes=0}}function sI(r,e,t,i,n,s,o){const l=new dp,u=new nI,h=[],f=n.isWebGL2,m=n.logarithmicDepthBuffer,p=n.vertexTextures;let v=n.precision;const y={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(S,L,k,Y,re){const G=Y.fog,V=re.geometry,K=S.isMeshStandardMaterial?Y.environment:null,se=(S.isMeshStandardMaterial?t:e).get(S.envMap||K),ae=!!se&&se.mapping===Lu?se.image.height:null,te=y[S.type];S.precision!==null&&(v=n.getMaxPrecision(S.precision),v!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",v,"instead."));const Se=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,xe=Se!==void 0?Se.length:0;let ee=0;V.morphAttributes.position!==void 0&&(ee=1),V.morphAttributes.normal!==void 0&&(ee=2),V.morphAttributes.color!==void 0&&(ee=3);let ne,ye,J,de;if(te){const We=rr[te];ne=We.vertexShader,ye=We.fragmentShader}else ne=S.vertexShader,ye=S.fragmentShader,u.update(S),J=u.getVertexShaderID(S),de=u.getFragmentShaderID(S);const j=r.getRenderTarget(),Fe=S.alphaTest>0,Te=S.clearcoat>0,Ae=S.iridescence>0;return{isWebGL2:f,shaderID:te,shaderName:S.type,vertexShader:ne,fragmentShader:ye,defines:S.defines,customVertexShaderID:J,customFragmentShaderID:de,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:v,instancing:re.isInstancedMesh===!0,instancingColor:re.isInstancedMesh===!0&&re.instanceColor!==null,supportsVertexTextures:p,outputEncoding:j===null?r.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:Zs,map:!!S.map,matcap:!!S.matcap,envMap:!!se,envMapMode:se&&se.mapping,envMapCubeUVHeight:ae,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===LP,tangentSpaceNormalMap:S.normalMapType===PP,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Nt,clearcoat:Te,clearcoatMap:Te&&!!S.clearcoatMap,clearcoatRoughnessMap:Te&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:Te&&!!S.clearcoatNormalMap,iridescence:Ae,iridescenceMap:Ae&&!!S.iridescenceMap,iridescenceThicknessMap:Ae&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Ha,alphaMap:!!S.alphaMap,alphaTest:Fe,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!V.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||S.transmission>0||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||S.sheen>0||!!S.sheenColorMap||!!S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!G,useFog:S.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:m,skinning:re.isSkinnedMesh===!0,morphTargets:V.morphAttributes.position!==void 0,morphNormals:V.morphAttributes.normal!==void 0,morphColors:V.morphAttributes.color!==void 0,morphTargetsCount:xe,morphTextureStride:ee,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&k.length>0,shadowMapType:r.shadowMap.type,toneMapping:S.toneMapped?r.toneMapping:Ir,physicallyCorrectLights:r.physicallyCorrectLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===po,flipSided:S.side===dn,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:f||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:f||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:f||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function _(S){const L=[];if(S.shaderID?L.push(S.shaderID):(L.push(S.customVertexShaderID),L.push(S.customFragmentShaderID)),S.defines!==void 0)for(const k in S.defines)L.push(k),L.push(S.defines[k]);return S.isRawShaderMaterial===!1&&(b(L,S),A(L,S),L.push(r.outputEncoding)),L.push(S.customProgramCacheKey),L.join()}function b(S,L){S.push(L.precision),S.push(L.outputEncoding),S.push(L.envMapMode),S.push(L.envMapCubeUVHeight),S.push(L.combine),S.push(L.vertexUvs),S.push(L.fogExp2),S.push(L.sizeAttenuation),S.push(L.morphTargetsCount),S.push(L.morphAttributeCount),S.push(L.numDirLights),S.push(L.numPointLights),S.push(L.numSpotLights),S.push(L.numSpotLightMaps),S.push(L.numHemiLights),S.push(L.numRectAreaLights),S.push(L.numDirLightShadows),S.push(L.numPointLightShadows),S.push(L.numSpotLightShadows),S.push(L.numSpotLightShadowsWithMaps),S.push(L.shadowMapType),S.push(L.toneMapping),S.push(L.numClippingPlanes),S.push(L.numClipIntersection),S.push(L.depthPacking)}function A(S,L){l.disableAll(),L.isWebGL2&&l.enable(0),L.supportsVertexTextures&&l.enable(1),L.instancing&&l.enable(2),L.instancingColor&&l.enable(3),L.map&&l.enable(4),L.matcap&&l.enable(5),L.envMap&&l.enable(6),L.lightMap&&l.enable(7),L.aoMap&&l.enable(8),L.emissiveMap&&l.enable(9),L.bumpMap&&l.enable(10),L.normalMap&&l.enable(11),L.objectSpaceNormalMap&&l.enable(12),L.tangentSpaceNormalMap&&l.enable(13),L.clearcoat&&l.enable(14),L.clearcoatMap&&l.enable(15),L.clearcoatRoughnessMap&&l.enable(16),L.clearcoatNormalMap&&l.enable(17),L.iridescence&&l.enable(18),L.iridescenceMap&&l.enable(19),L.iridescenceThicknessMap&&l.enable(20),L.displacementMap&&l.enable(21),L.specularMap&&l.enable(22),L.roughnessMap&&l.enable(23),L.metalnessMap&&l.enable(24),L.gradientMap&&l.enable(25),L.alphaMap&&l.enable(26),L.alphaTest&&l.enable(27),L.vertexColors&&l.enable(28),L.vertexAlphas&&l.enable(29),L.vertexUvs&&l.enable(30),L.vertexTangents&&l.enable(31),L.uvsVertexOnly&&l.enable(32),S.push(l.mask),l.disableAll(),L.fog&&l.enable(0),L.useFog&&l.enable(1),L.flatShading&&l.enable(2),L.logarithmicDepthBuffer&&l.enable(3),L.skinning&&l.enable(4),L.morphTargets&&l.enable(5),L.morphNormals&&l.enable(6),L.morphColors&&l.enable(7),L.premultipliedAlpha&&l.enable(8),L.shadowMapEnabled&&l.enable(9),L.physicallyCorrectLights&&l.enable(10),L.doubleSided&&l.enable(11),L.flipSided&&l.enable(12),L.useDepthPacking&&l.enable(13),L.dithering&&l.enable(14),L.specularIntensityMap&&l.enable(15),L.specularColorMap&&l.enable(16),L.transmission&&l.enable(17),L.transmissionMap&&l.enable(18),L.thicknessMap&&l.enable(19),L.sheen&&l.enable(20),L.sheenColorMap&&l.enable(21),L.sheenRoughnessMap&&l.enable(22),L.decodeVideoTexture&&l.enable(23),L.opaque&&l.enable(24),S.push(l.mask)}function w(S){const L=y[S.type];let k;if(L){const Y=rr[L];k=ny.clone(Y.uniforms)}else k=S.uniforms;return k}function T(S,L){let k;for(let Y=0,re=h.length;Y<re;Y++){const G=h[Y];if(G.cacheKey===L){k=G,++k.usedTimes;break}}return k===void 0&&(k=new tI(r,L,S,s),h.push(k)),k}function M(S){if(--S.usedTimes===0){const L=h.indexOf(S);h[L]=h[h.length-1],h.pop(),S.destroy()}}function C(S){u.remove(S)}function O(){u.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:w,acquireProgram:T,releaseProgram:M,releaseShaderCache:C,programs:h,dispose:O}}function aI(){let r=new WeakMap;function e(s){let o=r.get(s);return o===void 0&&(o={},r.set(s,o)),o}function t(s){r.delete(s)}function i(s,o,l){r.get(s)[o]=l}function n(){r=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function oI(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function L0(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function R0(){const r=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function o(m,p,v,y,g,_){let b=r[e];return b===void 0?(b={id:m.id,object:m,geometry:p,material:v,groupOrder:y,renderOrder:m.renderOrder,z:g,group:_},r[e]=b):(b.id=m.id,b.object=m,b.geometry=p,b.material=v,b.groupOrder=y,b.renderOrder=m.renderOrder,b.z=g,b.group=_),e++,b}function l(m,p,v,y,g,_){const b=o(m,p,v,y,g,_);v.transmission>0?i.push(b):v.transparent===!0?n.push(b):t.push(b)}function u(m,p,v,y,g,_){const b=o(m,p,v,y,g,_);v.transmission>0?i.unshift(b):v.transparent===!0?n.unshift(b):t.unshift(b)}function h(m,p){t.length>1&&t.sort(m||oI),i.length>1&&i.sort(p||L0),n.length>1&&n.sort(p||L0)}function f(){for(let m=e,p=r.length;m<p;m++){const v=r[m];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:l,unshift:u,finish:f,sort:h}}function lI(){let r=new WeakMap;function e(i,n){const s=r.get(i);let o;return s===void 0?(o=new R0,r.set(i,[o])):n>=s.length?(o=new R0,s.push(o)):o=s[n],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function cI(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new W,color:new Lt};break;case"SpotLight":t={position:new W,direction:new W,color:new Lt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new W,color:new Lt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new W,skyColor:new Lt,groundColor:new Lt};break;case"RectAreaLight":t={color:new Lt,position:new W,halfWidth:new W,halfHeight:new W};break}return r[e.id]=t,t}}}function uI(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let hI=0;function fI(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function dI(r,e){const t=new cI,i=uI(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let f=0;f<9;f++)n.probe.push(new W);const s=new W,o=new ai,l=new ai;function u(f,m){let p=0,v=0,y=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let g=0,_=0,b=0,A=0,w=0,T=0,M=0,C=0,O=0,S=0;f.sort(fI);const L=m!==!0?Math.PI:1;for(let Y=0,re=f.length;Y<re;Y++){const G=f[Y],V=G.color,K=G.intensity,se=G.distance,ae=G.shadow&&G.shadow.map?G.shadow.map.texture:null;if(G.isAmbientLight)p+=V.r*K*L,v+=V.g*K*L,y+=V.b*K*L;else if(G.isLightProbe)for(let te=0;te<9;te++)n.probe[te].addScaledVector(G.sh.coefficients[te],K);else if(G.isDirectionalLight){const te=t.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity*L),G.castShadow){const Se=G.shadow,xe=i.get(G);xe.shadowBias=Se.bias,xe.shadowNormalBias=Se.normalBias,xe.shadowRadius=Se.radius,xe.shadowMapSize=Se.mapSize,n.directionalShadow[g]=xe,n.directionalShadowMap[g]=ae,n.directionalShadowMatrix[g]=G.shadow.matrix,T++}n.directional[g]=te,g++}else if(G.isSpotLight){const te=t.get(G);te.position.setFromMatrixPosition(G.matrixWorld),te.color.copy(V).multiplyScalar(K*L),te.distance=se,te.coneCos=Math.cos(G.angle),te.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),te.decay=G.decay,n.spot[b]=te;const Se=G.shadow;if(G.map&&(n.spotLightMap[O]=G.map,O++,Se.updateMatrices(G),G.castShadow&&S++),n.spotLightMatrix[b]=Se.matrix,G.castShadow){const xe=i.get(G);xe.shadowBias=Se.bias,xe.shadowNormalBias=Se.normalBias,xe.shadowRadius=Se.radius,xe.shadowMapSize=Se.mapSize,n.spotShadow[b]=xe,n.spotShadowMap[b]=ae,C++}b++}else if(G.isRectAreaLight){const te=t.get(G);te.color.copy(V).multiplyScalar(K),te.halfWidth.set(G.width*.5,0,0),te.halfHeight.set(0,G.height*.5,0),n.rectArea[A]=te,A++}else if(G.isPointLight){const te=t.get(G);if(te.color.copy(G.color).multiplyScalar(G.intensity*L),te.distance=G.distance,te.decay=G.decay,G.castShadow){const Se=G.shadow,xe=i.get(G);xe.shadowBias=Se.bias,xe.shadowNormalBias=Se.normalBias,xe.shadowRadius=Se.radius,xe.shadowMapSize=Se.mapSize,xe.shadowCameraNear=Se.camera.near,xe.shadowCameraFar=Se.camera.far,n.pointShadow[_]=xe,n.pointShadowMap[_]=ae,n.pointShadowMatrix[_]=G.shadow.matrix,M++}n.point[_]=te,_++}else if(G.isHemisphereLight){const te=t.get(G);te.skyColor.copy(G.color).multiplyScalar(K*L),te.groundColor.copy(G.groundColor).multiplyScalar(K*L),n.hemi[w]=te,w++}}A>0&&(e.isWebGL2||r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=De.LTC_FLOAT_1,n.rectAreaLTC2=De.LTC_FLOAT_2):r.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=De.LTC_HALF_1,n.rectAreaLTC2=De.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=p,n.ambient[1]=v,n.ambient[2]=y;const k=n.hash;(k.directionalLength!==g||k.pointLength!==_||k.spotLength!==b||k.rectAreaLength!==A||k.hemiLength!==w||k.numDirectionalShadows!==T||k.numPointShadows!==M||k.numSpotShadows!==C||k.numSpotMaps!==O)&&(n.directional.length=g,n.spot.length=b,n.rectArea.length=A,n.point.length=_,n.hemi.length=w,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=C,n.spotShadowMap.length=C,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=C+O-S,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=S,k.directionalLength=g,k.pointLength=_,k.spotLength=b,k.rectAreaLength=A,k.hemiLength=w,k.numDirectionalShadows=T,k.numPointShadows=M,k.numSpotShadows=C,k.numSpotMaps=O,n.version=hI++)}function h(f,m){let p=0,v=0,y=0,g=0,_=0;const b=m.matrixWorldInverse;for(let A=0,w=f.length;A<w;A++){const T=f[A];if(T.isDirectionalLight){const M=n.directional[p];M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(b),p++}else if(T.isSpotLight){const M=n.spot[y];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(b),M.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(b),y++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(b),l.identity(),o.copy(T.matrixWorld),o.premultiply(b),l.extractRotation(o),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(l),M.halfHeight.applyMatrix4(l),g++}else if(T.isPointLight){const M=n.point[v];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(b),v++}else if(T.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(b),_++}}}return{setup:u,setupView:h,state:n}}function D0(r,e){const t=new dI(r,e),i=[],n=[];function s(){i.length=0,n.length=0}function o(m){i.push(m)}function l(m){n.push(m)}function u(m){t.setup(i,m)}function h(m){t.setupView(i,m)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:u,setupLightsView:h,pushLight:o,pushShadow:l}}function pI(r,e){let t=new WeakMap;function i(s,o=0){const l=t.get(s);let u;return l===void 0?(u=new D0(r,e),t.set(s,[u])):o>=l.length?(u=new D0(r,e),l.push(u)):u=l[o],u}function n(){t=new WeakMap}return{get:i,dispose:n}}class mI extends Ru{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AP,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gI extends Ru{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new W,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _I=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vI=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function xI(r,e,t){let i=new ay;const n=new Re,s=new Re,o=new si,l=new mI({depthPacking:CP}),u=new gI,h={},f=t.maxTextureSize,m={0:dn,1:Ys,2:po},p=new gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:_I,fragmentShader:vI}),v=p.clone();v.defines.HORIZONTAL_PASS=1;const y=new dr;y.setAttribute("position",new cr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Fi(y,p),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gx,this.render=function(T,M,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;const O=r.getRenderTarget(),S=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),k=r.state;k.setBlending(os),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);for(let Y=0,re=T.length;Y<re;Y++){const G=T[Y],V=G.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;n.copy(V.mapSize);const K=V.getFrameExtents();if(n.multiply(K),s.copy(V.mapSize),(n.x>f||n.y>f)&&(n.x>f&&(s.x=Math.floor(f/K.x),n.x=s.x*K.x,V.mapSize.x=s.x),n.y>f&&(s.y=Math.floor(f/K.y),n.y=s.y*K.y,V.mapSize.y=s.y)),V.map===null){const ae=this.type!==Jo?{minFilter:zi,magFilter:zi}:{};V.map=new Yn(n.x,n.y,ae),V.map.texture.name=G.name+".shadowMap",V.camera.updateProjectionMatrix()}r.setRenderTarget(V.map),r.clear();const se=V.getViewportCount();for(let ae=0;ae<se;ae++){const te=V.getViewport(ae);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),k.viewport(o),V.updateMatrices(G,ae),i=V.getFrustum(),w(M,C,V.camera,G,this.type)}V.isPointLightShadow!==!0&&this.type===Jo&&b(V,C),V.needsUpdate=!1}_.needsUpdate=!1,r.setRenderTarget(O,S,L)};function b(T,M){const C=e.update(g);p.defines.VSM_SAMPLES!==T.blurSamples&&(p.defines.VSM_SAMPLES=T.blurSamples,v.defines.VSM_SAMPLES=T.blurSamples,p.needsUpdate=!0,v.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yn(n.x,n.y)),p.uniforms.shadow_pass.value=T.map.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(M,null,C,p,g,null),v.uniforms.shadow_pass.value=T.mapPass.texture,v.uniforms.resolution.value=T.mapSize,v.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(M,null,C,v,g,null)}function A(T,M,C,O,S,L){let k=null;const Y=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(Y!==void 0)k=Y;else if(k=C.isPointLight===!0?u:l,r.localClippingEnabled&&M.clipShadows===!0&&Array.isArray(M.clippingPlanes)&&M.clippingPlanes.length!==0||M.displacementMap&&M.displacementScale!==0||M.alphaMap&&M.alphaTest>0||M.map&&M.alphaTest>0){const re=k.uuid,G=M.uuid;let V=h[re];V===void 0&&(V={},h[re]=V);let K=V[G];K===void 0&&(K=k.clone(),V[G]=K),k=K}return k.visible=M.visible,k.wireframe=M.wireframe,L===Jo?k.side=M.shadowSide!==null?M.shadowSide:M.side:k.side=M.shadowSide!==null?M.shadowSide:m[M.side],k.alphaMap=M.alphaMap,k.alphaTest=M.alphaTest,k.map=M.map,k.clipShadows=M.clipShadows,k.clippingPlanes=M.clippingPlanes,k.clipIntersection=M.clipIntersection,k.displacementMap=M.displacementMap,k.displacementScale=M.displacementScale,k.displacementBias=M.displacementBias,k.wireframeLinewidth=M.wireframeLinewidth,k.linewidth=M.linewidth,C.isPointLight===!0&&k.isMeshDistanceMaterial===!0&&(k.referencePosition.setFromMatrixPosition(C.matrixWorld),k.nearDistance=O,k.farDistance=S),k}function w(T,M,C,O,S){if(T.visible===!1)return;if(T.layers.test(M.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&S===Jo)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const Y=e.update(T),re=T.material;if(Array.isArray(re)){const G=Y.groups;for(let V=0,K=G.length;V<K;V++){const se=G[V],ae=re[se.materialIndex];if(ae&&ae.visible){const te=A(T,ae,O,C.near,C.far,S);r.renderBufferDirect(C,null,Y,te,T,se)}}}else if(re.visible){const G=A(T,re,O,C.near,C.far,S);r.renderBufferDirect(C,null,Y,G,T,null)}}const k=T.children;for(let Y=0,re=k.length;Y<re;Y++)w(k[Y],M,C,O,S)}}function yI(r,e,t){const i=t.isWebGL2;function n(){let $=!1;const ue=new si;let Me=null;const Ie=new si(0,0,0,0);return{setMask:function(Ge){Me!==Ge&&!$&&(r.colorMask(Ge,Ge,Ge,Ge),Me=Ge)},setLocked:function(Ge){$=Ge},setClear:function(Ge,vt,Zt,ui,Zn){Zn===!0&&(Ge*=ui,vt*=ui,Zt*=ui),ue.set(Ge,vt,Zt,ui),Ie.equals(ue)===!1&&(r.clearColor(Ge,vt,Zt,ui),Ie.copy(ue))},reset:function(){$=!1,Me=null,Ie.set(-1,0,0,0)}}}function s(){let $=!1,ue=null,Me=null,Ie=null;return{setTest:function(Ge){Ge?Fe(2929):Te(2929)},setMask:function(Ge){ue!==Ge&&!$&&(r.depthMask(Ge),ue=Ge)},setFunc:function(Ge){if(Me!==Ge){switch(Ge){case K3:r.depthFunc(512);break;case J3:r.depthFunc(519);break;case Q3:r.depthFunc(513);break;case gd:r.depthFunc(515);break;case eP:r.depthFunc(514);break;case tP:r.depthFunc(518);break;case iP:r.depthFunc(516);break;case nP:r.depthFunc(517);break;default:r.depthFunc(515)}Me=Ge}},setLocked:function(Ge){$=Ge},setClear:function(Ge){Ie!==Ge&&(r.clearDepth(Ge),Ie=Ge)},reset:function(){$=!1,ue=null,Me=null,Ie=null}}}function o(){let $=!1,ue=null,Me=null,Ie=null,Ge=null,vt=null,Zt=null,ui=null,Zn=null;return{setTest:function(Rt){$||(Rt?Fe(2960):Te(2960))},setMask:function(Rt){ue!==Rt&&!$&&(r.stencilMask(Rt),ue=Rt)},setFunc:function(Rt,In,Vi){(Me!==Rt||Ie!==In||Ge!==Vi)&&(r.stencilFunc(Rt,In,Vi),Me=Rt,Ie=In,Ge=Vi)},setOp:function(Rt,In,Vi){(vt!==Rt||Zt!==In||ui!==Vi)&&(r.stencilOp(Rt,In,Vi),vt=Rt,Zt=In,ui=Vi)},setLocked:function(Rt){$=Rt},setClear:function(Rt){Zn!==Rt&&(r.clearStencil(Rt),Zn=Rt)},reset:function(){$=!1,ue=null,Me=null,Ie=null,Ge=null,vt=null,Zt=null,ui=null,Zn=null}}}const l=new n,u=new s,h=new o,f=new WeakMap,m=new WeakMap;let p={},v={},y=new WeakMap,g=[],_=null,b=!1,A=null,w=null,T=null,M=null,C=null,O=null,S=null,L=!1,k=null,Y=null,re=null,G=null,V=null;const K=r.getParameter(35661);let se=!1,ae=0;const te=r.getParameter(7938);te.indexOf("WebGL")!==-1?(ae=parseFloat(/^WebGL (\d)/.exec(te)[1]),se=ae>=1):te.indexOf("OpenGL ES")!==-1&&(ae=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),se=ae>=2);let Se=null,xe={};const ee=r.getParameter(3088),ne=r.getParameter(2978),ye=new si().fromArray(ee),J=new si().fromArray(ne);function de($,ue,Me){const Ie=new Uint8Array(4),Ge=r.createTexture();r.bindTexture($,Ge),r.texParameteri($,10241,9728),r.texParameteri($,10240,9728);for(let vt=0;vt<Me;vt++)r.texImage2D(ue+vt,0,6408,1,1,0,6408,5121,Ie);return Ge}const j={};j[3553]=de(3553,3553,1),j[34067]=de(34067,34069,6),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),Fe(2929),u.setFunc(gd),_t(!1),et(S_),Fe(2884),Ye(os);function Fe($){p[$]!==!0&&(r.enable($),p[$]=!0)}function Te($){p[$]!==!1&&(r.disable($),p[$]=!1)}function Ae($,ue){return v[$]!==ue?(r.bindFramebuffer($,ue),v[$]=ue,i&&($===36009&&(v[36160]=ue),$===36160&&(v[36009]=ue)),!0):!1}function Ee($,ue){let Me=g,Ie=!1;if($)if(Me=y.get(ue),Me===void 0&&(Me=[],y.set(ue,Me)),$.isWebGLMultipleRenderTargets){const Ge=$.texture;if(Me.length!==Ge.length||Me[0]!==36064){for(let vt=0,Zt=Ge.length;vt<Zt;vt++)Me[vt]=36064+vt;Me.length=Ge.length,Ie=!0}}else Me[0]!==36064&&(Me[0]=36064,Ie=!0);else Me[0]!==1029&&(Me[0]=1029,Ie=!0);Ie&&(t.isWebGL2?r.drawBuffers(Me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Me))}function We($){return _!==$?(r.useProgram($),_=$,!0):!1}const Pe={[za]:32774,[B3]:32778,[V3]:32779};if(i)Pe[A_]=32775,Pe[C_]=32776;else{const $=e.get("EXT_blend_minmax");$!==null&&(Pe[A_]=$.MIN_EXT,Pe[C_]=$.MAX_EXT)}const Ne={[G3]:0,[W3]:1,[H3]:768,[Wx]:770,[Z3]:776,[Y3]:774,[X3]:772,[$3]:769,[Hx]:771,[j3]:775,[q3]:773};function Ye($,ue,Me,Ie,Ge,vt,Zt,ui){if($===os){b===!0&&(Te(3042),b=!1);return}if(b===!1&&(Fe(3042),b=!0),$!==U3){if($!==A||ui!==L){if((w!==za||C!==za)&&(r.blendEquation(32774),w=za,C=za),ui)switch($){case Ha:r.blendFuncSeparate(1,771,1,771);break;case M_:r.blendFunc(1,1);break;case E_:r.blendFuncSeparate(0,769,0,1);break;case T_:r.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Ha:r.blendFuncSeparate(770,771,1,771);break;case M_:r.blendFunc(770,1);break;case E_:r.blendFuncSeparate(0,769,0,1);break;case T_:r.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}T=null,M=null,O=null,S=null,A=$,L=ui}return}Ge=Ge||ue,vt=vt||Me,Zt=Zt||Ie,(ue!==w||Ge!==C)&&(r.blendEquationSeparate(Pe[ue],Pe[Ge]),w=ue,C=Ge),(Me!==T||Ie!==M||vt!==O||Zt!==S)&&(r.blendFuncSeparate(Ne[Me],Ne[Ie],Ne[vt],Ne[Zt]),T=Me,M=Ie,O=vt,S=Zt),A=$,L=!1}function mt($,ue){$.side===po?Te(2884):Fe(2884);let Me=$.side===dn;ue&&(Me=!Me),_t(Me),$.blending===Ha&&$.transparent===!1?Ye(os):Ye($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.premultipliedAlpha),u.setFunc($.depthFunc),u.setTest($.depthTest),u.setMask($.depthWrite),l.setMask($.colorWrite);const Ie=$.stencilWrite;h.setTest(Ie),Ie&&(h.setMask($.stencilWriteMask),h.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),h.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),ft($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Fe(32926):Te(32926)}function _t($){k!==$&&($?r.frontFace(2304):r.frontFace(2305),k=$)}function et($){$!==z3?(Fe(2884),$!==Y&&($===S_?r.cullFace(1029):$===F3?r.cullFace(1028):r.cullFace(1032))):Te(2884),Y=$}function xt($){$!==re&&(se&&r.lineWidth($),re=$)}function ft($,ue,Me){$?(Fe(32823),(G!==ue||V!==Me)&&(r.polygonOffset(ue,Me),G=ue,V=Me)):Te(32823)}function Xt($){$?Fe(3089):Te(3089)}function St($){$===void 0&&($=33984+K-1),Se!==$&&(r.activeTexture($),Se=$)}function N($,ue,Me){Me===void 0&&(Se===null?Me=33984+K-1:Me=Se);let Ie=xe[Me];Ie===void 0&&(Ie={type:void 0,texture:void 0},xe[Me]=Ie),(Ie.type!==$||Ie.texture!==ue)&&(Se!==Me&&(r.activeTexture(Me),Se=Me),r.bindTexture($,ue||j[$]),Ie.type=$,Ie.texture=ue)}function D(){const $=xe[Se];$!==void 0&&$.type!==void 0&&(r.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function le(){try{r.compressedTexImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function oe(){try{r.compressedTexImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function _e(){try{r.texSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function fe(){try{r.texSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Le(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function F(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function q(){try{r.texStorage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{r.texStorage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function me(){try{r.texImage2D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ce(){try{r.texImage3D.apply(r,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ke($){ye.equals($)===!1&&(r.scissor($.x,$.y,$.z,$.w),ye.copy($))}function Ue($){J.equals($)===!1&&(r.viewport($.x,$.y,$.z,$.w),J.copy($))}function it($,ue){let Me=m.get(ue);Me===void 0&&(Me=new WeakMap,m.set(ue,Me));let Ie=Me.get($);Ie===void 0&&(Ie=r.getUniformBlockIndex(ue,$.name),Me.set($,Ie))}function at($,ue){const Ie=m.get(ue).get($);f.get(ue)!==Ie&&(r.uniformBlockBinding(ue,Ie,$.__bindingPointIndex),f.set(ue,Ie))}function bt(){r.disable(3042),r.disable(2884),r.disable(2929),r.disable(32823),r.disable(3089),r.disable(2960),r.disable(32926),r.blendEquation(32774),r.blendFunc(1,0),r.blendFuncSeparate(1,0,1,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(513),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(519,0,4294967295),r.stencilOp(7680,7680,7680),r.clearStencil(0),r.cullFace(1029),r.frontFace(2305),r.polygonOffset(0,0),r.activeTexture(33984),r.bindFramebuffer(36160,null),i===!0&&(r.bindFramebuffer(36009,null),r.bindFramebuffer(36008,null)),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),p={},Se=null,xe={},v={},y=new WeakMap,g=[],_=null,b=!1,A=null,w=null,T=null,M=null,C=null,O=null,S=null,L=!1,k=null,Y=null,re=null,G=null,V=null,ye.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:Fe,disable:Te,bindFramebuffer:Ae,drawBuffers:Ee,useProgram:We,setBlending:Ye,setMaterial:mt,setFlipSided:_t,setCullFace:et,setLineWidth:xt,setPolygonOffset:ft,setScissorTest:Xt,activeTexture:St,bindTexture:N,unbindTexture:D,compressedTexImage2D:le,compressedTexImage3D:oe,texImage2D:me,texImage3D:Ce,updateUBOMapping:it,uniformBlockBinding:at,texStorage2D:q,texStorage3D:be,texSubImage2D:_e,texSubImage3D:fe,compressedTexSubImage2D:Le,compressedTexSubImage3D:F,scissor:ke,viewport:Ue,reset:bt}}function bI(r,e,t,i,n,s,o){const l=n.isWebGL2,u=n.maxTextures,h=n.maxCubemapSize,f=n.maxTextureSize,m=n.maxSamples,p=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,v=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),y=new WeakMap;let g;const _=new WeakMap;let b=!1;try{b=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(N,D){return b?new OffscreenCanvas(N,D):ml("canvas")}function w(N,D,le,oe){let _e=1;if((N.width>oe||N.height>oe)&&(_e=oe/Math.max(N.width,N.height)),_e<1||D===!0)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap){const fe=D?bd:Math.floor,Le=fe(_e*N.width),F=fe(_e*N.height);g===void 0&&(g=A(Le,F));const q=le?A(Le,F):g;return q.width=Le,q.height=F,q.getContext("2d").drawImage(N,0,0,Le,F),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+N.width+"x"+N.height+") to ("+Le+"x"+F+")."),q}else return"data"in N&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+N.width+"x"+N.height+")."),N;return N}function T(N){return e0(N.width)&&e0(N.height)}function M(N){return l?!1:N.wrapS!==Wn||N.wrapT!==Wn||N.minFilter!==zi&&N.minFilter!==Ei}function C(N,D){return N.generateMipmaps&&D&&N.minFilter!==zi&&N.minFilter!==Ei}function O(N){r.generateMipmap(N)}function S(N,D,le,oe,_e=!1){if(l===!1)return D;if(N!==null){if(r[N]!==void 0)return r[N];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let fe=D;return D===6403&&(le===5126&&(fe=33326),le===5131&&(fe=33325),le===5121&&(fe=33321)),D===33319&&(le===5126&&(fe=33328),le===5131&&(fe=33327),le===5121&&(fe=33323)),D===6408&&(le===5126&&(fe=34836),le===5131&&(fe=34842),le===5121&&(fe=oe===Nt&&_e===!1?35907:32856),le===32819&&(fe=32854),le===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function L(N,D,le){return C(N,le)===!0||N.isFramebufferTexture&&N.minFilter!==zi&&N.minFilter!==Ei?Math.log2(Math.max(D.width,D.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?D.mipmaps.length:1}function k(N){return N===zi||N===P_||N===tf?9728:9729}function Y(N){const D=N.target;D.removeEventListener("dispose",Y),G(D),D.isVideoTexture&&y.delete(D)}function re(N){const D=N.target;D.removeEventListener("dispose",re),K(D)}function G(N){const D=i.get(N);if(D.__webglInit===void 0)return;const le=N.source,oe=_.get(le);if(oe){const _e=oe[D.__cacheKey];_e.usedTimes--,_e.usedTimes===0&&V(N),Object.keys(oe).length===0&&_.delete(le)}i.remove(N)}function V(N){const D=i.get(N);r.deleteTexture(D.__webglTexture);const le=N.source,oe=_.get(le);delete oe[D.__cacheKey],o.memory.textures--}function K(N){const D=N.texture,le=i.get(N),oe=i.get(D);if(oe.__webglTexture!==void 0&&(r.deleteTexture(oe.__webglTexture),o.memory.textures--),N.depthTexture&&N.depthTexture.dispose(),N.isWebGLCubeRenderTarget)for(let _e=0;_e<6;_e++)r.deleteFramebuffer(le.__webglFramebuffer[_e]),le.__webglDepthbuffer&&r.deleteRenderbuffer(le.__webglDepthbuffer[_e]);else{if(r.deleteFramebuffer(le.__webglFramebuffer),le.__webglDepthbuffer&&r.deleteRenderbuffer(le.__webglDepthbuffer),le.__webglMultisampledFramebuffer&&r.deleteFramebuffer(le.__webglMultisampledFramebuffer),le.__webglColorRenderbuffer)for(let _e=0;_e<le.__webglColorRenderbuffer.length;_e++)le.__webglColorRenderbuffer[_e]&&r.deleteRenderbuffer(le.__webglColorRenderbuffer[_e]);le.__webglDepthRenderbuffer&&r.deleteRenderbuffer(le.__webglDepthRenderbuffer)}if(N.isWebGLMultipleRenderTargets)for(let _e=0,fe=D.length;_e<fe;_e++){const Le=i.get(D[_e]);Le.__webglTexture&&(r.deleteTexture(Le.__webglTexture),o.memory.textures--),i.remove(D[_e])}i.remove(D),i.remove(N)}let se=0;function ae(){se=0}function te(){const N=se;return N>=u&&console.warn("THREE.WebGLTextures: Trying to use "+N+" texture units while this GPU supports only "+u),se+=1,N}function Se(N){const D=[];return D.push(N.wrapS),D.push(N.wrapT),D.push(N.wrapR||0),D.push(N.magFilter),D.push(N.minFilter),D.push(N.anisotropy),D.push(N.internalFormat),D.push(N.format),D.push(N.type),D.push(N.generateMipmaps),D.push(N.premultiplyAlpha),D.push(N.flipY),D.push(N.unpackAlignment),D.push(N.encoding),D.join()}function xe(N,D){const le=i.get(N);if(N.isVideoTexture&&Xt(N),N.isRenderTargetTexture===!1&&N.version>0&&le.__version!==N.version){const oe=N.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Te(le,N,D);return}}t.bindTexture(3553,le.__webglTexture,33984+D)}function ee(N,D){const le=i.get(N);if(N.version>0&&le.__version!==N.version){Te(le,N,D);return}t.bindTexture(35866,le.__webglTexture,33984+D)}function ne(N,D){const le=i.get(N);if(N.version>0&&le.__version!==N.version){Te(le,N,D);return}t.bindTexture(32879,le.__webglTexture,33984+D)}function ye(N,D){const le=i.get(N);if(N.version>0&&le.__version!==N.version){Ae(le,N,D);return}t.bindTexture(34067,le.__webglTexture,33984+D)}const J={[hl]:10497,[Wn]:33071,[xd]:33648},de={[zi]:9728,[P_]:9984,[tf]:9986,[Ei]:9729,[hP]:9985,[fl]:9987};function j(N,D,le){if(le?(r.texParameteri(N,10242,J[D.wrapS]),r.texParameteri(N,10243,J[D.wrapT]),(N===32879||N===35866)&&r.texParameteri(N,32882,J[D.wrapR]),r.texParameteri(N,10240,de[D.magFilter]),r.texParameteri(N,10241,de[D.minFilter])):(r.texParameteri(N,10242,33071),r.texParameteri(N,10243,33071),(N===32879||N===35866)&&r.texParameteri(N,32882,33071),(D.wrapS!==Wn||D.wrapT!==Wn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),r.texParameteri(N,10240,k(D.magFilter)),r.texParameteri(N,10241,k(D.minFilter)),D.minFilter!==zi&&D.minFilter!==Ei&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const oe=e.get("EXT_texture_filter_anisotropic");if(D.magFilter===zi||D.minFilter!==tf&&D.minFilter!==fl||D.type===zs&&e.has("OES_texture_float_linear")===!1||l===!1&&D.type===dl&&e.has("OES_texture_half_float_linear")===!1)return;(D.anisotropy>1||i.get(D).__currentAnisotropy)&&(r.texParameterf(N,oe.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(D.anisotropy,n.getMaxAnisotropy())),i.get(D).__currentAnisotropy=D.anisotropy)}}function Fe(N,D){let le=!1;N.__webglInit===void 0&&(N.__webglInit=!0,D.addEventListener("dispose",Y));const oe=D.source;let _e=_.get(oe);_e===void 0&&(_e={},_.set(oe,_e));const fe=Se(D);if(fe!==N.__cacheKey){_e[fe]===void 0&&(_e[fe]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,le=!0),_e[fe].usedTimes++;const Le=_e[N.__cacheKey];Le!==void 0&&(_e[N.__cacheKey].usedTimes--,Le.usedTimes===0&&V(D)),N.__cacheKey=fe,N.__webglTexture=_e[fe].texture}return le}function Te(N,D,le){let oe=3553;(D.isDataArrayTexture||D.isCompressedArrayTexture)&&(oe=35866),D.isData3DTexture&&(oe=32879);const _e=Fe(N,D),fe=D.source;t.bindTexture(oe,N.__webglTexture,33984+le);const Le=i.get(fe);if(fe.version!==Le.__version||_e===!0){t.activeTexture(33984+le),r.pixelStorei(37440,D.flipY),r.pixelStorei(37441,D.premultiplyAlpha),r.pixelStorei(3317,D.unpackAlignment),r.pixelStorei(37443,0);const F=M(D)&&T(D.image)===!1;let q=w(D.image,F,!1,f);q=St(D,q);const be=T(q)||l,me=s.convert(D.format,D.encoding);let Ce=s.convert(D.type),ke=S(D.internalFormat,me,Ce,D.encoding,D.isVideoTexture);j(oe,D,be);let Ue;const it=D.mipmaps,at=l&&D.isVideoTexture!==!0,bt=Le.__version===void 0||_e===!0,$=L(D,q,be);if(D.isDepthTexture)ke=6402,l?D.type===zs?ke=36012:D.type===Ns?ke=33190:D.type===$a?ke=35056:ke=33189:D.type===zs&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),D.format===Vs&&ke===6402&&D.type!==qx&&D.type!==Ns&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),D.type=Ns,Ce=s.convert(D.type)),D.format===to&&ke===6402&&(ke=34041,D.type!==$a&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),D.type=$a,Ce=s.convert(D.type))),bt&&(at?t.texStorage2D(3553,1,ke,q.width,q.height):t.texImage2D(3553,0,ke,q.width,q.height,0,me,Ce,null));else if(D.isDataTexture)if(it.length>0&&be){at&&bt&&t.texStorage2D(3553,$,ke,it[0].width,it[0].height);for(let ue=0,Me=it.length;ue<Me;ue++)Ue=it[ue],at?t.texSubImage2D(3553,ue,0,0,Ue.width,Ue.height,me,Ce,Ue.data):t.texImage2D(3553,ue,ke,Ue.width,Ue.height,0,me,Ce,Ue.data);D.generateMipmaps=!1}else at?(bt&&t.texStorage2D(3553,$,ke,q.width,q.height),t.texSubImage2D(3553,0,0,0,q.width,q.height,me,Ce,q.data)):t.texImage2D(3553,0,ke,q.width,q.height,0,me,Ce,q.data);else if(D.isCompressedTexture)if(D.isCompressedArrayTexture){at&&bt&&t.texStorage3D(35866,$,ke,it[0].width,it[0].height,q.depth);for(let ue=0,Me=it.length;ue<Me;ue++)Ue=it[ue],D.format!==Hn?me!==null?at?t.compressedTexSubImage3D(35866,ue,0,0,0,Ue.width,Ue.height,q.depth,me,Ue.data,0,0):t.compressedTexImage3D(35866,ue,ke,Ue.width,Ue.height,q.depth,0,Ue.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage3D(35866,ue,0,0,0,Ue.width,Ue.height,q.depth,me,Ce,Ue.data):t.texImage3D(35866,ue,ke,Ue.width,Ue.height,q.depth,0,me,Ce,Ue.data)}else{at&&bt&&t.texStorage2D(3553,$,ke,it[0].width,it[0].height);for(let ue=0,Me=it.length;ue<Me;ue++)Ue=it[ue],D.format!==Hn?me!==null?at?t.compressedTexSubImage2D(3553,ue,0,0,Ue.width,Ue.height,me,Ue.data):t.compressedTexImage2D(3553,ue,ke,Ue.width,Ue.height,0,Ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?t.texSubImage2D(3553,ue,0,0,Ue.width,Ue.height,me,Ce,Ue.data):t.texImage2D(3553,ue,ke,Ue.width,Ue.height,0,me,Ce,Ue.data)}else if(D.isDataArrayTexture)at?(bt&&t.texStorage3D(35866,$,ke,q.width,q.height,q.depth),t.texSubImage3D(35866,0,0,0,0,q.width,q.height,q.depth,me,Ce,q.data)):t.texImage3D(35866,0,ke,q.width,q.height,q.depth,0,me,Ce,q.data);else if(D.isData3DTexture)at?(bt&&t.texStorage3D(32879,$,ke,q.width,q.height,q.depth),t.texSubImage3D(32879,0,0,0,0,q.width,q.height,q.depth,me,Ce,q.data)):t.texImage3D(32879,0,ke,q.width,q.height,q.depth,0,me,Ce,q.data);else if(D.isFramebufferTexture){if(bt)if(at)t.texStorage2D(3553,$,ke,q.width,q.height);else{let ue=q.width,Me=q.height;for(let Ie=0;Ie<$;Ie++)t.texImage2D(3553,Ie,ke,ue,Me,0,me,Ce,null),ue>>=1,Me>>=1}}else if(it.length>0&&be){at&&bt&&t.texStorage2D(3553,$,ke,it[0].width,it[0].height);for(let ue=0,Me=it.length;ue<Me;ue++)Ue=it[ue],at?t.texSubImage2D(3553,ue,0,0,me,Ce,Ue):t.texImage2D(3553,ue,ke,me,Ce,Ue);D.generateMipmaps=!1}else at?(bt&&t.texStorage2D(3553,$,ke,q.width,q.height),t.texSubImage2D(3553,0,0,0,me,Ce,q)):t.texImage2D(3553,0,ke,me,Ce,q);C(D,be)&&O(oe),Le.__version=fe.version,D.onUpdate&&D.onUpdate(D)}N.__version=D.version}function Ae(N,D,le){if(D.image.length!==6)return;const oe=Fe(N,D),_e=D.source;t.bindTexture(34067,N.__webglTexture,33984+le);const fe=i.get(_e);if(_e.version!==fe.__version||oe===!0){t.activeTexture(33984+le),r.pixelStorei(37440,D.flipY),r.pixelStorei(37441,D.premultiplyAlpha),r.pixelStorei(3317,D.unpackAlignment),r.pixelStorei(37443,0);const Le=D.isCompressedTexture||D.image[0].isCompressedTexture,F=D.image[0]&&D.image[0].isDataTexture,q=[];for(let ue=0;ue<6;ue++)!Le&&!F?q[ue]=w(D.image[ue],!1,!0,h):q[ue]=F?D.image[ue].image:D.image[ue],q[ue]=St(D,q[ue]);const be=q[0],me=T(be)||l,Ce=s.convert(D.format,D.encoding),ke=s.convert(D.type),Ue=S(D.internalFormat,Ce,ke,D.encoding),it=l&&D.isVideoTexture!==!0,at=fe.__version===void 0||oe===!0;let bt=L(D,be,me);j(34067,D,me);let $;if(Le){it&&at&&t.texStorage2D(34067,bt,Ue,be.width,be.height);for(let ue=0;ue<6;ue++){$=q[ue].mipmaps;for(let Me=0;Me<$.length;Me++){const Ie=$[Me];D.format!==Hn?Ce!==null?it?t.compressedTexSubImage2D(34069+ue,Me,0,0,Ie.width,Ie.height,Ce,Ie.data):t.compressedTexImage2D(34069+ue,Me,Ue,Ie.width,Ie.height,0,Ie.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?t.texSubImage2D(34069+ue,Me,0,0,Ie.width,Ie.height,Ce,ke,Ie.data):t.texImage2D(34069+ue,Me,Ue,Ie.width,Ie.height,0,Ce,ke,Ie.data)}}}else{$=D.mipmaps,it&&at&&($.length>0&&bt++,t.texStorage2D(34067,bt,Ue,q[0].width,q[0].height));for(let ue=0;ue<6;ue++)if(F){it?t.texSubImage2D(34069+ue,0,0,0,q[ue].width,q[ue].height,Ce,ke,q[ue].data):t.texImage2D(34069+ue,0,Ue,q[ue].width,q[ue].height,0,Ce,ke,q[ue].data);for(let Me=0;Me<$.length;Me++){const Ge=$[Me].image[ue].image;it?t.texSubImage2D(34069+ue,Me+1,0,0,Ge.width,Ge.height,Ce,ke,Ge.data):t.texImage2D(34069+ue,Me+1,Ue,Ge.width,Ge.height,0,Ce,ke,Ge.data)}}else{it?t.texSubImage2D(34069+ue,0,0,0,Ce,ke,q[ue]):t.texImage2D(34069+ue,0,Ue,Ce,ke,q[ue]);for(let Me=0;Me<$.length;Me++){const Ie=$[Me];it?t.texSubImage2D(34069+ue,Me+1,0,0,Ce,ke,Ie.image[ue]):t.texImage2D(34069+ue,Me+1,Ue,Ce,ke,Ie.image[ue])}}}C(D,me)&&O(34067),fe.__version=_e.version,D.onUpdate&&D.onUpdate(D)}N.__version=D.version}function Ee(N,D,le,oe,_e){const fe=s.convert(le.format,le.encoding),Le=s.convert(le.type),F=S(le.internalFormat,fe,Le,le.encoding);i.get(D).__hasExternalTextures||(_e===32879||_e===35866?t.texImage3D(_e,0,F,D.width,D.height,D.depth,0,fe,Le,null):t.texImage2D(_e,0,F,D.width,D.height,0,fe,Le,null)),t.bindFramebuffer(36160,N),ft(D)?p.framebufferTexture2DMultisampleEXT(36160,oe,_e,i.get(le).__webglTexture,0,xt(D)):(_e===3553||_e>=34069&&_e<=34074)&&r.framebufferTexture2D(36160,oe,_e,i.get(le).__webglTexture,0),t.bindFramebuffer(36160,null)}function We(N,D,le){if(r.bindRenderbuffer(36161,N),D.depthBuffer&&!D.stencilBuffer){let oe=33189;if(le||ft(D)){const _e=D.depthTexture;_e&&_e.isDepthTexture&&(_e.type===zs?oe=36012:_e.type===Ns&&(oe=33190));const fe=xt(D);ft(D)?p.renderbufferStorageMultisampleEXT(36161,fe,oe,D.width,D.height):r.renderbufferStorageMultisample(36161,fe,oe,D.width,D.height)}else r.renderbufferStorage(36161,oe,D.width,D.height);r.framebufferRenderbuffer(36160,36096,36161,N)}else if(D.depthBuffer&&D.stencilBuffer){const oe=xt(D);le&&ft(D)===!1?r.renderbufferStorageMultisample(36161,oe,35056,D.width,D.height):ft(D)?p.renderbufferStorageMultisampleEXT(36161,oe,35056,D.width,D.height):r.renderbufferStorage(36161,34041,D.width,D.height),r.framebufferRenderbuffer(36160,33306,36161,N)}else{const oe=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let _e=0;_e<oe.length;_e++){const fe=oe[_e],Le=s.convert(fe.format,fe.encoding),F=s.convert(fe.type),q=S(fe.internalFormat,Le,F,fe.encoding),be=xt(D);le&&ft(D)===!1?r.renderbufferStorageMultisample(36161,be,q,D.width,D.height):ft(D)?p.renderbufferStorageMultisampleEXT(36161,be,q,D.width,D.height):r.renderbufferStorage(36161,q,D.width,D.height)}}r.bindRenderbuffer(36161,null)}function Pe(N,D){if(D&&D.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,N),!(D.depthTexture&&D.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(D.depthTexture).__webglTexture||D.depthTexture.image.width!==D.width||D.depthTexture.image.height!==D.height)&&(D.depthTexture.image.width=D.width,D.depthTexture.image.height=D.height,D.depthTexture.needsUpdate=!0),xe(D.depthTexture,0);const oe=i.get(D.depthTexture).__webglTexture,_e=xt(D);if(D.depthTexture.format===Vs)ft(D)?p.framebufferTexture2DMultisampleEXT(36160,36096,3553,oe,0,_e):r.framebufferTexture2D(36160,36096,3553,oe,0);else if(D.depthTexture.format===to)ft(D)?p.framebufferTexture2DMultisampleEXT(36160,33306,3553,oe,0,_e):r.framebufferTexture2D(36160,33306,3553,oe,0);else throw new Error("Unknown depthTexture format")}function Ne(N){const D=i.get(N),le=N.isWebGLCubeRenderTarget===!0;if(N.depthTexture&&!D.__autoAllocateDepthBuffer){if(le)throw new Error("target.depthTexture not supported in Cube render targets");Pe(D.__webglFramebuffer,N)}else if(le){D.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)t.bindFramebuffer(36160,D.__webglFramebuffer[oe]),D.__webglDepthbuffer[oe]=r.createRenderbuffer(),We(D.__webglDepthbuffer[oe],N,!1)}else t.bindFramebuffer(36160,D.__webglFramebuffer),D.__webglDepthbuffer=r.createRenderbuffer(),We(D.__webglDepthbuffer,N,!1);t.bindFramebuffer(36160,null)}function Ye(N,D,le){const oe=i.get(N);D!==void 0&&Ee(oe.__webglFramebuffer,N,N.texture,36064,3553),le!==void 0&&Ne(N)}function mt(N){const D=N.texture,le=i.get(N),oe=i.get(D);N.addEventListener("dispose",re),N.isWebGLMultipleRenderTargets!==!0&&(oe.__webglTexture===void 0&&(oe.__webglTexture=r.createTexture()),oe.__version=D.version,o.memory.textures++);const _e=N.isWebGLCubeRenderTarget===!0,fe=N.isWebGLMultipleRenderTargets===!0,Le=T(N)||l;if(_e){le.__webglFramebuffer=[];for(let F=0;F<6;F++)le.__webglFramebuffer[F]=r.createFramebuffer()}else{if(le.__webglFramebuffer=r.createFramebuffer(),fe)if(n.drawBuffers){const F=N.texture;for(let q=0,be=F.length;q<be;q++){const me=i.get(F[q]);me.__webglTexture===void 0&&(me.__webglTexture=r.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(l&&N.samples>0&&ft(N)===!1){const F=fe?D:[D];le.__webglMultisampledFramebuffer=r.createFramebuffer(),le.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,le.__webglMultisampledFramebuffer);for(let q=0;q<F.length;q++){const be=F[q];le.__webglColorRenderbuffer[q]=r.createRenderbuffer(),r.bindRenderbuffer(36161,le.__webglColorRenderbuffer[q]);const me=s.convert(be.format,be.encoding),Ce=s.convert(be.type),ke=S(be.internalFormat,me,Ce,be.encoding,N.isXRRenderTarget===!0),Ue=xt(N);r.renderbufferStorageMultisample(36161,Ue,ke,N.width,N.height),r.framebufferRenderbuffer(36160,36064+q,36161,le.__webglColorRenderbuffer[q])}r.bindRenderbuffer(36161,null),N.depthBuffer&&(le.__webglDepthRenderbuffer=r.createRenderbuffer(),We(le.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(36160,null)}}if(_e){t.bindTexture(34067,oe.__webglTexture),j(34067,D,Le);for(let F=0;F<6;F++)Ee(le.__webglFramebuffer[F],N,D,36064,34069+F);C(D,Le)&&O(34067),t.unbindTexture()}else if(fe){const F=N.texture;for(let q=0,be=F.length;q<be;q++){const me=F[q],Ce=i.get(me);t.bindTexture(3553,Ce.__webglTexture),j(3553,me,Le),Ee(le.__webglFramebuffer,N,me,36064+q,3553),C(me,Le)&&O(3553)}t.unbindTexture()}else{let F=3553;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(l?F=N.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(F,oe.__webglTexture),j(F,D,Le),Ee(le.__webglFramebuffer,N,D,36064,F),C(D,Le)&&O(F),t.unbindTexture()}N.depthBuffer&&Ne(N)}function _t(N){const D=T(N)||l,le=N.isWebGLMultipleRenderTargets===!0?N.texture:[N.texture];for(let oe=0,_e=le.length;oe<_e;oe++){const fe=le[oe];if(C(fe,D)){const Le=N.isWebGLCubeRenderTarget?34067:3553,F=i.get(fe).__webglTexture;t.bindTexture(Le,F),O(Le),t.unbindTexture()}}}function et(N){if(l&&N.samples>0&&ft(N)===!1){const D=N.isWebGLMultipleRenderTargets?N.texture:[N.texture],le=N.width,oe=N.height;let _e=16384;const fe=[],Le=N.stencilBuffer?33306:36096,F=i.get(N),q=N.isWebGLMultipleRenderTargets===!0;if(q)for(let be=0;be<D.length;be++)t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+be,36161,null),t.bindFramebuffer(36160,F.__webglFramebuffer),r.framebufferTexture2D(36009,36064+be,3553,null,0);t.bindFramebuffer(36008,F.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,F.__webglFramebuffer);for(let be=0;be<D.length;be++){fe.push(36064+be),N.depthBuffer&&fe.push(Le);const me=F.__ignoreDepthValues!==void 0?F.__ignoreDepthValues:!1;if(me===!1&&(N.depthBuffer&&(_e|=256),N.stencilBuffer&&(_e|=1024)),q&&r.framebufferRenderbuffer(36008,36064,36161,F.__webglColorRenderbuffer[be]),me===!0&&(r.invalidateFramebuffer(36008,[Le]),r.invalidateFramebuffer(36009,[Le])),q){const Ce=i.get(D[be]).__webglTexture;r.framebufferTexture2D(36009,36064,3553,Ce,0)}r.blitFramebuffer(0,0,le,oe,0,0,le,oe,_e,9728),v&&r.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),q)for(let be=0;be<D.length;be++){t.bindFramebuffer(36160,F.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(36160,36064+be,36161,F.__webglColorRenderbuffer[be]);const me=i.get(D[be]).__webglTexture;t.bindFramebuffer(36160,F.__webglFramebuffer),r.framebufferTexture2D(36009,36064+be,3553,me,0)}t.bindFramebuffer(36009,F.__webglMultisampledFramebuffer)}}function xt(N){return Math.min(m,N.samples)}function ft(N){const D=i.get(N);return l&&N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&D.__useRenderToTexture!==!1}function Xt(N){const D=o.render.frame;y.get(N)!==D&&(y.set(N,D),N.update())}function St(N,D){const le=N.encoding,oe=N.format,_e=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||N.format===yd||le!==Zs&&(le===Nt?l===!1?e.has("EXT_sRGB")===!0&&oe===Hn?(N.format=yd,N.minFilter=Ei,N.generateMipmaps=!1):D=Zx.sRGBToLinear(D):(oe!==Hn||_e!==js)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",le)),D}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=xe,this.setTexture2DArray=ee,this.setTexture3D=ne,this.setTextureCube=ye,this.rebindTextures=Ye,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=Ee,this.useMultisampledRTT=ft}function wI(r,e,t){const i=t.isWebGL2;function n(s,o=null){let l;if(s===js)return 5121;if(s===mP)return 32819;if(s===gP)return 32820;if(s===fP)return 5120;if(s===dP)return 5122;if(s===qx)return 5123;if(s===pP)return 5124;if(s===Ns)return 5125;if(s===zs)return 5126;if(s===dl)return i?5131:(l=e.get("OES_texture_half_float"),l!==null?l.HALF_FLOAT_OES:null);if(s===_P)return 6406;if(s===Hn)return 6408;if(s===xP)return 6409;if(s===yP)return 6410;if(s===Vs)return 6402;if(s===to)return 34041;if(s===vP)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===yd)return l=e.get("EXT_sRGB"),l!==null?l.SRGB_ALPHA_EXT:null;if(s===bP)return 6403;if(s===wP)return 36244;if(s===SP)return 33319;if(s===MP)return 33320;if(s===EP)return 36249;if(s===nf||s===rf||s===sf||s===af)if(o===Nt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===nf)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===rf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===sf)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===af)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===nf)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===rf)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===sf)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===af)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===L_||s===R_||s===D_||s===O_)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===L_)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===R_)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===D_)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===O_)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===TP)return l=e.get("WEBGL_compressed_texture_etc1"),l!==null?l.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===I_||s===N_)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===I_)return o===Nt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===N_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===z_||s===F_||s===k_||s===U_||s===B_||s===V_||s===G_||s===W_||s===H_||s===$_||s===X_||s===q_||s===Y_||s===j_)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===z_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===F_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===k_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===U_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===B_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===V_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===G_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===W_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===H_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===$_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===X_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===q_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Y_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===j_)return o===Nt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Z_)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Z_)return o===Nt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===$a?i?34042:(l=e.get("WEBGL_depth_texture"),l!==null?l.UNSIGNED_INT_24_8_WEBGL:null):r[s]!==void 0?r[s]:null}return{convert:n}}class SI extends qi{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ka extends oi{constructor(){super(),this.isGroup=!0,this.type="Group"}}const MI={type:"move"};class Of{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new W,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new W),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new W,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new W),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,o=null;const l=this._targetRay,u=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){o=!0;for(const g of e.hand.values()){const _=t.getJointPose(g,i),b=this._getHandJoint(h,g);_!==null&&(b.matrix.fromArray(_.transform.matrix),b.matrix.decompose(b.position,b.rotation,b.scale),b.jointRadius=_.radius),b.visible=_!==null}const f=h.joints["index-finger-tip"],m=h.joints["thumb-tip"],p=f.position.distanceTo(m.position),v=.02,y=.005;h.inputState.pinching&&p>v+y?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=v-y&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else u!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));l!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(l.matrix.fromArray(n.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),n.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(n.linearVelocity)):l.hasLinearVelocity=!1,n.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(n.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(MI)))}return l!==null&&(l.visible=n!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class EI extends Ui{constructor(e,t,i,n,s,o,l,u,h,f){if(f=f!==void 0?f:Vs,f!==Vs&&f!==to)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Vs&&(i=Ns),i===void 0&&f===to&&(i=$a),super(null,n,s,o,l,u,f,i,h),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=l!==void 0?l:zi,this.minFilter=u!==void 0?u:zi,this.flipY=!1,this.generateMipmaps=!1}}class TI extends ps{constructor(e,t){super();const i=this;let n=null,s=1,o=null,l="local-floor",u=null,h=null,f=null,m=null,p=null,v=null;const y=t.getContextAttributes();let g=null,_=null;const b=[],A=[],w=new Set,T=new Map,M=new qi;M.layers.enable(1),M.viewport=new si;const C=new qi;C.layers.enable(2),C.viewport=new si;const O=[M,C],S=new SI;S.layers.enable(1),S.layers.enable(2);let L=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let ne=b[ee];return ne===void 0&&(ne=new Of,b[ee]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(ee){let ne=b[ee];return ne===void 0&&(ne=new Of,b[ee]=ne),ne.getGripSpace()},this.getHand=function(ee){let ne=b[ee];return ne===void 0&&(ne=new Of,b[ee]=ne),ne.getHandSpace()};function Y(ee){const ne=A.indexOf(ee.inputSource);if(ne===-1)return;const ye=b[ne];ye!==void 0&&ye.dispatchEvent({type:ee.type,data:ee.inputSource})}function re(){n.removeEventListener("select",Y),n.removeEventListener("selectstart",Y),n.removeEventListener("selectend",Y),n.removeEventListener("squeeze",Y),n.removeEventListener("squeezestart",Y),n.removeEventListener("squeezeend",Y),n.removeEventListener("end",re),n.removeEventListener("inputsourceschange",G);for(let ee=0;ee<b.length;ee++){const ne=A[ee];ne!==null&&(A[ee]=null,b[ee].disconnect(ne))}L=null,k=null,e.setRenderTarget(g),p=null,m=null,f=null,n=null,_=null,xe.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){s=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){l=ee,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(ee){u=ee},this.getBaseLayer=function(){return m!==null?m:p},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return n},this.setSession=async function(ee){if(n=ee,n!==null){if(g=e.getRenderTarget(),n.addEventListener("select",Y),n.addEventListener("selectstart",Y),n.addEventListener("selectend",Y),n.addEventListener("squeeze",Y),n.addEventListener("squeezestart",Y),n.addEventListener("squeezeend",Y),n.addEventListener("end",re),n.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ne={antialias:n.renderState.layers===void 0?y.antialias:!0,alpha:y.alpha,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(n,t,ne),n.updateRenderState({baseLayer:p}),_=new Yn(p.framebufferWidth,p.framebufferHeight,{format:Hn,type:js,encoding:e.outputEncoding,stencilBuffer:y.stencil})}else{let ne=null,ye=null,J=null;y.depth&&(J=y.stencil?35056:33190,ne=y.stencil?to:Vs,ye=y.stencil?$a:Ns);const de={colorFormat:32856,depthFormat:J,scaleFactor:s};f=new XRWebGLBinding(n,t),m=f.createProjectionLayer(de),n.updateRenderState({layers:[m]}),_=new Yn(m.textureWidth,m.textureHeight,{format:Hn,type:js,depthTexture:new EI(m.textureWidth,m.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:y.stencil,encoding:e.outputEncoding,samples:y.antialias?4:0});const j=e.properties.get(_);j.__ignoreDepthValues=m.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(1),u=null,o=await n.requestReferenceSpace(l),xe.setContext(n),xe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function G(ee){for(let ne=0;ne<ee.removed.length;ne++){const ye=ee.removed[ne],J=A.indexOf(ye);J>=0&&(A[J]=null,b[J].disconnect(ye))}for(let ne=0;ne<ee.added.length;ne++){const ye=ee.added[ne];let J=A.indexOf(ye);if(J===-1){for(let j=0;j<b.length;j++)if(j>=A.length){A.push(ye),J=j;break}else if(A[j]===null){A[j]=ye,J=j;break}if(J===-1)break}const de=b[J];de&&de.connect(ye)}}const V=new W,K=new W;function se(ee,ne,ye){V.setFromMatrixPosition(ne.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const J=V.distanceTo(K),de=ne.projectionMatrix.elements,j=ye.projectionMatrix.elements,Fe=de[14]/(de[10]-1),Te=de[14]/(de[10]+1),Ae=(de[9]+1)/de[5],Ee=(de[9]-1)/de[5],We=(de[8]-1)/de[0],Pe=(j[8]+1)/j[0],Ne=Fe*We,Ye=Fe*Pe,mt=J/(-We+Pe),_t=mt*-We;ne.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(_t),ee.translateZ(mt),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert();const et=Fe+mt,xt=Te+mt,ft=Ne-_t,Xt=Ye+(J-_t),St=Ae*Te/xt*et,N=Ee*Te/xt*et;ee.projectionMatrix.makePerspective(ft,Xt,St,N,et,xt)}function ae(ee,ne){ne===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(ne.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(n===null)return;S.near=C.near=M.near=ee.near,S.far=C.far=M.far=ee.far,(L!==S.near||k!==S.far)&&(n.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,k=S.far);const ne=ee.parent,ye=S.cameras;ae(S,ne);for(let de=0;de<ye.length;de++)ae(ye[de],ne);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),ee.matrix.copy(S.matrix),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale);const J=ee.children;for(let de=0,j=J.length;de<j;de++)J[de].updateMatrixWorld(!0);ye.length===2?se(S,M,C):S.projectionMatrix.copy(M.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(m!==null)return m.fixedFoveation;if(p!==null)return p.fixedFoveation},this.setFoveation=function(ee){m!==null&&(m.fixedFoveation=ee),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ee)},this.getPlanes=function(){return w};let te=null;function Se(ee,ne){if(h=ne.getViewerPose(u||o),v=ne,h!==null){const ye=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let J=!1;ye.length!==S.cameras.length&&(S.cameras.length=0,J=!0);for(let de=0;de<ye.length;de++){const j=ye[de];let Fe=null;if(p!==null)Fe=p.getViewport(j);else{const Ae=f.getViewSubImage(m,j);Fe=Ae.viewport,de===0&&(e.setRenderTargetTextures(_,Ae.colorTexture,m.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(_))}let Te=O[de];Te===void 0&&(Te=new qi,Te.layers.enable(de),Te.viewport=new si,O[de]=Te),Te.matrix.fromArray(j.transform.matrix),Te.projectionMatrix.fromArray(j.projectionMatrix),Te.viewport.set(Fe.x,Fe.y,Fe.width,Fe.height),de===0&&S.matrix.copy(Te.matrix),J===!0&&S.cameras.push(Te)}}for(let ye=0;ye<b.length;ye++){const J=A[ye],de=b[ye];J!==null&&de!==void 0&&de.update(J,ne,u||o)}if(te&&te(ee,ne),ne.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ne.detectedPlanes});let ye=null;for(const J of w)ne.detectedPlanes.has(J)||(ye===null&&(ye=[]),ye.push(J));if(ye!==null)for(const J of ye)w.delete(J),T.delete(J),i.dispatchEvent({type:"planeremoved",data:J});for(const J of ne.detectedPlanes)if(!w.has(J))w.add(J),T.set(J,ne.lastChangedTime),i.dispatchEvent({type:"planeadded",data:J});else{const de=T.get(J);J.lastChangedTime>de&&(T.set(J,J.lastChangedTime),i.dispatchEvent({type:"planechanged",data:J}))}}v=null}const xe=new oy;xe.setAnimationLoop(Se),this.setAnimationLoop=function(ee){te=ee},this.dispose=function(){}}}function AI(r,e){function t(g,_){_.color.getRGB(g.fogColor.value,iy(r)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function i(g,_,b,A,w){_.isMeshBasicMaterial||_.isMeshLambertMaterial?n(g,_):_.isMeshToonMaterial?(n(g,_),f(g,_)):_.isMeshPhongMaterial?(n(g,_),h(g,_)):_.isMeshStandardMaterial?(n(g,_),m(g,_),_.isMeshPhysicalMaterial&&p(g,_,w)):_.isMeshMatcapMaterial?(n(g,_),v(g,_)):_.isMeshDepthMaterial?n(g,_):_.isMeshDistanceMaterial?(n(g,_),y(g,_)):_.isMeshNormalMaterial?n(g,_):_.isLineBasicMaterial?(s(g,_),_.isLineDashedMaterial&&o(g,_)):_.isPointsMaterial?l(g,_,b,A):_.isSpriteMaterial?u(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function n(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.bumpMap&&(g.bumpMap.value=_.bumpMap,g.bumpScale.value=_.bumpScale,_.side===dn&&(g.bumpScale.value*=-1)),_.displacementMap&&(g.displacementMap.value=_.displacementMap,g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap),_.normalMap&&(g.normalMap.value=_.normalMap,g.normalScale.value.copy(_.normalScale),_.side===dn&&g.normalScale.value.negate()),_.specularMap&&(g.specularMap.value=_.specularMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const b=e.get(_).envMap;if(b&&(g.envMap.value=b,g.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const T=r.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*T}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity);let A;_.map?A=_.map:_.specularMap?A=_.specularMap:_.displacementMap?A=_.displacementMap:_.normalMap?A=_.normalMap:_.bumpMap?A=_.bumpMap:_.roughnessMap?A=_.roughnessMap:_.metalnessMap?A=_.metalnessMap:_.alphaMap?A=_.alphaMap:_.emissiveMap?A=_.emissiveMap:_.clearcoatMap?A=_.clearcoatMap:_.clearcoatNormalMap?A=_.clearcoatNormalMap:_.clearcoatRoughnessMap?A=_.clearcoatRoughnessMap:_.iridescenceMap?A=_.iridescenceMap:_.iridescenceThicknessMap?A=_.iridescenceThicknessMap:_.specularIntensityMap?A=_.specularIntensityMap:_.specularColorMap?A=_.specularColorMap:_.transmissionMap?A=_.transmissionMap:_.thicknessMap?A=_.thicknessMap:_.sheenColorMap?A=_.sheenColorMap:_.sheenRoughnessMap&&(A=_.sheenRoughnessMap),A!==void 0&&(A.isWebGLRenderTarget&&(A=A.texture),A.matrixAutoUpdate===!0&&A.updateMatrix(),g.uvTransform.value.copy(A.matrix));let w;_.aoMap?w=_.aoMap:_.lightMap&&(w=_.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uv2Transform.value.copy(w.matrix))}function s(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity}function o(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,b,A){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*b,g.scale.value=A*.5,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let w;_.map?w=_.map:_.alphaMap&&(w=_.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),g.uvTransform.value.copy(w.matrix))}function u(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map),_.alphaMap&&(g.alphaMap.value=_.alphaMap),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);let b;_.map?b=_.map:_.alphaMap&&(b=_.alphaMap),b!==void 0&&(b.matrixAutoUpdate===!0&&b.updateMatrix(),g.uvTransform.value.copy(b.matrix))}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function m(g,_){g.roughness.value=_.roughness,g.metalness.value=_.metalness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap),_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function p(g,_,b){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap)),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap),_.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),g.clearcoatNormalMap.value=_.clearcoatNormalMap,_.side===dn&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap)),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=b.texture,g.transmissionSamplerSize.value.set(b.width,b.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap)}function v(g,_){_.matcap&&(g.matcap.value=_.matcap)}function y(g,_){g.referencePosition.value.copy(_.referencePosition),g.nearDistance.value=_.nearDistance,g.farDistance.value=_.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function CI(r,e,t,i){let n={},s={},o=[];const l=t.isWebGL2?r.getParameter(35375):0;function u(A,w){const T=w.program;i.uniformBlockBinding(A,T)}function h(A,w){let T=n[A.id];T===void 0&&(y(A),T=f(A),n[A.id]=T,A.addEventListener("dispose",_));const M=w.program;i.updateUBOMapping(A,M);const C=e.render.frame;s[A.id]!==C&&(p(A),s[A.id]=C)}function f(A){const w=m();A.__bindingPointIndex=w;const T=r.createBuffer(),M=A.__size,C=A.usage;return r.bindBuffer(35345,T),r.bufferData(35345,M,C),r.bindBuffer(35345,null),r.bindBufferBase(35345,w,T),T}function m(){for(let A=0;A<l;A++)if(o.indexOf(A)===-1)return o.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(A){const w=n[A.id],T=A.uniforms,M=A.__cache;r.bindBuffer(35345,w);for(let C=0,O=T.length;C<O;C++){const S=T[C];if(v(S,C,M)===!0){const L=S.__offset,k=Array.isArray(S.value)?S.value:[S.value];let Y=0;for(let re=0;re<k.length;re++){const G=k[re],V=g(G);typeof G=="number"?(S.__data[0]=G,r.bufferSubData(35345,L+Y,S.__data)):G.isMatrix3?(S.__data[0]=G.elements[0],S.__data[1]=G.elements[1],S.__data[2]=G.elements[2],S.__data[3]=G.elements[0],S.__data[4]=G.elements[3],S.__data[5]=G.elements[4],S.__data[6]=G.elements[5],S.__data[7]=G.elements[0],S.__data[8]=G.elements[6],S.__data[9]=G.elements[7],S.__data[10]=G.elements[8],S.__data[11]=G.elements[0]):(G.toArray(S.__data,Y),Y+=V.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(35345,L,S.__data)}}r.bindBuffer(35345,null)}function v(A,w,T){const M=A.value;if(T[w]===void 0){if(typeof M=="number")T[w]=M;else{const C=Array.isArray(M)?M:[M],O=[];for(let S=0;S<C.length;S++)O.push(C[S].clone());T[w]=O}return!0}else if(typeof M=="number"){if(T[w]!==M)return T[w]=M,!0}else{const C=Array.isArray(T[w])?T[w]:[T[w]],O=Array.isArray(M)?M:[M];for(let S=0;S<C.length;S++){const L=C[S];if(L.equals(O[S])===!1)return L.copy(O[S]),!0}}return!1}function y(A){const w=A.uniforms;let T=0;const M=16;let C=0;for(let O=0,S=w.length;O<S;O++){const L=w[O],k={boundary:0,storage:0},Y=Array.isArray(L.value)?L.value:[L.value];for(let re=0,G=Y.length;re<G;re++){const V=Y[re],K=g(V);k.boundary+=K.boundary,k.storage+=K.storage}if(L.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),L.__offset=T,O>0){C=T%M;const re=M-C;C!==0&&re-k.boundary<0&&(T+=M-C,L.__offset=T)}T+=k.storage}return C=T%M,C>0&&(T+=M-C),A.__size=T,A.__cache={},this}function g(A){const w={boundary:0,storage:0};return typeof A=="number"?(w.boundary=4,w.storage=4):A.isVector2?(w.boundary=8,w.storage=8):A.isVector3||A.isColor?(w.boundary=16,w.storage=12):A.isVector4?(w.boundary=16,w.storage=16):A.isMatrix3?(w.boundary=48,w.storage=48):A.isMatrix4?(w.boundary=64,w.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),w}function _(A){const w=A.target;w.removeEventListener("dispose",_);const T=o.indexOf(w.__bindingPointIndex);o.splice(T,1),r.deleteBuffer(n[w.id]),delete n[w.id],delete s[w.id]}function b(){for(const A in n)r.deleteBuffer(n[A]);o=[],n={},s={}}return{bind:u,update:h,dispose:b}}function PI(){const r=ml("canvas");return r.style.display="block",r}function fy(r={}){this.isWebGLRenderer=!0;const e=r.canvas!==void 0?r.canvas:PI(),t=r.context!==void 0?r.context:null,i=r.depth!==void 0?r.depth:!0,n=r.stencil!==void 0?r.stencil:!0,s=r.antialias!==void 0?r.antialias:!1,o=r.premultipliedAlpha!==void 0?r.premultipliedAlpha:!0,l=r.preserveDrawingBuffer!==void 0?r.preserveDrawingBuffer:!1,u=r.powerPreference!==void 0?r.powerPreference:"default",h=r.failIfMajorPerformanceCaveat!==void 0?r.failIfMajorPerformanceCaveat:!1;let f;t!==null?f=t.getContextAttributes().alpha:f=r.alpha!==void 0?r.alpha:!1;let m=null,p=null;const v=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=Zs,this.physicallyCorrectLights=!1,this.toneMapping=Ir,this.toneMappingExposure=1;const g=this;let _=!1,b=0,A=0,w=null,T=-1,M=null;const C=new si,O=new si;let S=null,L=e.width,k=e.height,Y=1,re=null,G=null;const V=new si(0,0,L,k),K=new si(0,0,L,k);let se=!1;const ae=new ay;let te=!1,Se=!1,xe=null;const ee=new ai,ne=new Re,ye=new W,J={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function de(){return w===null?Y:1}let j=t;function Fe(I,Q){for(let he=0;he<I.length;he++){const Z=I[he],pe=e.getContext(Z,Q);if(pe!==null)return pe}return null}try{const I={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${hp}`),e.addEventListener("webglcontextlost",ke,!1),e.addEventListener("webglcontextrestored",Ue,!1),e.addEventListener("webglcontextcreationerror",it,!1),j===null){const Q=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&Q.shift(),j=Fe(Q,I),j===null)throw Fe(Q)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(I){throw console.error("THREE.WebGLRenderer: "+I.message),I}let Te,Ae,Ee,We,Pe,Ne,Ye,mt,_t,et,xt,ft,Xt,St,N,D,le,oe,_e,fe,Le,F,q,be;function me(){Te=new BD(j),Ae=new ID(j,Te,r),Te.init(Ae),F=new wI(j,Te,Ae),Ee=new yI(j,Te,Ae),We=new WD,Pe=new aI,Ne=new bI(j,Te,Ee,Pe,Ae,F,We),Ye=new zD(g),mt=new UD(g),_t=new JP(j,Ae),q=new DD(j,Te,_t,Ae),et=new VD(j,_t,We,q),xt=new qD(j,et,_t,We),_e=new XD(j,Ae,Ne),D=new ND(Pe),ft=new sI(g,Ye,mt,Te,Ae,q,D),Xt=new AI(g,Pe),St=new lI,N=new pI(Te,Ae),oe=new RD(g,Ye,mt,Ee,xt,f,o),le=new xI(g,xt,Ae),be=new CI(j,We,Ae,Ee),fe=new OD(j,Te,We,Ae),Le=new GD(j,Te,We,Ae),We.programs=ft.programs,g.capabilities=Ae,g.extensions=Te,g.properties=Pe,g.renderLists=St,g.shadowMap=le,g.state=Ee,g.info=We}me();const Ce=new TI(g,j);this.xr=Ce,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const I=Te.get("WEBGL_lose_context");I&&I.loseContext()},this.forceContextRestore=function(){const I=Te.get("WEBGL_lose_context");I&&I.restoreContext()},this.getPixelRatio=function(){return Y},this.setPixelRatio=function(I){I!==void 0&&(Y=I,this.setSize(L,k,!1))},this.getSize=function(I){return I.set(L,k)},this.setSize=function(I,Q,he){if(Ce.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}L=I,k=Q,e.width=Math.floor(I*Y),e.height=Math.floor(Q*Y),he!==!1&&(e.style.width=I+"px",e.style.height=Q+"px"),this.setViewport(0,0,I,Q)},this.getDrawingBufferSize=function(I){return I.set(L*Y,k*Y).floor()},this.setDrawingBufferSize=function(I,Q,he){L=I,k=Q,Y=he,e.width=Math.floor(I*he),e.height=Math.floor(Q*he),this.setViewport(0,0,I,Q)},this.getCurrentViewport=function(I){return I.copy(C)},this.getViewport=function(I){return I.copy(V)},this.setViewport=function(I,Q,he,Z){I.isVector4?V.set(I.x,I.y,I.z,I.w):V.set(I,Q,he,Z),Ee.viewport(C.copy(V).multiplyScalar(Y).floor())},this.getScissor=function(I){return I.copy(K)},this.setScissor=function(I,Q,he,Z){I.isVector4?K.set(I.x,I.y,I.z,I.w):K.set(I,Q,he,Z),Ee.scissor(O.copy(K).multiplyScalar(Y).floor())},this.getScissorTest=function(){return se},this.setScissorTest=function(I){Ee.setScissorTest(se=I)},this.setOpaqueSort=function(I){re=I},this.setTransparentSort=function(I){G=I},this.getClearColor=function(I){return I.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor.apply(oe,arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha.apply(oe,arguments)},this.clear=function(I=!0,Q=!0,he=!0){let Z=0;I&&(Z|=16384),Q&&(Z|=256),he&&(Z|=1024),j.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ke,!1),e.removeEventListener("webglcontextrestored",Ue,!1),e.removeEventListener("webglcontextcreationerror",it,!1),St.dispose(),N.dispose(),Pe.dispose(),Ye.dispose(),mt.dispose(),xt.dispose(),q.dispose(),be.dispose(),ft.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",Ie),Ce.removeEventListener("sessionend",Ge),xe&&(xe.dispose(),xe=null),vt.stop()};function ke(I){I.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Ue(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const I=We.autoReset,Q=le.enabled,he=le.autoUpdate,Z=le.needsUpdate,pe=le.type;me(),We.autoReset=I,le.enabled=Q,le.autoUpdate=he,le.needsUpdate=Z,le.type=pe}function it(I){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",I.statusMessage)}function at(I){const Q=I.target;Q.removeEventListener("dispose",at),bt(Q)}function bt(I){$(I),Pe.remove(I)}function $(I){const Q=Pe.get(I).programs;Q!==void 0&&(Q.forEach(function(he){ft.releaseProgram(he)}),I.isShaderMaterial&&ft.releaseShaderCache(I))}this.renderBufferDirect=function(I,Q,he,Z,pe,He){Q===null&&(Q=J);const je=pe.isMesh&&pe.matrixWorld.determinant()<0,Je=Uu(I,Q,he,Z,pe);Ee.setMaterial(Z,je);let nt=he.index,gt=1;Z.wireframe===!0&&(nt=et.getWireframeAttribute(he),gt=2);const lt=he.drawRange,ct=he.attributes.position;let Gt=lt.start*gt,Li=(lt.start+lt.count)*gt;He!==null&&(Gt=Math.max(Gt,He.start*gt),Li=Math.min(Li,(He.start+He.count)*gt)),nt!==null?(Gt=Math.max(Gt,0),Li=Math.min(Li,nt.count)):ct!=null&&(Gt=Math.max(Gt,0),Li=Math.min(Li,ct.count));const Gi=Li-Gt;if(Gi<0||Gi===1/0)return;q.setup(pe,Z,Je,he,nt);let pr,Ot=fe;if(nt!==null&&(pr=_t.get(nt),Ot=Le,Ot.setIndex(pr)),pe.isMesh)Z.wireframe===!0?(Ee.setLineWidth(Z.wireframeLinewidth*de()),Ot.setMode(1)):Ot.setMode(4);else if(pe.isLine){let ut=Z.linewidth;ut===void 0&&(ut=1),Ee.setLineWidth(ut*de()),pe.isLineSegments?Ot.setMode(1):pe.isLineLoop?Ot.setMode(2):Ot.setMode(3)}else pe.isPoints?Ot.setMode(0):pe.isSprite&&Ot.setMode(4);if(pe.isInstancedMesh)Ot.renderInstances(Gt,Gi,pe.count);else if(he.isInstancedBufferGeometry){const ut=he._maxInstanceCount!==void 0?he._maxInstanceCount:1/0,vo=Math.min(he.instanceCount,ut);Ot.renderInstances(Gt,Gi,vo)}else Ot.render(Gt,Gi)},this.compile=function(I,Q){function he(Z,pe,He){Z.transparent===!0&&Z.side===Sc?(Z.side=dn,Z.needsUpdate=!0,Vi(Z,pe,He),Z.side=Ys,Z.needsUpdate=!0,Vi(Z,pe,He),Z.side=Sc):Vi(Z,pe,He)}p=N.get(I),p.init(),y.push(p),I.traverseVisible(function(Z){Z.isLight&&Z.layers.test(Q.layers)&&(p.pushLight(Z),Z.castShadow&&p.pushShadow(Z))}),p.setupLights(g.physicallyCorrectLights),I.traverse(function(Z){const pe=Z.material;if(pe)if(Array.isArray(pe))for(let He=0;He<pe.length;He++){const je=pe[He];he(je,I,Z)}else he(pe,I,Z)}),y.pop(),p=null};let ue=null;function Me(I){ue&&ue(I)}function Ie(){vt.stop()}function Ge(){vt.start()}const vt=new oy;vt.setAnimationLoop(Me),typeof self<"u"&&vt.setContext(self),this.setAnimationLoop=function(I){ue=I,Ce.setAnimationLoop(I),I===null?vt.stop():vt.start()},Ce.addEventListener("sessionstart",Ie),Ce.addEventListener("sessionend",Ge),this.render=function(I,Q){if(Q!==void 0&&Q.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),Q.parent===null&&Q.matrixWorldAutoUpdate===!0&&Q.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(Q),Q=Ce.getCamera()),I.isScene===!0&&I.onBeforeRender(g,I,Q,w),p=N.get(I,y.length),p.init(),y.push(p),ee.multiplyMatrices(Q.projectionMatrix,Q.matrixWorldInverse),ae.setFromProjectionMatrix(ee),Se=this.localClippingEnabled,te=D.init(this.clippingPlanes,Se,Q),m=St.get(I,v.length),m.init(),v.push(m),Zt(I,Q,0,g.sortObjects),m.finish(),g.sortObjects===!0&&m.sort(re,G),te===!0&&D.beginShadows();const he=p.state.shadowsArray;if(le.render(he,I,Q),te===!0&&D.endShadows(),this.info.autoReset===!0&&this.info.reset(),oe.render(m,I),p.setupLights(g.physicallyCorrectLights),Q.isArrayCamera){const Z=Q.cameras;for(let pe=0,He=Z.length;pe<He;pe++){const je=Z[pe];ui(m,I,je,je.viewport)}}else ui(m,I,Q);w!==null&&(Ne.updateMultisampleRenderTarget(w),Ne.updateRenderTargetMipmap(w)),I.isScene===!0&&I.onAfterRender(g,I,Q),q.resetDefaultState(),T=-1,M=null,y.pop(),y.length>0?p=y[y.length-1]:p=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Zt(I,Q,he,Z){if(I.visible===!1)return;if(I.layers.test(Q.layers)){if(I.isGroup)he=I.renderOrder;else if(I.isLOD)I.autoUpdate===!0&&I.update(Q);else if(I.isLight)p.pushLight(I),I.castShadow&&p.pushShadow(I);else if(I.isSprite){if(!I.frustumCulled||ae.intersectsSprite(I)){Z&&ye.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ee);const je=xt.update(I),Je=I.material;Je.visible&&m.push(I,je,Je,he,ye.z,null)}}else if((I.isMesh||I.isLine||I.isPoints)&&(I.isSkinnedMesh&&I.skeleton.frame!==We.render.frame&&(I.skeleton.update(),I.skeleton.frame=We.render.frame),!I.frustumCulled||ae.intersectsObject(I))){Z&&ye.setFromMatrixPosition(I.matrixWorld).applyMatrix4(ee);const je=xt.update(I),Je=I.material;if(Array.isArray(Je)){const nt=je.groups;for(let gt=0,lt=nt.length;gt<lt;gt++){const ct=nt[gt],Gt=Je[ct.materialIndex];Gt&&Gt.visible&&m.push(I,je,Gt,he,ye.z,ct)}}else Je.visible&&m.push(I,je,Je,he,ye.z,null)}}const He=I.children;for(let je=0,Je=He.length;je<Je;je++)Zt(He[je],Q,he,Z)}function ui(I,Q,he,Z){const pe=I.opaque,He=I.transmissive,je=I.transparent;p.setupLightsView(he),He.length>0&&Zn(pe,Q,he),Z&&Ee.viewport(C.copy(Z)),pe.length>0&&Rt(pe,Q,he),He.length>0&&Rt(He,Q,he),je.length>0&&Rt(je,Q,he),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Zn(I,Q,he){const Z=Ae.isWebGL2;xe===null&&(xe=new Yn(1,1,{generateMipmaps:!0,type:Te.has("EXT_color_buffer_half_float")?dl:js,minFilter:fl,samples:Z&&s===!0?4:0})),g.getDrawingBufferSize(ne),Z?xe.setSize(ne.x,ne.y):xe.setSize(bd(ne.x),bd(ne.y));const pe=g.getRenderTarget();g.setRenderTarget(xe),g.clear();const He=g.toneMapping;g.toneMapping=Ir,Rt(I,Q,he),g.toneMapping=He,Ne.updateMultisampleRenderTarget(xe),Ne.updateRenderTargetMipmap(xe),g.setRenderTarget(pe)}function Rt(I,Q,he){const Z=Q.isScene===!0?Q.overrideMaterial:null;for(let pe=0,He=I.length;pe<He;pe++){const je=I[pe],Je=je.object,nt=je.geometry,gt=Z===null?je.material:Z,lt=je.group;Je.layers.test(he.layers)&&In(Je,Q,he,nt,gt,lt)}}function In(I,Q,he,Z,pe,He){I.onBeforeRender(g,Q,he,Z,pe,He),I.modelViewMatrix.multiplyMatrices(he.matrixWorldInverse,I.matrixWorld),I.normalMatrix.getNormalMatrix(I.modelViewMatrix),pe.onBeforeRender(g,Q,he,Z,I,He),pe.transparent===!0&&pe.side===Sc?(pe.side=dn,pe.needsUpdate=!0,g.renderBufferDirect(he,Q,Z,pe,I,He),pe.side=Ys,pe.needsUpdate=!0,g.renderBufferDirect(he,Q,Z,pe,I,He),pe.side=Sc):g.renderBufferDirect(he,Q,Z,pe,I,He),I.onAfterRender(g,Q,he,Z,pe,He)}function Vi(I,Q,he){Q.isScene!==!0&&(Q=J);const Z=Pe.get(I),pe=p.state.lights,He=p.state.shadowsArray,je=pe.state.version,Je=ft.getParameters(I,pe.state,He,Q,he),nt=ft.getProgramCacheKey(Je);let gt=Z.programs;Z.environment=I.isMeshStandardMaterial?Q.environment:null,Z.fog=Q.fog,Z.envMap=(I.isMeshStandardMaterial?mt:Ye).get(I.envMap||Z.environment),gt===void 0&&(I.addEventListener("dispose",at),gt=new Map,Z.programs=gt);let lt=gt.get(nt);if(lt!==void 0){if(Z.currentProgram===lt&&Z.lightsStateVersion===je)return ta(I,Je),lt}else Je.uniforms=ft.getUniforms(I),I.onBuild(he,Je,g),I.onBeforeCompile(Je,g),lt=ft.acquireProgram(Je,nt),gt.set(nt,lt),Z.uniforms=Je.uniforms;const ct=Z.uniforms;(!I.isShaderMaterial&&!I.isRawShaderMaterial||I.clipping===!0)&&(ct.clippingPlanes=D.uniform),ta(I,Je),Z.needsLights=Bu(I),Z.lightsStateVersion=je,Z.needsLights&&(ct.ambientLightColor.value=pe.state.ambient,ct.lightProbe.value=pe.state.probe,ct.directionalLights.value=pe.state.directional,ct.directionalLightShadows.value=pe.state.directionalShadow,ct.spotLights.value=pe.state.spot,ct.spotLightShadows.value=pe.state.spotShadow,ct.rectAreaLights.value=pe.state.rectArea,ct.ltc_1.value=pe.state.rectAreaLTC1,ct.ltc_2.value=pe.state.rectAreaLTC2,ct.pointLights.value=pe.state.point,ct.pointLightShadows.value=pe.state.pointShadow,ct.hemisphereLights.value=pe.state.hemi,ct.directionalShadowMap.value=pe.state.directionalShadowMap,ct.directionalShadowMatrix.value=pe.state.directionalShadowMatrix,ct.spotShadowMap.value=pe.state.spotShadowMap,ct.spotLightMatrix.value=pe.state.spotLightMatrix,ct.spotLightMap.value=pe.state.spotLightMap,ct.pointShadowMap.value=pe.state.pointShadowMap,ct.pointShadowMatrix.value=pe.state.pointShadowMatrix);const Gt=lt.getUniforms(),Li=Yc.seqWithValue(Gt.seq,ct);return Z.currentProgram=lt,Z.uniformsList=Li,lt}function ta(I,Q){const he=Pe.get(I);he.outputEncoding=Q.outputEncoding,he.instancing=Q.instancing,he.skinning=Q.skinning,he.morphTargets=Q.morphTargets,he.morphNormals=Q.morphNormals,he.morphColors=Q.morphColors,he.morphTargetsCount=Q.morphTargetsCount,he.numClippingPlanes=Q.numClippingPlanes,he.numIntersection=Q.numClipIntersection,he.vertexAlphas=Q.vertexAlphas,he.vertexTangents=Q.vertexTangents,he.toneMapping=Q.toneMapping}function Uu(I,Q,he,Z,pe){Q.isScene!==!0&&(Q=J),Ne.resetTextureUnits();const He=Q.fog,je=Z.isMeshStandardMaterial?Q.environment:null,Je=w===null?g.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:Zs,nt=(Z.isMeshStandardMaterial?mt:Ye).get(Z.envMap||je),gt=Z.vertexColors===!0&&!!he.attributes.color&&he.attributes.color.itemSize===4,lt=!!Z.normalMap&&!!he.attributes.tangent,ct=!!he.morphAttributes.position,Gt=!!he.morphAttributes.normal,Li=!!he.morphAttributes.color,Gi=Z.toneMapped?g.toneMapping:Ir,pr=he.morphAttributes.position||he.morphAttributes.normal||he.morphAttributes.color,Ot=pr!==void 0?pr.length:0,ut=Pe.get(Z),vo=p.state.lights;if(te===!0&&(Se===!0||I!==M)){const yi=I===M&&Z.id===T;D.setState(Z,I,yi)}let Kt=!1;Z.version===ut.__version?(ut.needsLights&&ut.lightsStateVersion!==vo.state.version||ut.outputEncoding!==Je||pe.isInstancedMesh&&ut.instancing===!1||!pe.isInstancedMesh&&ut.instancing===!0||pe.isSkinnedMesh&&ut.skinning===!1||!pe.isSkinnedMesh&&ut.skinning===!0||ut.envMap!==nt||Z.fog===!0&&ut.fog!==He||ut.numClippingPlanes!==void 0&&(ut.numClippingPlanes!==D.numPlanes||ut.numIntersection!==D.numIntersection)||ut.vertexAlphas!==gt||ut.vertexTangents!==lt||ut.morphTargets!==ct||ut.morphNormals!==Gt||ut.morphColors!==Li||ut.toneMapping!==Gi||Ae.isWebGL2===!0&&ut.morphTargetsCount!==Ot)&&(Kt=!0):(Kt=!0,ut.__version=Z.version);let Kn=ut.currentProgram;Kt===!0&&(Kn=Vi(Z,Q,pe));let xo=!1,kr=!1,yo=!1;const mi=Kn.getUniforms(),mr=ut.uniforms;if(Ee.useProgram(Kn.program)&&(xo=!0,kr=!0,yo=!0),Z.id!==T&&(T=Z.id,kr=!0),xo||M!==I){if(mi.setValue(j,"projectionMatrix",I.projectionMatrix),Ae.logarithmicDepthBuffer&&mi.setValue(j,"logDepthBufFC",2/(Math.log(I.far+1)/Math.LN2)),M!==I&&(M=I,kr=!0,yo=!0),Z.isShaderMaterial||Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshStandardMaterial||Z.envMap){const yi=mi.map.cameraPosition;yi!==void 0&&yi.setValue(j,ye.setFromMatrixPosition(I.matrixWorld))}(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&mi.setValue(j,"isOrthographic",I.isOrthographicCamera===!0),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial||Z.isShadowMaterial||pe.isSkinnedMesh)&&mi.setValue(j,"viewMatrix",I.matrixWorldInverse)}if(pe.isSkinnedMesh){mi.setOptional(j,pe,"bindMatrix"),mi.setOptional(j,pe,"bindMatrixInverse");const yi=pe.skeleton;yi&&(Ae.floatVertexTextures?(yi.boneTexture===null&&yi.computeBoneTexture(),mi.setValue(j,"boneTexture",yi.boneTexture,Ne),mi.setValue(j,"boneTextureSize",yi.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const bo=he.morphAttributes;if((bo.position!==void 0||bo.normal!==void 0||bo.color!==void 0&&Ae.isWebGL2===!0)&&_e.update(pe,he,Z,Kn),(kr||ut.receiveShadow!==pe.receiveShadow)&&(ut.receiveShadow=pe.receiveShadow,mi.setValue(j,"receiveShadow",pe.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(mr.envMap.value=nt,mr.flipEnvMap.value=nt.isCubeTexture&&nt.isRenderTargetTexture===!1?-1:1),kr&&(mi.setValue(j,"toneMappingExposure",g.toneMappingExposure),ut.needsLights&&_o(mr,yo),He&&Z.fog===!0&&Xt.refreshFogUniforms(mr,He),Xt.refreshMaterialUniforms(mr,Z,Y,k,xe),Yc.upload(j,ut.uniformsList,mr,Ne)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(Yc.upload(j,ut.uniformsList,mr,Ne),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&mi.setValue(j,"center",pe.center),mi.setValue(j,"modelViewMatrix",pe.modelViewMatrix),mi.setValue(j,"normalMatrix",pe.normalMatrix),mi.setValue(j,"modelMatrix",pe.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const yi=Z.uniformsGroups;for(let ia=0,Il=yi.length;ia<Il;ia++)if(Ae.isWebGL2){const na=yi[ia];be.update(na,Kn),be.bind(na,Kn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Kn}function _o(I,Q){I.ambientLightColor.needsUpdate=Q,I.lightProbe.needsUpdate=Q,I.directionalLights.needsUpdate=Q,I.directionalLightShadows.needsUpdate=Q,I.pointLights.needsUpdate=Q,I.pointLightShadows.needsUpdate=Q,I.spotLights.needsUpdate=Q,I.spotLightShadows.needsUpdate=Q,I.rectAreaLights.needsUpdate=Q,I.hemisphereLights.needsUpdate=Q}function Bu(I){return I.isMeshLambertMaterial||I.isMeshToonMaterial||I.isMeshPhongMaterial||I.isMeshStandardMaterial||I.isShadowMaterial||I.isShaderMaterial&&I.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(I,Q,he){Pe.get(I.texture).__webglTexture=Q,Pe.get(I.depthTexture).__webglTexture=he;const Z=Pe.get(I);Z.__hasExternalTextures=!0,Z.__hasExternalTextures&&(Z.__autoAllocateDepthBuffer=he===void 0,Z.__autoAllocateDepthBuffer||Te.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(I,Q){const he=Pe.get(I);he.__webglFramebuffer=Q,he.__useDefaultFramebuffer=Q===void 0},this.setRenderTarget=function(I,Q=0,he=0){w=I,b=Q,A=he;let Z=!0,pe=null,He=!1,je=!1;if(I){const nt=Pe.get(I);nt.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(36160,null),Z=!1):nt.__webglFramebuffer===void 0?Ne.setupRenderTarget(I):nt.__hasExternalTextures&&Ne.rebindTextures(I,Pe.get(I.texture).__webglTexture,Pe.get(I.depthTexture).__webglTexture);const gt=I.texture;(gt.isData3DTexture||gt.isDataArrayTexture||gt.isCompressedArrayTexture)&&(je=!0);const lt=Pe.get(I).__webglFramebuffer;I.isWebGLCubeRenderTarget?(pe=lt[Q],He=!0):Ae.isWebGL2&&I.samples>0&&Ne.useMultisampledRTT(I)===!1?pe=Pe.get(I).__webglMultisampledFramebuffer:pe=lt,C.copy(I.viewport),O.copy(I.scissor),S=I.scissorTest}else C.copy(V).multiplyScalar(Y).floor(),O.copy(K).multiplyScalar(Y).floor(),S=se;if(Ee.bindFramebuffer(36160,pe)&&Ae.drawBuffers&&Z&&Ee.drawBuffers(I,pe),Ee.viewport(C),Ee.scissor(O),Ee.setScissorTest(S),He){const nt=Pe.get(I.texture);j.framebufferTexture2D(36160,36064,34069+Q,nt.__webglTexture,he)}else if(je){const nt=Pe.get(I.texture),gt=Q||0;j.framebufferTextureLayer(36160,36064,nt.__webglTexture,he||0,gt)}T=-1},this.readRenderTargetPixels=function(I,Q,he,Z,pe,He,je){if(!(I&&I.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Je=Pe.get(I).__webglFramebuffer;if(I.isWebGLCubeRenderTarget&&je!==void 0&&(Je=Je[je]),Je){Ee.bindFramebuffer(36160,Je);try{const nt=I.texture,gt=nt.format,lt=nt.type;if(gt!==Hn&&F.convert(gt)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ct=lt===dl&&(Te.has("EXT_color_buffer_half_float")||Ae.isWebGL2&&Te.has("EXT_color_buffer_float"));if(lt!==js&&F.convert(lt)!==j.getParameter(35738)&&!(lt===zs&&(Ae.isWebGL2||Te.has("OES_texture_float")||Te.has("WEBGL_color_buffer_float")))&&!ct){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Q>=0&&Q<=I.width-Z&&he>=0&&he<=I.height-pe&&j.readPixels(Q,he,Z,pe,F.convert(gt),F.convert(lt),He)}finally{const nt=w!==null?Pe.get(w).__webglFramebuffer:null;Ee.bindFramebuffer(36160,nt)}}},this.copyFramebufferToTexture=function(I,Q,he=0){const Z=Math.pow(2,-he),pe=Math.floor(Q.image.width*Z),He=Math.floor(Q.image.height*Z);Ne.setTexture2D(Q,0),j.copyTexSubImage2D(3553,he,0,0,I.x,I.y,pe,He),Ee.unbindTexture()},this.copyTextureToTexture=function(I,Q,he,Z=0){const pe=Q.image.width,He=Q.image.height,je=F.convert(he.format),Je=F.convert(he.type);Ne.setTexture2D(he,0),j.pixelStorei(37440,he.flipY),j.pixelStorei(37441,he.premultiplyAlpha),j.pixelStorei(3317,he.unpackAlignment),Q.isDataTexture?j.texSubImage2D(3553,Z,I.x,I.y,pe,He,je,Je,Q.image.data):Q.isCompressedTexture?j.compressedTexSubImage2D(3553,Z,I.x,I.y,Q.mipmaps[0].width,Q.mipmaps[0].height,je,Q.mipmaps[0].data):j.texSubImage2D(3553,Z,I.x,I.y,je,Je,Q.image),Z===0&&he.generateMipmaps&&j.generateMipmap(3553),Ee.unbindTexture()},this.copyTextureToTexture3D=function(I,Q,he,Z,pe=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const He=I.max.x-I.min.x+1,je=I.max.y-I.min.y+1,Je=I.max.z-I.min.z+1,nt=F.convert(Z.format),gt=F.convert(Z.type);let lt;if(Z.isData3DTexture)Ne.setTexture3D(Z,0),lt=32879;else if(Z.isDataArrayTexture)Ne.setTexture2DArray(Z,0),lt=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,Z.flipY),j.pixelStorei(37441,Z.premultiplyAlpha),j.pixelStorei(3317,Z.unpackAlignment);const ct=j.getParameter(3314),Gt=j.getParameter(32878),Li=j.getParameter(3316),Gi=j.getParameter(3315),pr=j.getParameter(32877),Ot=he.isCompressedTexture?he.mipmaps[0]:he.image;j.pixelStorei(3314,Ot.width),j.pixelStorei(32878,Ot.height),j.pixelStorei(3316,I.min.x),j.pixelStorei(3315,I.min.y),j.pixelStorei(32877,I.min.z),he.isDataTexture||he.isData3DTexture?j.texSubImage3D(lt,pe,Q.x,Q.y,Q.z,He,je,Je,nt,gt,Ot.data):he.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(lt,pe,Q.x,Q.y,Q.z,He,je,Je,nt,Ot.data)):j.texSubImage3D(lt,pe,Q.x,Q.y,Q.z,He,je,Je,nt,gt,Ot),j.pixelStorei(3314,ct),j.pixelStorei(32878,Gt),j.pixelStorei(3316,Li),j.pixelStorei(3315,Gi),j.pixelStorei(32877,pr),pe===0&&Z.generateMipmaps&&j.generateMipmap(lt),Ee.unbindTexture()},this.initTexture=function(I){I.isCubeTexture?Ne.setTextureCube(I,0):I.isData3DTexture?Ne.setTexture3D(I,0):I.isDataArrayTexture||I.isCompressedArrayTexture?Ne.setTexture2DArray(I,0):Ne.setTexture2D(I,0),Ee.unbindTexture()},this.resetState=function(){b=0,A=0,w=null,Ee.reset(),q.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class LI extends fy{}LI.prototype.isWebGL1Renderer=!0;class gp{constructor(e,t=1,i=1e3){this.isFog=!0,this.name="",this.color=new Lt(e),this.near=t,this.far=i}clone(){return new gp(this.color,this.near,this.far)}toJSON(){return{type:"Fog",color:this.color.getHex(),near:this.near,far:this.far}}}class _p extends oi{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class RI extends Ui{constructor(e,t,i,n,s,o,l,u,h){super(e,t,i,n,s,o,l,u,h),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:Ei,this.magFilter=s!==void 0?s:Ei,this.generateMipmaps=!1;const f=this;function m(){f.needsUpdate=!0,e.requestVideoFrameCallback(m)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(m)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class Fr{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){const t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let i,n=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(n),t.push(s),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const i=this.getLengths();let n=0;const s=i.length;let o;t?o=t:o=e*i[s-1];let l=0,u=s-1,h;for(;l<=u;)if(n=Math.floor(l+(u-l)/2),h=i[n]-o,h<0)l=n+1;else if(h>0)u=n-1;else{u=n;break}if(n=u,i[n]===o)return n/(s-1);const f=i[n],p=i[n+1]-f,v=(o-f)/p;return(n+v)/(s-1)}getTangent(e,t){let n=e-1e-4,s=e+1e-4;n<0&&(n=0),s>1&&(s=1);const o=this.getPoint(n),l=this.getPoint(s),u=t||(o.isVector2?new Re:new W);return u.copy(l).sub(o).normalize(),u}getTangentAt(e,t){const i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t){const i=new W,n=[],s=[],o=[],l=new W,u=new ai;for(let v=0;v<=e;v++){const y=v/e;n[v]=this.getTangentAt(y,new W)}s[0]=new W,o[0]=new W;let h=Number.MAX_VALUE;const f=Math.abs(n[0].x),m=Math.abs(n[0].y),p=Math.abs(n[0].z);f<=h&&(h=f,i.set(1,0,0)),m<=h&&(h=m,i.set(0,1,0)),p<=h&&i.set(0,0,1),l.crossVectors(n[0],i).normalize(),s[0].crossVectors(n[0],l),o[0].crossVectors(n[0],s[0]);for(let v=1;v<=e;v++){if(s[v]=s[v-1].clone(),o[v]=o[v-1].clone(),l.crossVectors(n[v-1],n[v]),l.length()>Number.EPSILON){l.normalize();const y=Math.acos(Ti(n[v-1].dot(n[v]),-1,1));s[v].applyMatrix4(u.makeRotationAxis(l,y))}o[v].crossVectors(n[v],s[v])}if(t===!0){let v=Math.acos(Ti(s[0].dot(s[e]),-1,1));v/=e,n[0].dot(l.crossVectors(s[0],s[e]))>0&&(v=-v);for(let y=1;y<=e;y++)s[y].applyMatrix4(u.makeRotationAxis(n[y],v*y)),o[y].crossVectors(n[y],s[y])}return{tangents:n,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.5,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dy extends Fr{constructor(e=0,t=0,i=1,n=1,s=0,o=Math.PI*2,l=!1,u=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=l,this.aRotation=u}getPoint(e,t){const i=t||new Re,n=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=n;for(;s>n;)s-=n;s<Number.EPSILON&&(o?s=0:s=n),this.aClockwise===!0&&!o&&(s===n?s=-n:s=s-n);const l=this.aStartAngle+e*s;let u=this.aX+this.xRadius*Math.cos(l),h=this.aY+this.yRadius*Math.sin(l);if(this.aRotation!==0){const f=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=u-this.aX,v=h-this.aY;u=p*f-v*m+this.aX,h=p*m+v*f+this.aY}return i.set(u,h)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class DI extends dy{constructor(e,t,i,n,s,o){super(e,t,i,i,n,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function vp(){let r=0,e=0,t=0,i=0;function n(s,o,l,u){r=s,e=l,t=-3*s+3*o-2*l-u,i=2*s-2*o+l+u}return{initCatmullRom:function(s,o,l,u,h){n(o,l,h*(l-s),h*(u-o))},initNonuniformCatmullRom:function(s,o,l,u,h,f,m){let p=(o-s)/h-(l-s)/(h+f)+(l-o)/f,v=(l-o)/f-(u-o)/(f+m)+(u-l)/m;p*=f,v*=f,n(o,l,p,v)},calc:function(s){const o=s*s,l=o*s;return r+e*s+t*o+i*l}}}const Wc=new W,If=new vp,Nf=new vp,zf=new vp;class py extends Fr{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new W){const i=t,n=this.points,s=n.length,o=(s-(this.closed?0:1))*e;let l=Math.floor(o),u=o-l;this.closed?l+=l>0?0:(Math.floor(Math.abs(l)/s)+1)*s:u===0&&l===s-1&&(l=s-2,u=1);let h,f;this.closed||l>0?h=n[(l-1)%s]:(Wc.subVectors(n[0],n[1]).add(n[0]),h=Wc);const m=n[l%s],p=n[(l+1)%s];if(this.closed||l+2<s?f=n[(l+2)%s]:(Wc.subVectors(n[s-1],n[s-2]).add(n[s-1]),f=Wc),this.curveType==="centripetal"||this.curveType==="chordal"){const v=this.curveType==="chordal"?.5:.25;let y=Math.pow(h.distanceToSquared(m),v),g=Math.pow(m.distanceToSquared(p),v),_=Math.pow(p.distanceToSquared(f),v);g<1e-4&&(g=1),y<1e-4&&(y=g),_<1e-4&&(_=g),If.initNonuniformCatmullRom(h.x,m.x,p.x,f.x,y,g,_),Nf.initNonuniformCatmullRom(h.y,m.y,p.y,f.y,y,g,_),zf.initNonuniformCatmullRom(h.z,m.z,p.z,f.z,y,g,_)}else this.curveType==="catmullrom"&&(If.initCatmullRom(h.x,m.x,p.x,f.x,this.tension),Nf.initCatmullRom(h.y,m.y,p.y,f.y,this.tension),zf.initCatmullRom(h.z,m.z,p.z,f.z,this.tension));return i.set(If.calc(u),Nf.calc(u),zf.calc(u)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new W().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function O0(r,e,t,i,n){const s=(i-e)*.5,o=(n-t)*.5,l=r*r,u=r*l;return(2*t-2*i+s+o)*u+(-3*t+3*i-2*s-o)*l+s*r+t}function OI(r,e){const t=1-r;return t*t*e}function II(r,e){return 2*(1-r)*r*e}function NI(r,e){return r*r*e}function sl(r,e,t,i){return OI(r,e)+II(r,t)+NI(r,i)}function zI(r,e){const t=1-r;return t*t*t*e}function FI(r,e){const t=1-r;return 3*t*t*r*e}function kI(r,e){return 3*(1-r)*r*r*e}function UI(r,e){return r*r*r*e}function al(r,e,t,i,n){return zI(r,e)+FI(r,t)+kI(r,i)+UI(r,n)}class BI extends Fr{constructor(e=new Re,t=new Re,i=new Re,n=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new Re){const i=t,n=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(al(e,n.x,s.x,o.x,l.x),al(e,n.y,s.y,o.y,l.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class VI extends Fr{constructor(e=new W,t=new W,i=new W,n=new W){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new W){const i=t,n=this.v0,s=this.v1,o=this.v2,l=this.v3;return i.set(al(e,n.x,s.x,o.x,l.x),al(e,n.y,s.y,o.y,l.y),al(e,n.z,s.z,o.z,l.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class GI extends Fr{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t){const i=t||new Re;return i.copy(this.v2).sub(this.v1).normalize(),i}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class WI extends Fr{constructor(e=new W,t=new W){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new W){const i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class HI extends Fr{constructor(e=new Re,t=new Re,i=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new Re){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(sl(e,n.x,s.x,o.x),sl(e,n.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class my extends Fr{constructor(e=new W,t=new W,i=new W){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new W){const i=t,n=this.v0,s=this.v1,o=this.v2;return i.set(sl(e,n.x,s.x,o.x),sl(e,n.y,s.y,o.y),sl(e,n.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $I extends Fr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){const i=t,n=this.points,s=(n.length-1)*e,o=Math.floor(s),l=s-o,u=n[o===0?o:o-1],h=n[o],f=n[o>n.length-2?n.length-1:o+1],m=n[o>n.length-3?n.length-1:o+2];return i.set(O0(l,u.x,h.x,f.x,m.x),O0(l,u.y,h.y,f.y,m.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(n.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){const n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){const n=e.points[t];this.points.push(new Re().fromArray(n))}return this}}var XI=Object.freeze({__proto__:null,ArcCurve:DI,CatmullRomCurve3:py,CubicBezierCurve:BI,CubicBezierCurve3:VI,EllipseCurve:dy,LineCurve:GI,LineCurve3:WI,QuadraticBezierCurve:HI,QuadraticBezierCurve3:my,SplineCurve:$I});class xp extends dr{constructor(e=1,t=1,i=1,n=32,s=1,o=!1,l=0,u=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:s,openEnded:o,thetaStart:l,thetaLength:u};const h=this;n=Math.floor(n),s=Math.floor(s);const f=[],m=[],p=[],v=[];let y=0;const g=[],_=i/2;let b=0;A(),o===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(f),this.setAttribute("position",new Bi(m,3)),this.setAttribute("normal",new Bi(p,3)),this.setAttribute("uv",new Bi(v,2));function A(){const T=new W,M=new W;let C=0;const O=(t-e)/i;for(let S=0;S<=s;S++){const L=[],k=S/s,Y=k*(t-e)+e;for(let re=0;re<=n;re++){const G=re/n,V=G*u+l,K=Math.sin(V),se=Math.cos(V);M.x=Y*K,M.y=-k*i+_,M.z=Y*se,m.push(M.x,M.y,M.z),T.set(K,O,se).normalize(),p.push(T.x,T.y,T.z),v.push(G,1-k),L.push(y++)}g.push(L)}for(let S=0;S<n;S++)for(let L=0;L<s;L++){const k=g[L][S],Y=g[L+1][S],re=g[L+1][S+1],G=g[L][S+1];f.push(k,Y,G),f.push(Y,re,G),C+=6}h.addGroup(b,C,0),b+=C}function w(T){const M=y,C=new Re,O=new W;let S=0;const L=T===!0?e:t,k=T===!0?1:-1;for(let re=1;re<=n;re++)m.push(0,_*k,0),p.push(0,k,0),v.push(.5,.5),y++;const Y=y;for(let re=0;re<=n;re++){const V=re/n*u+l,K=Math.cos(V),se=Math.sin(V);O.x=L*se,O.y=_*k,O.z=L*K,m.push(O.x,O.y,O.z),p.push(0,k,0),C.x=K*.5+.5,C.y=se*.5*k+.5,v.push(C.x,C.y),y++}for(let re=0;re<n;re++){const G=M+re,V=Y+re;T===!0?f.push(V,V+1,G):f.push(V+1,V,G),S+=3}h.addGroup(b,S,T===!0?1:2),b+=S}}static fromJSON(e){return new xp(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yp extends dr{constructor(e=new my(new W(-1,-1,0),new W(-1,1,0),new W(1,1,0)),t=64,i=1,n=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:s};const o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;const l=new W,u=new W,h=new Re;let f=new W;const m=[],p=[],v=[],y=[];g(),this.setIndex(y),this.setAttribute("position",new Bi(m,3)),this.setAttribute("normal",new Bi(p,3)),this.setAttribute("uv",new Bi(v,2));function g(){for(let w=0;w<t;w++)_(w);_(s===!1?t:0),A(),b()}function _(w){f=e.getPointAt(w/t,f);const T=o.normals[w],M=o.binormals[w];for(let C=0;C<=n;C++){const O=C/n*Math.PI*2,S=Math.sin(O),L=-Math.cos(O);u.x=L*T.x+S*M.x,u.y=L*T.y+S*M.y,u.z=L*T.z+S*M.z,u.normalize(),p.push(u.x,u.y,u.z),l.x=f.x+i*u.x,l.y=f.y+i*u.y,l.z=f.z+i*u.z,m.push(l.x,l.y,l.z)}}function b(){for(let w=1;w<=t;w++)for(let T=1;T<=n;T++){const M=(n+1)*(w-1)+(T-1),C=(n+1)*w+(T-1),O=(n+1)*w+T,S=(n+1)*(w-1)+T;y.push(M,C,S),y.push(C,O,S)}}function A(){for(let w=0;w<=t;w++)for(let T=0;T<=n;T++)h.x=w/t,h.y=T/n,v.push(h.x,h.y)}}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new yp(new XI[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}const I0={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class qI{constructor(e,t,i){const n=this;let s=!1,o=0,l=0,u;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(f){l++,s===!1&&n.onStart!==void 0&&n.onStart(f,o,l),s=!0},this.itemEnd=function(f){o++,n.onProgress!==void 0&&n.onProgress(f,o,l),o===l&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(f){n.onError!==void 0&&n.onError(f)},this.resolveURL=function(f){return u?u(f):f},this.setURLModifier=function(f){return u=f,this},this.addHandler=function(f,m){return h.push(f,m),this},this.removeHandler=function(f){const m=h.indexOf(f);return m!==-1&&h.splice(m,2),this},this.getHandler=function(f){for(let m=0,p=h.length;m<p;m+=2){const v=h[m],y=h[m+1];if(v.global&&(v.lastIndex=0),v.test(f))return y}return null}}}const YI=new qI;class gy{constructor(e){this.manager=e!==void 0?e:YI,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class jI extends gy{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=I0.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const l=ml("img");function u(){f(),I0.add(e,this),t&&t(this),s.manager.itemEnd(e)}function h(m){f(),n&&n(m),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){l.removeEventListener("load",u,!1),l.removeEventListener("error",h,!1)}return l.addEventListener("load",u,!1),l.addEventListener("error",h,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(l.crossOrigin=this.crossOrigin),s.manager.itemStart(e),l.src=e,l}}class bp extends gy{constructor(e){super(e)}load(e,t,i,n){const s=new Ui,o=new jI(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(l){s.image=l,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class wp{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=N0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=N0();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function N0(){return(typeof performance>"u"?Date:performance).now()}class ZI{constructor(e,t,i=0,n=1/0){this.ray=new Qx(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new dp,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Sd(e,this,i,t),i.sort(z0),i}intersectObjects(e,t=!0,i=[]){for(let n=0,s=e.length;n<s;n++)Sd(e[n],this,i,t);return i.sort(z0),i}}function z0(r,e){return r.distance-e.distance}function Sd(r,e,t,i){if(r.layers.test(e.layers)&&r.raycast(e,t),i===!0){const n=r.children;for(let s=0,o=n.length;s<o;s++)Sd(n[s],e,t,!0)}}class F0{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ti(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hp);var sr=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Md={exports:{}};(function(r,e){(function(t,i){var n="1.0.35",s="",o="?",l="function",u="undefined",h="object",f="string",m="major",p="model",v="name",y="type",g="vendor",_="version",b="architecture",A="console",w="mobile",T="tablet",M="smarttv",C="wearable",O="embedded",S=350,L="Amazon",k="Apple",Y="ASUS",re="BlackBerry",G="Browser",V="Chrome",K="Edge",se="Firefox",ae="Google",te="Huawei",Se="LG",xe="Microsoft",ee="Motorola",ne="Opera",ye="Samsung",J="Sharp",de="Sony",j="Xiaomi",Fe="Zebra",Te="Facebook",Ae="Chromium OS",Ee="Mac OS",We=function(oe,_e){var fe={};for(var Le in oe)_e[Le]&&_e[Le].length%2===0?fe[Le]=_e[Le].concat(oe[Le]):fe[Le]=oe[Le];return fe},Pe=function(oe){for(var _e={},fe=0;fe<oe.length;fe++)_e[oe[fe].toUpperCase()]=oe[fe];return _e},Ne=function(oe,_e){return typeof oe===f?Ye(_e).indexOf(Ye(oe))!==-1:!1},Ye=function(oe){return oe.toLowerCase()},mt=function(oe){return typeof oe===f?oe.replace(/[^\d\.]/g,s).split(".")[0]:i},_t=function(oe,_e){if(typeof oe===f)return oe=oe.replace(/^\s\s*/,s),typeof _e===u?oe:oe.substring(0,S)},et=function(oe,_e){for(var fe=0,Le,F,q,be,me,Ce;fe<_e.length&&!me;){var ke=_e[fe],Ue=_e[fe+1];for(Le=F=0;Le<ke.length&&!me&&ke[Le];)if(me=ke[Le++].exec(oe),me)for(q=0;q<Ue.length;q++)Ce=me[++F],be=Ue[q],typeof be===h&&be.length>0?be.length===2?typeof be[1]==l?this[be[0]]=be[1].call(this,Ce):this[be[0]]=be[1]:be.length===3?typeof be[1]===l&&!(be[1].exec&&be[1].test)?this[be[0]]=Ce?be[1].call(this,Ce,be[2]):i:this[be[0]]=Ce?Ce.replace(be[1],be[2]):i:be.length===4&&(this[be[0]]=Ce?be[3].call(this,Ce.replace(be[1],be[2])):i):this[be]=Ce||i;fe+=2}},xt=function(oe,_e){for(var fe in _e)if(typeof _e[fe]===h&&_e[fe].length>0){for(var Le=0;Le<_e[fe].length;Le++)if(Ne(_e[fe][Le],oe))return fe===o?i:fe}else if(Ne(_e[fe],oe))return fe===o?i:fe;return oe},ft={"1.0":"/8","1.2":"/1","1.3":"/3","2.0":"/412","2.0.2":"/416","2.0.3":"/417","2.0.4":"/419","?":"/"},Xt={ME:"4.90","NT 3.11":"NT3.51","NT 4.0":"NT4.0",2e3:"NT 5.0",XP:["NT 5.1","NT 5.2"],Vista:"NT 6.0",7:"NT 6.1",8:"NT 6.2","8.1":"NT 6.3",10:["NT 6.4","NT 10.0"],RT:"ARM"},St={browser:[[/\b(?:crmo|crios)\/([\w\.]+)/i],[_,[v,"Chrome"]],[/edg(?:e|ios|a)?\/([\w\.]+)/i],[_,[v,"Edge"]],[/(opera mini)\/([-\w\.]+)/i,/(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,/(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],[v,_],[/opios[\/ ]+([\w\.]+)/i],[_,[v,ne+" Mini"]],[/\bopr\/([\w\.]+)/i],[_,[v,ne]],[/(kindle)\/([\w\.]+)/i,/(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i,/(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i,/(ba?idubrowser)[\/ ]?([\w\.]+)/i,/(?:ms|\()(ie) ([\w\.]+)/i,/(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i,/(heytap|ovi)browser\/([\d\.]+)/i,/(weibo)__([\d\.]+)/i],[v,_],[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],[_,[v,"UC"+G]],[/microm.+\bqbcore\/([\w\.]+)/i,/\bqbcore\/([\w\.]+).+microm/i],[_,[v,"WeChat(Win) Desktop"]],[/micromessenger\/([\w\.]+)/i],[_,[v,"WeChat"]],[/konqueror\/([\w\.]+)/i],[_,[v,"Konqueror"]],[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],[_,[v,"IE"]],[/ya(?:search)?browser\/([\w\.]+)/i],[_,[v,"Yandex"]],[/(avast|avg)\/([\w\.]+)/i],[[v,/(.+)/,"$1 Secure "+G],_],[/\bfocus\/([\w\.]+)/i],[_,[v,se+" Focus"]],[/\bopt\/([\w\.]+)/i],[_,[v,ne+" Touch"]],[/coc_coc\w+\/([\w\.]+)/i],[_,[v,"Coc Coc"]],[/dolfin\/([\w\.]+)/i],[_,[v,"Dolphin"]],[/coast\/([\w\.]+)/i],[_,[v,ne+" Coast"]],[/miuibrowser\/([\w\.]+)/i],[_,[v,"MIUI "+G]],[/fxios\/([-\w\.]+)/i],[_,[v,se]],[/\bqihu|(qi?ho?o?|360)browser/i],[[v,"360 "+G]],[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],[[v,/(.+)/,"$1 "+G],_],[/(comodo_dragon)\/([\w\.]+)/i],[[v,/_/g," "],_],[/(electron)\/([\w\.]+) safari/i,/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,/m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],[v,_],[/(metasr)[\/ ]?([\w\.]+)/i,/(lbbrowser)/i,/\[(linkedin)app\]/i],[v],[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],[[v,Te],_],[/(kakao(?:talk|story))[\/ ]([\w\.]+)/i,/(naver)\(.*?(\d+\.[\w\.]+).*\)/i,/safari (line)\/([\w\.]+)/i,/\b(line)\/([\w\.]+)\/iab/i,/(chromium|instagram)[\/ ]([-\w\.]+)/i],[v,_],[/\bgsa\/([\w\.]+) .*safari\//i],[_,[v,"GSA"]],[/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],[_,[v,"TikTok"]],[/headlesschrome(?:\/([\w\.]+)| )/i],[_,[v,V+" Headless"]],[/ wv\).+(chrome)\/([\w\.]+)/i],[[v,V+" WebView"],_],[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],[_,[v,"Android "+G]],[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],[v,_],[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],[_,[v,"Mobile Safari"]],[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],[_,v],[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],[v,[_,xt,ft]],[/(webkit|khtml)\/([\w\.]+)/i],[v,_],[/(navigator|netscape\d?)\/([-\w\.]+)/i],[[v,"Netscape"],_],[/mobile vr; rv:([\w\.]+)\).+firefox/i],[_,[v,se+" Reality"]],[/ekiohf.+(flow)\/([\w\.]+)/i,/(swiftfox)/i,/(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i,/(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,/(firefox)\/([\w\.]+)/i,/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,/(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,/(links) \(([\w\.]+)/i,/panasonic;(viera)/i],[v,_],[/(cobalt)\/([\w\.]+)/i],[v,[_,/master.|lts./,""]]],cpu:[[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],[[b,"amd64"]],[/(ia32(?=;))/i],[[b,Ye]],[/((?:i[346]|x)86)[;\)]/i],[[b,"ia32"]],[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],[[b,"arm64"]],[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],[[b,"armhf"]],[/windows (ce|mobile); ppc;/i],[[b,"arm"]],[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],[[b,/ower/,s,Ye]],[/(sun4\w)[;\)]/i],[[b,"sparc"]],[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],[[b,Ye]]],device:[[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],[p,[g,ye],[y,T]],[/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,/samsung[- ]([-\w]+)/i,/sec-(sgh\w+)/i],[p,[g,ye],[y,w]],[/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],[p,[g,k],[y,w]],[/\((ipad);[-\w\),; ]+apple/i,/applecoremedia\/[\w\.]+ \((ipad)/i,/\b(ipad)\d\d?,\d\d?[;\]].+ios/i],[p,[g,k],[y,T]],[/(macintosh);/i],[p,[g,k]],[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],[p,[g,J],[y,w]],[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],[p,[g,te],[y,T]],[/(?:huawei|honor)([-\w ]+)[;\)]/i,/\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],[p,[g,te],[y,w]],[/\b(poco[\w ]+)(?: bui|\))/i,/\b; (\w+) build\/hm\1/i,/\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,/\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,/\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],[[p,/_/g," "],[g,j],[y,w]],[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],[[p,/_/g," "],[g,j],[y,T]],[/; (\w+) bui.+ oppo/i,/\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],[p,[g,"OPPO"],[y,w]],[/vivo (\w+)(?: bui|\))/i,/\b(v[12]\d{3}\w?[at])(?: bui|;)/i],[p,[g,"Vivo"],[y,w]],[/\b(rmx[12]\d{3})(?: bui|;|\))/i],[p,[g,"Realme"],[y,w]],[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,/\bmot(?:orola)?[- ](\w*)/i,/((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],[p,[g,ee],[y,w]],[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],[p,[g,ee],[y,T]],[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],[p,[g,Se],[y,T]],[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,/\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,/\blg-?([\d\w]+) bui/i],[p,[g,Se],[y,w]],[/(ideatab[-\w ]+)/i,/lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],[p,[g,"Lenovo"],[y,T]],[/(?:maemo|nokia).*(n900|lumia \d+)/i,/nokia[-_ ]?([-\w\.]*)/i],[[p,/_/g," "],[g,"Nokia"],[y,w]],[/(pixel c)\b/i],[p,[g,ae],[y,T]],[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],[p,[g,ae],[y,w]],[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],[p,[g,de],[y,w]],[/sony tablet [ps]/i,/\b(?:sony)?sgp\w+(?: bui|\))/i],[[p,"Xperia Tablet"],[g,de],[y,T]],[/ (kb2005|in20[12]5|be20[12][59])\b/i,/(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],[p,[g,"OnePlus"],[y,w]],[/(alexa)webm/i,/(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i,/(kf[a-z]+)( bui|\)).+silk\//i],[p,[g,L],[y,T]],[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],[[p,/(.+)/g,"Fire Phone $1"],[g,L],[y,w]],[/(playbook);[-\w\),; ]+(rim)/i],[p,g,[y,T]],[/\b((?:bb[a-f]|st[hv])100-\d)/i,/\(bb10; (\w+)/i],[p,[g,re],[y,w]],[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],[p,[g,Y],[y,T]],[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],[p,[g,Y],[y,w]],[/(nexus 9)/i],[p,[g,"HTC"],[y,T]],[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,/(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],[g,[p,/_/g," "],[y,w]],[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],[p,[g,"Acer"],[y,T]],[/droid.+; (m[1-5] note) bui/i,/\bmz-([-\w]{2,})/i],[p,[g,"Meizu"],[y,w]],[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i,/(hp) ([\w ]+\w)/i,/(asus)-?(\w+)/i,/(microsoft); (lumia[\w ]+)/i,/(lenovo)[-_ ]?([-\w]+)/i,/(jolla)/i,/(oppo) ?([\w ]+) bui/i],[g,p,[y,w]],[/(kobo)\s(ereader|touch)/i,/(archos) (gamepad2?)/i,/(hp).+(touchpad(?!.+tablet)|tablet)/i,/(kindle)\/([\w\.]+)/i,/(nook)[\w ]+build\/(\w+)/i,/(dell) (strea[kpr\d ]*[\dko])/i,/(le[- ]+pan)[- ]+(\w{1,9}) bui/i,/(trinity)[- ]*(t\d{3}) bui/i,/(gigaset)[- ]+(q\w{1,9}) bui/i,/(vodafone) ([\w ]+)(?:\)| bui)/i],[g,p,[y,T]],[/(surface duo)/i],[p,[g,xe],[y,T]],[/droid [\d\.]+; (fp\du?)(?: b|\))/i],[p,[g,"Fairphone"],[y,w]],[/(u304aa)/i],[p,[g,"AT&T"],[y,w]],[/\bsie-(\w*)/i],[p,[g,"Siemens"],[y,w]],[/\b(rct\w+) b/i],[p,[g,"RCA"],[y,T]],[/\b(venue[\d ]{2,7}) b/i],[p,[g,"Dell"],[y,T]],[/\b(q(?:mv|ta)\w+) b/i],[p,[g,"Verizon"],[y,T]],[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],[p,[g,"Barnes & Noble"],[y,T]],[/\b(tm\d{3}\w+) b/i],[p,[g,"NuVision"],[y,T]],[/\b(k88) b/i],[p,[g,"ZTE"],[y,T]],[/\b(nx\d{3}j) b/i],[p,[g,"ZTE"],[y,w]],[/\b(gen\d{3}) b.+49h/i],[p,[g,"Swiss"],[y,w]],[/\b(zur\d{3}) b/i],[p,[g,"Swiss"],[y,T]],[/\b((zeki)?tb.*\b) b/i],[p,[g,"Zeki"],[y,T]],[/\b([yr]\d{2}) b/i,/\b(dragon[- ]+touch |dt)(\w{5}) b/i],[[g,"Dragon Touch"],p,[y,T]],[/\b(ns-?\w{0,9}) b/i],[p,[g,"Insignia"],[y,T]],[/\b((nxa|next)-?\w{0,9}) b/i],[p,[g,"NextBook"],[y,T]],[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],[[g,"Voice"],p,[y,w]],[/\b(lvtel\-)?(v1[12]) b/i],[[g,"LvTel"],p,[y,w]],[/\b(ph-1) /i],[p,[g,"Essential"],[y,w]],[/\b(v(100md|700na|7011|917g).*\b) b/i],[p,[g,"Envizen"],[y,T]],[/\b(trio[-\w\. ]+) b/i],[p,[g,"MachSpeed"],[y,T]],[/\btu_(1491) b/i],[p,[g,"Rotor"],[y,T]],[/(shield[\w ]+) b/i],[p,[g,"Nvidia"],[y,T]],[/(sprint) (\w+)/i],[g,p,[y,w]],[/(kin\.[onetw]{3})/i],[[p,/\./g," "],[g,xe],[y,w]],[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],[p,[g,Fe],[y,T]],[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],[p,[g,Fe],[y,w]],[/smart-tv.+(samsung)/i],[g,[y,M]],[/hbbtv.+maple;(\d+)/i],[[p,/^/,"SmartTV"],[g,ye],[y,M]],[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],[[g,Se],[y,M]],[/(apple) ?tv/i],[g,[p,k+" TV"],[y,M]],[/crkey/i],[[p,V+"cast"],[g,ae],[y,M]],[/droid.+aft(\w)( bui|\))/i],[p,[g,L],[y,M]],[/\(dtv[\);].+(aquos)/i,/(aquos-tv[\w ]+)\)/i],[p,[g,J],[y,M]],[/(bravia[\w ]+)( bui|\))/i],[p,[g,de],[y,M]],[/(mitv-\w{5}) bui/i],[p,[g,j],[y,M]],[/Hbbtv.*(technisat) (.*);/i],[g,p,[y,M]],[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,/hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],[[g,_t],[p,_t],[y,M]],[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],[[y,M]],[/(ouya)/i,/(nintendo) ([wids3utch]+)/i],[g,p,[y,A]],[/droid.+; (shield) bui/i],[p,[g,"Nvidia"],[y,A]],[/(playstation [345portablevi]+)/i],[p,[g,de],[y,A]],[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],[p,[g,xe],[y,A]],[/((pebble))app/i],[g,p,[y,C]],[/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],[p,[g,k],[y,C]],[/droid.+; (glass) \d/i],[p,[g,ae],[y,C]],[/droid.+; (wt63?0{2,3})\)/i],[p,[g,Fe],[y,C]],[/(quest( 2| pro)?)/i],[p,[g,Te],[y,C]],[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],[g,[y,O]],[/(aeobc)\b/i],[p,[g,L],[y,O]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],[p,[y,w]],[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],[p,[y,T]],[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],[[y,T]],[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],[[y,w]],[/(android[-\w\. ]{0,9});.+buil/i],[p,[g,"Generic"]]],engine:[[/windows.+ edge\/([\w\.]+)/i],[_,[v,K+"HTML"]],[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],[_,[v,"Blink"]],[/(presto)\/([\w\.]+)/i,/(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,/ekioh(flow)\/([\w\.]+)/i,/(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,/(icab)[\/ ]([23]\.[\d\.]+)/i,/\b(libweb)/i],[v,_],[/rv\:([\w\.]{1,9})\b.+(gecko)/i],[_,v]],os:[[/microsoft (windows) (vista|xp)/i],[v,_],[/(windows) nt 6\.2; (arm)/i,/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i,/(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],[v,[_,xt,Xt]],[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],[[v,"Windows"],[_,xt,Xt]],[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,/ios;fbsv\/([\d\.]+)/i,/cfnetwork\/.+darwin/i],[[_,/_/g,"."],[v,"iOS"]],[/(mac os x) ?([\w\. ]*)/i,/(macintosh|mac_powerpc\b)(?!.+haiku)/i],[[v,Ee],[_,/_/g,"."]],[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],[_,v],[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,/(blackberry)\w*\/([\w\.]*)/i,/(tizen|kaios)[\/ ]([\w\.]+)/i,/\((series40);/i],[v,_],[/\(bb(10);/i],[_,[v,re]],[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],[_,[v,"Symbian"]],[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],[_,[v,se+" OS"]],[/web0s;.+rt(tv)/i,/\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],[_,[v,"webOS"]],[/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],[_,[v,"watchOS"]],[/crkey\/([\d\.]+)/i],[_,[v,V+"cast"]],[/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],[[v,Ae],_],[/panasonic;(viera)/i,/(netrange)mmh/i,/(nettv)\/(\d+\.[\w\.]+)/i,/(nintendo|playstation) ([wids345portablevuch]+)/i,/(xbox); +xbox ([^\);]+)/i,/\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,/(mint)[\/\(\) ]?(\w*)/i,/(mageia|vectorlinux)[; ]/i,/([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,/(hurd|linux) ?([\w\.]*)/i,/(gnu) ?([\w\.]*)/i,/\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,/(haiku) (\w+)/i],[v,_],[/(sunos) ?([\w\.\d]*)/i],[[v,"Solaris"],_],[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i,/(aix) ((\d)(?=\.|\)| )[\w\.])*/i,/\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,/(unix) ?([\w\.]*)/i],[v,_]]},N=function(oe,_e){if(typeof oe===h&&(_e=oe,oe=i),!(this instanceof N))return new N(oe,_e).getResult();var fe=typeof t!==u&&t.navigator?t.navigator:i,Le=oe||(fe&&fe.userAgent?fe.userAgent:s),F=fe&&fe.userAgentData?fe.userAgentData:i,q=_e?We(St,_e):St,be=fe&&fe.userAgent==Le;return this.getBrowser=function(){var me={};return me[v]=i,me[_]=i,et.call(me,Le,q.browser),me[m]=mt(me[_]),be&&fe&&fe.brave&&typeof fe.brave.isBrave==l&&(me[v]="Brave"),me},this.getCPU=function(){var me={};return me[b]=i,et.call(me,Le,q.cpu),me},this.getDevice=function(){var me={};return me[g]=i,me[p]=i,me[y]=i,et.call(me,Le,q.device),be&&!me[y]&&F&&F.mobile&&(me[y]=w),be&&me[p]=="Macintosh"&&fe&&typeof fe.standalone!==u&&fe.maxTouchPoints&&fe.maxTouchPoints>2&&(me[p]="iPad",me[y]=T),me},this.getEngine=function(){var me={};return me[v]=i,me[_]=i,et.call(me,Le,q.engine),me},this.getOS=function(){var me={};return me[v]=i,me[_]=i,et.call(me,Le,q.os),be&&!me[v]&&F&&F.platform!="Unknown"&&(me[v]=F.platform.replace(/chrome os/i,Ae).replace(/macos/i,Ee)),me},this.getResult=function(){return{ua:this.getUA(),browser:this.getBrowser(),engine:this.getEngine(),os:this.getOS(),device:this.getDevice(),cpu:this.getCPU()}},this.getUA=function(){return Le},this.setUA=function(me){return Le=typeof me===f&&me.length>S?_t(me,S):me,this},this.setUA(Le),this};N.VERSION=n,N.BROWSER=Pe([v,_,m]),N.CPU=Pe([b]),N.DEVICE=Pe([p,g,y,A,w,M,T,C,O]),N.ENGINE=N.OS=Pe([v,_]),r.exports&&(e=r.exports=N),e.UAParser=N;var D=typeof t!==u&&(t.jQuery||t.Zepto);if(D&&!D.ua){var le=new N;D.ua=le.getResult(),D.ua.get=function(){return le.getUA()},D.ua.set=function(oe){le.setUA(oe);var _e=le.getResult();for(var fe in _e)D.ua[fe]=_e[fe]}}})(typeof window=="object"?window:sr)})(Md,Md.exports);const KI=Md.exports,qo=new KI,ji={initialized:!1,os:null,engine:null,device:null,browser:null,isPC:null,isIOS:null,isMobile:null,isIphone:null,isSafari:null,isIpad:null,isMozilla:!1,touchable:!0,init:function(){if(this.initialized)return;this.initialized=!0;let r=qo.getUA().toLowerCase();this.device=qo.getDevice(),this.browser=qo.getBrowser(),this.engine=qo.getEngine(),this.os=qo.getOS(),this.isMobile=this.device.type=="mobile",this.isIOS=this.device.model=="iPhone",this.isSafari=this.browser.name=="Safari",this.isIphone=this.device.model=="iPhone",this.isIpad=this.device.model=="iPad"||r.indexOf("ipad")>-1||r.indexOf("macintosh")>-1&&"ontouchend"in window,this.touchable="ontouchend"in document,this.isPC=this.device.type==null,this.isIpad&&(this.isPC=!1),this.isIOS&&(this.isPC=!1)}};ji.init();class Ou{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const JI=new pp(-1,1,1,-1,0,1),Sp=new dr;Sp.setAttribute("position",new Bi([-1,3,0,-1,-1,0,3,-1,0],3));Sp.setAttribute("uv",new Bi([0,2,0,0,2,0],2));class QI{constructor(e){this._mesh=new Fi(Sp,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,JI)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class eN extends Ou{constructor(e,t,i,n,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Lt}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=n}}const tN={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ed extends Ou{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof gn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ny.clone(e.uniforms),this.material=new gn({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new QI(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class k0 extends Ou{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,l;this.inverse?(o=0,l=1):(o=1,l=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,o,4294967295),s.buffers.stencil.setClear(l),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class iN extends Ou{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class nN{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new Re);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Yn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ed(tN),this.clock=new wp}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const o=this.passes[n];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),o.needsSwap){if(i){const l=this.renderer.getContext(),u=this.renderer.state.buffers.stencil;u.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),u.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}k0!==void 0&&(o instanceof k0?i=!0:o instanceof iN&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Re);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const rN={uniforms:{tDiffuse:{value:null},resolution:{value:new Re(1/1024,1/512)}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	precision highp float;

	uniform sampler2D tDiffuse;

	uniform vec2 resolution;

	varying vec2 vUv;

	// FXAA 3.11 implementation by NVIDIA, ported to WebGL by Agost Biro (biro@archilogic.com)

	//----------------------------------------------------------------------------------
	// File:        es3-keplerFXAAassetsshaders/FXAA_DefaultES.frag
	// SDK Version: v3.00
	// Email:       gameworks@nvidia.com
	// Site:        http://developer.nvidia.com/
	//
	// Copyright (c) 2014-2015, NVIDIA CORPORATION. All rights reserved.
	//
	// Redistribution and use in source and binary forms, with or without
	// modification, are permitted provided that the following conditions
	// are met:
	//  * Redistributions of source code must retain the above copyright
	//    notice, this list of conditions and the following disclaimer.
	//  * Redistributions in binary form must reproduce the above copyright
	//    notice, this list of conditions and the following disclaimer in the
	//    documentation and/or other materials provided with the distribution.
	//  * Neither the name of NVIDIA CORPORATION nor the names of its
	//    contributors may be used to endorse or promote products derived
	//    from this software without specific prior written permission.
	//
	// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS ''AS IS'' AND ANY
	// EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
	// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
	// PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
	// CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
	// EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
	// PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
	// PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
	// OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
	// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
	// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
	//
	//----------------------------------------------------------------------------------

	#ifndef FXAA_DISCARD
			//
			// Only valid for PC OpenGL currently.
			// Probably will not work when FXAA_GREEN_AS_LUMA = 1.
			//
			// 1 = Use discard on pixels which don't need AA.
			//     For APIs which enable concurrent TEX+ROP from same surface.
			// 0 = Return unchanged color on pixels which don't need AA.
			//
			#define FXAA_DISCARD 0
	#endif

	/*--------------------------------------------------------------------------*/
	#define FxaaTexTop(t, p) texture2D(t, p, -100.0)
	#define FxaaTexOff(t, p, o, r) texture2D(t, p + (o * r), -100.0)
	/*--------------------------------------------------------------------------*/

	#define NUM_SAMPLES 5

	// assumes colors have premultipliedAlpha, so that the calculated color contrast is scaled by alpha
	float contrast( vec4 a, vec4 b ) {
			vec4 diff = abs( a - b );
			return max( max( max( diff.r, diff.g ), diff.b ), diff.a );
	}

	/*============================================================================

									FXAA3 QUALITY - PC

	============================================================================*/

	/*--------------------------------------------------------------------------*/
	vec4 FxaaPixelShader(
			vec2 posM,
			sampler2D tex,
			vec2 fxaaQualityRcpFrame,
			float fxaaQualityEdgeThreshold,
			float fxaaQualityinvEdgeThreshold
	) {
			vec4 rgbaM = FxaaTexTop(tex, posM);
			vec4 rgbaS = FxaaTexOff(tex, posM, vec2( 0.0, 1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaE = FxaaTexOff(tex, posM, vec2( 1.0, 0.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaN = FxaaTexOff(tex, posM, vec2( 0.0,-1.0), fxaaQualityRcpFrame.xy);
			vec4 rgbaW = FxaaTexOff(tex, posM, vec2(-1.0, 0.0), fxaaQualityRcpFrame.xy);
			// . S .
			// W M E
			// . N .

			bool earlyExit = max( max( max(
					contrast( rgbaM, rgbaN ),
					contrast( rgbaM, rgbaS ) ),
					contrast( rgbaM, rgbaE ) ),
					contrast( rgbaM, rgbaW ) )
					< fxaaQualityEdgeThreshold;
			// . 0 .
			// 0 0 0
			// . 0 .

			#if (FXAA_DISCARD == 1)
					if(earlyExit) FxaaDiscard;
			#else
					if(earlyExit) return rgbaM;
			#endif

			float contrastN = contrast( rgbaM, rgbaN );
			float contrastS = contrast( rgbaM, rgbaS );
			float contrastE = contrast( rgbaM, rgbaE );
			float contrastW = contrast( rgbaM, rgbaW );

			float relativeVContrast = ( contrastN + contrastS ) - ( contrastE + contrastW );
			relativeVContrast *= fxaaQualityinvEdgeThreshold;

			bool horzSpan = relativeVContrast > 0.;
			// . 1 .
			// 0 0 0
			// . 1 .

			// 45 deg edge detection and corners of objects, aka V/H contrast is too similar
			if( abs( relativeVContrast ) < .3 ) {
					// locate the edge
					vec2 dirToEdge;
					dirToEdge.x = contrastE > contrastW ? 1. : -1.;
					dirToEdge.y = contrastS > contrastN ? 1. : -1.;
					// . 2 .      . 1 .
					// 1 0 2  ~=  0 0 1
					// . 1 .      . 0 .

					// tap 2 pixels and see which ones are "outside" the edge, to
					// determine if the edge is vertical or horizontal

					vec4 rgbaAlongH = FxaaTexOff(tex, posM, vec2( dirToEdge.x, -dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongH = contrast( rgbaM, rgbaAlongH );
					// . 1 .
					// 0 0 1
					// . 0 H

					vec4 rgbaAlongV = FxaaTexOff(tex, posM, vec2( -dirToEdge.x, dirToEdge.y ), fxaaQualityRcpFrame.xy);
					float matchAlongV = contrast( rgbaM, rgbaAlongV );
					// V 1 .
					// 0 0 1
					// . 0 .

					relativeVContrast = matchAlongV - matchAlongH;
					relativeVContrast *= fxaaQualityinvEdgeThreshold;

					if( abs( relativeVContrast ) < .3 ) { // 45 deg edge
							// 1 1 .
							// 0 0 1
							// . 0 1

							// do a simple blur
							return mix(
									rgbaM,
									(rgbaN + rgbaS + rgbaE + rgbaW) * .25,
									.4
							);
					}

					horzSpan = relativeVContrast > 0.;
			}

			if(!horzSpan) rgbaN = rgbaW;
			if(!horzSpan) rgbaS = rgbaE;
			// . 0 .      1
			// 1 0 1  ->  0
			// . 0 .      1

			bool pairN = contrast( rgbaM, rgbaN ) > contrast( rgbaM, rgbaS );
			if(!pairN) rgbaN = rgbaS;

			vec2 offNP;
			offNP.x = (!horzSpan) ? 0.0 : fxaaQualityRcpFrame.x;
			offNP.y = ( horzSpan) ? 0.0 : fxaaQualityRcpFrame.y;

			bool doneN = false;
			bool doneP = false;

			float nDist = 0.;
			float pDist = 0.;

			vec2 posN = posM;
			vec2 posP = posM;

			int iterationsUsed = 0;
			int iterationsUsedN = 0;
			int iterationsUsedP = 0;
			for( int i = 0; i < NUM_SAMPLES; i++ ) {
					iterationsUsed = i;

					float increment = float(i + 1);

					if(!doneN) {
							nDist += increment;
							posN = posM + offNP * nDist;
							vec4 rgbaEndN = FxaaTexTop(tex, posN.xy);
							doneN = contrast( rgbaEndN, rgbaM ) > contrast( rgbaEndN, rgbaN );
							iterationsUsedN = i;
					}

					if(!doneP) {
							pDist += increment;
							posP = posM - offNP * pDist;
							vec4 rgbaEndP = FxaaTexTop(tex, posP.xy);
							doneP = contrast( rgbaEndP, rgbaM ) > contrast( rgbaEndP, rgbaN );
							iterationsUsedP = i;
					}

					if(doneN || doneP) break;
			}


			if ( !doneP && !doneN ) return rgbaM; // failed to find end of edge

			float dist = min(
					doneN ? float( iterationsUsedN ) / float( NUM_SAMPLES - 1 ) : 1.,
					doneP ? float( iterationsUsedP ) / float( NUM_SAMPLES - 1 ) : 1.
			);

			// hacky way of reduces blurriness of mostly diagonal edges
			// but reduces AA quality
			dist = pow(dist, .5);

			dist = 1. - dist;

			return mix(
					rgbaM,
					rgbaN,
					dist * .5
			);
	}

	void main() {
			const float edgeDetectionQuality = .2;
			const float invEdgeDetectionQuality = 1. / edgeDetectionQuality;

			gl_FragColor = FxaaPixelShader(
					vUv,
					tDiffuse,
					resolution,
					edgeDetectionQuality, // [0,1] contrast needed, otherwise early discard
					invEdgeDetectionQuality
			);

	}
	`};/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.18.1
 * @author George Michael Brower
 * @license MIT
 */class ur{constructor(e,t,i,n,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),ur.nextNameID=ur.nextNameID||0,this.$name.id=`lil-gui-name-${++ur.nextNameID}`,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled?this:(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e),this)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class sN extends ur{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function Td(r){let e,t;return(e=r.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=r.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=r.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),t?"#"+t:!1}const aN={isPrimitive:!0,match:r=>typeof r=="string",fromHexString:Td,toHexString:Td},gl={isPrimitive:!0,match:r=>typeof r=="number",fromHexString:r=>parseInt(r.substring(1),16),toHexString:r=>"#"+r.toString(16).padStart(6,0)},oN={isPrimitive:!1,match:r=>Array.isArray(r),fromHexString(r,e,t=1){const i=gl.fromHexString(r);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(i&255)/255*t},toHexString([r,e,t],i=1){i=255/i;const n=r*i<<16^e*i<<8^t*i<<0;return gl.toHexString(n)}},lN={isPrimitive:!1,match:r=>Object(r)===r,fromHexString(r,e,t=1){const i=gl.fromHexString(r);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(i&255)/255*t},toHexString({r,g:e,b:t},i=1){i=255/i;const n=r*i<<16^e*i<<8^t*i<<0;return gl.toHexString(n)}},cN=[aN,gl,oN,lN];function uN(r){return cN.find(e=>e.match(r))}class hN extends ur{constructor(e,t,i,n){super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=uN(this.initialValue),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const s=Td(this.$text.value);s&&this._setValueFromHexString(s)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Ff extends ur{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object),this._callOnChange()}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class fN extends ur{constructor(e,t,i,n,s,o){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(s);const l=o!==void 0;this.step(l?o:this._getImplicitStep(),l),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=t*100+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=()=>{let b=parseFloat(this.$input.value);isNaN(b)||(this._stepExplicit&&(b=this._snap(b)),this.setValue(this._clamp(b)))},t=b=>{const A=parseFloat(this.$input.value);isNaN(A)||(this._snapClampSetValue(A+b),this.$input.value=this.getValue())},i=b=>{b.code==="Enter"&&this.$input.blur(),b.code==="ArrowUp"&&(b.preventDefault(),t(this._step*this._arrowKeyMultiplier(b))),b.code==="ArrowDown"&&(b.preventDefault(),t(this._step*this._arrowKeyMultiplier(b)*-1))},n=b=>{this._inputFocused&&(b.preventDefault(),t(this._step*this._normalizeMouseWheel(b)))};let s=!1,o,l,u,h,f;const m=5,p=b=>{o=b.clientX,l=u=b.clientY,s=!0,h=this.getValue(),f=0,window.addEventListener("mousemove",v),window.addEventListener("mouseup",y)},v=b=>{if(s){const A=b.clientX-o,w=b.clientY-l;Math.abs(w)>m?(b.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(A)>m&&y()}if(!s){const A=b.clientY-u;f-=A*this._step*this._arrowKeyMultiplier(b),h+f>this._max?f=this._max-h:h+f<this._min&&(f=this._min-h),this._snapClampSetValue(h+f)}u=b.clientY},y=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",v),window.removeEventListener("mouseup",y)},g=()=>{this._inputFocused=!0},_=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",e),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",p),this.$input.addEventListener("focus",g),this.$input.addEventListener("blur",_)}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=(b,A,w,T,M)=>(b-A)/(w-A)*(M-T)+T,t=b=>{const A=this.$slider.getBoundingClientRect();let w=e(b,A.left,A.right,this._min,this._max);this._snapClampSetValue(w)},i=b=>{this._setDraggingStyle(!0),t(b.clientX),window.addEventListener("mousemove",n),window.addEventListener("mouseup",s)},n=b=>{t(b.clientX)},s=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",n),window.removeEventListener("mouseup",s)};let o=!1,l,u;const h=b=>{b.preventDefault(),this._setDraggingStyle(!0),t(b.touches[0].clientX),o=!1},f=b=>{b.touches.length>1||(this._hasScrollBar?(l=b.touches[0].clientX,u=b.touches[0].clientY,o=!0):h(b),window.addEventListener("touchmove",m,{passive:!1}),window.addEventListener("touchend",p))},m=b=>{if(o){const A=b.touches[0].clientX-l,w=b.touches[0].clientY-u;Math.abs(A)>Math.abs(w)?h(b):(window.removeEventListener("touchmove",m),window.removeEventListener("touchend",p))}else b.preventDefault(),t(b.touches[0].clientX)},p=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",m),window.removeEventListener("touchend",p)},v=this._callOnFinishChange.bind(this),y=400;let g;const _=b=>{if(Math.abs(b.deltaX)<Math.abs(b.deltaY)&&this._hasScrollBar)return;b.preventDefault();const w=this._normalizeMouseWheel(b)*this._step;this._snapClampSetValue(this.getValue()+w),this.$input.value=this.getValue(),clearTimeout(g),g=setTimeout(v,y)};this.$slider.addEventListener("mousedown",i),this.$slider.addEventListener("touchstart",f,{passive:!1}),this.$slider.addEventListener("wheel",_,{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle(`lil-gui-${t}`,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class dN extends ur{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(s=>{const o=document.createElement("option");o.innerHTML=s,this.$select.appendChild(o)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class pN extends ur{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}const mN=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "\u2195";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "\u25BE";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "\u25B8";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "\u2713";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;function gN(r){const e=document.createElement("style");e.innerHTML=r;const t=document.querySelector("head link[rel=stylesheet], head style");t?document.head.insertBefore(e,t):document.head.appendChild(e)}let U0=!1;class Mp{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:s="Controls",closeFolders:o=!1,injectStyles:l=!0,touchStyles:u=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",h=>{(h.code==="Enter"||h.code==="Space")&&(h.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),u&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!U0&&l&&(gN(mN),U0=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this._closeFolders=o,this.domElement.addEventListener("keydown",h=>h.stopPropagation()),this.domElement.addEventListener("keyup",h=>h.stopPropagation())}add(e,t,i,n,s){if(Object(i)===i)return new dN(this,e,t,i);const o=e[t];switch(typeof o){case"number":return new fN(this,e,t,i,n,s);case"boolean":return new sN(this,e,t);case"string":return new pN(this,e,t);case"function":return new Ff(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,o)}addColor(e,t,i=1){return new hN(this,e,t,i)}addFolder(e){const t=new Mp({parent:this,title:e});return this.root._closeFolders&&t.close(),t}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Ff||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Ff)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}_setClosed(e){this._closed!==e&&(this._closed=e,this._callOnOpenClose(this))}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._setClosed(!e),this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(i=>i.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onOpenClose(e){return this._onOpenClose=e,this}_callOnOpenClose(e){this.parent&&this.parent._callOnOpenClose(e),this._onOpenClose!==void 0&&this._onOpenClose.call(this,e)}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}}const _N=Mp,Ht=new _N({}),kf=Ht.domElement;Ht.domElement.style.zIndex="10000";Ht.domElement.style.transform="translateZ(10000px)";Ht.close();window.location.hash.indexOf("gui")==-1,Ht.domElement.remove(),Ht.destroy();document.addEventListener("keydown",r=>{r.key=="g"&&(kf.style.visibility=="hidden"?kf.style.visibility="visible":kf.style.visibility="hidden")});function $n(r,e,t={}){if(!r)return;let i=Object.assign({folder:"",range:1e3,threshold:.01},t),n=r;return i.folder&&(n=r.addFolder(i.folder)),n.add(e,"x",-i.range,i.range,i.threshold).listen(),n.add(e,"y",-i.range,i.range,i.threshold).listen(),n.add(e,"z",-i.range,i.range,i.threshold).listen(),n}const vN={uniforms:{uTime:{type:"f",value:0},tDiffuse:{type:"t",value:null},tVideo:{type:"t",value:null},uOpacity:{type:"f",value:1},uTransition:{type:"f",value:0},uProgress:{type:"f",value:0},uNextProgress:{type:"f",value:0},uNextDirection:{type:"f",value:1},uCenter:{type:"v2",value:new Re(.5,.5)},uAmp:{type:"f",value:0},uFreq:{type:"f",value:0},uScale:{type:"f",value:1},uResolution:{type:"v2",value:new Re(1)}},vertexShader:`
    varying vec2 vUv;

    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
    `,fragmentShader:`
		#define PI 3.1415926535897932384626433832795
		uniform sampler2D tDiffuse;
		uniform sampler2D tVideo;
		uniform vec2 uResolution;
		uniform float uOpacity;
		uniform float uTime;
		varying vec2 vUv;

		void main() {

			float aspect = uResolution.y / uResolution.x;
			vec2 tUv = vUv;

			vec4 tColor = texture2D(tDiffuse,vUv);

			vec4 videoColor = texture2D(tVideo, vUv);
			float alpha = videoColor.r;
			gl_FragColor = vec4(tColor.rgb,tColor.a * alpha);

		}
    `},B0={type:"change"},Uf={type:"start"},V0={type:"end"};class xN extends ps{constructor(e,t){super(),t===void 0&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new W,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=3,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:va.ROTATE,MIDDLE:va.DOLLY,RIGHT:va.PAN},this.touches={ONE:xa.ROTATE,TWO:xa.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(F){F.addEventListener("keydown",St),this._domElementKeyEvents=F},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(B0),i.update(),s=n.NONE},this.update=function(){const F=new W,q=new Ks().setFromUnitVectors(e.up,new W(0,1,0)),be=q.clone().invert(),me=new W,Ce=new Ks,ke=2*Math.PI;return function(){const it=i.object.position;F.copy(it).sub(i.target),F.applyQuaternion(q),l.setFromVector3(F),i.autoRotate&&s===n.NONE&&L(O()),i.enableDamping?(l.theta+=u.theta*i.dampingFactor,l.phi+=u.phi*i.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);let at=i.minAzimuthAngle,bt=i.maxAzimuthAngle;return isFinite(at)&&isFinite(bt)&&(at<-Math.PI?at+=ke:at>Math.PI&&(at-=ke),bt<-Math.PI?bt+=ke:bt>Math.PI&&(bt-=ke),at<=bt?l.theta=Math.max(at,Math.min(bt,l.theta)):l.theta=l.theta>(at+bt)/2?Math.max(at,l.theta):Math.min(bt,l.theta)),l.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(i.minDistance,Math.min(i.maxDistance,l.radius)),i.enableDamping===!0?i.target.addScaledVector(f,i.dampingFactor):i.target.add(f),F.setFromSpherical(l),F.applyQuaternion(be),it.copy(i.target).add(F),i.object.lookAt(i.target),i.enableDamping===!0?(u.theta*=1-i.dampingFactor,u.phi*=1-i.dampingFactor,f.multiplyScalar(1-i.dampingFactor)):(u.set(0,0,0),f.set(0,0,0)),h=1,m||me.distanceToSquared(i.object.position)>o||8*(1-Ce.dot(i.object.quaternion))>o?(i.dispatchEvent(B0),me.copy(i.object.position),Ce.copy(i.object.quaternion),m=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",le),i.domElement.removeEventListener("pointerdown",Ye),i.domElement.removeEventListener("pointercancel",et),i.domElement.removeEventListener("wheel",Xt),i.domElement.removeEventListener("pointermove",mt),i.domElement.removeEventListener("pointerup",_t),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",St)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const o=1e-6,l=new F0,u=new F0;let h=1;const f=new W;let m=!1;const p=new Re,v=new Re,y=new Re,g=new Re,_=new Re,b=new Re,A=new Re,w=new Re,T=new Re,M=[],C={};function O(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function L(F){u.theta-=F}function k(F){u.phi-=F}const Y=function(){const F=new W;return function(be,me){F.setFromMatrixColumn(me,0),F.multiplyScalar(-be),f.add(F)}}(),re=function(){const F=new W;return function(be,me){i.screenSpacePanning===!0?F.setFromMatrixColumn(me,1):(F.setFromMatrixColumn(me,0),F.crossVectors(i.object.up,F)),F.multiplyScalar(be),f.add(F)}}(),G=function(){const F=new W;return function(be,me){const Ce=i.domElement;if(i.object.isPerspectiveCamera){const ke=i.object.position;F.copy(ke).sub(i.target);let Ue=F.length();Ue*=Math.tan(i.object.fov/2*Math.PI/180),Y(2*be*Ue/Ce.clientHeight,i.object.matrix),re(2*me*Ue/Ce.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(Y(be*(i.object.right-i.object.left)/i.object.zoom/Ce.clientWidth,i.object.matrix),re(me*(i.object.top-i.object.bottom)/i.object.zoom/Ce.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function V(F){i.object.isPerspectiveCamera?h/=F:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*F)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(F){i.object.isPerspectiveCamera?h*=F:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/F)),i.object.updateProjectionMatrix(),m=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function se(F){p.set(F.clientX,F.clientY)}function ae(F){A.set(F.clientX,F.clientY)}function te(F){g.set(F.clientX,F.clientY)}function Se(F){v.set(F.clientX,F.clientY),y.subVectors(v,p).multiplyScalar(i.rotateSpeed);const q=i.domElement;L(2*Math.PI*y.x/q.clientHeight),k(2*Math.PI*y.y/q.clientHeight),p.copy(v),i.update()}function xe(F){w.set(F.clientX,F.clientY),T.subVectors(w,A),T.y>0?V(S()):T.y<0&&K(S()),A.copy(w),i.update()}function ee(F){_.set(F.clientX,F.clientY),b.subVectors(_,g).multiplyScalar(i.panSpeed),G(b.x,b.y),g.copy(_),i.update()}function ne(F){F.deltaY<0?K(S()):F.deltaY>0&&V(S()),i.update()}function ye(F){let q=!1;switch(F.code){case i.keys.UP:G(0,i.keyPanSpeed),q=!0;break;case i.keys.BOTTOM:G(0,-i.keyPanSpeed),q=!0;break;case i.keys.LEFT:G(i.keyPanSpeed,0),q=!0;break;case i.keys.RIGHT:G(-i.keyPanSpeed,0),q=!0;break}q&&(F.preventDefault(),i.update())}function J(){if(M.length===1)p.set(M[0].pageX,M[0].pageY);else{const F=.5*(M[0].pageX+M[1].pageX),q=.5*(M[0].pageY+M[1].pageY);p.set(F,q)}}function de(){if(M.length===1)g.set(M[0].pageX,M[0].pageY);else{const F=.5*(M[0].pageX+M[1].pageX),q=.5*(M[0].pageY+M[1].pageY);g.set(F,q)}}function j(){const F=M[0].pageX-M[1].pageX,q=M[0].pageY-M[1].pageY,be=Math.sqrt(F*F+q*q);A.set(0,be)}function Fe(){i.enableZoom&&j(),i.enablePan&&de()}function Te(){i.enableZoom&&j(),i.enableRotate&&J()}function Ae(F){if(M.length==1)v.set(F.pageX,F.pageY);else{const be=Le(F),me=.5*(F.pageX+be.x),Ce=.5*(F.pageY+be.y);v.set(me,Ce)}y.subVectors(v,p).multiplyScalar(i.rotateSpeed);const q=i.domElement;L(2*Math.PI*y.x/q.clientHeight),k(2*Math.PI*y.y/q.clientHeight),p.copy(v)}function Ee(F){if(M.length===1)_.set(F.pageX,F.pageY);else{const q=Le(F),be=.5*(F.pageX+q.x),me=.5*(F.pageY+q.y);_.set(be,me)}b.subVectors(_,g).multiplyScalar(i.panSpeed),G(b.x,b.y),g.copy(_)}function We(F){const q=Le(F),be=F.pageX-q.x,me=F.pageY-q.y,Ce=Math.sqrt(be*be+me*me);w.set(0,Ce),T.set(0,Math.pow(w.y/A.y,i.zoomSpeed)),V(T.y),A.copy(w)}function Pe(F){i.enableZoom&&We(F),i.enablePan&&Ee(F)}function Ne(F){i.enableZoom&&We(F),i.enableRotate&&Ae(F)}function Ye(F){i.enabled!==!1&&(M.length===0&&(i.domElement.setPointerCapture(F.pointerId),i.domElement.addEventListener("pointermove",mt),i.domElement.addEventListener("pointerup",_t)),oe(F),F.pointerType==="touch"?N(F):xt(F))}function mt(F){i.enabled!==!1&&(F.pointerType==="touch"?D(F):ft(F))}function _t(F){_e(F),M.length===0&&(i.domElement.releasePointerCapture(F.pointerId),i.domElement.removeEventListener("pointermove",mt),i.domElement.removeEventListener("pointerup",_t)),i.dispatchEvent(V0),s=n.NONE}function et(F){_e(F)}function xt(F){let q;switch(F.button){case 0:q=i.mouseButtons.LEFT;break;case 1:q=i.mouseButtons.MIDDLE;break;case 2:q=i.mouseButtons.RIGHT;break;default:q=-1}switch(q){case va.DOLLY:if(i.enableZoom===!1)return;ae(F),s=n.DOLLY;break;case va.ROTATE:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enablePan===!1)return;te(F),s=n.PAN}else{if(i.enableRotate===!1)return;se(F),s=n.ROTATE}break;case va.PAN:if(F.ctrlKey||F.metaKey||F.shiftKey){if(i.enableRotate===!1)return;se(F),s=n.ROTATE}else{if(i.enablePan===!1)return;te(F),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Uf)}function ft(F){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;Se(F);break;case n.DOLLY:if(i.enableZoom===!1)return;xe(F);break;case n.PAN:if(i.enablePan===!1)return;ee(F);break}}function Xt(F){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(F.preventDefault(),i.dispatchEvent(Uf),ne(F),i.dispatchEvent(V0))}function St(F){i.enabled===!1||i.enablePan===!1||ye(F)}function N(F){switch(fe(F),M.length){case 1:switch(i.touches.ONE){case xa.ROTATE:if(i.enableRotate===!1)return;J(),s=n.TOUCH_ROTATE;break;case xa.PAN:if(i.enablePan===!1)return;de(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case xa.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Fe(),s=n.TOUCH_DOLLY_PAN;break;case xa.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Te(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Uf)}function D(F){switch(fe(F),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;Ae(F),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;Ee(F),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Pe(F),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Ne(F),i.update();break;default:s=n.NONE}}function le(F){i.enabled!==!1&&F.preventDefault()}function oe(F){M.push(F)}function _e(F){delete C[F.pointerId];for(let q=0;q<M.length;q++)if(M[q].pointerId==F.pointerId){M.splice(q,1);return}}function fe(F){let q=C[F.pointerId];q===void 0&&(q=new Re,C[F.pointerId]=q),q.set(F.pageX,F.pageY)}function Le(F){const q=F.pointerId===M[0].pointerId?M[1]:M[0];return C[q.pointerId]}i.domElement.addEventListener("contextmenu",le),i.domElement.addEventListener("pointerdown",Ye),i.domElement.addEventListener("pointercancel",et),i.domElement.addEventListener("wheel",Xt,{passive:!1}),this.update()}}let Ve={width:0,height:0,aspect:0,marginHeight:0},Ad={x:0,y:0,cx:0,cy:0,_cx:0,_cy:0,rx:0,ry:0,_rx:0,_ry:0},Gn=0;new wp;let Cd,su,Pd,Ua=function(r,e){Pd=r,su=e},Mi;function _y(r,e){Mi&&Mi.dispose(),Mi=new xN(r,e.domElement),Mi.enabled=!0,Mi.zoomSpeed=.3,Mi.enableDamping=!0,Mi.target.set(0,.35,0),Mi.update()}class yN{constructor(e,t={}){U(this,"renderList");U(this,"resizeList");U(this,"containerEl");U(this,"config");U(this,"mouse");U(this,"isRender",!1);U(this,"renderId");U(this,"scene");U(this,"stage");U(this,"camera");U(this,"orthoCamera");U(this,"renderer");U(this,"composer");U(this,"lastScreenShaderPass");U(this,"fxaaPass");U(this,"stats");U(this,"statusDom");U(this,"statusContent","");U(this,"crtDrawSceneId",0);U(this,"nextDrawSceneId",-1);U(this,"effectParams",{uProgress:0,uOpacity:1,uScale:1});U(this,"screenZ",0);U(this,"clock");this.clock=new wp,this.renderList={},this.resizeList={},this.containerEl=e,this.stage={width:1920,height:1080,aspect:4/3,marginHeight:1080},this.mouse={x:0,y:0,cx:0,cy:0,_cx:0,_cy:0,rx:0,ry:0,_rx:0,_ry:0},Ad=this.mouse,this.defineSize(),this.config={camera_fov:45,camera_near:1,camera_far:6e3,render_antialias:!1,render_alpha:!0,render_pixelRatio:ji.isMobile?1.5:window.devicePixelRatio,render_clearColor:0,render_clearColorAlpha:1,render_autoClearColor:!0},this.config=Object.assign(this.config,t),this.isRender=!1,this.scene=new _p,Pd=this.scene,this.camera=new qi(this.config.camera_fov,this.stage.aspect,this.config.camera_near,this.config.camera_far),su=this.camera;let i=1920,n=1080;this.orthoCamera=new pp(i/-2,i/2,n/2,n/-2,.1,1e3),this.orthoCamera,this.orthoCamera.position.z=100,this.renderer=new fy({antialias:this.config.render_antialias,alpha:!0}),Cd=this.renderer,this.renderer.setClearColor(this.config.render_clearColor),this.renderer.setClearAlpha(this.config.render_clearColorAlpha),this.renderer.setPixelRatio(this.config.render_pixelRatio),this.renderer.setSize(this.stage.width,this.stage.height),this.render=this.render.bind(this),this.containerEl&&this.containerEl.prepend(this.renderer.domElement),this.resize=this.resize.bind(this),window.addEventListener("resize",()=>{this.resize()}),ji.isPC&&window.addEventListener("mousemove",s=>{let o=this.mouse.x,l=this.mouse.y;this.mouse.x=s.clientX,this.mouse.y=s.clientY;let u=window.innerWidth*.5,h=window.innerHeight*.5;this.mouse.cx=this.mouse.x-u,this.mouse.cy=-(this.mouse.y-h),this.mouse.rx=(this.mouse.x-u)/u,this.mouse.ry=(this.mouse.y-h)/h;let f=o-this.mouse.x,m=l-this.mouse.y;this.mouse.acc=Math.min(100,Math.sqrt(f*f+m*m))/100})}setPostProcessing(){let e=document.getElementById("intro"),t=new RI(e);this.lastScreenShaderPass=new Ed(vN),this.lastScreenShaderPass.uniforms.tVideo.value=t,this.lastScreenShaderPass.uniforms.uResolution.value=new Re(this.stage.width,this.stage.height),this.fxaaPass=new Ed(rN),this.fxaaPass.material.uniforms.resolution.value.x=1/(this.renderer.domElement.offsetWidth*window.devicePixelRatio),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.renderer.domElement.offsetHeight*window.devicePixelRatio),this.scene.background=new Lt(this.config.render_clearColor);const i=new eN(this.scene,this.camera);this.composer=new nN(this.renderer),this.composer.addPass(i),this.composer.addPass(this.lastScreenShaderPass)}setEffGui(){Ht.addFolder("effect").close(),this.statusDom=document.createElement("div"),this.statusDom.style.position="fixed",this.statusDom.style.left="0",this.statusDom.style.top="50px",this.statusDom.style.padding="5px",this.statusDom.style.fontSize="10px",this.statusDom.style.backgroundColor="#ffffff",this.statusDom.style.color="#000",this.statusDom.style.zIndex="900",this.statusDom.style.opacity="0.5"}defineSize(){eu(),this.stage.width=this.containerEl.clientWidth,this.stage.height=this.containerEl.clientHeight,this.stage.aspect=this.stage.width/this.stage.height,this.stage.marginHeight=this.stage.height-document.documentElement.clientHeight,Ve=this.stage}resize(e=!1){!e&&ji.isIOS&&this.containerEl.clientWidth==this.stage.width||(this.defineSize(),this.screenZ=this.computeZ(0),Gn=this.screenZ,this.updateResizeList(this.stage),this.camera.position.z=this.screenZ,this.camera.aspect=this.stage.aspect,this.camera.updateProjectionMatrix(),this.orthoCamera.left=Ve.width/-2,this.orthoCamera.right=Ve.width/2,this.orthoCamera.top=Ve.height/2,this.orthoCamera.bottom=Ve.height/-2,this.orthoCamera.updateProjectionMatrix(),this.renderer.setSize(this.stage.width,this.stage.height),this.lastScreenShaderPass&&(this.fxaaPass.material.uniforms.resolution.value.x=1/(this.renderer.domElement.offsetWidth*window.devicePixelRatio),this.fxaaPass.material.uniforms.resolution.value.y=1/(this.renderer.domElement.offsetHeight*window.devicePixelRatio),this.composer.setSize(this.stage.width,this.stage.height),this.lastScreenShaderPass.uniforms.uResolution.value=new Re(this.stage.width,this.stage.height)))}computeZ(e,t=this.stage.height,i=this.stage.height){let n=this.camera.fov*Math.PI/180,s=2*Math.tan(n/2);var o=t*this.stage.height,l=e*s,u=i*s,h=i*l,f=o+h,m=f/u;return m}computeByZ(e){let t=this.camera.fov*Math.PI/180,i=2*Math.tan(t/2);return e*i}renderStart(){this.isRender,this.isRender=!0}renderStop(){this.isRender=!1}addResizeList(e,t){this.resizeList[e]=t}removeRenderList(e){delete this.renderList[e]}removeResizeList(e){delete this.resizeList[e]}updateResizeList(...e){for(let t in this.resizeList)this.resizeList[t](...e)}updateDrawTexture(e,t,i=this.crtDrawSceneId){this.lastScreenShaderPass.uniforms.tDiffuse2.value=e,this.lastScreenShaderPass.uniforms.tDiffuse3.value=t,this.crtDrawSceneId=i}updateStatusContent(e="",t=!1,i=!1){this.statusDom&&(t?this.statusContent="":this.statusContent+="<br / >"+e,i&&(this.statusDom.innerHTML=this.statusContent))}render(){this.composer?this.composer.render():this.renderer.render(Pd,su),Mi&&Mi.update(),this.mouse._rx+=(this.mouse.rx-this.mouse._rx)*.1,this.mouse._ry+=(this.mouse.ry-this.mouse._ry)*.1,this.update(),this.lastScreenShaderPass&&(this.lastScreenShaderPass.uniforms.uTime.value=this.clock.getElapsedTime())}update(){}}const Et={color:{base:10784361},camera:{camera_fov:45,camera_near:.1,camera_far:1e4},renderer:{render_antialias:!0,render_alpha:!1,render_pixelRatio:window.devicePixelRatio,render_clearColor:0,render_clearColorAlpha:1,render_autoClearColor:!0},operation:{color:{main:13343832,base:16579316,box:255,cameraGuide:16711680,connectionGuide:255},lineWidth:2,cameraPathCurve:3e4},maki:{textures:{wood:"./assets/images/wood.png",backSide:"./assets/images/maki-backside.jpg",paperPattern:"./assets/images/paper-pattern.jpg",cover:"./assets/images/cover.jpg",lastCover:"./assets/images/lastCover.jpg",sideBar:"./assets/images/maki-side-bar.png",basePattern:"./assets/images/scenes/scene-bg.webp",stamp:"./assets/images/stamp-indigo.webp"},option:{rolls:8,makiScale:.7,labelScale:480/900}},clouds:["./assets/images/clouds/c01.png","./assets/images/clouds/c02.png","./assets/images/clouds/c03.png","./assets/images/clouds/c04.png","./assets/images/clouds/c05.png","./assets/images/clouds/c06.png","./assets/images/clouds/c07.png","./assets/images/clouds/c08.png","./assets/images/clouds/c09.png","./assets/images/clouds/c10.png"],commonTextures:{c1:"./assets/images/clouds/c1.png",c2:"./assets/images/clouds/c2.png",c3:"./assets/images/clouds/c3.png",c4:"./assets/images/clouds/c4.png",c5:"./assets/images/clouds/c5.png",logo:"./assets/images/logo-45r.png",naviPic01:"./assets/images/navi-pic-01.png",naviPic02:"./assets/images/navi-pic-02.png",naviPic03:"./assets/images/navi-pic-03.png",naviPic04:"./assets/images/navi-pic-04.png"},cloudTypes:["c1","c2","c3","c4","c5"],scenes:[{fog:{near:4e3,far:8e3},background:16643786,textures:{yama1:"./assets/images/scene1/yama1.png",yama2:"./assets/images/scene1/yama2.png",yama_fuji:"./assets/images/scene1/yama-fuji.png",yama3:"./assets/images/scene1/yama3.png",yama4:"./assets/images/scene1/yama4.png",yama5:"./assets/images/scene1/yama5.png",tree:"./assets/images/scene1/tree.png",town:"./assets/images/scene1/town.png",bg:"./assets/images/scene1/bg.jpg",paper:"./assets/images/paper-with-logo.jpg",sea:"./assets/images/scene1/sea.jpg",iwa1:"./assets/images/scene1/iwa1.png",iwa2:"./assets/images/scene1/iwa2.png",people1:"./assets/images/scene1/people1.png",people2:"./assets/images/scene1/people2.png",bird:"./assets/images/scene1/bird.png",skycloud:"./assets/images/scene1/skycloud.png",sea_c1:"./assets/images/scene1/sea-c1.png",sea_c2:"./assets/images/scene1/sea-c2.png",sea_c3:"./assets/images/scene1/sea-c3.png",sea_c4:"./assets/images/scene1/sea-c4.png",sea_c5:"./assets/images/scene1/sea-c5.png"},cameraPathPositions:[{x:450.0782727765355,y:-23.51541144541011,z:993.4488809165288},{x:-832.9439518684721,y:0,z:693.4488809165288},{x:-1708.6990816335467,y:182.32850763148036,z:19.668105457305955},{x:-2370.0377513038798,y:364.6570152629607,z:-666.1837378137823},{x:-4964.618230701297,y:198.27822226761594,z:-2168.1527802901223},{x:-5735.756150104031,y:-535.302825027564,z:-6867.401259943074},{x:-6779.01835251977,y:-1572.059795877982,z:-11516.72487361692},{x:-8270.893239950448,y:-1808.3178588104652,z:-15049.652419943095},{x:-10605.373178211203,y:-3588.8109214802207,z:-15906.62666932599},{x:-9184.102889290121,y:-3559.6350264200423,z:-15935.41598587629},{x:-9960.26478822623,y:-2301.4696811108734,z:-16255.990379216591},{x:-10407.919846166424,y:-2200.176143040779,z:-20058.327958671034},{x:-10431.230514810211,y:-2304.3749748788496,z:-20442.462604410313}],items:[{name:"bg",srcName:"bg",position:{x:-9879.860293406431,y:-3208.2021060479033,z:-18313.690315593027},scale:1,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama1",type:"scene",srcName:"yama1",position:{x:-95.08367567383914,y:-328.82554943504687,z:-265.21628514590253},scale:1.2969,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null,connectionPositions:[]},{name:"yama2",type:"scene",srcName:"yama2",position:{x:-1619,y:-302,z:-848},positionSp:{x:-1819,y:-302,z:-848},scale:1.58841,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"people1",type:"scene",srcName:"people1",position:{x:-1140,y:-115,z:-837},positionSp:{x:-1500,y:-115,z:-837},scale:.18981,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama_fuji",type:"scene",srcName:"yama_fuji",position:{x:-2950,y:-274,z:-3482},positionSp:{x:-2950,y:-274,z:-3482},fog:{near:4e3,far:6e3},scale:2.10789,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama3",type:"scene",srcName:"yama3",position:{x:-7425,y:-844,z:-4635},scale:2.70729,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama3_1",type:"scene",srcName:"yama3",position:{x:-4982.387173822644,y:-1879,z:-7505.445916556365},scale:1.90909,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama3_2",type:"scene",srcName:"iwa1",position:{x:-7945,y:-2309,z:-10783.005908904199},scale:1.3,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama3_3",type:"scene",srcName:"yama3",position:{x:-4793,y:-2618.996668554376,z:-12930.090782149988},scale:1.90909,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama4",type:"scene",srcName:"yama4",fog:{near:4500,far:6500},position:{x:1534,y:-878,z:-4552},scale:1.70829,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"yama5",type:"scene",srcName:"yama5",fog:{near:4e3,far:6500},position:{x:-7928.136225961116,y:-2405,z:-15346.59893340352},scale:3.50649,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"tree",type:"scene",srcName:"tree",fog:{near:4e3,far:5e3},position:{x:-8630,y:-1980,z:-15427},scale:1.30869,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"people2",type:"scene",srcName:"people2",fog:{near:4e3,far:5500},position:{x:-7136,y:-2021,z:-15320},scale:.3996,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"town",type:"scene",srcName:"town",position:{x:-8850,y:-3647,z:-17652.284678228243},scale:1.7,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"iwa1",type:"scene",srcName:"iwa1",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-12603,y:-3824,z:-24348},scale:1.80819,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"iwa2",type:"scene",srcName:"iwa2",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-9473,y:-2607,z:-24146},positionSp:{x:-9900,y:-3130,z:-24146},scale:2.20779,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"sea",type:"scene",srcName:"sea",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-10268,y:-1232,z:-24877},positionSp:{x:-9053,y:-1524,z:-24877},scale:2.44,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"skycloud",type:"scene",srcName:"skycloud",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-11709,y:-1477,z:-24507},positionSp:{x:-11709,y:-1664,z:-24507},scale:2.10789,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"bird",type:"scene",srcName:"bird",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-10363,y:-1477,z:-24312},scale:.80919,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"sea-c1",type:"scene",srcName:"sea_c1",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-8956,y:-3047,z:-23624},positionSp:{x:-8956,y:-3517,z:-23624},scale:1.5,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"sea-c2",type:"scene",srcName:"sea_c2",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-8604,y:-2363,z:-23442},positionSp:{x:-8800,y:-2463,z:-23442},scale:.80919,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"sea-c3",type:"scene",srcName:"sea_c3",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-8020,y:-1791,z:-23731},scale:.80919,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"sea-c4",type:"scene",srcName:"sea_c4",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-12636,y:-2749,z:-23881},scale:1.00899,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"sea-c5",type:"scene",srcName:"sea_c5",sceneName:"last",fog:{near:4e3,far:4e3},position:{x:-12392,y:-3114,z:-23273},scale:.90909,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_1",srcName:"c1",type:"cloud",position:{x:0,y:-133,z:-1765},scale:.8,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_2",srcName:"c2",type:"cloud",position:{x:-3883,y:-134,z:-3349},scale:.60939,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_7",srcName:"c1",type:"cloud",position:{x:-5501,y:-920,z:-7553},scale:.3,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_8",srcName:"c3",type:"cloud",position:{x:-2464,y:-436,z:-1302},scale:.40959,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_9",srcName:"c3",type:"cloud",position:{x:678,y:456,z:-2313},scale:.6,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_3",srcName:"c1",type:"cloud",position:{x:-7889.920448849493,y:-1133,z:-7547},scale:.7992,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_4",srcName:"c1",type:"cloud",position:{x:-7867,y:-722.7203097160791,z:-4718.6465044835295},scale:.3,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_5",srcName:"c1",type:"cloud",position:{x:-6175.703853508187,y:-806.9374269313766,z:-5306.091918533518},scale:.6,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"cloud_6",srcName:"c1",type:"cloud",position:{x:-7724,y:-1792,z:-11919},scale:.7,rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null}],itemsOfScene:[],itemsOffset:{bg:{position:new W(0,0,0)},yama1:{position:new W(0,-298,0)},yama_fuji:{position:new W(-16,-144,0)},yama3:{position:new W(-533.74,-141.1,-300)},yama4:{position:new W(1036.81,-141.1,-400)},yama2:{position:new W(-1083.44,-230,0)},town:{position:new W(0,0)},stage:{width:11716,height:3794,scale:.3}}},{textures:{bg:"./assets/images/scenes/scene-bg.webp"},cameraPathPositions:[{x:0,y:0,z:0},{x:0,y:0,z:-3e3}]},{fog:{near:4e3,far:8e3},textures:{land:"./assets/images/last/land.png",bg:"./assets/images/last/bg.jpg",people:"./assets/images/last/people.png",hune:"./assets/images/last/hune.png",kumo01:"./assets/images/last/kumo01.png",kumo02:"./assets/images/last/kumo02.png",kumo03:"./assets/images/last/kumo03.png",kumo04:"./assets/images/last/kumo04.png",kumo05:"./assets/images/last/kumo05.png",kumo06:"./assets/images/last/kumo06.png",kumo07:"./assets/images/last/kumo07.png",kumo08:"./assets/images/last/kumo08.png",kumo09:"./assets/images/last/kumo09.png",kumo10:"./assets/images/last/kumo10.png",kumo11:"./assets/images/last/kumo11.png",kumo12:"./assets/images/last/kumo12.png"},cameraPathPositions:[{x:-25.453610397670992,y:257.34716899917305,z:998.2773080412748},{x:-3.628815726881836,y:144.79015414718077,z:-1784.4860253257234},{x:-132.36534688592096,y:-223.45260570656205,z:-2291.7427243880024},{x:-444.5779497280834,y:-228,z:-2289},{x:-600,y:-228,z:-2289}],items:[{name:"land",srcName:"land",position:{x:0,y:-779,z:-5400},scale:1.2987,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"bg",srcName:"bg",position:{x:0,y:581,z:-5500},scale:1.25,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"people",srcName:"people",position:{x:-254,y:-910,z:-5319},scale:.63,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"hune",srcName:"hune",position:{x:-740,y:-448,z:-5319},scale:.63,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo01",srcName:"kumo01",position:{x:-1235,y:-820,z:-4758.5},scale:.92907,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo02",srcName:"kumo02",position:{x:1198.5,y:-538,z:-4642.5},scale:.82917,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo03",srcName:"kumo03",position:{x:893.5,y:-898.5,z:-4535.5},scale:.84915,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo04",srcName:"kumo04",position:{x:903,y:-1166.5,z:-4933},scale:1.00899,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo05",srcName:"kumo05",position:{x:-256.5,y:-1265,z:-4895},scale:1.0989,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo06",srcName:"kumo06",position:{x:-1204.5,y:-1030,z:-4766},scale:1,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo07",srcName:"kumo07",position:{x:-1680,y:-695,z:-5230},scale:.7992,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo08",srcName:"kumo08",position:{x:-1165,y:-555,z:-5250},scale:.7992,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo09",srcName:"kumo09",position:{x:-1025,y:-230,z:-5335},scale:.8991,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo10",srcName:"kumo10",position:{x:-525,y:-40,z:-5435},scale:1,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo11",srcName:"kumo11",position:{x:375,y:-190,z:-5430},scale:1.1988,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null},{name:"kumo12",srcName:"kumo12",position:{x:1020,y:-40,z:-5470},scale:1,fog:{near:4e3,far:6e3},rotation:{isEuler:!0,_x:0,_y:0,_z:0,_order:"XYZ"},data:null}]}]};function bN(){return{vertexShader:`
			uniform float time;
			uniform float angle;
			uniform float progress;
			uniform vec4 resolution;
			uniform float rad;
			uniform float rolls;
			varying vec2 vUv;
			varying float vFrontShadow;
			varying float vBackShadow;
			// varying float vProgress;

			uniform sampler2D baseTexture;
			uniform sampler2D inTexture;
			uniform sampler2D backTexture;
			uniform vec2 pixels;

			const float pi = 3.1415925;

			mat4 rotationMatrix(vec3 axis, float angle) {
					axis = normalize(axis);
					float s = sin(angle);
					float c = cos(angle);
					float oc = 1.0 - c;

					return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
											oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
											oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
											0.0,                                0.0,                                0.0,                                1.0);
			}

			vec3 rotate(vec3 v, vec3 axis, float angle) {
				mat4 m = rotationMatrix(axis, angle);
				return (m * vec4(v, 1.0)).xyz;
			}

			void main() {
				vUv = uv;
				float pi = 3.14159265359;


				float finalAngle = angle - 0.*0.3*sin(progress*6.);

				// @todo account for aspect ratio!!!
				vec3 newposition = position;

				// float angle = pi/10.;
				float rad = rad;//0.1;
				float rolls = rolls;//8.;


				// rot
				newposition = rotate(newposition - vec3(-.5,.5,0.), vec3(0.,0.,1.),-finalAngle) + vec3(-.5,.5,0.);

				float offs = (newposition.x + 0.5)/(sin(finalAngle) + cos(finalAngle)); // -0.5..0.5 -> 0..1
				float tProgress = clamp( (progress - offs*0.99)/0.01 , 0.,1.);

				// shadows
				vFrontShadow = clamp((progress - offs*0.95)/0.05,0.7,1.);
				vBackShadow = 1. - clamp(abs((progress - offs*0.9)/0.1),0.,1.);
				// vProgress = clamp((progress - offs*0.95)/0.05,0.,1.);

				newposition.z =  rad + rad*(1. - offs/2.)*sin(-offs*rolls*pi - 0.5*pi);
				newposition.x =  - 0.5 + rad*(1. - offs/2.)*cos(-offs*rolls*pi + 0.5*pi);


				// // rot back
				newposition = rotate(newposition - vec3(-.5,.5,0.), vec3(0.,0.,1.),finalAngle) + vec3(-.5,.5,0.);
				// unroll
				newposition = rotate(newposition - vec3(-.5,0.5,rad), vec3(sin(finalAngle),cos(finalAngle),0.0), -pi*progress*rolls);
				newposition +=  vec3(
					-.5 + progress*cos(finalAngle)*(sin(finalAngle) + cos(finalAngle)),
					0.5 - progress*sin(finalAngle)*(sin(finalAngle) + cos(finalAngle)),
					rad*(1.-progress/2.)
				);

				// animation
				vec3 finalposition = mix(newposition,position,tProgress);
				gl_Position = projectionMatrix * modelViewMatrix * vec4(finalposition, 1.0 );
			}
		`,fragmentShader:`
			uniform float time;
			uniform float progress;
			uniform float transitionProgress;
			uniform float transitionSize;
			uniform float insideMargin;
			uniform float isTransition;
			uniform float lastCoverPositionX;
			uniform vec2 transitionAddPoint;
			uniform vec2 backSideScroll;
			uniform vec4 resolution;
			uniform vec4 screenResolution;
			uniform vec2 labelResolution;
			uniform vec2 coverResolution;
			uniform vec2 lastCoverResolution;

			uniform float stampProgress;
			uniform vec2 stampResolution;
			uniform vec2 stampPosition;
			uniform vec2 stampAspect;

			uniform vec2 coverScale;
			uniform vec2 lastCoverPosition;
			uniform vec2 firstCoverPosition;
			uniform vec2 mainVisualPosition;

			uniform sampler2D videoTexture;
			uniform sampler2D inTexture;
			uniform sampler2D inNextTexture;
			uniform sampler2D backTexture;
			uniform sampler2D coverTexture;
			uniform sampler2D lastCoverTexture;
			uniform sampler2D sideBarTexture;
			uniform sampler2D stamp;


			varying vec2 vUv;
			varying float vFrontShadow;
			varying float vBackShadow;

			float random (in vec2 st) {
				return fract(sin(dot(st.xy,
							vec2(12.9898,78.233)))*
							43758.5453123);
			}

			  // Based on Morgan McGuire @morgan3d
			  // https://www.shadertoy.com/view/4dS3Wd
			float noise (in vec2 st) {
				vec2 i = floor(st);
				vec2 f = fract(st);

				// Four corners in 2D of a tile
				float a = random(i);
				float b = random(i + vec2(1.0, 0.0));
				float c = random(i + vec2(0.0, 1.0));
				float d = random(i + vec2(1.0, 1.0));

				vec2 u = f * f * (3. - 2.0 * f);

				return mix(a, b, u.x) +
						(c - a)* u.y * (1.0 - u.x) +
						(d - b) * u.x * u.y;
			}

			#define OCTAVES 2
			float fbm (float power, in vec2 st) {
				// Initial values
				float value = power;
				float amplitude = 0.5;
				float frequency = 0.;
				// st.x += transitionAddPoint.x;
				// st.y += transitionAddPoint.y;

				// Loop of octaves
				for (int i = 0; i < OCTAVES; i++) {
					value += amplitude * noise(st);
					st *= 3.0;
					amplitude *= 0.5;
				}
				return value;
			}


			void main()	{

				float coverW = coverResolution.x / resolution.x;
				float lastCoverW = lastCoverResolution.x / resolution.x;
				vec2 reverserUV = vec2(1.0 - vUv.x, vUv.y);
				vec2 inUV = vUv;
				inUV.x -= coverW;
				inUV = (inUV - vec2(0.5)) * screenResolution.zw + vec2(0.5);
				inUV.x -= (1.0 - screenResolution.z) * 0.5;
				inUV = vec2(1.0 - inUV.x, inUV.y);

				vec2 outUv = (vUv - vec2(0.5)) * resolution.zw + vec2(0.5);

				vec2 backsideUV = outUv;
				backsideUV.x += backSideScroll.x;

				// repeat x
				backsideUV = fract(backsideUV);

				vec4 inColor = texture2D(inTexture,inUV);
				vec4 backColor = texture2D(backTexture,backsideUV);
				float margin = insideMargin / resolution.y;
				float insideAlpha = 1.0;

				/*
					first cover
				*/
				if(vUv.x < firstCoverPosition.x){
					vec2 coverUv = vUv;
					coverUv.x /= coverW; // resize to cover size
					coverUv = vec2(1.0 - coverUv.x, coverUv.y); // reverse
					coverUv -= vec2(0.5); // to center
					coverUv.y *= 1.0 - coverW;
					coverUv.y /= 1.25;
					coverUv += vec2(0.5);
					inColor = texture2D(coverTexture,coverUv);

					/*
						side pole
					*/
					float barView = 15.0 / resolution.x;
					vec2 barUv = vUv;
					barUv.x /= barView;
					vec4 sideBarT = texture2D(sideBarTexture,barUv);

					if(vUv.x < barView) {
						inColor = sideBarT;
					}else{
						if (vUv.y < margin || vUv.y > 1. - margin) {
							insideAlpha = 0.0;
						}
					}
					insideAlpha *= sideBarT.a;

				}else{
					if (vUv.y < margin || vUv.y > 1. - margin) {
						insideAlpha = 0.0;
					}
				}


				/*
					last cover
				*/
				if(vUv.x > lastCoverPosition.x){
					vec2 coverUv = vUv;
					coverUv.x -= lastCoverPosition.x;
					coverUv.x /= lastCoverW;
					coverUv = vec2(1.0 - coverUv.x, coverUv.y);

					coverUv -= vec2(0.5);
					coverUv.y *= 1.0 - lastCoverW;
					coverUv += vec2(0.5);
					inColor = texture2D(lastCoverTexture,coverUv);

				}

				if(vUv.x + stampAspect.x > lastCoverPosition.x) {
					vec2 stampUv = vUv;
					stampUv.x -= stampPosition.x;
					stampUv.x /= stampAspect.x;
					stampUv.y -= stampPosition.y;
					stampUv.y /= stampAspect.y;

					stampUv = vec2(1.0 - stampUv.x, stampUv.y);

					vec4 stampColor = texture2D(stamp,stampUv);
					inColor = mix(inColor,stampColor,stampColor.a * stampProgress);
				}




				vec4 destColor = inColor;
				float alpha = 1.0;

				if (gl_FrontFacing == false) {
					destColor = backColor;
				}else{
					if (vUv.y < margin || vUv.y > 1. - margin) {
						destColor.a = insideAlpha;
					}

					if(isTransition == 1.0) {
						vec2 transitionUv = inUV;
						transitionUv.y *= screenResolution.y / screenResolution.x;
						float transitionValue = fbm((1.0 - transitionProgress * 2.0),transitionUv * transitionSize);
						transitionValue = smoothstep(0.0,1.0,transitionValue);
						vec4 inNextColor = texture2D(inNextTexture,inUV);
						destColor = mix(inColor,inNextColor,1.0 - transitionValue);
					}else{
						destColor = inColor;
					}

				}

				gl_FragColor = destColor;
				gl_FragColor.rgb *=vFrontShadow;
				gl_FragColor.a = alpha;

			}
		`}}function wN(r=500,e=[]){let t=new py(e),i=[];return t.getPoints(r).forEach(({x:n,y:s,z:o})=>{i.push(n,s,o)}),{curve:t,points:i}}function Bf(r){const e=[];for(let t=0;t<r.length;t+=3)e.push(new W(r[t+0],r[t+1],r[t+2]));return e}function Vf(r){let e=[];return r.forEach(({x:t,y:i,z:n})=>{e.push(t,i,n)}),e}function G0(r=new W,e=100,t=100,i=100,n=16711680,s={}){let o=new mo(e,t,i),l=new Rl(Object.assign({color:n},s)),u=new Fi(o,l);return u.position.copy(r),u}function W0(r){const e=t=>{document.removeEventListener("copy",e),t.clipboardData.setData("text/plain",r),t.preventDefault()};document.addEventListener("copy",e),document.execCommand("copy")}function Pn(r=1e3){return new Promise(e=>{setTimeout(()=>{e()},r)})}function tr(r,e=0,t=1){return Math.min(Math.max(r,e),t)}function is(r,e,t,i=0){r.style.transform=`translate3d(${e}px,${t}px,${i}px)`}function vy(r){return new Promise((e,t)=>{var i=new Image;i.onload=function(){e(!0)},i.onerror=function(){t(!1)},i.src=r})}function ns(r,e,t=!0){let i=r.currentStyle||window.getComputedStyle(r);if(t)try{return Number(i[e].match(/-?[\d|,|.|e|E|\+]+/g)[0])}catch{}else return i[e]}class SN{constructor(){U(this,"maki");U(this,"pole");U(this,"cover");U(this,"inScene");U(this,"backScene");U(this,"rttCamera");U(this,"transitionVideo");U(this,"transitionVideoTexture");U(this,"container");U(this,"backPattern");U(this,"label");U(this,"progress",{crt:0,old:-1,smooth:0});U(this,"progressLast",{crt:0,old:-1,smooth:0});U(this,"coverViewPoint",new Re(0,0));U(this,"coverSize",{width:640,height:1280,scale:{x:1,y:1}});U(this,"lastCoverSize",{width:760,height:1280,scale:{x:1,y:1}});U(this,"backRtt");U(this,"inRtt");U(this,"size",{width:1920*2,height:1010,viewScale:1,scaleByScreen:1,baseScale:1,insideMargin:6});U(this,"poleSize",{height:1010*1.1,rad:70});U(this,"firstFoldRatio",.8);U(this,"endP",.14);this.container=new oi,this.size.scaleByScreen=Ve.height/this.size.height,this.size.viewScale=Et.maki.option.makiScale*this.size.scaleByScreen,this.container.scale.set(this.size.viewScale,this.size.viewScale,this.size.viewScale),this.inScene=new _p;let e=window.devicePixelRatio;this.inRtt=new Yn(Ve.width*e,Ve.height*e,{depthBuffer:!0,stencilBuffer:!1});let t=Et.maki.textures;this.pole=new Fi(new xp(this.poleSize.rad,this.poleSize.rad,this.poleSize.height),new Rl({color:"#521423",map:t.wood,depthTest:!0})),this.pole.renderOrder=-1,this.pole.position.z=160,this.container.add(this.pole);let i=t.cover,n=t.lastCover,s=t.sideBar,o=bN(),l=new Qs(1,1,250,1),u=new gn({side:po,uniforms:{time:{value:0},progress:{value:0},transitionProgress:{value:0},transitionSize:{value:4},addPosition:{value:{x:Math.random()*10-5,y:Math.random()*10-5}},angle:{value:0},rad:{value:.034},rolls:{value:5},firstCoverPosition:{value:new Re(0,0)},mainVisualPosition:{value:new Re(0,0)},lastCoverPosition:{value:new Re(0,0)},backSideScroll:{value:new Re(-.011,0)},isTransition:{value:0},baseTexture:{value:Et.maki.textures.basePattern},inTexture:{value:null},inNextTexture:{value:null},backTexture:{value:null},coverTexture:{value:i},stamp:{value:Et.maki.textures.stamp},stampProgress:{value:0},stampPosition:{value:new Re(0,0)},stampAspect:{value:new Re(0,0)},stampResolution:{value:new Re(60,63)},lastCoverTexture:{value:n},sideBarTexture:{value:s},coverViewPoint:{value:new Re(0,0)},coverResolution:{value:new Re(this.coverSize.width,this.coverSize.height)},lastCoverResolution:{value:new Re(this.lastCoverSize.width,this.lastCoverSize.height)},coverScale:{value:new Re(this.coverSize.scale.x,this.coverSize.scale.y)},insideMargin:{value:this.size.insideMargin},labelResolution:{value:new Re},resolution:{value:new si},screenResolution:{value:new si},uvRate1:{value:new Re(1,1)}},transparent:!0,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),h=this.size.width,f=this.size.height,m=f/h,p,v;f/h>m?(p=h/f*m,v=1):(p=1,v=f/h/m),m=Ve.height/Ve.width;let y,g;f/h>m?(y=h/f*m,g=1):(y=1,g=f/h/m),u.uniforms.backTexture.value=Et.maki.textures.backSide,u.uniforms.resolution.value.x=h,u.uniforms.resolution.value.y=f,u.uniforms.resolution.value.z=p,u.uniforms.resolution.value.w=v,u.uniforms.screenResolution.value.x=Ve.width,u.uniforms.screenResolution.value.y=Ve.height,u.uniforms.screenResolution.value.z=y,u.uniforms.screenResolution.value.w=g,u.uniforms.progress.value=0,u.uniforms.rad.value=.02,this.maki=new Fi(l,u),this.maki.scale.set(-h,f,h),this.maki.position.x=-h/2,this.container.add(this.maki)}setGui(){let e=this.maki.material,t=Ht.addFolder("maki");t.close(),$n(t.addFolder("pole"),this.pole.position),t.add(this.size,"viewScale",0,1,.01).onChange(i=>{this.container.scale.set(i,i,i)}).listen(),t.add({tProgress:e.uniforms.transitionProgress.value},"tProgress",0,1,.01).listen().onChange(i=>{e.uniforms.transitionProgress.value=i}),t.add({tSize:e.uniforms.transitionSize.value},"tSize",0,10,.01).onChange(i=>{e.uniforms.transitionSize.value=i}),t.add({rad:e.uniforms.rad.value},"rad",0,1,.001).listen().onChange(i=>{e.uniforms.rad.value=i}),t.add({angle:e.uniforms.angle.value},"angle",-Math.PI,Math.PI,.01).listen().onChange(i=>{e.uniforms.angle.value=i}),t.add({rolls:e.uniforms.rolls.value},"rolls",1,20,.1).listen().onChange(i=>{e.uniforms.rolls.value=i}),t.add({progress:0},"progress",-1,1,.01).listen().onChange(i=>{this.update(i)}),t.add(this,"endP",0,1,.01).listen(),t.add(this,"firstFoldRatio",0,1,.001).onChange(i=>{this.update(this.progress.crt)}),t.add(this.container.scale,"x").name("scale").listen().disable(),t.add({backSideScrollX:e.uniforms.backSideScroll.value.x},"backSideScrollX",-1e3,1e3,.001).onChange(i=>{this.maki.material.uniforms.backSideScroll.value.x=i}),$n(t,this.container.position,{folder:"position",range:5e3,threshold:.1})}setInsideTexture(e){this.maki.material.uniforms.inTexture.value=e}setInsideNextTexture(e){this.maki.material.uniforms.inNextTexture.value=e}setTransitionActive(e=!1){this.maki.material.uniforms.isTransition.value=e?1:0}resize(){this.size.baseScale=Ve.height/this.size.height,this.size.scaleByScreen=Ve.height/(this.size.height+Ve.marginHeight*3),this.update(this.progress.crt);let e=window.devicePixelRatio;this.inRtt.setSize(Ve.width*e,Ve.height*e),this.size.width=1920*4;let t=this.size.width,i=this.size.height,n=Ve.height/Ve.width,s,o;t/i>n?(s=t/i*n,o=1):(s=1,o=i/t/n),this.maki.scale.set(-t,i,t),this.maki.position.x=-t/2;let l=this.maki.material;l.uniforms.resolution.value.x=this.size.width,l.uniforms.resolution.value.y=this.size.height,l.uniforms.screenResolution.value.x=Ve.width,l.uniforms.screenResolution.value.y=Ve.height,l.uniforms.screenResolution.value.z=s,l.uniforms.screenResolution.value.w=o;let u=this.size.height/Ve.height,h=this.coverSize.width/this.size.width,f=Ve.width/this.size.width,m=f*u+h;this.firstFoldRatio=m+u*.03,l.uniforms.firstCoverPosition.value.x=h,l.uniforms.mainVisualPosition.value.x=h+f,l.uniforms.lastCoverPosition.value.x=m,this.endP=this.lastCoverSize.width/this.size.width,this.endP-=u*.03,l.uniforms.stampPosition.value.x=m-32/this.size.width,l.uniforms.stampAspect.value.x=64/this.size.width,l.uniforms.stampPosition.value.y=85/this.size.height,l.uniforms.stampAspect.value.y=66/this.size.height}update(e){this.progress.crt=e,this.progress.smooth+=(this.progress.crt-this.progress.smooth)*.3;let t=this.progress.smooth,i=this.maki.material,n=1,s=.8;n=1,s=0;let o=t*n,l=(t-s)/(1-s);l=tr(l);let u=this.size.insideMargin/Ve.height,h=this.size.baseScale*Et.maki.option.makiScale+u,f=this.size.baseScale-h,m=h+f*l,p=Ve.height/this.size.height;this.coverSize.width,this.progressLast.smooth*f*.7;let v=this.progressLast.smooth*-300;i.uniforms.stampProgress.value=Math.min(1,this.progressLast.smooth*2);let y=l*(Ve.width*.5+this.coverSize.width*p);y+=this.progressLast.smooth*(this.lastCoverSize.width*p),y+=this.progressLast.smooth*Ve.width*.3,this.container.position.x=y,this.container.position.z=v,this.container.scale.set(m,m,m);let g=o*this.firstFoldRatio;g+=this.endP*this.progressLast.smooth,i.uniforms.progress.value=g,this.pole.position.x=-g*(this.size.width+10),this.pole.rotation.y=-g*5*Math.PI,this.pole.position.z=160-g*100,i.uniforms.time.value+=.01,this.progress.crt>.9&&(i.uniforms.insideMargin.value=this.size.insideMargin*(1-(this.progress.crt-.9)/.1))}lastUpdate(e){this.progressLast.crt=e,this.progressLast.smooth+=(this.progressLast.crt-this.progressLast.smooth)*.12}updateTransition(e){let t=this.maki.material;t.uniforms.transitionProgress.value=e}captureScene(e,t,i){t.clear(),t.setRenderTarget(this.inRtt),t.render(e,i),t.setRenderTarget(null)}transitionScene(e,t,i,n,s){}}const jc=function(r,e,t=1,i=null,n={fitStage:!1}){n=Object.assign({fog:{near:4e3,far:8e3}},n);let s=r.image.width*t,o=r.image.height*t;n.fitStage&&(s=Ve.width,o=Ve.height);const l=new Qs(s,o,30,30);let u;n.material?u=n.material:u=new gn({uniforms:{tDiffuse:{value:r},near:{value:n.fog.near},far:{value:n.fog.far}},vertexShader:`
				varying vec2 vUv;
				varying vec4 vPosition;
				varying float vAlpha;

				uniform float near;
				uniform float far;
				void main() {
					vUv = uv;
				vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
					vec4 worldPosition = modelMatrix * vec4(position, 1.0);
					vec4 viewPosition = viewMatrix * worldPosition;
					// float distance = length(cameraPosition.z - viewPosition.z);
					float distance = length(viewPosition.xyz);

					// vAlpha = 1.0 - distanceFromCamera / far;
					// Calculate alpha value based on the distance
					vAlpha = 1.0 - smoothstep(near, far, distance);

					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

				}
			`,fragmentShader:`
				varying vec2 vUv;
				varying vec4 vPosition;
				varying float vAlpha;

				uniform sampler2D tDiffuse;
				void main() {
					vec4 tColor = texture2D(tDiffuse, vUv);
					// if(tColor.a < 0.1) discard;
					gl_FragColor = tColor;
					gl_FragColor.a *= vAlpha;

				}
			`,transparent:!0,side:po}),l.dispose(),u.dispose();const h=new Fi(l,u);return r.image.src.split("/").pop().split(".")[0],h.position.copy(e),h},Ia=new es,Jr=new ZI,Yo=new Re,H0=new W,Hc=new W,Gf=new W,$0=new ai;class MN extends ps{constructor(e,t,i){super(),i.style.touchAction="none";let n=null,s=null;const o=[],l=this;function u(){i.addEventListener("pointermove",y),i.addEventListener("pointerdown",g),i.addEventListener("pointerup",_),i.addEventListener("pointerleave",_)}function h(){i.removeEventListener("pointermove",y),i.removeEventListener("pointerdown",g),i.removeEventListener("pointerup",_),i.removeEventListener("pointerleave",_),i.style.cursor=""}function f(){h()}function m(){return e}function p(A){e=A}function v(){return Jr}function y(A){if(l.enabled!==!1){if(b(A),Jr.setFromCamera(Yo,t),n){Jr.ray.intersectPlane(Ia,Hc)&&n.position.copy(Hc.sub(H0).applyMatrix4($0)),l.dispatchEvent({type:"drag",object:n});return}if(A.pointerType==="mouse"||A.pointerType==="pen")if(o.length=0,Jr.setFromCamera(Yo,t),Jr.intersectObjects(e,!0,o),o.length>0){const w=o[0].object;Ia.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ia.normal),Gf.setFromMatrixPosition(w.matrixWorld)),s!==w&&s!==null&&(l.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null),s!==w&&(l.dispatchEvent({type:"hoveron",object:w}),i.style.cursor="pointer",s=w)}else s!==null&&(l.dispatchEvent({type:"hoveroff",object:s}),i.style.cursor="auto",s=null)}}function g(A){l.enabled!==!1&&(b(A),o.length=0,Jr.setFromCamera(Yo,t),Jr.intersectObjects(e,!0,o),o.length>0&&(n=l.transformGroup===!0?e[0]:o[0].object,Ia.setFromNormalAndCoplanarPoint(t.getWorldDirection(Ia.normal),Gf.setFromMatrixPosition(n.matrixWorld)),Jr.ray.intersectPlane(Ia,Hc)&&($0.copy(n.parent.matrixWorld).invert(),H0.copy(Hc).sub(Gf.setFromMatrixPosition(n.matrixWorld))),i.style.cursor="move",l.dispatchEvent({type:"dragstart",object:n})))}function _(){l.enabled!==!1&&(n&&(l.dispatchEvent({type:"dragend",object:n}),n=null),i.style.cursor=s?"pointer":"auto")}function b(A){const w=i.getBoundingClientRect();Yo.x=(A.clientX-w.left)/w.width*2-1,Yo.y=-(A.clientY-w.top)/w.height*2+1}u(),this.enabled=!0,this.transformGroup=!1,this.activate=u,this.deactivate=h,this.dispose=f,this.getObjects=m,this.getRaycaster=v,this.setObjects=p}}class Ep{constructor(e=0){U(this,"id",0);U(this,"name","SceneBase");U(this,"scene");U(this,"scenes",[]);U(this,"camera");U(this,"editCamera");U(this,"guiBase");U(this,"sceneConfig");U(this,"oldStep",-1);U(this,"renderTarget");U(this,"lookAtTarget",new W);U(this,"mouseAcc",70);U(this,"mouseSpeed",.07);U(this,"cameraPathTube");U(this,"items",[]);U(this,"itemPointBoxs",[]);U(this,"camAcc",new Re(0,0));U(this,"progress",{smooth:0,crt:0,old:-1});U(this,"camCurrentPathId",0);U(this,"sceneContainer");U(this,"container");U(this,"dragCtrl");U(this,"dragObjects",[]);U(this,"sceneGroups",[]);U(this,"cameraPath");U(this,"cameraPathCurve",[]);U(this,"cameraPathPositions",[]);U(this,"cameraPointBoxs",[]);U(this,"cameraHelper");U(this,"camPathLength",0);U(this,"cameraStepOption",{min:0});U(this,"pointBoxGroup");U(this,"guideGroup");U(this,"isActive",!1);U(this,"isOperationMode",!1);U(this,"isEditMode",!1);U(this,"showGuidePath",!1);U(this,"operationMode",!1);U(this,"config",Et.camera);this.id=e,this.scene=new _p,this.container=new oi,this.scene.add(this.container),this.camera=new qi(this.config.camera_fov,Ve.aspect,this.config.camera_near,this.config.camera_far),this.editCamera=new qi(this.config.camera_fov,Ve.aspect,this.config.camera_near,this.config.camera_far),this.camera.position.z=Gn,this.editCamera.position.z=Gn,this.guideGroup=new ka,this.pointBoxGroup=new ka,this.container.add(this.guideGroup),this.container.add(this.pointBoxGroup),this.sceneConfig=Et.scenes[this.id],this.cameraPathPositions=[].concat(this.sceneConfig.cameraPathPositions);let t=window.devicePixelRatio;this.renderTarget=new Yn(Ve.width*t,Ve.height*t,{depthBuffer:!0,stencilBuffer:!1}),this.setCameraPath(),this.setDragItems()}update(e){this.progress.crt=e}updateCameraPath(e=0){this.progress.smooth+=(this.progress.crt-this.progress.smooth)*.13;const t=this.cameraPathCurve.length-1,i=this.progress.smooth*t,n=Math.max(this.cameraStepOption.min,Math.floor(i)),s=this.cameraPathCurve[n].clone();s.x+=this.lookAtTarget.x,s.y+=this.lookAtTarget.y,this.camPathLength=t,this.camCurrentPathId=n,this.camera.position.copy(s),this.oldStep=n}setGui(){this.guiBase=Ht.addFolder(this.name),this.guiBase.close();let e=this.guiBase.addFolder("option").close();e.add(this,"isActive").listen(),e.add(this,"isEditMode").listen(),e.add(this,"showGuidePath").listen().onChange(i=>{this.guideViewToggle(i)}),e.add(this.camera,"fov",0,180).listen().onChange(i=>{this.camera.updateProjectionMatrix()});let t=this.scene.fog;t&&(e.add(t,"near",-5e3,5e3),e.add(t,"far",0,5e3)),e.add(this.progress,"crt",0,1,.01).name("progress").onChange(i=>{this.updateCameraPath(i)}).listen(),e.add(this,"camCurrentPathId",0,1,.01).disable().listen(),e.add(this,"camPathLength",0,1,.01).disable().listen(),$n(this.guiBase,this.container.position,{folder:"container",range:3e3,thresold:.1}).close(),$n(this.guiBase,this.camera.position,{folder:"cam_position"}).close(),$n(this.guiBase,this.sceneContainer.position,{folder:"sceneContainer",range:2e4,threshold:.1}).close(),e.add(this.dragObjects,"length").onChange(i=>{}).listen().disable().name("dragObjectNums"),e.add(this.cameraPathPositions,"length").onChange(i=>{}).listen().disable().name("cameraPositionNums"),this.guiBase.add({CopycameraPositions:()=>{let i=JSON.stringify(this.cameraPathPositions);W0(i)}},"CopycameraPositions"),this.guiBase.add({ItemsDataCopy:()=>{this.sceneConfig.items.forEach(n=>{let s=this.items.find(o=>o._name===n.name);s&&(n.position=s.position.clone(),n.scale=s.scale.x,n.rotation=s.rotation.clone())});let i=JSON.stringify(this.sceneConfig.items);W0(i)}},"ItemsDataCopy")}setOperationMode(){this.dragCtrl=new MN(this.dragObjects,this.editCamera,Cd.domElement),this.dragCtrl.enabled=!0,this.dragCtrl.addEventListener("drag",t=>{if(!!this.isActive){if(t.object._object,t.object._type.indexOf("cameraPath")>-1){let i=t.object._id;this.cameraPathPositions[i]=t.object.position.clone(),this.setCameraPath(!1)}if(t.object._type.indexOf("item")>-1){let i=t.object._id;this.items[i].position.copy(t.object.position.clone())}}}),this.dragCtrl.addEventListener("dragend",t=>{this.isActive}),this.dragCtrl.addEventListener("dragstart",t=>{if(!!this.isActive){if(e.Shift&&e.Meta&&this.isEditMode){if(t.object._type.indexOf("cameraPath")>-1){let i=t.object._id,n=i+1,s=this.cameraPathPositions;if(n<s.length){let l=new W().addVectors(s[i],s[n]).clone().divideScalar(2);s.splice(n,0,l)}else{let o=s[i].clone();o.z-=100,s.push(o)}}this.updateCameraPath(this.progress.crt),this.setCameraPath(!1),this.setDragItems()}if(e.Shift&&e.Alt&&this.isEditMode){if(t.object._pathLine){let i=Bf(t.object._pathLine.points),n=t.object._id;n>0&&n<i.length-1&&(i.splice(n,1),t.object._pathLine.updateLine(Vf(i)))}else if(t.object._type.indexOf("cameraPath")>-1){t.object._groupId;let i=t.object._id;t.object._id+1;let n=this.cameraPathPositions;i>0&&i<n.length-1&&(n=n.splice(i,1))}this.setDragItems()}}});let e={Shift:!1,Meta:!1,Alt:!1};window.addEventListener("keydown",t=>{!this.isActive||(t.key==="Shift"&&this.isEditMode&&(this.dragCtrl.activate(),this.dragCtrl.enabled=!0,Mi.enabled=!1),(t.key=="Shift"||t.key=="Meta"||t.key=="Alt")&&(e[t.key]=!0,e.Shift&&e.Meta&&this.isEditMode),t.key=="e"&&this.editModeToggle(!0),t.key=="Escape"&&this.editModeToggle(!1))}),window.addEventListener("keyup",t=>{if(!!this.isActive){this.dragCtrl.enabled=!1,this.dragCtrl.deactivate(),Mi.enabled=!0;for(let i in e)e[i]=!1}}),this.setDragItems()}editModeToggle(e){if(this.isEditMode=e,Mi.enabled=e,e){let t=this.camera.position.clone();t.z=Math.min(0,t.z),Mi.target.z=t.z-500,Mi.target.y=t.y-100,this.editCamera.position.copy(t),this.editCamera.position.y+=200,this.guideViewToggle(!0),Ua(this.scene,this.editCamera),Xs(!1),document.body.querySelector("main").style.setProperty("visibility","hidden")}else this.isEditMode=!1,Mi.enabled=!1,this.guideViewToggle(!1),Ua(this.scene,this.camera),document.body.querySelector("main").style.removeProperty("visibility"),Xs(!0)}guideViewToggle(e){this.showGuidePath=e,this.pointBoxGroup.children.forEach(t=>{t.visible=e}),this.sceneGroups.forEach(t=>{t.children.forEach((i,n)=>{n==0&&(i.visible=e)})}),this.cameraPathTube.visible=e}activeOperationMode(e=!0){e&&_y(this.editCamera,Cd),this.isActive=e}makeTubeGeometry(){let e=Vf(this.cameraPathPositions),t=wN(Et.operation.cameraPathCurve,Bf(e));this.cameraPathCurve=Bf(t.points);const i={tubularSegments:1e3,tubuRadius:30,radiusSegments:10,lookAhead:!1,stablization:500,offset:1,scale:1};return new yp(t.curve,i.tubularSegments,i.tubuRadius,i.radiusSegments,!1)}setCameraPath(e=!0){if(e){if(this.cameraPathPositions.length==0&&(this.cameraPathPositions.push(new W(0,0,Gn)),this.cameraPathPositions.push(new W(0,0,0))),Vf(this.cameraPathPositions),this.cameraPath,this.cameraPathCurve.length==0,!this.cameraPathTube){let t=new Rl({side:dn,color:Et.operation.color.cameraGuide,wireframe:!0,transparent:!0,opacity:.1});this.cameraPathTube=new Fi(this.makeTubeGeometry(),t),this.cameraPathTube.visible=this.showGuidePath,this.container.add(this.cameraPathTube)}}else this.cameraPath,this.cameraPathTube.geometry.dispose(),this.cameraPathTube.geometry=this.makeTubeGeometry()}setDragItems(){this.cameraPointBoxs.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.itemPointBoxs.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.dragObjects=[],this.pointBoxGroup.clear(),this.cameraPointBoxs=[],this.cameraPathPositions.forEach((e,t)=>{let i=G0(e,20,20,20,Et.operation.color.cameraGuide);i._id=t,i._type="cameraPath_"+t,i.visible=this.showGuidePath,this.cameraPointBoxs.push(i),this.pointBoxGroup.add(i)}),this.itemPointBoxs=[],this.items.forEach((e,t)=>{let i=50,n=G0(e.position,i,i,i,Et.operation.color.box);n._object=e,n._id=t,n._type="item_"+t,n.visible=this.showGuidePath,this.itemPointBoxs.push(n),this.pointBoxGroup.add(n)}),this.dragCtrl&&(this.dragObjects=this.cameraPointBoxs.concat(this.itemPointBoxs),this.dragCtrl.setObjects(this.dragObjects))}resize(){this.cameraPathPositions[0].z=Gn,this.camera.position.z=Gn,this.camera.aspect=Ve.aspect,this.camera.updateProjectionMatrix(),this.editCamera.position.z=Gn,this.editCamera.aspect=Ve.aspect,this.editCamera.updateProjectionMatrix(),this.setCameraPath(!1),this.updateCameraPath(this.progress.crt),this.setDragItems();let e=window.devicePixelRatio;this.renderTarget.setSize(Ve.width*e,Ve.height*e)}animation(){let e=this.camera.position.clone();e.z+=-Gn,this.camera.lookAt(e);let t=Ad._rx*this.mouseAcc,i=-Ad._ry*this.mouseAcc;this.lookAtTarget.x+=(t-this.lookAtTarget.x)*this.mouseSpeed,this.lookAtTarget.y+=(i-this.lookAtTarget.y)*this.mouseSpeed,this.updateCameraPath(this.progress.smooth)}captureScene(e){return e.clear(),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),e.setRenderTarget(null),this.renderTarget}updateMove(e){}}function EN(r,e={near:4e3,far:8e3}){return new gn({uniforms:{tDiffuse:{value:r},near:{value:e.near},far:{value:e.far},uTime:{value:0}},vertexShader:`
			varying vec2 vUv;
			varying vec4 vPosition;
			varying float vAlpha;

			uniform float near;
			uniform float far;
			void main() {
				vUv = uv;
				vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
				vec4 worldPosition = modelMatrix * vec4(position, 1.0);
				vec4 viewPosition = viewMatrix * worldPosition;
				// float distance = length(cameraPosition.z - viewPosition.z);
				float distance = length(viewPosition.xyz);

				// vAlpha = 1.0 - distanceFromCamera / far;
				// Calculate alpha value based on the distance
    			vAlpha = 1.0 - smoothstep(near, far, distance);

				gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);

			}
		`,fragmentShader:`
			varying vec2 vUv;
			varying vec4 vPosition;
			varying float vAlpha;

			uniform sampler2D tDiffuse;
			uniform float uTime;
			void main() {
				vec2 uv = vUv;
				float time = uTime * 10.;
				uv.y += cos(time + uv.y * uv.x * 200.) * 0.001;
				uv.y += sin(-uTime + uv.y * 100.) * 0.001;

				vec4 tColor = texture2D(tDiffuse, uv);

				if(tColor.a < 0.9) discard;
				gl_FragColor = tColor;
				gl_FragColor.a = vAlpha;

			}
		`,transparent:!0,side:po})}const xy={linear:r=>r,easeInOutSine:r=>-(Math.cos(Math.PI*r)-1)/2,easeInQuad:r=>r*r,easeOutQuad:r=>r*(2-r),easeInOutQuad:r=>r<.5?2*r*r:-1+(4-2*r)*r,easeInCubic:r=>r*r*r,easeOutCubic:r=>--r*r*r+1,easeInOutCubic:r=>r<.5?4*r*r*r:(r-1)*(2*r-2)*(2*r-2)+1,easeInQuart:r=>r*r*r*r,easeOutQuart:r=>1- --r*r*r*r,easeInOutQuart:r=>r<.5?8*r*r*r*r:1-8*--r*r*r*r,easeInQuint:r=>r*r*r*r*r,easeOutQuint:r=>1+--r*r*r*r*r,easeInOutQuint:r=>r<.5?16*r*r*r*r*r:1+16*--r*r*r*r*r,back:r=>r*r*(4*r-3)};class TN extends Ep{constructor(t=0){super(t);U(this,"name","Scene1");U(this,"id",0);U(this,"startProgress",0);U(this,"coverWidth",0);U(this,"paperCover");U(this,"cloudCnt",0);U(this,"endProgress",0);U(this,"lastCameraMoveOffset",new W(-4e3,500,-7e3));U(this,"animationMaterialList",[]);U(this,"lastSceneMaterialList",[]);U(this,"bg");this.sceneContainer=new oi,this.container.add(this.sceneContainer)}async setup(){let t=Et.scenes[this.id].textures;this.paperCover=jc(Et.maki.textures.paperPattern,new W,1,this.guiBase,this.sceneConfig.fog);let i=Et.scenes[this.id].items;this.scene.background=new Lt(Et.scenes[this.id].background),i.forEach((n,s)=>{let o;if(n.type=="cloud"?(o=Et.commonTextures[n.srcName],this.cloudCnt++):o=t[n.srcName],n.name!=""){let l={fitStage:!1};n.name=="skycloud"&&(l.material=EN(o),this.animationMaterialList.push(l.material)),n.name=="bg";let u=jc(o,new W,1,this.guiBase,l);u.position.x=n.position.x,u.position.y=n.position.y,u.position.z=n.position.z,n.name=="bg"?(this.bg=u,u.renderOrder=-1,u.material.depthTest=!1,u.scale.set(1,1,1)):u.scale.set(n.scale,n.scale,n.scale),this.sceneContainer.add(u),n.sceneName&&n.sceneName==="last"&&this.lastSceneMaterialList.push(u.material),n.fog&&(u.material.uniforms.near.value=n.fog.near,u.material.uniforms.far.value=n.fog.far),u._type="item",u._name=n.name,u._data=n,this.items.push(u)}}),this.fitPaperCover(),this.setOperationMode()}setGui(){super.setGui();let t,i=Et.scenes[this.id].items,n={cloudName:"c1"};this.guiBase.add(n,"cloudName",Et.cloudTypes),this.guiBase.add({makeCloud:()=>{this.cloudCnt++;let o="cloud_"+this.cloudCnt,l=Et.commonTextures[n.cloudName],u=this.camera.position.clone();u.z-=Gn;let h=jc(l,u,.5,this.guiBase);h._type="item",h._name=o,this.items.push(h),this.sceneContainer.add(h);let f=t.addFolder(o);f.add(h,"visible"),f.add({scale:h.scale.x},"scale",.01,10).onChange(m=>{h.scale.set(m,m,m)}),$n(f,h.position,{range:3e4,threshold:1}).onChange(()=>{this.setDragItems()}),f.close(),i.push({name:o,srcName:n.cloudName,type:"cloud",position:h.position.clone(),scale:h.scale.x,rotation:h.rotation.clone(),data:null})}},"makeCloud"),t=this.guiBase.addFolder("items").close(),i.forEach((o,l)=>{let u=this.items.find(h=>h._name===o.name);if(u){let h=t.addFolder(o.name);h.add(u,"visible"),h.add({scale:u.scale.x},"scale",.01,10).onChange(f=>{u.scale.set(f,f,f)}),$n(h,u.position,{range:3e4,threshold:1}).onChange(()=>{this.setDragItems()}),h.close()}});let s=this.sceneConfig.fog;this.guiBase.add(s,"near",-1e4,1e4,.01).onChange(o=>{this.items.forEach(l=>{l.material.uniforms.near.value=o})}),this.guiBase.add(s,"far",-1e4,1e4,.01).onChange(o=>{this.items.forEach(l=>{l.material.uniforms.far.value=o})})}screenStartMove(t=0){this.startProgress=t,this.container.position.x=this.coverWidth*t}fitPaperCover(){Et.scenes[this.id].textures.paper;let t=482/626,i=Ve.height*t*1.2,n=Ve.height;i=1080;let s=(Ve.width-i)*.5;this.coverWidth=i,this.paperCover.geometry.dispose(),this.paperCover.geometry=new Qs(i,n),this.paperCover.position.x=s}resize(){if(this.cameraPathPositions[1].z=Gn-300,this.cameraPathPositions[1].y=0,super.resize(),this.fitPaperCover(),ji.isPC){if(Ve.height<700){let t=Ve.height-700;t/=100,this.camera.fov=45+t*5}else this.camera.fov=45;this.camera.updateProjectionMatrix()}this.items.forEach((t,i)=>{let n=t._data;n.positionSp&&(Ve.width<768?t.position.copy(n.positionSp):t.position.copy(n.position))})}update(t,i=[]){super.update(t);let n=i[i.length-2];if(n>=0&&n<=1){let s=0,o=.7;n>o&&(s=n-o,s<0&&(s=0),s/=1-o),s>1&&(s=1),this.lastSceneMaterialList.forEach(l=>{let u=l.uniforms,h=1e4-u.near.value;u.far.value=u.near.value+h*s})}}updateLastScene(t){let i=xy.easeInOutQuint(t);i=t,this.endProgress=i}animation(){super.animation();let t=window.innerHeight<1080?130:240;this.bg.position.x=this.camera.position.x+-this.camera.position.x*.05,this.bg.position.y=this.camera.position.y+-this.camera.position.y*.08+t,this.bg.position.z=this.camera.position.z-Gn*2,this.animationMaterialList.forEach(n=>{n.uniforms.uTime.value+=.01});let i=this.endProgress;i*=i,this.camera.position.x+=this.lastCameraMoveOffset.x*i,this.camera.position.y+=this.lastCameraMoveOffset.y*i,this.camera.position.z+=this.lastCameraMoveOffset.z*i}}function Lr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function yy(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.11.5
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},Tp,Ci,Qt,Ln=1e8,Pt=1/Ln,Ld=Math.PI*2,AN=Ld/4,CN=0,by=Math.sqrt,PN=Math.cos,LN=Math.sin,pi=function(e){return typeof e=="string"},$t=function(e){return typeof e=="function"},Nr=function(e){return typeof e=="number"},Ap=function(e){return typeof e>"u"},fr=function(e){return typeof e=="object"},Zi=function(e){return e!==!1},Cp=function(){return typeof window<"u"},$c=function(e){return $t(e)||pi(e)},wy=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pi=Array.isArray,Rd=/(?:-?\.?\d|\.)+/gi,Sy=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ba=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Wf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,My=/[+-]=-?[.\d]+/,Ey=/[^,'"\[\]\s]+/gi,RN=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Bt,Cn,Dd,Pp,_n={},au={},Ty,Ay=function(e){return(au=Js(e,_n))&&Qi},Lp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ou=function(e,t){return!t&&console.warn(e)},Cy=function(e,t){return e&&(_n[e]=t)&&au&&(au[e]=t)||_n},_l=function(){return 0},DN={suppressEvents:!0,isStart:!0,kill:!1},Zc={suppressEvents:!0,kill:!1},ON={suppressEvents:!0},Rp={},ls=[],Od={},Py,un={},Hf={},X0=30,Kc=[],Dp="",Op=function(e){var t=e[0],i,n;if(fr(t)||$t(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(n=Kc.length;n--&&!Kc[n].targetTest(t););i=Kc[n]}for(n=e.length;n--;)e[n]&&(e[n]._gsap||(e[n]._gsap=new Qy(e[n],i)))||e.splice(n,1);return e},Ws=function(e){return e._gsap||Op(Rn(e))[0]._gsap},Ly=function(e,t,i){return(i=e[t])&&$t(i)?e[t]():Ap(i)&&e.getAttribute&&e.getAttribute(t)||i},Ki=function(e,t){return(e=e.split(",")).forEach(t)||e},jt=function(e){return Math.round(e*1e5)/1e5||0},xi=function(e){return Math.round(e*1e7)/1e7||0},Xa=function(e,t){var i=t.charAt(0),n=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+n:i==="-"?e-n:i==="*"?e*n:e/n},IN=function(e,t){for(var i=t.length,n=0;e.indexOf(t[n])<0&&++n<i;);return n<i},lu=function(){var e=ls.length,t=ls.slice(0),i,n;for(Od={},ls.length=0,i=0;i<e;i++)n=t[i],n&&n._lazy&&(n.render(n._lazy[0],n._lazy[1],!0)._lazy=0)},Ry=function(e,t,i,n){ls.length&&!Ci&&lu(),e.render(t,i,n||Ci&&t<0&&(e._initted||e._startAt)),ls.length&&!Ci&&lu()},Dy=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Ey).length<2?t:pi(e)?e.trim():e},Oy=function(e){return e},On=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},NN=function(e){return function(t,i){for(var n in i)n in t||n==="duration"&&e||n==="ease"||(t[n]=i[n])}},Js=function(e,t){for(var i in t)e[i]=t[i];return e},q0=function r(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=fr(t[i])?r(e[i]||(e[i]={}),t[i]):t[i]);return e},cu=function(e,t){var i={},n;for(n in e)n in t||(i[n]=e[n]);return i},ol=function(e){var t=e.parent||Bt,i=e.keyframes?NN(Pi(e.keyframes)):On;if(Zi(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},zN=function(e,t){for(var i=e.length,n=i===t.length;n&&i--&&e[i]===t[i];);return i<0},Iy=function(e,t,i,n,s){i===void 0&&(i="_first"),n===void 0&&(n="_last");var o=e[n],l;if(s)for(l=t[s];o&&o[s]>l;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[n]=t,t._prev=o,t.parent=t._dp=e,t},Iu=function(e,t,i,n){i===void 0&&(i="_first"),n===void 0&&(n="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[n]===t&&(e[n]=s),t._next=t._prev=t.parent=null},fs=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove(e),e._act=0},Hs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},FN=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Id=function(e,t,i,n){return e._startAt&&(Ci?e._startAt.revert(Zc):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,n))},kN=function r(e){return!e||e._ts&&r(e.parent)},Y0=function(e){return e._repeat?ro(e._tTime,e=e.duration()+e._rDelay)*e:0},ro=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},uu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Nu=function(e){return e._end=xi(e._start+(e._tDur/Math.abs(e._ts||e._rts||Pt)||0))},zu=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=xi(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Nu(e),i._dirty||Hs(i,e)),e},Ny=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=uu(e.rawTime(),t),(!t._dur||Dl(0,t.totalDuration(),i)-t._tTime>Pt)&&t.render(i,!0)),Hs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-Pt}},ar=function(e,t,i,n){return t.parent&&fs(t),t._start=xi((Nr(i)?i:i||e!==Bt?An(e,i,t):e._time)+t._delay),t._end=xi(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Iy(e,t,"_first","_last",e._sort?"_start":0),Nd(t)||(e._recent=t),n||Ny(e,t),e._ts<0&&zu(e,e._tTime),e},zy=function(e,t){return(_n.ScrollTrigger||Lp("scrollTrigger",t))&&_n.ScrollTrigger.create(t,e)},Fy=function(e,t,i,n,s){if(Np(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!Ci&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Py!==hn.frame)return ls.push(e),e._lazy=[s,n],1},UN=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Nd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},BN=function(e,t,i,n){var s=e.ratio,o=t<0||!t&&(!e._start&&UN(e)&&!(!e._initted&&Nd(e))||(e._ts<0||e._dp._ts<0)&&!Nd(e))?0:1,l=e._rDelay,u=0,h,f,m;if(l&&e._repeat&&(u=Dl(0,e._tDur,t),f=ro(u,l),e._yoyo&&f&1&&(o=1-o),f!==ro(e._tTime,l)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Ci||n||e._zTime===Pt||!t&&e._zTime){if(!e._initted&&Fy(e,t,n,i,u))return;for(m=e._zTime,e._zTime=t||(i?Pt:0),i||(i=t&&!m),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=u,h=e._pt;h;)h.r(o,h.d),h=h._next;t<0&&Id(e,t,i,!0),e._onUpdate&&!i&&Dn(e,"onUpdate"),u&&e._repeat&&!i&&e.parent&&Dn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&fs(e,1),!i&&!Ci&&(Dn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},VN=function(e,t,i){var n;if(i>t)for(n=e._first;n&&n._start<=i;){if(n.data==="isPause"&&n._start>t)return n;n=n._next}else for(n=e._last;n&&n._start>=i;){if(n.data==="isPause"&&n._start<t)return n;n=n._prev}},so=function(e,t,i,n){var s=e._repeat,o=xi(t)||0,l=e._tTime/e._tDur;return l&&!n&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:xi(o*(s+1)+e._rDelay*s):o,l>0&&!n&&zu(e,e._tTime=e._tDur*l),e.parent&&Nu(e),i||Hs(e.parent,e),e},j0=function(e){return e instanceof Yi?Hs(e):so(e,e._dur)},GN={_start:0,endTime:_l,totalDuration:_l},An=function r(e,t,i){var n=e.labels,s=e._recent||GN,o=e.duration()>=Ln?s.endTime(!1):e._dur,l,u,h;return pi(t)&&(isNaN(t)||t in n)?(u=t.charAt(0),h=t.substr(-1)==="%",l=t.indexOf("="),u==="<"||u===">"?(l>=0&&(t=t.replace(/=/,"")),(u==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(h?(l<0?s:i).totalDuration()/100:1)):l<0?(t in n||(n[t]=o),n[t]):(u=parseFloat(t.charAt(l-1)+t.substr(l+1)),h&&i&&(u=u/100*(Pi(i)?i[0]:i).totalDuration()),l>1?r(e,t.substr(0,l-1),i)+u:o+u)):t==null?o:+t},ll=function(e,t,i){var n=Nr(t[1]),s=(n?2:1)+(e<2?0:1),o=t[s],l,u;if(n&&(o.duration=t[1]),o.parent=i,e){for(l=o,u=i;u&&!("immediateRender"in l);)l=u.vars.defaults||{},u=Zi(u.vars.inherit)&&u.parent;o.immediateRender=Zi(l.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new ri(t[0],o,t[s+1])},ms=function(e,t){return e||e===0?t(e):t},Dl=function(e,t,i){return i<e?e:i>t?t:i},Ai=function(e,t){return!pi(e)||!(t=RN.exec(e))?"":t[1]},WN=function(e,t,i){return ms(i,function(n){return Dl(e,t,n)})},zd=[].slice,ky=function(e,t){return e&&fr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&fr(e[0]))&&!e.nodeType&&e!==Cn},HN=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(n){var s;return pi(n)&&!t||ky(n,1)?(s=i).push.apply(s,Rn(n)):i.push(n)})||i},Rn=function(e,t,i){return Qt&&!t&&Qt.selector?Qt.selector(e):pi(e)&&!i&&(Dd||!ao())?zd.call((t||Pp).querySelectorAll(e),0):Pi(e)?HN(e,i):ky(e)?zd.call(e,0):e?[e]:[]},Fd=function(e){return e=Rn(e)[0]||ou("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Rn(t,i.querySelectorAll?i:i===e?ou("Invalid scope")||Pp.createElement("div"):e)}},Uy=function(e){return e.sort(function(){return .5-Math.random()})},By=function(e){if($t(e))return e;var t=fr(e)?e:{each:e},i=$s(t.ease),n=t.from||0,s=parseFloat(t.base)||0,o={},l=n>0&&n<1,u=isNaN(n)||l,h=t.axis,f=n,m=n;return pi(n)?f=m={center:.5,edges:.5,end:1}[n]||0:!l&&u&&(f=n[0],m=n[1]),function(p,v,y){var g=(y||t).length,_=o[g],b,A,w,T,M,C,O,S,L;if(!_){if(L=t.grid==="auto"?0:(t.grid||[1,Ln])[1],!L){for(O=-Ln;O<(O=y[L++].getBoundingClientRect().left)&&L<g;);L--}for(_=o[g]=[],b=u?Math.min(L,g)*f-.5:n%L,A=L===Ln?0:u?g*m/L-.5:n/L|0,O=0,S=Ln,C=0;C<g;C++)w=C%L-b,T=A-(C/L|0),_[C]=M=h?Math.abs(h==="y"?T:w):by(w*w+T*T),M>O&&(O=M),M<S&&(S=M);n==="random"&&Uy(_),_.max=O-S,_.min=S,_.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(L>g?g-1:h?h==="y"?g/L:L:Math.max(L,g/L))||0)*(n==="edges"?-1:1),_.b=g<0?s-g:s,_.u=Ai(t.amount||t.each)||0,i=i&&g<0?Zy(i):i}return g=(_[p]-_.min)/_.max||0,xi(_.b+(i?i(g):g)*_.v)+_.u}},kd=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var n=xi(Math.round(parseFloat(i)/e)*e*t);return(n-n%1)/t+(Nr(i)?0:Ai(i))}},Vy=function(e,t){var i=Pi(e),n,s;return!i&&fr(e)&&(n=i=e.radius||Ln,e.values?(e=Rn(e.values),(s=!Nr(e[0]))&&(n*=n)):e=kd(e.increment)),ms(t,i?$t(e)?function(o){return s=e(o),Math.abs(s-o)<=n?s:o}:function(o){for(var l=parseFloat(s?o.x:o),u=parseFloat(s?o.y:0),h=Ln,f=0,m=e.length,p,v;m--;)s?(p=e[m].x-l,v=e[m].y-u,p=p*p+v*v):p=Math.abs(e[m]-l),p<h&&(h=p,f=m);return f=!n||h<=n?e[f]:o,s||f===o||Nr(o)?f:f+Ai(o)}:kd(e))},Gy=function(e,t,i,n){return ms(Pi(e)?!t:i===!0?!!(i=0):!n,function(){return Pi(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(n=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*n)/n})},$N=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(n){return t.reduce(function(s,o){return o(s)},n)}},XN=function(e,t){return function(i){return e(parseFloat(i))+(t||Ai(i))}},qN=function(e,t,i){return Hy(e,t,0,1,i)},Wy=function(e,t,i){return ms(i,function(n){return e[~~t(n)]})},YN=function r(e,t,i){var n=t-e;return Pi(e)?Wy(e,r(0,e.length),t):ms(i,function(s){return(n+(s-e)%n)%n+e})},jN=function r(e,t,i){var n=t-e,s=n*2;return Pi(e)?Wy(e,r(0,e.length-1),t):ms(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>n?s-o:o)})},vl=function(e){for(var t=0,i="",n,s,o,l;~(n=e.indexOf("random(",t));)o=e.indexOf(")",n),l=e.charAt(n+7)==="[",s=e.substr(n+7,o-n-7).match(l?Ey:Rd),i+=e.substr(t,n-t)+Gy(l?s:+s[0],l?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},Hy=function(e,t,i,n,s){var o=t-e,l=n-i;return ms(s,function(u){return i+((u-e)/o*l||0)})},ZN=function r(e,t,i,n){var s=isNaN(e+t)?0:function(v){return(1-v)*e+v*t};if(!s){var o=pi(e),l={},u,h,f,m,p;if(i===!0&&(n=1)&&(i=null),o)e={p:e},t={p:t};else if(Pi(e)&&!Pi(t)){for(f=[],m=e.length,p=m-2,h=1;h<m;h++)f.push(r(e[h-1],e[h]));m--,s=function(y){y*=m;var g=Math.min(p,~~y);return f[g](y-g)},i=t}else n||(e=Js(Pi(e)?[]:{},e));if(!f){for(u in t)Ip.call(l,e,u,"get",t[u]);s=function(y){return kp(y,l)||(o?e.p:e)}}}return ms(i,s)},Z0=function(e,t,i){var n=e.labels,s=Ln,o,l,u;for(o in n)l=n[o]-t,l<0==!!i&&l&&s>(l=Math.abs(l))&&(u=o,s=l);return u},Dn=function(e,t,i){var n=e.vars,s=n[t],o=Qt,l=e._ctx,u,h,f;if(!!s)return u=n[t+"Params"],h=n.callbackScope||e,i&&ls.length&&lu(),l&&(Qt=l),f=u?s.apply(h,u):s.call(h),Qt=o,f},el=function(e){return fs(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Ci),e.progress()<1&&Dn(e,"onInterrupt"),e},Va,$y=[],Xy=function(e){if(!Cp()){$y.push(e);return}e=!e.name&&e.default||e;var t=e.name,i=$t(e),n=t&&!i&&e.init?function(){this._props=[]}:e,s={init:_l,render:kp,add:Ip,kill:fz,modifier:hz,rawVars:0},o={targetTest:0,get:0,getSetter:Fp,aliases:{},register:0};if(ao(),e!==n){if(un[t])return;On(n,On(cu(e,s),o)),Js(n.prototype,Js(s,cu(e,o))),un[n.prop=t]=n,e.targetTest&&(Kc.push(n),Rp[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Cy(t,n),e.register&&e.register(Qi,n,Ji)},Ct=255,tl={aqua:[0,Ct,Ct],lime:[0,Ct,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Ct],navy:[0,0,128],white:[Ct,Ct,Ct],olive:[128,128,0],yellow:[Ct,Ct,0],orange:[Ct,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Ct,0,0],pink:[Ct,192,203],cyan:[0,Ct,Ct],transparent:[Ct,Ct,Ct,0]},$f=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Ct+.5|0},qy=function(e,t,i){var n=e?Nr(e)?[e>>16,e>>8&Ct,e&Ct]:0:tl.black,s,o,l,u,h,f,m,p,v,y;if(!n){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),tl[e])n=tl[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),l=e.charAt(3),e="#"+s+s+o+o+l+l+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return n=parseInt(e.substr(1,6),16),[n>>16,n>>8&Ct,n&Ct,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),n=[e>>16,e>>8&Ct,e&Ct]}else if(e.substr(0,3)==="hsl"){if(n=y=e.match(Rd),!t)u=+n[0]%360/360,h=+n[1]/100,f=+n[2]/100,o=f<=.5?f*(h+1):f+h-f*h,s=f*2-o,n.length>3&&(n[3]*=1),n[0]=$f(u+1/3,s,o),n[1]=$f(u,s,o),n[2]=$f(u-1/3,s,o);else if(~e.indexOf("="))return n=e.match(Sy),i&&n.length<4&&(n[3]=1),n}else n=e.match(Rd)||tl.transparent;n=n.map(Number)}return t&&!y&&(s=n[0]/Ct,o=n[1]/Ct,l=n[2]/Ct,m=Math.max(s,o,l),p=Math.min(s,o,l),f=(m+p)/2,m===p?u=h=0:(v=m-p,h=f>.5?v/(2-m-p):v/(m+p),u=m===s?(o-l)/v+(o<l?6:0):m===o?(l-s)/v+2:(s-o)/v+4,u*=60),n[0]=~~(u+.5),n[1]=~~(h*100+.5),n[2]=~~(f*100+.5)),i&&n.length<4&&(n[3]=1),n},Yy=function(e){var t=[],i=[],n=-1;return e.split(cs).forEach(function(s){var o=s.match(Ba)||[];t.push.apply(t,o),i.push(n+=o.length+1)}),t.c=i,t},K0=function(e,t,i){var n="",s=(e+n).match(cs),o=t?"hsla(":"rgba(",l=0,u,h,f,m;if(!s)return e;if(s=s.map(function(p){return(p=qy(p,t,1))&&o+(t?p[0]+","+p[1]+"%,"+p[2]+"%,"+p[3]:p.join(","))+")"}),i&&(f=Yy(e),u=i.c,u.join(n)!==f.c.join(n)))for(h=e.replace(cs,"1").split(Ba),m=h.length-1;l<m;l++)n+=h[l]+(~u.indexOf(l)?s.shift()||o+"0,0,0,0)":(f.length?f:s.length?s:i).shift());if(!h)for(h=e.split(cs),m=h.length-1;l<m;l++)n+=h[l]+s[l];return n+h[m]},cs=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in tl)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),KN=/hsl[a]?\(/,jy=function(e){var t=e.join(" "),i;if(cs.lastIndex=0,cs.test(t))return i=KN.test(t),e[1]=K0(e[1],i),e[0]=K0(e[0],i,Yy(e[1])),!0},xl,hn=function(){var r=Date.now,e=500,t=33,i=r(),n=i,s=1e3/240,o=s,l=[],u,h,f,m,p,v,y=function g(_){var b=r()-n,A=_===!0,w,T,M,C;if(b>e&&(i+=b-t),n+=b,M=n-i,w=M-o,(w>0||A)&&(C=++m.frame,p=M-m.time*1e3,m.time=M=M/1e3,o+=w+(w>=s?4:s-w),T=1),A||(u=h(g)),T)for(v=0;v<l.length;v++)l[v](M,p,C,_)};return m={time:0,frame:0,tick:function(){y(!0)},deltaRatio:function(_){return p/(1e3/(_||60))},wake:function(){Ty&&(!Dd&&Cp()&&(Cn=Dd=window,Pp=Cn.document||{},_n.gsap=Qi,(Cn.gsapVersions||(Cn.gsapVersions=[])).push(Qi.version),Ay(au||Cn.GreenSockGlobals||!Cn.gsap&&Cn||{}),f=Cn.requestAnimationFrame,$y.forEach(Xy)),u&&m.sleep(),h=f||function(_){return setTimeout(_,o-m.time*1e3+1|0)},xl=1,y(2))},sleep:function(){(f?Cn.cancelAnimationFrame:clearTimeout)(u),xl=0,h=_l},lagSmoothing:function(_,b){e=_||1/0,t=Math.min(b||33,e)},fps:function(_){s=1e3/(_||240),o=m.time*1e3+s},add:function(_,b,A){var w=b?function(T,M,C,O){_(T,M,C,O),m.remove(w)}:_;return m.remove(_),l[A?"unshift":"push"](w),ao(),w},remove:function(_,b){~(b=l.indexOf(_))&&l.splice(b,1)&&v>=b&&v--},_listeners:l},m}(),ao=function(){return!xl&&hn.wake()},pt={},JN=/^[\d.\-M][\d.\-,\s]/,QN=/["']/g,ez=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),n=i[0],s=1,o=i.length,l,u,h;s<o;s++)u=i[s],l=s!==o-1?u.lastIndexOf(","):u.length,h=u.substr(0,l),t[n]=isNaN(h)?h.replace(QN,"").trim():+h,n=u.substr(l+1).trim();return t},tz=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),n=e.indexOf("(",t);return e.substring(t,~n&&n<i?e.indexOf(")",i+1):i)},iz=function(e){var t=(e+"").split("("),i=pt[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[ez(t[1])]:tz(e).split(",").map(Dy)):pt._CE&&JN.test(e)?pt._CE("",e):i},Zy=function(e){return function(t){return 1-e(1-t)}},Ky=function r(e,t){for(var i=e._first,n;i;)i instanceof Yi?r(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?r(i.timeline,t):(n=i._ease,i._ease=i._yEase,i._yEase=n,i._yoyo=t)),i=i._next},$s=function(e,t){return e&&($t(e)?e:pt[e]||iz(e))||t},ea=function(e,t,i,n){i===void 0&&(i=function(u){return 1-t(1-u)}),n===void 0&&(n=function(u){return u<.5?t(u*2)/2:1-t((1-u)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:n},o;return Ki(e,function(l){pt[l]=_n[l]=s,pt[o=l.toLowerCase()]=i;for(var u in s)pt[o+(u==="easeIn"?".in":u==="easeOut"?".out":".inOut")]=pt[l+"."+u]=s[u]}),s},Jy=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Xf=function r(e,t,i){var n=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Ld*(Math.asin(1/n)||0),l=function(f){return f===1?1:n*Math.pow(2,-10*f)*LN((f-o)*s)+1},u=e==="out"?l:e==="in"?function(h){return 1-l(1-h)}:Jy(l);return s=Ld/s,u.config=function(h,f){return r(e,h,f)},u},qf=function r(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},n=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:Jy(i);return n.config=function(s){return r(e,s)},n};Ki("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ea(r+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});pt.Linear.easeNone=pt.none=pt.Linear.easeIn;ea("Elastic",Xf("in"),Xf("out"),Xf());(function(r,e){var t=1/e,i=2*t,n=2.5*t,s=function(l){return l<t?r*l*l:l<i?r*Math.pow(l-1.5/e,2)+.75:l<n?r*(l-=2.25/e)*l+.9375:r*Math.pow(l-2.625/e,2)+.984375};ea("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ea("Expo",function(r){return r?Math.pow(2,10*(r-1)):0});ea("Circ",function(r){return-(by(1-r*r)-1)});ea("Sine",function(r){return r===1?1:-PN(r*AN)+1});ea("Back",qf("in"),qf("out"),qf());pt.SteppedEase=pt.steps=_n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,n=e+(t?0:1),s=t?1:0,o=1-Pt;return function(l){return((n*Dl(0,o,l)|0)+s)*i}}};no.ease=pt["quad.out"];Ki("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Dp+=r+","+r+"Params,"});var Qy=function(e,t){this.id=CN++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Ly,this.set=t?t.getSetter:Fp},oo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,so(this,+t.duration,1,1),this.data=t.data,Qt&&(this._ctx=Qt,Qt.data.push(this)),xl||hn.wake()}var e=r.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,so(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,n){if(ao(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zu(this,i),!s._dp||s.parent||Ny(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&ar(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!n||this._initted&&Math.abs(this._zTime)===Pt||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Ry(this,i,n)),this},e.time=function(i,n){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Y0(this))%(this._dur+this._rDelay)||(i?this._dur:0),n):this._time},e.totalProgress=function(i,n){return arguments.length?this.totalTime(this.totalDuration()*i,n):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,n){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Y0(this),n):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,n){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,n):this._repeat?ro(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-Pt?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?uu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-Pt?0:this._rts,this.totalTime(Dl(-Math.abs(this._delay),this._tDur,n),!0),Nu(this),FN(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ao(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Pt&&(this._tTime-=Pt)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var n=this.parent||this._dp;return n&&(n._sort||!this.parent)&&ar(n,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(Zi(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var n=this.parent||this._dp;return n?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?uu(n.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=ON);var n=Ci;return Ci=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),Ci=n,this},e.globalTime=function(i){for(var n=this,s=arguments.length?i:n.rawTime();n;)s=n._start+s/(n._ts||1),n=n._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,j0(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var n=this._time;return this._rDelay=i,j0(this),n?this.time(n):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,n){return this.totalTime(An(this,i),Zi(n))},e.restart=function(i,n){return this.play().totalTime(i?-this._delay:0,Zi(n))},e.play=function(i,n){return i!=null&&this.seek(i,n),this.reversed(!1).paused(!1)},e.reverse=function(i,n){return i!=null&&this.seek(i||this.totalDuration(),n),this.reversed(!0).paused(!1)},e.pause=function(i,n){return i!=null&&this.seek(i,n),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-Pt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Pt,this},e.isActive=function(){var i=this.parent||this._dp,n=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=n&&s<this.endTime(!0)-Pt)},e.eventCallback=function(i,n,s){var o=this.vars;return arguments.length>1?(n?(o[i]=n,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=n)):delete o[i],this):o[i]},e.then=function(i){var n=this;return new Promise(function(s){var o=$t(i)?i:Oy,l=function(){var h=n.then;n.then=null,$t(o)&&(o=o(n))&&(o.then||o===n)&&(n.then=h),s(o),n.then=h};n._initted&&n.totalProgress()===1&&n._ts>=0||!n._tTime&&n._ts<0?l():n._prom=l})},e.kill=function(){el(this)},r}();On(oo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Pt,_prom:0,_ps:!1,_rts:1});var Yi=function(r){yy(e,r);function e(i,n){var s;return i===void 0&&(i={}),s=r.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=Zi(i.sortChildren),Bt&&ar(i.parent||Bt,Lr(s),n),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&zy(Lr(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(n,s,o){return ll(0,arguments,this),this},t.from=function(n,s,o){return ll(1,arguments,this),this},t.fromTo=function(n,s,o,l){return ll(2,arguments,this),this},t.set=function(n,s,o){return s.duration=0,s.parent=this,ol(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new ri(n,s,An(this,o),1),this},t.call=function(n,s,o){return ar(this,ri.delayedCall(0,n,s),o)},t.staggerTo=function(n,s,o,l,u,h,f){return o.duration=s,o.stagger=o.stagger||l,o.onComplete=h,o.onCompleteParams=f,o.parent=this,new ri(n,o,An(this,u)),this},t.staggerFrom=function(n,s,o,l,u,h,f){return o.runBackwards=1,ol(o).immediateRender=Zi(o.immediateRender),this.staggerTo(n,s,o,l,u,h,f)},t.staggerFromTo=function(n,s,o,l,u,h,f,m){return l.startAt=o,ol(l).immediateRender=Zi(l.immediateRender),this.staggerTo(n,s,l,u,h,f,m)},t.render=function(n,s,o){var l=this._time,u=this._dirty?this.totalDuration():this._tDur,h=this._dur,f=n<=0?0:xi(n),m=this._zTime<0!=n<0&&(this._initted||!h),p,v,y,g,_,b,A,w,T,M,C,O;if(this!==Bt&&f>u&&n>=0&&(f=u),f!==this._tTime||o||m){if(l!==this._time&&h&&(f+=this._time-l,n+=this._time-l),p=f,T=this._start,w=this._ts,b=!w,m&&(h||(l=this._zTime),(n||!s)&&(this._zTime=n)),this._repeat){if(C=this._yoyo,_=h+this._rDelay,this._repeat<-1&&n<0)return this.totalTime(_*100+n,s,o);if(p=xi(f%_),f===u?(g=this._repeat,p=h):(g=~~(f/_),g&&g===f/_&&(p=h,g--),p>h&&(p=h)),M=ro(this._tTime,_),!l&&this._tTime&&M!==g&&this._tTime-M*_-this._dur<=0&&(M=g),C&&g&1&&(p=h-p,O=1),g!==M&&!this._lock){var S=C&&M&1,L=S===(C&&g&1);if(g<M&&(S=!S),l=S?0:h,this._lock=1,this.render(l||(O?0:xi(g*_)),s,!h)._lock=0,this._tTime=f,!s&&this.parent&&Dn(this,"onRepeat"),this.vars.repeatRefresh&&!O&&(this.invalidate()._lock=1),l&&l!==this._time||b!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(h=this._dur,u=this._tDur,L&&(this._lock=2,l=S?h:-1e-4,this.render(l,!0),this.vars.repeatRefresh&&!O&&this.invalidate()),this._lock=0,!this._ts&&!b)return this;Ky(this,O)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(A=VN(this,xi(l),xi(p)),A&&(f-=p-(p=A._start))),this._tTime=f,this._time=p,this._act=!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=n,l=0),!l&&p&&!s&&!g&&(Dn(this,"onStart"),this._tTime!==f))return this;if(p>=l&&n>=0)for(v=this._first;v;){if(y=v._next,(v._act||p>=v._start)&&v._ts&&A!==v){if(v.parent!==this)return this.render(n,s,o);if(v.render(v._ts>0?(p-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(p-v._start)*v._ts,s,o),p!==this._time||!this._ts&&!b){A=0,y&&(f+=this._zTime=-Pt);break}}v=y}else{v=this._last;for(var k=n<0?n:p;v;){if(y=v._prev,(v._act||k<=v._end)&&v._ts&&A!==v){if(v.parent!==this)return this.render(n,s,o);if(v.render(v._ts>0?(k-v._start)*v._ts:(v._dirty?v.totalDuration():v._tDur)+(k-v._start)*v._ts,s,o||Ci&&(v._initted||v._startAt)),p!==this._time||!this._ts&&!b){A=0,y&&(f+=this._zTime=k?-Pt:Pt);break}}v=y}}if(A&&!s&&(this.pause(),A.render(p>=l?0:-Pt)._zTime=p>=l?1:-1,this._ts))return this._start=T,Nu(this),this.render(n,s,o);this._onUpdate&&!s&&Dn(this,"onUpdate",!0),(f===u&&this._tTime>=this.totalDuration()||!f&&l)&&(T===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((n||!h)&&(f===u&&this._ts>0||!f&&this._ts<0)&&fs(this,1),!s&&!(n<0&&!l)&&(f||l||!u)&&(Dn(this,f===u&&n>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<u&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(n,s){var o=this;if(Nr(s)||(s=An(this,s,n)),!(n instanceof oo)){if(Pi(n))return n.forEach(function(l){return o.add(l,s)}),this;if(pi(n))return this.addLabel(n,s);if($t(n))n=ri.delayedCall(0,n);else return this}return this!==n?ar(this,n,s):this},t.getChildren=function(n,s,o,l){n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),l===void 0&&(l=-Ln);for(var u=[],h=this._first;h;)h._start>=l&&(h instanceof ri?s&&u.push(h):(o&&u.push(h),n&&u.push.apply(u,h.getChildren(!0,s,o)))),h=h._next;return u},t.getById=function(n){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===n)return s[o]},t.remove=function(n){return pi(n)?this.removeLabel(n):$t(n)?this.killTweensOf(n):(Iu(this,n),n===this._recent&&(this._recent=this._last),Hs(this))},t.totalTime=function(n,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xi(hn.time-(this._ts>0?n/this._ts:(this.totalDuration()-n)/-this._ts))),r.prototype.totalTime.call(this,n,s),this._forcing=0,this):this._tTime},t.addLabel=function(n,s){return this.labels[n]=An(this,s),this},t.removeLabel=function(n){return delete this.labels[n],this},t.addPause=function(n,s,o){var l=ri.delayedCall(0,s||_l,o);return l.data="isPause",this._hasPause=1,ar(this,l,An(this,n))},t.removePause=function(n){var s=this._first;for(n=An(this,n);s;)s._start===n&&s.data==="isPause"&&fs(s),s=s._next},t.killTweensOf=function(n,s,o){for(var l=this.getTweensOf(n,o),u=l.length;u--;)rs!==l[u]&&l[u].kill(n,s);return this},t.getTweensOf=function(n,s){for(var o=[],l=Rn(n),u=this._first,h=Nr(s),f;u;)u instanceof ri?IN(u._targets,l)&&(h?(!rs||u._initted&&u._ts)&&u.globalTime(0)<=s&&u.globalTime(u.totalDuration())>s:!s||u.isActive())&&o.push(u):(f=u.getTweensOf(l,s)).length&&o.push.apply(o,f),u=u._next;return o},t.tweenTo=function(n,s){s=s||{};var o=this,l=An(o,n),u=s,h=u.startAt,f=u.onStart,m=u.onStartParams,p=u.immediateRender,v,y=ri.to(o,On({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:l,overwrite:"auto",duration:s.duration||Math.abs((l-(h&&"time"in h?h.time:o._time))/o.timeScale())||Pt,onStart:function(){if(o.pause(),!v){var _=s.duration||Math.abs((l-(h&&"time"in h?h.time:o._time))/o.timeScale());y._dur!==_&&so(y,_,0,1).render(y._time,!0,!0),v=1}f&&f.apply(y,m||[])}},s));return p?y.render(0):y},t.tweenFromTo=function(n,s,o){return this.tweenTo(s,On({startAt:{time:An(this,n)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(n){return n===void 0&&(n=this._time),Z0(this,An(this,n))},t.previousLabel=function(n){return n===void 0&&(n=this._time),Z0(this,An(this,n),1)},t.currentLabel=function(n){return arguments.length?this.seek(n,!0):this.previousLabel(this._time+Pt)},t.shiftChildren=function(n,s,o){o===void 0&&(o=0);for(var l=this._first,u=this.labels,h;l;)l._start>=o&&(l._start+=n,l._end+=n),l=l._next;if(s)for(h in u)u[h]>=o&&(u[h]+=n);return Hs(this)},t.invalidate=function(n){var s=this._first;for(this._lock=0;s;)s.invalidate(n),s=s._next;return r.prototype.invalidate.call(this,n)},t.clear=function(n){n===void 0&&(n=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),n&&(this.labels={}),Hs(this)},t.totalDuration=function(n){var s=0,o=this,l=o._last,u=Ln,h,f,m;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-n:n));if(o._dirty){for(m=o.parent;l;)h=l._prev,l._dirty&&l.totalDuration(),f=l._start,f>u&&o._sort&&l._ts&&!o._lock?(o._lock=1,ar(o,l,f-l._delay,1)._lock=0):u=f,f<0&&l._ts&&(s-=f,(!m&&!o._dp||m&&m.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),u=0),l._end>s&&l._ts&&(s=l._end),l=h;so(o,o===Bt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(n){if(Bt._ts&&(Ry(Bt,uu(n,Bt)),Py=hn.frame),hn.frame>=X0){X0+=pn.autoSleep||120;var s=Bt._first;if((!s||!s._ts)&&pn.autoSleep&&hn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||hn.sleep()}}},e}(oo);On(Yi.prototype,{_lock:0,_hasPause:0,_forcing:0});var nz=function(e,t,i,n,s,o,l){var u=new Ji(this._pt,e,t,0,1,sb,null,s),h=0,f=0,m,p,v,y,g,_,b,A;for(u.b=i,u.e=n,i+="",n+="",(b=~n.indexOf("random("))&&(n=vl(n)),o&&(A=[i,n],o(A,e,t),i=A[0],n=A[1]),p=i.match(Wf)||[];m=Wf.exec(n);)y=m[0],g=n.substring(h,m.index),v?v=(v+1)%5:g.substr(-5)==="rgba("&&(v=1),y!==p[f++]&&(_=parseFloat(p[f-1])||0,u._pt={_next:u._pt,p:g||f===1?g:",",s:_,c:y.charAt(1)==="="?Xa(_,y)-_:parseFloat(y)-_,m:v&&v<4?Math.round:0},h=Wf.lastIndex);return u.c=h<n.length?n.substring(h,n.length):"",u.fp=l,(My.test(n)||b)&&(u.e=0),this._pt=u,u},Ip=function(e,t,i,n,s,o,l,u,h,f){$t(n)&&(n=n(s||0,e,o));var m=e[t],p=i!=="get"?i:$t(m)?h?e[t.indexOf("set")||!$t(e["get"+t.substr(3)])?t:"get"+t.substr(3)](h):e[t]():m,v=$t(m)?h?lz:nb:zp,y;if(pi(n)&&(~n.indexOf("random(")&&(n=vl(n)),n.charAt(1)==="="&&(y=Xa(p,n)+(Ai(p)||0),(y||y===0)&&(n=y))),!f||p!==n||Ud)return!isNaN(p*n)&&n!==""?(y=new Ji(this._pt,e,t,+p||0,n-(p||0),typeof m=="boolean"?uz:rb,0,v),h&&(y.fp=h),l&&y.modifier(l,this,e),this._pt=y):(!m&&!(t in e)&&Lp(t,n),nz.call(this,e,t,p,n,v,u||pn.stringFilter,h))},rz=function(e,t,i,n,s){if($t(e)&&(e=cl(e,s,t,i,n)),!fr(e)||e.style&&e.nodeType||Pi(e)||wy(e))return pi(e)?cl(e,s,t,i,n):e;var o={},l;for(l in e)o[l]=cl(e[l],s,t,i,n);return o},eb=function(e,t,i,n,s,o){var l,u,h,f;if(un[e]&&(l=new un[e]).init(s,l.rawVars?t[e]:rz(t[e],n,s,o,i),i,n,o)!==!1&&(i._pt=u=new Ji(i._pt,s,e,0,1,l.render,l,0,l.priority),i!==Va))for(h=i._ptLookup[i._targets.indexOf(s)],f=l._props.length;f--;)h[l._props[f]]=u;return l},rs,Ud,Np=function r(e,t,i){var n=e.vars,s=n.ease,o=n.startAt,l=n.immediateRender,u=n.lazy,h=n.onUpdate,f=n.onUpdateParams,m=n.callbackScope,p=n.runBackwards,v=n.yoyoEase,y=n.keyframes,g=n.autoRevert,_=e._dur,b=e._startAt,A=e._targets,w=e.parent,T=w&&w.data==="nested"?w.vars.targets:A,M=e._overwrite==="auto"&&!Tp,C=e.timeline,O,S,L,k,Y,re,G,V,K,se,ae,te,Se;if(C&&(!y||!s)&&(s="none"),e._ease=$s(s,no.ease),e._yEase=v?Zy($s(v===!0?s:v,no.ease)):0,v&&e._yoyo&&!e._repeat&&(v=e._yEase,e._yEase=e._ease,e._ease=v),e._from=!C&&!!n.runBackwards,!C||y&&!n.stagger){if(V=A[0]?Ws(A[0]).harness:0,te=V&&n[V.prop],O=cu(n,Rp),b&&(b._zTime<0&&b.progress(1),t<0&&p&&l&&!g?b.render(-1,!0):b.revert(p&&_?Zc:DN),b._lazy=0),o){if(fs(e._startAt=ri.set(A,On({data:"isStart",overwrite:!1,parent:w,immediateRender:!0,lazy:!b&&Zi(u),startAt:null,delay:0,onUpdate:h,onUpdateParams:f,callbackScope:m,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ci||!l&&!g)&&e._startAt.revert(Zc),l&&_&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(p&&_&&!b){if(t&&(l=!1),L=On({overwrite:!1,data:"isFromStart",lazy:l&&!b&&Zi(u),immediateRender:l,stagger:0,parent:w},O),te&&(L[V.prop]=te),fs(e._startAt=ri.set(A,L)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Ci?e._startAt.revert(Zc):e._startAt.render(-1,!0)),e._zTime=t,!l)r(e._startAt,Pt,Pt);else if(!t)return}for(e._pt=e._ptCache=0,u=_&&Zi(u)||u&&!_,S=0;S<A.length;S++){if(Y=A[S],G=Y._gsap||Op(A)[S]._gsap,e._ptLookup[S]=se={},Od[G.id]&&ls.length&&lu(),ae=T===A?S:T.indexOf(Y),V&&(K=new V).init(Y,te||O,e,ae,T)!==!1&&(e._pt=k=new Ji(e._pt,Y,K.name,0,1,K.render,K,0,K.priority),K._props.forEach(function(xe){se[xe]=k}),K.priority&&(re=1)),!V||te)for(L in O)un[L]&&(K=eb(L,O,e,ae,Y,T))?K.priority&&(re=1):se[L]=k=Ip.call(e,Y,L,"get",O[L],ae,T,0,n.stringFilter);e._op&&e._op[S]&&e.kill(Y,e._op[S]),M&&e._pt&&(rs=e,Bt.killTweensOf(Y,se,e.globalTime(t)),Se=!e.parent,rs=0),e._pt&&u&&(Od[G.id]=1)}re&&ab(e),e._onInit&&e._onInit(e)}e._onUpdate=h,e._initted=(!e._op||e._pt)&&!Se,y&&t<=0&&C.render(Ln,!0,!0)},sz=function(e,t,i,n,s,o,l){var u=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,f,m,p;if(!u)for(u=e._ptCache[t]=[],m=e._ptLookup,p=e._targets.length;p--;){if(h=m[p][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Ud=1,e.vars[t]="+=0",Np(e,l),Ud=0,1;u.push(h)}for(p=u.length;p--;)f=u[p],h=f._pt||f,h.s=(n||n===0)&&!s?n:h.s+(n||0)+o*h.c,h.c=i-h.s,f.e&&(f.e=jt(i)+Ai(f.e)),f.b&&(f.b=h.s+Ai(f.b))},az=function(e,t){var i=e[0]?Ws(e[0]).harness:0,n=i&&i.aliases,s,o,l,u;if(!n)return t;s=Js({},t);for(o in n)if(o in s)for(u=n[o].split(","),l=u.length;l--;)s[u[l]]=s[o];return s},oz=function(e,t,i,n){var s=t.ease||n||"power1.inOut",o,l;if(Pi(t))l=i[e]||(i[e]=[]),t.forEach(function(u,h){return l.push({t:h/(t.length-1)*100,v:u,e:s})});else for(o in t)l=i[o]||(i[o]=[]),o==="ease"||l.push({t:parseFloat(e),v:t[o],e:s})},cl=function(e,t,i,n,s){return $t(e)?e.call(t,i,n,s):pi(e)&&~e.indexOf("random(")?vl(e):e},tb=Dp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",ib={};Ki(tb+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return ib[r]=1});var ri=function(r){yy(e,r);function e(i,n,s,o){var l;typeof n=="number"&&(s.duration=n,n=s,s=null),l=r.call(this,o?n:ol(n))||this;var u=l.vars,h=u.duration,f=u.delay,m=u.immediateRender,p=u.stagger,v=u.overwrite,y=u.keyframes,g=u.defaults,_=u.scrollTrigger,b=u.yoyoEase,A=n.parent||Bt,w=(Pi(i)||wy(i)?Nr(i[0]):"length"in n)?[i]:Rn(i),T,M,C,O,S,L,k,Y;if(l._targets=w.length?Op(w):ou("GSAP target "+i+" not found. https://greensock.com",!pn.nullTargetWarn)||[],l._ptLookup=[],l._overwrite=v,y||p||$c(h)||$c(f)){if(n=l.vars,T=l.timeline=new Yi({data:"nested",defaults:g||{},targets:A&&A.data==="nested"?A.vars.targets:w}),T.kill(),T.parent=T._dp=Lr(l),T._start=0,p||$c(h)||$c(f)){if(O=w.length,k=p&&By(p),fr(p))for(S in p)~tb.indexOf(S)&&(Y||(Y={}),Y[S]=p[S]);for(M=0;M<O;M++)C=cu(n,ib),C.stagger=0,b&&(C.yoyoEase=b),Y&&Js(C,Y),L=w[M],C.duration=+cl(h,Lr(l),M,L,w),C.delay=(+cl(f,Lr(l),M,L,w)||0)-l._delay,!p&&O===1&&C.delay&&(l._delay=f=C.delay,l._start+=f,C.delay=0),T.to(L,C,k?k(M,L,w):0),T._ease=pt.none;T.duration()?h=f=0:l.timeline=0}else if(y){ol(On(T.vars.defaults,{ease:"none"})),T._ease=$s(y.ease||n.ease||"none");var re=0,G,V,K;if(Pi(y))y.forEach(function(se){return T.to(w,se,">")}),T.duration();else{C={};for(S in y)S==="ease"||S==="easeEach"||oz(S,y[S],C,y.easeEach);for(S in C)for(G=C[S].sort(function(se,ae){return se.t-ae.t}),re=0,M=0;M<G.length;M++)V=G[M],K={ease:V.e,duration:(V.t-(M?G[M-1].t:0))/100*h},K[S]=V.v,T.to(w,K,re),re+=K.duration;T.duration()<h&&T.to({},{duration:h-T.duration()})}}h||l.duration(h=T.duration())}else l.timeline=0;return v===!0&&!Tp&&(rs=Lr(l),Bt.killTweensOf(w),rs=0),ar(A,Lr(l),s),n.reversed&&l.reverse(),n.paused&&l.paused(!0),(m||!h&&!y&&l._start===xi(A._time)&&Zi(m)&&kN(Lr(l))&&A.data!=="nested")&&(l._tTime=-Pt,l.render(Math.max(0,-f)||0)),_&&zy(Lr(l),_),l}var t=e.prototype;return t.render=function(n,s,o){var l=this._time,u=this._tDur,h=this._dur,f=n<0,m=n>u-Pt&&!f?u:n<Pt?0:n,p,v,y,g,_,b,A,w,T;if(!h)BN(this,n,s,o);else if(m!==this._tTime||!n||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(p=m,w=this.timeline,this._repeat){if(g=h+this._rDelay,this._repeat<-1&&f)return this.totalTime(g*100+n,s,o);if(p=xi(m%g),m===u?(y=this._repeat,p=h):(y=~~(m/g),y&&y===m/g&&(p=h,y--),p>h&&(p=h)),b=this._yoyo&&y&1,b&&(T=this._yEase,p=h-p),_=ro(this._tTime,g),p===l&&!o&&this._initted)return this._tTime=m,this;y!==_&&(w&&this._yEase&&Ky(w,b),this.vars.repeatRefresh&&!b&&!this._lock&&(this._lock=o=1,this.render(xi(g*y),!0).invalidate()._lock=0))}if(!this._initted){if(Fy(this,f?n:p,o,s,m))return this._tTime=0,this;if(l!==this._time)return this;if(h!==this._dur)return this.render(n,s,o)}if(this._tTime=m,this._time=p,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=A=(T||this._ease)(p/h),this._from&&(this.ratio=A=1-A),p&&!l&&!s&&!y&&(Dn(this,"onStart"),this._tTime!==m))return this;for(v=this._pt;v;)v.r(A,v.d),v=v._next;w&&w.render(n<0?n:!p&&b?-Pt:w._dur*w._ease(p/this._dur),s,o)||this._startAt&&(this._zTime=n),this._onUpdate&&!s&&(f&&Id(this,n,s,o),Dn(this,"onUpdate")),this._repeat&&y!==_&&this.vars.onRepeat&&!s&&this.parent&&Dn(this,"onRepeat"),(m===this._tDur||!m)&&this._tTime===m&&(f&&!this._onUpdate&&Id(this,n,!0,!0),(n||!h)&&(m===this._tDur&&this._ts>0||!m&&this._ts<0)&&fs(this,1),!s&&!(f&&!l)&&(m||l||b)&&(Dn(this,m===u?"onComplete":"onReverseComplete",!0),this._prom&&!(m<u&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(n){return(!n||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(n),r.prototype.invalidate.call(this,n)},t.resetTo=function(n,s,o,l){xl||hn.wake(),this._ts||this.play();var u=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Np(this,u),h=this._ease(u/this._dur),sz(this,n,s,o,l,h,u)?this.resetTo(n,s,o,l):(zu(this,0),this.parent||Iy(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(n,s){if(s===void 0&&(s="all"),!n&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?el(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(n,s,rs&&rs.vars.overwrite!==!0)._first||el(this),this.parent&&o!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/o,0,1),this}var l=this._targets,u=n?Rn(n):l,h=this._ptLookup,f=this._pt,m,p,v,y,g,_,b;if((!s||s==="all")&&zN(l,u))return s==="all"&&(this._pt=0),el(this);for(m=this._op=this._op||[],s!=="all"&&(pi(s)&&(g={},Ki(s,function(A){return g[A]=1}),s=g),s=az(l,s)),b=l.length;b--;)if(~u.indexOf(l[b])){p=h[b],s==="all"?(m[b]=s,y=p,v={}):(v=m[b]=m[b]||{},y=s);for(g in y)_=p&&p[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&Iu(this,_,"_pt"),delete p[g]),v!=="all"&&(v[g]=1)}return this._initted&&!this._pt&&f&&el(this),this},e.to=function(n,s){return new e(n,s,arguments[2])},e.from=function(n,s){return ll(1,arguments)},e.delayedCall=function(n,s,o,l){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:n,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:l})},e.fromTo=function(n,s,o){return ll(2,arguments)},e.set=function(n,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(n,s)},e.killTweensOf=function(n,s,o){return Bt.killTweensOf(n,s,o)},e}(oo);On(ri.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Ki("staggerTo,staggerFrom,staggerFromTo",function(r){ri[r]=function(){var e=new Yi,t=zd.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var zp=function(e,t,i){return e[t]=i},nb=function(e,t,i){return e[t](i)},lz=function(e,t,i,n){return e[t](n.fp,i)},cz=function(e,t,i){return e.setAttribute(t,i)},Fp=function(e,t){return $t(e[t])?nb:Ap(e[t])&&e.setAttribute?cz:zp},rb=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},uz=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},sb=function(e,t){var i=t._pt,n="";if(!e&&t.b)n=t.b;else if(e===1&&t.e)n=t.e;else{for(;i;)n=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+n,i=i._next;n+=t.c}t.set(t.t,t.p,n,t)},kp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},hz=function(e,t,i,n){for(var s=this._pt,o;s;)o=s._next,s.p===n&&s.modifier(e,t,i),s=o},fz=function(e){for(var t=this._pt,i,n;t;)n=t._next,t.p===e&&!t.op||t.op===e?Iu(this,t,"_pt"):t.dep||(i=1),t=n;return!i},dz=function(e,t,i,n){n.mSet(e,t,n.m.call(n.tween,i,n.mt),n)},ab=function(e){for(var t=e._pt,i,n,s,o;t;){for(i=t._next,n=s;n&&n.pr>t.pr;)n=n._next;(t._prev=n?n._prev:o)?t._prev._next=t:s=t,(t._next=n)?n._prev=t:o=t,t=i}e._pt=s},Ji=function(){function r(t,i,n,s,o,l,u,h,f){this.t=i,this.s=s,this.c=o,this.p=n,this.r=l||rb,this.d=u||this,this.set=h||zp,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(i,n,s){this.mSet=this.mSet||this.set,this.set=dz,this.m=i,this.mt=s,this.tween=n},r}();Ki(Dp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Rp[r]=1});_n.TweenMax=_n.TweenLite=ri;_n.TimelineLite=_n.TimelineMax=Yi;Bt=new Yi({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});pn.stringFilter=jy;var lo=[],Jc={},pz=[],J0=0,Yf=function(e){return(Jc[e]||pz).map(function(t){return t()})},Bd=function(){var e=Date.now(),t=[];e-J0>2&&(Yf("matchMediaInit"),lo.forEach(function(i){var n=i.queries,s=i.conditions,o,l,u,h;for(l in n)o=Cn.matchMedia(n[l]).matches,o&&(u=1),o!==s[l]&&(s[l]=o,h=1);h&&(i.revert(),u&&t.push(i))}),Yf("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),J0=e,Yf("matchMedia"))},ob=function(){function r(t,i){this.selector=i&&Fd(i),this.data=[],this._r=[],this.isReverted=!1,t&&this.add(t)}var e=r.prototype;return e.add=function(i,n,s){$t(i)&&(s=n,n=i,i=$t);var o=this,l=function(){var h=Qt,f=o.selector,m;return h&&h!==o&&h.data.push(o),s&&(o.selector=Fd(s)),Qt=o,m=n.apply(o,arguments),$t(m)&&o._r.push(m),Qt=h,o.selector=f,o.isReverted=!1,m};return o.last=l,i===$t?l(o):i?o[i]=l:l},e.ignore=function(i){var n=Qt;Qt=null,i(this),Qt=n},e.getTweens=function(){var i=[];return this.data.forEach(function(n){return n instanceof r?i.push.apply(i,n.getTweens()):n instanceof ri&&!(n.parent&&n.parent.data==="nested")&&i.push(n)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,n){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(u){u.data==="isFlip"&&(u.revert(),u.getChildren(!0,!0,!1).forEach(function(h){return o.splice(o.indexOf(h),1)}))}),o.map(function(u){return{g:u.globalTime(0),t:u}}).sort(function(u,h){return h.g-u.g||-1}).forEach(function(u){return u.t.revert(i)}),this.data.forEach(function(u){return!(u instanceof oo)&&u.revert&&u.revert(i)}),this._r.forEach(function(u){return u(i,s)}),this.isReverted=!0}else this.data.forEach(function(u){return u.kill&&u.kill()});if(this.clear(),n){var l=lo.indexOf(this);~l&&lo.splice(l,1)}},e.revert=function(i){this.kill(i||{})},r}(),mz=function(){function r(t){this.contexts=[],this.scope=t}var e=r.prototype;return e.add=function(i,n,s){fr(i)||(i={matches:i});var o=new ob(0,s||this.scope),l=o.conditions={},u,h,f;this.contexts.push(o),n=o.add("onMatch",n),o.queries=i;for(h in i)h==="all"?f=1:(u=Cn.matchMedia(i[h]),u&&(lo.indexOf(o)<0&&lo.push(o),(l[h]=u.matches)&&(f=1),u.addListener?u.addListener(Bd):u.addEventListener("change",Bd)));return f&&n(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(n){return n.kill(i,!0)})},r}(),hu={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(n){return Xy(n)})},timeline:function(e){return new Yi(e)},getTweensOf:function(e,t){return Bt.getTweensOf(e,t)},getProperty:function(e,t,i,n){pi(e)&&(e=Rn(e)[0]);var s=Ws(e||{}).get,o=i?Oy:Dy;return i==="native"&&(i=""),e&&(t?o((un[t]&&un[t].get||s)(e,t,i,n)):function(l,u,h){return o((un[l]&&un[l].get||s)(e,l,u,h))})},quickSetter:function(e,t,i){if(e=Rn(e),e.length>1){var n=e.map(function(f){return Qi.quickSetter(f,t,i)}),s=n.length;return function(f){for(var m=s;m--;)n[m](f)}}e=e[0]||{};var o=un[t],l=Ws(e),u=l.harness&&(l.harness.aliases||{})[t]||t,h=o?function(f){var m=new o;Va._pt=0,m.init(e,i?f+i:f,Va,0,[e]),m.render(1,m),Va._pt&&kp(1,Va)}:l.set(e,u);return o?h:function(f){return h(e,u,i?f+i:f,l,1)}},quickTo:function(e,t,i){var n,s=Qi.to(e,Js((n={},n[t]="+=0.1",n.paused=!0,n),i||{})),o=function(u,h,f){return s.resetTo(t,u,h,f)};return o.tween=s,o},isTweening:function(e){return Bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=$s(e.ease,no.ease)),q0(no,e||{})},config:function(e){return q0(pn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,n=e.plugins,s=e.defaults,o=e.extendTimeline;(n||"").split(",").forEach(function(l){return l&&!un[l]&&!_n[l]&&ou(t+" effect requires "+l+" plugin.")}),Hf[t]=function(l,u,h){return i(Rn(l),On(u||{},s),h)},o&&(Yi.prototype[t]=function(l,u,h){return this.add(Hf[t](l,fr(u)?u:(h=u)&&{},this),h)})},registerEase:function(e,t){pt[e]=$s(t)},parseEase:function(e,t){return arguments.length?$s(e,t):pt},getById:function(e){return Bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new Yi(e),n,s;for(i.smoothChildTiming=Zi(e.smoothChildTiming),Bt.remove(i),i._dp=0,i._time=i._tTime=Bt._time,n=Bt._first;n;)s=n._next,(t||!(!n._dur&&n instanceof ri&&n.vars.onComplete===n._targets[0]))&&ar(i,n,n._start-n._delay),n=s;return ar(Bt,i,0),i},context:function(e,t){return e?new ob(e,t):Qt},matchMedia:function(e){return new mz(e)},matchMediaRefresh:function(){return lo.forEach(function(e){var t=e.conditions,i,n;for(n in t)t[n]&&(t[n]=!1,i=1);i&&e.revert()})||Bd()},addEventListener:function(e,t){var i=Jc[e]||(Jc[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=Jc[e],n=i&&i.indexOf(t);n>=0&&i.splice(n,1)},utils:{wrap:YN,wrapYoyo:jN,distribute:By,random:Gy,snap:Vy,normalize:qN,getUnit:Ai,clamp:WN,splitColor:qy,toArray:Rn,selector:Fd,mapRange:Hy,pipe:$N,unitize:XN,interpolate:ZN,shuffle:Uy},install:Ay,effects:Hf,ticker:hn,updateRoot:Yi.updateRoot,plugins:un,globalTimeline:Bt,core:{PropTween:Ji,globals:Cy,Tween:ri,Timeline:Yi,Animation:oo,getCache:Ws,_removeLinkedListItem:Iu,reverting:function(){return Ci},context:function(e){return e&&Qt&&(Qt.data.push(e),e._ctx=Qt),Qt},suppressOverwrites:function(e){return Tp=e}}};Ki("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return hu[r]=ri[r]});hn.add(Yi.updateRoot);Va=hu.to({},{duration:0});var gz=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},_z=function(e,t){var i=e._targets,n,s,o;for(n in t)for(s=i.length;s--;)o=e._ptLookup[s][n],o&&(o=o.d)&&(o._pt&&(o=gz(o,n)),o&&o.modifier&&o.modifier(t[n],e,i[s],n))},jf=function(e,t){return{name:e,rawVars:1,init:function(n,s,o){o._onInit=function(l){var u,h;if(pi(s)&&(u={},Ki(s,function(f){return u[f]=1}),s=u),t){u={};for(h in s)u[h]=t(s[h]);s=u}_z(l,s)}}}},Qi=hu.registerPlugin({name:"attr",init:function(e,t,i,n,s){var o,l,u;this.tween=i;for(o in t)u=e.getAttribute(o)||"",l=this.add(e,"setAttribute",(u||0)+"",t[o],n,s,0,0,o),l.op=o,l.b=u,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)Ci?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},jf("roundProps",kd),jf("modifiers"),jf("snap",Vy))||hu;ri.version=Yi.version=Qi.version="3.11.5";Ty=1;Cp()&&ao();pt.Power0;pt.Power1;pt.Power2;pt.Power3;pt.Power4;pt.Linear;pt.Quad;pt.Cubic;pt.Quart;pt.Quint;pt.Strong;pt.Elastic;pt.Back;pt.SteppedEase;pt.Bounce;pt.Sine;pt.Expo;pt.Circ;/*!
 * CSSPlugin 3.11.5
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Q0,ss,qa,Up,Fs,ev,Bp,vz=function(){return typeof window<"u"},zr={},Ds=180/Math.PI,Ya=Math.PI/180,Na=Math.atan2,tv=1e8,Vp=/([A-Z])/g,xz=/(left|right|width|margin|padding|x)/i,yz=/[\s,\(]\S/,or={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Vd=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},bz=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wz=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sz=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},lb=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},cb=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Mz=function(e,t,i){return e.style[t]=i},Ez=function(e,t,i){return e.style.setProperty(t,i)},Tz=function(e,t,i){return e._gsap[t]=i},Az=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},Cz=function(e,t,i,n,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},Pz=function(e,t,i,n,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},Vt="transform",Xn=Vt+"Origin",Lz=function r(e,t){var i=this,n=this.target,s=n.style;if(e in zr){if(this.tfm=this.tfm||{},e!=="transform")e=or[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Rr(n,o)}):this.tfm[e]=n._gsap.x?n._gsap[e]:Rr(n,e);else return or.transform.split(",").forEach(function(o){return r.call(i,o,t)});if(this.props.indexOf(Vt)>=0)return;n._gsap.svg&&(this.svgo=n.getAttribute("data-svg-origin"),this.props.push(Xn,t,"")),e=Vt}(s||t)&&this.props.push(e,t,s[e])},ub=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Rz=function(){var e=this.props,t=this.target,i=t.style,n=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Vp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)n[o]=this.tfm[o];n.svg&&(n.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bp(),(!s||!s.isStart)&&!i[Vt]&&(ub(i),n.uncache=1)}},hb=function(e,t){var i={target:e,props:[],revert:Rz,save:Lz};return e._gsap||Qi.core.getCache(e),t&&t.split(",").forEach(function(n){return i.save(n)}),i},fb,Gd=function(e,t){var i=ss.createElementNS?ss.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):ss.createElement(e);return i.style?i:ss.createElement(e)},hr=function r(e,t,i){var n=getComputedStyle(e);return n[t]||n.getPropertyValue(t.replace(Vp,"-$1").toLowerCase())||n.getPropertyValue(t)||!i&&r(e,co(t)||t,1)||""},iv="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,i){var n=t||Fs,s=n.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(iv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?iv[o]:"")+e},Wd=function(){vz()&&window.document&&(Q0=window,ss=Q0.document,qa=ss.documentElement,Fs=Gd("div")||{style:{}},Gd("div"),Vt=co(Vt),Xn=Vt+"Origin",Fs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fb=!!co("perspective"),Bp=Qi.core.reverting,Up=1)},Zf=function r(e){var t=Gd("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,n=this.nextSibling,s=this.style.cssText,o;if(qa.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(n?i.insertBefore(this,n):i.appendChild(this)),qa.removeChild(t),this.style.cssText=s,o},nv=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},db=function(e){var t;try{t=e.getBBox()}catch{t=Zf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Zf||(t=Zf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+nv(e,["x","cx","x1"])||0,y:+nv(e,["y","cy","y1"])||0,width:0,height:0}:t},pb=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&db(e))},yl=function(e,t){if(t){var i=e.style;t in zr&&t!==Xn&&(t=Vt),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Vp,"-$1").toLowerCase())):i.removeAttribute(t)}},as=function(e,t,i,n,s,o){var l=new Ji(e._pt,t,i,0,1,o?cb:lb);return e._pt=l,l.b=n,l.e=s,e._props.push(i),l},rv={deg:1,rad:1,turn:1},Dz={grid:1,flex:1},ds=function r(e,t,i,n){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",l=Fs.style,u=xz.test(t),h=e.tagName.toLowerCase()==="svg",f=(h?"client":"offset")+(u?"Width":"Height"),m=100,p=n==="px",v=n==="%",y,g,_,b;return n===o||!s||rv[n]||rv[o]?s:(o!=="px"&&!p&&(s=r(e,t,i,"px")),b=e.getCTM&&pb(e),(v||o==="%")&&(zr[t]||~t.indexOf("adius"))?(y=b?e.getBBox()[u?"width":"height"]:e[f],jt(v?s/y*m:s/100*y)):(l[u?"width":"height"]=m+(p?o:n),g=~t.indexOf("adius")||n==="em"&&e.appendChild&&!h?e:e.parentNode,b&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===ss||!g.appendChild)&&(g=ss.body),_=g._gsap,_&&v&&_.width&&u&&_.time===hn.time&&!_.uncache?jt(s/_.width*m):((v||o==="%")&&!Dz[hr(g,"display")]&&(l.position=hr(e,"position")),g===e&&(l.position="static"),g.appendChild(Fs),y=Fs[f],g.removeChild(Fs),l.position="absolute",u&&v&&(_=Ws(g),_.time=hn.time,_.width=g[f]),jt(p?y*s/m:y&&s?m/y*s:0))))},Rr=function(e,t,i,n){var s;return Up||Wd(),t in or&&t!=="transform"&&(t=or[t],~t.indexOf(",")&&(t=t.split(",")[0])),zr[t]&&t!=="transform"?(s=wl(e,n),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:du(hr(e,Xn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||n||~(s+"").indexOf("calc("))&&(s=fu[t]&&fu[t](e,t,i)||hr(e,t)||Ly(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?ds(e,t,s,i)+i:s},Oz=function(e,t,i,n){if(!i||i==="none"){var s=co(t,e,1),o=s&&hr(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=hr(e,"borderTopColor"))}var l=new Ji(this._pt,e.style,t,0,1,sb),u=0,h=0,f,m,p,v,y,g,_,b,A,w,T,M;if(l.b=i,l.e=n,i+="",n+="",n==="auto"&&(e.style[t]=n,n=hr(e,t)||n,e.style[t]=i),f=[i,n],jy(f),i=f[0],n=f[1],p=i.match(Ba)||[],M=n.match(Ba)||[],M.length){for(;m=Ba.exec(n);)_=m[0],A=n.substring(u,m.index),y?y=(y+1)%5:(A.substr(-5)==="rgba("||A.substr(-5)==="hsla(")&&(y=1),_!==(g=p[h++]||"")&&(v=parseFloat(g)||0,T=g.substr((v+"").length),_.charAt(1)==="="&&(_=Xa(v,_)+T),b=parseFloat(_),w=_.substr((b+"").length),u=Ba.lastIndex-w.length,w||(w=w||pn.units[t]||T,u===n.length&&(n+=w,l.e+=w)),T!==w&&(v=ds(e,t,g,w)||0),l._pt={_next:l._pt,p:A||h===1?A:",",s:v,c:b-v,m:y&&y<4||t==="zIndex"?Math.round:0});l.c=u<n.length?n.substring(u,n.length):""}else l.r=t==="display"&&n==="none"?cb:lb;return My.test(n)&&(l.e=0),this._pt=l,l},sv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Iz=function(e){var t=e.split(" "),i=t[0],n=t[1]||"50%";return(i==="top"||i==="bottom"||n==="left"||n==="right")&&(e=i,i=n,n=e),t[0]=sv[i]||i,t[1]=sv[n]||n,t.join(" ")},Nz=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,n=i.style,s=t.u,o=i._gsap,l,u,h;if(s==="all"||s===!0)n.cssText="",u=1;else for(s=s.split(","),h=s.length;--h>-1;)l=s[h],zr[l]&&(u=1,l=l==="transformOrigin"?Xn:Vt),yl(i,l);u&&(yl(i,Vt),o&&(o.svg&&i.removeAttribute("transform"),wl(i,1),o.uncache=1,ub(n)))}},fu={clearProps:function(e,t,i,n,s){if(s.data!=="isFromStart"){var o=e._pt=new Ji(e._pt,t,i,0,0,Nz);return o.u=n,o.pr=-10,o.tween=s,e._props.push(i),1}}},bl=[1,0,0,1,0,0],mb={},gb=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},av=function(e){var t=hr(e,Vt);return gb(t)?bl:t.substr(7).match(Sy).map(jt)},Gp=function(e,t){var i=e._gsap||Ws(e),n=e.style,s=av(e),o,l,u,h;return i.svg&&e.getAttribute("transform")?(u=e.transform.baseVal.consolidate().matrix,s=[u.a,u.b,u.c,u.d,u.e,u.f],s.join(",")==="1,0,0,1,0,0"?bl:s):(s===bl&&!e.offsetParent&&e!==qa&&!i.svg&&(u=n.display,n.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(h=1,l=e.nextElementSibling,qa.appendChild(e)),s=av(e),u?n.display=u:yl(e,"display"),h&&(l?o.insertBefore(e,l):o?o.appendChild(e):qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Hd=function(e,t,i,n,s,o){var l=e._gsap,u=s||Gp(e,!0),h=l.xOrigin||0,f=l.yOrigin||0,m=l.xOffset||0,p=l.yOffset||0,v=u[0],y=u[1],g=u[2],_=u[3],b=u[4],A=u[5],w=t.split(" "),T=parseFloat(w[0])||0,M=parseFloat(w[1])||0,C,O,S,L;i?u!==bl&&(O=v*_-y*g)&&(S=T*(_/O)+M*(-g/O)+(g*A-_*b)/O,L=T*(-y/O)+M*(v/O)-(v*A-y*b)/O,T=S,M=L):(C=db(e),T=C.x+(~w[0].indexOf("%")?T/100*C.width:T),M=C.y+(~(w[1]||w[0]).indexOf("%")?M/100*C.height:M)),n||n!==!1&&l.smooth?(b=T-h,A=M-f,l.xOffset=m+(b*v+A*g)-b,l.yOffset=p+(b*y+A*_)-A):l.xOffset=l.yOffset=0,l.xOrigin=T,l.yOrigin=M,l.smooth=!!n,l.origin=t,l.originIsAbsolute=!!i,e.style[Xn]="0px 0px",o&&(as(o,l,"xOrigin",h,T),as(o,l,"yOrigin",f,M),as(o,l,"xOffset",m,l.xOffset),as(o,l,"yOffset",p,l.yOffset)),e.setAttribute("data-svg-origin",T+" "+M)},wl=function(e,t){var i=e._gsap||new Qy(e);if("x"in i&&!t&&!i.uncache)return i;var n=e.style,s=i.scaleX<0,o="px",l="deg",u=getComputedStyle(e),h=hr(e,Xn)||"0",f,m,p,v,y,g,_,b,A,w,T,M,C,O,S,L,k,Y,re,G,V,K,se,ae,te,Se,xe,ee,ne,ye,J,de;return f=m=p=g=_=b=A=w=T=0,v=y=1,i.svg=!!(e.getCTM&&pb(e)),u.translate&&((u.translate!=="none"||u.scale!=="none"||u.rotate!=="none")&&(n[Vt]=(u.translate!=="none"?"translate3d("+(u.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(u.rotate!=="none"?"rotate("+u.rotate+") ":"")+(u.scale!=="none"?"scale("+u.scale.split(" ").join(",")+") ":"")+(u[Vt]!=="none"?u[Vt]:"")),n.scale=n.rotate=n.translate="none"),O=Gp(e,i.svg),i.svg&&(i.uncache?(te=e.getBBox(),h=i.xOrigin-te.x+"px "+(i.yOrigin-te.y)+"px",ae=""):ae=!t&&e.getAttribute("data-svg-origin"),Hd(e,ae||h,!!ae||i.originIsAbsolute,i.smooth!==!1,O)),M=i.xOrigin||0,C=i.yOrigin||0,O!==bl&&(Y=O[0],re=O[1],G=O[2],V=O[3],f=K=O[4],m=se=O[5],O.length===6?(v=Math.sqrt(Y*Y+re*re),y=Math.sqrt(V*V+G*G),g=Y||re?Na(re,Y)*Ds:0,A=G||V?Na(G,V)*Ds+g:0,A&&(y*=Math.abs(Math.cos(A*Ya))),i.svg&&(f-=M-(M*Y+C*G),m-=C-(M*re+C*V))):(de=O[6],ye=O[7],xe=O[8],ee=O[9],ne=O[10],J=O[11],f=O[12],m=O[13],p=O[14],S=Na(de,ne),_=S*Ds,S&&(L=Math.cos(-S),k=Math.sin(-S),ae=K*L+xe*k,te=se*L+ee*k,Se=de*L+ne*k,xe=K*-k+xe*L,ee=se*-k+ee*L,ne=de*-k+ne*L,J=ye*-k+J*L,K=ae,se=te,de=Se),S=Na(-G,ne),b=S*Ds,S&&(L=Math.cos(-S),k=Math.sin(-S),ae=Y*L-xe*k,te=re*L-ee*k,Se=G*L-ne*k,J=V*k+J*L,Y=ae,re=te,G=Se),S=Na(re,Y),g=S*Ds,S&&(L=Math.cos(S),k=Math.sin(S),ae=Y*L+re*k,te=K*L+se*k,re=re*L-Y*k,se=se*L-K*k,Y=ae,K=te),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,b=180-b),v=jt(Math.sqrt(Y*Y+re*re+G*G)),y=jt(Math.sqrt(se*se+de*de)),S=Na(K,se),A=Math.abs(S)>2e-4?S*Ds:0,T=J?1/(J<0?-J:J):0),i.svg&&(ae=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!gb(hr(e,Vt)),ae&&e.setAttribute("transform",ae))),Math.abs(A)>90&&Math.abs(A)<270&&(s?(v*=-1,A+=g<=0?180:-180,g+=g<=0?180:-180):(y*=-1,A+=A<=0?180:-180)),t=t||i.uncache,i.x=f-((i.xPercent=f&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=m-((i.yPercent=m&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-m)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=p+o,i.scaleX=jt(v),i.scaleY=jt(y),i.rotation=jt(g)+l,i.rotationX=jt(_)+l,i.rotationY=jt(b)+l,i.skewX=A+l,i.skewY=w+l,i.transformPerspective=T+o,(i.zOrigin=parseFloat(h.split(" ")[2])||0)&&(n[Xn]=du(h)),i.xOffset=i.yOffset=0,i.force3D=pn.force3D,i.renderTransform=i.svg?Fz:fb?_b:zz,i.uncache=0,i},du=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kf=function(e,t,i){var n=Ai(t);return jt(parseFloat(t)+parseFloat(ds(e,"x",i+"px",n)))+n},zz=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,_b(e,t)},Cs="0deg",jo="0px",Ps=") ",_b=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,l=i.y,u=i.z,h=i.rotation,f=i.rotationY,m=i.rotationX,p=i.skewX,v=i.skewY,y=i.scaleX,g=i.scaleY,_=i.transformPerspective,b=i.force3D,A=i.target,w=i.zOrigin,T="",M=b==="auto"&&e&&e!==1||b===!0;if(w&&(m!==Cs||f!==Cs)){var C=parseFloat(f)*Ya,O=Math.sin(C),S=Math.cos(C),L;C=parseFloat(m)*Ya,L=Math.cos(C),o=Kf(A,o,O*L*-w),l=Kf(A,l,-Math.sin(C)*-w),u=Kf(A,u,S*L*-w+w)}_!==jo&&(T+="perspective("+_+Ps),(n||s)&&(T+="translate("+n+"%, "+s+"%) "),(M||o!==jo||l!==jo||u!==jo)&&(T+=u!==jo||M?"translate3d("+o+", "+l+", "+u+") ":"translate("+o+", "+l+Ps),h!==Cs&&(T+="rotate("+h+Ps),f!==Cs&&(T+="rotateY("+f+Ps),m!==Cs&&(T+="rotateX("+m+Ps),(p!==Cs||v!==Cs)&&(T+="skew("+p+", "+v+Ps),(y!==1||g!==1)&&(T+="scale("+y+", "+g+Ps),A.style[Vt]=T||"translate(0, 0)"},Fz=function(e,t){var i=t||this,n=i.xPercent,s=i.yPercent,o=i.x,l=i.y,u=i.rotation,h=i.skewX,f=i.skewY,m=i.scaleX,p=i.scaleY,v=i.target,y=i.xOrigin,g=i.yOrigin,_=i.xOffset,b=i.yOffset,A=i.forceCSS,w=parseFloat(o),T=parseFloat(l),M,C,O,S,L;u=parseFloat(u),h=parseFloat(h),f=parseFloat(f),f&&(f=parseFloat(f),h+=f,u+=f),u||h?(u*=Ya,h*=Ya,M=Math.cos(u)*m,C=Math.sin(u)*m,O=Math.sin(u-h)*-p,S=Math.cos(u-h)*p,h&&(f*=Ya,L=Math.tan(h-f),L=Math.sqrt(1+L*L),O*=L,S*=L,f&&(L=Math.tan(f),L=Math.sqrt(1+L*L),M*=L,C*=L)),M=jt(M),C=jt(C),O=jt(O),S=jt(S)):(M=m,S=p,C=O=0),(w&&!~(o+"").indexOf("px")||T&&!~(l+"").indexOf("px"))&&(w=ds(v,"x",o,"px"),T=ds(v,"y",l,"px")),(y||g||_||b)&&(w=jt(w+y-(y*M+g*O)+_),T=jt(T+g-(y*C+g*S)+b)),(n||s)&&(L=v.getBBox(),w=jt(w+n/100*L.width),T=jt(T+s/100*L.height)),L="matrix("+M+","+C+","+O+","+S+","+w+","+T+")",v.setAttribute("transform",L),A&&(v.style[Vt]=L)},kz=function(e,t,i,n,s){var o=360,l=pi(s),u=parseFloat(s)*(l&&~s.indexOf("rad")?Ds:1),h=u-n,f=n+h+"deg",m,p;return l&&(m=s.split("_")[1],m==="short"&&(h%=o,h!==h%(o/2)&&(h+=h<0?o:-o)),m==="cw"&&h<0?h=(h+o*tv)%o-~~(h/o)*o:m==="ccw"&&h>0&&(h=(h-o*tv)%o-~~(h/o)*o)),e._pt=p=new Ji(e._pt,t,i,n,h,bz),p.e=f,p.u="deg",e._props.push(i),p},ov=function(e,t){for(var i in t)e[i]=t[i];return e},Uz=function(e,t,i){var n=ov({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,l,u,h,f,m,p,v,y;n.svg?(h=i.getAttribute("transform"),i.setAttribute("transform",""),o[Vt]=t,l=wl(i,1),yl(i,Vt),i.setAttribute("transform",h)):(h=getComputedStyle(i)[Vt],o[Vt]=t,l=wl(i,1),o[Vt]=h);for(u in zr)h=n[u],f=l[u],h!==f&&s.indexOf(u)<0&&(v=Ai(h),y=Ai(f),m=v!==y?ds(i,u,h,y):parseFloat(h),p=parseFloat(f),e._pt=new Ji(e._pt,l,u,m,p-m,Vd),e._pt.u=y||0,e._props.push(u));ov(l,n)};Ki("padding,margin,Width,Radius",function(r,e){var t="Top",i="Right",n="Bottom",s="Left",o=(e<3?[t,i,n,s]:[t+s,t+i,n+i,n+s]).map(function(l){return e<2?r+l:"border"+l+r});fu[e>1?"border"+r:r]=function(l,u,h,f,m){var p,v;if(arguments.length<4)return p=o.map(function(y){return Rr(l,y,h)}),v=p.join(" "),v.split(p[0]).length===5?p[0]:v;p=(f+"").split(" "),v={},o.forEach(function(y,g){return v[y]=p[g]=p[g]||p[(g-1)/2|0]}),l.init(u,v,m)}});var vb={name:"css",register:Wd,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,n,s){var o=this._props,l=e.style,u=i.vars.startAt,h,f,m,p,v,y,g,_,b,A,w,T,M,C,O,S;Up||Wd(),this.styles=this.styles||hb(e),S=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(f=t[g],!(un[g]&&eb(g,t,i,n,e,s)))){if(v=typeof f,y=fu[g],v==="function"&&(f=f.call(i,n,e,s),v=typeof f),v==="string"&&~f.indexOf("random(")&&(f=vl(f)),y)y(this,e,g,f,i)&&(O=1);else if(g.substr(0,2)==="--")h=(getComputedStyle(e).getPropertyValue(g)+"").trim(),f+="",cs.lastIndex=0,cs.test(h)||(_=Ai(h),b=Ai(f)),b?_!==b&&(h=ds(e,g,h,b)+b):_&&(f+=_),this.add(l,"setProperty",h,f,n,s,0,0,g),o.push(g),S.push(g,0,l[g]);else if(v!=="undefined"){if(u&&g in u?(h=typeof u[g]=="function"?u[g].call(i,n,e,s):u[g],pi(h)&&~h.indexOf("random(")&&(h=vl(h)),Ai(h+"")||(h+=pn.units[g]||Ai(Rr(e,g))||""),(h+"").charAt(1)==="="&&(h=Rr(e,g))):h=Rr(e,g),p=parseFloat(h),A=v==="string"&&f.charAt(1)==="="&&f.substr(0,2),A&&(f=f.substr(2)),m=parseFloat(f),g in or&&(g==="autoAlpha"&&(p===1&&Rr(e,"visibility")==="hidden"&&m&&(p=0),S.push("visibility",0,l.visibility),as(this,l,"visibility",p?"inherit":"hidden",m?"inherit":"hidden",!m)),g!=="scale"&&g!=="transform"&&(g=or[g],~g.indexOf(",")&&(g=g.split(",")[0]))),w=g in zr,w){if(this.styles.save(g),T||(M=e._gsap,M.renderTransform&&!t.parseTransform||wl(e,t.parseTransform),C=t.smoothOrigin!==!1&&M.smooth,T=this._pt=new Ji(this._pt,l,Vt,0,1,M.renderTransform,M,0,-1),T.dep=1),g==="scale")this._pt=new Ji(this._pt,M,"scaleY",M.scaleY,(A?Xa(M.scaleY,A+m):m)-M.scaleY||0,Vd),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){S.push(Xn,0,l[Xn]),f=Iz(f),M.svg?Hd(e,f,0,C,0,this):(b=parseFloat(f.split(" ")[2])||0,b!==M.zOrigin&&as(this,M,"zOrigin",M.zOrigin,b),as(this,l,g,du(h),du(f)));continue}else if(g==="svgOrigin"){Hd(e,f,1,C,0,this);continue}else if(g in mb){kz(this,M,g,p,A?Xa(p,A+f):f);continue}else if(g==="smoothOrigin"){as(this,M,"smooth",M.smooth,f);continue}else if(g==="force3D"){M[g]=f;continue}else if(g==="transform"){Uz(this,f,e);continue}}else g in l||(g=co(g)||g);if(w||(m||m===0)&&(p||p===0)&&!yz.test(f)&&g in l)_=(h+"").substr((p+"").length),m||(m=0),b=Ai(f)||(g in pn.units?pn.units[g]:_),_!==b&&(p=ds(e,g,h,b)),this._pt=new Ji(this._pt,w?M:l,g,p,(A?Xa(p,A+m):m)-p,!w&&(b==="px"||g==="zIndex")&&t.autoRound!==!1?Sz:Vd),this._pt.u=b||0,_!==b&&b!=="%"&&(this._pt.b=h,this._pt.r=wz);else if(g in l)Oz.call(this,e,g,h,A?A+f:f);else if(g in e)this.add(e,g,h||e[g],A?A+f:f,n,s);else if(g!=="parseTransform"){Lp(g,f);continue}w||(g in l?S.push(g,0,l[g]):S.push(g,1,h||e[g])),o.push(g)}}O&&ab(this)},render:function(e,t){if(t.tween._time||!Bp())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Rr,aliases:or,getSetter:function(e,t,i){var n=or[t];return n&&n.indexOf(",")<0&&(t=n),t in zr&&t!==Xn&&(e._gsap.x||Rr(e,"x"))?i&&ev===i?t==="scale"?Az:Tz:(ev=i||{})&&(t==="scale"?Cz:Pz):e.style&&!Ap(e.style[t])?Mz:~t.indexOf("-")?Ez:Fp(e,t)},core:{_removeProperty:yl,_getMatrix:Gp}};Qi.utils.checkPrefix=co;Qi.core.getStyleSaver=hb;(function(r,e,t,i){var n=Ki(r+","+e+","+t,function(s){zr[s]=1});Ki(e,function(s){pn.units[s]="deg",mb[s]=1}),or[n[13]]=r+","+e,Ki(i,function(s){var o=s.split(":");or[o[1]]=n[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Ki("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){pn.units[r]="px"});Qi.registerPlugin(vb);var mn=Qi.registerPlugin(vb)||Qi;mn.core.Tween;class Bz extends Ep{constructor(t=1){super(t);U(this,"name","Scene2");U(this,"id",1);U(this,"bgMesh");this.sceneContainer=new oi,this.container.add(this.sceneContainer),this.setOperationMode();let i=new bp().load(this.sceneConfig.textures.bg);i.wrapS=hl,i.wrapT=hl,i.repeat.set(2,3);let n=new gn({uniforms:{uTexture:{value:i},uScroll:{value:new Re(0,0)}},vertexShader:`
				varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
				}
			`,fragmentShader:`
				uniform sampler2D uTexture;
				uniform vec2 uScroll;
				varying vec2 vUv;
				void main() {
					vec2 uv = vUv;
					uv += uScroll;
					uv = fract(uv);
					gl_FragColor = texture2D(uTexture, uv);
				}
			`}),s=new Qs(1,1,1);this.bgMesh=new Fi(s,n),this.bgMesh.scale.set(Ve.width,Ve.height,1),this.sceneContainer.add(this.bgMesh)}updateScroll(t,i){let n=this.bgMesh.material,s=-i/Ve.width;n.uniforms.uScroll.value.x=s}setup(){}resize(){this.bgMesh.scale.set(Ve.width,Ve.height,1),super.resize()}}class Vz extends Ep{constructor(t=2){super(t);U(this,"name","Scene3");U(this,"id",2);U(this,"bgMesh");U(this,"lastMovePosition",new W(0,0,0));Et.scenes[this.id].textures,this.sceneContainer=new oi,this.container.add(this.sceneContainer),this.setOperationMode()}setup(){Et.scenes[this.id].items.forEach((i,n)=>{let o=Et.scenes[this.id].textures[i.srcName];if(i.name!=""){let l={fitStage:!1};l=Object.assign(l,i);let u=jc(o,new W,1,this.guiBase,l);u.position.x=i.position.x,u.position.y=i.position.y,u.position.z=i.position.z,u.scale.set(i.scale,i.scale,i.scale),this.sceneContainer.add(u),u._type="item",u._name=i.name,u._data=i,this.items.push(u)}})}async load(){let t=await vy("./assets/images/menu-button-bg.webp").catch(s=>!1);const i=[];return[Et.scenes[this.id].textures].forEach(s=>{for(let o in s){let l=new Promise(u=>{let h=s[o];t&&(h=h.replace(".png",".webp"),h=h.replace(".jpg",".webp")),new bp().load(h,f=>{f.minFilter=Ei,s[o]=f,u()})});i.push(l)}}),Promise.all(i)}update(t,i=[]){super.update(t)}updateMove(t){this.lastMovePosition.x+=(t*Ve.width*.25-this.lastMovePosition.x)*.3,this.container.position.x=this.lastMovePosition.x}updateScroll(t,i){let n=this.bgMesh.material,s=-i/Ve.width;n.uniforms.uScroll.value.x=s}resize(){if(super.resize(),ji.isPC){if(Ve.height<700){let t=Ve.height-700;t/=100,this.camera.fov=45+t*10}else this.camera.fov=45;this.camera.updateProjectionMatrix()}}setGui(){super.setGui();let t,i=Et.scenes[this.id].items;t=this.guiBase.addFolder("items").close(),i.forEach((s,o)=>{let l=this.items.find(u=>u._name===s.name);if(l){let u=t.addFolder(s.name);u.add(l,"visible"),u.add({scale:l.scale.x},"scale",.01,10).onChange(h=>{l.scale.set(h,h,h)}),$n(u,l.position,{range:3e4,threshold:5}).onChange(()=>{this.setDragItems()}),u.close()}});let n=this.sceneConfig.fog;this.guiBase.add(n,"near",-1e4,1e4,.01).onChange(s=>{this.items.forEach(o=>{o.material.uniforms.near.value=s})}),this.guiBase.add(n,"far",-1e4,1e4,.01).onChange(s=>{this.items.forEach(o=>{o.material.uniforms.far.value=s})})}animation(){super.animation()}}class Gz extends yN{constructor(t,i=!1){super(t,{render_clearColor:10784361});U(this,"container");U(this,"maki");U(this,"scenes",[]);U(this,"progress",0);U(this,"progressUnfoldMaki",0);U(this,"loadStatus",{progress:0,_progress:0,speed:.1,isDone:!1});U(this,"isExtraSceneView",!1);U(this,"isNaviMode",!1);U(this,"currentMode","navi");U(this,"renderTarget");U(this,"gsap");U(this,"gsapTimeline");U(this,"mirror");U(this,"sceneViewCheck",{scene1:!0,scene2:!1,scene3:!0});this.container=new oi,this.scene.add(this.container),this.scene.fog=new gp(10784361,1e3,5e3);let n=window.devicePixelRatio;this.renderTarget=new Yn(Ve.width*n,Ve.height*n,{depthBuffer:!0,stencilBuffer:!1}),this.resize(),this.addResizeList("indigo",s=>{this.maki&&this.maki.resize(),this.scenes.forEach(o=>{o.resize()})})}async load(t=()=>{}){let i=await vy("./assets/images/menu-button-bg.webp").catch(l=>!1);const n=[];[Et.maki.textures,Et.scenes[0].textures,Et.commonTextures].forEach(l=>{for(let u in l){let h=new Promise(f=>{let m=l[u];i&&(m=m.replace(".png",".webp"),m=m.replace(".jpg",".webp")),new bp().load(m,p=>{p.minFilter=Ei,l[u]=p,f()})});n.push(h)}});let o=0;return new Promise(l=>{n.forEach(u=>{u.then(()=>{o++;let h=o/n.length;t(),h==1&&l()})})})}async setup(){await this.load(),this.maki=new SN,this.maki.setGui(),this.container.add(this.maki.container);let t=new TN,i=new Bz,n=new Vz;n.load().then(()=>{n.setup()}),t.setup(),this.scenes.push(t),this.scenes.push(i),this.scenes.push(n),this.setInsideTexture(0),this.setInsideNextTexture(1),this.resize(!0),this.loadStatus.isDone=!0}resize(t){let i=window.devicePixelRatio;this.renderTarget.setSize(Ve.width*i,Ve.height*i),super.resize(t)}showFirst(){this.container.position.z=-500,mn.to(this.container.position,{z:0,duration:1.5,ease:"power3.inOut"})}hideFirst(){mn.to(this.container.position,{z:-500,duration:2.1,ease:"power3.inOut"})}setGui(){Ht.add({htmlContentVisible:!0},"htmlContentVisible").onChange(s=>{s?document.body.querySelector("main").style.removeProperty("visibility"):document.body.querySelector("main").style.setProperty("visibility","hidden")}),this.mirror&&Ht.add(this.mirror,"visible").name("scene mirror"),Ht.add(this,"progress").listen().name("scene prog"),Ht.add(this,"progressUnfoldMaki").listen().name("\u5DFB\u304D\u5E83\u3052\u308B"),Ht.add(this.camera,"fov",0,180).onChange(s=>{this.camera.updateProjectionMatrix()}),$n(Ht,this.camera.position,{folder:"\u{1F4F7}camera",range:1e4,threshold:.1}).close();let t=Ht.addFolder("\u{1F961}container").close();$n(t,this.container.position,{folder:"position",range:5e3,threshold:.1}),$n(t,this.container.rotation,{folder:"rotation",range:Math.PI*2,threshold:Math.PI/180}).close();const i={scene:"default"},n=s=>{let o;switch(s){case"default":Ua(this.scene,this.camera),_y(su,this.renderer),this.scenes.forEach(l=>{l.isActive=!1});break;case"scene1":o=this.scenes[0],Ua(o.scene,o.camera),o.activeOperationMode(),this.scenes.forEach((l,u)=>{u!=0&&(l.isActive=!1)});break;case"scene2":o=this.scenes[1],Ua(o.scene,o.camera),o.activeOperationMode(),this.scenes.forEach((l,u)=>{u!=1&&(l.isActive=!1)});break;case"scene3":o=this.scenes[2],Ua(o.scene,o.camera),o.activeOperationMode(),this.scenes.forEach((l,u)=>{u!=2&&(l.isActive=!1)});break}};Ht.add(i,"scene",["default","scene1","scene2","scene3"]).onChange(s=>{n(s)}).listen(),Ht.add(this.sceneViewCheck,"scene1").listen(),Ht.add(this.sceneViewCheck,"scene2").listen(),Ht.add(this.sceneViewCheck,"scene3").listen(),window.addEventListener("keydown",s=>{switch(s.key){case"1":i.scene="default",n("default");break;case"2":i.scene="scene1",n("scene1");break;case"3":i.scene="scene2",n("scene2");break;case"4":i.scene="scene3",n("scene3");break}})}unfoldMaki(t=0){this.progressUnfoldMaki=t,this.maki&&this.maki.update(this.progressUnfoldMaki)}setSceneTransitionActive(t=!1){this.maki&&this.maki.setTransitionActive(t)}updateSceneTransition(t=0){this.maki&&this.maki.updateTransition(t)}updateScene(t=0,i=0,n=[]){this.progress=i;let s=this.scenes[t];s&&s.update(i,n),n[0]&&this.scenes[2].update(n[0])}setInsideTexture(t){if(this.scenes[t]){let n=this.scenes[t].renderTarget.texture;this.maki.setInsideTexture(n)}}setInsideNextTexture(t){if(this.scenes[t]){let n=this.scenes[t].renderTarget.texture;this.maki.setInsideNextTexture(n)}}scene1ToScene2(){}render(){let t=this.scenes[0],i=this.scenes[1],n=this.scenes[2];this.maki&&(this.sceneViewCheck.scene1&&t.captureScene(this.renderer),this.sceneViewCheck.scene2&&i.captureScene(this.renderer),this.sceneViewCheck.scene3&&n.captureScene(this.renderer)),this.sceneViewCheck.scene1&&t&&t.animation(),this.sceneViewCheck.scene3&&n&&n.animation(),super.render()}}function lv(r,e){for(var t=0;t<e.length;t++){var i=e[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(r,typeof(n=function(s,o){if(typeof s!="object"||s===null)return s;var l=s[Symbol.toPrimitive];if(l!==void 0){var u=l.call(s,"string");if(typeof u!="object")return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(s)}(i.key))=="symbol"?n:String(n),i)}var n}function xb(r,e,t){return e&&lv(r.prototype,e),t&&lv(r,t),Object.defineProperty(r,"prototype",{writable:!1}),r}function $d(){return $d=Object.assign?Object.assign.bind():function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=t[i])}return r},$d.apply(this,arguments)}function pu(r,e,t){return Math.max(r,Math.min(e,t))}var Wz=function(){function r(){}var e=r.prototype;return e.advance=function(t){var i,n,s,o;if(this.isRunning){var l=!1;if(this.lerp)this.value=(n=this.value,s=this.to,(1-(o=1-Math.exp(-60*this.lerp*t)))*n+o*s),Math.round(this.value)===this.to&&(this.value=this.to,l=!0);else{this.currentTime+=t;var u=pu(0,this.currentTime/this.duration,1),h=(l=u>=1)?1:this.easing(u);this.value=this.from+(this.to-this.from)*h}(i=this.onUpdate)==null||i.call(this,this.value,{completed:l}),l&&this.stop()}},e.stop=function(){this.isRunning=!1},e.fromTo=function(t,i,n){var s=n.lerp,o=s===void 0?.1:s,l=n.duration,u=l===void 0?1:l,h=n.easing,f=h===void 0?function(p){return p}:h,m=n.onUpdate;this.from=this.value=t,this.to=i,this.lerp=o,this.duration=u,this.easing=f,this.currentTime=0,this.isRunning=!0,this.onUpdate=m},r}();function cv(r,e){var t;return function(){var i=arguments,n=this;clearTimeout(t),t=setTimeout(function(){r.apply(n,i)},e)}}var Hz=function(){function r(e,t){var i=this;this.onWindowResize=function(){i.width=window.innerWidth,i.height=window.innerHeight},this.onWrapperResize=function(){i.width=i.wrapper.clientWidth,i.height=i.wrapper.clientHeight},this.onContentResize=function(){var n=i.wrapper===window?document.documentElement:i.wrapper;i.scrollHeight=n.scrollHeight,i.scrollWidth=n.scrollWidth},this.wrapper=e,this.content=t,this.wrapper===window?(window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize()):(this.wrapperResizeObserver=new ResizeObserver(cv(this.onWrapperResize,100)),this.wrapperResizeObserver.observe(this.wrapper),this.onWrapperResize()),this.contentResizeObserver=new ResizeObserver(cv(this.onContentResize,100)),this.contentResizeObserver.observe(this.content),this.onContentResize()}return r.prototype.destroy=function(){var e,t;window.removeEventListener("resize",this.onWindowResize,!1),(e=this.wrapperResizeObserver)==null||e.disconnect(),(t=this.contentResizeObserver)==null||t.disconnect()},xb(r,[{key:"limit",get:function(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}}]),r}(),$z=function(){function r(t,i){var n=this,s=i.wheelMultiplier,o=s===void 0?1:s,l=i.touchMultiplier,u=l===void 0?2:l,h=i.normalizeWheel,f=h!==void 0&&h;this.onTouchStart=function(m){var p=m.targetTouches?m.targetTouches[0]:m,v=p.clientY;n.touchStart.x=p.clientX,n.touchStart.y=v,n.lastDelta={x:0,y:0}},this.onTouchMove=function(m){var p=m.targetTouches?m.targetTouches[0]:m,v=p.clientX,y=p.clientY,g=-(v-n.touchStart.x)*n.touchMultiplier,_=-(y-n.touchStart.y)*n.touchMultiplier;n.touchStart.x=v,n.touchStart.y=y,n.lastDelta={x:g,y:_},n.emitter.emit("scroll",{type:"touch",deltaX:g,deltaY:_,event:m})},this.onTouchEnd=function(m){n.emitter.emit("scroll",{type:"touch",inertia:!0,deltaX:n.lastDelta.x,deltaY:n.lastDelta.y,event:m})},this.onWheel=function(m){var p=m.deltaX,v=m.deltaY;n.normalizeWheel&&(p=pu(-100,p,100),v=pu(-100,v,100)),n.emitter.emit("scroll",{type:"wheel",deltaX:p*=n.wheelMultiplier,deltaY:v*=n.wheelMultiplier,event:m})},this.element=t,this.wheelMultiplier=o,this.touchMultiplier=u,this.normalizeWheel=f,this.touchStart={x:null,y:null},this.emitter={events:{},emit:function(m){for(var p=this.events[m]||[],v=0,y=p.length;v<y;v++)p[v].apply(p,[].slice.call(arguments,1))},on:function(m,p){var v,y=this;return(v=this.events[m])!=null&&v.push(p)||(this.events[m]=[p]),function(){var g;y.events[m]=(g=y.events[m])==null?void 0:g.filter(function(_){return p!==_})}}},this.element.addEventListener("wheel",this.onWheel,{passive:!1}),this.element.addEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.addEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.addEventListener("touchend",this.onTouchEnd,{passive:!1})}var e=r.prototype;return e.on=function(t,i){return this.emitter.on(t,i)},e.destroy=function(){this.emitter.events={},this.element.removeEventListener("wheel",this.onWheel,{passive:!1}),this.element.removeEventListener("touchstart",this.onTouchStart,{passive:!1}),this.element.removeEventListener("touchmove",this.onTouchMove,{passive:!1}),this.element.removeEventListener("touchend",this.onTouchEnd,{passive:!1})},r}(),Xz=function(){function r(t){var i=this,n=t===void 0?{}:t,s=n.direction,o=n.gestureDirection,l=n.mouseMultiplier,u=n.smooth,h=n.wrapper,f=h===void 0?window:h,m=n.content,p=m===void 0?document.documentElement:m,v=n.wheelEventsTarget,y=v===void 0?f:v,g=n.smoothWheel,_=g===void 0?u==null||u:g,b=n.smoothTouch,A=b!==void 0&&b,w=n.syncTouch,T=w!==void 0&&w,M=n.syncTouchLerp,C=M===void 0?.1:M,O=n.touchInertiaMultiplier,S=O===void 0?35:O,L=n.duration,k=n.easing,Y=k===void 0?function(j){return Math.min(1,1.001-Math.pow(2,-10*j))}:k,re=n.lerp,G=re===void 0?L?null:.1:re,V=n.infinite,K=V!==void 0&&V,se=n.orientation,ae=se===void 0?s!=null?s:"vertical":se,te=n.gestureOrientation,Se=te===void 0?o!=null?o:"vertical":te,xe=n.touchMultiplier,ee=xe===void 0?1:xe,ne=n.wheelMultiplier,ye=ne===void 0?l!=null?l:1:ne,J=n.normalizeWheel,de=J!==void 0&&J;this.onVirtualScroll=function(j){var Fe=j.type,Te=j.inertia,Ae=j.deltaX,Ee=j.deltaY,We=j.event;if(!We.ctrlKey){var Pe=Fe==="touch",Ne=Fe==="wheel";if(!(i.options.gestureOrientation==="vertical"&&Ee===0||i.options.gestureOrientation==="horizontal"&&Ae===0||Pe&&i.options.gestureOrientation==="vertical"&&i.scroll===0&&!i.options.infinite&&Ee<=0||We.composedPath().find(function(et){return et==null||et.hasAttribute==null?void 0:et.hasAttribute("data-lenis-prevent")})))if(i.isStopped||i.isLocked)We.preventDefault();else{if(i.isSmooth=(i.options.smoothTouch||i.options.syncTouch)&&Pe||i.options.smoothWheel&&Ne,!i.isSmooth)return i.isScrolling=!1,void i.animate.stop();We.preventDefault();var Ye=Ee;i.options.gestureOrientation==="both"?Ye=Math.abs(Ee)>Math.abs(Ae)?Ee:Ae:i.options.gestureOrientation==="horizontal"&&(Ye=Ae);var mt=Pe&&i.options.syncTouch,_t=Pe&&Te&&Math.abs(Ye)>1;_t&&(Ye=i.velocity*i.options.touchInertiaMultiplier),i.scrollTo(i.targetScroll+Ye,$d({programmatic:!1},mt&&{lerp:_t?i.syncTouchLerp:.4}))}}},this.onScroll=function(){if(!i.isScrolling){var j=i.animatedScroll;i.animatedScroll=i.targetScroll=i.actualScroll,i.velocity=0,i.direction=Math.sign(i.animatedScroll-j),i.emit()}},s&&console.warn("Lenis: `direction` option is deprecated, use `orientation` instead"),o&&console.warn("Lenis: `gestureDirection` option is deprecated, use `gestureOrientation` instead"),l&&console.warn("Lenis: `mouseMultiplier` option is deprecated, use `wheelMultiplier` instead"),u&&console.warn("Lenis: `smooth` option is deprecated, use `smoothWheel` instead"),window.lenisVersion="1.0.13",f!==document.documentElement&&f!==document.body||(f=window),this.options={wrapper:f,content:p,wheelEventsTarget:y,smoothWheel:_,smoothTouch:A,syncTouch:T,syncTouchLerp:C,touchInertiaMultiplier:S,duration:L,easing:Y,lerp:G,infinite:K,gestureOrientation:Se,orientation:ae,touchMultiplier:ee,wheelMultiplier:ye,normalizeWheel:de},this.dimensions=new Hz(f,p),this.rootElement.classList.add("lenis"),this.velocity=0,this.isStopped=!1,this.isSmooth=_||A,this.isScrolling=!1,this.targetScroll=this.animatedScroll=this.actualScroll,this.animate=new Wz,this.emitter={events:{},emit:function(j){for(var Fe=this.events[j]||[],Te=0,Ae=Fe.length;Te<Ae;Te++)Fe[Te].apply(Fe,[].slice.call(arguments,1))},on:function(j,Fe){var Te,Ae=this;return(Te=this.events[j])!=null&&Te.push(Fe)||(this.events[j]=[Fe]),function(){var Ee;Ae.events[j]=(Ee=Ae.events[j])==null?void 0:Ee.filter(function(We){return Fe!==We})}}},this.options.wrapper.addEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll=new $z(y,{touchMultiplier:ee,wheelMultiplier:ye,normalizeWheel:de}),this.virtualScroll.on("scroll",this.onVirtualScroll)}var e=r.prototype;return e.destroy=function(){this.emitter.events={},this.options.wrapper.removeEventListener("scroll",this.onScroll,{passive:!1}),this.virtualScroll.destroy(),this.rootElement.classList.remove("lenis"),this.rootElement.classList.remove("lenis-smooth"),this.rootElement.classList.remove("lenis-scrolling"),this.rootElement.classList.remove("lenis-stopped")},e.on=function(t,i){return this.emitter.on(t,i)},e.off=function(t,i){var n;this.emitter.events[t]=(n=this.emitter.events[t])==null?void 0:n.filter(function(s){return i!==s})},e.setScroll=function(t){this.isHorizontal?this.rootElement.scrollLeft=t:this.rootElement.scrollTop=t},e.emit=function(){this.emitter.emit("scroll",this)},e.reset=function(){this.isLocked=!1,this.isScrolling=!1,this.velocity=0,this.animate.stop()},e.start=function(){this.isStopped=!1,this.reset()},e.stop=function(){this.isStopped=!0,this.animate.stop(),this.reset()},e.raf=function(t){var i=t-(this.time||t);this.time=t,this.animate.advance(.001*i)},e.scrollTo=function(t,i){var n=this,s=i===void 0?{}:i,o=s.offset,l=o===void 0?0:o,u=s.immediate,h=u!==void 0&&u,f=s.lock,m=f!==void 0&&f,p=s.duration,v=p===void 0?this.options.duration:p,y=s.easing,g=y===void 0?this.options.easing:y,_=s.lerp,b=_===void 0?!v&&this.options.lerp:_,A=s.onComplete,w=A===void 0?null:A,T=s.force,M=s.programmatic,C=M===void 0||M;if(!this.isStopped||T!==void 0&&T){if(["top","left","start"].includes(t))t=0;else if(["bottom","right","end"].includes(t))t=this.limit;else{var O,S;if(typeof t=="string"?S=document.querySelector(t):(O=t)!=null&&O.nodeType&&(S=t),S){if(this.options.wrapper!==window){var L=this.options.wrapper.getBoundingClientRect();l-=this.isHorizontal?L.left:L.top}var k=S.getBoundingClientRect();t=(this.isHorizontal?k.left:k.top)+this.animatedScroll}}if(typeof t=="number"){if(t+=l,t=Math.round(t),this.options.infinite?C&&(this.targetScroll=this.animatedScroll=this.scroll):t=pu(0,t,this.limit),h)return this.animatedScroll=this.targetScroll=t,this.setScroll(this.scroll),this.reset(),this.emit(),void(w==null||w());if(!C){if(t===this.targetScroll)return;this.targetScroll=t}this.animate.fromTo(this.animatedScroll,t,{duration:v,easing:g,lerp:b,onUpdate:function(Y,re){var G=re.completed;m&&(n.isLocked=!0),n.isScrolling=!0,n.velocity=Y-n.animatedScroll,n.direction=Math.sign(n.velocity),n.animatedScroll=Y,n.setScroll(n.scroll),C&&(n.targetScroll=Y),G&&(m&&(n.isLocked=!1),requestAnimationFrame(function(){n.isScrolling=!1}),n.velocity=0,w==null||w()),n.emit()}})}}},xb(r,[{key:"rootElement",get:function(){return this.options.wrapper===window?this.options.content:this.options.wrapper}},{key:"limit",get:function(){return this.isHorizontal?this.dimensions.limit.x:this.dimensions.limit.y}},{key:"isHorizontal",get:function(){return this.options.orientation==="horizontal"}},{key:"actualScroll",get:function(){return this.isHorizontal?this.rootElement.scrollLeft:this.rootElement.scrollTop}},{key:"scroll",get:function(){return this.options.infinite?(this.animatedScroll%(t=this.limit)+t)%t:this.animatedScroll;var t}},{key:"progress",get:function(){return this.limit===0?1:this.scroll/this.limit}},{key:"isSmooth",get:function(){return this.__isSmooth},set:function(t){this.__isSmooth!==t&&(this.rootElement.classList.toggle("lenis-smooth",t),this.__isSmooth=t)}},{key:"isScrolling",get:function(){return this.__isScrolling},set:function(t){this.__isScrolling!==t&&(this.rootElement.classList.toggle("lenis-scrolling",t),this.__isScrolling=t)}},{key:"isStopped",get:function(){return this.__isStopped},set:function(t){this.__isStopped!==t&&(this.rootElement.classList.toggle("lenis-stopped",t),this.__isStopped=t)}}]),r}();let uv;class qz{constructor(){U(this,"lenis");U(this,"isRender",!1);U(this,"option",{duration:1.2,easing:e=>Math.min(1,1.001-Math.pow(2,-10*e)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,wheelMultiplier:1,smoothTouch:!0,touchMultiplier:1,touchInertiaMultiplier:15});if(uv)return this;uv=this,this.on=this.on.bind(this)}setup(e=this.option){this.lenis||(this.lenis=new Xz(Object.assign(this.option,e)),this.lenis.on("scroll",this.on))}start(){!this.lenis||this.lenis.start()}stop(){!this.lenis||this.lenis.stop()}destroy(){this.isRender=!1,this.lenis&&(this.lenis.off("scroll",this.on),this.lenis.destroy(),this.lenis=null)}update(e){!this.lenis||this.lenis.raf(e)}scrollTo(e,t={}){this.lenis.scrollTo(e,t)}on(e){this.onScroll(e)}onScroll(e){}off(e="scroll",t=()=>{}){this.lenis.off(e,t)}}const Or=new qz;var Fu={exports:{}},ja=typeof Reflect=="object"?Reflect:null,hv=ja&&typeof ja.apply=="function"?ja.apply:function(e,t,i){return Function.prototype.apply.call(e,t,i)},Qc;ja&&typeof ja.ownKeys=="function"?Qc=ja.ownKeys:Object.getOwnPropertySymbols?Qc=function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Qc=function(e){return Object.getOwnPropertyNames(e)};function Yz(r){console&&console.warn&&console.warn(r)}var yb=Number.isNaN||function(e){return e!==e};function Tt(){Tt.init.call(this)}Fu.exports=Tt;Fu.exports.once=Jz;Tt.EventEmitter=Tt;Tt.prototype._events=void 0;Tt.prototype._eventsCount=0;Tt.prototype._maxListeners=void 0;var fv=10;function ku(r){if(typeof r!="function")throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof r)}Object.defineProperty(Tt,"defaultMaxListeners",{enumerable:!0,get:function(){return fv},set:function(r){if(typeof r!="number"||r<0||yb(r))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+r+".");fv=r}});Tt.init=function(){(this._events===void 0||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0};Tt.prototype.setMaxListeners=function(e){if(typeof e!="number"||e<0||yb(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this};function bb(r){return r._maxListeners===void 0?Tt.defaultMaxListeners:r._maxListeners}Tt.prototype.getMaxListeners=function(){return bb(this)};Tt.prototype.emit=function(e){for(var t=[],i=1;i<arguments.length;i++)t.push(arguments[i]);var n=e==="error",s=this._events;if(s!==void 0)n=n&&s.error===void 0;else if(!n)return!1;if(n){var o;if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var l=new Error("Unhandled error."+(o?" ("+o.message+")":""));throw l.context=o,l}var u=s[e];if(u===void 0)return!1;if(typeof u=="function")hv(u,this,t);else for(var h=u.length,f=Tb(u,h),i=0;i<h;++i)hv(f[i],this,t);return!0};function wb(r,e,t,i){var n,s,o;if(ku(t),s=r._events,s===void 0?(s=r._events=Object.create(null),r._eventsCount=0):(s.newListener!==void 0&&(r.emit("newListener",e,t.listener?t.listener:t),s=r._events),o=s[e]),o===void 0)o=s[e]=t,++r._eventsCount;else if(typeof o=="function"?o=s[e]=i?[t,o]:[o,t]:i?o.unshift(t):o.push(t),n=bb(r),n>0&&o.length>n&&!o.warned){o.warned=!0;var l=new Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(e)+" listeners added. Use emitter.setMaxListeners() to increase limit");l.name="MaxListenersExceededWarning",l.emitter=r,l.type=e,l.count=o.length,Yz(l)}return r}Tt.prototype.addListener=function(e,t){return wb(this,e,t,!1)};Tt.prototype.on=Tt.prototype.addListener;Tt.prototype.prependListener=function(e,t){return wb(this,e,t,!0)};function jz(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,arguments.length===0?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function Sb(r,e,t){var i={fired:!1,wrapFn:void 0,target:r,type:e,listener:t},n=jz.bind(i);return n.listener=t,i.wrapFn=n,n}Tt.prototype.once=function(e,t){return ku(t),this.on(e,Sb(this,e,t)),this};Tt.prototype.prependOnceListener=function(e,t){return ku(t),this.prependListener(e,Sb(this,e,t)),this};Tt.prototype.removeListener=function(e,t){var i,n,s,o,l;if(ku(t),n=this._events,n===void 0)return this;if(i=n[e],i===void 0)return this;if(i===t||i.listener===t)--this._eventsCount===0?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,i.listener||t));else if(typeof i!="function"){for(s=-1,o=i.length-1;o>=0;o--)if(i[o]===t||i[o].listener===t){l=i[o].listener,s=o;break}if(s<0)return this;s===0?i.shift():Zz(i,s),i.length===1&&(n[e]=i[0]),n.removeListener!==void 0&&this.emit("removeListener",e,l||t)}return this};Tt.prototype.off=Tt.prototype.removeListener;Tt.prototype.removeAllListeners=function(e){var t,i,n;if(i=this._events,i===void 0)return this;if(i.removeListener===void 0)return arguments.length===0?(this._events=Object.create(null),this._eventsCount=0):i[e]!==void 0&&(--this._eventsCount===0?this._events=Object.create(null):delete i[e]),this;if(arguments.length===0){var s=Object.keys(i),o;for(n=0;n<s.length;++n)o=s[n],o!=="removeListener"&&this.removeAllListeners(o);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if(t=i[e],typeof t=="function")this.removeListener(e,t);else if(t!==void 0)for(n=t.length-1;n>=0;n--)this.removeListener(e,t[n]);return this};function Mb(r,e,t){var i=r._events;if(i===void 0)return[];var n=i[e];return n===void 0?[]:typeof n=="function"?t?[n.listener||n]:[n]:t?Kz(n):Tb(n,n.length)}Tt.prototype.listeners=function(e){return Mb(this,e,!0)};Tt.prototype.rawListeners=function(e){return Mb(this,e,!1)};Tt.listenerCount=function(r,e){return typeof r.listenerCount=="function"?r.listenerCount(e):Eb.call(r,e)};Tt.prototype.listenerCount=Eb;function Eb(r){var e=this._events;if(e!==void 0){var t=e[r];if(typeof t=="function")return 1;if(t!==void 0)return t.length}return 0}Tt.prototype.eventNames=function(){return this._eventsCount>0?Qc(this._events):[]};function Tb(r,e){for(var t=new Array(e),i=0;i<e;++i)t[i]=r[i];return t}function Zz(r,e){for(;e+1<r.length;e++)r[e]=r[e+1];r.pop()}function Kz(r){for(var e=new Array(r.length),t=0;t<e.length;++t)e[t]=r[t].listener||r[t];return e}function Jz(r,e){return new Promise(function(t,i){function n(o){r.removeListener(e,s),i(o)}function s(){typeof r.removeListener=="function"&&r.removeListener("error",n),t([].slice.call(arguments))}Ab(r,e,s,{once:!0}),e!=="error"&&Qz(r,n,{once:!0})})}function Qz(r,e,t){typeof r.on=="function"&&Ab(r,"error",e,t)}function Ab(r,e,t,i){if(typeof r.on=="function")i.once?r.once(e,t):r.on(e,t);else if(typeof r.addEventListener=="function")r.addEventListener(e,function n(s){i.once&&r.removeEventListener(e,n),t(s)});else throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof r)}class Ol{constructor(e={}){U(this,"config",{root:null,rootMargin:"0px",threshold:[]});U(this,"instance");U(this,"list",[]);Object.assign(this.config,e);const t=[],i=0;for(let n=1;n<=i;n++){let s=n/i;t.push(s)}t.push(0),this.config.threshold=t,this.instance=new IntersectionObserver((n,s)=>{this.onUpdate(n,s)},this.config)}add(e,t=(i,n)=>{}){this.instance.observe(e),e._toggleFn=t}remove(e){this.instance.unobserve(e)}kill(){this.instance.disconnect(),delete this.instance}onUpdate(e,t){e.forEach(i=>{let n=i.target;n._toggleFn(i.isIntersecting,i),i.isIntersecting?n.classList.add("in-view"):n.classList.remove("in-view")})}}const $p=class extends Fu.exports.EventEmitter{constructor(t){super();U(this,"observer");U(this,"inview",!1);U(this,"name","");U(this,"dom",null);U(this,"rect",null);U(this,"speed",1);U(this,"offsetTop",0);U(this,"offsetLeft",0);U(this,"scroll",{x:0,y:0});U(this,"x",0);U(this,"y",0);U(this,"z",0);U(this,"_x",0);U(this,"_y",0);U(this,"_z",0);U(this,"unit",{x:"px",y:"px",z:"px"});U(this,"scale",1);U(this,"ratioX",0);U(this,"ratioY",0);U(this,"ratio",{x:0,y:0,yClamp:0,allYClamp:0,allX:0,allY:0,r:0,inR:0,inRIn:0});this.dom=t,this.observer=new Ol,this.observer.add(t,i=>{this.inview=i,this.emit($p.EVENT_INTERSECTION,{inview:i,rect:t.getBoundingClientRect()})}),this.resize()}kill(){this.observer.remove(this.dom),this.observer.kill()}update(t=0,i=0){let n=this.dom.getBoundingClientRect();this.rect=n,this.ratio.allX=n.right/(n.width+window.innerWidth),this.ratio.allX>-.5&&this.ratio.allX<1.5&&(this.scroll.x=this.offsetLeft-i,this.scroll.y=this.offsetTop-t,this.ratio.x=this.scroll.x/window.innerWidth,this.ratio.y=1-this.scroll.y/window.innerHeight,this.ratio.allY=1-(this.scroll.y+this.rect.height)/(window.innerHeight+this.rect.height),this.ratio.r=n.right/n.width,this.ratio.inR=(n.right-window.innerWidth)/n.width,this.ratio.inRIn=(n.right-window.innerWidth)/(n.width-window.innerWidth),this.ratio.allYClamp=Math.min(1,Math.max(0,this.ratio.allY)),this.ratio.yClamp=Math.min(1,Math.max(0,this.ratio.y)))}resize(t=0,i=0){this.rect=this.dom.getBoundingClientRect(),this.offsetLeft=this.rect.right+i-window.innerWidth,this.offsetTop=this.rect.top+t}};let Ut=$p;U(Ut,"EVENT_INTERSECTION","eventIntersection");const dv=[[{x:11.12174356717637,y:-100},{x:519.7224555053285,y:41.5},{x:656.941981298241,y:183},{x:122.6058038929042,y:324.5},{x:819.3268908080352,y:466},{x:145.20534515890105,y:607.5},{x:72.36757673223762,y:749},{x:1238.7536506113447,y:890.5},{x:953.8499877761415,y:-100},{x:1561.0768475519794,y:41.5}],[{x:49.37773210859043,y:-100},{x:692.4518998105613,y:41.5},{x:685.3258069504622,y:183},{x:7.810547816002063,y:324.5},{x:982.3980836386556,y:466},{x:351.39880880255015,y:607.5},{x:1147.1003824551333,y:749},{x:963.8405128479264,y:890.5},{x:983.5972756806607,y:-100},{x:1655.2546046913926,y:41.5}],[{x:1370.7215243183905,y:-100},{x:518.8836367417357,y:41.5},{x:682.7142116881708,y:183},{x:1183.0823460740594,y:324.5},{x:512.1368954995544,y:466},{x:1205.9848924845676,y:607.5},{x:145.77695815516878,y:749},{x:424.89378864374254,y:890.5},{x:77.62435856957292,y:-100},{x:1852.0741675375748,y:41.5}],[{x:1011.619709309391,y:-100},{x:575.3611633982657,y:41.5},{x:4.894851716383034,y:183},{x:1151.2884265500725,y:324.5},{x:855.1020580916073,y:466},{x:113.26494732655753,y:607.5},{x:863.7453606200735,y:749},{x:366.03759106662454,y:890.5},{x:772.0360050486048,y:-100},{x:1345.3597377140352,y:41.5}],[{x:183.10480070143316,y:41.5},{x:609.5813734397615,y:749},{x:39.52533439229027,y:466},{x:1603.3924737418113,y:607.5},{x:457.8066697954194,y:749},{x:689.3584166403955,y:890.5},{x:974.4813441362415,y:183},{x:1053.9895828458004,y:-100},{x:773.5890157821249,y:324.5},{x:163.70110679993425,y:183}],[{x:1140.833883340614,y:-100},{x:25.107470839269318,y:183},{x:120.03959733473455,y:890.5},{x:656.4895697064976,y:607.5},{x:657.5218539566486,y:-100},{x:392.0932879460837,y:607.5},{x:356.50865179850183,y:749},{x:815.1607302387656,y:466},{x:495.83602782973054,y:183},{x:932.9575932666561,y:183}],[{x:133.87553052767757,y:466},{x:1067.4509074492453,y:607.5},{x:92.85381124281737,y:-100},{x:649.1218946206442,y:749},{x:632.4068220651541,y:890.5},{x:464.03104292274094,y:41.5},{x:74.2221148075343,y:324.5},{x:1294.1001165124726,y:-100},{x:826.6047604818259,y:41.5},{x:1500.810654773105,y:324.5}]];class e4{constructor(e){U(this,"progress",0);U(this,"container");U(this,"items");U(this,"stageSize",{width:2200,height:1132});U(this,"moveOffset",{from:.5,to:1});U(this,"random",!1);this.container=e;let t=e.getAttribute("data-offset");t&&(t=t.split(" "),this.moveOffset.from=Number(t[0]),this.moveOffset.to=Number(t[1])),this.random=e.getAttribute("data-random")!==null,this.container.getBoundingClientRect(),this.container.style.setProperty("width",this.stageSize.width+"px"),this.items=Array.from(e.querySelectorAll("[data-cloud]")).map((n,s)=>{let o=Number(n.getAttribute("x")),l=Number(n.getAttribute("y"));Number(n.getAttribute("width")),Number(n.getAttribute("height")),o/this.stageSize.width,l/this.stageSize.height;let u={dom:n,x:o,y:l,z:1,width:Number(n.getAttribute("width"))*1,height:Number(n.getAttribute("height"))*1,vx:0};return u.dom.style.width=u.width+"px",u.dom.style.height=u.height+"px",u}),this.items.map(n=>{n.vx=n.width*Math.random()*3});const i=(n=null)=>{let s=8;this.items.forEach((o,l)=>{if(n)o.x=n[l].x,o.y=n[l].y;else{let u=Math.floor((l+Math.random()*s)%s),h=Number(o.dom.getAttribute("width")),f=Math.random()*(this.stageSize.width-h),m=u*this.stageSize.height/s-100;o.x=f,o.y=m}})};if(this.random){let n=dv[Math.floor(Math.random()*dv.length)];i(n)}window.addEventListener("resize",this.resize.bind(this)),this.resize()}resize(){let e=window.innerHeight/this.stageSize.height+.3;this.container.style.setProperty("--scale",e+"")}update(e){this.progress=e,this.items.forEach((t,i)=>{let n=-t.vx*this.moveOffset.from+t.vx*this.moveOffset.to*e,s=t.y,o=t.z;n=t.x+n,t.dom.style.transform=`translate3d(${n}px, ${s}px,${o}px)`})}}class t4{constructor(){U(this,"wrap");U(this,"wrapInner");U(this,"svgs");U(this,"clouds");U(this,"progress",0);U(this,"scale",1);U(this,"size",{width:2599,height:1166});this.wrap=document.querySelector('[x-ref="introCloud"]'),this.wrapInner=this.wrap.querySelector(".intro-cloud__inner"),this.clouds=this.wrap.querySelectorAll("img"),this.clouds.forEach(e=>{let t=Number(e.getAttribute("x")),i=Number(e.getAttribute("y")),n=Number(e.getAttribute("width")),s=Number(e.getAttribute("height"));t/this.size.width,i/this.size.height;let o=Math.random()>.5?1:-1;e.setAttribute("data-dir",o+"");let l=e.parentNode;l.style.setProperty("left",t+"px"),l.style.setProperty("top",i+"px"),l.style.setProperty("width",n+"px"),l.style.setProperty("height",s+"px")}),this.wrapInner.style.setProperty("width",this.size.width+"px"),this.wrapInner.style.setProperty("height",this.size.height+"px"),this.resize=this.resize.bind(this),this.resize(),window.addEventListener("resize",this.resize)}remove(){window.removeEventListener("resize",this.resize),this.wrap.remove()}hide(){mn.to(this,{progress:1,ease:"Power2.easeInOut",duration:1.5,overwrite:!0,onUpdate:()=>{this.update()}})}show(){mn.to(this,{progress:0,ease:"Power2.easeInOut",duration:2,overwrite:!0,onUpdate:()=>{this.update()}})}setGui(){let e=Ht.addFolder("introCloud");e.add(this,"progress",0,1,.01).onChange(()=>{this.update()}),e.add({hide:()=>this.hide()},"hide"),e.add({show:()=>{mn.to(this,{progress:0,ease:"Power2.easeInOut",duration:2,overwrite:!0,onUpdate:()=>{this.update()}})}},"show"),e.add(this,"remove")}resize(){this.wrapInner.getBoundingClientRect();let t=this.wrap.querySelector("svg").getBoundingClientRect(),i=window.innerWidth/t.width,n=window.innerHeight/t.height,s=.3;window.innerWidth<1600&&(s=0);let o=Math.max(i,n)+s;this.scale=o,this.wrapInner.style.setProperty("--scale",o+""),this.wrap.querySelector("svg").style.setProperty("--scale",o+"")}update(e=this.progress){this.progress=e,this.clouds.length,this.clouds.forEach((t,i)=>{let n=Number(t.getAttribute("x")),s=Number(t.getAttribute("width")),o=this.size.width*.5,l=n+s*.5<o?-1:1,u=t.parentNode,h=n;l==1&&(h=n),h=this.size.width*2+n+(1-Math.min(1,s/1e3))*this.size.width*7,h*=.5,n!==null&&(u.style.transform=`translate3d(${l*h*.3*e}px,0,${e*500*2+i*1*e}px)`)})}move(){}}class i4{constructor(e){U(this,"content");U(this,"screen");U(this,"hand");U(this,"mouse");U(this,"wrap");U(this,"texts");U(this,"svgPath");this.content=e.querySelectorAll(".guide-content"),this.screen=e.querySelectorAll(".guide-screen"),this.hand=e.querySelector(".guide-hand"),this.mouse=e.querySelector(".guide-mouse"),this.texts=e.querySelectorAll(".guide-texts span"),this.wrap=e,e.style.setProperty("display","flex")}async show(){await Pn(10),this.wrap.classList.remove("is-hide"),this.content.forEach(e=>{e.classList.add("is-active")}),this.screen.forEach(e=>{e.classList.add("is-active")}),this.hand.classList.add("is-active"),this.mouse.classList.add("is-active"),await Pn(20),this.texts.forEach((e,t)=>{setTimeout(()=>{e.classList.add("is-active")},t*40)}),await Pn(550),this.content.forEach(e=>{e.classList.add("animOn")}),this.hand.classList.add("animOn"),this.mouse.classList.add("animOn")}async hide(){this.wrap.classList.add("is-hide"),await Pn(500),this.content.forEach(e=>{e.classList.remove("is-active")}),this.screen.forEach(e=>{e.classList.remove("is-active")}),this.hand.classList.remove("is-active"),this.mouse.classList.remove("is-active"),this.content.forEach(e=>{e.classList.remove("animOn")}),this.hand.classList.remove("animOn"),this.mouse.classList.remove("animOn"),this.texts.forEach((e,t)=>{e.classList.remove("is-active")})}remove(){this.wrap.remove()}}const Jf={name:"IndigoCache",check:function(r=this.name){let e=localStorage.getItem(r),t=!1;return e===null||e==="false"?localStorage.setItem(r,"false"):t=!0,t},set:function(r=this.name,e="true"){localStorage.setItem(r,e)},delete:function(r=this.name){localStorage.removeItem(r)}};class n4{constructor(){U(this,"list",[]);const e=new Ol;document.querySelectorAll("[data-parax]").forEach(t=>{let i={el:t,child:t.children[0],x:0,y:0,id:Number(t.getAttribute("data-parax-id")),isIn:!1,offsetX:50};this.list.push(i),e.add(t,s=>{i.isIn=s,s?t.classList.add("is-in"):t.getBoundingClientRect().right<0&&t.classList.remove("is-in")});let n=t.getAttribute("data-parax-delay")||0;t.getAttribute("data-parax-x"),t.style.setProperty("--delay",n+"s")})}update(e){}translate(e,t,i,n){e.style.transform=`translate3d(${t}px, ${i}px,${n}px)`}resize(e){this.list.forEach(({el:t,x:i,y:n},s)=>{let o=t.getBoundingClientRect();this.list[s].x=e-o.right})}}class r4{constructor(){U(this,"progress",0);U(this,"wrap");U(this,"wrapInner");U(this,"labels");U(this,"offset",{startDegree:30});U(this,"width",100);U(this,"height",100);U(this,"radius",100);U(this,"rad",100);let e=document.querySelector("[x-ref=scene04FixedContent]");this.wrap=document.querySelector("#colorful"),this.wrapInner=document.querySelector("[x-ref='colorfulInner']"),this.labels=this.wrap.querySelectorAll(".colorful-label"),this.width=1637,this.height=this.wrap.clientHeight,this.radius=this.width*.5,this.rad=360/this.labels.length*Math.PI/180,this.labels.forEach((t,i)=>{let n=ns(t,"width"),s=ns(t,"height"),o=t.querySelector("img"),l=ns(o,"width"),u=ns(o,"height");o.style.width=l/n*100+"%",o.style.height=u/s*100+"%",t.style.width=n/this.width*100+"%",t.style.height=s/this.height*100+"%"}),e.classList.add("ready"),this.resize=this.resize.bind(this),window.addEventListener("resize",this.resize),this.updatePosition(),this.setGui()}resize(){this.width=this.wrapInner.clientWidth,this.height=this.wrapInner.clientHeight,this.radius=this.width*.5,this.updatePosition(),window.innerWidth<720?this.offset.startDegree=0:this.offset.startDegree=15}setGui(){let e=Ht.addFolder("colorful");e.close(),e.add(this.offset,"startDegree",-360,360,.1).onChange(()=>{this.updatePosition()}),e.add(this,"progress",0,1,.1).listen().onChange(()=>{this.updatePosition()})}update(e=0){this.progress=e,this.updatePosition()}updatePosition(){let e=Math.PI/180,t=this.offset.startDegree*e,i=this.progress*360*e;360/this.labels.length,this.labels.forEach((n,s)=>{let o=t+this.rad*s,l=this.radius*Math.cos(t+o+i)+this.radius,u=this.radius*Math.sin(t+o+i)+this.radius;n.style.transform=`translate3d(${l}px,${u}px,0px) scale(${Math.abs(1)})`})}updateOpacity(e=0){this.labels.forEach((t,i)=>{t.style.opacity=`${e}`})}}class s4{constructor(e,t){U(this,"domRect",{});U(this,"dom",null);U(this,"position",{x:0,y:0,z:0,rx:0,ry:0});U(this,"offset",{x:0,y:0,z:0,rx:0,ry:0,init:function(){this.x=0,this.y=0,this.z=0,this.rx=0,this.ry=0}});U(this,"config",{powerX:.5,powerY:.5,powerZ:1.5,powerRX:25,powerRY:25,speed:.05,returnDuration:1,returnEase:"Elastic.easeOut",z:50});U(this,"size",{w:40,h:40});U(this,"power",1.5);U(this,"ticking",!1);U(this,"gsap",null);this.dom=e,this.config=Object.assign(this.config,t),this.animation=this.animation.bind(this),this.onResize=this.onResize.bind(this),this.onMove=this.onMove.bind(this),this.onMouseover=this.onMouseover.bind(this),this.onMouseout=this.onMouseout.bind(this),e.addEventListener("mouseenter",this.onMouseover),e.addEventListener("mouseleave",this.onMouseout),window.addEventListener("resize",this.onResize),this.onResize()}onMouseover(e){this.startMove()}onMouseout(e){this.stopMove()}onResize(){this.domRect=this.dom.getBoundingClientRect(),this.size.w=this.domRect.width*.5,this.size.h=this.domRect.height*.5}startMove(){this.onResize(),this.dom.addEventListener("mousemove",this.onMove),this.offset.z=this.config.z,this.gsap&&this.gsap.kill(),this.ticking||(requestAnimationFrame(this.animation),this.ticking=!0)}stopMove(){this.dom.removeEventListener("mousemove",this.onMove),this.offset.init(),this.ticking=!1,this.gsap=mn.to(this.position,{duration:this.config.returnDuration,x:0,y:0,z:0,rx:0,ry:0,ease:this.config.returnEase,onUpdate:()=>{this.animation(),this.move3d()}})}onMove(e){this.offset.x=e.offsetX-this.size.w,this.offset.y=e.offsetY-this.size.h,this.offset.ry=-(this.offset.x/this.size.w)*this.config.powerRY,this.offset.rx=this.offset.y/this.size.h*this.config.powerRX}animation(){if(this.ticking)requestAnimationFrame(this.animation);else return;this.position.x+=(this.offset.x*this.config.powerX-this.position.x)*this.config.speed,this.position.y+=(this.offset.y*this.config.powerY-this.position.y)*this.config.speed,this.position.z+=(this.offset.z*this.config.powerZ-this.position.z)*this.config.speed,this.position.rx+=(this.offset.rx-this.position.rx)*this.config.speed,this.position.ry+=(this.offset.ry-this.position.ry)*this.config.speed,this.move3d()}move3d(e=this.dom){let t=this.position;this.dom.style.transform=`perspective(1000px) translate3d(${t.x}px, ${t.y}px, ${t.z}px) rotateX(${-t.rx}deg) rotateY(${-t.ry}deg)`}}class a4{constructor(e,t=0){U(this,"progress");U(this,"path");U(this,"length");U(this,"dashOffset");U(this,"dashArray");U(this,"tweener");U(this,"tweenOption",{});this.progress=t,this.path=e,this.length=e.getTotalLength(),this.dashOffset=this.length,this.dashArray=this.length,this.tweener,this.tweenOption={duration:1.2,delay:0,ease:"Power4.easeInOut",onUpdate:()=>{this.update()},onComplete:()=>{}},this.update(this.progress)}update(e=this.progress){this.progress=e,this.path.style.strokeDashoffset=`${this.dashOffset*this.progress}`,this.path.style.strokeDasharray=`${this.dashArray}px ${this.dashArray}px`}fromTo(e,t,i={}){i=Object.assign({...this.tweenOption},i),this.tweener&&this.tweener.kill(),this.progress=e,this.update(),i.progress=t,i.onUpdate=()=>{this.update()},this.tweener=mn.to(this,i)}to(e,t={}){t=Object.assign({...this.tweenOption},t),this.tweener&&this.tweener.kill(),t.progress=e,this.tweener=mn.to(this,t)}}class o4{constructor(){U(this,"clouds",[]);U(this,"cloudsScene04",[]);U(this,"cloudsScene04Offset",{progress:0});document.querySelectorAll(".scene-clouds").forEach(e=>{let t=e.getAttribute("data-cloud-scene")=="04",i=Number(e.getAttribute("data-sw")),n=Number(e.getAttribute("data-sh"));e.querySelectorAll("img").forEach(s=>{let o=ns(s,"width"),l=ns(s,"height"),u=ns(s,"left"),h=ns(s,"top"),f=o/i*100+"%";window.innerWidth<720&&(h-=70),s.style.left=u/i*100+"%",s.style.top=h/n*100+"%",s.style.aspectRatio=`${o}/${l}`,s.style.width=f,s.style.height="auto";let m=new Ut(s);t?this.cloudsScene04.push(m):this.clouds.push(m)})}),this.updateScene04()}update(){this.clouds.forEach(e=>{if(e.inview){e.update();let t=e.ratio.allX,i=e.rect.width/1920;window.innerWidth<720&&(i=i*.5);let n=50+i*50;e.dom.style.transform=`translate3d(${-n*.5+t*n}%, 0, 0)`}})}updateScene04(e=0){this.cloudsScene04.forEach(t=>{t.update(),t.rect.width/1920,this.cloudsScene04Offset.progress+=(e-this.cloudsScene04Offset.progress)*.1,this.cloudsScene04Offset.progress*100-100,e>1?t.dom.style.opacity=`${1-e}`:t.dom.style.opacity=`${e}`})}}class l4{constructor(){U(this,"renderer",null);U(this,"isRender",!1);U(this,"count",null);U(this,"smoothScroll");window.autoScroll=this}start(e=10){this.isRender&&this.stop(),this.isRender=!0;const t=()=>{window.scrollTo(0,window.scrollY+e),this.smoothScroll.scroll>=this.smoothScroll.limit&&this.stop(),this.isRender&&(this.renderer=requestAnimationFrame(t))};t()}stop(){this.isRender=!1,cancelAnimationFrame(this.renderer)}}const eu=()=>{const r=document.documentElement.clientHeight*.01;document.documentElement.style.setProperty("--vh",`${r}px`),window.dispatchEvent(new Event("scroll"))};function Xs(r=!0){r?(Or.start(),document.body.style.removeProperty("overflow")):(Or.stop(),document.body.style.setProperty("overflow","hidden"))}const vi={min:0,max:0,x:0,ratioByVetical:1,oldX:-1},c4=()=>({async init(){let r=new l4,e=new t4,t=new Date,i;Jf.check()||(i=new i4(document.querySelector('[x-ref="guide"]')),i.show());let n=new n4,s=new Gz(this.$refs.indigoWorld);this.$watch("$store.status.menuOpen",J=>{this.$nextTick(()=>{})}),window.addEventListener("load",eu),history.scrollRestoration&&(history.scrollRestoration="manual");let o=document.querySelectorAll("[data-clouds]"),l=[];o.forEach(J=>{l.push(new e4(J))}),document.querySelectorAll(".data-external-button-wrap a, .c-button-modal").forEach(J=>{new s4(J,{z:100,returnDuration:2})}),document.querySelectorAll("[data-external-button]").forEach(J=>{let de=document.querySelector("path"),j=new a4(de);J.addEventListener("mouseenter",()=>{j.update(1)}),J.addEventListener("mouseleave",()=>{j.update(0)})});let u=new o4,h=new Ol;document.querySelectorAll(".c-button-modal,.data-external-button-wrap").forEach(J=>{let de=J.querySelector(".c-button-modal__inner"),j=2;de||(de=J,j=1.5),mn.set(de,{opacity:0,scale:j}),h.add(J,Fe=>{Fe?mn.to(de,{overwrite:!0,opacity:1,duration:3,delay:.1,scale:1,ease:"Elastic.easeOut"}):mn.set(de,{overwrite:!0,opacity:0,scale:j})})}),document.querySelectorAll(".scene-logo-bg, .c-text-anim, .stamp, .stamp-square, .sentence-label, .scene-label").forEach(J=>{h.add(J,(de,j)=>{de?J.classList.add("is-view"):j.boundingClientRect.right<window.innerWidth*.5&&J.classList.remove("is-view")})});let m=new r4,p=document.querySelector("[x-ref='colorfulInner']");const v=this.$refs.vScroll,y=this.$refs.mainContent,g=this.$refs.mainContentInner,_=this.$refs.scene01,b=this.$refs.scene04FixedContent,A=this.$refs.scene04Label,w=this.$root.querySelectorAll("[data-scene-part]");this.$refs.scene04;let T={intro:new Ut(this.$refs.sceneIntro),scene01:new Ut(this.$refs.scene01),scene01Title:new Ut(this.$refs.scene01Title),scene02Start:new Ut(this.$refs.scene02Start),scene02:new Ut(this.$refs.scene02),scene0201:new Ut(this.$refs.scene0201),scene04:new Ut(this.$refs.scene04),scene04Start:new Ut(this.$refs.scene04Start),scene04End:new Ut(this.$refs.scene04End),scene0502:new Ut(this.$refs.scene0502),sceneLast:new Ut(this.$refs.sceneLast),cloud1:new Ut(o[0]),cloud2:new Ut(o[1])};T.scene02Start.on(Ut.EVENT_INTERSECTION,J=>{J.inview?(s.setSceneTransitionActive(!0),s.setInsideTexture(0),s.sceneViewCheck.scene2=!0):(s.sceneViewCheck.scene2=!1,J.rect.right<window.innerWidth*.5?(s.setSceneTransitionActive(!1),s.sceneViewCheck.scene2=!1,s.sceneViewCheck.scene1=!0):s.sceneViewCheck.scene2=!0)}),T.scene0201.on(Ut.EVENT_INTERSECTION,J=>{J.inview?(s.setInsideTexture(1),s.setSceneTransitionActive(!1),s.sceneViewCheck.scene1=!1,s.sceneViewCheck.scene2=!0):J.rect.right<window.innerWidth*.5&&(s.setInsideTexture(0),s.setSceneTransitionActive(!0),s.sceneViewCheck.scene1=!0)}),T.scene0502.on(Ut.EVENT_INTERSECTION,J=>{J.inview?(s.setInsideTexture(2),s.setSceneTransitionActive(!0),s.sceneViewCheck.scene2=!0,s.sceneViewCheck.scene3=!0):J.rect.right<window.innerWidth*.5?(s.setInsideTexture(1),s.setSceneTransitionActive(!1),s.sceneViewCheck.scene3=!1):(s.setSceneTransitionActive(!1),s.sceneViewCheck.scene2=!1)}),T.scene04Start&&T.scene04Start.on(Ut.EVENT_INTERSECTION,J=>{J.inview?(b.classList.add("inview"),m.resize()):J.rect.right<window.innerWidth*.5&&b.classList.remove("inview")}),T.scene04End&&T.scene04End.on(Ut.EVENT_INTERSECTION,J=>{J.inview?(b.classList.add("inview"),m.resize()):J.rect.right>window.innerWidth/2&&b.classList.remove("inview")}),w.forEach(J=>{let de=J.getAttribute("data-cam-path").split("_").map(Ae=>Ae=="s"?0:Ae=="e"?Number(_.getAttribute("data-cam-path-total")):Number(Ae)),j=de[1]-de[0],Fe=1,Te=J.getAttribute("data-range-ratio");if(Te&&(Fe=Number(Te)),J.getAttribute("data-not-sync-range")===null){let Ae=2;(ji.isMobile||ji.isIpad)&&(Ae=1),J.style.setProperty("width",j*Ae*Fe+"px")}}),Or.setup(),r.smoothScroll=Or.lenis,Xs(!1);let M=!1,C=null,O=!1;window.addEventListener("mouseup",J=>{M=!1,O=!1}),window.addEventListener("mousedown",J=>{O=!0,C&&clearTimeout(C),J.target==document.documentElement&&(M=!0)}),window.addEventListener("resize",()=>{S()}),window.addEventListener("scroll",()=>{S()});function S(){M||(M=!0,C&&clearTimeout(C),C=setTimeout(()=>{O||(M=!1)},1e3))}function L(J){Or.update(J),(se.isScrolling||M)&&xe(),s&&s.render(),requestAnimationFrame(L)}requestAnimationFrame(L),n.resize(vi.x);let k=K(_),Y=T.scene02,G=this.$refs.scene01FixedContent.querySelectorAll("p"),V=!1;function K(J){let de=J.querySelectorAll("[data-scene-part]"),j=Number(J.getAttribute("data-cam-path-total"));return{dom:J,ceneCl:s.scenes[0],progress:0,partsProgress:[],parts:de,camPathTotal:j,partsCamPathRangeRatio:Array.from(de).map(Fe=>{let Te=Fe.getAttribute("data-cam-path").split("_"),Ae=Te[0]=="s"?0:Te[0],Ee=Te[1]=="e"?j:Te[1];return Ae=Number(Ae),Ee=Number(Ee),(Ee-Ae)/j}),scrollTargets:Array.from(de).map(Fe=>new Ut(Fe)),update:function(Fe=0,Te=0){this.progress=0,this.scrollTargets.forEach((Ae,Ee)=>{Ae.update(Te,Fe);let We=tr(Ae.ratio.r);this.partsProgress[Ee]=We,this.progress+=We*this.partsCamPathRangeRatio[Ee]})}}}Or.onScroll=({scroll:J,limit:de,velocity:j,direction:Fe,progress:Te})=>{};let se=Or.lenis,ae={x:0,rotP:0},te=window.innerWidth,Se=0;function xe(){if(!s.loadStatus.isDone)return;vi.x=se.progress*vi.max,g.style.transform=`translate3d(${vi.x}px, 0, 0)`,vi.oldX=vi.x,u&&u.update();for(let Pe in T)T[Pe].update(scroll,vi.x);let J=tr(T.intro.ratio.inR);s.unfoldMaki(J);let de=T.cloud1.ratio.allX;de>-.2&&de<1.2&&l[0].update(de);let j=T.cloud2.ratio.allX;j>-.2&&j<1.2&&l[1].update(j),k&&k.update(se.scroll,vi.x),s.updateScene(0,k.progress,k.partsProgress);let Fe=k.partsProgress[1],Te=k.partsProgress[2];Fe<.5||Te>=.3?V&&(V=!1,G.forEach((Pe,Ne)=>{Pe._timer&&clearTimeout(Pe._timer),Pe._timer=setTimeout(()=>{Pe.classList.remove("on")},Ne*100+100)})):V||(V=!0,G.forEach((Pe,Ne)=>{Pe._timer&&clearTimeout(Pe._timer),Pe._timer=setTimeout(()=>{Pe.classList.add("on")},Ne*100+100)}));let Ae=T.scene02Start;if(Ae.inview)Se=tr(Ae.ratio.r),s.updateSceneTransition(Se),Se<1&&s.scenes[0].updateLastScene(Ae.ratio.allX);else{let Pe=s.scenes[0];Pe.endProgress<0&&Ae.ratio.allX<0&&(Pe.updateLastScene(0),s.updateSceneTransition(0),s.sceneViewCheck.scene1=!0,s.sceneViewCheck.scene2=!1)}if(Y.inview&&s.scenes[1].updateScroll(Y.ratio.allX,Y.rect.right),T.scene04.inview||T.scene04End.inview){let Pe=T.scene04Start,Ne=T.scene04End,Ye=1,mt=0,_t=1,et=0,xt=.4;if(Pe){let ft=te<768?te*.5:1e3;mt=tr(Pe.rect.right/ft),_t=mt}Ne.inview&&(Ne.ratio.r,Ye=1-tr(Ne.rect.right/Ne.rect.width),mt=Ye,_t=Ye),et=Pe.ratio.inR,(et<0||et<1)&&(xt=.2),ae.rotP+=(et-ae.rotP)*xt,A.style.opacity=mt+"",m.update(ae.rotP),m.updateOpacity(_t),u.updateScene04(_t)}!T.scene04.inview&&!T.scene04End.inview&&b.classList.remove("inview");let Ee=T.scene0502;if(Ee&&Ee.rect.right<0&&s.scenes[2].update(0),Ee.inview){let Pe=Ee.rect.right/(Ee.rect.width+Ve.width*.5),Ne=tr(Ee.rect.right/(Ve.width*1.5));s.updateSceneTransition(1-Ne),Pe=tr(Pe),s.scenes[2].update(Pe)}let We=T.sceneLast;if(We.inview){let Pe=tr(We.rect.right/We.rect.width);s.maki.lastUpdate(Pe),tr(We.ratio.r)}else s.maki.lastUpdate(0)}const ee=()=>{const J=g.offsetWidth;vi.max=J-window.innerWidth+0,vi.ratioByVetical=(vi.max-window.innerHeight)/vi.max,v.style.height=vi.max+"px",b.getBoundingClientRect().right-p.getBoundingClientRect().right};s.addResizeList("app",()=>{eu(),ee();let J=Ve.height-Ve.marginHeight+"px";y.style.height=J,g.style.height=J,n.resize(vi.x)}),ee(),eu(),await s.setup(),s.resize(!0),s.sceneViewCheck.scene3=!0;let ne=new Date;ne=ne-t;let ye=this.$store.sitemenu.hashCheck();Jf.check()||ne<1e3&&await Pn(1500),i&&i.hide(),await Pn(500),s.showFirst(),e.hide(),Jf.set(),await Pn(500),ye||Xs(!0),await Pn(500),e.remove(),s.resize(!0),i&&i.remove(),ye&&(Xs(!0),this.$store.sitemenu.hashMove()),await Pn(1e3),s.sceneViewCheck.scene3=!1}}),u4=()=>({init(){}});function mu(r,e,t){return Math.max(e,Math.min(t,r))}function Cb(r,e={}){r.focus(e),document.activeElement!==r&&(r.tabIndex=-1,r.focus(e))}var Sl={exports:{}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(r,e){(function(){var t,i="4.17.21",n=200,s="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",o="Expected a function",l="Invalid `variable` option passed into `_.template`",u="__lodash_hash_undefined__",h=500,f="__lodash_placeholder__",m=1,p=2,v=4,y=1,g=2,_=1,b=2,A=4,w=8,T=16,M=32,C=64,O=128,S=256,L=512,k=30,Y="...",re=800,G=16,V=1,K=2,se=3,ae=1/0,te=9007199254740991,Se=17976931348623157e292,xe=0/0,ee=4294967295,ne=ee-1,ye=ee>>>1,J=[["ary",O],["bind",_],["bindKey",b],["curry",w],["curryRight",T],["flip",L],["partial",M],["partialRight",C],["rearg",S]],de="[object Arguments]",j="[object Array]",Fe="[object AsyncFunction]",Te="[object Boolean]",Ae="[object Date]",Ee="[object DOMException]",We="[object Error]",Pe="[object Function]",Ne="[object GeneratorFunction]",Ye="[object Map]",mt="[object Number]",_t="[object Null]",et="[object Object]",xt="[object Promise]",ft="[object Proxy]",Xt="[object RegExp]",St="[object Set]",N="[object String]",D="[object Symbol]",le="[object Undefined]",oe="[object WeakMap]",_e="[object WeakSet]",fe="[object ArrayBuffer]",Le="[object DataView]",F="[object Float32Array]",q="[object Float64Array]",be="[object Int8Array]",me="[object Int16Array]",Ce="[object Int32Array]",ke="[object Uint8Array]",Ue="[object Uint8ClampedArray]",it="[object Uint16Array]",at="[object Uint32Array]",bt=/\b__p \+= '';/g,$=/\b(__p \+=) '' \+/g,ue=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Me=/&(?:amp|lt|gt|quot|#39);/g,Ie=/[&<>"']/g,Ge=RegExp(Me.source),vt=RegExp(Ie.source),Zt=/<%-([\s\S]+?)%>/g,ui=/<%([\s\S]+?)%>/g,Zn=/<%=([\s\S]+?)%>/g,Rt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,In=/^\w*$/,Vi=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ta=/[\\^$.*+?()[\]{}|]/g,Uu=RegExp(ta.source),_o=/^\s+/,Bu=/\s/,I=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Q=/\{\n\/\* \[wrapped with (.+)\] \*/,he=/,? & /,Z=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,pe=/[()=,{}\[\]\/\s]/,He=/\\(\\)?/g,je=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Je=/\w*$/,nt=/^[-+]0x[0-9a-f]+$/i,gt=/^0b[01]+$/i,lt=/^\[object .+?Constructor\]$/,ct=/^0o[0-7]+$/i,Gt=/^(?:0|[1-9]\d*)$/,Li=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,Gi=/($^)/,pr=/['\n\r\u2028\u2029\\]/g,Ot="\\ud800-\\udfff",ut="\\u0300-\\u036f",vo="\\ufe20-\\ufe2f",Kt="\\u20d0-\\u20ff",Kn=ut+vo+Kt,xo="\\u2700-\\u27bf",kr="a-z\\xdf-\\xf6\\xf8-\\xff",yo="\\xac\\xb1\\xd7\\xf7",mi="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",mr="\\u2000-\\u206f",bo=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",yi="A-Z\\xc0-\\xd6\\xd8-\\xde",ia="\\ufe0e\\ufe0f",Il=yo+mi+mr+bo,na="['\u2019]",Ib="["+Ot+"]",Xp="["+Il+"]",Nl="["+Kn+"]",qp="\\d+",Nb="["+xo+"]",Yp="["+kr+"]",jp="[^"+Ot+Il+qp+xo+kr+yi+"]",Vu="\\ud83c[\\udffb-\\udfff]",zb="(?:"+Nl+"|"+Vu+")",Zp="[^"+Ot+"]",Gu="(?:\\ud83c[\\udde6-\\uddff]){2}",Wu="[\\ud800-\\udbff][\\udc00-\\udfff]",ra="["+yi+"]",Kp="\\u200d",Jp="(?:"+Yp+"|"+jp+")",Fb="(?:"+ra+"|"+jp+")",Qp="(?:"+na+"(?:d|ll|m|re|s|t|ve))?",em="(?:"+na+"(?:D|LL|M|RE|S|T|VE))?",tm=zb+"?",im="["+ia+"]?",kb="(?:"+Kp+"(?:"+[Zp,Gu,Wu].join("|")+")"+im+tm+")*",Ub="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",Bb="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",nm=im+tm+kb,Vb="(?:"+[Nb,Gu,Wu].join("|")+")"+nm,Gb="(?:"+[Zp+Nl+"?",Nl,Gu,Wu,Ib].join("|")+")",Wb=RegExp(na,"g"),Hb=RegExp(Nl,"g"),Hu=RegExp(Vu+"(?="+Vu+")|"+Gb+nm,"g"),$b=RegExp([ra+"?"+Yp+"+"+Qp+"(?="+[Xp,ra,"$"].join("|")+")",Fb+"+"+em+"(?="+[Xp,ra+Jp,"$"].join("|")+")",ra+"?"+Jp+"+"+Qp,ra+"+"+em,Bb,Ub,qp,Vb].join("|"),"g"),Xb=RegExp("["+Kp+Ot+Kn+ia+"]"),qb=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,Yb=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],jb=-1,It={};It[F]=It[q]=It[be]=It[me]=It[Ce]=It[ke]=It[Ue]=It[it]=It[at]=!0,It[de]=It[j]=It[fe]=It[Te]=It[Le]=It[Ae]=It[We]=It[Pe]=It[Ye]=It[mt]=It[et]=It[Xt]=It[St]=It[N]=It[oe]=!1;var Dt={};Dt[de]=Dt[j]=Dt[fe]=Dt[Le]=Dt[Te]=Dt[Ae]=Dt[F]=Dt[q]=Dt[be]=Dt[me]=Dt[Ce]=Dt[Ye]=Dt[mt]=Dt[et]=Dt[Xt]=Dt[St]=Dt[N]=Dt[D]=Dt[ke]=Dt[Ue]=Dt[it]=Dt[at]=!0,Dt[We]=Dt[Pe]=Dt[oe]=!1;var Zb={\u00C0:"A",\u00C1:"A",\u00C2:"A",\u00C3:"A",\u00C4:"A",\u00C5:"A",\u00E0:"a",\u00E1:"a",\u00E2:"a",\u00E3:"a",\u00E4:"a",\u00E5:"a",\u00C7:"C",\u00E7:"c",\u00D0:"D",\u00F0:"d",\u00C8:"E",\u00C9:"E",\u00CA:"E",\u00CB:"E",\u00E8:"e",\u00E9:"e",\u00EA:"e",\u00EB:"e",\u00CC:"I",\u00CD:"I",\u00CE:"I",\u00CF:"I",\u00EC:"i",\u00ED:"i",\u00EE:"i",\u00EF:"i",\u00D1:"N",\u00F1:"n",\u00D2:"O",\u00D3:"O",\u00D4:"O",\u00D5:"O",\u00D6:"O",\u00D8:"O",\u00F2:"o",\u00F3:"o",\u00F4:"o",\u00F5:"o",\u00F6:"o",\u00F8:"o",\u00D9:"U",\u00DA:"U",\u00DB:"U",\u00DC:"U",\u00F9:"u",\u00FA:"u",\u00FB:"u",\u00FC:"u",\u00DD:"Y",\u00FD:"y",\u00FF:"y",\u00C6:"Ae",\u00E6:"ae",\u00DE:"Th",\u00FE:"th",\u00DF:"ss",\u0100:"A",\u0102:"A",\u0104:"A",\u0101:"a",\u0103:"a",\u0105:"a",\u0106:"C",\u0108:"C",\u010A:"C",\u010C:"C",\u0107:"c",\u0109:"c",\u010B:"c",\u010D:"c",\u010E:"D",\u0110:"D",\u010F:"d",\u0111:"d",\u0112:"E",\u0114:"E",\u0116:"E",\u0118:"E",\u011A:"E",\u0113:"e",\u0115:"e",\u0117:"e",\u0119:"e",\u011B:"e",\u011C:"G",\u011E:"G",\u0120:"G",\u0122:"G",\u011D:"g",\u011F:"g",\u0121:"g",\u0123:"g",\u0124:"H",\u0126:"H",\u0125:"h",\u0127:"h",\u0128:"I",\u012A:"I",\u012C:"I",\u012E:"I",\u0130:"I",\u0129:"i",\u012B:"i",\u012D:"i",\u012F:"i",\u0131:"i",\u0134:"J",\u0135:"j",\u0136:"K",\u0137:"k",\u0138:"k",\u0139:"L",\u013B:"L",\u013D:"L",\u013F:"L",\u0141:"L",\u013A:"l",\u013C:"l",\u013E:"l",\u0140:"l",\u0142:"l",\u0143:"N",\u0145:"N",\u0147:"N",\u014A:"N",\u0144:"n",\u0146:"n",\u0148:"n",\u014B:"n",\u014C:"O",\u014E:"O",\u0150:"O",\u014D:"o",\u014F:"o",\u0151:"o",\u0154:"R",\u0156:"R",\u0158:"R",\u0155:"r",\u0157:"r",\u0159:"r",\u015A:"S",\u015C:"S",\u015E:"S",\u0160:"S",\u015B:"s",\u015D:"s",\u015F:"s",\u0161:"s",\u0162:"T",\u0164:"T",\u0166:"T",\u0163:"t",\u0165:"t",\u0167:"t",\u0168:"U",\u016A:"U",\u016C:"U",\u016E:"U",\u0170:"U",\u0172:"U",\u0169:"u",\u016B:"u",\u016D:"u",\u016F:"u",\u0171:"u",\u0173:"u",\u0174:"W",\u0175:"w",\u0176:"Y",\u0177:"y",\u0178:"Y",\u0179:"Z",\u017B:"Z",\u017D:"Z",\u017A:"z",\u017C:"z",\u017E:"z",\u0132:"IJ",\u0133:"ij",\u0152:"Oe",\u0153:"oe",\u0149:"'n",\u017F:"s"},Kb={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},Jb={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},Qb={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},e1=parseFloat,t1=parseInt,rm=typeof sr=="object"&&sr&&sr.Object===Object&&sr,i1=typeof self=="object"&&self&&self.Object===Object&&self,gi=rm||i1||Function("return this")(),$u=e&&!e.nodeType&&e,gs=$u&&!0&&r&&!r.nodeType&&r,sm=gs&&gs.exports===$u,Xu=sm&&rm.process,vn=function(){try{var H=gs&&gs.require&&gs.require("util").types;return H||Xu&&Xu.binding&&Xu.binding("util")}catch{}}(),am=vn&&vn.isArrayBuffer,om=vn&&vn.isDate,lm=vn&&vn.isMap,cm=vn&&vn.isRegExp,um=vn&&vn.isSet,hm=vn&&vn.isTypedArray;function en(H,ce,ie){switch(ie.length){case 0:return H.call(ce);case 1:return H.call(ce,ie[0]);case 2:return H.call(ce,ie[0],ie[1]);case 3:return H.call(ce,ie[0],ie[1],ie[2])}return H.apply(ce,ie)}function n1(H,ce,ie,ze){for(var Ze=-1,yt=H==null?0:H.length;++Ze<yt;){var ti=H[Ze];ce(ze,ti,ie(ti),H)}return ze}function xn(H,ce){for(var ie=-1,ze=H==null?0:H.length;++ie<ze&&ce(H[ie],ie,H)!==!1;);return H}function r1(H,ce){for(var ie=H==null?0:H.length;ie--&&ce(H[ie],ie,H)!==!1;);return H}function fm(H,ce){for(var ie=-1,ze=H==null?0:H.length;++ie<ze;)if(!ce(H[ie],ie,H))return!1;return!0}function Ur(H,ce){for(var ie=-1,ze=H==null?0:H.length,Ze=0,yt=[];++ie<ze;){var ti=H[ie];ce(ti,ie,H)&&(yt[Ze++]=ti)}return yt}function zl(H,ce){var ie=H==null?0:H.length;return!!ie&&sa(H,ce,0)>-1}function qu(H,ce,ie){for(var ze=-1,Ze=H==null?0:H.length;++ze<Ze;)if(ie(ce,H[ze]))return!0;return!1}function zt(H,ce){for(var ie=-1,ze=H==null?0:H.length,Ze=Array(ze);++ie<ze;)Ze[ie]=ce(H[ie],ie,H);return Ze}function Br(H,ce){for(var ie=-1,ze=ce.length,Ze=H.length;++ie<ze;)H[Ze+ie]=ce[ie];return H}function Yu(H,ce,ie,ze){var Ze=-1,yt=H==null?0:H.length;for(ze&&yt&&(ie=H[++Ze]);++Ze<yt;)ie=ce(ie,H[Ze],Ze,H);return ie}function s1(H,ce,ie,ze){var Ze=H==null?0:H.length;for(ze&&Ze&&(ie=H[--Ze]);Ze--;)ie=ce(ie,H[Ze],Ze,H);return ie}function ju(H,ce){for(var ie=-1,ze=H==null?0:H.length;++ie<ze;)if(ce(H[ie],ie,H))return!0;return!1}var a1=Zu("length");function o1(H){return H.split("")}function l1(H){return H.match(Z)||[]}function dm(H,ce,ie){var ze;return ie(H,function(Ze,yt,ti){if(ce(Ze,yt,ti))return ze=yt,!1}),ze}function Fl(H,ce,ie,ze){for(var Ze=H.length,yt=ie+(ze?1:-1);ze?yt--:++yt<Ze;)if(ce(H[yt],yt,H))return yt;return-1}function sa(H,ce,ie){return ce===ce?y1(H,ce,ie):Fl(H,pm,ie)}function c1(H,ce,ie,ze){for(var Ze=ie-1,yt=H.length;++Ze<yt;)if(ze(H[Ze],ce))return Ze;return-1}function pm(H){return H!==H}function mm(H,ce){var ie=H==null?0:H.length;return ie?Ju(H,ce)/ie:xe}function Zu(H){return function(ce){return ce==null?t:ce[H]}}function Ku(H){return function(ce){return H==null?t:H[ce]}}function gm(H,ce,ie,ze,Ze){return Ze(H,function(yt,ti,At){ie=ze?(ze=!1,yt):ce(ie,yt,ti,At)}),ie}function u1(H,ce){var ie=H.length;for(H.sort(ce);ie--;)H[ie]=H[ie].value;return H}function Ju(H,ce){for(var ie,ze=-1,Ze=H.length;++ze<Ze;){var yt=ce(H[ze]);yt!==t&&(ie=ie===t?yt:ie+yt)}return ie}function Qu(H,ce){for(var ie=-1,ze=Array(H);++ie<H;)ze[ie]=ce(ie);return ze}function h1(H,ce){return zt(ce,function(ie){return[ie,H[ie]]})}function _m(H){return H&&H.slice(0,bm(H)+1).replace(_o,"")}function tn(H){return function(ce){return H(ce)}}function eh(H,ce){return zt(ce,function(ie){return H[ie]})}function wo(H,ce){return H.has(ce)}function vm(H,ce){for(var ie=-1,ze=H.length;++ie<ze&&sa(ce,H[ie],0)>-1;);return ie}function xm(H,ce){for(var ie=H.length;ie--&&sa(ce,H[ie],0)>-1;);return ie}function f1(H,ce){for(var ie=H.length,ze=0;ie--;)H[ie]===ce&&++ze;return ze}var d1=Ku(Zb),p1=Ku(Kb);function m1(H){return"\\"+Qb[H]}function g1(H,ce){return H==null?t:H[ce]}function aa(H){return Xb.test(H)}function _1(H){return qb.test(H)}function v1(H){for(var ce,ie=[];!(ce=H.next()).done;)ie.push(ce.value);return ie}function th(H){var ce=-1,ie=Array(H.size);return H.forEach(function(ze,Ze){ie[++ce]=[Ze,ze]}),ie}function ym(H,ce){return function(ie){return H(ce(ie))}}function Vr(H,ce){for(var ie=-1,ze=H.length,Ze=0,yt=[];++ie<ze;){var ti=H[ie];(ti===ce||ti===f)&&(H[ie]=f,yt[Ze++]=ie)}return yt}function kl(H){var ce=-1,ie=Array(H.size);return H.forEach(function(ze){ie[++ce]=ze}),ie}function x1(H){var ce=-1,ie=Array(H.size);return H.forEach(function(ze){ie[++ce]=[ze,ze]}),ie}function y1(H,ce,ie){for(var ze=ie-1,Ze=H.length;++ze<Ze;)if(H[ze]===ce)return ze;return-1}function b1(H,ce,ie){for(var ze=ie+1;ze--;)if(H[ze]===ce)return ze;return ze}function oa(H){return aa(H)?S1(H):a1(H)}function Nn(H){return aa(H)?M1(H):o1(H)}function bm(H){for(var ce=H.length;ce--&&Bu.test(H.charAt(ce)););return ce}var w1=Ku(Jb);function S1(H){for(var ce=Hu.lastIndex=0;Hu.test(H);)++ce;return ce}function M1(H){return H.match(Hu)||[]}function E1(H){return H.match($b)||[]}var T1=function H(ce){ce=ce==null?gi:la.defaults(gi.Object(),ce,la.pick(gi,Yb));var ie=ce.Array,ze=ce.Date,Ze=ce.Error,yt=ce.Function,ti=ce.Math,At=ce.Object,ih=ce.RegExp,A1=ce.String,yn=ce.TypeError,Ul=ie.prototype,C1=yt.prototype,ca=At.prototype,Bl=ce["__core-js_shared__"],Vl=C1.toString,Mt=ca.hasOwnProperty,P1=0,wm=function(){var a=/[^.]+$/.exec(Bl&&Bl.keys&&Bl.keys.IE_PROTO||"");return a?"Symbol(src)_1."+a:""}(),Gl=ca.toString,L1=Vl.call(At),R1=gi._,D1=ih("^"+Vl.call(Mt).replace(ta,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),Wl=sm?ce.Buffer:t,Gr=ce.Symbol,Hl=ce.Uint8Array,Sm=Wl?Wl.allocUnsafe:t,$l=ym(At.getPrototypeOf,At),Mm=At.create,Em=ca.propertyIsEnumerable,Xl=Ul.splice,Tm=Gr?Gr.isConcatSpreadable:t,So=Gr?Gr.iterator:t,_s=Gr?Gr.toStringTag:t,ql=function(){try{var a=ws(At,"defineProperty");return a({},"",{}),a}catch{}}(),O1=ce.clearTimeout!==gi.clearTimeout&&ce.clearTimeout,I1=ze&&ze.now!==gi.Date.now&&ze.now,N1=ce.setTimeout!==gi.setTimeout&&ce.setTimeout,Yl=ti.ceil,jl=ti.floor,nh=At.getOwnPropertySymbols,z1=Wl?Wl.isBuffer:t,Am=ce.isFinite,F1=Ul.join,k1=ym(At.keys,At),ii=ti.max,bi=ti.min,U1=ze.now,B1=ce.parseInt,Cm=ti.random,V1=Ul.reverse,rh=ws(ce,"DataView"),Mo=ws(ce,"Map"),sh=ws(ce,"Promise"),ua=ws(ce,"Set"),Eo=ws(ce,"WeakMap"),To=ws(At,"create"),Zl=Eo&&new Eo,ha={},G1=Ss(rh),W1=Ss(Mo),H1=Ss(sh),$1=Ss(ua),X1=Ss(Eo),Kl=Gr?Gr.prototype:t,Ao=Kl?Kl.valueOf:t,Pm=Kl?Kl.toString:t;function P(a){if(Wt(a)&&!Ke(a)&&!(a instanceof ht)){if(a instanceof bn)return a;if(Mt.call(a,"__wrapped__"))return Lg(a)}return new bn(a)}var fa=function(){function a(){}return function(c){if(!kt(c))return{};if(Mm)return Mm(c);a.prototype=c;var d=new a;return a.prototype=t,d}}();function Jl(){}function bn(a,c){this.__wrapped__=a,this.__actions__=[],this.__chain__=!!c,this.__index__=0,this.__values__=t}P.templateSettings={escape:Zt,evaluate:ui,interpolate:Zn,variable:"",imports:{_:P}},P.prototype=Jl.prototype,P.prototype.constructor=P,bn.prototype=fa(Jl.prototype),bn.prototype.constructor=bn;function ht(a){this.__wrapped__=a,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ee,this.__views__=[]}function q1(){var a=new ht(this.__wrapped__);return a.__actions__=Wi(this.__actions__),a.__dir__=this.__dir__,a.__filtered__=this.__filtered__,a.__iteratees__=Wi(this.__iteratees__),a.__takeCount__=this.__takeCount__,a.__views__=Wi(this.__views__),a}function Y1(){if(this.__filtered__){var a=new ht(this);a.__dir__=-1,a.__filtered__=!0}else a=this.clone(),a.__dir__*=-1;return a}function j1(){var a=this.__wrapped__.value(),c=this.__dir__,d=Ke(a),x=c<0,E=d?a.length:0,R=oS(0,E,this.__views__),z=R.start,B=R.end,X=B-z,ge=x?B:z-1,ve=this.__iteratees__,we=ve.length,Oe=0,Be=bi(X,this.__takeCount__);if(!d||!x&&E==X&&Be==X)return Qm(a,this.__actions__);var Xe=[];e:for(;X--&&Oe<Be;){ge+=c;for(var tt=-1,qe=a[ge];++tt<we;){var ot=ve[tt],dt=ot.iteratee,sn=ot.type,Oi=dt(qe);if(sn==K)qe=Oi;else if(!Oi){if(sn==V)continue e;break e}}Xe[Oe++]=qe}return Xe}ht.prototype=fa(Jl.prototype),ht.prototype.constructor=ht;function vs(a){var c=-1,d=a==null?0:a.length;for(this.clear();++c<d;){var x=a[c];this.set(x[0],x[1])}}function Z1(){this.__data__=To?To(null):{},this.size=0}function K1(a){var c=this.has(a)&&delete this.__data__[a];return this.size-=c?1:0,c}function J1(a){var c=this.__data__;if(To){var d=c[a];return d===u?t:d}return Mt.call(c,a)?c[a]:t}function Q1(a){var c=this.__data__;return To?c[a]!==t:Mt.call(c,a)}function ew(a,c){var d=this.__data__;return this.size+=this.has(a)?0:1,d[a]=To&&c===t?u:c,this}vs.prototype.clear=Z1,vs.prototype.delete=K1,vs.prototype.get=J1,vs.prototype.has=Q1,vs.prototype.set=ew;function gr(a){var c=-1,d=a==null?0:a.length;for(this.clear();++c<d;){var x=a[c];this.set(x[0],x[1])}}function tw(){this.__data__=[],this.size=0}function iw(a){var c=this.__data__,d=Ql(c,a);if(d<0)return!1;var x=c.length-1;return d==x?c.pop():Xl.call(c,d,1),--this.size,!0}function nw(a){var c=this.__data__,d=Ql(c,a);return d<0?t:c[d][1]}function rw(a){return Ql(this.__data__,a)>-1}function sw(a,c){var d=this.__data__,x=Ql(d,a);return x<0?(++this.size,d.push([a,c])):d[x][1]=c,this}gr.prototype.clear=tw,gr.prototype.delete=iw,gr.prototype.get=nw,gr.prototype.has=rw,gr.prototype.set=sw;function _r(a){var c=-1,d=a==null?0:a.length;for(this.clear();++c<d;){var x=a[c];this.set(x[0],x[1])}}function aw(){this.size=0,this.__data__={hash:new vs,map:new(Mo||gr),string:new vs}}function ow(a){var c=hc(this,a).delete(a);return this.size-=c?1:0,c}function lw(a){return hc(this,a).get(a)}function cw(a){return hc(this,a).has(a)}function uw(a,c){var d=hc(this,a),x=d.size;return d.set(a,c),this.size+=d.size==x?0:1,this}_r.prototype.clear=aw,_r.prototype.delete=ow,_r.prototype.get=lw,_r.prototype.has=cw,_r.prototype.set=uw;function xs(a){var c=-1,d=a==null?0:a.length;for(this.__data__=new _r;++c<d;)this.add(a[c])}function hw(a){return this.__data__.set(a,u),this}function fw(a){return this.__data__.has(a)}xs.prototype.add=xs.prototype.push=hw,xs.prototype.has=fw;function zn(a){var c=this.__data__=new gr(a);this.size=c.size}function dw(){this.__data__=new gr,this.size=0}function pw(a){var c=this.__data__,d=c.delete(a);return this.size=c.size,d}function mw(a){return this.__data__.get(a)}function gw(a){return this.__data__.has(a)}function _w(a,c){var d=this.__data__;if(d instanceof gr){var x=d.__data__;if(!Mo||x.length<n-1)return x.push([a,c]),this.size=++d.size,this;d=this.__data__=new _r(x)}return d.set(a,c),this.size=d.size,this}zn.prototype.clear=dw,zn.prototype.delete=pw,zn.prototype.get=mw,zn.prototype.has=gw,zn.prototype.set=_w;function Lm(a,c){var d=Ke(a),x=!d&&Ms(a),E=!d&&!x&&qr(a),R=!d&&!x&&!E&&ga(a),z=d||x||E||R,B=z?Qu(a.length,A1):[],X=B.length;for(var ge in a)(c||Mt.call(a,ge))&&!(z&&(ge=="length"||E&&(ge=="offset"||ge=="parent")||R&&(ge=="buffer"||ge=="byteLength"||ge=="byteOffset")||br(ge,X)))&&B.push(ge);return B}function Rm(a){var c=a.length;return c?a[gh(0,c-1)]:t}function vw(a,c){return fc(Wi(a),ys(c,0,a.length))}function xw(a){return fc(Wi(a))}function ah(a,c,d){(d!==t&&!Fn(a[c],d)||d===t&&!(c in a))&&vr(a,c,d)}function Co(a,c,d){var x=a[c];(!(Mt.call(a,c)&&Fn(x,d))||d===t&&!(c in a))&&vr(a,c,d)}function Ql(a,c){for(var d=a.length;d--;)if(Fn(a[d][0],c))return d;return-1}function yw(a,c,d,x){return Wr(a,function(E,R,z){c(x,E,d(E),z)}),x}function Dm(a,c){return a&&Qn(c,hi(c),a)}function bw(a,c){return a&&Qn(c,$i(c),a)}function vr(a,c,d){c=="__proto__"&&ql?ql(a,c,{configurable:!0,enumerable:!0,value:d,writable:!0}):a[c]=d}function oh(a,c){for(var d=-1,x=c.length,E=ie(x),R=a==null;++d<x;)E[d]=R?t:Vh(a,c[d]);return E}function ys(a,c,d){return a===a&&(d!==t&&(a=a<=d?a:d),c!==t&&(a=a>=c?a:c)),a}function wn(a,c,d,x,E,R){var z,B=c&m,X=c&p,ge=c&v;if(d&&(z=E?d(a,x,E,R):d(a)),z!==t)return z;if(!kt(a))return a;var ve=Ke(a);if(ve){if(z=cS(a),!B)return Wi(a,z)}else{var we=wi(a),Oe=we==Pe||we==Ne;if(qr(a))return ig(a,B);if(we==et||we==de||Oe&&!E){if(z=X||Oe?{}:bg(a),!B)return X?Jw(a,bw(z,a)):Kw(a,Dm(z,a))}else{if(!Dt[we])return E?a:{};z=uS(a,we,B)}}R||(R=new zn);var Be=R.get(a);if(Be)return Be;R.set(a,z),Zg(a)?a.forEach(function(qe){z.add(wn(qe,c,d,qe,a,R))}):Yg(a)&&a.forEach(function(qe,ot){z.set(ot,wn(qe,c,d,ot,a,R))});var Xe=ge?X?Ah:Th:X?$i:hi,tt=ve?t:Xe(a);return xn(tt||a,function(qe,ot){tt&&(ot=qe,qe=a[ot]),Co(z,ot,wn(qe,c,d,ot,a,R))}),z}function ww(a){var c=hi(a);return function(d){return Om(d,a,c)}}function Om(a,c,d){var x=d.length;if(a==null)return!x;for(a=At(a);x--;){var E=d[x],R=c[E],z=a[E];if(z===t&&!(E in a)||!R(z))return!1}return!0}function Im(a,c,d){if(typeof a!="function")throw new yn(o);return No(function(){a.apply(t,d)},c)}function Po(a,c,d,x){var E=-1,R=zl,z=!0,B=a.length,X=[],ge=c.length;if(!B)return X;d&&(c=zt(c,tn(d))),x?(R=qu,z=!1):c.length>=n&&(R=wo,z=!1,c=new xs(c));e:for(;++E<B;){var ve=a[E],we=d==null?ve:d(ve);if(ve=x||ve!==0?ve:0,z&&we===we){for(var Oe=ge;Oe--;)if(c[Oe]===we)continue e;X.push(ve)}else R(c,we,x)||X.push(ve)}return X}var Wr=og(Jn),Nm=og(ch,!0);function Sw(a,c){var d=!0;return Wr(a,function(x,E,R){return d=!!c(x,E,R),d}),d}function ec(a,c,d){for(var x=-1,E=a.length;++x<E;){var R=a[x],z=c(R);if(z!=null&&(B===t?z===z&&!rn(z):d(z,B)))var B=z,X=R}return X}function Mw(a,c,d,x){var E=a.length;for(d=Qe(d),d<0&&(d=-d>E?0:E+d),x=x===t||x>E?E:Qe(x),x<0&&(x+=E),x=d>x?0:Jg(x);d<x;)a[d++]=c;return a}function zm(a,c){var d=[];return Wr(a,function(x,E,R){c(x,E,R)&&d.push(x)}),d}function _i(a,c,d,x,E){var R=-1,z=a.length;for(d||(d=fS),E||(E=[]);++R<z;){var B=a[R];c>0&&d(B)?c>1?_i(B,c-1,d,x,E):Br(E,B):x||(E[E.length]=B)}return E}var lh=lg(),Fm=lg(!0);function Jn(a,c){return a&&lh(a,c,hi)}function ch(a,c){return a&&Fm(a,c,hi)}function tc(a,c){return Ur(c,function(d){return wr(a[d])})}function bs(a,c){c=$r(c,a);for(var d=0,x=c.length;a!=null&&d<x;)a=a[er(c[d++])];return d&&d==x?a:t}function km(a,c,d){var x=c(a);return Ke(a)?x:Br(x,d(a))}function Ri(a){return a==null?a===t?le:_t:_s&&_s in At(a)?aS(a):xS(a)}function uh(a,c){return a>c}function Ew(a,c){return a!=null&&Mt.call(a,c)}function Tw(a,c){return a!=null&&c in At(a)}function Aw(a,c,d){return a>=bi(c,d)&&a<ii(c,d)}function hh(a,c,d){for(var x=d?qu:zl,E=a[0].length,R=a.length,z=R,B=ie(R),X=1/0,ge=[];z--;){var ve=a[z];z&&c&&(ve=zt(ve,tn(c))),X=bi(ve.length,X),B[z]=!d&&(c||E>=120&&ve.length>=120)?new xs(z&&ve):t}ve=a[0];var we=-1,Oe=B[0];e:for(;++we<E&&ge.length<X;){var Be=ve[we],Xe=c?c(Be):Be;if(Be=d||Be!==0?Be:0,!(Oe?wo(Oe,Xe):x(ge,Xe,d))){for(z=R;--z;){var tt=B[z];if(!(tt?wo(tt,Xe):x(a[z],Xe,d)))continue e}Oe&&Oe.push(Xe),ge.push(Be)}}return ge}function Cw(a,c,d,x){return Jn(a,function(E,R,z){c(x,d(E),R,z)}),x}function Lo(a,c,d){c=$r(c,a),a=Eg(a,c);var x=a==null?a:a[er(Mn(c))];return x==null?t:en(x,a,d)}function Um(a){return Wt(a)&&Ri(a)==de}function Pw(a){return Wt(a)&&Ri(a)==fe}function Lw(a){return Wt(a)&&Ri(a)==Ae}function Ro(a,c,d,x,E){return a===c?!0:a==null||c==null||!Wt(a)&&!Wt(c)?a!==a&&c!==c:Rw(a,c,d,x,Ro,E)}function Rw(a,c,d,x,E,R){var z=Ke(a),B=Ke(c),X=z?j:wi(a),ge=B?j:wi(c);X=X==de?et:X,ge=ge==de?et:ge;var ve=X==et,we=ge==et,Oe=X==ge;if(Oe&&qr(a)){if(!qr(c))return!1;z=!0,ve=!1}if(Oe&&!ve)return R||(R=new zn),z||ga(a)?vg(a,c,d,x,E,R):rS(a,c,X,d,x,E,R);if(!(d&y)){var Be=ve&&Mt.call(a,"__wrapped__"),Xe=we&&Mt.call(c,"__wrapped__");if(Be||Xe){var tt=Be?a.value():a,qe=Xe?c.value():c;return R||(R=new zn),E(tt,qe,d,x,R)}}return Oe?(R||(R=new zn),sS(a,c,d,x,E,R)):!1}function Dw(a){return Wt(a)&&wi(a)==Ye}function fh(a,c,d,x){var E=d.length,R=E,z=!x;if(a==null)return!R;for(a=At(a);E--;){var B=d[E];if(z&&B[2]?B[1]!==a[B[0]]:!(B[0]in a))return!1}for(;++E<R;){B=d[E];var X=B[0],ge=a[X],ve=B[1];if(z&&B[2]){if(ge===t&&!(X in a))return!1}else{var we=new zn;if(x)var Oe=x(ge,ve,X,a,c,we);if(!(Oe===t?Ro(ve,ge,y|g,x,we):Oe))return!1}}return!0}function Bm(a){if(!kt(a)||pS(a))return!1;var c=wr(a)?D1:lt;return c.test(Ss(a))}function Ow(a){return Wt(a)&&Ri(a)==Xt}function Iw(a){return Wt(a)&&wi(a)==St}function Nw(a){return Wt(a)&&vc(a.length)&&!!It[Ri(a)]}function Vm(a){return typeof a=="function"?a:a==null?Xi:typeof a=="object"?Ke(a)?Hm(a[0],a[1]):Wm(a):c_(a)}function dh(a){if(!Io(a))return k1(a);var c=[];for(var d in At(a))Mt.call(a,d)&&d!="constructor"&&c.push(d);return c}function zw(a){if(!kt(a))return vS(a);var c=Io(a),d=[];for(var x in a)x=="constructor"&&(c||!Mt.call(a,x))||d.push(x);return d}function ph(a,c){return a<c}function Gm(a,c){var d=-1,x=Hi(a)?ie(a.length):[];return Wr(a,function(E,R,z){x[++d]=c(E,R,z)}),x}function Wm(a){var c=Ph(a);return c.length==1&&c[0][2]?Sg(c[0][0],c[0][1]):function(d){return d===a||fh(d,a,c)}}function Hm(a,c){return Rh(a)&&wg(c)?Sg(er(a),c):function(d){var x=Vh(d,a);return x===t&&x===c?Gh(d,a):Ro(c,x,y|g)}}function ic(a,c,d,x,E){a!==c&&lh(c,function(R,z){if(E||(E=new zn),kt(R))Fw(a,c,z,d,ic,x,E);else{var B=x?x(Oh(a,z),R,z+"",a,c,E):t;B===t&&(B=R),ah(a,z,B)}},$i)}function Fw(a,c,d,x,E,R,z){var B=Oh(a,d),X=Oh(c,d),ge=z.get(X);if(ge){ah(a,d,ge);return}var ve=R?R(B,X,d+"",a,c,z):t,we=ve===t;if(we){var Oe=Ke(X),Be=!Oe&&qr(X),Xe=!Oe&&!Be&&ga(X);ve=X,Oe||Be||Xe?Ke(B)?ve=B:qt(B)?ve=Wi(B):Be?(we=!1,ve=ig(X,!0)):Xe?(we=!1,ve=ng(X,!0)):ve=[]:zo(X)||Ms(X)?(ve=B,Ms(B)?ve=Qg(B):(!kt(B)||wr(B))&&(ve=bg(X))):we=!1}we&&(z.set(X,ve),E(ve,X,x,R,z),z.delete(X)),ah(a,d,ve)}function $m(a,c){var d=a.length;if(!!d)return c+=c<0?d:0,br(c,d)?a[c]:t}function Xm(a,c,d){c.length?c=zt(c,function(R){return Ke(R)?function(z){return bs(z,R.length===1?R[0]:R)}:R}):c=[Xi];var x=-1;c=zt(c,tn($e()));var E=Gm(a,function(R,z,B){var X=zt(c,function(ge){return ge(R)});return{criteria:X,index:++x,value:R}});return u1(E,function(R,z){return Zw(R,z,d)})}function kw(a,c){return qm(a,c,function(d,x){return Gh(a,x)})}function qm(a,c,d){for(var x=-1,E=c.length,R={};++x<E;){var z=c[x],B=bs(a,z);d(B,z)&&Do(R,$r(z,a),B)}return R}function Uw(a){return function(c){return bs(c,a)}}function mh(a,c,d,x){var E=x?c1:sa,R=-1,z=c.length,B=a;for(a===c&&(c=Wi(c)),d&&(B=zt(a,tn(d)));++R<z;)for(var X=0,ge=c[R],ve=d?d(ge):ge;(X=E(B,ve,X,x))>-1;)B!==a&&Xl.call(B,X,1),Xl.call(a,X,1);return a}function Ym(a,c){for(var d=a?c.length:0,x=d-1;d--;){var E=c[d];if(d==x||E!==R){var R=E;br(E)?Xl.call(a,E,1):xh(a,E)}}return a}function gh(a,c){return a+jl(Cm()*(c-a+1))}function Bw(a,c,d,x){for(var E=-1,R=ii(Yl((c-a)/(d||1)),0),z=ie(R);R--;)z[x?R:++E]=a,a+=d;return z}function _h(a,c){var d="";if(!a||c<1||c>te)return d;do c%2&&(d+=a),c=jl(c/2),c&&(a+=a);while(c);return d}function rt(a,c){return Ih(Mg(a,c,Xi),a+"")}function Vw(a){return Rm(_a(a))}function Gw(a,c){var d=_a(a);return fc(d,ys(c,0,d.length))}function Do(a,c,d,x){if(!kt(a))return a;c=$r(c,a);for(var E=-1,R=c.length,z=R-1,B=a;B!=null&&++E<R;){var X=er(c[E]),ge=d;if(X==="__proto__"||X==="constructor"||X==="prototype")return a;if(E!=z){var ve=B[X];ge=x?x(ve,X,B):t,ge===t&&(ge=kt(ve)?ve:br(c[E+1])?[]:{})}Co(B,X,ge),B=B[X]}return a}var jm=Zl?function(a,c){return Zl.set(a,c),a}:Xi,Ww=ql?function(a,c){return ql(a,"toString",{configurable:!0,enumerable:!1,value:Hh(c),writable:!0})}:Xi;function Hw(a){return fc(_a(a))}function Sn(a,c,d){var x=-1,E=a.length;c<0&&(c=-c>E?0:E+c),d=d>E?E:d,d<0&&(d+=E),E=c>d?0:d-c>>>0,c>>>=0;for(var R=ie(E);++x<E;)R[x]=a[x+c];return R}function $w(a,c){var d;return Wr(a,function(x,E,R){return d=c(x,E,R),!d}),!!d}function nc(a,c,d){var x=0,E=a==null?x:a.length;if(typeof c=="number"&&c===c&&E<=ye){for(;x<E;){var R=x+E>>>1,z=a[R];z!==null&&!rn(z)&&(d?z<=c:z<c)?x=R+1:E=R}return E}return vh(a,c,Xi,d)}function vh(a,c,d,x){var E=0,R=a==null?0:a.length;if(R===0)return 0;c=d(c);for(var z=c!==c,B=c===null,X=rn(c),ge=c===t;E<R;){var ve=jl((E+R)/2),we=d(a[ve]),Oe=we!==t,Be=we===null,Xe=we===we,tt=rn(we);if(z)var qe=x||Xe;else ge?qe=Xe&&(x||Oe):B?qe=Xe&&Oe&&(x||!Be):X?qe=Xe&&Oe&&!Be&&(x||!tt):Be||tt?qe=!1:qe=x?we<=c:we<c;qe?E=ve+1:R=ve}return bi(R,ne)}function Zm(a,c){for(var d=-1,x=a.length,E=0,R=[];++d<x;){var z=a[d],B=c?c(z):z;if(!d||!Fn(B,X)){var X=B;R[E++]=z===0?0:z}}return R}function Km(a){return typeof a=="number"?a:rn(a)?xe:+a}function nn(a){if(typeof a=="string")return a;if(Ke(a))return zt(a,nn)+"";if(rn(a))return Pm?Pm.call(a):"";var c=a+"";return c=="0"&&1/a==-ae?"-0":c}function Hr(a,c,d){var x=-1,E=zl,R=a.length,z=!0,B=[],X=B;if(d)z=!1,E=qu;else if(R>=n){var ge=c?null:iS(a);if(ge)return kl(ge);z=!1,E=wo,X=new xs}else X=c?[]:B;e:for(;++x<R;){var ve=a[x],we=c?c(ve):ve;if(ve=d||ve!==0?ve:0,z&&we===we){for(var Oe=X.length;Oe--;)if(X[Oe]===we)continue e;c&&X.push(we),B.push(ve)}else E(X,we,d)||(X!==B&&X.push(we),B.push(ve))}return B}function xh(a,c){return c=$r(c,a),a=Eg(a,c),a==null||delete a[er(Mn(c))]}function Jm(a,c,d,x){return Do(a,c,d(bs(a,c)),x)}function rc(a,c,d,x){for(var E=a.length,R=x?E:-1;(x?R--:++R<E)&&c(a[R],R,a););return d?Sn(a,x?0:R,x?R+1:E):Sn(a,x?R+1:0,x?E:R)}function Qm(a,c){var d=a;return d instanceof ht&&(d=d.value()),Yu(c,function(x,E){return E.func.apply(E.thisArg,Br([x],E.args))},d)}function yh(a,c,d){var x=a.length;if(x<2)return x?Hr(a[0]):[];for(var E=-1,R=ie(x);++E<x;)for(var z=a[E],B=-1;++B<x;)B!=E&&(R[E]=Po(R[E]||z,a[B],c,d));return Hr(_i(R,1),c,d)}function eg(a,c,d){for(var x=-1,E=a.length,R=c.length,z={};++x<E;){var B=x<R?c[x]:t;d(z,a[x],B)}return z}function bh(a){return qt(a)?a:[]}function wh(a){return typeof a=="function"?a:Xi}function $r(a,c){return Ke(a)?a:Rh(a,c)?[a]:Pg(wt(a))}var Xw=rt;function Xr(a,c,d){var x=a.length;return d=d===t?x:d,!c&&d>=x?a:Sn(a,c,d)}var tg=O1||function(a){return gi.clearTimeout(a)};function ig(a,c){if(c)return a.slice();var d=a.length,x=Sm?Sm(d):new a.constructor(d);return a.copy(x),x}function Sh(a){var c=new a.constructor(a.byteLength);return new Hl(c).set(new Hl(a)),c}function qw(a,c){var d=c?Sh(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.byteLength)}function Yw(a){var c=new a.constructor(a.source,Je.exec(a));return c.lastIndex=a.lastIndex,c}function jw(a){return Ao?At(Ao.call(a)):{}}function ng(a,c){var d=c?Sh(a.buffer):a.buffer;return new a.constructor(d,a.byteOffset,a.length)}function rg(a,c){if(a!==c){var d=a!==t,x=a===null,E=a===a,R=rn(a),z=c!==t,B=c===null,X=c===c,ge=rn(c);if(!B&&!ge&&!R&&a>c||R&&z&&X&&!B&&!ge||x&&z&&X||!d&&X||!E)return 1;if(!x&&!R&&!ge&&a<c||ge&&d&&E&&!x&&!R||B&&d&&E||!z&&E||!X)return-1}return 0}function Zw(a,c,d){for(var x=-1,E=a.criteria,R=c.criteria,z=E.length,B=d.length;++x<z;){var X=rg(E[x],R[x]);if(X){if(x>=B)return X;var ge=d[x];return X*(ge=="desc"?-1:1)}}return a.index-c.index}function sg(a,c,d,x){for(var E=-1,R=a.length,z=d.length,B=-1,X=c.length,ge=ii(R-z,0),ve=ie(X+ge),we=!x;++B<X;)ve[B]=c[B];for(;++E<z;)(we||E<R)&&(ve[d[E]]=a[E]);for(;ge--;)ve[B++]=a[E++];return ve}function ag(a,c,d,x){for(var E=-1,R=a.length,z=-1,B=d.length,X=-1,ge=c.length,ve=ii(R-B,0),we=ie(ve+ge),Oe=!x;++E<ve;)we[E]=a[E];for(var Be=E;++X<ge;)we[Be+X]=c[X];for(;++z<B;)(Oe||E<R)&&(we[Be+d[z]]=a[E++]);return we}function Wi(a,c){var d=-1,x=a.length;for(c||(c=ie(x));++d<x;)c[d]=a[d];return c}function Qn(a,c,d,x){var E=!d;d||(d={});for(var R=-1,z=c.length;++R<z;){var B=c[R],X=x?x(d[B],a[B],B,d,a):t;X===t&&(X=a[B]),E?vr(d,B,X):Co(d,B,X)}return d}function Kw(a,c){return Qn(a,Lh(a),c)}function Jw(a,c){return Qn(a,xg(a),c)}function sc(a,c){return function(d,x){var E=Ke(d)?n1:yw,R=c?c():{};return E(d,a,$e(x,2),R)}}function da(a){return rt(function(c,d){var x=-1,E=d.length,R=E>1?d[E-1]:t,z=E>2?d[2]:t;for(R=a.length>3&&typeof R=="function"?(E--,R):t,z&&Di(d[0],d[1],z)&&(R=E<3?t:R,E=1),c=At(c);++x<E;){var B=d[x];B&&a(c,B,x,R)}return c})}function og(a,c){return function(d,x){if(d==null)return d;if(!Hi(d))return a(d,x);for(var E=d.length,R=c?E:-1,z=At(d);(c?R--:++R<E)&&x(z[R],R,z)!==!1;);return d}}function lg(a){return function(c,d,x){for(var E=-1,R=At(c),z=x(c),B=z.length;B--;){var X=z[a?B:++E];if(d(R[X],X,R)===!1)break}return c}}function Qw(a,c,d){var x=c&_,E=Oo(a);function R(){var z=this&&this!==gi&&this instanceof R?E:a;return z.apply(x?d:this,arguments)}return R}function cg(a){return function(c){c=wt(c);var d=aa(c)?Nn(c):t,x=d?d[0]:c.charAt(0),E=d?Xr(d,1).join(""):c.slice(1);return x[a]()+E}}function pa(a){return function(c){return Yu(o_(a_(c).replace(Wb,"")),a,"")}}function Oo(a){return function(){var c=arguments;switch(c.length){case 0:return new a;case 1:return new a(c[0]);case 2:return new a(c[0],c[1]);case 3:return new a(c[0],c[1],c[2]);case 4:return new a(c[0],c[1],c[2],c[3]);case 5:return new a(c[0],c[1],c[2],c[3],c[4]);case 6:return new a(c[0],c[1],c[2],c[3],c[4],c[5]);case 7:return new a(c[0],c[1],c[2],c[3],c[4],c[5],c[6])}var d=fa(a.prototype),x=a.apply(d,c);return kt(x)?x:d}}function eS(a,c,d){var x=Oo(a);function E(){for(var R=arguments.length,z=ie(R),B=R,X=ma(E);B--;)z[B]=arguments[B];var ge=R<3&&z[0]!==X&&z[R-1]!==X?[]:Vr(z,X);if(R-=ge.length,R<d)return pg(a,c,ac,E.placeholder,t,z,ge,t,t,d-R);var ve=this&&this!==gi&&this instanceof E?x:a;return en(ve,this,z)}return E}function ug(a){return function(c,d,x){var E=At(c);if(!Hi(c)){var R=$e(d,3);c=hi(c),d=function(B){return R(E[B],B,E)}}var z=a(c,d,x);return z>-1?E[R?c[z]:z]:t}}function hg(a){return yr(function(c){var d=c.length,x=d,E=bn.prototype.thru;for(a&&c.reverse();x--;){var R=c[x];if(typeof R!="function")throw new yn(o);if(E&&!z&&uc(R)=="wrapper")var z=new bn([],!0)}for(x=z?x:d;++x<d;){R=c[x];var B=uc(R),X=B=="wrapper"?Ch(R):t;X&&Dh(X[0])&&X[1]==(O|w|M|S)&&!X[4].length&&X[9]==1?z=z[uc(X[0])].apply(z,X[3]):z=R.length==1&&Dh(R)?z[B]():z.thru(R)}return function(){var ge=arguments,ve=ge[0];if(z&&ge.length==1&&Ke(ve))return z.plant(ve).value();for(var we=0,Oe=d?c[we].apply(this,ge):ve;++we<d;)Oe=c[we].call(this,Oe);return Oe}})}function ac(a,c,d,x,E,R,z,B,X,ge){var ve=c&O,we=c&_,Oe=c&b,Be=c&(w|T),Xe=c&L,tt=Oe?t:Oo(a);function qe(){for(var ot=arguments.length,dt=ie(ot),sn=ot;sn--;)dt[sn]=arguments[sn];if(Be)var Oi=ma(qe),an=f1(dt,Oi);if(x&&(dt=sg(dt,x,E,Be)),R&&(dt=ag(dt,R,z,Be)),ot-=an,Be&&ot<ge){var Yt=Vr(dt,Oi);return pg(a,c,ac,qe.placeholder,d,dt,Yt,B,X,ge-ot)}var kn=we?d:this,Mr=Oe?kn[a]:a;return ot=dt.length,B?dt=yS(dt,B):Xe&&ot>1&&dt.reverse(),ve&&X<ot&&(dt.length=X),this&&this!==gi&&this instanceof qe&&(Mr=tt||Oo(Mr)),Mr.apply(kn,dt)}return qe}function fg(a,c){return function(d,x){return Cw(d,a,c(x),{})}}function oc(a,c){return function(d,x){var E;if(d===t&&x===t)return c;if(d!==t&&(E=d),x!==t){if(E===t)return x;typeof d=="string"||typeof x=="string"?(d=nn(d),x=nn(x)):(d=Km(d),x=Km(x)),E=a(d,x)}return E}}function Mh(a){return yr(function(c){return c=zt(c,tn($e())),rt(function(d){var x=this;return a(c,function(E){return en(E,x,d)})})})}function lc(a,c){c=c===t?" ":nn(c);var d=c.length;if(d<2)return d?_h(c,a):c;var x=_h(c,Yl(a/oa(c)));return aa(c)?Xr(Nn(x),0,a).join(""):x.slice(0,a)}function tS(a,c,d,x){var E=c&_,R=Oo(a);function z(){for(var B=-1,X=arguments.length,ge=-1,ve=x.length,we=ie(ve+X),Oe=this&&this!==gi&&this instanceof z?R:a;++ge<ve;)we[ge]=x[ge];for(;X--;)we[ge++]=arguments[++B];return en(Oe,E?d:this,we)}return z}function dg(a){return function(c,d,x){return x&&typeof x!="number"&&Di(c,d,x)&&(d=x=t),c=Sr(c),d===t?(d=c,c=0):d=Sr(d),x=x===t?c<d?1:-1:Sr(x),Bw(c,d,x,a)}}function cc(a){return function(c,d){return typeof c=="string"&&typeof d=="string"||(c=En(c),d=En(d)),a(c,d)}}function pg(a,c,d,x,E,R,z,B,X,ge){var ve=c&w,we=ve?z:t,Oe=ve?t:z,Be=ve?R:t,Xe=ve?t:R;c|=ve?M:C,c&=~(ve?C:M),c&A||(c&=~(_|b));var tt=[a,c,E,Be,we,Xe,Oe,B,X,ge],qe=d.apply(t,tt);return Dh(a)&&Tg(qe,tt),qe.placeholder=x,Ag(qe,a,c)}function Eh(a){var c=ti[a];return function(d,x){if(d=En(d),x=x==null?0:bi(Qe(x),292),x&&Am(d)){var E=(wt(d)+"e").split("e"),R=c(E[0]+"e"+(+E[1]+x));return E=(wt(R)+"e").split("e"),+(E[0]+"e"+(+E[1]-x))}return c(d)}}var iS=ua&&1/kl(new ua([,-0]))[1]==ae?function(a){return new ua(a)}:qh;function mg(a){return function(c){var d=wi(c);return d==Ye?th(c):d==St?x1(c):h1(c,a(c))}}function xr(a,c,d,x,E,R,z,B){var X=c&b;if(!X&&typeof a!="function")throw new yn(o);var ge=x?x.length:0;if(ge||(c&=~(M|C),x=E=t),z=z===t?z:ii(Qe(z),0),B=B===t?B:Qe(B),ge-=E?E.length:0,c&C){var ve=x,we=E;x=E=t}var Oe=X?t:Ch(a),Be=[a,c,d,x,E,ve,we,R,z,B];if(Oe&&_S(Be,Oe),a=Be[0],c=Be[1],d=Be[2],x=Be[3],E=Be[4],B=Be[9]=Be[9]===t?X?0:a.length:ii(Be[9]-ge,0),!B&&c&(w|T)&&(c&=~(w|T)),!c||c==_)var Xe=Qw(a,c,d);else c==w||c==T?Xe=eS(a,c,B):(c==M||c==(_|M))&&!E.length?Xe=tS(a,c,d,x):Xe=ac.apply(t,Be);var tt=Oe?jm:Tg;return Ag(tt(Xe,Be),a,c)}function gg(a,c,d,x){return a===t||Fn(a,ca[d])&&!Mt.call(x,d)?c:a}function _g(a,c,d,x,E,R){return kt(a)&&kt(c)&&(R.set(c,a),ic(a,c,t,_g,R),R.delete(c)),a}function nS(a){return zo(a)?t:a}function vg(a,c,d,x,E,R){var z=d&y,B=a.length,X=c.length;if(B!=X&&!(z&&X>B))return!1;var ge=R.get(a),ve=R.get(c);if(ge&&ve)return ge==c&&ve==a;var we=-1,Oe=!0,Be=d&g?new xs:t;for(R.set(a,c),R.set(c,a);++we<B;){var Xe=a[we],tt=c[we];if(x)var qe=z?x(tt,Xe,we,c,a,R):x(Xe,tt,we,a,c,R);if(qe!==t){if(qe)continue;Oe=!1;break}if(Be){if(!ju(c,function(ot,dt){if(!wo(Be,dt)&&(Xe===ot||E(Xe,ot,d,x,R)))return Be.push(dt)})){Oe=!1;break}}else if(!(Xe===tt||E(Xe,tt,d,x,R))){Oe=!1;break}}return R.delete(a),R.delete(c),Oe}function rS(a,c,d,x,E,R,z){switch(d){case Le:if(a.byteLength!=c.byteLength||a.byteOffset!=c.byteOffset)return!1;a=a.buffer,c=c.buffer;case fe:return!(a.byteLength!=c.byteLength||!R(new Hl(a),new Hl(c)));case Te:case Ae:case mt:return Fn(+a,+c);case We:return a.name==c.name&&a.message==c.message;case Xt:case N:return a==c+"";case Ye:var B=th;case St:var X=x&y;if(B||(B=kl),a.size!=c.size&&!X)return!1;var ge=z.get(a);if(ge)return ge==c;x|=g,z.set(a,c);var ve=vg(B(a),B(c),x,E,R,z);return z.delete(a),ve;case D:if(Ao)return Ao.call(a)==Ao.call(c)}return!1}function sS(a,c,d,x,E,R){var z=d&y,B=Th(a),X=B.length,ge=Th(c),ve=ge.length;if(X!=ve&&!z)return!1;for(var we=X;we--;){var Oe=B[we];if(!(z?Oe in c:Mt.call(c,Oe)))return!1}var Be=R.get(a),Xe=R.get(c);if(Be&&Xe)return Be==c&&Xe==a;var tt=!0;R.set(a,c),R.set(c,a);for(var qe=z;++we<X;){Oe=B[we];var ot=a[Oe],dt=c[Oe];if(x)var sn=z?x(dt,ot,Oe,c,a,R):x(ot,dt,Oe,a,c,R);if(!(sn===t?ot===dt||E(ot,dt,d,x,R):sn)){tt=!1;break}qe||(qe=Oe=="constructor")}if(tt&&!qe){var Oi=a.constructor,an=c.constructor;Oi!=an&&"constructor"in a&&"constructor"in c&&!(typeof Oi=="function"&&Oi instanceof Oi&&typeof an=="function"&&an instanceof an)&&(tt=!1)}return R.delete(a),R.delete(c),tt}function yr(a){return Ih(Mg(a,t,Og),a+"")}function Th(a){return km(a,hi,Lh)}function Ah(a){return km(a,$i,xg)}var Ch=Zl?function(a){return Zl.get(a)}:qh;function uc(a){for(var c=a.name+"",d=ha[c],x=Mt.call(ha,c)?d.length:0;x--;){var E=d[x],R=E.func;if(R==null||R==a)return E.name}return c}function ma(a){var c=Mt.call(P,"placeholder")?P:a;return c.placeholder}function $e(){var a=P.iteratee||$h;return a=a===$h?Vm:a,arguments.length?a(arguments[0],arguments[1]):a}function hc(a,c){var d=a.__data__;return dS(c)?d[typeof c=="string"?"string":"hash"]:d.map}function Ph(a){for(var c=hi(a),d=c.length;d--;){var x=c[d],E=a[x];c[d]=[x,E,wg(E)]}return c}function ws(a,c){var d=g1(a,c);return Bm(d)?d:t}function aS(a){var c=Mt.call(a,_s),d=a[_s];try{a[_s]=t;var x=!0}catch{}var E=Gl.call(a);return x&&(c?a[_s]=d:delete a[_s]),E}var Lh=nh?function(a){return a==null?[]:(a=At(a),Ur(nh(a),function(c){return Em.call(a,c)}))}:Yh,xg=nh?function(a){for(var c=[];a;)Br(c,Lh(a)),a=$l(a);return c}:Yh,wi=Ri;(rh&&wi(new rh(new ArrayBuffer(1)))!=Le||Mo&&wi(new Mo)!=Ye||sh&&wi(sh.resolve())!=xt||ua&&wi(new ua)!=St||Eo&&wi(new Eo)!=oe)&&(wi=function(a){var c=Ri(a),d=c==et?a.constructor:t,x=d?Ss(d):"";if(x)switch(x){case G1:return Le;case W1:return Ye;case H1:return xt;case $1:return St;case X1:return oe}return c});function oS(a,c,d){for(var x=-1,E=d.length;++x<E;){var R=d[x],z=R.size;switch(R.type){case"drop":a+=z;break;case"dropRight":c-=z;break;case"take":c=bi(c,a+z);break;case"takeRight":a=ii(a,c-z);break}}return{start:a,end:c}}function lS(a){var c=a.match(Q);return c?c[1].split(he):[]}function yg(a,c,d){c=$r(c,a);for(var x=-1,E=c.length,R=!1;++x<E;){var z=er(c[x]);if(!(R=a!=null&&d(a,z)))break;a=a[z]}return R||++x!=E?R:(E=a==null?0:a.length,!!E&&vc(E)&&br(z,E)&&(Ke(a)||Ms(a)))}function cS(a){var c=a.length,d=new a.constructor(c);return c&&typeof a[0]=="string"&&Mt.call(a,"index")&&(d.index=a.index,d.input=a.input),d}function bg(a){return typeof a.constructor=="function"&&!Io(a)?fa($l(a)):{}}function uS(a,c,d){var x=a.constructor;switch(c){case fe:return Sh(a);case Te:case Ae:return new x(+a);case Le:return qw(a,d);case F:case q:case be:case me:case Ce:case ke:case Ue:case it:case at:return ng(a,d);case Ye:return new x;case mt:case N:return new x(a);case Xt:return Yw(a);case St:return new x;case D:return jw(a)}}function hS(a,c){var d=c.length;if(!d)return a;var x=d-1;return c[x]=(d>1?"& ":"")+c[x],c=c.join(d>2?", ":" "),a.replace(I,`{
/* [wrapped with `+c+`] */
`)}function fS(a){return Ke(a)||Ms(a)||!!(Tm&&a&&a[Tm])}function br(a,c){var d=typeof a;return c=c==null?te:c,!!c&&(d=="number"||d!="symbol"&&Gt.test(a))&&a>-1&&a%1==0&&a<c}function Di(a,c,d){if(!kt(d))return!1;var x=typeof c;return(x=="number"?Hi(d)&&br(c,d.length):x=="string"&&c in d)?Fn(d[c],a):!1}function Rh(a,c){if(Ke(a))return!1;var d=typeof a;return d=="number"||d=="symbol"||d=="boolean"||a==null||rn(a)?!0:In.test(a)||!Rt.test(a)||c!=null&&a in At(c)}function dS(a){var c=typeof a;return c=="string"||c=="number"||c=="symbol"||c=="boolean"?a!=="__proto__":a===null}function Dh(a){var c=uc(a),d=P[c];if(typeof d!="function"||!(c in ht.prototype))return!1;if(a===d)return!0;var x=Ch(d);return!!x&&a===x[0]}function pS(a){return!!wm&&wm in a}var mS=Bl?wr:jh;function Io(a){var c=a&&a.constructor,d=typeof c=="function"&&c.prototype||ca;return a===d}function wg(a){return a===a&&!kt(a)}function Sg(a,c){return function(d){return d==null?!1:d[a]===c&&(c!==t||a in At(d))}}function gS(a){var c=gc(a,function(x){return d.size===h&&d.clear(),x}),d=c.cache;return c}function _S(a,c){var d=a[1],x=c[1],E=d|x,R=E<(_|b|O),z=x==O&&d==w||x==O&&d==S&&a[7].length<=c[8]||x==(O|S)&&c[7].length<=c[8]&&d==w;if(!(R||z))return a;x&_&&(a[2]=c[2],E|=d&_?0:A);var B=c[3];if(B){var X=a[3];a[3]=X?sg(X,B,c[4]):B,a[4]=X?Vr(a[3],f):c[4]}return B=c[5],B&&(X=a[5],a[5]=X?ag(X,B,c[6]):B,a[6]=X?Vr(a[5],f):c[6]),B=c[7],B&&(a[7]=B),x&O&&(a[8]=a[8]==null?c[8]:bi(a[8],c[8])),a[9]==null&&(a[9]=c[9]),a[0]=c[0],a[1]=E,a}function vS(a){var c=[];if(a!=null)for(var d in At(a))c.push(d);return c}function xS(a){return Gl.call(a)}function Mg(a,c,d){return c=ii(c===t?a.length-1:c,0),function(){for(var x=arguments,E=-1,R=ii(x.length-c,0),z=ie(R);++E<R;)z[E]=x[c+E];E=-1;for(var B=ie(c+1);++E<c;)B[E]=x[E];return B[c]=d(z),en(a,this,B)}}function Eg(a,c){return c.length<2?a:bs(a,Sn(c,0,-1))}function yS(a,c){for(var d=a.length,x=bi(c.length,d),E=Wi(a);x--;){var R=c[x];a[x]=br(R,d)?E[R]:t}return a}function Oh(a,c){if(!(c==="constructor"&&typeof a[c]=="function")&&c!="__proto__")return a[c]}var Tg=Cg(jm),No=N1||function(a,c){return gi.setTimeout(a,c)},Ih=Cg(Ww);function Ag(a,c,d){var x=c+"";return Ih(a,hS(x,bS(lS(x),d)))}function Cg(a){var c=0,d=0;return function(){var x=U1(),E=G-(x-d);if(d=x,E>0){if(++c>=re)return arguments[0]}else c=0;return a.apply(t,arguments)}}function fc(a,c){var d=-1,x=a.length,E=x-1;for(c=c===t?x:c;++d<c;){var R=gh(d,E),z=a[R];a[R]=a[d],a[d]=z}return a.length=c,a}var Pg=gS(function(a){var c=[];return a.charCodeAt(0)===46&&c.push(""),a.replace(Vi,function(d,x,E,R){c.push(E?R.replace(He,"$1"):x||d)}),c});function er(a){if(typeof a=="string"||rn(a))return a;var c=a+"";return c=="0"&&1/a==-ae?"-0":c}function Ss(a){if(a!=null){try{return Vl.call(a)}catch{}try{return a+""}catch{}}return""}function bS(a,c){return xn(J,function(d){var x="_."+d[0];c&d[1]&&!zl(a,x)&&a.push(x)}),a.sort()}function Lg(a){if(a instanceof ht)return a.clone();var c=new bn(a.__wrapped__,a.__chain__);return c.__actions__=Wi(a.__actions__),c.__index__=a.__index__,c.__values__=a.__values__,c}function wS(a,c,d){(d?Di(a,c,d):c===t)?c=1:c=ii(Qe(c),0);var x=a==null?0:a.length;if(!x||c<1)return[];for(var E=0,R=0,z=ie(Yl(x/c));E<x;)z[R++]=Sn(a,E,E+=c);return z}function SS(a){for(var c=-1,d=a==null?0:a.length,x=0,E=[];++c<d;){var R=a[c];R&&(E[x++]=R)}return E}function MS(){var a=arguments.length;if(!a)return[];for(var c=ie(a-1),d=arguments[0],x=a;x--;)c[x-1]=arguments[x];return Br(Ke(d)?Wi(d):[d],_i(c,1))}var ES=rt(function(a,c){return qt(a)?Po(a,_i(c,1,qt,!0)):[]}),TS=rt(function(a,c){var d=Mn(c);return qt(d)&&(d=t),qt(a)?Po(a,_i(c,1,qt,!0),$e(d,2)):[]}),AS=rt(function(a,c){var d=Mn(c);return qt(d)&&(d=t),qt(a)?Po(a,_i(c,1,qt,!0),t,d):[]});function CS(a,c,d){var x=a==null?0:a.length;return x?(c=d||c===t?1:Qe(c),Sn(a,c<0?0:c,x)):[]}function PS(a,c,d){var x=a==null?0:a.length;return x?(c=d||c===t?1:Qe(c),c=x-c,Sn(a,0,c<0?0:c)):[]}function LS(a,c){return a&&a.length?rc(a,$e(c,3),!0,!0):[]}function RS(a,c){return a&&a.length?rc(a,$e(c,3),!0):[]}function DS(a,c,d,x){var E=a==null?0:a.length;return E?(d&&typeof d!="number"&&Di(a,c,d)&&(d=0,x=E),Mw(a,c,d,x)):[]}function Rg(a,c,d){var x=a==null?0:a.length;if(!x)return-1;var E=d==null?0:Qe(d);return E<0&&(E=ii(x+E,0)),Fl(a,$e(c,3),E)}function Dg(a,c,d){var x=a==null?0:a.length;if(!x)return-1;var E=x-1;return d!==t&&(E=Qe(d),E=d<0?ii(x+E,0):bi(E,x-1)),Fl(a,$e(c,3),E,!0)}function Og(a){var c=a==null?0:a.length;return c?_i(a,1):[]}function OS(a){var c=a==null?0:a.length;return c?_i(a,ae):[]}function IS(a,c){var d=a==null?0:a.length;return d?(c=c===t?1:Qe(c),_i(a,c)):[]}function NS(a){for(var c=-1,d=a==null?0:a.length,x={};++c<d;){var E=a[c];x[E[0]]=E[1]}return x}function Ig(a){return a&&a.length?a[0]:t}function zS(a,c,d){var x=a==null?0:a.length;if(!x)return-1;var E=d==null?0:Qe(d);return E<0&&(E=ii(x+E,0)),sa(a,c,E)}function FS(a){var c=a==null?0:a.length;return c?Sn(a,0,-1):[]}var kS=rt(function(a){var c=zt(a,bh);return c.length&&c[0]===a[0]?hh(c):[]}),US=rt(function(a){var c=Mn(a),d=zt(a,bh);return c===Mn(d)?c=t:d.pop(),d.length&&d[0]===a[0]?hh(d,$e(c,2)):[]}),BS=rt(function(a){var c=Mn(a),d=zt(a,bh);return c=typeof c=="function"?c:t,c&&d.pop(),d.length&&d[0]===a[0]?hh(d,t,c):[]});function VS(a,c){return a==null?"":F1.call(a,c)}function Mn(a){var c=a==null?0:a.length;return c?a[c-1]:t}function GS(a,c,d){var x=a==null?0:a.length;if(!x)return-1;var E=x;return d!==t&&(E=Qe(d),E=E<0?ii(x+E,0):bi(E,x-1)),c===c?b1(a,c,E):Fl(a,pm,E,!0)}function WS(a,c){return a&&a.length?$m(a,Qe(c)):t}var HS=rt(Ng);function Ng(a,c){return a&&a.length&&c&&c.length?mh(a,c):a}function $S(a,c,d){return a&&a.length&&c&&c.length?mh(a,c,$e(d,2)):a}function XS(a,c,d){return a&&a.length&&c&&c.length?mh(a,c,t,d):a}var qS=yr(function(a,c){var d=a==null?0:a.length,x=oh(a,c);return Ym(a,zt(c,function(E){return br(E,d)?+E:E}).sort(rg)),x});function YS(a,c){var d=[];if(!(a&&a.length))return d;var x=-1,E=[],R=a.length;for(c=$e(c,3);++x<R;){var z=a[x];c(z,x,a)&&(d.push(z),E.push(x))}return Ym(a,E),d}function Nh(a){return a==null?a:V1.call(a)}function jS(a,c,d){var x=a==null?0:a.length;return x?(d&&typeof d!="number"&&Di(a,c,d)?(c=0,d=x):(c=c==null?0:Qe(c),d=d===t?x:Qe(d)),Sn(a,c,d)):[]}function ZS(a,c){return nc(a,c)}function KS(a,c,d){return vh(a,c,$e(d,2))}function JS(a,c){var d=a==null?0:a.length;if(d){var x=nc(a,c);if(x<d&&Fn(a[x],c))return x}return-1}function QS(a,c){return nc(a,c,!0)}function eM(a,c,d){return vh(a,c,$e(d,2),!0)}function tM(a,c){var d=a==null?0:a.length;if(d){var x=nc(a,c,!0)-1;if(Fn(a[x],c))return x}return-1}function iM(a){return a&&a.length?Zm(a):[]}function nM(a,c){return a&&a.length?Zm(a,$e(c,2)):[]}function rM(a){var c=a==null?0:a.length;return c?Sn(a,1,c):[]}function sM(a,c,d){return a&&a.length?(c=d||c===t?1:Qe(c),Sn(a,0,c<0?0:c)):[]}function aM(a,c,d){var x=a==null?0:a.length;return x?(c=d||c===t?1:Qe(c),c=x-c,Sn(a,c<0?0:c,x)):[]}function oM(a,c){return a&&a.length?rc(a,$e(c,3),!1,!0):[]}function lM(a,c){return a&&a.length?rc(a,$e(c,3)):[]}var cM=rt(function(a){return Hr(_i(a,1,qt,!0))}),uM=rt(function(a){var c=Mn(a);return qt(c)&&(c=t),Hr(_i(a,1,qt,!0),$e(c,2))}),hM=rt(function(a){var c=Mn(a);return c=typeof c=="function"?c:t,Hr(_i(a,1,qt,!0),t,c)});function fM(a){return a&&a.length?Hr(a):[]}function dM(a,c){return a&&a.length?Hr(a,$e(c,2)):[]}function pM(a,c){return c=typeof c=="function"?c:t,a&&a.length?Hr(a,t,c):[]}function zh(a){if(!(a&&a.length))return[];var c=0;return a=Ur(a,function(d){if(qt(d))return c=ii(d.length,c),!0}),Qu(c,function(d){return zt(a,Zu(d))})}function zg(a,c){if(!(a&&a.length))return[];var d=zh(a);return c==null?d:zt(d,function(x){return en(c,t,x)})}var mM=rt(function(a,c){return qt(a)?Po(a,c):[]}),gM=rt(function(a){return yh(Ur(a,qt))}),_M=rt(function(a){var c=Mn(a);return qt(c)&&(c=t),yh(Ur(a,qt),$e(c,2))}),vM=rt(function(a){var c=Mn(a);return c=typeof c=="function"?c:t,yh(Ur(a,qt),t,c)}),xM=rt(zh);function yM(a,c){return eg(a||[],c||[],Co)}function bM(a,c){return eg(a||[],c||[],Do)}var wM=rt(function(a){var c=a.length,d=c>1?a[c-1]:t;return d=typeof d=="function"?(a.pop(),d):t,zg(a,d)});function Fg(a){var c=P(a);return c.__chain__=!0,c}function SM(a,c){return c(a),a}function dc(a,c){return c(a)}var MM=yr(function(a){var c=a.length,d=c?a[0]:0,x=this.__wrapped__,E=function(R){return oh(R,a)};return c>1||this.__actions__.length||!(x instanceof ht)||!br(d)?this.thru(E):(x=x.slice(d,+d+(c?1:0)),x.__actions__.push({func:dc,args:[E],thisArg:t}),new bn(x,this.__chain__).thru(function(R){return c&&!R.length&&R.push(t),R}))});function EM(){return Fg(this)}function TM(){return new bn(this.value(),this.__chain__)}function AM(){this.__values__===t&&(this.__values__=Kg(this.value()));var a=this.__index__>=this.__values__.length,c=a?t:this.__values__[this.__index__++];return{done:a,value:c}}function CM(){return this}function PM(a){for(var c,d=this;d instanceof Jl;){var x=Lg(d);x.__index__=0,x.__values__=t,c?E.__wrapped__=x:c=x;var E=x;d=d.__wrapped__}return E.__wrapped__=a,c}function LM(){var a=this.__wrapped__;if(a instanceof ht){var c=a;return this.__actions__.length&&(c=new ht(this)),c=c.reverse(),c.__actions__.push({func:dc,args:[Nh],thisArg:t}),new bn(c,this.__chain__)}return this.thru(Nh)}function RM(){return Qm(this.__wrapped__,this.__actions__)}var DM=sc(function(a,c,d){Mt.call(a,d)?++a[d]:vr(a,d,1)});function OM(a,c,d){var x=Ke(a)?fm:Sw;return d&&Di(a,c,d)&&(c=t),x(a,$e(c,3))}function IM(a,c){var d=Ke(a)?Ur:zm;return d(a,$e(c,3))}var NM=ug(Rg),zM=ug(Dg);function FM(a,c){return _i(pc(a,c),1)}function kM(a,c){return _i(pc(a,c),ae)}function UM(a,c,d){return d=d===t?1:Qe(d),_i(pc(a,c),d)}function kg(a,c){var d=Ke(a)?xn:Wr;return d(a,$e(c,3))}function Ug(a,c){var d=Ke(a)?r1:Nm;return d(a,$e(c,3))}var BM=sc(function(a,c,d){Mt.call(a,d)?a[d].push(c):vr(a,d,[c])});function VM(a,c,d,x){a=Hi(a)?a:_a(a),d=d&&!x?Qe(d):0;var E=a.length;return d<0&&(d=ii(E+d,0)),xc(a)?d<=E&&a.indexOf(c,d)>-1:!!E&&sa(a,c,d)>-1}var GM=rt(function(a,c,d){var x=-1,E=typeof c=="function",R=Hi(a)?ie(a.length):[];return Wr(a,function(z){R[++x]=E?en(c,z,d):Lo(z,c,d)}),R}),WM=sc(function(a,c,d){vr(a,d,c)});function pc(a,c){var d=Ke(a)?zt:Gm;return d(a,$e(c,3))}function HM(a,c,d,x){return a==null?[]:(Ke(c)||(c=c==null?[]:[c]),d=x?t:d,Ke(d)||(d=d==null?[]:[d]),Xm(a,c,d))}var $M=sc(function(a,c,d){a[d?0:1].push(c)},function(){return[[],[]]});function XM(a,c,d){var x=Ke(a)?Yu:gm,E=arguments.length<3;return x(a,$e(c,4),d,E,Wr)}function qM(a,c,d){var x=Ke(a)?s1:gm,E=arguments.length<3;return x(a,$e(c,4),d,E,Nm)}function YM(a,c){var d=Ke(a)?Ur:zm;return d(a,_c($e(c,3)))}function jM(a){var c=Ke(a)?Rm:Vw;return c(a)}function ZM(a,c,d){(d?Di(a,c,d):c===t)?c=1:c=Qe(c);var x=Ke(a)?vw:Gw;return x(a,c)}function KM(a){var c=Ke(a)?xw:Hw;return c(a)}function JM(a){if(a==null)return 0;if(Hi(a))return xc(a)?oa(a):a.length;var c=wi(a);return c==Ye||c==St?a.size:dh(a).length}function QM(a,c,d){var x=Ke(a)?ju:$w;return d&&Di(a,c,d)&&(c=t),x(a,$e(c,3))}var eE=rt(function(a,c){if(a==null)return[];var d=c.length;return d>1&&Di(a,c[0],c[1])?c=[]:d>2&&Di(c[0],c[1],c[2])&&(c=[c[0]]),Xm(a,_i(c,1),[])}),mc=I1||function(){return gi.Date.now()};function tE(a,c){if(typeof c!="function")throw new yn(o);return a=Qe(a),function(){if(--a<1)return c.apply(this,arguments)}}function Bg(a,c,d){return c=d?t:c,c=a&&c==null?a.length:c,xr(a,O,t,t,t,t,c)}function Vg(a,c){var d;if(typeof c!="function")throw new yn(o);return a=Qe(a),function(){return--a>0&&(d=c.apply(this,arguments)),a<=1&&(c=t),d}}var Fh=rt(function(a,c,d){var x=_;if(d.length){var E=Vr(d,ma(Fh));x|=M}return xr(a,x,c,d,E)}),Gg=rt(function(a,c,d){var x=_|b;if(d.length){var E=Vr(d,ma(Gg));x|=M}return xr(c,x,a,d,E)});function Wg(a,c,d){c=d?t:c;var x=xr(a,w,t,t,t,t,t,c);return x.placeholder=Wg.placeholder,x}function Hg(a,c,d){c=d?t:c;var x=xr(a,T,t,t,t,t,t,c);return x.placeholder=Hg.placeholder,x}function $g(a,c,d){var x,E,R,z,B,X,ge=0,ve=!1,we=!1,Oe=!0;if(typeof a!="function")throw new yn(o);c=En(c)||0,kt(d)&&(ve=!!d.leading,we="maxWait"in d,R=we?ii(En(d.maxWait)||0,c):R,Oe="trailing"in d?!!d.trailing:Oe);function Be(Yt){var kn=x,Mr=E;return x=E=t,ge=Yt,z=a.apply(Mr,kn),z}function Xe(Yt){return ge=Yt,B=No(ot,c),ve?Be(Yt):z}function tt(Yt){var kn=Yt-X,Mr=Yt-ge,u_=c-kn;return we?bi(u_,R-Mr):u_}function qe(Yt){var kn=Yt-X,Mr=Yt-ge;return X===t||kn>=c||kn<0||we&&Mr>=R}function ot(){var Yt=mc();if(qe(Yt))return dt(Yt);B=No(ot,tt(Yt))}function dt(Yt){return B=t,Oe&&x?Be(Yt):(x=E=t,z)}function sn(){B!==t&&tg(B),ge=0,x=X=E=B=t}function Oi(){return B===t?z:dt(mc())}function an(){var Yt=mc(),kn=qe(Yt);if(x=arguments,E=this,X=Yt,kn){if(B===t)return Xe(X);if(we)return tg(B),B=No(ot,c),Be(X)}return B===t&&(B=No(ot,c)),z}return an.cancel=sn,an.flush=Oi,an}var iE=rt(function(a,c){return Im(a,1,c)}),nE=rt(function(a,c,d){return Im(a,En(c)||0,d)});function rE(a){return xr(a,L)}function gc(a,c){if(typeof a!="function"||c!=null&&typeof c!="function")throw new yn(o);var d=function(){var x=arguments,E=c?c.apply(this,x):x[0],R=d.cache;if(R.has(E))return R.get(E);var z=a.apply(this,x);return d.cache=R.set(E,z)||R,z};return d.cache=new(gc.Cache||_r),d}gc.Cache=_r;function _c(a){if(typeof a!="function")throw new yn(o);return function(){var c=arguments;switch(c.length){case 0:return!a.call(this);case 1:return!a.call(this,c[0]);case 2:return!a.call(this,c[0],c[1]);case 3:return!a.call(this,c[0],c[1],c[2])}return!a.apply(this,c)}}function sE(a){return Vg(2,a)}var aE=Xw(function(a,c){c=c.length==1&&Ke(c[0])?zt(c[0],tn($e())):zt(_i(c,1),tn($e()));var d=c.length;return rt(function(x){for(var E=-1,R=bi(x.length,d);++E<R;)x[E]=c[E].call(this,x[E]);return en(a,this,x)})}),kh=rt(function(a,c){var d=Vr(c,ma(kh));return xr(a,M,t,c,d)}),Xg=rt(function(a,c){var d=Vr(c,ma(Xg));return xr(a,C,t,c,d)}),oE=yr(function(a,c){return xr(a,S,t,t,t,c)});function lE(a,c){if(typeof a!="function")throw new yn(o);return c=c===t?c:Qe(c),rt(a,c)}function cE(a,c){if(typeof a!="function")throw new yn(o);return c=c==null?0:ii(Qe(c),0),rt(function(d){var x=d[c],E=Xr(d,0,c);return x&&Br(E,x),en(a,this,E)})}function uE(a,c,d){var x=!0,E=!0;if(typeof a!="function")throw new yn(o);return kt(d)&&(x="leading"in d?!!d.leading:x,E="trailing"in d?!!d.trailing:E),$g(a,c,{leading:x,maxWait:c,trailing:E})}function hE(a){return Bg(a,1)}function fE(a,c){return kh(wh(c),a)}function dE(){if(!arguments.length)return[];var a=arguments[0];return Ke(a)?a:[a]}function pE(a){return wn(a,v)}function mE(a,c){return c=typeof c=="function"?c:t,wn(a,v,c)}function gE(a){return wn(a,m|v)}function _E(a,c){return c=typeof c=="function"?c:t,wn(a,m|v,c)}function vE(a,c){return c==null||Om(a,c,hi(c))}function Fn(a,c){return a===c||a!==a&&c!==c}var xE=cc(uh),yE=cc(function(a,c){return a>=c}),Ms=Um(function(){return arguments}())?Um:function(a){return Wt(a)&&Mt.call(a,"callee")&&!Em.call(a,"callee")},Ke=ie.isArray,bE=am?tn(am):Pw;function Hi(a){return a!=null&&vc(a.length)&&!wr(a)}function qt(a){return Wt(a)&&Hi(a)}function wE(a){return a===!0||a===!1||Wt(a)&&Ri(a)==Te}var qr=z1||jh,SE=om?tn(om):Lw;function ME(a){return Wt(a)&&a.nodeType===1&&!zo(a)}function EE(a){if(a==null)return!0;if(Hi(a)&&(Ke(a)||typeof a=="string"||typeof a.splice=="function"||qr(a)||ga(a)||Ms(a)))return!a.length;var c=wi(a);if(c==Ye||c==St)return!a.size;if(Io(a))return!dh(a).length;for(var d in a)if(Mt.call(a,d))return!1;return!0}function TE(a,c){return Ro(a,c)}function AE(a,c,d){d=typeof d=="function"?d:t;var x=d?d(a,c):t;return x===t?Ro(a,c,t,d):!!x}function Uh(a){if(!Wt(a))return!1;var c=Ri(a);return c==We||c==Ee||typeof a.message=="string"&&typeof a.name=="string"&&!zo(a)}function CE(a){return typeof a=="number"&&Am(a)}function wr(a){if(!kt(a))return!1;var c=Ri(a);return c==Pe||c==Ne||c==Fe||c==ft}function qg(a){return typeof a=="number"&&a==Qe(a)}function vc(a){return typeof a=="number"&&a>-1&&a%1==0&&a<=te}function kt(a){var c=typeof a;return a!=null&&(c=="object"||c=="function")}function Wt(a){return a!=null&&typeof a=="object"}var Yg=lm?tn(lm):Dw;function PE(a,c){return a===c||fh(a,c,Ph(c))}function LE(a,c,d){return d=typeof d=="function"?d:t,fh(a,c,Ph(c),d)}function RE(a){return jg(a)&&a!=+a}function DE(a){if(mS(a))throw new Ze(s);return Bm(a)}function OE(a){return a===null}function IE(a){return a==null}function jg(a){return typeof a=="number"||Wt(a)&&Ri(a)==mt}function zo(a){if(!Wt(a)||Ri(a)!=et)return!1;var c=$l(a);if(c===null)return!0;var d=Mt.call(c,"constructor")&&c.constructor;return typeof d=="function"&&d instanceof d&&Vl.call(d)==L1}var Bh=cm?tn(cm):Ow;function NE(a){return qg(a)&&a>=-te&&a<=te}var Zg=um?tn(um):Iw;function xc(a){return typeof a=="string"||!Ke(a)&&Wt(a)&&Ri(a)==N}function rn(a){return typeof a=="symbol"||Wt(a)&&Ri(a)==D}var ga=hm?tn(hm):Nw;function zE(a){return a===t}function FE(a){return Wt(a)&&wi(a)==oe}function kE(a){return Wt(a)&&Ri(a)==_e}var UE=cc(ph),BE=cc(function(a,c){return a<=c});function Kg(a){if(!a)return[];if(Hi(a))return xc(a)?Nn(a):Wi(a);if(So&&a[So])return v1(a[So]());var c=wi(a),d=c==Ye?th:c==St?kl:_a;return d(a)}function Sr(a){if(!a)return a===0?a:0;if(a=En(a),a===ae||a===-ae){var c=a<0?-1:1;return c*Se}return a===a?a:0}function Qe(a){var c=Sr(a),d=c%1;return c===c?d?c-d:c:0}function Jg(a){return a?ys(Qe(a),0,ee):0}function En(a){if(typeof a=="number")return a;if(rn(a))return xe;if(kt(a)){var c=typeof a.valueOf=="function"?a.valueOf():a;a=kt(c)?c+"":c}if(typeof a!="string")return a===0?a:+a;a=_m(a);var d=gt.test(a);return d||ct.test(a)?t1(a.slice(2),d?2:8):nt.test(a)?xe:+a}function Qg(a){return Qn(a,$i(a))}function VE(a){return a?ys(Qe(a),-te,te):a===0?a:0}function wt(a){return a==null?"":nn(a)}var GE=da(function(a,c){if(Io(c)||Hi(c)){Qn(c,hi(c),a);return}for(var d in c)Mt.call(c,d)&&Co(a,d,c[d])}),e_=da(function(a,c){Qn(c,$i(c),a)}),yc=da(function(a,c,d,x){Qn(c,$i(c),a,x)}),WE=da(function(a,c,d,x){Qn(c,hi(c),a,x)}),HE=yr(oh);function $E(a,c){var d=fa(a);return c==null?d:Dm(d,c)}var XE=rt(function(a,c){a=At(a);var d=-1,x=c.length,E=x>2?c[2]:t;for(E&&Di(c[0],c[1],E)&&(x=1);++d<x;)for(var R=c[d],z=$i(R),B=-1,X=z.length;++B<X;){var ge=z[B],ve=a[ge];(ve===t||Fn(ve,ca[ge])&&!Mt.call(a,ge))&&(a[ge]=R[ge])}return a}),qE=rt(function(a){return a.push(t,_g),en(t_,t,a)});function YE(a,c){return dm(a,$e(c,3),Jn)}function jE(a,c){return dm(a,$e(c,3),ch)}function ZE(a,c){return a==null?a:lh(a,$e(c,3),$i)}function KE(a,c){return a==null?a:Fm(a,$e(c,3),$i)}function JE(a,c){return a&&Jn(a,$e(c,3))}function QE(a,c){return a&&ch(a,$e(c,3))}function eT(a){return a==null?[]:tc(a,hi(a))}function tT(a){return a==null?[]:tc(a,$i(a))}function Vh(a,c,d){var x=a==null?t:bs(a,c);return x===t?d:x}function iT(a,c){return a!=null&&yg(a,c,Ew)}function Gh(a,c){return a!=null&&yg(a,c,Tw)}var nT=fg(function(a,c,d){c!=null&&typeof c.toString!="function"&&(c=Gl.call(c)),a[c]=d},Hh(Xi)),rT=fg(function(a,c,d){c!=null&&typeof c.toString!="function"&&(c=Gl.call(c)),Mt.call(a,c)?a[c].push(d):a[c]=[d]},$e),sT=rt(Lo);function hi(a){return Hi(a)?Lm(a):dh(a)}function $i(a){return Hi(a)?Lm(a,!0):zw(a)}function aT(a,c){var d={};return c=$e(c,3),Jn(a,function(x,E,R){vr(d,c(x,E,R),x)}),d}function oT(a,c){var d={};return c=$e(c,3),Jn(a,function(x,E,R){vr(d,E,c(x,E,R))}),d}var lT=da(function(a,c,d){ic(a,c,d)}),t_=da(function(a,c,d,x){ic(a,c,d,x)}),cT=yr(function(a,c){var d={};if(a==null)return d;var x=!1;c=zt(c,function(R){return R=$r(R,a),x||(x=R.length>1),R}),Qn(a,Ah(a),d),x&&(d=wn(d,m|p|v,nS));for(var E=c.length;E--;)xh(d,c[E]);return d});function uT(a,c){return i_(a,_c($e(c)))}var hT=yr(function(a,c){return a==null?{}:kw(a,c)});function i_(a,c){if(a==null)return{};var d=zt(Ah(a),function(x){return[x]});return c=$e(c),qm(a,d,function(x,E){return c(x,E[0])})}function fT(a,c,d){c=$r(c,a);var x=-1,E=c.length;for(E||(E=1,a=t);++x<E;){var R=a==null?t:a[er(c[x])];R===t&&(x=E,R=d),a=wr(R)?R.call(a):R}return a}function dT(a,c,d){return a==null?a:Do(a,c,d)}function pT(a,c,d,x){return x=typeof x=="function"?x:t,a==null?a:Do(a,c,d,x)}var n_=mg(hi),r_=mg($i);function mT(a,c,d){var x=Ke(a),E=x||qr(a)||ga(a);if(c=$e(c,4),d==null){var R=a&&a.constructor;E?d=x?new R:[]:kt(a)?d=wr(R)?fa($l(a)):{}:d={}}return(E?xn:Jn)(a,function(z,B,X){return c(d,z,B,X)}),d}function gT(a,c){return a==null?!0:xh(a,c)}function _T(a,c,d){return a==null?a:Jm(a,c,wh(d))}function vT(a,c,d,x){return x=typeof x=="function"?x:t,a==null?a:Jm(a,c,wh(d),x)}function _a(a){return a==null?[]:eh(a,hi(a))}function xT(a){return a==null?[]:eh(a,$i(a))}function yT(a,c,d){return d===t&&(d=c,c=t),d!==t&&(d=En(d),d=d===d?d:0),c!==t&&(c=En(c),c=c===c?c:0),ys(En(a),c,d)}function bT(a,c,d){return c=Sr(c),d===t?(d=c,c=0):d=Sr(d),a=En(a),Aw(a,c,d)}function wT(a,c,d){if(d&&typeof d!="boolean"&&Di(a,c,d)&&(c=d=t),d===t&&(typeof c=="boolean"?(d=c,c=t):typeof a=="boolean"&&(d=a,a=t)),a===t&&c===t?(a=0,c=1):(a=Sr(a),c===t?(c=a,a=0):c=Sr(c)),a>c){var x=a;a=c,c=x}if(d||a%1||c%1){var E=Cm();return bi(a+E*(c-a+e1("1e-"+((E+"").length-1))),c)}return gh(a,c)}var ST=pa(function(a,c,d){return c=c.toLowerCase(),a+(d?s_(c):c)});function s_(a){return Wh(wt(a).toLowerCase())}function a_(a){return a=wt(a),a&&a.replace(Li,d1).replace(Hb,"")}function MT(a,c,d){a=wt(a),c=nn(c);var x=a.length;d=d===t?x:ys(Qe(d),0,x);var E=d;return d-=c.length,d>=0&&a.slice(d,E)==c}function ET(a){return a=wt(a),a&&vt.test(a)?a.replace(Ie,p1):a}function TT(a){return a=wt(a),a&&Uu.test(a)?a.replace(ta,"\\$&"):a}var AT=pa(function(a,c,d){return a+(d?"-":"")+c.toLowerCase()}),CT=pa(function(a,c,d){return a+(d?" ":"")+c.toLowerCase()}),PT=cg("toLowerCase");function LT(a,c,d){a=wt(a),c=Qe(c);var x=c?oa(a):0;if(!c||x>=c)return a;var E=(c-x)/2;return lc(jl(E),d)+a+lc(Yl(E),d)}function RT(a,c,d){a=wt(a),c=Qe(c);var x=c?oa(a):0;return c&&x<c?a+lc(c-x,d):a}function DT(a,c,d){a=wt(a),c=Qe(c);var x=c?oa(a):0;return c&&x<c?lc(c-x,d)+a:a}function OT(a,c,d){return d||c==null?c=0:c&&(c=+c),B1(wt(a).replace(_o,""),c||0)}function IT(a,c,d){return(d?Di(a,c,d):c===t)?c=1:c=Qe(c),_h(wt(a),c)}function NT(){var a=arguments,c=wt(a[0]);return a.length<3?c:c.replace(a[1],a[2])}var zT=pa(function(a,c,d){return a+(d?"_":"")+c.toLowerCase()});function FT(a,c,d){return d&&typeof d!="number"&&Di(a,c,d)&&(c=d=t),d=d===t?ee:d>>>0,d?(a=wt(a),a&&(typeof c=="string"||c!=null&&!Bh(c))&&(c=nn(c),!c&&aa(a))?Xr(Nn(a),0,d):a.split(c,d)):[]}var kT=pa(function(a,c,d){return a+(d?" ":"")+Wh(c)});function UT(a,c,d){return a=wt(a),d=d==null?0:ys(Qe(d),0,a.length),c=nn(c),a.slice(d,d+c.length)==c}function BT(a,c,d){var x=P.templateSettings;d&&Di(a,c,d)&&(c=t),a=wt(a),c=yc({},c,x,gg);var E=yc({},c.imports,x.imports,gg),R=hi(E),z=eh(E,R),B,X,ge=0,ve=c.interpolate||Gi,we="__p += '",Oe=ih((c.escape||Gi).source+"|"+ve.source+"|"+(ve===Zn?je:Gi).source+"|"+(c.evaluate||Gi).source+"|$","g"),Be="//# sourceURL="+(Mt.call(c,"sourceURL")?(c.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++jb+"]")+`
`;a.replace(Oe,function(qe,ot,dt,sn,Oi,an){return dt||(dt=sn),we+=a.slice(ge,an).replace(pr,m1),ot&&(B=!0,we+=`' +
__e(`+ot+`) +
'`),Oi&&(X=!0,we+=`';
`+Oi+`;
__p += '`),dt&&(we+=`' +
((__t = (`+dt+`)) == null ? '' : __t) +
'`),ge=an+qe.length,qe}),we+=`';
`;var Xe=Mt.call(c,"variable")&&c.variable;if(!Xe)we=`with (obj) {
`+we+`
}
`;else if(pe.test(Xe))throw new Ze(l);we=(X?we.replace(bt,""):we).replace($,"$1").replace(ue,"$1;"),we="function("+(Xe||"obj")+`) {
`+(Xe?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(B?", __e = _.escape":"")+(X?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+we+`return __p
}`;var tt=l_(function(){return yt(R,Be+"return "+we).apply(t,z)});if(tt.source=we,Uh(tt))throw tt;return tt}function VT(a){return wt(a).toLowerCase()}function GT(a){return wt(a).toUpperCase()}function WT(a,c,d){if(a=wt(a),a&&(d||c===t))return _m(a);if(!a||!(c=nn(c)))return a;var x=Nn(a),E=Nn(c),R=vm(x,E),z=xm(x,E)+1;return Xr(x,R,z).join("")}function HT(a,c,d){if(a=wt(a),a&&(d||c===t))return a.slice(0,bm(a)+1);if(!a||!(c=nn(c)))return a;var x=Nn(a),E=xm(x,Nn(c))+1;return Xr(x,0,E).join("")}function $T(a,c,d){if(a=wt(a),a&&(d||c===t))return a.replace(_o,"");if(!a||!(c=nn(c)))return a;var x=Nn(a),E=vm(x,Nn(c));return Xr(x,E).join("")}function XT(a,c){var d=k,x=Y;if(kt(c)){var E="separator"in c?c.separator:E;d="length"in c?Qe(c.length):d,x="omission"in c?nn(c.omission):x}a=wt(a);var R=a.length;if(aa(a)){var z=Nn(a);R=z.length}if(d>=R)return a;var B=d-oa(x);if(B<1)return x;var X=z?Xr(z,0,B).join(""):a.slice(0,B);if(E===t)return X+x;if(z&&(B+=X.length-B),Bh(E)){if(a.slice(B).search(E)){var ge,ve=X;for(E.global||(E=ih(E.source,wt(Je.exec(E))+"g")),E.lastIndex=0;ge=E.exec(ve);)var we=ge.index;X=X.slice(0,we===t?B:we)}}else if(a.indexOf(nn(E),B)!=B){var Oe=X.lastIndexOf(E);Oe>-1&&(X=X.slice(0,Oe))}return X+x}function qT(a){return a=wt(a),a&&Ge.test(a)?a.replace(Me,w1):a}var YT=pa(function(a,c,d){return a+(d?" ":"")+c.toUpperCase()}),Wh=cg("toUpperCase");function o_(a,c,d){return a=wt(a),c=d?t:c,c===t?_1(a)?E1(a):l1(a):a.match(c)||[]}var l_=rt(function(a,c){try{return en(a,t,c)}catch(d){return Uh(d)?d:new Ze(d)}}),jT=yr(function(a,c){return xn(c,function(d){d=er(d),vr(a,d,Fh(a[d],a))}),a});function ZT(a){var c=a==null?0:a.length,d=$e();return a=c?zt(a,function(x){if(typeof x[1]!="function")throw new yn(o);return[d(x[0]),x[1]]}):[],rt(function(x){for(var E=-1;++E<c;){var R=a[E];if(en(R[0],this,x))return en(R[1],this,x)}})}function KT(a){return ww(wn(a,m))}function Hh(a){return function(){return a}}function JT(a,c){return a==null||a!==a?c:a}var QT=hg(),e2=hg(!0);function Xi(a){return a}function $h(a){return Vm(typeof a=="function"?a:wn(a,m))}function t2(a){return Wm(wn(a,m))}function i2(a,c){return Hm(a,wn(c,m))}var n2=rt(function(a,c){return function(d){return Lo(d,a,c)}}),r2=rt(function(a,c){return function(d){return Lo(a,d,c)}});function Xh(a,c,d){var x=hi(c),E=tc(c,x);d==null&&!(kt(c)&&(E.length||!x.length))&&(d=c,c=a,a=this,E=tc(c,hi(c)));var R=!(kt(d)&&"chain"in d)||!!d.chain,z=wr(a);return xn(E,function(B){var X=c[B];a[B]=X,z&&(a.prototype[B]=function(){var ge=this.__chain__;if(R||ge){var ve=a(this.__wrapped__),we=ve.__actions__=Wi(this.__actions__);return we.push({func:X,args:arguments,thisArg:a}),ve.__chain__=ge,ve}return X.apply(a,Br([this.value()],arguments))})}),a}function s2(){return gi._===this&&(gi._=R1),this}function qh(){}function a2(a){return a=Qe(a),rt(function(c){return $m(c,a)})}var o2=Mh(zt),l2=Mh(fm),c2=Mh(ju);function c_(a){return Rh(a)?Zu(er(a)):Uw(a)}function u2(a){return function(c){return a==null?t:bs(a,c)}}var h2=dg(),f2=dg(!0);function Yh(){return[]}function jh(){return!1}function d2(){return{}}function p2(){return""}function m2(){return!0}function g2(a,c){if(a=Qe(a),a<1||a>te)return[];var d=ee,x=bi(a,ee);c=$e(c),a-=ee;for(var E=Qu(x,c);++d<a;)c(d);return E}function _2(a){return Ke(a)?zt(a,er):rn(a)?[a]:Wi(Pg(wt(a)))}function v2(a){var c=++P1;return wt(a)+c}var x2=oc(function(a,c){return a+c},0),y2=Eh("ceil"),b2=oc(function(a,c){return a/c},1),w2=Eh("floor");function S2(a){return a&&a.length?ec(a,Xi,uh):t}function M2(a,c){return a&&a.length?ec(a,$e(c,2),uh):t}function E2(a){return mm(a,Xi)}function T2(a,c){return mm(a,$e(c,2))}function A2(a){return a&&a.length?ec(a,Xi,ph):t}function C2(a,c){return a&&a.length?ec(a,$e(c,2),ph):t}var P2=oc(function(a,c){return a*c},1),L2=Eh("round"),R2=oc(function(a,c){return a-c},0);function D2(a){return a&&a.length?Ju(a,Xi):0}function O2(a,c){return a&&a.length?Ju(a,$e(c,2)):0}return P.after=tE,P.ary=Bg,P.assign=GE,P.assignIn=e_,P.assignInWith=yc,P.assignWith=WE,P.at=HE,P.before=Vg,P.bind=Fh,P.bindAll=jT,P.bindKey=Gg,P.castArray=dE,P.chain=Fg,P.chunk=wS,P.compact=SS,P.concat=MS,P.cond=ZT,P.conforms=KT,P.constant=Hh,P.countBy=DM,P.create=$E,P.curry=Wg,P.curryRight=Hg,P.debounce=$g,P.defaults=XE,P.defaultsDeep=qE,P.defer=iE,P.delay=nE,P.difference=ES,P.differenceBy=TS,P.differenceWith=AS,P.drop=CS,P.dropRight=PS,P.dropRightWhile=LS,P.dropWhile=RS,P.fill=DS,P.filter=IM,P.flatMap=FM,P.flatMapDeep=kM,P.flatMapDepth=UM,P.flatten=Og,P.flattenDeep=OS,P.flattenDepth=IS,P.flip=rE,P.flow=QT,P.flowRight=e2,P.fromPairs=NS,P.functions=eT,P.functionsIn=tT,P.groupBy=BM,P.initial=FS,P.intersection=kS,P.intersectionBy=US,P.intersectionWith=BS,P.invert=nT,P.invertBy=rT,P.invokeMap=GM,P.iteratee=$h,P.keyBy=WM,P.keys=hi,P.keysIn=$i,P.map=pc,P.mapKeys=aT,P.mapValues=oT,P.matches=t2,P.matchesProperty=i2,P.memoize=gc,P.merge=lT,P.mergeWith=t_,P.method=n2,P.methodOf=r2,P.mixin=Xh,P.negate=_c,P.nthArg=a2,P.omit=cT,P.omitBy=uT,P.once=sE,P.orderBy=HM,P.over=o2,P.overArgs=aE,P.overEvery=l2,P.overSome=c2,P.partial=kh,P.partialRight=Xg,P.partition=$M,P.pick=hT,P.pickBy=i_,P.property=c_,P.propertyOf=u2,P.pull=HS,P.pullAll=Ng,P.pullAllBy=$S,P.pullAllWith=XS,P.pullAt=qS,P.range=h2,P.rangeRight=f2,P.rearg=oE,P.reject=YM,P.remove=YS,P.rest=lE,P.reverse=Nh,P.sampleSize=ZM,P.set=dT,P.setWith=pT,P.shuffle=KM,P.slice=jS,P.sortBy=eE,P.sortedUniq=iM,P.sortedUniqBy=nM,P.split=FT,P.spread=cE,P.tail=rM,P.take=sM,P.takeRight=aM,P.takeRightWhile=oM,P.takeWhile=lM,P.tap=SM,P.throttle=uE,P.thru=dc,P.toArray=Kg,P.toPairs=n_,P.toPairsIn=r_,P.toPath=_2,P.toPlainObject=Qg,P.transform=mT,P.unary=hE,P.union=cM,P.unionBy=uM,P.unionWith=hM,P.uniq=fM,P.uniqBy=dM,P.uniqWith=pM,P.unset=gT,P.unzip=zh,P.unzipWith=zg,P.update=_T,P.updateWith=vT,P.values=_a,P.valuesIn=xT,P.without=mM,P.words=o_,P.wrap=fE,P.xor=gM,P.xorBy=_M,P.xorWith=vM,P.zip=xM,P.zipObject=yM,P.zipObjectDeep=bM,P.zipWith=wM,P.entries=n_,P.entriesIn=r_,P.extend=e_,P.extendWith=yc,Xh(P,P),P.add=x2,P.attempt=l_,P.camelCase=ST,P.capitalize=s_,P.ceil=y2,P.clamp=yT,P.clone=pE,P.cloneDeep=gE,P.cloneDeepWith=_E,P.cloneWith=mE,P.conformsTo=vE,P.deburr=a_,P.defaultTo=JT,P.divide=b2,P.endsWith=MT,P.eq=Fn,P.escape=ET,P.escapeRegExp=TT,P.every=OM,P.find=NM,P.findIndex=Rg,P.findKey=YE,P.findLast=zM,P.findLastIndex=Dg,P.findLastKey=jE,P.floor=w2,P.forEach=kg,P.forEachRight=Ug,P.forIn=ZE,P.forInRight=KE,P.forOwn=JE,P.forOwnRight=QE,P.get=Vh,P.gt=xE,P.gte=yE,P.has=iT,P.hasIn=Gh,P.head=Ig,P.identity=Xi,P.includes=VM,P.indexOf=zS,P.inRange=bT,P.invoke=sT,P.isArguments=Ms,P.isArray=Ke,P.isArrayBuffer=bE,P.isArrayLike=Hi,P.isArrayLikeObject=qt,P.isBoolean=wE,P.isBuffer=qr,P.isDate=SE,P.isElement=ME,P.isEmpty=EE,P.isEqual=TE,P.isEqualWith=AE,P.isError=Uh,P.isFinite=CE,P.isFunction=wr,P.isInteger=qg,P.isLength=vc,P.isMap=Yg,P.isMatch=PE,P.isMatchWith=LE,P.isNaN=RE,P.isNative=DE,P.isNil=IE,P.isNull=OE,P.isNumber=jg,P.isObject=kt,P.isObjectLike=Wt,P.isPlainObject=zo,P.isRegExp=Bh,P.isSafeInteger=NE,P.isSet=Zg,P.isString=xc,P.isSymbol=rn,P.isTypedArray=ga,P.isUndefined=zE,P.isWeakMap=FE,P.isWeakSet=kE,P.join=VS,P.kebabCase=AT,P.last=Mn,P.lastIndexOf=GS,P.lowerCase=CT,P.lowerFirst=PT,P.lt=UE,P.lte=BE,P.max=S2,P.maxBy=M2,P.mean=E2,P.meanBy=T2,P.min=A2,P.minBy=C2,P.stubArray=Yh,P.stubFalse=jh,P.stubObject=d2,P.stubString=p2,P.stubTrue=m2,P.multiply=P2,P.nth=WS,P.noConflict=s2,P.noop=qh,P.now=mc,P.pad=LT,P.padEnd=RT,P.padStart=DT,P.parseInt=OT,P.random=wT,P.reduce=XM,P.reduceRight=qM,P.repeat=IT,P.replace=NT,P.result=fT,P.round=L2,P.runInContext=H,P.sample=jM,P.size=JM,P.snakeCase=zT,P.some=QM,P.sortedIndex=ZS,P.sortedIndexBy=KS,P.sortedIndexOf=JS,P.sortedLastIndex=QS,P.sortedLastIndexBy=eM,P.sortedLastIndexOf=tM,P.startCase=kT,P.startsWith=UT,P.subtract=R2,P.sum=D2,P.sumBy=O2,P.template=BT,P.times=g2,P.toFinite=Sr,P.toInteger=Qe,P.toLength=Jg,P.toLower=VT,P.toNumber=En,P.toSafeInteger=VE,P.toString=wt,P.toUpper=GT,P.trim=WT,P.trimEnd=HT,P.trimStart=$T,P.truncate=XT,P.unescape=qT,P.uniqueId=v2,P.upperCase=YT,P.upperFirst=Wh,P.each=kg,P.eachRight=Ug,P.first=Ig,Xh(P,function(){var a={};return Jn(P,function(c,d){Mt.call(P.prototype,d)||(a[d]=c)}),a}(),{chain:!1}),P.VERSION=i,xn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(a){P[a].placeholder=P}),xn(["drop","take"],function(a,c){ht.prototype[a]=function(d){d=d===t?1:ii(Qe(d),0);var x=this.__filtered__&&!c?new ht(this):this.clone();return x.__filtered__?x.__takeCount__=bi(d,x.__takeCount__):x.__views__.push({size:bi(d,ee),type:a+(x.__dir__<0?"Right":"")}),x},ht.prototype[a+"Right"]=function(d){return this.reverse()[a](d).reverse()}}),xn(["filter","map","takeWhile"],function(a,c){var d=c+1,x=d==V||d==se;ht.prototype[a]=function(E){var R=this.clone();return R.__iteratees__.push({iteratee:$e(E,3),type:d}),R.__filtered__=R.__filtered__||x,R}}),xn(["head","last"],function(a,c){var d="take"+(c?"Right":"");ht.prototype[a]=function(){return this[d](1).value()[0]}}),xn(["initial","tail"],function(a,c){var d="drop"+(c?"":"Right");ht.prototype[a]=function(){return this.__filtered__?new ht(this):this[d](1)}}),ht.prototype.compact=function(){return this.filter(Xi)},ht.prototype.find=function(a){return this.filter(a).head()},ht.prototype.findLast=function(a){return this.reverse().find(a)},ht.prototype.invokeMap=rt(function(a,c){return typeof a=="function"?new ht(this):this.map(function(d){return Lo(d,a,c)})}),ht.prototype.reject=function(a){return this.filter(_c($e(a)))},ht.prototype.slice=function(a,c){a=Qe(a);var d=this;return d.__filtered__&&(a>0||c<0)?new ht(d):(a<0?d=d.takeRight(-a):a&&(d=d.drop(a)),c!==t&&(c=Qe(c),d=c<0?d.dropRight(-c):d.take(c-a)),d)},ht.prototype.takeRightWhile=function(a){return this.reverse().takeWhile(a).reverse()},ht.prototype.toArray=function(){return this.take(ee)},Jn(ht.prototype,function(a,c){var d=/^(?:filter|find|map|reject)|While$/.test(c),x=/^(?:head|last)$/.test(c),E=P[x?"take"+(c=="last"?"Right":""):c],R=x||/^find/.test(c);!E||(P.prototype[c]=function(){var z=this.__wrapped__,B=x?[1]:arguments,X=z instanceof ht,ge=B[0],ve=X||Ke(z),we=function(ot){var dt=E.apply(P,Br([ot],B));return x&&Oe?dt[0]:dt};ve&&d&&typeof ge=="function"&&ge.length!=1&&(X=ve=!1);var Oe=this.__chain__,Be=!!this.__actions__.length,Xe=R&&!Oe,tt=X&&!Be;if(!R&&ve){z=tt?z:new ht(this);var qe=a.apply(z,B);return qe.__actions__.push({func:dc,args:[we],thisArg:t}),new bn(qe,Oe)}return Xe&&tt?a.apply(this,B):(qe=this.thru(we),Xe?x?qe.value()[0]:qe.value():qe)})}),xn(["pop","push","shift","sort","splice","unshift"],function(a){var c=Ul[a],d=/^(?:push|sort|unshift)$/.test(a)?"tap":"thru",x=/^(?:pop|shift)$/.test(a);P.prototype[a]=function(){var E=arguments;if(x&&!this.__chain__){var R=this.value();return c.apply(Ke(R)?R:[],E)}return this[d](function(z){return c.apply(Ke(z)?z:[],E)})}}),Jn(ht.prototype,function(a,c){var d=P[c];if(d){var x=d.name+"";Mt.call(ha,x)||(ha[x]=[]),ha[x].push({name:c,func:d})}}),ha[ac(t,b).name]=[{name:"wrapper",func:t}],ht.prototype.clone=q1,ht.prototype.reverse=Y1,ht.prototype.value=j1,P.prototype.at=MM,P.prototype.chain=EM,P.prototype.commit=TM,P.prototype.next=AM,P.prototype.plant=PM,P.prototype.reverse=LM,P.prototype.toJSON=P.prototype.valueOf=P.prototype.value=RM,P.prototype.first=P.prototype.head,So&&(P.prototype[So]=CM),P},la=T1();gs?((gs.exports=la)._=la,$u._=la):gi._=la}).call(sr)})(Sl,Sl.exports);function h4(r){var e=typeof r;return r!=null&&(e=="object"||e=="function")}var Wp=h4,f4=typeof sr=="object"&&sr&&sr.Object===Object&&sr,d4=f4,p4=d4,m4=typeof self=="object"&&self&&self.Object===Object&&self,g4=p4||m4||Function("return this")(),Pb=g4,_4=Pb,v4=function(){return _4.Date.now()},x4=v4,y4=/\s/;function b4(r){for(var e=r.length;e--&&y4.test(r.charAt(e)););return e}var w4=b4,S4=w4,M4=/^\s+/;function E4(r){return r&&r.slice(0,S4(r)+1).replace(M4,"")}var T4=E4,A4=Pb,C4=A4.Symbol,Lb=C4,pv=Lb,Rb=Object.prototype,P4=Rb.hasOwnProperty,L4=Rb.toString,Zo=pv?pv.toStringTag:void 0;function R4(r){var e=P4.call(r,Zo),t=r[Zo];try{r[Zo]=void 0;var i=!0}catch{}var n=L4.call(r);return i&&(e?r[Zo]=t:delete r[Zo]),n}var D4=R4,O4=Object.prototype,I4=O4.toString;function N4(r){return I4.call(r)}var z4=N4,mv=Lb,F4=D4,k4=z4,U4="[object Null]",B4="[object Undefined]",gv=mv?mv.toStringTag:void 0;function V4(r){return r==null?r===void 0?B4:U4:gv&&gv in Object(r)?F4(r):k4(r)}var G4=V4;function W4(r){return r!=null&&typeof r=="object"}var H4=W4,$4=G4,X4=H4,q4="[object Symbol]";function Y4(r){return typeof r=="symbol"||X4(r)&&$4(r)==q4}var j4=Y4,Z4=T4,_v=Wp,K4=j4,vv=0/0,J4=/^[-+]0x[0-9a-f]+$/i,Q4=/^0b[01]+$/i,eF=/^0o[0-7]+$/i,tF=parseInt;function iF(r){if(typeof r=="number")return r;if(K4(r))return vv;if(_v(r)){var e=typeof r.valueOf=="function"?r.valueOf():r;r=_v(e)?e+"":e}if(typeof r!="string")return r===0?r:+r;r=Z4(r);var t=Q4.test(r);return t||eF.test(r)?tF(r.slice(2),t?2:8):J4.test(r)?vv:+r}var nF=iF,rF=Wp,Qf=x4,xv=nF,sF="Expected a function",aF=Math.max,oF=Math.min;function lF(r,e,t){var i,n,s,o,l,u,h=0,f=!1,m=!1,p=!0;if(typeof r!="function")throw new TypeError(sF);e=xv(e)||0,rF(t)&&(f=!!t.leading,m="maxWait"in t,s=m?aF(xv(t.maxWait)||0,e):s,p="trailing"in t?!!t.trailing:p);function v(C){var O=i,S=n;return i=n=void 0,h=C,o=r.apply(S,O),o}function y(C){return h=C,l=setTimeout(b,e),f?v(C):o}function g(C){var O=C-u,S=C-h,L=e-O;return m?oF(L,s-S):L}function _(C){var O=C-u,S=C-h;return u===void 0||O>=e||O<0||m&&S>=s}function b(){var C=Qf();if(_(C))return A(C);l=setTimeout(b,g(C))}function A(C){return l=void 0,p&&i?v(C):(i=n=void 0,o)}function w(){l!==void 0&&clearTimeout(l),h=0,i=u=n=l=void 0}function T(){return l===void 0?o:A(Qf())}function M(){var C=Qf(),O=_(C);if(i=arguments,n=this,u=C,O){if(l===void 0)return y(u);if(m)return clearTimeout(l),l=setTimeout(b,e),v(u)}return l===void 0&&(l=setTimeout(b,e)),o}return M.cancel=w,M.flush=T,M}var cF=lF,uF=cF,hF=Wp,fF="Expected a function";function dF(r,e,t){var i=!0,n=!0;if(typeof r!="function")throw new TypeError(fF);return hF(t)&&(i="leading"in t?!!t.leading:i,n="trailing"in t?!!t.trailing:n),uF(r,e,{leading:i,maxWait:e,trailing:n})}var pF=dF;const Ga=class extends Fu.exports.EventEmitter{constructor(t,i={}){super();U(this,"$target");U(this,"config");U(this,"isDown");U(this,"status");this.$target=t,this.config=Object.assign({moveWhileDown:!0,targetOut:!1,draggable:!0,wheelable:!1,wheelReverse:!1,wheelUseYtoX:!1,wheelPower:.1,wheelDirection:{x:1,y:1},prevent:!1},i),this.isDown=!1,this.status={start:{x:0,y:0},move:{x:0,y:0},end:{x:0,y:0},wheel:{deltaX:0,deltaY:0},distance:{x:0,y:0},distanceOffset:function(){return{x:Math.abs(this.distance.x),y:Math.abs(this.distance.y)}}};const n=h=>{this.status.start=u(h),this.status.move={x:0,y:0},this.status.end={x:0,y:0},this.status.distance={x:0,y:0},this.emit(Ga.EVENT_DRAG_START,this.status),this.isDown=!0,ji.isPC&&(document.addEventListener("mousemove",s,{passive:!1}),document.addEventListener("mouseup",o),this.config.targetOut&&t.addEventListener("mouseout",o)),document.addEventListener("touchmove",s,{passive:!1}),document.addEventListener("touchend",o,!1)},s=h=>{this.status.move=u(h),this.status.distance.x=this.status.start.x-this.status.move.x,this.status.distance.y=this.status.start.y-this.status.move.y,this.emit(Ga.EVENT_DRAG_MOVE,this.status)},o=h=>{this.isDown=!1,this.status.end=this.status.move,this.emit(Ga.EVENT_DRAG_END,this.status),ji.isPC&&(document.removeEventListener("mousemove",s),document.removeEventListener("mouseup",o),this.config.targetOut&&t.removeEventListener("mouseout",o)),document.removeEventListener("touchmove",s),document.removeEventListener("touchend",o)};let l=h=>{let f=h.deltaX*this.config.wheelDirection.x,m=h.deltaY*this.config.wheelDirection.y;this.config.wheelUseYtoX?(this.status.wheel.deltaX=-m,this.status.wheel.deltaY=-f):(this.status.wheel.deltaX=-f,this.status.wheel.deltaY=-m),this.status.wheel.deltaX*=this.config.wheelPower,this.status.wheel.deltaY*=this.config.wheelPower,this.emit(Ga.EVENT_MOUSE_WHEEL,this.status)};l=pF(l.bind(this),16);function u(h){let f={x:0,y:0};if(h.target.getBoundingClientRect(),h.touches){let m;h.touches?(m=h.touches[0],f.x=m.clientX,f.y=m.clientY):(f.x=h.clientX,f.y=h.clientY)}else f.x=h.clientX,f.y=h.clientY;return f}ji.isPC&&(this.config.draggable&&this.$target.addEventListener("mousedown",n),this.config.wheelable&&this.$target.addEventListener("wheel",l,{passive:!0})),this.config.draggable&&this.$target.addEventListener("touchstart",n,{passive:!0}),this.on("destroy",()=>{this.$target.removeEventListener("touchstart",n),ji.isPC&&this.$target.removeEventListener("mousedown",n)})}destroy(){this.emit("destroy")}};let Qr=Ga;U(Qr,"EVENT_DRAG_START","dragStart"),U(Qr,"EVENT_DRAG_MOVE","dragMove"),U(Qr,"EVENT_DRAG_END","dragEnd"),U(Qr,"EVENT_MOUSE_WHEEL","mouseWheel"),U(Qr,"EVENT_RESIZE","resize");const Is=class extends Qr{constructor(t,i={}){super(t,i);U(this,"smoothConfig");U(this,"offset");U(this,"isRender");U(this,"isDrag");U(this,"redererID");U(this,"moveTargetOffset");U(this,"scroll");if(this.smoothConfig=Object.assign({power:.2,friction:.8,moveTarget:null},i),this.offset={old:{x:0,y:0},vf:{x:0,y:0,oldY:-1,oldX:-1},isStop:!1},this.isRender=!1,this.redererID=NaN,this.on(Is.EVENT_DRAG_START,l=>{this.offset.old=l.start,s()}),this.on(Is.EVENT_DRAG_MOVE,l=>{s(),this.offset.vf.x+=Math.round((l.move.x-this.offset.old.x)*this.smoothConfig.power),this.offset.vf.y+=Math.round((l.move.y-this.offset.old.y)*this.smoothConfig.power),this.offset.old=l.move}),this.on(Is.EVENT_DRAG_END,l=>{}),this.config.wheelable&&this.on(Is.EVENT_MOUSE_WHEEL,l=>{this.offset.vf.x+=l.wheel.deltaX*this.config.wheelDirection.x,this.offset.vf.y+=l.wheel.deltaY*this.config.wheelDirection.y,s()}),this.smoothConfig.moveTarget){let l=this.$target,u=this.smoothConfig.moveTarget;this.moveTargetOffset={x:0,_x:0,minX:0,maxX:0,y:0,_y:0,minY:0,maxY:0},this.onUpdate=f=>{let m=.3;f?(this.moveTargetOffset.x+=-f.vf.x,this.moveTargetOffset.y+=-f.vf.y):m=1,this.moveTargetOffset.x<0&&(this.moveTargetOffset.x+=-this.moveTargetOffset.x*.2),this.moveTargetOffset.x>this.moveTargetOffset.maxX&&(this.moveTargetOffset.x+=(this.moveTargetOffset.maxX-this.moveTargetOffset.x)*.2),this.moveTargetOffset.y=mu(this.moveTargetOffset.y,this.moveTargetOffset.minY,this.moveTargetOffset.maxY),this.moveTargetOffset._x+=(this.moveTargetOffset.x-this.moveTargetOffset._x)*m,this.moveTargetOffset._y+=(this.moveTargetOffset.y-this.moveTargetOffset._y)*m,this.translate(u,-this.moveTargetOffset._x,-this.moveTargetOffset._y,0)},this.scroll=(f,m)=>{this.moveTargetOffset.x=f,this.moveTargetOffset.y=m,this.onUpdate(this.offset)};const h=Sl.exports.debounce(()=>{this.moveTargetOffset.maxX=Math.max(0,u.offsetWidth-l.offsetWidth),this.moveTargetOffset.maxY=Math.max(0,u.offsetHeight-l.offsetHeight),this.onUpdate(this.offset),this.emit(Is.EVENT_RESIZE)},40);window.addEventListener("resize",h),h(),this.resize=h.bind(this)}const n=()=>{this.isRender&&(o(),this.redererID=requestAnimationFrame(n.bind(this)))},s=()=>{this.isRender||(this.isRender=!0,n())},o=()=>{const l=this.offset.vf;l.x*=this.smoothConfig.friction,l.y*=this.smoothConfig.friction,l.x=Math.round(l.x*1e3)/1e3,l.y=Math.round(l.y*1e3)/1e3,l.x>-.01&&l.x<.01&&!this.isDrag&&(l.x=0),l.y>-.01&&l.y<.01&&!this.isDrag&&(l.y=0),l.x==0&&l.y==0?(this.isRender=!1,cancelAnimationFrame(this.redererID),this.offset.isStop=!0):this.offset.isStop=!1,(l.oldX!=l.x||l.oldY!=l.y)&&this.onUpdate(this.offset),l.oldX=l.x,l.oldY=l.y}}translate(t,i,n,s=0){t.style.transform=`translate3d(${i}px,${n}px,${s}px)`}resize(){}onUpdate(t){}};let lr=Is;U(lr,"EVENT_SMOOTH_UPDATE","smoothUpdate"),U(lr,"EVENT_SMOOTH_UPDATE_DONE","smoothUpdateDone");const mF=()=>({isOpen:!1,isOn:!1,inner:null,isCenter:!1,picVideos:[],init(){this.$store.sitemenu=this;let r;this.element=this.$root,this.$refs.bgBlur.addEventListener("click",()=>{this.$store.status.menuOpen=!1});let e={x:0,_x:0,minX:0,maxX:0},t=this.element.querySelector("[x-ref='container']"),i=this.element.querySelector("[x-ref='containerInner']"),n=new lr(this.element,{power:ji.isMobile?.3:.35,friction:.89,wheelUseYtoX:!0,wheelable:!0,wheelDirection:{x:1,y:-1}}),s=new Ol;document.querySelectorAll(".navi-pic").forEach((u,h)=>{const f=u.querySelector("video");this.picVideos.push(f),s.add(f,m=>{m&&f.paused&&f.currentTime==0&&(f.currentTime=0,f.playbackRate=1,f.play())})}),this.element.querySelectorAll("a").forEach((u,h)=>{u.addEventListener("click",async f=>{let m=u.getAttribute("href");m==window.location.hash?(this.$store.status.menuOpen=!1,await Pn(500),this.jump(m.replace("#",""))):this.$store.status.menuOpen=!1})}),n.onUpdate=u=>{let h=.2;u?(e.x+=u.vf.x,e.x+=-u.vf.y):h=1,e.x=mu(e.x,e.minX,e.maxX),this.isCenter?(e._x=e.x=e.minX,is(i,e._x,0,0)):(e._x+=(e.x-e._x)*h,e._x=Math.round(e._x*100)/100,is(i,e._x,0,0))};const o=u=>{e._x=e.x=u,is(i,e._x,0,0)},l=()=>{let u=t.offsetWidth,h=i.offsetWidth;if(e.maxX=Math.max(0,i.offsetWidth-t.offsetWidth),i.offsetWidth<window.innerWidth){let f=-(u-h)*.5;e.maxX=f,e.minX=f,e._x=e.x=e.minX,is(i,e._x,0,0),this.isCenter=!0}else e.minX=0,this.isCenter=!1};window.addEventListener("resize",Sl.exports.debounce(l,40)),n.on(lr.EVENT_DRAG_MOVE,()=>{this.element.classList.add("dragging")}),n.on(lr.EVENT_DRAG_END,()=>{this.element.classList.remove("dragging")}),this.$watch("$store.status.menuOpen",async u=>{Xs(!u),u?(this.isOpen=!0,o(0),this.$nextTick(()=>{this.open(),l()})):(this.close(),await Pn(1e3),this.picVideos.forEach((h,f)=>{h.currentTime=0,h.paused||h.pause()}),this.isOpen=!1)}),this.$watch("isOpen",u=>{this.$nextTick(()=>{}),u?r=document.activeElement:(r.focus({preventScroll:!0}),r=null)}),this.checkKey=u=>{gF(u.target)||u.key==="Escape"&&(this.$store.status.menuOpen=!1)},document.addEventListener("keydown",this.checkKey,!0),window.addEventListener("jump",u=>{this.jump(u.detail.id,u.detail.duration)}),window.addEventListener("hashchange",u=>{this.hashCheck()&&this.hashMove()})},jump(r,e){let t=document.getElementById(r);if(!t)return;let i=t.getBoundingClientRect(),n=0;n=vi.x,n-=i.right,n*=vi.ratioByVetical,r=="01"?n+=window.innerWidth*.5:r=="04"?n+=window.innerWidth:n+=window.innerWidth*.8;let s=1;typeof e>"u"&&(s=Math.abs(n-vi.x)/6e3,s=mu(s,2,4)),r=="top"&&(n=0,window.history.replaceState(null,"",window.location.pathname)),Or.lenis?Or.lenis.scrollTo(n,{duration:s,easing:xy.easeInOutQuart}):mn.to("body,html",{duration:s,scrollTop:n,overwrite:!0,ease:"Power2.easeInOut"})},hashCheck(){return document.getElementById(window.location.hash.replace("#",""))},hashMove(){this.hashCheck()&&this.jump(window.location.hash.replace("#",""))},open(){this.isOn=!0},close(){this.isOn=!1},destroy(){document.removeEventListener("keydown",this.checkKey),this.activateOutside&&this.activateOutside()},root:{["x-effect"](){if(this.isOpen){this.$nextTick(()=>{});return}this.activateOutside&&(this.activateOutside(),this.activateOutside=null)}},autoFocus:{["x-effect"](){this.isOpen&&this.$nextTick(()=>Cb(this.$el,{preventScroll:!0}))}}});function gF(r){const e=r.nodeName.toLowerCase(),t=(r.getAttribute("type")||"").toLowerCase();return e==="select"||e==="textarea"||e==="input"&&t!=="submit"&&t!=="reset"&&t!=="checkbox"&&t!=="radio"||r.isContentEditable}const _F=()=>({isOpen:!1,isOn:!1,inner:null,isCenter:!1,picVideos:[],init(){let r;this.element=this.$root,this.$refs.bgBlur.addEventListener("click",()=>{this.$store.status.modalOpen=!1});let e={x:0,_x:0,minX:0,maxX:0},t=this.element.querySelector("[x-ref='container']"),i=this.element.querySelector("[x-ref='containerInner']"),n=new lr(this.element,{power:ji.isMobile?.3:.35,friction:.89,wheelUseYtoX:!0,wheelable:!0,wheelDirection:{x:1,y:-1}}),s=new Ol,o=this.element.querySelectorAll(".img-text .img-text__inner");o.forEach(f=>{s.add(f,(m,p)=>{m?f.classList.add("is-active"):p.boundingClientRect.right<window.innerWidth*.5&&f.classList.remove("is-active")})});let l=this.element.querySelectorAll(".img-box");l.forEach(f=>{s.add(f,(m,p)=>{m?f.classList.add("is-active"):p.boundingClientRect.right<window.innerWidth*.5&&f.classList.remove("is-active")})}),n.onUpdate=f=>{let m=.3;f?(e.x+=f.vf.x,e.x+=-f.vf.y):m=1,e.x=mu(e.x,e.minX,e.maxX),this.isCenter?(e._x=e.x=e.minX,is(i,e._x,0,0)):(e._x+=(e.x-e._x)*m,e._x=Math.round(e._x*100)/100,is(i,e._x,0,0))};const u=f=>{e._x=e.x=f,is(i,e._x,0,0)},h=()=>{let f=t.offsetWidth,m=i.offsetWidth;if(e.maxX=Math.max(0,i.offsetWidth-t.offsetWidth),i.offsetWidth<window.innerWidth){let p=-(f-m)*.5;e.maxX=p,e.minX=p,e._x=e.x=e.minX,is(i,e._x,0,0),this.isCenter=!0}else e.minX=0,this.isCenter=!1};window.addEventListener("resize",Sl.exports.debounce(h,40)),n.on(lr.EVENT_DRAG_MOVE,()=>{this.element.classList.add("dragging")}),n.on(lr.EVENT_DRAG_END,()=>{this.element.classList.remove("dragging")}),this.$watch("$store.status.modalOpen",async f=>{Xs(!f),f?(this.isOpen=!0,u(0),this.$nextTick(()=>{this.open(),h()})):(this.close(),await Pn(1e3),this.isOpen=!1,o.forEach(m=>{m.classList.remove("is-active")}))}),this.$watch("isOpen",f=>{this.$nextTick(()=>{}),f?(r=document.activeElement,l.forEach(m=>{m.classList.remove("is-active")})):(r.focus({preventScroll:!0}),r=null,l.forEach(m=>{m.classList.remove("is-active")}))}),this.checkKey=f=>{vF(f.target)||f.key==="Escape"&&(this.$store.status.menuOpen=!1)},document.addEventListener("keydown",this.checkKey,!0)},open(){this.isOn=!0},close(){this.isOn=!1},destroy(){document.removeEventListener("keydown",this.checkKey),this.activateOutside&&this.activateOutside()},root:{["x-effect"](){if(this.isOpen){this.$nextTick(()=>{});return}this.activateOutside&&(this.activateOutside(),this.activateOutside=null)}},autoFocus:{["x-effect"](){this.isOpen&&this.$nextTick(()=>Cb(this.$el,{preventScroll:!0}))}}});function vF(r){const e=r.nodeName.toLowerCase(),t=(r.getAttribute("type")||"").toLowerCase();return e==="select"||e==="textarea"||e==="input"&&t!=="submit"&&t!=="reset"&&t!=="checkbox"&&t!=="radio"||r.isContentEditable}const xF=/[\p{Lu}]/u,yF=/[\p{Ll}]/u,yv=/^[\p{Lu}](?![\p{Lu}])/gu,Db=/([\p{Alpha}\p{N}_]|$)/u,Hp=/[_.\- ]+/,bF=new RegExp("^"+Hp.source),bv=new RegExp(Hp.source+Db.source,"gu"),wv=new RegExp("\\d+"+Db.source,"gu"),wF=(r,e,t)=>{let i=!1,n=!1,s=!1;for(let o=0;o<r.length;o++){const l=r[o];i&&xF.test(l)?(r=r.slice(0,o)+"-"+r.slice(o),i=!1,s=n,n=!0,o++):n&&s&&yF.test(l)?(r=r.slice(0,o-1)+"-"+r.slice(o-1),s=n,n=!1,i=!0):(i=e(l)===l&&t(l)!==l,s=n,n=t(l)===l&&e(l)!==l)}return r},SF=(r,e)=>(yv.lastIndex=0,r.replace(yv,t=>e(t))),MF=(r,e)=>(bv.lastIndex=0,wv.lastIndex=0,r.replace(bv,(t,i)=>e(i)).replace(wv,t=>e(t)));function Ob(r,e){if(!(typeof r=="string"||Array.isArray(r)))throw new TypeError("Expected the input to be `string | string[]`");if(e={pascalCase:!1,preserveConsecutiveUppercase:!1,...e},Array.isArray(r)?r=r.map(s=>s.trim()).filter(s=>s.length).join("-"):r=r.trim(),r.length===0)return"";const t=e.locale===!1?s=>s.toLowerCase():s=>s.toLocaleLowerCase(e.locale),i=e.locale===!1?s=>s.toUpperCase():s=>s.toLocaleUpperCase(e.locale);return r.length===1?Hp.test(r)?"":e.pascalCase?i(r):t(r):(r!==t(r)&&(r=wF(r,t,i)),r=r.replace(bF,""),r=e.preserveConsecutiveUppercase?SF(r,t):t(r),e.pascalCase&&(r=i(r.charAt(0))+r.slice(1)),MF(r,i))}function EF(r){const e=Object.assign({"./app.ts":c4,"./example.ts":u4,"./sitemenu.ts":mF,"./sitemodal.ts":_F});for(const[t,i]of Object.entries(e)){const s=t.split("/").slice(-1)[0].split(".").slice(0,-1).join(".");r.data(Ob(s),i)}}const TF=()=>({init(){}}),AF=()=>({menuOpen:!1,modalOpen:!1,modalContentId:0,colorFulProgress:0,init(){}});function CF(r){const e=Object.assign({"./example.ts":TF,"./status.ts":AF});for(const[t,i]of Object.entries(e)){const s=t.split("/").slice(-1)[0].split(".").slice(0,-1).join(".");r.store(Ob(s),i())}}fo.plugin(t3);fo.plugin(N3);fo.plugin(EF);fo.plugin(CF);window.Alpine=fo;fo.start();
