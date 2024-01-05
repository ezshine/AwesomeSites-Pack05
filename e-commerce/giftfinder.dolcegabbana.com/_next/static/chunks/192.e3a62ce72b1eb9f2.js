(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[192],{296:function(e){function t(e,t,r){function n(){var c=Date.now()-u;c<t&&c>=0?l=setTimeout(n,t-c):(l=null,r||(i=e.apply(s,o),s=o=null))}null==t&&(t=100);var l,o,s,u,i,c=function(){s=this,o=arguments,u=Date.now();var c=r&&!l;return l||(l=setTimeout(n,t)),c&&(i=e.apply(s,o),s=o=null),i};return c.clear=function(){l&&(clearTimeout(l),l=null)},c.flush=function(){l&&(i=e.apply(s,o),s=o=null,clearTimeout(l),l=null)},c}t.debounce=t,e.exports=t},7192:function(e,t,r){"use strict";r.r(t),r.d(t,{CanvasRender:function(){return F}});var n,l=r(5893),o=r(8436);function s(){return(s=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var u=r(7294),i=r(9477),c=r(296),a=r.n(c);let d=["x","y","top","bottom","left","right","width","height"],f=(e,t)=>d.every(r=>e[r]===t[r]);var p=Object.defineProperty,v=Object.defineProperties,h=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&w(e,r,t[r]);if(m)for(var r of m(t))E.call(t,r)&&w(e,r,t[r]);return e},g=(e,t)=>v(e,h(t));function O(e){try{return Object.defineProperties(e,{_currentRenderer:{get:()=>null,set(){}},_currentRenderer2:{get:()=>null,set(){}}})}catch(t){return e}}let C=O(u.createContext(null));class z extends u.Component{render(){return u.createElement(C.Provider,{value:this._reactInternals},this.props.children)}}let{ReactCurrentOwner:j,ReactCurrentDispatcher:x}=null!=(n=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)?n:{};r(2576),r(6525),r(3840);let P={onClick:["click",!1],onContextMenu:["contextmenu",!1],onDoubleClick:["dblclick",!1],onWheel:["wheel",!0],onPointerDown:["pointerdown",!0],onPointerUp:["pointerup",!0],onPointerLeave:["pointerleave",!0],onPointerMove:["pointermove",!0],onPointerCancel:["pointercancel",!0],onLostPointerCapture:["lostpointercapture",!0]};function _(e){let{handlePointer:t}=(0,o.c)(e);return{priority:1,enabled:!0,compute(e,t,r){t.pointer.set(e.offsetX/t.size.width*2-1,-(2*(e.offsetY/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)},connected:void 0,handlers:Object.keys(P).reduce((e,r)=>({...e,[r]:t(r)}),{}),update:()=>{var t;let{events:r,internal:n}=e.getState();null!=(t=n.lastEvent)&&t.current&&r.handlers&&r.handlers.onPointerMove(n.lastEvent.current)},connect:t=>{var r;let{set:n,events:l}=e.getState();null==l.disconnect||l.disconnect(),n(e=>({events:{...e.events,connected:t}})),Object.entries(null!=(r=l.handlers)?r:[]).forEach(([e,r])=>{let[n,l]=P[e];t.addEventListener(n,r,{passive:l})})},disconnect:()=>{let{set:t,events:r}=e.getState();if(r.connected){var n;Object.entries(null!=(n=r.handlers)?n:[]).forEach(([e,t])=>{if(r&&r.connected instanceof HTMLElement){let[n]=P[e];r.connected.removeEventListener(n,t)}}),t(e=>({events:{...e.events,connected:void 0}}))}}}}let R=u.forwardRef(function({children:e,fallback:t,resize:r,style:n,gl:l,events:c=_,eventSource:d,eventPrefix:p,shadows:v,linear:h,flat:m,legacy:b,orthographic:E,frameloop:w,dpr:P,performance:R,raycaster:S,camera:L,onPointerMissed:k,onCreated:T,...M},B){u.useMemo(()=>(0,o.e)(i),[]);let D=function(){var e,t;let r=function(){let e=u.useContext(C),t=u.useId(),r=u.useMemo(()=>{var r;return null!=(r=null==j?void 0:j.current)?r:function e(t,r,n){if(!t)return;if(!0===n(t))return t;let l=r?t.return:t.child;for(;l;){let t=e(l,r,n);if(t)return t;l=r?null:l.sibling}}(e,!1,e=>{let r=e.memoizedState;for(;r;){if(r.memoizedState===t)return!0;r=r.next}})},[e,t]);return r}(),[n]=u.useState(()=>new Map);n.clear();let l=r;for(;l;){let r=null==(e=l.type)?void 0:e._context;r&&r!==C&&!n.has(r)&&n.set(r,null==(t=null==x?void 0:x.current)?void 0:t.readContext(O(r))),l=l.return}return u.useMemo(()=>Array.from(n.keys()).reduce((e,t)=>r=>u.createElement(e,null,u.createElement(t.Provider,g(y({},r),{value:n.get(t)}))),e=>u.createElement(z,y({},e))),[n])}(),[I,N]=function(e){var t;let{debounce:r,scroll:n,polyfill:l,offsetSize:o}=void 0===e?{debounce:0,scroll:!1,offsetSize:!1}:e,s=l||("undefined"==typeof window?class{}:window.ResizeObserver);if(!s)throw Error("This browser does not support ResizeObserver out of the box. See: https://github.com/react-spring/react-use-measure/#resize-observer-polyfills");let[i,c]=(0,u.useState)({left:0,top:0,width:0,height:0,bottom:0,right:0,x:0,y:0}),d=(0,u.useRef)({element:null,scrollContainers:null,resizeObserver:null,lastBounds:i}),p=r?"number"==typeof r?r:r.scroll:null,v=r?"number"==typeof r?r:r.resize:null,h=(0,u.useRef)(!1);(0,u.useEffect)(()=>(h.current=!0,()=>void(h.current=!1)));let[m,b,E]=(0,u.useMemo)(()=>{let e=()=>{if(!d.current.element)return;let{left:e,top:t,width:r,height:n,bottom:l,right:s,x:u,y:i}=d.current.element.getBoundingClientRect(),a={left:e,top:t,width:r,height:n,bottom:l,right:s,x:u,y:i};d.current.element instanceof HTMLElement&&o&&(a.height=d.current.element.offsetHeight,a.width=d.current.element.offsetWidth),Object.freeze(a),h.current&&!f(d.current.lastBounds,a)&&c(d.current.lastBounds=a)};return[e,v?a()(e,v):e,p?a()(e,p):e]},[c,o,p,v]);function w(){d.current.scrollContainers&&(d.current.scrollContainers.forEach(e=>e.removeEventListener("scroll",E,!0)),d.current.scrollContainers=null),d.current.resizeObserver&&(d.current.resizeObserver.disconnect(),d.current.resizeObserver=null)}function y(){d.current.element&&(d.current.resizeObserver=new s(E),d.current.resizeObserver.observe(d.current.element),n&&d.current.scrollContainers&&d.current.scrollContainers.forEach(e=>e.addEventListener("scroll",E,{capture:!0,passive:!0})))}let g=e=>{e&&e!==d.current.element&&(w(),d.current.element=e,d.current.scrollContainers=function e(t){let r=[];if(!t||t===document.body)return r;let{overflow:n,overflowX:l,overflowY:o}=window.getComputedStyle(t);return[n,l,o].some(e=>"auto"===e||"scroll"===e)&&r.push(t),[...r,...e(t.parentElement)]}(e),y())};return t=Boolean(n),(0,u.useEffect)(()=>{if(t)return window.addEventListener("scroll",E,{capture:!0,passive:!0}),()=>void window.removeEventListener("scroll",E,!0)},[E,t]),(0,u.useEffect)(()=>(window.addEventListener("resize",b),()=>void window.removeEventListener("resize",b)),[b]),(0,u.useEffect)(()=>{w(),y()},[n,E,b]),(0,u.useEffect)(()=>w,[]),[g,i,m]}({scroll:!0,debounce:{scroll:50,resize:0},...r}),F=u.useRef(null),H=u.useRef(null);u.useImperativeHandle(B,()=>F.current);let A=(0,o.u)(k),[U,W]=u.useState(!1),[Y,X]=u.useState(!1);if(U)throw U;if(Y)throw Y;let G=u.useRef(null);return(0,o.a)(()=>{let t=F.current;N.width>0&&N.height>0&&t&&(G.current||(G.current=(0,o.b)(t)),G.current.configure({gl:l,events:c,shadows:v,linear:h,flat:m,legacy:b,orthographic:E,frameloop:w,dpr:P,performance:R,raycaster:S,camera:L,size:N,onPointerMissed:(...e)=>null==A.current?void 0:A.current(...e),onCreated:e=>{null==e.events.connect||e.events.connect(d?(0,o.i)(d)?d.current:d:H.current),p&&e.setEvents({compute:(e,t)=>{let r=e[p+"X"],n=e[p+"Y"];t.pointer.set(r/t.size.width*2-1,-(2*(n/t.size.height))+1),t.raycaster.setFromCamera(t.pointer,t.camera)}}),null==T||T(e)}}),G.current.render(u.createElement(D,null,u.createElement(o.E,{set:X},u.createElement(u.Suspense,{fallback:u.createElement(o.B,{set:W})},e)))))}),u.useEffect(()=>{let e=F.current;if(e)return()=>(0,o.d)(e)},[]),u.createElement("div",s({ref:H,style:{position:"relative",width:"100%",height:"100%",overflow:"hidden",pointerEvents:d?"none":"auto",...n}},M),u.createElement("div",{ref:I,style:{width:"100%",height:"100%"}},u.createElement("canvas",{ref:F,style:{display:"block"}},t)))}),S=u.forwardRef(function(e,t){return u.createElement(z,null,u.createElement(R,s({},e,{ref:t})))});var L=r(5152),k=r.n(L),T=r(1163),M=r(5634),B=r(4529),D=r(952);let I=e=>{let{route:t,children:r}=e,[,n]=(0,D.w)(t),[s]=(0,B.ZP)();return(0,o.A)((e,t)=>{let{clock:r}=e;s(t,r.getElapsedTime())}),(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(u.Suspense,{fallback:null,children:[(0,l.jsx)(n,{}),r]})})},N=k()(()=>M.T?r.e(35).then(r.bind(r,3035)):Promise.resolve(()=>null),{loadableGenerated:{webpack:()=>[3035]},ssr:!1}),F=e=>{let{children:t}=e,r=(0,T.useRouter)();return(0,l.jsx)("div",{style:{width:"100%",height:"100%",position:"absolute",zIndex:-1,top:0,left:0},children:(0,l.jsxs)(S,{dpr:[1,2],gl:{alpha:!1,antialias:!1,stencil:!1,depth:!1,logarithmicDepthBuffer:!0},children:[(0,l.jsx)(I,{route:r.route}),M.T&&(0,l.jsx)(N,{}),t]})})}}}]);