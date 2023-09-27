import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";
import { useState } from "react";

export const useUpdateDocument = (docCollection) => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const updateDocument = async (document) => {
    setSuccess("");
    setLoading(true);

    try {
      await updateDoc(doc(db, docCollection, document.id), {
        ...document,
      });
      setLoading(false);
      setSuccess("O usuario foi atualizado com sucesso");
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return { updateDocument, success, error, loading };
};
