import mongoose from "mongoose";
import { Item, IUser } from "../util/types";

const UserSchema = new mongoose.Schema<IUser>({
  id: String,
  items: Array<Item>,
});

export default mongoose.model<IUser>("User", UserSchema);
