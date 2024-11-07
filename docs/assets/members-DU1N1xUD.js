import{o as s,c as a,b as e,t as c,F as v,r as g,f as d,g as R,h as N,i as B,n as b,d as w,e as k,w as y,T as z,j as V,k as D,v as C,u as j,l as A}from"./index-CcJuX7yX.js";const E={class:"grid justify-items-center pt-5 pb-3 mt-10"},L=["src"],M={class:"animate-profile-in text-center mt-3"},T={class:"text-center"},F={class:"font-light text-gray-300 text-lg mb-1"},I={class:"text-white text-2xl mb-2"},U={class:"font-light text-gray-200 text-md"},q={__name:"profile",props:{name:String,course:String,roles:Array,path:String},setup(m){return(p,u)=>(s(),a("div",E,[e("img",{src:m.path,alt:"icon",class:"animate-icon-in size-44 md:size-52 rounded-full px-1"},null,8,L),e("div",M,[e("div",T,[e("p",F,c(m.course),1),e("p",I,c(m.name),1),(s(!0),a(v,null,g(m.roles,r=>(s(),a("p",U,c(r),1))),256))])])]))}},G={class:"animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm"},H={class:"mt-32 mb-60 mx-3 flex flex-col justify-center font-Default text-white"},J=e("div",{class:"animate-session-in"},[e("h1",{class:"font-bold text-center text-6xl md:text-7xl"},"Members")],-1),K={class:"flex flex-col md:flex-row items-end md:justify-end font-light text-white text-base mt-5"},O={class:"mr-3 z-20"},Q=e("a",{class:"block w-full text-right md:text-left pr-0.5"},"Program",-1),W={class:"absolute left-0 w-full text-left rounded-lg bg-zinc-800 mt-2"},X=["onClick"],Y={class:"mr-3 md:mr-7 mt-2 md:mt-0 z-10"},Z=e("a",{class:"block w-full text-right md:text-left pr-0.5"},"Role",-1),ee={class:"absolute left-0 w-full text-left rounded-lg bg-zinc-800 mt-2"},te=["onClick"],se={key:0,class:"text-center text-white mt-10"},oe={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},le={__name:"members",setup(m){const p=[{name:"池マル",course:"PC program",roles:["リーダー","3Dモデリング"],path:"assets/icon/ike.jpg"},{name:"りょ",course:"NS program",roles:["サブリーダー","プログラミング"],path:"assets/icon/ry.jpg"},{name:"ピンキー",course:"IB program",roles:["マネージャー","デザイン"],path:"assets/icon/pin.jpg"},{name:"メロンパン星人",course:"PC program",roles:["3Dモデリング","電子回路設計"],path:"assets/icon/kake.jpg"},{name:"虫",course:"DS program",roles:["3Dモデリング","動画制作"],path:"assets/icon/huku.jpg"},{name:"まひ",course:"PC program",roles:["3Dモデリング","デザイン"],path:"assets/icon/mahi.jpg"},{name:"はぎ",course:"PC program",roles:["3Dモデリング","プログラミング"],path:"assets/icon/hagi.jpg"},{name:"ぷぅさん",course:"PC program",roles:["3Dモデリング","プログラミング"],path:"assets/icon/kuma.jpg"},{name:"시준",course:"NS program",roles:["プログラミング","広報・連絡"],path:"assets/icon/ki.jpg"},{name:"太田 隆博",course:"担当教員",roles:["パクチーがキライです"],path:"assets/icon/ota.jpg"}],u=d(""),r=d(""),n=d(!1),i=d(!1),_=R(()=>p.filter(o=>(u.value===""||o.course===u.value)&&(r.value===""||o.roles.includes(r.value)))),$=Array.from(new Set(p.map(o=>o.course))),S=Array.from(new Set(p.flatMap(o=>o.roles))),f=d(null),h=d(null),x=o=>{f.value&&!f.value.contains(o.target)&&(n.value=!1),h.value&&!h.value.contains(o.target)&&(i.value=!1)};return N(()=>{document.addEventListener("mousedown",x)}),B(()=>{document.removeEventListener("mousedown",x)}),(o,l)=>(s(),a("div",G,[e("div",H,[J,e("div",K,[e("div",O,[Q,e("div",{ref_key:"programDropdownRef",ref:f,class:"relative"},[e("button",{class:"w-44 text-left rounded-lg duration-500 bg-zinc-800 bg-opacity-70 hover:bg-zinc-900 p-2",onClick:l[0]||(l[0]=t=>n.value=!n.value)},[e("span",{class:b(["inline-block duration-500 mr-1",{"rotate-90 duration-500":n.value}])},">",2),w(" "+c(u.value||"全てのプログラム"),1)]),k(z,{"enter-from-class":"opacity-0","enter-active-class":"duration-300","leave-to-class":"opacity-0","leave-active-class":"duration-300"},{default:y(()=>[D(e("div",W,[e("ul",null,[e("li",{class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:l[1]||(l[1]=t=>{u.value="",n.value=!1})},"全てのプログラム "),(s(!0),a(v,null,g(j($),t=>(s(),a("li",{key:t,class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:P=>{u.value=t,n.value=!1}},c(t),9,X))),128))])],512),[[C,n.value]])]),_:1})],512)]),e("div",Y,[Z,e("div",{ref_key:"roleDropdownRef",ref:h,class:"relative"},[e("button",{class:"w-52 text-left rounded-lg duration-500 bg-zinc-800 bg-opacity-70 hover:bg-zinc-900 p-2",onClick:l[2]||(l[2]=t=>i.value=!i.value)},[e("span",{class:b(["inline-block duration-500 mr-1",{"rotate-90 duration-500":i.value}])},">",2),w(" "+c(r.value||"全ての役割"),1)]),k(z,{"enter-from-class":"opacity-0","enter-active-class":"duration-300","leave-to-class":"opacity-0","leave-active-class":"duration-300"},{default:y(()=>[D(e("div",ee,[e("ul",null,[e("li",{class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:l[3]||(l[3]=t=>{r.value="",i.value=!1})},"全ての役割 "),(s(!0),a(v,null,g(j(S),t=>(s(),a("li",{key:t,class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:P=>{r.value=t,i.value=!1}},c(t),9,te))),128))])],512),[[C,i.value]])]),_:1})],512)])]),_.value.length===0?(s(),a("div",se," 選択された条件に一致するメンバーはおりません。 ")):V("",!0),e("div",oe,[(s(!0),a(v,null,g(_.value,t=>(s(),A(q,{key:t.name,name:t.name,course:t.course,roles:t.roles,path:t.path},null,8,["name","course","roles","path"]))),128))])])]))}};export{le as default};
