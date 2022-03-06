import { Card } from "./Card";
class Ability {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	getName(): string {
		return this.name;
	}
	clear() {}
	//@ts-ignore
	copyAbilityTo(otherCard: Card) {}
}
export {Ability}
//@typedef {typeof Ability} StaticAbility