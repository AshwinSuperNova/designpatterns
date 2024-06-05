import { Color } from "./color";
import { Shape } from "./shape";

export abstract class ShapeWithColor {
  constructor(protected color: Color, protected shape: Shape) {}

  abstract draw(): void;
}
