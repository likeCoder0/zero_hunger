import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import { getDatabase } from "firebase/database";
// import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DO_AMIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

const app = initializeApp(firebaseConfig);
// export const database=getDatabase(app);
export const auth = getAuth(app);
export default app;
// firebase.initializeApp(firebaseConfig);
// var database = firebase.database();
//   export const auth=firebase.a();
// export default database;
  