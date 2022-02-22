import { basicSetup, EditorState, EditorView } from '@codemirror/basic-setup';
import {javascript} from "@codemirror/lang-javascript"

let editor = new EditorView({
  state: EditorState.create({
    extensions: [basicSetup, javascript()]
  }),
  parent: document.body
})

let taskNumber = 0;
const taskNames = ["taskOneText", "taskTwoText", "taskThreeText", "taskFourText", "taskFiveText"];

//var editor = CodeMirror.fromTextArea(document.getElementById(taskNames[taskNumber]), {
//    lineNumbers: true,
 //   mode: "text/x-java"
  //  }
//);
