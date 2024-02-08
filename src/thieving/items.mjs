const shoddy_dice_price = 12;
const polished_dice_price = shoddy_dice_price * 6.1;
const shiny_dice_price = polished_dice_price * 6.2;
const master_dice_price = shiny_dice_price * 6.3;

const gold_bar_price = 142;

const bag_of_dice_price =
  (shoddy_dice_price +
    polished_dice_price +
    shiny_dice_price +
    master_dice_price) *
  4.4;

const dicey_price = gold_bar_price * 5 + polished_dice_price * 5.1;
const elite_dicey_price = dicey_price * 5.2;
const ultra_dicey_price = elite_dicey_price * 5.3;

const dicey_price_charged = dicey_price + 10000 + polished_dice_price * 100;

export function init(ctx) {
  addDice(ctx);
  addBagOfDice(ctx);
  addGamblersKnife(ctx);
  addDiceyRing(ctx);
  addDiceyNecklace(ctx);
  addEliteDiceyRing(ctx);
  addEliteDiceyNecklace(ctx);
  addUltraDiceyRing(ctx);
  addUltraDiceyNecklace(ctx);
  addDiceyRingCharged(ctx);
  addDiceyNecklaceCharged(ctx);
  addSyndicateLetter(ctx);
}

function addDice(ctx) {
  const shoddyDice = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "ShoddyDice",
      name: "Shoddy Dice",
      customDescription:
        '6% chance on attack: Enemy takes 10% of your thieving stealth as damage. <br><span class="text-warning">Can be crafted into polished dice',
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/shoddy_dice.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: shoddy_dice_price,
      tier: "none",
      validSlots: ["Consumable"],
      occupiesSlots: [],
      equipRequirements: [],
      equipmentStats: [],
      modifiers: { chanceForFlatStealthDamage: 6 },
      consumesOn: [
        {
          type: "PlayerAttack",
        },
      ],
    });
  });

  const polishedDice = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "PolishedDice",
      name: "Polished Dice",
      customDescription:
        '12% chance on attack: Enemy takes 10% of your thieving stealth as damage. <br><span class="text-warning">Can be crafted into shiny dice',
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/dice.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: polished_dice_price,
      tier: "none",
      validSlots: ["Consumable"],
      occupiesSlots: [],
      equipRequirements: [],
      equipmentStats: [],
      modifiers: { chanceForFlatStealthDamage: 12 },
      consumesOn: [
        {
          type: "PlayerAttack",
        },
      ],
    });
  });
  const shinyDice = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "ShinyDice",
      name: "Shiny Dice",
      customDescription:
        '20% chance on attack: Enemy takes 10% of your thieving stealth as damage. <br><span class="text-warning">Can be crafted into master dice',
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/shiny_dice.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: shiny_dice_price,
      tier: "none",
      validSlots: ["Consumable"],
      occupiesSlots: [],
      equipRequirements: [],
      equipmentStats: [],
      modifiers: { chanceForFlatStealthDamage: 20 },
      consumesOn: [
        {
          type: "PlayerAttack",
        },
      ],
    });
  });
  const masterDice = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "MasterDice",
      name: "Master Dice",
      customDescription:
        "30% chance on attack: Enemy takes 10% of your thieving stealth as damage.",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/master_dice.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: master_dice_price,
      tier: "none",
      validSlots: ["Consumable"],
      occupiesSlots: [],
      equipRequirements: [],
      equipmentStats: [],
      modifiers: { chanceForFlatStealthDamage: 30 },
      consumesOn: [
        {
          type: "PlayerAttack",
        },
      ],
    });
  });
  shoddyDice.add();
  polishedDice.add();
  shinyDice.add();
  masterDice.add();
}

function addBagOfDice(ctx) {
  const bagOfDice = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Openable",
      id: "BagOfDice",
      name: "Bag of Dice",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/bag_of_dice.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: bag_of_dice_price,
      dropTable: [
        {
          itemID: "secondMod:ShoddyDice",
          minQuantity: 1,
          maxQuantity: 100,
          weight: 10,
        },
        {
          itemID: "secondMod:PolishedDice",
          minQuantity: 1,
          maxQuantity: 75,
          weight: 8,
        },
        {
          itemID: "secondMod:ShinyDice",
          minQuantity: 1,
          maxQuantity: 50,
          weight: 6,
        },
      ],
    });
  });
  bagOfDice.add();
}

