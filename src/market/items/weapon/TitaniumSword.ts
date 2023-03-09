import { PreLoadItem, Weapon } from "../../../util/types";
import { Rarity } from "../../Rarities";

export default {
  name: "Titanium Sword",
  rarity: Rarity.EPIC,
  bonusHealth: 0,
  bonusMana: 0,
  metadata: {
    durability: 450,
    enchantments: [],
    unbreakable: false,
    magicalDamage: 0,
    spiritualDamage: 0,
    physicalDamage: 50,
  },
} as Weapon;
