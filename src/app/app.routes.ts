import { Routes } from '@angular/router';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { CaseListComponent } from './components/case-list/case-list.component';

export const routes: Routes = [
    { path: '', component: CaseListComponent},
    { path: 'case-details', component: CaseDetailsComponent }
];
