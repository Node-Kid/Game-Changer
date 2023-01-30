import { Ability } from "./Ability";
import { GameEvent } from "./GameEvent";
import { Modifier } from "./Modifier";
import { PlayableObject } from "./PlayableObject";

class Card extends PlayableObject{
	id: number;
	abilities: Ability[]
	constructor(name: string, cost: number, id: number, abilities: Ability[], src: string) {
		super(name, src, {X: 0, Y: 0, ZIndex: 0}, cost);
		this.id = id;
		this.abilities = abilities;
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