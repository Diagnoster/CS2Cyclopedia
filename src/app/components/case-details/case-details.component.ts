import { Component, OnInit } from '@angular/core';
import { Container } from '../../models/container';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-case-details',
  imports: [CommonModule],
  templateUrl: './case-details.component.html',
  styleUrl: './case-details.component.css'
})
export class CaseDetailsComponent implements OnInit {

  container: Container | undefined;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.container = navigation.extras.state['container'];
    }
  }
  ngOnInit(): void {
    console.log(this.container);
  }
}
