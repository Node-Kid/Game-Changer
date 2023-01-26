import { Modifier } from "../core/Modifier";
import { NullTypes } from "../core/Types";

class Draw extends Modifier {
	constructor(){
		super("Draw", NullTypes.NULL_URL);
	}
	trigger() {
		console.log('Draw Card!!');
	}
	setXModifier() {}
	getXModifier(): undefined {return undefined}
}
export {Draw}