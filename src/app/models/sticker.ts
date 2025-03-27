import { Rarity } from "./rarity";

export class Sticker {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public rarity: Rarity,
        public crates: Crates[],
        public tournament_event: string,
        public tournament_team: string,
        public type: string,
        public market_hash_name: string,
        public effect: string,
        public image: string
    ) { }
}
