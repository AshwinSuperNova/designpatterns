import { Memento } from "./memento";

export class Snapshot implements Memento {
  private date: Date;

  constructor(private name: string, private text: string) {
    this.date = new Date();
  }

  public getName(): string {
    return this.name;
  }

  public getSnapshotDate(): Date {
    return this.date;
  }

  public getText(): string {
    return this.text;
  }
}
