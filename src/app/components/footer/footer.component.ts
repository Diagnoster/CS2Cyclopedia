import { Component } from '@angular/core';
import { WeaponCaseComponent } from '../weapon-case/weapon-case.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { animate, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-footer',
  imports: [
    MatDialogModule,
    CommonModule,
    MatTableModule,
    WeaponCaseComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  animations: [
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(70%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class FooterComponent {
  isTableVisible = false;

  constructor(private dialog: MatDialog) {}

  showTable() {
    this.isTableVisible = true;
  }

  hideTable() {
    this.isTableVisible = false;
  }

}
