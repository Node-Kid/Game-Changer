import { Card } from "../core/Card";
import url from "../../../../images/cards/test_card.jpg";
import { OnDeath } from "../abilities/OnDeathAbility";
import { GameEvent } from "../core/GameEvent";
class TestCard extends Card {
	constructor() {
		super("Test Card", 1, 0x0001, [new OnDeath()], url);
	}
	onDeath(data: GameEvent) {
		this.getAbility("OnDeath")?.trigger(data);
	}
	destroy(data: GameEvent) {
		this.onDeath(data);
	}
}
export {TestCard};