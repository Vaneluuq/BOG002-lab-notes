import React from 'react'
import Sidebar from './Sidebar'
import MainNotes from './MainNotes'
import HomeCSS from '../CSS/Home.module.css'
import uuid from 'react-uuid'
import { useState } from 'react'
import { db } from '../firebase'


export default function Home({handleLogout}) {

      const [notes, setNotes] = useState([])

      const addNote = () => {
        const newNote = db.collection('notes').doc().set({
          id: uuid(),
          title: "Untitle note",
          body:"",
          lastModified: Date.now()
      })
      setNotes([newNote, ...notes])
    }

    // const onDeleteNote = (id) => {
    //   setNotes(db.collection('notes').doc(id).delete());
    // };

    const onDeleteNote =  (idToDelete) => {
      setNotes(notes.filter(note => note.id !== idToDelete))
    }

    return (
        <div className={HomeCSS.container}>
            <div className={HomeCSS.sidebar}>
              <button className={HomeCSS.logout} onClick= {handleLogout}>Logout</button>
              <Sidebar addNote = {addNote}> </Sidebar>
            </div>
            <div className={HomeCSS.mainNotes}>
              <MainNotes notes = {notes} onDeleteNote={onDeleteNote}></MainNotes>
            </div>
        </div>
    )
}


// export const updateLikes = (id, likes) => firebase.firestore().collection('posts').doc(id).update({
//   likes,
// });

// const newNote = {
//   id: uuid(),
//   title: "Untitle note",
//   body:"",
//   lastModified: Date.now()
// }