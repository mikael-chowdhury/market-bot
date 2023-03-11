import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Iron Sword",
  rarity: Rarity.UNCOMMON,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 15,
  criticalMultiplier: 1.2,
  metadata: {
    durability: 200,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 20,
  },
} as Weapon;
