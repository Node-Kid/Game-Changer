import { GameEvent } from "../core/GameEvent";

class EventPromise {
	event: GameEvent;
	callback?: Function;
	constructor(event: GameEvent){
		this.event = event;
	}
	whenResolved(callback: Function) {
		if(!this.event.getResolved())
			this.callback = callback
	}
	resolve() {
		if(this.callback)
			this.callback(this.event);
	}
}
export {EventPromise}