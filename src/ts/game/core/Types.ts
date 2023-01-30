import { Ability } from "./Ability";
import { Card } from "./Card";
import { Modifier } from "./Modifier";

enum NullTypes {
    NULL_URL = "NULL_URL",
    NULL_MODIFIER = "NULL_MODIFIER"
}
type Listener = Ability | Modifier | Card
type PlayableObject = Modifier | Card;
type Pos2D = {X: number, Y: number, ZIndex: number}
export {Listener, PlayableObject, NullTypes, Pos2D}