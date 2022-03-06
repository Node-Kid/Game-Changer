import { Card } from "../core/Card";
import { System } from "../core/System";

class EntitySystem extends System {
	cardList: Card[];
	constructor() {
		super("EntitySystem");
		this.cardList = [];
	}
	addCardToField(card: Card): void {
		this.cardList.push(card);
	}
	removeCardFromField(card: Card): void {
		const index = this.cardList.indexOf(card, 0);
		if(index > -1) this.cardList.splice(index, 1);
	}
	removeAllCardsOfType(cardType: string): void {
		for(const currentCard of this.cardList) {
			if(typeof currentCard === cardType) {
				const index = this.cardList.indexOf(currentCard, 0);
				if(index > -1) this.cardList.splice(index, 1);
			}
		}
	}
	getAllCardsOfType(cardType: string): Card[] {
		let cards = [];
		for(const currentCard of this.cardList) {
			if(typeof currentCard === cardType) {
				cards.push(currentCard);
			}
		}
		return cards;
	}
	getCards(): Card[] {
		return this.cardList;
	}
}
export {EntitySystem}