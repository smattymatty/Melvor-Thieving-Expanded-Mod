export async function init(ctx) {
  addThiefsInstinctWarning(ctx);
}

function addThiefsInstinctWarning(ctx) {
  const thiefsInstinctsWarning = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Item",
      id: "ThiefsInstictWarning",
      name: "WARNING - Thiefs Instict",
      category: "Thieving",
      media: "assets/media/items/warning.svg",
      customDescription:
        "You have tried to damage an enemy with the 'Thiefs Instinct' passive while you are below the Stealth threshold.<br><span class='text-warning'>Stop doing that!<br>Check the Thieving Skill Game Guide for information on Stealth.<br><span class='text-danger'>This item is useless, sell to discard.",
      sellsFor: 0,
    });
  });
  thiefsInstinctsWarning.add();
}
