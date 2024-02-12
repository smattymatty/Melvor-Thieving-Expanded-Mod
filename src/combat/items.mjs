export async function init(ctx) {
  addCutPurse(ctx);
  addSyndicateInsignia(ctx);
  addSyndicateTorch(ctx);
  addShroudedBones(ctx);
  addMapToShroudLands(ctx);
  addShroudedCape(ctx);
  addShroudedHood(ctx);
}

function addCutPurse(ctx) {
  const cutPurse = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Item",
      id: "Cut_Purse",
      name: "Cut Purse",
      media: "assets/media/items/combat/cutpurse.svg",
      customDescription:
        'This purse has been cut and is no longer useful. <br><span class="text-warning">Can be upgraded into a Stitched Purse',
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 1000,
    });
  });
  const stitchedPurse = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      category: "Combat",
      type: "Armour",
      id: "Stitched_Purse",
      name: "Stitched Purse",
      media: "assets/media/items/combat/stitchedpurse.svg",
      customDescription:
        "+20 Thieving Stealth.<br>On Successful Thieving Action: Gain 1 GP per Stealth against target NPC. <br><span class='text-warning'>Can be upgraded into Bobby's Purse",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 2500,
      validSlots: ["Shield"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 15,
        },
      ],
      modifiers: {
        increasedThievingStealth: 20,
        gainStealthAsExtraGPOnThieving: 1,
      },
      equipmentStats: [
        {
          key: "meleeDefenceBonus",
          value: 10,
        },
        {
          key: "rangedDefenceBonus",
          value: 10,
        },
        {
          key: "magicDefenceBonus",
          value: 10,
        },
        {
          key: "damageReduction",
          value: 1,
        },
      ],
    });
  });
  const bobbysPurse = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Equipment",
      category: "Combat",
      type: "Armour",
      id: "Bobbys_Purse",
      name: "Bobby's Purse",
      media: "assets/media/items/combat/bobbyspurse.svg",
      customDescription:
        "+30 Thieving Stealth.<br>>On Successful Thieving Action: Gain 2 GP per Stealth against target NPC.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 150000,
      validSlots: ["Shield"],
      occupiesSlots: [],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 40,
        },
      ],
      modifiers: {
        increasedThievingStealth: 30,
        gainStealthAsExtraGPOnThieving: 2,
      },
      equipmentStats: [
        {
          key: "meleeDefenceBonus",
          value: 15,
        },
        {
          key: "rangedDefenceBonus",
          value: 15,
        },
        {
          key: "magicDefenceBonus",
          value: 15,
        },
        {
          key: "damageReduction",
          value: 3,
        },
      ],
    });
  });
  cutPurse.add();
  stitchedPurse.add();
  bobbysPurse.add();
}

function addShroudedBones(ctx) {
  const shroudedBones = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Bone",
      itemType: "Bone",
      prayerPoints: 3,
      category: "Misc",
      id: "Shrouded_Bones",
      name: "Shrouded Bones",
      media: "assets/media/items/combat/shrouded_bones.png",
      customDescription: "These bones are covered in shrouded energy.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 200,
    });
  });
  shroudedBones.add();
}

function addMapToShroudLands(ctx) {
  const mapToShroudLands = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Misc",
      itemType: "Item",
      category: "Slayer",
      id: "Map_To_Shroud_Lands",
      name: "Map To Shroud Lands",
      media: "assets/media/items/combat/map_to_shroud_lands.svg",
      customDescription: "A map to the Shroud Lands.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5000,
    });
  });
  mapToShroudLands.add();
}

function addSyndicateTorch(ctx) {
  const syndicateTorch = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Misc",
      itemType: "Item",
      category: "Slayer",
      id: "Syndicate_Torch",
      name: "Syndicate Torch",
      media: "assets/media/items/combat/syndicate_torch.svg",
      customDescription: "A torch dropped by a Syndicate Lookout.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5000,
    });
  });
  syndicateTorch.add();
}

function addSyndicateInsignia(ctx) {
  const syndicateInsignia = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Misc",
      itemType: "Item",
      category: "Combat",
      id: "Syndicate_Insignia",
      name: "Syndicate Insignia",
      media: "assets/media/items/combat/syndicate_insignia.png",
      customDescription: "An insignia of the Syndicate.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 250,
    });
  });
  syndicateInsignia.add();
}

