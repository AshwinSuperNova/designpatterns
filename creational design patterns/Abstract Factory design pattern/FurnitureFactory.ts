// These interfaces define the methods that each type of product must implement.
import { Chair } from "./Chair";
import { CoffeeTable } from "./CoffeeTable";
import { Sofa } from "./Sofa";

//This interface declares methods for creating each type of product.
export interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeeTable(): CoffeeTable;
}
