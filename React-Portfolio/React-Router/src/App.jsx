import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import ErrorPage from "./pages/ErrorPage";
import FormPage from "./pages/FormPage";
import CounterPage from "./pages/CounterPage";
import GetBoardPage, { getBoardLoader } from "./pages/GetBoardPage";
import GetOne from "./components/GetOne";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "form", element: <FormPage></FormPage> },
      { path: "counter", element: <CounterPage></CounterPage> },
      {
        path: "get",
        element: <GetBoardPage></GetBoardPage>,
        loader: getBoardLoader,
      },
      {
        path : 'get/:getId',
        element : <GetOne></GetOne>
      }
      
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
