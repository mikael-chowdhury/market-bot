import path from "path";
import fs from "fs";
import { Item, IUser, LooseObject } from "../util/types";
import Rarities, { Rarity } from "../market/Rarities";
import { HydratedDocument } from "mongoose";

let loadedItems: Item[] = [];

let rarityItems: Map<Rarity, Item[]> = new Map<Rarity, Item[]>();

// Load items from market/items directory
const loadItems = () => {
  // Loop through every itemtype
  fs.readdirSync(path.join(__dirname, "../", "market", "items")).forEach(
    (itemType) => {
      // Loop through every item
      fs.readdirSync(
        path.join(__dirname, "../", "market", "items", itemType)
      ).forEach((item) => {
        // Dynamically import the item
        import(
          path.join(__dirname, "../", "market", "items", itemType, item)
        ).then((preloadedItem: any) => {
          // Casting magic to convert the PreLoadItem into an Item
          const loadedItem = {
            ...preloadedItem.default,
            itemType,
          } as Item;
          loadedItems.push(loadedItem); // Push the loaded command into list of loaded commands
          rarityItems.set(
            loadedItem.rarity,
            (rarityItems.get(loadedItem.rarity) || []).concat(loadedItem)
          );
        });
      });
    }
  );
};

const getRandomItem = () => {
  const rarity = Rarities.getRandomRarity(); // Get random rarity to choose item from
  const items = rarityItems.get(rarity) as Item[]; // Get all items of chosen rarity
  return items[Math.floor(Math.random() * items.length)]; // Return random item of chosen rarity
};

const getItemByName = (name: string) => {
  let item;

  loadedItems.forEach((i) => {
    if (i.name.toLowerCase() == name.toLowerCase()) {
      item = i;
    }
  });

  return item;
};

const giveUserItem = async (user: HydratedDocument<IUser>, item: Item) => {
  user.items.push(item);
  await user.save();
};

const countOccurrences = (arr: string[]) => {
  const counts: LooseObject = {};
  for (const element of arr) {
    counts[element] = (counts[element] || 0) + 1;
  }
  return Object.entries(counts).map(
    ([element, count]) => `${count}x ${element}`
  );
};

export default {
  loadItems,
  getRandomItem,
  giveUserItem,
  getItemByName,
  countOccurrences,
};
