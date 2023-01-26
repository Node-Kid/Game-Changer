import { GameEvent } from "../core/GameEvent";
import { EventPayload } from "./EventPayload";

class CardDiedEvent extends GameEvent {
    constructor(data: EventPayload) {
        super("CardDied", data);
    }
}
export {CardDiedEvent}