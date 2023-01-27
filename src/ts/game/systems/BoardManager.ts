import { Root } from "../../Root";
import { Card } from "../core/Card";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { System } from "../core/System";
import { CardPlayedEvent } from "../events/CardPlayedEvent";
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
		const event = new CardPlayedEvent(payload);
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
		const positionFactor = (root.Renderer.getCanvas().width) / (this.cards.length + 1);
		root.Renderer.translate(-(positionFactor * (this.cards.length - 1) / 2), 0);
		for (const card of this.cards) {
			let xPosition = cardIterator * positionFactor;
			root.Renderer.drawCard(root, card, xPosition, 250);
			card.setPos(xPosition + positionFactor, 250);
			if(card.getModifiers()) {
				for (const modifier of card.getModifiers()) {
					//TODO: Draw modifiers offset from card and add function in renderer
				}
			}
			cardIterator++;
		}
		root.Renderer.translate((positionFactor * (this.cards.length - 1) / 2), 0);
	}
	addModifierToBoard(root: Root, modifier: Modifier, target: Card, abilityName: string, player: string) {
		const payLoad = new EventPayload();
		payLoad.card = modifier;
		payLoad.player = player;
		payLoad.target = target;
		const event = new CardPlayedEvent(payLoad);
		root.EventSystem.fireEvent(event, (event: GameEvent) => {
			if(event.getResolved()) {
				target.getAbility(abilityName)?.setXAbility(modifier);
				this.drawBoard(root);
			}
		});
	}
}
export {BoardManager}