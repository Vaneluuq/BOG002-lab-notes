import React from 'react'
import LoginCSS from '../CSS/SignupAndLogin.module.css'
import Button from './Botones';


const Formulario = (props) => {
   const {
    email,
    setEmail,
    password,
    setPassword,
    handleOption,
    handleGoogle,
    emailError,
    passwordError, 
    btnLabel,
    greeting,
    image,
    displayName, 
    setDisplayName, 
    nameUser
} = props

// Se escuchan los cambios ocurridos en inputs
 const emailChange = (e) => setEmail(e.target.value);
 const passwordChange = (e) => setPassword(e.target.value);
 const enviarDatos = (e) =>e.preventDefault();
 const userChange = (e) => setDisplayName(e.target.value);

    return (
            <section className={LoginCSS.containerForm}>
                <h1>{greeting}</h1>
                <form className={LoginCSS.itemsForm} onSubmit={enviarDatos}>
                    <input type="text" placeholder="Email" autoFocus required 
                            value={email} onChange={emailChange}/>
                    <p className={LoginCSS.errorMsg}>{emailError}</p>
                    <input type="password" placeholder="Password" required
                            value={password} onChange={passwordChange}/>
                    <p className={LoginCSS.errorMsg}>{passwordError}</p> 
                    { nameUser ? (<input type="text" placeholder="Nombre de Usuario"
                            value={displayName} onChange={userChange}/>
                        ):(
                            <> </>
                        )}
                    <Button onClick = {handleOption} 
                        type = "submit"
                        btnname = {btnLabel}/>
                       { !nameUser ? (
                           <a href="">Olvide mi contraseña</a>
                        ):(
                           <> </>
                        )}
                </form> 
                <div className={LoginCSS.providers}>
                    <p>Ó Continuar con</p>
                    <Button onClick = { handleGoogle }
                        classbtn = "fab fa-google fa-2x"/> 
                </div> 
        </section>
    );
}
 
export default Formulario;


