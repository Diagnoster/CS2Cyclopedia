import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { Agent } from '../../models/agent';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";
import { trigger, transition, style, animate } from '@angular/animations';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-agent-details',
  imports: [
    MatCardModule,
    NewlineToBrPipe,
    MatDividerModule,
    MatTooltipModule,
    PriceComponent
],
  templateUrl: './agent-details.component.html',
  styleUrl: './agent-details.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Start <- to ->
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class AgentDetailsComponent implements OnInit {
  agent!: Agent;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras.state?.['agent']) {
      this.agent = navigation.extras.state['agent'];
    } else {
      this.router.navigate(['/agents']);
    }
  }

  ngOnInit(): void {
    if (!this.agent) {
      console.error('Agent is not available!');
    }
  }
}
