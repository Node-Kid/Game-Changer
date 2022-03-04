import { Card } from "../game/core/card";
import { System } from "../game/core/System";
import { Root } from "../root";
class Renderer extends System{
	renderer: CanvasRenderingContext2D;
	canvas: HTMLCanvasElement;
	constructor() {
		super("Renderer");
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight; 
		this.renderer = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.renderer.translate(window.innerWidth / 2, window.innerHeight / 2);
		window.addEventListener("resize", () => this.renderer.translate(window.innerWidth / 2, window.innerHeight / 2));
	}
	setCanvas(canvas: HTMLCanvasElement): void {
		this.canvas = canvas;
		this.renderer = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.renderer.translate(window.innerWidth / 2, window.innerHeight / 2);
		window.addEventListener("resize", () => this.renderer.translate(window.innerWidth / 2, window.innerHeight / 2));
	}
	getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}
	drawCard(root: Root, card: Card, x: number, y: number) {
		const image = root.ImageCache.getImage(card.getSrc()) as HTMLImageElement;
		console.log(image);
		this.renderer.drawImage(image, x, y);
	}
}
export {Renderer}