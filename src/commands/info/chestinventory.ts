import { Chests } from "./../../market/Chests";
import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { Rarity } from "../../market/Rarities";
import { IUser } from "../../util/types";
import ItemHandler from "../../handlers/ItemHandler";

// Responds with the user's chest inventory

export default {
  trigger: "chestinventory",
  aliases: ["ci"],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      const names = ItemHandler.countOccurrences(
        user.chests
          .sort((a, b) => (b as number) - (a as number))
          .map((chest) => ` ${Chests[chest as number]}`)
      );

      message.channel.send(
        `__**${message.author.tag}'s Chest Inventory:**__\n` +
          names.join("\n") +
          `\n\nChest Capacity: ${user.chests.length}/${user.chestCapacity}`
      );
    }
  },
};
