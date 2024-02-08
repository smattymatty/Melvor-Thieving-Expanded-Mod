export async function init(ctx) {
  console.log("initializing thieving modifiers", ctx);
  console.log("game: ", game);
  console.log("Item Charges: ", game.itemCharges);
  await addChanceForFlatStealthDamageModifier();
  await patchDiceModifier(ctx);
  addGainStealthAsExtraGPOnThievingAction(ctx);
}

async function addChanceForFlatStealthDamageModifier() {
  modifierData.chanceForFlatStealthDamage = {
    description:
      "+${value} chance to deal 10% of your thieving stealth as damage",
    isSkill: false,
    isNegative: false,
    tags: ["thieving", "combat"],
  };
}

async function patchDiceModifier(ctx) {
  ctx.patch(Player, "attack").before(function (enemy, attack) {
    // generate 1-100
    if (game.combat.player.modifiers.chanceForFlatStealthDamage > 0) {
      let roll = Math.floor(Math.random() * 100) + 1;
      console.log("roll: ", roll);
      if (roll <= game.combat.player.modifiers.chanceForFlatStealthDamage) {
        const amount = Math.floor(getStealthForAttack() / 10);
        console.log("enemy should be damaged: ", amount);
        enemy.damage(amount, Player);
      }
    }
  });
}

function getStealthForAttack(consume = true) {
  let stealth = game.thieving.level;
  if (game.thieving.isPoolTierActive(0)) {
    stealth += 30;
  }
  if (game.thieving.isPoolTierActive(3)) {
    stealth += 100;
  }
  stealth += game.combat.player.modifiers.increasedThievingStealth;
  if (consume) {
    consumeChargeForThievingAttack();
  }
  return stealth;
}

function consumeChargeForThievingAttack() {
  const entry = [...game.itemCharges.charges].filter(
    ([item]) => item.localID === "Thieving_Gloves"
  )[0];
  if (entry === undefined) return;
  const [thievingGloves, charges] = entry;
  if (charges > 0) game.itemCharges.charges.set(thievingGloves, charges - 1);
}

function addGainStealthAsExtraGPOnThievingAction(ctx) {
  modifierData.gainStealthAsExtraGPOnThieving = {
    description: "Gain ${value} extra GP per stealth when thieving",
    isSkill: false,
    isNegative: false,
    tags: ["thieving"],
  };

  ctx.patch(Thieving, "postAction").after(function () {
    if (
      game.thieving.stunState === 0 &&
      game.combat.player.modifiers.gainStealthAsExtraGPOnThieving > 0
    ) {
      let stealth = getStealthForAttack(false);
      const currentNPC = game.thieving.currentNPC;
      stealth += game.thieving.actionMastery.get(currentNPC).level;
      const extra_gp =
        stealth * game.combat.player.modifiers.gainStealthAsExtraGPOnThieving;
      console.log("extra gp: ", extra_gp);
      console.log("currentNPC: ", currentNPC);
      setTimeout(function () {
        game.gp.add(extra_gp);
      }, 500);
    }
  });
}
