import { Component, OnDestroy, OnInit } from '@angular/core';
import { Container } from '../../models/container';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { WeaponCaseComponent } from '../weapon-case/weapon-case.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { Cs2PriceService } from '../../services/cs2-price.service';
import { SteamValue } from '../../models/steam-value';

@Component({
  selector: 'app-case-details',
  imports: [
    CommonModule,
    MatTooltipModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    WeaponCaseComponent
  ],
  templateUrl: './case-details.component.html',
  styleUrl: './case-details.component.css',
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }), // Start <- to ->
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ transform: 'translateY(70%)', opacity: 0 }),
        animate('300ms ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 }))
      ])
    ])
  ],
})
export class CaseDetailsComponent implements OnInit, OnDestroy {

  container: Container;
  value: SteamValue | undefined;
  visibleTable: 'case' | 'souvenir' | 'sticker' | null = null;

  constructor(private router: Router, private cs2Helper: Cs2HelperService, private cs2Price: Cs2PriceService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.container = navigation.extras.state['container'];
    } else {
      this.container = {} as Container;
    }
  }

  ngOnInit(): void {
    this.cs2Helper.changeCaseName(this.container.name);
    this.cs2Helper.changeCaseImage(this.container.image);
    window.scrollTo(0, 0); // Rola para o topo quando o componente for carregado
    this.selecionarItem(this.container.market_hash_name);
  }

  ngOnDestroy(): void {
    this.cs2Helper.changeCaseName('Cases');
    this.cs2Helper.changeCaseImage(null);
  }

  showTable(type: 'case' | 'souvenir' | 'sticker') {
    this.visibleTable = type;
  }

  hideTable() {
    this.visibleTable = null;
  }

selecionarItem(nome: string): void {
  this.cs2Price.getItemPrice(nome).subscribe(precos => {
    console.log(precos);
    this.value = precos.steam;
    console.log(this.value);
  });
}

}
