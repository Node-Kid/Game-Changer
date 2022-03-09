import { Ability } from "../core/Ability";
import { Modifier } from "../core/Modifier";

class OnDeath extends Ability {
	x: Modifier
	constructor() {
		super("OnDeath");
		this.x = new Modifier("NULL_MODIFIER");
	}
	getDisplayText(): string {
		return "When this lifeform dies, do (X)";
	}
	trigger() {
		if(this.x.getName() != "NULL_MODIFIER") {
			this.x.trigger();
		}
	}
}
export {OnDeath}