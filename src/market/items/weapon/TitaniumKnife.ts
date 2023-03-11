import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Titanium Knife",
  rarity: Rarity.EPIC,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 45,
  criticalMultiplier: 1.35,
  metadata: {
    durability: 450,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 30,
  },
} as Weapon;
