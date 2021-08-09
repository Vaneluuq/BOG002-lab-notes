import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import trash from '../assets/trashcan_trash_delete_recycle_bin_icon_176937.svg'
import Modal from 'react-modal';
import { useState } from 'react';
import uuid from 'react-uuid'

Modal.setAppElement('#root');

const Notes = (props) => {
    const {
     addNotesCollection, 
     closeModal, 
     title, 
     body, 
     deleteNote, 
     addOrEditNotes
    } = props

    const [datos, setDatos] = useState({ 
          title: '',
          body: '',
        })   


//recibe el evento del formulario y envia a la coleccion la data
    const handleSubmit = e => {
        e.preventDefault();
        addNotesCollection ({  ...datos, 
        lastModified: time  })        
        closeModal()
      }


// //funcion del tiempo para la verificacion de hora de creacion y modificacion de la nota 
    let time = new Date().toLocaleDateString("en-GB",{
        hour: "2-digit",
        minute: "2-digit"})

 
  
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
            <button type="submit"><i class="far fa-check-circle"></i> </button>
            <img type="submit" onClick= {deleteNote} src={trash} alt="" />
            <p>{time}</p>
           </div>
     </form>
    );
}

export default Notes;







// const Notes = (props) => {
//     const {
//      title,
//      body,
//      onClickTrash,
//      modalIsOpen, 
//      setIsOpen, 
//      addNotesToScreen,
//      datos, 
//      setDatos
//     } = props


// //funcion cerrar modal
//     function closeModal() {
//       setIsOpen(false);
//     }


// //recibe el evento del formulario y envia a la coleccion la data
//     const handleSubmit = e => {
//         e.preventDefault();
//         addNotesToScreen({  ...datos, 
//            lastModified: time
//          })
           
//     //  closeModal()
//  }
  
// // se aguardan en datos los eventos sobre los input para title y body
//     const handleInputChange = (e) => {
//         setDatos({
//             ...datos,
//             [e.target.name] : e.target.value
//         })
//     }

// //funcion del tiempo para la verificacion de hora de creacion y modificacion de la nota 
//     let time = new Date().toLocaleDateString("en-GB",{
//         hour: "2-digit",
//         minute: "2-digit"})


//  // devuelve un evento al cerrar la ventana modal 
//     const handleAfterCloseFunc = () => {

//     }


  
//     return ( 
//     // <Modal
//     // isOpen={modalIsOpen}
//     // style={customStyles}
//     // onAfterClose={handleAfterCloseFunc}
//     // onRequestClose={closeModal}
//     // >
//         <form className ={NotesCSS.notesMain} onSubmit={handleSubmit}>
//             <input type="text" 
//                 id="title" 
//                 placeholder="Añade un titulo" 
//                 autoFocus required 
//                 name="title"
//                 value={title}
//                 onChange={handleInputChange}
//                 />
//             <textarea id="body" 
//                 placeholder="Escribe tu nota aqui"
//                 value={body}
//                 name="body"
//                 onChange={handleInputChange}
//                 />

//             <div className={NotesCSS.opcionesNotes}>
//             <button type="submit"><i class="far fa-check-circle"></i> </button>
//             <img type="submit" onClick={onClickTrash} src={trash} alt="" />
//             <p>{time}</p>
//            </div>
//      </form>
//     // </Modal>






















       {/* {datos === "" 
                ? (<button type="submit"><i class="far fa-check-circle"></i></button>)
                :(<button type="submit"><i class="far fa-edit"></i></button> )} */}



  
