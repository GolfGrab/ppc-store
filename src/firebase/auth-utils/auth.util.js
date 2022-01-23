import { getAuth} from "firebase/auth";
import { FIREBASE_APP } from "../firebase.util";


export const Firebase_Auth = getAuth(FIREBASE_APP);
