import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../utils/firebase/firebase.config";

// Firebase auth
const auth = getAuth(app);
// Create context API
export const AuthContext = createContext(null);

const AuthProviders = ({ children }) => {
  // State
  const [user, setUser] = useState(null);
  const [fullLoading, setFullLoading] = useState(true);
  const [loading, setLoading] = useState(true);

  // Registration
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Profile Update
  const profileUpdate = (updateName, updatePhoto) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: updateName,
      photoURL: updatePhoto,
    });
  };

  // Login
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Login with google
  const googleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleProvider);
  };

  // Password reset
  const passwordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  // Logout
  const logout = () => {
    return signOut(auth);
  };

  // State observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
      setFullLoading(false);

      return () => {
        return unsubscribe();
      };
    });
  }, []);

  // Data sent as context API
  const authInfo = {
    loading,
    setLoading,
    setFullLoading,
    fullLoading,
    user,
    createUser,
    profileUpdate,
    loginUser,
    googleSignIn,
    passwordReset,
    logout,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
