import { Book } from "./Book";
import { BookCollection } from "./BookCollection";

// Client code
const book1 = new Book("The Catcher in the Rye");
const book2 = new Book("To Kill a Mockingbird");
const book3 = new Book("1984");

const bookCollection = new BookCollection();
bookCollection.addBook(book1);
bookCollection.addBook(book2);
bookCollection.addBook(book3);

const iterator = bookCollection.createIterator();

while (iterator.hasNext()) {
    const book = iterator.next();
    console.log(book.getTitle());
}
