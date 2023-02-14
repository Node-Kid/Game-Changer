import { EventPayload } from "../events/EventPayload";
import { EventPromise } from "../events/EventPromise";

class GameEvent {
	name: string;
	resolved: boolean;
	data?: EventPayload;
	child?: GameEvent;
	promise?: EventPromise;
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
	isResolved(): boolean {
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
	
	resolve(): boolean{
		if((this.getChild() && this.getChild()?.isResolved()) || !this.getChild()) {
			this.resolved = true;
		}
		if(this.resolved)
			this.promise?.resolve();
		return this.resolved;
	}
	setEventPromise(promise: EventPromise) {
		this.promise = promise;
	}
	getEventPromise(): EventPromise | undefined {
		return this.promise;
	}
}

export {GameEvent}