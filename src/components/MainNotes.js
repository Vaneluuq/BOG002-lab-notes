import React from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'
import Notes from './Notes';


const MainNotes = (props) => {
    const {
      notes, 
      onDeleteNote,
      datos,
      setDatos, 
      modalIsOpen, 
      setIsOpen
    } = props



    return (  
        <div className={NotesCSS.containerMainNotes}>
          {notes.map((note)=>(
               <Notes 
                title = {note.title}
                body = {note.body}
                onClickTrash = {()=> onDeleteNote(note.id)}
                datos = {datos}
                setDatos = {setDatos} 
                modalIsOpen = {modalIsOpen}
                setIsOpen = {setIsOpen}
                />     
            ))}
        </div>
    );
}
 
export default MainNotes


            // lastModified = {note.lastModified}


