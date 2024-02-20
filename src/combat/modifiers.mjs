export async function init(ctx) {
  addIncreasedSpeedIfPlayerBelowStealth();
  addIncreasedAccuracyIfPlayerBelowStealth();
  addCantBeDamaged(ctx);
  addCantBeDamagedIfPlayerBelowStealth(ctx);
}

function addIncreasedSpeedIfPlayerBelowStealth() {
  modifierData.increasedSpeedIfPlayerBelowStealth = {
    description: "If the player is below +${value} stealth, attack 30% faster",
    isSkill: false,
    isNegative: false,
    tags: ["thieving", "combat"],
  };
}

function addIncreasedAccuracyIfPlayerBelowStealth() {
  modifierData.increasedAccuracyIfPlayerBelowStealth = {
    description: "If the player is below +${value} stealth, gain 30% accuracy",
    isSkill: false,
    isNegative: false,
    tags: ["thieving", "combat"],
  };
}

async function addCantBeDamaged(ctx) {
  // other effects will check this modifier (e.g dice)
  modifierData.cantBeDamaged = {
    description: "Cannot take Damage",
    isSkill: false,
    isNegative: false,
    tags: ["combat"],
  };
}

async function addCantBeDamagedIfPlayerBelowStealth(ctx) {
  modifierData.cantBeDamagedIfPlayerBelowStealth = {
    description:
      "If the player is below +${value} stealth, set damage reduction to 100%",
    isSkill: false,
    isNegative: false,
    tags: ["thieving", "combat"],
  };
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  ctx.patch(Player, "attack").before(function (enemy, attack) {
    if (enemy.modifiers.cantBeDamagedIfPlayerBelowStealth > 0) {
      const stealth = stealthCheckModule.getStealthForCombat();
      if (stealth < enemy.modifiers.cantBeDamagedIfPlayerBelowStealth) {
        enemy.cantBeDamaged = 1;
        enemy.stats.damageReduction = 100;
        game.bank.addItemByID(
          "smattyThieving:ThiefsInstictWarning",
          1,
          false,
          false,
          true
        );
      } else {
        enemy.cantBeDamaged = 0;
      }
    }
  });
}
