import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Container } from '../../models/container';
import { Router } from '@angular/router';
import { Cs2HelperService } from '../../services/cs2-helper.service';

@Component({
  selector: 'app-case-list',
  imports: [
    MatCardModule
  ],
  templateUrl: './case-list.component.html',
  styleUrl: './case-list.component.css'
})
export class CaseListComponent implements OnInit {

  case: Container[] = [];

  constructor(private csApiService: Cs2ApiService, private router: Router, private cs2Helper: Cs2HelperService) {

  }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Cases');
    this.csApiService.getAllCases().subscribe( (data: any) => {
      this.case = data;
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
