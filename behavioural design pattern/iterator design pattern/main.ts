import { WordsCollection } from "./words-collection";

const collection = new WordsCollection();
collection.addItem("Apple");
collection.addItem("Banana");
collection.addItem("Cherry");

const iterator = collection.getIterator();

console.log("Straight traversal:");
while (iterator.valid()) {
  console.log(iterator.next());
}

console.log("");
console.log("Reverse traversal:");
const reverseIterator = collection.getReverseIterator();
while (reverseIterator.valid()) {
  console.log(reverseIterator.next());
}