function addGamblersKnife(ctx) {
  const gamblersKnife = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Weapon",
      attackType: "melee",
      id: "GamblersKnife",
      name: "Gamblers Knife",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/gamblers_knife.svg",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 200,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 5,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 10,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2200,
        },
        {
          key: "stabAttackBonus",
          value: 10,
        },
        {
          key: "slashAttackBonus",
          value: 4,
        },
        {
          key: "blockAttackBonus",
          value: 10,
        },
        {
          key: "meleeStrengthBonus",
          value: 6,
        },
      ],
      specialAttacks: ["secondMod:GamblersStrike"],
    });
  });
  gamblersKnife.add();
}

function addDiceyRing(ctx) {
  const diceyRing = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "DiceyRing",
      name: "Dicey Ring",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/dicey_ring.svg",
      customDescription:
        '+5 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: dicey_price,
      tier: "none",
      validSlots: ["Ring"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 10,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 5,
      },
    });
  });
  diceyRing.add();
}

function addDiceyNecklace(ctx) {
  const diceyNecklace = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "DiceyNecklace",
      name: "Dicey Necklace",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/dicey_necklace.svg",
      customDescription:
        '+5 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: dicey_price,
      tier: "misc",
      validSlots: ["Amulet"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 10,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 5,
      },
    });
  });
  diceyNecklace.add();
}

function addEliteDiceyRing(ctx) {
  const eliteDiceyRing = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "EliteDiceyRing",
      name: "Elite Dicey Ring",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/elite_dicey_ring.svg",
      customDescription:
        '+10 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: elite_dicey_price,
      tier: "misc",
      validSlots: ["Ring"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 30,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 10,
      },
    });
  });
  eliteDiceyRing.add();
}

function addEliteDiceyNecklace(ctx) {
  const eliteDiceyNecklace = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "EliteDiceyNecklace",
      name: "Elite Dicey Necklace",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/elite_dicey_necklace.svg",
      customDescription:
        '+10 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: elite_dicey_price,
      tier: "misc",
      validSlots: ["Amulet"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 30,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 10,
      },
    });
  });
  eliteDiceyNecklace.add();
}

function addUltraDiceyRing(ctx) {
  const eliteDiceyRing = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "UltraDiceyRing",
      name: "Ultra Dicey Ring",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/ultra_dicey_ring.svg",
      customDescription:
        '+15 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: ultra_dicey_price,
      tier: "misc",
      validSlots: ["Ring"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 60,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 15,
      },
    });
  });
  eliteDiceyRing.add();
}

function addUltraDiceyNecklace(ctx) {
  const UltraDiceyNecklace = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "UltraDiceyNecklace",
      name: "Ultra Dicey Necklace",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/ultra_dicey_necklace.svg",
      customDescription:
        '+15 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: ultra_dicey_price,
      tier: "misc",
      validSlots: ["Amulet"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 60,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 15,
      },
    });
  });
  UltraDiceyNecklace.add();
}

function addDiceyRingCharged(ctx) {
  const diceyRingCharged = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "DiceyRingCharged",
      name: "Dicey Ring (Charged)",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/dicey_ring.svg",
      customDescription:
        "+10 Thieving Stealth when equipped. <br>1-60% extra gold gained on thieving acion.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: dicey_price_charged,
      tier: "none",
      validSlots: ["Ring"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 10,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 10,
      },
    });
  });
  diceyRingCharged.add();
}

function addDiceyNecklaceCharged(ctx) {
  const diceyNecklaceCharged = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "DiceyNecklaceCharged",
      name: "Dicey Necklace (Charged)",
      category: "Thieving",
      type: "Equipment",
      media: "assets/media/items/thieving/dicey_necklace.svg",
      customDescription:
        "+10 Thieving Stealth when equipped. <br>20% chance to dodge damage/stun on thieving failure.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: dicey_price_charged,
      tier: "misc",
      validSlots: ["Amulet"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 10,
        },
      ],
      equipmentStats: [],
      modifiers: {
        increasedThievingStealth: 10,
      },
    });
  });
  diceyNecklaceCharged.add();
}

function addSyndicateLetter(ctx) {
  const syndicateLetter = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Item",
      id: "SyndicateLetter",
      name: "Syndicate Letter",
      category: "Thieving",
      type: "Misc",
      media: "assets/media/items/thieving/syndicate_letter.svg",
      customDescription:
        "Detailed Plans on how the Syndicate works.<br>Used in Shop Purchase",
    });
  });
  syndicateLetter.add();
}
