import { ShapeWithColor } from "./shape-with-color";
import { Color } from "./color";
import { Shape } from "./shape";

export class ColoredShape extends ShapeWithColor {
  constructor(color: Color, shape: Shape) {
    super(color, shape);
  }

  draw(): void {
    console.log(`${this.color.getColor()} ${this.shape.getShape()}`);
  }
}
