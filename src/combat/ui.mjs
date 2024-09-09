export async function init(ctx) {
  await addStealthToCombatStats(ctx);
  await patchUpdateStealthOnEquip(ctx);
}

async function addStealthToCombatStats(ctx) {
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  const playerStats = document.querySelector("#combat-player-stats");
  if (playerStats) {
    const resistanceTable = playerStats.querySelector("resistance-table");

    if (resistanceTable) {
      const resistanceDiv = resistanceTable.querySelector(
        ".combat-stats-table"
      );

      // Create the new stealth stat div
      const newStealthDiv = document.createElement("div");
      newStealthDiv.innerHTML = `
  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.4rem;">
    <span class="d-flex align-items-center">
      <img class="skill-icon-xxs m-0 mr-1" src="https://cdn2-main.melvor.net/assets/media/skills/thieving/thieving.png">
      <span>Thieving Stealth</span>
    </span>
    <span id="combat-player-stealth" style="margin-left: auto;">NA
    </span>
  </div>
  <div role="separator" class="dropdown-divider" style="margin-bottom: 0.4rem;"></div>
`;
      newStealthDiv.classList.add("combat-stats-table");
      // Insert the new stealth div as the first child of the resistance table
      resistanceDiv.insertBefore(newStealthDiv, resistanceDiv.firstChild);
    }
  }
  // getStealthForCombat will update the stealth value on the UI
  stealthCheckModule.getStealthForCombat();
}

async function patchUpdateStealthOnEquip(ctx) {
  const stealthCheckModule = await ctx.loadModule(
    "src/helpers/stealth_check.mjs"
  );
  // whenever equipment is changed, update the stealth value on the UI
  ctx.patch(Equipment, "addEquipmentStats").before(async function () {
    await stealthCheckModule.getStealthForCombat();
  });
}
