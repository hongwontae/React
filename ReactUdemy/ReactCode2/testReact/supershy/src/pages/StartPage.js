import { Outlet } from "react-router-dom";
import MainNavigation from './MainNavigation'

function StartPage(){


    return(
        <>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>
        </>
    )

}

export default StartPage;