//modules
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// components
import { LoginComponent } from './login/login.component'; 
import { ManageIntakeFormUpdateComponent } from './manage-intake-form-update/manage-intake-form-update.component';
import { ManageIntakeFormViewComponent } from './manage-intake-form-view/manage-intake-form-view.component';
import { ManageIntakeFormComponent } from './manage-intake-form/manage-intake-form.component';  


  
const routes: Routes = [
  { path: '', redirectTo: 'manage-intake-form', pathMatch: 'full' },
  { path: 'login', component: LoginComponent }, 
  { path: 'manage-intake-form', component:ManageIntakeFormComponent}, 
  { path: 'manage-intake-form/view', component:ManageIntakeFormViewComponent}, 
  { path: 'manage-intake-form/update/:id', component:ManageIntakeFormUpdateComponent},   
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperadminRoutingModule { }
