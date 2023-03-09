import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase";

const userAuthContext = createContext();

export function UserAuthContextProvider({ children }) {
  const [user, setUser] = useState({});

  function logIn(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signUp(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function signinWithGoogle(){
    return signInWithPopup(auth, GoogleAuthProvider);
  }
  function logOut() {
    return signOut(auth);
  }
 

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setUser(currentuser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, logIn, signUp,signinWithGoogle, logOut}}
    >
      {children}
    </userAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(userAuthContext);
}
// import { createContext, useContext, useState, useEffect } from "react";
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
// } from "firebase/auth";
// import { getFirestore, collection, addDoc ,getDocs} from "firebase/firestore";
// import { getStorage, ref, uploadBytes,getDownloadURL } from "firebase/storage";

// const FirebaseContext = createContext(null);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DO_AMIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };

// export const useFirebase = () => useContext(FirebaseContext);

// const firebaseApp = initializeApp(firebaseConfig);
// const firebaseAuth = getAuth(firebaseApp);
// const firestore = getFirestore(firebaseApp);
// const storage = getStorage(firebaseApp);

// const googleProvider = new GoogleAuthProvider();

// export const FirebaseProvider = (props) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     onAuthStateChanged(firebaseAuth, (user) => {
//       if (user) setUser(user);
//       else setUser(null);
//     });
//   }, []);

//   const signupUserWithEmailAndPassword = (email, password) =>
//     createUserWithEmailAndPassword(firebaseAuth, email, password);

//   const signinUserWithEmailAndPassword = (email, password) =>
//     signInWithEmailAndPassword(firebaseAuth, email, password);

//   const signinWithGoogle = () => signInWithPopup(firebaseAuth, googleProvider);

//   const handleCreateNewListing = async (name, isbn, price, cover) => {
//     const imageRef = ref(storage, `uploads/images/${Date.now()}-${cover.name}`);
//     const uploadResult = await uploadBytes(imageRef, cover);
//     return await addDoc(collection(firestore, "books"), {
//       name,
//       isbn,
//       price,
//       imageURL: uploadResult.ref.fullPath,
//       userID: user.uid,
//       userEmail: user.email,
//       displayName: user.displayName,
//       photoURL: user.photoURL,
//     });
//   };

//     const listAllBook=async()=>{
//       return await getDocs(collection(firestore,"books"));
//     }

//     const getImageURL=(path)=>{
//       return getDownloadURL(ref(storage,path));
//     }

//       function logOut() {
//     return signOut(firebaseAuth);
//   }

//   const isLoggedIn = user ? true : false;

//   return (
//     <FirebaseContext.Provider
//       value={{
//         signinWithGoogle,
//         signupUserWithEmailAndPassword,
//         signinUserWithEmailAndPassword,
//         handleCreateNewListing,
//         listAllBook,
//         getImageURL,
//         logOut,
//         isLoggedIn,
//       }}
//     >
//       {props.children}
//     </FirebaseContext.Provider>
//   );
// };

  