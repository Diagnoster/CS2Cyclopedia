import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Agent } from '../../models/agent';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";

@Component({
  selector: 'app-agent-details',
  imports: [
    MatCardModule,
    NewlineToBrPipe
],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.css'
})
export class AgentDetailsComponent implements OnInit {
  agent: Agent;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.agent = navigation.extras.state['agent'];
    } else {
      this.agent = {} as Agent;
    }
  }

  ngOnInit(): void {
    console.log(this.agent);
    console.log(this.agent.description);
  }
}
