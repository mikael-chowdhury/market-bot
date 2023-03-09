import { Armour } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Iron Armour",
  rarity: Rarity.UNCOMMON,
  bonusHealth: 30,
  bonusMana: 0,
  metadata: {
    durability: 200,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
