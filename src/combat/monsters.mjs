export const cutpurseSpeed = 2500;
export const cutPurseStabAttack = 18;
export const syndicateLookoutSpeed = 2600;
export const syndicateLookoutStabAttack = 30;
export const shroudedFigureSpeed = 2500;
export const shroudedFigureMagicAttack = 50;

export async function init(ctx) {
  addCutpurse(ctx);
  addSyndicateLookout(ctx);
  addShroudedFigure(ctx);
  addGolbinThief(ctx);
  addBanditThief(ctx);
  addGiantThief(ctx);
}

function addCutpurse(ctx) {
  const cutpurse = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "Cutpurse",
      name: "Cutpurse",
      media: "assets/media/monsters/cutpurse.png",
      levels: {
        Hitpoints: 30,
        Attack: 33,
        Strength: 22,
        Defence: 33,
        Ranged: 33,
        Magic: 10,
      },
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2500,
        },
        {
          key: "stabAttackBonus",
          value: 18,
        },
        {
          key: "meleeDefenceBonus",
          value: 28,
        },
        {
          key: "rangedDefenceBonus",
          value: 55,
        },
      ],
      ignoreCompletion: false,
      attackType: "melee",
      specialAttacks: [],
      passives: ["smattyThieving:StreetSmarts"],
      lootChance: 75,
      lootTable: [
        {
          itemID: "smattyThieving:Thiefs_Rations",
          minQuantity: 1,
          maxQuantity: 3,
          weight: 40,
        },
        {
          itemID: "smattyThieving:Improved_Thiefs_Rations",
          minQuantity: 1,
          maxQuantity: 3,
          weight: 32,
        },
        {
          itemID: "melvorD:Mithril_Dagger",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 28,
        },
        {
          itemID: "smattyThieving:ShoddyDice",
          minQuantity: 1,
          maxQuantity: 2,
          weight: 25,
        },
        {
          itemID: "melvorF:Silver_Topaz_Ring",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 20,
        },
        {
          itemID: "melvorF:Basic_Bag",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 15,
        },
        {
          itemID: "melvorF:Thiefs_Moneysack",
          minQuantity: 1,
          maxQuantity: 5,
          weight: 10,
        },
        {
          itemID: "melvorF:Bobbys_Pocket",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 3,
        },
        {
          itemID: "smattyThieving:Cut_Purse",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 1,
        },
      ],
      gpDrops: {
        min: 15,
        max: 70,
      },
      canSlayer: true,
      isBoss: false,
      selectedSpell: "melvorD:WindStrike",
      bones: {
        itemID: "melvorD:Bones",
        quantity: 1,
      },
    });
  });
  cutpurse.add();
}

function addSyndicateLookout(ctx) {
  const syndicateLookout = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "SyndicateLookout",
      name: "Syndicate Lookout",
      media: "assets/media/monsters/syndicate_lookout.png",
      levels: {
        Hitpoints: 50,
        Attack: 50,
        Strength: 44,
        Defence: 44,
        Ranged: 44,
        Magic: 44,
      },
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
        {
          key: "stabAttackBonus",
          value: 30,
        },
        {
          key: "meleeDefenceBonus",
          value: 42,
        },
        {
          key: "rangedDefenceBonus",
          value: 55,
        },
      ],
      ignoreCompletion: false,
      attackType: "melee",
      specialAttacks: [],
      passives: ["smattyThieving:StreetSmarts"],
      lootChance: 70,
      lootTable: [
        {
          itemID: "melvorD:Adamant_Gloves",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 7,
        },
        {
          itemID: "melvorD:Adamant_Boots",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 7,
        },
        {
          itemID: "smattyThieving:Lockpick",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
        {
          itemID: "melvorF:Mithril_Javelin",
          minQuantity: 1,
          maxQuantity: 5,
          weight: 28,
        },
        {
          itemID: "smattyThieving:Syndicate_Insignia",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 38,
        },
        {
          itemID: "smattyThieving:ShoddyDice",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 18,
        },
        {
          itemID: "smattyThieving:PolishedDice",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 4,
        },
        {
          itemID: "smattyThieving:Syndicate_Torch",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 3,
        },
      ],
      gpDrops: {
        min: 20,
        max: 100,
      },
      canSlayer: true,
      isBoss: false,
      selectedSpell: "melvorD:WindStrike",
      bones: {
        itemID: "melvorD:Bones",
        quantity: 1,
      },
    });
  });
  syndicateLookout.add();
}

