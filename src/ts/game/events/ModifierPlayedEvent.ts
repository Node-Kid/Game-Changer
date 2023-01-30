import { GameEvent } from "../core/GameEvent";
import { EventPayload } from "./EventPayload";

class ModifierPlayedEvent extends GameEvent {
    constructor(data: EventPayload) {
        super("ModifierPlayed", data);
    }
}
export {ModifierPlayedEvent}