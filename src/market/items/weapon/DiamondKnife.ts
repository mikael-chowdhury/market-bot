import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Diamond Sword",
  rarity: Rarity.LEGENDARY,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 60,
  criticalMultiplier: 1.55,
  metadata: {
    durability: 800,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 50,
  },
} as Weapon;
