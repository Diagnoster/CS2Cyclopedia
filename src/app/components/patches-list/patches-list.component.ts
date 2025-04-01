import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Patch } from '../../models/patch';

@Component({
  selector: 'app-patches-list',
  imports: [],
  templateUrl: './patches-list.component.html',
  styleUrl: './patches-list.component.css'
})
export class PatchesListComponent implements OnInit {
  patches: Patch[] = [];
  allPatches: Patch[] = [];


  constructor(private cs2apiService: Cs2ApiService) { }

  ngOnInit(): void {
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
