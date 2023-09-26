import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

export const useFecthDocument = (docCollection) => {
  const [documents, setDocuments] = useState(null);

  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    async function loadData() {
      if (cancelled) return;

      const collectionRef = collection(db, docCollection);

      try {
        let q;

        q = query(collectionRef,orderBy("createAt","asc"));

        onSnapshot(q, (querySnapshot) => {
          setDocuments(
            querySnapshot.docs.map((doc) => ({
              id: doc.id,
              ...doc.data(),
            }))
          );
        });

      } catch (error) {
        console.log(error);
      }
    }
    loadData();
  }, [docCollection, cancelled]);

  useEffect(() => {
    return () => {
      setCancelled(true);
    };
  }, []);

  return { documents };
};
