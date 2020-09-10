class Game {
	constructor(canvas, canvasContext) {
		this.canvas = canvas;
		this.canvasContext = canvasContext;

		this.timeStampLastFrame = 0;
		this.deltaTimeSec = 0;
		this.calculatedFPS = 0;

		this.gameObjects = [];
	}

	gameLoop(timeStamp) {
		this.deltaTimeSec = (timeStamp - this.timeStampLastFrame) / 1000;
		this.timeStampLastFrame = timeStamp;

		this.calculatedFPS = round(1 / this.deltaTimeSec, 2);

		this.update(this.deltaTimeSec);
		this.draw();

		window.requestAnimationFrame((tS) => this.gameLoop(tS));
	}

	update(deltaTimeSec) {
		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].update(this.deltaTimeSec);
		}
	}

	draw() {
		this.clearCanvas();

		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].draw();
		}

		this.drawFPS();
	}

	clearCanvas() {
		this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
	}

	drawFPS() {
		this.canvasContext.fillStyle = "white";
		this.canvasContext.font = "25px Arial";
		this.canvasContext.fillStyle = "black";
		this.canvasContext.fillText("FPS: " + this.calculatedFPS, 10, 30);
	}
}