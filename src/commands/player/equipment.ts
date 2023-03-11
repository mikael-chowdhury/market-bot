import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import config from "../../config";
import ItemHandler from "../../handlers/ItemHandler";
import { Armour, Item, IUser, Weapon } from "../../util/types";

// Check the user's equipment

export default {
  trigger: "equipment",
  aliases: ["eq"],
  execute: async (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      if (!args[0]) {
        message.reply(
          `__**${message.author.tag}'s Equipment:**__\n` +
            `Weapon - ${
              user.weapon ? user.weapon.name : "No Weapon Equipped"
            }\n` +
            `Armour - ${
              user.armour ? user.armour.name : "No Armour Equipped"
            }\n\n` +
            `Skill 1 - ${
              user.skill1 ? user.skill1.name : "No Skill Equipped"
            }\n` +
            `Skill 2 - ${
              user.skill2 ? user.skill2.name : "No Skill Equipped"
            }\n` +
            `Skill 3 - ${
              user.skill3 ? user.skill3.name : "No Skill Equipped"
            }\n\n` +
            `**${config.prefix}eq <item name>** to equip item`
        );
      } else {
        const itemName = args[0];

        const item = user.items.filter(
          (uitem) =>
            uitem.name.toLowerCase() == itemName.replace("_", " ").toLowerCase()
        )[0];

        if (item) {
          if (item.itemType == "armour") {
            if (user.armour) {
              user.items.push(user.armour as unknown as Item);
            }

            user.armour = item as unknown as Armour;
            user.items.splice(user.items.indexOf(item), 1);

            await user.save();

            message.reply("Successfully equipped " + user.armour.name);
          } else if (item.itemType == "weapon") {
            if (user.weapon) {
              user.items.push(user.weapon as unknown as Item);
            }

            user.weapon = item as unknown as Weapon;
            user.items.splice(user.items.indexOf(item), 1);

            await user.save();

            message.reply("Successfully equipped " + user.weapon.name);
          } else {
            return message.reply("This item cannot be equipped!");
          }
        } else return message.reply("Item doesn't exist or you don't own it!");
      }
    }
  },
};
