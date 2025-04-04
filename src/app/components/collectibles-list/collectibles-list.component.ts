import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Collectible } from '../../models/collectible';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { MatDividerModule } from '@angular/material/divider';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-collectibles-list',
  imports: [
    NewlineToBrPipe,
    BaseFilterComponent,
    MatDividerModule
  ],
  templateUrl: './collectibles-list.component.html',
  styleUrl: './collectibles-list.component.css',
  animations: [
    trigger('fadeInDownBig', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CollectiblesListComponent implements OnInit {

  collectibles: Collectible[] = [];
  allCollectibles: Collectible[] = [];

  constructor(private cs2apiService: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Collectibles');
    this.getAllCollectibles();
  }

  getAllCollectibles() {
    this.cs2apiService.getAllCollectibles().subscribe((data: any) => {
      this.allCollectibles = data;
      this.collectibles = this.allCollectibles;
    });
  }

}
