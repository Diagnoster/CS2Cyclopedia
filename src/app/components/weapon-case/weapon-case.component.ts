import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Cs2HelperService } from '../../services/cs2-helper.service';

export interface WeaponCase {
  raridade: string;
  cor: string;
  chances: number;
  probabilidade: string;
}

@Component({
  selector: 'app-weapon-case',
  imports: [
    MatTableModule,
    CommonModule
  ],
  templateUrl: './weapon-case.component.html',
  styleUrl: './weapon-case.component.css'
})

export class WeaponCaseComponent implements OnInit {
  @Input() caseType: 'weapon' | 'souvenir' | 'sticker' = 'weapon';

  colorMap: { [key: string]: string } = {};

  weapon_case!: WeaponCase[];

  displayedColumns: string[] = ['raridade', 'cor', 'chances', 'probabilidade'];
  dataSource = this.weapon_case;

  constructor(private cs2Helper: Cs2HelperService) {}

  ngOnInit(): void {
    this.setCaseData();
  }

setCaseData(): void {
  if (this.caseType === 'weapon') {
    this.colorMap = {
      'Military Spec Grade': '#4169E1', // Dark Blue
      'Restricted': '#800080', // Purple
      'Classified': '#FF1493', // Pink
      'Covert': '#FF0000', // Red
      'Extremely Rare': '#FFD700' // Gold
    };
    this.weapon_case = this.cs2Helper.getWeaponCases();
  } else if (this.caseType === 'souvenir') {
    this.colorMap = {
      'Consumer Grade': '#A9A9A9', // Dark Gray
      'Industrial Grade': '#87CEEB', // Light Blue
      'Military Spec Grade': '#4169E1', // Dark Blue
      'Restricted': '#800080', // Purple
      'Classified': '#FF1493', // Pink
      'Covert': '#FF0000' // Red
    };
    this.weapon_case = this.cs2Helper.getSouvenirCases();
  } else if (this.caseType === 'sticker') {
    this.colorMap = {
      'High Grade': '#4169E1', // Dark Blue
      'Remarkable': '#800080', // Purple
      'Exotic': '#FF1493', // Pink
      'Extraordinary': '#FF0000', // Red
    };
    this.weapon_case = this.cs2Helper.getStickersCases();
  }
  this.dataSource = this.weapon_case;
}

}
