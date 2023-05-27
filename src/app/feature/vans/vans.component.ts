import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/core/models/vehicle';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-vans',
  templateUrl: './vans.component.html',
  styleUrls: ['./vans.component.scss']
})
export class VansComponent implements OnInit {
  v_name: string = '';
  v_model: string = '';
  v_colour: string = '';

  constructor(private datastore: DataStoreService, private vehicleservice: VehicleService) { }

  ngOnInit(): void {
  }

  createVan(): void {
    let id = this.datastore.getVehicleId() + 1;
    this.datastore.setVehicleId(id);
    const vehicle = new Vehicle(id,this.v_name,this.v_model,2,'van',this.v_colour);
    this.vehicleservice.addVehicle(vehicle);
    this.v_name = '';
    this.v_model = '';
    this.v_colour = '';
  }

}
