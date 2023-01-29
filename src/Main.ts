import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
import testModiferUrl from "../images/modifiers/test_modifier.jpg";
import { CardDiedEvent } from "./ts/game/events/CardDiedEvent";
import { EventPayload } from "./ts/game/events/EventPayload";
import { TestModifier } from "./ts/game/modifiers/TestModifier";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
const testCard1 = new TestCard();
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testModiferUrl, () => {
	GameRoot.ImageCache.cacheImage(testCardUrl, () => {
		GameRoot.Renderer.drawBackground();
		GameRoot.BoardManager.addCardToBoard(GameRoot, testCard1, "Admin");
		GameRoot.BoardManager.addModifierToBoard(GameRoot, new TestModifier(), testCard1, "OnDeath", "Admin");
		const payload = new EventPayload();
		payload.player = "Nerd";
		payload.target = testCard1;
		testCard1.destroy(new CardDiedEvent(payload))
	});
});
