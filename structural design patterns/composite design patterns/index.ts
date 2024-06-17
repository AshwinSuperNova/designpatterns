import { Circle } from "./Circle";
import { Drawing } from "./Drawing";
import { Square } from "./Square";

  // Client code to demonstrate the Composite pattern
  
  // Create simple shapes
  const circle1 = new Circle(5);
  const square1 = new Square(10);
  
  // Create a drawing and add simple shapes to it
  const drawing1 = new Drawing();
  drawing1.add(circle1);
  drawing1.add(square1);
  
  // Create another drawing and add the first drawing and more shapes to it
  const circle2 = new Circle(7);
  const drawing2 = new Drawing();
  drawing2.add(drawing1);
  drawing2.add(circle2);

  // Draw everything
  drawing2.draw();
  const circle3 = new Circle(15);
  const square3 = new Square(20);
  const drawing3 = new Drawing();
  drawing3.add(drawing2);
  drawing3.add(circle3);
  drawing3.add(square3);
  drawing3.draw();