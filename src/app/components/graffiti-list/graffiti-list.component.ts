import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Graffiti } from '../../models/graffiti';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-graffiti-list',
  imports: [],
  templateUrl: './graffiti-list.component.html',
  styleUrl: './graffiti-list.component.css',
  animations: [
    trigger('fadeInDown', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-20px)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class GraffitiListComponent implements OnInit {
  graffiti: Graffiti[] = [];
  allGraffiti: Graffiti[] = [];


  constructor(private cs2ApiService: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Graffits');
    this.getAllGraffits();
    console.log(this.allGraffiti);
  }

  getAllGraffits() {
    this.cs2ApiService.getAllGraffits().subscribe((data: any) => {
      this.allGraffiti = data;
      this.graffiti = [...this.allGraffiti];
    });
  }

}
