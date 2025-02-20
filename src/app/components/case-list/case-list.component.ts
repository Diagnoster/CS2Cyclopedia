import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Cs2ApiService } from '../../services/cs2-api.service';

@Component({
  selector: 'app-case-list',
  imports: [
    MatCardModule
  ],
  templateUrl: './case-list.component.html',
  styleUrl: './case-list.component.css'
})
export class CaseListComponent implements OnInit {

  container: any;

  constructor(private csApiService: Cs2ApiService) {

  }

  ngOnInit(): void {
    this.csApiService.getAllCases().subscribe( (data: any) => {
      console.log(data);
    });  
  }
  
}
