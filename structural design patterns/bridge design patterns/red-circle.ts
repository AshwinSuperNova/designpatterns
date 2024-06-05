import { ShapeWithColor } from "./shape-with-color";

export class RedCircle extends ShapeWithColor {
  draw(): void {
    console.log(`${this.color.getColor()} ${this.shape.getShape()}`);
  }
}
