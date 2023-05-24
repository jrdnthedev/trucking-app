import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/core/models/facility';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  w_name: string = '';
  w_location: string = '';

  constructor(private warehouseservice: WarehouseService) { }

  ngOnInit(): void {
  }

  createWarehouse(): void {
    const facility = new Warehouse(1,this.w_name,this.w_location);
    this.warehouseservice.addFacility(facility);
    this.w_name  = '';
    this.w_location = '';
  }
}
