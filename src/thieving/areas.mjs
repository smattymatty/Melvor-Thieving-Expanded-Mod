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
              "smattyThieving:GAMBLER",
              "smattyThieving:DEALER",
              "smattyThieving:CARD_SHARK",
            ],
            uniqueDrops: [
              {
                id: "smattyThieving:BagOfDice",
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
    "smattyThieving:SYNDICATE_SPY"
  );
  if (syndicateSpy !== undefined) {
    game.thieving.areas.registeredObjects
      .get("melvorF:LOW_TOWN")
      .npcs.push(syndicateSpy);
  }
}

function addThievingAreaIDs() {
  const areaPanels = document.querySelectorAll("thieving-area-panel");
  areaPanels.forEach((panel, index) => {
    const nameSpan = panel.querySelector(".block-content span.h5");
    if (nameSpan && nameSpan.textContent.trim()) {
      const id = `thieving-area-${nameSpan.textContent
        .trim()
        .toLowerCase()
        .replace(/\s+/g, "-")}`;
      panel.id = id;
    }
  });
}

function moveGamblingDenAfterLowTown() {
  const lowTownPanel = document.getElementById("thieving-area-low-town");
  const gamblingDenPanel = document.getElementById(
    "thieving-area-gambling-den"
  );

  if (lowTownPanel && gamblingDenPanel) {
    // Insert the Gambling Den panel after the Low Town panel
    lowTownPanel.parentNode.insertBefore(
      gamblingDenPanel,
      lowTownPanel.nextSibling
    );
  }
}

// Initialize mod
export function initThievingAreaSorter() {
  addThievingAreaIDs();
  moveGamblingDenAfterLowTown();
}
