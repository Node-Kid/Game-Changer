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
	
	trigger(data: GameEvent) {}

	copyAbilityTo(otherCard: Card) {}
}
export {Ability}