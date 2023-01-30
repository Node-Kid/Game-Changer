import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";

class Draw extends Modifier {
	constructor(){
		super("Draw", NullTypes.NULL_URL, 1);
	}
	trigger(data: GameEvent) {
		//do something in the future
	}
	setXModifier() {
		//blank as this card does not have a modifier slot
	}
	getXModifier(): undefined {return undefined}
}
export {Draw}