import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./util/query";
import Layout from "./components/layout/Layout";
import TestPage1 from "./page/test/TestPage1";
import HomePage from "./page/homePage/HomePage";
import ErrorPage from './page/errorPage/ErrorPage'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement : <ErrorPage></ErrorPage>,
      children: [
        { index: true, element: <HomePage></HomePage> },
        { path: "test", element: <TestPage1></TestPage1> },
      ],
    },
  ]);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
