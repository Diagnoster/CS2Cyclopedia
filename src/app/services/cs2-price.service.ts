import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cs2PriceService {

  private url = 'https://raw.githubusercontent.com/ByMykel/counter-strike-price-tracker/main/static/prices/latest.json';
  private prices$: Observable<any>;

  constructor(private http: HttpClient) {
    this.prices$ = this.http.get<any>(this.url).pipe(
      shareReplay(1) // cacheia os dados em memória
    );
  }

  getPrices(): Observable<any> {
    return this.prices$;
  }

  getItemPrice(itemName: string): Observable<any | null> {
    return this.getPrices().pipe(
      map(prices => prices[itemName] || null)
    );
  }
  
  getPricesMap(): Observable<{ [key: string]: any }> {
    return this.getPrices().pipe(
      map(pricesArray => {
        if (!pricesArray || !Array.isArray(pricesArray)) return {};

        return pricesArray.reduce((acc, item) => {
          acc[item.name] = item;
          return acc;
        }, {} as { [key: string]: any });
      })
    );
  }
}
