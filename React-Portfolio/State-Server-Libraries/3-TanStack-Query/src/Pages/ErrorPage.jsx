import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/navigation/MainNavigation";
import { useErrorStore } from "../util/errorPageStateStore";
import ErrorButton from "../components/usage/ErrorButton";

function ErrorPage() {
  const error = useRouteError();

  const { errorMessageToggle, toggleErrorMessage } = useErrorStore();

  function errorToggleHandler() {
    toggleErrorMessage();
  }

  return (
    <>
      <MainNavigation></MainNavigation>
      <div className="">
        <h1 className="text-3xl mb-3">Error Page</h1>

        <p className="mb-5">상단 내비게이션을 이용해서 페이지를 벗어나주십시오</p>

        <ErrorButton onClick={errorToggleHandler}>
          Error-Message-Button (Developer)
        </ErrorButton>
        {errorMessageToggle.messageToggle && <p>{error && error.message}</p>}
      </div>
    </>
  );
}

export default ErrorPage;
