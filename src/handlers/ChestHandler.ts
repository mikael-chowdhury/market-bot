import { Message } from "discord.js";
import { HydratedDocument } from "mongoose";
import { Rarity } from "../market/Rarities";
import { IUser } from "../util/types";
import ItemHandler from "./ItemHandler";

const giveUserChest = async (user: HydratedDocument<IUser>, chest: number) => {
  user.chests.push(chest);
  await user.save();
};

const openChest = async (
  user: HydratedDocument<IUser>,
  chest: number,
  message: Message
) => {
  const items = ItemHandler.rarityItems.get(chest as number);

  if (items) {
    const item = items[Math.floor(Math.random() * items.length)];
    await ItemHandler.giveUserItem(user, item);
    message.reply(
      "you unboxed a a **" +
        Rarity[item.rarity] +
        "** __**" +
        item.name.toUpperCase() +
        "!**__"
    );

    user.chests.splice(user.chests.indexOf(chest), 1);
    user.save();
  }
};

export default { giveUserChest, openChest };
