import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import url from "../../../../images/modifiers/test_modifier.jpg";
class TestModifier extends Modifier {
    constructor(){
		super("TestModifier", url, 1);
	}
	trigger(data: GameEvent) {
		console.log("Test Modifier Triggered!");
	}
	setXModifier() {
		//blank as this card does not have a modifier slot
	}
	getXModifier(): undefined {return undefined}
}
export {TestModifier}