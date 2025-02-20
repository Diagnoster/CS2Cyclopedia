import { Rarity } from "./rarity";

export class Item {
    constructor(
        public id: string,
        public name: string,
        public rarity: Rarity,
        public paint_index: number,
        public image: string
    ) { }
}
