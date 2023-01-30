import { Ability } from "../core/Ability";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";
import { CardPlayedEvent } from "../events/CardPlayedEvent";

class OnEnter extends Ability {
	constructor() {
		super("OnEnter");
		this.x = new Modifier(NullTypes.NULL_MODIFIER, NullTypes.NULL_URL, 0);
	}
	getDisplayText(): string {
		return "When a lifeform enters the battlefield, do (X)";
	}
	trigger(data: GameEvent) {
		if(data instanceof CardPlayedEvent) {
			if(this.x?.getName() != NullTypes.NULL_MODIFIER) {
				this.x?.trigger(data);
			}
		}
	}
}
export {OnEnter}