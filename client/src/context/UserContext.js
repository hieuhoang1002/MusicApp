import React, { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
} from "firebase/auth";
import { firebaseAuth } from "../config/firebase";
export const UserContext = createContext({});

export const useUserContext = () => {
  return useContext(UserContext);
};

export const UserContextProvider = ({ children }) => {
  const [createUser, setCreateuser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(firebaseAuth, (res) => {
      if (res) {
        setCreateuser(res);
      } else {
        setCreateuser(null);
      }
      setError("Đăng nhập thành công!");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const registerUser = (email, name, password) => {
    setLoading(true);
    createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        updateProfile(firebaseAuth.currentUser, {
          displayName: name,
        });
      })
      .then((res) => console.log(res))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  const signInUser = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(firebaseAuth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError("Email - Password không hợp lệ!"))
      .finally(() => setLoading(false));
  };

  const logoutUser = () => {
    signOut(firebaseAuth);
  };

  const forgotPassword = (email) => {
    return sendPasswordResetEmail(firebaseAuth, email);
  };

  const contextValue = {
    createUser,
    loading,
    error,
    registerUser,
    signInUser,
    logoutUser,
    forgotPassword,
  };
  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
