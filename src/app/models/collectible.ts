import { Rarity } from "./rarity";

export class Collectible {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public rarity: Rarity,
        public type: string,
        public genuine: boolean,
        public market_hash_name: string,
        public image: string
    ) { }
}
