import React, { useState, useEffect } from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'
import Notes from './Notes';
import { createNotes, editingNote, getNotes,  deleteNote } from './firebaseAuth'

import Modal from 'react-modal';

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
      setIsOpen, 
      newNote, 
      setNewNote
    } = props

    const [notes, setNotes] = useState([])
    const [existNote, setExistNote] = useState("")

 

    const addNotesCollection = (notesObj) => { createNotes(notesObj) }


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


    const closeModal = () => {
      setIsOpen(false);
      setNewNote(false)
    }


    const deleteNote = async (id) => {
      if (window.confirm("¿Se eleminará tu nota, quieres continuar?")) {
          await deleteNote(id);
          console.log("nota eliminada");
      }
  }

    return (  
    <div className={NotesCSS.containerMainNotes}>
      { newNote 
        ? ( <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}>
          <Notes
            addNotesCollection = {addNotesCollection}
            closeModal= { closeModal}/>
        </Modal>
        ):(
          notes.map((note)=>( 
          <div key={note.id}>
            <Notes
            title = {note.title}
            body = {note.body}
            // addNotesCollection = {addNotesCollection}
            deleteNote = {deleteNote}
            />
           </div>
           )))
      }
    </div>
    );
}
 
export default MainNotes



  // const deleteNote =  () => {setNotes(notes.filter(note => deleteNote(note.id)))}

 
















 


