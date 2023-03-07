import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import ItemHandler from "../../handlers/ItemHandler";
import { Rarity } from "../../market/Rarities";
import { IUser } from "../../util/types";

// Get 1 random item daily

const rolls = new Map<string, Date>();

export default {
  trigger: "roll",
  aliases: [],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    const roll = () => {
      const item = ItemHandler.getRandomItem(); // Get random item
      // Write to user what item they got along with the items rarity
      message.reply(
        "you rolled a **" +
          Rarity[item.rarity] +
          "** __**" +
          item.name.toUpperCase() +
          "!**__"
      );
    };

    roll();

    // if (!rolls.has(message.author.id)) {
    //   rolls.set(message.author.id, new Date(Date.now()));
    //   roll();
    // } else {
    //   const now = Date.now();
    //   const diffMs = now - (rolls.get(message.author.id) as Date).getTime();
    //   const diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);
    //   if (diffMins >= 1440) {
    //     rolls.set(message.author.id, new Date(Date.now()));
    //     roll();
    //   } else {
    //     message.reply(
    //       "you have to wait " +
    //         (1440 - diffMins) / 60 +
    //         "hrs before you can roll again"
    //     );
    //   }
    // }
  },
};
