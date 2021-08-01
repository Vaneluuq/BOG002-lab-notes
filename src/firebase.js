import firebase from 'firebase/app';
import 'firebase/auth'
import 'firebase/firestore'
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyB2vf5HNARvFlwksFa9Lqbx75UzX7oeTqg",
    authDomain: "notewithme.firebaseapp.com",
    projectId: "notewithme",
    storageBucket: "notewithme.appspot.com",
    messagingSenderId: "898529765001",
    appId: "1:898529765001:web:6fc13271b1dccfc54ac858",
    measurementId: "G-Y5GYRNH7VN"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);
  const google = new firebase.auth.GoogleAuthProvider()
  const db = fb.firestore();


  export { fb, google, db } 
