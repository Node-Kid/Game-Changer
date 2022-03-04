import { Ability } from "./Ability";

class Card {
	name: string;
	cost: number;
	id: number;
	abilities: Ability[]
	src: string;
	constructor(name: string, cost: number, id: number, abilities: Ability[], src: string) {
		this.name = name;
		this.cost = cost;
		this.id = id;
		this.abilities = abilities;
		this.src = src;
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
	removeAbility(ability: Ability): void {
		const index = this.abilities.indexOf(ability, 0);
		if(index > -1) this.abilities.splice(index, 1);
	}
	hasAbility(ability: Ability): boolean {
		const index = this.abilities.indexOf(ability, 0);
		return (index > -1) ? true : false;
	}
	getAbility(abilityName: string){
		for(const ability of this.abilities) {
			if(ability.getName() == abilityName) {
				return ability;
			}
		}
		return null;
	}
	getSrc(): string {
		return this.src;
	}
	
}
export {Card}