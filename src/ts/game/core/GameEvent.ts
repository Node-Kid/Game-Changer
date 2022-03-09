class GameEvent {
	name: string;
	resolved: boolean;
	data: object;
	constructor(name: string, data: object) {
		this.name = name;
		this.resolved = false;
		this.data = data;
	}
	getName(): string {
		return this.name;
	}
	getResolved(): boolean {
		return this.resolved;
	}
	getData(): object {
		return this.data;
	}
	resolve() {
		this.resolved = true;
	}

}

export {GameEvent}