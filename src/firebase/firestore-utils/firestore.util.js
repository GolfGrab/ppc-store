import { getFirestore } from "firebase/firestore";
import { FIREBASE_APP } from "../firebase.util";

export const  Firebase_Firestore= getFirestore(FIREBASE_APP)
