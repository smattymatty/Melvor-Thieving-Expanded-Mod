export async function setup(ctx) {
  const settingsModule = await ctx.loadModule("src/settings.mjs");
  settingsModule.init(ctx);
  // thieving modules
  const thievingSpecialAttacksModule = await ctx.loadModule(
    "src/thieving/special_attacks.mjs"
  );
  const thievingItemsModule = await ctx.loadModule("src/thieving/items.mjs");
  const thievingRecipesModule = await ctx.loadModule(
    "src/thieving/recipes.mjs"
  );
  const thievingNPCsModule = await ctx.loadModule("src/thieving/npcs.mjs");
  const thievingAreasModule = await ctx.loadModule("src/thieving/areas.mjs");
  const thievingModifiersModule = await ctx.loadModule(
    "src/thieving/modifiers.mjs"
  );
  const thievingChestsModule = await ctx.loadModule(
    "src/thieving/locked_chests.mjs"
  );
  const thievingWarningItemsModule = await ctx.loadModule(
    "src/thieving/warning_items.mjs"
  );
  // combat modules
  const combatWarningItemsModule = await ctx.loadModule(
    "src/combat/warning_items.mjs"
  );
  const combatItemsModule = await ctx.loadModule("src/combat/items.mjs");
  const combatRecipesModule = await ctx.loadModule("src/combat/recipes.mjs");
  const combatAreasModule = await ctx.loadModule("src/combat/areas.mjs");
  const combatModifiersModule = await ctx.loadModule(
    "src/combat/modifiers.mjs"
  );
  const combatPassivesModule = await ctx.loadModule("src/combat/passives.mjs");
  const combatMonstersModule = await ctx.loadModule("src/combat/monsters.mjs");
  // shop modules
  const shopPurchasesModule = await ctx.loadModule("src/shop/purchases.mjs");
  const shopOrderingModule = await ctx.loadModule("src/shop/ordering.mjs");
  // ui modules
  const combatUIModule = await ctx.loadModule("src/combat/ui.mjs");

  await thievingModifiersModule.init(ctx);
  await thievingSpecialAttacksModule.init(ctx);
  await thievingItemsModule.init(ctx);
  await thievingRecipesModule.init(ctx);
  await thievingChestsModule.init(ctx);
  await thievingWarningItemsModule.init(ctx);

  combatWarningItemsModule.init(ctx);
  await combatModifiersModule.init(ctx);
  await combatItemsModule.init(ctx);
  await combatRecipesModule.init(ctx);
  await combatPassivesModule.init(ctx);
  console.log("setup complete", game);

  ctx.onModsLoaded(async () => {
    //shop init
    await shopPurchasesModule.init(ctx);
    await shopOrderingModule.init(ctx);
    //thieving init
    await thievingNPCsModule.init(ctx);
    await thievingItemsModule.addLockpick(ctx); //needs to be after thievingNPCsModule that adds chests
    await thievingAreasModule.init(ctx);
    //combat init
    await combatMonstersModule.init(ctx);
    await combatAreasModule.init(ctx); //needs to be after ShopPurchasesModule that adds unlocks to areas
  });

  ctx.onCharacterSelectionLoaded(async () => {});

  ctx.onCharacterLoaded(async () => {
    await combatUIModule.init(ctx);
  });

  ctx.onInterfaceReady(async () => {
    await thievingAreasModule.initThievingAreaSorter();
  });
}
