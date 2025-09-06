import admin from "firebase-admin";
import path from "path";
import { firebaseSecret } from "./config.js";

const secret = firebaseSecret || "";
const serviceAccount = JSON.parse(secret);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const auth = admin.auth();
