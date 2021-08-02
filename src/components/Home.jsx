import React from 'react'
import Sidebar from './Sidebar'
import MainNotes from './MainNotes'
import HomeCSS from '../CSS/Home.module.css'
import uuid  from 'react-uuid'
import { useState } from 'react'
import { createNotes, deleteNote } from './firebaseAuth'


export default function Home({handleLogout}) {

      const initialData = { 
          id: uuid,
          title: '',
          body: '',
          lastModified:  Date.now()
        }

      const [notes, setNotes] = useState([])
      const [datos, setDatos] = useState(initialData)

      const addNote = () => {
        const newNote = createNotes({
           ...datos
          })
      setNotes([newNote, ...notes])
    }

    const onDeleteNote =  () => {setNotes(notes.filter(note => deleteNote(note.id)))}



    return (
        <div className={HomeCSS.container}>
            <div className={HomeCSS.sidebar}>
              <button className={HomeCSS.logout} onClick= {handleLogout}>Logout</button>
              <Sidebar addNote = {addNote}> </Sidebar>
            </div>
            <div className={HomeCSS.mainNotes}>
              <MainNotes 
              notes = {notes} 
              onDeleteNote={onDeleteNote}
              datos = {datos}
              setDatos = {setDatos} 
              >
              </MainNotes>
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