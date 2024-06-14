import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./util/query";
import Layout from "./components/layout/Layout";
import HomePage from "./page/homePage/HomePage";
import ErrorPage from "./page/errorPage/ErrorPage";
import FormationPage from "./page/formationPage/FormationPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {index: true, element: <HomePage></HomePage> },
        {path : 'formation', element : <FormationPage></FormationPage>}
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
