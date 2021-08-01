import React from 'react'
import img from "../assets/login2.jpg"
import Formulario from './Formulario'
import Home from "./Home"
import { useState, useEffect } from 'react';
import { handleLogout,  loginUser, loginWithGoogle, authListener } from './firebaseAuth';


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

    loginUser(email, password)
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

    const handleGoogle = () => {
        loginWithGoogle().then(res => {
                setUser(res.user)
            })
            .catch(err => { console.log(err) })
          }


    const listenerAuth = () => {
        authListener((user) => {
            if(user){
                clearInput();
                setUser(user);
            } else {
                setUser("");
            }
        })
    }

    useEffect(() => {
        listenerAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return ( 
       <div>  
          { user ? (
            <Home handleLogout = {handleLogout}/>
          ) : (
            <Formulario
            greeting = "Ingresa a tu note NoteWithMe "
            btnLabel = "Ingresar"
            image = {img}
            email={email}
            setEmail={setEmail} 
            password={password} 
            setPassword={setPassword} 
            handleOption = {handleLogin}
            emailError = {emailError}
            passwordError = {passwordError}
            handleGoogle = {handleGoogle}
            />  
          )
         }
       </div>
    ) 
}
 
export default Login;














  