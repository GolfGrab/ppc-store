
import { doc, getDoc, setDoc } from 'firebase/firestore';


export const creatUserProfileDocument = async (userAuth, Firebase_Firestore, additionalData) => {
  if (!userAuth) {
    console.log('\nuser did not Log In')
    return
  }
  try {
    const userRef = doc(Firebase_Firestore, `users/${userAuth.uid}`)
    const snapShot = await getDoc(userRef)
    // console.log("useRef =  ",userRef)
    // console.log("snapshot =   " ,snapShot)
    if (!snapShot.exists()) {
      const { displayName, email } = userAuth
      const timeCreate = new Date()
      console.log('preparing to add new user !')
      await setDoc(userRef, {
        displayName,
        email,
        timeCreate,
        ...additionalData
      })
      console.log('new user created!')
      return userRef
    }
    console.log('old user welcome back!')
    return userRef
  } catch (e) {
    console.error("Error creating user : ", e)
  }
}