import { Card } from "../core/Card";
import  url from "../../../../images/cards/test_card.jpg";
import { OnDeath } from "../abilities/OnDeathAbility";
import { GameEvent } from "../core/GameEvent";
import { CardDiedEvent } from "../events/CardDiedEvent";
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
	trigger(event: GameEvent) {
		if(event instanceof CardDiedEvent && event.getData().target instanceof TestCard) {
			this.destroy(event);
		}
	}
}
export {TestCard};