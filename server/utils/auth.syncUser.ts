import { User } from "../models/user.model";

export async function syncUser(user: {
  uid: string;
  email: string;
  name?: string;
}) {
  let isExistingUser = await User.findOne({ uid: user.uid });
  // user doesn't exist
  if (!isExistingUser) {
    isExistingUser = await User.create({
      uid: user.uid,
      email: user.email,
      name: user.name,
    });
  }
  return isExistingUser;
}
