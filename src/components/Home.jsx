import React from 'react'
import Sidebar from './Sidebar'
import MainNotes from './MainNotes'
import HomeCSS from '../CSS/Home.module.css'
import { useState } from 'react'
import { deleteNote, handleLogout } from './firebaseAuth'
import { Link } from 'react-router-dom';
import uuid  from 'react-uuid'


export default function Home() {
    
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [notes, setNotes] = useState([])
    const [datos, setDatos] = useState({ 
      id: uuid(),
      title: '',
      body: '',
    }
   )
  
    const addNote = () => {
      const newNote = { 
        datos
      }
    setNotes([newNote, ...notes])
    }

    function openModal() {
      setIsOpen(true);
      addNote()
      }

    const onDeleteNote =  () => {setNotes(notes.filter(note => deleteNote(note.id)))}


    return (
        <div className={HomeCSS.container}>
            <div className={HomeCSS.sidebar}>
              <Link to="/">
                <button className={HomeCSS.logout} onClick= {handleLogout}>Logout</button>
              </Link>
                 <Sidebar 
                  //  addNote = {addNote}
                   openModal = {openModal}
                   />
            </div>
            <div className={HomeCSS.mainNotes}>
              <MainNotes 
              notes = {notes} 
              onDeleteNote={onDeleteNote}
              datos = {datos}
              setDatos = {setDatos}
              modalIsOpen = {modalIsOpen}
              setIsOpen = {setIsOpen}
              />
            </div>
        </div>
    )
}






 // const [notes, setNotes] = useState([])

// const addNote = () => {
//   const newNote = {
//     id: uuid(),
//     title: "",
//     body:"",
//     lastModified: Date.now(),
//     // date: db.Timestamp.now()
//     }
// setNotes([newNote, ...notes])
// }




// const addNote = () => {
//   const newNote = {
//     id: uuid(),
//     title: "Untitle note",
//     body:"",
//     lastModified: Date.now()
//     }
  
// setNotes([newNote, ...notes])
// }


// const addNote = () => {
//   const newNote = db.collection('notes').doc().set({
//     id: uuid(),
//     title: "Untitle note",
//     body:"",
//     lastModified: Date.now()
// })
// setNotes([newNote, ...notes])
// }


    // const onDeleteNote = (id) => {
    //   setNotes(db.collection('notes').doc(id).delete());
    // };

        // const onDeleteNote =  (idToDelete) => {
    //   setNotes(notes.filter(note => note.id !== idToDelete))
    // }