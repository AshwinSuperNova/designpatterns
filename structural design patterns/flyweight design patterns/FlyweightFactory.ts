import { Flyweight } from "./Flyweight";

export class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = {};

    private getKey(state: string[]): string {
        return state.join('_');
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const key = this.getKey(sharedState);

        if (!(key in this.flyweights)) {
            console.log('Creating new flyweight.');
            this.flyweights[key] = new Flyweight(sharedState);
        } else {
            console.log('Reusing existing flyweight.');
        }

        return this.flyweights[key];
    }

    public listFlyweights(): void {
        const count = Object.keys(this.flyweights).length;
        console.log(`FlyweightFactory: I have ${count} flyweights:`);
        for (const key in this.flyweights) {
            console.log(key);
        }
    }
}
