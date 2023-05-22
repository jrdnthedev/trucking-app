import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VehicleComponent } from './core/vehicle/vehicle.component';
import { PalletComponent } from './core/pallet/pallet.component';
import { FacilityComponent } from './core/facility/facility.component';

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    PalletComponent,
    FacilityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }