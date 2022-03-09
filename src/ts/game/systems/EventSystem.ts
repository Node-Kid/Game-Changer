import { System } from "../core/System";
import type { Listener } from "../core/Types";

class EventSystem extends System {
	listeners: Listener[]
	constructor() {
		super("EventSystem");
		this.listeners = [];
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
	fireEvent() {

	}

}
export {EventSystem}