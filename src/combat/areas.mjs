export async function init(ctx) {
  addLowTownAlleyways(ctx);
  addSyndicateHideout(ctx);
  handleAreaDisplayOrder(ctx);
  addDummyArea(ctx);
  addThiefsToAreas();
}

function addLowTownAlleyways(ctx) {
  const lowTownAllyways = ctx.gameData.buildPackage((p) => {
    p.combatAreas.add({
      id: "LowTownAlleyways",
      name: "Low Town Alleyways",
      media: "assets/media/areas/low_town_alleyways.png",
      monsterIDs: [
        "smattyThieving:Cutpurse",
        "smattyThieving:SyndicateLookout",
        "smattyThieving:ShroudedFigure",
      ],
      difficulty: [0, 1],
      entryRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 10,
        },
      ],
    });
  });
  lowTownAllyways.add();
}

function addSyndicateHideout(ctx) {
  const syndicateHideout = ctx.gameData.buildPackage((p) => {
    p.combatAreas.add({
      id: "SyndicateHideout",
      name: "Syndicate Hideout",
      media: "assets/media/areas/syndicate_hideout.png",
      monsterIDs: [
        "smattyThieving:SyndicateMelee",
        "smattyThieving:SyndicateRanged",
        "smattyThieving:SyndicateMage",
        "smattyThieving:SyndicateMaster",
      ],
      difficulty: [1, 2],
      entryRequirements: [
        {
          type: "SkillLevel",
          skillID: "melvorD:Thieving",
          level: 30,
        },
        {
          type: "ShopPurchase",
          purchaseID: "smattyThieving:Unlock_Syndicate_Hideout",
          count: 1,
        },
      ],
    });
  });
  syndicateHideout.add();
}

function addDummyArea(ctx) {
  const dummyArea = ctx.gameData.buildPackage((p) => {
    p.combatAreas.add({
      id: "DummyArea",
      name: "Dummy Area",
      media: "assets/media/areas/low_town_alleyways.png",
      monsterIDs: [
        "smattyThieving:GolbinThief",
        "smattyThieving:BanditThief",
        "smattyThieving:GiantThief",
      ],
      difficulty: [0, 1],
      entryRequirements: [],
    });
  });
  dummyArea.add();
}

function handleAreaDisplayOrder(ctx) {
  const first_set = ctx.gameData.buildPackage((p) => {
    p.combatAreaDisplayOrder.add({
      insertAt: "After",
      afterID: "melvorD:Icy_Hills",
      ids: ["smattyThieving:LowTownAlleyways"],
    });
  });
  const second_set = ctx.gameData.buildPackage((p) => {
    p.combatAreaDisplayOrder.add({
      insertAt: "After",
      afterID: "melvorD:Wizard_Tower",
      ids: ["smattyThieving:SyndicateHideout"],
    });
  });
  first_set.add();
  second_set.add();
}

function addThiefsToAreas() {
  const golbinThief = game.combatAreas.registeredObjects
    .get("smattyThieving:DummyArea")
    .monsters.find((monster) => monster._localID === "GolbinThief");
  const golbinVillage = game.combatAreas.registeredObjects.get(
    "melvorD:Goblin_Village"
  );
  golbinVillage.monsters.push(golbinThief);
  const banditThief = game.combatAreas.registeredObjects
    .get("smattyThieving:DummyArea")
    .monsters.find((monster) => monster._localID === "BanditThief");
  const banditHideout = game.combatAreas.registeredObjects.get(
    "melvorD:Bandit_Hideout"
  );
  banditHideout.monsters.push(banditThief);
  const giantThief = game.combatAreas.registeredObjects
    .get("smattyThieving:DummyArea")
    .monsters.find((monster) => monster._localID === "GiantThief");
  const giantDungeon = game.combatAreas.registeredObjects.get(
    "melvorD:Giant_Dungeon"
  );
  giantDungeon.monsters.push(giantThief);
}
