import { BaseClass } from "./base-class";
import { Collection } from "./collection";
import { Crate } from "./crate";
import { Rarity } from "./rarity";

export class Skin {
    constructor(
        public id: string,
        public name: string,
        public description: string,
        public weapon: Weapon,
        public category: BaseClass,
        public pattern: BaseClass,
        public min_float: number,
        public max_float: number,
        public rarity: Rarity,
        public stattrak: boolean,
        public souvenir: boolean,
        public paint_index: string,
        public wears: BaseClass [],
        public collections: Collection [],
        public crates: Crate [],
        public team: BaseClass,
        public legacy_model: boolean,
        public image: string
    ) { }
}
