import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCUg6fK0bSt40cya5UKjgJt82kopQPLdqY",
    authDomain: "react-auth-f20f2.firebaseapp.com",
    projectId: "react-auth-f20f2",
    storageBucket: "react-auth-f20f2.appspot.com",
    messagingSenderId: "982703667742",
    appId: "1:982703667742:web:a56f1087686ae724104c0f"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}