import { MongoClient, ServerApiVersion } from "mongodb";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });
// get env variables
const username = encodeURIComponent(process.env.MONGO_USER || "");
const password = encodeURIComponent(process.env.MONGO_PASSWORD || "");
export const connectionString = `mongodb+srv://${username}:${password}@doripomo.nfdu5jb.mongodb.net/?retryWrites=true&w=majority&appName=doripomo`;

export const client = new MongoClient(connectionString, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
