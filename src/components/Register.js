import React from 'react'
import styles from '../CSS/SignupAndLogin.module.css'
import img from "../assets/login.jpg"


const Register = () => {
    return (  
        <section className={styles.formLogin}>
        <div className={styles.form}>
          <div className={styles.itemsForm}>
              <p>Crea tu cuenta de NoteWithMe</p> <br /><br />
                <input type="text" placeholder="Email" autoFocus required /> <br />
                <p className={styles.errorMsg}></p> 
                <input type="text" placeholder="Password" required /> <br />
                <p className={styles.errorMsg}></p>
                <input type="text" placeholder="Repeat password" required />
                <p className={styles.errorMsg}></p>
            <div className={styles.btnLogin}><br />
                    <button>Registrarse</button>
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
        <div className={styles.img}>
            <img src={img} alt="" />
        </div>
       </section>
    );
}
 
export default Register;



