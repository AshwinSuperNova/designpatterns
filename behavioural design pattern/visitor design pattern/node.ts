import { Visitor } from "./visitor";

export abstract class Node {
  abstract accept(visitor: Visitor): void;
}

export class City extends Node {
  accept(visitor: Visitor) {
    visitor.visitCity(this);
  }
}

export class Industry extends Node {
  accept(visitor: Visitor) {
    visitor.visitIndustry(this);
  }
}

export class SightSeeing extends Node {
  accept(visitor: Visitor) {
    visitor.visitSightSeeing(this);
  }
}
