import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

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
}