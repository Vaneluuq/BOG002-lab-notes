// import React, { useState, useEffect} from 'react'
// import fb from '../firebase.js'
// import Login from './Login.jsx'
// import Home from './Home.jsx'
// import Formulario from './Formulario.jsx';

// export function LoginFirebase() {
//     const [user, setUser] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passwordError, setPasswordError] = useState("");
//     const [hasAccount, setHasAccount] = useState(false);

//     const clearInput= () => {
//         setEmail('');
//         setPassword('');
//     }

//     const clearErrors = () => {
//         setEmailError('');
//         setPasswordError('');
//     }

//     const handleLogin = () => {
//         fb 
//         .auth()
//         .signInEmailAndPassword(email, password)
//         .catch(err => {
//             switch (err.code) {
//                 case "auth/invalid-email":
//                 case "auth/user-disabled":
//                 case "auth/user-not-found":  
//                  setEmailError(err.message);
//                  break;
//                 case "auth/wrong-password":
//                  setPasswordError(err.message)
//                  break;
//             }
//         })
//     }
   

//     const handleSignup = () => {
//         clearErrors();

//         fb 
//         .auth()
//         .createUserEmailAndPassword(email, password)
//         .catch(err => {
//             switch (err.code) {
//                 case "auth/email-already-in-use":
//                 case "auth/invalid-email":
//                  setEmailError(err.message);
//                  break;
//                 case "auth/weak-password":
//                  setPasswordError(err.message)
//                  break;
//             }
//         })
//     }

//     const handleLogout = () =>{
//         fb.auth().signOut();
//     }

//     const authListener = () => {
//         fb.auth().onAuthStateChanged((user) => {
//             if(user){
//                 clearInput();
//                 setUser(user);
//             } else {
//                 setUser("");
//             }
//         })
//     }

//     useEffect(() => {
//         authListener();
//     }, [])

//     return (
//         <div className ="LoginFirebase">


//             <Formulario
//            email={email}
//            setEmail={setEmail} 
//            password={password} 
//            setPassword={setPassword} 
//            handleSignup={handleSignup} 
//            handleLogin = {handleLogin}
//            hasAccount = {hasAccount}
//            setHasAccount = {setHasAccount}
//            emailError = {emailError}
//            passwordError = {passwordError}/>        
//     </div>
//    )
// }


