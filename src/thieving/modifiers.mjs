export async function init(ctx) {
  await patchDiceModifier(ctx);
  addGainStealthAsExtraGPOnThievingAction(ctx);
  await patchThiefsRations(ctx);
  await patchLockpickModifier(ctx);
}

async function patchDiceModifier(ctx) {
  const chanceForFlatStealthDamageModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "chanceForFlatStealthDamage",
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "+${value} chance to deal 10% of your Thieving Stealth as damage",
            },
          ],
        },
      ],
      isCombat: true,
      allowPositive: true,
      allowNegative: false,
    },
    game
  );

  game.modifierRegistry.registerObject(chanceForFlatStealthDamageModifier);
  ctx.patch(Player, "attack").before(function (enemy, attack) {
    rollDice(ctx, enemy, attack);
  });
}

async function rollDice(ctx, enemy, attack) {
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  const modValueEntry = game.combat.player.modifiers.entriesByID.get(
    "smattyThieving:chanceForFlatStealthDamage"
  );
  if (modValueEntry && modValueEntry.length > 0) {
    const actualModValue = modValueEntry[0].modValue.value;
    if (actualModValue > 0) {
      let roll = Math.floor(Math.random() * 100) + 1;
      if (roll <= actualModValue) {
        const amount = Math.floor(
          (stealthCheckModule.getStealthForCombat() / 10) *
            (game.currentGamemode.hitpointMultiplier / 10)
        );
        //delay
        setTimeout(function () {
          enemy.damage(amount, Player);
        }, 100);
      }
    }
  }
}

async function addGainStealthAsExtraGPOnThievingAction(ctx) {
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  // Create a new Modifier for gainStealthAsExtraGPOnThieving
  const gainStealthAsExtraGPOnThievingModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "gainStealthAsExtraGPOnThieving",
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "On Successful Thieving Action: Gain ${value} extra GP per point of Stealth against target NPC.",
            },
          ],
        },
      ],
      isSkill: false,
      allowPositive: true,
      allowNegative: false,
    },
    game
  );
  // Register the new modifier
  game.modifierRegistry.registerObject(gainStealthAsExtraGPOnThievingModifier);

  ctx.patch(Thieving, "postAction").after(function () {
    const modValueEntry = game.combat.player.modifiers.entriesByID.get(
      "smattyThieving:gainStealthAsExtraGPOnThieving"
    );

    if (modValueEntry && modValueEntry.length > 0) {
      const actualModValue = modValueEntry[0].modValue.value;

      if (game.thieving.stunState === 0 && actualModValue > 0) {
        let stealth = stealthCheckModule.getStealthForCombat(false);
        const currentNPC = game.thieving.currentNPC;
        stealth += game.thieving.actionMastery.get(currentNPC).level;
        const extra_gp = stealth * actualModValue;
        setTimeout(function () {
          game.gp.add(extra_gp);
        }, 300);
      }
    }
  });
}

async function patchThiefsRations(ctx) {
  const healModule = await ctx.loadModule("src/helpers/heal.mjs");

  // Create a new Modifier for thiefsRations
  const thiefsRationsModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "thiefsRations",
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "On Thieving Failure: Heal for +${value}% of your Maximum Health.",
            },
          ],
        },
      ],
      isSkill: false,
      allowPositive: true,
      allowNegative: false,
      tags: ["thieving", "combat"],
    },
    game
  );
  // Register the new modifier
  game.modifierRegistry.registerObject(thiefsRationsModifier);

  ctx.patch(Thieving, "postAction").after(function () {
    const modValue = game.combat.player.modifiers.entries.get(
      "smattyThieving:thiefsRations"
    );
    if (game.thieving.stunState === 1 && modValue > 0) {
      const healAmount = Math.floor(
        game.combat.player.stats.maxHitpoints * (modValue / 100)
      );
      setTimeout(function () {
        healModule.healPlayer(healAmount);
      }, 50);
    }
  });
}

async function patchLockpickModifier(ctx) {
  // Create a new Modifier for lockpick
  const lockpickModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "lockpick",
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "You can pick locked chests while this modifier is active.",
            },
          ],
        },
      ],
      isSkill: false,
      allowPositive: true,
      allowNegative: false,
      tags: ["thieving"],
    },
    game
  );
  // Register the new modifier
  game.modifierRegistry.registerObject(lockpickModifier);
}