function addShroudedFigure(ctx) {
  const shroudedFigure = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "ShroudedFigure",
      name: "Shrouded Figure",
      media: "assets/media/monsters/shrouded_figure.png",
      levels: {
        Hitpoints: 77,
        Attack: 77,
        Strength: 77,
        Defence: 77,
        Ranged: 77,
        Magic: 77,
      },
      equipmentStats: [
        {
          key: "damageReduction",
          value: 5,
        },
        {
          key: "attackSpeed",
          value: 2500,
        },
        {
          key: "magicAttackBonus",
          value: 50,
        },
        {
          key: "magicDamageBonus",
          value: 7,
        },
        {
          key: "magicDefenceBonus",
          value: 70,
        },
      ],
      ignoreCompletion: false,
      attackType: "magic",
      specialAttacks: [],
      passives: ["smattyThieving:StreetsAhead"],
      lootChance: 25,
      lootTable: [
        {
          itemID: "melvorD:Death_Rune",
          minQuantity: 1,
          maxQuantity: 10,
          weight: 20,
        },
        {
          itemID: "melvorD:Amulet_of_Magic",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 10,
        },
        {
          itemID: "smattyThieving:Shrouded_Cape",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 1,
        },
        {
          itemID: "smattyThieving:Shrouded_Hood",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 1,
        },
        {
          itemID: "smattyThieving:Map_To_Shroud_Lands",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 2,
        },
      ],
      gpDrops: {
        min: 25,
        max: 120,
      },
      canSlayer: true,
      isBoss: false,
      selectedSpell: "melvorD:FireBolt",
      bones: {
        itemID: "smattyThieving:Shrouded_Bones",
        quantity: 1,
      },
    });
  });
  shroudedFigure.add();
}

function addGolbinThief(ctx) {
  const golbinThief = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "GolbinThief",
      name: "Golbin Thief",
      media: "assets/media/monsters/golbin_thief.png",
      levels: {
        Hitpoints: 7,
        Attack: 8,
        Strength: 6,
        Defence: 8,
        Ranged: 8,
        Magic: 1,
      },
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
      ],
      ignoreCompletion: false,
      attackType: "melee",
      specialAttacks: [],
      passives: ["smattyThieving:ThiefsInstinctI"],
      lootChance: 100,
      lootTable: [
        {
          itemID: "smattyThieving:Thiefs_Rations",
          minQuantity: 1,
          maxQuantity: 3,
          weight: 40,
        },
        {
          itemID: "melvorD:Shrimp",
          minQuantity: 1,
          maxQuantity: 2,
          weight: 35,
        },
        {
          itemID: "melvorF:Hard_Leather_Vambraces",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
        {
          itemID: "melvorF:Hard_Leather_Boots",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
      ],
      gpDrops: {
        min: 10,
        max: 55,
      },
      canSlayer: true,
      isBoss: false,
      selectedSpell: "melvorD:WindStrike",
      bones: {
        itemID: "melvorD:Bones",
        quantity: 1,
      },
    });
  });
  golbinThief.add();
}

function addBanditThief(ctx) {
  const banditThief = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "BanditThief",
      name: "Bandit Thief",
      media: "assets/media/monsters/bandit_thief.png",
      levels: {
        Hitpoints: 28,
        Attack: 30,
        Strength: 20,
        Defence: 23,
        Ranged: 20,
        Magic: 5,
      },
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2600,
        },
      ],
      ignoreCompletion: false,
      attackType: "melee",
      specialAttacks: [],
      passives: ["smattyThieving:ThiefsInstinctII"],
      lootChance: 100,
      lootTable: [
        {
          itemID: "smattyThieving:Thiefs_Rations",
          minQuantity: 1,
          maxQuantity: 3,
          weight: 40,
        },
        {
          itemID: "melvorD:Herring",
          minQuantity: 1,
          maxQuantity: 2,
          weight: 35,
        },
        {
          itemID: "melvorD:Steel_Gloves",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
        {
          itemID: "melvorD:Steel_Boots",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
      ],
      gpDrops: {
        min: 15,
        max: 70,
      },
      canSlayer: true,
      isBoss: false,
      selectedSpell: "melvorD:WindStrike",
      bones: {
        itemID: "melvorD:Bones",
        quantity: 1,
      },
    });
  });
  banditThief.add();
}

function addGiantThief(ctx) {
  const giantThief = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "GiantThief",
      name: "Giant Thief",
      media: "assets/media/monsters/giant_thief.png",
      levels: {
        Hitpoints: 48,
        Attack: 40,
        Strength: 28,
        Defence: 28,
        Ranged: 30,
        Magic: 10,
      },
      equipmentStats: [
        {
          key: "attackSpeed",
          value: 2800,
        },
      ],
      ignoreCompletion: false,
      attackType: "melee",
      specialAttacks: [],
      passives: ["smattyThieving:ThiefsInstinctIII"],
      lootChance: 100,
      lootTable: [
        {
          itemID: "smattyThieving:Improved_Thiefs_Rations",
          minQuantity: 1,
          maxQuantity: 3,
          weight: 40,
        },
        {
          itemID: "melvorF:Apple",
          minQuantity: 1,
          maxQuantity: 2,
          weight: 35,
        },
        {
          itemID: "melvorD:Mithril_Gloves",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
        {
          itemID: "melvorD:Mithril_Boots",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 5,
        },
      ],
      gpDrops: {
        min: 20,
        max: 90,
      },
      canSlayer: true,
      isBoss: false,
      selectedSpell: "melvorD:WindStrike",
      bones: {
        itemID: "melvorD:Big_Bones",
        quantity: 1,
      },
    });
  });
  giantThief.add();
}
