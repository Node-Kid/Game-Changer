import { Card } from "./Card";
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
	trigger() {}
	clear() {}
	//@ts-ignore
	copyAbilityTo(otherCard: Card) {}
}
export {Ability}