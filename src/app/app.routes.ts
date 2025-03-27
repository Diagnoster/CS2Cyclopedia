import { Routes } from '@angular/router';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { CaseListComponent } from './components/case-list/case-list.component';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { StickersListComponent } from './components/stickers-list/stickers-list.component';
import { StickerDetailsComponent } from './components/sticker-details/sticker-details.component';

export const routes: Routes = [
    { path: '', component: CaseListComponent},
    { path: 'case-details', component: CaseDetailsComponent },
    { path: 'agents', component: AgentsListComponent },
    { path: 'agent-details', component: AgentDetailsComponent},
    { path: 'stickers', component: StickersListComponent },
    { path: 'sticker-details', component: StickerDetailsComponent},

];
