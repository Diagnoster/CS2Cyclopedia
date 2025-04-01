import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';

@Component({
  selector: 'app-collectibles-list',
  imports: [],
  templateUrl: './collectibles-list.component.html',
  styleUrl: './collectibles-list.component.css'
})
export class CollectiblesListComponent implements OnInit {

  constructor(private cs2ApiService: Cs2ApiService, private cs2Helper: Cs2HelperService) {}

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Collectibles');
    this.getAllCollectibles();
  }

  getAllCollectibles() {

  }

}
