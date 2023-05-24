import { Injectable } from '@angular/core';
import { ITruck } from '../models/truck';
import { IVan } from '../models/van';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  trucks: ITruck[] = [];
  vans: IVan[] = [];

  constructor() { }

  addTruck(item: ITruck): void {
    this.trucks.push(item);
  }

  removeFacility(id: number): void {
    let left = 0;
    let right = this.trucks.length -1;
    // this.trucks.id.sort((a,b) => a - b);

    while(left <= right) {
        let mid = Math.min((left + right) / 2);

        if(this.trucks[mid].id === id) {
        this.trucks.splice(mid, 1);
        }
        
        if(this.trucks[mid].id > id) {
        right = mid - 1;
        } else {
        left = mid + 1;
        }
    }
  }
}
