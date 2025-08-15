import { Component, OnInit } from '@angular/core';
import { Skin } from '../../models/skin';
import { Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { NewlineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PriceWearsComponent } from "../price-wears/price-wears.component";
import { Price } from '../../models/price';
import { HashNameSkin } from '../../models/hash-name-skin';

@Component({
  selector: 'app-skin-details',
  imports: [
    NewlineToBrPipe,
    MatDividerModule,
    MatIconModule,
    MatTooltipModule,
    PriceWearsComponent
],
  templateUrl: './skin-details.component.html',
  styleUrl: './skin-details.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Start <- to ->
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ])
  ]
})
export class SkinDetailsComponent implements OnInit {
  skin!: Skin;
  prices: any = {};
  wears: HashNameSkin [] = [];

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);

    if (navigation?.extras.state?.['skin']) {
      this.skin = navigation.extras.state['skin'];
      this.prices = navigation.extras.state['prices'];
      this.wears = navigation.extras.state['wears'];
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
