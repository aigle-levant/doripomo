import admin from "firebase-admin";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

admin.initializeApp({
  credential: admin.credential.cert(
    path.resolve(__dirname, "serviceAccountKey.json")
  ),
});

export const auth = admin.auth();
