class Square extends GameObject {
	constructor(ctx, position, velocity, color) {
		super(ctx, position, velocity);

		this.width = 50;
		this.height = 50;

		this.color = color;
	}

	update(secondsPassed) {
		this.position.x += this.velocity.x * secondsPassed;
		this.position.y += this.velocity.y * secondsPassed;
	}

	draw() {
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.position.x, this.position.y, this.width, this.height);
	}
}