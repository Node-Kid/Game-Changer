import { Root } from "../../Root";
import { Card } from "../core/Card";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { System } from "../core/System";
import { CardPlayed } from "../events/CardPlayed";
import { EventPayload } from "../events/EventPayload";

class BoardManager extends System {
	cards: Card[];
	constructor() {
		super("BoardManager");
		this.cards = [];
	}
	addCardToBoard(root: Root, card: Card, player: string) {//change player to actual player object soon
		const payload = new EventPayload();
		payload.card = card;
		payload.player = player;
		const event = new CardPlayed(payload);
		root.EventSystem.fireEvent(event, (event: GameEvent) => {
			if(event.getResolved()) {
				this.cards.push(card);
				this.drawBoard(root);
			}
		});
	}
	drawBoard(root: Root) {
		root.Renderer.drawBackground();
		let cardIterator = 0;
		const positionFactor = (root.Renderer.getCanvas().width / 2) / (this.cards.length + 1);
		root.Renderer.translate(-(positionFactor * (this.cards.length - 1) / 2), 0);
		for (const card of this.cards) {
			let xPosition = cardIterator * positionFactor;
			root.Renderer.drawCard(root, card, xPosition, 250);
			cardIterator++;
		}
		root.Renderer.translate((positionFactor * (this.cards.length - 1) / 2), 0);
	}
	addModifierToBoard(root: Root, modifier: Modifier, player: string) {
		//TODO
	}
}
export {BoardManager}