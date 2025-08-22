import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Agent } from '../../models/agent';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { Cs2PriceService } from '../../services/cs2-price.service';
import { CommonModule } from '@angular/common';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-agents-list',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BaseFilterComponent,
    CommonModule,
    PriceComponent
],
  templateUrl: './agents-list.component.html',
  styleUrl: './agents-list.component.css',
  animations: [
    trigger('fadeInDownBig', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class AgentsListComponent implements OnInit {
  agents: Agent[] = [];
  allAgents: Agent[] = [];
  prices: any = {};

  constructor(private cs2ApiService: Cs2ApiService, private router: Router, private cs2Helper: Cs2HelperService, private cs2Price: Cs2PriceService) {}

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Agents');
    this.getAgents();
    this.cs2Price.getPrices().subscribe((prices: any) => {
      this.prices = prices;
    });
  } 

  getAgents() {
    this.cs2ApiService.getAllAgents().subscribe((data: any) => {
      this.allAgents = data.flat().map((agent: any) => {
        const cleanedName = agent.name.replace(/[\\()]/g, '').trim();
        const [name, faction] = cleanedName.split(' | ');
        return { ...agent, name, faction };
      });
      this.agents = [...this.allAgents];
    });
  }

  goToDetails(agent: Agent): void {
    this.router.navigate(['/agent-details', agent.id], { state: { agent, prices: this.prices } }).then(() => {
    }).catch(err => console.error('Navigation error', err));
  }
}
