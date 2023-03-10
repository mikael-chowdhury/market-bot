import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { IUser } from "../../util/types";

// Duel another player

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
    }
  },
};
