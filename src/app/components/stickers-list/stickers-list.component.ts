import { Component, HostListener, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Sticker } from '../../models/sticker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-stickers-list',
  imports: [
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './stickers-list.component.html',
  styleUrl: './stickers-list.component.css',
  animations: [
    trigger('fadeInDownBig', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class StickersListComponent implements OnInit {
  stickers: Sticker[] = [];
  allStickers: Sticker[] = [];
  loadedCount: number = 50;

  constructor(private cs2Service: Cs2ApiService, private cs2Helper: Cs2HelperService) {}

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Stickers');
    this.cs2Service.getAllStickers().subscribe((data: any) => {
      this.allStickers = data;
      this.loadMoreStickers(); // loading 50 stickers
    });
  }

  loadMoreStickers(): void {
    const nextBatch = this.allStickers.slice(this.stickers.length, this.stickers.length + this.loadedCount);
    this.stickers = [...this.stickers, ...nextBatch];
  }

  onScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;
  
    if (scrollPercentage > 90) {
      this.loadMoreStickers();
    }
  }

}
