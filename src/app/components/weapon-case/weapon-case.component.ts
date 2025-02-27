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
  @Input() caseType: 'weapon' | 'souvenir' = 'weapon';

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
        'Grau de especificação militar': '#4169E1', // Azul escuro
        'Restrito': '#800080', // Roxo
        'Classificado': '#FF1493', // Rosa
        'Encoberto': '#FF0000', // Vermelho
        'Extremamente Raro': '#FFD700' // Ouro
      };
      this.weapon_case = this.cs2Helper.getWeaponCases();
    } else {
      this.colorMap = {
        'Grau de consumidor': '#A9A9A9', // Cinza escuro
        'Grau industrial': '#87CEEB', // Azul claro
        'Grau de especificação militar': '#4169E1', // Azul escuro
        'Restrito': '#800080', // Roxo
        'Classificado': '#FF1493', // Rosa
        'Encoberto': '#FF0000' // Vermelho
      };
      this.weapon_case = this.cs2Helper.getSouvenirCases();
    }
    this.dataSource = this.weapon_case;
  }
}
