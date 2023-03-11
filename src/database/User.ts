import mongoose from "mongoose";
import { Item, IUser, Armour } from "../util/types";

const UserSchema = new mongoose.Schema<IUser>({
  id: String,
  items: Array<Item>,

  chests: Array<Number>,
  chestCapacity: {
    type: Number,
    default: 5,
  },

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
  criticalChance: {
    type: Number,
    required: true,
    default: 15,
  },
  criticalMultiplier: {
    type: Number,
    required: true,
    default: 1.2,
  },

  physicalDamage: Number,
  magicalDamage: Number,
  spiritualDamage: Number,

  skill1: {
    type: Object,
    default: null,
  },
  skill2: {
    type: Object,
    default: null,
  },
  skill3: {
    type: Object,
    default: null,
  },
});

export default mongoose.model<IUser>("User", UserSchema);
