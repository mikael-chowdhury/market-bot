import { Client, Message } from "discord.js";
import { HydratedDocument } from "mongoose";

export interface Command {
  trigger: string;
  aliases?: string[];
  category: string;
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => void;
}

export interface PreLoadCommand {
  trigger: string;
  aliases?: string[];
  execute: (
    client: Client,
    message: Message,
    args: string[],
    user: HydratedDocument<IUser>
  ) => void;
}

export interface Enchantment {
  modifier: string;
  multiplier: number;
}

export interface ItemMetaData {
  durability: number;
  unbreakable: boolean;
  enchantments: Enchantment[];
  physicalDamage: number;
  magicalDamage: number;
  spiritualDamage: number;
}

export interface DBItem {
  name: string;
  id: string;
  rarity: number;
  itemtype: string;
  metadata: ItemMetaData;
}

export interface Item {
  name: string;
  rarity: number;
  itemtype: string;
  metadata: ItemMetaData;
}

export interface PreloadItem {
  name: string;
  rarity: number;
  metadata: ItemMetaData;
}

export interface IUser {
  id: string;
  items: Item[];
}
