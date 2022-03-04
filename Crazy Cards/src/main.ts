import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/root";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();
GameRoot.ImageCache.cacheImage("/images/cards/test_card.jpg");
GameRoot.Renderer.setCanvas(canvas);
GameRoot.Renderer.drawCard(GameRoot, new TestCard(), 0, 0);