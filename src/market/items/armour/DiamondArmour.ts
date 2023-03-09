import { Armour } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Diamond Armour",
  rarity: Rarity.LEGENDARY,
  bonusHealth: 115,
  bonusMana: 0,
  metadata: {
    durability: 800,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
