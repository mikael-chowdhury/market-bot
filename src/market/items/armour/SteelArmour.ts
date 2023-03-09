import { Armour } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Steel Armour",
  rarity: Rarity.RARE,
  bonusHealth: 50,
  bonusMana: 0,
  metadata: {
    durability: 300,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
