(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{1989:function(e,t,a){Promise.resolve().then(a.t.bind(a,5074,23)),Promise.resolve().then(a.bind(a,6838)),Promise.resolve().then(a.bind(a,5813)),Promise.resolve().then(a.t.bind(a,219,23)),Promise.resolve().then(a.bind(a,7866)),Promise.resolve().then(a.bind(a,7456)),Promise.resolve().then(a.t.bind(a,5257,23))},679:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var a in t)Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let n=a(1024),s=a(7929),r=a(2637),i=a(413),o=n._(a(9950)),l=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,a]of Object.entries(t))void 0===a&&delete t[e];return{props:t}},c=i.Image},7164:function(e,t,a){"use strict";a.d(t,{f:function(){return r}});var n=a(2173);let s="http://127.0.0.1:8000",r={upload:e=>n.Z.post("".concat(s,"/api/emails"),e).then(e=>e.data),get:()=>n.Z.get("".concat(s,"/api/getCount")).then(e=>e.data),getEmails:e=>n.Z.get("".concat(s,"/api/emails/").concat(e)).then(e=>e.data)}},9484:function(e,t,a){"use strict";a.d(t,{x:function(){return r}});var n=a(2173);let s="http://127.0.0.1:8000",r={registration:e=>n.Z.post("".concat(s,"/api/auth/registration"),e).then(e=>e.data),login:e=>n.Z.post("".concat(s,"/api/auth/login"),e).then(e=>e.data),getUser:()=>n.Z.get("".concat(s,"/api/getUser")).then(e=>e.data)}},8085:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(7437),s=a(2265),r=a(1396),i=a.n(r);function o(e){let{style:t={},url:a="",label:r="",className:o="",onClick:l}=e,[c,u]=(0,s.useState)("");return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(i(),{href:a,onClick:l,className:o,style:t,children:r})})}},6838:function(e,t,a){"use strict";a.r(t),a.d(t,{Email:function(){return _}});var n=a(7437),s=a(2747),r=a.n(s),i=a(2265),o=a(7164);let l=e=>{let t=new Date(e).getFullYear(),a=new Date(e).getMonth(),n=new Date(e).getDate();return"".concat(n>9?n:"0".concat(n),".").concat(a>8?a+1:"0".concat(a+1),".").concat(t)};var c=a(8270),u=a(6691),d=a.n(u);let _=e=>{let{pageId:t}=e,[a,s]=(0,i.useState)([]),u=async()=>{s(await o.f.getEmails(t))};return(0,i.useEffect)(()=>{u()},[]),a.length>0?(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("div",{className:r().document,children:a.map(e=>(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:r().document_body,children:[(0,n.jsxs)("span",{className:r().user_section,children:[(0,n.jsxs)("span",{children:[(0,n.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,n.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,n.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,n.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,n.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"})]}),(0,n.jsx)("span",{className:r().more,children:"..."})]}),(0,n.jsx)("span",{className:r().subject,children:e.subject}),(0,n.jsx)("span",{style:{backgroundColor:c._[e.status].color,height:10,width:10,borderRadius:10}}),(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:r().email_text,children:"статус:"}),"  ",(0,n.jsx)("span",{className:r().email_text_underline,children:c._[e.status].ru})]}),(0,n.jsxs)("span",{children:[(0,n.jsx)("span",{className:r().email_text,children:"дата последнего действия с документом:"})," ",(0,n.jsx)("span",{className:r().email_text_underline,children:l(e.updated_at)})]})]}),(0,n.jsx)("div",{className:r().notes})]}))})}):(0,n.jsx)(n.Fragment,{children:"no emails"})}},5813:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7437),s=a(2265),r=a(4653),i=a.n(r),o=a(6691),l=a.n(o),c=a(8085),u=a(9484),d=a(3046),_=a(9504),h=a(4033),m=a(2173);function g(){let e=(0,d.v9)(_.rS),t=(0,h.useRouter)(),a=(0,d.I0)(),r=async()=>{let e=await u.x.getUser();console.log(e,"datadata");let t=e.id;a((0,_.Iv)(t))};return(0,s.useEffect)(()=>{let a=localStorage.getItem("access_token");0===e.length&&(null==a?void 0:a.length)===0?t.push("/auth/login"):(m.Z.defaults.headers.common.Authorization="Bearer "+a,r())},[]),(0,n.jsxs)("div",{className:i().header,children:[(0,n.jsxs)("div",{className:i().logo,children:[(0,n.jsx)("div",{className:i().label,children:(0,n.jsx)("div",{className:i().text_wrapper,children:"structura"})}),(0,n.jsxs)("div",{className:i().text_under_logo,children:["умный и безопасный ",(0,n.jsx)("br",{}),"онлайн-документооборот"]})]}),(0,n.jsxs)("div",{className:i().button_div,children:[(0,n.jsx)("div",{className:i().create,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(l(),{src:"/images/create.svg",width:25,height:25,alt:"create"}),(0,n.jsx)(c.default,{className:i().button,url:"/create",label:"создать документ"})]})}),(0,n.jsx)("div",{className:i().create,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(l(),{src:"/images/upload.svg",width:25,height:25,alt:"upload"}),(0,n.jsx)(c.default,{className:i().button,url:"/upload",label:"загрузить документ"})]})}),(0,n.jsx)("div",{className:i().search,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(l(),{src:"/images/search.svg",width:25,height:25,alt:"upload"}),(0,n.jsx)(c.default,{className:i().button,url:"/search",label:"найти документ по похожим словам".substring(0,3)+"..."})]})})]}),(0,n.jsx)("div",{className:i().profile_div,children:(0,n.jsx)("div",{className:i().profile,children:(0,n.jsxs)("div",{children:[(0,n.jsx)(l(),{src:"./images/user.svg",width:25,height:25,alt:"upload"}),(0,n.jsx)(c.default,{className:i().profileButton,url:"/profile",label:"мой кабинет"})]})})})]})}},7866:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7437),s=a(2265),r=a(7266),i=a.n(r),o=a(7164),l=a(6691),c=a.n(l),u=a(3046),d=a(818),_=a(4033),h=a(8270);function m(e){let{text:t,icon:a,id:r}=e,o=(0,u.v9)(d.r7),[l,m]=(0,s.useState)(0),g=(0,u.v9)(d.Kv);(0,u.I0)();let x=(0,_.useRouter)();return(0,s.useEffect)(()=>{o.length>0&&o.map(e=>{e.id===r&&m(e.count)})},[o.length,g]),(0,n.jsxs)("span",{onClick:()=>x.push("/page/".concat(h.j[r])),children:[(0,n.jsx)(c(),{className:i().image,width:19,height:19,src:a,alt:t}),(0,n.jsx)("span",{className:i().text,children:t}),(0,n.jsx)("span",{className:i().count,children:l})]})}function g(){let e=(0,u.I0)(),t=(0,u.v9)(d.Kv),a=async()=>{console.log("asdsaasd");let t=await o.f.get();e((0,d.K0)(t)),e((0,d.K4)(!1))};return(0,s.useEffect)(()=>{t&&a()},[t]),(0,n.jsxs)("div",{className:i().body,children:[(0,n.jsx)("h2",{children:"Документы"}),(0,n.jsxs)("div",{className:i().menuList,children:[(0,n.jsx)(m,{id:10,icon:"/images/shareFat.svg",text:"Входящие"}),(0,n.jsx)(m,{id:11,icon:"/images/fireSimple.svg",text:"Горящие"}),(0,n.jsx)(m,{id:12,icon:"/images/vector.svg",text:"Исходящие"}),(0,n.jsx)(m,{id:1,icon:"/images/star.svg",text:"Важные"}),(0,n.jsx)(m,{id:2,icon:"/images/clipboard.svg",text:"Черновые"}),(0,n.jsx)(m,{id:3,icon:"/images/vector2.svg",text:"Шаблонные"}),(0,n.jsx)(m,{id:4,icon:"/images/trashSimple.svg",text:"Корзина"})]})]})}},7456:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return i}});var n=a(7437);a(2265);var s=a(2525),r=a.n(s);function i(e){let{children:t}=e;return(0,n.jsx)("div",{className:r().body,children:t})}},818:function(e,t,a){"use strict";a.d(t,{K0:function(){return s},K4:function(){return r},Kv:function(){return o},r7:function(){return i}});let n=(0,a(9730).oM)({name:"menu",initialState:{menu:[],loading:!0},reducers:{setMenu:(e,t)=>{e.menu=[...e.menu,t.payload]},setLoading:(e,t)=>{e.loading=t.payload}}}),{setMenu:s,setLoading:r}=n.actions,i=e=>e.menus.menu,o=e=>e.menus.loading;t.ZP=n.reducer},9504:function(e,t,a){"use strict";a.d(t,{Iv:function(){return l},l9:function(){return i},o4:function(){return o},rS:function(){return c}});var n=a(9730),s=a(2173);let r=(0,n.oM)({name:"users",initialState:{token:"",user_id:0,user:{email:"",name:"",surname:"",fatherName:"",country:"",passport:"",password:"admin",dob:""}},reducers:{registration:(e,t)=>{e.user={...e.user,[t.payload.key]:t.payload.value}},setToken:(e,t)=>{s.Z.defaults.headers.common.Authorization="Bearer "+t.payload,e.token=t.payload},setUserId:(e,t)=>{e.user_id=t.payload}}}),{registration:i,setToken:o,setUserId:l}=r.actions,c=e=>e.users.token;t.ZP=r.reducer},8270:function(e,t,a){"use strict";a.d(t,{_:function(){return s},j:function(){return n}});let n={1:"important",2:"draft",3:"template",4:"trash",10:"inbox",11:"hot",12:"sent"},s={new:{ru:"создан и (или) загружен",en:"создан и (или) загружен",color:"black"},partially:{ru:"частично подписан",en:"частично подписан",color:"#FF4B15"},sent:{ru:"прислан",en:"прислан",color:"#1072E5"},signed:{ru:"подписан",en:"подписан",color:"#009B23"},torn:{ru:"частично или полностью порван",en:"частично или полностью порван",color:"#F3212A"}}},5074:function(e){e.exports={content:"page_content__s9qJr"}},2747:function(e){e.exports={document:"email_document__U0Zua",document_body:"email_document_body__gI1C0",user_section:"email_user_section__7hvns",subject:"email_subject__7_tpd",email_text:"email_email_text__94n8Y",email_text_underline:"email_email_text_underline__X8WlH",more:"email_more__YdPRY",notes:"email_notes__QxWAE"}},4653:function(e){e.exports={header:"header_header__Awatn",logo:"header_logo__QDj1X",label:"header_label__tZ9mg",text_wrapper:"header_text_wrapper__ViDXQ",text_under_logo:"header_text_under_logo__ztDsi",create:"header_create__iRB5B",profile:"header_profile__horyl",search:"header_search__axCs6",button:"header_button__00R_3",profileButton:"header_profileButton__jJ_eb",button_div:"header_button_div__FMOuT",profile_div:"header_profile_div__DdEHD"}},219:function(e){e.exports={body:"layout_body__S1UHb"}},7266:function(e){e.exports={body:"navbar_body__UkrOR",menuList:"navbar_menuList__p18W6",count:"navbar_count__4J2K8",text:"navbar_text__69jQK",image:"navbar_image__AZxnG",header:"navbar_header__vSEPQ",logo:"navbar_logo__bKgsm",label:"navbar_label__SMsCO",text_wrapper:"navbar_text_wrapper__vtIH_",text_under_logo:"navbar_text_under_logo__s5YwS"}},2525:function(e){e.exports={body:"body_body__QaMKj"}},5257:function(e){e.exports={body:"body_body__jANxv"}},6691:function(e,t,a){e.exports=a(679)},4033:function(e,t,a){e.exports=a(94)}},function(e){e.O(0,[58,396,413,971,472,744],function(){return e(e.s=1989)}),_N_E=e.O()}]);