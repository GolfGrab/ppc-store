import {initializeApp}  from 'firebase/app';
// import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDtH4JN1As_eQRlXcLajqGdfl58GttpTYc",
  authDomain: "pretty-pet-clothing-store.firebaseapp.com",
  projectId: "pretty-pet-clothing-store",
  storageBucket: "pretty-pet-clothing-store.appspot.com",
  messagingSenderId: "230216581451",
  appId: "1:230216581451:web:562a3b2e9114a8f41428ce",
  measurementId: "G-FGVB8QMB4P"
}

export const FIREBASE_APP = initializeApp(firebaseConfig)


// export const auth = getAuth(FIREBASE_APP);
// const provider = new GoogleAuthProvider();
// export const signInWithGoogle = () =>{signInWithPopup(auth, provider)
//   .then((result) => {
//     // This gives you a Google Access Token. You can use it to access the Google API.
//     const credential = GoogleAuthProvider.credentialFromResult(result);
//     const token = credential.accessToken;
//     // The signed-in user info.
//     const user = result.user;
//     // ...
//   }).catch((error) => {
//     // Handle Errors here.
//     const errorCode = error.code;
//     const errorMessage = error.message;
//     // The email of the user's account used.
//     const email = error.email;
//     // The AuthCredential type that was used.
//     const credential = GoogleAuthProvider.credentialFromError(error);
//     // ...
//     console.log(errorCode,errorMessage,email,credential)
//   });}