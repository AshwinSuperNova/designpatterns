
// Context class
import { Expression } from "./Expression";
export class InterpreterContext {
  private expression: Expression;

  constructor(expression: Expression) {
      this.expression = expression;
  }

  public interpret(): number {
      return this.expression.interpret();
  }
}