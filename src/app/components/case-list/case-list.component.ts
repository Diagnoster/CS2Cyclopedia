import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Container } from '../../models/container';
import { Router } from '@angular/router';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { trigger, transition, style, animate } from '@angular/animations';
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { MatDividerModule } from '@angular/material/divider';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";

@Component({
  selector: 'app-case-list',
  imports: [
    MatCardModule,
    BaseFilterComponent,
    MatDividerModule
],
  templateUrl: './case-list.component.html',
  styleUrl: './case-list.component.css',
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class CaseListComponent implements OnInit {
  case: Container[] = [];
  allCases: Container[] = [];

  constructor(private csApiService: Cs2ApiService, private router: Router, private cs2Helper: Cs2HelperService) {}

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Cases');
    this.csApiService.getAllCases().subscribe((data: any) => {
      this.allCases = data;
      this.case = [...this.allCases];
    });  
  }

  goToDetails(container: Container): void {
    this.router.navigate(['/case-details'], { state: { container } }).then(() => {
      console.log('Navigation complete');
    }).catch(err => {
      console.error('Navigation error', err);
    });
  }
}
