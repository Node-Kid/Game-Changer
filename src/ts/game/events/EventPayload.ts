import {PlayableObject} from "../core/Types"
class EventPayload {
	card?: PlayableObject;
	player?: string; //need to change this later
	target?: PlayableObject
	extraData?: object;
	constructor(card?: PlayableObject, player?: string, target?: PlayableObject, extraData?: object) {
		this.card = card;
		this.player = player;
		this.target = target;
		this.extraData = extraData;
	} 
	getRawData(): object {
		return {card: this.card, player: this.player, target: this.target, data: this.extraData}
	}
}
export {EventPayload}