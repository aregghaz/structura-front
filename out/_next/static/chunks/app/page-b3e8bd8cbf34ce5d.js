(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5788:function(e,t,r){Promise.resolve().then(r.bind(r,6039))},7447:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{unstable_getImgProps:function(){return u},default:function(){return o}});let a=r(1024),s=r(8630),n=r(6184),l=r(1749),i=a._(r(536)),u=e=>{(0,n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");let{props:t}=(0,s.getImgProps)(e,{defaultLoader:i.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}},o=l.Image},6523:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return i}});var a=r(7437),s=r(2265),n=r(1396),l=r.n(n);function i(e){let{style:t={},url:r="",label:n="",className:i="",onClick:u}=e,[o,d]=(0,s.useState)("");return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(l(),{href:r,onClick:u,className:i,style:t,children:n})})}},8684:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(7437);r(2265);var s=r(9677),n=r.n(s),l=r(6691),i=r.n(l),u=r(6523);function o(){return(0,a.jsxs)("div",{className:n().header,children:[(0,a.jsxs)("div",{className:n().logo,children:[(0,a.jsx)("div",{className:n().label,children:(0,a.jsx)("div",{className:n().text_wrapper,children:"structura"})}),(0,a.jsxs)("div",{className:n().text_under_logo,children:["умный и безопасный ",(0,a.jsx)("br",{}),"онлайн-документооборот"]})]}),(0,a.jsxs)("div",{className:n().button_div,children:[(0,a.jsx)("div",{className:n().create,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i(),{src:"./images/create.svg",width:25,height:25,alt:"create"}),(0,a.jsx)(u.default,{className:n().button,url:"create",label:"создать документ"})]})}),(0,a.jsx)("div",{className:n().create,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i(),{src:"./images/upload.svg",width:25,height:25,alt:"upload"}),(0,a.jsx)(u.default,{className:n().button,url:"upload",label:"загрузить документ"})]})}),(0,a.jsx)("div",{className:n().search,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i(),{src:"./images/search.svg",width:25,height:25,alt:"upload"}),(0,a.jsx)(u.default,{className:n().button,url:"search",label:"найти документ по похожим словам"})]})}),(0,a.jsx)("div",{className:n().profile,children:(0,a.jsxs)("div",{children:[(0,a.jsx)(i(),{src:"./images/user.svg",width:25,height:25,alt:"upload"}),(0,a.jsx)(u.default,{className:n().profileButton,url:"/auth/login",label:"мой кабинет"})]})})]})]})}},9900:function(e,t,r){"use strict";r.d(t,{l9:function(){return s},o4:function(){return n},rS:function(){return l}});let a=(0,r(9730).oM)({name:"users",initialState:{token:"",user:{email:"",name:"",surname:"",fatherName:"",country:"",passport:"",password:"admin",isActive:!1,dob:""}},reducers:{registration:(e,t)=>{e.user={...e.user,[t.payload.key]:t.payload.value}},setToken:(e,t)=>{e.token=t.payload}}}),{registration:s,setToken:n}=a.actions,l=e=>e.users.token;t.ZP=a.reducer},6039:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return o}});var a=r(7437),s=r(8684),n=r(2265),l=r(9900),i=r(3046),u=r(4033);function o(){let e=(0,i.v9)(l.rS),t=(0,u.useRouter)();return(0,n.useEffect)(()=>{0===e.length&&t.push("/auth/login")},[e]),(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(s.default,{})})}},9677:function(e){e.exports={header:"header_header__0ZBDm",logo:"header_logo__uBoM0",label:"header_label__Dm8_P",text_wrapper:"header_text_wrapper__x_XQC",text_under_logo:"header_text_under_logo__MV0Ze",create:"header_create__ERDhH",profile:"header_profile__JX_mR",search:"header_search__6AQ4V",button:"header_button__FQgWO",profileButton:"header_profileButton__LdEBS",button_div:"header_button_div__zf9aT"}},6691:function(e,t,r){e.exports=r(7447)},4033:function(e,t,r){e.exports=r(5313)}},function(e){e.O(0,[176,262,749,971,938,744],function(){return e(e.s=5788)}),_N_E=e.O()}]);