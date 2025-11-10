import React, { createContext, useEffect, useState } from 'react';
import app from "../firebase/firebase.config"
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const auth = getAuth(app)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

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

    useEffect(()=>{
    const authentic=    onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser)
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
    };
    return <AuthContext value={authData}>{children}</AuthContext>
};

export default AuthProvider;
