import React from 'react'
import AboutCSS from '../CSS/About.module.css'
import img from '../assets/imagen-about.jpg'
import { Link } from 'react-router-dom'

const About = () => {
    return (
      <div className={AboutCSS.container} >
         <div className={AboutCSS.containerText}>
           <h2>¿Que es <span>NoteWithMe</span>?</h2> <br />
           <p>NoteWithMe nace con el proposito de ayudar a los viajeros a mantener el orden.
              Es posible que durante la planeación y el viaje en si, se haga necesario recordar muchas cosas, 
              pueden ser el no olvidar cosas basicas de un viaje como el cepillo de dientes, 
              como tener a la mano una dirección. </p> <br /> <br />
            <h2>¿Como utilizar <span>NoteWithMe</span>?</h2> <br />
            <p>NoteWithMe es una herramienta muy sencilla de utilizar.....</p>
         </div>
         <div className= {AboutCSS.containerImg}>
           <Link to="/">
              <button>Volver a inicio</button>
           </Link>
           <img src={img} alt="" />
         </div>
      </div>
      );
}
 
export default About;