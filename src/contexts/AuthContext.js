import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

import React, { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import "../firebase/firebase";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  useEffect(() => {
    const unsubcrive = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubcrive;
  });

  // create a user
  const userSignup = (email, password, username, photourl) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // create a user by google
  const googleSignin = () => {
    return signInWithPopup(auth, provider);
  };

  // create a user by github
  const githubSignIn = () => {
    return signInWithPopup(auth, gitProvider);
  };

  // login user
  const userLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // user logOut
  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        toast.success("LogOut successful");
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
        toast.error("something wrong!!");
      });
  };

  const value = {
    currentUser,
    userSignup,
    googleSignin,
    githubSignIn,
    userLogin,
    logOut,
  };
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
