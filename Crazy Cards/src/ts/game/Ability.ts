import {Card} from './card';
class Ability {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
	getName(): string {
		return this.name;
	}
	/*
	* Clears Ability from Card
	*/
	clear() {}
	/*
	* Copy the current ability to other card
	* @param {Card} otherCard
	*/
	//@ts-ignore
	copyAbilityTo(otherCard: Card) {}
	//@ts-check
}
export {Ability}
//@typedef {typeof Ability} StaticAbility