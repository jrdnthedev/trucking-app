import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './feature/home/home.component';
import { WarehouseComponent } from './feature/warehouse/warehouse.component';
import { TrucksComponent } from './feature/trucks/trucks.component';
import { VansComponent } from './feature/vans/vans.component';
import { WarehouseDetailsComponent } from './feature/warehouse-details/warehouse-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'warehouse', component: WarehouseComponent },
  { path: 'warehouse/:id', component: WarehouseDetailsComponent },
  { path: 'trucks', component: TrucksComponent },
  { path: 'vans', component: VansComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
