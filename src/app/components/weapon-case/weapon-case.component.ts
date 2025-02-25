import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface WeaponCase {
  raridade: string;
  cor: string;
  chances: number;
  probabilidade: string;
}

const weapon_case: WeaponCase[] = [
  {raridade: 'Grau de especificação militar	', cor: 'Azul escuro', chances: 79.92, probabilidade: '4 em 5'},
  {raridade: 'Restrito', cor: 'Roxo', chances: 15.98, probabilidade: '1 em 6'},
  {raridade: 'Classificado', cor: 'Rosa', chances: 3.2, probabilidade: '1 em 31'},
  {raridade: 'Encoberto', cor: 'Vermelho', chances: 0.64, probabilidade: '1 em 156'},
  {raridade: 'Extremamente Raro', cor: 'Ouro', chances: 0.26, probabilidade: '1 em 385'},
];

@Component({
  selector: 'app-weapon-case',
  imports: [
    MatTableModule
  ],
  templateUrl: './weapon-case.component.html',
  styleUrl: './weapon-case.component.css'
})

export class WeaponCaseComponent {
  displayedColumns: string[] = ['raridade', 'cor', 'chances', 'probabilidade'];
  dataSource = weapon_case;

}
