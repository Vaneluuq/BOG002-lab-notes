(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{16:function(e,t,n){e.exports={containerMain:"MainNotes_containerMain__bzHsX",containerMainNotes:"MainNotes_containerMainNotes__cjtJd",showNotesContainer:"MainNotes_showNotesContainer__1g1ub",search:"MainNotes_search__2cOzr",title:"MainNotes_title__1Hqsf",body:"MainNotes_body__4mAKm",editContainer:"MainNotes_editContainer__305Yb"}},18:function(e,t,n){e.exports={containerSidebar:"Sidebar_containerSidebar__7jEUG",headerSidebar:"Sidebar_headerSidebar__3_4T0",createNote:"Sidebar_createNote__14Lwi",albumes:"Sidebar_albumes__3IDBl",titleAlbumes:"Sidebar_titleAlbumes__2NYG2",createAlbumes:"Sidebar_createAlbumes__11l3V",logout:"Sidebar_logout__3rcw5"}},22:function(e,t,n){e.exports={container:"Welcome_container__1iHEQ",containerTitle:"Welcome_containerTitle__hy0lu",title:"Welcome_title__3q2-n",login:"Welcome_login__28Gw6",register:"Welcome_register__390H5",about:"Welcome_about__2Fgmf"}},25:function(e,t,n){e.exports={containerForm:"SignupAndLogin_containerForm__3jCFQ",itemsForm:"SignupAndLogin_itemsForm__16ngk",providers:"SignupAndLogin_providers__22HML"}},26:function(e,t,n){e.exports={container:"About_container__2-Xuu",boxPropuse:"About_boxPropuse__21Jnz",boxUsage:"About_boxUsage__1Q7GP",boxTres:"About_boxTres__3UwXi",boxCuatro:"About_boxCuatro__AIye8"}},31:function(e,t,n){e.exports={container:"Home_container__3Z1FI",sidebar:"Home_sidebar__2GUcq",mainNotes:"Home_mainNotes__1cYAS"}},38:function(e,t,n){e.exports={notesMain:"Notes_notesMain__1ZZ9w",opcionesNotes:"Notes_opcionesNotes__1qx_9"}},44:function(e,t,n){e.exports={button:"Buttons_button__2sWVh"}},51:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(27),o=n.n(s),r=(n(51),n(5)),i=n(22),l=n.n(i),u=n(25),b=n.n(u),d=n(44),j=n.n(d),h=n(1);var O=function(e){var t=e.onClick,n=e.classbtn,a=e.btnname,c=e.type;return Object(h.jsxs)("button",{className:j.a.button,onClick:t,type:c,children:[Object(h.jsx)("i",{className:n}),a]})},m=function(e){var t=e.email,n=e.setEmail,a=e.password,c=e.setPassword,s=e.handleOption,o=e.handleGoogle,r=e.emailError,i=e.passwordError,l=e.btnLabel,u=e.greeting,d=e.displayName,j=e.setDisplayName,m=e.nameUser;return Object(h.jsxs)("section",{className:b.a.containerForm,children:[Object(h.jsx)("h1",{children:u}),Object(h.jsxs)("form",{className:b.a.itemsForm,onSubmit:function(e){return e.preventDefault()},children:[Object(h.jsx)("input",{type:"text",placeholder:"Email",autoFocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(h.jsx)("p",{className:b.a.errorMsg,children:r}),Object(h.jsx)("input",{type:"password",placeholder:"Password",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),Object(h.jsx)("p",{className:b.a.errorMsg,children:i}),m?Object(h.jsx)("input",{type:"text",placeholder:"Nombre de Usuario",value:d,onChange:function(e){return j(e.target.value)}}):Object(h.jsx)(h.Fragment,{children:" "}),Object(h.jsx)(O,{onClick:s,type:"submit",btnname:l}),m?Object(h.jsx)(h.Fragment,{children:" "}):Object(h.jsx)("a",{href:"/login",children:"Olvide mi contrase\xf1a"})]}),Object(h.jsxs)("div",{className:b.a.providers,children:[Object(h.jsx)("p",{children:"\xd3 Continuar con"}),Object(h.jsx)(O,{onClick:o,classbtn:"fab fa-google fa-2x"})]})]})},x=n(35),p=(n(53),n(75),x.a.initializeApp({apiKey:"AIzaSyB2vf5HNARvFlwksFa9Lqbx75UzX7oeTqg",authDomain:"notewithme.firebaseapp.com",projectId:"notewithme",storageBucket:"notewithme.appspot.com",messagingSenderId:"898529765001",appId:"1:898529765001:web:6fc13271b1dccfc54ac858",measurementId:"G-Y5GYRNH7VN"})),f=new x.a.auth.GoogleAuthProvider,g=p.firestore(),N=function(){return p.auth().signOut()},_=function(){return p.auth().signInWithPopup(f)},v=function(e){return p.auth().onAuthStateChanged(e)},S=p.auth().currentUser;console.log(S);var y=function(e){return g.collection("notes").doc().set(e)},C=function(e,t){return g.collection("notes").doc(e).update(t)},w=function(e){return g.collection("notes").doc(e).get()},M=n(6),k=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),d=b[0],j=b[1],O=Object(a.useState)(""),x=Object(r.a)(O,2),f=x[0],g=x[1],N=Object(a.useState)(""),S=Object(r.a)(N,2),y=S[0],C=S[1],w=Object(a.useState)(!1),k=Object(r.a)(w,2),A=k[0],E=k[1],F=function(){v((function(e){e?(l(""),j(""),c(e)):c("")}))};return Object(a.useEffect)((function(){F()}),[]),Object(h.jsx)("div",{children:n?Object(h.jsx)(M.a,{to:"/home"}):Object(h.jsx)(m,{greeting:"Ingresa a tu cuenta",btnLabel:"Ingresar",email:i,setEmail:l,password:d,setPassword:j,handleOption:function(){g(""),C(""),function(e,t){return p.auth().signInWithEmailAndPassword(e,t)}(i,d).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":g(e.message);break;case"auth/wrong-password":C(e.message)}}))},emailError:f,passwordError:y,handleGoogle:function(){_().then((function(e){c(e.user)})).catch((function(e){console.log(e)}))},nameUser:A,setNameUser:E})})},A=n.p+"static/media/login.4e6cc44d.jpg",E=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),d=b[0],j=b[1],O=Object(a.useState)(""),x=Object(r.a)(O,2),f=x[0],g=x[1],N=Object(a.useState)(""),S=Object(r.a)(N,2),y=S[0],C=S[1],w=Object(a.useState)(""),k=Object(r.a)(w,2),E=k[0],F=k[1],I=Object(a.useState)(!0),L=Object(r.a)(I,2),U=L[0],W=L[1],G=function(){v((function(e){e?(l(""),j(""),c(e)):c("")}))};return Object(a.useEffect)((function(){G()}),[]),Object(h.jsx)("div",{children:n?Object(h.jsx)(M.a,{to:"/home",children:" "}):Object(h.jsx)(m,{greeting:"Crea tu cuenta de NoteWithMe",btnLabel:"Registrarse",image:A,email:i,setEmail:l,password:d,setPassword:j,handleOption:function(){g(""),C(""),function(e,t){return p.auth().createUserWithEmailAndPassword(e,t)}(i,d).then((function(){p.auth().currentUser.updateProfile({displayName:E}).then((function(){console.log("registrado"),F("")}),(function(e){console.log(e)}))})).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":g(e.message);break;case"auth/weak-password":C(e.message)}}))},handleGoogle:function(){_().then((function(e){c(e.user),F(e.user.displayName)})).catch((function(e){console.log(e)}))},emailError:f,passwordError:y,setDisplayName:F,displayName:E,nameUser:U,setNameUser:W})})},F=n(17);function I(){var e=Object(a.useState)(!0),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(h.jsxs)("div",{className:l.a.container,children:[Object(h.jsx)("div",{className:l.a.containerTitle,children:Object(h.jsxs)("div",{className:l.a.title,children:[Object(h.jsx)("h1",{children:"NoteWithMe"}),n?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Aun no tengo cuenta"}),Object(h.jsx)("button",{onClick:function(){return c(!n)},children:"Registrarse"})]}):Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("p",{children:"Ya tengo cuenta"}),Object(h.jsx)("button",{onClick:function(){return c(!n)},children:" Ingresar"})]})]})}),Object(h.jsx)("div",{className:l.a.login,children:n?Object(h.jsx)(k,{}):Object(h.jsx)(E,{})}),Object(h.jsx)("div",{className:l.a.register,children:n?Object(h.jsx)("button",{onClick:function(){return c(!n)},children:"Registrarse"}):Object(h.jsx)("button",{onClick:function(){return c(!n)},children:" Ingresar"})}),Object(h.jsxs)("div",{className:l.a.about,children:[Object(h.jsxs)(F.b,{id:"RouterNavLink",to:"/about",children:["Conoce mas de ",Object(h.jsx)("span",{children:"NoteWithMe"})]}),Object(h.jsx)("p",{children:"@Vaneluuq"})]})]})}var L=n(18),U=n.n(L),W=function(e){var t=e.openModal;return Object(h.jsxs)("div",{className:U.a.containerSidebar,children:[Object(h.jsx)("div",{className:U.a.headerSidebar,children:Object(h.jsx)("h1",{children:"NoteWithMe"})}),Object(h.jsxs)("div",{className:U.a.createNote,children:[Object(h.jsx)("h3",{children:"Nueva nota"}),Object(h.jsx)("button",{onClick:t,children:" + "})]}),Object(h.jsxs)("div",{className:U.a.albumes,children:[Object(h.jsx)("div",{className:U.a.titleAlbumes,children:Object(h.jsx)("h3",{children:"Albumes"})}),Object(h.jsxs)("div",{className:U.a.createAlbumes,children:[Object(h.jsx)("h3",{children:"Crear album"}),Object(h.jsx)("button",{children:" + "})]})]}),Object(h.jsx)(F.b,{to:"/",children:Object(h.jsx)("button",{className:U.a.logout,onClick:N,children:"Logout"})})]})},G=n(14),P=n(15),q=n.n(P),B=n(24),H=n(16),T=n.n(H),z=n(30),D=n(38),R=n.n(D),Y=n(28),Q=n.n(Y);Q.a.setAppElement("#root");var V=function(e){var t=e.addNotesCollection,n=e.closeModal,c=e.title,s=e.body,o=e.existId,i={title:"",body:""},l=p.auth().currentUser,u=Object(a.useState)(i),b=Object(r.a)(u,2),d=b[0],j=b[1],O=function(e){j(Object(G.a)(Object(G.a)({},d),{},Object(z.a)({},e.target.name,e.target.value)))},m=(new Date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),x=function(){var e=Object(B.a)(q.a.mark((function e(t){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w(t);case 2:n=e.sent,j(Object(G.a)({},n.data()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){""===o?j(Object(G.a)({},i)):x(o)}),[o]),Object(h.jsxs)("form",{className:R.a.notesMain,onSubmit:function(e){e.preventDefault(),t(Object(G.a)(Object(G.a)({},d),{},{lastModified:m,userId:l.uid,displayName:l.displayName})),j(Object(G.a)({},i)),n()},children:[Object(h.jsx)("input",{type:"text",id:"title",placeholder:"A\xf1ade un titulo",autoFocus:!0,required:!0,name:"title",value:""===o?c:d.title,onChange:O}),Object(h.jsx)("textarea",{id:"body",placeholder:"Escribe tu nota aqui",value:""===o?s:d.body,name:"body",onChange:O}),Object(h.jsxs)("div",{className:R.a.opcionesNotes,children:[Object(h.jsx)("button",{className:"btn-guardar",children:""===o?"Guardar":"Actualizar"}),Object(h.jsx)("p",{children:m})]})]})},J=n(46),X=n.n(J),K=n(29);var Z=function(e){var t=e.searchNote,n=e.setSearchNote,a=e.setOptionSearchNote,c=e.optionSearchNote,s=e.getNotesToScreen;return Object(h.jsxs)("div",{className:T.a.search,children:[Object(h.jsxs)("select",{id:"optionSearch",name:"options",value:c,onChange:function(e){return a(e.target.value)},children:[Object(h.jsx)("option",{value:"titleOption",children:"Titulo de la nota"}),Object(h.jsx)("option",{value:"bodyOption",children:"Cuerpo de la nota"}),Object(h.jsx)("option",{value:"timeOption",children:"Fecha de la nota"})]}),Object(h.jsx)("input",{type:"text",placeholder:"Buscar mi nota",value:t,onChange:function(e){return n(e.target.value)},onKeyUp:s}),Object(h.jsx)("button",{type:"button",children:Object(h.jsx)("i",{className:"fas fa-search"})})]})};Q.a.setAppElement("#root");var $={overlay:{backgroundColor:"rgba(255, 255, 255, 0.5)"},content:{backgroundColor:"#F3F1F1",border:"1px solid #ccc",top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)"}},ee=["Orangered","Blue","Green","DodgerBlue","Violet","Navy","Purple","YellowGreen","OrangeRed","SlateBlue","Salmon","Crimson","HotPink","Magenta"],te=function(e){var t=e.modalIsOpen,n=e.closeModal,c=e.openModal,s=Object(a.useState)([]),o=Object(r.a)(s,2),i=o[0],l=o[1],u=Object(a.useState)(""),b=Object(r.a)(u,2),d=b[0],j=b[1],O=Object(a.useState)(""),m=Object(r.a)(O,2),x=m[0],p=m[1],f=Object(a.useState)("titleOption"),N=Object(r.a)(f,2),_=N[0],v=N[1],S=Object(a.useState)(""),w=Object(r.a)(S,2),M=w[0],k=w[1],A=function(){var e=Object(B.a)(q.a.mark((function e(t){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==d){e.next=6;break}return e.next=3,y(t);case 3:Object(K.b)("nueva nota agregada",{type:"success",autoClose:2e3}),e.next=9;break;case 6:return e.next=8,C(d,t);case 8:j("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=function(){var e=Object(B.a)(q.a.mark((function e(t,n,a){var c,s,o;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(_!==a){e.next=7;break}return e.next=3,t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));case 3:c=e.sent,l(c),e.next=18;break;case 7:if("bodyOption"!==_){e.next=14;break}return e.next=10,t.filter((function(e){return e.body.toLowerCase().includes(n.toLowerCase())}));case 10:s=e.sent,l(s),e.next=18;break;case 14:return e.next=16,t.filter((function(e){return e.lastModified.toLowerCase().includes(n.toLowerCase())}));case 16:o=e.sent,l(o);case 18:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),F=function(){var e=Object(B.a)(q.a.mark((function e(){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(e){var t=[];e.forEach((function(e){t.push(Object(G.a)(Object(G.a)({},e.data()),{},{id:e.id}))})),""===x?l(t):E(t,x,_)},g.collection("notes").orderBy("lastModified","desc").onSnapshot(t);case 1:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){F()}),[]);var I=function(e){X()({title:"Se eliminar\xe1 tu nota",text:"Quieres continuar?",icon:"warning",buttons:["No","Si"]}).then((function(t){t&&(!function(e){g.collection("notes").doc(e).delete()}(e),Object(K.b)("Nota borrada",{type:"success",autoClose:2e3}))}))},L=Object(a.useRef)();return Object(h.jsxs)("div",{className:T.a.containerMain,children:[Object(h.jsx)(Z,{searchNote:x,setSearchNote:p,optionSearchNote:_,setOptionSearchNote:v,getNotesToScreen:F}),Object(h.jsx)("div",{className:T.a.containerMainNotes,children:t?Object(h.jsx)(Q.a,{isOpen:t,style:$,onRequestClose:n,children:Object(h.jsx)(V,{addNotesCollection:A,closeModal:n,existId:d})}):i.map((function(e){return Object(h.jsxs)("div",{id:"showNotesContainer",className:T.a.showNotesContainer,ref:L,style:{backgroundColor:M},children:[Object(h.jsx)("h2",{className:T.a.title,children:e.title}),Object(h.jsx)("h3",{className:T.a.body,children:e.body}),Object(h.jsxs)("div",{className:T.a.editContainer,children:[Object(h.jsx)("button",{onClick:function(){return c(j(e.id))},children:Object(h.jsx)("i",{className:"far fa-edit"})}),Object(h.jsx)("button",{onClick:function(){return I(e.id)},children:Object(h.jsx)("i",{className:"fas fa-trash"})}),Object(h.jsx)("button",{onClick:function(){return function(e){var t=Math.floor(Math.random()*ee.length),n=L.current.style.backgroundColor=ee[t];k(n)}(e.id)},children:Object(h.jsx)("i",{className:"fas fa-address-book"})}),Object(h.jsx)("p",{children:e.lastModified})]})]},e.id)}))})]})},ne=n(31),ae=n.n(ne);function ce(){var e=c.a.useState(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];function s(){a(!0)}return Object(h.jsxs)("div",{className:ae.a.container,children:[Object(h.jsx)("div",{className:ae.a.sidebar,children:Object(h.jsx)(W,{openModal:s})}),Object(h.jsx)("div",{className:ae.a.mainNotes,children:Object(h.jsx)(te,{modalIsOpen:n,setIsOpen:a,closeModal:function(){a(!1)},openModal:s})})]})}var se=n(26),oe=n.n(se),re=function(){return Object(h.jsxs)("div",{className:oe.a.container,children:[Object(h.jsxs)("div",{className:oe.a.boxPropuse,children:[Object(h.jsxs)("h2",{children:["\xbfQue es ",Object(h.jsx)("span",{children:"NoteWithMe"}),"?"]}),Object(h.jsx)("p",{children:"NoteWithMe nace con el proposito de ayudar a los viajeros a mantener el orden. Es posible que durante la planeaci\xf3n y el viaje en si, se haga necesario recordar muchas cosas "})]}),Object(h.jsx)("div",{className:oe.a.boxTres}),Object(h.jsxs)("div",{className:oe.a.boxUsage,children:[Object(h.jsxs)("h2",{children:["\xbfComo utilizar ",Object(h.jsx)("span",{children:"NoteWithMe"}),"?"]})," ",Object(h.jsx)("br",{}),Object(h.jsx)("p",{children:"NoteWithMe es una herramienta muy sencilla de utilizar....."})]}),Object(h.jsx)("div",{className:oe.a.boxCuatro})]})};n(73);var ie=function(){return Object(h.jsxs)(a.Fragment,{children:[Object(h.jsx)(F.a,{basename:"/BOG002-lab-notes",children:Object(h.jsx)("div",{className:"container",children:Object(h.jsxs)(M.d,{children:[Object(h.jsx)(M.b,{path:"/",exact:!0,children:Object(h.jsx)(I,{})}),Object(h.jsx)(M.b,{path:"/login",children:Object(h.jsx)(k,{})}),Object(h.jsx)(M.b,{path:"/signup",children:Object(h.jsx)(E,{})}),Object(h.jsx)(M.b,{path:"/home",children:Object(h.jsx)(ce,{})}),Object(h.jsx)(M.b,{path:"/about",children:Object(h.jsx)(re,{})})]})})}),Object(h.jsx)(K.a,{})]})};o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(ie,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.3040bebf.chunk.js.map