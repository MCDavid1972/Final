import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyC2XLnawbaCOK9nypeozBNZ0WkSkvQdNSo",
  authDomain: "ecomerce-gunguitos.firebaseapp.com",
  projectId: "ecomerce-gunguitos",
  storageBucket: "ecomerce-gunguitos.appspot.com",
  messagingSenderId: "74455660794",
  appId: "1:74455660794:web:110246d9b7f2d082897143"
};


const app = initializeApp(firebaseConfig);
 export const db =getFirestore(app)