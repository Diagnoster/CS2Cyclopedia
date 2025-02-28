import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Agent } from '../models/agent';

@Injectable({
  providedIn: 'root'
})
export class Cs2ApiService {

  URL_BASE = 'https://bymykel.github.io/CSGO-API/api/pt-BR/';

  constructor(private http: HttpClient) { }

  getAllCases(): Observable<any> {
    const url = `${this.URL_BASE}/crates.json`;
    return this.http.get<any>(url);
  }

  getAllAgents(): Observable<Agent> {
    const url = `${this.URL_BASE}/agents.json`;
    return this.http.get<any>(url);
  }
}
