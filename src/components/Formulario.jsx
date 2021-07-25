import styles from '../CSS/SignupAndLogin.module.css'

const Formulario = (props) => {
   const {
    email,
    setEmail,
    password,
    setPassword,
    handleOption,
    emailError,
    passwordError, 
    btnLabel,
    greeting,
    image
} = props

    return (
     <section className={styles.formLogin}>
        <div className={styles.form}>
           <div className={styles.itemsForm}>
               <p>{greeting}</p> <br /><br />
                <input 
                    type="text" 
                    placeholder="Email" 
                    autoFocus 
                    required 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    /> <br />
                <p className={styles.errorMsg}>{emailError}</p> 
                <input 
                    type="password" 
                    placeholder="Password" 
                    required
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    /> <br />
                <p className={styles.errorMsg}>{passwordError}</p>
                <div className={styles.btnLogin}><br />
                    <button type="button" onClick={handleOption}>{btnLabel}</button>
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
            <img src={image} alt="" />
        </div>
     </section>
    );
}
 
export default Formulario;






// {hasAccount ? (
//     //    <>
//          <button type="button" onClick={handleLogin}>{btnLabel}</button>
//        {/* </>
//    ):(   
//        <>
//          <button type="button" onClick={handleSignup}>{btnLabel}</button>
//        </>)} */}