import  { fb, google } from '../firebase'



const handleLogout = () => fb.auth().signOut() 

const loginUser = (email, password) => fb.auth().signInWithEmailAndPassword(email, password)

const createUser = (email, password) => fb.auth().createUserWithEmailAndPassword(email, password)

const loginWithGoogle = () => fb.auth().signInWithPopup(google)

const authListener = (callback) => fb.auth().onAuthStateChanged(callback)



export { handleLogout, loginUser, loginWithGoogle, authListener, createUser }


