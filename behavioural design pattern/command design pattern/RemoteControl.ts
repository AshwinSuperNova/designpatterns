import { Command } from "./Command";

// Invoker class
export class RemoteControl {
    private command: Command;

    public setCommand(command: Command): void {
        this.command = command;
    }

    public pressButton(): void {
        this.command.execute();
    }
}
