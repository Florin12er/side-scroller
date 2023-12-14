export function drawStatusText(ctx, input) {
  ctx.font = "30px Arial";
  ctx.fillStyle = "#000000";
  ctx.fillText("Last input: " + input.lastKey, 20, 50);
}
