import { Iterator } from "./Iterator";

// Aggregate interface
export interface Aggregate<T> {
  createIterator(): Iterator<T>;
}
