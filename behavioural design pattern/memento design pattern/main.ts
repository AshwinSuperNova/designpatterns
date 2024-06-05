import { Editor } from "./editor";

const editor = new Editor("Document 1");

editor.editText("This is the initial text");
editor.displayText();

const snapshot1 = editor.makeSnapshot();

editor.editText("Text after editing");
editor.displayText();

editor.restore(snapshot1);
editor.displayText();
