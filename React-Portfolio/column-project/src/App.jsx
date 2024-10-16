/* eslint-disable no-unused-vars */
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./components/layout/Layout";
import HomePage, { loader as homeLoader } from "./page/homePage/HomePage";
import ErrorPage from "./page/errorPage/ErrorPage";
import PlayResultPage, { prLoader } from "./page/playResultPage/PlayResultPage";
import PlayResult, {
  resultOneLoader,
} from "./components/play-result/play-result-segment/PlayResult";
import PlayerRatingPage, {
  pRatLoader,
} from "./page/player-rating-page/PlayerRatingPage";
import PlayResultFormPage, {
  loader as resultFormLoader,
} from "./page/play-result-form/PlayResultFormPage";
import { prAction } from "./components/play-result-form/PlayResultForm";
import LoginPage from "./page/LoginPage/LoginPage";
import { loginAction } from "./components/login/LoginForm";
import PageContextProvider from "./context/PageContext";
import RatingContextProvier from "./context/RatingContext";
import ModifierPage, {
  action as modiAction,
  loader as modiLoader,
} from "./page/modifierPage/ModifierPage";
import PlayerRatingFormPage, {
  loader as prfLoader,
  action as prfAction,
} from "./page/player-rating-form/PlayerRatingFormPage";
import PlayerRatingResult, {loader as prrLoader} from "./components/player-rating/PlayerRatingResult";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        { index: true, element: <HomePage></HomePage>, loader: homeLoader },
        {
          path: "/play-result",
          element: <PlayResultPage></PlayResultPage>,
          loader: prLoader,
        },
        {
          path: "/play-result/:id",
          element: <PlayResult></PlayResult>,
          loader: resultOneLoader,
        },
        {
          path: "/play-result-form",
          element: <PlayResultFormPage></PlayResultFormPage>,
          action: prAction,
          loader: resultFormLoader,
        },
        {
          path: "/modifier/:id",
          element: <ModifierPage></ModifierPage>,
          action: modiAction,
          loader: modiLoader,
        },
        {
          path: "/player-rating",
          element: <PlayerRatingPage></PlayerRatingPage>,
          loader: pRatLoader,
        },
        {
          path : '/player-rating/result/:date',
          element : <PlayerRatingResult></PlayerRatingResult>,
          loader : prrLoader
        },
        {
          path: "/player-rating/form",
          element: <PlayerRatingFormPage></PlayerRatingFormPage>,
          loader: prfLoader,
          action: prfAction,
          shouldRevalidate: ({ formAction, formMethod }) => {
            if (formMethod === "post" && formAction === "/player-rating/form") {
              return false;
            } else {
              return true;
            }
          },
        },

        {
          path: "/login",
          element: <LoginPage></LoginPage>,
          action: loginAction,
        },
      ],
    },
  ]);

  return (
    <>
      <PageContextProvider>
        <RatingContextProvier>
          <RouterProvider router={router}></RouterProvider>
        </RatingContextProvier>
      </PageContextProvider>
    </>
  );
}

export default App;
