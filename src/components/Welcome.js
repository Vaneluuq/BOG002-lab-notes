import styles from '../CSS/Welcome.module.css'
import Login from './Login'
import Register from './Register';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Welcome(){
  const [hasAccount, setHasAccount] = useState(true);
    return (
        <div className={styles.container}>
         <div className={styles.containerTitle}>
          <div className={styles.title}>
            <h1>NoteWithMe</h1>
              { hasAccount ? (
                <>
                  <p>Aun no tengo cuenta</p>
                  <button onClick={()=> setHasAccount(!hasAccount)}>Registrarse</button>
                </>
                  ):(
                <>
                  <p>Ya tengo cuenta</p>
                  <button onClick={()=> setHasAccount(!hasAccount)}> Ingresar</button>
                </>)
              }
          </div>
         </div>
         <div className={styles.login}>
            {hasAccount ? (<Login></Login>):(<Register></Register>)}
          </div> 
         <div className={styles.register}>
            { hasAccount ? (
              <button onClick={()=> setHasAccount(!hasAccount)}>Registrarse</button>
              ):(
              <button onClick={()=> setHasAccount(!hasAccount)}> Ingresar</button>
              )
            }
         </div>
         <div className={styles.about}>
            <Link id="RouterNavLink" to="/about">Conoce mas de <span>NoteWithMe</span></Link>
            <p>@Vaneluuq</p>
          </div> 
        </div>
  )
}



        
// {
//   login ? (
//      <button onClick= {()=> setLogin(!login)}>Sign Up</button>
//   ):(

//   )
// }
//       <Link to ="/signup">
//         <h1 className={styles.titleRegister}>Registrarse</h1>
//       </Link>



// {
//   login ? (
//      <button onClick= {()=> setLogin(!login)}>Sign Up</button>
//   ):(

//   )
// }