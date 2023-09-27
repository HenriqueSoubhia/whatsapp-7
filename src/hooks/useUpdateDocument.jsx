import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/config";

export const useUpdateDocument = (docCollection) => {
  const updateDocument = async (document) => {
    try {
      await updateDoc(doc(db, docCollection, document.id), {
        ...document,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { updateDocument };
};
