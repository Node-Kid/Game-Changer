import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
import { Draw } from "./ts/game/modifiers/Draw";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
const testCard = new TestCard();
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testCardUrl, () => {
	GameRoot.Renderer.drawBackground();
	GameRoot.Renderer.drawCard(GameRoot, testCard, 0, 250);
	testCard.getAbility("OnDeath")?.setXAbility(new Draw());
	testCard.getAbility("OnDeath")?.trigger();
	console.log(testCard);
});
