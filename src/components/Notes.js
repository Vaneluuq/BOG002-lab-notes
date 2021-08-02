import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import edit from '../assets/pencil-striped-symbol-for-interface-edit-buttons_icon-icons.com_56782.svg'
import trash from '../assets/trashcan_trash_delete_recycle_bin_icon_176937.svg'
import check  from '../assets/check.svg'

const Notes = (props) => {
    const {
     title,
     body,
     lastModified,
     onClickEdit,
     onClickTrash,
     currentId, 
     datos,
     setDatos
    } = props

    const handleSubmit = e => {
        e.preventDefault();
        console.log('enviando datos...' + datos.title + ' ' + datos.body)
    }

  
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
                {currentId === "" 
                ? ( <img type="submit" src={check} alt="Submit" />) 
                : ( <img type="submit" src={edit} alt="Submit" onClick={onClickEdit} />)}
            <img type="submit" onClick={onClickTrash} src={trash} alt="" />

                <p>{lastModified}</p>
           </div>
     </form>

     );
}

export default Notes;


{/* <div className={NotesCSS.opcionesNotes}>
                <img type="button" onClick={onClickEdit} src={edit} alt="" />
                <img type="button" onClick={onClickTrash} src={trash} alt="" />
                <p>{lastModified}</p>
           </div> */}

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