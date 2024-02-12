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
  2;

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
  addLockpick(ctx);
  addThiefsRations(ctx);
  addDealersWand(ctx);
  addThrowingCard(ctx);
}

function addDice(ctx) {
  const shoddyDice = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "ShoddyDice",
      name: "Shoddy Dice",
      customDescription:
        '12% chance on attack: Enemy takes 10% of your thieving stealth as damage. <br><span class="text-warning">Can be crafted into polished dice',
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
      modifiers: { chanceForFlatStealthDamage: 12 },
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
        '20% chance on attack: Enemy takes 10% of your thieving stealth as damage. <br><span class="text-warning">Can be crafted into shiny dice',
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
      modifiers: { chanceForFlatStealthDamage: 20 },
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
        '30% chance on attack: Enemy takes 10% of your thieving stealth as damage. <br><span class="text-warning">Can be crafted into master dice',
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
      modifiers: { chanceForFlatStealthDamage: 30 },
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
        "42% chance on attack: Enemy takes 10% of your thieving stealth as damage.",
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
      modifiers: { chanceForFlatStealthDamage: 42 },
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
          itemID: "smattyThieving:ShoddyDice",
          minQuantity: 1,
          maxQuantity: 75,
          weight: 40,
        },
        {
          itemID: "smattyThieving:PolishedDice",
          minQuantity: 1,
          maxQuantity: 50,
          weight: 16,
        },
        {
          itemID: "smattyThieving:ShinyDice",
          minQuantity: 1,
          maxQuantity: 25,
          weight: 6,
        },
        {
          itemID: "smattyThieving:MasterDice",
          minQuantity: 1,
          maxQuantity: 10,
          weight: 3,
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
      media: "assets/media/items/combat/gamblers_knife.png",
      customDescription: "+10 Thieving Stealth",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 10000,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      modifiers: {
        increasedThievingStealth: 10,
      },
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 20,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2100,
        },
        {
          key: "stabAttackBonus",
          value: 18,
        },
        {
          key: "slashAttackBonus",
          value: 5,
        },
        {
          key: "blockAttackBonus",
          value: 18,
        },
        {
          key: "meleeStrengthBonus",
          value: 10,
        },
      ],
      specialAttacks: ["smattyThieving:GamblersStrike"],
    });
  });
  const eliteGamblersKnife = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Weapon",
      attackType: "melee",
      id: "EliteGamblersKnife",
      name: "Elite Gamblers Knife",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/combat/gamblers_knife_elite.png",
      customDescription: "+20 Thieving Stealth",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 20000,
      tier: "none",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      modifiers: {
        increasedThievingStealth: 20,
      },
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Attack",
          level: 40,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2100,
        },
        {
          key: "stabAttackBonus",
          value: 35,
        },
        {
          key: "slashAttackBonus",
          value: 12,
        },
        {
          key: "blockAttackBonus",
          value: 35,
        },
        {
          key: "meleeStrengthBonus",
          value: 24,
        },
      ],
      specialAttacks: ["smattyThieving:EliteGamblersStrike"],
    });
  });
  gamblersKnife.add();
  eliteGamblersKnife.add();
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
        '+10 Thieving Stealth. <br><span class="text-warning">Can be charged with Dice via upgrade',
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
        increasedThievingStealth: 10,
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
        '+10 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
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
        increasedThievingStealth: 10,
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
        '+15 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
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
        increasedThievingStealth: 15,
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
        '+15 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
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
        increasedThievingStealth: 15,
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
        '+20 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
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
        increasedThievingStealth: 20,
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
        '+20 Thieving Stealth when equipped. <br><span class="text-warning">Can be charged with Dice via upgrade',
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
        increasedThievingStealth: 20,
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
        "+15 Thieving Stealth when equipped. <br>1-50% extra gold gained on thieving acion.",
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
        increasedThievingStealth: 15,
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
        "+15 Thieving Stealth when equipped. <br>10% chance to avoid being damaged or stunned on Thieving Failure.",
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
        increasedThievingStealth: 15,
      },
    });
  });
  diceyNecklaceCharged.add();
}

function addLockpick(ctx) {
  const lockpick = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Item",
      id: "Lockpick",
      name: "Lockpick",
      sellsFor: 25,
      category: "Thieving",
      type: "Misc",
      media: "assets/media/items/thieving/lockpick.svg",
      customDescription: "Used to break into locked chests.",
    });
  });
  lockpick.add();
}

function addSyndicateLetter(ctx) {
  const syndicateLetter = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Item",
      id: "SyndicateLetter",
      name: "Syndicate Letter",
      category: "Thieving",
      sellsFor: 6666,
      type: "Misc",
      media: "assets/media/items/thieving/syndicate_letter.svg",
      customDescription:
        "Detailed Plans about the inner workings of the 'Syndicate', a powerful crime ring that runs Low Town through the shadows.<br>Used in Shop Purchase",
    });
  });
  syndicateLetter.add();
}

