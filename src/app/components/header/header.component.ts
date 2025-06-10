import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Router, RouterModule } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    RouterModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  containerName: string = 'Cases';
  containerImage: string | null = null;
  opened = false;
  hideHeader: boolean = false;

  constructor(private cs2Helper: Cs2HelperService, private router: Router) { }

  ngOnInit(): void {
      this.cs2Helper.currentCaseName.subscribe(name => {
      this.containerName = name;
    });

      this.cs2Helper.currentCaseImage.subscribe(image => {
        this.containerImage = image;
      });
  }

  goToHome(): void {
    this.router.navigate([`/`]);
  }

  goToAgents(): void {
    this.router.navigate([`/agents`]);
  }

  goToCases(): void {
    this.router.navigate([`/`]);
  }

  goToStickers(): void {
    this.router.navigate([`/stickers`]);
  }

  goToKeys(): void {
    this.router.navigate([`/keys`]);
  }

  goToPatches(): void {
    this.router.navigate([`/patches`]);
  }

  goToCollectibles(): void {
    this.router.navigate([`/collectibles`]);
  }

  goToGraffits(): void {
    this.router.navigate([`/graffits`]);
  }
}
