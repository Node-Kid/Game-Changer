import { GameEvent } from "./GameEvent";

class Modifier {
	name: string;
	xModifier?: Modifier;
	constructor(name: string) {
		this.name = name;
	}
	getName(): string {
		return this.name;
	}
	trigger(data: GameEvent) {
		if(this.xModifier != undefined) {
			this.xModifier.trigger(data);
		}
	}
	setXModifier(x: Modifier) {
		this.xModifier = x;
	}
	getXModifier(): Modifier | undefined {
		return this.xModifier;
	}
}
export {Modifier};