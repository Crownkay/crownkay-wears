import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAIETvRHI53e59QagIcoL6TJRsKOPDQpdU",
  authDomain: "food-app-b51d1.firebaseapp.com",
  projectId: "food-app-b51d1",
  storageBucket: "food-app-b51d1.appspot.com",
  messagingSenderId: "1057171230817",
  appId: "1:1057171230817:web:54fd310920dc470cf49a20",
};
const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
