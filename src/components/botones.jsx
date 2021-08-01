import React from 'react'
import ButtonCSS from '../CSS/Buttons.module.css'


function Button(props) {
  const {
     onClick,
     classbtn, 
     btnname,
     type
  } = props

    return (
       <button className={ButtonCSS.button} 
        onClick={onClick} 
        type={type}>
        <i className={classbtn}></i> 
         {btnname}
      </button>
    );
  }

  export default Button

  