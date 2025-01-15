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
// main.jsx
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

// inputState.jsx
import {atom, selector} from 'recoil'

export const inputState = atom({
    key : 'name-state',
    default : {
        name : null,
        age : null
    }
})

export const inputSelector = selector({
    key : 'name-length',
    get : ({get})=>{
        const text = get(inputState);
        return text.name.length
    }
})

export function initialRecoil({set}){
    set(inputState, {name : 'HWT', age : 20})
}
```
=> **[적용되는 Form.jsx](https://github.com/hongwontae/React/blob/main/React-State-Library/code/Recoil/src/components/Form.jsx)**

---

- **CSS Preivew(Tailwind)**
```javascript
// Header.jsx
import logo from '../assets/logo.png';
import Button from './Button';

export default function Header() {
  return (
    <header className='flex flex-col items-center mt-8 mb-8 md:mb-16'>
      <img src={logo} alt="A canvas" className='object-contain mb-8 w-44 h-44'/>
      <h1 className='text-xl md:text-4xl font-semibold tracking-wider text-center uppercase text-amber-800 font-title'>ReactArt</h1>
      <p>A community of artists and art-lovers.</p>
      <Button lClick={1+1} onClick="속성은 존재한다.">Button</Button>
    </header>
  );
}
```

---

- **React Library(React Router & React Query)**
```javascript
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

import { QueryClientProvider} from "@tanstack/react-query";

import Events from "./components/Events/Events.jsx";
import EventDetails from "./components/Events/EventDetails.jsx";
import NewEvent from "./components/Events/NewEvent.jsx";
import EditEvent from "./components/Events/EditEvent.jsx";

import {queryClient} from './components/util/http.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/events" />,
  },
  {
    path: "/events",
    element: <Events />,

    children: [
      {
        path: "/events/new",
        element: <NewEvent />,
      },
    ],
  },
  {
    path: "/events/:id",
    element: <EventDetails />,
    children: [
      {
        path: "/events/:id/edit",
        element: <EditEvent />,
      },
    ],
  },
]);


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
```

---

- **Test Preview(@Testing-library & Vitest)**
```javascript
import {render, screen} from '../../test-utils/test-util';
import NotPlayer from '../NotPlyaer';
import TestComponent from '../TestComponent';
import {userEvent} from '@testing-library/user-event';
test('tt', async ()=>{
    const user = userEvent.setup();
    render(<TestComponent/>);

    const onePriceElement = screen.getByRole('spinbutton', {name : 'oneP'})
    await user.clear(onePriceElement);
    await user.type(onePriceElement, '1')
    expect(onePriceElement).toHaveValue(1)

    const twoPriceElement = screen.getByRole('spinbutton', {name : 'twoP'});
    const totalPriceElement = screen.getByRole('term', {name : 'totalPrice'});
    await user.clear(twoPriceElement);
    await user.clear(onePriceElement);
    await user.type(twoPriceElement, '200');
    await user.type(onePriceElement, '100');

    expect(totalPriceElement).toHaveTextContent('300')
})

test('player not test', async ()=>{
    render(<NotPlayer></NotPlayer>)
    const players = await screen.findAllByRole('document');
})

