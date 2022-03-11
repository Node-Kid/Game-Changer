import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
const testCard = new TestCard();
const secondCard = new TestCard();
GameRoot.Renderer.setCanvas(canvas);
GameRoot.ImageCache.cacheImage(testCardUrl, () => {
	GameRoot.Renderer.drawBackground();
	GameRoot.BoardManager.addCardToBoard(GameRoot, testCard, "Admin");
	GameRoot.BoardManager.addCardToBoard(GameRoot, secondCard, "Admin");
	GameRoot.BoardManager.addCardToBoard(GameRoot, new TestCard(), "Admin");
});
