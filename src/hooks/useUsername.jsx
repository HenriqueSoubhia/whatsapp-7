import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
} from "firebase/firestore";

export const useUsername = ()=>{
    
}