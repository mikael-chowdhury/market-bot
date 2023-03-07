export enum Rarity {
  COMMON = 1,
  UNCOMMON = 2,
  RARE = 4,
  EPIC = 8,
  LEGENDARY = 16,
  MYTHICAL = 32,
  UNOBTAINABLE = 64,
}

let rarities: Rarity[] = [];

// Populate the Rarities array

for (let i = 0; i < 450; i++) {
  rarities.push(Rarity.COMMON);
}

for (let i = 0; i < 300; i++) {
  rarities.push(Rarity.UNCOMMON);
}

for (let i = 0; i < 100; i++) {
  rarities.push(Rarity.RARE);
}

for (let i = 0; i < 75; i++) {
  rarities.push(Rarity.EPIC);
}

for (let i = 0; i < 50; i++) {
  rarities.push(Rarity.LEGENDARY);
}

for (let i = 0; i < 24; i++) {
  rarities.push(Rarity.MYTHICAL);
}

rarities.push(Rarity.UNOBTAINABLE);

// Get random rarity with the applied chances
const getRandomRarity = (): Rarity => {
  return rarities[Math.floor(Math.random() * rarities.length)]; // Return random rarity
};

export default { getRandomRarity };
