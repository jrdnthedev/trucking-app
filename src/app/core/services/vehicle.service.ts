import { Injectable } from '@angular/core';
import { ITruck } from '../models/truck';
import { IVan } from '../models/van';
import { IVehicle } from '../models/vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {
  vehicles: IVehicle[] = [];

  constructor() { }

  addVehicle(item: IVehicle): void {
    this.vehicles.push(item);
  }

  removeVehicle(id: number): void { 
    let left = 0;
    let right = this.vehicles.length -1;
    // this.trucks.id.sort((a,b) => a - b);

    while(left <= right) {
        let mid = Math.min((left + right) / 2);

        if(this.vehicles[mid].id === id) {
        this.vehicles.splice(mid, 1);
        }
        
        if(this.vehicles[mid].id > id) {
        right = mid - 1;
        } else {
        left = mid + 1;
        }
    }
  }

  getVehicle(id: number): IVehicle | undefined{
    let left = 0;
    let right = this.vehicles.length -1;
    // this.trucks.id.sort((a,b) => a - b);

    while(left <= right) {
        let mid = Math.min((left + right) / 2);

        if(this.vehicles[mid].id === id) {
          return this.vehicles[mid];
        }
        
        if(this.vehicles[mid].id > id) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
    }
    return undefined;
  }

}
