import { Crate } from "./crate";

export class Key {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public market_hash_name: string,
        public crates: Crate[],
        public image: string    
    ) { }
}
