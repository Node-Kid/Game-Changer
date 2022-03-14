import { GameEvent } from "./GameEvent";

class Modifier {
	name: string;
	xModifier?: Modifier;
	src: string;
	constructor(name: string, src: string) {
		this.name = name;
		this.src = src;
	}
	getName(): string {
		return this.name;
	}
	getSrc(): string {
		return this.src;
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