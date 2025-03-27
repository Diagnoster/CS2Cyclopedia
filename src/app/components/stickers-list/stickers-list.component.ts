import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';

@Component({
  selector: 'app-stickers-list',
  imports: [],
  templateUrl: './stickers-list.component.html',
  styleUrl: './stickers-list.component.css'
})
export class StickersListComponent implements OnInit {
  constructor(private cs2Service: Cs2ApiService, private cs2Helper: Cs2HelperService) {}

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Stickers');
    this.cs2Service.getAllStickers().subscribe((data: any) => {
      this.allStickers = data;
      this.sticker = [...this.allStickers];  
    });
  }
}
