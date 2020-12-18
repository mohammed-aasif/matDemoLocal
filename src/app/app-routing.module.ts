//modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SuperadminModule } from './superadmin/superadmin.module'

// components
const routes: Routes = [
  { path: '', redirectTo: '/superadmin/dashboard', pathMatch: 'full' },
  { path: 'superadmin', loadChildren: './superadmin/superadmin.module#SuperadminModule' }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, SuperadminModule]
})
export class AppRoutingModule { }
