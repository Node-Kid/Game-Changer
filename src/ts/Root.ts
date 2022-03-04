import { EntitySystem } from "./game/systems/EntitySystem";
import { ImageCache } from "./renderer/ImageCache";
import { Renderer } from "./renderer/renderer";
class Root {
	EntitySystem: EntitySystem;
	ImageCache: ImageCache;
	Renderer: Renderer;
	constructor() {
		this.EntitySystem = new EntitySystem();
		this.ImageCache = new ImageCache();
		this.Renderer = new Renderer();
	}
}
export {Root}