import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import edit from '../assets/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782.svg'
import trash from '../assets/trashcan_trash_delete_recycle_bin_icon_176937.svg'

const Notes = (props) => {
    const {
     title,
     body,
     lastModified,
     onClickEdit,
     onClickTrash
    } = props

    return ( 
      <div className ={NotesCSS.notesMain}>
            
            <input type="text" 
                id="title" 
                placeholder="Añade un titulo" 
                autoFocus required 
                value={title}
                />
            <textarea id="body" 
                placeholder="Escribe tu nota aqui"
                value={body}
                />
            <div className={NotesCSS.opcionesNotes}>
                <img type="button" onClick={onClickEdit} src={edit} alt="" />
                <img type="button" onClick={onClickTrash} src={trash} alt="" />
                <p>{lastModified}</p>
            </div>
      </div>

     );
}

export default Notes;


// 
// //  const [status, setStatus] = useState(false)

//   const addNote = () => {
//   const newNote = {
//     id: uuid(),
//     title: "Untitle note",
//     body:"",
//     lastModified: Date.now()
//   }
//   setNotes([newNote, ...notes])
//  }