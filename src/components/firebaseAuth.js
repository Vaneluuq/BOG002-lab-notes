import  { fb, google, db } from '../firebase'



const handleLogout = () => fb.auth().signOut() 

const loginUser = (email, password) => fb.auth().signInWithEmailAndPassword(email, password)

const createUser = (email, password) => fb.auth().createUserWithEmailAndPassword(email, password)

const loginWithGoogle = () => fb.auth().signInWithPopup(google)

const authListener = (callback) => fb.auth().onAuthStateChanged(callback)




const getNotes = (callback) => db.collection('notes').orderBy('date', 'desc').onSnapshot(callback);

const createNotes =(notesObj)=> db.collection('notes').doc().set({notesObj});


const newNote = (noteEdit, id) => {
  db.collection('posts').doc(id).update({
    mensaje: noteEdit,
  });
};

const deleteNote = (id) => { db.collection('posts').doc(id).delete()};



export { handleLogout, loginUser, loginWithGoogle, authListener, createUser,
getNotes, createNotes, newNote, deleteNote
}


