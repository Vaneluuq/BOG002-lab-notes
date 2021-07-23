import React from 'react'
import styles from '../CSS/SignupAndLogin.module.css'
import img from "../assets/login2.jpg"
import Register from './Register.js'

const Login = (props) => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    handleSignup,
    handleLogin ,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError
  } = props

    return ( 
      <section className={styles.formLogin}>
      <div className={styles.img}>
          <img src={img} alt="" />
      </div>
      <div className={styles.form}>
        <div className={styles.itemsForm}>
            <p>Inicia sesion en tu cuenta</p> <br /><br />
              <input type="text" placeholder="Email" autoFocus required 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} /> <br />
              <p className={styles.errorMsg}>{emailError}</p> 
              <input type="text" placeholder="Password" required 
                  value={password}
                  onChange={e => setPassword(e.target.value)} /> <br />
              <p className={styles.errorMsg}>{passwordError}</p>
          <div className={styles.btnLogin}><br />
                <button onClick={handleLogin}>Iniciar sesion</button>
                <p>Dont have accout <span onClick = {
                  <Register></Register>
                }>Sign Up</span></p>
          </div>
        </div>
         <div>
            <button className="btnGoogle"> 
              <i class="fab fa-google fa-2x"></i> Google 
            </button> <br />
            <button className="btnfacebook"> 
              <i class="fab fa-facebook-square fa-2x"></i> Facebook
            </button>
         </div>
      </div>
     </section>
     );
}
 
export default Login;

