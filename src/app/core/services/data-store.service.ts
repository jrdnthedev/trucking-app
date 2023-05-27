import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStoreService {
  id = 0;
  vehicle_id = 0;
  constructor() { }

  getId(): number {
    return this.id;
  }

  setId(value: number): void {
    this.id = value;
  }

  getVehicleId(): number {
    return this.vehicle_id;
  }

  setVehicleId(value: number): void {
    this.vehicle_id = value;
  }
}
