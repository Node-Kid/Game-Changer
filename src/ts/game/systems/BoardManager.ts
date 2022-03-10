import { Root } from "../../Root";
import { GameEvent } from "../core/GameEvent";
import { System } from "../core/System";
import { PlayableObject } from "../core/Types";
import { CardPlayed } from "../events/CardPlayed";
import { EventPayload } from "../events/EventPayload";

class BoardManager extends System {
	playableObjects: PlayableObject[];
	constructor() {
		super("BoardManager");
		this.playableObjects = [];
	}
	addCardToBoard(root: Root, card: PlayableObject, player: string) {//change player to actual player object soon
		const payload = new EventPayload();
		payload.card = card;
		payload.player = player;
		const event = new CardPlayed(payload);
		root.EventSystem.fireEvent(event, (event: GameEvent) => {
			if(event.getResolved()) {
				this.playableObjects.push(card);
				this.drawBoard(root);
			}
		});
	}
	drawBoard(root: Root) {
		let cardIterator = 0;
		for (const card of this.playableObjects) {
			cardIterator++;
		}
	}
}
export {BoardManager}