import { BaseClass } from "./base-class";
import { Collection } from "./collection";
import { Rarity } from "./rarity";

export class Agent {
    constructor(
        public id: string,
        public name: string,
        public rarity: Rarity,
        public collections: Collection [],
        public team: BaseClass,
        public market_hash_name: string,
        public image: string,
        public model_player: string,
        public description: string,
        public faction: string
    ) { }
}
