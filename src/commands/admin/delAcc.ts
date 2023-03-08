import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import User from "../../database/User";
import { IUser } from "../../util/types";

// Delete a user's account

export default {
  trigger: "delacc",
  aliases: [],
  execute: async (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      if (message.member?.roles.cache.has("1082779921849532446")) {
        const mention = message.mentions.members?.first();
        if (mention) {
          const user = await User.findOne({ id: mention.id });

          if (user) {
            await User.deleteOne({ id: mention.id });

            message.reply(`deleted <@${mention.id}>'s account`);
          }
        }
      }
    }
  },
};
