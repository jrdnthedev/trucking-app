import { Component, OnInit } from '@angular/core';
import { Vehicle } from 'src/app/core/models/vehicle';
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
  id = 0;

  constructor(public vehicleservice: VehicleService) { }

  ngOnInit(): void {
  }

  createTruck(): void {
    this.id = this.id + 1;
    const vehicle = new Vehicle(this.id,this.t_name,this.t_model,2,'truck',this.t_colour);
    this.vehicleservice.addVehicle(vehicle);
    this.t_name = '';
    this.t_model = '';
    this.t_colour = '';
  }
}
