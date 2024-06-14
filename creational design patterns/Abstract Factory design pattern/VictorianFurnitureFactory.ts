import { Chair } from "./Chair";
import { CoffeeTable } from "./CoffeeTable";
import { FurnitureFactory } from "./FurnitureFactory";
import { Sofa } from "./Sofa";
// These are the actual implementations of the products for victorian styles.
import { VictorianChair } from "./VictorianChair";
import { VictorianCoffeeTable } from "./VictorianCoffeeTable";
import { VictorianSofa } from "./VictorianSofa";

// These factory implement the FurnitureFactory interface and return instances of the concrete products.
export class VictorianFurnitureFactory implements FurnitureFactory {
    createChair(): Chair {
        return new VictorianChair();
    }
    createSofa(): Sofa {
        return new VictorianSofa();
    }
    createCoffeeTable(): CoffeeTable {
        return new VictorianCoffeeTable();
    }
}
