import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Graffiti } from '../../models/graffiti';

@Component({
  selector: 'app-graffiti-list',
  imports: [],
  templateUrl: './graffiti-list.component.html',
  styleUrl: './graffiti-list.component.css'
})
export class GraffitiListComponent implements OnInit {
  graffiti: Graffiti[] = [];
  allGraffiti: Graffiti[] = [];


  constructor(private cs2ApiService: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Graffits');
    this.getAllGraffits();
  }

  getAllGraffits() {
    this.cs2ApiService.getAllGraffits().subscribe((data: any) => {

    });
  }

}
