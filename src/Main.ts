import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testCardUrl, () => {
	GameRoot.Renderer.drawBackground();
	GameRoot.Renderer.drawCard(GameRoot, new TestCard(), 0, 250);
});
