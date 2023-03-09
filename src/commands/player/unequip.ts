import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { Armour, Item, IUser } from "../../util/types";

// Unequip a user's item

export default {
  trigger: "unequip",
  aliases: ["uneq"],
  execute: async (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      const type = args[0];

      if (type) {
        if (type == "armour") {
          if (user.armour) {
            user.items.push(user.armour as unknown as Item);
            user.armour = null as unknown as Armour;
            await user.save();
            message.reply("Successfully unequipped armour");
          } else return message.reply("You don't have any armour equipped!");
        } else if (type == "weapon") {
          if (user.weapon) {
            user.items.push(user.weapon as unknown as Item);
            user.weapon = null as unknown as Armour;
            await user.save();
            message.reply("Successfully unequipped weapon");
          } else return message.reply("You don't have a weapon equipped!");
        } else return message.reply("Invalid item-type");
      } else
        return message.reply(
          "please specify what item-type you want to unequip"
        );
    }
  },
};
