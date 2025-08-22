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
      {raridade: 'Military Spec Grade', cor: 'Dark Blue', chances: 79.92, probabilidade: '4 in 5'},
      {raridade: 'Restricted', cor: 'Purple', chances: 15.98, probabilidade: '1 in 6'},
      {raridade: 'Classified', cor: 'Pink', chances: 3.2, probabilidade: '1 in 31'},
      {raridade: 'Covert', cor: 'Red', chances: 0.64, probabilidade: '1 in 156'},
      {raridade: 'Extremely Rare', cor: 'Gold', chances: 0.26, probabilidade: '1 in 385'}
    ];
  }

  getSouvenirCases(): WeaponCase[] {
    return [
      { raridade: 'Consumer Grade', cor: 'Gray', chances: 80, probabilidade: '4 in 5' },
      { raridade: 'Industrial Grade', cor: 'Blue', chances: 16, probabilidade: '1 in 6' },
      { raridade: 'Military Spec Grade', cor: 'Dark Blue', chances: 3.2, probabilidade: '1 in 31' },
      { raridade: 'Restricted', cor: 'Purple', chances: 0.64, probabilidade: '1 in 156' },
      { raridade: 'Classified', cor: 'Pink', chances: 0.128, probabilidade: '1 in 781' },
      { raridade: 'Covert', cor: 'Red', chances: 0.0256, probabilidade: '1 in 3906' }
    ];
  }  

  getStickersCases(): WeaponCase[] {
    return [
      {raridade: 'High Grade', cor: 'Dark Blue', chances: 80, probabilidade: '4 in 5'},
      {raridade: 'Remarkable', cor: 'Purple', chances: 16, probabilidade: '1 in 6'},
      {raridade: 'Exotic', cor: 'Pink', chances: 3.2, probabilidade: '1 in 31'},
      {raridade: 'Extraordinary', cor: 'Red', chances: 0.641, probabilidade: '1 in 156'},
    ];
  }
}
