import { Component } from '@angular/core';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { WeaponCaseComponent } from '../weapon-case/weapon-case.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  imports: [
    MatDialogModule
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  constructor(private dialog: MatDialog) {}

  openModal(): void {
    this.dialog.open(WeaponCaseComponent, {
      width: '500px',
    });
  }

}
