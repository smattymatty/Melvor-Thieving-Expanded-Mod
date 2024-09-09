export async function init(ctx) {
  await addStreetSmarts(ctx);
  addThiefsInstincts(ctx);
}

async function addStreetSmarts(ctx) {
  const streetSmarts = ctx.gameData.buildPackage((p) => {
    p.combatPassives.add({
      id: "StreetSmarts",
      name: "Street Smarts",
      customDescription:
        "While the player has below 100 Thieving Stealth, enemy gains 30% increased speed and +30 melee accuracy.",
      modifiers: {},
    });
  });
  const StreetsAhead = ctx.gameData.buildPackage((p) => {
    p.combatPassives.add({
      id: "StreetsAhead",
      name: "Streets Ahead",
      customDescription:
        "While the player has below 150 Thieving Stealth, enemy gains 50% increased speed and +50 magic accuracy.<br><span class='text-warning'>If you have to ask, you're steets behind",
      modifiers: {},
    });
  });
  streetSmarts.add();
  StreetsAhead.add();
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  const monstersModule = await ctx.loadModule("src/combat/monsters.mjs");
  ctx.patch(Enemy, "setNewMonster").before(function (monster) {
    const stealth = stealthCheckModule.getStealthForCombat();

    const hasStreetSmarts = monster.passives.some(
      (passive) => passive._localID === "StreetSmarts"
    );

    const hasStreetsAhead = monster.passives.some(
      (passive) => passive._localID === "StreetsAhead"
    );
    `Streets Ahead: ${hasStreetsAhead}`;
    if (hasStreetSmarts) {
      let monsterSpeed = 0;
      let monsterAttackBonus = 0;
      if (stealth < 100) {
        if (monster._localID === "Cutpurse") {
          monsterSpeed = Math.floor(monstersModule.cutpurseSpeed * 0.7);
          monsterAttackBonus = Math.floor(
            monstersModule.cutPurseStabAttack + 30
          );
        } else if (monster._localID === "SyndicateLookout") {
          monsterSpeed = Math.floor(monstersModule.syndicateLookoutSpeed * 0.7);
          monsterAttackBonus = Math.floor(
            monstersModule.syndicateLookoutStabAttack + 30
          );
        }
      } else {
        if (monster._localID === "Cutpurse") {
          monsterSpeed = monstersModule.cutpurseSpeed;
          monsterAttackBonus = monstersModule.cutPurseStabAttack;
        } else if (monster._localID === "SyndicateLookout") {
          monsterSpeed = monstersModule.syndicateLookoutSpeed;
          monsterAttackBonus = monstersModule.syndicateLookoutStabAttack;
        }
      }
      monster.equipmentStats.forEach((stat) => {
        if (stat.key === "attackSpeed") {
          stat.value = monsterSpeed;
        }
        if (stat.key === "stabAttackBonus") {
          stat.value = monsterAttackBonus;
        }
      });
    }
    if (hasStreetsAhead) {
      let monsterSpeed = 0;
      let monsterAttackBonus = 0;
      if (stealth < 150) {
        if (monster._localID === "ShroudedFigure") {
          monsterSpeed = Math.floor(monstersModule.shroudedFigureSpeed * 0.5);
          monsterAttackBonus = Math.floor(
            monstersModule.shroudedFigureMagicAttack + 50
          );
        }
      } else {
        if (monster._localID === "ShroudedFigure") {
          monsterSpeed = monstersModule.shroudedFigureSpeed;
          monsterAttackBonus = monstersModule.shroudedFigureMagicAttack;
        }
      }
      monster.equipmentStats.forEach((stat) => {
        if (stat.key === "attackSpeed") {
          stat.value = monsterSpeed;
        }
        if (stat.key === "magicAttackBonus") {
          stat.value = monsterAttackBonus;
        }
      });
    }
  });
}

function addThiefsInstincts(ctx) {
  const lesserThiefsInstincts = ctx.gameData.buildPackage((p) => {
    p.combatPassives.add({
      id: "ThiefsInstinctI",
      name: "Thief's Instinct I",
      customDescription:
        "While the player has below 20 Thieving Stealth, enemy has 100% damage reduction.",
      modifiers: {
        "smattyThieving:cantBeDamagedIfPlayerBelowStealth": 20,
      },
    });
  });
  const thiefsInstincts = ctx.gameData.buildPackage((p) => {
    p.combatPassives.add({
      id: "ThiefsInstinctII",
      name: "Thief's Instinct II",
      customDescription:
        "While the player has below 40 Thieving Stealth, enemy has 100% damage reduction.",
      modifiers: {
        "smattyThieving:cantBeDamagedIfPlayerBelowStealth": 40,
      },
    });
  });
  const greaterThiefsInstincts = ctx.gameData.buildPackage((p) => {
    p.combatPassives.add({
      id: "ThiefsInstinctIII",
      name: "Thief's Instincts III",
      customDescription:
        "While the player has below 60 Thieving Stealth, enemy has 100% damage reduction.",
      modifiers: {
        "smattyThieving:cantBeDamagedIfPlayerBelowStealth": 60,
      },
    });
  });
  lesserThiefsInstincts.add();
  thiefsInstincts.add();
  greaterThiefsInstincts.add();
}
