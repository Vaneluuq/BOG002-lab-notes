import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import {getIdNote} from './firebaseAuth'
import { fb } from '../firebase';

Modal.setAppElement('#root');

const Notes = (props) => {
    const {
     addNotesCollection, 
     closeModal, 
     title, 
     body, 
     existId
    } = props

    const initialData = {
        title: '',
        body: '',
    }

    const user = fb.auth().currentUser;

    const [datos, setDatos] = useState(initialData)   


//recibe el evento del formulario y lo envia a la coleccion en firestore
    const handleSubmit = e => {
        e.preventDefault();
          addNotesCollection({  ...datos, lastModified: time, userId: user.uid, displayName: user.displayName}) 
          setDatos({...initialData});    
          closeModal();
      }

    //   , currentUser: currentUser 

// se guardan en "datos" los eventos sobre los input para title y body
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

//funcion generadora de la fecha de creacion y modificacion 
const time = new Date().toLocaleDateString('en-GB',{
     day: 'numeric',
     month: 'long',
     year: 'numeric', 
     hour: "2-digit",
     minute: "2-digit"
    })
  

// se obtiene id de la nota que permiti identificar la data cuando se crea o modifica la nota. 
    const getNoteById  = async (id) => {
        const doc = await getIdNote(id);
            setDatos({...doc.data()})
    }

    useEffect(() =>{
        if (existId === "") {
            setDatos({...initialData });
        } else {
            getNoteById(existId);
        }

    },[existId]);

    return ( 
        <form className ={NotesCSS.notesMain} onSubmit={handleSubmit}>
            <input type="text" 
                id="title" 
                placeholder="Añade un titulo" 
                autoFocus required 
                name="title"
                value={existId === "" ? title : datos.title}
                onChange={handleInputChange}
                />
            <textarea id="body" 
                placeholder="Escribe tu nota aqui"
                 value={existId === "" ? body : datos.body}
                name="body"
                onChange={handleInputChange}
                />
            <div className={NotesCSS.opcionesNotes}>
              <button className="btn-guardar">
                {existId === "" ? "Guardar" : "Actualizar"}
              </button>
                {/* <button type="submit"> <i className="far fa-check-circle"></i> </button> */}
                <p>{time}</p>
           </div>
     </form>
    );
}

export default Notes;




  
