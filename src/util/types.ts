import { Client, Message } from "discord.js";
import { HydratedDocument } from "mongoose";

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

export interface Command extends PreLoadCommand {
  category: string;
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

export interface DBItem extends Item {
  id: string;
}

export interface Item extends PreLoadItem {
  itemtype: string;
}

export interface PreLoadItem {
  name: string;
  rarity: number;
  metadata: ItemMetaData;
}

export interface Weapon extends PreLoadItem {
  bonusHealth: number;
  bonusMana: number;
}

export interface Armour extends PreLoadItem {
  bonusHealth: number;
  bonusMana: number;
}

export interface IUser {
  id: string;
  items: Item[];

  chests: Array<Number>;
  chestCapacity: number;

  health: number;
  maxHealth: number;
  mana: number;
  maxMana: number;
  armour: Armour;
  weapon: Weapon;
}

export interface LooseObject {
  [key: string]: any;
}
