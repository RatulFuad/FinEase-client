import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config"
export const AuthContext = createContext();
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  GoogleAuthProvider,signOut,
  signInWithPopup,
} from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)

    console.log(user)

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    };

    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    };

    const logOut = ()=> {
        return signOut(auth)
    }

    const signInWithGoogle = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    useEffect(()=>{
    const authentic=    onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
            setLoading(false)
        })
        return ()=>{
            authentic()
        }
    }, []);


    const authData = {
      user,
      setUser,
      createUser,
      logOut,
      signIn,
      signInWithGoogle,
      loading,
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;
