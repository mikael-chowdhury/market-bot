import { Client, Message } from "discord.js";
import { HydratedDocument } from "mongoose";
import Slash from "../market/items/skills/Slash";

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
  itemType: string;
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

export interface DBSkill {
  name: string;
  description: string;
}

export interface Skill extends DBSkill {
  onUse: (user: HydratedDocument<IUser>) => void;
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

  skill1: DBSkill | null;
  skill2: DBSkill | null;
  skill3: DBSkill | null;
}

export interface LooseObject {
  [key: string]: any;
}

export class CLASSES {
  static WARRIOR = new CLASSES(
    "Warrior",
    "Master of melee combat with high strength and toughness",
    125,
    75,
    25,
    0,
    0,
    Slash
  );

  public name: string;
  public description: string;

  public physicalDamage: number;
  public magicalDamage: number;
  public spiritualDamage: number;

  public health: number;
  public mana: number;

  public defaultSkill: Skill;

  constructor(
    name: string,
    description: string,
    health: number,
    mana: number,
    physicalDamage: number,
    magicalDamage: number,
    spiritualDamage: number,
    defaultSkill: Skill
  ) {
    this.name = name;
    this.description = description;

    this.physicalDamage = physicalDamage;
    this.magicalDamage = magicalDamage;
    this.spiritualDamage = spiritualDamage;

    this.health = health;
    this.mana = mana;

    this.defaultSkill = defaultSkill;
  }
}
