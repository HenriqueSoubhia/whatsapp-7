import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA4__dfLFO12bobIKpPb9MExXXbBZDTgA",
  authDomain: "whatsapp-217bb.firebaseapp.com",
  projectId: "whatsapp-217bb",
  storageBucket: "whatsapp-217bb.appspot.com",
  messagingSenderId: "315103816029",
  appId: "1:315103816029:web:942cd469291a4cf49ee0b4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
