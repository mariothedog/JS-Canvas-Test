class Input {
	constructor(inputKeys, type, callback, justPressed = false) {
		this.inputKeys = inputKeys;
		this.callback = callback;
		this.justPressed = justPressed;

		window.addEventListener(type, (keyboardEvent) => this.onInput(keyboardEvent));
	}

	onInput(keyboardEvent) {
		if (this.inputKeys.includes(keyboardEvent.key) && (this.justPressed ? !keyboardEvent.repeat : true)) {
			this.callback(keyboardEvent);
		}
	}
}