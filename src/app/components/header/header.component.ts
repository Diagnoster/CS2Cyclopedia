import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cs2HelperService } from '../../services/cs2-helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  containerName: string = 'Cases';
  containerImage: string | null = null;

  constructor(private cs2Helper: Cs2HelperService, private router: Router) { }

  ngOnInit(): void {
      this.cs2Helper.currentCaseName.subscribe(name => {
      this.containerName = name;
      console.log(this.containerName);
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
}
