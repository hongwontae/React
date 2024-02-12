import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartPage from "./pages/StartPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage"
import DataExpress, {loader as expressLoader} from "./pages/DataExpress";
import DetailsInfo, {loader as infoLoader} from "./pages/DetailsInfo";

function App() {

  const router = createBrowserRouter([{
    path : '/',
    element : <StartPage></StartPage>,
    errorElement : <ErrorPage></ErrorPage>,
    id : 'dataId',
    loader : expressLoader,
    children : [
      {
        path : 'home',
        element : <HomePage></HomePage>,
        children : [
          {
            path : 'lazy',
            element : <p>This is homeLazy</p>
          }
        ]
      },
      {
        path : 'dataExpress',
        element : <DataExpress></DataExpress>
       
      },{
        path : 'dataExpress/:dataId',
        element : <DetailsInfo></DetailsInfo>,
        loader : infoLoader
      }, 
      
    ]
  }]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
