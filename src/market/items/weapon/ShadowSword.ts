import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Shadow Sword",
  rarity: Rarity.UNOBTAINABLE,
  bonusHealth: 0,
  bonusMana: 0,
  criticalChance: 45,
  criticalMultiplier: 1.6,
  metadata: {
    durability: 3000,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 175,
  },
} as Weapon;
