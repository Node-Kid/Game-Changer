import { Card } from "../core/Card"

class EventPayload {
	card?: Card;
	player?: string; //need to change this later
	target?: Card
	extraData?: object;
	constructor() {}
	getRawData(): object {
		return {card: this.card, player: this.player, target: this.target, data: this.extraData}
	}
}
export {EventPayload}