
export class House {
    private walls: number;
    private doors: number;
    private windows: number;
    private roof: string;
    private swimmingPool: boolean;

    setWalls(walls: number) {
        this.walls = walls;
    }

    setDoors(doors: number) {
        this.doors = doors;
    }

    setWindows(windows: number) {
        this.windows = windows;
    }

    setRoof(roof: string) {
        this.roof = roof;
    }

    setSwimmingPool(swimmingPool: boolean) {
        this.swimmingPool = swimmingPool;
    }

    describeHouse() {
        console.log("House description:");
        console.log("Walls: ", this.walls);
        console.log("Doors: ", this.doors);
        console.log("Windows: ", this.windows);
        console.log("Roof: ", this.roof);
        console.log("Swimming pool: ", this.swimmingPool);
    }
}
