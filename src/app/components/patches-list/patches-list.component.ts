import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Patch } from '../../models/patch';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";
import { MatDividerModule } from '@angular/material/divider';
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { Cs2HelperService } from '../../services/cs2-helper.service';

@Component({
  selector: 'app-patches-list',
  imports: [
    NewlineToBrPipe,
    MatDividerModule,
    BaseFilterComponent
  ],
  templateUrl: './patches-list.component.html',
  styleUrl: './patches-list.component.css',
    animations: [
      trigger('fadeInDownBig', [
        transition(':enter', [
          style({ opacity: 0, transform: 'translateY(-100px)' }),
          animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
      ])
    ]
})
export class PatchesListComponent implements OnInit {
  patches: Patch[] = [];
  allPatches: Patch[] = [];

  constructor(private cs2apiService: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Patches');
    this.getAllPatches();
    console.log(this.allPatches);
  }

  getAllPatches() {
    this.cs2apiService.getAllPatches().subscribe((data: any) => {
      this.allPatches = data;
      this.patches = this.allPatches;
    });
  }
}
