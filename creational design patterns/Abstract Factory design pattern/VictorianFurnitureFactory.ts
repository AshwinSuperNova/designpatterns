import { Chair } from "./Chair";
import { CoffeeTable } from "./CoffeeTable";
import { FurnitureFactory } from "./FurnitureFactory";
import { Sofa } from "./Sofa";
import { VictorianChair } from "./VictorianChair";
import { VictorianCoffeeTable } from "./VictorianCoffeeTable";
import { VictorianSofa } from "./VictorianSofa";

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
