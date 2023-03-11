import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Light Knife",
  rarity: Rarity.MYTHICAL,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 75,
  criticalMultiplier: 1.8,
  metadata: {
    durability: 1500,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 85,
  },
} as Weapon;
