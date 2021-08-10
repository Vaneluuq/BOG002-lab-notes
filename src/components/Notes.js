import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import Modal from 'react-modal';
import { useState } from 'react';
import {getIdNote} from './firebaseAuth'


Modal.setAppElement('#root');

const Notes = (props) => {
    const {
     addNotesCollection, 
     closeModal, 
     title, 
     body, 
     btnIcon, 
     time,
     editNotesCollection
    } = props

    const initialData = {
        title: '',
        body: '',
    }

    const [datos, setDatos] = useState(initialData)   


//recibe el evento del formulario y envia a la coleccion la data
    const handleSubmit = e => {
        e.preventDefault();
            addNotesCollection({  ...datos, 
                lastModified: time}
                )        
            closeModal()
      }


 
  
// se aguardan en datos los eventos sobre los input para title y body
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    
  
    return ( 
        <form className ={NotesCSS.notesMain} onSubmit={handleSubmit}>
            <input type="text" 
                id="title" 
                placeholder="Añade un titulo" 
                autoFocus required 
                name="title"
                value={title}
                onChange={handleInputChange}
                />
            <textarea id="body" 
                placeholder="Escribe tu nota aqui"
                 value={body}
                name="body"
                onChange={handleInputChange}
                />

            <div className={NotesCSS.opcionesNotes}>
                <button type="submit"> <i className={btnIcon}></i> </button>
                <p>{time}</p>
           </div>
     </form>
    );
}

export default Notes;


{/* <i class="far fa-check-circle"></i> */}


{/* <img type="button" onClick={deleteNote} src={trash} alt="" /> */}



       {/* {datos === "" 
                ? (<button type="submit"><i class="far fa-check-circle"></i></button>)
                :(<button type="submit"><i class="far fa-edit"></i></button> )} */}



  
