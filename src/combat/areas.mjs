export async function init(ctx) {
  addLowTownAlleyways(ctx);
  handleAreaDisplayOrder(ctx);
  // It's crucial to log after modifications to confirm successful changes.
  console.log("Updated game object:", game);
  console.log(ctx.gameData);
}

function addLowTownAlleyways(ctx) {
  const lowTownAllyways = ctx.gameData.buildPackage((p) => {
    p.combatAreas.add({
      id: "LowTownAlleyways",
      name: "Low Town Alleyways",
      media: "assets/media/areas/low_town_alleyways.png",
      monsterIDs: [
        "secondMod:Cutpurse",
        "secondMod:SyndicateLookout",
        "secondMod:ShroudedFigure",
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

function handleAreaDisplayOrder(ctx) {
  const first_set = ctx.gameData.buildPackage((p) => {
    p.combatAreaDisplayOrder.add({
      insertAt: "After",
      afterID: "melvorD:Icy_Hills",
      ids: ["secondMod:LowTownAlleyways"],
    });
  });
  first_set.add();
}
