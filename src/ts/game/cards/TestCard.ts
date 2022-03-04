import { Card } from "../core/card";

class TestCard extends Card {
	constructor() {
		super("Test Card", 1, 0x0001, [], "/images/cards/test_card.jpg");
	}
}
export {TestCard};