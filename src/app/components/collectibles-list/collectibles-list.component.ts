import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Collectible } from '../../models/collectible';

@Component({
  selector: 'app-collectibles-list',
  imports: [],
  templateUrl: './collectibles-list.component.html',
  styleUrl: './collectibles-list.component.css'
})
export class CollectiblesListComponent implements OnInit {

  collectibles: Collectible[] = [];
  allCollectibles: Collectible[] = [];

  constructor(private cs2apiService: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Collectibles');
    this.getAllCollectibles();
    console.log(this.allCollectibles);
  }

  getAllCollectibles() {
    this.cs2apiService.getAllCollectibles().subscribe((data: any) => {
      this.allCollectibles = data;
      this.collectibles = this.allCollectibles;
    });
  }

}
