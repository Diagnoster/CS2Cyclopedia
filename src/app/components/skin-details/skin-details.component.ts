import { Component, OnInit } from '@angular/core';
import { Skin } from '../../models/skin';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { NewlineToBrPipe } from '../../pipes/newline-to-br.pipe';
import { MatIconModule } from '@angular/material/icon';
import { animate, style, transition, trigger } from '@angular/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PriceWearsComponent } from "../price-wears/price-wears.component";
import { HashNameSkin } from '../../models/hash-name-skin';
import { Cs2ApiService } from '../../services/cs2-api.service';
import { Container } from '../../models/container';

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
  wears: HashNameSkin[] = [];
  skinId!: number;

  constructor(private router: Router, private route: ActivatedRoute, private cs2ApiService: Cs2ApiService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.['skin']) {
      this.skin = navigation.extras.state['skin'];
      this.prices = navigation.extras.state['prices'];
      this.wears = navigation.extras.state['wears'];
    } else {
      this.router.navigate(['/skins']);
    }
  }

  ngOnInit(): void {
    this.skinId = Number(this.route.snapshot.paramMap.get('id'));
    if (!this.skin) {
      console.error('Skin is not available!');
    }
  }

  goToContainer(caseName: string): void {
    this.cs2ApiService.findCrateByName(caseName).subscribe((container: Container | null) => {
      if (!container) {
        console.error('Case not found:', caseName);
        return;
      }
      this.router.navigate(
        ['/case-details', container.id],
        { state: { container, prices: this.prices } }
      ).catch(err => console.error('Navigation error', err));
    });
  }

}
