import {
  Client,
  Message,
  PermissionOverwrites,
  PermissionsBitField,
  TextChannel,
} from "discord.js";
import colors from "colors";
import config from "../config";
import CommandHandler from "./CommandHandler";
import User from "../database/User";
import { HydratedDocument } from "mongoose";
import { CLASSES, IUser } from "../util/types";
import ClassHandler from "./ClassHandler";

const onMessage = async (client: Client, message: Message) => {
  if (message.author.bot) return;

  let user: HydratedDocument<IUser> | null = await User.findOne({
    id: message.author.id,
  });

  let absUser: HydratedDocument<IUser> =
    null as unknown as HydratedDocument<IUser>;

  if (user == null) {
    if (
      !message.guild?.channels.cache
        .map((c) => c.name)
        .includes(`${message.author.id}-class-selection`)
    ) {
      const channel = await message.guild?.channels.create({
        name: `${message.author.id}-class-selection`,
        parent: "1084079431171198987",
        permissionOverwrites: [
          {
            id: message.guild.roles.everyone,
            deny: [PermissionsBitField.Flags.ViewChannel],
          },
          {
            id: message.author.id,
            allow: [
              PermissionsBitField.Flags.ViewChannel,
              PermissionsBitField.Flags.SendMessages,
              PermissionsBitField.Flags.ReadMessageHistory,
            ],
          },
        ],
      });

      const msg = await channel?.send(
        `\nSelect a class from the following to begin the game:\n
  <:warrior:1084085921244262400>  ${ClassHandler.buildDescription(
    CLASSES.WARRIOR
  )}\n\n<:mage:1084084657122979840>  ${ClassHandler.buildDescription(
          CLASSES.MAGE
        )}\n\n<:rogue:1084084582120431657>  ${ClassHandler.buildDescription(
          CLASSES.ROGUE
        )}\n\n__**REACT WITH THE CORRESPONDING EMOJI\n\nYOUR SELECTION IS FINAL AND CANNOT BE CHANGED**__`
      );

      await msg?.react("<:warrior:1084085921244262400>");
      await msg?.react("<:mage:1084084657122979840>");
      await msg?.react("<:rogue:1084084582120431657>");

      const invMessage = await message.member?.send(
        `select your class in: <#${channel?.id}>`
      );

      const collected = await msg?.awaitReactions({
        max: 1,
        maxEmojis: 1,
        maxUsers: 1,
        filter: (m, u) => u.id == message.author.id,
      });

      const reaction = collected?.first();

      let class_;

      if (reaction?.emoji.name == "warrior") {
        class_ = CLASSES.WARRIOR;

        await message.member?.roles.add("1084096220349337680");
        await channel?.send(
          `-----\nYou strap on your iron-clad armor, feeling invincible and ready for battle. Head over to <#1084096106704670781> to learn how to best use your melee skills in combat!`
        );
      } else if (reaction?.emoji.name == "mage") {
        class_ = CLASSES.MAGE;

        await message.member?.roles.add("1084096513078214756");
        await channel?.send(
          `-----\nYou feel the arcane energies surge within you as you don your robes, ready to unleash powerful spells upon your enemies. Check out <#1084097419018502164> to learn how to master the art of magic!`
        );
      } else if (reaction?.emoji.name == "rogue") {
        class_ = CLASSES.ROGUE;

        await message.member?.roles.add("1084096565670592522");
        await channel?.send(
          `-----\nYou slip on your dark leather armor and check your blades, confident in your ability to slip past any obstacle and strike from the shadows. Join <#1084097487511498882> to learn how to effectively use your stealth and subterfuge in combat!`
        );
      }

      if (class_) {
        absUser = await User.create({
          id: message.author.id,
          items: [],
          chests: [],
          chestCapacity: 5,

          armour: null,
          weapon: null,

          health: class_.health,
          maxHealth: class_.health,
          mana: class_.mana,
          maxMana: class_.mana,

          physicalDamage: class_.physicalDamage,
          magicalDamage: class_.magicalDamage,
          spiritualDamage: class_.spiritualDamage,

          skill1: class_.defaultSkill,
          skill2: null,
          skill3: null,
        });
      }

      setTimeout(async () => {
        if (channel) await channel?.delete();

        if (invMessage) await invMessage.delete();
      }, 60000);
    } else {
      message.member?.send(
        `select your class in: <#${
          message.guild.channels.cache.find(
            (c) => c.name == `${message.author.id}-class-selection`
          )?.id
        }>`
      );
    }
  } else {
    absUser = user;
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
