import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC5-fWI3FzldAgandidCa0G8ZdqeoPy2KY",
  authDomain: "personal-portfolio-6909b.firebaseapp.com",
  projectId: "personal-portfolio-6909b",
  storageBucket: "personal-portfolio-6909b.appspot.com",
  messagingSenderId: "1055985993665",
  appId: "1:1055985993665:web:5cbcb9cdc2d6c003259140",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
