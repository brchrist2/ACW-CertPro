import { getFirestore, getDoc, doc, updateDoc } from "firebase/firestore";
import { getFirebaseConfig } from "./firebaseConfig.js";

const firebaser = getFirebaseConfig();

class certQuery {
  async specific(certid) {
    const db = getFirestore(firebaser);
    const docRef = doc(
      db,
      "insureds/RYnifxrLtfkIu2i0SMvf/cert-holders",
      certid
    );
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data(),
      };
    } else {
      return null;
    }
  }

  async updateEntry(certid, updatedData) {
    const db = getFirestore(firebaser);
    const docRef = doc(
      db,
      "insureds/RYnifxrLtfkIu2i0SMvf/cert-holders",
      certid
    );
    await updateDoc(docRef, updatedData);
  }
}

export default new certQuery();
