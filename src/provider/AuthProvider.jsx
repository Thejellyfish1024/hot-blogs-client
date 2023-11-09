/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import { createContext, useState } from "react";
import { useEffect } from "react";
import app from "../config/firebase.config";
import axios from "axios";

export const AuthContext = createContext(null);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [displayName, setDisplayName] = useState(null);
    const [photoURL, setPhotoURL] = useState(null);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    const googleSignIn = () => {
        return signInWithPopup(auth, provider)
    }

    const handleUpdateProfile = (name, Url) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: Url
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            // console.log('current user stat: ', currentUser);
            // setLoading(false)
            // setUser(currentUser)

            const userEmail = currentUser?.email || user?.email;
            const loggedUser = {email : userEmail}
            console.log('logged user : ',loggedUser);
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoading(false)

            if(currentUser){
                axios.post('https://hot-blogs-server.vercel.app/jwt',loggedUser,{withCredentials:true})
                .then(res =>{
                    console.log('token response', res.data);
                })
            }
            else {
                axios.post('https://hot-blogs-server.vercel.app/logout',user,{withCredentials:true})
                .then(res =>{
                    console.log(res.data);
                })
            }

        })
        return () => unSubscribe();
    }, [user])

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut,
        setPhotoURL,
        photoURL,
        googleSignIn,
        handleUpdateProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;