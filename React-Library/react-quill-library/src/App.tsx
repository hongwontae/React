import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // 스타일도 꼭 import 해줘야 합니다.

const App = () => {
  const [value, setValue] = useState("");

  return (
    <>
      <div>Hello-world</div>
    </>
  );
};

export default App;
