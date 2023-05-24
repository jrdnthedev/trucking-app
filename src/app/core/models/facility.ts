import { IPallet } from "./pallet";
import { ITruck } from "./truck";
import { IVan } from "./van";

export interface IFacility {
    id: number,
    name: string,
    location: string,
    truck_storage?: ITruck[],
    van_storage?: IVan[],
    pallet_storage?: IPallet[]
}

export class Warehouse {
    trucks: ITruck[] = [];
    vans: IVan[] = [];
    pallets: IPallet[] = [];
    
    constructor(public id: number, public name: string, public location: string) {}

    addTruck(truck: ITruck) {
        this.trucks.push(truck);
    }
    
    removeTruck(id: number) {
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

    addVan(van: IVan) {
        this.vans.push(van);
    }

    removeVan(id: number) {
        let left = 0;
        let right = this.vans.length -1;
        // this.vans.id.sort((a,b) => a - b);

        while(left <= right) {
            let mid = Math.min((left + right) / 2);

            if(this.vans[mid].id === id) {
            this.vans.splice(mid, 1);
            }
            
            if(this.vans[mid].id > id) {
            right = mid - 1;
            } else {
            left = mid + 1;
            }
        }
    }

    addPallet(pallet: IPallet) {
        this.pallets.push(pallet);
    }

    removePallet(id: number) {
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