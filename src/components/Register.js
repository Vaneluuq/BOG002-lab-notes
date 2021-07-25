import React from 'react'
import Formulario from './Formulario';
import img from "../assets/login.jpg"
import Home from "./Home"
import { useState , useEffect} from 'react';
import  { auth } from '../firebase'


const Register = () => {
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


  const handleSignup = () => {
        clearErrors();

  auth.createUserWithEmailAndPassword(email, password)
    .catch(err => {
        switch (err.code) {
            case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
            case "auth/weak-password":
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

  return(
    <div>
    { user ? 
      ( <Home handleLogout = {handleLogout}/>
      ) : ( 
    <Formulario
      greeting = "Crea tu cuenta de NoteWithMe"
      btnLabel = "Registrarse"
      image = {img}
      email={email}
      setEmail={setEmail} 
      password={password} 
      setPassword={setPassword} 
      handleOption={handleSignup} 
      emailError = {emailError}
      passwordError = {passwordError}/>   
     )}
    </div>
  )
}
 
export default Register;






