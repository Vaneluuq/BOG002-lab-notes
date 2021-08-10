import React, { useState, useEffect } from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'
import Notes from './Notes';
import { createNotes, editingNote, getNotes,  deleteNote } from './firebaseAuth'
import trash from '../assets/trashcan_trash_delete_recycle_bin_icon_176937.svg'
import Modal from 'react-modal';
import { useAlert } from 'react-alert'

Modal.setAppElement('#root');

const customStyles = {
  overlay: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)'
    },
  content: {
    backgroundColor: '#F3F1F1',
    border: '1px solid #ccc',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
};

const MainNotes = (props) => {
    const {
      modalIsOpen, 
      closeModal
    } = props

    const [notes, setNotes] = useState([])


    const addNotesCollection = (notesObj) => {    createNotes(notesObj);
       console.log("nueva nota agregada");
      } 
    
    const editNotesCollection = (id, notesObj) => {
       editingNote(id, notesObj);
        console.log("editando nota ")
    }
    


    const getNotesToScreen = async () => {
          getNotes((querySnapshot) => {
              const myNotes = [];
              querySnapshot.forEach(doc => {
                myNotes.push({...doc.data(), id:doc.id});
              });
              setNotes(myNotes);
          });      
      };
      useEffect(() => {
        getNotesToScreen()
    }, []); 




    const deleteNotes = async (id) => {
      if (window.confirm("¿Se eleminará tu nota, quieres continuar?")) {
        await deleteNote(id);
      }
  }

  let time = new Date().toLocaleDateString("en-GB",{
    hour: "2-digit",
    minute: "2-digit"})
  


    return (  
    <div className={NotesCSS.containerMainNotes}>
      { modalIsOpen 
        ? ( <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}>
          <Notes
            btnIcon = "far fa-check-circle"
            addNotesCollection = {addNotesCollection}
            closeModal= { closeModal}
            time ={time}/>
        </Modal>
        ):(
          notes.map((note)=>( 
          <div className={NotesCSS.showNotesContainer} key={note.id}>
            <div className={NotesCSS.showNotes}>
              <div>
                <h2 className={NotesCSS.title}>{note.title}</h2>
                <h3 className={NotesCSS.title}>{note.body}</h3>
                 <div  className={NotesCSS.editContainer}>
                    <button onClick={() => deleteNotes(note.id)}>
                    <i class="fas fa-trash"></i></button>
                    <p>{time}</p>
                 </div>
                  
                  {/* <button onClick={() => modalIsOpen}>editar</button> */}
              </div>
             </div>
           </div>
          )))
        }
    </div>
  )
}
     

 
export default MainNotes


{/* <Notes
btnIcon = "far fa-edit"
title = {note.title}
body = {note.body}
deleteNote = {deleteNotes}
closeModal= { closeModal}
editNotesCollection = {editNotesCollection}
/> */}

// const addNotesCollection = async (notesObj) => {
//   if(existNoteId === "") {
//       await createNotes(notesObj);
//         console.log("nueva nota agregada");
//   } else {
//       await editingNote(existNoteId, notesObj);
//       console.log("editando nota ")
//   }
// }



// </div>
 
















 


