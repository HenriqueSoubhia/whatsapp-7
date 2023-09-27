import { useEffect, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { useInsertDocument } from "./useInsertDocument";

export const useAuthentication = () => {
  const auth = getAuth();

  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState(null);

  const { insertDocument } = useInsertDocument("users");

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

      await insertDocument({
        name: data.username,
        email: data.email,
        uid: user.uid,
      });

      return user;
    } catch (error) {
      let systemErrorMessage;

      if (error.message.includes("Password")) {
        systemErrorMessage = "A senha precisa conter pelo menos 6 caracteres.";
      } else if (error.message.includes("email-already")) {
        systemErrorMessage = "Email já cadastado.";
      } else {
        systemErrorMessage = "Ocorreu erro, por favor tente mais tarde";
      }

      setError(systemErrorMessage);
    }
  };

  const login = async (data) => {
    checkIsCancelled();

    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
    } catch (error) {
      let systemErrorMessage;

      console.log(error)

      if (error.message.includes("invalid-login-credentials")) {
        systemErrorMessage = "Usuario ou senha incorretas";
      } else {
        systemErrorMessage = "Ocorreu erro, por favor tente mais tarde";
      }

      setError(systemErrorMessage);
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
    error,
  };
};
