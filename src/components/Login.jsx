import React from 'react'
import img from "../assets/login2.jpg"
import Formulario from './Formulario'
import Home from "./Home"
import { useState, useEffect } from 'react';
import  { auth } from '../firebase'


const Login = () => {
    const [user, setUser] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("")


    const clearInput= () => {
        setEmail('');
        setPassword('');
    }


    const clearErrors = () => {
        setEmailError('');
        setPasswordError('');
    }


    const handleLogin = () => {
    clearErrors()

    auth.signInWithEmailAndPassword(email, password)
    .catch(err => {
        switch (err.code) {
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":  
                setEmailError(err.message);
                break;
            case "auth/wrong-password":
                setPasswordError(err.message)
                break;
        }
    })
}

    const authListener = () => {
        auth.onAuthStateChanged((user) => {
            if(user){
                clearInput();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        authListener();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const handleLogout = () =>{
        auth.signOut();
     }


    return ( 
       <div>  
          { user ? (
            <Home handleLogout = {handleLogout}/>
          ) : (
            <Formulario
            greeting = "Ingresa a tu cuenta de NoteWithMe"
            btnLabel = "Ingresar"
            image = {img}
            email={email}
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleOption = {handleLogin}
            emailError = {emailError}
            passwordError = {passwordError}/>  
          )
         }
       </div>
    ) 
}
 
export default Login;














  