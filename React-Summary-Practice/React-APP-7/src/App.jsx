/* eslint-disable no-unused-vars */
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Products from "./pages/Products";
import RootLayout from "./components/RootLayout";
import ErrorPage from "./pages/ErrorPage";
import ProductDetail from "./pages/ProductDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    errorElement : <ErrorPage></ErrorPage>,
    children: [
      {
        index : true,
        element: <HomePage></HomePage>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path : "/products/:productId",
        element : <ProductDetail></ProductDetail>
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
