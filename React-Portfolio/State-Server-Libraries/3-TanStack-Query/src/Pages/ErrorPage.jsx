import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);

  return (
    <>
    <MainNavigation>

    </MainNavigation>
      <div className="">
        <h1 className="text-5xl mb-3">Error Page</h1>
        <p className="text-xl">{error && error.message}</p>
        <p>상단 내비게이션을 이용해서 페이지를 벗어나주십시오</p>
      </div>
    </>
  );
}

export default ErrorPage;
