(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{578:function(e,t,a){Promise.resolve().then(a.bind(a,133))},8679:function(e,t,a){"use strict";a.d(t,{x:function(){return i}});var n=a(2173);let r="http://back.speedshop.am",i={registration:e=>n.Z.post("".concat(r,"/auth/registration"),e).then(e=>e.data),login:e=>n.Z.post("".concat(r,"/auth/login"),e).then(e=>e.data)}},133:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return g}});var n=a(7437),r=a(1701),i=a.n(r),s=a(2265),l=a(7794),o=a(1396),d=a.n(o),u=a(6523),c=a(8679),h=a(9900),_=a(3046),p=a(4033);function g(){let e=(0,_.I0)(),t=(0,p.useRouter)(),[a,r]=(0,s.useState)({email:"",password:""}),o=(e,t)=>{r(a=>({...a,[e]:t}))},g=async()=>{let{access_token:n}=await c.x.login(a);e((0,h.o4)(n)),t.push("/")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{textAlign:"center",paddingTop:30,paddingBottom:60},children:[(0,n.jsx)("span",{className:i().headerText1,children:"с помощью нас — вы сможете "}),(0,n.jsx)("span",{className:i().headerText1,style:{textDecoration:"underline",fontWeight:700},children:"анализировать"}),(0,n.jsx)("span",{className:i().headerText1,children:" любой документ с помощью искусственного интеллекта"})]}),(0,n.jsxs)("div",{className:i().formDiv,style:{backgroundColor:"white"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:i().formText,children:"Авторизация"}),(0,n.jsx)("div",{className:i().formText2,children:"введите необходимые данные, чтобы войти"})]}),(0,n.jsx)("div",{style:{width:510,height:65,marginBottom:20},children:(0,n.jsx)(l.default,{name:"email",label:"ваш электронный ящик",className:"my-input",handlerAction:o,style:{width:510,height:65,borderRadius:50,border:"1px black solid"}})}),(0,n.jsx)("div",{style:{width:510,height:65,marginBottom:20},children:(0,n.jsx)(l.default,{name:"password",label:"ваш пароль",type:"password",className:"my-input",handlerAction:o,style:{width:510,height:65,borderRadius:50,border:"1px black solid"}})}),(0,n.jsx)("div",{className:i().aut_btn,children:(0,n.jsx)("div",{style:{width:510,height:65,background:"linear-gradient(91deg, #101010 0%, #303030 100%)",borderRadius:50},children:(0,n.jsx)(u.default,{className:i().aut_btn_text,label:"авторизоваться",onClick:g,url:""})})}),(0,n.jsxs)("div",{className:i().regDiv,children:[(0,n.jsx)("div",{style:{width:75,height:0,border:"0.50px black solid"}}),(0,n.jsxs)("div",{style:{width:320,height:50,textAlign:"center"},children:[(0,n.jsxs)("span",{style:{color:"black",fontSize:16,fontFamily:"Comfortaa",fontWeight:"300",wordWrap:"break-word"},children:["если вы зарегистрированы,",(0,n.jsx)("br",{}),"то нажмите здесь, чтобы "]}),(0,n.jsx)(d(),{href:"/auth/registration",className:i().regButton,children:"перейти"})]}),(0,n.jsx)("div",{style:{width:75,height:0,border:"0.50px black solid"}})]})]})]})}},6523:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(7437),r=a(2265),i=a(1396),s=a.n(i);function l(e){let{style:t={},url:a="",label:i="",className:l="",onClick:o}=e,[d,u]=(0,r.useState)("");return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s(),{href:a,onClick:o,className:l,style:t,children:i})})}},7794:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return l}});var n=a(7437),r=a(2265),i=a(9900),s=a(3046);function l(e){let{style:t,name:a,label:l="",type:o="text",className:d,register:u=!1,handlerAction:c}=e,[h,_]=(0,r.useState)(""),p=(0,s.I0)(),g=e=>{_(e.target.value)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("input",{style:t,id:"input",className:d,placeholder:l,name:a,type:o,value:h,onBlur:e=>{if(c&&c(a,e.target.value),u){let t=e.target.value;p((0,i.l9)({key:a,value:t}))}},onChange:e=>{g(e)}})})}},9900:function(e,t,a){"use strict";a.d(t,{l9:function(){return r},o4:function(){return i},rS:function(){return s}});let n=(0,a(9730).oM)({name:"users",initialState:{token:"",user:{email:"",name:"",surname:"",fatherName:"",country:"",passport:"",password:"admin",isActive:!1,dob:""}},reducers:{registration:(e,t)=>{e.user={...e.user,[t.payload.key]:t.payload.value}},setToken:(e,t)=>{e.token=t.payload}}}),{registration:r,setToken:i}=n.actions,s=e=>e.users.token;t.ZP=n.reducer},1701:function(e){e.exports={aut_btn:"page_aut_btn__ZIYOw",aut_btn_text:"page_aut_btn_text__49vNq",noise_element:"page_noise_element__QnqOO",headerDiv:"page_headerDiv__B3VKQ",header:"page_header__i_BGa",br:"page_br__jQduU",headerText1:"page_headerText1__Y9nM4",formDiv:"page_formDiv__S3zcB",formText:"page_formText__MTzx6",formText2:"page_formText2__n1qb8",body:"page_body__vHn9S",placholder:"page_placholder__7aKx4",input:"page_input__Qokn8",regButton:"page_regButton__hOz4I",regDiv:"page_regDiv__WBm4M",logoDiv:"page_logoDiv__KPHin"}},4033:function(e,t,a){e.exports=a(5313)}},function(e){e.O(0,[176,262,173,971,938,744],function(){return e(e.s=578)}),_N_E=e.O()}]);