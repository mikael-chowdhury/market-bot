import { Armour } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Shadow Armour",
  rarity: Rarity.UNOBTAINABLE,
  bonusHealth: 275,
  bonusMana: 0,
  metadata: {
    durability: 3000,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
