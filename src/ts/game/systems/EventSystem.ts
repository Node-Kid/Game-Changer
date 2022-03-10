import { GameEvent } from "../core/GameEvent";
import { System } from "../core/System";
import type { Listener } from "../core/Types";
import { EventPromise } from "../events/EventPromise";

class EventSystem extends System {
	listeners: Listener[]
	eventStack: GameEvent[]
	constructor() {
		super("EventSystem");
		this.listeners = [];
		this.eventStack = [];
	}
	addListener(eventListener: Listener) {
		this.listeners.push(eventListener);
	}
	getListener(name: string): Listener | undefined{
		for(const listener of this.listeners) {
			if(listener.getName() == name) {
				return listener;
			}
		}
		return undefined;
	}
	removeListener(listener: Listener) {
		const index = this.listeners.indexOf(listener, 0);
		if(index > -1) this.listeners.splice(index, 1);
	}
	fireEvent(event: GameEvent, callback?: Function) {
		const promise = new EventPromise(event);
		if(callback)
			promise.whenResolved(callback);
		event.setEventPromise(promise);
		this.eventStack[this.eventStack.length - 1]?.setChild(event);
		this.eventStack.push(event);
		for(const listener of this.listeners) {
			listener.trigger(event);
		}
		this.resolve();
	}
	resolve(): boolean {
		const event = this.eventStack.pop();
		let result = event && event.resolve();
		return !!result;
	}
	resolveAll() {
		for (const event of this.eventStack) {
			const resolved = event.resolve();
			if(!resolved) {
				event.getChild()?.resolve();
			}
		}
	}
}
export {EventSystem}