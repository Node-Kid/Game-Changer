class System {
	enabled: boolean;
	name: string;
	constructor(name: string) {
		this.enabled = true;
		this.name = name;
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
	getName(): string {
		return this.name;
	}
}
export {System}