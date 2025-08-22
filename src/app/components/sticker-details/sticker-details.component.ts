import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Sticker } from '../../models/sticker';
import { ActivatedRoute, Router } from '@angular/router';
import { NewlineToBrPipe } from "../../pipes/newline-to-br.pipe";
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { PriceComponent } from '../price/price.component';

@Component({
  selector: 'app-sticker-details',
  imports: [
    NewlineToBrPipe,
    MatDividerModule,
    MatIconModule,
    PriceComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sticker-details.component.html',
  styleUrl: './sticker-details.component.css',
    animations: [
      trigger('slideIn', [
        transition(':enter', [
          style({ transform: 'translateX(-100%)', opacity: 0 }), // Start <- to ->
          animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
        ])
      ])
    ]
})
export class StickerDetailsComponent implements OnInit {
  sticker!: Sticker;
  prices: any = {};
  stickerId!: number;

  constructor(private router: Router, private route: ActivatedRoute) {
    const navigation = this.router.getCurrentNavigation();
    console.log(navigation);

    if (navigation?.extras.state?.['sticker']) {
      this.sticker = navigation.extras.state['sticker'];
      this.prices = navigation.extras.state['prices'];
    } else {
      this.router.navigate(['/stickers']);
    }
  }

  ngOnInit(): void {
    this.stickerId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.sticker) {
      console.error('Sticker is not available!');
    }
  }
}
