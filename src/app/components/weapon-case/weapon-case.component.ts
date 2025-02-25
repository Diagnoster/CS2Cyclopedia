import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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

  colorMap: { [key: string]: string } = {
    'Grau de especificação militar': '#4169E1', // Azul escuro
    'Restrito': '#800080', // Roxo
    'Classificado': '#FF1493', // Rosa
    'Encoberto': '#FF0000', // Vermelho
    'Extremamente Raro': '#FFD700' // Ouro
  };
  weapon_case!: WeaponCase[];

  constructor(private cs2Helper: Cs2HelperService) { }

  displayedColumns: string[] = ['raridade', 'cor', 'chances', 'probabilidade'];
  dataSource = this.weapon_case;

  ngOnInit(): void {
    this.dataSource = this.cs2Helper.getWeaponCases();
  }

}
