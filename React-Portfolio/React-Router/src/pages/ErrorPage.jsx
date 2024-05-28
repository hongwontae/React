import MainNavigation from "../reuse/MainNavigation";
import {useRouteError} from 'react-router-dom'

function ErrorPage(){

    const error = useRouteError();
    console.log(error)

    return(
        <>
        <MainNavigation></MainNavigation>
            <p>{`${error.data.message} and status => ${error.status}`}</p>
            {error.statusText && <p>${`statusText => ${error.statusText}`}</p>}
            <p>This is ErrorPage..</p>
            <p>Something wrong!</p>
        </>
    )
}

export default ErrorPage;