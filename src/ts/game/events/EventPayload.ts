import { PlayableObject } from "../core/Types";

class EventPayload {
	card?: PlayableObject;
	player?: string; //need to change this later
	target?: PlayableObject
	extraData?: object;
	constructor() {}
	getRawData(): object {
		return {card: this.card, player: this.player, target: this.target, data: this.extraData}
	}
}
export {EventPayload}