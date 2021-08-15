import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import Modal from 'react-modal';
import { useState, useEffect } from 'react';
import {getIdNote} from './firebaseAuth'



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

    const [datos, setDatos] = useState(initialData)   


//recibe el evento del formulario y envia a la coleccion la data
    const handleSubmit = e => {
        e.preventDefault();
          addNotesCollection({  ...datos, lastModified: time }) 
          setDatos({...initialData});    
          closeModal();
      }

  
// se aguardan en datos los eventos sobre los input para title y body
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    
const time = new Date().toLocaleDateString('en-GB',{
     day: 'numeric',
     month: 'long',
     year: 'numeric', 
     hour: "2-digit",
     minute: "2-digit"
    })
  


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




  
