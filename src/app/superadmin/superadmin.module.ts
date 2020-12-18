//modules
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuperadminRoutingModule } from './superadmin-routing.module'; 
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ValidateEqualModule } from 'ng-validate-equal';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { ToastrModule } from 'ngx-toastr';
import { DpDatePickerModule } from "ng2-date-picker";
import { ReactiveFormsModule } from '@angular/forms';
//components
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component'; 
import { ManageIntakeFormComponent } from './manage-intake-form/manage-intake-form.component';
import { ManageIntakeFormViewComponent } from './manage-intake-form-view/manage-intake-form-view.component';
import { ManageIntakeFormUpdateComponent } from './manage-intake-form-update/manage-intake-form-update.component'; 
 
//module

@NgModule({

  imports: [
    CommonModule,
    SuperadminRoutingModule, 
    HttpClientModule,
    ValidateEqualModule,
    NgxPaginationModule,
    OrderModule,
    DpDatePickerModule,
    ReactiveFormsModule,

  ],
  exports: [ 
    NgxPaginationModule,
    OrderModule,
    ReactiveFormsModule

  ],
  schemas: [NO_ERRORS_SCHEMA],
  declarations: [LoginComponent,  HeaderComponent, SidebarComponent,   ManageIntakeFormComponent, ManageIntakeFormViewComponent, ManageIntakeFormUpdateComponent ],
})
export class SuperadminModule { }
