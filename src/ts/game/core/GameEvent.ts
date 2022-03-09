import { Root } from "../../Root";
import { EventPayload } from "../events/EventPayload";

class GameEvent {
	name: string;
	resolved: boolean;
	data?: EventPayload;
	child?: GameEvent;
	constructor(name: string, data?: EventPayload) {
		this.name = name;
		this.resolved = false;
		this.data = data;
	}
	setData(data: EventPayload) {
		this.data = data;
	}
	getName(): string {
		return this.name;
	}
	getResolved(): boolean {
		return this.resolved;
	}
	getData(): EventPayload | undefined {
		return this.data;
	}
	setChild(event: GameEvent) {
		this.child = event;
	}
	getChild(): GameEvent | undefined{
		return this.child;
	}
	//@ts-ignore --hehe
	resolve(root?: Root): boolean{
		if(this.getChild() && this.getChild()?.getResolved()) {
			this.resolved = true;
		} else {
			return this,this.resolved = true;
		}
		return this.resolved;
	}

}

export {GameEvent}