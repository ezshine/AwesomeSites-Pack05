(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[102],{8102:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return U}});var A=i(5893),a=i(512),s=i(5675),n=i.n(s),o=i(1163),r=i(7294),c=i(2653),u=i(2977),l=i(5876),h=i(8977),d=i(9012),g=i(1737),m=i(9946),w={src:"/_next/static/media/disk.de25ef41.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEUGBgYoKCjw8O8QEBAeHh45OTlfX18RERFMaXEsLCxOT08PDw8ODg4QEBAVFxdTU1MSEhIHBwf5+fgRERFmZmZKSkpDQ0MZGRmObyn/AAAAFnRSTlP+5fzb+vn9KAAmqarspKTvqeX+6OH+JFTeNgAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwdxkkSgCAMAMEBgQQQ95D//9TSPjUqR95bVeQkFQuVDtOSb6zMK2aWL/HP8FQMBhKsOLegtT2hi75SrAJJlRqZ/gAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8},p={src:"/_next/static/media/empty.1fd0839f.svg",height:261,width:262,blurWidth:0,blurHeight:0};class _{play(){if(this.isPlaying)return;this.audioSource=this.audioContext.createBufferSource(),this.audioSource.buffer=this.buffer,this.audioSource.loop=this.loop,this.audioSource.connect(this.outputNode);let t=this.pausedAt%this.buffer.duration;this.audioSource.start(0,t),this.startedAt=this.audioContext.currentTime-t,this.pausedAt=0,this.isPlaying=!0}pause(){let t=this.audioContext.currentTime-this.startedAt;this.stop(),this.pausedAt=t}stop(){this.audioSource&&(this.audioSource.disconnect(),this.audioSource.stop(0),this.audioSource=void 0),this.pausedAt=0,this.startedAt=0,this.isPlaying=!1}setVolume(t){this.outputNode.gain.value=t}constructor(t,e){this.startedAt=0,this.pausedAt=0,this.loop=!1,this.audioContext=t.audioContext,this.outputNode=this.audioContext.createGain(),this.outputNode.connect(t.masterOutput),this.buffer=e,this.isPlaying=!1}}class b{loadAudioFromURL(t){return fetch(t).then(t=>t.arrayBuffer()).then(t=>this.audioContext.decodeAudioData(t)).then(t=>new _(this,t)).catch(t=>{throw console.error("Error loading audio from URL:",t),t})}setVolume(t){this.masterOutput.gain.value=t}pause(){this.isPlaying&&(this.audioContext.suspend(),this.isPlaying=!1)}resume(){this.isPlaying||(this.audioContext.resume(),this.isPlaying=!0)}stop(){this.audioContext.close(),this.isPlaying=!1}constructor(){this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.masterOutput=this.audioContext.createGain(),this.audioContext.createBufferSource,this.masterOutput.gain.value=1,this.masterOutput.connect(this.audioContext.destination),this.isPlaying=!0}}let x=new b;var E=t=>{let{src:e,name:i,image:a}=t,{activeTrack:s,setActiveTrack:o,play:l,pause:h}=(0,u.U)(),[d,g]=(0,r.useState)(null),[w,p]=(0,r.useState)(!0),{setCursor:_,resetCursor:b}=(0,c.j)();(0,r.useEffect)(()=>{p(!0),x.loadAudioFromURL(e).then(t=>{t.loop=!0,g(t),p(!1)})},[e]);let E=(0,r.useCallback)(async()=>{d&&((null==s?void 0:s.name)===i?(d.pause(),o(null),h()):(d.play(),l(),o({name:i,src:e,image:a})))},[s,i,h,l,o,d,e,a]);return((0,r.useEffect)(()=>{d&&(null==s?void 0:s.name)!==i&&d.isPlaying&&d.pause()},[s,i,d]),w)?(0,A.jsx)("div",{children:"Loading..."}):(0,A.jsx)(n(),{alt:"Record - ".concat(i),draggable:!1,fill:!0,onClick:E,onPointerEnter:()=>_("pointer"),onPointerLeave:()=>b(),placeholder:"blur",priority:!0,sizes:(0,m.gE)(20,20,20),src:a})},f=i(5636),C=i.n(f);let k=[{name:"Hackney Diamonds",src:"/audio/rolling.mp3",image:{src:"/_next/static/media/06.f10f6f2d.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEURERMNDQ8cHR+GiY9GR0xaW2B4eoIsLTBxdHs+P0NB1xU6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMElEQVR4nCWLSQ4AQAjCQNzm/x+eqJxICwBA4mK2jSX5Ag/1MIbyjWPkGVrdGNz7Bw5OAGoklfP4AAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"rythms of serenity",src:"/audio/rythms-of-serenity.mp3",image:{src:"/_next/static/media/01.e6c4a99c.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJFBMVEVOerJIdbCittGZr8uOqMpZgLOCnsSrvdXCzt1ojLxohqyHnLiBR3gAAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANElEQVR4nE3EtxHAMAwEsE8kFfbfV3eujALgtqUNHM+s5cJJJDdB4uuHLLAK7bTji4wiKQ8e0gDLTBULHwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"sue\xf1o etereo",src:"/audio/sueno-etereo.mp3",image:{src:"/_next/static/media/02.feb79dc6.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEUFBQUTExMODg4rKysbGxszMzHt8+ljZGSUoJza39Y7OzlBQkBpdnKbrKeOp596jIbuX8Q+AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAOUlEQVR4nBXLSQ4AQQjDQJMA3bP//7cjbiVLZi0iIpJnA4N3c52K5Luru2RE9eEwErZyCqCswdz+ASUfAOO2m4CSAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},{name:"downy reverie",src:"/audio/downy-reverie.mp3",image:{src:"/_next/static/media/03.9086ce85.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEX3u9XytM7epr1fTFSuhJbssMn/wN3TnLPlr8e2jJ78u9iTc4CHanbClaiofZDSq8OtqcFEOj4fHh9FOz9nV15KPUKXe4htj6Ay5GY7AAAACnRSTlP9/////f///v39Cwnb7QAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwFwYcBwDAIAzADYYTM7v8/rYTS2mzlrVAN5fVt+GDO3AtV+gBRIo6r348w4HLKdAWM3CwT0DBSph9TEwILTZhzmwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}},{name:"el coso de la luna",src:"/audio/el-coso-de-la-luna.mp3",image:{src:"/_next/static/media/04.7d761255.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAV1BMVEXa6Kywt5e9zNLJ19rL2u+coI1scV3G1eh2fWVjaFVwdV++zuTEz7a2wJbN0tTg77B9g2e/zLCEjGzU4q29yayywNGora6wucBWWUukq7KFjG7O08be5/icujyLAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQUlEQVR4nAXBBwLAIAgEsFNAwNm9///OJjChGIkq7OTCyh0SVZW/F3LsWu4uCGHeamgNWAFgDCw5mWV/MLl7Spf9UTUCbJmphqkAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8}},{name:"jazzito",src:"/audio/jazzito.mp3",image:{src:"/_next/static/media/05.bc789cc4.png",height:261,width:261,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAGFBMVEXu7u7o6Oj6+vry8vLZ2dnQ0NDFxcXk5OSS2G30AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAMUlEQVR4nB3KyQ0AMBCDQOy9+u84cn5oBEA3VYB2VabQjojc/NDdNDZCmZ15RhFF7AcVBwCUqVjQOAAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:8}}],j=()=>(0,A.jsxs)("svg",{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,A.jsx)("path",{d:"M12.6663 8H3.33301",stroke:"black",strokeWidth:"1.5",strokeLinejoin:"round"}),(0,A.jsx)("path",{d:"M7.99967 12.6663L3.33301 7.99967L7.99967 3.33301",stroke:"black",strokeWidth:"1.5",strokeLinejoin:"round"})]});var U=()=>{let t=(0,r.useRef)(null),e=(0,o.useRouter)(),{isOpen:i}=(0,g.ef)(),s=(0,r.useRef)(!1),_=(0,r.useMemo)(()=>"/winco"===e.pathname,[e]),b=(0,r.useRef)(),{activeTrack:x}=(0,u.U)(),f=(0,r.useCallback)(()=>{"/store"!==e.pathname&&e.push("/store")},[e]);(0,h.z)([{keys:["Escape","esc"],callback:f}]);let{setCursor:U,resetCursor:B}=(0,c.j)();return(0,l.Z)(()=>{if(!t.current)return;let e=d.p8.timeline({paused:!0,defaults:{ease:"none"}});return e.fromTo(t.current,{autoAlpha:0,xPercent:100},{autoAlpha:1,xPercent:0}),b.current=e,()=>{e.kill()}},[]),(0,l.Z)(()=>{if(!b.current)return;let t=b.current,e=null;return _?i?(e=d.p8.to(t,{time:0,ease:d.QE,duration:2*d.th,overwrite:!0}),s.current=!0):(e=d.p8.to(t,{time:t.duration(),ease:d.QE,duration:s.current?.3:3*d.th,delay:s.current?d.th/3:d.th}),s.current=!1):e=d.p8.to(t,{time:0,ease:d.QE,duration:2*d.th,overwrite:!0}),()=>{null==e||e.kill()}},[_,i]),(0,A.jsx)("div",{ref:t,className:C().winco,style:{"--rotation-time":x?"10s":"0s","--left":x?"20%":"0%"},children:(0,A.jsxs)("div",{className:C().winco__information,children:[(0,A.jsx)("div",{className:(0,a.W)(C().winco__stack,C().name),children:(0,A.jsx)("div",{className:C()["stack-name"],children:(0,A.jsxs)("button",{className:C()["go-back-button"],onClick:f,onPointerEnter:()=>U("pointer"),onPointerLeave:()=>B(),children:[(0,A.jsx)(j,{}),(0,A.jsx)("span",{children:"Back"})]})})}),(0,A.jsxs)("div",{className:(0,a.W)(C().winco__stack,C().info,C()["with-bg"]),children:[(0,A.jsx)("div",{className:C()["stack-name"],children:(0,A.jsx)("p",{className:C().gray,children:(0,A.jsx)("span",{children:"NOW PLAYING:"})})}),(0,A.jsx)("div",{className:C()["stack-content"],children:(0,A.jsx)("p",{className:(0,a.W)(C()["semi-mono"],C()["active-track"]),children:null==x?void 0:x.name})})]}),(0,A.jsxs)("div",{className:C().playing,children:[(0,A.jsx)(n(),{alt:"Winco",height:261,src:(null==x?void 0:x.image)||p,width:261}),(0,A.jsx)(n(),{alt:"Winco",height:261,placeholder:"blur",sizes:(0,m.gE)(30,30,30),src:w,width:261})]}),(0,A.jsx)("div",{className:(0,a.W)(C().winco__stack,C().info,C()["with-bg"]),children:(0,A.jsx)("div",{className:C()["stack-name"],children:(0,A.jsx)("p",{className:C().gray,children:(0,A.jsx)("span",{children:"PICK A VINYL"})})})}),(0,A.jsx)("div",{children:(0,A.jsx)("ul",{className:C().tracks,children:k.map((t,e)=>(0,A.jsx)("li",{children:(0,A.jsx)(E,{...t})},e))})})]})})}},5636:function(t){t.exports={winco:"winco_winco___KirL",winco__information:"winco_winco__information__27AkY",winco__stack:"winco_winco__stack__u_tZ_","with-bg":"winco_with-bg___joM_","with-bg--extra-top":"winco_with-bg--extra-top__oq_M_",details:"winco_details__MCTgj","semi-mono":"winco_semi-mono__0T5xD",gray:"winco_gray__q6Kq3","go-back-button":"winco_go-back-button__U_AUq","stack-name":"winco_stack-name__xP5Xw","stack-content":"winco_stack-content__Ktdyo","stack-full":"winco_stack-full__HKup8",tracks:"winco_tracks__GDYxg","active-track":"winco_active-track__Fp_44",playing:"winco_playing__MMHXE",rotate:"winco_rotate__jpx2d"}}}]);