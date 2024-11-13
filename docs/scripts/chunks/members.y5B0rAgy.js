import{o as e,b as s,d as a,t as l,F as t,x as r,r as o,c as n,i,j as c,n as u,g as p,e as d,f as m,T as v,y as g,w as f,v as b,z as x,k as h}from"./vue.p_nG2h_3.js";const w={class:"grid justify-items-center pt-5 pb-3 mt-10"},y=["src"],k={class:"animate-profile-in text-center mt-3"},_={class:"text-center"},z={class:"font-light text-gray-300 text-lg mb-1"},C={class:"text-white text-2xl mb-2"},D={class:"font-light text-gray-200 text-md"},S={__name:"profile",props:{name:String,course:String,roles:Array,path:String},setup:o=>(n,i)=>(e(),s("div",w,[a("img",{src:o.path,alt:"icon",class:"animate-icon-in size-44 md:size-52 rounded-full px-1"},null,8,y),a("div",k,[a("div",_,[a("p",z,l(o.course),1),a("h2",C,l(o.name),1),(e(!0),s(t,null,r(o.roles,(a=>(e(),s("p",D,l(a),1)))),256))])])]))},P={class:"animate-bg-in absolute h-screen w-screen z-5 overflow-y-scroll overscroll-none bg-zinc-900 bg-opacity-50 backdrop-blur-sm"},j={class:"mt-32 mb-60 mx-3 flex flex-col justify-center font-Default text-white"},R={class:"flex flex-col md:flex-row items-end md:justify-end font-light text-white text-base mt-5"},A={class:"mr-3 z-20"},E={class:"absolute left-0 w-full text-left rounded-lg bg-zinc-800 mt-2"},L=["onClick"],N={class:"mr-3 md:mr-7 mt-2 md:mt-0 z-10"},B={class:"absolute left-0 w-full text-left rounded-lg bg-zinc-800 mt-2"},F=["onClick"],I={key:0,class:"text-center text-white mt-10"},M={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"},T={__name:"members",setup(w){const y=[{name:"池マル",course:"PC program",roles:["リーダー","3Dモデリング"],path:"assets/icons/profile_001.webp"},{name:"りょ",course:"NS program",roles:["サブリーダー","プログラミング"],path:"assets/icons/profile_002.webp"},{name:"ピンキー",course:"IB program",roles:["マネージャー","デザイン"],path:"assets/icons/profile_003.webp"},{name:"メロンパン星人",course:"PC program",roles:["3Dモデリング","電子回路設計"],path:"assets/icons/profile_004.webp"},{name:"虫",course:"DS program",roles:["3Dモデリング","動画制作"],path:"assets/icons/profile_005.webp"},{name:"まひ",course:"PC program",roles:["3Dモデリング","デザイン"],path:"assets/icons/profile_006.webp"},{name:"はぎ",course:"PC program",roles:["3Dモデリング","プログラミング"],path:"assets/icons/profile_007.webp"},{name:"ぷぅさん",course:"PC program",roles:["3Dモデリング","プログラミング"],path:"assets/icons/profile_008.webp"},{name:"시준",course:"NS program",roles:["プログラミング","広報・連絡"],path:"assets/icons/profile_009.webp"},{name:"太田 隆博",course:"担当教員",roles:["パクチーがキライです"],path:"assets/icons/profile_010.webp"}],k=o(""),_=o(""),z=o(!1),C=o(!1),D=n((()=>y.filter((e=>(""===k.value||e.course===k.value)&&(""===_.value||e.roles.includes(_.value)))))),T=Array.from(new Set(y.map((e=>e.course)))),q=["3Dモデリング","プログラミング","デザイン"],G=o(null),H=o(null),J=e=>{G.value&&!G.value.contains(e.target)&&(z.value=!1),H.value&&!H.value.contains(e.target)&&(C.value=!1)};return i((()=>{document.addEventListener("mousedown",J)})),c((()=>{document.removeEventListener("mousedown",J)})),(o,n)=>(e(),s("div",P,[a("div",j,[n[6]||(n[6]=a("div",{class:"animate-session-in"},[a("h1",{class:"font-bold text-center text-6xl md:text-7xl"},"Members")],-1)),a("div",R,[a("div",A,[n[4]||(n[4]=a("a",{class:"block w-full text-right md:text-left pr-0.5"},"Program",-1)),a("div",{ref_key:"programDropdownRef",ref:G,class:"relative"},[a("button",{class:"w-44 text-left rounded-lg duration-500 bg-zinc-800 bg-opacity-70 hover:bg-zinc-900 p-2",onClick:n[0]||(n[0]=e=>z.value=!z.value)},[a("span",{class:u(["inline-block duration-500 mr-1",{"rotate-90 duration-500":z.value}])},">",2),p(" "+l(k.value||"全てのプログラム"),1)]),d(v,{"enter-from-class":"opacity-0","enter-active-class":"duration-300","leave-to-class":"opacity-0","leave-active-class":"duration-300"},{default:m((()=>[f(a("div",E,[a("ul",null,[a("li",{class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:n[1]||(n[1]=e=>{k.value="",z.value=!1})},"全てのプログラム "),(e(!0),s(t,null,r(x(T),(a=>(e(),s("li",{key:a,class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:e=>{k.value=a,z.value=!1}},l(a),9,L)))),128))])],512),[[b,z.value]])])),_:1})],512)]),a("div",N,[n[5]||(n[5]=a("a",{class:"block w-full text-right md:text-left pr-0.5"},"Role",-1)),a("div",{ref_key:"roleDropdownRef",ref:H,class:"relative"},[a("button",{class:"w-52 text-left rounded-lg duration-500 bg-zinc-800 bg-opacity-70 hover:bg-zinc-900 p-2",onClick:n[2]||(n[2]=e=>C.value=!C.value)},[a("span",{class:u(["inline-block duration-500 mr-1",{"rotate-90 duration-500":C.value}])},">",2),p(" "+l(_.value||"全ての役割"),1)]),d(v,{"enter-from-class":"opacity-0","enter-active-class":"duration-300","leave-to-class":"opacity-0","leave-active-class":"duration-300"},{default:m((()=>[f(a("div",B,[a("ul",null,[a("li",{class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:n[3]||(n[3]=e=>{_.value="",C.value=!1})},"全ての役割 "),(e(),s(t,null,r(q,(e=>a("li",{key:e,class:"cursor-pointer rounded-lg duration-500 hover:bg-zinc-900 px-4 py-2",onClick:s=>{_.value=e,C.value=!1}},l(e),9,F))),64))])],512),[[b,C.value]])])),_:1})],512)])]),0===D.value.length?(e(),s("div",I," 選択された条件に一致するメンバーはおりません。 ")):g("",!0),a("div",M,[(e(!0),s(t,null,r(D.value,(s=>(e(),h(S,{key:s.name,name:s.name,course:s.course,roles:s.roles,path:s.path},null,8,["name","course","roles","path"])))),128))])])]))}};export{T as default};
//# sourceMappingURL=members.y5B0rAgy.js.map
