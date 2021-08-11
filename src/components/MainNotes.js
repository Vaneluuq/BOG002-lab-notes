import React, { useState, useEffect } from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'
import Notes from './Notes';
import { createNotes, editingNote, getNotes,  deleteNote } from './firebaseAuth'
import swal from 'sweetalert'
import Modal from 'react-modal';
import { toast } from 'react-toastify';


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
    const [existId, setExistId] = useState("")


    const addNotesCollection = async (notesObj) => {    
        await createNotes(notesObj);
         toast("nueva nota agregada", {
           type:"success", 
           autoClose: 2000
         });
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


    const deleteNotes = (id) => {
      swal({
        title: "Se eliminará tu nota",
        text: "Quieres continuar?",
        icon: "warning",
        buttons: ["No", "Si"]
        }).then(respuesta => {
        if(respuesta){
          deleteNote(id);
          toast("Nota borrada", {
            type:"success", 
            autoClose: 2000
          });
        }
      })
    }
  

    return (  
    <div className={NotesCSS.containerMainNotes}>
      { modalIsOpen 
        ? ( <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}>
          <Notes
            addNotesCollection = {addNotesCollection}
            closeModal= { closeModal}
           />
        </Modal>
        ):(
          notes.map((note)=>( 
          <div className={NotesCSS.showNotesContainer} key={note.id}>
            <div className={NotesCSS.showNotes}>
              <div>
                <h2 className={NotesCSS.title}>{note.title}</h2>
                <h3 className={NotesCSS.body}>{note.body}</h3>
                 <div  className={NotesCSS.editContainer}>
                    <button onClick={() => setExistId(note.id)}>
                      <i class= "far fa-edit"></i></button>
                    <button onClick={() => deleteNotes(note.id)}>
                      <i class="fas fa-trash"></i></button>
                    <button onClick={() => deleteNotes(note.id)}>
                     <i class="fas fa-address-book"></i></button>
                      <p>{note.lastModified}
                            </p>
                 </div>
                  {/* <button onClick={() => modalIsOpen}>editar</button>  */}
              </div>
             </div>
           </div>
          )))
        }
    </div>
  )
}
     

 
export default MainNotes

















 


