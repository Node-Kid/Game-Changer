import { Card } from "../core/Card";
import  url from "../../../../images/cards/test_card.jpg";
import { OnDeath } from "../abilities/OnDeathAbility";
import { GameEvent } from "../core/GameEvent";
import { CardDiedEvent } from "../events/CardDiedEvent";
import { OnDraw } from "../abilities/OnDrawAbility";
import { DrawEvent } from "../events/DrawEvent";
class TestCard extends Card {
	constructor() {
		super("Test Card", 1, 0x0001, [new OnDeath(), new OnDraw()], url);
	}
	onDeath(data: GameEvent) {
		this.getAbility("OnDeath")?.trigger(data);
	}
	onDraw(data: GameEvent) {
		this.getAbility("OnDraw")?.trigger(data);
	}
	destroy(data: GameEvent) {
		this.onDeath(data);
	}
	trigger(event: GameEvent) {
		if(event instanceof CardDiedEvent && event.getData().target == this) {
			this.destroy(event);
		} else if(event instanceof DrawEvent) {
			this.onDraw(event);
		}
	}
}
export {TestCard};