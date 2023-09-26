import { useEffect, useState } from "react";
import { db } from "../firebase/config";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

export const useAuthentication = () => {
  const auth = getAuth();

  const [cancelled, setCancelled] = useState(false);

  function checkIsCancelled() {
    if (cancelled) {
      return;
    }
  }

  const logout = () => {
    checkIsCancelled();

    signOut(auth);
  };

  const createUser = async (data) => {
    checkIsCancelled();

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(user, { name: data.name });

      await addDoc(collection(db, "users"), { name: data.name });

      return user;
    } catch (error) {
      console.log(error);
    }
  };

  const login = async (data) => {
    checkIsCancelled();

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      console.log(error);
    }
  };

  //boa pratica?
  useEffect(() => {
    return () => setCancelled(true);
  }, []);

  return {
    createUser,
    auth,
    login,
    logout,
  };
};
