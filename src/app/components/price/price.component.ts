import { Component, Input, OnInit } from '@angular/core';
import { Cs2PriceService } from '../../services/cs2-price.service';
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
  prices: any = {};
  @Input() marketHashName!: Price;

  constructor(private cs2Price: Cs2PriceService) { }

  ngOnInit(): void {
    this.cs2Price.getPrices().subscribe(prices => {
      this.prices = prices;
    });
  }

  getPrice(graffiti: Price): number | null {
    if (this.prices && this.prices[graffiti.market_hash_name] && this.prices[graffiti.market_hash_name].steam) {
      return this.prices[graffiti.market_hash_name].steam.last_24h;
    }
    return null;
  }

}
