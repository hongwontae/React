import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function ErrorPage() {

    const error = useRouteError();
    console.log('error useRouteError')
    console.log(error)

    let title = 'An error occurred!'
    let message = 'Something went wrong!'

    if(error.status ===500){
        message = JSON.parse(error.data).message
    }

    if(error.status === 404){
        title = 'Not Found!'
        message = 'Could not find resource or page'
    }
    

  return <PageContent title={title}>
    <p>{message}</p>
  </PageContent>;
}

export default ErrorPage;
