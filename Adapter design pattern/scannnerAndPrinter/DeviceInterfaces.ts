
export interface Printer {
    print(document: string): void;
  }
  
  export interface Scanner {
    scan(): string;
  }