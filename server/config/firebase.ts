import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";
import { readFileSync } from "fs";

// dont want cjs? use these
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// extra extra safe
const serviceAccountPath = path.resolve(__dirname, "serviceAccountKey.json");

const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, "utf8"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const auth = admin.auth();
