import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { IUser } from "../../util/types";

// Check the status of the discord bot

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
      message.channel.send("I am online! 😁");
    }
  },
};
