
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfJbiMlKudFUKTceuG6eLGy0zK9JzP5wQ",
  authDomain: "zero-hunger-8fabe.firebaseapp.com",
  projectId: "zero-hunger-8fabe",
  storageBucket: "zero-hunger-8fabe.appspot.com",
  messagingSenderId: "226272493683",
  appId: "1:226272493683:web:40b4cbbb67a0487c952a06"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;