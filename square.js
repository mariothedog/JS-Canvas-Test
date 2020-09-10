class Square extends GameObject {
	constructor(canvasContext, position, velocity, color) {
		super(canvasContext, position, velocity);

		this.width = 50;
		this.height = 50;

		this.color = color;
	}

	update(secondsPassed) {
		this.position.x += this.velocity.x * secondsPassed;
		this.position.y += this.velocity.y * secondsPassed;
	}

	draw() {
		this.canvasContext.fillStyle = this.color;
		this.canvasContext.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}