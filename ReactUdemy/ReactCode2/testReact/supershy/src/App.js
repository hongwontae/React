import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";

import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import HomeDetail from "./pages/HomeDetail";


function App() {

  const queryClient = new QueryClient();

  const router = createBrowserRouter([
    {
      path : '/',
      element : <HomePage></HomePage>,
      children : [
        {
          path : '/detail',
          element : <HomeDetail></HomeDetail>
        }
      ]
    }
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
