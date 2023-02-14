import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
import testModifierUrl from "../images/modifiers/test_modifier.jpg";
import { CardDiedEvent } from "./ts/game/events/CardDiedEvent";
import { EventPayload } from "./ts/game/events/EventPayload";
import { TestModifier } from "./ts/game/modifiers/TestModifier";
import { GameEvent } from "./ts/game/core/GameEvent";
import { Player } from "./ts/game/core/Player";
import { v4 as uuidv4 } from "uuid";
import { DrawEvent } from "./ts/game/events/DrawEvent";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
const testCard1 = new TestCard();
const testModifier = new TestModifier();
const adminPlayer = new Player("Admin", uuidv4());
const nerdPlayer = new Player("Nerd", uuidv4());
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testModifierUrl, () => {
	GameRoot.ImageCache.cacheImage(testCardUrl, () => {
		GameRoot.Renderer.drawBackground();
		GameRoot.BoardManager.addCardToBoard(GameRoot, testCard1, adminPlayer);
		GameRoot.EventSystem.addListener(testCard1);
		GameRoot.BoardManager.addModifierToBoard(GameRoot, testModifier, testCard1, "OnDraw", adminPlayer);
		const payload = new EventPayload();
		GameRoot.EventSystem.fireEvent(new DrawEvent(payload), (event: GameEvent) => {
			if(event.isResolved()) {
				adminPlayer.addCardToHand(new TestCard());
			}
		});
	});
});
