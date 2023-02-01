import { Root } from "../../Root";
import { RenderConstants } from "../../utils/Constants";
import { Card } from "../core/Card";
import { GameEvent } from "../core/GameEvent";
import { Modifier } from "../core/Modifier";
import { Player } from "../core/Player";
import { System } from "../core/System";
import { NullTypes } from "../core/Types";
import { CardPlayedEvent } from "../events/CardPlayedEvent";
import { EventPayload } from "../events/EventPayload";
import { ModifierPlayedEvent } from "../events/ModifierPlayedEvent";

class BoardManager extends System {
	cards: Card[];
	constructor() {
		super("BoardManager");
		this.cards = [];
	}
	addCardToBoard(root: Root, card: Card, player: Player) {//change player to actual player object soon
		const payload = new EventPayload();
		payload.card = card;
		payload.player = player;
		const event = new CardPlayedEvent(payload);
		root.EventSystem.fireEvent(event, (event: GameEvent) => {
			if(event.getResolved()) {
				this.cards.push(card);
				root.EventSystem.addListener(card);
				this.drawBoard(root);
			}
		});
	}
	addModifierToBoard(root: Root, modifier: Modifier, target: Card, abilityName: string, player: Player) {
		const payLoad = new EventPayload();
		payLoad.card = modifier;
		payLoad.player = player;
		payLoad.target = target;
		const event = new ModifierPlayedEvent(payLoad);
		root.EventSystem.fireEvent(event, (event: GameEvent) => {
			if(event.getResolved()) {
				target.getAbility(abilityName)?.setXAbility(modifier);
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
			if(card.getModifiers()) {
				let modifierIterator = card.getModifiers.length + 1;
				for (const modifier of [...card.getModifiers()]	.reverse()) { // spread to create copy
					if(modifier.getSrc() != NullTypes.NULL_URL && modifier.getName() != NullTypes.NULL_MODIFIER) {
						root.Renderer.drawModifier(root, modifier, xPosition + (modifierIterator * RenderConstants.CARD_WIDTH / 4), 250 + RenderConstants.CARD_HEIGHT / 4);
						modifier.setPos(positionFactor +xPosition + (modifierIterator * RenderConstants.CARD_WIDTH / 4), 250 + RenderConstants.CARD_HEIGHT / 4, modifierIterator);
					}
					modifierIterator--;
				}
			}
			root.Renderer.drawCard(root, card, xPosition, 250);
			card.setPos(xPosition + positionFactor, 250, 0);
			cardIterator++;
		}
		root.Renderer.translate((positionFactor * (this.cards.length - 1) / 2), 0);
	}
}
export {BoardManager}