export async function init(ctx) {
  addIncreasedSpeedIfPlayerBelowStealth();
  addIncreasedAccuracyIfPlayerBelowStealth();
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
