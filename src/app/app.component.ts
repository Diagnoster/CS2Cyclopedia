import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { CaseListComponent } from './components/case-list/case-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, CaseListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'CS2Cyclopedia';
}
