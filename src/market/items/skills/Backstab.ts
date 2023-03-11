import { HydratedDocument } from "mongoose";
import { IUser, Skill } from "../../../util/types";

export default {
  name: "Backstab",
  description:
    "A melee attack that deals moderate damage and has a high chance of critical hit.",
  onUse: (user: HydratedDocument<IUser>) => {
    console.log("Used Backstab");
  },
} as Skill;
