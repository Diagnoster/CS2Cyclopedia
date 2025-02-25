import { Item } from "./item";

export class Container {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public type: string,
        public first_sale_date: string,
        public contains: Item[],
        public contains_rare: Item[],
        public market_hash_name: string,
        public rental: boolean,
        public image: string,
        public model_player: string
    ) { }
}
