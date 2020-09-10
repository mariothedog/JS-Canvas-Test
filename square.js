class Square extends GameObject {
	constructor(canvasContext, position, velocity, width = 50, height = 50, color = "black") {
		super(canvasContext, position, velocity);

		this.width = width;
		this.height = height;

		this.color = color;
	}

	updatePosition(secondsPassed) {
		this.position.x += this.velocity.x * secondsPassed;
		this.position.y += this.velocity.y * secondsPassed;
	}

	draw() {
		this.canvasContext.fillStyle = this.color;
		this.canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}