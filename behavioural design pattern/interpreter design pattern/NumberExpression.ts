import { Expression } from "./Expression";

// NumberExpression class (Terminal Expression)
export class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  public interpret(): number {
    return this.number;
  }
}
