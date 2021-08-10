import React from 'react'
import Sidebar from './Sidebar'
import MainNotes from './MainNotes'
import HomeCSS from '../CSS/Home.module.css'
import { useState } from 'react'
import { handleLogout} from './firebaseAuth'
import { Link } from 'react-router-dom';



export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
     setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }


  return(
   <div className={HomeCSS.container}>
        <div className={HomeCSS.sidebar}>           
          <Link to="/">
             <button className={HomeCSS.logout} onClick= {handleLogout}>Logout</button>
           </Link>
             <Sidebar
                openModal = {openModal} />
          </div>
          <div className={HomeCSS.mainNotes}>
            <MainNotes
              modalIsOpen = {modalIsOpen}
              setIsOpen = {setIsOpen}
              closeModal= { closeModal}
              />
          </div>       
   </div>
  )
}










