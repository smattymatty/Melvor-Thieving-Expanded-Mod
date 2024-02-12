export async function init(ctx) {
  await addUnluckyStackingEffect(ctx);
  await addGamblersStrike(ctx);
  await addDealersFlush(ctx);
  await addThrowingCardSpecials(ctx);
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
      defaultChance: 20,
      damage: [
        {
          damageType: "Custom",
          character: "Attacker",
          maxRoll: "MaxHit",
          maxPercent: 20,
          minRoll: "MaxHit",
          minPercent: 1,
          roll: true,
        },
      ],
      prehitEffects: [],
      onhitEffects: [],
      cantMiss: true,
      attackCount: 5,
      attackInterval: 200,
      lifesteal: 0,
      name: "Gamblers Strike",
      description:
        "Perform ${hitCount} unavoidable attacks, each dealing 1-20% of your max hit.",
      descriptionGenerator: "Perform <count> unavoidable attacks, <damage>",
      usesRunesPerProc: false,
    });
  });
  const eliteGamblersStrike = await ctx.gameData.buildPackage((p) => {
    p.attacks.add({
      id: "EliteGamblersStrike",
      defaultChance: 20,
      damage: [
        {
          damageType: "Custom",
          character: "Attacker",
          maxRoll: "MaxHit",
          maxPercent: 22,
          minRoll: "MaxHit",
          minPercent: 2,
          roll: true,
        },
      ],
      prehitEffects: [],
      onhitEffects: [],
      cantMiss: true,
      attackCount: 6,
      attackInterval: 200,
      lifesteal: 0,
      name: "Elite Gamblers Strike",
      description:
        "Perform ${hitCount} unavoidable attacks, each dealing 2-22% of your max hit.",
      descriptionGenerator: "Perform <count> unavoidable attacks, <damage>",
      usesRunesPerProc: false,
    });
  });
  gamblersStrike.add();
  eliteGamblersStrike.add();
}

async function addDealersFlush(ctx) {
  const dealersFlush = await ctx.gameData.buildPackage((p) => {
    p.attacks.add({
      id: "DealersFlush",
      defaultChance: 15,
      damage: [
        {
          damageType: "Normal",
          amplitude: 100,
        },
        {
          damageType: "Custom",
          character: "Attacker",
          maxRoll: "MaxHit",
          maxPercent: 100,
          minRoll: "MaxHit",
          minPercent: 1,
          roll: true,
        },
      ],
      prehitEffects: [],
      onhitEffects: [
        {
          effectType: "Custom",
          type: "Stun",
          flavour: "Stun",
          chance: 20,
          turns: 1,
        },
      ],
      cantMiss: true,
      attackCount: 1,
      attackInterval: 0,
      lifesteal: 0,
      name: "Dealer's Flush",
      description:
        "Perform an attack dealing your normal damage plus an additional 1-100% of your maximum hit. On a hit has a ${onHitEffect0chance}% chance to apply stun for ${onHitEffect0turns} turn.",
      descriptionGenerator:
        "Perform an attack dealing <damage> damage. On a hit <hitEffect>.",
      attackTypes: ["magic"],
      usesRunesPerProc: false,
    });
  });
  const eliteDealersFlush = await ctx.gameData.buildPackage((p) => {
    p.attacks.add({
      id: "EliteDealersFlush",
      defaultChance: 15,
      damage: [
        {
          damageType: "Normal",
          amplitude: 150,
        },
        {
          damageType: "Custom",
          character: "Attacker",
          maxRoll: "MaxHit",
          maxPercent: 200,
          minRoll: "MaxHit",
          minPercent: 2,
          roll: true,
        },
      ],
      prehitEffects: [],
      onhitEffects: [
        {
          effectType: "Custom",
          type: "Stun",
          flavour: "Stun",
          chance: 20,
          turns: 1,
        },
      ],
      cantMiss: true,
      attackCount: 1,
      attackInterval: 0,
      lifesteal: 0,
      name: "Dealer's Flush",
      description:
        "Perform an attack dealing 150% damage plus an additional 2-200% of your maximum hit. Has a ${onHitEffect0chance}% chance to apply stun for ${onHitEffect0turns} turn.",
      descriptionGenerator:
        "Perform an attack dealing <damage> damage. On a hit <hitEffect>.",
      attackTypes: ["magic"],
      usesRunesPerProc: false,
    });
  });
  dealersFlush.add();
  eliteDealersFlush.add();
}

async function addThrowingCardSpecials(ctx) {
  const twoOfAKind = await ctx.gameData.buildPackage((p) => {
    p.attacks.add({
      id: "TwoOfAKind",
      defaultChance: 15,
      damage: [
        {
          damageType: "Custom",
          character: "Attacker",
          maxRoll: "MaxHit",
          maxPercent: 125,
          minRoll: "MaxHit",
          minPercent: 25,
          roll: true,
        },
      ],
      prehitEffects: [],
      onhitEffects: [],
      cantMiss: true,
      attackCount: 2,
      attackInterval: 200,
      lifesteal: 0,
      name: "Two of a Kind",
      description:
        "Attack two times, each dealing 25-125% of your maximum hit. Add two throwing cards to your bank.",
      descriptionGenerator:
        "Attack two times, each dealing 25-125% of your maximum hit. Add two throwing cards to your bank.",
      attackTypes: ["ranged"],
      usesRunesPerProc: false,
    });
  });
  const threeOfAKind = await ctx.gameData.buildPackage((p) => {
    p.attacks.add({
      id: "ThreeOfAKind",
      defaultChance: 15,
      damage: [
        {
          damageType: "Custom",
          character: "Attacker",
          maxRoll: "MaxHit",
          maxPercent: 130,
          minRoll: "MaxHit",
          minPercent: 30,
          roll: true,
        },
      ],
      prehitEffects: [],
      onhitEffects: [],
      cantMiss: true,
      attackCount: 3,
      attackInterval: 150,
      lifesteal: 0,
      name: "Three of a Kind",
      description:
        "Attack three times, each dealing 30-130% of your maximum hit. Add three elite throwing cards to your bank.",
      descriptionGenerator:
        "Attack three times, each dealing 30-130% of your maximum hit. Add three elite throwing cards to your bank.",
      attackTypes: ["ranged"],
      usesRunesPerProc: false,
    });
  });
  twoOfAKind.add();
  threeOfAKind.add();

  ctx.patch(Player, "attack").before(function (enemy, attack) {
    if (
      attack._localID === "TwoOfAKind" &&
      attack._namespace.name === "smattyThieving"
    ) {
      game.bank.addItemByID(
        "smattyThieving:ThrowingCard",
        2,
        false,
        false,
        true
      );
    }
    if (
      attack._localID === "ThreeOfAKind" &&
      attack._namespace.name === "smattyThieving"
    ) {
      game.bank.addItemByID(
        "smattyThieving:EliteThrowingCard",
        3,
        false,
        false,
        true
      );
    }
  });
}
