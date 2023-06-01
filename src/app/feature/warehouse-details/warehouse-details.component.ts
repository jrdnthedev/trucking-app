import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VehicleEnum } from 'src/app/core/enums/vehicle.enum';
import { IVehicle } from 'src/app/core/models/vehicle';
import { VehicleService } from 'src/app/core/services/vehicle.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.scss']
})
export class WarehouseDetailsComponent implements OnInit {
  warehouse: any;
  subscription: Subscription[] = [];
  isToggle = false;
  trucks: IVehicle[] = [];
  vehicle_data: IVehicle[] = [];

  constructor(private warehouseservice: WarehouseService, private route: ActivatedRoute, private vehicleservice: VehicleService, private vehiclenum: VehicleEnum) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.subscription.push(this.route.params.subscribe(item => {
      this.warehouse = this.warehouseservice.getById(item['id']);
      this.trucks = this.vehicleservice.vehicles;
    }));
  }

  closeEventClicked(value: boolean): void {
    this.isToggle = value;
  }

  updateSelected(value: IVehicle): void {
    
    if(this.vehicle_data.includes(value)) {
      this.vehicle_data.splice(this.vehicle_data.indexOf(value));
    } else {
      this.vehicle_data.push(value);
    }
    
  }

  addVehicle(): void {
    this.vehicle_data.forEach(item => {
     if(item.type === 'truck') {
      this.warehouse.addTruck(item);
     } else {
      this.warehouse.addVan(item);
     }
    }); 
  }

  ngOnDestroy(): void {
    this.subscription.forEach(item => item.unsubscribe());
  }

}
