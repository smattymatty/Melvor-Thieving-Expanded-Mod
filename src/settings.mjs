export function init(ctx) {
  ctx.settings.section("General").add({
    type: "number",
    name: "xp-multiplier",
    label: "XP Multiplier",
    hint: "Multiply all XP gains by this amount!! 1 is normal.",
    default: 1,
  });
  //ctx.settings.section("General").add({
  //  type: "dropdown",
  //  color: "info",
  //  name: "sort-thieving-areas",
  //  label: "Awesomeness Detection",
  //  hint: "Determines if you are awesome or not.",
  //  options: [],
  //  default: "normal",
  //});

  ctx.patch(Skill, "addXP").before(function (amount, masteryAction) {
    const xpMultiplier = ctx.settings.section("General").get("xp-multiplier");
    return [amount * xpMultiplier, masteryAction];
  });
}
