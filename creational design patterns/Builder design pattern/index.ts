import { HouseDirector } from "./HouseDirector";
import { LargeHouseBuilder } from "./LargeHouseBuilder";
import { SmallHouseBuilder } from "./SmallHouseBuilder";

const smallBuilder = new SmallHouseBuilder();
const largeBuilder = new LargeHouseBuilder();
const director1 = new HouseDirector(smallBuilder);
director1.constructHouse();
const smallHouse = smallBuilder.getResult();
smallHouse.describeHouse();
const director2 = new HouseDirector(largeBuilder);
director2.constructHouse();
const largeHouse = largeBuilder.getResult();
largeHouse.describeHouse();
