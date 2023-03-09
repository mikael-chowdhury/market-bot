import { Armour } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Light Armour",
  rarity: Rarity.MYTHICAL,
  bonusHealth: 190,
  bonusMana: 0,
  metadata: {
    durability: 1500,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
