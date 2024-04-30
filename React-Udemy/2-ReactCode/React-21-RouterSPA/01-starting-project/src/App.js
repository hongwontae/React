import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Root from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetail";

// const routerDefine = createRoutesFromElements(
//   <Route>
//     <Route path="/" element={<Home></Home>}></Route>
//     <Route path="/products" element={<Product></Product>}></Route>
//   </Route>
// )

// const router2 = createBrowserRouter(routerDefine)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "/products",
        element: <Product></Product>,
      },
      {
        path: "/products/:productId",
        element: <ProductDetailPage></ProductDetailPage>,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
