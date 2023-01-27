import { TestCard } from "./ts/game/cards/TestCard";
import { Root } from "./ts/Root";
import testCardUrl from "../images/cards/test_card.jpg";
import { Draw } from "./ts/game/modifiers/DrawModifier";
import { CardDiedEvent } from "./ts/game/events/CardDiedEvent";
import { EventPayload } from "./ts/game/events/EventPayload";
const canvas = document.getElementById("gameView") as HTMLCanvasElement;
const GameRoot = new Root();