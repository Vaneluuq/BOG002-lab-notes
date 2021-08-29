import React from 'react'
import Sidebar from './Sidebar'
import MainNotes from './MainNotes'
import HomeCSS from '../CSS/Home.module.css'
import { handleLogout, listenToAuthState, loginUser} from './firebaseAuth'
import { Link } from 'react-router-dom';



export default function Home() {

  // listenToAuthState(() => user => user ? loginUser(user) : handleLogout())

  const [modalIsOpen, setIsOpen] = React.useState(false);


 // Se abre modal que crea o edita nota
  function openModal() {
     setIsOpen(true);
  }

  // Se cierra modal que crea o edita nota
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
              openModal = {openModal}
            />
          </div>   
   </div>
  )
}










