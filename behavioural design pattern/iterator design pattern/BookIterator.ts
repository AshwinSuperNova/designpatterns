import { Book } from "./Book";
import { Iterator } from "./Iterator";

// BookIterator class
export class BookIterator implements Iterator<Book> {
  private books: Book[];
  private position: number = 0;

  constructor(books: Book[]) {
    this.books = books;
  }

  public hasNext(): boolean {
    return this.position < this.books.length;
  }

  public next(): Book {
    return this.books[this.position++];
  }
}
