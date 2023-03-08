import { Client, Message } from "discord.js";
import fs from "fs";
import { HydratedDocument } from "mongoose";
import path from "path";
import config from "../config";
import { Command, IUser } from "../util/types";

// List of loaded commands
let loadedCommands: Command[] = [];

// Load all of the commands inside of the Commands folder
const loadCommands = () => {
  loadedCommands = [];

  // Loop through commands folder to get list of categories
  fs.readdirSync(path.join(__dirname, "..", "commands")).forEach((category) => {
    // Loop through list of categories to get each command
    fs.readdirSync(path.join(__dirname, "..", "commands", category)).forEach(
      (commandFile) => {
        // Dynamically import commands file
        import(
          path.join(__dirname, "..", "commands", category, commandFile)
        ).then((preLoadedCommand: any) => {
          // Casting magic to convert the PreLoadCommand into a Command
          const loadedCommand = {
            ...preLoadedCommand.default,
            category,
          } as Command;
          loadedCommands.push(loadedCommand); // Push the loaded command into list of loaded commands
        });
      }
    );
  });
};

// Handle all messages that start with command prefix specified in configuration
const handleCommands = (
  client: Client,
  message: Message,
  user: HydratedDocument<IUser>
) => {
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);

  // Loop through all loaded commands
  loadedCommands.forEach((loadedCommand) => {
    // Check if message relates to command
    if (
      args[0] == loadedCommand.trigger ||
      loadedCommand.aliases?.includes(args[0])
    ) {
      // Run command
      args.shift();
      loadedCommand.execute(client, message, args, user);
    }
  });
};

export default { loadCommands, handleCommands, loadedCommands };
