import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import User from "../../database/User";
import ItemHandler from "../../handlers/ItemHandler";
import { IUser } from "../../util/types";

// Give the user an item

export default {
  trigger: "giveitem",
  aliases: [],
  execute: async (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (
      message.channel instanceof TextChannel &&
      message.member?.roles.cache.has("1082779921849532446")
    ) {
      const mention = message.mentions.members?.first();

      const itemName = args[0];

      console.log(itemName);

      const item = ItemHandler.getItemByName(itemName.replace("_", " "));

      if (item) {
        if (mention) {
          const mentionUser = await User.findOne({ id: mention.id });
          if (mentionUser) {
            ItemHandler.giveUserItem(mentionUser, item);
            message.reply('successfully gave item: "' + item.name + '"');
          } else message.reply("Invalid recipient");
        } else {
          await ItemHandler.giveUserItem(user, item);
          message.reply('successfully gave item: "' + item.name + '"');
        }
      } else return message.reply("Invalid item!");
    }
  },
};
