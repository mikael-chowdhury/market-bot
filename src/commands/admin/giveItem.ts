import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import ItemHandler from "../../handlers/ItemHandler";
import { IUser } from "../../util/types";

// Give the user an item

export default {
  trigger: "giveitem",
  aliases: [],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      const itemName = args[0];

      console.log(itemName);

      const item = ItemHandler.getItemByName(itemName);

      console.log(item);
    }
  },
};
