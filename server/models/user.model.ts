import { Schema, model, InferSchemaType } from "mongoose";

const userSchema = new Schema(
  {
    uid: {
      type: String,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
  },
  { timestamps: true }
);

// infer type of schema
type UserType = InferSchemaType<typeof userSchema>;

export const User = model<UserType>("User", userSchema);
