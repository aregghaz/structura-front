(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[201],{1989:function(e,t,n){Promise.resolve().then(n.t.bind(n,5074,23)),Promise.resolve().then(n.bind(n,6816)),Promise.resolve().then(n.bind(n,5813)),Promise.resolve().then(n.t.bind(n,219,23)),Promise.resolve().then(n.bind(n,7866)),Promise.resolve().then(n.bind(n,7456)),Promise.resolve().then(n.t.bind(n,5257,23))},679:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var n in t)Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}(t,{unstable_getImgProps:function(){return l},default:function(){return c}});let s=n(1024),a=n(7929),r=n(2637),i=n(413),o=s._(n(9950)),l=e=>{(0,r.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,a.getImgProps)(e,{defaultLoader:o.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,n]of Object.entries(t))void 0===n&&delete t[e];return{props:t}},c=i.Image},7164:function(e,t,n){"use strict";n.d(t,{f:function(){return r}});var s=n(2173),a=n(6348);let r={upload:e=>s.Z.post("".concat(a.Sh,"/api/emails"),e).then(e=>e.data),get:()=>s.Z.get("".concat(a.Sh,"/api/getCount")).then(e=>e.data),getEmails:e=>s.Z.get("".concat(a.Sh,"/api/emails/").concat(e)).then(e=>e.data)}},9484:function(e,t,n){"use strict";n.d(t,{x:function(){return r}});var s=n(2173),a=n(6348);let r={registration:e=>s.Z.post("".concat(a.Sh,"/api/auth/registration"),e).then(e=>e.data),login:e=>s.Z.post("".concat(a.Sh,"/api/auth/login"),e).then(e=>e.data),getUser:()=>s.Z.get("".concat(a.Sh,"/api/getUser")).then(e=>e.data)}},8085:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var s=n(7437),a=n(2265),r=n(1396),i=n.n(r);function o(e){let{style:t={},url:n="",label:r="",className:o="",onClick:l}=e,[c,u]=(0,a.useState)("");return(0,s.jsx)(s.Fragment,{children:(0,s.jsx)(i(),{href:n,onClick:l,className:o,style:t,children:r})})}},6816:function(e,t,n){"use strict";n.r(t),n.d(t,{Email:function(){return _}});var s=n(7437),a=n(2747),r=n.n(a),i=n(2265),o=n(7164),l=n(6348),c=n(8270),u=n(6691),d=n.n(u);let _=e=>{let{pageId:t}=e,[n,a]=(0,i.useState)([]),u=async()=>{a(await o.f.getEmails(t))};return(0,i.useEffect)(()=>{u()},[]),n.length>0?(0,s.jsx)(s.Fragment,{children:(0,s.jsx)("div",{className:r().document,children:n.map((e,t)=>(0,s.jsxs)("div",{className:r().document_item,children:[(0,s.jsxs)("div",{className:r().document_body,children:[(0,s.jsxs)("span",{className:r().user_section,children:[(0,s.jsxs)("span",{children:[(0,s.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,s.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,s.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,s.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"}),(0,s.jsx)(d(),{src:"/images/userCircle.svg",width:35,height:35,alt:"userCircle"})]}),(0,s.jsx)("span",{className:r().more,children:"..."})]}),(0,s.jsx)("span",{className:r().subject,children:e.subject}),(0,s.jsx)("span",{style:{backgroundColor:c._[e.status].color,height:10,width:10,borderRadius:10}}),(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{className:r().email_text,children:"статус:"}),"  ",(0,s.jsx)("span",{className:r().email_text_underline,children:c._[e.status].ru})]}),(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{className:r().email_text,children:"дата последнего действия с документом:"})," ",(0,s.jsx)("span",{className:r().email_text_underline,children:(0,l.Ft)(e.updated_at)})]})]}),(0,s.jsx)("div",{className:r().notes})]},t))})}):(0,s.jsx)(s.Fragment,{children:"no emails"})}},5813:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(7437),a=n(2265),r=n(4653),i=n.n(r),o=n(6691),l=n.n(o),c=n(8085),u=n(9484),d=n(3046),_=n(9504),m=n(4033),h=n(2173);function g(){let e=(0,d.v9)(_.rS),t=(0,m.useRouter)(),n=(0,d.I0)(),r=async()=>{let e=await u.x.getUser();console.log(e,"datadata");let t=e.id;n((0,_.Iv)(t))};return(0,a.useEffect)(()=>{let n=localStorage.getItem("access_token");0===e.length&&(null==n?void 0:n.length)===0?t.push("/auth/login"):(h.Z.defaults.headers.common.Authorization="Bearer "+n,r())},[]),(0,s.jsxs)("div",{className:i().header,children:[(0,s.jsxs)("div",{className:i().logo,children:[(0,s.jsx)("div",{className:i().label,children:(0,s.jsx)("div",{className:i().text_wrapper,children:"structura"})}),(0,s.jsxs)("div",{className:i().text_under_logo,children:["умный и безопасный ",(0,s.jsx)("br",{}),"онлайн-документооборот"]})]}),(0,s.jsxs)("div",{className:i().button_div,children:[(0,s.jsx)("div",{className:i().create,children:(0,s.jsxs)("div",{children:[(0,s.jsx)(l(),{src:"/images/create.svg",width:25,height:25,alt:"create"}),(0,s.jsx)(c.default,{className:i().button,url:"/create",label:"создать документ"})]})}),(0,s.jsx)("div",{className:i().create,children:(0,s.jsxs)("div",{children:[(0,s.jsx)(l(),{src:"/images/upload.svg",width:25,height:25,alt:"upload"}),(0,s.jsx)(c.default,{className:i().button,url:"/upload",label:"загрузить документ"})]})}),(0,s.jsx)("div",{className:i().search,children:(0,s.jsxs)("div",{children:[(0,s.jsx)(l(),{src:"/images/search.svg",width:25,height:25,alt:"upload"}),(0,s.jsx)(c.default,{className:i().button,url:"/search",label:"найти документ по похожим словам".substring(0,3)+"..."})]})})]}),(0,s.jsx)("div",{className:i().profile_div,children:(0,s.jsx)("div",{className:i().profile,children:(0,s.jsxs)("div",{children:[(0,s.jsx)(l(),{src:"./images/user.svg",width:25,height:25,alt:"upload"}),(0,s.jsx)(c.default,{className:i().profileButton,url:"/profile",label:"мой кабинет"})]})})})]})}},7866:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return g}});var s=n(7437),a=n(2265),r=n(7266),i=n.n(r),o=n(7164),l=n(6691),c=n.n(l),u=n(3046),d=n(818),_=n(4033),m=n(8270);function h(e){let{text:t,icon:n,id:r}=e,o=(0,u.v9)(d.r7),[l,h]=(0,a.useState)(0);(0,u.v9)(d.Kv),(0,u.I0)();let g=(0,_.useRouter)();return(0,a.useEffect)(()=>{console.log(o,"23123"),o.map(e=>{console.log(e.id,r,"item"),e.id===r&&h(e.count)})},[o]),(0,s.jsxs)("span",{onClick:()=>g.push("/page/".concat(m.j[r])),children:[(0,s.jsx)(c(),{className:i().image,width:19,height:19,src:n,alt:t}),(0,s.jsx)("span",{className:i().text,children:t}),(0,s.jsx)("span",{className:i().count,children:l})]})}function g(){let e=(0,u.I0)(),t=(0,u.v9)(d.Kv),n=async()=>{let t=await o.f.get();e((0,d.K0)(t)),e((0,d.K4)(!1))};return(0,a.useEffect)(()=>{t&&n()},[t]),(0,s.jsxs)("div",{className:i().body,children:[(0,s.jsx)("h2",{children:"Документы"}),(0,s.jsxs)("div",{className:i().menuList,children:[(0,s.jsx)(h,{id:10,icon:"/images/shareFat.svg",text:"Входящие"}),(0,s.jsx)(h,{id:11,icon:"/images/fireSimple.svg",text:"Горящие"}),(0,s.jsx)(h,{id:12,icon:"/images/vector.svg",text:"Исходящие"}),(0,s.jsx)(h,{id:1,icon:"/images/star.svg",text:"Важные"}),(0,s.jsx)(h,{id:2,icon:"/images/clipboard.svg",text:"Черновые"}),(0,s.jsx)(h,{id:3,icon:"/images/vector2.svg",text:"Шаблонные"}),(0,s.jsx)(h,{id:4,icon:"/images/trashSimple.svg",text:"Корзина"})]})]})}},7456:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var s=n(7437);n(2265);var a=n(2525),r=n.n(a);function i(e){let{children:t}=e;return(0,s.jsx)("div",{className:r().body,children:t})}},818:function(e,t,n){"use strict";n.d(t,{K0:function(){return a},K4:function(){return r},Kv:function(){return o},r7:function(){return i}});let s=(0,n(9730).oM)({name:"menu",initialState:{menu:[],loading:!0},reducers:{setMenu:(e,t)=>{e.menu=t.payload},setLoading:(e,t)=>{e.loading=t.payload}}}),{setMenu:a,setLoading:r}=s.actions,i=e=>e.menus.menu,o=e=>e.menus.loading;t.ZP=s.reducer},9504:function(e,t,n){"use strict";n.d(t,{Iv:function(){return l},l9:function(){return i},o4:function(){return o},rS:function(){return c}});var s=n(9730),a=n(2173);let r=(0,s.oM)({name:"users",initialState:{token:"",user_id:0,user:{email:"",name:"",surname:"",fatherName:"",country:"",passport:"",password:"admin",dob:""}},reducers:{registration:(e,t)=>{e.user={...e.user,[t.payload.key]:t.payload.value}},setToken:(e,t)=>{a.Z.defaults.headers.common.Authorization="Bearer "+t.payload,e.token=t.payload},setUserId:(e,t)=>{e.user_id=t.payload}}}),{registration:i,setToken:o,setUserId:l}=r.actions,c=e=>e.users.token;t.ZP=r.reducer},8270:function(e,t,n){"use strict";n.d(t,{_:function(){return a},j:function(){return s}});let s={1:"important",2:"draft",3:"template",4:"trash",10:"inbox",11:"hot",12:"sent"},a={new:{ru:"создан и (или) загружен",en:"создан и (или) загружен",color:"black"},partially:{ru:"частично подписан",en:"частично подписан",color:"#FF4B15"},sent:{ru:"прислан",en:"прислан",color:"#1072E5"},signed:{ru:"подписан",en:"подписан",color:"#009B23"},torn:{ru:"частично или полностью порван",en:"частично или полностью порван",color:"#F3212A"}}},6348:function(e,t,n){"use strict";n.d(t,{Ft:function(){return s},Sh:function(){return a}});let s=e=>{let t=new Date(e).getFullYear(),n=new Date(e).getMonth(),s=new Date(e).getDate();return"".concat(s>9?s:"0".concat(s),".").concat(n>8?n+1:"0".concat(n+1),".").concat(t)},a="http://back.speedshop.am"},5074:function(e){e.exports={content:"page_content__s9qJr"}},2747:function(e){e.exports={document:"email_document__U0Zua",document_body:"email_document_body__gI1C0",user_section:"email_user_section__7hvns",subject:"email_subject__7_tpd",email_text:"email_email_text__94n8Y",email_text_underline:"email_email_text_underline__X8WlH",more:"email_more__YdPRY",document_item:"email_document_item__17Vtx",notes:"email_notes__QxWAE"}},4653:function(e){e.exports={header:"header_header__Awatn",logo:"header_logo__QDj1X",label:"header_label__tZ9mg",text_wrapper:"header_text_wrapper__ViDXQ",text_under_logo:"header_text_under_logo__ztDsi",create:"header_create__iRB5B",profile:"header_profile__horyl",search:"header_search__axCs6",button:"header_button__00R_3",profileButton:"header_profileButton__jJ_eb",button_div:"header_button_div__FMOuT",profile_div:"header_profile_div__DdEHD"}},219:function(e){e.exports={body:"layout_body__S1UHb"}},7266:function(e){e.exports={body:"navbar_body__UkrOR",menuList:"navbar_menuList__p18W6",count:"navbar_count__4J2K8",text:"navbar_text__69jQK",image:"navbar_image__AZxnG",header:"navbar_header__vSEPQ",logo:"navbar_logo__bKgsm",label:"navbar_label__SMsCO",text_wrapper:"navbar_text_wrapper__vtIH_",text_under_logo:"navbar_text_under_logo__s5YwS"}},2525:function(e){e.exports={body:"body_body__QaMKj"}},5257:function(e){e.exports={body:"body_body__jANxv"}},6691:function(e,t,n){e.exports=n(679)},4033:function(e,t,n){e.exports=n(94)}},function(e){e.O(0,[58,396,413,971,472,744],function(){return e(e.s=1989)}),_N_E=e.O()}]);