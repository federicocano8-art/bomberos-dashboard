import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

export const COLLECTIONS = {
  vehicles: "vehicles",
  equipment: "equipment",
  eras: "eras",
  checklists: "checklists",
  checklistResults: "checklistResults",
  maintenanceLogs: "maintenanceLogs",
  alerts: "alerts",
};

export async function getCollectionData(collectionName) {
  if (!db) return [];
  const ref = collection(db, collectionName);
  const snapshot = await getDocs(ref);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
