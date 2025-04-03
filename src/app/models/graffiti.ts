import { Crate } from "./crate";
import { Rarity } from "./rarity";

export class Graffiti {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public rarity: Rarity,
        public crates: Crate[],
        public market_hash_name: string,
        public image: string
    ) { }
}
