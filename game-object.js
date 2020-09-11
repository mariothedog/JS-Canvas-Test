class GameObject {
	constructor(canvasContext, position, velocity) {
		this.canvasContext = canvasContext;
		this.position = position;
		this.velocity = velocity;

		if (this.constructor === GameObject) {
			throw new Error("Cannot instantiate abstract class");
		}
	}

	updatePosition(secondsPassed) {
		this.position.x += this.velocity.x * secondsPassed;
		this.position.y += this.velocity.y * secondsPassed;
	}

	draw(posOffset) {
		return;
	}
}