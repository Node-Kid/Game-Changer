import { Card } from "../core/card";
import url from "../../../../images/cards/test_card.jpg";
class TestCard extends Card {
	constructor() {
		super("Test Card", 1, 0x0001, [], url);
	}
}
export {TestCard};