// Scenario
// Imagine you are the manager of a furniture store. Your store sells two styles of furniture: Modern and Victorian. Each style includes a chair, a sofa, and a coffee table. Customers can request furniture in either style, and you need a system that allows you to create the correct type of furniture for each request without changing the code that makes the request.

// Abstract Factory Pattern
// The Abstract Factory pattern helps you create families of related objects without specifying their concrete classes. In this scenario, you want to create families of furniture (Modern and Victorian), and each family includes related objects (Chair, Sofa, and CoffeeTable).



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