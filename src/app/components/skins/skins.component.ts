import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Skin } from '../../models/skin';

@Component({
  selector: 'app-skins',
  imports: [],
  templateUrl: './skins.component.html',
  styleUrl: './skins.component.css'
})
export class SkinsComponent implements OnInit {
  skins: Skin [] = [];

  constructor(private cs2ApiService: Cs2ApiService) {}

  ngOnInit(): void {
    this.getAllSkins();
  }

  getAllSkins() {
    this.cs2ApiService.getAllSkins().subscribe((data: any) => {
      this.skins = data;
      console.log(this.skins);
    });
  }

}
