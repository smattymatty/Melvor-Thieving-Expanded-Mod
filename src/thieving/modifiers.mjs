export async function init(ctx) {
  await patchDiceModifier(ctx);
  addGainStealthAsExtraGPOnThievingAction(ctx);
  await patchThiefsRations(ctx);
  await patchLockpickModifier(ctx);
}

async function patchDiceModifier(ctx) {
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  modifierData.chanceForFlatStealthDamage = {
    description:
      "+${value} chance to deal 10% of your Thieving Stealth as damage",
    isSkill: false,
    isNegative: false,
    tags: ["thieving", "combat"],
  };
  ctx.patch(Player, "attack").before(function (enemy, attack) {
    // generate 1-100
    if (game.combat.player.modifiers.chanceForFlatStealthDamage > 0) {
      let roll = Math.floor(Math.random() * 100) + 1;
      if (roll <= game.combat.player.modifiers.chanceForFlatStealthDamage) {
        const amount = Math.floor(
          (stealthCheckModule.getStealthForCombat() / 10) *
            (game.currentGamemode.hitpointMultiplier / 10)
        );
        enemy.damage(amount, Player);
      }
    }
  });
}

async function addGainStealthAsExtraGPOnThievingAction(ctx) {
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  modifierData.gainStealthAsExtraGPOnThieving = {
    description:
      "On Successful Thieving Action: Gain ${value} extra GP per point of Stealth against target NPC.",
    isSkill: false,
    isNegative: false,
    tags: ["thieving"],
  };
  ctx.patch(Thieving, "postAction").after(function () {
    if (
      game.thieving.stunState === 0 &&
      game.combat.player.modifiers.gainStealthAsExtraGPOnThieving > 0
    ) {
      let stealth = stealthCheckModule.getStealthForCombat(false);
      const currentNPC = game.thieving.currentNPC;
      stealth += game.thieving.actionMastery.get(currentNPC).level;
      const extra_gp =
        stealth * game.combat.player.modifiers.gainStealthAsExtraGPOnThieving;
      setTimeout(function () {
        game.gp.add(extra_gp);
      }, 300);
    }
  });
}

async function patchThiefsRations(ctx) {
  const healModule = await ctx.loadModule("src/helpers/heal.mjs");
  modifierData.thiefsRations = {
    description:
      "On Thieving Failure: Heal for +${value}% of your Maximum Health.",
    isSkill: false,
    isNegative: false,
    tags: ["thieving", "combat"],
  };
  ctx.patch(Thieving, "postAction").after(function () {
    if (
      game.thieving.stunState === 1 &&
      game.combat.player.modifiers.thiefsRations > 0
    ) {
      const healAmount = Math.floor(
        game.combat.player.stats.maxHitpoints *
          (game.combat.player.modifiers.thiefsRations / 100)
      );
      setTimeout(function () {
        healModule.healPlayer(healAmount);
      }, 50);
    }
  });
}

async function patchLockpickModifier(ctx) {
  modifierData.lockpick = {
    description: "You can pick locked chests while this modifier is active.",
    isSkill: false,
    isNegative: false,
    tags: ["thieving"],
  };
}
