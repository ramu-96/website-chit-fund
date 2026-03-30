import { Routes } from '@angular/router';
import { Layout } from './layout/layout';
import { Dashboard } from './dashboard/dashboard';
import { Members } from './members/members';
import { Payments } from './payments/payments';
import { Auth } from './auth/auth';
import { Groups } from './groups/groups';

export const routes: Routes = [
  // ✅ Default route → redirect to auth
  { path: '', redirectTo: 'auth', pathMatch: 'full' },

  // ✅ Auth page (no layout)
  { path: 'auth', component: Auth },

  // ✅ Protected layout routes
  {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'members', component: Members },
      {path : 'groups',component:Groups},
      { path: 'payments', component: Payments }
    ]
  }
];