import React from 'react'
import NotesCSS from '../CSS/Notes.module.css'
import trash from '../assets/trashcan_trash_delete_recycle_bin_icon_176937.svg'
import { createNotes } from './firebaseAuth'
import Modal from 'react-modal';
import { getNotes } from './firebaseAuth';
Modal.setAppElement('#root');

const customStyles = {
    overlay: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)'
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

const Notes = (props) => {
    const {
     title,
     body,
     onClickTrash,
     datos, 
     setDatos, 
     modalIsOpen, 
     setIsOpen
    } = props

    function closeModal() {
      setIsOpen(false);
    }
        

    const handleSubmit = e => {
        e.preventDefault();
        createNotes({   
          id: datos.id,
          title:  datos.title,
          body: datos.body, 
          lastModified: time
    })
     closeModal()
 }
  
    const handleInputChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    let time = new Date().toLocaleDateString("en-GB",{
        hour: "2-digit",
        minute: "2-digit"})

    const handleAfterCloseFunc = () => {
        getNotes((querySnapshot) => {
            querySnapshot.forEach((doc) => {
             console.log(doc.data())
         })})
    }

  
    return ( 
    <Modal
    isOpen={modalIsOpen}
    style={customStyles}
    onAfterClose={handleAfterCloseFunc}
    onRequestClose={closeModal}
    >
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
            <img type="submit" onClick={onClickTrash} src={trash} alt="" />
            <p>{time}</p>
           </div>
     </form>
    </Modal>
    );
}

export default Notes;








    // const newData = () => {
    //     {new Date(lastModified).toLocaleDateString("en-GB",{
    //         hour: "2-digit",
    //         minute: "2-digit"  })}
    // }
   




       {/* {datos === "" 
                ? (<button type="submit"><i class="far fa-check-circle"></i></button>)
                :(<button type="submit"><i class="far fa-edit"></i></button> )} */}



   // ? ( <img type="submit" src={check} alt="img" />) 
                // : ( <img type="submit" src={edit} alt="Submit"/>)}

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