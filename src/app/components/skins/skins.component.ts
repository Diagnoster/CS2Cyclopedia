import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Skin } from '../../models/skin';
import { MatDividerModule } from '@angular/material/divider';
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BaseClass } from '../../models/base-class';
import { Router } from '@angular/router';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-skins',
  imports: [
    MatDividerModule,
    BaseFilterComponent,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './skins.component.html',
  styleUrl: './skins.component.css',
  animations: [
    trigger('fadeInDownBig', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class SkinsComponent implements OnInit {
  skins: Skin[] = [];
  allSkins: Skin[] = [];
  loadedCount: number = 50;
  searchTerm: string = '';
  isSearching: boolean = false; // lazy loading
  searchTimeout: any;
  isLoading: boolean = true;

  constructor(private cs2ApiService: Cs2ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllSkins();
  }

  loadMoreSkins(): void {
    if (this.searchTerm == '') {
      const nextBatch = this.allSkins.slice(this.skins.length, this.skins.length + this.loadedCount);
      this.skins = [...this.skins, ...nextBatch];
    }
  }

  onScroll(): void {
    const scrollPosition = window.pageYOffset + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollPercentage = (scrollPosition / documentHeight) * 100;

    if (scrollPercentage > 90) {
      this.loadMoreSkins();
    }
  }

  getAllSkins() {
    this.cs2ApiService.getAllSkins().subscribe((data: any) => {
      this.allSkins = data;
      this.loadMoreSkins(); // loading 50 skins
      this.isLoading = false;
    });
  }

  getWearsNames(wears?: BaseClass[]): string {
    return wears?.map(w => w.name).join('\n') ?? '';
  }

  goToDetails(skin: Skin): void {
    this.router.navigate(['/agent-details'], { state: { skin } }).then(() => {
    }).catch(err => console.error('Navigation error', err));
  }
}
