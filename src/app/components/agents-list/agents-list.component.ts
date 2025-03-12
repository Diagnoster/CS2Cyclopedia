import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Agent } from '../../models/agent';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-agents-list',
  imports: [
    MatCardModule
  ],
  templateUrl: './agents-list.component.html',
  styleUrl: './agents-list.component.css'
})
export class AgentsListComponent implements OnInit {
  agents: Agent[] = [];
  
  constructor(private cs2ApiService: Cs2ApiService) {}

  ngOnInit(): void {
    this.getAgents();
    console.log(this.agents);
  }

  getAgents() {
    this.cs2ApiService.getAllAgents().subscribe((data: any) => {
      this.agents = data.flat();
      console.log(this.agents);
    });
  }
}
