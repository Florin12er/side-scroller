export function drawStatusText(ctx, input, player) {
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("Last input: " + input.lastKey, 20, 50);
  ctx.fillText("Current state: " + player.currentState.state, 20, 80);
}
