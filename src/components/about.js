import React from 'react'
import AboutCSS from '../CSS/About.module.css'


const About = () => {
    return (
      <div className={AboutCSS.container} >
         <div className={AboutCSS.boxPropuse}>
         <h2>¿Que es <span>NoteWithMe</span>?</h2> 
           <p>NoteWithMe nace con el proposito de ayudar a los viajeros a mantener el orden.
              Es posible que durante la planeación y el viaje en si, se haga necesario recordar muchas cosas </p> 
         </div>
         <div className = {AboutCSS.boxTres}></div>
         <div className={AboutCSS.boxUsage}>
              <h2>¿Como utilizar <span>NoteWithMe</span>?</h2> <br />
              <p>NoteWithMe es una herramienta muy sencilla de utilizar.....</p>  
          </div>
          <div className = {AboutCSS.boxCuatro}></div>
      </div>
      );
}
 
export default About;