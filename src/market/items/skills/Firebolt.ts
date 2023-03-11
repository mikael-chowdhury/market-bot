import { HydratedDocument } from "mongoose";
import { IUser, Skill } from "../../../util/types";

export default {
  name: "Firebolt",
  description: "A basic spell that deals low damage with a low mana cost",
  onUse: (user: HydratedDocument<IUser>) => {
    console.log("Used Firebolt");
  },
} as Skill;
