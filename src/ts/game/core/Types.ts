import { Ability } from "./Ability";
import { Card } from "./Card";
import { Modifier } from "./Modifier";

export type Listener = Ability | Modifier
export type PlayableObject = Card | Modifier