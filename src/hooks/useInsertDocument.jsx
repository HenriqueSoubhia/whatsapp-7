import { db } from "../firebase/config";
import { Timestamp, addDoc, collection } from "firebase/firestore";

export const useInsertDocument = (docCollection) => {

  const insertDocument = async (document) => {
    try {
      const newDocument = { ...document, createAt: Timestamp.now() };

      const insertDocument = await addDoc(
        collection(db, docCollection),
        newDocument
      );
    } catch (error) {
      console.log(error);
    }
  };

  return { insertDocument };
};
