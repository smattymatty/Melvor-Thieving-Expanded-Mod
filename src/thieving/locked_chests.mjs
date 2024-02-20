export async function init(ctx) {
  await addWizardChest(ctx);
  await addFortChest(ctx);
  await addOutskirtsChest(ctx);
  await addGiantChest(ctx);
  await addPortChest(ctx);
  await addFarmerChest(ctx);
  await addBanquetChest(ctx);
  await addBanditChest(ctx);
  await addGoblinChest(ctx);

  addChestsToExistingAreas();
  patchChestsForLockpicks(ctx);
}

async function addWizardChest(ctx) {
  const wizardChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "WIZARD_CHEST",
            baseExperience: 130,
            level: 98,
            name: "Locked Wizard Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_wizard_chest.png",
            perception: 700,
            maxHit: 50.0,
            maxGP: 1300,
            lootTable: [
              {
                itemID: "melvorF:Fire_Acolyte_Wizard_Robes",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
              {
                itemID: "melvorF:Water_Acolyte_Wizard_Robes",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
              {
                itemID: "melvorF:Air_Acolyte_Wizard_Robes",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
              {
                itemID: "melvorF:Earth_Acolyte_Wizard_Robes",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
              {
                itemID: "melvorD:Death_Rune",
                minQuantity: 2,
                maxQuantity: 20,
                weight: 20,
              },
              {
                itemID: "melvorD:Blood_Rune",
                minQuantity: 2,
                maxQuantity: 20,
                weight: 15,
              },
              {
                itemID: "melvorF:Prayer_Scroll",
                minQuantity: 200,
                maxQuantity: 1000,
                weight: 3,
              },
              {
                itemID: "melvorF:Wizards_Scroll",
                minQuantity: 200,
                maxQuantity: 1000,
                weight: 3,
              },
              {
                itemID: "melvorF:Wizards_Sigil",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Book_Of_Scholars",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
              {
                itemID: "melvorF:Amulet_Of_Incantation",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  wizardChest.add();
}

async function addFortChest(ctx) {
  const fortChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "FORT_CHEST",
            baseExperience: 115,
            level: 92,
            name: "Locked Fort Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_fort_chest.png",
            perception: 650,
            maxHit: 45.0,
            maxGP: 1150,
            lootTable: [
              {
                itemID: "melvorD:Rune_Shield",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 20,
              },
              {
                itemID: "melvorD:Dragon_Dagger",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
              {
                itemID: "melvorD:Rune_Platebody",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 20,
              },
              {
                itemID: "melvorD:Dragon_Helmet",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 10,
              },
              {
                itemID: "melvorF:Knights_Cape",
                minQuantity: 200,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Whetstone",
                minQuantity: 200,
                maxQuantity: 1000,
                weight: 3,
              },
              {
                itemID: "melvorF:Knights_Sigil",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Training_Shield",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
              {
                itemID: "melvorF:Knights_Defender",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  fortChest.add();
}

async function addOutskirtsChest(ctx) {
  const outskirtsChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "OUTSKIRTS_CHEST",
            baseExperience: 105,
            level: 80,
            name: "Locked Outskirts Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_outskirts_chest.png",
            perception: 600,
            maxHit: 40.0,
            maxGP: 1050,
            lootTable: [
              {
                itemID: "melvorD:Runite_Ore",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Dragonite_Ore",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorD:Magic_Logs",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Redwood_Logs",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Pile_Of_Ores",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Pile_Of_Logs",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Lumberjacks_Top",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
              {
                itemID: "melvorF:Miners_Helmet",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  outskirtsChest.add();
}

async function addGiantChest(ctx) {
  const giantChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "GIANT_CHEST",
            baseExperience: 85,
            level: 71,
            name: "Locked Giant Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_giant_chest.png",
            perception: 550,
            maxHit: 35.0,
            maxGP: 850,
            lootTable: [
              {
                itemID: "melvorD:Runite_Bar",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Adamantite_Ore",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Magic_Logs",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorD:Runite_Ore",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Giant_Club",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Stack_Of_Bones",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Eyeball",
                minQuantity: 2,
                maxQuantity: 200,
                weight: 3,
              },
              {
                itemID: "melvorF:Cave_Giant_Boots",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  giantChest.add();
}

async function addPortChest(ctx) {
  const portChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "PORT_CHEST",
            baseExperience: 70,
            level: 64,
            name: "Locked Port Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_port_chest.png",
            perception: 10000,
            maxHit: 30.0,
            maxGP: 470,
            lootTable: [
              {
                itemID: "melvorD:Raw_Shark",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Raw_Cave_Fish",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Raw_Manta_Ray",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorD:Raw_Whale",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Shipwheel",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorD:Treasure_Chest",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Fishing_Hook",
                minQuantity: 2,
                maxQuantity: 2000,
                weight: 3,
              },
              {
                itemID: "melvorD:Amulet_of_Fishing",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
              {
                itemID: "melvorF:Sailors_Top",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  portChest.add();
}

async function addFarmerChest(ctx) {
  const farmerChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "FARMER_CHEST",
            baseExperience: 60,
            level: 52,
            name: "Locked Market Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_farmers_chest.png",
            perception: 450,
            maxHit: 25.0,
            maxGP: 600,
            lootTable: [
              {
                itemID: "melvorF:Pigtayle_Herb",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorF:Barrentoe_Herb",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Yew_Tree_Seed",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorD:Magic_Tree_Seed",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Crate_Of_Food",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Basic_Bag",
                minQuantity: 1,
                maxQuantity: 20,
                weight: 3,
              },
              {
                itemID: "melvorF:Apple_Tree_Seeds",
                minQuantity: 1,
                maxQuantity: 6,
                weight: 3,
              },
              {
                itemID: "melvorF:Bobs_Gloves",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
              {
                itemID: "melvorF:Merchants_Permit",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  farmerChest.add();
}

async function addBanquetChest(ctx) {
  const banquetChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "BANQUET_CHEST",
            baseExperience: 50,
            level: 44,
            name: "Locked Banquet Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_chefs_chest.png",
            perception: 370,
            maxHit: 20.0,
            maxGP: 500,
            lootTable: [
              {
                itemID: "melvorD:Anglerfish",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Cherry_Cupcake",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Shark",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Apple_Pie",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Cooking_Apron",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorD:Bag_of_Flour",
                minQuantity: 2,
                maxQuantity: 400,
                weight: 3,
              },
              {
                itemID: "melvorF:Chefs_Spoon",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
              {
                itemID: "melvorF:Chefs_Hat",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  banquetChest.add();
}

async function addBanditChest(ctx) {
  const banditChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "BANDIT_CHEST",
            baseExperience: 40,
            level: 36,
            name: "Locked Bandit Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_bandit_chest.png",
            perception: 330,
            maxHit: 15.0,
            maxGP: 400,
            lootTable: [
              {
                itemID: "melvorD:Rune_Arrows",
                minQuantity: 2,
                maxQuantity: 20,
                weight: 20,
              },
              {
                itemID: "melvorD:Dragon_Arrows",
                minQuantity: 1,
                maxQuantity: 20,
                weight: 20,
              },
              {
                itemID: "melvorF:Rune_Crossbow",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 15,
              },
              {
                itemID: "melvorF:Dragon_Crossbow",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 15,
              },
              {
                itemID: "melvorF:Thievers_Cape",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Marksmans_Sigil",
                minQuantity: 2,
                maxQuantity: 400,
                weight: 3,
              },
              {
                itemID: "melvorF:Absorbing_Shield",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  banditChest.add();
}

async function addGoblinChest(ctx) {
  const goblinChest = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        npcs: [
          {
            id: "GOBLIN_CHEST",
            baseExperience: 30,
            level: 28,
            name: "Locked Golbin Chest",
            media:
              "assets/media/skills/thieving/locked_chests/locked_goblin_chest.png",
            perception: 300,
            maxHit: 10.0,
            maxGP: 300,
            lootTable: [
              {
                itemID: "melvorD:Gold_Bar",
                minQuantity: 2,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Adamantite_Bar",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 20,
              },
              {
                itemID: "melvorD:Yew_Logs",
                minQuantity: 1,
                maxQuantity: 3,
                weight: 15,
              },
              {
                itemID: "melvorF:Crate_Of_Basic_Supplies",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 3,
              },
              {
                itemID: "melvorF:Golbin_Mask",
                minQuantity: 1,
                maxQuantity: 1,
                weight: 1,
              },
            ],
          },
        ],
      },
    });
  });
  goblinChest.add();
}

function addChestsToExistingAreas() {
  const wizardChest = game.thieving.actions.getObjectByID(
    "smattyThieving:WIZARD_CHEST"
  );
  if (wizardChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:WIZARD_TOWER")
      .npcs.push(wizardChest);
  }
  const fortChest = game.thieving.actions.getObjectByID(
    "smattyThieving:FORT_CHEST"
  );
  if (fortChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:FORT")
      .npcs.push(fortChest);
  }
  const outskirtsChest = game.thieving.actions.getObjectByID(
    "smattyThieving:OUTSKIRTS_CHEST"
  );
  if (outskirtsChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:OUTSKIRTS")
      .npcs.push(outskirtsChest);
  }
  const giantChest = game.thieving.actions.getObjectByID(
    "smattyThieving:GIANT_CHEST"
  );
  if (giantChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:CAVE_OF_GIANTS")
      .npcs.push(giantChest);
  }
  const portChest = game.thieving.actions.getObjectByID(
    "smattyThieving:PORT_CHEST"
  );
  if (portChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:PORT_OF_LEMVOR")
      .npcs.push(portChest);
  }
  const banquetChest = game.thieving.actions.getObjectByID(
    "smattyThieving:BANQUET_CHEST"
  );
  if (banquetChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:BANQUET")
      .npcs.push(banquetChest);
  }
  const farmerChest = game.thieving.actions.getObjectByID(
    "smattyThieving:FARMER_CHEST"
  );
  if (farmerChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:FARMERS_MARKET")
      .npcs.push(farmerChest);
  }
  const banditChest = game.thieving.actions.getObjectByID(
    "smattyThieving:BANDIT_CHEST"
  );
  if (banditChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:BANDIT_HIDEOUT")
      .npcs.push(banditChest);
  }
  const goblinChest = game.thieving.actions.getObjectByID(
    "smattyThieving:GOBLIN_CHEST"
  );
  if (goblinChest !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:GOLBIN_VILLAGE")
      .npcs.push(goblinChest);
  }
}

async function patchChestsForLockpicks(ctx) {
  const chestIDS = [
    "WIZARD_CHEST",
    "FORT_CHEST",
    "OUTSKIRTS_CHEST",
    "GIANT_CHEST",
    "PORT_CHEST",
    "BANQUET_CHEST",
    "FARMER_CHEST",
    "BANDIT_CHEST",
    "GOBLIN_CHEST",
  ];

  ctx.patch(Thieving, "preAction").before(function () {
    if (chestIDS.includes(game.thieving.currentNPC._localID)) {
      if (game.combat.player.modifiers.lockpick > 0) {
      } else {
        // Handle case where player doesn't have lockpicks
        this.stunState = 1;
        game.bank.addItemByID(
          "smattyThieving:LockedChestWarning",
          1,
          false,
          false,
          true
        );
        return;
      }
    }
  });
}
