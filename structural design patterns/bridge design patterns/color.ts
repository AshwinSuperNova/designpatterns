export interface Color {
    getColor(): string;
  }
  
  export class Red implements Color {
    getColor(): string {
      return "red";
    }
  }
  
  export class Blue implements Color {
    getColor(): string {
      return "blue";
    }
  }
  
  export class Green implements Color {
    getColor(): string {
      return "green";
    }
  }
  