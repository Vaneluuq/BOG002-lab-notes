(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{13:function(e,t,n){e.exports={welcome:"Welcome_welcome__Nha71",welcomeImage:"Welcome_welcomeImage__3HSHm",title:"Welcome_title__3q2-n",welcomeButtons:"Welcome_welcomeButtons__2j1a1",containerButtons:"Welcome_containerButtons__hYMbO",containerLogin:"Welcome_containerLogin__7s830",containerRegister:"Welcome_containerRegister__2oeDB",textLogin:"Welcome_textLogin__CCCiy",textRegister:"Welcome_textRegister__wQKhN",titleLogin:"Welcome_titleLogin__3s3ou",titleRegister:"Welcome_titleRegister__3QVrK",about:"Welcome_about__2Fgmf"}},18:function(e,t,n){e.exports={containerMain:"MainNotes_containerMain__bzHsX",search:"MainNotes_search__2cOzr",containerMainNotes:"MainNotes_containerMainNotes__cjtJd",showNotesContainer:"MainNotes_showNotesContainer__1g1ub",title:"MainNotes_title__1Hqsf",body:"MainNotes_body__4mAKm",editContainer:"MainNotes_editContainer__305Yb"}},19:function(e,t,n){e.exports={formLogin:"SignupAndLogin_formLogin__1ZVwH",itemsForm:"SignupAndLogin_itemsForm__16ngk",img:"SignupAndLogin_img__vMaUT",containerForm:"SignupAndLogin_containerForm__3jCFQ",providers:"SignupAndLogin_providers__22HML"}},23:function(e,t,n){e.exports={containerSidebar:"Sidebar_containerSidebar__7jEUG",headerSidebar:"Sidebar_headerSidebar__3_4T0",createNote:"Sidebar_createNote__14Lwi",albumes:"Sidebar_albumes__3IDBl",titleAlbumes:"Sidebar_titleAlbumes__2NYG2",createAlbumes:"Sidebar_createAlbumes__11l3V"}},29:function(e,t,n){e.exports={container:"Home_container__3Z1FI",sidebar:"Home_sidebar__2GUcq",logout:"Home_logout__S_vq2",mainNotes:"Home_mainNotes__1cYAS"}},31:function(e,t,n){e.exports={container:"About_container__2-Xuu",containerText:"About_containerText__Enz1V",containerImg:"About_containerImg__3DWuz"}},37:function(e,t,n){e.exports={notesMain:"Notes_notesMain__1ZZ9w",opcionesNotes:"Notes_opcionesNotes__1qx_9"}},46:function(e,t,n){e.exports={button:"Buttons_button__2sWVh"}},51:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),s=n(26),o=n.n(s),i=(n(51),n(13)),r=n.n(i),l=n.p+"static/media/botonIngresar.4fd0d11c.jpg",u=n.p+"static/media/botonRegistrarse.e02ffe38.jpg",j=n(14),d=n(1);function b(){return Object(d.jsxs)("div",{className:r.a.welcome,children:[Object(d.jsx)("div",{className:r.a.welcomeImage,children:Object(d.jsx)("div",{className:r.a.title,children:Object(d.jsx)("h1",{children:"NoteWithMe"})})}),Object(d.jsx)("div",{className:r.a.welcomeButtons,children:Object(d.jsxs)("div",{className:r.a.containerButtons,children:[Object(d.jsxs)("div",{className:r.a.containerLogin,children:[Object(d.jsx)("img",{src:l,alt:"Imagen de fondo"}),Object(d.jsx)("h2",{className:r.a.textLogin,children:"\xa1Sigue viajando con nosotros!"}),Object(d.jsx)(j.b,{to:"/login",children:Object(d.jsx)("h1",{className:r.a.titleLogin,children:"Ingresar"})})]}),Object(d.jsxs)("div",{className:r.a.containerRegister,children:[Object(d.jsx)("img",{src:u,alt:"Imagen de fondo"}),Object(d.jsx)("h2",{className:r.a.textRegister,children:"\xa1Empieza a viajar con nosotros!"}),Object(d.jsx)(j.b,{to:"/signup",children:Object(d.jsx)("h1",{className:r.a.titleRegister,children:"Registrarse"})})]}),Object(d.jsx)("div",{className:r.a.about,children:Object(d.jsx)(j.b,{to:"/about",children:Object(d.jsx)("button",{children:"About NoteWithMe"})})})]})})]})}var h=n(5),m=n(23),O=n.n(m),x=function(e){var t=e.openModal;return Object(d.jsxs)("div",{className:O.a.containerSidebar,children:[Object(d.jsx)("div",{className:O.a.headerSidebar,children:Object(d.jsx)("h1",{children:"NoteWithMe"})}),Object(d.jsxs)("div",{className:O.a.createNote,children:[Object(d.jsx)("h3",{children:"Nueva nota"}),Object(d.jsx)("button",{onClick:t,children:" + "})]}),Object(d.jsxs)("div",{className:O.a.albumes,children:[Object(d.jsx)("div",{className:O.a.titleAlbumes,children:Object(d.jsx)("h1",{children:"Albumes"})}),Object(d.jsxs)("div",{className:O.a.createAlbumes,children:[Object(d.jsx)("h3",{children:"Crear album"}),Object(d.jsx)("button",{children:" + "})]})]})]})},p=n(16),f=n(17),g=n.n(f),_=n(25),v=n(18),N=n.n(v),w=n(30),S=n(37),C=n.n(S),y=n(27),M=n.n(y),k=n(38),L=(n(70),n(75),k.a.initializeApp({apiKey:"AIzaSyB2vf5HNARvFlwksFa9Lqbx75UzX7oeTqg",authDomain:"notewithme.firebaseapp.com",projectId:"notewithme",storageBucket:"notewithme.appspot.com",messagingSenderId:"898529765001",appId:"1:898529765001:web:6fc13271b1dccfc54ac858",measurementId:"G-Y5GYRNH7VN"})),A=new k.a.auth.GoogleAuthProvider,I=L.firestore(),W=function(){return L.auth().signOut()},E=function(){return L.auth().signInWithPopup(A)},F=function(e){return L.auth().onAuthStateChanged(e)},B=function(e){return I.collection("notes").doc().set(e)},R=function(e,t){return I.collection("notes").doc(e).update(t)},q=function(e){return I.collection("notes").doc(e).get()};M.a.setAppElement("#root");var G=function(e){var t=e.addNotesCollection,n=e.closeModal,c=e.title,s=e.body,o=e.existId,i={title:"",body:""},r=Object(a.useState)(i),l=Object(h.a)(r,2),u=l[0],j=l[1],b=function(e){j(Object(p.a)(Object(p.a)({},u),{},Object(w.a)({},e.target.name,e.target.value)))},m=(new Date).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric",hour:"2-digit",minute:"2-digit"}),O=function(){var e=Object(_.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(t);case 2:n=e.sent,j(Object(p.a)({},n.data()));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){""===o?j(Object(p.a)({},i)):O(o)}),[o]),Object(d.jsxs)("form",{className:C.a.notesMain,onSubmit:function(e){e.preventDefault(),t(Object(p.a)(Object(p.a)({},u),{},{lastModified:m})),j(Object(p.a)({},i)),n()},children:[Object(d.jsx)("input",{type:"text",id:"title",placeholder:"A\xf1ade un titulo",autoFocus:!0,required:!0,name:"title",value:""===o?c:u.title,onChange:b}),Object(d.jsx)("textarea",{id:"body",placeholder:"Escribe tu nota aqui",value:""===o?s:u.body,name:"body",onChange:b}),Object(d.jsxs)("div",{className:C.a.opcionesNotes,children:[Object(d.jsx)("button",{className:"btn-guardar",children:""===o?"Guardar":"Actualizar"}),Object(d.jsx)("p",{children:m})]})]})},H=n(45),z=n.n(H),D=n(28);M.a.setAppElement("#root");var P={overlay:{backgroundColor:"rgba(255, 255, 255, 0.5)"},content:{backgroundColor:"#F3F1F1",border:"1px solid #ccc",top:"50%",left:"50%",right:"auto",bottom:"auto",transform:"translate(-50%, -50%)"}},T=function(e){var t=e.modalIsOpen,n=e.closeModal,c=e.openModal,s=Object(a.useState)([]),o=Object(h.a)(s,2),i=o[0],r=o[1],l=Object(a.useState)(""),u=Object(h.a)(l,2),j=u[0],b=u[1],m=Object(a.useState)(""),O=Object(h.a)(m,2),x=O[0],f=O[1],v=Object(a.useState)("titleOption"),w=Object(h.a)(v,2),S=w[0],C=w[1],y=function(){var e=Object(_.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(""!==j){e.next=6;break}return e.next=3,B(t);case 3:Object(D.b)("nueva nota agregada",{type:"success",autoClose:2e3}),e.next=9;break;case 6:return e.next=8,R(j,t);case 8:b("");case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=function(){var e=Object(_.a)(g.a.mark((function e(t,n,a){var c,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S!==a){e.next=7;break}return e.next=3,t.filter((function(e){return e.title.toLowerCase().includes(n.toLowerCase())}));case 3:c=e.sent,r(c),e.next=18;break;case 7:if("bodyOption"!==S){e.next=14;break}return e.next=10,t.filter((function(e){return e.body.toLowerCase().includes(n.toLowerCase())}));case 10:s=e.sent,r(s),e.next=18;break;case 14:return e.next=16,t.filter((function(e){return e.lastModified.toLowerCase().includes(n.toLowerCase())}));case 16:o=e.sent,r(o);case 18:case"end":return e.stop()}}),e)})));return function(t,n,a){return e.apply(this,arguments)}}(),L=function(){var e=Object(_.a)(g.a.mark((function e(){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=function(e){var t=[];e.forEach((function(e){t.push(Object(p.a)(Object(p.a)({},e.data()),{},{id:e.id}))})),""===x?r(t):k(t,x,S)},I.collection("notes").orderBy("lastModified","desc").onSnapshot(t);case 1:case"end":return e.stop()}var t}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){L()}),[]);var A=function(e){z()({title:"Se eliminar\xe1 tu nota",text:"Quieres continuar?",icon:"warning",buttons:["No","Si"]}).then((function(t){t&&(!function(e){I.collection("notes").doc(e).delete()}(e),Object(D.b)("Nota borrada",{type:"success",autoClose:2e3}))}))};return Object(d.jsxs)("div",{className:N.a.containerMain,children:[Object(d.jsxs)("div",{className:N.a.search,children:[Object(d.jsxs)("select",{id:"optionSearch",name:"options",value:S,onChange:function(e){return C(e.target.value)},children:[Object(d.jsx)("option",{value:"titleOption",children:"Titulo de la nota"}),Object(d.jsx)("option",{value:"bodyOption",children:"Cuerpo de la nota"}),Object(d.jsx)("option",{value:"timeOption",children:"Fecha de la nota"})]}),Object(d.jsx)("input",{type:"text",placeholder:"Buscar mi nota",value:x,onChange:function(e){return f(e.target.value)},onKeyUp:L}),Object(d.jsx)("button",{type:"button",children:Object(d.jsx)("i",{class:"fas fa-search"})})]}),Object(d.jsx)("div",{className:N.a.containerMainNotes,children:t?Object(d.jsx)(M.a,{isOpen:t,style:P,onRequestClose:n,children:Object(d.jsx)(G,{addNotesCollection:y,closeModal:n,existId:j})}):i.map((function(e){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:N.a.showNotesContainer,children:Object(d.jsx)("div",{className:N.a.showNotes,children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:N.a.title,children:e.title}),Object(d.jsx)("h3",{className:N.a.body,children:e.body}),Object(d.jsxs)("div",{className:N.a.editContainer,children:[Object(d.jsx)("button",{onClick:function(){return c(b(e.id))},children:Object(d.jsx)("i",{class:"far fa-edit"})}),Object(d.jsx)("button",{onClick:function(){return A(e.id)},children:Object(d.jsx)("i",{class:"fas fa-trash"})}),Object(d.jsx)("button",{onClick:function(){return A(e.id)},children:Object(d.jsx)("i",{class:"fas fa-address-book"})}),Object(d.jsx)("p",{children:e.lastModified})]})]})})},e.id)})}))})]})},V=n(29),U=n.n(V);function Y(){var e=c.a.useState(!1),t=Object(h.a)(e,2),n=t[0],a=t[1];function s(){a(!0)}return Object(d.jsxs)("div",{className:U.a.container,children:[Object(d.jsxs)("div",{className:U.a.sidebar,children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("button",{className:U.a.logout,onClick:W,children:"Logout"})}),Object(d.jsx)(x,{openModal:s})]}),Object(d.jsx)("div",{className:U.a.mainNotes,children:Object(d.jsx)(T,{modalIsOpen:n,setIsOpen:a,closeModal:function(){a(!1)},openModal:s})})]})}var K=n.p+"static/media/login2.bd595b7a.jpg",Q=n(19),Z=n.n(Q),J=n(46),X=n.n(J);var $=function(e){var t=e.onClick,n=e.classbtn,a=e.btnname,c=e.type;return Object(d.jsxs)("button",{className:X.a.button,onClick:t,type:c,children:[Object(d.jsx)("i",{className:n}),a]})},ee=function(e){var t=e.email,n=e.setEmail,a=e.password,c=e.setPassword,s=e.handleOption,o=e.handleGoogle,i=e.emailError,r=e.passwordError,l=e.btnLabel,u=e.greeting,j=e.image;return Object(d.jsxs)("section",{className:Z.a.formLogin,children:[Object(d.jsxs)("div",{className:Z.a.containerForm,children:[Object(d.jsxs)("form",{className:Z.a.itemsForm,onSubmit:function(e){return e.preventDefault()},children:[Object(d.jsx)("h1",{children:u}),Object(d.jsx)("input",{type:"text",placeholder:"Email",autoFocus:!0,required:!0,value:t,onChange:function(e){return n(e.target.value)}}),Object(d.jsx)("p",{className:Z.a.errorMsg,children:i}),Object(d.jsx)("input",{type:"password",placeholder:"Password",required:!0,value:a,onChange:function(e){return c(e.target.value)}}),Object(d.jsx)("p",{className:Z.a.errorMsg,children:r}),Object(d.jsx)($,{onClick:s,type:"submit",btnname:l})]}),Object(d.jsxs)("div",{className:Z.a.providers,children:[Object(d.jsx)($,{onClick:o,classbtn:"fab fa-google fa-2x",btnname:"Continuar con Google"}),Object(d.jsx)($,{classbtn:"fab fa-facebook-square fa-2x",btnname:"Continuar con Facebook"})]})]}),Object(d.jsx)("div",{className:Z.a.img,children:Object(d.jsx)("img",{src:j,alt:""})})]})},te=n(6),ne=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(h.a)(s,2),i=o[0],r=o[1],l=Object(a.useState)(""),u=Object(h.a)(l,2),j=u[0],b=u[1],m=Object(a.useState)(""),O=Object(h.a)(m,2),x=O[0],p=O[1],f=Object(a.useState)(""),g=Object(h.a)(f,2),_=g[0],v=g[1],N=function(){F((function(e){e?(r(""),b(""),c(e)):c("")}))};return Object(a.useEffect)((function(){N()}),[]),Object(d.jsx)("div",{children:n?Object(d.jsx)(te.a,{to:"/home"}):Object(d.jsx)(ee,{greeting:"Ingresa a tu note NoteWithMe ",btnLabel:"Ingresar",image:K,email:i,setEmail:r,password:j,setPassword:b,handleOption:function(){p(""),v(""),function(e,t){return L.auth().signInWithEmailAndPassword(e,t)}(i,j).catch((function(e){switch(e.code){case"auth/invalid-email":case"auth/user-disabled":case"auth/user-not-found":p(e.message);break;case"auth/wrong-password":v(e.message)}}))},emailError:x,passwordError:_,handleGoogle:function(){E().then((function(e){c(e.user)})).catch((function(e){console.log(e)}))}})})},ae=n(31),ce=n.n(ae),se=n.p+"static/media/imagen-about.e0135987.jpg",oe=function(){return Object(d.jsxs)("div",{className:ce.a.container,children:[Object(d.jsxs)("div",{className:ce.a.containerText,children:[Object(d.jsxs)("h2",{children:["\xbfQue es ",Object(d.jsx)("span",{children:"NoteWithMe"}),"?"]})," ",Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"NoteWithMe nace con el proposito de ayudar a los viajeros a mantener el orden. Es posible que durante la planeaci\xf3n y el viaje en si, se haga necesario recordar muchas cosas, pueden ser el no olvidar cosas basicas de un viaje como el cepillo de dientes, como tener a la mano una direcci\xf3n. "})," ",Object(d.jsx)("br",{})," ",Object(d.jsx)("br",{}),Object(d.jsxs)("h2",{children:["\xbfComo utilizar ",Object(d.jsx)("span",{children:"NoteWithMe"}),"?"]})," ",Object(d.jsx)("br",{}),Object(d.jsx)("p",{children:"NoteWithMe es una herramienta muy sencilla de utilizar....."})]}),Object(d.jsxs)("div",{className:ce.a.containerImg,children:[Object(d.jsx)(j.b,{to:"/",children:Object(d.jsx)("button",{children:"Volver a inicio"})}),Object(d.jsx)("img",{src:se,alt:""})]})]})},ie=n.p+"static/media/login.4e6cc44d.jpg",re=function(){var e=Object(a.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(""),o=Object(h.a)(s,2),i=o[0],r=o[1],l=Object(a.useState)(""),u=Object(h.a)(l,2),j=u[0],b=u[1],m=Object(a.useState)(""),O=Object(h.a)(m,2),x=O[0],p=O[1],f=Object(a.useState)(""),g=Object(h.a)(f,2),_=g[0],v=g[1],N=Object(a.useState)(null),w=Object(h.a)(N,2),S=(w[0],w[1]),C=function(){F((function(e){e?(r(""),b(""),c(e)):c("")}))};return Object(a.useEffect)((function(){C()}),[]),Object(d.jsx)("div",{children:n?Object(d.jsx)(te.a,{to:"/home"}):Object(d.jsx)(ee,{greeting:"Crea tu cuenta de NoteWithMe",btnLabel:"Registrarse",image:ie,email:i,setEmail:r,password:j,setPassword:b,handleOption:function(){p(""),v(""),function(e,t){return L.auth().createUserWithEmailAndPassword(e,t)}(i,j).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":p(e.message);break;case"auth/weak-password":v(e.message)}}))},handleGoogle:function(){E().then((function(e){c(e.user),S(e.user.displayName)})).catch((function(e){console.log(e)}))},emailError:x,passwordError:_})})};n(73);var le=function(){return Object(d.jsxs)(a.Fragment,{children:[Object(d.jsx)(j.a,{children:Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)(te.d,{children:[Object(d.jsx)(te.b,{path:"/",exact:!0,children:Object(d.jsx)(b,{})}),Object(d.jsx)(te.b,{path:"/login",children:Object(d.jsx)(ne,{})}),Object(d.jsx)(te.b,{path:"/signup",children:Object(d.jsx)(re,{})}),Object(d.jsx)(te.b,{path:"/home",children:Object(d.jsx)(Y,{})}),Object(d.jsx)(te.b,{path:"/about",children:Object(d.jsx)(oe,{})})]})})}),Object(d.jsx)(D.a,{})]})};o.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(le,{})}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.ee301a2e.chunk.js.map