/** @format */

import { useEffect, useState } from "react";

import {
  getAuth,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import firebaseAuthentication from "../Firebase/Firebase.init";

firebaseAuthentication();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const [admin, setAdmin] = useState(false);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    // signInWithPopup(auth, googleProvider);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    fetch(`https://vast-ravine-14464.herokuapp.com/users/${user.email}`)
      .then(res => res.json())
      .then(data => setAdmin(data.admin));
  }, [user.email]);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        setUser({});
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };
  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
  }, [auth]);

  const processLogin = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        setError("");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const createNewUser = (email, password, name, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        setError("");
        const newUser = { email, displayName: name };
        setUser(newUser);
        saveUser(email, name, "POST");
        //  send name to firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch(error => {});
        history.replace("/");
      })
      .catch(error => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // Save User
  const saveUser = (email, displayName, method) => {
    const user = { email, displayName };
    fetch("https://vast-ravine-14464.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    });
  };
  return {
    user,
    admin,
    error,
    logOut,
    signInWithGoogle,
    processLogin,
    createNewUser,
    isLoading,
    saveUser,
  };
};

export default useFirebase;
