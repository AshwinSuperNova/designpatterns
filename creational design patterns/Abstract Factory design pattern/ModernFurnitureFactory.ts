import { Chair } from "./Chair";
import { CoffeeTable } from "./CoffeeTable";
import { Sofa } from "./Sofa";
import { FurnitureFactory } from "./FurnitureFactory";

// These are the actual implementations of the products for Modern  styles.
import { ModernChair } from "./ModernChair";
import { ModernCoffeeTable } from "./ModernCoffeeTable";
import { ModernSofa } from "./ModernSofa";

// These factory implement the FurnitureFactory interface and return instances of the concrete products.
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
