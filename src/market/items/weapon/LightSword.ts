import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Light Sword",
  rarity: Rarity.MYTHICAL,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 40,
  criticalMultiplier: 1.5,
  metadata: {
    durability: 1500,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 125,
  },
} as Weapon;
