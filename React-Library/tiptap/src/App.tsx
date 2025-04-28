import Image from "@tiptap/extension-image";
import { useEditor, EditorContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { useState } from "react";

function App() {
  const [editorContent, setEditorContent] = useState("");
  const [editorFileState, setEditorFileState] = useState([])

  const editor = useEditor({
    extensions: [StarterKit, Image],
    onUpdate: ({ editor }) => {
      const editorImgTags = Array.from(editor.view.dom.querySelectorAll('img'));
      const editorImgTagsUniqueId = editorImgTags.map(ele => ele.getAttribute('alt'));
      console.log(editorImgTagsUniqueId)
      setEditorContent(editor.getHTML());
    }
  });

  async function sendEditorContentHandler() {
    if (editorContent.length <= 10) {
      return;
    }

    const response = await fetch("http://localhost:8000/user/editor", {
      method: "POST",
      body: JSON.stringify({ editorContent }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const resData = await response.json();
    return resData;
  }

  function imageHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    const randomId = Math.random().toString()
    setEditorFileState((prev)=>[...prev, {file, uniqueId :randomId}])
    const url = URL.createObjectURL(file!);
    editor?.chain().focus().setImage({ src: url, alt : randomId }).run();
    event.target.value = '';
  }

  return (
    <>
      <div className="bg-gray-500 h-screen">
        <div className=" p-10">
          <EditorContent
            editor={editor}
            className="w-1/2 m-auto border-[1px] rounded-lg text-center"
          ></EditorContent>
          <button type="button" onClick={sendEditorContentHandler}>
            Submit
          </button>
          <div>
            <input type="file" accept="image/*" onChange={imageHandler}></input>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
