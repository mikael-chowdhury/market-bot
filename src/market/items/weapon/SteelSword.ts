import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Steel Sword",
  rarity: Rarity.RARE,
  bonusHealth: 0,
  bonusMana: 0,
  metadata: {
    durability: 300,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 35,
  },
} as Weapon;