function addShroudedCape(ctx) {
  const shroudedCape = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Equipment",
      itemType: "Equipment",
      category: "Combat",
      id: "Shrouded_Cape",
      name: "Shrouded Cape",
      media: "assets/media/items/combat/shrouded_cape.png",
      customDescription: "+10 Thieving Stealth",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5000,
      validSlots: ["Cape"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      occupiesSlots: [],
      equipmentStats: [
        {
          key: "meleeDefenceBonus",
          value: 5,
        },
        {
          key: "rangedDefenceBonus",
          value: 5,
        },
        {
          key: "magicDefenceBonus",
          value: 5,
        },
        {
          key: "damageReduction",
          value: 1,
        },
      ],
      modifiers: {
        increasedThievingStealth: 10,
      },
    });
  });
  const shroudedThieversCape = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Equipment",
      itemType: "Equipment",
      category: "Combat",
      id: "Shrouded_Thievers_Cape",
      name: "Shrouded Thiever's Cape",
      media: "assets/media/items/combat/shrouded_thievers_cape.png",
      customDescription:
        "+35 Thieving Stealth<br>+15% increased GP from Thieving<br>+2% Skill XP from Thieving",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10000,
      validSlots: ["Cape"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      occupiesSlots: [],
      equipmentStats: [
        {
          key: "meleeDefenceBonus",
          value: 6,
        },
        {
          key: "rangedDefenceBonus",
          value: 6,
        },
        {
          key: "magicDefenceBonus",
          value: 6,
        },
        {
          key: "damageReduction",
          value: 2,
        },
      ],
      modifiers: {
        increasedThievingStealth: 35,
        increasedGPFromThieving: 15,
        increasedSkillXP: [
          {
            skillID: "melvorD:Thieving",
            value: 2,
          },
        ],
      },
    });
  });
  shroudedCape.add();
  shroudedThieversCape.add();
}

function addShroudedHood(ctx) {
  const shroudedHood = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Equipment",
      itemType: "Equipment",
      category: "Combat",
      id: "Shrouded_Hood",
      name: "Shrouded Hood",
      media: "assets/media/items/combat/shrouded_hood.png",
      customDescription: "A hood covered in shrouded energy.",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 5000,
      validSlots: ["Helmet"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      occupiesSlots: [],
      equipmentStats: [
        {
          key: "meleeDefenceBonus",
          value: 8,
        },
        {
          key: "rangedDefenceBonus",
          value: 8,
        },
        {
          key: "magicDefenceBonus",
          value: 8,
        },
        {
          key: "damageReduction",
          value: 1,
        },
      ],
      modifiers: {
        increasedThievingStealth: 10,
      },
    });
  });
  const shroudedGoblinHood = ctx.gameData.buildPackage((p) => {
    p.items.add({
      type: "Equipment",
      itemType: "Equipment",
      category: "Combat",
      id: "Shrouded_Golbin_Hood",
      name: "Shrouded Golbin Hood",
      media: "assets/media/items/combat/shrouded_goblin_hood.png",
      customDescription:
        "+30 Thieving Stealth<br>+30 flat GP from Thieving<br>+2% Mastery XP from Thieving",
      ignoreCompletion: false,
      obtainFromItemLog: false,
      golbinRaidExclusive: false,
      sellsFor: 10000,
      validSlots: ["Helmet"],
      equipRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 20,
        },
      ],
      occupiesSlots: [],
      equipmentStats: [
        {
          key: "meleeDefenceBonus",
          value: 10,
        },
        {
          key: "rangedDefenceBonus",
          value: 10,
        },
        {
          key: "magicDefenceBonus",
          value: 10,
        },
        {
          key: "damageReduction",
          value: 2,
        },
      ],
      modifiers: {
        increasedThievingStealth: 30,
        increasedGPFromThievingFlat: 30,
        increasedMasteryXP: [
          {
            skillID: "melvorD:Thieving",
            value: 2,
          },
        ],
      },
    });
  });
  shroudedHood.add();
  shroudedGoblinHood.add();
}
