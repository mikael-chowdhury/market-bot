import { Armour, PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Copper Armour",
  rarity: Rarity.COMMON,
  bonusHealth: 15,
  bonusMana: 0,
  metadata: {
    durability: 150,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
