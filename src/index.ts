import discord from "discord.js";
import { GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import colors from "colors";

import Database from "./database/database";

import MessageHandler from "./handlers/MessageHandler";
import CommandHandler from "./handlers/CommandHandler";
import ItemHandler from "./handlers/ItemHandler";

dotenv.config();

// Load all of the commands using command handler
CommandHandler.loadCommands();
ItemHandler.loadItems();

const client: discord.Client = new discord.Client({
  intents: [
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.Guilds,
  ],
});

// Bot login event
client.on("ready", () => {
  console.log(colors.red(`logged in as ${client.user!.tag}`));

  client.user?.setPresence({
    status: "online",
    activities: [
      {
        type: discord.ActivityType.Competing,
        name: "The Market",
        url: "https://discord.js.org/#/",
      },
    ],
  });
});

// User message create event
client.on("messageCreate", (message) =>
  MessageHandler.onMessage(client, message)
);

// Connect to mongodb
Database.connect().then(() => {
  client.login(
    Buffer.from(process.env.TOKEN as string, "base64").toString("ascii")
  );
});
