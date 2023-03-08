import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { IUser } from "../../util/types";

// Check the user's equipment

export default {
  trigger: "equipment",
  aliases: ["eq"],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      message.reply(
        `__**${message.author.tag}'s Equipment:**__\n` +
          `Weapon - ${user.weapon || "No Weapon Equipped"}\n` +
          `Armour - ${user.armour || "No Armour Equipped"}`
      );
    }
  },
};
