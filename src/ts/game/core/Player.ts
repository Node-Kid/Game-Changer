import { Card } from "./Card";

class Player {
    name: string
    uuid: string;
    health: number;
    hand: Array<Card>
    constructor(name: string, uuid: string) {
        this.name = name;
        this.uuid = uuid;
        this.health = 50;
        this.hand = [];
    }
    getName(): string {
        return this.name;
    }
    getUuid(): string {
        return this.uuid;
    }
    getHealth(): number {
        return this.health;
    }
    subtractHealth(healthPoints: number) {
        this.health -= healthPoints;
    }
    addHealth(healthPoints: number) {
        this.health += healthPoints;
    }
    addCardToHand(card: Card) {
        this.hand.push(card);
    }
    removeCardFromHand(card: Card) {
        this.hand.forEach((currentCard, index) => {
            if(card == currentCard)
                this.hand.splice(index, 1);
        });
    }
    findCardInHand(cardName: string): Card | undefined {
        this.hand.forEach((card, index) => {
            if(card.getName() == cardName)
                return card;
        });
        return undefined;
    }
}
export {Player}