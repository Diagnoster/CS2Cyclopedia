import { Component, OnInit } from '@angular/core';
import { WeaponCase } from '../../models/weapon-case';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-souvenir-case',
  imports: [
    MatTableModule,
    CommonModule
  ],
  templateUrl: './souvenir-case.component.html',
  styleUrl: './souvenir-case.component.css'
})
export class SouvenirCaseComponent implements OnInit {

  colorMap: { [key: string]: string } = {
    'Grau de consumidor': '#A9A9A9', // Cinza escuro
    'Grau industrial': '#87CEEB', // Azul claro
    'Grau de especificação militar': '#4169E1', // Azul escuro
    'Restrito': '#800080', // Roxo
    'Classificado': '#FF1493', // Rosa
    'Encoberto': '#FF0000' // Vermelho
  };
  
  weapon_case!: WeaponCase[];

  constructor(private cs2Helper: Cs2HelperService) { }

  displayedColumns: string[] = ['raridade', 'cor', 'chances', 'probabilidade'];
  dataSource = this.weapon_case;

  ngOnInit(): void {
    this.dataSource = this.cs2Helper.getSouvenirCases();
  }
}
