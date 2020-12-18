
// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { OrderModule } from 'ngx-order-pipe';
import { AppRoutingModule } from './app-routing.module'; 


// components
import { AppComponent } from './app.component'; 
import {MatInputModule} from '@angular/material/input'; 


@NgModule({
  declarations: [
    AppComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    OrderModule, 
    MatInputModule,

  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [ 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
