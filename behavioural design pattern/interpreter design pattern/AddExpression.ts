import { Expression } from "./Expression";

// AddExpression class (Non-terminal Expression)
export class AddExpression implements Expression {
  private leftExpression: Expression;
  private rightExpression: Expression;

  constructor(left: Expression, right: Expression) {
      this.leftExpression = left;
      this.rightExpression = right;
  }

  public interpret(): number {
      return this.leftExpression.interpret() + this.rightExpression.interpret();
  }
}