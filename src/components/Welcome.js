// sfc
// imrse - Import React, useState, useEffect
// imr - Import React

import styles from '../CSS/Welcome.module.css'
import { Link } from 'react-router-dom'
import Login from './Login'

export function Welcome(){
    return (
        <div className={styles.container}>
         <div className={styles.containerTitle}>
           <div className={styles.title}>
                <h1>NoteWithMe</h1>
                <button>Quiero
                  <span> registrarme</span>
               </button>
           </div>
         </div>
          <div className={styles.login}>
            <Login>
            </Login>
          </div> 
          <div className={styles.register}>
            <button>Quiero
              <span> registrarme</span>
            </button>
          </div>
        </div>
    )
}

