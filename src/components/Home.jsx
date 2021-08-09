import React from 'react'
import Sidebar from './Sidebar'
import MainNotes from './MainNotes'
import HomeCSS from '../CSS/Home.module.css'
import { useState } from 'react'
import { handleLogout} from './firebaseAuth'
import { Link } from 'react-router-dom';



export default function Home() {
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [newNote, setNewNote] = useState(true);

  function openModal() {
     setIsOpen(true);
     setNewNote(true)
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
              setNewNote = {setNewNote}
              newNote = {newNote}
              />
          </div>       
   </div>
  )
}












// const [modalIsOpen, setIsOpen] = React.useState(false);
// const [notes, setNotes] = useState([])
// const [datos, setDatos] = useState({ 
//   title: '',
//   body: '',
// })   

// function openModal() {
//   setIsOpen(true);
//   const newNote = { datos }
//   setNotes([newNote, ...notes])}




// return (
//     <div className={HomeCSS.container}>
//         <div className={HomeCSS.sidebar}>
//           <Link to="/">
//             <button className={HomeCSS.logout} onClick= {handleLogout}>Logout</button>
//           </Link>
//              <Sidebar 
//                 openModal = {openModal}
//                />
//         </div>
//         <div className={HomeCSS.mainNotes}>
//           <MainNotes 
//           notes = {notes} 
//           onDeleteNote={onDeleteNote}
//           modalIsOpen = {modalIsOpen}
//           setIsOpen = {setIsOpen}
//           setNotes = {setNotes} 
//           datos = {datos}
//           setDatos = {setDatos}
//           />
//         </div>
//     </div>

