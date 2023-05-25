import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ITruck } from 'src/app/core/models/truck';
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
  id = 0;
  isToggle = false;
  trucks: any;
  constructor(private warehouseservice: WarehouseService, private route: ActivatedRoute, private vehicleservice: VehicleService) { }

  ngOnInit(): void {
    this.subscription.push(this.route.params.subscribe(item => {
      this.id = item['id'];
      this.warehouse = this.warehouseservice.getById(this.id);
    }));
    this.getTrucks();
  }

  closeEventClicked(value: boolean): void {
    this.isToggle = value;
  }

  toggle():void {
    this.isToggle = !this.isToggle;
  }

  getTrucks(){
    this.trucks = this.vehicleservice.vehicles;
    console.log(this.trucks);
  }

  ngOnDestroy() {
    this.subscription.forEach(item => item.unsubscribe());
  }

}
