export async function init(ctx) {
  addShopCategory(ctx);
  addAreaUnlocks(ctx);
  addThiefsRationsPurchases(ctx);
}

function addShopCategory(ctx) {
  const thievingExtended = ctx.gameData.buildPackage((p) => {
    p.shopCategories.add({
      id: "ThievingExtended",
      name: "Thieving Extended",
      media: "assets/media/items/thieving/bag_of_dice.svg",
    });
  });
  thievingExtended.add();
}

function addAreaUnlocks(ctx) {
  const syndicateHideout = ctx.gameData.buildPackage((p) => {
    p.shopPurchases.add({
      id: "Unlock_Syndicate_Hideout",
      media: "assets/media/areas/syndicate_hideout.png",
      category: "smattyThieving:ThievingExtended",
      contains: {
        items: [],
        modifiers: {},
      },
      cost: {
        gp: {
          type: "Fixed",
          cost: 10000,
        },
        slayerCoins: {
          type: "Fixed",
          cost: 0,
        },
        items: [
          {
            id: "smattyThieving:Syndicate_Torch",
            quantity: 1,
          },
          {
            id: "smattyThieving:SyndicateLetter",
            quantity: 1,
          },
          {
            id: "smattyThieving:Syndicate_Insignia",
            quantity: 50,
          },
        ],
        raidCoins: {
          type: "Fixed",
          cost: 0,
        },
      },
      allowQuantityPurchase: false,
      unlockRequirements: [],
      purchaseRequirements: [
        {
          type: "DungeonCompletion",
          dungeonID: "melvorD:Bandit_Base",
          count: 5,
        },
      ],
      defaultBuyLimit: 1,
      buyLimitOverrides: [],
      showBuyLimit: false,
      customName: "Unlock the Syndicate Hideout",
      customDescription: `Unlock the Syndicate Hideout area
        <span class='text-warning'>Not Fully Implemented yet
        <br>Passives and weapon special attacks coming soon!`,
    });
  });
  const shroudLands = ctx.gameData.buildPackage((p) => {
    p.shopPurchases.add({
      id: "Unlock_ShroudLands",
      media: "assets/media/areas/shroudlands.png",
      category: "smattyThieving:ThievingExtended",
      contains: {
        items: [],
        modifiers: {},
      },
      cost: {
        gp: {
          type: "Fixed",
          cost: 0,
        },
        slayerCoins: {
          type: "Fixed",
          cost: 25000,
        },
        items: [
          {
            id: "smattyThieving:Map_To_Shroud_Lands",
            quantity: 1,
          },
        ],
        raidCoins: {
          type: "Fixed",
          cost: 0,
        },
      },
      allowQuantityPurchase: false,
      unlockRequirements: [],
      purchaseRequirements: [
        {
          type: "DungeonCompletion",
          dungeonID: "melvorD:Spider_Forest",
          count: 5,
        },
      ],
      defaultBuyLimit: 1,
      buyLimitOverrides: [],
      showBuyLimit: false,
      customName: "Unlock the Shroudlands",
      customDescription: `Unlock the Shroudlands area
        <span class='text-warning'>Not Implemented yet
        <br>Like, at all!`,
    });
  });
  syndicateHideout.add();
  shroudLands.add();
}

