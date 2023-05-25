import { Component, OnInit } from '@angular/core';
import { IFacility } from 'src/app/core/models/facility';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  warehouses: IFacility[] = [];

  constructor(private warehouseservice: WarehouseService,private vehicleservice: VehicleService) { }

  ngOnInit(): void {
    console.log(this.warehouseservice.houses);
    console.log(this.vehicleservice.vehicles);
    this.warehouseservice.houses.forEach(item => this.warehouses.push(item));
  }

}
