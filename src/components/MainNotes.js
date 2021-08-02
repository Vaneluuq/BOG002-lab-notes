import React from 'react'
import NotesCSS from '../CSS/MainNotes.module.css'
import Notes from './Notes';


const MainNotes = (props) => {
    const {
      notes, 
      onDeleteNote,
      datos,
      setDatos
    } = props
  

    return (  
        <div className={NotesCSS.containerMainNotes}>
          {notes.map((note)=>(
            <Notes 
                title = {note.title}
                body = {note.body}
                lastModified = {new Date(note.lastModified).toLocaleDateString("en-GB",{
                    hour: "2-digit",
                    minute: "2-digit"
                })}
                onClickTrash = {()=> onDeleteNote(note.id)}
                datos = {datos}
                setDatos = {setDatos} 
                />       
            ))}
        </div>
    );
}
 
export default MainNotes




// <div className={NotesCSS.containerMainNotes}>
// {notes.map((note)=>(
//     <Notes 
//     title = {note.title}
//     body = {note.body}
//     lastModified = {note.lastModified}
//     />       
// ))}
// </div>





// export const obtenerPosts = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);


// export const guardarPosts = (mensaje, date, displayName, imagen, likes, userId, email) => {
//     const colleccionPost = firebase.firestore().collection('posts');
//     return colleccionPost.doc().set({
//       mensaje: mensaje,
//       date,
//       user: displayName,
//       userId,
//       imagen: imagen,
//       likes,
//       correo: email,
//     });
//   };