import { House } from "./House";
import { HouseBuilder } from "./HouseBuilder";

export class LargeHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    buildWalls() {
        this.house.setWalls(12);
    }

    buildDoors() {
        this.house.setDoors(5);
    }

    buildWindows() {
        this.house.setWindows(4);
    }

    buildRoof() {
        this.house.setRoof("concrete roof");
    }

    buildSwimmingPool() {
        this.house.setSwimmingPool(true);
    }

    getResult() {
        return this.house;
    }
}
