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
            productID: "secondMod:PolishedDice",
            baseQuantity: 1,
            baseExperience: 20,
            categoryID: "secondMod:Dice",
            itemCosts: [{ id: "secondMod:ShoddyDice", quantity: 5 }],
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
            productID: "secondMod:ShinyDice",
            baseQuantity: 1,
            baseExperience: 75,
            categoryID: "secondMod:Dice",
            itemCosts: [{ id: "secondMod:PolishedDice", quantity: 5 }],
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
            productID: "secondMod:MasterDice",
            baseQuantity: 1,
            baseExperience: 166,
            categoryID: "secondMod:Dice",
            itemCosts: [{ id: "secondMod:ShinyDice", quantity: 5 }],
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
            productID: "secondMod:DiceyRing",
            baseQuantity: 1,
            baseExperience: 35,
            categoryID: "secondMod:Dice",
            itemCosts: [
              { id: "secondMod:PolishedDice", quantity: 5 },
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
            productID: "secondMod:DiceyNecklace",
            baseQuantity: 1,
            baseExperience: 42,
            categoryID: "secondMod:Dice",
            itemCosts: [
              { id: "secondMod:PolishedDice", quantity: 5 },
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
            productID: "secondMod:EliteDiceyRing",
            baseQuantity: 1,
            baseExperience: 111,
            categoryID: "secondMod:Dice",
            itemCosts: [
              { id: "secondMod:DiceyRing", quantity: 5 },
              { id: "secondMod:ShinyDice", quantity: 5 },
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
            productID: "secondMod:EliteDiceyNecklace",
            baseQuantity: 1,
            baseExperience: 122,
            categoryID: "secondMod:Dice",
            itemCosts: [
              { id: "secondMod:DiceyNecklace", quantity: 5 },
              { id: "secondMod:ShinyDice", quantity: 5 },
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
            productID: "secondMod:UltraDiceyRing",
            baseQuantity: 1,
            baseExperience: 111,
            categoryID: "secondMod:Dice",
            itemCosts: [
              { id: "secondMod:EliteDiceyRing", quantity: 5 },
              { id: "secondMod:MasterDice", quantity: 5 },
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
            productID: "secondMod:UltraDiceyNecklace",
            baseQuantity: 1,
            baseExperience: 122,
            categoryID: "secondMod:Dice",
            itemCosts: [
              { id: "secondMod:EliteDiceyNecklace", quantity: 5 },
              { id: "secondMod:MasterDice", quantity: 5 },
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
      upgradedItemID: "secondMod:DiceyRingCharged",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "secondMod:DiceyRing",
          quantity: 1,
        },
        {
          id: "secondMod:PolishedDice",
          quantity: 100,
        },
      ],
      rootItemIDs: ["secondMod:DiceyRing"],
      isDowngrade: false,
    });
  });
  const diceyNecklaceCharged = ctx.gameData.buildPackage((p) => {
    p.itemUpgrades.add({
      upgradedItemID: "secondMod:DiceyNecklaceCharged",
      gpCost: 10000,
      scCost: 0,
      itemCosts: [
        {
          id: "secondMod:DiceyNecklace",
          quantity: 1,
        },
        {
          id: "secondMod:PolishedDice",
          quantity: 100,
        },
      ],
      rootItemIDs: ["secondMod:DiceyNecklace"],
      isDowngrade: false,
    });
  });
  diceyRingCharged.add();
  diceyNecklaceCharged.add();
}
