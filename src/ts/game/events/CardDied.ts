import { GameEvent } from "../core/GameEvent";
import { EventPayload } from "./EventPayload";

class CardDied extends GameEvent {
	constructor(eventPayload: EventPayload) {
		super("CardDied", eventPayload);
	}
}
export {CardDied}