import { MongoClient, ServerApiVersion } from "mongodb";
import { mongoConnectionString } from "./config.js";

export const connect = mongoConnectionString || "";
export const client = new MongoClient(connect, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
