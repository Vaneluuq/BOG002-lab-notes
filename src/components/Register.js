import React from 'react'
import Formulario from './Formulario';
import img from "../assets/login.jpg"
import { useState , useEffect} from 'react';
import { createUser , loginWithGoogle, authListener } from './firebaseAuth';
import { Redirect } from 'react-router-dom';



const Register = () => {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("")
  const [displayName, setDisplayName] = useState(null)
 

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
      createUser(email, password)
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

const handleGoogle = () => {
  loginWithGoogle()
  .then(res => {
      setUser(res.user)
      setDisplayName(res.user.displayName)
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



  return(
    <div>
    { user ? 
        (  <Redirect to ="/home"></Redirect>
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
      handleGoogle = {handleGoogle}
      emailError = {emailError}
      passwordError = {passwordError}
      />   
     )}
    </div>
  )
}
 
export default Register;






