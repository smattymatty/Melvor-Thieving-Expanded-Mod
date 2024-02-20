export function healPlayer(amount) {
  const player = game.combat.player;
  if (player.hitpoints < player.stats.maxHitpoints) {
    player.addHitpoints(Math.floor(amount));
    if (player.hitpoints > player.stats.maxHitpoints) {
      player.hitpoints = player.stats.maxHitpoints;
    }
  }
}
