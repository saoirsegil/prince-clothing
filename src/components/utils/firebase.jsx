
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
 } from "firebase/auth"
 import {
  getFirestore,
  doc,
  getDoc,
  setDoc
 } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7TcQ0r1O2HijKVA9GhndMH2lS4dGf7X8",
  authDomain: "prince-clothing-db.firebaseapp.com",
  projectId: "prince-clothing-db",
  storageBucket: "prince-clothing-db.appspot.com",
  messagingSenderId: "500654155253",
  appId: "1:500654155253:web:a9ece76ea25e578de62cbc"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    provider: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid)


  const userSnapshot = await getDoc(userDocRef)
  

if (!userSnapshot.exists()) {
  const {displayName, email} = userAuth
  const createdAt = new Date()


try {
await setDoc(userDocRef, {displayName, email, createdAt, ...additionalInformation})

} catch(error) {
console.log("error creating the user", error.message);
}
}

return userDocRef;
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password)
}


export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password)
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)

