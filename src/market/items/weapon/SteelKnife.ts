import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Steel Knife",
  rarity: Rarity.RARE,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 40,
  criticalMultiplier: 1.3,
  metadata: {
    durability: 300,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 20,
  },
} as Weapon;
