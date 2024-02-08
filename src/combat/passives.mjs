export async function init(ctx) {
  addStreetSmarts(ctx);
}

function addStreetSmarts(ctx) {
  const streetSmarts = ctx.gameData.buildPackage((p) => {
    p.combatPassives.add({
      id: "StreetSmarts",
      name: "Street Smarts",
      customDescription:
        "While the player has below 50 Thieving Stealth, enemy gains 30% increased speed and accuracy.",
      modifiers: {
        increasedSpeedIfPlayerBelowStealth: 50,
        increasedAccuracyIfPlayerBelowStealth: 50,
      },
    });
  });
  streetSmarts.add();
}
