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
  @Input() prices!: any;
  @Input() marketHashName!: Price;

  constructor(private cs2Price: Cs2PriceService) { }

  ngOnInit(): void { }

  getItemPrice(graffiti: Price): number | null {
    const hash = graffiti.market_hash_name;
    if (this.prices && this.prices[hash] && this.prices[hash].steam) {
      return this.prices[hash].steam.last_24h;
    }
    return null;
  }
}
