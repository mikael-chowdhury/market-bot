import { Client, Message, TextChannel } from "discord.js";
import { HydratedDocument } from "mongoose";
import { IUser, Weapon } from "../../util/types";

// Return the player's stats

export default {
  trigger: "stats",
  aliases: ["s"],
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => {
    if (message.channel instanceof TextChannel) {
      message.reply(
        `__**${message.author.tag}'s Stats:**__\n` +
          `chest-capacity: ${user.chests.length}/${user.chestCapacity}\n\n` +
          `health: ${user.health}/${user.maxHealth}\n` +
          `mana: ${user.mana}/${user.maxMana}\n\n` +
          `weapon: ${user.weapon ? user.weapon.name : "No Weapon Equipped"}\n` +
          `armour: ${
            user.armour ? user.armour.name : "No Armour Equipped"
          }\n\n` +
          `physical-damage: ${
            user.physicalDamage +
            (user.weapon ? user.weapon.metadata.physicalDamage : 0)
          }\n` +
          `magical-damage: ${
            user.magicalDamage +
            (user.weapon ? user.weapon.metadata.magicalDamage : 0)
          }\n` +
          `spiritual-damage: ${
            user.spiritualDamage +
            (user.weapon ? user.weapon.metadata.spiritualDamage : 0)
          }\n\n` +
          `critical-chance: ${
            user.criticalChance +
            (user.weapon ? (user.weapon as Weapon).criticalChance : 0)
          }\n` +
          `critical-multiplier: ${
            user.criticalMultiplier +
            (user.weapon ? (user.weapon as Weapon).criticalMultiplier : 0)
          }x`
      );
    }
  },
};
