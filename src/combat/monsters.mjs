export async function init(ctx) {
  addCutpurse(ctx);
  addSyndicateLookout(ctx);
  addShroudedFigure(ctx);
}

function addCutpurse(ctx) {
  const cutpurse = ctx.gameData.buildPackage((p) => {
    p.monsters.add({
      id: "Cutpurse",
      name: "Cutpurse",
      media: "assets/media/monsters/cutpurse.png",
      levels: {
        Hitpoints: 30,
        Attack: 35,
        Strength: 22,
        Defence: 35,
        Ranged: 35,
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
      passives: ["secondMod:StreetSmarts"],
      lootChance: 75,
      lootTable: [
        {
          itemID: "melvorD:Leather_Chaps",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 40,
        },
        {
          itemID: "melvorF:Leather_Body",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 35,
        },
        {
          itemID: "melvorD:Black_Dagger",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 30,
        },
        {
          itemID: "secondMod:ShoddyDice",
          minQuantity: 1,
          maxQuantity: 1,
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
          maxQuantity: 1,
          weight: 10,
        },
        {
          itemID: "melvorF:Bobbys_Pocket",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 3,
        },
        {
          itemID: "secondMod:Cut_Purse",
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
        Strength: 50,
        Defence: 50,
        Ranged: 50,
        Magic: 50,
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
      passives: ["secondMod:StreetSmarts"],
      lootChance: 70,
      lootTable: [
        {
          itemID: "melvorF:Hard_Leather_Chaps",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 40,
        },
        {
          itemID: "melvorF:Hard_Leather_Body",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 40,
        },
        {
          itemID: "melvorF:Mithril_Javelin",
          minQuantity: 1,
          maxQuantity: 5,
          weight: 20,
        },
        {
          itemID: "secondMod:Syndicate_Insignia",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 38,
        },
        {
          itemID: "secondMod:ShoddyDice",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 18,
        },
        {
          itemID: "secondMod:PolishedDice",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 4,
        },
        {
          itemID: "secondMod:Syndicate_Torch",
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
        Hitpoints: 80,
        Attack: 80,
        Strength: 80,
        Defence: 80,
        Ranged: 80,
        Magic: 80,
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
      passives: ["secondMod:StreetSmarts"],
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
          itemID: "secondMod:Shrouded_Cape",
          minQuantity: 1,
          maxQuantity: 1,
          weight: 1,
        },
        {
          itemID: "secondMod:Map_To_Shroud_Lands",
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
        itemID: "secondMod:Shrouded_Bones",
        quantity: 1,
      },
    });
  });
  shroudedFigure.add();
}
