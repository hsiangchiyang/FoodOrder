import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuPageComponent } from './components/menu-page/menu-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderFormComponent } from './components/order-form/order-form.component';
import { FoodFormComponent } from './components/food-form/food-form.component';
import { FoodModalComponent } from './components/food-modal/food-modal.component';
import { FoodSummaryComponent } from './components/food-summary/food-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuPageComponent,
    OrderFormComponent,
    FoodFormComponent,
    FoodModalComponent,
    FoodSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
