import { HydratedDocument } from "mongoose";
import { IUser, Skill } from "../../../util/types";

export default {
  name: "Slash",
  description: "a basic melee attack that deals moderate damage",
  onUse: (user: HydratedDocument<IUser>) => {
    console.log("Used Slash");
  },
} as Skill;
