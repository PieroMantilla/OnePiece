// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { CrewsList } from './pages/crews-list/crews-list';
import { CrewDetail } from './pages/crew-detail/crew-detail';
import { MemberDetail } from './pages/member-detail/member-detail';

export const routes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: CrewsList },
  { path: 'crewdetail/:id', component: CrewDetail},
  { path: 'members/:id', component: MemberDetail},
  { path: '**', redirectTo: '/lista' }
];
