import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import "./App.css";
import { useState } from "react";
import { Image } from "@tiptap/extension-image";

const customIage = Image.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: "50%",
        parseHTML: (element) => element.getAttribute("width"),
        renderHTML: (att) => {
          return {
            width: att.width,
          };
        },
      },
      style: {
        default: "",
        parseHTML: (element) => element.getAttribute("style"),
        renderHTML: (attributes) => {
          return attributes.style ? { style: attributes.style } : {};
        },
      },
    };
  },
});

// 이제 백엔드에서 파일 여러 개, 메인 content를 제대로 날릴 수 있다. => 제대로 받는거 확인
// 그럼 이제 content의 img와 file 객체을 비교하여 같은 걸 찾을 수 있어야 한다.
// 따로 저장되기 때문

function App() {
  const [images, setImages] = useState<{ file: File; url: string }[]>([]);
  const [editorHTML, setEditorHTML] = useState("");
  console.log(editorHTML);

  const editor = useEditor({
    extensions: [StarterKit, customIage],
    onUpdate: ({ editor }) => {
      setEditorHTML(editor.getHTML());
    },
  });

  function imageHandler(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (!file) {
      return;
    }
    const url = URL.createObjectURL(file);
    setImages((prev) => [...prev, { file, url }]);
    editor
      ?.chain()
      .focus()
      .setImage({
        src: url,
        style: "margin: auto; border-radius: 8px;",
        height: "100px",
      })
      .run();
    event.target.value = "";
  }

  async function submitHnadler() {
    const currentEditorData = editor?.getHTML();
    const copyImage = [...images];
    const usedImages = copyImage.filter((img) =>
      currentEditorData?.includes(img.url)
    );
    const sendFiles = usedImages.map((ele)=>{
      return ele.file
    })

    const formData = new FormData();
    sendFiles.forEach((ele)=>{
      formData.append("files", ele)
    })
    formData.append('content', editorHTML);
    // 보내는 것은 이미지 여러 개
    // html 형식의 컨텐츠 => 이 떄 img css는 불러와서 적용하면 되니까
    // 다만 위치 문제는 존재 editorHTML이 img 위치는 가지고 있다.
    // 이를 활용해야 할듯?

    const response = await fetch('http://localhost:8000/editor/save', {
      method : 'POST',
      body : formData
    });

    if(!response.ok){return}

    const resData = await response.json();

    console.log(resData);

  }

  return (
    <>
      <div>
        <EditorContent className="text-center" editor={editor}></EditorContent>
        <input type="file" accept="image/*" onChange={imageHandler}></input>
        <button onClick={submitHnadler} type="button">
          Submit
        </button>
      </div>
    </>
  );
}

export default App;
