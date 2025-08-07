import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Skin } from '../../models/skin';
import { MatDividerModule } from '@angular/material/divider';
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BaseClass } from '../../models/base-class';

@Component({
  selector: 'app-skins',
  imports: [
    MatDividerModule,
    BaseFilterComponent,
    MatIconModule,
    MatTooltipModule
  ],
  templateUrl: './skins.component.html',
  styleUrl: './skins.component.css'
})
export class SkinsComponent implements OnInit {
  skins: Skin [] = [];
  allSkins: Skin [] = [];

  constructor(private cs2ApiService: Cs2ApiService) {}

  ngOnInit(): void {
    this.getAllSkins();
  }

  getAllSkins() {
    this.cs2ApiService.getAllSkins().subscribe((data: any) => {
      this.allSkins = data;
      this.skins = [...this.allSkins];
      console.log(this.skins);
    });
  }

  getWearsNames(wears?: BaseClass[]): string {
    return wears?.map(w => w.name).join('\n') ?? '';
  }

}
