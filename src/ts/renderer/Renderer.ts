import { Card } from "../game/core/Card";
import { System } from "../game/core/System";
import { Root } from "../Root";
class Renderer extends System {
	renderer: CanvasRenderingContext2D;
	canvas: HTMLCanvasElement;
	currentTranslation: number[];
	constructor() {
		super("Renderer");
		this.canvas = document.createElement("canvas");
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.currentTranslation = [0, 0]
		this.renderer = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.intializeCanvas(this.canvas);
	}
	intializeCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.renderer.translate(this.canvas.width / 2, this.canvas.height / 2);
		this.currentTranslation = [this.currentTranslation[0] + this.canvas.width / 2, this.currentTranslation[1] + this.canvas.height / 2];
	}
	setCanvas(canvas: HTMLCanvasElement): void {
		this.canvas = canvas;
		this.renderer = this.canvas.getContext("2d") as CanvasRenderingContext2D;
		this.intializeCanvas(canvas);
	}
	getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}
	drawCard(root: Root, card: Card, x: number, y: number) {
		const image = root.ImageCache.getImage(card.getSrc()) as HTMLImageElement;
		this.renderer.translate(-72, -100);
		this.currentTranslation = [this.currentTranslation[0] + -72, this.currentTranslation[1] + -100];
		this.renderer.drawImage(image, x, y, 144, 200);
		this.renderer.translate(72, 100);
		this.currentTranslation = [this.currentTranslation[0] + 72, this.currentTranslation[1] + 100];
	}
	drawBackground() {
		this.renderer.fillStyle = "#E5E7E6";
		this.renderer.fillRect(-(this.canvas.width / 2), -(this.canvas.height / 2), this.canvas.width, this.canvas.height);
	}
	getTranslation(): number[] {
		return this.currentTranslation;
	}
	translate(x: number, y: number) {
		this.renderer.translate(x, y);
		this.currentTranslation = [this.currentTranslation[0] + x, this.currentTranslation[1] + y];
	}
	resetTranslation() {
		this.renderer.translate(-this.currentTranslation[0], -this.currentTranslation[1]);
	}
}
export {Renderer}