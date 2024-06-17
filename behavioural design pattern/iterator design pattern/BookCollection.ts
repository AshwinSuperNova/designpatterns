import { Aggregate } from "./Aggregate";
import { Book } from "./Book";
import { BookIterator } from "./BookIterator";
import { Iterator } from "./Iterator";

// BookCollection class
export class BookCollection implements Aggregate<Book> {
  private books: Book[] = [];

  public addBook(book: Book): void {
    this.books.push(book);
  }

  public createIterator(): Iterator<Book> {
    return new BookIterator(this.books);
  }
}
