import { createRoot } from "react-dom/client";
import { RecoilRoot } from "recoil";
import "./index.css";
import App from "./App.jsx";

import { initialRecoil } from "./recoil-state/InputState.jsx";

createRoot(document.getElementById("root")).render(
  <>
    <RecoilRoot initializeState={initialRecoil}>
      <App />
    </RecoilRoot>

  </>
);
