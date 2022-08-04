import * as firebase from 'firebase/app'
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { getDatabase } from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDntJdWjCFGF9smJTjJQZiVDxogOGZeQVA",
  authDomain: "cars-c0e3b.firebaseapp.com",
  projectId: "cars-c0e3b",
  storageBucket: "cars-c0e3b.appspot.com",
  messagingSenderId: "385208749471",
  appId: "1:385208749471:web:8fd915a53be1c73ce481aa",
  measurementId: "G-XK1XJJ1Z5K"
};

const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export const database = getDatabase()

///////////////////////////////////// LOGIN WITH GOOGLE

export const handleLoginWithGoogle = () => signInWithPopup(auth, provider)

///////////////////////////////////////////////////


///////////////////////////////////// LOGIN


export const handleLoginWithEmail = async (useremail, userpassword) => {
  try {
    await signInWithEmailAndPassword(auth, useremail, userpassword)
  } catch {

  }
}
///////////////////////////////////////////////////


///////////////////////////////////// REGISTER
export const handleRegistWithEmail = async (useremail, userpassword, name) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, useremail, userpassword)
    updateProfile(res.user, {
      displayName: name,
    })
  } catch {
  }
}

///////////////////////////////////////////////////



/////////////////////////////////////// SIGN-OUT



export const handleSignOut = () => signOut(auth)
