import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Price } from '../../models/price';

@Component({
  selector: 'app-price',
  imports: [
    CommonModule
  ],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent implements OnInit {
  @Input() prices!: any;
  @Input() marketHashName!: Price;

  constructor() { }

  ngOnInit(): void { }

  getItemPrice(item: Price): number | null {
    const hash = item.market_hash_name;

    if (this.prices && this.prices[hash] && this.prices[hash].steam) {
      const steamData = this.prices[hash].steam;
      return steamData.last_24h ?? steamData.last_30d ?? null;
    }

    return null;
  }

}
