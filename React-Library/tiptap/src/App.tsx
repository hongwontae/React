import { EditorContent, useEditor } from "@tiptap/react";
import "./App.css";
import StarterKit from "@tiptap/starter-kit";
import { useState } from "react";

function App() {

  const [editorContent, setEditorContent] = useState('');

  const editor = useEditor({
    extensions: [StarterKit],
    content: `<p>환영합니다!</p>`,
    onUpdate : ({editor})=>{
      setEditorContent(editor.getHTML())
    }
  });

  console.log(editorContent)

  return (
    <>
      <div className="w-1/2 m-auto">
        <EditorContent
          className="text-center mt-10 break-all border-[1px] rounded-lg"
          editor={editor}
        ></EditorContent>
        <button
          onClick={() => editor?.chain().focus().toggleBold().run()}
          className={
            `${editor?.isActive("bold") ? "text-red-300" : ""}` +
            " border-[1px] rounded-lg p-2 mt-2"
          }
        >
          Bold
        </button>
        <button className=""></button>
      </div>
    </>
  );
}

export default App;
