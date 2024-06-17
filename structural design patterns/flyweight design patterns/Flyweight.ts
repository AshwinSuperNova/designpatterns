// The Flyweight class stores the shared state (sharedState), which is common across multiple objects. It also accepts the unique state (uniqueState) via its operation method to handle specific object data.
export class Flyweight {
    private sharedState: string[];

    constructor(sharedState: string[]) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: string[]): void {
        console.log(`Flyweight: Displaying shared ${JSON.stringify(this.sharedState)} and unique ${JSON.stringify(uniqueState)} state.`);
    }
}

