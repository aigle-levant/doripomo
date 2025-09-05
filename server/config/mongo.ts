import dotenv from "dotenv";
dotenv.config({ path: "../.env" });
import { MongoClient, ServerApiVersion } from "mongodb";

// get env variables
const username = process.env.MONGO_USER;
const password = process.env.MONGO_PASSWORD;
if (!username || !password) {
  throw new Error("MONGO_USER or MONGO_PASSWORD is missing in .env");
}
export const connectionString = `mongodb+srv://${username}:${password}@doripomo.nfdu5jb.mongodb.net/?retryWrites=true&w=majority&appName=doripomo`;

export const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
