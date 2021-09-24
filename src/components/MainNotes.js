import React, { useState, useEffect, useRef } from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'
import Notes from './Notes';
import { createNotes, editingNote, getNotes,  deleteNote} from './firebaseAuth'
import swal from 'sweetalert'
import Modal from 'react-modal';
import { toast } from 'react-toastify';
import SearchBar from './Search'

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

const colors = ["Orangered","Blue","Green","DodgerBlue", "Violet", "Navy", "Purple", "YellowGreen", "OrangeRed", "SlateBlue", "Salmon", "Crimson", "HotPink", "Magenta"];



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
    const [colorNote, setColorNote] = useState("");



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


  // Se cambian de color las notas 
    let box = useRef();
    const handleClick = (id) => {
        const random = Math.floor(Math.random()*colors.length);
        let newColor = box.current.style.backgroundColor = colors[random];
        setColorNote(newColor)
      };

    
    return (  
    <div className={NotesCSS.containerMain}>
      <SearchBar
        searchNote = {searchNote}
        setSearchNote = {setSearchNote}
        optionSearchNote = {optionSearchNote}
        setOptionSearchNote = {setOptionSearchNote}
        getNotesToScreen = {getNotesToScreen}
        />
      <div className={NotesCSS.containerMainNotes}>
        { modalIsOpen ? 
          ( <Modal
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
              <div id="showNotesContainer" key={note.id} className={NotesCSS.showNotesContainer} ref={box} style={{backgroundColor: colorNote}}>
                <h2 className={NotesCSS.title}>{note.title}</h2>
                <h3 className={NotesCSS.body}>{note.body}</h3>
                <div  className={NotesCSS.editContainer}>
                  <button onClick={() =>openModal(setExistId(note.id))}>
                    <i className= "far fa-edit"></i></button>
                  <button onClick={() => deleteNotes(note.id)}>
                    <i className="fas fa-trash"></i></button>
                  <button onClick={() => handleClick(note.id)}>
                    <i className="fas fa-address-book"></i></button>
                  <p>{note.lastModified}</p>
                </div>
              </div>
            ))
           )
        }
      </div>
    </div>
  )
};
     

 
export default MainNotes



//cambiar el color notas 
//añadir user name 
// verificar solo lectura para una persona 











 


