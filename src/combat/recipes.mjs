export async function init(ctx) {
  addPurseUpgrades(ctx);
  addShroudedCapeUpgrades(ctx);
}

function addPurseUpgrades(ctx) {
  const stitchedPurseUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "secondMod:Stitched_Purse",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "secondMod:Cut_Purse",
          quantity: 1,
        },
        {
          id: "melvorF:Basic_Bag",
          quantity: 100,
        },
      ],
      rootItemIDs: ["secondMod:Cut_Purse"],
      isDowngrade: false,
    });
  });
  const bobbysPurseUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "secondMod:Bobbys_Purse",
      gpCost: 100000,
      scCost: 0,
      itemCosts: [
        {
          id: "secondMod:Stitched_Purse",
          quantity: 1,
        },
        {
          id: "melvorF:Bobbys_Pocket",
          quantity: 100,
        },
      ],
      rootItemIDs: ["secondMod:Stitched_Purse"],
      isDowngrade: false,
    });
  });
  stitchedPurseUpgrade.add();
  bobbysPurseUpgrade.add();
}

function addShroudedCapeUpgrades(ctx) {
  const shroudedCapeUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "secondMod:Shrouded_Cape",
      gpCost: 10000,
      scCost: 10000,
      itemCosts: [
        {
          id: "secondMod:Shrouded_Cape",
          quantity: 1,
        },
        {
          id: "melvorF:Thievers_Cape",
          quantity: 1,
        },
      ],
      rootItemIDs: ["secondMod:Shrouded_Cape"],
      isDowngrade: false,
    });
  });
  shroudedCapeUpgrade.add();
}
