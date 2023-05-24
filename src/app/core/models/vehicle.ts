import { IPallet } from "./pallet";

export interface IVehicle {
    id: number,
    make: string,
    model: string,
    capacity: number,
    pallets: IPallet[],
    color: string
}
export class Vehicle {
    pallets: IPallet[] = [];

    constructor(public id: number, public make: string, public model: string, public capacity: number, public type: string, public color: string){}

    addPallet(item: IPallet): void {
        this.pallets.push(item);
    }

    removePallet(id: number): void {
        let left = 0;
        let right = this.pallets.length -1;
        // this.trucks.id.sort((a,b) => a - b);

        while(left <= right) {
            let mid = Math.min((left + right) / 2);

            if(this.pallets[mid].id === id) {
            this.pallets.splice(mid, 1);
            }
            
            if(this.pallets[mid].id > id) {
            right = mid - 1;
            } else {
            left = mid + 1;
            }
        }
    }
}

