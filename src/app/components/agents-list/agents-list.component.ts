import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Agent } from '../../models/agent';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Router } from '@angular/router';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-agents-list',
  imports: [
    MatCardModule,
    MatDividerModule
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

  constructor(private cs2ApiService: Cs2ApiService, private router: Router, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Agents');
    this.getAgents();
    console.log(this.agents);
  }

  getAgents() {
    this.cs2ApiService.getAllAgents().subscribe((data: any) => {
      this.agents = data.flat().map((agent: any) => {

        const cleanedName = agent.name.replace(/[\\()]/g, "").trim(); // Remove \, (, and )
        const [name, faction] = cleanedName.split(' | '); // Separate name and faction

        return {
          ...agent,
          name: name,
          faction: faction,
        };
      });
      console.log(this.agents);
    });
  }

  goToDetails(agent: Agent): void {
    this.router.navigate(['/agent-details'], { state: { agent } }).then(() => {
      console.log('Navigation complete');
    }).catch(err => {
      console.error('Navigation error', err);
    });
  }


}
