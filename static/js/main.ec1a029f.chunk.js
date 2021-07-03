(this["webpackJsonpaqua-frontend"]=this["webpackJsonpaqua-frontend"]||[]).push([[0],{100:function(e,n,t){"use strict";t.r(n);var a,r,c,i,o,s,l,j,d,u,b,x,p,h,m,O,f,g=t(0),v=t.n(g),w=t(26),y=t(8),k=function(e){e.push("/entrar")},S=function(e){e.push("/")},C=function(){var e=Object(y.f)();Object(g.useLayoutEffect)((function(){localStorage.getItem("token")||k(e)}),[e])},E=t(3),q=function(){return C(),Object(E.jsx)("h1",{children:"CreateMusic"})},I=function(){return C(),Object(E.jsx)("h1",{children:"MusicDetailsPage"})},z=t(12),L=t(13),M=L.a.div(a||(a=Object(z.a)(["\n  background-color: #067e98;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),D=L.a.form(r||(r=Object(z.a)(["\n  height: 500px;\n  width: 550px;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 25px;\n  box-shadow: 10px 10px 25px rgba(0, 0, 0, 0.4);\n"]))),A=L.a.h1(c||(c=Object(z.a)(['\n  margin: 0px;\n  font-size: 48px;\n  color: #424242;\n  font-family: "Oswald";\n']))),J=L.a.img(i||(i=Object(z.a)(["\n  width: 100px;\n  margin-top: 50px;\n"]))),N=L.a.div(o||(o=Object(z.a)(['\n  width: 220px;\n  display: flex;\n  justify-content: space-between;\n  font-family: "Oswald";\n  padding: 10px 0px;\n  gap: 20px;\n']))),P=t(20),U=t(36),B=t(46),F=function(e){var n=Object(g.useState)(e),t=Object(P.a)(n,2),a=t[0],r=t[1];return[a,function(e){var n=e.target,t=n.value,c=n.name;r(Object(B.a)(Object(B.a)({},a),{},Object(U.a)({},c,t)))},function(){r(e)}]},T="https://backend-fullstack-labenu.herokuapp.com",V=t.p+"static/media/logo.a3e8e256.png",G=t(135),H=t(136),K=t(30),Q=t.n(K),R=function(){var e=Object(y.f)(),n=F({email:"",password:""}),t=Object(P.a)(n,3),a=t[0],r=t[1],c=(t[2],function(){Q.a.post("".concat(T,"/user/login"),a).then((function(n){localStorage.setItem("token",n.data.token),alert("Usu\xe1rio logado com sucesso!"),S(e)})).catch((function(e){alert(e.response.data.error)}))});return Object(E.jsxs)(D,{onSubmit:function(e){e.preventDefault(),c()},children:[Object(E.jsx)(J,{img:!0,src:V}),Object(E.jsx)(A,{children:"Login"}),Object(E.jsx)(G.a,{name:"email",value:a.email,onChange:r,type:"email",label:"Email",variant:"outlined",margin:"dense",required:!0}),Object(E.jsx)(G.a,{name:"password",value:a.password,onChange:r,type:"password",label:"Senha",variant:"outlined",margin:"dense",required:!0}),Object(E.jsxs)(N,{children:[Object(E.jsx)(H.a,{variant:"outlined",color:"primary",onClick:function(){return function(e){e.push("/cadastro")}(e)},children:"Cadastrar"}),Object(E.jsx)(H.a,{variant:"contained",color:"primary",type:"submit",children:"Logar"})]})]})},W=function(){var e=Object(y.f)();Object(g.useLayoutEffect)((function(){localStorage.getItem("token")&&S(e)}),[e])},X=function(){W();Object(y.f)();return Object(E.jsx)(M,{children:Object(E.jsx)(R,{})})},Y=L.a.div(s||(s=Object(z.a)(["\n  height: 100px;\n  background-color: #edb595;\n  color: #292929;\n  border-radius: 10px;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  align-items: center;\n  text-align: center;\n  transition: 500ms;\n  :hover {\n    cursor: pointer;\n    box-shadow: none;\n  }\n"]))),Z=L.a.h5(l||(l=Object(z.a)(['\n  margin: 0px;\n  font-size: 20px;\n  font-family: "Oswald";\n  font-weight: 300;\n']))),$=L.a.h6(j||(j=Object(z.a)(['\n  margin: 0px;\n  font-size: 16px;\n  font-family: "Oswald";\n  font-weight: 200;\n']))),_=(L.a.div(d||(d=Object(z.a)(["\n  width: 500px;\n  height: 500px;\n  background-color: white;\n"]))),function(e){var n=Object(g.useState)(!1),t=Object(P.a)(n,2),a=(t[0],t[1]);return Object(E.jsxs)(Y,{onClick:function(){alert("era pra abrir o modal agora"),a(!0)},children:[Object(E.jsx)(Z,{children:e.title}),Object(E.jsx)($,{children:e.author})]})}),ee=function(e,n){var t=Object(g.useState)(e),a=Object(P.a)(t,2),r=a[0],c=a[1],i=Object(y.f)();return Object(g.useEffect)((function(){Q.a.get(n,{headers:{Authorization:localStorage.getItem("token")}}).then((function(e){c(e.data)})).catch((function(e){e.response.data.error.includes("jwt expired")&&(localStorage.removeItem("token"),k(i)),alert(e.response.data.error||"Ocorreu um erro, tente novamente")}))}),[n]),r},ne=L.a.div(u||(u=Object(z.a)(["\nbackground-color: #067E98;\nmin-height: 100vh;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\n"]))),te=L.a.h1(b||(b=Object(z.a)(['\nfont-size: 48px;\ncolor: #424242;\nfont-family: "Oswald";\n']))),ae=L.a.section(x||(x=Object(z.a)(["\ndisplay: grid;\ngap: 50px;\ngrid-template-columns: repeat(4,200px);\nmargin-bottom: 50px;\n"]))),re=function(){C();var e=ee([],"".concat(T,"/music/all")).map((function(e){return Object(E.jsx)(_,{title:e.title,author:"autor"})}));return Object(E.jsxs)(ne,{children:[Object(E.jsx)(te,{children:"Musicas"}),Object(E.jsx)(ae,{children:e})]})},ce=L.a.div(p||(p=Object(z.a)(["\nbackground-color: #067E98;\nheight: 100vh;\ndisplay: flex;\nalign-items: center;\njustify-content: center;\n"]))),ie=L.a.form(h||(h=Object(z.a)(["\nheight: 550px;\nwidth: 650px;\nbackground-color: white;\ndisplay: flex;\nflex-direction: column;\nalign-items: center;\nborder-radius: 25px;\nbox-shadow: 10px 10px 25px rgba(0, 0, 0, 0.4);\n"]))),oe=L.a.h1(m||(m=Object(z.a)(['\nmargin: 0px;\nfont-size: 48px;\ncolor: #424242;\nfont-family: "Oswald";\n']))),se=L.a.img(O||(O=Object(z.a)(["\nwidth: 100px;\nheight: 100px;\nmargin: 20px;\n"]))),le=L.a.div(f||(f=Object(z.a)(['\nwidth: 228px;\ndisplay: flex;\njustify-content: space-between;\nfont-family: "Oswald";\npadding: 10px 0px;\ngap: 20px;\n']))),je=function(){var e=Object(y.f)(),n=F({name:"",email:"",nickname:"",password:""}),t=Object(P.a)(n,3),a=t[0],r=t[1],c=(t[2],function(){Q.a.post("".concat(T,"/user/signup"),a).then((function(n){localStorage.setItem("token",n.data.token),alert("Usu\xe1rio cadastrado com sucesso!"),S(e)})).catch((function(e){alert(e.response.data.error)}))});return Object(E.jsxs)(ie,{onSubmit:function(e){if(e.preventDefault(),c(),a.password.length<6)return alert("A senha ter no minimo 6 caracteres")},children:[Object(E.jsx)(se,{img:!0,src:V}),Object(E.jsx)(oe,{children:"Inscreva-se"}),Object(E.jsx)(G.a,{name:"name",value:a.name,onChange:r,type:"text",label:"Nome",variant:"outlined",margin:"dense",required:!0}),Object(E.jsx)(G.a,{name:"email",value:a.email,onChange:r,type:"email",label:"Email",variant:"outlined",margin:"dense",required:!0}),Object(E.jsx)(G.a,{name:"password",value:a.password,onChange:r,type:"password",label:"Senha",required:!0,variant:"outlined",margin:"dense"}),Object(E.jsx)(G.a,{name:"nickname",value:a.nickname,onChange:r,type:"text",variant:"outlined",margin:"dense",label:"Nickname",required:!0}),Object(E.jsxs)(le,{children:[Object(E.jsx)(H.a,{variant:"outlined",color:"primary",onClick:function(){return k(e)},children:"Voltar"}),Object(E.jsx)(H.a,{variant:"contained",color:"primary",type:"submit",children:"Cadastrar"})]})]})},de=function(){W();Object(y.f)();return Object(E.jsx)(ce,{children:Object(E.jsx)(je,{})})},ue=function(){return Object(E.jsx)("h1",{children:"ErrorPage"})},be=function(){return Object(E.jsx)(w.a,{children:Object(E.jsxs)(y.c,{children:[Object(E.jsx)(y.a,{exact:!0,path:"/entrar",children:Object(E.jsx)(X,{})}),Object(E.jsx)(y.a,{exact:!0,path:"/cadastro",children:Object(E.jsx)(de,{})}),Object(E.jsx)(y.a,{exact:!0,path:"/",children:Object(E.jsx)(re,{})}),Object(E.jsx)(y.a,{exact:!0,path:"/criar-musica",children:Object(E.jsx)(q,{})}),Object(E.jsx)(y.a,{exact:!0,path:"/musicas/:id",children:Object(E.jsx)(I,{})}),Object(E.jsx)(y.a,{children:Object(E.jsx)(ue,{})})]})})},xe=t(134),pe=t(133),he=t(68),me=Object(he.a)({palette:{primary:{main:"#067e98",contrastText:"white"},text:{primary:"#424242"}}});var Oe=function(){return Object(E.jsx)(v.a.Fragment,{children:Object(E.jsxs)(pe.a,{theme:me,children:[Object(E.jsx)(xe.a,{}),Object(E.jsx)(be,{})]})})},fe=t(9);t.n(fe).a.render(Object(E.jsx)(v.a.StrictMode,{children:Object(E.jsx)(Oe,{})}),document.getElementById("root"))}},[[100,1,2]]]);
//# sourceMappingURL=main.ec1a029f.chunk.js.map