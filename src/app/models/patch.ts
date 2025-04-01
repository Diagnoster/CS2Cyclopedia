import { Rarity } from "./rarity";

export class Patch {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public rarity: Rarity,
        public market_hash_name: string,
        public image: string
    ) { }
}
