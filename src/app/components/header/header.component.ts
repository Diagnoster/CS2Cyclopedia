import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Cs2HelperService } from '../../services/cs2-helper.service';

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

  constructor(private cs2Helper: Cs2HelperService) { }

  ngOnInit(): void {
      this.cs2Helper.currentCaseName.subscribe(name => {
      this.containerName = name;
    });

      this.cs2Helper.currentCaseImage.subscribe(image => {
        this.containerImage = image;
      });
  }
}
