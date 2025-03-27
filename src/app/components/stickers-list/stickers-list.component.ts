import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Sticker } from '../../models/sticker';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-stickers-list',
  imports: [
    MatCardModule,
    MatDividerModule
  ],
  templateUrl: './stickers-list.component.html',
  styleUrl: './stickers-list.component.css'
})
export class StickersListComponent implements OnInit {
  stickers: Sticker[] = [];
  allStickers: Sticker[] = [];

  constructor(private cs2Service: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Stickers');
    this.cs2Service.getAllStickers().subscribe((data: any) => {
      this.allStickers = data;
      this.stickers = [...this.allStickers];
    });
  }
}
