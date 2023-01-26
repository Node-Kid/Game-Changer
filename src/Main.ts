import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
import { Draw } from "./ts/game/modifiers/DrawModifier";
import { GameEvent } from "./ts/game/core/GameEvent";
import { CardDiedEvent } from "./ts/game/events/CardDiedEvent";
import { EventPayload } from "./ts/game/events/EventPayload";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
const testCard = new TestCard();
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testCardUrl, () => {
	GameRoot.Renderer.drawBackground();
	GameRoot.BoardManager.addCardToBoard(GameRoot, testCard, "Admin");
	testCard.getAbility("OnDeath")?.setXAbility(new Draw());
	const payload = new EventPayload();
	payload.player = "Nerd";
	payload.target = testCard;
	testCard.destroy(new CardDiedEvent(payload))
});
