import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './feature/home/home.component';
import { WarehouseComponent } from './feature/warehouse/warehouse.component';
import { TrucksComponent } from './feature/trucks/trucks.component';
import { VansComponent } from './feature/vans/vans.component';
import { FormsModule } from '@angular/forms';
import { WarehouseDetailsComponent } from './feature/warehouse-details/warehouse-details.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    WarehouseComponent,
    TrucksComponent,
    VansComponent,
    WarehouseDetailsComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
