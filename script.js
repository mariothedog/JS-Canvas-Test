function main() {
	const canvas = document.getElementById("game-canvas");
	console.log(canvas.getContext);
	if (!canvas.getContext) {
		console.error("ERROR - Browser does not support canvas");
		return;
	}

	const canvasContext = canvas.getContext("2d");

	const game = new Game(canvas, canvasContext);

	game.gameObjects.push(
		new Square(
			canvasContext,
			new Vector2(0, 0),
			new Vector2(100, 100),
			"green",
		),
	);

	window.requestAnimationFrame((timeStamp) => game.gameLoop(timeStamp));
}