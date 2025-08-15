import { Component, Input, OnInit } from '@angular/core';
import { Price } from '../../models/price';
import { CommonModule } from '@angular/common';
import { HashNameSkin } from '../../models/hash-name-skin';

@Component({
  selector: 'app-price-wears',
  imports: [
    CommonModule
  ],
  templateUrl: './price-wears.component.html',
  styleUrl: './price-wears.component.css'
})
export class PriceWearsComponent implements OnInit {
  @Input() prices!: any;
  @Input() marketHashName: HashNameSkin [] = [];

  constructor() { }

  ngOnInit(): void {
   }

  getItemPrice(skin: HashNameSkin): number | null {
    const hash = skin.market_hash_name;
    if (this.prices && this.prices[hash] && this.prices[hash].steam) {
      const steamData = this.prices[hash].steam;
      return steamData.last_24h ?? steamData.last_30d ?? steamData.last_ever ?? null;
    }
    return null;
  }


}
