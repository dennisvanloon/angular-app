import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {ProductListComponent} from "./product-list/product-list.component";
import {ReactiveFormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import {TopBarComponent} from "./top-bar/top-bar.component";
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
