import{e as p,a as M,s as h,b as U,w as j,g as c,T as H,v as N}from"../chunks/chunk-f72bc264.js";import{a as V,g as b,u as D}from"../chunks/chunk-c476e33d.js";import{j as v,U as z,o as r,d as m,a as e,V as E,t as y,b as B,g as C,_ as F,Q as k,F as q,f as P,R as g,c as S,W as I,k as T,h as w,u,r as W,l as Y,T as O,e as x,w as $}from"../chunks/chunk-985ce4c8.js";import{n as Q}from"../chunks/chunk-c9a81a45.js";import"../chunks/chunk-8552278d.js";import"../chunks/chunk-c8afe4d8.js";const X={id:"loading-bar"},G=e("span",{class:"transition select-none animate-pulse"},"loading...",-1),J={class:"select-none w-80 z-10 my-1 bg-gray-700"},K={class:"h-8 overflow-hidden"},Z={key:0,class:"text-xs"},ee={__name:"LoadingBar",setup(f){const t=V(),a=v(b(t.urlParsed.pathname));z(async()=>{a.value=b(t.urlParsed.pathname)});const s=v(null),i=v(0);return p.on("file-loaded",l=>{s.value=l,i.value=s.value.itemsLoaded/s.value.itemsTotal*100}),(l,n)=>(r(),m("div",X,[G,e("div",J,[e("div",{class:"h-2 bg-gradient-to-r from-blue-500 to-pink-500 via-yellow-300 transition-all",style:E("width: "+i.value+"%")},null,4)]),e("div",K,[s.value?(r(),m("div",Z,[e("code",null,y(s.value.item),1),B(" /// "),e("code",null,y(s.value.itemsLoaded)+"/"+y(s.value.itemsTotal),1)])):C("",!0)])]))}},te={},se={xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true",role:"img",preserveAspectRatio:"xMidYMid meet",viewBox:"0 0 1024 1024"},ae=e("path",{fill:"currentColor",d:"M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z"},null,-1),ne=[ae];function ie(f,t){return r(),m("svg",se,ne)}const le=F(te,[["render",ie]]),oe={class:"fixed bottom-0 left-0 mb-2 ml-2 z-10 select-none"},ce={__name:"MobileControls",setup(f){const t=v([{isActive:!1,iconClass:!1,moving:["forward","left"]},{isActive:!1,iconClass:"rotate-180",moving:["forward"]},{isActive:!1,iconClass:!1,moving:["forward","right"]},{isActive:!1,iconClass:"rotate-90",moving:["left"]},{isActive:!1,iconClass:!1,moving:[]},{isActive:!1,iconClass:"-rotate-90",moving:["right"]},{isActive:!1,iconClass:!1,moving:["backward","left"]},{isActive:!1,iconClass:"",moving:["backward"]},{isActive:!1,iconClass:!1,moving:["backward","right"]}]),a=v([]),s=v([]);k(a,()=>{p.emit("mobile-move",a.value)});function i(o,d){return o.x<=d.x&&d.x<=o.x+o.width&&o.y<=d.y&&d.y<=o.y+o.height}function l(){a.value=[],t.value.forEach(o=>{o.isActive=!1})}function n(o){const d=o.touches.item(o.touches.length-1);L(d)}function A(o){const d=o.touches.item(o.touches.length-1);L(d)}function L(o){t.value.forEach((d,_)=>{const R=s.value[_].getBoundingClientRect();i(R,{x:o.clientX,y:o.clientY})?(d.isActive=!0,a.value=d.moving):d.isActive=!1})}return(o,d)=>(r(),m("div",oe,[e("div",{class:"grid grid-cols-3 lg:w-48 lg:h-48 w-32 h-32",onTouchmove:A,onTouchend:l,onTouchstart:n},[(r(!0),m(q,null,P(t.value,_=>(r(),m("div",{ref_for:!0,ref_key:"controlRefs",ref:s,class:g([{"bg-black/10":_.iconClass!==!1},"flex items-center justify-center"])},[e("div",{class:g([{"bg-pink-500/50":_.isActive},"flex items-center justify-center w-full h-full"])},[_.iconClass!==!1?(r(),S(le,{key:0,class:g([_.iconClass,"w-4 text-white"])},null,8,["class"])):C("",!0)],2)],2))),256))],32)]))}},re=I('<div class="text-white border border-white border-dashed p-2"><div><div class="uppercase text-xl flex items-center space-x-1"><div class="text-xl tracking-widest transition">play</div><div class="triangle"></div></div><div class="xl:text-sm lg:text-xs text-sm"> check your volume, music will start </div><div class="text-xs hidden xl:block">use W A S D to move</div></div><div class="z-[-1] theme-gradient absolute inset-0 transition -translate-x-full group-hover:translate-x-0 duration-500 opacity-0 group-hover:opacity-100"></div></div>',1),ue=[re],de={__name:"StartButton",emits:["start"],setup(f,{emit:t}){const a=()=>{dataLayer.push({event:"click_start_button"}),p.emit("user-interaction"),t("start")};return(s,i)=>(r(),m("div",{id:"start-button",onClick:i[0]||(i[0]=l=>a()),class:"group select-none overflow-hidden relative w-full md:w-[390px] p-2 cursor-pointer transition -ml-2 -translate-y-2"},ue))}},ve={class:"lg:flex justify-between items-center"},me={class:"mb-2 lg:mb-0 space-y-2"},fe={class:"text-xs flex space-x-1 pr-3"},pe=e("span",null,"Fullscreen",-1),ge={key:0},_e={for:"settings-vr",class:"text-xs flex items-center space-x-2"},he=e("span",null,"Enable VR (experimental)",-1),xe={class:"flex space-x-2 items-center"},ye=["value"],we=["innerHTML"],be={class:"text-xs flex space-x-2 select-none"},ke={__name:"Settings",props:{active:{type:Boolean}},setup(f){const t=v(0),a=v(!1);T(()=>{"xr"in navigator&&navigator.xr.isSessionSupported("immersive-vr").then(function(i){a.value=i}).catch(()=>{console.warn("Exception when trying to call xr.isSessionSupported",exception)})}),p.on("fps",i=>{t.value=i}),z(()=>{c.value!="playing"?p.emit("sample-fps",!0):p.emit("sample-fps",!1)});const s=[{value:"high",label:"high quality"},{value:"medium",label:"medium quality"},{value:"low",label:"low quality"}];return(i,l)=>(r(),m("div",{id:"settings-menu",onClick:l[3]||(l[3]=j(()=>{},["stop"])),class:"space-y-2"},[e("div",ve,[e("div",me,[e("label",fe,[w(e("input",{id:"settings-fullscreen",type:"checkbox","onUpdate:modelValue":l[0]||(l[0]=n=>u(h).fullscreen=n),class:"form-checkbox rounded text-pink-500"},null,512),[[M,u(h).fullscreen]]),pe]),a.value?(r(),m("div",ge,[e("label",_e,[w(e("input",{id:"settings-vr",type:"checkbox","onUpdate:modelValue":l[1]||(l[1]=n=>u(h).vr=n),class:"form-checkbox rounded text-pink-500"},null,512),[[M,u(h).vr]]),he])])):C("",!0)]),e("div",xe,[w(e("select",{class:"py-1 text-xs text-black","onUpdate:modelValue":l[2]||(l[2]=n=>u(h).quality=n),name:"quality",id:"settings-quality"},[(r(),m(q,null,P(s,n=>e("option",{value:n.value},[e("span",{innerHTML:n.label},null,8,we)],8,ye)),64))],512),[[U,u(h).quality]]),e("div",be,[e("div",null,[B(" FPS: "),e("span",{class:g(["font-bold",{"text-red-500":t.value<40,"text-green-600":t.value>=40}])},y(t.value),3)])])])])]))}},Ce={__name:"LevelTitle",setup(f){const t=v(c),a=v(!1);return k(t,async(s,i)=>{s=="ready"&&(a.value=!0),s=="playing"&&setTimeout(()=>{a.value=!1},1e3)}),(s,i)=>(r(),m("main",{id:"level-title",class:g([{invisible:a.value},"text-sm mb-4"])},[W(s.$slots,"default")],2))}};function $e(f,t){T(()=>window.addEventListener(f,t)),Y(()=>window.removeEventListener(f,t))}const Se=O({setup(f,{slots:t}){const a=v(!1);return T(()=>{a.value=!0}),()=>a.value&&t.default?t.default():null}}),Te={id:"game-container",class:"template-game min-h-screen"},Ae={class:"container flex lg:grid grid-cols-2 h-screen"},Le={class:"order-2 lg:order-1"},Me={class:"text-white w-full flex items-end lg:justify-end pb-4 order-1 lg:order-2"},Ve=["innerHTML"],ze={key:1,class:"lg:block md:flex justify-between flex-row-reverse items-center"},He={__name:"index.page",setup(f){const t=v(!1),{isMobile:a}=D(),s=V(),i=v(b(s.urlParsed.pathname));$e("keydown",n=>{n.code=="Enter"&&t.value&&l()}),k(()=>s.urlParsed.pathname,n=>{i.value=b(n)});const l=(n=0)=>{t.value=!0,!(c.value!="ready"&&c.value!="paused")&&setTimeout(()=>{p.emit("controls-lock")},n)};return k(c,()=>{c.value=="playing"?document.body.classList.add("touch-none"):document.body.classList.remove("touch-none")}),p.on("level-ready",()=>{c.value="ready",gameInstance.canBeAutoStarted()&&l(500)}),p.on("pointerUnlock",()=>{c.value=="playing"&&(c.value="paused")}),p.on("teleport",n=>{Q("/"+n)}),(n,A)=>(r(),m("div",Te,[e("div",null,[x(H,{name:"fade-slow"},{default:$(()=>[w(e("div",{id:"game-overlay",class:g(["fixed bottom-0 h-screen z-10 w-screen bg-gray-800 transition duration-1000",{"bg-opacity-0":["ready","paused","playing"].includes(u(c)),"bg-opacity-100":["changing","initializing"].includes(u(c))}])},[e("div",Ae,[e("div",Le,[e("div",{id:"game-cover",class:g(["opacity-0 h-screen absolute right-0 lg:left-0 z-[-1] w-full md:w-1/2 bg-cover bg-center",{"opacity-100":["changing","initializing"].includes(u(c))}]),style:E("background-image:url(/images/covers/"+i.value.image+")")},null,6)]),e("div",Me,[e("div",{class:g(["flex w-full lg:w-auto flex-col pl-2 py-2",{"bg-black/30":["paused"].includes(u(c))}])},[x(Ce,null,{default:$(()=>[e("div",{innerHTML:i.value.main},null,8,Ve)]),_:1}),["changing","initializing"].includes(u(c))?(r(),S(ee,{key:0})):(r(),m("div",ze,[x(de,{onStart:l}),x(u(Se),null,{default:$(()=>[x(ke)]),_:1})]))],2)])])],2),[[N,u(c)!=="playing"]])]),_:1}),e("div",null,[u(a)&&u(c)=="playing"?(r(),S(ce,{key:0})):C("",!0)])])]))}};export{He as default};