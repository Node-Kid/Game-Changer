import { Card } from "../game/core/Card";
import { Modifier } from "../game/core/Modifier";
import { System } from "../game/core/System";
import { Root } from "../Root";
import { RenderConstants } from "../utils/Constants";
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
		this.renderer = this.canvas.getContext("2d");
		this.intializeCanvas(this.canvas);
	}
	intializeCanvas(canvas: HTMLCanvasElement) {
		this.canvas = canvas;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
		this.renderer.translate(this.canvas.width / 2, this.canvas.height / 2);
		this.currentTranslation = [this.currentTranslation[0] + (this.canvas.width / 2), this.currentTranslation[1] + (this.canvas.height / 2)];

	}
	setCanvas(canvas: HTMLCanvasElement): void {
		this.canvas = canvas;
		this.renderer = this.canvas.getContext("2d");
		this.intializeCanvas(canvas);
	}
	getCanvas(): HTMLCanvasElement {
		return this.canvas;
	}
	drawCard(root: Root, card: Card, x: number, y: number) {
		const image = root.ImageCache.getImage(card.getSrc());
		this.translate(-RenderConstants.CARD_WIDTH / 2, -RenderConstants.CARD_HEIGHT / 2);
		this.renderer.drawImage(image, x, y, RenderConstants.CARD_WIDTH, RenderConstants.CARD_HEIGHT);
		this.translate(RenderConstants.CARD_WIDTH / 2, RenderConstants.CARD_HEIGHT / 2);
	}
	drawModifier(root: Root, modifier: Modifier, x: number, y: number) {
		const image = root.ImageCache.getImage(modifier.getSrc());
		this.translate(-RenderConstants.CARD_WIDTH / 2, -RenderConstants.CARD_HEIGHT / 2);
		this.renderer.drawImage(image, x, y, RenderConstants.CARD_WIDTH, RenderConstants.CARD_HEIGHT);
		this.translate(RenderConstants.CARD_WIDTH / 2, RenderConstants.CARD_HEIGHT / 2);
	}
	drawBackground() {
		this.renderer.fillStyle = RenderConstants.BACKGROUND_COLOR;
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