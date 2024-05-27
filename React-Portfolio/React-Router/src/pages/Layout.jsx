import {Outlet} from 'react-router-dom';

import MainNavigation from "../reuse/MainNavigation";

function Layout(){

    return(
        <>
            <MainNavigation></MainNavigation>
            <Outlet></Outlet>
        </>
    )
}

export default Layout;