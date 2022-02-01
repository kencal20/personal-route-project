import { createContext, useEffect, useState, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase/config";


const UserAuthContext = createContext();

export function UserauthcontextProvider({ children }) {
  const [user, setUser] = useState({});

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth, email, password);
  }
  function logOut() {
    return signOut(auth);
  }

  useEffect(() => {
    const unsbscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unsbscribe();
    };
  }, []);

  return (
    <UserauthcontextProvider value={{ user, login, signup, logOut }}>
      {children}
    </UserauthcontextProvider>
  );
}

export function useUserAuth() {
  return useContext(UserAuthContext);
}
