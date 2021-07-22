// sfc
// imrse - Import React, useState, useEffect
// imr - Import React

import React from 'react'
import styles from '../CSS/Welcome.module.css'
import botonIngresar from '../assets/botonIngresar.jpg'
import botonRegistrarse from '../assets/botonRegistrarse.jpg'
import  { Link } from 'react-router-dom'

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
                <img src={botonIngresar}/> 
                <h2 className={styles.textLogin}>¡Sigue viajando con nosotros!</h2>
                <h1 className={styles.titleLogin} onClick={() => alert("Hello!")}>Ingresar</h1>
             </div>
             <div className = {styles.containerRegister}>
                <img src={botonRegistrarse}/> 
                <h2 className={styles.textRegister}>Empieza a viajar con nosotros</h2>
                <h1 className={styles.titleRegister} onClick={() => alert("Hello!")}>Registrarse</h1>
             </div>
             <button className={styles.about}>About NoteWithMe</button> 
          </div> 
        </div>
    )
}

