# React Mastery Repository
React의 개념, State 라이브러리, React-Testing 등 전반을 마스터하기 위한 종합 자료 모음입니다.


## Project Structure
- **[React-Concepts](https://github.com/hongwontae/React/tree/main/React-Concepts)** : React에 대한 기본 개념과 심화 개념에 대한 설명
- **[React-State-Library](https://github.com/hongwontae/React/tree/main/React-State-Library)** : React 상태 관리 라이브러리에 대한 코드와 설명
- **[React-Summary-Pratice](https://github.com/hongwontae/React/tree/main/React-Summary-Pratice)** : 배운 React 기술을 사용하고 연습한 코드와 설명
- **[React-Testing](https://github.com/hongwontae/React/tree/main/React-Testing)** : Vitest와 @Testing-React를 통한 테스트 코드와 설명
- **[React-Udemy](https://github.com/hongwontae/React/tree/main/React-Udemy)** : Udemy에서 학습한 내용에 대한 코드와 설명



## Skill
- **State**

&nbsp;&nbsp;&nbsp;![Badge](https://img.shields.io/badge/State-61DAFB.svg?&logo=React&logoColor=fff)
![Badge](https://img.shields.io/badge/Context%20API-61DAFB.svg?&logo=React&logoColor=fff)
![Badge](https://img.shields.io/badge/Jotai-61DAFB.svg?&logo=React&logoColor=fff)
![Badge](https://img.shields.io/badge/Zustand-61DAFB.svg?&logo=React&logoColor=fff)
![Badge](https://img.shields.io/badge/Recoil-3578E5.svg?&logo=Recoil&logoColor=fff)
![Badge](https://img.shields.io/badge/Redux-764ABC.svg?&logo=Redux&logoColor=fff)

- **CSS**

&nbsp;&nbsp;&nbsp;![Badge](https://img.shields.io/badge/CSS%20Modules-000000.svg?&logo=CSS%20Modules&logoColor=fff)
![Badge](https://img.shields.io/badge/Tawilwind-06B6D4.svg?&logo=Tailwind%20CSS&logoColor=fff) 
![Badge](https://img.shields.io/badge/styled-components-DB7093.svg?&logo=styled-components&logoColor=fff)

- **React Library**

&nbsp;&nbsp;&nbsp;![Badge](https://img.shields.io/badge/React%20Router-CA4245.svg?&logo=React%20Router&logoColor=fff)
![Badge](https://img.shields.io/badge/React%20Query-FF4154.svg?&logo=React%20Query&logoColor=fff)
![Badge](https://img.shields.io/badge/Axios-5A29E4.svg?&logo=Axios&logoColor=fff)
![Badge](https://img.shields.io/badge/Framer-0055FF.svg?&logo=Framer&logoColor=fff)

- **React Testing**

&nbsp;&nbsp;&nbsp;![Badge](https://img.shields.io/badge/Testing%20Library-E33332.svg?&logo=Testing%20Library&logoColor=fff)
![Badge](https://img.shields.io/badge/Jest-C21325.svg?&logo=Jest&logoColor=fff)
![Badge](https://img.shields.io/badge/Vitest-6E9F18.svg?&logo=Vitest&logoColor=fff)


## Preview

- **State Preview(Recoil)**
```javascript
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