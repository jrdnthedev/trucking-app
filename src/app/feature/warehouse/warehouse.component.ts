import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/core/models/facility';
import { DataStoreService } from 'src/app/core/services/data-store.service';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss']
})
export class WarehouseComponent implements OnInit {
  w_name: string = '';
  w_location: string = '';

  constructor(private warehouseservice: WarehouseService, private datastore: DataStoreService) { }

  ngOnInit(): void {
  }

  createWarehouse(): void {
    let id = this.datastore.getId() + 1;
    this.datastore.setId(id);
    const facility = new Warehouse(id,this.w_name,this.w_location);
    this.warehouseservice.addFacility(facility);
    this.w_name = '';
    this.w_location = '';
  }
}
