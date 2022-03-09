import { Card } from "../core/Card";
import url from "../../../../images/cards/test_card.jpg";
import { OnDeath } from "../abilities/OnDeath";
class TestCard extends Card {
	constructor() {
		super("Test Card", 1, 0x0001, [new OnDeath()], url);
	}
	onDeath() {
		this.getAbility("OnDeath")?.trigger();
	}
	destroy() {
		this.onDeath();
	}
}
export {TestCard};