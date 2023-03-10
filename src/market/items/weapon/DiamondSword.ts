import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Diamond Sword",
  rarity: Rarity.LEGENDARY,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 30,
  criticalMultiplier: 1.4,
  metadata: {
    durability: 800,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 75,
  },
} as Weapon;
