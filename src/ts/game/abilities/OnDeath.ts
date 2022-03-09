import { Ability } from "../core/Ability";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";

class OnDeath extends Ability {
	constructor() {
		super("OnDeath");
		this.x = new Modifier("NULL_MODIFIER");
	}
	getDisplayText(): string {
		return "When this lifeform dies, do (X)";
	}
	trigger(data: GameEvent) {
		if(this.x?.getName() != "NULL_MODIFIER") {
			this.x?.trigger(data);
		}
	}
}
export {OnDeath}