import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WeaponCase } from '../models/weapon-case';

@Injectable({
  providedIn: 'root'
})
export class Cs2HelperService {
  private caseNameSource = new BehaviorSubject<string>('Cases');
  currentCaseName = this.caseNameSource.asObservable();

  private caseImageSource = new BehaviorSubject<string | null>(null);
  currentCaseImage = this.caseImageSource.asObservable();

  constructor() { }

  changeCaseName(name: string) {
    this.caseNameSource.next(name);
  }

  changeCaseImage(image: string | null) {
    this.caseImageSource.next(image);
  }

  getWeaponCases(): WeaponCase[] {
    return [
      {raridade: 'Grau de especificação militar', cor: 'Azul escuro', chances: 79.92, probabilidade: '4 em 5'},
      {raridade: 'Restrito', cor: 'Roxo', chances: 15.98, probabilidade: '1 em 6'},
      {raridade: 'Classificado', cor: 'Rosa', chances: 3.2, probabilidade: '1 em 31'},
      {raridade: 'Encoberto', cor: 'Vermelho', chances: 0.64, probabilidade: '1 em 156'},
      {raridade: 'Extremamente Raro', cor: 'Ouro', chances: 0.26, probabilidade: '1 em 385'}
    ];
  }

  getSouvenirCases(): WeaponCase[] {
    return [
      { raridade: 'Grau de consumidor', cor: 'Cinza', chances: 80, probabilidade: '4 em 5' },
      { raridade: 'Grau industrial', cor: 'Azul', chances: 16, probabilidade: '1 em 6' },
      { raridade: 'Grau de especificação militar', cor: 'Azul escuro', chances: 3.2, probabilidade: '1 em 31' },
      { raridade: 'Restrito', cor: 'Roxo', chances: 0.64, probabilidade: '1 em 156' },
      { raridade: 'Classificado', cor: 'Rosa', chances: 0.128, probabilidade: '1 em 781' },
      { raridade: 'Encoberto', cor: 'Vermelho', chances: 0.0256, probabilidade: '1 em 3906' }
    ];
  }  

  getStickersCases(): WeaponCase[] {
    return [
      {raridade: 'Alto grau', cor: 'Azul escuro', chances: 80, probabilidade: '4 em 5'},
      {raridade: 'Notável', cor: 'Roxo', chances: 16, probabilidade: '1 em 6'},
      {raridade: 'Exótico', cor: 'Rosa', chances: 3.2, probabilidade: '1 em 31'},
      {raridade: 'Extraordinário', cor: 'Vermelho', chances: 0.641, probabilidade: '1 em 156'},
    ];
  }
}