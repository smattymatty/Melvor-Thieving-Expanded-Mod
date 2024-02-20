export async function init(ctx) {
  addLockedChestWarning(ctx);
}

function addLockedChestWarning(ctx) {
  const lockedChestWarning = ctx.gameData.buildPackage((p) => {
    p.items.add({
      itemType: "Item",
      id: "LockedChestWarning",
      name: "WARNING - Locked Chest",
      category: "Thieving",
      media: "assets/media/items/warning.svg",
      customDescription:
        "You have tried to break into a locked chest without having a Lockpick equipped.<br><span class='text-warning'>Stop doing that!<br>Lockpicks are dropped by new enemies.<br><span class='text-danger'>This item is useless, sell to discard.",
      sellsFor: 0,
    });
  });
  lockedChestWarning.add();
}
