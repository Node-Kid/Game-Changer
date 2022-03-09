import { Card } from "./Card";
import { GameEvent } from "./GameEvent";
import { Modifier } from "./Modifier";
class Ability {
	name: string;
	x?: Modifier;
	constructor(name: string) {
		this.name = name;
	}
	getName(): string {
		return this.name;
	}
	setXAbility(x: Modifier) {
		this.x = x
	}
	getXAbility(): Modifier | undefined {
		return this.x;
	}
	//@ts-ignore
	trigger(data: GameEvent) {}
	//@ts-ignore
	copyAbilityTo(otherCard: Card) {}
}
export {Ability}