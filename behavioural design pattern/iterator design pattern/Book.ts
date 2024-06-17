// Book class
export class Book {
  private title: string;

  constructor(title: string) {
    this.title = title;
  }

  public getTitle(): string {
    return this.title;
  }
}