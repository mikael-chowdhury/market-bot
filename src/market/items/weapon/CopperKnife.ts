import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Copper Knife",
  rarity: Rarity.COMMON,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 25,
  criticalMultiplier: 1.2,
  metadata: {
    durability: 150,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 5,
  },
} as Weapon;
