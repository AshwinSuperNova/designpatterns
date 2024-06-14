import { Animal } from "./animal";

export class Sheep implements Animal {
    constructor(private _name: string = '') {}

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    makeCopy(): Animal {
        return new Sheep(this._name);
    }

    description() {
        console.log(`This is ${this._name}`);
    }
}