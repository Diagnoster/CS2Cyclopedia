import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Agent } from '../models/agent';

@Injectable({
  providedIn: 'root'
})
export class Cs2ApiService {

  URL_BASE = 'https://raw.githubusercontent.com/ByMykel/CSGO-API/main/public/api/en';

  constructor(private http: HttpClient) { }

  getAllSkins(): Observable<any> {
    const url = `${this.URL_BASE}/skins.json`;
    return this.http.get<any>(url);
  }

  findSkinByName(name: string): Observable<any> {
    return this.getAllSkins().pipe(
      map(skins => skins.find((s: any) => s.name === name))
    );
  }

  getAllCases(): Observable<any> {
    const url = `${this.URL_BASE}/crates.json`;
    return this.http.get<any>(url);
  }

  getAllAgents(): Observable<any> {
    const url = `${this.URL_BASE}/agents.json`;
    return this.http.get<any>(url);
  }

  getAllStickers(): Observable<any> {
    const url = `${this.URL_BASE}/stickers.json`;
    return this.http.get<any>(url);
  }

  getAllKeys(): Observable<any> {
    const url = `${this.URL_BASE}/keys.json`;
    return this.http.get<any>(url);
  }

  getAllPatches(): Observable<any> {
    const url = `${this.URL_BASE}/patches.json`;
    return this.http.get<any>(url);
  }

  getAllCollectibles(): Observable<any> {
    const url = `${this.URL_BASE}/collectibles.json`;
    return this.http.get<any>(url);
  }

  getAllGraffits(): Observable<any> {
    const url = `${this.URL_BASE}/graffiti.json`;
    return this.http.get<any>(url);
  }
}
