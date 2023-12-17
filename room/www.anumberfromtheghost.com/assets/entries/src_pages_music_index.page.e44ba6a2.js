import{I as d}from"../chunks/chunk-b1cafc67.js";import{I as u}from"../chunks/chunk-c4015efb.js";import{o,d as i,a as e,t as f,e as r,g as c,c as l,w as m,f as p,F as _}from"../chunks/chunk-985ce4c8.js";import{_ as g}from"../chunks/chunk-95e413cf.js";import"../chunks/chunk-f72bc264.js";import"../chunks/chunk-c9a81a45.js";import"../chunks/chunk-c8afe4d8.js";import"../chunks/chunk-872c24b3.js";const h={class:"flex flex-col justify-end"},y=["href"],x=["src"],v={class:"bg-black text-white px-2 py-1 cursor-default"},S={class:"md:flex justify-between items-center"},k={class:"flex space-x-4"},w=["href"],b=["href"],I={__name:"MusicTile",props:{title:{type:String},image:{type:String},route:{type:String},soundcloud:{type:String},spotify:{type:String},releaseDate:{type:String}},setup(t){const a=t;return(n,s)=>(o(),i("div",h,[e("a",{rel:"external",class:"overflow-hidden",href:a.route},[e("img",{class:"hover:scale-110 hover:saturate-150 transition duration-1000",src:"/images/thumbs/"+a.image},null,8,x)],8,y),e("div",v,[e("div",S,[e("h3",null,f(a.title),1),e("div",k,[t.soundcloud?(o(),i("a",{key:0,title:"soundcloud",target:"_blank",href:t.soundcloud},[r(d,{class:"w-4"})],8,w)):c("",!0),t.spotify?(o(),i("a",{key:1,title:"spotify",target:"_blank",href:t.spotify},[r(u,{class:"w-4"})],8,b)):c("",!0)])])])]))}},$={class:"container"},B=e("h1",{class:"text-white"},"Interactive Music Videos",-1),V={class:"grid xl:grid-cols-4 md:grid-cols-3 grid-cols-2 lg:gap-16 gap-8"},L={__name:"index.page",props:["tiles"],setup(t){return(a,n)=>(o(),l(g,null,{default:m(()=>[e("div",$,[B,e("div",V,[(o(!0),i(_,null,p(t.tiles,s=>(o(),l(I,{title:s.pageTitle,route:s.levelRoute,"release-date":s.releaseDate,soundcloud:s.soundcloud,spotify:s.spotify,image:s.image},null,8,["title","route","release-date","soundcloud","spotify","image"]))),256))])])]),_:1}))}};export{L as default};