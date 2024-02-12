export async function init(ctx) {
  addPurseUpgrades(ctx);
  addShroudedCapeUpgrades(ctx);
  addShroudedHoodUpgrades(ctx);
  addGamblersKnifeUpgrades(ctx);
  addDealersWandUpgrade(ctx);
  addThrowingCardUpgrade(ctx);
  addThiefsRationsUpgrade(ctx);
}

function addPurseUpgrades(ctx) {
  const stitchedPurseUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:Stitched_Purse",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:Cut_Purse",
          quantity: 1,
        },
        {
          id: "melvorF:Basic_Bag",
          quantity: 100,
        },
      ],
      rootItemIDs: ["smattyThieving:Cut_Purse"],
      isDowngrade: false,
    });
  });
  const bobbysPurseUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:Bobbys_Purse",
      gpCost: 100000,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:Stitched_Purse",
          quantity: 1,
        },
        {
          id: "melvorF:Bobbys_Pocket",
          quantity: 100,
        },
      ],
      rootItemIDs: ["smattyThieving:Stitched_Purse"],
      isDowngrade: false,
    });
  });
  stitchedPurseUpgrade.add();
  bobbysPurseUpgrade.add();
}

function addShroudedCapeUpgrades(ctx) {
  const shroudedCapeUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:Shrouded_Thievers_Cape",
      gpCost: 10000,
      scCost: 10000,
      itemCosts: [
        {
          id: "smattyThieving:Shrouded_Cape",
          quantity: 1,
        },
        {
          id: "melvorF:Thievers_Cape",
          quantity: 1,
        },
      ],
      rootItemIDs: ["smattyThieving:Shrouded_Cape", "melvorF:Thievers_Cape"],
      isDowngrade: false,
    });
  });
  shroudedCapeUpgrade.add();
}

function addShroudedHoodUpgrades(ctx) {
  const shroudedHoodUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:Shrouded_Golbin_Hood",
      gpCost: 10000,
      scCost: 10000,
      itemCosts: [
        {
          id: "smattyThieving:Shrouded_Hood",
          quantity: 1,
        },
        {
          id: "melvorF:Golbin_Mask",
          quantity: 1,
        },
      ],
      rootItemIDs: ["smattyThieving:Shrouded_Hood", "melvorF:Golbin_Mask"],
      isDowngrade: false,
    });
  });
  shroudedHoodUpgrade.add();
}

function addGamblersKnifeUpgrades(ctx) {
  const gamblersKnifeUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:EliteGamblersKnife",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:GamblersKnife",
          quantity: 1,
        },
        {
          id: "smattyThieving:Syndicate_Insignia",
          quantity: 25,
        },
        {
          id: "melvorD:Runite_Bar",
          quantity: 25,
        },
      ],
      rootItemIDs: ["smattyThieving:GamblersKnife"],
      isDowngrade: false,
    });
  });
  gamblersKnifeUpgrade.add();
}

function addDealersWandUpgrade(ctx) {
  const dealersWandUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:EliteDealersWand",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:DealersWand",
          quantity: 1,
        },
        {
          id: "smattyThieving:Syndicate_Insignia",
          quantity: 25,
        },
        {
          id: "melvorD:Runite_Bar",
          quantity: 25,
        },
      ],
      rootItemIDs: ["smattyThieving:DealersWand"],
      isDowngrade: false,
    });
  });
  dealersWandUpgrade.add();
}

function addThrowingCardUpgrade(ctx) {
  const throwingCardUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:EliteThrowingCard",
      gpCost: 100,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:ThrowingCard",
          quantity: 1,
        },
        {
          id: "smattyThieving:Syndicate_Insignia",
          quantity: 1,
        },
        {
          id: "melvorD:Runite_Bar",
          quantity: 1,
        },
      ],
      rootItemIDs: ["smattyThieving:ThrowingCard"],
      isDowngrade: false,
    });
  });
  throwingCardUpgrade.add();
}

function addThiefsRationsUpgrade(ctx) {
  const thiefsRationsUpgrade = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:Improved_Thiefs_Rations",
      gpCost: 0,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:Thiefs_Rations",
          quantity: 3,
        },
      ],
      rootItemIDs: ["smattyThieving:Thiefs_Rations"],
      isDowngrade: false,
    });
  });
  thiefsRationsUpgrade.add();
}
