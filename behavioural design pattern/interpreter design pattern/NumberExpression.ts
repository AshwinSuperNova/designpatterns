import { Expression } from "./Expression";

// Terminal Expression
export class NumberExpression implements Expression {
  private number: number;

  constructor(number: number) {
    this.number = number;
  }

  interpret(): number {
    return this.number;
  }
}
