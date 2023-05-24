import { Component, OnInit } from '@angular/core';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private warehouseservice: WarehouseService) { }

  ngOnInit(): void {
    // this.warehouseservice.houses.forEach(item => { console.log(item)})
  }

}
