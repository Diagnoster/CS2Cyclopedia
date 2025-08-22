import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute, Router } from '@angular/router';
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
  prices: any = {};
  agentId!: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();

    if (navigation?.extras.state?.['agent']) {
      this.agent = navigation.extras.state['agent'];
      this.prices = navigation.extras.state['prices'];
    } else {
      this.router.navigate(['/agents']);
    }
  }

  ngOnInit(): void {
    this.agentId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.agent) {
      console.error('Agent is not available!');
    }
  }
}
