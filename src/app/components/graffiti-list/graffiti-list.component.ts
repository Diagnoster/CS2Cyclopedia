import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Graffiti } from '../../models/graffiti';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Cs2PriceService } from '../../services/cs2-price.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-graffiti-list',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatProgressBarModule,
    CommonModule
  ],
  templateUrl: './graffiti-list.component.html',
  styleUrl: './graffiti-list.component.css',
  animations: [
    trigger('fadeInDownBig', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class GraffitiListComponent implements OnInit {
  graffiti: Graffiti[] = [];
  allGraffiti: Graffiti[] = [];
  loadedCount: number = 50;
  searchTerm: string = '';
  isSearching: boolean = false; // lazy loading
  searchTimeout: any;
  isLoading: boolean = true;
  prices: any = {};

  constructor(private cs2ApiService: Cs2ApiService, private cs2Helper: Cs2HelperService, private cs2Price: Cs2PriceService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Graffits');
    this.cs2ApiService.getAllGraffits().subscribe((data: any) => {
      this.allGraffiti = data;
      this.loadMoreGraffitis(); // loading 50 graffits
      this.isLoading = false;
    });

    this.cs2Price.getPrices().subscribe(prices => {
      this.prices = prices;
    });
  }

  loadMoreGraffitis(): void {
    if (this.searchTerm == '') {
      const nextBatch = this.allGraffiti.slice(this.graffiti.length, this.graffiti.length + this.loadedCount);
      this.graffiti = [...this.graffiti, ...nextBatch];
    }
  }

  onScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    if (scrollPercentage > 90) {
      this.loadMoreGraffitis();
    }
  }

  filterGraffits(): void {
    clearTimeout(this.searchTimeout);

    this.searchTimeout = setTimeout(() => {
      if (this.searchTerm.trim()) {
        this.isSearching = true;
        this.graffiti = this.allGraffiti.filter(graffiti =>
          graffiti.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
      } else {
        this.isSearching = false;
        this.graffiti = [];
        this.loadMoreGraffitis();
      }
    }, 500);
  }

  getPrice(graffiti: Graffiti): number | null {
    if (this.prices && this.prices[graffiti.market_hash_name] && this.prices[graffiti.market_hash_name].steam) {
      return this.prices[graffiti.market_hash_name].steam.last_24h;
    }
    return null;
  }

}
