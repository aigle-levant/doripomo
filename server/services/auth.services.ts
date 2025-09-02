import { User } from "../models/user.model.js";

export async function handleSignup(uid: string, email: string, name: string) {
  let user = await User.findOne({ uid });
  //   if user not found, create a user
  if (!user) {
    User.create({ uid, email, name });
  }
  return user;
}
