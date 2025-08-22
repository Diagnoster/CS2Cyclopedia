import { Routes } from '@angular/router';
import { CaseDetailsComponent } from './components/case-details/case-details.component';
import { CaseListComponent } from './components/case-list/case-list.component';
import { AgentsListComponent } from './components/agents-list/agents-list.component';
import { AgentDetailsComponent } from './components/agent-details/agent-details.component';
import { StickersListComponent } from './components/stickers-list/stickers-list.component';
import { StickerDetailsComponent } from './components/sticker-details/sticker-details.component';
import { KeysListComponent } from './components/keys-list/keys-list.component';
import { PatchesListComponent } from './components/patches-list/patches-list.component';
import { CollectiblesListComponent } from './components/collectibles-list/collectibles-list.component';
import { GraffitiListComponent } from './components/graffiti-list/graffiti-list.component';
import { SkinsComponent } from './components/skins/skins.component';
import { SkinDetailsComponent } from './components/skin-details/skin-details.component';

export const routes: Routes = [
  { path: '', component: CaseListComponent },
  { 
    path: 'case-details/:id', 
    component: CaseDetailsComponent, 
    data: { renderMode: 'server' } 
  },
  { path: 'agents', component: AgentsListComponent },
  { 
    path: 'agent-details/:id', 
    component: AgentDetailsComponent, 
    data: { renderMode: 'server' } 
  },
  { path: 'stickers', component: StickersListComponent },
  { 
    path: 'sticker-details/:id', 
    component: StickerDetailsComponent, 
    data: { renderMode: 'server' } 
  },
  { path: 'keys', component: KeysListComponent },
  { path: 'patches', component: PatchesListComponent },
  { path: 'collectibles', component: CollectiblesListComponent },
  { path: 'graffits', component: GraffitiListComponent },
  { path: 'skins', component: SkinsComponent },
  { 
    path: 'skin-details/:id', 
    component: SkinDetailsComponent, 
    data: { renderMode: 'server' } 
  }
];

