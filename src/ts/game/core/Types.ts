import { Ability } from "./Ability";
import { Modifier } from "./Modifier";
enum NullTypes {
    NULL_URL = "NULL_URL",
    NULL_MODIFIER = "NULL_MODIFIER"
}
type Listener = Ability | Modifier
export {Listener, NullTypes}