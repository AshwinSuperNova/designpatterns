import { House } from "./House";

export interface HouseBuilder {
    buildWalls(): void;
    buildDoors(): void;
    buildWindows(): void;
    buildRoof(): void;
    buildSwimmingPool(): void;
    getResult(): House;
}
