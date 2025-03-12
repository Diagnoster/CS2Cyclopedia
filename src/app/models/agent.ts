import { BaseClass } from "./base-class";
import { Rarity } from "./rarity";

export class Agent {
    constructor(
        public id: string,
        public name: string,
        public rarity: Rarity,
        public collections: Rarity,
        public team: BaseClass,
        public market_hash_name: string,
        public image: string,
        public model_player: string,
        public description: string
    ) { }
}
