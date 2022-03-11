import { BoardManager } from "./game/systems/BoardManager";
import { EntitySystem } from "./game/systems/EntitySystem";
import { EventSystem } from "./game/systems/EventSystem";
import { ImageCache } from "./renderer/ImageCache";
import { Renderer } from "./renderer/Renderer";
class Root {
	EntitySystem: EntitySystem;
	ImageCache: ImageCache;
	Renderer: Renderer;
	EventSystem: EventSystem;
	BoardManager: BoardManager;
	constructor() {
		this.EntitySystem = new EntitySystem();
		this.ImageCache = new ImageCache();
		this.Renderer = new Renderer();
		this.EventSystem = new EventSystem();
		this.BoardManager = new BoardManager();
	}
}
export {Root}