export async function init(ctx) {
  addIncreasedSpeedIfPlayerBelowStealth();
  addIncreasedAccuracyIfPlayerBelowStealth();
  addCantBeDamaged(ctx);
  addCantBeDamagedIfPlayerBelowStealth(ctx);
}

function addIncreasedSpeedIfPlayerBelowStealth(ctx) {
  const increasedSpeedIfPlayerBelowStealthModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "increasedSpeedIfPlayerBelowStealth",
      allowEnemy: true,
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "If the player is below +${value} stealth, attack 30% faster",
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

  game.modifierRegistry.registerObject(
    increasedSpeedIfPlayerBelowStealthModifier
  );
}

function addIncreasedAccuracyIfPlayerBelowStealth(ctx) {
  const increasedAccuracyIfPlayerBelowStealthModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "increasedAccuracyIfPlayerBelowStealth",
      allowEnemy: true,
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "If the player is below +${value} stealth, gain 30% accuracy",
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

  game.modifierRegistry.registerObject(
    increasedAccuracyIfPlayerBelowStealthModifier
  );
}

function addCantBeDamaged(ctx) {
  const cantBeDamagedModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "cantBeDamaged",
      allowEnemy: true,
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "Cannot take Damage",
            },
          ],
        },
      ],
      isSkill: false,
      allowPositive: true,
      allowNegative: false,
      tags: ["combat"],
    },
    game
  );

  game.modifierRegistry.registerObject(cantBeDamagedModifier);
}

async function addCantBeDamagedIfPlayerBelowStealth(ctx) {
  // Create the new Modifier
  const cantBeDamagedIfPlayerBelowStealthModifier = new Modifier(
    game.registeredNamespaces.getNamespace("smattyThieving"),
    {
      id: "cantBeDamagedIfPlayerBelowStealth",
      allowEnemy: true,
      allowedScopes: [
        {
          scopes: {},
          descriptions: [
            {
              text: "If the player is below +${value} stealth, set damage reduction to 100%",
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
  game.modifierRegistry.registerObject(
    cantBeDamagedIfPlayerBelowStealthModifier
  );

  // Load the stealth check module
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );

  // Patch the Player.attack method
  ctx.patch(Player, "attack").before(function (enemy, attack) {
    const modValueEntry = enemy.modifiers.entriesByID.get(
      "smattyThieving:cantBeDamagedIfPlayerBelowStealth"
    );

    if (modValueEntry && modValueEntry.length > 0) {
      const actualModValue = modValueEntry[0].modValue.value;

      if (actualModValue > 0) {
        const stealth = stealthCheckModule.getStealthForCombat();
        if (stealth < actualModValue) {
          enemy.cantBeDamaged = 1;
          // Set damage reduction for all damage types to 100
          enemy.stats._resistances.forEach((value, key) => {
            enemy.stats._resistances.set(key, 100);
          });
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
    }
  });
}
