import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { WarehouseService } from 'src/app/core/services/warehouse.service';

@Component({
  selector: 'app-warehouse-details',
  templateUrl: './warehouse-details.component.html',
  styleUrls: ['./warehouse-details.component.scss']
})
export class WarehouseDetailsComponent implements OnInit {
  warehouse: any;
  subscription!: Subscription
  id = 0;
  isToggle = false;
  constructor(private warehouseservice: WarehouseService, private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(item => {
      this.id = item['id'];
      this.warehouse = this.warehouseservice.getById(this.id);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closeEventClicked(value: boolean): void {
    this.isToggle = value;
  }

  toggle():void {
    this.isToggle = !this.isToggle;
  }
}
