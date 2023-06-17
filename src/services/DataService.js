import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    addDoc,
    query,
    where,
    getDoc,
    orderBy,
    limit,
    onSnapshot,
    setDoc,
    updateDoc,
    doc,
    serverTimestamp,
    Firestore,
  } from 'firebase/firestore';
import { getFirebaseConfig } from '../firebase-config.js';

const firebaseAppConfig = getFirebaseConfig();
const firebaser = initializeApp(firebaseAppConfig);
const db = getFirestore(firebaser);
//const queryEr = query(collection(db, "insureds"), orderBy('name', 'asc'));

class TutorialDataService {
    getAll() {
        const docRef = doc(db, "insureds", "cwwyDDZaFzmeymHFlc3l");
        return docRef;
    }
  }
  
export default new TutorialDataService();