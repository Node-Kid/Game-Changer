
import { Ability } from "../core/Ability";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";

class OnDeath extends Ability {
	constructor() {
		super("OnDeath");
		this.x = new Modifier(NullTypes.NULL_MODIFIER, NullTypes.NULL_URL);
	}
	getDisplayText(): string {
		return "When this lifeform dies, do (X)";
	}
	trigger(data: GameEvent) {
		if(this.x?.getName() != NullTypes.NULL_MODIFIER) {
			this.x?.trigger(data);
		}
	}
}
export {OnDeath}