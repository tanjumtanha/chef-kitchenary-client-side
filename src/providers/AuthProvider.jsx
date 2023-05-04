import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signInUser = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth,googleProvider);
    }

    const githubSignIn = () =>{
        return signInWithPopup(auth,githubProvider);
    }

    const signOutUser = () =>{
        return signOut(auth);
    }

    const updateUserData = (user,name,photo) =>{
        return updateProfile(user, {
            displayName:name,
            photoURL:photo
        })
        
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser =>{
            console.log("logged in user inside auth state");
            setUser(loggedUser)
        })
        return () =>{
            unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        createUser,
        signInUser,
        googleSignIn,
        signOutUser,
        githubSignIn,
        updateUserData,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;