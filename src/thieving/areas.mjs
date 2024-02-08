export async function init(ctx) {
  await addGamblingDen(ctx);
  await addSyndicateSpyToLowTown();
}

async function addGamblingDen(ctx) {
  const gamblersDen = await ctx.gameData.buildPackage((p) => {
    p.skillData.add({
      skillID: "melvorD:Thieving",
      data: {
        areas: [
          {
            id: "GAMBLING_DEN",
            name: "Gambling Den",
            npcIDs: [
              "secondMod:GAMBLER",
              "secondMod:DEALER",
              "secondMod:CARD_SHARK",
            ],
            uniqueDrops: [
              {
                id: "secondMod:BagOfDice",
                quantity: 1,
              },
            ],
          },
        ],
      },
    });
  });

  gamblersDen.add();
}

export async function addSyndicateSpyToLowTown() {
  const syndicateSpy = game.thieving.actions.getObjectByID(
    "secondMod:SYNDICATE_SPY"
  );
  if (syndicateSpy !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:LOW_TOWN")
      .npcs.push(syndicateSpy);
  }
}

export async function sortThievingAreasByFirstNpcLevel() {
  // Sort the thieving areas based on the level of the first NPC in each area
  const sortedAreas = Array.from(game.thieving.areas.allObjects).sort(
    (a, b) => {
      const npcALevel = (a.npcs && a.npcs[0] && a.npcs[0].level) || Infinity;
      const npcBLevel = (b.npcs && b.npcs[0] && b.npcs[0].level) || Infinity;
      return npcALevel - npcBLevel;
    }
  );
  // Create a map to store references to the existing DOM nodes for each area
  const areaPanelMap = new Map();
  thievingMenu.container.childNodes.forEach((node) => {
    if (node.id) {
      // Extract the local ID from the node's ID to match with the area object
      areaPanelMap.set(node.id, node);
    }
  });
  // Append the area nodes to the container in the sorted order
  sortedAreas.forEach((area) => {
    const idKey = `thieving-area-panel-${area._namespace.name}:${area._localID}`;
    const node = areaPanelMap.get(idKey);
    if (node) {
      thievingMenu.container.appendChild(node);
    }
  });
}
