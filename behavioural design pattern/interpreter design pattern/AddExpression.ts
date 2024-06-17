import { Expression } from "./Expression";

// Nonterminal Expression: Addition
export class AddExpression implements Expression {
  private left: Expression;
  private right: Expression;

  constructor(left: Expression, right: Expression) {
    this.left = left;
    this.right = right;
  }

  interpret(): number {
    return this.left.interpret() + this.right.interpret();
  }
}
