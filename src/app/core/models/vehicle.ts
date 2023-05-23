import { IPallet } from "./pallet";

export interface IVehicle {
    id: number,
    make: string,
    model: string,
    capacity: number,
    pallets: IPallet[],
    color: string
}