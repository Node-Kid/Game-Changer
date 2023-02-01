import { GameEvent } from "../core/GameEvent";
import { EventPayload } from "./EventPayload";

class DrawEvent extends GameEvent {
    constructor(data: EventPayload) {
        super("Draw", data);
    }
}
export {DrawEvent}