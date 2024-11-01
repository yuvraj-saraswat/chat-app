import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chatapp-dbc10.firebaseapp.com",
  projectId: "chatapp-dbc10",
  storageBucket: "chatapp-dbc10.appspot.com",
  messagingSenderId: "887205994688",
  appId: "1:887205994688:web:4c795749b86c36ffa70d25"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();