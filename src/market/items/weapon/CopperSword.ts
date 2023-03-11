import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Copper Sword",
  rarity: Rarity.COMMON,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 10,
  criticalMultiplier: 1.1,
  metadata: {
    durability: 150,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 10,
  },
} as Weapon;
