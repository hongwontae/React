import { Outlet } from "react-router-dom";
import MainNavigation from "./MainNavigaion";

function HomePage(){


    return (
        <>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>
        </>
    )
}

export default HomePage;