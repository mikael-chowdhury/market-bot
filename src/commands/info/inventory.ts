import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { Rarity } from "../../market/Rarities";
import { IUser } from "../../util/types";
import ItemHandler from "../../handlers/ItemHandler";

// Responds with the user's inventory

export default {
  trigger: "inventory",
  aliases: ["i"],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      const names = ItemHandler.countOccurrences(
        user.items
          .sort((a, b) => b.rarity - a.rarity)
          .map((item) => `${Rarity[item.rarity]} ${item.name}`)
      );

      message.channel.send(
        `__**${message.author.tag}'s Inventory:**__\n` + names.join("\n")
      );
    }
  },
};
