import { HouseBuilder } from "./HouseBuilder";

export class HouseDirector {
    private builder: HouseBuilder;

    constructor(builder: HouseBuilder) {
        this.builder = builder;
    }

    constructHouse() {
        this.builder.buildWalls();
        this.builder.buildDoors();
        this.builder.buildWindows();
        this.builder.buildRoof();
        this.builder.buildSwimmingPool();
    }
}
