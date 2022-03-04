import { System } from "../game/core/System";

class ImageCache extends System {
	cachedImages: HTMLImageElement[];
	constructor() {
		super("ImageCache");
		this.cachedImages = [];
	}
	cacheImage(imageSrc: string, callback: Function) {
		const image = new Image();
		image.setAttribute("src", imageSrc);
		image.onload = () => {
			this.cachedImages.push(image);
			callback();
		}
	}
	getImage(imageSrc: string): HTMLImageElement | null {
		for(const image of this.cachedImages) {
			if(image.getAttribute("src") == imageSrc) {
				return image;
			}
		}
		return null;
	}
}
export {ImageCache};