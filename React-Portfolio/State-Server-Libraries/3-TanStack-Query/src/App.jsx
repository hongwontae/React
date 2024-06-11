import "./App.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import LayoutPage from "./Pages/LayoutPage";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./util/http";
import PlayerPage from "./Pages/PlayerPage";
import HistoryPage from "./Pages/HistoryPage";
import PlayerEvaluation from "./Pages/PlayerEvaluation";
import MatchDescription from "./Pages/MatchDescription";
import TestPage, {} from "./Pages/TestPage";
import ErrorPage from "./Pages/ErrorPage";
import TestGetPage from "./Pages/TestGetPage";
import HistoryForm from "./Pages/HistoryForm";

const route = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPage></LayoutPage>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      { index: true, element: <HomePage></HomePage> },
      { path: "player", element: <PlayerPage></PlayerPage> },
      { path: "history", element: <HistoryPage></HistoryPage> },
      { path: "pEvaluation", element: <PlayerEvaluation></PlayerEvaluation> },
      { path: "match", element: <MatchDescription></MatchDescription> },
      { path: "test", element: <TestPage></TestPage> },
      {path : 'testGet', element : <TestGetPage></TestGetPage>},
      {path : 'historyForm', element : <HistoryForm></HistoryForm>}
    ],
  },
]);

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route}></RouterProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
