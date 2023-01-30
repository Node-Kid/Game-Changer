import { GameEvent } from "./GameEvent";
import { PlayableObject } from "./PlayableObject";

class Modifier extends PlayableObject{
	xModifier?: Modifier;
	constructor(name: string, src: string, cost: number) {
		super(name, src, {X: 0, Y: 0, ZIndex: 0}, cost);
		this.name = name;
		this.src = src;
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