import { getFirestore, collection, onSnapshot, getDocs, addDoc, serverTimestamp } from 'firebase/firestore';
import { getFirebaseConfig } from './firebaseConfig.js';
const firebaseApp = getFirebaseConfig();
const fullboi = require('./output.js');

export async function fetchFirestoreData() {
  const db = getFirestore(firebaseApp);
  const querySnapshot = await getDocs(collection(db, 'insureds'));
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
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

export function creatOr(){
  fullboi.forEach(item => {
    const { coverages, ...data } = item; // Exclude 'coverages' property from data
    createShit(data);
  });

}
// -------- ******** CREATE DATA ******** -------- //

export async function createShit(data){
  const db = getFirestore(firebaseApp);
  data.created = serverTimestamp();
  const docData = data;  

const docRef = await addDoc(collection(db, "insureds"), docData);
/*
const defCollectionRef = collection(docRef, 'default-covgs');
const defaults = {
  "AUTO": {
    "Eff": "2023-01-01",
    "Exp": "2024-01-01",
    "LTR": "B",
    "Limit": {
      "BI1": 500000,
      "BI2": 1000000,
      "CSL": 1000000,
      "Other": {
        "AMT": 50000,
        "TXT": "Additional Limit"
      },
      "PD": 250000
    },
    "PolicyNum": "AUTO1234",
    "Vehicles": {
      "Any": false,
      "Hired": true,
      "NonOwn": true,
      "Owned": false,
      "Scheduled": true
    }
  },
  "GL": {
    "CHK": true,
    "ClaimOccur": {
      "0": "OCCURRENCE"
    },
    "Eff": "2023-01-01",
    "Exp": "2024-01-01",
    "LTR": "A",
    "Limit": {
      "EACH_OCC": 1000000,
      "GEN_AGG": 2000000,
      "MED_EXP": 100000,
      "Other": {
        "AMT": 50000,
        "TXT": "Additional Limit"
      },
      "PERADV_INJ": 250000,
      "PROP_COMP": 500000,
      "RENT_DMG": 100000
    },
    "OtherCovg1": {
      "CHK": true,
      "TXT": "Professional Liability"
    },
    "OtherCovg2": {
      "CHK": false,
      "TXT": ""
    },
    "PolProjLoc": "POLICY",
    "PolicyNum": "GL5678"
  },
  "Insurer": {
    "A": {
      "NAIC": 11111,
      "Name": "Insurer A"
    },
    "B": {
      "NAIC": 22222,
      "Name": "Insurer B"
    },
    "C": {
      "NAIC": 33333,
      "Name": "Insurer C"
    },
    "D": {
      "NAIC": 44444,
      "Name": "Insurer D"
    },
    "E": {
      "NAIC": 55555,
      "Name": "Insurer E"
    },
    "F": {
      "NAIC": 66666,
      "Name": "Insurer F"
    }
  },
  "UMBXS": {
    "ClaimOccur": true,
    "Eff": "2023-01-01",
    "Excess": false,
    "Exp": "2024-01-01",
    "LTR": "C",
    "Limit": {
      "Each": 5000000,
      "GenAggr": 10000000,
      "Other": {
        "AMT": 50000,
        "TXT": "Additional Limit"
      }
    },
    "PolicyNum": "UMBXS4321",
    "Umbrella": true
  },
  "WC": {
    "Eff": "2023-01-01",
    "ExecExcluded": "N",
    "Exp": "2024-01-01",
    "LTR": "D",
    "Limit": {
      "Accident": 500000,
      "Disease": 500000,
      "PolicyLim": 1000000
    },
    "PolicyNum": "WC9876"
  },
  "OTHERINS": {
    "Coverage": "Cargo Liability",
    "Eff": "2023-01-01",
    "Exp": "2024-01-01",
    "LTR": "E",
    "Limit": {
      "Amt": 5000000,
      "TXT": "Additional Limit"
    },
    "PolicyNum": "CARGO9876"
  },
}
const bhRef = await addDoc(defCollectionRef, defaults);
const chCollectionRef = collection(docRef, 'cert-holders');
const certs = {
  description: 5,
  holder: "Bitch",
  name: "Dumb bish juice insurance co.",
  WS: {
    "0": true,
    "1": false,
    "2": false,
    "3": true,
    "4": false
  },
  AI: {
    "0": true,
    "1": true,
    "2": true,
    "4": true
  }

}
const chRef = await addDoc(chCollectionRef, certs);
*/
};


// -------- ******** READ DATA ******** -------- //

export async function queryData() {
  const db = getFirestore(firebaseApp);

  // Query the "insureds" collection
  const insuredsCollectionRef = collection(db, 'insureds');
  const insuredsQuerySnapshot = await getDocs(insuredsCollectionRef);

  const queryPromises = insuredsQuerySnapshot.docs.map(async (insuredDoc) => {
    // Query the "cert-holders" sub-collection within a specific client document
    const certHoldersCollectionRef = collection(insuredDoc.ref, 'cert-holders');
    const certHoldersQuerySnapshot = await getDocs(certHoldersCollectionRef);

    certHoldersQuerySnapshot.forEach((certHolderDoc) => {
      console.log('Cert Holder:', certHolderDoc.id, certHolderDoc.data());
    });
  });

  await Promise.all(queryPromises);
}
