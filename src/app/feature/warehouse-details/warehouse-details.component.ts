import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
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
  trucks: any;
  constructor(private warehouseservice: WarehouseService, private route: ActivatedRoute, private vehicleservice: VehicleService) { }

  ngOnInit(): void {
    this.subscription.push(this.route.params.subscribe(item => {
      this.warehouse = this.warehouseservice.getById(item['id']);
      this.trucks = this.vehicleservice.vehicles;
      console.log(this.warehouse);
    }));
  }

  closeEventClicked(value: boolean): void {
    this.isToggle = value;
  }

  addVehicle():void {
    const vehicles = document.querySelectorAll('fieldset input[type=checkbox]');
    vehicles.forEach( item => {
     console.log(item);
    })
    this.warehouse.truck_storage.push();
  }

  ngOnDestroy(): void {
    this.subscription.forEach(item => item.unsubscribe());
  }

}
