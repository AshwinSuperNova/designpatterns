import { Chair } from "./Chair";
import { CoffeeTable } from "./CoffeeTable";
import { Sofa } from "./Sofa";

export interface FurnitureFactory {
    createChair(): Chair;
    createSofa(): Sofa;
    createCoffeeTable(): CoffeeTable;
}
