import { EditorContent, useEditor } from "@tiptap/react";
import "./App.css";
import StarterKit from "@tiptap/starter-kit";
import {  useState } from "react";
import Image from '@tiptap/extension-image';

const CustomImage = Image.extend({
  addAttributes(){
    return {
      ...this.parent?.(),
      width : {
        default : '100px',
        parseHTML : element => element.getAttribute('width'),
        renderHTML : attribute => {
          return {
            width : attribute.width
          }
        }
      },
      height : {
        default : 'auto',
        parseHTML : element => element.getAttribute('height'),
        renderHTML : attributes =>{
          return {
            height : attributes.height
          }
        }
      },
      style : {
        default : 'margin-left : auto; margin-right : auto;',
        parseHTML : element => element.getAttribute('style'),
        renderHTML : att =>{
          return {
            style : att.style
          }
        }
      }
    }
  },
  
})


function App() {

  const [editorContent, setEditorContent] = useState('');
  const [image, setImage] = useState<File[]>([]);

  const editor = useEditor({
    extensions: [StarterKit, CustomImage],
    content: `<p>환영합니다!</p>`,
    onUpdate : ({editor})=>{
      setEditorContent(editor.getHTML())
    },
    editorProps : {
      attributes : {
        class : 'tiptap-editor'
      }
    }
  });

  function insertImage(){
   const input = document.createElement('input');
   input.type = 'file';
   input.accept = 'image/*';

   input.onchange = (e : Event)=>{
      const target = e.target as HTMLInputElement;
      const file = target.files?.[0]
      if(!file){
        return
      }
      setImage((prev)=>[...prev, file])
      const previewURL = URL.createObjectURL(file);
      editor?.chain().focus().setImage({src : previewURL}).insertContent('<p></p>').run();
   } 

   input.click();
  }


  console.log(editorContent)

  return (
    <>
      <div className="w-1/2 m-auto p-3 tiptap-editor">
        <EditorContent
          className="text-center mt-10 break-all rounded-lg border-[1px] p-3"
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
        <button className="" onClick={insertImage}>Insert Image</button>
      </div>
    </>
  );
}

export default App;
