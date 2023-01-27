import { Ability } from "./Ability";
import { GameEvent } from "./GameEvent";
import { Modifier } from "./Modifier";

class Card {
	name: string;
	cost: number;
	id: number;
	abilities: Ability[]
	src: string;
	pos: {X: number, Y: number};
	constructor(name: string, cost: number, id: number, abilities: Ability[], src: string) {
		this.name = name;
		this.cost = cost;
		this.id = id;
		this.abilities = abilities;
		this.src = src;
		this.pos = {
			X: 0,
			Y: 0
		};
	}
	getCost(): number {
		return this.cost;
	}
	setCost(newCost: number) {
		this.cost = newCost;
	}
	setPos(x: number, y: number) {
		this.pos.X = x;
		this.pos.Y = y;
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
	getPos(): {} {
		return this.pos;
	}
	onDeath(event: GameEvent) {
		//blank for overiding
	} 

	onEnterBattlefield(event: GameEvent) {
		//blank for overiding
	}

	trigger(event: GameEvent) {
		//blank for overiding
	}
	
	destroy(event: GameEvent) {
		//blank for overiding
	}
}
export {Card}