import { Component, OnDestroy, OnInit } from '@angular/core';
import { Container } from '../../models/container';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Cs2HelperService } from '../../services/cs2-helper.service';

@Component({
  selector: 'app-case-details',
  imports: [
    CommonModule,
    MatTooltipModule
  ],
  templateUrl: './case-details.component.html',
  styleUrl: './case-details.component.css'
})
export class CaseDetailsComponent implements OnInit, OnDestroy {

  container: Container;

  constructor(private router: Router, private cs2Helper: Cs2HelperService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.container = navigation.extras.state['container'];
    } else {
      this.container = {} as Container;
    }
  }

  ngOnInit(): void {
    console.log(this.container);
    this.cs2Helper.changeCaseName(this.container.name);
    this.cs2Helper.changeCaseImage(this.container.image);
  }

  ngOnDestroy(): void {
    this.cs2Helper.changeCaseName('Cases');
    this.cs2Helper.changeCaseImage(null);
  }

  
}
