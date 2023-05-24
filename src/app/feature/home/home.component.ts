import { Component, OnInit } from '@angular/core';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private warehouseservice: WarehouseService,private vehicleservice: VehicleService) { }

  ngOnInit(): void {
    console.log(this.warehouseservice.houses);
    console.log(this.vehicleservice.vehicles);
  }

}
