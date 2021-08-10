import  { fb, google, db } from '../firebase'

//firebase auth 

const handleLogout = () => fb.auth().signOut() 

const loginUser = (email, password) => fb.auth().signInWithEmailAndPassword(email, password)

const createUser = (email, password) => fb.auth().createUserWithEmailAndPassword(email, password)

const loginWithGoogle = () => fb.auth().signInWithPopup(google)

const authListener = (callback) => fb.auth().onAuthStateChanged(callback)



// firestore 

const createNotes =(notesObj)=> db.collection('notes').doc().set(notesObj);

const getNotes = (callback) => db.collection('notes').onSnapshot(callback);


const editingNote = (id, notesObj) => db.collection('notes').doc(id).update(notesObj);

const deleteNote = (id) => db.collection('notes').doc(id).delete();

const getIdNote =(id) => db.collection("notes").doc(id).get()


export { handleLogout, loginUser, loginWithGoogle, authListener, createUser,
getNotes, createNotes, editingNote , deleteNote, getIdNote}


