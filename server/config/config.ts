import "dotenv/config";

export const mongoConnectionString = process.env.MONGO_CONNECTION_STRING;
export const port = process.env.PORT;
export const recaptcha = process.env.RECAPTCHA_SECRET;
