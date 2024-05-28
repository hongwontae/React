import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import FormPage, { formAction } from "./pages/FormPage";
import CounterPage from "./pages/CounterPage";
import GetBoardPage, { getBoardLoader } from "./pages/GetBoardPage";
import GetOne, { getOneLoader } from "./components/GetOne";
import BoardPage from "./pages/BoardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "form", element: <FormPage></FormPage>, action: formAction },
      { path: "board", element: <BoardPage></BoardPage> },
      { path: "counter", element: <CounterPage></CounterPage> },
      {
        path: "get",
        element: <GetBoardPage></GetBoardPage>,
        loader: getBoardLoader,
      },
      {
        path: "get/:getId",
        element: <GetOne></GetOne>,
        loader: getOneLoader,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
