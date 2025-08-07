import { Component, OnInit } from '@angular/core';
import { Skin } from '../../models/skin';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { NewlineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-skin-details',
  imports: [
    NewlineToBrPipe,
    MatDividerModule,
    MatIconModule
  ],
  templateUrl: './skin-details.component.html',
  styleUrl: './skin-details.component.css'
})
export class SkinDetailsComponent implements OnInit{
  skin!: Skin;

  constructor(private router: Router) {
        const navigation = this.router.getCurrentNavigation();
    console.log(navigation);

    if (navigation?.extras.state?.['skin']) {
      this.skin = navigation.extras.state['skin'];
    } else {
      this.router.navigate(['/skins']);
    }
  }

  ngOnInit(): void {
    if (!this.skin) {
      console.error('Skin is not available!');
    }
  }

}
