import React, { useState, useEffect, Fragment } from 'react'
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
      closeModal, 
      openModal
    } = props

    const [notes, setNotes] = useState([]);
    const [existId, setExistId] = useState("");
    const [searchNote, setSearchNote] = useState("");
    const [optionSearchNote, setOptionSearchNote] = useState("titleOption");

  
    //se crea o edita nota 
    const addNotesCollection = async (notesObj) => { 
      if(existId ===""){   
        await createNotes(notesObj);
         toast("nueva nota agregada", {
           type:"success", 
           autoClose: 2000
        })}else{
          await editingNote(existId, notesObj)
          setExistId("")
        }
      }
    
    // se filtran notas por titulo, cuerpo o fecha de la nota 

    const filterNote = async(objNote, searchNote, option) => {
      if(optionSearchNote === option){
        const notaFiltradaByTitle = await objNote.filter(nota => nota.title.toLowerCase().includes(searchNote.toLowerCase()))
        setNotes(notaFiltradaByTitle)
      } else if(optionSearchNote ==="bodyOption"){
        const notaFiltradaByBody = await objNote.filter(nota => nota.body.toLowerCase().includes(searchNote.toLowerCase()))
        setNotes(notaFiltradaByBody)
      }else{
        const notaFiltradaByDate = await objNote.filter(nota => nota.lastModified.toLowerCase().includes(searchNote.toLowerCase()))
        setNotes(notaFiltradaByDate)
      }
    };
    
    // Se escuchan los cambios ocurridos en el input de busqueda y select con opciones de busqueda 
    const inputChange = (e) => setSearchNote(e.target.value);
    const selectChange =(e) => setOptionSearchNote(e.target.value)
    
    
    // Se muestran las notas existentes en firestore 
    const getNotesToScreen = async () => {
          getNotes((querySnapshot) => {
              const myNotes = [];
              querySnapshot.forEach(doc => {
                myNotes.push({...doc.data(), id:doc.id});
              });
            if(searchNote ===""){
              setNotes(myNotes);
            }else{
              filterNote(myNotes, searchNote, optionSearchNote)
            }
          });      
      };
      useEffect(() => {
        getNotesToScreen() 
    }, []); 

    
   // Se eliminan las notas 
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
    <div className={NotesCSS.containerMain}>
      <div className={NotesCSS.search}>
        <select id="optionSearch" name="options" value={optionSearchNote} onChange={selectChange}>
          <option value="titleOption">Titulo de la nota</option>
          <option value="bodyOption">Cuerpo de la nota</option>
          <option value="timeOption">Fecha de la nota</option>
        </select>
        <input type="text" placeholder="Buscar mi nota"  
            value={searchNote} onChange={inputChange} onKeyUp={getNotesToScreen}/>    
        <button type="button"><i class="fas fa-search"></i></button>
      </div>
     <div className={NotesCSS.containerMainNotes}>
      { modalIsOpen 
        ? ( <Modal
          isOpen={modalIsOpen}
          style={customStyles}
          onRequestClose={closeModal}>
          <Notes
            addNotesCollection = {addNotesCollection}
            closeModal= { closeModal}
            existId ={existId}
           />
        </Modal>
        ):(
          notes.map((note)=>( 
          <>
          <div className={NotesCSS.showNotesContainer} key={note.id}>
            <div className={NotesCSS.showNotes}>
              <div>
                <h2 className={NotesCSS.title}>{note.title}</h2>
                <h3 className={NotesCSS.body}>{note.body}</h3>
                <div  className={NotesCSS.editContainer}>
                    <button onClick={() =>openModal(setExistId(note.id))}>
                      <i class= "far fa-edit"></i></button>
                    <button onClick={() => deleteNotes(note.id)}>
                      <i class="fas fa-trash"></i></button>
                    <button onClick={() => deleteNotes(note.id)}>
                      <i class="fas fa-address-book"></i></button>
                    <p>{note.lastModified}</p>
                </div>
              </div>
            </div>
          </div>
          </>
          ))
        )
        }
    </div>
    </div>
  )
}
     

 
export default MainNotes
















 


