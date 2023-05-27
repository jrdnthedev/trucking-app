import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/core/models/vehicle';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.scss']
})
export class TrucksComponent implements OnInit {
  t_name: string = '';
  t_model: string = '';
  t_colour: string = '';

  constructor(public vehicleservice: VehicleService, private datastore: DataStoreService) { }

  ngOnInit(): void {
  }

  createTruck(): void {
    let id = this.datastore.getVehicleId() + 1;
    this.datastore.setVehicleId(id);
    const vehicle = new Vehicle(id,this.t_name,this.t_model,2,'truck',this.t_colour);
    this.vehicleservice.addVehicle(vehicle);
    this.t_name = '';
    this.t_model = '';
    this.t_colour = '';
  }
}
