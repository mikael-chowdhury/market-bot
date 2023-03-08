import mongoose from "mongoose";
import { Item, IUser, Armour } from "../util/types";

const UserSchema = new mongoose.Schema<IUser>({
  id: String,
  items: Array<Item>,
  chests: Array<Number>,
  armour: {
    type: Object,
    default: null,
  },
  weapon: {
    type: Object,
    default: null,
  },
  health: {
    type: Number,
    required: true,
    default: 100,
  },
  maxHealth: {
    type: Number,
    required: true,
    default: 100,
  },
  mana: {
    type: Number,
    required: true,
    default: 100,
  },
  maxMana: {
    type: Number,
    required: true,
    default: 100,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
