export function getStealthForCombat(consume = true) {
  let stealth = game.thieving.level;
  if (game.thieving.isPoolTierActive(0)) {
    stealth += 30;
  }
  if (game.thieving.isPoolTierActive(3)) {
    stealth += 100;
  }
  stealth += game.combat.player.modifiers.increasedThievingStealth;
  if (consume === true) {
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
