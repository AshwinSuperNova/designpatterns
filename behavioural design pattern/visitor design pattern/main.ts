import { Elephant } from "./Elephant";
import { FeedingVisitor } from "./FeedingVisitor";
import { Lion } from "./Lion";
import { Monkey } from "./Monkey";

// Client code
const lion = new Lion();
const elephant = new Elephant();
const monkey = new Monkey();

const feedingVisitor = new FeedingVisitor();

lion.accept(feedingVisitor);
elephant.accept(feedingVisitor);
monkey.accept(feedingVisitor);
