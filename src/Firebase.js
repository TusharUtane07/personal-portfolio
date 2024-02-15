import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyDCj-VbtXT-E-CggmUtyw_aqd7BP67E8cs",
	authDomain: "portfolio-43f38.firebaseapp.com",
	projectId: "portfolio-43f38",
	storageBucket: "portfolio-43f38.appspot.com",
	messagingSenderId: "1091161865301",
	appId: "1:1091161865301:web:66caf9591f73dac78ea8dc",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
