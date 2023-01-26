import { Ability } from "./Ability";
import { GameEvent } from "./GameEvent";
import { Modifier } from "./Modifier";

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
	setCost(newCost: number) {
		this.cost = newCost;
	}
	addAbility(newAbility: Ability) {
		this.abilities.push(newAbility);
	}
	removeAbility(abilityName: string) {
		for(const ability of this.abilities) {
			if(ability.getName() == abilityName) {
				this.abilities.splice(this.abilities.indexOf(ability), 1);
			}
		}
	}
	hasAbility(abilityName: string): boolean {
		for(const ability of this.abilities) {
			if(ability.getName() == abilityName) {
				return true;
			}
		}
		return false;
	}
	getAbility(abilityName: string){
		for(const ability of this.abilities) {
			if(ability.getName() == abilityName) {
				return ability;
			}
		}
		return null;
	}
	getModifiers(): (Modifier | undefined)[]  {
		let modifiers: (Modifier | undefined)[] = []
		for(const ability of this.abilities) {
			if(ability.getXAbility()) {
				modifiers.push(ability.getXAbility());
			}
		}
		return modifiers;
	}
	getAbilities(): Ability[] {
		return this.abilities;
	}
	getSrc(): string {
		return this.src;
	}
	onDeath(event: GameEvent) {}

	onEnterBattlefield(event: GameEvent) {}

	trigger(event: GameEvent) {}
	
	destroy(event: GameEvent) {}
}
export {Card}