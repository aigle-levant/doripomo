import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// env variables
const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const authDomain = import.meta.env.FIREBASE_AUTH_DOMAIN;
const projectId = import.meta.env.FIREBASE_PROJECT_ID;
const bucket = import.meta.env.FIREBASE_STORAGE_BUCKET;
const senderId = import.meta.env.FIREBASE_SENDER_ID;
const appId = import.meta.env.FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: authDomain,
  projectId: projectId,
  storageBucket: bucket,
  messagingSenderId: senderId,
  appId: appId,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
