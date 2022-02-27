import { Ability } from "./Ability";

class Card {
	name: string;
	cost: number;
	id: number;
	abilities: Array<Ability>
	constructor(name: string, cost: number, id: number, abilities: Array<Ability>) {
		this.name = name;
		this.cost = cost;
		this.id = id;
		this.abilities = abilities;
	}
	getCost(): number {
		return this.cost;
	}
	setCost(newCost: number): void {
		this.cost = newCost;
	}
	addAbility(newAbility: Ability): void {
		this.abilities.push(newAbility);
	}
	
}
export {Card}