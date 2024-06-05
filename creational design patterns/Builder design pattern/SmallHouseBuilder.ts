import { House } from "./House";
import { HouseBuilder } from "./HouseBuilder";

export class SmallHouseBuilder implements HouseBuilder {
    private house: House;

    constructor() {
        this.house = new House();
    }

    buildWalls() {
        this.house.setWalls(4);
    }

    buildDoors() {
        this.house.setDoors(1);
    }

    buildWindows() {
        this.house.setWindows(1);
    }

    buildRoof() {
        this.house.setRoof("wooden roof");
    }

    buildSwimmingPool() {
        this.house.setSwimmingPool(false);
    }

    getResult() {
        return this.house;
    }
}
