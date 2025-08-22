import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Cs2PriceService {
  private url = 'https://raw.githubusercontent.com/ByMykel/counter-strike-price-tracker/main/static/prices/latest.json';

  private prices$: Observable<any> | null = null;

  constructor(private http: HttpClient) { }

  getPrices(): Observable<any> {
    if (this.prices$) {
      console.log('Usando cache em memória');
      return this.prices$;
    }

    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

    if (isBrowser) {
      const cached = localStorage.getItem('cs2-prices');

      if (cached) {
        console.log('Usando cache localStorage');
        this.prices$ = of(JSON.parse(cached)).pipe(
          shareReplay({ bufferSize: 1, refCount: true })
        );
        return this.prices$;
      }
    }

    console.log('Request API');
    this.prices$ = this.http.get<any>(this.url).pipe(
      tap(data => {
        if (isBrowser) {
          localStorage.setItem('cs2-prices', JSON.stringify(data));
        }
      }),
      shareReplay({ bufferSize: 1, refCount: true })
    );

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
