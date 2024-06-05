import { Chair } from "./Chair";
import { CoffeeTable } from "./CoffeeTable";
import { FurnitureFactory } from "./FurnitureFactory";
import { ModernChair } from "./ModernChair";
import { ModernCoffeeTable } from "./ModernCoffeeTable";
import { ModernSofa } from "./ModernSofa";
import { Sofa } from "./Sofa";

export class ModernFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new ModernChair();
    }
    createSofa(): Sofa {
        return new ModernSofa();
    }
    createCoffeeTable(): CoffeeTable {
        return new ModernCoffeeTable();
    }
}
