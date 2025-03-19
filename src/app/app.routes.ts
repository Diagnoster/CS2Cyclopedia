import { Routes } from '@angular/router';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { CaseListComponent } from './components/case-list/case-list.component';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';

export const routes: Routes = [
    { path: '', component: CaseListComponent},
    { path: 'case-details', component: CaseDetailsComponent },
    { path: 'agents', component: AgentsListComponent },
    { path: 'agent-details', component: AgentDetailsComponent}
];
