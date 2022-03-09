import { Modifier } from "../core/Modifier";

class Draw extends Modifier {
	constructor(){
		super("Draw");
	}
	trigger() {
		console.log('Draw Card!!');
	}
	setXModifier() {}
	getXModifier(): undefined {return undefined}
}
export {Draw}