function addThiefsRationsPurchases(ctx) {
  const thiefsRationsPurchase1 = ctx.gameData.buildPackage((p) => {
    p.shopPurchases.add({
      id: "Thiefs_Rations1",
      media: "assets/media/items/thieving/thiefs_rations.png",
      category: "smattyThieving:ThievingExtended",
      contains: {
        items: [
          {
            id: "smattyThieving:Thiefs_Rations",
            quantity: 1,
          },
        ],
        modifiers: {},
      },
      cost: {
        gp: {
          type: "Fixed",
          cost: 10,
        },
        slayerCoins: {
          type: "Fixed",
          cost: 0,
        },
        items: [
          {
            id: "melvorD:Potatoes",
            quantity: 2,
          },
        ],
        raidCoins: {
          type: "Fixed",
          cost: 0,
        },
      },
      allowQuantityPurchase: true,
      unlockRequirements: [],
      purchaseRequirements: [],
      defaultBuyLimit: 0,
      buyLimitOverrides: [],
      showBuyLimit: false,
      customName: "Thief's Rations",
      customDescription:
        "Consumable<br>On Thieving Failure: Heal for 11% of your Maximum Health.",
    });
  });
  const thiefsRationsPurchase2 = ctx.gameData.buildPackage((p) => {
    p.shopPurchases.add({
      id: "Thiefs_Rations2",
      media: "assets/media/items/thieving/thiefs_rations.png",
      category: "smattyThieving:ThievingExtended",
      contains: {
        items: [
          {
            id: "smattyThieving:Thiefs_Rations",
            quantity: 2,
          },
        ],
        modifiers: {},
      },
      cost: {
        gp: {
          type: "Fixed",
          cost: 10,
        },
        slayerCoins: {
          type: "Fixed",
          cost: 0,
        },
        items: [
          {
            id: "melvorD:Shrimp",
            quantity: 1,
          },
        ],
        raidCoins: {
          type: "Fixed",
          cost: 0,
        },
      },
      allowQuantityPurchase: true,
      unlockRequirements: [],
      purchaseRequirements: [],
      defaultBuyLimit: 0,
      buyLimitOverrides: [],
      showBuyLimit: false,
      customName: "Thief's Rations",
      customDescription:
        "Consumable<br>On Thieving Failure: Heal for 11% of your Maximum Health.",
    });
  });
  const thiefsRationsPurchase3 = ctx.gameData.buildPackage((p) => {
    p.shopPurchases.add({
      id: "Thiefs_Rations3",
      media: "assets/media/items/thieving/improved_thiefs_rations.png",
      category: "smattyThieving:ThievingExtended",
      contains: {
        items: [
          {
            id: "smattyThieving:Improved_Thiefs_Rations",
            quantity: 1,
          },
        ],
        modifiers: {},
      },
      cost: {
        gp: {
          type: "Fixed",
          cost: 20,
        },
        slayerCoins: {
          type: "Fixed",
          cost: 0,
        },
        items: [
          {
            id: "melvorD:Herring",
            quantity: 2,
          },
        ],
        raidCoins: {
          type: "Fixed",
          cost: 0,
        },
      },
      allowQuantityPurchase: true,
      unlockRequirements: [],
      purchaseRequirements: [],
      defaultBuyLimit: 0,
      buyLimitOverrides: [],
      showBuyLimit: false,
      customName: "Improved Thief's Rations",
      customDescription:
        "Consumable<br>On Thieving Failure: Heal for 22% of your Maximum Health.",
    });
  });
  const thiefsRationsPurchase4 = ctx.gameData.buildPackage((p) => {
    p.shopPurchases.add({
      id: "Thiefs_Rations4",
      media: "assets/media/items/thieving/improved_thiefs_rations.png",
      category: "smattyThieving:ThievingExtended",
      contains: {
        items: [
          {
            id: "smattyThieving:Improved_Thiefs_Rations",
            quantity: 2,
          },
        ],
        modifiers: {},
      },
      cost: {
        gp: {
          type: "Fixed",
          cost: 20,
        },
        slayerCoins: {
          type: "Fixed",
          cost: 0,
        },
        items: [
          {
            id: "melvorF:Apple",
            quantity: 1,
          },
        ],
        raidCoins: {
          type: "Fixed",
          cost: 0,
        },
      },
      allowQuantityPurchase: true,
      unlockRequirements: [],
      purchaseRequirements: [],
      defaultBuyLimit: 0,
      buyLimitOverrides: [],
      showBuyLimit: false,
      customName: "Improved Thief's Rations",
      customDescription:
        "Consumable<br>On Thieving Failure: Heal for 22% of your Maximum Health.",
    });
  });
  thiefsRationsPurchase1.add();
  thiefsRationsPurchase2.add();
  thiefsRationsPurchase3.add();
  thiefsRationsPurchase4.add();
}
