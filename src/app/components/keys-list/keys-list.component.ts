import { Component, OnInit } from '@angular/core';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Key } from '../../models/key';
import { BaseFilterComponent } from '../base-filter/base-filter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";
import { MatTooltipModule } from '@angular/material/tooltip';
import { Router } from '@angular/router';

@Component({
  selector: 'app-keys-list',
  imports: [
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    BaseFilterComponent,
    NewlineToBrPipe,
    MatTooltipModule
],
  templateUrl: './keys-list.component.html',
  styleUrl: './keys-list.component.css',
  animations: [
    trigger('fadeInDownBig', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100px)' }),
        animate('800ms cubic-bezier(0.23, 1, 0.32, 1)', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class KeysListComponent implements OnInit {
  keys: Key[] = [];
  allKeys: Key[] = [];

  constructor(private cs2apiService: Cs2ApiService, private cs2Helper: Cs2HelperService, private router: Router) { }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName('Keys');
    this.getAgents();
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

  goToCases(): void {
    this.router.navigate([`/`]);
  }

}
