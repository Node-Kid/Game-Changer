import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
import testModiferUrl from "../images/modifiers/test_modifier.jpg";
import { CardDiedEvent } from "./ts/game/events/CardDiedEvent";
import { EventPayload } from "./ts/game/events/EventPayload";
import { TestModifier } from "./ts/game/modifiers/TestModifier";
import { GameEvent } from "./ts/game/core/GameEvent";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
const testCard1 = new TestCard();
const testModifier = new TestModifier();
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testModiferUrl, () => {
	GameRoot.ImageCache.cacheImage(testCardUrl, () => {
		GameRoot.Renderer.drawBackground();
		GameRoot.BoardManager.addCardToBoard(GameRoot, testCard1, "Admin");
		GameRoot.EventSystem.addListener(testCard1);
		GameRoot.BoardManager.addModifierToBoard(GameRoot, testModifier, testCard1, "OnDeath", "Admin");
		const payload = new EventPayload();
		payload.player = "Nerd";
		payload.target = testCard1;
		GameRoot.EventSystem.fireEvent(new CardDiedEvent(payload), (event: GameEvent) => {
			console.log(event);
		})
	});
});
