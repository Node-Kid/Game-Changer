import { Ability } from "./Ability";
import { Card } from "./Card";
import { Modifier } from "./Modifier";

enum NullTypes {
    NULL_URL = "NULL_URL",
    NULL_MODIFIER = "NULL_MODIFIER"
}
type Listener = Ability | Modifier
type PlayableObject = Modifier | Card;
export {Listener, PlayableObject, NullTypes}