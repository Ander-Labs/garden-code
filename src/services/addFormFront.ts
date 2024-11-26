

import {  collection, addDoc } from "firebase/firestore";
import { db } from "@/config/firebase/firebaseConfig";


export async function addFormFront(data: any) {

  try {
    const recommendationsRef = collection(db, "recommendations_front");
    const docRef = await addDoc(recommendationsRef, data);
    return docRef.id; // Retorna el ID del documento creado si necesitas usarlo
  } catch (error) {
    console.error("Error al guardar la recomendación:", error);
    throw new Error("No se pudo guardar la recomendación. Intenta nuevamente.");
  }
}
