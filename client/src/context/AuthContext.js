import React, { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import firebase from "firebase";
import axios from 'axios'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'

const AuthContext = React.createContext();


var uiConfig = {
  signInFlow : 'popup',
  signInOptions : [
    firebase.auth.EmailAuthProvider.PROVIDER_ID
  ]
}
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  function signup(email, password) {
    axios.post('http://localhost:4000/register', {email:email})
    return <dib>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth()}></StyledFirebaseAuth>
    </dib>
    // return auth.createUserWithEmailAndPassword(email, password);
  }
  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  useEffect(() => {
    const unsubscribed = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
    return unsubscribed
  }, []);

  const value = {
    currentUser,
    signup,
    login
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
