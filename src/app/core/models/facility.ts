import { IPallet } from "./pallet";
import { ITruck } from "./truck";
import { IVan } from "./van";

export interface IFacility {
    id: number,
    name: string,
    location: string,
    truck_storage: ITruck[],
    van_storage: IVan[],
    pallet_storage: IPallet[]
}