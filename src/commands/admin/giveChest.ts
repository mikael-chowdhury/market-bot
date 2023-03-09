import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import User from "../../database/User";
import ChestHandler from "../../handlers/ChestHandler";
import ItemHandler from "../../handlers/ItemHandler";
import { Chests } from "../../market/Chests";
import { IUser } from "../../util/types";

// Give a chest to a user

export default {
  trigger: "givechest",
  aliases: ["gc"],
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
      const name = args[0] as keyof typeof Chests;

      const chest = Chests[name];

      if (chest) {
        const mention = message.mentions.members?.first();
        if (mention) {
          const mentionUser = await User.findOne({ id: mention.id });
          if (mentionUser) {
            if (mentionUser.chests.length < mentionUser.chestCapacity) {
              await ChestHandler.giveUserChest(mentionUser, chest);
              message.reply('successfully gave "' + name + '"');
            } else return message.reply("Player has met their chest capacity!");
          } else return message.reply("Invalid recipient");
        } else {
          if (user.chests.length < user.chestCapacity) {
            await ChestHandler.giveUserChest(user, chest);
            message.reply('successfully gave "' + name + '"');
          } else
            return message.reply("you have already met your chest capacity");
        }
      } else return message.reply("Invalid chest name!");
    }
  },
};
