import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";

class Draw extends Modifier {
	constructor(){
		super("Draw", NullTypes.NULL_URL);
	}
	trigger(data: GameEvent) {
		console.log(data);
	}
	setXModifier() {
		//blank for overiding
	}
	getXModifier(): undefined {return undefined}
}
export {Draw}