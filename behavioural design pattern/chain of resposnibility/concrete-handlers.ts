import { AbstractHandler } from "./abstract-handler";

export class MonkeyHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === "Banana") {
            return `Monkey: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

export class SquirrelHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === "Nut") {
            return `Squirrel: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}

export class DogHandler extends AbstractHandler {
    public handle(request: string): string {
        if (request === "MeatBall") {
            return `Dog: I'll eat the ${request}.`;
        }
        return super.handle(request);
    }
}
