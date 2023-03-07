import { Client, Message, TextChannel } from "discord.js";
import colors from "colors";
import config from "../config";
import CommandHandler from "./CommandHandler";
import User from "../database/User";
import { HydratedDocument } from "mongoose";
import { IUser } from "../util/types";

const onMessage = async (client: Client, message: Message) => {
  if (message.author.bot) return;

  let user: HydratedDocument<IUser> | null = await User.findOne({
    id: message.author.id,
  });

  let absUser: HydratedDocument<IUser> =
    null as unknown as HydratedDocument<IUser>;

  if (user == null) {
    absUser = await User.create({
      id: message.author.id,
      items: [],
    });
  }

  if (message.channel instanceof TextChannel) {
    console.log(colors.yellow(message.author.tag + "  ->  " + message.content));

    // Check if message begins with prefix specified in configuration
    if (message.content.startsWith(config.prefix)) {
      // Handle the message using CommandHandler
      CommandHandler.handleCommands(client, message, absUser);
    }
  }
};

export default { onMessage };
