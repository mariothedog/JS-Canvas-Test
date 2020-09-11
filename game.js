class Game {
	constructor(canvas, canvasContext) {
		this.canvas = canvas;
		this.canvasContext = canvasContext;

		new Input([Keys.UP_ARROW, Keys.KEY_W, Keys.SPACE], "keydown", (keyboardEvent) => this.onJumpPress(keyboardEvent), true);

		this.timeStampLastFrame = 0;
		this.deltaTimeSec = 0;
		this.calculatedFPS = 0;

		this.gameObjects = [];

		this.playerGravity = 1500;
		this.playerJumpSpeed = 480;
		this.scrollSpeed = 100;

		this.camera = this.addGameObject(new Camera(canvasContext, Vector2.zero, new Vector2(this.scrollSpeed, 0)));

		this.player = this.addGameObject(new Square(canvasContext, new Vector2(180, 0), new Vector2(-this.scrollSpeed, 0)));
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
		this.player.velocity.y += this.playerGravity * deltaTimeSec;

		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].updatePosition(this.deltaTimeSec);
		}
	}

	draw() {
		this.clearCanvas();

		for (let i = 0; i < this.gameObjects.length; i++) {
			this.gameObjects[i].draw(this.camera.position);
		}

		this.drawFPS();
	}

	addGameObject(gameObject) {
		this.gameObjects.push(gameObject);
		return gameObject;
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

	onJumpPress(keyboardEvent) {
		this.player.velocity.y = -this.playerJumpSpeed;
	}
}