/**
 * To find your Firebase config object:
 *
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */

import { initializeApp } from "firebase/app";

const config = {
  apiKey: "AIzaSyBLd4XxvJzzQP1IG8gFwNKZapTOeTLPerQ",
  authDomain: "acw-certpro.firebaseapp.com",
  projectId: "acw-certpro",
  storageBucket: "acw-certpro.appspot.com",
  messagingSenderId: "605100166369",
  appId: "1:605100166369:web:054e6ff1814ed497b8bba0",
  measurementId: "G-MQPR1GT760",
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error(
      "No Firebase configuration object provided." +
        "\n" +
        "Add your web app's configuration object to firebase-config.js"
    );
  } else {
    const firebaseApp = initializeApp(config);
    return firebaseApp;
  }
}
