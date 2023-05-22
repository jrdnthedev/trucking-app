import { IPallet } from "./pallet";

export interface IVehicle {
    id: number,
    make: string,
    model: string,
    storage: [],
    capacity: number,
    pallets: IPallet,
    color: string
}