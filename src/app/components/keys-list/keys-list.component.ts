import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Key } from '../../models/key';

@Component({
  selector: 'app-keys-list',
  imports: [],
  templateUrl: './keys-list.component.html',
  styleUrl: './keys-list.component.css'
})
export class KeysListComponent implements OnInit {
  keys: Key[] = [];
  allKeys: Key[] = [];

  constructor(private cs2apiService: Cs2ApiService, private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Keys');
    this.getAgents();
    console.log(this.keys);
  }

  getAgents() {
    this.cs2apiService.getAllKeys().subscribe((data: any) => {
      this.allKeys = data.flat().map((key: any) => {
        const cleanedName = key.name.replace(/[\\()]/g, '').trim();
        const [name] = cleanedName.split(' | ');
        return { ...key, name };
      });
      this.keys = [...this.allKeys];
    });
  }


}
