function main() {
	const canvas = document.getElementById("game-canvas");
	if (!canvas.getContext) {
		console.error("ERROR - Browser does not support canvas");
		return;
	}

	const canvasContext = canvas.getContext("2d");

	const game = new Game(canvas, canvasContext);

	window.requestAnimationFrame((timeStamp) => game.gameLoop(timeStamp));
}