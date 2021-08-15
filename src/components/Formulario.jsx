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
    image
} = props

// Se escuchan los cambios ocurridos en inputs
 const emailChange = (e) => setEmail(e.target.value);
 const passwordChange = (e) => setPassword(e.target.value);
 const enviarDatos = (e) => e.preventDefault();

    return (
        <section className={LoginCSS.formLogin}>
            <div className={LoginCSS.containerForm}>
                <form className={LoginCSS.itemsForm} onSubmit={enviarDatos}>
                    <h1>{greeting}</h1>
                    <input type="text" placeholder="Email" autoFocus required 
                            value={email} onChange={emailChange}/>
                    <p className={LoginCSS.errorMsg}>{emailError}</p>
                    <input type="password" placeholder="Password" required
                            value={password} onChange={passwordChange}/>
                    <p className={LoginCSS.errorMsg}>{passwordError}</p> 
                       <Button onClick = {handleOption} 
                        type = "submit"
                        btnname = {btnLabel}/>
                </form> 
                <div className={LoginCSS.providers}>
                        <Button onClick = { handleGoogle }
                        classbtn = "fab fa-google fa-2x" 
                        btnname = "Continuar con Google"/> 
                    <Button 
                        classbtn = "fab fa-facebook-square fa-2x" 
                        btnname = "Continuar con Facebook"/>
                </div>
            </div> 
            <div className={LoginCSS.img}>
                <img src={image} alt="" />
            </div>
        </section>
    );
}
 
export default Formulario;


