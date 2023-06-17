import { getFirestore, collection, onSnapshot, getDocs } from 'firebase/firestore';
import { getFirebaseConfig } from './firebaseConfig.js';
const firebaseApp = getFirebaseConfig();

export async function fetchFirestoreData() {
  const db = getFirestore(firebaseApp);
  const querySnapshot = await getDocs(collection(db, 'insureds'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}

export function subscribeToFirestoreUpdates(callback) {
    const db = getFirestore(firebaseApp);
    const query = collection(db, 'insureds');
    
    onSnapshot(query, (snapshot) => {
      const updatedData = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(updatedData);
    });
  }