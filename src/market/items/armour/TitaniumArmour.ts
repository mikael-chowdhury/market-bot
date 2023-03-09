import { Armour } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Titanium Armour",
  rarity: Rarity.EPIC,
  bonusHealth: 75,
  bonusMana: 0,
  metadata: {
    durability: 450,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 0,
  },
} as Armour;