function addThiefsRations(ctx) {
  const thiefsRations = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "Thiefs_Rations",
      name: "Thief's Rations",
      customDescription:
        "On Thieving Failure: Heal for 11% of your Maximum Health.",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/thiefs_rations.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 10,
      tier: "none",
      validSlots: ["Consumable"],
      occupiesSlots: [],
      equipRequirements: [],
      equipmentStats: [],
      modifiers: { thiefsRations: 11 },
      consumesOn: [
        {
          type: "ThievingAction",
          succesful: false,
        },
      ],
    });
  });
  const improvedThiefsRations = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      id: "Improved_Thiefs_Rations",
      name: "Improved Thief's Rations",
      customDescription:
        "On Thieving Failure: Heal for 22% of your Maximum Health.",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/thieving/improved_thiefs_rations.png",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 30,
      tier: "none",
      validSlots: ["Consumable"],
      occupiesSlots: [],
      equipRequirements: [],
      equipmentStats: [],
      modifiers: { thiefsRations: 22 },
      consumesOn: [
        {
          type: "ThievingAction",
          succesful: false,
        },
      ],
    });
  });
  thiefsRations.add();
  improvedThiefsRations.add();
}

function addDealersWand(ctx) {
  const dealersWand = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Weapon",
      attackType: "magic",
      id: "DealersWand",
      name: "Dealer's Wand",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/combat/dealers_wand.png",
      customDescription: "+10 Thieving Stealth",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 10000,
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      modifiers: {
        increasedThievingStealth: 10,
      },
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 20,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2500,
        },
        {
          key: "magicAttackBonus",
          value: 18,
        },
        {
          key: "magicDamageBonus",
          value: 4,
        },
        {
          key: "magicDefenceBonus",
          value: 18,
        },
      ],
      specialAttacks: ["smattyThieving:DealersFlush"],
    });
  });
  const eliteDealersWand = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Weapon",
      attackType: "magic",
      id: "EliteDealersWand",
      name: "Elite Dealers Wand",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/combat/dealers_wand_elite.png",
      customDescription: "+20 Thieving Stealth",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 20000,
      tier: "wand",
      validSlots: ["Weapon"],
      occupiesSlots: [],
      modifiers: {
        increasedThievingStealth: 20,
      },
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Magic",
          level: 40,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2500,
        },
        {
          key: "magicAttackBonus",
          value: 23,
        },
        {
          key: "magicDamageBonus",
          value: 8,
        },
        {
          key: "magicDefenceBonus",
          value: 23,
        },
      ],
      specialAttacks: ["smattyThieving:EliteDealersFlush"],
    });
  });
  dealersWand.add();
  eliteDealersWand.add();
}

function addThrowingCard(ctx) {
  const throwingCard = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Weapon",
      attackType: "ranged",
      id: "ThrowingCard",
      name: "Throwing Card",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/combat/throwing_cards.png",
      customDescription: "+10 Thieving Stealth<br>+15% Ammo Preservation",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 200,
      tier: "none",
      validSlots: ["Quiver"],
      occupiesSlots: ["Weapon"],
      modifiers: {
        increasedThievingStealth: 10,
        increasedAmmoPreservation: 15,
      },
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 20,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 1900,
        },
        {
          key: "rangedAttackBonus",
          value: 4,
        },
        {
          key: "rangedStrengthBonus",
          value: 25,
        },
      ],
      specialAttacks: ["smattyThieving:TwoOfAKind"],
    });
  });
  const eliteThrowingCard = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Weapon",
      attackType: "ranged",
      id: "EliteThrowingCard",
      name: "Elite Throwing Card",
      category: "Combat",
      type: "Equipment",
      media: "assets/media/items/combat/throwing_cards_elite.png",
      customDescription: "+20 Thieving Stealth<br>+20% Ammo Preservation",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      goblinRaidExclusive: false,
      sellsFor: 400,
      tier: "none",
      validSlots: ["Quiver"],
      occupiesSlots: ["Weapon"],
      modifiers: {
        increasedThievingStealth: 20,
        increasedAmmoPreservation: 20,
      },
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Ranged",
          level: 40,
        },
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 40,
        },
      ],
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 1900,
        },
        {
          key: "rangedAttackBonus",
          value: 6,
        },
        {
          key: "rangedStrengthBonus",
          value: 38,
        },
      ],
      specialAttacks: ["smattyThieving:ThreeOfAKind"],
    });
  });
  throwingCard.add();
  eliteThrowingCard.add();
}
