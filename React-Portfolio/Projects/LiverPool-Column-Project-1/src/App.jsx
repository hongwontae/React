/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "./util/query";
import Layout from "./components/layout/Layout";
import HomePage from "./page/homePage/HomePage";
import ErrorPage from "./page/errorPage/ErrorPage";
import PlayResultPage, {prLoader} from "./page/playResultPage/PlayResultPage";
import PlayResult, {resultOneLoader} from "./components/play-result/play-result-segment/PlayResult";
import PlayerRatingPage from './page/player-rating-page/PlayerRatingPage'
import PlayResultFormPage from "./page/play-result-form/PlayResultFormPage";
import {prAction} from './components/play-result-form/PlayResultForm'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {index: true, element: <HomePage></HomePage> },
        {path : '/play-result', element : <PlayResultPage></PlayResultPage>, loader : prLoader},
        {path : '/play-result/:id', element : <PlayResult></PlayResult>, loader : resultOneLoader},
        {path : '/player-rating', element : <PlayerRatingPage></PlayerRatingPage>},
        {path : '/play-result-form', element : <PlayResultFormPage></PlayResultFormPage>, action : prAction}
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
