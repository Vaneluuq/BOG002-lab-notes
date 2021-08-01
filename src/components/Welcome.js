// sfc
// imrse - Import React, useState, useEffect
// imr - Import React

import styles from '../CSS/Welcome.module.css'
import imgIngresar from '../assets/botonIngresar.jpg'
import imgRegistrarse from '../assets/botonRegistrarse.jpg'
import { Link } from 'react-router-dom'

export function Welcome(){
    return (
        <div className={styles.welcome}>
         <div className={styles.welcomeImage}>
           <div className={styles.title}>
             <h1>NoteWithMe</h1>
           </div>
         </div>
          <div className={styles.welcomeButtons}>
             <div className={styles.containerLogin}>
                <img src={imgIngresar} alt="Imagen de fondo"/> 
                <h2 className={styles.textLogin}>¡Sigue viajando con nosotros!</h2>
                <Link to="/login">
                   <h1 className={styles.titleLogin}>Ingresar</h1>
                </Link>
             </div> 
             <div className = {styles.containerRegister}>
                <img src={imgRegistrarse} alt="Imagen de fondo"/> 
                <h2 className={styles.textRegister}>¡Empieza a viajar con nosotros!</h2>
                <Link to ="/signup">
                  <h1 className={styles.titleRegister}>Registrarse</h1>
                </Link>
             </div>
              <Link to ="/about">
                <button className={styles.about}>About NoteWithMe</button> 
              </Link> 
          </div> 
        </div>
    )
}

