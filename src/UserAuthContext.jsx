import React from "react";
import { useEffect, useState, useContext, createContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "./firebase/config";

const useAuthContext = createContext();

export function useAuthContextProvider({ children }) {
  const [user, setuser] = useState({});

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }
  function googleSignIn() {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
      console.log("Auth", currentuser);
      setuser(currentuser);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <useAuthContext.Provider
      value={{ user, login, signup, logOut, googleSignIn }}
    >
      {children}
    </useAuthContext.Provider>
  );
}

export function useUserAuth() {
  return useContext(useAuthContext);
}
