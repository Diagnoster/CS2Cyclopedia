import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';

@Component({
  selector: 'app-keys-list',
  imports: [],
  templateUrl: './keys-list.component.html',
  styleUrl: './keys-list.component.css'
})
export class KeysListComponent implements OnInit {

  constructor(private cs2apiService: Cs2ApiService) { }

  ngOnInit(): void {
  }

  
}
