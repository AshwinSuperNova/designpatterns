import { AddExpression } from "./AddExpression";
import { Expression } from "./Expression";
import { NumberExpression } from "./NumberExpression";
import { SubtractExpression } from "./SubtractExpression";

// Client code
export function parseExpression(expression: string): Expression {
  const tokens = expression.split(' ');
  const stack: Expression[] = [];
  const operators: string[] = [];

  function precedence(op: string): number {
      if (op === '+' || op === '-') return 1;
      return 0;
  }

  function applyOperator(op: string, right: Expression, left: Expression): Expression {
      switch (op) {
          case '+': return new AddExpression(left, right);
          case '-': return new SubtractExpression(left, right);
      }
  }

  for (const token of tokens) {
      if (!isNaN(parseInt(token))) {
          stack.push(new NumberExpression(parseInt(token)));
      } else {
          while (operators.length && precedence(operators[operators.length - 1]) >= precedence(token)) {
              const op = operators.pop();
              const right = stack.pop();
              const left = stack.pop();
              stack.push(applyOperator(op, right, left));
          }
          operators.push(token);
      }
  }

  while (operators.length) {
      const op = operators.pop();
      const right = stack.pop();
      const left = stack.pop();
      stack.push(applyOperator(op, right, left));
  }

  return stack.pop();
}