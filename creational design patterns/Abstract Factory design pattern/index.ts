import { FurnitureFactory } from "./FurnitureFactory";
import { ModernFurnitureFactory } from "./ModernFurnitureFactory";
import { VictorianFurnitureFactory } from "./VictorianFurnitureFactory";

  function createFurniture(factory: FurnitureFactory) {
    const chair = factory.createChair();
    const sofa = factory.createSofa();
    const coffeeTable = factory.createCoffeeTable();
  
    chair.sitOn();
    sofa.lieOn();
    coffeeTable.putCoffee();
  }
  
  createFurniture(new ModernFurnitureFactory());
  createFurniture(new VictorianFurnitureFactory());