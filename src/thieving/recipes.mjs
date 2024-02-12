export async function init(ctx) {
  await addDiceCategory(ctx);
  diceUpgradeRecipes(ctx);
  addDiceyRingRecipe(ctx);
  addDiceyNecklaceRecipe(ctx);
  addEliteDiceyRingRecipe(ctx);
  addEliteDiceyNecklaceRecipe(ctx);
  addUltraDiceyRingRecipe(ctx);
  addUltraDiceyNecklaceRecipe(ctx);
  addDiceyChargedUpgrades(ctx);
}

async function addDiceCategory(ctx) {
  const diceCategory = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        categories: [
          {
            id: "Dice",
            name: "Dice",
            media: "assets/media/items/thieving/dice.svg",
          },
        ],
      },
    });
  });
  diceCategory.add();
}

function diceUpgradeRecipes(ctx) {
  const shoddyToPolishedRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "PolishedDice",
            level: 10,
            productID: "smattyThieving:PolishedDice",
            baseQuantity: 1,
            baseExperience: 20,
            categoryID: "smattyThieving:Dice",
            itemCosts: [{ id: "smattyThieving:ShoddyDice", quantity: 5 }],
          },
        ],
      },
    });
  });
  const polishedToShinyRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "ShinyDice",
            level: 30,
            productID: "smattyThieving:ShinyDice",
            baseQuantity: 1,
            baseExperience: 75,
            categoryID: "smattyThieving:Dice",
            itemCosts: [{ id: "smattyThieving:PolishedDice", quantity: 5 }],
          },
        ],
      },
    });
  });
  const shinyToMasteredRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "MasterDice",
            level: 65,
            productID: "smattyThieving:MasterDice",
            baseQuantity: 1,
            baseExperience: 166,
            categoryID: "smattyThieving:Dice",
            itemCosts: [{ id: "smattyThieving:ShinyDice", quantity: 5 }],
          },
        ],
      },
    });
  });
  shoddyToPolishedRecipe.add();
  polishedToShinyRecipe.add();
  shinyToMasteredRecipe.add();
}

function addDiceyRingRecipe(ctx) {
  const diceyRingRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "DiceyRing",
            level: 15,
            productID: "smattyThieving:DiceyRing",
            baseQuantity: 1,
            baseExperience: 35,
            categoryID: "smattyThieving:Dice",
            itemCosts: [
              { id: "smattyThieving:PolishedDice", quantity: 5 },
              { id: "melvorD:Gold_Bar", quantity: 5 },
            ],
          },
        ],
      },
    });
  });
  diceyRingRecipe.add();
}

function addDiceyNecklaceRecipe(ctx) {
  const diceyNecklaceRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "DiceyNecklace",
            level: 20,
            productID: "smattyThieving:DiceyNecklace",
            baseQuantity: 1,
            baseExperience: 42,
            categoryID: "smattyThieving:Dice",
            itemCosts: [
              { id: "smattyThieving:PolishedDice", quantity: 5 },
              { id: "melvorD:Gold_Bar", quantity: 5 },
            ],
          },
        ],
      },
    });
  });
  diceyNecklaceRecipe.add();
}

function addEliteDiceyRingRecipe(ctx) {
  const eliteDiceyRingRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "EliteDiceyRing",
            level: 40,
            productID: "smattyThieving:EliteDiceyRing",
            baseQuantity: 1,
            baseExperience: 111,
            categoryID: "smattyThieving:Dice",
            itemCosts: [
              { id: "smattyThieving:DiceyRing", quantity: 5 },
              { id: "smattyThieving:ShinyDice", quantity: 5 },
            ],
          },
        ],
      },
    });
  });
  eliteDiceyRingRecipe.add();
}

function addEliteDiceyNecklaceRecipe(ctx) {
  const eliteDiceyNecklaceRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "EliteDiceyNecklace",
            level: 45,
            productID: "smattyThieving:EliteDiceyNecklace",
            baseQuantity: 1,
            baseExperience: 122,
            categoryID: "smattyThieving:Dice",
            itemCosts: [
              { id: "smattyThieving:DiceyNecklace", quantity: 5 },
              { id: "smattyThieving:ShinyDice", quantity: 5 },
            ],
          },
        ],
      },
    });
  });
  eliteDiceyNecklaceRecipe.add();
}

function addUltraDiceyRingRecipe(ctx) {
  const ultraDiceyRingRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "UltraDiceyRing",
            level: 70,
            productID: "smattyThieving:UltraDiceyRing",
            baseQuantity: 1,
            baseExperience: 111,
            categoryID: "smattyThieving:Dice",
            itemCosts: [
              { id: "smattyThieving:EliteDiceyRing", quantity: 5 },
              { id: "smattyThieving:MasterDice", quantity: 5 },
            ],
          },
        ],
      },
    });
  });
  ultraDiceyRingRecipe.add();
}

function addUltraDiceyNecklaceRecipe(ctx) {
  const ultraDiceyNecklaceRecipe = ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Crafting",
      data: {
        recipes: [
          {
            id: "UltraDiceyNecklace",
            level: 75,
            productID: "smattyThieving:UltraDiceyNecklace",
            baseQuantity: 1,
            baseExperience: 122,
            categoryID: "smattyThieving:Dice",
            itemCosts: [
              { id: "smattyThieving:EliteDiceyNecklace", quantity: 5 },
              { id: "smattyThieving:MasterDice", quantity: 5 },
            ],
          },
        ],
      },
    });
  });
  ultraDiceyNecklaceRecipe.add();
}

function addDiceyChargedUpgrades(ctx) {
  const diceyRingCharged = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:DiceyRingCharged",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:DiceyRing",
          quantity: 1,
        },
        {
          id: "smattyThieving:PolishedDice",
          quantity: 100,
        },
      ],
      rootItemIDs: ["smattyThieving:DiceyRing"],
      isDowngrade: false,
    });
  });
  const diceyNecklaceCharged = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "smattyThieving:DiceyNecklaceCharged",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "smattyThieving:DiceyNecklace",
          quantity: 1,
        },
        {
          id: "smattyThieving:PolishedDice",
          quantity: 100,
        },
      ],
      rootItemIDs: ["smattyThieving:DiceyNecklace"],
      isDowngrade: false,
    });
  });
  diceyRingCharged.add();
  diceyNecklaceCharged.add();
}
