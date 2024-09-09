export function getStealthForCombat() {
  let stealth = game.thieving.level;
  stealth += game.combat.player.modifiers.thievingStealth;
  // Get the current equipment set (assuming it's the first one)
  const equippedItems = game.combat.player.equipment.equippedItems;
  // Get the gloves slot
  const glovesSlot = equippedItems["melvorD:Gloves"];
  // Check if something is equipped in the gloves slot
  if (!glovesSlot.isEmpty) {
    const equippedGloves = glovesSlot.item;
    // check for a specific pair of gloves
    if (equippedGloves.id === "melvorF:Thieving_Gloves") {
      stealth -= 75;
    }
  } else {
  }

  // Update the stealth value on the UI
  const stealthCombatSpan = document.querySelector("#combat-player-stealth");
  if (stealthCombatSpan && stealth) {
    stealthCombatSpan.innerText = stealth;
  }

  return stealth;
}
