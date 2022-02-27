class System {
	enabled: boolean;
	constructor() {
		this.enabled = true;
	}
	enable(): void {
		this.enabled = true;
	}
	disable(): void {
		this.enabled = false;
	}
	toggle(): void {
		this.enabled = !this.enabled;
	}
	getState(): boolean {
		return this.enabled;
	}
}
export {System}