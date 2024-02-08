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
  await thievingModifiersModule.init(ctx);
  await thievingSpecialAttacksModule.init(ctx);
  await thievingItemsModule.init(ctx);
  await thievingRecipesModule.init(ctx);
  // combat modules
  const combatItemsModule = await ctx.loadModule("src/combat/items.mjs");
  const combatRecipesModule = await ctx.loadModule("src/combat/recipes.mjs");
  const combatAreasModule = await ctx.loadModule("src/combat/areas.mjs");
  console.log("Setup complete!");
  const combatModifiersModule = await ctx.loadModule(
    "src/combat/modifiers.mjs"
  );
  const combatPassivesModule = await ctx.loadModule("src/combat/passives.mjs");
  const combatMonstersModule = await ctx.loadModule("src/combat/monsters.mjs");
  await combatModifiersModule.init(ctx);
  await combatItemsModule.init(ctx);
  await combatRecipesModule.init(ctx);
  await combatPassivesModule.init(ctx);

  ctx.onModsLoaded(async () => {
    await thievingNPCsModule.init(ctx);
    await combatMonstersModule.init(ctx);
    thievingAreasModule.init(ctx);
    combatAreasModule.init(ctx);
  });

  ctx.onCharacterSelectionLoaded(async () => {});

  ctx.onCharacterLoaded(async () => {});

  ctx.onInterfaceReady(async () => {
    await thievingAreasModule.sortThievingAreasByFirstNpcLevel();
  });
}
