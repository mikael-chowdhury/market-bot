import { Rarity } from "./../../market/Rarities";
import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import ItemHandler from "../../handlers/ItemHandler";
import { Chests } from "../../market/Chests";
import { IUser } from "../../util/types";
import ChestHandler from "../../handlers/ChestHandler";

// Open a Chest

export default {
  trigger: "openchest",
  aliases: ["oc"],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      if (user.chests.length > 0) {
        const sorted = user.chests.sort(
          (a, b) => (b as number) - (a as number)
        );

        const qLoop = () => {
          message.reply(
            "here is a list of chests you own:\n" +
              sorted
                .map(
                  (chest, index) => `${index + 1}) ${Chests[chest as number]}`
                )
                .join("\n") +
              "\n\nType the number corresponding to the chest you want to open"
          );

          const collector = (
            message.channel as TextChannel
          ).createMessageCollector({
            filter: (m: Message) => m.author.id == message.author.id,
            max: 1,
          });

          collector.on("collect", async (msg) => {
            if (!isNaN(parseInt(msg.content.trim()))) {
              const chest = sorted[parseInt(msg.content.trim()) - 1];

              if (chest) {
                // Open the chest
                ChestHandler.openChest(user, chest as number, message);
              } else {
                message.reply("Invalid chest number");
                qLoop();
              }
            } else {
              message.reply("Invalid response");
              qLoop();
            }
          });
        };

        qLoop();
      } else message.reply("you don't have any chests!");
    }
  },
};
