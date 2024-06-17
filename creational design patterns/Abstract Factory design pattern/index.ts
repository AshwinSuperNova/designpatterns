import { FurnitureFactory } from "./FurnitureFactory";
import { ModernFurnitureFactory } from "./ModernFurnitureFactory";
import { VictorianFurnitureFactory } from "./VictorianFurnitureFactory";

// This function uses a factory to create a complete set of furniture. It doesn't need to know which specific types of furniture it is creating; it just uses the factory to get the products.

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