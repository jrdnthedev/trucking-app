import { Injectable } from '@angular/core';
import { IFacility } from '../models/facility';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {
  houses: IFacility[] = [];

  constructor() { }
  
  addFacility(item: IFacility): void {
    this.houses.push(item);
  }

  removeFacility(id: number): void {
    let left = 0;
    let right = this.houses.length -1;
    // this.trucks.id.sort((a,b) => a - b);

    while(left <= right) {
        let mid = Math.min((left + right) / 2);

        if(this.houses[mid].id === id) {
        this.houses.splice(mid, 1);
        }
        
        if(this.houses[mid].id > id) {
        right = mid - 1;
        } else {
        left = mid + 1;
        }
    }
  }
}
