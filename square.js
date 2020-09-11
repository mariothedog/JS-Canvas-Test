class Square extends GameObject {
	constructor(canvasContext, position, velocity, width = 50, height = 50, color = "black") {
		super(canvasContext, position, velocity);

		this.width = width;
		this.height = height;

		this.color = color;
	}

	draw(posOffset) {
		this.canvasContext.fillStyle = this.color;
		const pos = new Vector2(this.position.x + posOffset.x, this.position.y + posOffset.y);
		this.canvasContext.fillRect(pos.x, pos.y, this.width, this.height);
	}
}