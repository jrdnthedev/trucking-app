import { Component, OnInit } from '@angular/core';
import { IFacility } from 'src/app/core/models/facility';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  w_name: string = '';
  w_location: string = '';
  w_truck: string = '';
  w_van: string = '';
  w_pallet: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  createWarehouse(): void {
   let item = { 
      name :this.w_name,
      location :this.w_location,
      truck_capacity :Number(this.w_truck),
      van_capacity :Number(this.w_truck),
      pallet_capacity :Number(this.w_truck)
    }
    console.log(item);
  }
}
