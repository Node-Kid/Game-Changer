import { Ability } from "../core/Ability";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";
import { CardDiedEvent } from "../events/CardDiedEvent";

class OnDeath extends Ability {
	constructor() {
		super("OnDeath");
		this.x = new Modifier(NullTypes.NULL_MODIFIER, NullTypes.NULL_URL, 0);
	}
	getDisplayText(): string {
		return "When this lifeform dies, do (X)";
	}
	trigger(data: GameEvent) {
		if(data instanceof CardDiedEvent) {
			if(this.x?.getName() != NullTypes.NULL_MODIFIER) {
				this.x?.trigger(data);
			}
		}
	}
}
export {OnDeath}