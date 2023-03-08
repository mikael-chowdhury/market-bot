import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { Chests } from "../../market/Chests";
import { IUser } from "../../util/types";

// Open a Chest

export default {
  trigger: "status",
  aliases: [],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      if (user.chests.length > 0) {
        message.reply(
          "here is a list of chests you own:\n" +
            user.chests.map((chest) => Chests[chest as number])
        );
      } else message.reply("you don't have any chests!");
    }
  },
};
