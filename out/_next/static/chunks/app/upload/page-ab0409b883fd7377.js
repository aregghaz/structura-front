(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[676],{7600:function(e){"use strict";e.exports=canvas},172:function(){},2001:function(){},3779:function(){},2258:function(){},6608:function(e,t,n){Promise.resolve().then(n.bind(n,5622))},7164:function(e,t,n){"use strict";n.d(t,{f:function(){return o}});var a=n(2173);let s="http://127.0.0.1:8000",o={upload:e=>a.Z.post("".concat(s,"/api/emails"),e).then(e=>e.data),get:()=>a.Z.get("".concat(s,"/api/getCount")).then(e=>e.data),getEmails:e=>a.Z.get("".concat(s,"/api/emails/").concat(e)).then(e=>e.data)}},9484:function(e,t,n){"use strict";n.d(t,{x:function(){return o}});var a=n(2173);let s="http://127.0.0.1:8000",o={registration:e=>a.Z.post("".concat(s,"/api/auth/registration"),e).then(e=>e.data),login:e=>a.Z.post("".concat(s,"/api/auth/login"),e).then(e=>e.data),getUser:()=>a.Z.get("".concat(s,"/api/getUser")).then(e=>e.data)}},5622:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return K}});var a=n(7437),s=n(2265),o=n(3518),r=n.n(o),i=n(6691),d=n.n(i);let l=e=>{var t;let{data:n,label:o,icon:i="",style:l="",handlerAction:c,onClick:u}=e,[_,h]=(0,s.useState)(!1),[p,f]=(0,s.useState)(n),[m,x]=(0,s.useState)(null),v=()=>h(!_),g=e=>{m==e?x(null):x(e),v()};return(0,a.jsxs)("div",{className:r().dropdown,style:{borderRadius:25},children:[(0,a.jsxs)("div",{className:r().dropdown_header,style:{borderRadius:25},onClick:e=>{u?u(e):v()},children:[i.length>0?(0,a.jsx)(d(),{width:25,height:25,src:i,alt:""}):"",o?(0,a.jsx)("span",{className:r().label,children:m?null===(t=p.find(e=>e.id==m))||void 0===t?void 0:t.label:o}):"",o&&(_?(0,a.jsx)(d(),{width:10,className:r().icon,height:10,src:"images/close.svg",alt:""}):(0,a.jsx)(d(),{className:r().icon,width:10,height:10,src:"images/open.svg",alt:""}))]}),(0,a.jsx)("div",{className:"".concat(r().dropdown_body," ").concat(l," ").concat(_&&r().open),children:p.map((e,t)=>(0,a.jsxs)("div",{className:r().dropdown_item,onClick:t=>{g(e.id),c&&c(e.id,t)},children:[(0,a.jsx)("span",{className:"".concat(r().dropdown_item_dot," ").concat(e.id==m&&r().selected),children:"• "}),e.label]},t))})]})},c={firstSelect:[{id:1,label:"отправить"},{id:4,label:"удалить"}],bodySelect:[{id:1,label:"добавить в важные"},{id:2,label:"добавить в черновые"},{id:3,label:"добавить в шаблонные"}],secondSelect:[{id:1,label:"анализировать с AI"},{id:2,label:"сравнить с AI"},{id:3,label:"нарисовать"},{id:4,label:"комментировать"},{id:5,label:"добавить файл"},{id:6,label:"запросить \xabправо\xbb"},{id:7,label:"поменять \xabвид\xbb"},{id:8,label:"открыть на весь экран"}]};var u=n(8669),_=n.n(u),h=n(219),p=n.n(h),f=n(5813),m=n(7866),x=n(7456),v=n(5257),g=n.n(v);function b(){return(0,a.jsx)("div",{className:g().body})}function j(e){let{children:t}=e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(f.default,{}),(0,a.jsxs)("div",{className:p().body,children:[(0,a.jsx)(m.default,{}),(0,a.jsxs)(x.default,{children:["  ",t]}),(0,a.jsx)(b,{})]})]})}n(9879);var y=n(3046),w=n(7164),N=n(818),S=n(3188),k=n(1530),D=n(7931),Z=n(7917),A=n.n(Z);function B(e){let{file:t}=e,[n,o]=(0,s.useState)(0);return t&&(0,a.jsx)("div",{children:(0,a.jsx)("div",{style:{overflow:"hidden",width:740},children:(0,a.jsx)(k.Z,{file:t,onLoadSuccess:function(e){let{numPages:t}=e;o(t)},children:Array.from({length:n},(e,t)=>(0,a.jsx)(D.Z,{width:740,pageNumber:t+1,renderAnnotationLayer:!0,renderTextLayer:!1,className:A().canvas},"page_".concat(t+1)))})})})}function K(){let e=(0,s.useRef)(null),t=(0,y.I0)(),[n,o]=(0,s.useState)(null);(0,y.v9)(e=>e.documents.body);let r=async(e,a)=>{if(a.preventDefault(),n&&e){let a=new FormData;a.append("folderId",e),a.append("pdf",n),await w.f.upload(a),t((0,N.K4)(!0))}};return(0,a.jsx)(j,{children:(0,a.jsxs)("div",{className:_().content,children:[(0,a.jsxs)("div",{className:_().buttonSection,children:[(0,a.jsx)(l,{label:"основное",data:c.firstSelect,icon:"/images/pen.svg",handlerAction:r}),(0,a.jsx)(l,{label:"дополнительное",data:c.secondSelect,icon:"/images/pencel.svg",handlerAction:r}),(0,a.jsx)(l,{label:"стороны в этом документе",data:c.secondSelect,icon:"/images/userCircle.svg",handlerAction:r})]}),(0,a.jsxs)("div",{className:_().body,children:[(0,a.jsx)("div",{className:_().icon_Body,children:n?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l,{style:_().button_body,data:c.bodySelect,icon:"/images/file.svg",handlerAction:r})}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l,{style:_().button_body,data:c.bodySelect,icon:"/images/file.svg",onClick:()=>{e.current&&e.current.click()}}),(0,a.jsx)("input",{type:"file",onChange:function(e){var t,n;(null===(t=e.target)||void 0===t?void 0:t.files)&&o(null===(n=e.target)||void 0===n?void 0:n.files[0])},ref:e,style:{display:"none"}})]})}),(0,a.jsx)(B,{file:n})]})]})})}S.default.GlobalWorkerOptions.workerSrc="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js"},8085:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return i}});var a=n(7437),s=n(2265),o=n(1396),r=n.n(o);function i(e){let{style:t={},url:n="",label:o="",className:i="",onClick:d}=e,[l,c]=(0,s.useState)("");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r(),{href:n,onClick:d,className:i,style:t,children:o})})}},5813:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7437),s=n(2265),o=n(4653),r=n.n(o),i=n(6691),d=n.n(i),l=n(8085),c=n(9484),u=n(3046),_=n(9504),h=n(4033),p=n(2173);function f(){let e=(0,u.v9)(_.rS),t=(0,h.useRouter)(),n=(0,u.I0)(),o=async()=>{let e=await c.x.getUser();console.log(e,"datadata");let t=e.id;n((0,_.Iv)(t))};return(0,s.useEffect)(()=>{let n=localStorage.getItem("access_token");0===e.length&&(null==n?void 0:n.length)===0?t.push("/auth/login"):(p.Z.defaults.headers.common.Authorization="Bearer "+n,o())},[]),(0,a.jsxs)("div",{className:r().header,children:[(0,a.jsxs)("div",{className:r().logo,children:[(0,a.jsx)("div",{className:r().label,children:(0,a.jsx)("div",{className:r().text_wrapper,children:"structura"})}),(0,a.jsxs)("div",{className:r().text_under_logo,children:["умный и безопасный ",(0,a.jsx)("br",{}),"онлайн-документооборот"]})]}),(0,a.jsxs)("div",{className:r().button_div,children:[(0,a.jsx)("div",{className:r().create,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(d(),{src:"/images/create.svg",width:25,height:25,alt:"create"}),(0,a.jsx)(l.default,{className:r().button,url:"/create",label:"создать документ"})]})}),(0,a.jsx)("div",{className:r().create,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(d(),{src:"/images/upload.svg",width:25,height:25,alt:"upload"}),(0,a.jsx)(l.default,{className:r().button,url:"/upload",label:"загрузить документ"})]})}),(0,a.jsx)("div",{className:r().search,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(d(),{src:"/images/search.svg",width:25,height:25,alt:"upload"}),(0,a.jsx)(l.default,{className:r().button,url:"/search",label:"найти документ по похожим словам".substring(0,3)+"..."})]})})]}),(0,a.jsx)("div",{className:r().profile_div,children:(0,a.jsx)("div",{className:r().profile,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(d(),{src:"./images/user.svg",width:25,height:25,alt:"upload"}),(0,a.jsx)(l.default,{className:r().profileButton,url:"/profile",label:"мой кабинет"})]})})})]})}},7866:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var a=n(7437),s=n(2265),o=n(7266),r=n.n(o),i=n(7164),d=n(6691),l=n.n(d),c=n(3046),u=n(818),_=n(4033),h=n(8270);function p(e){let{text:t,icon:n,id:o}=e,i=(0,c.v9)(u.r7),[d,p]=(0,s.useState)(0),f=(0,c.v9)(u.Kv);(0,c.I0)();let m=(0,_.useRouter)();return(0,s.useEffect)(()=>{i.length>0&&i.map(e=>{e.id===o&&p(e.count)})},[i.length,f]),(0,a.jsxs)("span",{onClick:()=>m.push("/page/".concat(h.j[o])),children:[(0,a.jsx)(l(),{className:r().image,width:19,height:19,src:n,alt:t}),(0,a.jsx)("span",{className:r().text,children:t}),(0,a.jsx)("span",{className:r().count,children:d})]})}function f(){let e=(0,c.I0)(),t=(0,c.v9)(u.Kv),n=async()=>{console.log("asdsaasd");let t=await i.f.get();e((0,u.K0)(t)),e((0,u.K4)(!1))};return(0,s.useEffect)(()=>{t&&n()},[t]),(0,a.jsxs)("div",{className:r().body,children:[(0,a.jsx)("h2",{children:"Документы"}),(0,a.jsxs)("div",{className:r().menuList,children:[(0,a.jsx)(p,{id:10,icon:"/images/shareFat.svg",text:"Входящие"}),(0,a.jsx)(p,{id:11,icon:"/images/fireSimple.svg",text:"Горящие"}),(0,a.jsx)(p,{id:12,icon:"/images/vector.svg",text:"Исходящие"}),(0,a.jsx)(p,{id:1,icon:"/images/star.svg",text:"Важные"}),(0,a.jsx)(p,{id:2,icon:"/images/clipboard.svg",text:"Черновые"}),(0,a.jsx)(p,{id:3,icon:"/images/vector2.svg",text:"Шаблонные"}),(0,a.jsx)(p,{id:4,icon:"/images/trashSimple.svg",text:"Корзина"})]})]})}},7456:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var a=n(7437);n(2265);var s=n(2525),o=n.n(s);function r(e){let{children:t}=e;return(0,a.jsx)("div",{className:o().body,children:t})}},9879:function(e,t,n){"use strict";n.d(t,{j2:function(){return s}});let a=(0,n(9730).oM)({name:"documents",initialState:{body:""},reducers:{setBody:(e,t)=>{e.body=t.payload}}}),{setBody:s}=a.actions;t.ZP=a.reducer},818:function(e,t,n){"use strict";n.d(t,{K0:function(){return s},K4:function(){return o},Kv:function(){return i},r7:function(){return r}});let a=(0,n(9730).oM)({name:"menu",initialState:{menu:[],loading:!0},reducers:{setMenu:(e,t)=>{e.menu=[...e.menu,t.payload]},setLoading:(e,t)=>{e.loading=t.payload}}}),{setMenu:s,setLoading:o}=a.actions,r=e=>e.menus.menu,i=e=>e.menus.loading;t.ZP=a.reducer},9504:function(e,t,n){"use strict";n.d(t,{Iv:function(){return d},l9:function(){return r},o4:function(){return i},rS:function(){return l}});var a=n(9730),s=n(2173);let o=(0,a.oM)({name:"users",initialState:{token:"",user_id:0,user:{email:"",name:"",surname:"",fatherName:"",country:"",passport:"",password:"admin",dob:""}},reducers:{registration:(e,t)=>{e.user={...e.user,[t.payload.key]:t.payload.value}},setToken:(e,t)=>{s.Z.defaults.headers.common.Authorization="Bearer "+t.payload,e.token=t.payload},setUserId:(e,t)=>{e.user_id=t.payload}}}),{registration:r,setToken:i,setUserId:d}=o.actions,l=e=>e.users.token;t.ZP=o.reducer},8270:function(e,t,n){"use strict";n.d(t,{_:function(){return s},j:function(){return a}});let a={1:"important",2:"draft",3:"template",4:"trash",10:"inbox",11:"hot",12:"sent"},s={new:{ru:"создан и (или) загружен",en:"создан и (или) загружен",color:"black"},partially:{ru:"частично подписан",en:"частично подписан",color:"#FF4B15"},sent:{ru:"прислан",en:"прислан",color:"#1072E5"},signed:{ru:"подписан",en:"подписан",color:"#009B23"},torn:{ru:"частично или полностью порван",en:"частично или полностью порван",color:"#F3212A"}}},8669:function(e){e.exports={content:"page_content__5D233",buttonSection:"page_buttonSection__eaJJa",body:"page_body__PLy1i",icon_Body:"page_icon_Body__wQWfv",button_body:"page_button_body__erUNr"}},3518:function(e){e.exports={dropdown:"dropDown_dropdown__jjTO5",dropdown_header:"dropDown_dropdown_header__vu_MY",label:"dropDown_label__9_LG1",dropdown_body:"dropDown_dropdown_body__qoY_K",dropdown_body_left:"dropDown_dropdown_body_left__e5LfC",open:"dropDown_open__harpt",dropdown_item:"dropDown_dropdown_item__GcWcW",dropdown_item_dot:"dropDown_dropdown_item_dot__Ra0xV",selected:"dropDown_selected__3RQym",icon:"dropDown_icon__mS9cB"}},4653:function(e){e.exports={header:"header_header__Awatn",logo:"header_logo__QDj1X",label:"header_label__tZ9mg",text_wrapper:"header_text_wrapper__ViDXQ",text_under_logo:"header_text_under_logo__ztDsi",create:"header_create__iRB5B",profile:"header_profile__horyl",search:"header_search__axCs6",button:"header_button__00R_3",profileButton:"header_profileButton__jJ_eb",button_div:"header_button_div__FMOuT",profile_div:"header_profile_div__DdEHD"}},219:function(e){e.exports={body:"layout_body__S1UHb"}},7266:function(e){e.exports={body:"navbar_body__UkrOR",menuList:"navbar_menuList__p18W6",count:"navbar_count__4J2K8",text:"navbar_text__69jQK",image:"navbar_image__AZxnG",header:"navbar_header__vSEPQ",logo:"navbar_logo__bKgsm",label:"navbar_label__SMsCO",text_wrapper:"navbar_text_wrapper__vtIH_",text_under_logo:"navbar_text_under_logo__s5YwS"}},2525:function(e){e.exports={body:"body_body__QaMKj"}},5257:function(e){e.exports={body:"body_body__jANxv"}},7917:function(e){e.exports={canvas:"pdf_canvas__Ku_pD"}}},function(e){e.O(0,[651,58,396,413,968,971,472,744],function(){return e(e.s=6608)}),_N_E=e.O()}]);