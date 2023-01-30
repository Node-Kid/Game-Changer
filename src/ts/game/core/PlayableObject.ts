import { Pos2D } from "./Types";

class PlayableObject {
    name: string
    src: string
    pos: Pos2D
    cost: number
    constructor(name: string, src: string, pos: Pos2D, cost: number) {
        this.name = name;
        this.src = src;
        this.pos = pos;
        this.cost = cost;
    }
    getName(): string {
        return this.name;
    }
    getSrc(): string {
        return this.src;
    }
    getPos(): Pos2D {
        return this.pos;
    } 
    setPos(x: number, y: number, zIndex?: number) {
        this.pos.X = x;
        this.pos.Y = y;
        this.pos.ZIndex = zIndex || 0;
    }
    getCost(): number {
        return this.cost;
    }
    setCost(newCost: number) {
        this.cost = newCost;
    }
}
export {PlayableObject}