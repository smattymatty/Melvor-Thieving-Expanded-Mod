export async function init(ctx) {
  await addUnluckyStackingEffect(ctx);
  await addGamblersStrike(ctx);
}

async function addUnluckyStackingEffect(ctx) {
  const unluckyStackingEffect = await ctx.gameData.buildPackage((p) => {
    p.stackingEffects.add({
      id: "UnluckyMark",
      stacksToAdd: 1,
      maxStacks: 100,
      modifiers: {
        chanceToTakeStealthDamage: 1,
      },
      name: "Unlucky Mark",
      media: "assets/media/items/thieving/dice.svg",
      langName: {
        category: "SPECIAL_ATTACK_NAME",
        id: "UnluckyMark",
      },
    });
  });

  unluckyStackingEffect.add();
}

async function addGamblersStrike(ctx) {
  const gamblersStrike = await ctx.gameData.buildPackage((p) => {
    p.attacks.add({
      id: "GamblersStrike",
      defaultChance: 50,
      damage: [
        {
          damageType: "Normal",
          amplitude: 12,
        },
      ],
      prehitEffects: [],
      onhitEffects: [],
      cantMiss: false,
      attackCount: 6,
      attackInterval: 300,
      lifesteal: 0,
      name: "Gamblers Strike",
      description: "Perform ${hitCount} consecutive attacks.",
      descriptionGenerator: "Perform <count> consecutive attacks.",
      usesRunesPerProc: false,
    });
  });

  gamblersStrike.add();
}
