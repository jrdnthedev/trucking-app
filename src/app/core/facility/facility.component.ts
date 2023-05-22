import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.scss']
})
export class FacilityComponent implements OnInit {
  id = 0;
  truck_capacity = [];
  van_capacity = [];
  pallet_capacity = [];

  constructor() { }

  ngOnInit(): void {
  }

  addTruck(): void {

  }

  removeTruck(id: number): void {
    
  }

  addVan(): void {

  }

  removeVan(id: number): void {
    
  }

  addPallet(): void {
    
  }

  removePallet(id: number): void {
    
  }
}
