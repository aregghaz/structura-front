(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[716],{7471:function(e,t,a){Promise.resolve().then(a.bind(a,2015))},9484:function(e,t,a){"use strict";a.d(t,{x:function(){return i}});var n=a(2173),r=a(6348);let i={registration:e=>n.Z.post("".concat(r.Sh,"/api/auth/registration"),e).then(e=>e.data),login:e=>n.Z.post("".concat(r.Sh,"/api/auth/login"),e).then(e=>e.data),getUser:()=>n.Z.get("".concat(r.Sh,"/api/getUser")).then(e=>e.data)}},2015:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return p}});var n=a(7437),r=a(8505),i=a.n(r),s=a(2265),o=a(3932),l=a(1396),d=a.n(l),u=a(8085),c=a(9484),h=a(9504),_=a(3046),g=a(4033);function p(){let e=(0,_.I0)(),t=(0,g.useRouter)(),[a,r]=(0,s.useState)({email:"",password:""}),l=(e,t)=>{r(a=>({...a,[e]:t}))},p=async()=>{let{access_token:n}=await c.x.login(a);n&&(localStorage.setItem("access_token",n),e((0,h.o4)(n)),t.push("/"))};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{style:{textAlign:"center",paddingTop:30,paddingBottom:60},children:[(0,n.jsx)("span",{className:i().headerText1,children:"с помощью нас — вы сможете "}),(0,n.jsx)("span",{className:i().headerText1,style:{textDecoration:"underline",fontWeight:700},children:"анализировать"}),(0,n.jsx)("span",{className:i().headerText1,children:" любой документ с помощью искусственного интеллекта"})]}),(0,n.jsxs)("div",{className:i().formDiv,style:{backgroundColor:"white"},children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:i().formText,children:"Авторизация"}),(0,n.jsx)("div",{className:i().formText2,children:"введите необходимые данные, чтобы войти"})]}),(0,n.jsx)("div",{style:{width:510,height:65,marginBottom:20},children:(0,n.jsx)(o.default,{name:"email",label:"ваш электронный ящик",className:"my-input",handlerAction:l,style:{width:510,height:65,borderRadius:50,border:"1px black solid"}})}),(0,n.jsx)("div",{style:{width:510,height:65,marginBottom:20},children:(0,n.jsx)(o.default,{name:"password",label:"ваш пароль",type:"password",className:"my-input",handlerAction:l,style:{width:510,height:65,borderRadius:50,border:"1px black solid"}})}),(0,n.jsx)("div",{className:i().aut_btn,children:(0,n.jsx)("div",{style:{width:510,height:65,background:"linear-gradient(91deg, #101010 0%, #303030 100%)",borderRadius:50},children:(0,n.jsx)(u.default,{className:i().aut_btn_text,label:"авторизоваться",onClick:p,url:""})})}),(0,n.jsxs)("div",{className:i().regDiv,children:[(0,n.jsx)("div",{style:{width:75,height:0,border:"0.50px black solid"}}),(0,n.jsxs)("div",{style:{width:320,height:50,textAlign:"center"},children:[(0,n.jsxs)("span",{style:{color:"black",fontSize:16,fontFamily:"Comfortaa",fontWeight:"300",wordWrap:"break-word"},children:["если вы зарегистрированы,",(0,n.jsx)("br",{}),"то нажмите здесь, чтобы "]}),(0,n.jsx)(d(),{href:"/auth/registration",className:i().regButton,children:"перейти"})]}),(0,n.jsx)("div",{style:{width:75,height:0,border:"0.50px black solid"}})]})]})]})}},8085:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(7437),r=a(2265),i=a(1396),s=a.n(i);function o(e){let{style:t={},url:a="",label:i="",className:o="",onClick:l}=e,[d,u]=(0,r.useState)("");return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(s(),{href:a,onClick:l,className:o,style:t,children:i})})}},3932:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return o}});var n=a(7437),r=a(2265),i=a(9504),s=a(3046);function o(e){let{style:t,name:a,label:o="",type:l="text",className:d,register:u=!1,handlerAction:c}=e,[h,_]=(0,r.useState)(""),g=(0,s.I0)(),p=e=>{_(e.target.value)};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("input",{style:t,id:"input",className:d,placeholder:o,name:a,type:l,value:h,onBlur:e=>{if(c&&c(a,e.target.value),u){let t=e.target.value;g((0,i.l9)({key:a,value:t}))}},onChange:e=>{p(e)}})})}},9504:function(e,t,a){"use strict";a.d(t,{Iv:function(){return l},ZW:function(){return d},l9:function(){return s},o4:function(){return o},rS:function(){return u}});var n=a(9730),r=a(2173);let i=(0,n.oM)({name:"users",initialState:{token:"",user_id:0,user:{email:"",name:"",surname:"",status:"",fatherName:"",country:"",passport:"",password:"admin",dob:"",id:0}},reducers:{registration:(e,t)=>{e.user={...e.user,[t.payload.key]:t.payload.value}},setToken:(e,t)=>{r.Z.defaults.headers.common.Authorization="Bearer "+t.payload,e.token=t.payload},setUserId:(e,t)=>{e.user_id=t.payload}}}),{registration:s,setToken:o,setUserId:l}=i.actions,d=e=>e.users.user,u=e=>e.users.token;t.ZP=i.reducer},6348:function(e,t,a){"use strict";a.d(t,{Ft:function(){return n},Sh:function(){return r}});let n=e=>{let t=new Date(e).getFullYear(),a=new Date(e).getMonth(),n=new Date(e).getDate();return"".concat(n>9?n:"0".concat(n),".").concat(a>8?a+1:"0".concat(a+1),".").concat(t)},r="http://127.0.0.1:8000"},8505:function(e){e.exports={aut_btn:"page_aut_btn__ZIYOw",aut_btn_text:"page_aut_btn_text__49vNq",noise_element:"page_noise_element__QnqOO",headerDiv:"page_headerDiv__B3VKQ",header:"page_header__i_BGa",br:"page_br__jQduU",headerText1:"page_headerText1__Y9nM4",formDiv:"page_formDiv__S3zcB",formText:"page_formText__MTzx6",formText2:"page_formText2__n1qb8",body:"page_body__vHn9S",placholder:"page_placholder__7aKx4",input:"page_input__Qokn8",regButton:"page_regButton__hOz4I",regDiv:"page_regDiv__WBm4M",logoDiv:"page_logoDiv__KPHin"}},4033:function(e,t,a){e.exports=a(94)}},function(e){e.O(0,[58,396,971,472,744],function(){return e(e.s=7471)}),_N_E=e.O()}]);