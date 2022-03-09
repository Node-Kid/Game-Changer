import { Ability } from "../core/Ability";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { CardPlayed } from "../events/CardPlayed";

class OnEnter extends Ability {
	constructor() {
		super("OnEnter");
		this.x = new Modifier("NULL_MODIFIER");
	}
	getDisplayText(): string {
		return "When a lifeform enters the battlefield, do (X)";
	}
	trigger(data: GameEvent) {
		if(data instanceof CardPlayed) {
			if(this.x?.getName() != "NULL_MODIFIER") {
				this.x?.trigger(data);
			}
		}
	}
}
export {OnEnter}