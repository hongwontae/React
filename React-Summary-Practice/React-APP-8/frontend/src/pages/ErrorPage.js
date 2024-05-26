import PageContent from "../components/PageContent";
import MainNavigation from '../components/MainNavigation'

import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();

  let title = "An error Occurred";
  let message = "Something wnet wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found";
    message = "Could not find resource or page";
  }

  return (
    <>
    <MainNavigation></MainNavigation>
      <PageContent title={title}>
        <p>{message}</p>
      </PageContent>
    </>
  );
}
export default ErrorPage;
