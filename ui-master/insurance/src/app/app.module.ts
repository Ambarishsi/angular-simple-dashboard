import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListContainerComponent } from './list-container/list-container.component';
import { DetailsContainerComponent } from './details-container/details-container.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchCustomerPipe } from './list-container/filter/search-customer.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GraphicalSummaryComponent } from './graphical-summary/graphical-summary.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ListContainerComponent,
    DetailsContainerComponent,
    SearchCustomerPipe,
    GraphicalSummaryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
