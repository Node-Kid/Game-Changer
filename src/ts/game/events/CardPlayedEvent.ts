import { GameEvent } from "../core/GameEvent";
import { EventPayload } from "./EventPayload";

class CardPlayedEvent extends GameEvent {
	constructor(data: EventPayload) {
		super("CardPlayed", data);
	}
}
export {CardPlayedEvent}