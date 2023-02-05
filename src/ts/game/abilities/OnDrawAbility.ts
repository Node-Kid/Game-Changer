import { Ability } from "../core/Ability";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";
import { DrawEvent } from "../events/DrawEvent";

class OnDraw extends Ability {
	constructor() {
		super("OnDraw");
		this.x = new Modifier(NullTypes.NULL_MODIFIER, NullTypes.NULL_URL, 0);
	}
	getDisplayText(): string {
		return "When a card is drawn, do (X)";
	}
	trigger(data: GameEvent) {
		if(data instanceof DrawEvent) {
			if(this.x?.getName() != NullTypes.NULL_MODIFIER) {
				this.x?.trigger(data);
			}
		}
	}
}
export {OnDraw}