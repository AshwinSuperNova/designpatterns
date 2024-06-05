import { Red, Blue, Green } from "./color";
import { Circle, Square, Triangle } from "./shape";
import { ColoredShape } from "./colored-shapes";

const redCircle = new ColoredShape(new Red(), new Circle());
const blueSquare = new ColoredShape(new Blue(), new Square());
const greenTriangle = new ColoredShape(new Green(), new Triangle());
const blueTriangle = new ColoredShape(new Blue(), new Triangle());

redCircle.draw();
blueSquare.draw();
greenTriangle.draw();
blueTriangle.draw();
