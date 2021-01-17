import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

export const firebaseConfig = {
  apiKey: "AIzaSyBAaDyyJyX85fwYwq-H-U08VLdG3gwdZUk",
  authDomain: "level-up-45bfa.firebaseapp.com",
  projectId: "level-up-45bfa",
  storageBucket: "level-up-45bfa.appspot.com",
  messagingSenderId: "836598185883",
  appId: "1:836598185883:web:e29cc3b214180f1d8d2b3e",
  measurementId: "G-L46QK6WMPV"
};

const fb = firebase.initializeApp(firebaseConfig);
export const db = fb.firestore();
export const auth = fb.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => {
  auth.signInWithPopup(provider);
};

export const signOutWithGoogle = () => {
  auth.signOut();
};

export const successGoogle = (login, setUser) => {
  auth.onAuthStateChanged((user) => {
    const checkUser = !!user
    setUser(checkUser)
    if (checkUser) login(user)
  })
}
