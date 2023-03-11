import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Iron Knife",
  rarity: Rarity.UNCOMMON,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 30,
  criticalMultiplier: 1.25,
  metadata: {
    durability: 200,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 10,
  },
} as Weapon;
