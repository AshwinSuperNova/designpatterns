import { Memento } from "./memento";
import { Snapshot } from "./snapshot";

export class Editor {
  private text: string;

  constructor(private name: string) {
    this.text = "";
  }

  public makeSnapshot(): Memento {
    return new Snapshot(this.name, this.text);
  }

  public restore(memento: Memento): void {
    this.text = memento.getText();
  }

  public editText(newText: string): void {
    this.text = newText;
  }

  public displayText(): void {
    console.log(`Current Text: ${this.text}`);
  }
}
