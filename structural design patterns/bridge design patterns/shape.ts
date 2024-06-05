export interface Shape {
    getShape(): string;
  }
  
  export class Circle implements Shape {
    getShape(): string {
      return "circle";
    }
  }
  
  export class Square implements Shape {
    getShape(): string {
      return "square";
    }
  }
  
  export class Triangle implements Shape {
    getShape(): string {
      return "triangle";
    }
  }
  