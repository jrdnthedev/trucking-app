import { IPallet } from "./pallet";
import { IVehicle, Vehicle } from "./vehicle";

export interface IVan extends IVehicle{
    capacity: number
}

export class Van extends Vehicle{

    // constructor(){}

    // addPallet(item: IPallet): void {
    //     this.pallets.push(item);
    // }

    // removePallet(id: number): void {
    //     let left = 0;
    //     let right = this.pallets.length -1;
    //     // this.trucks.id.sort((a,b) => a - b);

    //     while(left <= right) {
    //         let mid = Math.min((left + right) / 2);

    //         if(this.pallets[mid].id === id) {
    //         this.pallets.splice(mid, 1);
    //         }
            
    //         if(this.pallets[mid].id > id) {
    //         right = mid - 1;
    //         } else {
    //         left = mid + 1;
    //         }
    //     }
    // }
}