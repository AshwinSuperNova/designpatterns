import { Editor } from "./editor";

const editor = new Editor("Document 1");

editor.editText("This is the initial text");
editor.displayText();

const snapshot1 = editor.makeSnapshot();

console.log(`Snapshot created for: ${snapshot1.getName()} at ${snapshot1.getSnapshotDate()}`);

editor.editText("Text after editing");
editor.displayText();

editor.restore(snapshot1);


console.log(`Restored to snapshot: ${snapshot1.getName()} at ${snapshot1.getSnapshotDate()}`);

editor.displayText();