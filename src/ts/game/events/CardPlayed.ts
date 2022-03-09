import { GameEvent } from "../core/GameEvent";
import { EventPayload } from "./EventPayload";

class CardPlayed extends GameEvent {
	constructor(data: EventPayload) {
		super("CardPlayed", data);
	}
}
export {CardPlayed}